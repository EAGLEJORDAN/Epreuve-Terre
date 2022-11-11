function mot_dacceuil (parametre1)
{	
	console.log("Bienvenue");
	for (i=0; i<resultat.length; i++)
	{	
		console.log(resultat[i]);
	}
}
var resultat=process.argv.slice(2);
mot_dacceuil(resultat);
