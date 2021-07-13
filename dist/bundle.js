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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"form {\\n    display: block;\\n}\\n#add {\\n    cursor: pointer;\\n}\\n#close {\\n    cursor: pointer;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/getTarget.js */ \"./node_modules/style-loader/dist/runtime/getTarget.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = function(css, style){\n      if (style.styleSheet) {\n        style.styleSheet.cssText = css;\n      } else {\n      while (style.firstChild) {\n        style.removeChild(style.firstChild);\n      }\n\n      style.appendChild(document.createTextNode(css));\n    }\n  };\noptions.setAttributes = function(style) {\n        var nonce =\n           true ? __webpack_require__.nc : 0;\n\n        if (nonce) {\n          style.setAttribute(\"nonce\", nonce);\n        }\n      };\noptions.insert = function(style){\n    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()(\"head\");\n\n    if (!target) {\n      throw new Error(\n        \"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\"\n      );\n    }\n\n    target.appendChild(style);\n  };\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/getTarget.js":
/*!*************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/getTarget.js ***!
  \*************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n\nmodule.exports = getTarget;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/getTarget.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todoDiv\": () => (/* binding */ todoDiv),\n/* harmony export */   \"content\": () => (/* binding */ content)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\n\nlet button = document.createElement('button');\nbutton.textContent = 'Submit';\ndocument.body.appendChild(button);\n\nlet todoDiv = document.createElement('div');\nlet content = document.querySelector('#content');\ncontent.appendChild(todoDiv);\n\nbutton.addEventListener('click', ()=> {\n    (0,_todo__WEBPACK_IMPORTED_MODULE_0__.createTodo)();\n});\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appendTodo\": () => (/* binding */ appendTodo),\n/* harmony export */   \"createTodo\": () => (/* binding */ createTodo)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\n\nconst appendTodo = (title, description, dueDate, priority, type) => {\n    _index_js__WEBPACK_IMPORTED_MODULE_1__.todoDiv.className = 'todo';\n    let deleteIcon = document.createElement('p');\n    let icon = document.createElement('p');\n    let todoTitle = document.createElement('h2');\n    let todoDescription = document.createElement('p');\n    let todoDate = document.createElement('p');\n    deleteIcon.className = 'material-icons';\n    icon.className = 'material-icons';\n    deleteIcon.textContent = 'close';\n    deleteIcon.id = 'close';\n    icon.textContent = 'add';\n    icon.id = 'add';\n    todoTitle.textContent = title;\n    todoDescription.textContent = description;\n    todoDescription.style.cssText = 'display: block'\n    todoDate.textContent = dueDate;\n    if (type == 'note') {\n        let headerDiv = document.createElement('div');\n        let descriptionDiv = document.createElement('div');\n        _index_js__WEBPACK_IMPORTED_MODULE_1__.todoDiv.appendChild(headerDiv);\n        headerDiv.appendChild(icon)\n        headerDiv.appendChild(todoTitle);\n        if (priority == 'yes') {\n            todoTitle.style.cssText = 'color: red';\n        }\n        headerDiv.appendChild(todoDate);\n        headerDiv.appendChild(deleteIcon);\n        headerDiv.style.cssText = 'display: flex; align-items: center';\n        todoDate.style.cssText = 'margin-left: auto;'\n        icon.addEventListener('click', () => {\n            icon.classList.toggle('extend');\n            if (icon.classList.contains('extend')) {\n                icon.textContent = 'remove';\n                _index_js__WEBPACK_IMPORTED_MODULE_1__.todoDiv.appendChild(descriptionDiv);\n                descriptionDiv.appendChild(todoDescription);\n                todoDescription.className = 'description';\n                todoDescription.textContent = description;\n            } else {\n                todoDescription.innerHTML = '';\n                icon.textContent = 'add';\n            }\n        });\n        deleteIcon.addEventListener('click', () => {\n            _index_js__WEBPACK_IMPORTED_MODULE_1__.todoDiv.removeChild(headerDiv);\n            if (todoDescription.classList.contains('description')) {\n                _index_js__WEBPACK_IMPORTED_MODULE_1__.todoDiv.removeChild(descriptionDiv);\n            }\n        })\n    } else if (type == 'checklist') {\n        let headerDiv = document.createElement('div');\n        icon.textContent = 'check_box_outline_blank';\n        _index_js__WEBPACK_IMPORTED_MODULE_1__.todoDiv.appendChild(headerDiv);\n        headerDiv.appendChild(icon);\n        headerDiv.appendChild(todoTitle);\n        if (priority == 'yes') {\n            todoTitle.style.cssText = 'color: red';\n        }\n        headerDiv.appendChild(todoDate);\n        headerDiv.appendChild(deleteIcon);\n        headerDiv.style.cssText = 'display: flex; align-items: center';\n        todoDate.style.cssText = 'margin-left: auto;';\n        icon.addEventListener('click', () => {\n            icon.classList.toggle('box');\n            if (icon.classList.contains('box')) {\n                icon.textContent = 'check_box';\n                todoTitle.style.cssText = 'text-decoration: line-through';\n            } else {\n                icon.textContent = 'check_box_outline_blank';\n                todoTitle.style.cssText = 'text-decoration: none;';\n            }\n        })\n        deleteIcon.addEventListener('click', () => {\n            _index_js__WEBPACK_IMPORTED_MODULE_1__.todoDiv.removeChild(headerDiv);\n        })\n    }\n    return {todoDiv: _index_js__WEBPACK_IMPORTED_MODULE_1__.todoDiv}\n}\nconst createTodo = () => {\n    let today = new Date();\n    let div = document.createElement('div');\n    div.id = 'prompt';\n    div.style.cssText = `background-color: bisque;\n    width: 400px;\n    text-align: center;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    margin: auto;\n    position: relative;`\n\n    let divReminder = document.createElement('div');\n    divReminder.id = 'reminder';\n    let form1 = document.createElement('form');\n    let form2 = document.createElement('form');\n    //Title\n    let titleQuestion = document.createElement('p');\n    let titleInput = document.createElement('input');\n    //Description\n    let descriptionQuestion = document.createElement('p');\n    let descriptionInput = document.createElement('input');\n    //Date\n    let dateQuestion = document.createElement('p');\n    let dateInput = document.createElement('input');\n    //Priority\n    let priorityQuestion = document.createElement('p');\n    let priorityLabel1 = document.createElement('label');\n    let priorityLabel2 = document.createElement('label');\n    let priorityInput1 = document.createElement('input');\n    let priorityInput2 = document.createElement('input');\n    let typeQuestion = document.createElement('p');\n    let typeLabel1 = document.createElement('label');\n    let typeLabel2 = document.createElement('label');\n    let typeInput1 = document.createElement('input');\n    let typeInput2 = document.createElement('input');\n    let submit = document.createElement('button');\n\n    //Title\n    titleQuestion.textContent = 'Title:';\n    titleInput.type = 'text';\n    //Description\n    descriptionQuestion.textContent = 'Description:';\n    descriptionInput.type = 'text';\n    //Date\n    dateQuestion.textContent = 'Deadline:';\n    dateInput.type = 'date';\n    dateInput.value = `${today.getFullYear()}-0${today.getMonth() + 1}-${today.getDate()}`\n    //Priority \n    form1.name = 'priority';\n    form1.id = 'priority';\n    priorityQuestion.textContent = 'Is this important?';\n    priorityInput1.name = 'radioButton';\n    priorityInput1.type = 'radio';\n    priorityInput1.value = 'yes';\n    priorityInput1.checked = true;\n    priorityInput2.name = 'radioButton';\n    priorityInput2.type = 'radio';\n    priorityInput2.value = 'no';\n    priorityLabel1.setAttribute('for', 'priority');\n    priorityLabel1.textContent = 'Yes';\n    priorityLabel2.setAttribute('for', 'priority');\n    priorityLabel2.textContent = 'No';\n    //Type\n    form2.name = 'type';\n    form2.id = 'type';\n    typeQuestion.textContent = 'Type:';\n    typeInput1.name = 'listType';\n    typeInput1.type = 'radio';\n    typeInput1.value = 'note';\n    typeInput1.checked = true;\n    typeInput2.name = 'listType';\n    typeInput2.type = 'radio';\n    typeInput2.value = 'checklist';\n    typeLabel1.setAttribute('for', 'type');\n    typeLabel1.textContent = 'Note';\n    typeLabel2.setAttribute('for', 'type');\n    typeLabel2.textContent = 'Checklist';\n    \n\n    _index_js__WEBPACK_IMPORTED_MODULE_1__.content.appendChild(div);\n    //Title\n    div.appendChild(titleQuestion);\n    div.appendChild(titleInput);\n    //Description\n    div.appendChild(descriptionQuestion);\n    div.appendChild(descriptionInput);\n    //Date\n    div.appendChild(dateQuestion);\n    div.appendChild(dateInput);\n    //Priority\n    div.appendChild(priorityQuestion)\n    div.appendChild(form1);\n    form1.appendChild(priorityLabel1);\n    priorityLabel1.appendChild(priorityInput1);\n    form1.appendChild(priorityLabel2);\n    priorityLabel2.appendChild(priorityInput2);\n    //Type\n    div.appendChild(typeQuestion)\n    div.appendChild(form2);\n    form2.appendChild(typeLabel1);\n    typeLabel1.appendChild(typeInput1);\n    form2.appendChild(typeLabel2);\n    typeLabel2.appendChild(typeInput2);\n\n\n    div.appendChild(submit);\n    div.appendChild(divReminder);\n    submit.textContent = 'Submit';\n\n    submit.addEventListener('click', () => {\n        if (titleInput.value != '' || descriptionInput.value != '') {\n            div.innerHTML = '';\n            div.style.cssText = 'color: white';\n            let form1Value = null;\n            let form2Value = null;\n            if (priorityInput1.checked) {\n                form1Value = priorityInput1.value;\n            } else if (priorityInput2.checked) {\n                form1Value = priorityInput2.value;\n            }\n            if (typeInput1.checked) {\n                form2Value = typeInput1.value;\n            } else if (typeInput2.checked) {\n                form2Value = typeInput2.value;\n            }\n            submitPressed.startAppend(titleInput.value, descriptionInput.value, dateInput.value, form1Value, form2Value);\n        } else {\n            divReminder.innerHTML = '';\n            divReminder.style.cssText = '';\n            let reminder = document.createElement('p');\n            reminder.className = 'reminder';\n            reminder.textContent = 'Please fill out the form!';\n            reminder.style.cssText = 'color: red';\n            divReminder.appendChild(reminder);\n        }\n    })\n}\n\nlet list = [];\nconst submitPressed = (() => {\n    const startAppend = (title, description, dueDate, priority, type) => {\n        if (priority == 'yes') {\n            list.unshift([title, description, dueDate, priority, type]);\n        } else {\n            list.push([title, description, dueDate, priority, type]);\n        }\n        let i;\n        _index_js__WEBPACK_IMPORTED_MODULE_1__.todoDiv.innerHTML = '';\n        for (i = 0; i < list.length; i++) {\n            appendTodo(list[i][0], list[i][1], list[i][2], list[i][3], list[i][4]);\n        }\n    }\n    return {\n        startAppend\n    }\n})();\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/todo.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;