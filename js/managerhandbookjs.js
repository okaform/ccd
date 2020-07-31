// console.log(document.getElementsByClassName("container"));

// console.log(document.querySelectorAll('container'));

// let containers = console.log(document.getElementById("containers").classList.toggle("game"));

//This function is for the nav bar

function navOpen() {
    let y = document.getElementById("navContainer").classList.toggle("hide");
    document.getElementById("navContainer").style.width = "92%";
    let liItems = document.querySelectorAll("nav ul li");
    // liItems.forEach((li)=> {
    //     li.style.display = "block";
    // });

   // let c = document.getElementById("changeSymbol").innerHTML = "&#935;";

   if (y == true) {
    //c = document.getElementById("changeSymbol").innerHTML = "&#9776;";
    document.getElementById("navContainer").style.width = "0";

   }
}

let shw = document.getElementsByClassName("styles");  
for (let i = 0; i < shw.length; i++) {
    shw[i].addEventListener("click", ()=> {
        document.getElementById("navContainer").style.width = "0";
    }
    );
}

function showPage() {      
    // document.getElementById("navContainer").style.width = "0";
    // console.log(shw);
}

