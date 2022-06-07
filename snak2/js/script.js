//Snack2
//Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
//Generare numeri random al posto degli 0 nelle proprietà:
//Punti fatti e falli subiti.
//Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


const teams = [
    {
        nome: "Roma",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Juventus",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Inter",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Napoli",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Lazio",
        puntiFatti: 0,
        falliSubiti: 0,
    },
]



for (let i = 0; i < teams.length; i++) {
    const team = teams[i];
    let puntiFatti = Math.floor(Math.random() * 100);
    let falliSubiti = Math.floor(Math.random() * 100);

    team.puntiFatti = puntiFatti;
    team.falliSubiti = falliSubiti
    
}

let newTeams = [];

for (let i = 0; i < teams.length; i++) {
    
    let {nome, falliSubiti} = teams[i]

    newTeams.push({
        nome,
        falliSubiti,
    })
    
}
console.log(newTeams)