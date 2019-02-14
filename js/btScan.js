const scanSeconds = 5; // Seconds for the scan
var scannedDevices = []; // The devices found from the scan

/**
 * Initializes the bt scan
 */
function startScan() {
	scanStarted();

	/**
	 * Starts the bt scan for all devices, for the specified seconds
	 */
	ble.scan([], scanSeconds, (device) => { //* Scan went well
		filterDevice(device);
		listDevices();
	}, () => { //* Scan failed
		scanFailed();
		startApp(); //* Resets the app (checking again for the bt)
	});

	setTimeout(() => { //* What to do with the scanned devices
		scanEnded();
		devsHandler(scannedDevices);
	}, (scanSeconds + 5) * 1000);
}

//--------------------------------------------------// Functions

/**
 * Filters the unnamed bt devices
 *
 * @param {Object} device The device to filter
 */
function filterDevice(device) {
	if (isDef(device.name)) {
		scannedDevices.push(device);
	}
}

/**
 * Checks if the variable is defined
 *
 * @param {*} any The variable to check
 */
function isDef(any) {
	return any !== undefined && any !== null
}

//--------------------------------------------------// Functions to update the status

/**
 * Updates the scan status, showing the running icon
 */
function scanStarted() {
	gui.scan = 'running';
}

/**
 * Updates the scan status, showing the ok icon
 */
function scanEnded() {
	gui.scan = 'ok';
}

/**
 * Updates the scan status, showing the fail icon and resets the app in order to check the bt
 */
function scanFailed() {
	gui.scan = 'fail';
}

//--------------------------------------------------// Functions to update the connection devices

/**
 * Lists all the devices found from the scan
 */
function listDevices() {
	gui.devices = scannedDevices;
}
