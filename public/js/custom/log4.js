/* global $:true location:true */

let r = [1, 1, 0, 0, 'x']; // string will be visible even with uglifier
let q = 'Comment ça va ?#Bof#Bien !|Ceci est un petit test amusant !#Non#Oui|Où est la gauche ?#Gauche#Droite|Ou est la droite ?#Droite#Gauche|Est-ce que tu aimes le fromage ?#Non#Oui';
q = q.split('|');
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
