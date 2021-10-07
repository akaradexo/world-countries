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


//user array
let topPList=[]
console.log(topPList.values())

// console.log(xMax)


//Adding user to users array
// const addData = function (list) {
//   topPList.push(list);
//   updateDom();
// };


  let xValues = countries.map(function(o) { return o.population; });
  let xMax = [...xValues].sort((a,b) => b-a).slice(0,10);
  xMax.forEach((element,index) => {
  const populationFiltered = countries.filter((function(o) { return o.population === xMax[index]; }))
  topPList.push(element)
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