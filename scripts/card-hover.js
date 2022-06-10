const cardArea = document.querySelector(".project-grid--card");
const cardImage = document.querySelector(".project-grid--card--img");

cardArea.addEventListener("mouseover", () => {
    console.log("Yes");
    cardImage.style.transform = "scale(.9)";
});
