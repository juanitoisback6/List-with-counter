const addItem= document.getElementById("addItemBtn");
const list = document.getElementById("list");
const removebtn = document.getElementById("removeLastBtn");

let numbb= 0;

addItem.addEventListener("click", ()=>{

let newList = document.createElement("li");

  numbb++;
 

newList.textContent=`item ${numbb}`;


let random1= Math.floor(Math.random()*255);
let random2= Math.floor(Math.random()*255);
let random3= Math.floor(Math.random()*255);

newList.style.color=`rgb(${random1}, ${random2}, ${random3})` 
 

list.appendChild(newList);


})

removebtn.addEventListener("click", ()=>{
 


if (list.lastChild) {
    list.lastChild.remove();
    numbb--;
  } else {
    console.log("No items to remove");
  }


})