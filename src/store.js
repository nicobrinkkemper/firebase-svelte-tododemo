import { Store as SvelteStore } from 'svelte/store.js';
import stringHash from 'string-hash'

class TodoDemoStore extends SvelteStore {
    setUser(user) {
        return this.set({ user })
    }
    getUser() {
        return this.get().user
    }
    setTodos(todos) {
        return this.set({ todos })
    }
    getTodos() {
        return this.get().todos
    }
    getTodo(id) {
        return this.get().todos[id]
    }
    addTodo(todo) {
        const id = stringHash(todo.text)
        this.setTodos({
            ...this.getTodos(),
            [id]: {
                ...todo,
                id,
                completed: !!todo.completed
            }
        });
        return id;
    }

    toggleTodo(id) {
        const toggledTodo = {
            ...this.getTodo(id),
            completed: !this.getTodo(id).completed
        }
        this.setTodos({
            ...this.getTodos(),
            [id]: toggledTodo
        });
        return toggledTodo;
    }
}

export const Store = new TodoDemoStore({ todos: {}, user: null });



export default Store