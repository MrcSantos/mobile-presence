function writeOnDb(dev, message) {
	dbStart();
	const status = 'message';

	var doc = db.collection("presences").doc(); //* The destination db collection

	const datetime = Date.now();
	var data = { //* The data object to push
		name: dev.name,
		uuid: dev.id,
		rssi: dev.rssi,
		user: userUniqueId,
		status: status,
		datetime: datetime,
		message: message
	};

	doc.set(data) //* Data write API
		.then(() => { //* Success writing
			dbStop();
			restart(dev);
		})
		.catch((error) => { //* Fail writing
			dbFail(error);
			restart();
		});
}
