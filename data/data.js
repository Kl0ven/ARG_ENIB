/* eslint-disable max-len */
module.exports = [
    {
        name: 'Transmission suspecte',
        enigma_text: `Bon cette histoire de CIA, c'était peut être un peu trop gros pour nous là.Mais ne perdons pas espoir, car on a une nouvelle piste. <br>
                      Un informateur a intercepté une communication entre quelqu'un de l'ENIB et une tierce personne.La conversation était cryptée, ce qui a alerté notre suspicion: <br>
                      pourquoi parler en crypté si on a rien a caché? <br>
                      De la conversation, on a réussi a déchiffrer 3 mots.<br><br>
                      Les 3 mots sont: <span class="watchme">plaise_démarrant_golfeur</span><br><br>
                      Avec ça, on doit pouvoir identifier qui transmettait et d'où. A vous de trouver d'où la transmission provient.`,
        end_text: `Les scientologues ! <br>
                   Ça c'est une bonne piste, niveau magouille ils ont de l'expérience. Ce serait donc eux qui seraient à l'origine de cette sombre histoire ?<br>
                   Mais quel est donc le contenu de cette transmission, et que veulent ils à l'ENIB ?`,
        url: '90003ef478d3809b4beed751018b1feb', //  3words
        hint: `Il doit être possible de transormer 3 mots en position géographique.`,
        type: 'geo',
        latA: 48.849192,
        longA: 2.368795,
        latB: 48.848916,
        longB: 2.369383,
        first_time_visited: null,
        delay_to_hint: 2,
        custom_js: '',
        custom_html: '3words',
        custom_css: ''
    },
    {
        name: 'Opération "opération" ',
        enigma_text: `Ok, alors on a fouillé pour regarder sur ce qu'on avait sur les Scientologues. On a réussi à trouver leur canal de transmission crypté, mais il est sécurisé d'une manière assez originale, on a besoin d'aide là dessus. <br>
                      Il s'agit d'un compte est bon, il faut remplir la bonne opération avec les éléments donnés.<br>
                      Avec ça, on sera en mesure de décrypter leurs communications et voir ce qu'il en est.`,
        url: '47ff7827ce0982e459735c3c857d7bb5', // Le compte est bon
        hint: '(((...)^...)/...)-...',
        end_text: `Bien joué ! Grace à ça, on a décrypté le message, et tenez vous bien, il s'agit d'une conversation entre un Scientologue star bien connu et une vraie star de l'enib également. <br><br>
                   Conversation décryptée : <br>
                   Tom Cruise : La scientologie n’est plus en vogue mec, et bien que je me suis remplie les poches avec il faut abandonner cette idée<br><br>
                   Arnaud Laurent : Ouais je comprends, je t'avais dès le début que c'était foireux, j’ai fait les stats ! Tu viens au % cette année, j’espère, tu vas pas me faire un faux pas comme toutes les années précédentes ?<br><br>
                   Tom Cruise : Yes, j’ai vraiment hâte de participer cette année, wouldn’t miss it for the world !<br><br>
                   Hé bah ça alors, Laurent et Tom Cruise ? C'est vrai que Laurent à une ancienne carrière d'acteur à Hollywood de 92 à 94 (Information classifiée, ne le répétez pas sur tous les toits).<br><br>
                   Fausse piste donc ! Mais au moins on est sûr que ce n'est pas les Scientologues qui sont derrière tout ça. `,
        type: 'eval',
        flag: '42',
        caracter: ['(', '(', '(', '5', '!', '-', '10', '5', ')', '^', '3', ')', '/', '75', ')', '-', '3'],
        first_time_visited: null,
        delay_to_hint: 5,
        custom_js: 'le_compte_est_bon.js',
        custom_html: 'le_compte_est_bon',
        custom_css: 'le_compte_est_bon.css'
    },
    {
        name: 'Rendez vous en terre inconnue',
        enigma_text: `Retour à la case départ donc.. Mais ne perdons pas espoir car de nouveau, une conversation suspecte a été interceptée !<br>
                      Cette fois ci, seule une partie du message est cryptée, le message est le suivant :<br><br>
                      RDV ici : ”++++++++++[>+>+++>+++++++>++++++++++<<<<-]>>>++++++++++.>+++++.------.<<++.>------------.>++.<<.>--.>++++++++++++++++.--------------.------.+++++++++++++++++.-----------------.++.+++++.” à 00h01 le 15 avril, pour parler de notre plan machiavélique contre c’est salaud d’enibien !!<br>
                      Ce message est plus suspect que l'historique fiscal de Patrick Balkany. Il faut trouver ce lieu de rdv pour en savoir plus.`,
        end_text: `Bugarach ? <br>
                   Village dont le pic est rempli de souterrains qui sont dit abrités par des bases extraterrestres. C’est une ville bien connue de Sylvain Duriff, rien autre que l'homme vert, le grand monarque cosmique. Ce serait donc lui qui est l’origine de cette transmission, il serait en communication avec qui les Aliens ? Pourquoi ? Et que veulent-ils aux enibiens ?`,
        url: 'd491026f88448d64da71adc005d96fc5', //  sylainduriff
        hint: 'Ce code ma cassé le cerveau',
        type: 'geo',
        latA: 42.864984,
        longA: 2.378783,
        latB: 42.864142,
        longB: 2.379692,
        first_time_visited: null,
        delay_to_hint: 2,
        custom_js: '',
        custom_html: 'brainfuck',
        custom_css: ''
    },
    {
        name: 'Idée lumineuse',
        enigma_text: `Le soir du rendez vous, nous avons envoyé un drone espion, il a réussi à repérer Sylvain Duriff sur le Pic de Bugarach et à enregistrer une vidéo du ciel avant de s'écraser pour des raisons mystérieuses. <br> 
                      Dans ciel, une lumière de couleurs vives clignotait de façon étrange!  <br>
                      Qu'est-ce que veux dire ce flash de mystérieux ? Ça doit être un message des aliens pour le grand Sylvain Duriff, mais quel en est le sens ?<br>
                      Voici une retranscription :`,
        url: '431d180fb4d475f30c9596ad5a7267d6', // Sabotage
        end_text: `Sabotez le no limit ? Haaaa mais oui bien sur, on a déjà reçu des messages d’avertissement des aliens, mais bon ça passe vite en spam dans la boite mail enib. <br>
                   En effet, askip les basses des no limit sont trop forte et perturbent leurs communications vers Orion la nuit, donc ils se plaignent et c’est pas la première fois ni les seuls d'ailleurs. <br>
                   On leur a envoyé un mail d'excuse, ils sont chill en vrai, et ils ont rien contre le %. Fausse piste de nouveau...`,
        hint: 'Leur clignonement, ça ressemble à un code...',
        type: 'flag',
        flag: 'sabotezlenolimit',
        first_time_visited: null,
        delay_to_hint: 4,
        custom_js: 'morse.js',
        custom_html: 'morse',
        custom_css: 'morse.css'
    },
    {
        name: 'Un infiltré ?',
        enigma_text: `Retour à la case départ. Mais pas sans piste car il semblerait que notre enquête se soit ébruitée... On a reçu ce message anonyme :<br><br>
                      Salutation Bureau des Énigmes. Je te contacte car j’ai été envoyé en mission par le passé pour annuler le %. Cette opération remonte à plus de 10 ans maintenant. Pour savoir si je peux te faire confiance et que tu me prouve tes talents d'enquêteur, transmet moi un mot de 4 lettres qui me prouve que tu m’as identifié lors de l’évenement du % ou je me suis infiltré. Pour t’aider 2 mots : <span class="watchme">lapin & cône de signalisation</span>.<br><br>
                      Quoi ? Des opérations ont déja été menées pour annuler le % dans le passé ? Mais qui en est l'auteur ? Et pourquoi ?<br>
                      Il faut absolument que nous gagnions sa confiance pour en savoir plus ! A vous de trouvez ce mot.`,
        url: '4022e656356543240331d4e7eb07904c', // infiltré
        end_text: `On lui a transmis le mot, ça m'a l'air d'être ça ! Voila ce qu'il nous a répondu :<br><br>
                   Bien joué, vous m'avez identifié. C'était ma première mission en tant que reptilien infiltré, et mon costume défaillant m'a obligé à improviser. Oui, vous avez bien lu, je suis un reptilien. Nous existons et sommes infiltrés dans toutes les strates de l'organisation humaine. Notre but était à la base de déstabiliser vos institutions politique pour vous détruire de l'intérieur, mais on s'est vite rendu compte que laisser les faire les humains était bien plus efficace. Depuis, on supervise de loin. Et on se marre bien.<br><br>
                   Woah ok les reptiliens maintenant, rien que ça. Il n'a pas l'air de nous vouloir du mal j'ai l'impression... On a gagné sa confiance, essayons maintenant d'en savoir plus sur cette opération pour savoir si elle peut nous aider à résoudre notre mystère.`,
        hint: '"Je devais porter un pull blanc"',
        type: 'flag',
        flag: 'boss',
        first_time_visited: null,
        delay_to_hint: 4,
        custom_js: 'photo_enib.js',
        custom_html: 'photo_enib',
        custom_css: ''
    },
    {
        name: 'Opération quoi ?',
        enigma_text: `Ok on lui a demandé de nous transmettre des infos sur cette fameuse opération, voila ce qu'il nous répondu :<br><br>
                      "Je ne peux pas vous en parler ici. Trop dangereux. Je vous transmet ce message via une façon détournée. Voici l'information pour y accéder : 4 - 3 - 21 - 341 <a href="/images/raw.txt" download>raw.txt</a>. Transmettez moi le nom de l'opération contenu dans le message pour que je sache que vous l'avez bien trouvé." <br><br>
                      Ok donc il faut trouver un message via cette suite de chiffre et ce fichier... A vous de jouer !`,
        url: 'e0c9228f32b36d9a2653fcef8c74f9fc', // babel
        end_text: `Ok donc les reptiliens ont voulu se venger pour une histoire de maltraitance de poules. Compréhensible, c'est un peu leur lointains cousins je suppose. Mais bon il s'est bien rendu compte que si on fait organise tout ça c'est pas pour heurter qui que ce soit mais bien pour s'amuser. Il m'a m'a l'air tout a fait sympathique ce reptilien en fait, faudra l'inviter a boire un verre un de ces quatres.<br><br>
                   C'est bien beau cette histoire, mais après lui avoir demandé confirmation, il nous affirme que ce ne sont pas eux qui sont à l'origine de notre mystère. Il n'aurait aucun intêret à annuler le % cette année, il voulait même y participer.<br><br>
                   Encore une fausse piste...`,
        hint: 'D\'après mes recherches, cela a quelque chose à voir avec l\'écrivain Jorge Luis Borges',
        type: 'flag',
        flag: 'Percent Froid',
        first_time_visited: null,
        delay_to_hint: 4,
        custom_js: '',
        custom_html: 'library',
        custom_css: ''
    },
    {
        name: 'Le Bourreau d\'ENI',
        enigma_text: `Alerte ! On a été hacké ! Mais il semblerait que ce mystérieux hacker ne nous veuille pas de mal... Voici le message qu'il nous a laissé :<br><br>
                      "J'ai cru comprendre que vous cherchiez qui pourrait en vouloir à l'ENIB, mais que pour l'instant vous enchaînez les fausses pistes. Je sais qui est à l'origine de tous vos soucis. Il s'agit du Bourreau d'ENI. Si vous voulez en savoir plus, il va falloir me montrer un peu vos compétences, on rentre dans la cours de grand là.
                      J'ai caché un lien vers une image au sein même de votre site, seul un programme peut trouver l'emplacement. Transmettez-moi un mot qui me prouve que vous avez trouvé l'image et je vous dirais tout ce que je sais sur le Bourreau." <br><br>
                      Il a caché une image sur notre site ? Ce hacker est compétent.. On n'a pas d'autre choix que de lui obéir, il semblerait... Et puis son histoire est intrigante, toute information est bonne à prendre.<br>
                      A vous de jouer !`,
        url: 'e3d96c321f2a71cb81cd7d5f05f1a8d7', // eni
        end_text: `"Bien joué, vous vous êtes montrés à la hauteur. Je vais maintenant vous dire tout ce que je sais : Le Bourreau d'ENI est un individu malveillant qui voue une haine sans limite aux soirées, aux apéros, aux pintes pas chères et à l'amusement étudiant, à ceux du groupe ENI en particulier! Son l'identité exacte m'échappe toujours. Ce que je sais par contre, c'est qu'il a été activement impliqué dans la destruction de l'ENI Val de Loire et sa transformation en INSA. Sale histoire.. J'avais réussi à trouver une piste de son passage à Brest, mais récemment, j'ai perdu sa trace. Je suis sûr qu'il est a l'origine de cette pandémie avec pour vue d'annulation de %. <br>
                   On poursuit un but commun, c'est pourquoi je vous propose d'allier nos forces. Je dois vous prévenir que c'est un individu puissant et dangereux, je prends des risques en vous révélant cela.<br>
                   D'ailleurs j'en ai bien trop dit en un seul message. Je vous recontacte bientôt, je suis sur une piste pour retrouver sa trace et j'aurais sûrement besoin de votre aide.."<br><br>
                   Le bourreau hein.. ça m'a tout l'air d'être un suspect idéal. Joindre nos forces avec ce hacker est la meilleure chose à faire. Notre but est désormais de trouver l'identité exacte de ce bourreau et voir si il a vraiment été impliqué dans l'annulation du % !`,
        hint: 'J\'ai entendu parler d\'une methode, le Web-Scrapping',
        type: 'flag',
        flag: 'justice',
        first_time_visited: null,
        delay_to_hint: 4,
        custom_js: '',
        custom_html: 'hidden',
        custom_css: ''
    },
    {
        name: 'SOS !',
        enigma_text: `Des nouvelles de notre hacker, mais pas des bonnes ! On vient de recevoir cette image à l'instant :<br>
                      Il a l'air en danger, et vu ce qu'il nous a dit que le Bourreau, ça m'étonnerait que ce soit une blague..<br>
                      On ne sait pas qui il est, ni où il est, on ne peut pas lui venir en assistance, il faut que vous nous aidiez à trouver les coordonnées GPS d’où a été envoyé cette image pour qu’on puisse envoyer des secours !`,
        end_text: `On a envoyé une équipe d'intervention aux coordonnées que vous nous avez fourni : le lieu était saccagé, avec des traces d’effraction et de lutte, et tous les appareils électroniques sabotés. On pense que notre hacker a été kidnappé… Si c'est ce fameux bourreau qui a fait ça, il est réellement dangereux, il va falloir faire très attention en faisant des recherches de notre côté sur son identité.`,
        url: 'e9a23cbc455158951716b440c3d165e0', // meta
        hint: 'Le grand frère aime ce genre de détails',
        type: 'geo',
        latA: 48.8576526,
        longA: 7.770536,
        latB: 48.575837,
        longB: 7.771070,
        first_time_visited: null,
        delay_to_hint: 2,
        custom_js: 'photo.js',
        custom_html: 'photo',
        custom_css: 'photo.css'
    },
    {
        // 0 255 151
        // 156 0 255
        name: 'Habiles déductions',
        enigma_text: `Ok, donc on veut trouver des informations sur l’identité du fameux Bourreau ?<br>
                      Faisons un petit recap de ce qu'on sait et utilisons nos talents de détective pour dégager une piste :<br>
                      On sait qu'il agit en France et déteste les événements étudiants avec de la bière pas chère. Il est donc de droite.<br>
                      De plus, il dispose d'une force de frappe considérable, pouvant kidnapper une personne sans que les force de l'ordre ne s'en mêlent.. Peut-être que le bourreau n'est pas une seule personne, mais une sorte d'organisation ?<br>
                      Finalement, il s'en prend aux petites écoles dans un but d’uniformisation et de centralisation d'écoles supérieures.<br>
                      Récapitulons : Une organisation de droite, agissant en France, disposant d'une immunité sur toutes les violences qu'elle applique, et avec une tendance à tout vouloir centraliser.<br>
                      Hé, bah, je ne sais pas vous, mais moi ça me rappelle tout simplement le Gouvernement Français non ? Hein MACRON LA.<br>
                      Pardon, je m'emporte.<br>
                      En vrai, c'est une piste à creuser, et puis si ce ne sont pas eux, on pourra sûrement trouver des informations utiles.<br>
                      Notre plan est de hacker le service de renseignements français, on va essayer de voir si on trouve des infos sur des opérations liées au ENIs.<br>
                      On a fouillé le site des services de renseignements français et on est bloqué sur un système de cryptage qui nous bloque, on a besoin d’aide.<br>
                      On vous a caché les codes sur notre site, je vous laisse les trouver !`,
        url: 'bd8d11f8d55119fa2e2eb9e8c3095ee3', // spectre
        end_text: `Ok on a fouillé un peu, rien sur des plans de sabotage d’ENI ou de création de pandémie mondiale en vue d’annulation de %… Juste des fraudes fiscales et des abus de pouvoir, rien de nouveau me direz vous.<br>
                   Bon ok, le gouvernement ce n'est pas le bourreau, enfin pas celui qu’on cherche.<br>
                   Par contre on a accès a toutes les données de la DGSE, une grande mine d’informations, on peut concentrer nos recherches sur l’identité du bourreau, mais ça a l’air de prendre la forme d’un questionnaire galère…`,
        hint: 'RFC3986',
        type: 'flag',
        flag: '#b57480',
        first_time_visited: null,
        delay_to_hint: 4,
        custom_js: 'spectre.js',
        custom_html: 'spectre',
        custom_css: ''
    }
];
