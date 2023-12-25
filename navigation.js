let homeNavButton=document.querySelector("#navigationButton")
console.log(homeNavButton)
homeNavButton.addEventListener("click",homePageSwitch)
function homePageSwitch(event){
    console.log(event)
     let ok =document.getElementById("homePage")
     let hp = document.getElementById("highlightsPage")
    ok.classList.add("switchPage")
    setTimeout(() => {
        ok.style.display="none"
        hp.style.display="grid";
        hp.classList.add("highlightsPageFade")
    }, 1000);  
}

let backbutton=document.getElementById("backNavigationButton")
backbutton.addEventListener("click",backPage)

function backPage(event) {
    console.log(event);
    let ok = document.getElementById("homePage");
    let hp = document.getElementById("highlightsPage");
    hp.classList.add("highlightsPageFadeOut");
    setTimeout(() => {
        hp.style.display = "none";
    }, 500); // Adjust timing for hiding 'highlightsPage'
    setTimeout(() => {
        ok.classList.add("backSwitchPage");
        ok.style.display = "grid";
    }, 600); // Adjust timing for showing 'homePage'
}


