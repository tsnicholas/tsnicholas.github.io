const DATA_CONTAINER_CLASS_STRING = "d-flex justify-content-between align-items-start";

/**
 * 
 * @param {string} resource
 * @returns {Promise<object>}
 */
function retrieveJsonData(resource) {
    const response = fetch(resource).then(response => response.json());
    return Promise.resolve(response);
}

function displayFactData(factData) {
    const container = document.getElementById("factContainer");
    for(const fact of factData) {
        const newContainer = createElementWithStyle("div", DATA_CONTAINER_CLASS_STRING);
        const newHeading = createElementWithStyleAndText("p", undefined, fact.name);
        const linkContainer = document.createElement("div");
        linkContainer.innerHTML = `${fact.link} ${fact.icon}`;
        injectWithChildren(newContainer, [newHeading, linkContainer]);
        container.appendChild(newContainer);
    }
}

/**
 *
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
 *
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
 * @param {HTMLDivElement} parent
 * @param {HTMLElement[]} children
 */
function injectWithChildren(parent, children) {
    for (const child of children) {
        parent.appendChild(child);
    }
}

function displayProjectData(projectData) {
    const container = document.getElementById("projectContainer");
    for (const project of projectData) {
        const newContainer = createElementWithStyle("div", DATA_CONTAINER_CLASS_STRING);
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
 *
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
 *
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

function displayWorkExperience(workData) {
    const container = document.getElementById("experienceContainer");
    for (const workExperience of workData) {
        const newDataContainer = createElementWithStyle("div", DATA_CONTAINER_CLASS_STRING);
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
 *
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
 *
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
 *
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

const factData = await retrieveJsonData("./scripts/data/facts.json");
displayFactData(factData);

const projectData = await retrieveJsonData("./scripts/data/projects.json");
displayProjectData(projectData);

const workData = await retrieveJsonData("./scripts/data/work.json");
displayWorkExperience(workData);

/* <div>
        <div class="d-flex justify-content-between align-items-start">
            <div class="col-md-3 p-1">
                Summer 2023
            </div>
            <div class="col-md-10 p-1">
                <div>
                    <h3 class="fs-4 fw-normal">StaffMax USA</h3>
                    <p class="fs-5 fst-italic">Warehouse Associate (temp)</p>
                </div>
                <div>
                    <p>
                        During the summer of 2023, I worked as a temp for a NTN bearings warehouse in Indianapolis.
                        The assignment's duty was to verify and pack various heavy car parts for them to be shipped.
                    </p>
                    <p>Accomplishments:</p>
                    <ul>
                        <li>Cooperated with a unit to get packages ready to be shipped ahead of time.</li>
                        <li>Detected packing errors with technology ensuring quality shipping.</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-between align-items-start">
            <div class="col-md-3 p-1">
                Summer 2022
            </div>
            <div class="col-md-10 p-1">
                <div class="p-1">
                    <h3 class="fs-4 fw-normal">StaffMax USA</h3>
                    <p class="fs-5 fst-italic">Warehouse Associate (temp)</p>
                </div>
                <div class="p-1">
                    <p>
                        As a temp for StaffMax USA now, I worked in a Pepboys warehouse which had a problem with lack of employees.
                        The position's task was to sort and store various car parts as according to the
                        database throughout the warehouse.
                    </p>
                    <p>Accomplishments:</p>
                    <ul>
                        <li>Collaborated in a team with determination and leadership to make workflow more efficient.</li>
                        <li>Instructed new employees to achieve quality effort with concise communication.</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-between align-items-start">
            <div class="col-md-3 p-1">
                Summer 2021
            </div>
            <div class="col-md-10 p-1">
                <div class="p-1">
                    <h3 class="fs-4 fw-normal">Elwood Staffing Services, Inc.</h3>
                    <p class="fs-5 fst-italic">Warehouse Associate (temp)</p>
                </div>
                <div class="p-1">
                    <p>
                        During the summer of 2021, I worked at a Loves warehouse as a temp for Elwood Staffing.
                        The profession was to work as a team to retread big truck tires in a team by using various machinery.
                    </p>
                    <p>Accomplishments:</p>
                    <ul>
                        <li>Partnered with others in a well-organized team environment to operate machines</li>
                        <li>Contributed a strong work ethic to meet strict quotas.</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-between align-items-start">
            <div class="col-md-3 pt-1">
                Summer 2020
            </div>
            <div class="col-md-10">
                <div class="p-1">
                    <h3 class="fs-4 fw-normal">Elwood Staffing Services, Inc.</h3>
                    <p class="fs-5 fst-italic">Warehouse Associate (temp)</p>
                </div>
                <div class="p-1">
                    <p>
                        My first job was working as a temp for Elwood Staffing at a warehouse in Mooresville known as Ingram Micro.
                        The job was to fulfill orders by picking and packing phone products to get them ready for shipping.
                    </p>
                    <p>Accomplishments:</p>
                    <ul>
                        <li>Adapted to an unfamiliar environment with ease to ensure a strong work ethic.</li>
                        <li>Volunteered to work many hours of overtime throughout the pandemic to help a disturbed workflow.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>*/