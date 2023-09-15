const container = document.querySelector('.container');
const bars = document.querySelectorAll('.bar');

const myFunction = function () {
    if (container.textContent === "X")
        container.textContent = "==";
}

container.addEventListener('click', myFunction());