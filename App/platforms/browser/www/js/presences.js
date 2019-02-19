async function getPresences() {
	try {
		pre.presences = [];

		const result = await db.collection("presences").orderBy("datetime", "desc").limit(50).get();

		result.forEach(async doc => {
			const presence = doc.data();

			const userDoc = await db.collection("users").doc(presence.user).get();
			const user = userDoc.data();

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
		gui.db = 'fail';
	}
}
