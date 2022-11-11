function racineCarréeDunNombre (parametre1)
{
	for (var i=0; i<=parametre1; i++) 
	{
		nombreaVerifier=i;
		if (nombreaVerifier * nombreaVerifier === parametre1)
		{
			racineCarréeDuNombreEntierPositif = nombreaVerifier;
			console.log(racineCarréeDuNombreEntierPositif + " est le carrée de " + parametre1);
			return;
		}
	}
console.log("la racine carrée de ce nombre n'est pas un carrée parfait");
}
var nombreEntierPositif=process.argv[2];
if (isNaN(nombreEntierPositif) === true)
{
	console.log("erreur ce n'est pas un nombre ou c'est vide");
}
else 
{
	var newNombreEntierPositif=Number(nombreEntierPositif);	
	var nombreaVerifier;
	var racineCarréeDuNombreEntierPositif;
	racineCarréeDunNombre (newNombreEntierPositif);
}	

			