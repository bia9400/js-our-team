const container = document.querySelector(".team-container");
const linkCard = ["img/angela-caroll-chief-editor.jpg", "img/angela-lopez-social-media-manager.jpg", "img/barbara-ramos-graphic-designer.jpg", "img/new-team-member-01.jpg", "img/new-team-member-02.jpg", "img/new-team-member-03.jpg", "img/new-team-member-04.jpg", "img/scott-estrada-developer.jpg", "img/walter-gordon-office-manager.jpg", "img/wayne-barnett-founder-ceo.jpg",];
const cardButton = document.getElementById("mybutton")

function generateName(numbersOfName) {
    let names = ["Biagio", "Pietro", "Giovanni", "Luigi", "Carmelo", "Alice", "Erica", "Silvia", "Paolo", "Settimio", "Pierpaolo", "Florian", "Felice", "Marco", "Elisa", "Antonio", "Antonia", "Clara", "Katia", "Giuseppe", "Alfoso", "Ilary", "Domenico", "Vera", "Alberto", "Micele", "Michela", "Andrea", "Grazia", "Simone"];
    let lastNames = ["Ferro", "Leica", "Mancini", "Canepa", "Spinnato", "Gimondi", "Borsellino", "Falcone",];
    let newArray = [];
    for (let i = 0; i < numbersOfName; i++) {
        let x = Math.floor(Math.random() * names.length)
        let y = Math.floor(Math.random() * lastNames.length)
        let z = `${names[x]} ${lastNames[y]}`
        if (!newArray.includes(z)) {
            newArray.push(z)
        }
        else (
            i--
        )
    }
    return newArray
}


function generateJob() {
    let job = ["Ceo dei pomodori", "Venditore di Insalate", "Responsabile Marketing", "Direttore Generale", "FullStack Developer", "Ingegnere Chimico", "Magistrato", "Giudice", "Avvocato", "Istruttore"]
    let x = Math.floor(Math.random() * job.length)
    return job[x]
}


function createArrayobject(numeroDiOggetti) {
    let createdArray = [];
    let arrayName = generateName(numeroDiOggetti)
    for (let i = 0; i < numeroDiOggetti; i++) {
        createdArray[i] = {
            name: arrayName[i],
            job: generateJob(),
            link: linkCard[i]

        }
    }
    return createdArray
}




function createCard(teamMember) {
    let card = document.createElement("div")
    card.classList.add("team-card")
    let card_image = document.createElement("div")
    card_image.classList.add("card-image")
    let card_text = document.createElement("div")
    card_text.classList.add("card-text")
    let img = document.createElement("img")
    img.src = `${teamMember.link}`
    card_image.append(img)
    let h3 = document.createElement("h3")
    let p = document.createElement("p")
    h3.append(teamMember.name)
    p.append(teamMember.job)
    card_text.append(h3)
    card_text.append(p)
    card.append(card_image)
    card.append(card_text)
    container.append(card)

}

function printCard(numerodicard) {
    let x = createArrayobject(numerodicard);
    for (let i = 0; i < numerodicard; i++) {
        createCard(x[i])
        console.log("Nome: " + x[i].name + ",", "MansioneSvolta: " + x[i].job + ",", " (link della foto)" + x[i].link);
    }
    console.log(x);



}


printCard(10)

cardButton.addEventListener("click", function () {
    
    let obect={
        name:prompt("Inserisci nome e cognome"),
        job:prompt("Inserisci la tua mansione"),
        link:prompt("Inserisci un link valido della tua foto")
        

    }
    createCard(obect)
})