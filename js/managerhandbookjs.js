//This prompts the user for a password before logging into the page
// function password() {
//     let prompt1 = window.prompt("Enter Password to open page");
//     window.alert("what is happening?")

// if (prompt1.value == "12345") {
//     window.alert("Correct Password! Click Ok to continue");
// }
// else {
//         window.prompt("Not Correct! Enter Password to open page");
//     }

// }


//This function is for the nav bar

function navOpen() {
    let nav = document.getElementById("navContainer");
    // let mediumView = window.matchMedia("(min-width: 32.5em)");
    // let largeView = window.matchMedia("(min-width: 60em)");

    if (nav.style.width == "96%") {
        //c = document.getElementById("changeSymbol").innerHTML = "&#9776;";
        nav.style.width = "0";
   
       }

    else {
   // let y = document.getElementById("navContainer").classList.toggle("hide");
    nav.style.width = "96%";
    let liItems = document.querySelectorAll("nav ul li");
    // liItems.forEach((li)=> {
    //     li.style.display = "block";
    // });

   // let c = document.getElementById("changeSymbol").innerHTML = "&#935;";
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

    //get the elements by class name
    let intro = document.getElementsByClassName("styles"); 
    intro[0].style.display = "block";
}

//This is for the menu from medium and large view
function openMenuLarge() {
    let nav = document.getElementById("navContainer");
    if (nav.style.width == "50%") {
                nav.style.width = "0";
    }
    else {
       nav.style.width = "50%";
    }
}

//This is for the for the button to display the boxes
let slideIndex = 1;
boxSlider(slideIndex);

function plusBox(n) {
    boxSlider(slideIndex +=n);
}

function boxSlider(n) {
    let i;
    let boxGrab = document.getElementsByClassName("styles");
    if (n > boxGrab.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = boxGrab.length;
    }

    for (i = 0; i < boxGrab.length; i++) {
        boxGrab[i].style.display = "none";
    }

    boxGrab[slideIndex - 1].style.display = "block";
}
