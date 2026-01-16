// Permet d'afficher le choix du joueur
function afficherProposition(mot){
    let zoneProposition = document.querySelector(".zoneProposition")
    zoneProposition.innerText = mot
}

// Pour afficher le score du joueur
function afficherResultat(score, listePropositions){
    let spanZoneScore = document.querySelector(".zoneScore span")
    spanZoneScore.innerHTML = `${score} / ${listePropositions.length}.`
    return 0
}

// Cette fonction construit et affiche l'email
function afficherEmail(nom, email, score) {
    let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype !`
    location.href = mailto
}

// Cette fonction contient toutes les autres et permet de lancer le jeu
function lancerJeu(){

    let listeProposition = listeMots
    let inputOptionSource = document.querySelectorAll('input[name="optionSource"]')


    afficherProposition(listeProposition[0])
    for(let j=0; j<inputOptionSource.length; j++){
	inputOptionSource[j].addEventListener("change", (event) => { 
	    if(event.target.id === 'mots'){
		listeProposition = listeMots
	    } else {
		listeProposition = listePhrases 
	    }
	    afficherProposition(listeProposition[i])
	})
    }


    let boutonValider = document.getElementById("btnValiderMot")
    let inputEcriture = document.getElementById("inputEcriture")
    let i = 0

    boutonValider.addEventListener("click", () => {
	console.log(inputEcriture.value)
	if(inputEcriture.value === listeProposition[i]){ score++ } else { score += 0 }
	afficherResultat(score, listeProposition) 
	inputEcriture.value = ''
	i++
	if(i<listeMots.length){
	    afficherProposition(listeProposition[i])
	} else { 
	    afficherProposition("Vous avez fini ! Partagez votre score avec un ami 😉.")
	    boutonValider.disabled = true
	}
    })
/**/
    let form = document.querySelector("form") 
    form.addEventListener("submit", (event) => {
	event.preventDefault()

	let inputNom = document.getElementById("nom")
	let nom = inputNom.value
	let inputEmail = document.getElementById("email")
	let email = inputEmail.value

	console.log(nom)
	console.log(email)
	scoreRealiser = `${score} / ${listeProposition.length}`
	afficherEmail(nom, email, scoreRealiser)
    })
}