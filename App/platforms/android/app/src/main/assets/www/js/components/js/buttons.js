var debugPage = document.getElementById("dbg");
var standardPage = document.getElementById("std");
var presencesPage = document.getElementById("pre");
var authorizationPage = document.getElementById("aut");
/* The pages parts */

function goToStandard() {
	presencesPage.style.display = "none";
	authorizationPage.style.display = "none";
	debugPage.style.display = "none";
	standardPage.style.display = "block";
}

/**
* Toggles the debug panel
*/
function goToDebug() {
	standardPage.style.display = "none";
	presencesPage.style.display = "none";
	authorizationPage.style.display = "none";
	debugPage.style.display = "block";
}

/**
 * Toggles the Presences panel
 */
function goToPresences() {
	debugPage.style.display = "none";
	standardPage.style.display = "none";
	authorizationPage.style.display = "none";
	presencesPage.style.display = "block";

	checkCredentials(() => { getPresences() });
}

function goToAuth() {
	debugPage.style.display = "none";
	standardPage.style.display = "none";
	presencesPage.style.display = "none";
	authorizationPage.style.display = "block";

	checkCredentials(() => { authenticated() }, () => { notAuthenticated() })
}
