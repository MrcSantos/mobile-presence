function authenticated() {
	authVue.authenticated = true

	db.collection("users").doc(userUniqueId).get()
		.then((user) => { authVue.user = { id: userUniqueId, name: user.data().name, surname: user.data().surname } })
		.catch((error) => {
			authorizationPage.innerHTML = 'An unexpected error has occurred';
			gui.db = 'fail';
		})
}

function notAuthenticated() {
	authVue.authenticated = false;
	isValidUser = false;
}
