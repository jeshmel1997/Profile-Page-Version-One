const cards = document.querySelectorAll(".main-card");

cards.forEach(card => {
    card.addEventListener("mouseover", (event) => {
        card.className = card.className + " card-effect";
    });

    card.addEventListener("mouseleave", (event) => {
        card.className = "main-card";
    })
});