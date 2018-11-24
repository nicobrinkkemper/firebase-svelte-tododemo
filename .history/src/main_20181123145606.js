import App from './App.html';
import * as constants from "constants";

const app = new App({
	target: document.querySelector('.todoapp'),
	data: {
		constants
	}
});

export default app;