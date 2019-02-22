var userUniqueId = ''; //* The device ID
var isValidUser = false; //* Lazy solution for checking if the user is authenticated or not
var USER = {}

/**
 * Gets the user credentials and sets the user authentication status
 */
function getCredentials(success, fail) {
	window.plugins.uniqueDeviceID.get((id) => { //* Gets the device ID
		userUniqueId = id;

		/**
		 * Checks wether the user exists or not
		 */
		db.collection("users").doc(id)
			.get()
			.then((user) => {
				if (user.exists) {
					USER = user.data();
					USER.id = id;

					authenticated();

					success();
				} else { fail() }
			})
			.catch((error) => { dbFail() }) //* Error getting the document
	});
}

/**
 * Checks if the user is authenticated
 */
function checkCredentials(success, fail) {
	if (isValidUser) { success() }
	else { if (fail) { fail() } }
}
