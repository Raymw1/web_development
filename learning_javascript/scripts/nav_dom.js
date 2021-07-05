// --------- SELECTING ----------------
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


// --------- NAVIGATING ----------------
// console.log(document.querySelector("body").parentNode)
console.log(document.querySelector("body").parentElement); // Element's parent

// console.log(document.querySelector("body").childNodes);
console.log(document.querySelector("body").children); // Element's children
// console.log(document.querySelector("body").firstChild);
console.log(document.querySelector("body").firstElementChild);
// console.log(document.querySelector("body").lastChild);
console.log(document.querySelector("body").lastElementChild);

// console.log(document.querySelector("h1").nextSibling);
console.log(document.querySelector("h1").nextElementSibling);
// console.log(document.querySelector("h1").previousSibling);
console.log(document.querySelector("p").previousElementSibling);


// --------- CREATING/ADDING ELEMENTS ----------------
let p = document.createElement("p");
p.innerText = "Creating element in JS";
document.querySelector("body").append(p);
// document.querySelector("body").prepend(p); // Add as first child

p.innerText = "Adding before";
document.querySelector("body").insertBefore(p, document.querySelector(".added-again"));
p.innerText = "Adding after";
document.querySelector("body").insertBefore(p, document.querySelector(".added-again").nextSibling);


// --------- EVENTS ----------------
document.querySelector("input").onkeydown = () => console.log("Key Down");
document.querySelector("input").onkeyup = () => console.log("Key Up");
document.querySelector("input").onkeypress = () => console.log("Key Press");

document.querySelector("h3").addEventListener("mouseleave", () => console.log("Mouse Left"));

document.querySelector("h4").onclick = () => console.log("H4 Clicked");

document.querySelector("input").onkeypress = function(event) {
    console.log(event.key);
    console.log(event.currentTarget.value);
}




