'use strict'
import { countries } from '../data/countries.js'
//declare
const topPopulation = document.getElementById("population")
const topLanguage = document.getElementById("language")
const btnPopulation = document.getElementById("btnPopulation")
const btnLanguage = document.getElementById("btnLanguage")
const populationName = document.getElementById("populationName")
const populationChart = document.getElementById("populationChart")
const populationNumber = document.getElementById("populationNumber")


let xValues = countries.map(function(o) { return o.population; });
xValues = Array.from(countries, o => o.population);

let xMax = [...xValues].sort((a,b) => b-a).slice(0,10)
// console.log(xMax)

xMax.forEach((element,index) => {
  const populationFiltered = countries.filter((function(o) { return o.population === xMax[index]; }))
console.log(populationFiltered)
});

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