function JSClock (parametre1,parametre2)
{
	var convertTo12hFormat=""+((parametre1>12)? parametre1 - 12 : parametre1);
	if (parametre1 == 0)
    convertTo12hFormat = "12";
	
	convertTo12hFormat += ((parametre2 < 10) ? ":0" : ":") + parametre2;
	
  	convertTo12hFormat+=(parametre1>=12)?" P.M.":" A.M.";
  	console.log(convertTo12hFormat);
}
JSClock(23,45);