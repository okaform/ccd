
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


//This selects every li element
let shw = document.querySelectorAll("nav ul li"); 

//This selects the div with the different sections
let shw1 = document.getElementsByClassName("styles"); 

//run a for loop that selects the li item being clicked 
for (let i = 0; i < shw.length; i++) {
    shw[i].addEventListener("click", ()=> {

        //This makes sure that the other sections stay closed when one is clicked
        for(let j = 0; j < shw1.length; j++) {
            shw1[j].style.display = "none";
        }
        
        //display the item being clicked and the others will be closed
            shw1[i].style.display = "block";
       document.getElementById("navContainer").style.width = "0";
    });
    
}

function showPage() {      
    // document.getElementById("navContainer").style.width = "0";
    // console.log(shw);
}

