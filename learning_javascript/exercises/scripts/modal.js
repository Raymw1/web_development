const openButton = document.querySelector("#openModal");
const modal = document.querySelector("div.modal-wrapper");

openButton.addEventListener("click", function() {
    modal.classList.toggle("invisible");
})

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        modal.classList.toggle("invisible");
    }
})