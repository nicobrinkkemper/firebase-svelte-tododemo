import App from './App.html';

const app = new App({
	target: document.querySelector('.todoapp'),
	data: {
		name: 'world',
	}
});

export default app;