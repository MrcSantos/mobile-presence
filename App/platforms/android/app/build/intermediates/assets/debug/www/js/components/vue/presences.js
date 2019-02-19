Vue.filter('format', function (value) { return moment(value).format("[On] DD/MM/YY [at] hh:mm:ss") }) //* Converts the date

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
				<span class="w3-left">{{ presence.userName }} {{ presence.userSurname }}</span><span class="w3-right">{{ presence.datetime | format }}</span><br>\
				<span class="w3-left">{{ presence.name }} ({{ presence.status }})</span> <span class="w3-right">{{ presence.uuid }} ({{ presence.rssi }})</span>\
			</span>\
			<div class="divider"></div>\
		</div>'
});
