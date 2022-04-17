//console.log(document)
//console.log(document.getElementById("total"))
//console.log(document.getElementsByClassName("plus"))
//console.log(document.getElementsByTagName("p"))
//console.log(document.querySelector("#total"))
//console.log(document.querySelectorAll(minus))

const btnlike=document.getElementsByClassName("like")
console.log(btnlike)
const btnplus=document.querySelectorAll(".plus")
const checkboxTag=document.getElementsByClassName("check")
for (let i = 0; i < btnplus.length; i++) {
  btnplus[i].addEventListener("click",incrament)
  checkboxTag[i].addEventListener("click",totalPrice)
}
const btnminus=document.querySelectorAll(".minus")
// console.log(btnminus)
for (let i = 0; i >btnminus.length; i--){
  btnminus[i].addEventListener("click",decrement)
  checkboxTag[i].addEventListener("click",totalPrice)
}

 



//incrament function 

function incrament(event) {
// console.log(event) 
var btnplus=event.target
// console.log(btnplus)
var divelt=btnplus.parentElement
// console.log(divelt)
var qunetitytag=divelt.querySelector("p")
// console.log(qunetitytag)
var qunetityValue=Number (qunetitytag.innerHTML);
qunetityValue=qunetityValue+1;
//  console.log(typeof(qunetityValue))
qunetitytag.innerHTML=qunetityValue
var trElt=divelt.parentElement.parentElement
// console.log(trElt)
var unitePricevalue=Number(trElt.querySelector(".unitePrice").innerHTML )
// console.log(unitePricevalue)
var priceTag=trElt.querySelector(".price")
var priceValue=Number(priceTag.innerHTML)
// console.log(priceValue)
priceValue=qunetityValue*unitePricevalue
priceTag.innerHTML=priceValue
};


// total price function

function totalPrice(e){
  var checkbox=e.target;
  var priceValue=Number(checkbox.parentElement.parentElement.querySelector(".price").innerHTML)
  var totalTag=document.getElementById("total")
  var totalValue=Number(totalTag.innerHTML)
  var btnplus=checkbox.parentElement.parentElement.querySelector(".plus")
  var btnMinus=checkbox.parentElement.parentElement.querySelector(".minus")

  if(checkbox.checked===true){
    totalValue+=priceValue
    btnplus.setAttribute("disabled",true)
  }
  else{
    totalValue+=priceValue
    btnplus.removeAttribute("disabled")
  }
  totalTag.innerHTML=totalValue
}


// function like

function wishlist(event) {

  var btnlike = event.target


  if(btnlike.style.color==="gray"){
      btnlike.style.color = "red"
  }
  else {
      btnlike.style.color = "gray"
  } 
}