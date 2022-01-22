
const spanright = document.getElementById("spanOne")
const spanleft= document.getElementById("spanZero")  
const subTweets = document.querySelector(".sub-tweets")
let slider = document.getElementById("slider")
    
spanleft.addEventListener("click", () => {
   slider.scrollLeft -= 425;
});
let click = 0
spanright.addEventListener("click", () => {
   if(click < 4){
      slider.scrollLeft += 425;
      click++
   }
   if(click === 4){
      slider.scrollLeft -= 1600;
      click = 0
   } 
});