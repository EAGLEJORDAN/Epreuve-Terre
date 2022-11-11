function convertTo24hFormat (parametre1) //8, "00PM"
{
	if (isNaN(parametre1[0]) === true || isNaN(parametre1[1]) === true)
	{
		console.log("erreur");
	}
	else if (parametre1[0]<12 & parametre1[1].search("PM")===2) // si parametre1<12 et PM est présent dans parametre2
	{
		var heure=(parametre1[0] + 12) + "h"; // alors tu convertie en format 24h
		console.log(heure + parametre1[1].replace("PM","") + "min");
	}
	else if (parametre1[0]<12 & parametre1[1].search("PM")===-1) // si parametre1<12 et PM n'est pas présent dans parametre2
	{
		console.log(parametre1[0] + "h" + parametre1[1].replace("AM","") + "min"); // affiche parametre1 join à : join à parametre2 sans AM
	}
	else if (parametre1[0]===12 & parametre1[1].search("PM")===2) // si parametre1 est égale à 12 et PM est présent dans parametre2
	{
		console.log(parametre1[0] + 12 + "h" + parametre1[1].replace("PM","") + "min");	// alors tu convertie parametre1 + 12 join à : join à parametre2 sans PM
	}
	else if (parametre1[0]===12 & parametre1[1].search("PM")===-1)
	{
		console.log(parametre1[0] +"h" + parametre1[1].replace("AM","") + "min");
	}
}
var resultat1=process.argv.slice(2,4) //"8", "00PM"
var resultat2=[];
resultat2[0]=Number(resultat1[0]);
resultat2[1]=resultat1[1];
//console.log(resultat2); 8, "00PM"
convertTo24hFormat(resultat2);