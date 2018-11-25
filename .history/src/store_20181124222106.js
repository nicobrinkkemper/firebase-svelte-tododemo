import { Store } from 'firebase-svelte';
import stringHash from 'string-hash'

class TodoDemoStore extends Store {
    addTodo(todo) {
        const id = stringHash(_todo.text)
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
        const todos = this.get().todos.map(todo => {
            if (todo.id === id) {
                return {
                    id,
                    completed: !todo.completed,
                    description: todo.description
                };
            }

            return todo;
        });

        this.set({ todos });
    }
}
export default new TodoDemoStore();