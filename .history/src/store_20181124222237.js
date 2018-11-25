import { Store } from 'firebase-svelte';
import stringHash from 'string-hash'

class TodoDemoStore extends Store {
    addTodo(todo) {
        const id = stringHash(todo.text)
        const todos = {
            ...this.get().todos,
            [id]: {
                ...todo,
                id,
                completed: false
            }
        };
        this.set({ todos });
    }

    toggleTodo(id) {
        const todo = this.get().todos[id]
        const todos = {
            ...this.get().todos,
            [id]: {
                ...todo,
                completed: !todo.completed
            }
        };
        this.set({ todos });
    }
}
export default new TodoDemoStore();