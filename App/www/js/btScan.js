function btEnabled() {
	dbg.connection = '<b style="color: #4B946A;">Bluetooth enabled</b>'

	var devices = [];

	ble.scan([], 20, (device) => {
		if (isDef(device.name)) {
			devices.push(device)
		}

		devicesHandler(devices);
	}, () => {
		dbg.connection = '<b style="color: firebrick;">Scan failed, an error has occurred</b>';
	});
}

function isDef(any) {
	return any !== undefined && any !== null
}
