function authenticated() {
	db.collection("users").doc(userUniqueId).get()
		.then((user) => { authorizationPage.innerHTML = 'You are already authenticated as: ' + user.data().name + ' ' + user.data().surname })
		.catch((error) => {
			authorizationPage.innerHTML = 'An unexpected error has occurred';
			gui.db = 'fail';
		})
}

function notAuthenticated() {
	authorizationPage.innerHTML = 'You have to authenticate'
}
