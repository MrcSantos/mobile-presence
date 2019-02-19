/**
 ** Attaches a message to the nearest bt device
 *
 * @param {String} message The message to send
 */
function sendMessage(message) {
	checkCredentials(() => {
		/**
		 * Checks if the bt is on or asks nicely to activate it (on android)
		 */
		ble.enable(() => { //* Success callback (bt is ON)
			btOk();
			quickScan(message);
		}, () => { //* Fail callback (bt is still OFF or an error occurred)
			btFail();
			restart();
		});
	})
}
