import App from './App.html';
import constants from "constants"
 // uhm 

const app = new App({
	target: document.querySelector('.todoapp'),
	data: {
		name: 'todoapp',
		uid: 1,
		constants: constants
	}
});

export default app;