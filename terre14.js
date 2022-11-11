function triéOuPas (parametre1) //12 15 75 96
{
	var resultat4trié=[];
	for (var i=0; i < parametre1.length - 1; i++) 
	{
		if (parametre1[i] < parametre1[i + 1])
		{
			resultat4trié[i]=parametre1[i];
		}
		else
		{
			console.log("pas trié");
        	break;
		}
	}
	if (resultat4trié.length === parametre1.length - 1)
	{
		console.log("trié");
	}
}
// on n'exclut les arguments vide de la ligne de commande
var resultat1;
resultat1=process.argv.slice(2);//  40 dh 15 df
if (isNaN(resultat1) === false)
{
	console.log("erreur c'est vide");
	return;
}
// je convertie tout en type nombre
var resultat2=[];
for (var i=0; i < resultat1.length; i++)
{
	resultat2[i]=Number(resultat1[i]);
}
// je me retrouve avec des valeurs types nombres et peut etre des valeurs type NaN
//Je parcours toute mes valeurs pour vérifier si il y a des NaN
var resultat3=[];
for (var i=0; i < resultat2.length; i++)
{
	if(isNaN(resultat2[i]) === true)
	{
		console.log("erreur il y au moins un carectere qui est NaN");
		console.log(resultat2);
		break;
	}
	else
	{
		resultat3[i]=resultat2[i];
	}
}
if (resultat3.length === resultat2.length)
{
	triéOuPas(resultat3);
}