/**
 * @description Créer une fonction 'generatePlayers' qui génère des objets 'player' dans un tableau.
 * Ces objets doivent avoir comme attributs : 'first_name' de type string, 'last_name' de type string,
 *  'age' de type number, 'position' de type number.
 * Les attributs last_name et first_name doivent etre tirés au sort dans des tableaux comportant chacuns 20 noms et prénoms différents que vous choisirez vous même
 * l'attribut age doit etre un nombre aléatoire entre 16 et 45
 * l'attribut 'position' doit etre un nombre UNIQUE (interdit d'avoir 2 fois le même nombre dans le tableau)
 * la fonction doit prendre en paramètre un nombre supérieur à 10 et générer autant d'objet que ce nombe ou exactement 10 si ce nombre est inférieur à 10.
 */

 var Player = function() {
  var first_name,last_name,age,position;
  return {
    setFirst_name: function(newfirst) {
      if (typeof newfirst == "string"){
          first_name = newfirst;
      }
    },  
    getFirst_name: function () {
      return first_name;
    },
    setLast_name: function(newlast) {
      if (typeof newlast == "string" ) {
        sexe = newlast;
      }
    },  
    getLast_name: function () {
      return last_name;
    },

    setAge: function(newage) {
      if (typeof newage == "number" &&(newage>16 && newage<45)){
          age = newage;
      }
    },  
    getAge: function () {
      return age;
    },

    setPosition: function(newposition) {
      if (typeof newposition == "number" ) {
        position = newposition;
      }
    },
    getPosition: function () {
      return position;
    },

  }
}

 function generatePlayers(Player) {  
  Player = {first_name: Player.getFirst_name , 
            last_name: Player.getLast_name , 
            age: Player.getAge , 
            position:Player.getPosition};
  console.log(Player.first_name)
  return Player;
}
  var p = Player();
  p.setAge(23);
  p.setFirst_name("Oumaima");
  p.setLast_name("Kadri");
  p.setPosition(50)
console.log(p.getAge)

  generatePlayers(p);
  