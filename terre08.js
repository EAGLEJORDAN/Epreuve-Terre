function puissanceDunNombre (parametre1)
{
	if (isNaN(parametre1[0]) === true || isNaN(parametre1[1]) === true)
	{
		console.log("erreur l'argument est un string ou est vide");
	}
	else if (typeof resultat2[0] === "number" && typeof resultat2[1] === "number" && Math.sign(resultat2[1]) === 1)
	{	
		var resultat3=1;
		for (var i=0; i<resultat2[1]; i++)
		{
			resultat3=resultat2[0] * resultat3;
		}
	console.log(resultat3);
	}
	else if(typeof resultat2[0] === "number" && typeof resultat2[1] === "number" && Math.sign(resultat2[1])===-1)
	{
		console.log("l'exposant ne peut pas être négatif");
	}
}
var resultat1=process.argv.slice(2,4);
var resultat2=[];
resultat2[0]=Number(resultat1[0]);
resultat2[1]=Number(resultat1[1]);
puissanceDunNombre(resultat2);