const Enigma = require('../models').enigma;
// const Winner = require('../models').winner;
let sequelize = require('../models').sequelize;

const data = [
	{
		name: 'Petite introduction',
		enigma_text: 'Si vous êtes ici, c\'est que vous possédez au moins un des 4 codes nécessaires pour entrer. Il vous en manque peut-être, pensez à lire une source d\'information fiable, les affichages officiels, à vous sociabiliser avec vos camarades, et surtout, lisez vos mails ! ',
		url: '94102692ffe0f1b664a863d0cd3cfefc', // entry
		hint: 'Allez, un coup de pouce, lisez le journal, vos mails, passez au foyer, et pensez à checker votre Facebook !',
		end_text: 'Ah ! Je vois que vous avez enfin trouvé l’entrée. Bienvenue au Bureau des Énigmes !<br>Asseyez-vous je vous en prie. Un café ?<br> C’est avec beaucoup de joie et un soupçon d’excitation que je vous accueille ici, car après tout, nous allons passer un certain temps ensemble.<br> J’espère que vous vous plairez ici, n’hésitez pas à vous entourer intelligemment, l’endroit est spacieux.<br> Je vous laisse, j’ai une course à faire.A très bientôt… je l’espère.',
		type: 'flag',
		flag: '4596-e75r-m310-u47v',
		first_time_visited: null,
		delay_to_hint: 2,
		custom_js: 'log10.js',
		custom_html: 'log10',
		custom_css: ''
	},
	{
		name: 'À vous de jouer',
		enigma_text: 'Vous êtes toujours là ? J’ai oublié un papier sur mon bureau, pouvez-vous vous en occuper ?',
		end_text: 'Merci beaucoup, je sais désormais que je peux compter sur vous. J’aurai sans doute d’autres services à vous demander très prochainement.',
		url: 'c5f543110f06ee200d5ae4265e6e368a', //  Joe Dassin
		hint: 'Après avoir joué, pensez à compléter !',
		type: 'geo',
		latA: 48.874288,
		longA: 2.295462,
		latB: 48.864564,
		longB: 2.321055,
		first_time_visited: null,
		delay_to_hint: 2,
		custom_js: 'log11.js',
		custom_html: 'log11',
		custom_css: 'log11.css'
	},
	{
		name: 'Un détail crucial',
		enigma_text: 'Je ne suis plus tout jeune, parfois ma mémoire et mes yeux me font défaut. Il me semble que quelque chose a changé, mais je n’en suis pas sûr. Pour vous, ce sera un jeu d’enfant !',
		url: 'c834cb5a6bd45bc533e54a0b7b136977', // elc
		hint: 'Pensez à aller vérifier par vous même !',
		end_text: 'Vous me plaisez de plus en plus vous savez ! Mais ce n’est pas encore suffisant pour prendre ma relève. Seul l’avenir me dira si vous saurez vous en montrer digne.',
		type: 'flag',
		flag: 'monochrome',
		first_time_visited: null,
		delay_to_hint: 4,
		custom_js: 'log14.js',
		custom_html: 'log14',
		custom_css: 'log14.css'
	},
	{
		name: 'Dans les archives',
		enigma_text: 'J\'ai trouvé la référence d\'une ancienne archive (443ROB, orge/roma, p1703, 9ième), aidez-moi à la retrouver !',
		url: 'e4a754746dfd9d8bab082f3a5bda280e', // centre de ressources documentaire
		hint: `<b>Lundi</b> : 8h30 – 17h30</br>
		<b>Mardi</b> : 8h30 – 17h30</br>
		<b>Mercredi</b> : 8h30 – 17h30</br>
		<b>jeudi</b> : 8h30 – 17h30</br>
		<b>Vendredi</b> : 8h30 – 12h00`,
		end_text: 'Rien ne vaut la douceur du papier et la justesse des mots, n’est-ce pas ?',
		type: 'flag',
		flag: 'recherche',
		first_time_visited: null,
		delay_to_hint: 2,
		custom_js: '',
		custom_html: 'log3',
		custom_css: ''
	},
	{
		name: 'Constitution des groupes de niveau',
		enigma_text: '',
		url: 'abe3f89211b01aa177305a3114e4a708', // questionnaire
		end_text: 'Désolé pour ces questions, mais c\'est la procédure, vous êtes obligés de passer par là !<br>En tout cas, bravo, une telle persévérance n\'est pas à la portée de tous !',
		type: 'flag',
		flag: '5f4dcc3b5aa765d61d8327deb882cf99', // password
		first_time_visited: null,
		delay_to_hint: 1000000,
		hint: '',
		custom_js: 'log4.js',
		custom_html: 'log4',
		custom_css: ''
	},
	{
		name: 'Dans un bureau, des lettres vous trouverez',
		enigma_text: `Cela commence à faire quelques temps que vous êtes ici à gratter du papier. Il serait temps de vous aérer un petit peu. Pourquoi ne pas prendre un peu l’air?<br><br>
		<b>1</b> 48.390394<b>;</b>-4.4860760000000255 </br>
		<b>2</b> 49.1193089<b>;</b>6.1757155999999895 </br>
		<b>3</b> 43.23295100000001<b>;</b>0.07808199999999488 </br>
		<b>4</b> 45.439695<b>;</b>4.387177899999983 </br>`,
		url: '7ec8336709bf8a8d71d0ffff69127903', // inter
		hint: 'Tiens, le bureau n\'a pas fini d\'être vidé ! R.I.P.',
		end_text: 'Vous n’avez pas eu trop froid ? Venez vous réchauffer, je vais avoir quelques travaux à vous faire faire ici.',
		type: 'flag',
		flag: 'tabrseme',
		first_time_visited: null,
		delay_to_hint: 3,
		custom_js: '',
		custom_html: 'log9',
		custom_css: ''
	},
	{
		name: 'Interlude musical',
		enigma_text: 'C’est un petit peu silencieux ici. Ne me fixez pas ainsi cela me gêne. Vous savez, la réponse ne se trouve pas toujours juste sous vos yeux. Et puis, il faut aussi parfois prendre le temps.',
		url: '5d9d63cd7036191540ec90e0d5c52ce2', // solfège
		hint: 'DAGEDAG...AAE',
		end_text: 'J’espère que ce petit interlude musical vous a plu. Cela faisait longtemps que je ne m’étais pas dégourdi les doigts.',
		type: 'flag',
		flag: 'DAGDAGEDFEAAACAAEAAACAAE',
		first_time_visited: null,
		delay_to_hint: 2,
		custom_js: 'log13.js',
		custom_html: 'log13',
		custom_css: ''
	},
	{
		name: 'Un éclairage de mauvais goût',
		enigma_text: 'Vous ne trouvez pas que la décoration laisse à désirer ? Ces guirlandes lumineuses sont insupportables !',
		url: '69d058f4988a7f8312db937ed76296fd',
		end_text: 'C’est beaucoup mieux à présent, je vous en remercie. Vous allez finir par me remplacer si ça continue !',
		hint: 'Leur clignonement, ça ressemble à un code...',
		type: 'flag',
		flag: 'sedundnesslp',
		first_time_visited: null,
		delay_to_hint: 4,
		custom_js: 'log5.js',
		custom_html: 'log5',
		custom_css: 'log5.css'
	},
	{
		name: 'Un air de musique familier',
		enigma_text: 'Vous connaissez cette chanson ? Elle me rappelle ma jeunesse...',
		url: '8ff33a56bc925778858482289712bed4', // RickRolled
		hint: 'Le clip a mal vieilli... La pellicule a dû être mal conservée... Ou bien peut-être que quelqu\'un a essayé de la modifier ?',
		end_text: 'Je vois qu’elle vous a plu aussi. Vous aussi vous me plaisez !',
		type: 'flag',
		flag: 'ahovxq',
		first_time_visited: null,
		delay_to_hint: 4,
		custom_js: '',
		custom_html: 'log12',
		custom_css: ''
	},
	{
		name: 'Heure du décès 5h26',
		enigma_text: 'Je ne suis pas très fier de ce que je vais vous demander. Mais voyez-vous, ma mémoire me fait défaut, pourriez-vous m’aider à retrouver un petit quelque chose ? C’est une photo, mais ne la divulguez pas, c’est assez embarrassant. C\'est à propos d\'un dérapage dans une soirée étudiante à Brest en 2006',
		url: 'b65c055bda730e900eca91ca524f0387', // no limit
		hint: 'Ils étaient tous en fluo',
		end_text: 'Je compte sur votre discrétion. Je vais enfin pouvoir supprimer ce… disons, petit écart.',
		type: 'flag',
		flag: 'pb130091',
		first_time_visited: null,
		delay_to_hint: 4,
		custom_js: 'log2.js',
		custom_html: 'log2',
		custom_css: ''
	},
	{
		name: 'Le coup de grâce',
		enigma_text: 'Vous savez jouer aux échecs ? C’est mon petit péché mignon. J’étais imbattable dans ma jeunesse.<br>Je vous propose la chose suivante : c\'est votre tour, vous avez 3 coups, à vous de réussir à me battre. Bon courage !<br><br>Ah oui, pensez à me parler en notation algébrique abrégée, c\'est le protocole.',
		url: '742c94f216ddd7a9f9eadea32b536dd0', // echec
		hint: 'Cf7#',
		end_text: 'Incroyable ! Ça faisait vraiment longtemps que quelqu\'un n\'avait pas réussi à me battre !',
		type: 'flag',
		flag: 'De8+ Cxe8 Cf7#',
		first_time_visited: null,
		delay_to_hint: 4,
		custom_js: 'log7.js',
		custom_html: 'log7',
		custom_css: 'log7.css'
	},
	{
		name: 'Destination de vacances',
		enigma_text: 'Il est temps de retourner prendre l’air, mais il s\'agit d’explorer un peu plus loin cette fois.<br>Je vous assure que cette épreuve va vous donner du fil à retordre. Voyez-vous, je connais bien cet endroit, mais impossible de me souvenir de ses coordonnées.<br>Encore un mauvais tour de ma mémoire vous voyez.',
		end_text: 'Excellent, je vais enfin pouvoir retourner en vac… Travailler, travailler bien sûr. Vous m’avez rendu un bon service.',
		url: '852488ddd9570bc877783bf4397563e0', // earth
		hint: 'Le grand frère aime ce genre de détails',
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
		// 0 255 151
		// 156 0 255
		name: 'Jeux de couleurs',
		enigma_text: 'Le lien inconnu, les couleurs relira et la sortie vous montrera',
		url: '4f4adcbf8c6f66dcfc8a3282ac2bf10a', // 404
		end_text: 'Et en plus de cela vous êtes un artiste ! Décidement vous me surprendrez toujours !',
		hint: 'Le lien cassé est sympa, il vous donnera du RGB',
		type: 'flag',
		flag: '#4e80cb',
		first_time_visited: null,
		delay_to_hint: 4,
		custom_js: 'log6.js',
		custom_html: 'log6',
		custom_css: ''
	},
	{
		name: 'Le compte est bon',
		enigma_text: '',
		url: '8732a49c2224037527f75c117f1e9b77', // Le compte est bon
		hint: '(...)^.../(...)+...',
		end_text: 'Bravo pour avoir terminé ces tests élémentaires. Dépêchons-nous, passons à la suite !',
		type: 'eval',
		flag: '42',
		caracter: ['18', '+', '5', '334', '(', '(', ')', '+', '1', ')^', '3', '/', '11', '*', '+', '23'],
		first_time_visited: null,
		delay_to_hint: 5,
		custom_js: 'log8.js',
		custom_html: 'log8',
		custom_css: 'log8.css'
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
