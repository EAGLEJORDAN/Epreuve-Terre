function reverserstring (parametre1) // 
{
	if (isNaN(parametre1) === true && typeof salutation === "string" )
	{
		console.log(salutation.split('').reverse().join(''));	
	}
	else if (typeof salutation  === "undefined")
	{
		console.log("il n'y a pas d'argument");
	}	
	else if	(typeof resultat === "number")
	{
		console.log("erreur c'est un nombre");
	}
}
var salutation=process.argv[2];
var resultat=Number(salutation);
reverserstring(resultat);

