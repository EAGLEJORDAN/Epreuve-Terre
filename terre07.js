function nombreCaractereDuneString (parametre1)
{
	if ( typeof chaine === "undefined")
	{
		console.log("il n'y a pas d'argument");
	}
	else if (isNaN(parametre1) === true)
	{
		var resultat=chaine.length;
		console.log(resultat);
	}
	else if (typeof chaine2 === "number")
	{
		console.log("erreur c'est un nombre");
	}
}
var chaine=process.argv[2];
var chaine2=Number(chaine);
nombreCaractereDuneString(chaine2);