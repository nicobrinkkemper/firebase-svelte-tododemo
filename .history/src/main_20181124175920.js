import App from './App.html';
import constants from "firebase-svelte-tododemo-constants"

const app = new App({
	target: document.querySelector('.todoapp'),
	data: {
		name: 'todoapp',
		store: Store,
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