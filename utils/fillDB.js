const Enigma = require('../models').enigma;
// const Winner = require('../models').winner;
let sequelize = require('../models').sequelize;

const data = [
	{
		name: 'data_log_1',
		enigma_text: '',
		url: 'data_log_1',
		end_text: 'end_text_1',
		type: 'flag',
		flag: '0123456789',
		first_time_visited: null,
		delay_to_hint: 5,
		hint: 'hint n2 ',
		custom_js: 'data_log_1.js',
		custom_html: 'data_log_1',
		custom_css: 'data_log_1.css'
	},
	{
		name: 'data_log_2',
		enigma_text: '',
		url: 'data_log_2',
		end_text: 'end_text_2',
		type: 'flag',
		flag: 'bonjour toi',
		first_time_visited: null,
		delay_to_hint: 5,
		hint: 'hint n2 ',
		custom_js: 'data_log_2.js',
		custom_html: 'data_log_2',
		custom_css: 'data_log_2.css'
	},
	{
		name: 'data_log_3',
		enigma_text: '',
		url: 'data_log_3',
		end_text: 'end_text_3',
		type: 'flag',
		flag: '0123456789',
		first_time_visited: null,
		delay_to_hint: 5,
		hint: 'hint n2 ',
		custom_js: 'data_log_3.js',
		custom_html: 'data_log_3',
		custom_css: 'data_log_3.css'
	}
];

let obj = [];
for (var i = 0; i < data.length; i++) {
	obj.push(Enigma.build(data[i]));
}

sequelize.sync({force: true}).then(function () {
	let promise = [];
	for (var i = 0; i < obj.length; i++) {
		promise.push(obj[i].save());
	}

	Promise.all(promise).then(function () {
		console.log("c'est good");
		promise = [];

		for (var i = 0; i < obj.length - 1; i++) {
			promise.push(obj[i].setNext(obj[i + 1]));
		}
		Promise.all(promise).then(function () {
			display().then(() => {
				sequelize.close();
			}).catch(error => {
				console.log(error);
				sequelize.close();
			});
		}).catch(error => {
			console.log(error);
			sequelize.close();
		});
	}).catch(error => {
		console.log(error);
		sequelize.close();
	});
});

function display () {
	return Enigma.findAll().then(data => {
		for (var e in data) {
			console.log(data[e].dataValues);
		}
	});
}
