function afficheValeurMillieu (parametre1) // 12 45 16
{
	if ((parametre1[0]>parametre1[1] & parametre1[0]<parametre1[2]) | (parametre1[0]<parametre1[1] & parametre1[0]>parametre1[2]))
	{
		console.log(parametre1[0]);
	}
	else if ((parametre1[1]>parametre1[0] & parametre1[1]<parametre1[2]) | (parametre1[1]>parametre1[2] & parametre1[1]<parametre1[0]))
	{
		console.log( parametre1[1]);
	}
	else if (( parametre1[2]<parametre1[0] & parametre1[2]>parametre1[1]) | (parametre1[2]<parametre1[1] & parametre1[2]>parametre1[0]))
	{
		console.log(parametre1[2]);
	}
	else
	console.log("erreur");	
}


let recuperationArgv;
recuperationArgv=process.argv.slice(2,5); // je recupere les arguments en ligne de commande. ils sont converti en type string, sauf si pas d'argument se sera considérer par isNaN comme false
// je commence par gerer les erreurs d'arguments vide
if(isNaN(recuperationArgv) ===  false) // si pas d'argument dans la variable
{
	console.log("erreur c'est vide");
}
else	// si il y a autre chose
{
	let nombreTypeString=[];
	for (let i=0; i<recuperationArgv.length; i++)
	{
		if (isNaN(recuperationArgv[i]) === true) // si l'élément est pas un nombre 
		{
			console.log("erreur il y a une chaine de caractere");
			break;
		}
		else
		{
			nombreTypeString[i]=recuperationArgv[i];
		}
	}
	if ( nombreTypeString.length === recuperationArgv.length)
	{
		let nombreFinalTypeNumber=[];
		for (let i=0; i<nombreTypeString.length; i++)
		{
			nombreFinalTypeNumber[i]=Number(nombreTypeString[i]);

		}
		afficheValeurMillieu(nombreFinalTypeNumber);

	}
}