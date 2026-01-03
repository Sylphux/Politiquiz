// The test compares two themes. 
// You can add custom opposed themes pairs here to create your own test
// format :         theme1_theme2: [element1 starting points, element2 starting points, neutral starting points]
//                  Use "$" for space in the name of the key

themes = {
    Progressisme_Conservatisme: [0, 0, 0],
    Constructivisme_Essentialisme: [0, 0, 0],
    Écologie_Productivisme: [0, 0, 0],
    Justice$réhabilitative_Justice$punitive: [0, 0, 0],
    Décolonialisme_Néocolonialisme: [0, 0, 0],
    Internationalisme_Nationalisme: [0, 0, 0],
    Anarchisme_Étatisme: [0, 0, 0],
    Démocratie_Authoritarisme: [0, 0, 0],
    Révolution_Réformisme: [0, 0, 0],
    Communisme_Capitalisme: [0, 0, 0],
    Liberté_Sécurité: [0, 0, 0],
    Décentralisation_Centralisation: [0, 0, 0]
}

// Add your custom questions here
// format [question, theme, false if true with first theme, true if true with second theme]

questions = [
  // Progressisme_Conservatisme
  ["Les femmes ne devraient pas sortir seules la nuit", themes.Progressisme_Conservatisme, true],
  ["Les homosexuels ne devraient pas pouvoir se marier / avoir des enfants", themes.Progressisme_Conservatisme, true],
  ["Les pronoms des personnes trans doivent être respectés", themes.Progressisme_Conservatisme, false],
  ["L'avortement devrait être un droit universel", themes.Progressisme_Conservatisme, false],
  ["Il est nécessaire de repousser l'âge de départ à la retraite pour sauver l'économie", themes.Progressisme_Conservatisme, true],
  ["L'école doit transmettre nos valeurs et nos traditions", themes.Progressisme_Conservatisme, true],
  ["L'école ne nous apprend pas suffisamment la pensée critique", themes.Progressisme_Conservatisme, false],
  ["Légaliser le port d'arme rendrait mon pays plus sûr", themes.Progressisme_Conservatisme, true],
  ["Le mariage légal doit être aboli", themes.Progressisme_Conservatisme, false],
  ["Les traditions doivent être remises en question", themes.Progressisme_Conservatisme, false],
  ["L'égoisme est en grand partie explicable biologiquement chez l'être humain", themes.Progressisme_Conservatisme, true],
  ["Une femme avec un bodycount élevé est repoussante", themes.Progressisme_Conservatisme, true],
  ["Un homme avec un bodycount élevé est attirant", themes.Progressisme_Conservatisme, true],
  ["Des preuves scientifiques remettant en question mes idées peuvent me faire changer d'avis sur des sujets de société", themes.Progressisme_Conservatisme, false],
  ["Je ne crois que ce que je vois, même si la science dit le contraire", themes.Progressisme_Conservatisme, true],
  ["L'amour libre est voué à l'échec", themes.Progressisme_Conservatisme, true],
  ["L'influence de la religion doit diminuer", themes.Progressisme_Conservatisme, false],
  ["La connaissance de l'histoire permet d'éviter de reproduire les erreurs du passé", themes.Progressisme_Conservatisme, false],
  ["Le sexisme et le racisme sont encore très présents", themes.Progressisme_Conservatisme, false],
  ["Les personnes LGBT demandent trop d'attention", themes.Progressisme_Conservatisme, true],
  ["Dans une société, il est acceptable que les plus faibles vivent moins longtemps que les plus forts", themes.Progressisme_Conservatisme, true],

  // Constructivisme_Essentialisme
  ["Il n'est pas naturel d'être homo sexuel", themes.Constructivisme_Essentialisme, true],
  ["Les femmes sont naturellement moins bonnes aux jeux vidéos que les hommes", themes.Constructivisme_Essentialisme, true],
  ["Il est naturel que les hommes soient plus agressifs que les femmes dans notre société", themes.Constructivisme_Essentialisme, true],
  ["Le genre est une construction sociale", themes.Constructivisme_Essentialisme, false],
  ["Les agressions sexuelles sont dues à des pulsions naturelles", themes.Constructivisme_Essentialisme, true],
  ["Les différences sociales entre certains groupes ethniques sont explicables par la biologie", themes.Constructivisme_Essentialisme, true],
  ["La réussite est en partie due à l'intelligence naturelle des individus", themes.Constructivisme_Essentialisme, true],
  ["L'orientation sexuelle est une construction sociale", themes.Constructivisme_Essentialisme, false],
  ["La majorité des traits de personnalité d'une personne sont dus à la génétique", themes.Constructivisme_Essentialisme, true],

  // Écologie_Productivisme
  ["Il faut produire plus de nourriture pour éliminer les famines", themes.Écologie_Productivisme, true],
  ["Le gain en productivité gagné avec l'intelligence artificielle est bénéfique pour l'humanité", themes.Écologie_Productivisme, true],
  ["L'exploitation de l'environnement est nécessaire pour augmenter le niveau de vie des humains", themes.Écologie_Productivisme, true],
  ["Le transhumanisme est bénéfique pour l'humanité car il permet d'améliorer nos capacités", themes.Écologie_Productivisme, true],
  ["Il faut conserver les écosystèmes quitte à perdre en rentabilité économique", themes.Écologie_Productivisme, false],
  ["Il est préférable d'avoir une agriculture variée, même si les rendements sont inférieurs à la monoculture", themes.Écologie_Productivisme, false],
  ["Nous devrions manger moins de viande pour des raisons écologiques", themes.Écologie_Productivisme, false],
  ["Il est plus écologique de construire des éoliennes que de maintenir des centrales nucléaires", themes.Écologie_Productivisme, true],
  ["L'utilisation de l'IA est mandatoire pour maintenir la croissance économique du pays", themes.Écologie_Productivisme, true],
  ["Le progrès technologique ne doit pas changer la société trop rapidement", themes.Écologie_Productivisme, false],
  ["Il faut combattre le réchauffement climatique", themes.Écologie_Productivisme, false],
  ["Il faut continuer à construire des mines pour palier aux futurs manques de matière première", themes.Écologie_Productivisme, true],
  ["La colonisation spatiale est une façon envisageable de permettre à notre espèce de prospérer", themes.Écologie_Productivisme, true],
  ["La plupart du temps, le choix le plus écologique est de moins consommer", themes.Écologie_Productivisme, false],
  ["Il faut investir dans la recherche pour augmenter la productivité", themes.Écologie_Productivisme, true],

  // Justice$réhabilitative_Justice$punitive
  ["La prison est une institution indispensable dans une société civilisée", themes.Justice$réhabilitative_Justice$punitive, true],
  ["Les peines judiciaires lourdes sont dissuasives", themes.Justice$réhabilitative_Justice$punitive, true],
  ["Le rôle du système judiciaire est de punir les individus pour les crimes qu'ils commettent", themes.Justice$réhabilitative_Justice$punitive, true],
  ["Il faut rétablir la peine de mort", themes.Justice$réhabilitative_Justice$punitive, true],
  ["Les prisonniers devraient avoir plus de dignité", themes.Justice$réhabilitative_Justice$punitive, false],
  ["La peine de mort est parfois justifiée", themes.Justice$réhabilitative_Justice$punitive, true],
  ["Il faut accompagner les détenus dans leur réinsertion une fois sortis de prison", themes.Justice$réhabilitative_Justice$punitive, false],

  // Décolonialisme_Néocolonialisme
  ["Les peuples devraient pouvoir prendre leur indépendance s'il le souhaitent", themes.Décolonialisme_Néocolonialisme, false],
  ["La colonisation n'existe plus aujourd'hui", themes.Décolonialisme_Néocolonialisme, true],
  ["Il est acceptable que mon pays ait une forte influence culturelle sur d'autres pays", themes.Décolonialisme_Néocolonialisme, true],
  ["Il est justifiable d'intervenir militairement dans un autre pays pour des raisons économiques ou politiques", themes.Décolonialisme_Néocolonialisme, true],
  ["Il est acceptable pour un pays d'implanter ses moyens de production et/ou sa main d'œuvre dans d'autres pays plus pauvres", themes.Décolonialisme_Néocolonialisme, true],
  ["Il est normal de partir en vacances dans des pays plus pauvres pour profiter des prix plus bas", themes.Décolonialisme_Néocolonialisme, true],
  ["Mon pays doit reconnaître les crimes qu'il a commis dans d'autres pays", themes.Décolonialisme_Néocolonialisme, false],
  ["Ma religion doit se propager le plus loin possible géographiquement", themes.Décolonialisme_Néocolonialisme, true],
  ["Il est nécessaire de se renseigner sur l'histoire d'un pays et d'apprendre sa langue avant de le visiter", themes.Décolonialisme_Néocolonialisme, false],
  ["Le passé colonial de mon pays représente une fierté", themes.Décolonialisme_Néocolonialisme, true],

  // Internationalisme_Nationalisme
  ["Toute personne vivant dans un pays devrait pouvoir y voter", themes.Internationalisme_Nationalisme, false],
  ["Les flux migratoires doivent être régulés", themes.Internationalisme_Nationalisme, true],
  ["Cela ne me dérange pas que plusieurs langues soient parlées dans mon pays", themes.Internationalisme_Nationalisme, false],
  ["La langue de mon pays doit être définie et régulée par des autorités compétentes", themes.Internationalisme_Nationalisme, true],
  ["Ma nation a des valeurs et des traditions et il est important de les défendre", themes.Internationalisme_Nationalisme, true],
  ["Il faut être patriote", themes.Internationalisme_Nationalisme, true],
  ["Je me sentirais concerné s'il faut partir en guerre pour mon pays", themes.Internationalisme_Nationalisme, true],
  ["Mourir pour sa nation est un honneur", themes.Internationalisme_Nationalisme, true],
  ["Les personnes d'origine locale doivent avoir plus d'aides pour trouver un travail que les étrangers", themes.Internationalisme_Nationalisme, true],
  ["Si deux pays voisins ont les mêmes systèmes politiques et économiques, le libre échange entre eux est une chose positive", themes.Internationalisme_Nationalisme, false],
  ["Il est important de créer un sentiment d'appartenance à la nation", themes.Internationalisme_Nationalisme, true],
  ["Je me sens tout autant concerné par les habitants de mon pays que par ceux des autres pays", themes.Internationalisme_Nationalisme, false],

  // Anarchisme_Étatisme
  ["Un peuple doit être dirigé par un leader", themes.Anarchisme_Étatisme, true],
  ["La police telle qu'on la connaît ne devrait pas exister", themes.Anarchisme_Étatisme, false],
  ["Une structure de pouvoir verticale est à privilégier à une structure de pouvoir horizontale", themes.Anarchisme_Étatisme, true],
  ["Un état est un régime autoritaire en puissance", themes.Anarchisme_Étatisme, false],
  ["Un peuple est capable de s'autogérer à petite échelle", themes.Anarchisme_Étatisme, false],
  ["Un peuple est capable de s'autogérer à grande échelle", themes.Anarchisme_Étatisme, false],
  ["Les institutions religieuses ne doivent pas avoir de pouvoir sur la société", themes.Anarchisme_Étatisme, false],
  ["Il faut s'affranchir de l'autorité", themes.Anarchisme_Étatisme, false],
  ["La coercition est nécessaire au bon fonctionnement d'une société", themes.Anarchisme_Étatisme, true],

  // Démocratie_Authoritarisme
  ["Les policiers devraient avoir le droit de tirer à vue si la situation l'exige", themes.Démocratie_Authoritarisme, true],
  ["Les manifestations non déclarées devraient être interdites", themes.Démocratie_Authoritarisme, true],
  ["Les décisions politiques ne devraient pas être prises par un petit groupe de personnes", themes.Démocratie_Authoritarisme, false],
  ["Il peut y avoir du bon dans certaines formes de dictatures", themes.Démocratie_Authoritarisme, true],
  ["La monarchie est une bonne façon de fédérer un peuple", themes.Démocratie_Authoritarisme, true],
  ["Les référendums sont un risque pour la nation", themes.Démocratie_Authoritarisme, true],
  ["La police doit être armée", themes.Démocratie_Authoritarisme, true],
  ["L'ordre doit être respecté en toute circonstance", themes.Démocratie_Authoritarisme, true],

  // Révolution_Réformisme
  ["Il est nécessaire de respecter la loi même pour contester les actions d'un gouvernement", themes.Révolution_Réformisme, true],
  ["La violence contre l'État et les forces de l'ordre peut être nécessaire dans certaines situations", themes.Révolution_Réformisme, false],
  ["Le système peut être modifié en profondeur grâce au système électoral", themes.Révolution_Réformisme, true],
  ["Il peut être nécessaire de prendre les armes au sein de son pays pour défendre ses idéaux", themes.Révolution_Réformisme, false],
  ["Il est contre-productif de transformer radicalement la société. Il vaut mieux opérer des changements progressivement", themes.Révolution_Réformisme, true],
  ["Les associations et mouvements activistes sont nécessaires pour s'occuper des choses que les politiques ignorent", themes.Révolution_Réformisme, false],
  ["Il faut toujours se désolidariser des manifestants et activistes violents", themes.Révolution_Réformisme, true],
  ["Les mouvements révolutionnaires sont déterminés à mal se finir", themes.Révolution_Réformisme, true],

  // Communisme_Capitalisme
  ["Certains individus ont plus de mérite que d'autres", themes.Communisme_Capitalisme, true],
  ["Un entrepreneur devenu millionnaire a plus de mérite qu'un ouvrier au SMIC", themes.Communisme_Capitalisme, true],
  ["Les amendes doivent être plus chères pour les personnes les plus aisées", themes.Communisme_Capitalisme, false],
  ["Le monde du travail est trop réglementé", themes.Communisme_Capitalisme, true],
  ["La privatisation des entreprises est bonne pour l'économie", themes.Communisme_Capitalisme, true],
  ["Les traités de libre échange sont bénéfiques pour la santé économique de mon pays", themes.Communisme_Capitalisme, true],
  ["Il est normal que certains métiers rémunèrent plus que d'autres", themes.Communisme_Capitalisme, true],
  ["Avoir un bon PIB est essentiel pour augmenter la qualité de vie des habitants d'un pays", themes.Communisme_Capitalisme, true],
  ["Un pays doit être géré comme une entreprise", themes.Communisme_Capitalisme, true],
  ["La vie c'est un peu comme un jeu, il doit y avoir des gagnants et des perdants", themes.Communisme_Capitalisme, true],
  ["Il faut davantage taxer les riches", themes.Communisme_Capitalisme, false],
  ["Les biens de première nécessité devraient être accessibles à tous", themes.Communisme_Capitalisme, false],
  ["La grève est un outil légitime pour obtenir des droits", themes.Communisme_Capitalisme, false],
  ["Les prestations sociales dissuadent de s'impliquer dans le monde du travail", themes.Communisme_Capitalisme, true],
  ["Le salariat est une forme d'esclavage", themes.Communisme_Capitalisme, false],
  ["L'accès à la santé devrait être gratuit pour tous", themes.Communisme_Capitalisme, false],
  ["Il est sain pour une société d'avoir des personnes plus riches que d'autres", themes.Communisme_Capitalisme, true],
  ["Il est acceptable d'avoir des écoles publiques et privées", themes.Communisme_Capitalisme, true],
  ["L'héritage représente un des plus gros problèmes de notre société", themes.Communisme_Capitalisme, false],
  ["Les banques doivent être privées", themes.Communisme_Capitalisme, true],
  ["Personne ne devrait pouvoir devenir riche", themes.Communisme_Capitalisme, false],

  // Liberté_Sécurité
  ["J'accepte d'être surveillé dans une certaine mesure car je n'ai rien à cacher", themes.Liberté_Sécurité, true],
  ["La surveillance de masse est un bon outil pour combattre le terrorisme", themes.Liberté_Sécurité, true],
  ["Permettre aux gouvernements de lire nos messages est une bonne façon de lutter contre la criminalité", themes.Liberté_Sécurité, true],
  ["La réduction de l'anonymat en ligne peut servir des dérives autoritaires", themes.Liberté_Sécurité, false],
  ["Je me sens plus en sécurité dans les endroits publics équipés de caméras", themes.Liberté_Sécurité, true],
  ["L'intelligence artificielle devrait être utilisée pour prédire là où des crimes vont statistiquement se produire afin d'intervenir", themes.Liberté_Sécurité, true],
  ["Le hacking est une forme légitime de combat politique", themes.Liberté_Sécurité, false],
  ["Il faut contrôler le contenu présent sur internet", themes.Liberté_Sécurité, true],

  // Décentralisation_Centralisation
  ["Je fais confiance aux services numériques proposés par les GAFAM (Windows, Google Drive, etc...) pour gérer mes données personnelles", themes.Décentralisation_Centralisation, true],
  ["Les piratages de masse sur les bases de données des gouvernements sont inévitables", themes.Décentralisation_Centralisation, true],
  ["J'apprécie utiliser mon compte Google pour créer un compte et me connecter facilement à divers services en ligne", themes.Décentralisation_Centralisation, true],
  ["Je préfère utiliser des logiciels libres et open source même s'ils sont moins pratiques", themes.Décentralisation_Centralisation, false],
  ["Linux ne sera jamais aussi intéressant que Windows ou MacOS pour l'utilisateur moyen", themes.Décentralisation_Centralisation, true],
  ["Wikipedia n'est pas une bonne source car tout le monde peut modifier les articles", themes.Décentralisation_Centralisation, true],
  ["Internet ne devrait pas être contrôlé par un petit nombre d'entreprises", themes.Décentralisation_Centralisation, false],
  ["Un outil numérique développé par une communauté de bénévoles peut être très performant", themes.Décentralisation_Centralisation, false],
  ["Les grandes entreprises du numérique dépendent en grande partie de projets open source", themes.Décentralisation_Centralisation, false],
  ["La connaissance doit être accessible à tous partout dans le monde", themes.Décentralisation_Centralisation, false]
]

