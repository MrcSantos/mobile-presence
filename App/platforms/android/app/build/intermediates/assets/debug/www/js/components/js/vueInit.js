const gui = new Vue({ //* For the debug page
	el: '#gui',
	data: {
		bt: 'init',
		scan: 'init',
		db: 'init',
		id: '',
		debug: '',
		devices: []
	}
});

const pre = new Vue({ //* For the presences page
	el: '#presences',
	data: {
		presences: []
	}
});
