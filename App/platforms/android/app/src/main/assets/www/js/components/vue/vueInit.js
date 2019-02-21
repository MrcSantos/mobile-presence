const gui = new Vue({ //* For the debug page
	el: '#debugVue',
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
	el: '#presencesVue',
	data: {
		presences: []
	}
});

const authVue = new Vue({ //* For the presences page
	el: '#authVue',
	data: {
		user: {},
		authenticated: false
	}
});
