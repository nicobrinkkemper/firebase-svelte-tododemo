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
        
    }
}
export default new TodoDemoStore();