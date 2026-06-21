const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {

    let maxX = window.innerWidth - 150;
    let maxY = window.innerHeight - 100;

    let x = Math.random() * maxX;
    let y = Math.random() * maxY;

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

function nextPage(){
    window.location.href = "welcome.html";
}