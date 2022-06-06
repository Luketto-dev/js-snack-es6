//Snack 1
//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore utilizzando destructuring e template literal


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

let smallBikeContainer = document.querySelector(".small-bike")

const {nome, peso} = bikes[0]

let smallBike = {
    nome,
    peso,
    indice: 0
}

for (let i = 0; i < bikes.length; i++) {
    const {nome, peso} = bikes[i];
    
    if (smallBike.peso > peso) {
        smallBike = {
            nome,
            peso,
            indice: i
        }
    }

    
}

smallBikeContainer.innerHTML = `<div>
                                    <div>nome : ${smallBike.nome}</div>
                                    <div>peso: ${smallBike.peso}</div>
                                    <div>indice: ${smallBike.indice}</div>
                                </div>`