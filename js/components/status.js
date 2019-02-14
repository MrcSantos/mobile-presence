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
		'<p class="status">\
			<span style="font-size:20vw;">Status: </span>\
			<img :src="\'img/status/bt/\' + bt + \'.png\'" width="20vw" :alt="\'\' + bt" />\
			<img :src="\'img/status/scan/\' + scan + \'.png\'" width="20vw" :alt="\'\' + scan" />\
			<img :src="\'img/status/db/\' + db + \'.png\'" width="20vw" :alt="\'\' + db" />\
		</p>'
});
