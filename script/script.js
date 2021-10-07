'use strict'
import { countries } from '../data/countries.js'
//declare
const topPopulation = document.getElementById("population")
const topLanguage = document.getElementById("language")
const btnPopulation = document.getElementById("btnPopulation")
const btnLanguage = document.getElementById("btnLanguage")



let xValues = countries.map(function(o) { return o.population; }).sort((a,b) => b-a).slice(0,10);

xValues.forEach((element,index) => {
let populationFiltered =  countries.filter((function(o) { return o.population === xValues[index]; }))

populationFiltered.forEach((value,index)=>{
  let width = Math.abs(((value.population)/7742800000)*100)
  const listItem = document.createElement('ul');
  listItem.innerHTML=`
  <li class="name">${value.name}</li>
  <li class="bar" style="width:${width}rem;background-color:red"></li>
  <li lass="numbers">${value.population}</li>`

   topPopulation.appendChild(listItem);

  });

}); 





const showPopulation = function(e){
  e.preventDefault();
  topPopulation.style.display="flex"
  topLanguage.style.display="none"
  
}
const showLanguage = function(e){
  e.preventDefault();

  topPopulation.style.display="none"
  topLanguage.style.display="flex"
}

//1

btnPopulation.addEventListener("click",showPopulation)
btnLanguage.addEventListener("click",showLanguage)