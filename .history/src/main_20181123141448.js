import App from './App.html';

const app = new App({
	target: document.querySelector('.todoapp'),
	data: {
		name: 'world',
		PRIORITY: [
			'Noteworthy',
			'Significant',
			'Important'
		]
	}
});

export default app;