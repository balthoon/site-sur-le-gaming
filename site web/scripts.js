document.getElementById("startGame").addEventListener("click", function() {
    alert("Le jeu commence!");
});

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Message envoyé!");
});