import { Store } from 'svelte/store.js';

class FirebaseStore extends Store {
    addTodo(description) {
		const todo = {
			id: generateUniqueId(),
			done: false,
			description
		};

		const todos = this.get().todos.concat(todo);
		this.set({ todos });
	}

	toggleTodo(id) {
		const todos = this.get().todos.map(todo => {
			if (todo.id === id) {
				return {
					id,
					done: !todo.done,
					description: todo.description
				};
			}

			return todo;
		});

		this.set({ todos });
	}
}

export const store = new FirebaseStore({
    todos: [],
    profile: {}
});

export default connect = ()=>{
    
}