function convertTo24hFormat (parametre1,parametre2)
{
	if (parametre1<12 & parametre2.search("PM")===2) // si parametre1<12 et PM est présent dans parametre2
	{
		var heure=(parametre1 + 12) + "h"; // alors tu convertie en format 24h
		console.log(heure + parametre2.replace("PM","") + "min");
	}
	else if (parametre1<12 & parametre2.search("PM")===-1) // si parametre1<12 et PM n'est pas présent dans parametre2
	{
		console.log(parametre1 + "h" + parametre2.replace("AM","") + "min"); // affiche parametre1 join à : join à parametre2 sans AM
	}
	else if (parametre1===12 & parametre2.search("PM")===2) // si parametre1 est égale à 12 et PM est présent dans parametre2
	{
		console.log(parametre1 + 12 + "h" + parametre2.replace("PM","") + "min");	// alors tu convertie parametre1 + 12 join à : join à parametre2 sans PM
	}
	else if (parametre1===12 & parametre2.search("PM")===-1)
	{
		console.log(parametre1 +"h" + parametre2.replace("AM","") + "min");
	}
}
convertTo24hFormat(8,"00PM");