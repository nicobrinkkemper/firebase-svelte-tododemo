import App from './App.html';
import firebaseSvelteConstants from "firebase-svelte-constants"

const app = new App({
	target: document.querySelector('.todoapp'),
	data: {
		name: 'todoapp',
		uid: 1,
	}
});

export default app;