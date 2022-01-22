var coll = document.getElementsByClassName("collapsible");
var i;
   for (i = 0; i < coll.length; i++) {
   coll[i].addEventListener("click", function() {
       this.classList.toggle("active");
       var content = this.nextElementSibling;
       if (content.style.display === "block") {
       content.style.display = "none";
       } else {
       content.style.display = "block";
       }
   });
}
// document.getElementById("abbtn1").addEventListener("click", function() {
//    console.log("hh")
//    window.location.href="nSubscription.html"
// })
// document.getElementById("abbtn").addEventListener("click",function(){
//    console.log("he")
//    window.location.href="nSubscription.html"
// })