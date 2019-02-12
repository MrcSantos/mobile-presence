/**
 * This function is called on device ready
 */
function app() {
	/**
	 * Checks if the bt is on or asks nicely to activate it (on android)
	 */
	ble.enable(() => {
		// Success callback (bt is ON)
		updateStatusBtWithOk();
		btEnabled();
	}, () => {
		// Fail callback (bt is OFF or an error occurred)
		updateStatusBtWithFail();
	});
}

function updateStatusBtWithOk() {
	dbg.connection = 'ok';
	status.bt = 'ok';
}

function updateStatusBtWithFail() {
	dbg.connection = '<b style="color: firebrick;">Connection failed, the bluetooth is not enabled or an error has occurred</b>';
	status.bt = 'fail'
}
