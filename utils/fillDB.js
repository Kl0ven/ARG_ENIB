const Enigma = require('../models').enigma;
// const Winner = require('../models').winner;
let sequelize = require('../models').sequelize;

const data = [
	{
		name: 'test1',
		enigma_text: 'enigma_text_test1',
		url: 'url1fdvafvfdvqfvqfvqfdsvqfsdv',
		end_text: 'end_text_1',
		type: 'geo',
		latA: 1.23,
		longA: 1.23,
		latB: 1.25,
		longB: 1.58,
		first_time_visited: null,
		delay_to_hint: 2,
		custom_html: 'enigma1',
		hint: 'hint n1 '
	},
	{
		name: 'test2',
		enigma_text: 'enigma_text_test2',
		url: 'qfdsvervtnzrgbzdvaebvdvqfvbfzfa5814v651v6ae',
		end_text: 'end_text_1',
		type: 'flag',
		flag: 'dcjaecvpajenfvpm',
		first_time_visited: null,
		delay_to_hint: 4,
		custom_html: 'enigma2',
		hint: 'hint n2 '
	},
	{
		name: 'test3',
		enigma_text: 'enigma_text_test3',
		url: 'fd65v1965e1v6a51fedv651aef6v1q',
		end_text: 'end_text_1',
		type: 'flag',
		flag: 'dcjaecvpajenfvpm',
		first_time_visited: null,
		delay_to_hint: 2,
		custom_html: 'enigma3',
		hint: 'hint n3 '
	},
	{
		name: 'test4',
		enigma_text: 'enigma_text_test4',
		end_text: 'end_text_1',
		url: 'coucou',
		type: 'geo',
		latA: 10,
		longA: 10,
		latB: 0,
		longB: 0,
		first_time_visited: null,
		delay_to_hint: 2,
		hint: 'hint n3',
		custom_js: 'custom1.js',
		custom_html: 'enigma4',
		custom_css: 'custom1.css'
	},
	{
		name: 'test5',
		enigma_text: 'enigma_text_test5',
		end_text: 'end_text_5',
		url: 'cou2',
		type: 'geo',
		latA: 10,
		longA: 10,
		latB: 0,
		longB: 0,
		first_time_visited: null,
		delay_to_hint: 2,
		hint: 'hint n3',
		custom_js: 'custom1.js',
		custom_html: 'enigma4',
		custom_css: 'custom1.css'
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
