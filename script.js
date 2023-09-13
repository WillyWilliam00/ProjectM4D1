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

    let ArrayStringaSenzaCarattere = []

        let ArrayStringa = stringa.split("")
        ArrayStringa.splice(posizione, 1)

        let NuovaStringa = ArrayStringa.join("")
        return NuovaStringa
}
console.log(TogliCarattere("ciao", 0))

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

   let contenitore = {}
   let count = 0

   for (const lettera of frase) {
    

    
    console.log(Frasearray)
}
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
    
    //.split(' ').join('').split('').reverse("").join("") => con con split(' ').join('') tolgo gli spazi tra le parole 
                                                //        => con reverse("") inverto e con join("") unisco tutto insieme 
     if(parolaLower.split(' ').join('').split('').reverse("").join("") === parolaLower.split(" ").join("").split("").join("") ) {
         return true 
     } else {
         return false
     }

    
    
}

//  QUINTO ESERCIZIO    

const InvertiNumero = (num) => {
    
    let str = num.toString()
    let strInverse = str.split("").reverse("").join("")
    
    
    return parseInt(strInverse)
}

// SESTO ESERCIZIO  

const scalino = (x) => {

    y = " "

    for (let i = 0; i < x; i++) {
        
        console.log(y = "#" + y)
        
    }


}

// SETTIMO ESERCIZIO 

const Reverse = (str) => {

    let StrReverse = str.split("").reverse().join("")

    return StrReverse
}

// OTTAVO ESERCIZIO

const SottoArray = (arr, number) => {
    
    let SottArray = []
    
   
    for (let i = 0; i < arr.length; i+= number) {
        const x = arr.slice(i, i + number);
        SottArray.push(x);
    }
    return SottArray;
    }
        
        
   



// NONO ESERCIZIO

const piramide = (x) => {

    let cancelletto = " "
    let SpazioVuoto = " "
    
    for (let i = 0; i < x; i++) {
        
        cancelletto = "#" + cancelletto // creo le righe di cancelletti 

        if (i % 2 === 0) { // se i è pari allora stampa la riga di cancelletti (la riga di cancelletti è dispari così è sempre centrata)

            if (i === 0) { // primo cancelletto (la punta)
            console.log(SpazioVuoto.repeat(x) + cancelletto ) //do spazio al primo #  facendolo ripetere tante volte quanto è valore di x in modo tale che ci sia la punta
            } else {
                x = x - 1 //lo spazio è sempre x - 1 in modo tale che la righa sotto sia sempre centrata 
                console.log(SpazioVuoto.repeat(x) + cancelletto ) 
            }
            
        }
    }


}

// DECIMO ESERCIZIO