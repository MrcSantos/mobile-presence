function dbCloseOldConnection(dev) {
	dbg.connection = 'Closed connection with: ' + JSON.stringify(dev)
}

function dbOpenNewConnection(dev) {
	dbg.connection = 'Opened connection with: ' + JSON.stringify(dev)
	setTimeout(() => {
		devices = [];
		btEnabled();
	}, 5000);
}
