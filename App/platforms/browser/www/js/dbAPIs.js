const db = firebase.firestore()

var userUniqueId = 'user12345'; // Use another user id

function dbCloseOldConnection(dev) {
	dbg.connection += 'close with: ' + JSON.stringify(dev)
	dbWrite(dev, 'off', userUniqueId);

	restart(dev);
}

function dbOpenNewConnection(dev) {
	dbg.connection += 'open with: ' + JSON.stringify(dev) + '<br>'
	dbWrite(dev, 'on', userUniqueId);

	//restart(dev);
}

/*
var docRef = db.collection("presences").doc("presences");

var getOptions = {
	source: 'server'
};

docRef.get(getOptions).then(function (doc) {
	console.log("document data:", doc.data());
}).catch(function (error) {
	console.log("Error getting cached document:", error);
});

/*var docData = {
	name: "Prova numero 2",
	uuid: "23j23t89he8f9ac",
	user: "arf4ty24swr34sa",
	rssi: -65
};
docRef.set(docData).then(function () {
	console.log("Document successfully written!");
});
*/

function restart(dev) {
	setTimeout(() => {
		devices = [];
		lastDevice = dev;
		btEnabled();
	}, 5000);
}

function dbWrite(dev, status, user) {
	var data = {
		name: dev.name,
		uuid: dev.uuid,
		rssi: dev.rssi,
		user: user,
		status: status
	};

	dbg.connection += 'I\'m going to write: ' + JSON.stringify(data)

	var docRef = db.collection("presences").doc("presences");

	docRef.set(data).then(() => {
		dbg.connection += "Document successfully written!"
	});
}

/* var docData = {
	name: "Prova provosa",
	uuid: "23j23t89he8f9ac",
	rssi: -65
};

dbOpenNewConnection(docData); */
