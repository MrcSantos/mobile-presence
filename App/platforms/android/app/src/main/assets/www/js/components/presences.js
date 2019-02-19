Vue.filter('format', function (value) { return moment(value).format("DD-MM-YY hh:mm:ss") })

Vue.component('presences', {
	props: {
		presence: {
			type: Object,

			default: function () {
				return []
			}
		}
	},
	template:
		'<div class="space-xs">\
			<div class="divider"></div>\
			<span class="presence w3-container">\
				<span class="w3-left">{{ presence.user.name }} {{ presence.user.surname }}</span><span class="w3-right">{{ presence.datetime | format }}</span><br>\
				<span class="w3-left">{{ presence.name }} ({{ presence.status }})</span> <span class="w3-right">{{ presence.uuid }} ({{ presence.rssi }})</span>\
			</span>\
			<div class="divider"></div>\
		</div>'
});
