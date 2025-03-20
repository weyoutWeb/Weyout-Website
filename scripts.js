const targetDate = new Date("March 31, 2025 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    glitchText("days", days);
    glitchText("hours", hours);
    glitchText("minutes", minutes);
    glitchText("seconds", seconds);
}

// Function to apply glitching effect
function glitchText(elementId, correctValue) {
    const glitchChars = ["#", "@", "%", "&", "?", "!", "~", "╳", "∆", "¤", "§"];
    let element = document.getElementById(elementId);
    
    if (Math.random() > 0.7) { // 30% chance to glitch the numbers
        let glitchedValue = correctValue.toString().split("").map(char => 
            Math.random() > 0.5 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char
        ).join("");
        element.innerText = glitchedValue;
    } else {
        element.innerText = correctValue;
    }
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();