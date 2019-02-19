/**
 * Toggles the debug panel
 */
function toggleDebug() {
	var dbg = document.getElementById("dbg");
	var std = document.getElementById("std");
	var pre = document.getElementById("pre");

	pre.style.display = "none";

	if (std.style.display === "none") {
		dbg.style.display = "none";
		std.style.display = "block";
	}
	else {
		std.style.display = "none";
		dbg.style.display = "block";
	}
}

/**
 * Toggles the Presences panel
 */
function togglePresences() {
	checkCredentials(() => { getPresences(); });

	var dbg = document.getElementById("dbg");
	var std = document.getElementById("std");
	var pre = document.getElementById("pre");

	std.style.display = "none";
	dbg.style.display = "none";

	if (pre.style.display === "none") { pre.style.display = "block" }
	else {
		pre.style.display = "none";
		std.style.display = "block";
	}
}
