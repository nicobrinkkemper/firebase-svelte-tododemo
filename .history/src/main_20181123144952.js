import App from './App.html';
import {PRIORITY} from "constants";

const app = new App({
	target: document.querySelector('.todoapp'),
	data: {
		name: 'world',
	}
});

export default app;