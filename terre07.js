function nombreCaractereDuneString (parametre1)
{
	if (typeof parametre1==="string")
	{
		var resultat1=parametre1.length;
		return (resultat1);
	}
	else
	{
		return"erreur";
	}
}

nombreCaractereDuneString("argument1");