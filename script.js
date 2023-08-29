let istatus = document.querySelector("h4")

let btn = document.querySelector("#add")

let flag = 0

btn.addEventListener("click", function(){
    if (flag == 0) {
        istatus.innerHTML = "Friend"
        istatus.style.color = "green"
        btn.style.backgroundColor = "Red"
        btn.innerHTML = "Remove"
        flag = 1
    }
    else {
        istatus.innerHTML = "President"
        istatus.style.color = "black"
        btn.innerHTML = "Add friend"
        btn.style.backgroundColor = "Green"
        flag = 0
    }

})





