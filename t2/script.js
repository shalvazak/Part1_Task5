elDiv = document.createElement("div")
elDiv.setAttribute("id", "card")

elH2 = document.createElement("h2")
elH2.innerHTML = "Gandalf"

elA = document.createElement("a")
elA.setAttribute("href", "https://en.wikipedia.org/wiki/Gandalf")
elA.innerHTML = "Go to profile"

document.querySelector("#container").appendChild(elDiv).append(elH2, elA)