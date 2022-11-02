function racineCarréeDunNombre (parametre)
{
	if(typeof parametre==="string")
	{
		return "erreur, l'argument est une chaine de caractere";
	}
	else if (typeof parametre==="undefined")
	{
		return"undefined";
	}
	else
	{
		var resultat=Math.sqrt(parametre)
		return resultat;
	}
}
racineCarréeDunNombre (2);