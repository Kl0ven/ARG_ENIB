/* eslint-disable max-len */
module.exports = [
    {
        name: 'TODO',
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
        name: 'TODO',
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
    }
];
