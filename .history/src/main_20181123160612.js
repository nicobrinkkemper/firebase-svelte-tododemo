import App from './App.html';
 // uhm 

const app = new App({
	target: document.querySelector('.todoapp'),
	data: {
		name: 'todoapp',
		constants: constants
	}
});

export default app;