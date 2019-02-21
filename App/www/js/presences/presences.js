/**
 * Fetches the presences for the Presences panel
 */
async function getPresences() {
	try {
		preVue.presences = [];

		const result = await db.collection("presences").orderBy("datetime", "desc").limit(50).get(); //* Firebase query

		result.forEach(async doc => {
			const presence = doc.data();

			const userDoc = await db.collection("users").doc(presence.user).get(); //* Gets the user informations
			const user = userDoc.data();

			const data = { //* The data fetched
				name: presence.name,
				uuid: presence.uuid,
				rssi: presence.rssi,
				userName: user.name,
				userSurname: user.surname,
				status: presence.status,
				datetime: presence.datetime
			}

			preVue.presences.push(data) //* Renders the presences by pushing them one by one
		})
	} catch (error) { dbgVue.db = 'fail' } //* Error getting the document
}
