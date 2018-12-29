const Enigma = require('../models').enigma;
// const Winner = require('../models').winner;
let sequelize = require('../models').sequelize;

const data = [
	{
		name: 'Une preuve de leur existance ?',
		enigma_text: 'Cette photo a du etre prise à leur base secrete, trouve où elle se situe !',
		end_text: 'histoire0',
		url: '852488ddd9570bc877783bf4397563e0', // earth
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
		url: 'b65c055bda730e900eca91ca524f0387', // no limit
		hint: 'Ils etaient tous en fluo',
		end_text: 'histoire1',
		type: 'flag',
		flag: 'pb130091',
		first_time_visited: null,
		delay_to_hint: 2,
		custom_js: 'photo_enib.js',
		custom_html: 'photo_enib',
		custom_css: 'photo_enib.css'
	},
	{
		name: 'Dans les archives',
		enigma_text: 'J\'ai trouvé la référence d\'une archives (REF), à toi de la trouver !',
		url: 'e4a754746dfd9d8bab082f3a5bda280e', // centre de ressources documentaire
		hint: `<b>Lundi</b> : 8h30 – 17h30</br>
		<b>Mardi</b> : 8h30 – 17h30</br>
		<b>Mercredi</b> : 8h30 – 17h30</br>
		<b>jeudi</b> : 8h30 – 17h30</br>
		<b>Vendredi</b> : 8h30 – 12h00`,
		end_text: 'histoire2',
		type: 'flag',
		flag: 'test',
		first_time_visited: null,
		delay_to_hint: 2,
		custom_js: 'mot_d_un_livre.js',
		custom_html: 'mot_d_un_livre',
		custom_css: 'mot_d_un_livre.css'
	},
	{
		name: 'data_log_1',
		enigma_text: '',
		url: 'data_log_1',
		end_text: 'histoire3',
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
		hint: 'histoire4 ',
		type: 'flag',
		flag: 'bonjour toi',
		first_time_visited: null,
		delay_to_hint: 5,
		custom_js: 'data_log_2.js',
		custom_html: 'data_log_2',
		custom_css: 'data_log_2.css'
	},
	{
		// 0 255 151
		// 156 0 255
		name: 'data_log_3',
		enigma_text: 'Le lien inconnu, les couleurs relira et la sortie vous montrera',
		url: '4f4adcbf8c6f66dcfc8a3282ac2bf10a', // 404
		end_text: 'end_text_3',
		hint: 'histoire5 ',
		type: 'flag',
		flag: '#4e80cb',
		first_time_visited: null,
		delay_to_hint: 5,
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
