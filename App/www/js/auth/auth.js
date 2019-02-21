function authenticated() {
	authVue.authenticated = true;
	dbgVue.authenticated = true;
	stdVue.authenticated = true;
	preVue.authenticated = true;
	bleVue.authenticated = true;

	isValidUser = true;

	db.collection("users").doc(userUniqueId).get()
		.then((user) => { authVue.user = { id: userUniqueId, name: user.data().name, surname: user.data().surname } })
		.catch((error) => {
			authorizationPage.innerHTML = 'An unexpected error has occurred';
			dbgVue.db = 'fail';
		})
}

function notAuthenticated() {
	authVue.authenticated = false;
	dbgVue.authenticated = false;
	stdVue.authenticated = false;
	preVue.authenticated = false;
	bleVue.authenticated = false;

	isValidUser = false;
}
