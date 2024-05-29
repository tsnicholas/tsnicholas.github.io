import metadata from "./data/metadata.json";

const DATA_CONTAINER_CLASSES = "d-flex justify-content-between align-items-start";

function injectFactData() {
    const container = document.getElementById("factContainer");
    for(const fact of metadata.facts) {
        const newContainer = createElementWithStyle("div", DATA_CONTAINER_CLASSES);
        const newHeading = createElementWithStyleAndText("p", undefined, fact.name);
        const linkContainer = document.createElement("div");
        linkContainer.innerHTML = `${fact.link} ${fact.icon}`;
        injectWithChildren(newContainer, [newHeading, linkContainer]);
        container.appendChild(newContainer);
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

function injectEducationData() {
    const container = document.getElementById("educationContainer");
    for (const experience of metadata.education) {
        const newContainer = createElementWithStyle("div", DATA_CONTAINER_CLASSES);
        const firstLine = document.createElement("div");
        firstLine.textContent = `${experience.school} in ${experience.location} [${experience.timeline}]`;
        newContainer.appendChild(firstLine);
        container.appendChild(newContainer);
    }
}

function injectProjectData() {
    const container = document.getElementById("projectContainer");
    for (const project of metadata.projects) {
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

function injectWorkExperience() {
    const container = document.getElementById("experienceContainer");
    for (const workExperience of metadata.experience) {
        const newDataContainer = createElementWithStyle("div", DATA_CONTAINER_CLASSES);
        container.appendChild(newDataContainer);
        const bodyWrapper = createElementWithStyle("div", "col-md-10");
        injectWithChildren(newDataContainer, [
            createElementWithStyleAndText("p", "col-md-3 p-1", workExperience.date),
            bodyWrapper
        ]);
        injectWithChildren(bodyWrapper, [
            createHeadingWithSubtitle(workExperience.company, workExperience.position),
            createBody(workExperience)
        ]);
    }
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
 * Creates the body section for work experience.
 * @param {object} workExperience
 * @returns {HTMLElement}
 */
function createBody(workExperience) {
    const container = document.createElement("div");
    injectWithChildren(container, [
        createElementWithStyleAndText("p", "", workExperience.description),
        createUnorderedList(workExperience.accomplishments)
    ]);
    return container;
}

/**
 * Creates an unordered list from the list of accomplishments.
 * @param {string[]} accomplishments
 * @return {HTMLElement}
 */
function createUnorderedList(accomplishments) {
    const accomplishmentList = document.createElement("ul");
    for (const accomplishment of accomplishments) {
        const listItem = document.createElement("li");
        listItem.textContent = accomplishment;
        accomplishmentList.appendChild(listItem);
    }
    return accomplishmentList;
}

let nameHeader = document.getElementById("full-name");
nameHeader.innerText = metadata.name;

let subtitle = document.getElementById("subtitle");
subtitle.innerText = metadata.title;

injectFactData();
injectEducationData();
injectProjectData();
injectWorkExperience();
