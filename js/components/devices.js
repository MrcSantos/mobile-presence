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
				<td>{{ device.name }} ({{ device.rssi }})</td>\
			</tr>\
			<tr class="uuid">\
				<td>{{ device.id }}</td>\
			</tr>\
		</table>'
});
