//donnée stockée dans un tableau
/*var alphabet;
  alphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z\n "];
  var alphabet1=[];
  var list=[];
  for (i=13; i<alphabet.length; i++)
  {
 alphabet1.push(alphabet[i]); // push permet d'ajouter des données dans un variable
  }
  list=alphabet1.join(""); // join permet de relier ou joindre les données et "" permet de joindre avec un caractere vide soit sans caractere
 console.log(list);

// la meme chose que ci dessus mais en mettant le script dans une fonction
 function alphabetAPartirDe (parametre)
 {
    var alphabet;
    alphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z\n "];
    var alphabet1=[];
    var list=[];
    for (i=alphabet.indexOf(parametre); i<alphabet.length; i++) // indexOf renvoie la position de la valeur
    {
     alphabet1.push(alphabet[i]);
    }
    list=alphabet1.join("");
    console.log(list);
 }
alphabetAPartirDe("p");


  en stockant mon alphabet dans une variable simple
  var alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ\n ";
  var newalphabet="";
  for (var i=13; i<alphabet.length; i++)
  {
    newalphabet+=alphabet[i];
  }
console.log(newalphabet.toLowerCase());*/

// la meme chose que ci dessus mais en mettant le script dans une fonction
function alphabetAPartirDe(parametre1)
{
  var alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ\n ";
  var newalphabet="";
  for (var i=alphabet.indexOf(parametre1); i<alphabet.length; i++)
  {
    newalphabet+=alphabet[i];
  }
  console.log(newalphabet.toLowerCase());
}
var resultat1=process.argv[2];

if (typeof resultat1 === "string" && isNaN(resultat1) === true)
{
  alphabetAPartirDe(resultat1);
}
else if (isNaN(resultat1) === false || isNaN(resultat1) === true)
{
  console.log("erreur c'est un nombre ou c'est vide");
}
