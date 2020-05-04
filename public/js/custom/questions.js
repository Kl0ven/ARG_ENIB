/* global $:true location:true */
/* eslint-disable max-len */

const r = [0, 'x', 0, 0, 0, 1, 0, 1, 'x', 0, 0, 'x', 1, 'x', 0, 0, 0, 'x', 'x', 'x', 0, 'x', 'x', 0, 1, 'x', 0, 0, 1, 0, 'x', 1, 0, 0, 1, 0, 0, 'x', 0, 'x', 'x', 'x', 'x', 0, 1, 'x', 1, 0, 0, 1, 1, 0, 1, 'x']; // string will be visible even with uglifier
const q = [
    'Vous êtes sur le site de ?#La DGSE#Interpol',
    'Comment allez-vous ?#Bien#Pas bien',
    'Je vais vous poser quelques questions, ça vous va ?#Oui#Non',
    'Ou est la gauche ?#Gauche#Droite',
    'Cliquez sur droite#Droite#Gauche',
    'Pas la Gauche#Gauche#Droite',
    'Pas pas à Droite#Droite#Gauche',
    'Gauche ?#Derecha#Izquierda',
    'Qui a chié dans l\'ascenseur pendant un apéro ?#Renaud#Amsterism',
    'Les memes à propos de ça :#Il s’agirait de grandir#caca fait sprooout',
    'Quel apéro a été annulé après cet apéro ?#4 Mars#8 Mars',
    'Est-ce la faute des 5A ?#Un peu quand même#à moitié',
    'Est ce que le percent a été annulé à cause de ça ?#Oui, je connais cette théorie#Non, on cherche justement',
    'Qui a cru que le percent était le 5 Mars ?#Whrape#Tout le monde vous voulez juste pas l’admettre',
    'Qui est allé à l’oktoberfest en Allemagne ?#Kaskayu et Mikasa#Haukain et Evo',
    'Quel est le surnom de Poulain ?#Bloody#Poupou',
    'Quand est l’anniversaire de Spasfon ?#18 Septembre#11 Mai',
    'Quand est le percent ?#Demain#Le 23 Mai',
    'Quand est la désinté ?#Après-Demain#Après le Percent',
    'Le demi est ?#Trop cher#Trop petit',
    'Comment s’écrit le surnom du président du BDE Odyssée ?#Bhymbhau#Bhymbau',
    'Quel est le point faible de Kayhops ?#Les doggos#Les chatouilles',
    'Le dimanche matin qu’est-ce qu’il faut faire ?#Dormir#Acheter des Navets pardis',
    'Qui est le DGS de l’ENIB ?#Mr Menager#Mr Redou',
    'Qui a joué le lapin dans le trailer Gala ?#Pasthagha#Jayzzer',
    'Quand a lieu le 54ème Gala de l’ENIB ?#Le 28 Mars#Le 17 octobre',
    'Quel phrase célèbre provient d’un 1A ?#“Si faut taper, moi je tape”#“Si faut boire, moi je bois”',
    'Où a eu lieu le WAF 2018 ?#Commana#Brignogan-Plage',
    'Quel était le meilleur WAF ?#Le WAF 2019#Ton WAF',
    'Comment nomme-t on cette petite viennoiserie contenant du chocolat ?#Pain au chocolat#Chocolatine',
    'J’espère que t’as pas essayé de cliquer sur “chocolatine”#Non#Je suis pas fou',
    'Qui a été directeur de l’ENIB en 2018 ?#Mr Michel#Mr Boné',
    'Le confinement se termine ?#Le 11 Mai#Jamais',
    'Qui attends son paiement parce qu’il vient d’OutreMer ?#Kayhops#Tissier',
    'Un gode peut être utiliser comme :#Une arme#Flip Bottle Challenge',
    'Un 5A qui ne va au prochain WAF doit :#Payer un m^3#livrer une barquette piégée',
    'Qui peut avoir écrit des questions pareil ?#Un 5A#Un mec random qui connait toute l’histoire de l’ENIB',
    'Et 1 et 2 et … ?#3 ptits chats#Tu sais à quoi je pense mais je l’écrirai pas !',
    'Le Full Pack :#ça claque#ça clak',
    'Tu fais quoi à 20h ?#J’applaudis#J’applaudis',
    'Facile les question pour le moment non ?#Oui EZ#Bof Bof',
    'On est presque à la moitié tiens le coup#Je me barre#J’ai rien d’autre à faire',
    'Aller on complique le tout maintenant#Oh NO !#Pfff pas peur',
    'Qu’est ce qu’il y a en Juin ?#Les soutenances de Stage#La fin du monde',
    'Quel évènement n’a pas encore été fait ?#Les Intras#Enib Adibou Challenge',
    'Les memes de NdCdFdE c’est ?#Il y a des memes claqués#j’ai connu mieux',
    'En quel année les S5O ayant rejoint la promo 2015 sont-ils arrivés?#2015#2017',
    'Quel est la durée d’un mandat de directeur ENIB ?#3 ans#4 ans',
    'Combien de temps maximum un directeur à l’ENIB peut exercer cette fonction ?#9 ans#12 ans',
    'Comment Ubisoft trouve t il de l’inspiration pour les titres des Assassin’s Creed ?#L’histoire en règle général#Piquer les idées de nom de BDE ENIB',
    'J’ai 4 chiens, 2 chats, 1 lapin, 2 canards et un nuage. En sachant que le premier doit être multiplié par le triple du second et que celui ci est multiplié par le quatrième et enfin soustrait par le double du 3ème, Quel est mon âge ?#23 ans#22 ans',
    'Combien y avait-il de personnes dans la promo 2015 en 1A ?#120 personnes#130 personnes',
    'Quel BDE était avant les Heroes ?#BDE Wild#BDE Snatch',
    'Bizarre je ne trouve AUCUN RÉSULTAT alors que 30ème questions sont passées#Fuck#OK'
];
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
