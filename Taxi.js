let musique = ["Anissa - Wejden", "ETA - New Jeans", "Tchointchointchoin - Kaaris", "Rasputin - Booey Man", "El Golem  - Alann Revelat"];
let feu = 30; // Le voyage se termine après 30 feux rouges
let changement = 0;

class Perso {
    constructor(prenom, sante) {
        this.prenom = prenom;
        this.hp = sante; 
    }
}

let Alain = new Perso("Alain", 10); 

while (Alain.hp > 0 && feu > 0) {
    let playing = Math.floor(Math.random() * 5);
    let playingmusic = musique[playing] // javais pas relié 
    if (playingmusic === 0) {
        Alain.hp--;
        changement++;
        console.log("Guez la radio" + Alain.prenom + " a changé de taxi");
    } else {
        console.log("Ce soir 20H 22H" + playingmusic + "," + Alain.prenom + "AHHHH la, on est bien");
    }

    //ptite blague
    // if (playingmusic === 5) {
     ///   Alain.hp++; 
   //  }
    
    feu--; 
    console.log("Santé d'Alain: " + Alain.hp + ", Feux restants: " + feu);
}

if (Alain.hp === 0) {
    console.log(Alain.prenom + " a explosé le taxi....mskn");
} else {
    console.log("Voyage fini en grande pompe. " + Alain.prenom + " est bien arrivé.");
}
