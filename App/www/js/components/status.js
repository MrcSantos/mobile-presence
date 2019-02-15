Vue.component('status', {
	props: {
		bt: {
			type: String,
			default: 'init'
		},
		scan: {
			type: String,
			default: 'init'
		},
		db: {
			type: String,
			default: 'init'
		}
	},
	template:
		'<div class="status">\
			<span>Status: </span>\
			<img :src="\'img/status/bt/\' + bt + \'.png\'" :alt="\'\' + bt" />\
			<img :src="\'img/status/scan/\' + scan + \'.png\'" :alt="\'\' + scan" />\
			<img :src="\'img/status/db/\' + db + \'.png\'" :alt="\'\' + db" />\
		</div>'
});
