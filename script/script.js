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



let xValues = countries.map(function(o) { return o.population; }).sort((a,b) => b-a).slice(0,10);

xValues.forEach((element,index) => {
let populationFiltered =  countries.filter((function(o) { return o.population === xValues[index]; }))

populationFiltered.forEach((value,index)=>{
   populationName.innerHTML =`<li>${value.name}</li>`
   let width = 100 - ((value.population)/763165599)*100 
   populationChart.innerHTML =`<li style="width:${width}%;background-color:red"></li>`
   populationNumber.innerHTML =`<li>${value.population}</li>`
   topPopulation.appendChild(populationNumber,populationChart,populationNumber);

  });

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