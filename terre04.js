function pairOuImpair (parametre1)
{
	if ( typeof parametre1 === "number" && parametre1 %2===0)
	{
	console.log("pair");
	}
	else if (typeof parametre1 === "number" && parametre1 %2===1)
	{
	console.log("impair");
	}
	else
	{
		console.log("Tu ne me l'as mettra pas à l'envers");
	}
}
var result=process.argv[2];
var result2=Number(result);
pairOuImpair(result2);