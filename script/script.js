'use strict'
import { countries } from '../data/countries.js'
//declare
const topPopulation = document.getElementById("population")
const topLanguage = document.getElementById("language")
const btnPopulation = document.getElementById("btnPopulation")
const btnLanguage = document.getElementById("btnLanguage")

// console.log(countries)


const topList =  countries.filter(function(list){
  if(true){
    return list.name
  }
})
// console.log(topList)


const numberPopulation = countries.map(function(number,index){
  return number.population
})
const numberPopulationList = (numberPopulation.sort(function(a, b) {
  return b - a;
}).slice(0,10))
console.log(numberPopulationList)


const namePopulation = countries.map(function(countries){
  return countries
})
console.log(namePopulation)

let namePopulationList = namePopulation.includes(numberPopulationList)

console.log(namePopulationList)




const showPopulation = function(){
  topPopulation.style.display="flex"
  topLanguage.style.display="none"
}
const showLanguage = function(){
  topPopulation.style.display="none"
  topLanguage.style.display="flex"
}

//1

btnPopulation.addEventListener("click",showPopulation)
btnLanguage.addEventListener("click",showLanguage)