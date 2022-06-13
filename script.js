let DesktopShareBtn = document.querySelector("#share");
let shareContainer = document.querySelector(".share-container");
let MobileShareBtn = document.querySelector("#mobile-shareBtn");

DesktopShareBtn.addEventListener("click", DisplayShareContainer)
MobileShareBtn.addEventListener("click", DisplayShareContainer)


// shareBtn.addEventListener("blur", () => {
//     shareContainer.classList.remove("show");
//     shareContainer.classList.add("hide");
//     shareBtn.children[0].classList.add("hide");
// })

function DisplayShareContainer() {
    if (window.innerWidth > 870) {
        if (shareContainer.classList.contains("show")) {
            shareContainer.classList.add("hide");
            shareContainer.classList.remove("show");
        } else {
            shareContainer.classList.add("show");
            shareContainer.classList.remove("hide");
        }
    } else {
        let mobileShareContainer = document.querySelector(".mobile-share-container");
        let botSec = document.querySelector(".bot-sec");
        if (mobileShareContainer.classList.contains("hide")) {
            mobileShareContainer.classList.remove("hide");
            mobileShareContainer.classList.add("show");
            botSec.classList.add("hide-container");
        } else {
            mobileShareContainer.classList.add("hide");
            mobileShareContainer.classList.remove("show");
            botSec.classList.remove("hide-container");
        }
    }
}