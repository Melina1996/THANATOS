
let myDiv = document.querySelector(".hello")

function changeColor(){
  myDiv.classList.add("ciao")
}

myDiv.addEventListener("click",changeColor)

