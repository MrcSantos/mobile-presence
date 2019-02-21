function logout() {
	db.collection("users").doc(userUniqueId).delete().then(function () {
		getCredentials(() => { checkCredentials(() => { startApp() }, () => { notAuthenticated() }) })
	}).catch(function (error) {
		console.error("Error removing document: ", error);
	});
}