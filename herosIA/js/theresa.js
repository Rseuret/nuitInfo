var AI = [
  {
    testfor : new RegExp('rigol[oeé]|blague|dr[oô]le|(ah)+|marrant|lo+l|mdr+|ptdr+', 'i'),
    output : ["Quelle est la différence entre Windows 95 et un virus ? Le virus il fonctionne sans aide!",
    "Si microsoft inventait quelque chose qui ne plante pas ce serait un clou...",
    "Comment un informaticien tente-t-il de réparer sa voiture lorsqu'elle a un problème? Il sort de la voiture, ferme toutes les fenêtres, retourne dans la voiture, et essaie de redémarrer. ",
    "est L'ordre pour critique UDP. faire bonne blague une.",
    "C'est une requête SQL qui entre dans un bar, et le serveur répond : « Il n'y a plus de tables ! »."],
    image : "mm_joke1.jpg"
  },
  {
    testfor : new RegExp('pute|salope?|conn(ass)?e|enfoirée?|p[eé]nis|chibre|p[eé]tasse', 'i'),
    output : ["Vous êtes fou?!","Grossier! GROSSIER!!!!!"],
    image : "mm_surprise.jpg"
  },
  {
    testfor : new RegExp('heureu(se|x)|joie|vie|gym|sport|sex|aime', 'i'),
    output : ["Oh oui!!!!","Ça j'aime!!!!!!","C'est super!!!","C'est génial!!!!"],
    image : "mm_heureuse.jpeg"
  },
  {
    testfor : new RegExp('vent|souffler?|s[ée]rieu(se|x)|prout', 'i'),
    output : ["Hihihi!!"],
    image : "mm_souffler.jpg"
  },
  {
    testfor : new RegExp('salut|bonjour|coucou|(vous|tu).*qui|qui.*(vous|tu)|pr[ée]sente[rz]|bot', 'i'),
    output : ["Je suis Théresa, ravie de vous rencontrer !", "Je suis Théresa, ravie de vous rencontrer !", "Je suis Théresa, pour vous servir !", "Je suis Théresa, à votre service !", "Je suis Théresa, votre IA personnelle !", "Prête à coincer des méchants !", "Je suis Théresa, quels sont vos ordres ?"],
    image : "bonjour.jpg"
  },
  {
    testfor : new RegExp('immigr(ation|é|er)|mort|triste|pleure|souffr(ir|e|ant)|mourir|assassin|meurtre', 'i'),
    output : ["La vie est dure... snif","Ce monde est si tragique..."],
    image : "mm_desespoir.jpg"
  },
  {
    testfor : new RegExp('ok|oui|ouai|oué', 'i'),
    output : ["Je valide !"],
    image : "mm_uh.jpg"
  },
  {
    testfor : new RegExp('belle|jolie|magnifique|fleur|beauté|jeune|swag|frai(s|che)|bonne', 'i'),
    output : ["Mmmmh !!","On se comprend toi et moi. ;)"],
    image : "mm_belle.jpg"
  },
  {
    testfor : new RegExp('beau|temps|pluie|soleil|nuage|ciel|demain|météo|neige|froid|chaud', 'i'),
    output : ["<a href='https://www.google.fr/search?q=google+meteo' target='_blank'>Voyons ensemble les prévisions météorologiques !</a>"],
    image : "meteo.jpg"
  }
];

function idk(input) {
  document.querySelector("#bulle p").innerHTML += "<a style='text-decoration:underline;' target='_blank' href='https://lmgtfy.com/?q="+input.replace("'","%27")+"'>Et Google est ton ami !</a>";
  document.getElementById('discussion').style.backgroundImage = "url('img/mm_wink.jpg')";
}

function wikipedia(input) {
  var words = input.split(" ");
  var html = "Wikipedia peut être utile : ";
  words.forEach(function(word) {
    html += "<a target='_blank' href='https://fr.wikipedia.org/wiki/"+word.replace("'","%27")+"'>"+word+"</a> ";
  });
  html += "<br/>";
  document.querySelector("#bulle p").innerHTML = html;
}

function parse(input) {
  for (var i = 0; i < AI.length; i++) {
    if (AI[i].testfor.test(input)) {
      document.querySelector("#bulle p").innerHTML = AI[i].output[Math.floor(AI[i].output.length * Math.random())];
      document.getElementById('discussion').style.backgroundImage = "url('img/"+AI[i].image+"')";
      return;
    }
  }
  wikipedia(input);
  idk(input);
}

document.getElementById('potin').addEventListener('keydown', function(e) {
    if (e.which == 13) { // c'est ENTRE !!
        parse(e.target.value);
        e.preventDefault();
    }
});
