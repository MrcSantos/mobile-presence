Vue.component('connections', {
	props: ['devs'],

	components: {
		'connection': conn,
	},

	template: '<connection v-for="dev in devs">\
						 </connection>'
})

var conn = {
	template: '{{ dev.name }}'
}
