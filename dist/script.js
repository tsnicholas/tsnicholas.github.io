/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_metadata_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/metadata.json */ \"./scripts/data/metadata.json\");\n\n\nconst DATA_CONTAINER_CLASSES = \"d-flex justify-content-between align-items-start\";\n\nfunction injectFactData() {\n    const container = document.getElementById(\"factContainer\");\n    for(const fact of _data_metadata_json__WEBPACK_IMPORTED_MODULE_0__.facts) {\n        const newContainer = createElementWithStyle(\"div\", DATA_CONTAINER_CLASSES);\n        const newHeading = createElementWithStyleAndText(\"p\", undefined, fact.name);\n        const linkContainer = document.createElement(\"div\");\n        linkContainer.innerHTML = `${fact.link} ${fact.icon}`;\n        injectWithChildren(newContainer, [newHeading, linkContainer]);\n        container.appendChild(newContainer);\n    }\n}\n\n/**\n * Initializes an element with a classlist.\n * @param {string} element\n * @param {string} classList\n * @returns {HTMLElement}\n */\nfunction createElementWithStyle(element, classList) {\n    const container = document.createElement(element);\n    container.classList = classList;\n    return container;\n}\n\n/**\n * Initializes an element with a classlist and inner text.\n * @param {string} element\n * @param {string} classList\n * @param {string} text\n * @returns {HTMLDivElement}\n */\nfunction createElementWithStyleAndText(element, classList, text) {\n    const container = createElementWithStyle(element, classList);\n    container.innerText = text;\n    return container;\n}\n\n/**\n * Appends all the child elements in the array into the parent element.\n * @param {HTMLDivElement} parent\n * @param {HTMLElement[]} children\n */\nfunction injectWithChildren(parent, children) {\n    for (const child of children) {\n        parent.appendChild(child);\n    }\n}\n\nfunction injectEducationData() {\n    const container = document.getElementById(\"educationContainer\");\n    for (const experience of _data_metadata_json__WEBPACK_IMPORTED_MODULE_0__.education) {\n        const newContainer = createElementWithStyle(\"div\", DATA_CONTAINER_CLASSES);\n        const firstLine = document.createElement(\"div\");\n        firstLine.textContent = `${experience.school} in ${experience.location} [${experience.timeline}]`;\n        newContainer.appendChild(firstLine);\n        container.appendChild(newContainer);\n    }\n}\n\nfunction injectProjectData() {\n    const container = document.getElementById(\"projectContainer\");\n    for (const project of _data_metadata_json__WEBPACK_IMPORTED_MODULE_0__.projects) {\n        const newContainer = createElementWithStyle(\"div\", DATA_CONTAINER_CLASSES);\n        newContainer.appendChild(createElementWithStyleAndText(\"div\", \"col-md-3 p-1\", project.date));\n        const mainContainer = createElementWithStyle(\"div\", \"col-md-10\");\n        injectWithChildren(mainContainer, [\n            createHeadingWithLink(project.name, project.link),\n            parseSkills(project.skills),\n            createElementWithStyleAndText(\"p\", \"p-1\", project.description)\n        ]);\n        newContainer.appendChild(mainContainer);\n        container.appendChild(newContainer);\n    }\n}\n\n/**\n * Creates a heading with the given link.\n * @param {string} name\n * @param {string} link\n * @returns {HTMLElement}\n */\nfunction createHeadingWithLink(name, link) {\n    const heading = document.createElement(\"h3\");\n    const headingLink = document.createElement(\"a\");\n    headingLink.href = link;\n    headingLink.innerText = name;\n    heading.appendChild(headingLink);\n    return heading;\n}\n\n/**\n * Creates a row of badges from the list of skills.\n * @param {string[]} skills\n * @returns {HTMLElement}\n */\nfunction parseSkills(skills) {\n    const container = createElementWithStyle(\"p\", \"p-1 hstack gap-2\");\n    for (const skill of skills) {\n        const skillBadge = createElementWithStyleAndText(\"span\", \"badge\", skill);\n        container.appendChild(skillBadge);\n    }\n    return container;\n}\n\nfunction injectWorkExperience() {\n    const container = document.getElementById(\"experienceContainer\");\n    for (const workExperience of _data_metadata_json__WEBPACK_IMPORTED_MODULE_0__.experience) {\n        const newDataContainer = createElementWithStyle(\"div\", DATA_CONTAINER_CLASSES);\n        container.appendChild(newDataContainer);\n        const bodyWrapper = createElementWithStyle(\"div\", \"col-md-10\");\n        injectWithChildren(newDataContainer, [\n            createElementWithStyleAndText(\"p\", \"col-md-3 p-1\", workExperience.date),\n            bodyWrapper\n        ]);\n        injectWithChildren(bodyWrapper, [\n            createHeadingWithSubtitle(workExperience.company, workExperience.position),\n            createBody(workExperience)\n        ]);\n    }\n}\n\n/**\n * Creates a heading with a subtitle under it.\n * @param {string} company\n * @param {string} position\n * @returns {HTMLElement}\n */\nfunction createHeadingWithSubtitle(company, position) {\n    const container = document.createElement(\"div\");\n    container.appendChild(createElementWithStyleAndText(\"h3\", \"fs-4 fw-normal\", company));\n    container.appendChild(createElementWithStyleAndText(\"p\", \"fs-5 fst-italic\", position));\n    return container;\n}\n\n/**\n * Creates the body section for work experience.\n * @param {object} workExperience\n * @returns {HTMLElement}\n */\nfunction createBody(workExperience) {\n    const container = document.createElement(\"div\");\n    injectWithChildren(container, [\n        createElementWithStyleAndText(\"p\", \"\", workExperience.description),\n        createUnorderedList(workExperience.accomplishments)\n    ]);\n    return container;\n}\n\n/**\n * Creates an unordered list from the list of accomplishments.\n * @param {string[]} accomplishments\n * @return {HTMLElement}\n */\nfunction createUnorderedList(accomplishments) {\n    const accomplishmentList = document.createElement(\"ul\");\n    for (const accomplishment of accomplishments) {\n        const listItem = document.createElement(\"li\");\n        listItem.textContent = accomplishment;\n        accomplishmentList.appendChild(listItem);\n    }\n    return accomplishmentList;\n}\n\nlet nameHeader = document.getElementById(\"full-name\");\nnameHeader.innerText = _data_metadata_json__WEBPACK_IMPORTED_MODULE_0__.name;\n\nlet subtitle = document.getElementById(\"subtitle\");\nsubtitle.innerText = _data_metadata_json__WEBPACK_IMPORTED_MODULE_0__.title;\n\ninjectFactData();\ninjectEducationData();\ninjectProjectData();\ninjectWorkExperience();\n\n\n//# sourceURL=webpack://tsnicholas.github.io/./scripts/index.js?");

