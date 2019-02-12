function dbCloseOldConnection(dev) {
	dbg.connection += 'Closed connection with: ' + JSON.stringify(dev)
	setTimeout(() => {
		devices = [];
		lastDevice = dev;
		btEnabled();
	}, 5000);
}

function dbOpenNewConnection(dev) {
	dbg.connection += 'Opened connection with: ' + JSON.stringify(dev)
	setTimeout(() => {
		devices = [];
		lastDevice = dev;
		btEnabled();
	}, 5000);
}
