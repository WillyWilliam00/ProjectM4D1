// PRIMO ESERCIZIO  

function somma(a, b) {
    if ((a===50) || ( b === 50 ) || (a + b === 50)) {
        return true
    } else {
        return false
    }
}

// SECONDO ESERCIZIO

function TogliCarattere(stringa, posizione) {

        let ArrayStringa = stringa.split("")
        let ArrayStringaSenzaCarattere = ArrayStringa.toSpliced(posizione - 1, 1)

        let NuovaStringa = ArrayStringaSenzaCarattere.join("")
        return NuovaStringa
}

// TERZO ESERCIZIO

function CheckNumber(a, b) {
    if (((a >= 40) && (a <= 60) || (a >= 70) && (a <= 100)) && 
        ((b >= 40) && (b <= 60) || (b >= 70) && (b <= 100))) {
        
        return true
    } else {
        return false
    }
     
}

// QUARTO ESERCIZIO

const CheckFrase =  (NomeCitta) => {
    if ((NomeCitta.indexOf("New")=== 0) || (NomeCitta.indexOf("Los")=== 0)) {
        return NomeCitta
    } else {
        return false
    }
}

// QUINTO ESERCIZIO

const SommaArray = (Array) => {
    let totale = 0 
    for (let i = 0; i < Array.length; i++) {
       
       totale = totale + Array[i] // totale += Array[i]
        
    }

    return totale

}
    
// SESTO ESERCIZIO

const CheckArray = (Array) => {
    
  if ((Array.indexOf(3) === -1) && (Array.indexOf(1) === -1)) {
    return true
  } else {
    return false
  }

}


// SETTIMO ESERCIZIO

const CheckAngle = (gradi) => {
    if (gradi < 90) { return "acuto"}
    if ((gradi > 90) && (gradi < 180))  { return "ottuso"}
    if (gradi === 90) { return "retto"}
    if (gradi === 180) { return "piatto"}

}

// OTTAVO ESERCIZIO 

const Acronimo = (frase) => {
    
    let Arrayfrase = frase.split(" ")
    let acronimo = ""
    for (let i = 0; i < Arrayfrase.length; i++) {
        
        let PrimaLettera = Arrayfrase[i].split("").slice(0, 1)
        
        acronimo = acronimo + PrimaLettera
    }
    
    return acronimo.toUpperCase()
}

// ESERCIZI EXTRA   

// PRIMO ESERCIZIO 

const CaratterePiuUsato = (frase) => {


}

// SECONDO ESERCIZIO
// USO SORT() LA QUALE METTE IN ORDINE ALFABETICO UN ARRAY, NEL CASO LE DUE PAROLE, 
// UNA VOLTA CHE LE LETTERE VENGONO ORDINATE ALFABETICAMENTE, SIANO UGUALI ALLORA SONO ANAGRAMMI

const Anagramma = (parola1, parola2) => {
    let parola1lower = parola1.toLowerCase()
    let parola2lower = parola2.toLowerCase()

    if (parola1lower.split("").sort().join() === parola2lower.split("").sort().join() ) {
        return true 
    } else {
        return false
    }
}


// TERZO ESERCIZIO 

const ArrayAnagrammi = (ListaAnagrammi, parola) => {

    
    let ArrayAnagrammi = []
    

     for (let i = 0; i < ListaAnagrammi.length; i++) {

        if (parola.split("").sort().join() === ListaAnagrammi[i].split("").sort().join()) {
            
            ArrayAnagrammi.push(ListaAnagrammi[i])
        }
 
     }
    
     return ArrayAnagrammi
}

// QUARTO ESERCIZIO

const TestPalindromo = (parola) => {

    let parolaLower = parola.toLowerCase()
    console.log(parolaLower.split(' ').join('').split('').reverse("").join(""))
    console.log(parolaLower.split(" ").join("").split("").join(""))
    //.split(' ').join('').split('').reverse("").join("") => con con split(' ').join('') tolgo gli spazi tra le parole 
                                                //        => con reverse("") inverto e con join("") unisco tutto insieme 
     if(parolaLower.split(' ').join('').split('').reverse("").join("") === parolaLower.split(" ").join("").split("").join("") ) {
         return true 
     } else {
         return false
     }

    
    
}
