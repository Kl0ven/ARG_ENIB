/* global $:true location:true */

let r = ['x', 0, 0, 0, 0, 0, 1, 0, 'x', 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 'x', 'x', 'x']; // string will be visible even with uglifier
let q = ['Comment allez-vous ?#Bien#Pas bien',
	'Je vais vous poser quelques questions, ça vous va ?#Oui#Non',
	'Ou est la gauche ?#Gauche#Droite',
	'Cliquez sur droite#Droite#Gauche',
	'Je dois aussi vous poser quelques questions de mathématiques, pour être sûr que vous restiez éveillés, ça vous va ?#Oui#Non',
	'Complétez la suite logique : 1,2,3,4, …#5#6',
	'Combien font 8x9 ?#56#72',
	'Et (387*459)/34 ?#5224.50#5223.5',
	'Le demi est ?#Trop cher#Trop petit',
	'Haut haut bas bas gauche droite gauche droite B … et après ?#B start#A start',
	'[Question 10/150] On continue ?#Non#Oui',
	'Tant que j’y pense, le mot de passe est “password”, vous vous en souviendrez, pas vrai ?#Oui#Non',
	'C’était mieux ?#Avant#En vrai, c’est pas si mal maintenant il faut arrêter d’être aigri',
	'On la remplit avec quoi la voiture de Evo ?#Du diesel#De l’essence',
	'Et elle démarre ?#Oui#Non',
	'En quelle année l’ENIB a t’elle été créée ?#1968#1961',
	'Qu’est-ce que vous préférez ?#l’ENIB#l’INSA de Strasbourg',
	'Quand est sorti le Goëland de mars ?#Mars#Avril',
	'Quand est sorti le Goëland de septembre ?#Septembre#Novembre',
	'Le percent c’est ?#Demain#Le 23 mai',
	'J’ai perdu le fil, à quelle question est-t-on déjà ?#21#22',
	'22 ?#23#ALLEZ !',
	'Quel est le surnom du futur ex prèz BDE ?#Bhymbhau#Bhymbau',
	'Quelle est la forme du foyer et de la MDA ?#Une roue#Un engrenage',
	'Et le toit#Résiste#S\'écroule',
	'Dans le BDE, le DD c\'est#Un club#Un pôle',
	'Quel était le thème du Gala de 2017 ?#New Orleans#New Delhi',
	'Qui est tombé le premier ?#Le bouleau#Le lampadaire',
	'Quel est le statut de la junior de l\'ENIB ?#Une Pépinière Junior Entreprise©#Bientôt plus rien du tout, parce qu\'ils n\'ont pas fait les papiers',
	'Quel est l\'ingrédient principal du sandwich raclette ?#La raclette#Les oignons grillés',
	'Les quoi ?#Oignons#Onions',
	'Le potentiel futur prez’ BDE c’est ?#Bender#Fenwick',
	'Mais de toute façon quelle importance car le meilleur BDE c’est ?#Odyssée#Odyssée',
	'Allez, le questionnaire est terminé ! N’oubliez pas de convertir le mot de passe que je vous avais transmis en md5 afin de pouvoir sortir d’ici !#Ca marche !#Ok !'];
let questionDiv;
let denyB;
let allowB;

let i = 0;

$(document).ready(function () {
	questionDiv = document.getElementById('qtext');
	denyB = document.getElementById('deny');
	allowB = document.getElementById('allow');

	denyB.addEventListener('click', function () {
		answered(0);
	});

	allowB.addEventListener('click', function () {
		answered(1);
	});

	if (i !== 0 || q.length !== r.length) location.reload();
	setQuestion(i);
});

function setQuestion (lvl) {
	if (lvl < q.length) {
		questionDiv.innerHTML = q[lvl].split('#')[0];
		denyB.innerHTML = q[lvl].split('#')[1];
		allowB.innerHTML = q[lvl].split('#')[2];
	}
}

function answered (s) {
	if (i < r.length) {
		if (r[i] === 'x') {
			i++;
		} else if (s === r[i]) {
			i++;
		} else {
			i = 0;
		}
		setQuestion(i);
	}
}
