
let homeButton=document.querySelector("#navigationButton")
let backbutton=document.getElementById("backNavigationButton")
let homePage = document.getElementById("homePage");
let highlightsPage = document.getElementById("highlightsPage");

backbutton.addEventListener("click",backPage)
homeButton.addEventListener("click",homePageSwitch)



function homePageSwitch(event) {
    homePage.classList.add("switchPage")

    setTimeout(() => {
        homePage.classList.remove("switchPage")
        homePage.style.display = "none"
        highlightsPage.style.display = "grid"

        highlightsPage.classList.add("highlightsPageFade")
    
    }, 1000)
    // 1000
}

function backPage(event) {
    highlightsPage.classList.remove("highlightsPageFade")

    highlightsPage.classList.add("highlightsPageFadeOut")
    setTimeout(() => {
        highlightsPage.classList.remove("highlightsPageFadeOut")
        highlightsPage.style.display = "none"
        homePage.style.display = "grid"
        homePage.classList.add("backSwitchPage")
        setTimeout(()=> {
        homePage.classList.remove("backSwitchPage")

        }, 1500)

    }, 500)

    // 500
}
