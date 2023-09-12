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

