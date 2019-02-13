const seconds = 5;
var devices = [];

function btEnabled() {
	dbg.connection = '<b style="color: #4B946A;">Bluetooth enabled</b>'

	ble.scan([], seconds, (device) => {
		if (isDef(device.name)) {
			devices.push(device)
		}

		//Debug
		dbg.connection = tabelize(devices, ['Name', 'UUID', 'Ad', 'RSSI']);
	}, () => {
		dbg.connection = '<b style="color: firebrick;">Scan failed, an error has occurred</b>';
	});

	setTimeout(() => {
		devsHandler(devices);
	}, (seconds + 1) * 1000);
}

function isDef(any) {
	return any !== undefined && any !== null
}
