const button = document.getElementById("openLetter");
const letter = document.getElementById("letter");

button.addEventListener("click", function () {
    letter.classList.toggle("hidden");

    if (letter.classList.contains("hidden")) {
        button.textContent = "Open My Letter 💌";
    } else {
        button.textContent = "Close My Letter ❤️";
    }
});

// Floating hearts animation
function createHeart() {
    const heart = document.createElement("div");

    heart.className = "floating-heart";
    heart.textContent = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 25) + "px";
    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 500);