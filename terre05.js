function diviser (parametre1)
{ 	
	if (isNaN(result2[0]) === true || isNaN(result2[1]) === true)
	{
		console.log("erreur isNaN");
	}
	else if (typeof parametre1[0] === "number" && typeof parametre1[1] === "number")
	{	
		var resultat1=parametre1[0]/parametre1[1];
		var reste=parametre1[0]%parametre1[1];
		console.log("resultat: "+ resultat1);
		console.log("reste: " + reste);
	}
}
var result=process.argv.slice(2,4)
var result2=[];
result2[0]=Number(result[0]);
result2[1]=Number(result[1]);
diviser(result2);