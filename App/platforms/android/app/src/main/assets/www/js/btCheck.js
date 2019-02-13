/**
 * This function is called on device ready
 */
function startApp() {
	/**
	 * Checks if the bt is on or asks nicely to activate it (on android)
	 */
	ble.enable(() => { //* Success callback (bt is ON)
		updateStatusBtWithOk();
		startScan();
	}, () => { //* Fail callback (bt is still OFF or an error occurred)
		updateStatusBtWithFail();
	});
}

//--------------------------------------------------// Functions to update the status

/**
 * Updates the bt status, showing the ok icon
 */
function updateStatusBtWithOk() {
	// TODO Update status bt to ok
	dbg.status = 'bt ok';
}

/**
 * Updates the bt status, showing the fail icon
 */
function updateStatusBtWithFail() {
	// TODO Update status bt to fail
	dbg.status = '<b style="color: firebrick;">Connection failed, the bluetooth is not enabled or an error has occurred</b>';
}
