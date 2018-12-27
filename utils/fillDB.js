const Enigma = require('../models').enigma;
// const Winner = require('../models').winner;
let sequelize = require('../models').sequelize;

const data = [
	{
		name: 'Une preuve de leur existance ?',
		enigma_text: 'Cette photo a du etre prise à leur base secrete, trouve où elle se situe !',
		end_text: 'histoire0',
		url: '852488ddd9570bc877783bf4397563e0',
		hint: 'Le grand frère aime ce genre de detaille ;)',
		type: 'geo',
		latA: 2.292228269475794,
		longA: -73.8783434260763,
		latB: 2.2919924239308145,
		longB: -73.8779840100683,
		first_time_visited: null,
		delay_to_hint: 2,
		custom_js: 'where_does_it_come_from.js',
		custom_html: 'where_does_it_come_from',
		custom_css: 'where_does_it_come_from.css'
	},
	{
		name: 'Heure du décè 5h26...',
		enigma_text: 'Accident dans une soirée etudiante à brest en 2006',
		url: '1dc1d90e3fb72097ad99e2537dc69eac',
		hint: 'Ils etaient tous en fluo',
		end_text: 'histoire1',
		type: 'flag',
		flag: 'pb130091',
		first_time_visited: null,
		delay_to_hint: 2,
		custom_js: 'photo_enib.js',
		custom_html: 'photo_enib',
		custom_css: 'photo_enib.css'
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
