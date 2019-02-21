function logout() {
	db.collection("users").doc(userUniqueId).delete().then(function () {
		getCredentials(() => { checkCredentials(() => { startApp() }, () => { goToAuth() }) })
	}).catch(function (error) {
		console.error("Error removing document: ", error);
	});
}
