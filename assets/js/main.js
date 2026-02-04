// ===============================
//   NAVBAR ACTIVE LINK HIGHLIGHT
// ===============================

const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});

// ===============================
//   SMOOTH SCROLL BEHAVIOR
// ===============================
document.documentElement.style.scrollBehavior = "smooth";

// ===============================
//   HOVER SOUND EFFECT (OPTIONAL)
// ===============================

// Optional small click/hover sound for cyberpunk feel
// Uncomment to enable

/*
const hoverSound = new Audio("assets/sounds/hover.mp3");

navLinks.forEach(link => {
    link.addEventListener("mouseenter", () => {
        hoverSound.volume = 0.4;
        hoverSound.play();
    });
});
*/

// ===============================
//   BUTTON CLICK ANIMATION
// ===============================
const buttons = document.querySelectorAll(".btn-primary, .btn-secondary");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.style.transform = "scale(0.95)";
        setTimeout(() => {
            btn.style.transform = "scale(1)";
        }, 150);
    });
});

// ===============================
//   CYBERPUNK CARD HOVER EFFECT
// ===============================
const cards = document.querySelectorAll(".cyber-card");

cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0,255,255,0.2), rgba(0,0,0,0.7))`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.background = "rgba(0, 15, 20, 0.4)";
    });
});
