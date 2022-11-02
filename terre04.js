function pairOuImpair(parametre)
{
	if (typeof parametre==="string")
	{
		return"tu ne me l'as mettra pas à l'envers!";
	}
	else if (parametre %2==0)
	{
		return"pair";
	}
	else if (typeof parametre==="undefined")
	{
		return"essaye encore";
	}
	else
	{
		return"impair";
	}
}
pairOuImpair(-11);
