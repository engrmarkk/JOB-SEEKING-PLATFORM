let regBtn = document.querySelector(".reg-click");
let logBtn = document.querySelector(".log-click");
let regContainer = document.querySelector(".for-reg");
let logContainer = document.querySelector(".for-login");
let formContainer = document.querySelector(".in-reg");
let togCon = document.querySelector(".tog-con");
let appP = document.querySelector(".app");
let recP = document.querySelector(".rec");
let secondForm = document.querySelector(".second-form");
let fisrtForm = document.querySelector(".first-form");


togCon.addEventListener("click", ()=>{
    appP.classList.toggle("active");
    recP.classList.toggle("active");
    secondForm.classList.toggle("active");
    fisrtForm.classList.toggle("active");
})

regBtn.addEventListener("click", ()=>{
    logContainer.style.display = "none";
    regContainer.style.display = "flex"
    regContainer.classList.add("className")
})

logBtn.addEventListener("click", ()=>{
    regContainer.style.display = "none"
    logContainer.style.display = "flex"
    logContainer.classList.add("className2")

})