// This is where the program begins

let activeQuestion = 0
let resultsArray = []

function changeQuestion(){
    document.getElementById("question").innerHTML = questions[activeQuestion][0];
    document.getElementById("q_counter").innerHTML = `Question numéro ${activeQuestion + 1} sur ${questions.length}`
}

function hideQuiz(){document.getElementById("question-box").style.display = "none"}

function showResultsBox(){document.getElementById("results-box").style.display = "block"}

function createResults(){
    let subjects = Object.keys(themes)
    let points = Object.values(themes)
    let i = 0
    for (; i < subjects.length; i++){
        let yes = points[i][0]
        let no = points[i][1]
        let neutral = points[i][2]
        let total = yes + no + neutral
        let coef = 100 / total;
        yes *= coef;
        no *= coef;
        neutral *= coef;
        // if (yes + no + neutral < 100){
        //     neutral = 100 - (yes + no)
        // }
        let vs = subjects[i].split("_")
        resultsArray.push([[vs[0].replace("$", " "), yes], [vs[1].replace("$", " "), no], ["neutral", neutral]]);
    }
    console.log("Result array :")
    console.log(resultsArray)
}

function randTwo(min, max) {
  let rand1 = Math.floor(Math.random() * (max - min) ) + min;
  let rand2 = Math.floor(Math.random() * (max - min) ) + min;
  return [rand1, rand2]
}

