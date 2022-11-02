function convertTo12hFormat(parametre1,parametre2, parametre3)
{
	if (parametre1 < 12)
	{
		console.log(parametre1 + parametre2 + parametre3 + " A.M")
	}
	else if(parametre1 === 12)
	{
		console.log(parametre1 + parametre2 + parametre3 + " A.M")
	}
	else if (parametre1 === 24)
	{
		console.log((parametre1 - 24) + "0" + parametre2 + parametre3 +" P.M");
	}
	else if (parametre1 > 12)
	{
		console.log(parametre1 - 12 + parametre2 + parametre3 + " PM");
	}
	else
	{
		console.log(erreur);
	}
}
convertTo12hFormat(24,":",45);
