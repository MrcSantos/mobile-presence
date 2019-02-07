/**
 * This function is called on device ready
 */
function app() {
	/**
	 * Checks if the bt is on or asks nicely to activate it
	 */
	ble.enable(btEnabled(), () => {
		dbg.connection = '<b style="color: firebrick;">Connection failed, the bluetooth is not enabled or an error has occurred</b>';

		var fail = document.getElementById('deviceready').querySelector('.failed');
		var good = document.getElementById('deviceready').querySelector('.received');

		good.setAttribute('style', 'display:none;');
		fail.setAttribute('style', 'display:block;');

		navigator.app.exitApp();
	});
}
