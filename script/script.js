'use strict'
import { countries } from '../data/countries.js'
//declare
const topPopulation = document.getElementById("population")
const topLanguage = document.getElementById("language")
const btnPopulation = document.getElementById("btnPopulation")
const btnLanguage = document.getElementById("btnLanguage")
const populationInfo = document.getElementById("populationInfo")
const languageInfo = document.getElementById("languageInfo")

//population
let xValues = countries.map(function(o) { return o.population; }).sort((a,b) => b-a).slice(0,10);

xValues.forEach((element,index) => {
let populationFiltered =  countries.filter((function(o) { return o.population === xValues[index]; }))

populationFiltered.forEach((value,index)=>{
  let width = Math.abs(((value.population)/7742800000)*100+10)
  const listItem = document.createElement('ul');
  listItem.innerHTML=`
  <li class="name">${value.name}</li>
  <li class="bar" >
  <div  style="width:${width}rem;height:1.5rem;background-color:#ff6584; display:flex; justify-content:flex-start; align-items:center!important "></div>
  </li>
  <li class="numbers">${value.population}</li>`

   topPopulation.appendChild(listItem);

  });

}); 

//languages
let counts={}

let lValues = countries
.map(function(o) { return o.languages})
.map(function(q){ return q})
// console.log(lValues)
lValues.forEach((value,index)=>{
  value.forEach((value)=>{
    counts[value] = (counts[value] || 0) + 1;
    
  })
})

let sortable=[];
for (var value in counts) {
  sortable.push([value, counts[value]]);
}

let topLanguages = sortable.sort(function(a, b) {
  return b[1] - a[1];
}).slice(0,10);

console.log((topLanguages))

topLanguages.forEach((element,index)=>{
  console.log(element[0])
  console.log(element[1])
  
  const listItem = document.createElement('ul');
  listItem.innerHTML=`
  <li class="name">${element[0]}</li>
  <li class="bar" >
  <div  style="width:${element[1]}%;height:1.5rem;background-color:#6c63ff; display:flex; justify-content:flex-start; align-items:center!important "></div>
  </li>
  <li class="numbers">${element[1]}</li>
  `
  topLanguage.appendChild(listItem);

})


//show//hide
const showPopulation = function(e){
  e.preventDefault();
  topPopulation.style.display="flex"
  topLanguage.style.display="none"
  populationInfo.style.display="flex"
  languageInfo.style.display="none"
}
const showLanguage = function(e){
  e.preventDefault();

  topPopulation.style.display="none"
  topLanguage.style.display="flex"
  populationInfo.style.display="none"
  languageInfo.style.display="flex"
  
}

//1

btnPopulation.addEventListener("click",showPopulation)
btnLanguage.addEventListener("click",showLanguage)