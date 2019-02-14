Vue.component('devices', {
	props: {
		device: {
			type: Object,

			default: function () {
				return {}
			}
		}
	},
	template:
		'<div class="device">\
			{{ device.id }} - {{ device.name }}\
		</div>'
});
