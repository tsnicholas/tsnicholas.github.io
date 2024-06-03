/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_metadata_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/metadata.json */ \"./src/data/metadata.json\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _assets_Professional_Mugshot_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/Professional Mugshot.jpg */ \"./src/assets/Professional Mugshot.jpg\");\n/* harmony import */ var _renderStrategyFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderStrategyFactory */ \"./src/renderStrategyFactory.js\");\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var collapseButtons = document.querySelectorAll(\".collapse-button\");\n  collapseButtons.forEach(function (button) {\n    var targetId = button.getAttribute(\"href\");\n    var collapseElement = document.querySelector(targetId);\n    collapseElement.addEventListener(\"shown.bs.collapse\", function () {\n      button.querySelector(\".collapse-button-icon\").style.transform = \"rotate(0deg)\";\n    });\n    collapseElement.addEventListener(\"hidden.bs.collapse\", function () {\n      button.querySelector(\".collapse-button-icon\").style.transform = \"rotate(-90deg)\";\n    });\n  });\n  main();\n});\nfunction main() {\n  var nameHeader = document.getElementById(\"full-name\");\n  var subtitle = document.getElementById(\"subtitle\");\n  var imageContainer = document.getElementById(\"mugshot-container\");\n  nameHeader ? nameHeader.innerHTML = _data_metadata_json__WEBPACK_IMPORTED_MODULE_0__.name : printNotFoundWarning(\"full-name\");\n  subtitle ? subtitle.innerHTML = _data_metadata_json__WEBPACK_IMPORTED_MODULE_0__.title : printNotFoundWarning(\"subtitle\");\n  if (imageContainer) {\n    var image = document.createElement(\"img\");\n    imageContainer.appendChild(image);\n    image.src = _assets_Professional_Mugshot_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n    image.alt = \"Professional Mugshot\";\n    image.className = \"rounded-circle img-fluid\";\n  } else {\n    printNotFoundWarning(\"mugshot-container\");\n  }\n  render(_data_metadata_json__WEBPACK_IMPORTED_MODULE_0__.facts, \"fact\");\n  render(_data_metadata_json__WEBPACK_IMPORTED_MODULE_0__.education, \"education\");\n  render(_data_metadata_json__WEBPACK_IMPORTED_MODULE_0__.projects, \"project\");\n  render(_data_metadata_json__WEBPACK_IMPORTED_MODULE_0__.experience, \"experience\");\n}\nfunction printNotFoundWarning(element) {\n  console.warn(\"HTML element with id \".concat(element, \" was not found.\"));\n}\nfunction render(data, type) {\n  try {\n    var factory = new _renderStrategyFactory__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n    var renderStrategy = factory.getRenderStrategy(type);\n    var container = document.getElementById(\"\".concat(type, \"-container\"));\n    if (container) renderStrategy(data, container);\n  } catch (error) {\n    console.error(error);\n  }\n}\n\n//# sourceURL=webpack://tsnicholas.github.io/./src/index.js?");

/***/ }),

