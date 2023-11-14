// opdr 1 
const container = document.querySelector(".container");

let salary = 200;
let percent = 0.05; 
let raise = salary * percent; 
let salaryWithRaise = salary + raise; 
container.innerHTML = `<li>${salaryWithRaise}</li>`;

// opdr 2 
let house = 400; 
percent = 0.025; 
raise = house * percent; 
let houseWithRaise = house + raise; 
container.innerHTML += `<li>${houseWithRaise}</li>`;

// opdr 3 
let bag = 100; 
percent = 0.21; 
raise = bag * percent; 
let bagWithRaise = bag + raise; 
container.innerHTML += `<li>${bagWithRaise}</li>`;

// //opdr 4 
// let person = prompt("Wat ben jij?"); 
// if (person === "docent") {
//     console.log("Jij bent een docent!");
// } else if (person === "student") {
//     console.log("Jij bent een student!");
// } else if (person === "man") {
//     console.log("Jij bent een man!");
// } else if (person === "vrouw") {
//     console.log("Jij bent een vrouw!");
// } else {
//     console.log("Jij bent Gek");
// }

//opd 5 
const excercise5 = document.querySelector("excercise-5"); 
const btnCalculator = document.querySelector(".calculator");

btnCalculator.addEventListener("click", function(){
    const askDollars = parseInt(prompt("Hoeveel dollars heb jij?"));
    const askCrypto = prompt("welke crypto kies jij");
    if (askCrypto == "bitcoin") {
        const valueBitcoin = askDollars / 35050;
        excercise5.innerHTML = valueBitcoin; 
    } else if (askCrypto == "ethereum") {
        const valueEthereum = askDollars / 1887; 
        excercise5.innerHTML = valueEthereum; 
    } else {
        excercise5.textContent = "hallo";
    }
});

// odpr 10 

let artists = ["Ed", "Eminem", "Beyonce", "Bruno", "Justin Bieber"]; 
const addBtn = document.querySelector(".add-item");
const ulList = document.querySelector(".list");
addBtn.addEventListener("click", function(){
    for (let i = 0; i < artists.length; i++) {
        const artist = artist[i];
        ulList.innerHTML += artist;
    }
});
