function terreTerminée (parametre1)
{
	console.log(parametre1);
}

let ligneDeCommande;
ligneDeCommande=process.argv.slice(0,2);
terreTerminée(`Avant correction je pensais que mes méninges avaient travaillé! 
Après correction mes méninges m'insultaient! 
Je devais revoir la gestion des erreurs d'arguments; revoir l'exécution du programme en ayant des arguments non défini à l'avance.
La gestion des erreurs d'arguments est très importante et a changé ma façon de lire mon script.
Content d'avoir fait cette étape, j'ai un peu les chocottes pour la suite, mais rassuré d'apprendre de nouvelles choses!
Merci Anthony pour cette correction!`);