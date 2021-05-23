// getElementByID()
document.getElementById("get-by-id").style.color = "blue";
// getElementsByClassName()
document.getElementsByClassName("get-by-classname")[0].style.color = "red";
// getElementsByTagName()
document.getElementsByTagName("h3")[2].style.color = "pink";
// querySelector()
document.querySelector("span#query").style.color = "purple";
// querySelectorAll()
document.querySelectorAll("p")[2].style.color = "gray";

// --------- MANIPULATING ----------------
document.querySelector("h2#man-text").textContent += "Manipulating the text Content";

document.querySelector("h2#inner").innerText = "Inner text";

document.querySelector("h2#inner-html").innerHTML = "Inner <mark>HTML</mark>";

document.querySelector("input").value = "Manipulating the value input";

document.querySelector("h4").setAttribute("id", "set");

console.log(document.querySelector("input").getAttribute("type"));

document.querySelector("h5").removeAttribute("id");

document.querySelector("h5").classList.add("added-again");
// document.querySelector("h5").classList.remove("added-again");
// document.querySelector("h5").classList.toggle("added-again");






