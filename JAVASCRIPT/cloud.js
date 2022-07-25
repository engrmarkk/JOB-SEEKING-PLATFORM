let svgTurn = document.querySelector(".secondd");
let svgTurn1 = document.querySelector(".secondd1");
let svgTurn2 = document.querySelector(".secondd2");
let jobCon = document.querySelector(".job-con");
let jobCon1 = document.querySelector(".job-con1");
let jobCon2 = document.querySelector(".job-con2");
let body = document.querySelector("body")


svgTurn.addEventListener("click", ()=>{
    svgTurn.classList.toggle("active");
    jobCon.classList.toggle("active2")
    })

svgTurn1.addEventListener("click", ()=>{
    svgTurn1.classList.toggle("active");
    jobCon1.classList.toggle("active2")
    })

svgTurn2.addEventListener("click", ()=>{
    svgTurn2.classList.toggle("active");
    jobCon2.classList.toggle("active2")
     })