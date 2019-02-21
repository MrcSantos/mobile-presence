function logout() {
	db.collection("users").doc(userUniqueId).delete().then(function () {
		notAuthenticated();
	}).catch(function (error) {
		console.error("Error removing document: ", error);
	});
}