/***/ "./src/linkBuilderFactory.js":
/*!***********************************!*\
  !*** ./src/linkBuilderFactory.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LinkBuilderFactory)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n/**\n * Initialize the link's structure\n * @param {string} link\n * @returns {HTMLAnchorElement}\n */\nfunction initializeLinkElement(link) {\n  var linkElement = document.createElement(\"a\");\n  linkElement.className = \"hstack gap-1\";\n  linkElement.href = link;\n  return linkElement;\n}\n\n/**\n * Initialize the element for the bootstrap image used.\n * @param {string} classList\n * @returns {HTMLIFrameElement}\n */\nfunction createBootStrapIcon(classList) {\n  var iconElement = document.createElement(\"i\");\n  iconElement.className = classList;\n  return iconElement;\n}\n\n/**\n * Strategy for building links to phone numbers.\n * @param {string} data\n * @returns {HTMLAnchorElement}\n */\nfunction buildPhoneLink(data) {\n  var sanitizedNumber = data.replace(/[\\(\\)\\s-]/g, \"\");\n  var phoneLink = initializeLinkElement(\"tel:\".concat(sanitizedNumber));\n  phoneLink.appendChild(createBootStrapIcon(\"bi bi-telephone-fill fact-icon\"));\n  phoneLink.appendChild(document.createTextNode(data));\n  return phoneLink;\n}\nfunction buildEmailLink(data) {\n  var emailLink = initializeLinkElement(\"mailto:\".concat(data));\n  emailLink.appendChild(createBootStrapIcon(\"fa fa-envelope fact-icon\"));\n  emailLink.appendChild(document.createTextNode(data));\n  return emailLink;\n}\n\n/**\n * Strategy for building links to locations on Google Maps.\n * @param {object} data\n * @returns {HTMLAnchorElement}\n */\nfunction buildLocationLink(data) {\n  var locationLink = initializeLinkElement(data.link);\n  locationLink.appendChild(createBootStrapIcon(\"bi bi-geo-alt-fill fact-icon\"));\n  locationLink.appendChild(document.createTextNode(data.name));\n  return locationLink;\n}\nvar LinkBuilderFactory = /*#__PURE__*/function () {\n  function LinkBuilderFactory() {\n    _classCallCheck(this, LinkBuilderFactory);\n    this.builderMap = new Map([[\"phone\", buildPhoneLink], [\"location\", buildLocationLink], [\"email\", buildEmailLink]]);\n  }\n\n  /**\n   * Retrieves the appropriate strategy for the given type.\n   * @param {string} type\n   * @returns {function}\n   */\n  return _createClass(LinkBuilderFactory, [{\n    key: \"getBuilder\",\n    value: function getBuilder(type) {\n      var builder = this.builderMap.get(type);\n      if (!builder) {\n        throw new Error(\"Builder type \".concat(type, \" not found.\"));\n      }\n      return builder;\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack://tsnicholas.github.io/./src/linkBuilderFactory.js?");

/***/ }),

