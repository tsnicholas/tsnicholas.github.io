import metadata from "./data/metadata.json";
import "../styles.css"
import professionalPicture from "../assets/Professional Mugshot.jpg"

const DATA_CONTAINER_CLASSES = "d-flex justify-content-between align-items-start";

const renderStrategies = {
    /**
     * Strategy for rendering facts.
     * @param {object[]} data,
     * @param {HTMLDivElement} container
     */
    fact: function (data, container) {
        data.forEach(fact => {
            const newContainer = createElementWithStyle("div", DATA_CONTAINER_CLASSES);
            const newHeading = createElementWithStyleAndText("p", undefined, fact.name);
            const linkContainer = document.createElement("div");
            linkContainer.innerHTML = `${fact.link} ${fact.icon}`;
            injectWithChildren(newContainer, [newHeading, linkContainer]);
            container.appendChild(newContainer);
        });
    },
    /**
     * Strategy for rendering education data.
     * @param {object[]} data
     * @param {HTMLDivElement} container
     */
    education: function (data, container) {
        data.forEach(education => {
            const firstElement = document.createElement("div");
            firstElement.textContent = `${education.school} in ${education.location} [${education.timeline}]`;
            container.appendChild(firstElement);
            const secondElement = document.createElement("div");
            secondElement.textContent = education.degree;
            container.appendChild(secondElement);
        });
    },
    /**
     * Strategy for rendering project data.
     * @param {object[]} data
     * @param {HTMLDivElement} container
     */
    project: function (data, container) {
        data.forEach(project => {
            const newContainer = createElementWithStyle("div", DATA_CONTAINER_CLASSES);
            newContainer.appendChild(createElementWithStyleAndText("div", "col-md-3 p-1", project.date));
            const mainContainer = createElementWithStyle("div", "col-md-10");
            injectWithChildren(mainContainer, [
                createHeadingWithLink(project.name, project.link),
                parseSkills(project.skills),
                createElementWithStyleAndText("p", "p-1", project.description)
            ]);
            newContainer.appendChild(mainContainer);
            container.appendChild(newContainer);
        });
    },
    /**
     * Strategy for rendering experience data.
     * @param {object[]} data
     * @param {HTMLDivElement} container
     */
    experience: function (data, container) {
        data.forEach(experience => {
            const newContainer = createElementWithStyle("div", DATA_CONTAINER_CLASSES);
            container.appendChild(newContainer);
            const bodyWrapper = createElementWithStyle("div", "col-md-10");
            injectWithChildren(newContainer, [
                createElementWithStyleAndText("p", "col-md-3 p-1", experience.date),
                bodyWrapper
            ]);
            injectWithChildren(bodyWrapper, [
                createHeadingWithSubtitle(experience.company, experience.position),
                createDescription(experience)
            ]);
        })
    }
}

/**
 * Initializes an element with a classlist.
 * @param {string} element
 * @param {string} classList
 * @returns {HTMLElement}
 */
function createElementWithStyle(element, classList) {
    const container = document.createElement(element);
    container.classList = classList;
    return container;
}

/**
 * Initializes an element with a classlist and inner text.
 * @param {string} element
 * @param {string} classList
 * @param {string} text
 * @returns {HTMLDivElement}
 */
function createElementWithStyleAndText(element, classList, text) {
    const container = createElementWithStyle(element, classList);
    container.innerText = text;
    return container;
}

/**
 * Appends all the child elements in the array into the parent element.
 * @param {HTMLDivElement} parent
 * @param {HTMLElement[]} children
 */
function injectWithChildren(parent, children) {
    for (const child of children) {
        parent.appendChild(child);
    }
}

/**
 * Creates a heading with the given link.
 * @param {string} name
 * @param {string} link
 * @returns {HTMLElement}
 */
function createHeadingWithLink(name, link) {
    const heading = document.createElement("h3");
    const headingLink = document.createElement("a");
    headingLink.href = link;
    headingLink.innerText = name;
    heading.appendChild(headingLink);
    return heading;
}

/**
 * Creates a row of badges from the list of skills.
 * @param {string[]} skills
 * @returns {HTMLElement}
 */
function parseSkills(skills) {
    const container = createElementWithStyle("p", "p-1 hstack gap-2");
    for (const skill of skills) {
        const skillBadge = createElementWithStyleAndText("span", "badge", skill);
        container.appendChild(skillBadge);
    }
    return container;
}

/**
 * Creates a heading with a subtitle under it.
 * @param {string} company
 * @param {string} position
 * @returns {HTMLElement}
 */
function createHeadingWithSubtitle(company, position) {
    const container = document.createElement("div");
    container.appendChild(createElementWithStyleAndText("h3", "fs-4 fw-normal", company));
    container.appendChild(createElementWithStyleAndText("p", "fs-5 fst-italic", position));
    return container;
}

/**
 * Creates a description with an unordered list.
 * @param {object} experience
 * @returns {HTMLDivElement}
 */
function createDescription(experience) {
    const container = document.createElement("div");
    injectWithChildren(container, [
        createElementWithStyleAndText("p", "", experience.description),
        createUnorderedList(experience.accomplishments)
    ]);
    return container;
}

/**
 * Creates an unordered list from the provided list of strings.
 * @param {string[]} data
 * @return {HTMLElement}
 */
function createUnorderedList(data) {
    const unorderedList = document.createElement("ul");
    for (const element of data) {
        const listItem = document.createElement("li");
        listItem.textContent = element;
        unorderedList.appendChild(listItem);
    }
    return unorderedList;
}

/**
 * Selects and executes a strategy for rendering the given data.
 * @param {object[]} data
 * @param {string} type
 */
function render(data, type) {
    console.log(JSON.stringify(data));
    let container = document.getElementById(`${type}-container`);
    console.log(container);
    if (renderStrategies[type]) {
        renderStrategies[type](data, container);
    } else {
        console.error(`Strategy type ${type} not found.`);
    }
}

function main() {
    let nameHeader = document.getElementById("full-name");
    nameHeader.innerText = metadata.name;

    let subtitle = document.getElementById("subtitle");
    subtitle.innerText = metadata.title;

    let imageContainer = document.getElementById("mugshot-container");
    const image = document.createElement("img");
    imageContainer.appendChild(image);
    image.src = professionalPicture;
    image.alt = "Professional Mugshot";
    image.classList = "rounded-circle img-fluid";

    render(metadata.facts, "fact");
    render(metadata.education, "education");
    render(metadata.projects, "project");
    render(metadata.experience, "experience");
}

main();
