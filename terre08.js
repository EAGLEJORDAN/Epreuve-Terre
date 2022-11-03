function puissanceDunNombre (parametre1,parametre2)
{
	if(Math.sign(parametre2)===-1)
	{
		return"l'exposant ne peut pas être négatif";
	}
	else if( typeof parametre1 ==="string" |  typeof parametre2 ==="string")
	{
		console.log("le type de donnée en argument n'est pas valide");
	}
	else
	{
	var resultat=parametre1**parametre2;
	console.log(resultat);
	}
}
puissanceDunNombre(2,3);
