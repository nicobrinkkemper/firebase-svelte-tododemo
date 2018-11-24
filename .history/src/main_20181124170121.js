import App from './App.html';
import constants from "constants"
// import { Store } from "firebase-svelte"
import { Store } from 'svelte/store.js';

const app = new App({
	target: document.querySelector('.todoapp'),
	data: {
		name: 'todoapp',
		uid: 1,
		todo: { text: '', datetime: new Date(), priority: 0 },
		todos: [],
		
		flatpickrOptions: {
			enableTime: true,
			defaultDate: new Date(),
			time_24hr: true,
			minDate: new Date(),
			onChange(selectedDates, dateStr, instance) {
				console.log("Options onChange handler");
			}
		},
		...constants
	}
});

export default app;