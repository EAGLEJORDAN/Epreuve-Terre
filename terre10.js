function nombrePremierOuPas (nbr)
{	
	if (isNaN(resultat1) === true)
 	{
 		console.log("n'est pas premier car l'argument est une chaine de caractere ou est vide");
 	}	
	for (i=2; i<=nbr; i++)
 	{
		var resultat=nbr/i
		if (resultat%2===0)
		{
			console.log("il n'est pas premier");
			break;
		}
		else if (resultat===1)
		{
			console.log("il est premier");
			break;
		}
 	}
}
var resultat=process.argv[2]; //hdizhi
var resultat1=Number(resultat); // nan
nombrePremierOuPas(resultat1);