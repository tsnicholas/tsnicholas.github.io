import metadata from "./data/metadata.json";
import "./styles.css";
import professionalPicture from "./assets/Professional Mugshot.jpg";
import RenderStrategyFactory from "./renderStrategyFactory";

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
    const nameHeader = document.getElementById("full-name");
    const subtitle = document.getElementById("subtitle");
    const imageContainer = document.getElementById("mugshot-container");

    if (nameHeader) nameHeader.innerHTML = metadata.name;
    if (subtitle) subtitle.innerHTML = metadata.title;
    if (imageContainer) {
        const image = document.createElement("img");
        imageContainer.appendChild(image);
        image.src = professionalPicture;
        image.alt = "Professional Mugshot";
        image.className = "rounded-circle img-fluid";
    }

    render(metadata.facts, "fact");
    render(metadata.education, "education");
    render(metadata.projects, "project");
    render(metadata.experience, "experience");
}

function render(data, type) {
    try {
        const factory = new RenderStrategyFactory();
        let renderStrategy = factory.getRenderStrategy(type);
        const container = document.getElementById(`${type}-container`);
        if(container) renderStrategy(data, container);
    } catch (error) {
        console.error(error);
    }
}
