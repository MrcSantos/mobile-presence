/**
 * Makes the html table from an object
 *
 * @param {String|Array|Object} body Body's data
 * @param {String|Array|Object} header Table header
 * @param {String} idHeader Header's id
 * @param {String} idBody Body's id
 * @param {Boolean} idRows Make rows' incremental id?
 * @param {String} headerClasses Header's classes
 * @param {String} bodyClasses body's classes
 * @param {String} rowClasses row's classes
 *
 * @returns the html table rappresentation of the object
 */
function tabelize(body, header, idHeader, idBody, idRows, headerClasses, bodyClasses, rowClasses) {
	// Checks if the body is defined body is defined (body variable is mandatory)
	if (!isDefined(body)) { throw new Error('Body object is not defined') }
	else {
		// Data parsing and convertion
		convert();

		var html = '';

		// Creates the header of the table if it exists
		if (isDefined(header)) { html += makeHeader(header, idHeader, headerClasses) }

		// Creates the rows of the table
		html += makeBody(body, idBody, idRows, bodyClasses, rowClasses);

		return html;
	}

	// Data parsing and convertion
	function convert() {
		// Converts the body from string to object
		if (typeOf(body) === 'String') { body = JSON.parse(body) }
		if (typeOf(body) === 'Object') { body = Object.values(body) }

		// Converts the header to an array if it exists
		if (isDefined(header)) {
			if (typeOf(header) === 'String') { header = JSON.parse(header) }
			if (typeOf(header) === 'Object') { header = Object.keys(header) }
		}

		if (!isDefined(idHeader)) { idHeader = '' }
		if (!isDefined(idBody)) { idBody = '' }
		if (!isDefined(idRows)) { idRows = false }
		if (!isDefined(headerClasses)) { headerClasses = '' }
		if (!isDefined(bodyClasses)) { bodyClasses = '' }
		if (!isDefined(rowClasses)) { rowClasses = '' }
	}
}

//----------------------------------------------------------------------------------------------------//

/**
 * Makes the header of the table
 *
 * @param {Array} header The array of the elements to be putted in the header
 * @param {String} id The thead id propriety
 * @param {String} classes The thead class propriety
 */
function makeHeader(header, id, classes) {
	var html = '<thead id="' + id + '" class="' + classes + '">';
	html += '<tr>';

	html += makeHeaderRow(header);

	html += '</tr>';
	html += '</thead>';

	return html;
}

/**
 * Makes the body of the table
 *
 * @param {Array} body Body's data
 * @param {String} idBody Body's id
 * @param {Boolean} idRows Make rows' incremental id?
 * @param {String} bodyClasses body's classes
 * @param {String} rowClasses row's classes
 */
function makeBody(body, id, idRows, classes, rowClasses) {
	var html = '<tbody id="' + id + '" class="' + classes + '">';

	html += makeRows(body, idRows, rowClasses);

	html += '</tbody>';

	return html;
}

//----------------------------------------------------------------------------------------------------//

/**
 * Makes the header's rows of the table given at least an array of values
 *
 * @param {Array} header The rows of the header of the table
 */
function makeHeaderRow(header) {
	var html = '';

	header.forEach(value => {
		html += '<th>' + value + '</th>';
	});

	return html;
}

/**
 * Makes the body's rows of the table given at least an array of values
 *
 * @param {Array} body The body of the table
 * @param {Boolean} id Make rows incremental id?
 * @param {String} classes The classes of each row
 */
function makeRows(body, id, classes) {
	var rows = '';

	for (let index = 0; index < body.length; index++) {
		const row = body[index];

		if (id) { rows += '<tr class="' + classes + '" id="' + index + '">' }
		else { rows += '<tr class="' + classes + '">' }

		rows += makeBodyRow(row);

		rows += '</tr>';
	}

	return rows;
}

/**
 * Makes the rows of the body
 *
 * @param {Array} row One row of the table's body
 */
function makeBodyRow(row) {
	var html = '';

	for (const key in row) {
		if (row.hasOwnProperty(key)) {
			const element = row[key];

			if (typeOf(element) === 'Object' || typeOf(element) === 'Array') { html += '<td>' + JSON.stringify(element) + '</td>' }
			else { html += '<td>' + element + '</td>' }
		}
	}

	return html;
}

//----------------------------------------------------------------------------------------------------//

/**
 * This tells the type of the variable as a string
 *
 * @param {*} variable The variable
 */
function typeOf(variable) {
	return variable.constructor.name;
}

/**
 * Check weather the variable is defined and not null
 *
 * @param {*} variable The variable
 */
function isDefined(variable) {
	return !(variable == null || variable == undefined);
}