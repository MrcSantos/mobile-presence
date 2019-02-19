function handle(devices, message) {
	if (isDef(devices)) { //* If there are devices found
		var nearDevice = getNearestDevice(devices);

		writeOnDb(nearDevice, message);
	}

	//* If there are NO devices found or the nearest device equals the last one
	restart();
}
