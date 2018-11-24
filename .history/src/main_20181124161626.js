import App from './App.html';
import constants from "firebase-svelte-constants"

const app = new App({
	target: document.querySelector('.todoapp'),
	data: {
		name: 'todoapp',
		uid: 1,
		todo: { text: '', datetime: new Date(), priority: 0 },
		todos: [],
		flatpickerOptions: {
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