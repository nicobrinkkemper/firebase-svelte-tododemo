import { Store } from 'svelte/store.js';
import stringHash from 'string-hash'
class FirebaseStore extends Store {
    addTodo(_todo) {
		const todo = {
            ..._todo,
			id: stringHash(todo.text),
			completed: false
		};

		const todos = this.get().todos.concat(todo);
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

export const Store = new FirebaseStore({
    todos: [],
    profile: {}
});

export default connect = ()=>{
    
}