var debugPage = document.getElementById("dbg");
var standardPage = document.getElementById("std");
var presencesPage = document.getElementById("pre");
var blePage = document.getElementById("ble");
var authorizationPage = document.getElementById("aut");
/* The pages parts */

/**
* Goes to the standard panel
*/
function goToStandard() {
	presencesPage.style.display = "none";
	authorizationPage.style.display = "none";
	blePage.style.display = "none";
	debugPage.style.display = "none";
	standardPage.style.display = "block";
}

/**
* Goes to the debug panel
*/
function goToDebug() {
	standardPage.style.display = "none";
	presencesPage.style.display = "none";
	blePage.style.display = "none";
	authorizationPage.style.display = "none";
	debugPage.style.display = "block";
}

/**
 * Goes to the Presences panel
 */
function goToPresences() {
	debugPage.style.display = "none";
	standardPage.style.display = "none";
	blePage.style.display = "none";
	authorizationPage.style.display = "none";
	presencesPage.style.display = "block";

	checkCredentials(() => { getPresences() });
}

/**
* Goes to the auth panel
*/
function goToAuth() {
	debugPage.style.display = "none";
	standardPage.style.display = "none";
	presencesPage.style.display = "none";
	blePage.style.display = "none";
	authorizationPage.style.display = "block";

	checkCredentials(() => { authenticated() }, () => { notAuthenticated() })
}

function goToBle() {
	debugPage.style.display = "none";
	standardPage.style.display = "none";
	presencesPage.style.display = "none";
	authorizationPage.style.display = "none";
	blePage.style.display = "block";
}
