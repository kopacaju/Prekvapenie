document.addEventListener("DOMContentLoaded", () => {
    // Pridanie hudby
    const music = document.createElement("audio");
    music.src = "Happy Birthday Song!!!_256k.mp3"; // Nahraďte odkaz na váš zvukový súbor
    music.loop = true;
    document.body.appendChild(music);

    // Vytvorenie tlačidla na hudbu pod tortou
    const playButton = document.createElement("button");
    playButton.textContent = "🎂 Prekvapenie🎂!";
    playButton.style.position = "absolute";
    playButton.style.top = "50%"; // Umiestnené pod tortou
    playButton.style.left = "50%";
    playButton.style.transform = "translate(-50%, -50%)";
    playButton.style.padding = "20px 40px";
    playButton.style.backgroundColor = "linear-gradient(135deg,rgb(0, 0, 0),rgb(0, 0, 0))";
    playButton.style.color = "black";
    playButton.style.fontSize = "20px";
    playButton.style.border = "none";
    playButton.style.borderRadius = "25px";
    playButton.style.cursor = "pointer";
    playButton.style.transition = "all 0.3s ease-in-out";
    playButton.style.boxShadow = "0px 8px 15px rgba(0, 0, 0, 0.2)";
    playButton.addEventListener("mouseenter", () => {
        playButton.style.transform = "translate(-50%, -50%) scale(1.1)";
        playButton.style.boxShadow = "0px 10px 20px rgba(0, 0, 0, 0.4)";
    });
    playButton.addEventListener("mouseleave", () => {
        playButton.style.transform = "translate(-50%, -50%) scale(1)";
        playButton.style.boxShadow = "0px 8px 15px rgba(0, 0, 0, 0.2)";
    });
    document.body.appendChild(playButton);

    // Funkcia na prehranie hudby a spustenie ostatných animácií
    playButton.addEventListener("click", () => {
        music.play()
            .then(() => {
                console.log("Hudba je prehrávaná cez tlačidlo.");
                playButton.style.display = "none"; // Skryť tlačidlo po kliknutí

                // Spustenie animácií po kliknutí
                const layers = document.querySelectorAll(".layer");
                const candles = document.querySelectorAll(".candle");
                const message = document.querySelector(".message");

                // Animácia vrstiev torty
                layers.forEach((layer, index) => {
                    setTimeout(() => {
                        layer.style.transform = "translateY(0) scale(1)";
                        layer.style.opacity = "1";
                    }, index * 1000);
                });

                // Oneskorený vzhľad sviečok
                setTimeout(() => {
                    candles.forEach((candle, index) => {
                        setTimeout(() => {
                            candle.style.transform = "scale(1)";
                            candle.style.opacity = "1";
                        }, index * 500);
                    });
                }, layers.length * 1000);

                // Zobrazenie narodeninovej správy
                setTimeout(() => {
                    message.style.opacity = "1";
                    message.style.transform = "translateY(0)";
                }, layers.length * 1000 + candles.length * 500 + 1000);

                // Zobrazenie tlačidla darček až po zapnutí hudby a animáciách
                setTimeout(() => {
                    const giftButton = document.createElement("button");
                    giftButton.textContent = "🎁 Otvor si darček!";
                    giftButton.style.position = "absolute";
                    giftButton.style.top = "69%"; // Pod tortou
                    giftButton.style.left = "50%";
                    giftButton.style.transform = "translate(-50%, -50%)";
                    giftButton.style.padding = "15px 30px";
                    giftButton.style.backgroundColor = "linear-gradient(135deg, #ffcf33, #ff9e0d)";
                    giftButton.style.color = "black";
                    giftButton.style.fontSize = "18px";
                    giftButton.style.border = "none";
                    giftButton.style.borderRadius = "20px";
                    giftButton.style.cursor = "pointer";
                    giftButton.style.transition = "all 0.3s ease-in-out";
                    giftButton.style.boxShadow = "0px 8px 15px rgba(0, 0, 0, 0.2)";
                    giftButton.addEventListener("mouseenter", () => {
                        giftButton.style.transform = "translate(-50%, -50%) scale(1.1)";
                        giftButton.style.boxShadow = "0px 10px 20px rgba(0, 0, 0, 0.4)";
                    });
                    giftButton.addEventListener("mouseleave", () => {
                        giftButton.style.transform = "translate(-50%, -50%) scale(1)";
                        giftButton.style.boxShadow = "0px 8px 15px rgba(0, 0, 0, 0.2)";
                    });

                    // Presmerovanie na darčekovú stránku
                    giftButton.addEventListener("click", () => {
                        console.log("Tlačidlo darček bolo kliknuté.");
                        window.location.href = 'darcek.html';
                    });

                    document.body.appendChild(giftButton);
                }, layers.length * 1000 + candles.length * 500 + 1500); // Čas na zobrazenie darčekového tlačidla
            })
            .catch(error => {
                console.error("Chyba pri prehrávaní hudby: ", error);
                alert("Kliknutím na tlačidlo umožníte prehrávanie hudby.");
            });
    });
});
