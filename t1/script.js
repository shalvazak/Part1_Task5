const btn = document.querySelector("#btn")
const txt = document.querySelector("#random-text")


btn.addEventListener("click", () => {
    if ( btn.innerHTML == "hide") {
        btn.innerHTML = "show"
        txt.setAttribute("hidden", "hidden")
    }else {
        btn.innerHTML = "hide"
        txt.removeAttribute("hidden")
    }
})

