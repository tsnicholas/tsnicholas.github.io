import LinkBuilderFactory from "./linkBuilderFactory";

const DATA_CONTAINER_CLASSES = "d-flex justify-content-between align-items-start";
const linkBuilderFactory = new LinkBuilderFactory();

/**
 * Initializes an element with a classlist.
 * @param {string} element
 * @param {string} classList
 * @returns {HTMLElement}
 */
function createStyledElement(element, classList) {
    const container = document.createElement(element);
    container.className = classList ?? "";
    return container;
}

/**
 * Creates a plain paragraph element with the given content.
 * @param {string} content
 * @returns {HTMLParagraphElement}
 */
function createUnstyledText(content) {
    const text = document.createElement("p");
    text.textContent = content;
    return text;
}

/**
 * Adds the text to the element as inner text and returns the modified element.
 * @param {string} element
 * @param {string} text
 * @returns {HTMLElement}
 */
function injectInnerText(element, text) {
    element.innerText = text;
    return element;
}

/**
 * Appends all the child elements in the array into the parent element.
 * @param {HTMLDivElement} parent
 * @param {HTMLElement[]} children
 */
function injectChildren(parent, children) {
    children.forEach(child => parent.appendChild(child));
}

/**
 * Creates a heading with the given link.
 * @param {string} name
 * @param {string} link
 * @returns {HTMLElement}
 */
function createHeadingWithLink(name, link) {
    const heading = document.createElement("h3");
    const headingLink = injectInnerText(document.createElement("a"), name);
    headingLink.href = link;
    heading.appendChild(headingLink);
    return heading;
}

/**
 * Creates a row of badges from the list of skills.
 * @param {string[]} skills
 * @returns {HTMLElement}
 */
function parseSkills(skills) {
    const container = createStyledElement("p", "p-1 hstack gap-2");
    for (const skill of skills) {
        const skillBadge = injectInnerText(createStyledElement("span", "badge"), skill);
        container.appendChild(skillBadge);
    }
    return container;
}

/**
 * Creates a heading with a subtitle under it.
 * @param {string} position
 * @param {object} company
 * @returns {HTMLElement}
 */
function createHeadingWithSubtitle(position, company) {
    const container = createStyledElement("div", "pb-3");
    container.appendChild(injectInnerText(createStyledElement("h3", "fs-4 fw-normal"), position));
    container.appendChild(createCompanyDisplay(company));
    return container;
}

/**
 * Creates the display for a company.
 * @param {object} company
 * @returns {HTMLElement}
 */
function createCompanyDisplay(company) {
    const container = createStyledElement("div", "company-container");
    container.appendChild(document.createTextNode(company.name));
    container.appendChild(linkBuilderFactory.getBuilder("phone")(company.phone));
    container.appendChild(linkBuilderFactory.getBuilder("location")(company.location));
    return container;
}

/**
 * Creates a description with an unordered list.
 * @param {string} summary
 * @param {string[]} accomplishments
 * @returns {HTMLDivElement}
 */
function createAdvancedDescription(summary, accomplishments) {
    const container = document.createElement("div");
    injectChildren(container, [
        createUnstyledText(summary),
        createUnorderedList(accomplishments)
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
    data.forEach(element => {
        const listItem = document.createElement("li");
        listItem.textContent = element;
        unorderedList.appendChild(listItem);
    });
    return unorderedList;
}

/**
 * Strategy for rendering facts.
 * @param {object[]} data,
 * @param {HTMLDivElement} container
 */
function parseFactData(data, container) {
    data.forEach(fact => {
        const newContainer = createStyledElement("div", DATA_CONTAINER_CLASSES);
        const newHeading = createUnstyledText(fact.name);
        const linkContainer = document.createElement("div");
        linkContainer.innerHTML = `${fact.link} ${fact.icon}`;
        injectChildren(newContainer, [newHeading, linkContainer]);
        container.appendChild(newContainer);
    });
}

/**
 * Strategy for rendering education data.
 * @param {object[]} data
 * @param {HTMLDivElement} container
 */
function parseEducationData(data, container) {
    data.forEach(education => {
        const subContainer = document.createElement("div");
        subContainer.appendChild(createUnstyledText(`${education.school} in ${education.location} [${education.timeline}]`));
        subContainer.appendChild(createUnstyledText(education.degree));
        container.appendChild(subContainer);
    });
}

/**
 * Strategy for rendering project data.
 * @param {object[]} data
 * @param {HTMLDivElement} container
 */
function parseProjectData(data, container) {
    data.forEach(project => {
        const nestedContainer = createStyledElement("div", `${DATA_CONTAINER_CLASSES} pb-2`);
        const dateContainer = createStyledElement("div", "col-md-3 p-1");
        dateContainer.innerText = project.date;
        nestedContainer.appendChild(dateContainer);
        const mainContainer = createStyledElement("div", "col-md-10");
        const headingContainer = createStyledElement("div", "pb-2");
        injectChildren(headingContainer, [
            createHeadingWithLink(project.name, project.link),
            parseSkills(project.skills),
        ]);
        const descriptionContainer = createStyledElement("p", "p-1");
        descriptionContainer.innerText = project.description;
        injectChildren(mainContainer, [headingContainer, descriptionContainer]);
        nestedContainer.appendChild(mainContainer);
        container.appendChild(nestedContainer);
    });
}

/**
 * Strategy for rendering experience data.
 * @param {object[]} data
 * @param {HTMLDivElement} container
 */
function parseExperienceData(data, container) {
    data.forEach(experience => {
        const nestedContainer = createStyledElement("div", DATA_CONTAINER_CLASSES);
        container.appendChild(nestedContainer);
        const dateContainer = createStyledElement("p", "col-md-3 p-1");
        dateContainer.innerText = experience.date;
        const circleContainer = createStyledElement("span", "col-md-2 timeline-point");
        const bodyWrapper = createStyledElement("div", "col-md-8 pb-3");
        injectChildren(nestedContainer, [dateContainer, circleContainer, bodyWrapper]);
        injectChildren(bodyWrapper, [
            createHeadingWithSubtitle(experience.position, experience.company),
            createAdvancedDescription(experience.description, experience.accomplishments)
        ]);
    });
}

export default class RenderStrategyFactory {
    constructor() {
        this.renderStrategyMap = new Map([
            ["fact", parseFactData],
            ["education", parseEducationData],
            ["project", parseProjectData],
            ["experience", parseExperienceData]
        ]);
    }

    getRenderStrategy(type) {
        const renderStrategy = this.renderStrategyMap.get(type);
        if (!renderStrategy) {
            throw new Error(`Strategy type ${type} not found.`);
        }
        return renderStrategy;
    }
}
