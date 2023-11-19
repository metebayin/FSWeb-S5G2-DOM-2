import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
document.querySelector("h1").addEventListener("click", function(e) {
    alert("Bana tıkladın!");
}); 

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
    link.addEventListener("mouseover", () => {
       link.style.backgroundColor = "#ff5733";
       link.style.color = "white"; 
    });
    link.addEventListener("mouseout", ()=> {
    link.style.backgroundColor = "";
    link.style.color = "";
    });
    link.addEventListener("mousedown", ()=> {
        link.style.backgroundColor = "#d94525";
        link.style.color = "white";
        link.style.transition = "0s";
        link.style.transform = "scale(.9)   ";
        });
        link.addEventListener("mouseup", () => {
            link.style.backgroundColor = "";
            link.style.color = "";
            link.style.transition = "0.3s";
            link.style.transform = "scale(.9)" 
    });
});

document.addEventListener("keypress", function (e) {
    console.log("keypressed e", e);
    if (e.key === "f") {
        document.querySelector(".intro > img").classList.tooggle
        ("full-screen");
    }
});

function randomRgb(event) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rbg(${r}, ${g}, ${b})`;
}
document.querySelector(".intro h2").addEventListener
("mouseenter", (event) => {
    event.target.style.backgroundColor = randomRgb();
});