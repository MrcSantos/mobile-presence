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
		'<div class="w3-container">\
			<h3 style="text-align: center">Welcome, you are authenticated as:<br>{{ user.name }} {{ user.surname }}</h3>\
			<h6>Your id is: {{ user.id }}</h6>\
			<button class="w3-button w3-right w3-red w3-round" onclick="logout()">Unregister this device</button>\
		</div>'
});
