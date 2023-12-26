const progressBar = document.querySelector(".progress")
const previousBtn = document.querySelector("#previous-btn")
const nextBtn = document.querySelector("#next-btn")

let progress = 0;
function uptdateProgressBar(){
    progressBar.style.width = progress + "%"
}

function nextStep(){
progress += 10
if(progress>100) progress = 100;
uptdateProgressBar()
}

function previousStep(){
    progress -= 10;
    if(progress < 0) progress = 0;
    uptdateProgressBar()
}

nextBtn.addEventListener("click", nextStep)
previousBtn.addEventListener("click", previousStep)

