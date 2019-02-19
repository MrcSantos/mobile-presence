async function getPresences() {
	try {
		let result = await db.collection("presences").get();

		result.forEach(async doc => {
			var presence = doc.data();

			var userDoc = await db.collection("users").doc(presence.user).get();
			var user = userDoc.data();

			console.log(user);

			const data = {
				name: presence.name,
				uuid: presence.uuid,
				rssi: presence.rssi,
				userName: user.name,
				userSurname: user.surname,
				status: presence.status,
				datetime: presence.datetime
			}
			pre.presences.push(data)
		})
	} catch (error) {
		console.log(error.message)
	}
}
