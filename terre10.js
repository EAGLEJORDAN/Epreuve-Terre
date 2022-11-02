function nombrePremierOuPas (nbr)
{	
	for (i=2; i<=nbr; i++)
 	{
		var resultat=nbr/i
		if (resultat%2===0)
		{
			return"il n'est pas premier";
			break;
		}
		else if (resultat===1)
		{
			return"il est premier";
			break;
		}
 	}
 	if (typeof nbr==="string")
 	{
 		return"n'est pas premier car l'argument est une chaine de caractere";
 	}
 	else
 	{
 		return "n'est pas premier";
 	}	
}
nombrePremierOuPas("fev");