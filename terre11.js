function convertTo12hFormat(parametre1) //8 ":" 45
{
	if (isNaN(parametre1[0]) === true || isNaN(parametre1[2]) === true)
	{
		console.log("erreur");
	}
	else if (parametre1[0] < 12)
	{
		console.log(parametre1[0] + parametre1[1] + parametre1[2] + " A.M")
	}
	else if(parametre1[0] === 12)
	{
		console.log(parametre1[0] + parametre1[1] + parametre1[2] + " A.M")
	}
	else if (parametre1[0] === 24)
	{
		console.log((parametre1[0] - 24) + "0" + parametre1[1] + parametre1[2] +" P.M");
	}
	else if (parametre1[0] > 12)
	{
		console.log(parametre1[0] - 12 + parametre1[1] + parametre1[2] + " PM");
	}
}
var resultat1=process.argv.slice(2,5); //"22" ":" "45"
var resultat2=[];
resultat2[0]=Number(resultat1[0]);
resultat2[1]=resultat1[1];
resultat2[2]=Number(resultat1[2]);
convertTo12hFormat(resultat2); // 9h45 en 9:45 A.M