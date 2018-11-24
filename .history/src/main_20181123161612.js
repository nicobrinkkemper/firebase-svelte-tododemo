import App from './App.html';
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