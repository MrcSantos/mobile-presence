/**
 * What to do with the devices?
 * Warning, this function is called everytime a device is discovered in a scan
 */
function devsHandler(devices) {
	dbg.connection += 'handler: ' + JSON.stringify(devices) + '<br>'
	var nearDev = getNearestDevice(devices);
	dbg.connection += 'nearest: ' + JSON.stringify(nearDev) + '<br>'

	/* if (!isEmpty(lastDevice) && !(JSON.stringify(lastDevice) === JSON.stringify(nearDev))) {
		dbCloseOldConnection(lastDevice);
	}
	else {
		dbg.connection += JSON.stringify(nearest)
		dbCloseOldConnection(lastDevice);
		dbOpenNewConnection(nearDev);
	} */
	dbOpenNewConnection(nearDev)
}

function getNearestDevice(devices) {
	var nearest = devices[0];

	for (const dev in devices) {
		if (devices.hasOwnProperty(dev)) {
			const element = devices[dev];

			if (element.rssi > nearest.rssi) { nearest = element }
		}
	}

	return nearest
}

function isEmpty(obj) {
	for (var prop in obj) {
		if (obj.hasOwnProperty(prop))
			return false;
	}

	return true;
}

/* devsHandler([
	{
		name: "sbagliato",
		uuid: "23j23t89he8f9ac",
		rssi: -78
	},
	{
		name: "sbagliato",
		uuid: "23j23t89he8f9ac",
		rssi: -76
	},
	{
		name: "Giusto 78",
		uuid: "23j23t89he8f9ac",
		rssi: -45
	},
	{
		name: "sbagliato",
		uuid: "23j23t89he8f9ac",
		rssi: -97
	}
]) */
