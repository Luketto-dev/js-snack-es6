//Snack 1
//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

// creo un array di oggetti(biclette)
const bikes = [
    {
        nome: "Wilier 0 SLR",
        peso: "6,5 Kg"
    },
    {
        nome: "Cannondale SuperSix EVOHi-MOD Disc Dura Ace",
        peso: "8,0 Kg"
    },
    {
        nome: "Trek Emonda 2020",
        peso: "6,81 Kg"
    },
    {
        nome: "Trek Emonda SLR",
        peso: "4,65 Kg"
    },
    {
        nome: "SAVA Phantom 2.0 700C",
        peso: "8,1 Kg"
    },
]

// vado a prendere il contenitere dove andrà a stampare la bicletta che pesa meno
let smallBikeContainer = document.querySelector(".small-bike")

// creo due variabile che corrispondono al nome e al peso dell oggetto con indice 0
const {nome, peso} = bikes[0]

// creo un oggetto che rappresenta l oggetto con indice 0 del mio array per poterlo comparare con gli altri
let smallBike = {
    nome,
    peso,
    indice: 0
}

// ciclo sul mio array di biciclette
for (let i = 1; i < bikes.length; i++) {
    // creo due variabili che corrispondono al nome e al peso di ogni oggetto del mio array
    const {nome, peso} = bikes[i];
    
    // se il peso della smallBike è maggiore del peso corrente allora small bike avrà il peso corrente e il nome corrente
    if (smallBike.peso > peso) {
        smallBike = {
            nome,
            peso,
            indice: i
        }
    }

    
}

smallBikeContainer.innerHTML = `<div>
                                    <h2>La bicicletta che pesa meno è:</h2>
                                    <div>nome : ${smallBike.nome}</div>
                                    <div>peso: ${smallBike.peso}</div>
                                    <div>indice: ${smallBike.indice}</div>
                                </div>`