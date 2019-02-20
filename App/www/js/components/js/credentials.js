var userUniqueId = ''; //* The device ID
var isValidUser = false; //* Lazy solution for checking if the user is authenticated or not

/**
 * Gets the user credentials and sets the user authentication status
 */
function getCredentials(callback) {
	window.plugins.uniqueDeviceID.get((id) => { //* Gets the device ID
		userUniqueId = id;
		gui.id = 'Your personal id: ' + id;
	});

	/**
	 * Checks wether the user exists or not
	 */
	db.collection("users").get()
		.then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				if (doc.id === userUniqueId) { //* If the user is found
					isValidUser = true;
					authVue.authenticated = true;
					callback();
				}
			});
		})
		.catch((error) => { dbFail() }) //* Error getting the document
}

/**
 * Checks if the user is authenticated
 */
function checkCredentials(success, fail) {
	if (isValidUser) { success() }
	else { if (fail) { fail() } }
}
