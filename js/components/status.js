Vue.component('status', {
	props: {
		bt: {
			type: String,
			default: 'init',

			validator: (value) => { //* The value must match one of these
				return ['init', 'ok', 'fail'].indexOf(value) !== -1
			}
		},
		scan: {
			type: String,
			default: 'init',

			validator: (value) => { //* The value must match one of these
				return ['init', 'ok', 'running', 'fail'].indexOf(value) !== -1
			}
		},
		db: {
			type: String,
			default: 'init',

			validator: (value) => { //* The value must match one of these
				return ['init', 'ok', 'running', 'fail'].indexOf(value) !== -1
			}
		}
	},
	template:
		'<div class="status">\
		</div>'
});
