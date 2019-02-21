const dbgVue = new Vue({ //* For the debug page
	el: '#debugVue',
	data: {
		bt: 'init',
		scan: 'init',
		db: 'init',
		id: '',
		debug: '',
		devices: [],
		authenticated: true
	}
});

const preVue = new Vue({ //* For the presences page
	el: '#presencesVue',
	data: {
		presences: [],
		authenticated: true
	}
});

const authVue = new Vue({ //* For the auth page
	el: '#authVue',
	data: {
		user: {},
		authenticated: true
	}
});

const stdVue = new Vue({ //* For the std page
	el: '#stdVue',
	data: {
		authenticated: true
	}
});

const bleVue = new Vue({ //* For the presences page
	el: '#bleVue',
	data: {
		authenticated: true,
		devices: []
	}
});