/***/ "./src/renderStrategyFactory.js":
/*!**************************************!*\
  !*** ./src/renderStrategyFactory.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RenderStrategyFactory)\n/* harmony export */ });\n/* harmony import */ var _linkBuilderFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linkBuilderFactory */ \"./src/linkBuilderFactory.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _createForOfIteratorHelper(r, e) { var t = \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && \"number\" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t[\"return\"] || t[\"return\"](); } finally { if (u) throw o; } } }; }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\n\nvar DATA_CONTAINER_CLASSES = \"d-flex justify-content-between align-items-start\";\nvar TIMELINE_CONTAINER_CLASSES = \"col-md-1 d-flex flex-column align-items-center\";\nvar linkBuilderFactory = new _linkBuilderFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n/**\n * Initializes an element with a classlist.\n * @param {string} element\n * @param {string} classList\n * @returns {HTMLElement}\n */\nfunction createStyledElement(element, classList) {\n  var container = document.createElement(element);\n  container.className = classList !== null && classList !== void 0 ? classList : \"\";\n  return container;\n}\n\n/**\n * Creates a plain paragraph element with the given content.\n * @param {string} content\n * @returns {HTMLParagraphElement}\n */\nfunction createUnstyledText(content) {\n  var text = document.createElement(\"p\");\n  text.textContent = content;\n  return text;\n}\n\n/**\n * Adds the text to the element as inner text and returns the modified element.\n * @param {string} element\n * @param {string} text\n * @returns {HTMLElement}\n */\nfunction injectInnerText(element, text) {\n  element.innerText = text;\n  return element;\n}\n\n/**\n * Appends all the child elements in the array into the parent element.\n * @param {HTMLDivElement} parent\n * @param {HTMLElement[]} children\n */\nfunction injectChildren(parent, children) {\n  children.forEach(function (child) {\n    return parent.appendChild(child);\n  });\n}\n\n/**\n * Creates a heading with the given link.\n * @param {string} name\n * @param {string} link\n * @returns {HTMLElement}\n */\nfunction createHeadingWithLink(name, link) {\n  var heading = document.createElement(\"h3\");\n  var headingLink = injectInnerText(document.createElement(\"a\"), name);\n  headingLink.href = link;\n  heading.appendChild(headingLink);\n  return heading;\n}\n\n/**\n * Creates a row of badges from the list of skills.\n * @param {string[]} skills\n * @returns {HTMLElement}\n */\nfunction parseSkills(skills) {\n  var container = createStyledElement(\"p\", \"p-1 hstack gap-2\");\n  var _iterator = _createForOfIteratorHelper(skills),\n    _step;\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var skill = _step.value;\n      var skillBadge = injectInnerText(createStyledElement(\"span\", \"badge\"), skill);\n      container.appendChild(skillBadge);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n  return container;\n}\n\n/**\n * Creates a heading with a subtitle under it.\n * @param {string} position\n * @param {object} company\n * @returns {HTMLElement}\n */\nfunction createHeadingWithSubtitle(position, company) {\n  var container = createStyledElement(\"div\", \"pb-3\");\n  container.appendChild(injectInnerText(createStyledElement(\"h3\", \"fs-4 fw-normal\"), position));\n  container.appendChild(createCompanyDisplay(company));\n  return container;\n}\n\n/**\n * Creates the display for a company.\n * @param {object} company\n * @returns {HTMLElement}\n */\nfunction createCompanyDisplay(company) {\n  var _company$phone;\n  var container = createStyledElement(\"div\", \"company-container\");\n  container.appendChild(document.createTextNode(company.name));\n  var fact = company.phone ? \"phone\" : \"email\";\n  container.appendChild(linkBuilderFactory.getBuilder(fact)((_company$phone = company.phone) !== null && _company$phone !== void 0 ? _company$phone : company.email));\n  container.appendChild(linkBuilderFactory.getBuilder(\"location\")(company.location));\n  return container;\n}\n\n/**\n * Creates a description with an unordered list.\n * @param {string} summary\n * @param {string[]} accomplishments\n * @returns {HTMLDivElement}\n */\nfunction createAdvancedDescription(summary, accomplishments) {\n  var container = document.createElement(\"div\");\n  injectChildren(container, [createUnstyledText(summary), createUnorderedList(accomplishments)]);\n  return container;\n}\n\n/**\n * Creates an unordered list from the provided list of strings.\n * @param {string[]} data\n * @return {HTMLElement}\n */\nfunction createUnorderedList(data) {\n  var unorderedList = document.createElement(\"ul\");\n  data.forEach(function (element) {\n    var listItem = document.createElement(\"li\");\n    listItem.textContent = element;\n    unorderedList.appendChild(listItem);\n  });\n  return unorderedList;\n}\n\n/**\n * Resizes container to be the same size as body, then injects a point on the timeline.\n * @param {HTMLDivElement} container\n * @param {HTMLDivElement} body\n * @param {boolean} isFirst\n * @param {boolean} isLast\n */\nfunction injectTimelinePoint(container, body, isFirst, isLast) {\n  var updateHeight = function updateHeight() {\n    container.style.height = \"\".concat(body.offsetHeight, \"px\");\n  };\n  updateHeight();\n  window.addEventListener(\"resize\", updateHeight);\n  if (!isFirst) {\n    container.appendChild(createStyledElement(\"div\", \"timeline-axis-above\"));\n  }\n  container.appendChild(createStyledElement(\"div\", \"timeline-point\"));\n  if (!isLast) {\n    container.appendChild(createStyledElement(\"div\", \"timeline-axis-below\"));\n  }\n}\n\n/**\n * Strategy for rendering facts.\n * @param {object[]} data,\n * @param {HTMLDivElement} container\n */\nfunction parseFactData(data, container) {\n  data.forEach(function (fact) {\n    var newContainer = createStyledElement(\"div\", DATA_CONTAINER_CLASSES);\n    var newHeading = createUnstyledText(fact.name);\n    var linkContainer = document.createElement(\"div\");\n    linkContainer.innerHTML = \"\".concat(fact.link, \" \").concat(fact.icon);\n    injectChildren(newContainer, [newHeading, linkContainer]);\n    container.appendChild(newContainer);\n  });\n}\n\n/**\n * Strategy for rendering education data.\n * @param {object[]} data\n * @param {HTMLDivElement} container\n */\nfunction parseEducationData(data, container) {\n  var buildLogo = function buildLogo(logoName) {\n    __webpack_require__(\"./src/assets sync recursive ^\\\\.\\\\/.*$\")(\"./\".concat(logoName)); // includes it in public build via webpack.\n    var image = createStyledElement(\"img\", \"img-fluid rounded-start\");\n    image.src = \"./assets/\".concat(logoName);\n    image.alt = \"School Logo\";\n    return image;\n  };\n  var buildBody = function buildBody(educationData) {\n    var schoolData = educationData.school;\n    var contentContainer = createStyledElement(\"div\", \"card-body\");\n    var header = createStyledElement(\"h5\", \"card-title fs-2\");\n    header.textContent = educationData.degree;\n    var schoolText = createStyledElement(\"p\", \"card-text fs-3\");\n    schoolText.textContent = \"\".concat(schoolData.name, \" [\").concat(educationData.timeInterval, \"]\");\n    var linkContainer = createStyledElement(\"div\", \"card-text hstack gap-5 fs-4\");\n    injectChildren(linkContainer, [linkBuilderFactory.getBuilder(\"location\")(schoolData.location), linkBuilderFactory.getBuilder(\"phone\")(schoolData.phone)]);\n    injectChildren(contentContainer, [header, schoolText, linkContainer]);\n    var bodyContainer = createStyledElement(\"div\", \"col-md-8\");\n    bodyContainer.appendChild(contentContainer);\n    return bodyContainer;\n  };\n  data.forEach(function (education) {\n    var cardContainer = createStyledElement(\"div\", \"card pr-2\");\n    var contentContainer = createStyledElement(\"div\", \"row\");\n    var imageContainer = createStyledElement(\"div\", \"col-md-2\");\n    imageContainer.appendChild(buildLogo(education.school.logo));\n    injectChildren(contentContainer, [imageContainer, buildBody(education)]);\n    cardContainer.appendChild(contentContainer);\n    container.appendChild(cardContainer);\n  });\n}\n\n/**\n * Strategy for rendering project data.\n * @param {object[]} data\n * @param {HTMLDivElement} container\n */\nfunction parseProjectData(data, container) {\n  data.forEach(function (project) {\n    var nestedContainer = createStyledElement(\"div\", \"\".concat(DATA_CONTAINER_CLASSES));\n    var dateContainer = createStyledElement(\"div\", \"col-md-3 fs-4\");\n    dateContainer.innerText = project.date;\n    var timelineContainer = createStyledElement(\"div\", \"\".concat(TIMELINE_CONTAINER_CLASSES));\n    var mainContainer = createStyledElement(\"div\", \"col-md-9 pb-2\");\n    var headingContainer = createStyledElement(\"div\", \"pb-2\");\n    injectChildren(headingContainer, [createHeadingWithLink(project.name, project.link), parseSkills(project.skills)]);\n    var descriptionContainer = createStyledElement(\"p\", \"p-1\");\n    descriptionContainer.innerText = project.description;\n    injectChildren(mainContainer, [headingContainer, descriptionContainer]);\n    injectChildren(nestedContainer, [dateContainer, timelineContainer, mainContainer]);\n    container.appendChild(nestedContainer);\n    injectTimelinePoint(timelineContainer, mainContainer, container.children.length === 1, container.children.length === data.length);\n  });\n}\n\n/**\n * Strategy for rendering experience data.\n * @param {object[]} data\n * @param {HTMLDivElement} container\n */\nfunction parseExperienceData(data, container) {\n  data.forEach(function (experience) {\n    var nestedContainer = createStyledElement(\"div\", DATA_CONTAINER_CLASSES);\n    container.appendChild(nestedContainer);\n    var dateContainer = createStyledElement(\"p\", \"col-md-3 fs-4\");\n    dateContainer.innerText = experience.date;\n    var timelineContainer = createStyledElement(\"div\", TIMELINE_CONTAINER_CLASSES);\n    var bodyWrapper = createStyledElement(\"div\", \"col-md-9 pb-3\");\n    injectChildren(nestedContainer, [dateContainer, timelineContainer, bodyWrapper]);\n    injectChildren(bodyWrapper, [createHeadingWithSubtitle(experience.position, experience.company), createAdvancedDescription(experience.description, experience.accomplishments)]);\n    injectTimelinePoint(timelineContainer, bodyWrapper, container.children.length === 1, container.children.length === data.length);\n  });\n}\nvar RenderStrategyFactory = /*#__PURE__*/function () {\n  function RenderStrategyFactory() {\n    _classCallCheck(this, RenderStrategyFactory);\n    this.renderStrategyMap = new Map([[\"fact\", parseFactData], [\"education\", parseEducationData], [\"project\", parseProjectData], [\"experience\", parseExperienceData]]);\n  }\n  return _createClass(RenderStrategyFactory, [{\n    key: \"getRenderStrategy\",\n    value: function getRenderStrategy(type) {\n      var renderStrategy = this.renderStrategyMap.get(type);\n      if (!renderStrategy) {\n        throw new Error(\"Strategy type \".concat(type, \" not found.\"));\n      }\n      return renderStrategy;\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack://tsnicholas.github.io/./src/renderStrategyFactory.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n    --bs-font-sans-serif: Roboto, sans-serif;\n    --bs-body-font-weight: 400;\n    --bs-body-color: #858585;\n    --bs-body-color-rgb: 133, 133, 133;\n    --bs-body-bg: #181a1b;\n    --bs-body-bg-rgb: 24, 26, 27;\n    --bs-body-font-size: 1.2rem;\n    --light-color: #D9D9D9;\n    --border-color: #383D3F;\n    --timeline-point-size: 20px;\n    --timeline-color: #8870c3;\n}\n\na {\n    word-break: break-word;\n    text-decoration: none;\n    color: #2394fd !important;\n}\n\nh1, h2, h3, h4 {\n    color: var(--light-color);\n}\n\n@media not print {\n    .page {\n        padding: 2rem;\n    }\n\n    .print {\n        display: none;\n    }\n\n    h2 {\n        margin-top: 2rem;\n        margin-bottom: 1rem;\n    }\n\n    dt {\n        font-weight: normal;\n    }\n\n    strong {\n        font-weight: 500;\n    }\n}\n\n@media print {\n    .col-print-1 {\n        flex: 0 0 8.333333%;\n        max-width: 8.333333%;\n    }\n\n    .col-print-6 {\n        flex: 0 0 50%;\n        max-width: 50%;\n    }\n\n    .border-print-0 {\n        border-width: 0 !important;\n    }\n\n    .pb-print-0 {\n        padding-bottom: 0 !important;\n    }\n\n    .mb-print-1 {\n        margin-bottom: 1rem !important;\n    }\n}\n\n.card {\n    border-color: var(--border-color);\n}\n\n.badge {\n    font-weight: normal;\n    letter-spacing: 0.05rem;\n    border: 1px solid var(--border-color);\n    color: var(--light-color);\n    background-color: rgb(165, 45, 1);\n}\n\n.fact-icon {\n    width: 1em;\n    color: var(--light-color);\n    margin-right: 0.5rem;\n}\n\n.company-container {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    padding-bottom: 25px;\n}\n\n.collapse-button-icon {\n    color: var(--light-color);\n    transition: transform 0.3s ease;\n    transform: 0deg;\n}\n\n.timeline-point {\n    height: var(--timeline-point-size);\n    width: var(--timeline-point-size);\n    background-color: var(--timeline-color);\n    border-radius: 50%;\n    border: var(--light-color) 2px solid;\n}\n\n.timeline-axis-above, .timeline-axis-below {\n    width: 5px;\n    background-color: var(--timeline-color);\n}\n\n.timeline-axis-above {\n    height: 0.5rem;\n}\n\n.timeline-axis-below {\n    height: 100%;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://tsnicholas.github.io/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://tsnicholas.github.io/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://tsnicholas.github.io/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assets/Professional Mugshot.jpg":
