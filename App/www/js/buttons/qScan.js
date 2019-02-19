function quickScan(message) {
	scanStarted()
	const scanSeconds = 2; // Seconds for the scan

	/**
	 * Starts the bt scan for all devices, for the specified seconds
	 */
	ble.scan([], scanSeconds, (device) => { //* Scan went well
		filterDevice(device);
	}, () => { //* Scan failed
		scanFailed();
		restart(); //* Resets the app (checking again for the bt)
	});

	setTimeout(() => { //* What to do with the scanned devices
		scanEnded();
		handle(scannedDevices, message);
	}, (scanSeconds + 1) * 1000);
}
