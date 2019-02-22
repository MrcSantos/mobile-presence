function authenticateUser() {
	authVue.authenticated = true;
	dbgVue.authenticated = true;
	stdVue.authenticated = true;
	preVue.authenticated = true;
	bleVue.authenticated = true;

	isValidUser = true;
}

function unauthenticateUser() {
	authVue.authenticated = false;
	dbgVue.authenticated = false;
	stdVue.authenticated = false;
	preVue.authenticated = false;
	bleVue.authenticated = false;

	isValidUser = false;

	authVue.user = {};
}
