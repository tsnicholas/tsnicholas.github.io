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

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_metadata_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/metadata.json */ \"./src/scripts/data/metadata.json\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles.css */ \"./src/styles.css\");\n/* harmony import */ var _assets_Professional_Mugshot_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/Professional Mugshot.jpg */ \"./src/assets/Professional Mugshot.jpg\");\nfunction _createForOfIteratorHelper(r, e) { var t = \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && \"number\" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t[\"return\"] || t[\"return\"](); } finally { if (u) throw o; } } }; }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\n\n\n\nvar DATA_CONTAINER_CLASSES = \"d-flex justify-content-between align-items-start\";\nvar renderStrategies = {\n  /**\n   * Strategy for rendering facts.\n   * @param {object[]} data,\n   * @param {HTMLDivElement} container\n   */\n  fact: function fact(data, container) {\n    data.forEach(function (fact) {\n      var newContainer = createElementWithStyle(\"div\", DATA_CONTAINER_CLASSES);\n      var newHeading = createElementWithStyleAndText(\"p\", undefined, fact.name);\n      var linkContainer = document.createElement(\"div\");\n      linkContainer.innerHTML = \"\".concat(fact.link, \" \").concat(fact.icon);\n      injectWithChildren(newContainer, [newHeading, linkContainer]);\n      container.appendChild(newContainer);\n    });\n  },\n  /**\n   * Strategy for rendering education data.\n   * @param {object[]} data\n   * @param {HTMLDivElement} container\n   */\n  education: function education(data, container) {\n    data.forEach(function (education) {\n      var firstElement = document.createElement(\"div\");\n      firstElement.textContent = \"\".concat(education.school, \" in \").concat(education.location, \" [\").concat(education.timeline, \"]\");\n      container.appendChild(firstElement);\n      var secondElement = document.createElement(\"div\");\n      secondElement.textContent = education.degree;\n      container.appendChild(secondElement);\n    });\n  },\n  /**\n   * Strategy for rendering project data.\n   * @param {object[]} data\n   * @param {HTMLDivElement} container\n   */\n  project: function project(data, container) {\n    data.forEach(function (project) {\n      var newContainer = createElementWithStyle(\"div\", DATA_CONTAINER_CLASSES);\n      newContainer.appendChild(createElementWithStyleAndText(\"div\", \"col-md-3 p-1\", project.date));\n      var mainContainer = createElementWithStyle(\"div\", \"col-md-10\");\n      injectWithChildren(mainContainer, [createHeadingWithLink(project.name, project.link), parseSkills(project.skills), createElementWithStyleAndText(\"p\", \"p-1\", project.description)]);\n      newContainer.appendChild(mainContainer);\n      container.appendChild(newContainer);\n    });\n  },\n  /**\n   * Strategy for rendering experience data.\n   * @param {object[]} data\n   * @param {HTMLDivElement} container\n   */\n  experience: function experience(data, container) {\n    data.forEach(function (experience) {\n      var newContainer = createElementWithStyle(\"div\", DATA_CONTAINER_CLASSES);\n      container.appendChild(newContainer);\n      var bodyWrapper = createElementWithStyle(\"div\", \"col-md-10\");\n      injectWithChildren(newContainer, [createElementWithStyleAndText(\"p\", \"col-md-3 p-1\", experience.date), bodyWrapper]);\n      injectWithChildren(bodyWrapper, [createHeadingWithSubtitle(experience.company, experience.position), createDescription(experience)]);\n    });\n  }\n};\n\n/**\n * Initializes an element with a classlist.\n * @param {string} element\n * @param {string} classList\n * @returns {HTMLElement}\n */\nfunction createElementWithStyle(element, classList) {\n  var container = document.createElement(element);\n  container.classList = classList;\n  return container;\n}\n\n/**\n * Initializes an element with a classlist and inner text.\n * @param {string} element\n * @param {string} classList\n * @param {string} text\n * @returns {HTMLDivElement}\n */\nfunction createElementWithStyleAndText(element, classList, text) {\n  var container = createElementWithStyle(element, classList);\n  container.innerText = text;\n  return container;\n}\n\n/**\n * Appends all the child elements in the array into the parent element.\n * @param {HTMLDivElement} parent\n * @param {HTMLElement[]} children\n */\nfunction injectWithChildren(parent, children) {\n  var _iterator = _createForOfIteratorHelper(children),\n    _step;\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var child = _step.value;\n      parent.appendChild(child);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n}\n\n/**\n * Creates a heading with the given link.\n * @param {string} name\n * @param {string} link\n * @returns {HTMLElement}\n */\nfunction createHeadingWithLink(name, link) {\n  var heading = document.createElement(\"h3\");\n  var headingLink = document.createElement(\"a\");\n  headingLink.href = link;\n  headingLink.innerText = name;\n  heading.appendChild(headingLink);\n  return heading;\n}\n\n/**\n * Creates a row of badges from the list of skills.\n * @param {string[]} skills\n * @returns {HTMLElement}\n */\nfunction parseSkills(skills) {\n  var container = createElementWithStyle(\"p\", \"p-1 hstack gap-2\");\n  var _iterator2 = _createForOfIteratorHelper(skills),\n    _step2;\n  try {\n    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n      var skill = _step2.value;\n      var skillBadge = createElementWithStyleAndText(\"span\", \"badge\", skill);\n      container.appendChild(skillBadge);\n    }\n  } catch (err) {\n    _iterator2.e(err);\n  } finally {\n    _iterator2.f();\n  }\n  return container;\n}\n\n/**\n * Creates a heading with a subtitle under it.\n * @param {string} company\n * @param {string} position\n * @returns {HTMLElement}\n */\nfunction createHeadingWithSubtitle(company, position) {\n  var container = document.createElement(\"div\");\n  container.appendChild(createElementWithStyleAndText(\"h3\", \"fs-4 fw-normal\", company));\n  container.appendChild(createElementWithStyleAndText(\"p\", \"fs-5 fst-italic\", position));\n  return container;\n}\n\n/**\n * Creates a description with an unordered list.\n * @param {object} experience\n * @returns {HTMLDivElement}\n */\nfunction createDescription(experience) {\n  var container = document.createElement(\"div\");\n  injectWithChildren(container, [createElementWithStyleAndText(\"p\", \"\", experience.description), createUnorderedList(experience.accomplishments)]);\n  return container;\n}\n\n/**\n * Creates an unordered list from the provided list of strings.\n * @param {string[]} data\n * @return {HTMLElement}\n */\nfunction createUnorderedList(data) {\n  var unorderedList = document.createElement(\"ul\");\n  var _iterator3 = _createForOfIteratorHelper(data),\n    _step3;\n  try {\n    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n      var element = _step3.value;\n      var listItem = document.createElement(\"li\");\n      listItem.textContent = element;\n      unorderedList.appendChild(listItem);\n    }\n  } catch (err) {\n    _iterator3.e(err);\n  } finally {\n    _iterator3.f();\n  }\n  return unorderedList;\n}\n\n/**\n * Selects and executes a strategy for rendering the given data.\n * @param {object[]} data\n * @param {string} type\n */\nfunction render(data, type) {\n  console.log(JSON.stringify(data));\n  var container = document.getElementById(\"\".concat(type, \"-container\"));\n  console.log(container);\n  if (renderStrategies[type]) {\n    renderStrategies[type](data, container);\n  } else {\n    console.error(\"Strategy type \".concat(type, \" not found.\"));\n  }\n}\nfunction main() {\n  var nameHeader = document.getElementById(\"full-name\");\n  nameHeader.innerText = _data_metadata_json__WEBPACK_IMPORTED_MODULE_0__.name;\n  var subtitle = document.getElementById(\"subtitle\");\n  subtitle.innerText = _data_metadata_json__WEBPACK_IMPORTED_MODULE_0__.title;\n  var imageContainer = document.getElementById(\"mugshot-container\");\n  var image = document.createElement(\"img\");\n  imageContainer.appendChild(image);\n  image.src = _assets_Professional_Mugshot_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n  image.alt = \"Professional Mugshot\";\n  image.classList = \"rounded-circle img-fluid\";\n  render(_data_metadata_json__WEBPACK_IMPORTED_MODULE_0__.facts, \"fact\");\n  render(_data_metadata_json__WEBPACK_IMPORTED_MODULE_0__.education, \"education\");\n  render(_data_metadata_json__WEBPACK_IMPORTED_MODULE_0__.projects, \"project\");\n  render(_data_metadata_json__WEBPACK_IMPORTED_MODULE_0__.experience, \"experience\");\n}\nmain();\n\n//# sourceURL=webpack://tsnicholas.github.io/./src/scripts/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n    --bs-font-sans-serif: Roboto, sans-serif;\n    --bs-body-font-weight: 400;\n    --bs-body-color: #858585;\n    --bs-body-color-rgb: 133, 133, 133;\n    --bs-body-bg: #181a1b;\n    --bs-body-bg-rgb: 24, 26, 27;\n    --bs-body-font-size: 1.2rem;\n    --light-color: #D9D9D9;\n    --border-color: #383D3F;\n}\n\na {\n    word-break: break-word;\n    text-decoration: none;\n    color: #2394fd !important;\n}\n\nh1, h2, h3, h4 {\n    color: var(--light-color);\n}\n\n@media not print {\n    .page {\n        padding: 2rem;\n    }\n\n    .print {\n        display: none;\n    }\n\n    h2 {\n        margin-top: 2rem;\n        margin-bottom: 1rem;\n    }\n\n    dt {\n        font-weight: normal;\n    }\n\n    strong {\n        font-weight: 500;\n    }\n}\n\n@media print {\n    .col-print-1 {\n        flex: 0 0 8.333333%;\n        max-width: 8.333333%;\n    }\n\n    .col-print-6 {\n        flex: 0 0 50%;\n        max-width: 50%;\n    }\n\n    .border-print-0 {\n        border-width: 0 !important;\n    }\n\n    .pb-print-0 {\n        padding-bottom: 0 !important;\n    }\n\n    .mb-print-1 {\n        margin-bottom: 1rem !important;\n    }\n}\n\n.badge {\n    font-weight: normal;\n    letter-spacing: 0.05rem;\n    border: 1px solid var(--border-color);\n    color: var(--light-color);\n    background-color: #158e2b;\n}\n\n.fact-icon {\n    width: 1em;\n    color: var(--light-color);\n    margin-right: 0.5rem;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://tsnicholas.github.io/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://tsnicholas.github.io/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://tsnicholas.github.io/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assets/Professional Mugshot.jpg":
/*!*********************************************!*\
  !*** ./src/assets/Professional Mugshot.jpg ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"0fa36f03034d5487c83e32535f6a9ea2.jpg\");\n\n//# sourceURL=webpack://tsnicholas.github.io/./src/assets/Professional_Mugshot.jpg?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://tsnicholas.github.io/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://tsnicholas.github.io/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://tsnicholas.github.io/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://tsnicholas.github.io/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://tsnicholas.github.io/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://tsnicholas.github.io/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://tsnicholas.github.io/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/scripts/data/metadata.json":
/*!****************************************!*\
  !*** ./src/scripts/data/metadata.json ***!
  \****************************************/
