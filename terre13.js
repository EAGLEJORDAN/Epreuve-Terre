function afficheValeurMillieu (parametre1,parametre2,parametre3)
{
	if ((parametre1>parametre2 & parametre1<parametre3) | (parametre1<parametre2 & parametre1>parametre3))
	{
		console.log(parametre1);
	}
	else if ((parametre2>parametre1 & parametre2<parametre3) | (parametre2>parametre3 & parametre2<parametre1))
	{
		console.log( parametre2);
	}
	else if (( parametre3<parametre1 & parametre3>parametre2) | (parametre3<parametre2 & parametre3>parametre1))
	{
		console.log(parametre3);
	}
	else
	console.log("erreur");	
}
afficheValeurMillieu(11,40,34);