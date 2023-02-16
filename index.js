let h1=document.querySelector("h1")
let random=Math.floor(Math.random()*101)
h1.innerHTML=random
function minus(){
   return h1.innerHTML-=1
}
function plus(){
   return h1.innerHTML+1
}
function returntostart(){
    return h1.innerHTML=random
}
third.addEventListener("click",minus)
second.addEventListener("click",returntostart)
first.addEventListener("click",plus)