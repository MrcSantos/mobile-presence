/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may odbgain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
	// Application Constructor
	initialize: function () {
		document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
	},

	// deviceready Event Handler
	//
	// Bind any cordova events here. Common events are:
	// 'pause', 'resume', etc.
	onDeviceReady: function () {
		init();
		app();
	}
};

/**
 * Things to do before the app runs
 */
function init() {
	// Code...
}

//--------------------------------------------------// - Inizializzazione componenti Vue e variabili globali

var status = new Vue({
	el: '#status',
	data: {
		bt: 'init',
		scan: 'init',
		db: 'init'
	},
	template: '<div id="status">\
							<p>\
							<span>Status: </span>\
							<img :src="\'../../img/status/bt/\' + bt + \'.png\'" :alt="bt" height="100vh" />\
							<img :src="\'../../img/status/scan/\' + scan + \'.png\'" :alt="scan" height="100vh" />\
							<img :src="\'../../img/status/db/\' + db + \'.png\'" :alt="db" height="100vh" />\
							</p>\
						</div>'
})

var connections = new Vue({
	el: '#connections',
	data: {
		devs: {}
	}
})

var dbg = new Vue({
	el: '#dbg',
	data: {
		connection: 'Waiting for bluetooth...'
	}
})

var lastDevice = {};

app.initialize();
