Vue.component('status', {
	props: ['bt', 'scan', 'db'],
	template: '<div>\
							<p>\
							<span>Status: </span>\
							<img src="../../img/status/bt/{{ bt }}" alt="{{ bt }}" />\
							<img src="../../img/status/scan/{{ scan }}" alt="{{ scan }}" />\
							<img src="../../img/status/db/{{ db }}" alt="{{ db }}" />\
							</p>\
						</div>'
})
