const overlay = document.getElementById("startOverlay");
const cat = document.getElementById("cat");
const message = document.getElementById("message");
const music = document.getElementById("bgMusic");
const heartsContainer = document.getElementById("hearts-container");

// Start animation
overlay.addEventListener("click", () => {

    overlay.style.display = "none";

    music.volume = 0.6;
    music.play().catch(() => {});

    // Move cat forward
    cat.style.transform = "translateX(-50%) scale(1)";
    cat.style.bottom = "20%";

    // Show message
    setTimeout(() => {
        message.style.opacity = "1";
    }, 4000);

    // Generate floating hearts
    generateHearts();
});

// Create floating hearts
function generateHearts() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💖";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 3 + 4) + "s";
        heart.style.fontSize = (Math.random() * 20 + 15) + "px";

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 7000);

    }, 400);
}
