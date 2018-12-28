let r = '1100x'
let q = 'Comment ça va ?#Bof#Bien !|Ceci est un petit test amusant !#Non#Oui|Où est la gauche ?#Gauche#Droite|Ou est la droite ?#Droite#Gauche|Est-ce que tu aimes le fromage ?#Non#Oui';
q = q.split('|');

let i = 0;

let questionDiv = document.getElementById('qtext')
let denyB = document.getElementById('deny');
let allowB = document.getElementById('allow');

denyB.addEventListener('click', function(){
	answered(false);
});

allowB.addEventListener('click', function(){
	answered(true);
})

$(document).ready(function () {
	if(i!=0 || q.length!=r.length) location.reload();
	setQuestion(i);
});

function setQuestion(lvl)
{
	if(lvl<q.length)
	{
		questionDiv.innerHTML = q[lvl].split('#')[0];
		denyB.innerHTML = q[lvl].split('#')[1];
		allowB.innerHTML = q[lvl].split('#')[2];
	}
}

function answered(s)
{
	if(i<r.length)
	{
		console.log("rep : ",r[i],", act rep : ",s);
		if (r[i] == 'x'){
			i++ ;
			console.log("Bonne réponse (Peu importe)") ;
		}
		else if(s==r[i]) {
			i++;
			console.log("Bonne réponse ") ;
		}
		else {
			i=0; console.log("Mauvaise réponse") ;
		}
		setQuestion(i);
	}
}
