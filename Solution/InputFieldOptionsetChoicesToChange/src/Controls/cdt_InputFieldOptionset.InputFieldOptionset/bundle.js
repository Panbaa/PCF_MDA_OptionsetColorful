/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./InputFieldOptionset/index.ts":
/*!**************************************!*\
  !*** ./InputFieldOptionset/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   InputFieldOptionset: () => (/* binding */ InputFieldOptionset)\n/* harmony export */ });\nclass InputFieldOptionset {\n  constructor() {}\n  init(context, notifyOutputChanged, state, container) {\n    var _a, _b, _c;\n    this.context = context;\n    this.isRequired = [1, 2].indexOf(((_a = context.parameters.OptionValue.attributes) === null || _a === void 0 ? void 0 : _a.RequiredLevel) || 0) > -1;\n    this.options = this.isRequired ? [] : [{\n      Value: null,\n      Label: \"--Select--\"\n    }];\n    this.options = this.options.concat(((_b = context.parameters.OptionValue.attributes) === null || _b === void 0 ? void 0 : _b.Options.map(m => {\n      return {\n        Label: m.Label,\n        Value: m.Value\n      };\n    })) || []);\n    this.selectedOption = {\n      Value: context.parameters.OptionValue.raw,\n      Label: context.parameters.OptionValue.raw !== null ? ((_c = this.options.find(f => f.Value === context.parameters.OptionValue.raw)) === null || _c === void 0 ? void 0 : _c.Label) || \"Unknown option:\".concat(context.parameters.OptionValue.raw, \" \") : \"--Select--\"\n    };\n    this.notifyOutputChangedDelegate = notifyOutputChanged;\n    this.container = container;\n    this.container.addEventListener(\"keydown\", this.onKeyPressContainer.bind(this));\n    this.container.classList.add(\"dnl-option-container\");\n    this.initSearchInput();\n    this.initSelectedItem();\n    this.initSearchButton();\n    this.initDropDownContainer();\n    this.renderSelected();\n    window.addEventListener('resize', this.hideDropDownContainer.bind(this));\n    window.addEventListener('click', this.hideDropDownContainer.bind(this));\n  }\n  updateView(context) {\n    var _a;\n    this.selectedOption = this.selectedOption = {\n      Value: context.parameters.OptionValue.raw,\n      Label: context.parameters.OptionValue.raw !== null ? ((_a = this.options.find(f => f.Value === context.parameters.OptionValue.raw)) === null || _a === void 0 ? void 0 : _a.Label) || \"Unknown option:\".concat(context.parameters.OptionValue.raw, \" \") : \"--Select--\"\n    };\n    this.inputElement.value = \"\";\n    this.renderSelected();\n  }\n  controlValueChange() {\n    this.notifyOutputChangedDelegate();\n  }\n  initSearchInput() {\n    this.inputElement = document.createElement(\"input\");\n    this.inputElement.setAttribute(\"placeholder\", \"--Select or search option--\");\n    this.inputElement.classList.add(\"dnl-input-element\");\n    this.inputElement.addEventListener(\"keyup\", this.doSearch.bind(this));\n    this.container.append(this.inputElement);\n  }\n  initSelectedItem() {\n    this.selectedLabelElement = document.createElement(\"span\");\n    this.selectedLabelElement.classList.add(\"selected-label\");\n    this.selectedLabelElement.addEventListener('click', this.onClickLabel.bind(this));\n    this.container.append(this.selectedLabelElement);\n  }\n  onClickLabel() {\n    this.container.classList.remove(\"selected\");\n    this.inputElement.value = \"\";\n    this.inputElement.focus();\n  }\n  renderSelected() {\n    if (this.selectedOption.Value !== null) {\n      this.selectedLabelElement.innerHTML = this.selectedOption.Label;\n      this.selectedLabelElement.setAttribute(\"title\", this.selectedOption.Label);\n      this.container.classList.add(\"selected\");\n    } else {\n      this.container.classList.remove(\"selected\");\n      this.selectedLabelElement.innerHTML = \"---\";\n    }\n  }\n  initSearchButton() {\n    this.searchButton = document.createElement(\"button\");\n    this.searchButton.classList.add(\"dnl-search-btn\");\n    this.searchButton.innerHTML = \"<svg viewBox=\\\"0 0 16 16\\\" fill=\\\"currentColor\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">  <path fill-rule=\\\"evenodd\\\" d=\\\"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z\\\"></path></svg>\";\n    this.searchButton.addEventListener('click', this.onClickFilterButton.bind(this));\n    this.container.append(this.searchButton);\n  }\n  initDropDownContainer() {\n    this.dropDownContainer = document.createElement(\"div\");\n    this.dropDownContainer.classList.add(\"custom-dropdown-container\");\n    this.container.append(this.dropDownContainer);\n  }\n  initEvents() {\n    var dropDownItems = this.dropDownContainer.querySelectorAll('.custom-drop-down-item');\n    if (dropDownItems) {\n      dropDownItems.forEach(dropDownItem => {\n        dropDownItem.addEventListener(\"click\", this.onChooseItem.bind(this, dropDownItem));\n      });\n    }\n  }\n  onKeyPressContainer(event) {\n    var targetElement = event.target;\n    //enter\n    if (event.keyCode == 13) {\n      if (this.container.classList.contains(\"expanded\") && this.dropDownContainer.querySelector('.custom-drop-down-item.selected')) {\n        this.onChooseItem(this.dropDownContainer.querySelector('.custom-drop-down-item.selected'));\n        event.preventDefault();\n        return;\n      }\n      if (targetElement.tagName === \"INPUT\" || targetElement.tagName === \"BUTTON\" && targetElement.classList.contains(\"dnl-search-btn\")) {\n        this.doSearch(null);\n        event.preventDefault();\n        return;\n      }\n    }\n    //Esc\n    if (event.keyCode == 27) {\n      if (this.container.classList.contains(\"expanded\")) {\n        this.onClickFilterButton(event);\n      }\n    }\n    //down\n    if (event.keyCode == 40) {\n      this.selectNextItem();\n      event.preventDefault();\n    }\n    //up\n    if (event.keyCode == 38) {\n      this.selectPreviousItem();\n      event.preventDefault();\n    }\n  }\n  selectNextItem() {\n    var selectItems = this.dropDownContainer.querySelectorAll('.custom-drop-down-item');\n    var selectedItem = this.dropDownContainer.querySelector('.custom-drop-down-item.selected');\n    if (!selectItems || !selectItems.length || !this.container.classList.contains(\"expanded\")) {\n      return;\n    }\n    if (selectedItem) {\n      var currentSelectedIndex = Array.from(selectItems).indexOf(selectedItem);\n      if (selectItems.length > currentSelectedIndex + 1) {\n        selectItems.item(currentSelectedIndex).classList.remove(\"selected\");\n        selectItems.item(currentSelectedIndex + 1).classList.add(\"selected\");\n        this.scrollToItem(selectItems.item(currentSelectedIndex + 1));\n      }\n    } else {\n      var firstElement = selectItems.item(0);\n      firstElement.classList.add(\"selected\");\n      this.scrollToItem(firstElement);\n    }\n  }\n  selectPreviousItem() {\n    var selectItems = this.dropDownContainer.querySelectorAll('.custom-drop-down-item');\n    var selectedItem = this.dropDownContainer.querySelector('.custom-drop-down-item.selected');\n    if (!selectItems || !selectItems.length || !this.container.classList.contains(\"expanded\")) {\n      this.onClickLabel();\n      return;\n    }\n    if (selectedItem) {\n      var currentSelectedIndex = Array.from(selectItems).indexOf(selectedItem);\n      selectItems.item(currentSelectedIndex).classList.remove(\"selected\");\n      if (currentSelectedIndex > 0) {\n        selectItems.item(currentSelectedIndex - 1).classList.add(\"selected\");\n        this.scrollToItem(selectItems.item(currentSelectedIndex - 1));\n      } else {\n        this.onClickLabel();\n      }\n    }\n  }\n  scrollToItem(element) {\n    var divScrollable = this.dropDownContainer.querySelector(\".custom-drop-down-scrollable\");\n    if (divScrollable) {\n      element.focus();\n      divScrollable.scrollTop = element.offsetTop > 235 ? element.offsetTop : 0;\n    }\n  }\n  onChooseItem(selectedItem) {\n    var _a;\n    if (!selectedItem) {\n      return;\n    }\n    selectedItem.classList.remove(\"selected\");\n    this.hideDropDownContainer();\n    this.selectedOption = this.selectedOption = {\n      Value: +selectedItem.getAttribute(\"data-id\"),\n      Label: +selectedItem.getAttribute(\"data-id\") ? ((_a = this.options.find(f => f.Value === +selectedItem.getAttribute(\"data-id\"))) === null || _a === void 0 ? void 0 : _a.Label) || \"Unknown option:\".concat(selectedItem.getAttribute(\"data-id\")) : \"\"\n    };\n    this.controlValueChange();\n    this.renderSelected();\n  }\n  onClickFilterButton(event) {\n    if (this.container.classList.contains(\"expanded\")) {\n      this.hideDropDownContainer();\n      this.renderSelected();\n    } else {\n      this.doSearch(null);\n      event.stopPropagation();\n    }\n  }\n  doSearch(event) {\n    if (event && [13, 27, 9, 40, 37, 38, 39].indexOf(event.keyCode) > -1) {\n      return;\n    }\n    var filteredItems = this.inputElement.value.trim() ? this.options.filter(f => f.Label.toLowerCase().includes(this.inputElement.value.toLowerCase())) : this.options;\n    this.renderDropDownContainer(filteredItems);\n  }\n  renderDropDownContainer(optionValues) {\n    var options = \"\";\n    for (var v = 0; v < optionValues.length; v++) {\n      options += \"<div  data-id=\\\"\".concat(optionValues[v].Value, \"\\\" class=\\\"custom-drop-down-item\\\" >\\n                    <div class=\\\"option-text\\\">\\n                        <div class=\\\"option-name\\\" title=\\\"\").concat(optionValues[v].Label, \"\\\">\").concat(optionValues[v].Label, \"</div>\\n                    </div>\\n                 </div>\");\n    }\n    options = options.length === 0 ? \"<div class='no-data'>No data</div>\" : options;\n    this.dropDownContainer.innerHTML = \"<div class=\\\"custom-drop-down-scrollable\\\">                 \\n                 \".concat(options, \"                 \\n             </div>\");\n    this.initEvents();\n    this.showDropDownContainer();\n  }\n  showDropDownContainer() {\n    var docHeight = document.body.clientHeight;\n    var currentPosition = this.container.getBoundingClientRect().y;\n    if (currentPosition + 335 > docHeight) {\n      this.container.classList.add(\"expanded-top\");\n    } else {\n      this.container.classList.remove(\"expanded-top\");\n    }\n    this.container.classList.add(\"expanded\");\n  }\n  hideDropDownContainer() {\n    this.container.classList.remove(\"expanded\");\n    this.inputElement.value = \"\";\n  }\n  getOutputs() {\n    return {\n      OptionValue: this.selectedOption.Value || undefined\n    };\n  }\n  destroy() {}\n}\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./InputFieldOptionset/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./InputFieldOptionset/index.ts"](0, __webpack_exports__, __webpack_require__);
/******/ 	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = __webpack_exports__;
/******/ 	
/******/ })()
;
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('InputFieldOptionset.InputFieldOptionset', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.InputFieldOptionset);
} else {
	var InputFieldOptionset = InputFieldOptionset || {};
	InputFieldOptionset.InputFieldOptionset = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.InputFieldOptionset;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}