const buttonEl = document.querySelector("#button-el");
const lengthText = document.querySelector("#length-text");
const volumeText = document.querySelector("#volume-text");
const massText = document.querySelector("#mass-text");

let userInput = null;

let feet = null;
let meters = null;

let gallons = null;
let liters = null;

let pounds = null;
let kilos = null;





buttonEl.addEventListener('click', () =>{
    userInput = parseFloat(document.querySelector("#input-el").value);

    calc(userInput);
    render();
    return userInput;
})

function render(){
    lengthText.textContent = `${userInput} meters = ${calc(userInput).feet} feet | ${userInput} feet = ${calc(userInput).meters} meters`
    volumeText.textContent = `${userInput} liters = ${calc(userInput).gallons} gallons | ${userInput} gallons = ${calc(userInput).liters} liters`
    massText.textContent = `${userInput} kilos = ${calc(userInput).pounds} pounds | ${userInput} pounds = ${calc(userInput).kilos} kilos`
}

function calc(input){
    feet = (input * 3.281).toFixed(3);
    meters = (input / 3.281).toFixed(3);


    gallons = (input * 0.264).toFixed(3);
    liters = (input / 0.264).toFixed(3);


    pounds = (input * 2.204).toFixed(3);
    kilos = (input / 2.204).toFixed(3);

    return {feet, meters, liters, gallons, kilos, pounds};
}





