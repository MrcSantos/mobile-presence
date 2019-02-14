Vue.component('devices', {
	props: {
		device: {
			type: Object,

			default: function () {
				return []
			}
		}
	},
	template:
		'<table class="device">\
			<tr class="name">\
				<td>Name: {{ device.name }} ({{ device.rssi }})</td>\
			</tr>\
			<div class="divider"></div>\
			<tr class="uuid">\
				<td>Id: {{ device.id }}</td>\
			</tr>\
		</table>'
});
