import App from './App.html';
import constants from "firebase-svelte-constants"

import "flatpickr/dist/flatpickr.css";
import "flatpickr/dist/themes/light.css";
const app = new App({
	target: document.querySelector('.todoapp'),
	data: {
		name: 'todoapp',
		uid: 1,
		...constants
	}
});

export default app;