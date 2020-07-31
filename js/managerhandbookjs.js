// console.log(document.getElementsByClassName("container"));

// console.log(document.querySelectorAll('container'));

// let containers = console.log(document.getElementById("containers").classList.toggle("game"));

//This function is for the nav bar

function navOpen() {
    let y = document.getElementById("navContainer").classList.toggle("hide");
    document.getElementById("navContainer").style.width = "84%";
    
   // let c = document.getElementById("changeSymbol").innerHTML = "&#935;";

   if (y == true) {
    //c = document.getElementById("changeSymbol").innerHTML = "&#9776;";
    document.getElementById("navContainer").style.width = "0";
   }
}