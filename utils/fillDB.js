const Enigma = require('../models').enigma;
// const Winner = require('../models').winner;
let sequelize = require('../models').sequelize;

const data = [
	{
		name: 'nom0',
		enigma_text: 'test',
		url: '94102692ffe0f1b664a863d0cd3cfefc', // entry
		hint: '',
		end_text: 'histoire-1',
		type: 'flag',
		flag: '8888-7777-9999-4444',
		first_time_visited: null,
		delay_to_hint: 2,
		custom_js: 'log10.js',
		custom_html: 'log10',
		custom_css: 'log10.css'
	},
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
		enigma_text: 'Accident dans une soirée étudiante à brest en 2006',
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
		name: 'Les codes couleurs',
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
	},
	{
		name: 'Le compte est bon',
		enigma_text: '',
		url: '8732a49c2224037527f75c117f1e9b77', // Le compte est bon
		hint: '',
		end_text: 'histoire6',
		type: 'eval',
		flag: '42',
		caracter: ['18', '+', '5', '334', '(', '(', ')', '+', '1', ')^', '3', '/', '11', '*', '+', '23'],
		first_time_visited: null,
		delay_to_hint: 3,
		custom_js: 'log8.js',
		custom_html: 'log8',
		custom_css: 'log8.css'
	},
	{
		name: 'Dans un bureau, les lettres tu trouveras ',
		enigma_text: ` <b>1</b> 48.390394<b>;</b>-4.4860760000000255 </br>
					   <b>2</b> 49.1193089<b>;</b>6.1757155999999895 </br>
					   <b>3</b> 43.23295100000001<b>;</b>0.07808199999999488 </br>
					   <b>4</b> 45.439695<b>;</b>4.387177899999983 </br>`,
		url: '7ec8336709bf8a8d71d0ffff69127903', // inter
		hint: 'R.I.P.',
		end_text: 'histoire7',
		type: 'flag',
		flag: '?',
		first_time_visited: null,
		delay_to_hint: 2,
		custom_js: 'log9.js',
		custom_html: 'log9',
		custom_css: 'log9.css'
	},
	{
		name: 'Le coup de grâce',
		enigma_text: 'Tu joues les blancs, tu as 5 coups pour les mettre en echec et mat => NAA',
		url: '742c94f216ddd7a9f9eadea32b536dd0', // echec
		hint: 'Cf7#',
		end_text: 'histoire8',
		type: 'flag',
		flag: 'De8+ Cxe8 Cf7#',
		first_time_visited: null,
		delay_to_hint: 3,
		custom_js: 'log7.js',
		custom_html: 'log7',
		custom_css: 'log7.css'
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
