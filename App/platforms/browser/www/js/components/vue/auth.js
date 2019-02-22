Vue.component('auth', {
	props: {
		user: {
			type: Object,

			default: function () {
				return {}
			}
		}
	},
	template:
		'<div>\
			<h3 style="text-align: center">Welcome, you are authenticated as:<br>{{ user.name }} {{ user.surname }}</h3>\
			<div class="space-little"></div>\
			<h6>Your factory id is:<br>{{ user.factory }}</h6>\
			<h6>Your id is:<br>{{ user.id }}</h6>\
			<div class="space-xs"></div>\
			<button class="w3-button w3-right w3-red w3-round" onclick="logout()">Unregister this device</button>\
		</div>'
});
