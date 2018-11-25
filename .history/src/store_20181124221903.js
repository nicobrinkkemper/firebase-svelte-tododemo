import { Store } from 'firebase-svelte';
import stringHash from 'string-hash'

class TodoDemoStore extends Store {
    addTodo(_todo) {
		const todo = {
            ..._todo,
			id: stringHash(_todo.text),
			completed: false
		};

		const todos = this.get().todos;
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