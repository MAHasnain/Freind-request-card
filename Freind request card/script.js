let istatus = document.querySelector("h4")

let addFreind = document.querySelector("#add")
let removeFreind = document.querySelector("#remove")

addFreind.addEventListener("click", function(){
    istatus.innerHTML = "Friend"
    istatus.style.color = "green"
})

removeFreind.addEventListener("click", function() {
    istatus.innerHTML = "President"
    istatus.style.color = "black"
})




