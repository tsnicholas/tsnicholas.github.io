import metadata from "./data/metadata.json";
import "./styles.css";
import professionalPicture from "./assets/Professional Mugshot.jpg";
import render from "./RenderStrategyFactory";

document.addEventListener("DOMContentLoaded", () => {
    const collapseButtons = document.querySelectorAll(".collapse-button");
    collapseButtons.forEach(button => {
        const targetId = button.getAttribute("href");
        const collapseElement = document.querySelector(targetId);

        collapseElement.addEventListener("shown.bs.collapse", () => {
            button.querySelector(".collapse-button-icon").style.transform = "rotate(0deg)";
        });

        collapseElement.addEventListener("hidden.bs.collapse", () => {
            button.querySelector(".collapse-button-icon").style.transform = "rotate(-90deg)";
        });
    });

    main();
});

function main() {
    let nameHeader = document.getElementById("full-name");
    nameHeader.innerHTML = metadata.name;

    let subtitle = document.getElementById("subtitle");
    subtitle.innerText = metadata.title;

    let imageContainer = document.getElementById("mugshot-container");
    const image = document.createElement("img");
    imageContainer.appendChild(image);
    image.src = professionalPicture;
    image.alt = "Professional Mugshot";
    image.className = "rounded-circle img-fluid";

    try {
        render(metadata.facts, "fact");
        render(metadata.education, "education");
        render(metadata.projects, "project");
        render(metadata.experience, "experience");
    } catch (error) {
        console.error(error.message);
    }
}
