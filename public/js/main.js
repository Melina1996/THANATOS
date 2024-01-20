//declare variables 

//all my three counters:
let allCounters = document.querySelectorAll(".each-logo span")

//to adjust style of my logos and my paragraphs in the end
let myContainer = document.querySelectorAll(".fa-brands")
let myPs = document.querySelectorAll("p")

//FOR EACH LOOP for my 3 counters
allCounters.forEach(element => {
  element.innerText = "0";

//for each counter I call the function here:
  function counting(){
    //target number is defined in the attribute "data-target" of each counter
    let maxCount = +element.getAttribute("data-target") //"+" to make it an integer
    let myH2Count = +element.innerText

    let increment = maxCount/200 //will increment by 200er-steps

      //if number of my counter smaller than target, "maxCount/200" is added to my number
      if(myH2Count < maxCount){
        element.innerText = Math.round(myH2Count + increment);//add 1 200er-step to my number
        setTimeout(counting,1) //time span is 1second, call function here as long as my number smaller than target
      } else { //when target reached, inner Text is assigned the target value
        element.innerText = maxCount
        //change styles of my paragraph and logos
        element.style.color = "black"
        myIcons.forEach(element => {
          element.style.color = "black"
        });
        myPs.forEach(element => {
          element.style.color = "black"
        });
      }
    }
    counting()
  })



