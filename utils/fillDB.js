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
		custom_js: 'log1.js',
		custom_html: 'log1',
		custom_css: 'log1.css'
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
		custom_js: 'log2.js',
		custom_html: 'log2',
		custom_css: 'log2.css'
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
		custom_js: 'log3.js',
		custom_html: 'log3',
		custom_css: 'log3.css'
	},
	{
		name: 'nom1',
		enigma_text: '',
		url: 'data_log_1',
		end_text: 'histoire3',
		type: 'flag',
		flag: '0123456789',
		first_time_visited: null,
		delay_to_hint: 5,
		hint: 'hint n2 ',
		custom_js: 'log4.js',
		custom_html: 'log4',
		custom_css: 'log4.css'
	},
	{
		name: 'nom2',
		enigma_text: '',
		url: 'data_log_2',
		end_text: 'end_text_2',
		hint: 'histoire4 ',
		type: 'flag',
		flag: 'bonjour toi',
		first_time_visited: null,
		delay_to_hint: 5,
		custom_js: 'log5.js',
		custom_html: 'log5',
		custom_css: 'log5.css'
	},
	{
		// 0 255 151
		// 156 0 255
		name: 'nom3',
		enigma_text: 'Le lien inconnu, les couleurs relira et la sortie vous montrera',
		url: '4f4adcbf8c6f66dcfc8a3282ac2bf10a', // 404
		end_text: 'end_text_3',
		hint: 'histoire5 ',
		type: 'flag',
		flag: '#4e80cb',
		first_time_visited: null,
		delay_to_hint: 5,
		custom_js: 'log6.js',
		custom_html: 'log6',
		custom_css: 'log6.css'
	}
];

sequelize.sync({force: true}).then(function () {
	Enigma.bulkCreate(data).then(() => {
		return Enigma.findAll();
	}).then(function (enigmas) {
		console.log("c'est good");
		let promise = [];

		for (var i = 0; i < enigmas.length - 1; i++) {
			promise.push(enigmas[i].setNext(enigmas[i + 1]));
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
