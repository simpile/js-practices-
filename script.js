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
    if(myYear=null || myYear ==! Number || myYear.length < 4) {alert(" the input coldn't be emty")}
   else{
  alert( "you are  " + theAge +"  years old")}
  
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
    var parsDate= new Date(1400,06,16,0)
    var myParsYear = document.getElementById("myParsYear").value;
    var thisParsYear = parsDate.getFullYear();
    var theParsAge= thisParsYear - myParsYear
 
    if(myParsYear=null || myParsYear ==! Number || myParsYear.length < 4) {alert(" نمیتواند خالی باشد")}
   else{ alert( "شما  " + theParsAge +"  سالتونه")
  }
}

// submit with enter key
var input2 = document.getElementById("myParsYear");
input2.addEventListener("keyup", function (event) {
// Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13  && input.value !== "") {
        document.getElementById("myParsBtn").click();
    }
})