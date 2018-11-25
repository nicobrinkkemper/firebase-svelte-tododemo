import App from './App.html';
import constants from "firebase-svelte-tododemo-constants"

const app = new App({
	target: document.querySelector('.todoapp'),
	data: {
		name: 'todoapp',
		...constants
	}
});

export default app;