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
		this.receivedEvent('deviceready');

		ble.enable(
			() => {
				dbg.connection = 'Bluetooth enabled'
				var devices = []

				ble.scan([], 5, (device) => {
					if (!device.name) {
						device.name = 'Unknown'
					}

					devices.push(device)
					dbg.connection = tabelize(devices)
				},
					() => {
						dbg.connection = '<b style="color: firebrick;">Scan failed, an error has occurred</b>';
					});

			},
			// On fail closes the app
			() => {
				dbg.connection = '<b style="color: firebrick;">Connection failed, the bluetooth is not enabled or an error has occurred</b>';

				var fail = document.getElementById('deviceready').querySelector('.failed');
				var good = document.getElementById('deviceready').querySelector('.received');

				good.setAttribute('style', 'display:none;');
				fail.setAttribute('style', 'display:block;');

				navigator.app.exitApp();
			}
		);
	},

	// Update DOM on a Received Event
	receivedEvent: function (id) {
		var parentElement = document.getElementById(id);
		var listeningElement = parentElement.querySelector('.listening');
		var receivedElement = parentElement.querySelector('.received');

		listeningElement.setAttribute('style', 'display:none;');
		receivedElement.setAttribute('style', 'display:block;');
	}
};

var dbg = new Vue({
	el: '#connection',
	data: {
		connection: 'Waiting for bluetooth...'
	}
})
app.initialize();
