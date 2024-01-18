//variables for each of my h2

let firstH2 = document.querySelector("#firstH2")

let secondH2 = document.querySelector("#secondH2")

let thirdH2 = document.querySelector("#thirdH2")

//LOOP for numbers

//counter twitter

let myNumber


  for (let i = 0; i < 12000; i++) {
    setTimeout(function(){
      firstH2.innerText = i
    }, 1000)
  }


//counter youtube

function counterTwo(){
  for (let i = 0; i <= 5000; i++) {
    setTimeout(secondH2.innerText = i++,2000) 
  }
}


//counter youtube

function counterThree(){
  for (let i = 0; i <= 7500; i++) {
    setTimeout(thirdH2.innerText = i++,2000) 
  }
}



