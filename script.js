function myChangeLang(){ 

    var shamsi= document.getElementById("shamsi")
    var miladi=  document.getElementById("miladi");
    var lang = document.getElementById("myLang");
   
    if (shamsi.style.display == "none"){
     shamsi.style.display = "flex"
       miladi.style.display = "none";
   lang.innerHTML = "en"
    
   
   }
   else {
       shamsi.style.display = "none"
       miladi.style.display = "flex";
       lang.innerHTML = "fa"
       }
   
   }

function myDetect() {
            
    var myYear = document.getElementById("myYear").value;
    var thisYear = new Date().getFullYear();
    var theAge= thisYear - myYear
  alert( "you are  " + theAge +"  years old")

}
// submit with enter key
var input = document.getElementById("myYear");
input.addEventListener("keyup", function (event) {
// Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13  && input.value !== "") {
        document.getElementById("myBtn").click();
    }
});



function myDetect2(){
    var date= new Date(1400,01,01,0)
    var myYear = document.getElementById("myParsYear").value;
    var thisYear = date.getFullYear();
    var theAge= thisYear - myYear
  alert( "شما  " + theAge +"  سالتونه")

}

// submit with enter key
var input2 = document.getElementById("myParsYear");
input2.addEventListener("keyup", function (event) {
// Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13  && input.value !== "") {
        document.getElementById("myParsBtn").click();
    }
})