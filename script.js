window.addEventListener("DOMContentLoaded", () => {
let toggles = document.querySelectorAll(".toggle");

for (let t of toggles) {
  t.addEventListener("click", () => {
    let content = t.nextElementSibling;
    let shown = content.style.display === "block";
    content.style.display = shown ? "none" : "block";
  });
}
});

function changeText() {
let p = document.getElementById("dynamicText");
p.textContent = p.textContent === "Music that moves you..." ? "Let the rhythm take over." : "What's a chorus again?";
}

function hideImage() {
let img = document.getElementById("musicImg");
img.style.display = img.style.display === "none" ? "block" : "none";
}

function changeVibe() {
let title = document.getElementById("mainTitle");
title.style.color = title.style.color === "cyan" ? "#ffffff" : "cyan";
}

function highlightGenre(button) {
let all = document.querySelectorAll(".toggle");
for (let b of all) b.style.backgroundColor = "#c6ff40";
button.style.backgroundColor = "#ff4081";
}

function highlightFAQ(block) {
block.style.backgroundColor = "#444";
setTimeout(() => {
  block.style.backgroundColor = "#222";
}, 500);
}

let genreViewCount = 0;
function trackGenreView(div) {
genreViewCount++;
if (!div.textContent.includes("Viewed")) {
  div.textContent += ` (Viewed ${genreViewCount} times)`;
} else {
  let baseText = div.textContent.split(" (Viewed")[0];
  div.textContent = `${baseText} (Viewed ${genreViewCount} times)`;
}
}

