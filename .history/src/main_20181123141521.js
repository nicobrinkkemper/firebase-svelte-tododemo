import App from './App.html';

const app = new App({
	target: document.querySelector('.todoapp'),
	data: {
		name: 'world',
		todo: {
			text:"",
			datetime: new Date(),
			priority: 0
		},
		PRIORITY: [
			'Noteworthy',
			'Significant',
			'Important'
		]
	}
});

export default app;