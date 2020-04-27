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
        hint: 'TODO',
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
        hint: 'TODO',
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
        hint: 'TODO',
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
        hint: 'TODO',
        type: 'flag',
        flag: 'boss',
        first_time_visited: null,
        delay_to_hint: 4,
        custom_js: 'photo_enib.js',
        custom_html: 'photo_enib',
        custom_css: ''
    }
];