/*!*********************************************!*\
  !*** ./src/assets/Professional Mugshot.jpg ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/Professional Mugshot.jpg\");\n\n//# sourceURL=webpack://tsnicholas.github.io/./src/assets/Professional_Mugshot.jpg?");

/***/ }),

/***/ "./src/assets/ball_state_logo.png":
/*!****************************************!*\
  !*** ./src/assets/ball_state_logo.png ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/ball_state_logo.png\");\n\n//# sourceURL=webpack://tsnicholas.github.io/./src/assets/ball_state_logo.png?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://tsnicholas.github.io/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://tsnicholas.github.io/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://tsnicholas.github.io/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://tsnicholas.github.io/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://tsnicholas.github.io/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://tsnicholas.github.io/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://tsnicholas.github.io/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets sync recursive ^\\.\\/.*$":
/*!***********************************!*\
  !*** ./src/assets/ sync ^\.\/.*$ ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./Professional Mugshot.jpg\": \"./src/assets/Professional Mugshot.jpg\",\n\t\"./ball_state_logo.png\": \"./src/assets/ball_state_logo.png\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/assets sync recursive ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack://tsnicholas.github.io/./src/assets/_sync_^\\.\\/.*$?");

/***/ }),

/***/ "./src/data/metadata.json":
/*!********************************!*\
  !*** ./src/data/metadata.json ***!
  \********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('{\"name\":\"Tim Nicholas\",\"title\":\"Software Developer/Recent Graduate\",\"bio\":\"Aspiring professional software developer with a deep passion for programming and computers. Eager to utilize my problem-solving skills to contribute to innovative software. I\\'m an introverted but dependable person who is excited to expand on my strengths and knowledge to tackle new challenges. If you\\'re interested, please feel free to contact me if you wish to learn more about me.\",\"facts\":[{\"name\":\"Residence\",\"link\":\"<a href=\\\\\"https://maps.app.goo.gl/ioNHGSxwFzVvdnty6\\\\\">Camby, IN</a>\",\"icon\":\"<i class=\\\\\"bi bi-geo-alt-fill\\\\\"></i>\"},{\"name\":\"LinkedIn\",\"link\":\"<a href=\\\\\"https://www.linkedin.com/in/tsnicholas\\\\\">tsnicholas</a>\",\"icon\":\"<i class=\\\\\"bi bi-linkedin fact-icon\\\\\"></i>\"},{\"name\":\"GitHub\",\"link\":\"<a href=\\\\\"https://github.com/tsnicholas\\\\\">tsnicholas</a>\",\"icon\":\"<i class=\\\\\"bi bi-github fact-icon\\\\\"></i>\"},{\"name\":\"Email\",\"link\":\"<a href=\\\\\"mailto:tsnicholas@outlook.com\\\\\">tsnicholas@outlook.com</a>\",\"icon\":\"<i class=\\\\\"fa fa-envelope fact-icon\\\\\"></i>\"},{\"name\":\"Phone\",\"link\":\"<a href=\\\\\"tel:+13179938411\\\\\">+1 (317) 993-8411</a>\",\"icon\":\"<i class=\\\\\"bi bi-telephone-fill fact-icon\\\\\"></i>\"}],\"education\":[{\"school\":{\"name\":\"Ball State University\",\"location\":{\"name\":\"Muncie, IN\",\"link\":\"https://maps.app.goo.gl/DAppBKPAZwFBSn5g6\"},\"phone\":\"+1 (765) 289-1241\",\"logo\":\"ball_state_logo.png\"},\"timeInterval\":\"2021 - 2024\",\"degree\":\"Bachelor of Science in Computer Science\"}],\"projects\":[{\"name\":\"Bus Shuttle Application\",\"description\":\"This project aims to re-engineer an existing project written with php to use the .Net Framework instead.\",\"date\":\"March 2024 - April 2024\",\"link\":\"https://github.com/tsnicholas/BusShuttle\",\"skills\":[\".NET Framework\",\"Asp.NET\",\"Web Development\",\"C#\",\"Bootstrap\"]},{\"name\":\"Personalized Learning Plan Website\",\"description\":\"This is my Capstone project in which I worked together in a team of 5 to develop an application for Stanford CME.\",\"date\":\"October 2023 - April 2024\",\"link\":\"https://github.com/hergin/PersonalizedLearningPlanWebApp\",\"skills\":[\"Web Development\",\"RESTful API\",\"Typescript\",\"PostgreSQL\",\"React\"]},{\"name\":\"Stack Demo\",\"description\":\"This project is a web application that simulates the Stack data structure, featuring a user interface developed with Bootstrap.\",\"date\":\"February 2024\",\"link\":\"https://github.com/tsnicholas/StackDemo\",\"skills\":[\"Web Development\",\"Bootstrap\",\"JavaScript\",\"CSS\",\"HTML\"]},{\"name\":\"Recipe Search\",\"description\":\"This website is a simple search engine that uses themealdb\\'s API to search for recipes.\",\"date\":\"November 2023\",\"link\":\"https://github.com/tsnicholas/RecipeSearch\",\"skills\":[\"Web Development\",\"JavaScript\",\"HTML\",\"CSS\",\"jQuery\"]},{\"name\":\"Timer App\",\"description\":\"This is a timer application developed for Mobile App Development. It allows users to create, edit, and customize timer sets.\",\"date\":\"October 2023\",\"link\":\"https://github.com/tsnicholas/TimerApp\",\"skills\":[\"Mobile Application Development\",\"Typescript\",\"React Native\",\"React\"]},{\"name\":\"Online Store Database\",\"description\":\"This Python program scans products from a JSON file to emulate an online store. It allows users to add products to their cart, remove them, and view their order summary.\",\"date\":\"April 2023\",\"link\":\"https://github.com/tsnicholas/Online-Store-Database\",\"skills\":[\"Database Design\",\"Unit Testing\",\"Python\",\"MongoDB\"]},{\"name\":\"Falcon Airlines\",\"description\":\"This program is a simulated airline database created for practicing database programming in Python. The data displayed by the program is randomly generated, and new data is inserted into the database each time the program is executed.\",\"date\":\"March 2023 - April 2023\",\"link\":\"https://github.com/tsnicholas/Falcon-Airlines-Database\",\"skills\":[\"Database Design\",\"Python\",\"MySQL\"]},{\"name\":\"TCP Text File Manager\",\"description\":\"This file manager can upload, download, delete, rename, and list .txt files between the server and the client directories using TCP packets.\",\"date\":\"March 2023\",\"link\":\"https://github.com/tsnicholas/TCP-Text-File-Manager\",\"skills\":[\"Computer Networking\",\"Java\",\"Gradle\"]},{\"name\":\"Simple C Compiler\",\"description\":\"This program, written in C, ensures the compilation of given files by verifying that each opening bracket ( [ { has a corresponding closing bracket ) ] }.\",\"date\":\"February 2023\",\"link\":\"https://github.com/tsnicholas/SimpleCompiler\",\"skills\":[\"C\"]},{\"name\":\"Pokedex Application\",\"description\":\"To demonstrate my understanding of Robert Martin\\'s Clean Code, I collaborated in a team of 4 to develop a pokedex application. By parsing data from PokeAPI, the application retrieves basic information on a pokemon and displays it on a user interface made in JavaFX.\",\"date\":\"March 2022 - May 2022\",\"link\":\"https://github.com/tsnicholas/PokedexApplication\",\"skills\":[\"Java\",\"JavaFX\",\"Version Control\",\"Unit Testing\",\"Gradle\"]}],\"experience\":[{\"company\":{\"name\":\"Stanford CME\",\"email\":\"snyder1@stanford.edu\",\"location\":{\"name\":\"Palo Alto, CA (Remote)\",\"link\":\"https://maps.app.goo.gl/f7RvaazLztFVi6rMA\"}},\"position\":\"Student Web Developer\",\"date\":\"October 2023 - May 2024\",\"description\":\"For my capstone project, I collaborated with a team of five to design and develop a new website from the ground up, tailored to meet the specific requirements of a real-world client.\",\"accomplishments\":[\"Partnered with Stanford CME to comprehend project requirements, ensuring alignment with specifications and goals; Administered efficient attainment of project milestones in a team of 5 developers.\",\"Completed a RESTful API system with TypeScript, optimizing data flow between client-side interface and database; decreasing load time by 40% and improved overall user experience.\",\"Designed, implemented, and refined an intuitive user interface using React, augmenting user experience and enabling effortless navigation and utilization for 100% of the website’s features.\"]},{\"company\":{\"name\":\"StaffMax USA\",\"phone\":\"+1 (317) 455-1930\",\"location\":{\"name\":\"Indianapolis, IN\",\"link\":\"https://maps.app.goo.gl/h9ptvHQ4TSzrZ9XJ8\"}},\"position\":\"Warehouse Associate (Temp)\",\"date\":\"May 2023 - August 2023\",\"description\":\"During the summer of 2023, I worked as a temp for a NTN bearings warehouse in Indianapolis. The assignment\\'s duty was to verify and pack various heavy car parts for them to be shipped.\",\"accomplishments\":[\"Cooperated with a unit to get packages ready to be shipped ahead of time.\",\"Detected packing errors with technology ensuring quality shipping.\"]},{\"company\":{\"name\":\"StaffMax USA\",\"phone\":\"+1 (317) 455-1930\",\"location\":{\"name\":\"Indianapolis, IN\",\"link\":\"https://maps.app.goo.gl/h9ptvHQ4TSzrZ9XJ8\"}},\"position\":\"Warehouse Associate (Temp)\",\"date\":\"May 2022 - August 2022\",\"description\":\"As a temp for StaffMax USA now, I worked in a Pepboys warehouse which had a problem with lack of employees. The position\\'s task was to sort and store various car parts as according to the database throughout the warehouse.\",\"accomplishments\":[\"Collaborated in a team with determination and leadership to make workflow more efficient.\",\"Instructed new employees to achieve quality effort with concise communication.\"]},{\"company\":{\"name\":\"Elwood Staffing Services, Inc.\",\"phone\":\"+1 (317) 856-9600\",\"location\":{\"name\":\"Camby, IN\",\"link\":\"https://maps.app.goo.gl/c4HambqFnXvR6FJq8\"}},\"position\":\"Warehouse Associate (Temp)\",\"date\":\"May 2021 - August 2021\",\"description\":\"During the summer of 2021, I worked at a Loves warehouse as a temp for Elwood Staffing. The profession was to work as a team to retread big truck tires in a team by using various machinery.\",\"accomplishments\":[\"Partnered with others in a well-organized team environment to operate machines\",\"Contributed a strong work ethic to meet strict quotas\"]},{\"company\":{\"name\":\"University of Evansville\",\"phone\":\"+1 (812) 488-2956\",\"location\":{\"name\":\"Evansville, IN\",\"link\":\"https://maps.app.goo.gl/cXv8QBBY5U2b3LJ86\"}},\"position\":\"Mail Clerk\",\"date\":\"August 2020 - May 2021\",\"description\":\"As a mail clerk, I was responsible for delivering packages to professors across campus and managing the front desk operations, where I distributed packages to students.\",\"accomplishments\":[\"Facilitated the delivery of packages to professors throughout the campus efficiently and reliably.\",\"Distributed packages accurately to students at the front counter.\"]},{\"company\":{\"name\":\"Elwood Staffing Services, Inc.\",\"phone\":\"+1 (317) 856-9600\",\"location\":{\"name\":\"Camby, IN\",\"link\":\"https://maps.app.goo.gl/c4HambqFnXvR6FJq8\"}},\"position\":\"Warehouse Associate (Temp)\",\"date\":\"June 2020 - August 2020\",\"description\":\"My first job was working as a temp for Elwood Staffing at a warehouse in Mooresville known as Ingram Micro. The job was to fulfill orders by picking and packing phone products to get them ready for shipping.\",\"accomplishments\":[\"Adapted to an unfamiliar environment with ease to ensure a strong work ethic.\",\"Volunteered to work many hours of overtime throughout the pandemic to help a disturbed workflow.\"]}]}');\n\n//# sourceURL=webpack://tsnicholas.github.io/./src/data/metadata.json?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;