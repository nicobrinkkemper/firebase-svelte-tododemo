import App from './App.html';
import constants from "firebase-svelte-tododemo-constants"

const app = new App({
	target: document.querySelector('.todoapp'),
	data: {
		name: 'todoapp',
		todo: {
			text: '',
			datetime: new Date(),
			priority: 0
		}
		...constants
	}
});

export default app;