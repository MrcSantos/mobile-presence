/**
 * This function is called on device ready
 */
function startApp() {
	/**
	 * Checks if the bt is on or asks nicely to activate it (on android)
	 */
	ble.enable(() => { //* Success callback (bt is ON)
		btOk();
		startScan();
	}, () => { //* Fail callback (bt is still OFF or an error occurred)
		btFail();
		restart();
	});
}

//--------------------------------------------------// Functions to update the status

/**
 * Updates the bt status, showing the ok icon
 */
function btOk() {
	dbgVue.bt = 'ok';
}

/**
 * Updates the bt status, showing the fail icon
 */
function btFail() {
	dbgVue.bt = 'fail';
}