/***/ }),

/***/ "./scripts/data/metadata.json":
/*!************************************!*\
  !*** ./scripts/data/metadata.json ***!
  \************************************/
/***/ ((module) => {

eval("module.exports = /*#__PURE__*/JSON.parse('{\"name\":\"Tim Nicholas\",\"title\":\"Aspiring Software Developer\",\"bio\":\"Aspiring professional software developer with a deep passion for programming and computers. Eager to utilize my problem-solving skills to contribute to innovative software. I\\'m an introverted but dependable person who is excited to expand on my strengths and knowledge to tackle new challenges. If you\\'re interested, please feel free to contact me if you wish to learn more about me.\",\"facts\":[{\"name\":\"Residence\",\"link\":\"<a href=\\\\\"https://maps.app.goo.gl/ioNHGSxwFzVvdnty6\\\\\">Camby, IN</a>\",\"icon\":\"<i class=\\\\\"bi bi-house-fill fact-icon\\\\\"></i>\"},{\"name\":\"LinkedIn\",\"link\":\"<a href=\\\\\"https://www.linkedin.com/in/tsnicholas\\\\\">tsnicholas</a>\",\"icon\":\"<i class=\\\\\"bi bi-linkedin fact-icon\\\\\"></i>\"},{\"name\":\"GitHub\",\"link\":\"<a href=\\\\\"https://github.com/tsnicholas\\\\\">tsnicholas</a>\",\"icon\":\"<i class=\\\\\"bi bi-github fact-icon\\\\\"></i>\"},{\"name\":\"Email\",\"link\":\"<a href=\\\\\"mailto:tsnicholas@outlook.com\\\\\">tsnicholas@outlook.com</a>\",\"icon\":\"<i class=\\\\\"fa fa-envelope fact-icon\\\\\"></i>\"},{\"name\":\"Phone\",\"link\":\"<a href=\\\\\"tel:+13179938411\\\\\">+1 (317) 993-8411</a>\",\"icon\":\"<i class=\\\\\"bi bi-telephone-fill fact-icon\\\\\"></i>\"}],\"education\":[{\"school\":\"Ball State University\",\"location\":\"Muncie, IN\",\"timeline\":\"2021 - 2024\",\"degree\":\"Bachelor of Science in Computer Science\"}],\"projects\":[{\"name\":\"Bus Shuttle Application\",\"description\":\"This project aims to re-engineer an existing project written with php to use the .Net Framework instead.\",\"date\":\"March 2024 - April 2024\",\"link\":\"https://github.com/tsnicholas/BusShuttle\",\"skills\":[\".NET Framework\",\"Asp.NET\",\"Web Development\",\"C#\",\"Bootstrap\"]},{\"name\":\"Personalized Learning Plan Website\",\"description\":\"This is my Capstone project (Senior Year Project) in which I worked together in a team of 5 to develop an application for Stanford CME.\",\"date\":\"October 2023 - April 2024\",\"link\":\"https://github.com/hergin/PersonalizedLearningPlanWebApp\",\"skills\":[\"Web Development\",\"RESTful API\",\"Typescript\",\"PostgreSQL\",\"React\"]},{\"name\":\"Stack Demo\",\"description\":\"This project is a web application designed to simulate the Stack data structure with a user interface developed with Bootstrap.\",\"date\":\"February 2024\",\"link\":\"https://github.com/tsnicholas/StackDemo\",\"skills\":[\"Web Development\",\"Bootstrap\",\"JavaScript\",\"CSS\",\"HTML\"]},{\"name\":\"Timer App\",\"description\":\"This is a simple timer app I made for Mobile App Development. It allows you to create and edit timers as well as customizing your own timer sets. I developed this project with React Native and it requires you to run it with a phone emulator. I would recommend using Expo to run this application.\",\"date\":\"October 2023\",\"link\":\"https://github.com/tsnicholas/TimerApp\",\"skills\":[\"Mobile Application Development\",\"Typescript\",\"React Native\",\"React\"]},{\"name\":\"Pokedex Application\",\"description\":\"To demonstrate my understanding of Robert Martin\\'s Clean Code, I collaborated in a team of 4 to develop a pokedex application. By parsing data from PokeAPI, the application retrieves basic information on a pokemon and displays it on a user interface made in JavaFX.\",\"date\":\"March 2022 - May 2022\",\"link\":\"https://github.com/tsnicholas/PokedexApplication\",\"skills\":[\"Java\",\"JavaFX\",\"Version Control\",\"Unit Testing\",\"Gradle\"]}],\"experience\":[{\"company\":\"StaffMax USA\",\"position\":\"Warehouse Associate (Temp)\",\"date\":\"Summer 2023\",\"description\":\"During the summer of 2023, I worked as a temp for a NTN bearings warehouse in Indianapolis. The assignment\\'s duty was to verify and pack various heavy car parts for them to be shipped.\",\"accomplishments\":[\"Cooperated with a unit to get packages ready to be shipped ahead of time.\",\"Detected packing errors with technology ensuring quality shipping.\"]},{\"company\":\"StaffMax USA\",\"position\":\"Warehouse Associate (Temp)\",\"date\":\"Summer 2022\",\"description\":\"As a temp for StaffMax USA now, I worked in a Pepboys warehouse which had a problem with lack of employees. The position\\'s task was to sort and store various car parts as according to the database throughout the warehouse.\",\"accomplishments\":[\"Collaborated in a team with determination and leadership to make workflow more efficient.\",\"Instructed new employees to achieve quality effort with concise communication.\"]},{\"company\":\"Elwood Staffing Services, Inc.\",\"position\":\"Warehouse Associate (Temp)\",\"date\":\"Summer 2021\",\"description\":\"During the summer of 2021, I worked at a Loves warehouse as a temp for Elwood Staffing. The profession was to work as a team to retread big truck tires in a team by using various machinery.\",\"accomplishments\":[\"Partnered with others in a well-organized team environment to operate machines\",\"Contributed a strong work ethic to meet strict quotas\"]},{\"company\":\"Elwood Staffing Services, Inc.\",\"position\":\"Warehouse Associate (Temp)\",\"date\":\"Summer 2020\",\"description\":\"My first job was working as a temp for Elwood Staffing at a warehouse in Mooresville known as Ingram Micro. The job was to fulfill orders by picking and packing phone products to get them ready for shipping.\",\"accomplishments\":[\"Adapted to an unfamiliar environment with ease to ensure a strong work ethic.\",\"Volunteered to work many hours of overtime throughout the pandemic to help a disturbed workflow.\"]}]}');\n\n//# sourceURL=webpack://tsnicholas.github.io/./scripts/data/metadata.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/index.js");
/******/ 	
/******/ })()
;