function twoColorSquares(){
    squares = ["🟥","🟧","🟨","🟩","🟦","🟪","🟫"];
    len = squares.length - 1;
    twoSquares = [squares[randTwo(0, len)[0]], squares[randTwo(0, len)[1]]];
    while (twoSquares[0] === twoSquares[1]){
        twoSquares = [squares[randTwo(0, len)[0]], squares[randTwo(0, len)[1]]];
    }
    return twoSquares
}

function printAsciiResults(){
    let i = 0;
    for (;i < resultsArray.length; i++){
        squares = twoColorSquares();
        sq1 = squares[0];
        sq2 = squares[1];
        ideo1 = resultsArray[i][0][0]
        ideo1Value = resultsArray[i][0][1]
        ideo2 = resultsArray[i][1][0]
        ideo2Value = resultsArray[i][1][1]
        neutralValue = resultsArray[i][2][1]
        total = neutralValue + ideo1Value + ideo2Value
        if (isNaN(total) || total === 0){neutralValue = 100;}
        let i1 = document.createElement("p");
        i1.innerHTML = sq1 + " " + ideo1 + ` ${Math.round(ideo1Value)}%`;
        document.getElementById("ideo1-box").appendChild(i1)
        let i2 = document.createElement("p");
        i2.innerHTML = `${Math.round(ideo2Value)}% ` + ideo2 + " " + sq2;
        document.getElementById("ideo2-box").appendChild(i2)
        let p = document.createElement("p");
        let ideo1red = Math.round(ideo1Value / 4);
        let ideo2red = Math.round(ideo2Value / 4);
        let neutralred = 25 - (ideo1red + ideo2red);
        p.innerHTML = (sq1.repeat(Math.ceil(ideo1red)) + "🔳".repeat(Math.ceil(neutralred)) + sq2.repeat(Math.ceil(ideo2red)));
        document.getElementById("charges-box").appendChild(p);
    }
}

function resultsMain(){
    console.log("Quiz terminé !");
    hideQuiz()
    createResults()
    printAsciiResults()
    showResultsBox()
}

// function called by the buttons
function questionAnswered(answer){
    if (questions[activeQuestion][2]){ // if the answer should be reversed for this question (specified in question)
        if (answer === "yes"){answer = "no"}else if (answer ==="no"){answer = "yes"}
        if (answer === "half-yes"){answer = "half-no"}else if (answer ==="half-no"){answer = "half-yes"}
    }
    switch (answer){
        case "yes":
            questions[activeQuestion][1][0] += 2;
            break;
        case "half-yes":
            questions[activeQuestion][1][0] += 1;
            questions[activeQuestion][1][2] += 1;
            break;
        case "no":
            questions[activeQuestion][1][1] += 2;
            break;
        case "half-no":
            questions[activeQuestion][1][1] += 1;
            questions[activeQuestion][1][2] += 1;
            break;
        case "neutral":
            questions[activeQuestion][1][2] += 2;
    }
    console.log("Answer taken into account.")
    console.log(themes)
    activeQuestion++;
    if (activeQuestion === questions.length){
        resultsMain()
        return;
    }
    changeQuestion()
}

// Initializes the first question
changeQuestion();