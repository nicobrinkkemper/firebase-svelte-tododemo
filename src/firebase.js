import constants from 'firebase-svelte-tododemo-constants'
import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';
import { format } from 'date-fns';
import { collectionData } from 'rxfire/firestore';
import Store from "./store";
import { authState } from 'rxfire/auth';
import { filter, switchMap, tap, takeUntil, repeat } from 'rxjs/operators';
import { isTodo, warn, selectTodos } from './selectors';

var provider = new firebase.auth.GoogleAuthProvider();
export const app = firebase.apps[0] || firebase.initializeApp(constants.FIREBASE_CONFIG);
export const db = firebase.firestore();
const settings = { timestampsInSnapshots: true };
db.settings(settings);
export const login = () => firebase.auth().signInWithPopup(provider)
export const logout = () => {
    Store.set({ user: null, todos: {} })
    return firebase.auth().signOut()
}
export const uid = () => currentUser().uid
export const currentUser = () => firebase.auth().currentUser
export const todoCollection = (_uid) => db.collection(`users`)
    .doc(_uid || uid())
    .collection('todos')
export function listTodos({ uid }) {
    return collectionData(
        todoCollection(uid),
        'id'
    ).pipe(
        takeUntil(authState(app.auth()).pipe(filter(u => u === null)))
    )
}

export function safeTodo(todo) {
    return {
        text: todo.text.substr(0, 100),
        datetime: format(todo.datetime),
        priority: todo.priority,
        ...todo.hasOwnProperty('completed') ? { completed: todo.completed } : {}
    }
}

export function addTodo(todo) {
    const id = Store.addTodo(todo)
    if (currentUser() === null) return;
    return todoCollection()
        .doc(id.toString())
        .set(safeTodo(todo))
}

export function toggleTodo(id) {
    const todo = Store.toggleTodo(id)
    if (currentUser() === null) return;
    return todoCollection()
        .doc(id.toString())
        .set(safeTodo(todo))
}

authState(app.auth())
    .pipe(
        filter(u => u !== null),
        tap(console.log)
    ).subscribe(user => {
        selectTodos(Store.get()).forEach(
            todo => todoCollection()
                .doc(todo.id.toString())
                .set(safeTodo(todo))
        )
        Store.setUser(user)
    });

authState(app.auth())
    .pipe(
        filter(u => u !== null),
        switchMap(listTodos),
    ).subscribe(todos => {
        console.log('firebase push', { todos })
        todos.forEach(todo => Store.addTodo(todo))
    });

export default app;