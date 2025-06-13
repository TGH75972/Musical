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