/***/ ((module) => {

eval("module.exports = /*#__PURE__*/JSON.parse('{\"name\":\"Tim Nicholas\",\"title\":\"Aspiring Software Developer\",\"bio\":\"Aspiring professional software developer with a deep passion for programming and computers. Eager to utilize my problem-solving skills to contribute to innovative software. I\\'m an introverted but dependable person who is excited to expand on my strengths and knowledge to tackle new challenges. If you\\'re interested, please feel free to contact me if you wish to learn more about me.\",\"facts\":[{\"name\":\"Residence\",\"link\":\"<a href=\\\\\"https://maps.app.goo.gl/ioNHGSxwFzVvdnty6\\\\\">Camby, IN</a>\",\"icon\":\"<i class=\\\\\"bi bi-house-fill fact-icon\\\\\"></i>\"},{\"name\":\"LinkedIn\",\"link\":\"<a href=\\\\\"https://www.linkedin.com/in/tsnicholas\\\\\">tsnicholas</a>\",\"icon\":\"<i class=\\\\\"bi bi-linkedin fact-icon\\\\\"></i>\"},{\"name\":\"GitHub\",\"link\":\"<a href=\\\\\"https://github.com/tsnicholas\\\\\">tsnicholas</a>\",\"icon\":\"<i class=\\\\\"bi bi-github fact-icon\\\\\"></i>\"},{\"name\":\"Email\",\"link\":\"<a href=\\\\\"mailto:tsnicholas@outlook.com\\\\\">tsnicholas@outlook.com</a>\",\"icon\":\"<i class=\\\\\"fa fa-envelope fact-icon\\\\\"></i>\"},{\"name\":\"Phone\",\"link\":\"<a href=\\\\\"tel:+13179938411\\\\\">+1 (317) 993-8411</a>\",\"icon\":\"<i class=\\\\\"bi bi-telephone-fill fact-icon\\\\\"></i>\"}],\"education\":[{\"school\":\"Ball State University\",\"location\":\"Muncie, IN\",\"timeline\":\"2021 - 2024\",\"degree\":\"Bachelor of Science in Computer Science\"}],\"projects\":[{\"name\":\"Bus Shuttle Application\",\"description\":\"This project aims to re-engineer an existing project written with php to use the .Net Framework instead.\",\"date\":\"March 2024 - April 2024\",\"link\":\"https://github.com/tsnicholas/BusShuttle\",\"skills\":[\".NET Framework\",\"Asp.NET\",\"Web Development\",\"C#\",\"Bootstrap\"]},{\"name\":\"Personalized Learning Plan Website\",\"description\":\"This is my Capstone project (Senior Year Project) in which I worked together in a team of 5 to develop an application for Stanford CME.\",\"date\":\"October 2023 - April 2024\",\"link\":\"https://github.com/hergin/PersonalizedLearningPlanWebApp\",\"skills\":[\"Web Development\",\"RESTful API\",\"Typescript\",\"PostgreSQL\",\"React\"]},{\"name\":\"Stack Demo\",\"description\":\"This project is a web application designed to simulate the Stack data structure with a user interface developed with Bootstrap.\",\"date\":\"February 2024\",\"link\":\"https://github.com/tsnicholas/StackDemo\",\"skills\":[\"Web Development\",\"Bootstrap\",\"JavaScript\",\"CSS\",\"HTML\"]},{\"name\":\"Timer App\",\"description\":\"This is a simple timer app I made for Mobile App Development. It allows you to create and edit timers as well as customizing your own timer sets. I developed this project with React Native and it requires you to run it with a phone emulator. I would recommend using Expo to run this application.\",\"date\":\"October 2023\",\"link\":\"https://github.com/tsnicholas/TimerApp\",\"skills\":[\"Mobile Application Development\",\"Typescript\",\"React Native\",\"React\"]},{\"name\":\"Pokedex Application\",\"description\":\"To demonstrate my understanding of Robert Martin\\'s Clean Code, I collaborated in a team of 4 to develop a pokedex application. By parsing data from PokeAPI, the application retrieves basic information on a pokemon and displays it on a user interface made in JavaFX.\",\"date\":\"March 2022 - May 2022\",\"link\":\"https://github.com/tsnicholas/PokedexApplication\",\"skills\":[\"Java\",\"JavaFX\",\"Version Control\",\"Unit Testing\",\"Gradle\"]}],\"experience\":[{\"company\":\"StaffMax USA\",\"position\":\"Warehouse Associate (Temp)\",\"date\":\"Summer 2023\",\"description\":\"During the summer of 2023, I worked as a temp for a NTN bearings warehouse in Indianapolis. The assignment\\'s duty was to verify and pack various heavy car parts for them to be shipped.\",\"accomplishments\":[\"Cooperated with a unit to get packages ready to be shipped ahead of time.\",\"Detected packing errors with technology ensuring quality shipping.\"]},{\"company\":\"StaffMax USA\",\"position\":\"Warehouse Associate (Temp)\",\"date\":\"Summer 2022\",\"description\":\"As a temp for StaffMax USA now, I worked in a Pepboys warehouse which had a problem with lack of employees. The position\\'s task was to sort and store various car parts as according to the database throughout the warehouse.\",\"accomplishments\":[\"Collaborated in a team with determination and leadership to make workflow more efficient.\",\"Instructed new employees to achieve quality effort with concise communication.\"]},{\"company\":\"Elwood Staffing Services, Inc.\",\"position\":\"Warehouse Associate (Temp)\",\"date\":\"Summer 2021\",\"description\":\"During the summer of 2021, I worked at a Loves warehouse as a temp for Elwood Staffing. The profession was to work as a team to retread big truck tires in a team by using various machinery.\",\"accomplishments\":[\"Partnered with others in a well-organized team environment to operate machines\",\"Contributed a strong work ethic to meet strict quotas\"]},{\"company\":\"Elwood Staffing Services, Inc.\",\"position\":\"Warehouse Associate (Temp)\",\"date\":\"Summer 2020\",\"description\":\"My first job was working as a temp for Elwood Staffing at a warehouse in Mooresville known as Ingram Micro. The job was to fulfill orders by picking and packing phone products to get them ready for shipping.\",\"accomplishments\":[\"Adapted to an unfamiliar environment with ease to ensure a strong work ethic.\",\"Volunteered to work many hours of overtime throughout the pandemic to help a disturbed workflow.\"]}]}');\n\n//# sourceURL=webpack://tsnicholas.github.io/./src/scripts/data/metadata.json?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;