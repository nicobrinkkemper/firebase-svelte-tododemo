import App from './App.html';
import constants from "constants";
 // uhm 

const app = new App({
	target: document.querySelector('.todoapp'),
	data: {
		constants: constants
	}
});

export default app;