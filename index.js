/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let populated = document.getElementById("input-el")
let button = document.getElementById("input-btn")
let content1 = document.getElementById("display1")
let content2 = document.getElementById("display2")
let content3 = document.getElementById("display3")

const meterToFeet = 3.281;
const literToGallon = 0.264;
const kilogramToPound = 2.204;



button.addEventListener("click", function() {
    console.log(populated.value)
    console.log()
    const currentvalue = parseInt(populated.value)
    content1.innerText = `${currentvalue} meters = ${(currentvalue* meterToFeet).toFixed(3)} feet | ${currentvalue} feet = ${(currentvalue/ meterToFeet).toFixed(3)} meter `
    content2.innerText = `${currentvalue} liters = ${(currentvalue* literToGallon).toFixed(3)} gallons | ${currentvalue} gallons = ${(currentvalue/ literToGallon).toFixed(3)} liters`
    content3.innerText = `${currentvalue} kilos = ${(currentvalue * kilogramToPound).toFixed(3)} pounds | ${currentvalue} pounds = ${(currentvalue / kilogramToPound).toFixed(3)} kilos`
})

