document.addEventListener("DOMContentLoaded", () => {
    const giftBox = document.getElementById("giftBox");
    const lid = document.getElementById("lid");
    const tulips = document.getElementById("tulips");
    const message = document.getElementById("message");
    const confettiContainer = document.createElement("div");
    confettiContainer.id = "confetti-container";
    document.body.appendChild(confettiContainer);

    // Na začiatku skryjeme tulipány a text
    tulips.style.opacity = "0";
    tulips.style.transform = "scale(0)";
    message.style.opacity = "0";
    message.style.transform = "scale(0)";
    message.style.display = "none"; // Text bude úplne skrytý

    giftBox.addEventListener("click", () => {
        // Otvorenie vrchnáka darčeka
        lid.style.transform = "rotateX(-120deg) translateY(-50px)";
        lid.style.opacity = "0";

        // Darček sa zmenší a zmizne
        setTimeout(() => {
            giftBox.style.transform = "scale(0)";
            giftBox.style.opacity = "0";
        }, 500);

        // Odstránenie darčeku z DOM
        setTimeout(() => {
            giftBox.style.display = "none";
        }, 1000);

        // Zobrazenie tulipánov
        setTimeout(() => {
            tulips.style.opacity = "1";
            tulips.style.transform = "scale(1)";
        }, 1200);

        // Zobrazenie textu „For You“ po tulipánoch
        setTimeout(() => {
            message.style.display = "block"; // Ukážeme text
            message.style.opacity = "1"; // Viditeľnosť
            message.style.transform = "scale(1) rotate(0deg)"; // Rotácia začína
            message.style.animation = "colorChange 3s infinite ease, rotateText 3s infinite linear"; // Animácie
        }, 2000); // Zaručene až po tulipánoch

        // Spustenie konfiet
        setTimeout(() => {
            createConfetti();
        }, 1000);
    });

    function createConfetti() {
        const confettiCount = 150;
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement("div");
            confetti.className = "confetti";
            confetti.style.left = Math.random() * 100 + "%";
            confetti.style.top = Math.random() * -50 + "px";
            confetti.style.width = Math.random() * 10 + 5 + "px";
            confetti.style.height = Math.random() * 20 + 10 + "px";
            confetti.style.backgroundColor = getRandomColor();
            confetti.style.animationDelay = Math.random() * 1 + "s";
            confettiContainer.appendChild(confetti);

            // Interaktivita – pohyb konfiet myšou
            confetti.addEventListener("mousedown", (event) => {
                const shiftX = event.clientX - confetti.getBoundingClientRect().left;
                const shiftY = event.clientY - confetti.getBoundingClientRect().top;

                document.addEventListener("mousemove", moveConfetti);
                document.addEventListener("mouseup", stopMovingConfetti);

                function moveConfetti(e) {
                    confetti.style.left = e.pageX - shiftX + "px";
                    confetti.style.top = e.pageY - shiftY + "px";
                }

                function stopMovingConfetti() {
                    document.removeEventListener("mousemove", moveConfetti);
                    document.removeEventListener("mouseup", stopMovingConfetti);
                }
            });
        }
    }

    function getRandomColor() {
        const colors = ["#ff5733", "#ffc300", "#daf7a6", "#ff33ff", "#33ccff"];
        return colors[Math.floor(Math.random() * colors.length)];
    }
});
