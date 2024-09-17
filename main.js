/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
  writing-mode: vertical-rl;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.horizontal-lr {
  writing-mode: horizontal-tb;
  inline-size: 5em;
  word-break: break-all;
  padding-inline-start: 2em;
}

.horizontal-rl {
  writing-mode: horizontal-tb;
  direction: rtl;
  inline-size: 5em;
  padding-inline-start: 2em;
  word-break: break-all;
}

.tab-navigation {
  padding-block: 20px;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: start;
  font-size: 24px;
}

.tab {
  padding: 16px;
  border-radius: 8px;
  border: 1px solid black;
  letter-spacing: 4px;
}

.tab:hover {
  border: 1px solid #8fbe31;
  color: #8fbe31;
}

.current-tab {
  background: #d6f19e;
  border: 1px solid #d6f19e;
}

#content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  block-size: 100vw;
}

/* Main */

main {
  flex: 1;
  padding-block-end: 32px;
}

/* Homepage */

h2 {
  margin-block: 10px;
  font-size: 28px;
  display: flex;
  align-items: center;
  gap: 4px;
}

h2 span:not([class]) {
  block-size: 1em;
  letter-spacing: 4px;
}

.home-page-photo {
  border-radius: 24px;
  inline-size: 100%;
  block-size: 600px;
  object-fit: cover;
}

h3 {
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 26px;
  letter-spacing: 4px;
}

.location-heading {
  padding-inline-end: 3em;
  padding-block: 10px;
  border-block-end: 1px solid black;
}

.location {
  letter-spacing: 4px;
  font-size: 22px;
  padding-inline: 32px;
  padding-block: 16px;
}

/* Footer */

.credit {
  display: flex;
  align-items: end;
  gap: 4px;
}

.credit span:not([class]) {
  block-size: 1em;
  flex: none;
  letter-spacing: 4px;
}

.credit span[class] {
  padding-inline-start: 0px;
}

.credit a,
.github {
  padding-inline-start: 0px;
}

footer {
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  border-radius: 16px;
  background: #d6f19e;
  padding: 1em;
}

/* Menu */

.menu-item {
  display: grid;
  grid-template-columns: 1fr 3fr 2fr;
  gap: 16px;
  padding-inline: 16px;
  padding-block: 24px;
  margin-block: 32px;
}

.menu-item:hover {
  border-radius: 16px;
  background: #eaf5d3;
}

.menu-item img {
  inline-size: 180px;
  block-size: 180px;
  object-fit: cover;
  border-radius: 16px;
}

.item-name {
  block-size: 1em;
  font-size: 28px;
  letter-spacing: 4px;
  font-weight: 500;
  align-self: center;
}

.price {
  font-size: 28px;
  font-weight: 500;
  align-self: center;
}

/* Contact */

.contact-item {
  display: grid;
  grid-template-columns: 0.7fr 2fr 3fr;
  align-items: center;
  padding: 32px;
  margin-block: 32px;
  block-size: 200px;
}

.contact-item:hover {
  border-radius: 16px;
  background: #eaf5d3;
}

.contact-item img {
  inline-size: 72px;
  block-size: 72px;
  object-fit: cover;
  border-radius: 36px;
}

.contact-name,
.contact-description {
  font-size: 20px;
}

.contact-name span[class] {
  word-break: break-all;
}

.contact-name span:not([class]), .contact-description {
  block-size: 1em;
}

.contact-description {
  letter-spacing: 4px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,yBAAyB;EACzB;wEACsE;AACxE;;AAEA;EACE,2BAA2B;EAC3B,gBAAgB;EAChB,qBAAqB;EACrB,yBAAyB;AAC3B;;AAEA;EACE,2BAA2B;EAC3B,cAAc;EACd,gBAAgB;EAChB,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,SAAS;EACT,mBAAmB;EACnB,sBAAsB;EACtB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA,SAAS;;AAET;EACE,OAAO;EACP,uBAAuB;AACzB;;AAEA,aAAa;;AAEb;EACE,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;EACjB,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;EACnB,iCAAiC;AACnC;;AAEA;EACE,mBAAmB;EACnB,eAAe;EACf,oBAAoB;EACpB,mBAAmB;AACrB;;AAEA,WAAW;;AAEX;EACE,aAAa;EACb,gBAAgB;EAChB,QAAQ;AACV;;AAEA;EACE,eAAe;EACf,UAAU;EACV,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;;EAEE,yBAAyB;AAC3B;;AAEA;EACE,eAAe;EACf,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,mBAAmB;EACnB,YAAY;AACd;;AAEA,SAAS;;AAET;EACE,aAAa;EACb,kCAAkC;EAClC,SAAS;EACT,oBAAoB;EACpB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,eAAe;EACf,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA,YAAY;;AAEZ;EACE,aAAa;EACb,oCAAoC;EACpC,mBAAmB;EACnB,aAAa;EACb,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,mBAAmB;AACrB","sourcesContent":["* {\n  box-sizing: border-box;\n  writing-mode: vertical-rl;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\n.horizontal-lr {\n  writing-mode: horizontal-tb;\n  inline-size: 5em;\n  word-break: break-all;\n  padding-inline-start: 2em;\n}\n\n.horizontal-rl {\n  writing-mode: horizontal-tb;\n  direction: rtl;\n  inline-size: 5em;\n  padding-inline-start: 2em;\n  word-break: break-all;\n}\n\n.tab-navigation {\n  padding-block: 20px;\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  justify-content: start;\n  font-size: 24px;\n}\n\n.tab {\n  padding: 16px;\n  border-radius: 8px;\n  border: 1px solid black;\n  letter-spacing: 4px;\n}\n\n.tab:hover {\n  border: 1px solid #8fbe31;\n  color: #8fbe31;\n}\n\n.current-tab {\n  background: #d6f19e;\n  border: 1px solid #d6f19e;\n}\n\n#content {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  block-size: 100vw;\n}\n\n/* Main */\n\nmain {\n  flex: 1;\n  padding-block-end: 32px;\n}\n\n/* Homepage */\n\nh2 {\n  margin-block: 10px;\n  font-size: 28px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\nh2 span:not([class]) {\n  block-size: 1em;\n  letter-spacing: 4px;\n}\n\n.home-page-photo {\n  border-radius: 24px;\n  inline-size: 100%;\n  block-size: 600px;\n  object-fit: cover;\n}\n\nh3 {\n  display: flex;\n  align-items: center;\n  font-weight: 500;\n  font-size: 26px;\n  letter-spacing: 4px;\n}\n\n.location-heading {\n  padding-inline-end: 3em;\n  padding-block: 10px;\n  border-block-end: 1px solid black;\n}\n\n.location {\n  letter-spacing: 4px;\n  font-size: 22px;\n  padding-inline: 32px;\n  padding-block: 16px;\n}\n\n/* Footer */\n\n.credit {\n  display: flex;\n  align-items: end;\n  gap: 4px;\n}\n\n.credit span:not([class]) {\n  block-size: 1em;\n  flex: none;\n  letter-spacing: 4px;\n}\n\n.credit span[class] {\n  padding-inline-start: 0px;\n}\n\n.credit a,\n.github {\n  padding-inline-start: 0px;\n}\n\nfooter {\n  font-size: 18px;\n  display: flex;\n  justify-content: space-between;\n  border-radius: 16px;\n  background: #d6f19e;\n  padding: 1em;\n}\n\n/* Menu */\n\n.menu-item {\n  display: grid;\n  grid-template-columns: 1fr 3fr 2fr;\n  gap: 16px;\n  padding-inline: 16px;\n  padding-block: 24px;\n  margin-block: 32px;\n}\n\n.menu-item:hover {\n  border-radius: 16px;\n  background: #eaf5d3;\n}\n\n.menu-item img {\n  inline-size: 180px;\n  block-size: 180px;\n  object-fit: cover;\n  border-radius: 16px;\n}\n\n.item-name {\n  block-size: 1em;\n  font-size: 28px;\n  letter-spacing: 4px;\n  font-weight: 500;\n  align-self: center;\n}\n\n.price {\n  font-size: 28px;\n  font-weight: 500;\n  align-self: center;\n}\n\n/* Contact */\n\n.contact-item {\n  display: grid;\n  grid-template-columns: 0.7fr 2fr 3fr;\n  align-items: center;\n  padding: 32px;\n  margin-block: 32px;\n  block-size: 200px;\n}\n\n.contact-item:hover {\n  border-radius: 16px;\n  background: #eaf5d3;\n}\n\n.contact-item img {\n  inline-size: 72px;\n  block-size: 72px;\n  object-fit: cover;\n  border-radius: 36px;\n}\n\n.contact-name,\n.contact-description {\n  font-size: 20px;\n}\n\n.contact-name span[class] {\n  word-break: break-all;\n}\n\n.contact-name span:not([class]), .contact-description {\n  block-size: 1em;\n}\n\n.contact-description {\n  letter-spacing: 4px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderContact: () => (/* binding */ renderContact)
/* harmony export */ });
const content = document.querySelector("#content");

function makeTabNavigation() {
  const tabNavigation = document.createElement("div");
  tabNavigation.classList.add("tab-navigation");

  const homepageTab = document.createElement("span");
  homepageTab.classList.add("home-page-tab", "tab");
  homepageTab.textContent = "ホームページ";

  const menuTab = document.createElement("span");
  menuTab.classList.add("menu-tab", "tab");
  menuTab.textContent = "メニュー";

  const contactTab = document.createElement("span");
  contactTab.classList.add("contact-tab", "tab", "current-tab");
  contactTab.textContent = "連絡";

  tabNavigation.appendChild(homepageTab);
  tabNavigation.appendChild(menuTab);
  tabNavigation.appendChild(contactTab);

  content.appendChild(tabNavigation);
}

function makeMain() {
  const main = document.createElement("main");
  main.innerHTML = `<div class="contact-item">
        <img
          src="https://images.unsplash.com/photo-1572715376701-98568319fd0b?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">

        <div class="contact-name">
          <span class="horizontal-lr">Alex</span>
          <span>　</span>
          <span class="horizontal-lr">Harley</span>
        </div>

        <div class="contact-description">料理長</div>
      </div>

      <div class="contact-item">
        <img
          src="https://images.unsplash.com/photo-1604328471151-b52226907017?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">

        <div class="contact-name">
          <span class="horizontal-rl">قنبلة</span>
          <span>　</span>
          <span class="horizontal-rl">جي</span>
          <span>　</span>
          <span class="horizontal-rl">سي</span>
          <span>　</span>
          <span class="horizontal-rl">إس</span>
        </div>

        <div class="contact-description">アシスタントシェフ</div>
      </div>

      <div class="contact-item">
        <img
          src="https://images.unsplash.com/photo-1621494268492-d01b98eba7e4?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">

        <div class="contact-name">
          <span>にの・みやき</span>
        </div>

        <div class="contact-description">アシスタントシェフ</div>
      </div>`;

  content.appendChild(main);
}

function makeFooter() {
  const footer = document.createElement("footer");
  footer.innerHTML = `<span class="credit flex-none">
        <span class="horizontal-lr">Unsplash</span>
        <span>の</span>
        <span class="horizontal-lr"><a
            href="https://unsplash.com/photos/man-standing-front-of-plate-with-vegetable--eKZLpj7U0E"
            class="horizontal-lr">Jason</a></span>
        <span>　</span>
        <span class="horizontal-lr"><a
            href="https://unsplash.com/photos/man-standing-front-of-plate-with-vegetable--eKZLpj7U0E"
            class="horizontal-lr">Leung</a></span>
        <span>、</span>

        <span class="horizontal-lr"><a
            href="https://unsplash.com/photos/person-holding-stainless-steel-fork-R8HoXig87p8"
            class="horizontal-lr">Edward</a></span>
        <span>　</span>
        <span class="horizontal-lr"><a
            href="https://unsplash.com/photos/person-holding-stainless-steel-fork-R8HoXig87p8"
            class="horizontal-lr">Howell</a></span>
        <span>、</span>

        <span class="horizontal-lr"><a
            href="https://unsplash.com/photos/person-holding-stainless-steel-spoon-and-fork-eating-on-black-table--g5jWce3HUQ"
            class="horizontal-lr">Duane</a></span>
        <span>　</span>
        <span class="horizontal-lr"><a
            href="https://unsplash.com/photos/person-holding-stainless-steel-spoon-and-fork-eating-on-black-table--g5jWce3HUQ"
            class="horizontal-lr">Mendes</a></span>

        <span>による写真</span>
      </span>

      <span class="github horizontal-lr">Github</span>`;
  content.appendChild(footer);
};

function renderContact() {
  makeTabNavigation();
  makeMain();
  makeFooter();
}


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderHomepage: () => (/* binding */ renderHomepage)
/* harmony export */ });
const content = document.querySelector("#content");

function makeTabNavigation() {
  const tabNavigation = document.createElement("div");
  tabNavigation.classList.add("tab-navigation");

  const homepageTab = document.createElement("span");
  homepageTab.classList.add("home-page-tab", "tab", "current-tab");
  homepageTab.textContent = "ホームページ";

  const menuTab = document.createElement("span");
  menuTab.classList.add("menu-tab", "tab");
  menuTab.textContent = "メニュー";

  const contactTab = document.createElement("span");
  contactTab.classList.add("contact-tab", "tab");
  contactTab.textContent = "連絡";

  tabNavigation.appendChild(homepageTab);
  tabNavigation.appendChild(menuTab);
  tabNavigation.appendChild(contactTab);

  content.appendChild(tabNavigation);
}

function makeMain() {
  const main = document.createElement("main");

  const heroHeading = document.createElement("h2");
  heroHeading.innerHTML = `<span class="horizontal-lr">Alex</span>
        <span>　</span>
        <span class="horizontal-lr">Harley</span>
        <span>と</span>
        <span class="horizontal-rl">قنبلة</span>
        <span>　</span>
        <span class="horizontal-rl">جي</span>
        <span>　</span>
        <span class="horizontal-rl">سي</span>
        <span>　</span>
        <span class="horizontal-rl">إس</span>
        <span>のレストランへようこそ！</span>`;

  const homepagePhoto = document.createElement("img");
  homepagePhoto.classList.add("home-page-photo");
  homepagePhoto.setAttribute(
    "src",
    "https://images.unsplash.com/photo-1667604987970-4bbd6ed51d0d?auto=format&fit=crop&q=80&w=1972&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );
  homepagePhoto.setAttribute("alt", "レストランの写真");

  const locationHeading = document.createElement("h3");
  locationHeading.innerHTML = `<span class="location-heading">位置</span>`;

  const location = document.createElement("span");
  location.classList.add("location");
  location.textContent = "震電社３号船（東京〜ロサンゼルス）";

  main.appendChild(heroHeading);
  main.appendChild(homepagePhoto);
  main.appendChild(locationHeading);
  main.appendChild(location);

  content.appendChild(main);
}

function makeFooter() {
  const footer = document.createElement("footer");
  footer.innerHTML = `<span class="credit flex-none">
        <span class="horizontal-lr">Unsplash</span>
        <span>の</span>
        <span class="horizontal-lr"><a
            href="https://unsplash.com/photos/a-table-with-glasses-and-bottles-on-it-by-a-window-with-water-qbW9KLqWDiQ"
            class="horizontal-lr">Jannik</a></span>
        <span>による写真</span>
      </span>

      <span class="github horizontal-lr">Github</span>`;
  
  content.appendChild(footer);
}

function renderHomepage() {
  makeTabNavigation();
  makeMain();
  makeFooter();
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderMenu: () => (/* binding */ renderMenu)
/* harmony export */ });
const content = document.querySelector("#content");

function makeTabNavigation() {
  const tabNavigation = document.createElement("div");
  tabNavigation.classList.add("tab-navigation");

  const homepageTab = document.createElement("span");
  homepageTab.classList.add("home-page-tab", "tab");
  homepageTab.textContent = "ホームページ";

  const menuTab = document.createElement("span");
  menuTab.classList.add("menu-tab", "tab", "current-tab");
  menuTab.textContent = "メニュー";

  const contactTab = document.createElement("span");
  contactTab.classList.add("contact-tab", "tab");
  contactTab.textContent = "連絡";

  tabNavigation.appendChild(homepageTab);
  tabNavigation.appendChild(menuTab);
  tabNavigation.appendChild(contactTab);

  content.appendChild(tabNavigation);
}

function makeMain() {
  const main = document.createElement("main");
  main.innerHTML = `<div class="menu-item">
        <img
          src="https://images.unsplash.com/photo-1554980291-c3e7cea75872?auto=format&fit=crop&q=80&w=1996&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="ビーガンポテトスープ">

        <span class="item-name">ビーガンポテトスープ</span>

        <div class="price">
          <span class="dollar horizontal-lr">$</span>
          <span class="ammount horizontal-lr">3.99</span>
        </div>
      </div>

      <div class="menu-item">
        <img
          src="https://images.unsplash.com/photo-1534352211968-8d25dbe0e951?auto=format&fit=crop&q=80&w=1929&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="ビーガンサンドイッチ">

        <span class="item-name">ビーガンサンドイッチ</span>

        <div class="price">
          <span class="dollar horizontal-lr">$</span>
          <span class="ammount horizontal-lr">2.99</span>
        </div>

      </div>

      <div class="menu-item">
        <img
          src="https://images.unsplash.com/photo-1631311695255-8dde6bf96cb5?auto=format&fit=crop&q=80&w=1976&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="ビーガンサラダボウル">

        <span class="item-name">ビーガンサラダボウル</span>

        <div class="price">
          <span class="dollar horizontal-lr">$</span>
          <span class="ammount horizontal-lr">3.99</span>
        </div>

      </div>

      <div class="menu-item">
        <img
          src="https://images.unsplash.com/photo-1541014741259-de529411b96a?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="ビーガン巻き寿司">

        <span class="item-name">ビーガン巻き寿司</span>

        <div class="price">
          <span class="dollar horizontal-lr">$</span>
          <span class="ammount horizontal-lr">4.99</span>
        </div>


      </div>`;

  content.appendChild(main);
}

function makeFooter() {
  const footer = document.createElement("footer");
  footer.innerHTML = `<span class="credit flex-none">
        <span class="horizontal-lr">Unsplash</span>
        <span>の</span>
        <span class="horizontal-lr"><a href="https://unsplash.com/photos/cooked-food-wSh0Exrb62g"
            class="horizontal-lr">Victoria</a></span>
        <span>　</span>
        <span class="horizontal-lr"><a href="https://unsplash.com/photos/cooked-food-wSh0Exrb62g"
            class="horizontal-lr">Shes</a></span>
        <span>、</span>

        <span class="horizontal-lr"><a href="https://unsplash.com/photos/vegetable-sandwich-MAbhhj3QCXQ"
            class="horizontal-lr">Alexandra</a></span>
        <span>　</span>
        <span class="horizontal-lr"><a href="https://unsplash.com/photos/vegetable-sandwich-MAbhhj3QCXQ"
            class="horizontal-lr">Golovac</a></span>
        <span>、</span>

        <span class="horizontal-lr"><a href="https://unsplash.com/photos/a-bowl-filled-with-vegetables-and-dressing-next-to-a-glass-of-milk-Pqt1yIF-Fw0"
            class="horizontal-lr">Caroline</a></span>
        <span>　</span>
        <span class="horizontal-lr"><a href="https://unsplash.com/photos/a-bowl-filled-with-vegetables-and-dressing-next-to-a-glass-of-milk-Pqt1yIF-Fw0"
            class="horizontal-lr">Green</a></span>
        <span>、</span>

        <span class="horizontal-lr"><a href="https://unsplash.com/photos/vegetable-salad-served-on-white-bowl-6UxD0NzDywI"
            class="horizontal-lr">Ella</a></span>
        <span>　</span>
        <span class="horizontal-lr"><a href="https://unsplash.com/photos/vegetable-salad-served-on-white-bowl-6UxD0NzDywI"
            class="horizontal-lr">Olsson</a></span>

        <span>による写真</span>
      </span>

      <span class="github horizontal-lr">Github</span>`;

  content.appendChild(footer);
}

function renderMenu() {
  makeTabNavigation();
  makeMain();
  makeFooter();
}


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.renderHomepage)();

function clearContent() {
  const content = document.querySelector("#content");
  content.textContent = "";
}

function makeTabsSwitchable() {
  const homepageTab = document.querySelector(".home-page-tab");
  homepageTab.addEventListener("click", () => {
    clearContent();
    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.renderHomepage)();
    makeTabsSwitchable();
  })

  const menuTab = document.querySelector(".menu-tab");
  menuTab.addEventListener("click", () => {
   clearContent();
   (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.renderMenu)();
   makeTabsSwitchable();
  });

  const contactTab = document.querySelector(".contact-tab");
  contactTab.addEventListener("click", () => {
    clearContent();
    (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.renderContact)();
    makeTabsSwitchable();
  });
}

makeTabsSwitchable();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLE1BQU0sT0FBTyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLE9BQU8sV0FBVyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxXQUFXLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlB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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNqSEE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNyRkE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDbElBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBMkM7QUFDSjtBQUNNO0FBQ3hCOztBQUVyQix3REFBYzs7QUFFZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksd0RBQWM7QUFDbEI7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUcsb0RBQVU7QUFDYjtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwREFBYTtBQUNqQjtBQUNBLEdBQUc7QUFDSDs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RoZS1vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90aGUtb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGhlLW9kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90aGUtb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90aGUtb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90aGUtb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGhlLW9kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGhlLW9kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGhlLW9kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90aGUtb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RoZS1vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vdGhlLW9kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly90aGUtb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3RoZS1vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RoZS1vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RoZS1vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90aGUtb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RoZS1vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGhlLW9kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RoZS1vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1ybDtcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90byxcbiAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5ob3Jpem9udGFsLWxyIHtcbiAgd3JpdGluZy1tb2RlOiBob3Jpem9udGFsLXRiO1xuICBpbmxpbmUtc2l6ZTogNWVtO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAyZW07XG59XG5cbi5ob3Jpem9udGFsLXJsIHtcbiAgd3JpdGluZy1tb2RlOiBob3Jpem9udGFsLXRiO1xuICBkaXJlY3Rpb246IHJ0bDtcbiAgaW5saW5lLXNpemU6IDVlbTtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDJlbTtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuXG4udGFiLW5hdmlnYXRpb24ge1xuICBwYWRkaW5nLWJsb2NrOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDIwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLnRhYiB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XG59XG5cbi50YWI6aG92ZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjOGZiZTMxO1xuICBjb2xvcjogIzhmYmUzMTtcbn1cblxuLmN1cnJlbnQtdGFiIHtcbiAgYmFja2dyb3VuZDogI2Q2ZjE5ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q2ZjE5ZTtcbn1cblxuI2NvbnRlbnQge1xuICBwYWRkaW5nOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBibG9jay1zaXplOiAxMDB2dztcbn1cblxuLyogTWFpbiAqL1xuXG5tYWluIHtcbiAgZmxleDogMTtcbiAgcGFkZGluZy1ibG9jay1lbmQ6IDMycHg7XG59XG5cbi8qIEhvbWVwYWdlICovXG5cbmgyIHtcbiAgbWFyZ2luLWJsb2NrOiAxMHB4O1xuICBmb250LXNpemU6IDI4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNHB4O1xufVxuXG5oMiBzcGFuOm5vdChbY2xhc3NdKSB7XG4gIGJsb2NrLXNpemU6IDFlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbn1cblxuLmhvbWUtcGFnZS1waG90byB7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIGlubGluZS1zaXplOiAxMDAlO1xuICBibG9jay1zaXplOiA2MDBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbmgzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBsZXR0ZXItc3BhY2luZzogNHB4O1xufVxuXG4ubG9jYXRpb24taGVhZGluZyB7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogM2VtO1xuICBwYWRkaW5nLWJsb2NrOiAxMHB4O1xuICBib3JkZXItYmxvY2stZW5kOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5sb2NhdGlvbiB7XG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgcGFkZGluZy1pbmxpbmU6IDMycHg7XG4gIHBhZGRpbmctYmxvY2s6IDE2cHg7XG59XG5cbi8qIEZvb3RlciAqL1xuXG4uY3JlZGl0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGVuZDtcbiAgZ2FwOiA0cHg7XG59XG5cbi5jcmVkaXQgc3Bhbjpub3QoW2NsYXNzXSkge1xuICBibG9jay1zaXplOiAxZW07XG4gIGZsZXg6IG5vbmU7XG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XG59XG5cbi5jcmVkaXQgc3BhbltjbGFzc10ge1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4O1xufVxuXG4uY3JlZGl0IGEsXG4uZ2l0aHViIHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweDtcbn1cblxuZm9vdGVyIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGJhY2tncm91bmQ6ICNkNmYxOWU7XG4gIHBhZGRpbmc6IDFlbTtcbn1cblxuLyogTWVudSAqL1xuXG4ubWVudS1pdGVtIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyIDJmcjtcbiAgZ2FwOiAxNnB4O1xuICBwYWRkaW5nLWlubGluZTogMTZweDtcbiAgcGFkZGluZy1ibG9jazogMjRweDtcbiAgbWFyZ2luLWJsb2NrOiAzMnB4O1xufVxuXG4ubWVudS1pdGVtOmhvdmVyIHtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYmFja2dyb3VuZDogI2VhZjVkMztcbn1cblxuLm1lbnUtaXRlbSBpbWcge1xuICBpbmxpbmUtc2l6ZTogMTgwcHg7XG4gIGJsb2NrLXNpemU6IDE4MHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbn1cblxuLml0ZW0tbmFtZSB7XG4gIGJsb2NrLXNpemU6IDFlbTtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5wcmljZSB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4vKiBDb250YWN0ICovXG5cbi5jb250YWN0LWl0ZW0ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuN2ZyIDJmciAzZnI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMycHg7XG4gIG1hcmdpbi1ibG9jazogMzJweDtcbiAgYmxvY2stc2l6ZTogMjAwcHg7XG59XG5cbi5jb250YWN0LWl0ZW06aG92ZXIge1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBiYWNrZ3JvdW5kOiAjZWFmNWQzO1xufVxuXG4uY29udGFjdC1pdGVtIGltZyB7XG4gIGlubGluZS1zaXplOiA3MnB4O1xuICBibG9jay1zaXplOiA3MnB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogMzZweDtcbn1cblxuLmNvbnRhY3QtbmFtZSxcbi5jb250YWN0LWRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uY29udGFjdC1uYW1lIHNwYW5bY2xhc3NdIHtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuXG4uY29udGFjdC1uYW1lIHNwYW46bm90KFtjbGFzc10pLCAuY29udGFjdC1kZXNjcmlwdGlvbiB7XG4gIGJsb2NrLXNpemU6IDFlbTtcbn1cblxuLmNvbnRhY3QtZGVzY3JpcHRpb24ge1xuICBsZXR0ZXItc3BhY2luZzogNHB4O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6Qjt3RUFDc0U7QUFDeEU7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25COztBQUVBLFNBQVM7O0FBRVQ7RUFDRSxPQUFPO0VBQ1AsdUJBQXVCO0FBQ3pCOztBQUVBLGFBQWE7O0FBRWI7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQjs7QUFFQSxXQUFXOztBQUVYO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQSxTQUFTOztBQUVUO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxTQUFTO0VBQ1Qsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBLFlBQVk7O0FBRVo7RUFDRSxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1ybDtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLFxcbiAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcXFwiT3BlbiBTYW5zXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmhvcml6b250YWwtbHIge1xcbiAgd3JpdGluZy1tb2RlOiBob3Jpem9udGFsLXRiO1xcbiAgaW5saW5lLXNpemU6IDVlbTtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAyZW07XFxufVxcblxcbi5ob3Jpem9udGFsLXJsIHtcXG4gIHdyaXRpbmctbW9kZTogaG9yaXpvbnRhbC10YjtcXG4gIGRpcmVjdGlvbjogcnRsO1xcbiAgaW5saW5lLXNpemU6IDVlbTtcXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAyZW07XFxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxufVxcblxcbi50YWItbmF2aWdhdGlvbiB7XFxuICBwYWRkaW5nLWJsb2NrOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4udGFiIHtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XFxufVxcblxcbi50YWI6aG92ZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzhmYmUzMTtcXG4gIGNvbG9yOiAjOGZiZTMxO1xcbn1cXG5cXG4uY3VycmVudC10YWIge1xcbiAgYmFja2dyb3VuZDogI2Q2ZjE5ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNmYxOWU7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJsb2NrLXNpemU6IDEwMHZ3O1xcbn1cXG5cXG4vKiBNYWluICovXFxuXFxubWFpbiB7XFxuICBmbGV4OiAxO1xcbiAgcGFkZGluZy1ibG9jay1lbmQ6IDMycHg7XFxufVxcblxcbi8qIEhvbWVwYWdlICovXFxuXFxuaDIge1xcbiAgbWFyZ2luLWJsb2NrOiAxMHB4O1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDRweDtcXG59XFxuXFxuaDIgc3Bhbjpub3QoW2NsYXNzXSkge1xcbiAgYmxvY2stc2l6ZTogMWVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcXG59XFxuXFxuLmhvbWUtcGFnZS1waG90byB7XFxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xcbiAgaW5saW5lLXNpemU6IDEwMCU7XFxuICBibG9jay1zaXplOiA2MDBweDtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG5oMyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDI2cHg7XFxuICBsZXR0ZXItc3BhY2luZzogNHB4O1xcbn1cXG5cXG4ubG9jYXRpb24taGVhZGluZyB7XFxuICBwYWRkaW5nLWlubGluZS1lbmQ6IDNlbTtcXG4gIHBhZGRpbmctYmxvY2s6IDEwcHg7XFxuICBib3JkZXItYmxvY2stZW5kOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5sb2NhdGlvbiB7XFxuICBsZXR0ZXItc3BhY2luZzogNHB4O1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgcGFkZGluZy1pbmxpbmU6IDMycHg7XFxuICBwYWRkaW5nLWJsb2NrOiAxNnB4O1xcbn1cXG5cXG4vKiBGb290ZXIgKi9cXG5cXG4uY3JlZGl0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZW5kO1xcbiAgZ2FwOiA0cHg7XFxufVxcblxcbi5jcmVkaXQgc3Bhbjpub3QoW2NsYXNzXSkge1xcbiAgYmxvY2stc2l6ZTogMWVtO1xcbiAgZmxleDogbm9uZTtcXG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XFxufVxcblxcbi5jcmVkaXQgc3BhbltjbGFzc10ge1xcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweDtcXG59XFxuXFxuLmNyZWRpdCBhLFxcbi5naXRodWIge1xcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgYmFja2dyb3VuZDogI2Q2ZjE5ZTtcXG4gIHBhZGRpbmc6IDFlbTtcXG59XFxuXFxuLyogTWVudSAqL1xcblxcbi5tZW51LWl0ZW0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmciAyZnI7XFxuICBnYXA6IDE2cHg7XFxuICBwYWRkaW5nLWlubGluZTogMTZweDtcXG4gIHBhZGRpbmctYmxvY2s6IDI0cHg7XFxuICBtYXJnaW4tYmxvY2s6IDMycHg7XFxufVxcblxcbi5tZW51LWl0ZW06aG92ZXIge1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gIGJhY2tncm91bmQ6ICNlYWY1ZDM7XFxufVxcblxcbi5tZW51LWl0ZW0gaW1nIHtcXG4gIGlubGluZS1zaXplOiAxODBweDtcXG4gIGJsb2NrLXNpemU6IDE4MHB4O1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbn1cXG5cXG4uaXRlbS1uYW1lIHtcXG4gIGJsb2NrLXNpemU6IDFlbTtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ucHJpY2Uge1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLyogQ29udGFjdCAqL1xcblxcbi5jb250YWN0LWl0ZW0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC43ZnIgMmZyIDNmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAzMnB4O1xcbiAgbWFyZ2luLWJsb2NrOiAzMnB4O1xcbiAgYmxvY2stc2l6ZTogMjAwcHg7XFxufVxcblxcbi5jb250YWN0LWl0ZW06aG92ZXIge1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gIGJhY2tncm91bmQ6ICNlYWY1ZDM7XFxufVxcblxcbi5jb250YWN0LWl0ZW0gaW1nIHtcXG4gIGlubGluZS1zaXplOiA3MnB4O1xcbiAgYmxvY2stc2l6ZTogNzJweDtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogMzZweDtcXG59XFxuXFxuLmNvbnRhY3QtbmFtZSxcXG4uY29udGFjdC1kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5jb250YWN0LW5hbWUgc3BhbltjbGFzc10ge1xcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbn1cXG5cXG4uY29udGFjdC1uYW1lIHNwYW46bm90KFtjbGFzc10pLCAuY29udGFjdC1kZXNjcmlwdGlvbiB7XFxuICBibG9jay1zaXplOiAxZW07XFxufVxcblxcbi5jb250YWN0LWRlc2NyaXB0aW9uIHtcXG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuZnVuY3Rpb24gbWFrZVRhYk5hdmlnYXRpb24oKSB7XG4gIGNvbnN0IHRhYk5hdmlnYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YWJOYXZpZ2F0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0YWItbmF2aWdhdGlvblwiKTtcblxuICBjb25zdCBob21lcGFnZVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBob21lcGFnZVRhYi5jbGFzc0xpc3QuYWRkKFwiaG9tZS1wYWdlLXRhYlwiLCBcInRhYlwiKTtcbiAgaG9tZXBhZ2VUYWIudGV4dENvbnRlbnQgPSBcIuODm+ODvOODoOODmuODvOOCuFwiO1xuXG4gIGNvbnN0IG1lbnVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgbWVudVRhYi5jbGFzc0xpc3QuYWRkKFwibWVudS10YWJcIiwgXCJ0YWJcIik7XG4gIG1lbnVUYWIudGV4dENvbnRlbnQgPSBcIuODoeODi+ODpeODvFwiO1xuXG4gIGNvbnN0IGNvbnRhY3RUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY29udGFjdFRhYi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC10YWJcIiwgXCJ0YWJcIiwgXCJjdXJyZW50LXRhYlwiKTtcbiAgY29udGFjdFRhYi50ZXh0Q29udGVudCA9IFwi6YCj57WhXCI7XG5cbiAgdGFiTmF2aWdhdGlvbi5hcHBlbmRDaGlsZChob21lcGFnZVRhYik7XG4gIHRhYk5hdmlnYXRpb24uYXBwZW5kQ2hpbGQobWVudVRhYik7XG4gIHRhYk5hdmlnYXRpb24uYXBwZW5kQ2hpbGQoY29udGFjdFRhYik7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZCh0YWJOYXZpZ2F0aW9uKTtcbn1cblxuZnVuY3Rpb24gbWFrZU1haW4oKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgbWFpbi5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImNvbnRhY3QtaXRlbVwiPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NzI3MTUzNzY3MDEtOTg1NjgzMTlmZDBiP2F1dG89Zm9ybWF0JmZpdD1jcm9wJnE9ODAmdz0xOTc0Jml4bGliPXJiLTQuMC4zJml4aWQ9TTN3eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDhmQSUzRCUzRFwiPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LW5hbWVcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImhvcml6b250YWwtbHJcIj5BbGV4PC9zcGFuPlxuICAgICAgICAgIDxzcGFuPuOAgDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImhvcml6b250YWwtbHJcIj5IYXJsZXk8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LWRlc2NyaXB0aW9uXCI+5paZ55CG6ZW3PC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtaXRlbVwiPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2MDQzMjg0NzExNTEtYjUyMjI2OTA3MDE3P2F1dG89Zm9ybWF0JmZpdD1jcm9wJnE9ODAmdz0yMDcxJml4bGliPXJiLTQuMC4zJml4aWQ9TTN3eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDhmQSUzRCUzRFwiPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LW5hbWVcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImhvcml6b250YWwtcmxcIj7ZgtmG2KjZhNipPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPuOAgDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImhvcml6b250YWwtcmxcIj7YrNmKPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPuOAgDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImhvcml6b250YWwtcmxcIj7Ys9mKPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPuOAgDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImhvcml6b250YWwtcmxcIj7YpdizPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1kZXNjcmlwdGlvblwiPuOCouOCt+OCueOCv+ODs+ODiOOCt+OCp+ODlTwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LWl0ZW1cIj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjIxNDk0MjY4NDkyLWQwMWI5OGViYTdlND9hdXRvPWZvcm1hdCZmaXQ9Y3JvcCZxPTgwJnc9MTk3NCZpeGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4ZkElM0QlM0RcIj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1uYW1lXCI+XG4gICAgICAgICAgPHNwYW4+44Gr44Gu44O744G/44KE44GNPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1kZXNjcmlwdGlvblwiPuOCouOCt+OCueOCv+ODs+ODiOOCt+OCp+ODlTwvZGl2PlxuICAgICAgPC9kaXY+YDtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xufVxuXG5mdW5jdGlvbiBtYWtlRm9vdGVyKCkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICBmb290ZXIuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwiY3JlZGl0IGZsZXgtbm9uZVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhvcml6b250YWwtbHJcIj5VbnNwbGFzaDwvc3Bhbj5cbiAgICAgICAgPHNwYW4+44GuPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhvcml6b250YWwtbHJcIj48YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9tYW4tc3RhbmRpbmctZnJvbnQtb2YtcGxhdGUtd2l0aC12ZWdldGFibGUtLWVLWkxwajdVMEVcIlxuICAgICAgICAgICAgY2xhc3M9XCJob3Jpem9udGFsLWxyXCI+SmFzb248L2E+PC9zcGFuPlxuICAgICAgICA8c3Bhbj7jgIA8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaG9yaXpvbnRhbC1sclwiPjxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL21hbi1zdGFuZGluZy1mcm9udC1vZi1wbGF0ZS13aXRoLXZlZ2V0YWJsZS0tZUtaTHBqN1UwRVwiXG4gICAgICAgICAgICBjbGFzcz1cImhvcml6b250YWwtbHJcIj5MZXVuZzwvYT48L3NwYW4+XG4gICAgICAgIDxzcGFuPuOAgTwvc3Bhbj5cblxuICAgICAgICA8c3BhbiBjbGFzcz1cImhvcml6b250YWwtbHJcIj48YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9wZXJzb24taG9sZGluZy1zdGFpbmxlc3Mtc3RlZWwtZm9yay1SOEhvWGlnODdwOFwiXG4gICAgICAgICAgICBjbGFzcz1cImhvcml6b250YWwtbHJcIj5FZHdhcmQ8L2E+PC9zcGFuPlxuICAgICAgICA8c3Bhbj7jgIA8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaG9yaXpvbnRhbC1sclwiPjxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL3BlcnNvbi1ob2xkaW5nLXN0YWlubGVzcy1zdGVlbC1mb3JrLVI4SG9YaWc4N3A4XCJcbiAgICAgICAgICAgIGNsYXNzPVwiaG9yaXpvbnRhbC1sclwiPkhvd2VsbDwvYT48L3NwYW4+XG4gICAgICAgIDxzcGFuPuOAgTwvc3Bhbj5cblxuICAgICAgICA8c3BhbiBjbGFzcz1cImhvcml6b250YWwtbHJcIj48YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9wZXJzb24taG9sZGluZy1zdGFpbmxlc3Mtc3RlZWwtc3Bvb24tYW5kLWZvcmstZWF0aW5nLW9uLWJsYWNrLXRhYmxlLS1nNWpXY2UzSFVRXCJcbiAgICAgICAgICAgIGNsYXNzPVwiaG9yaXpvbnRhbC1sclwiPkR1YW5lPC9hPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4+44CAPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhvcml6b250YWwtbHJcIj48YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9wZXJzb24taG9sZGluZy1zdGFpbmxlc3Mtc3RlZWwtc3Bvb24tYW5kLWZvcmstZWF0aW5nLW9uLWJsYWNrLXRhYmxlLS1nNWpXY2UzSFVRXCJcbiAgICAgICAgICAgIGNsYXNzPVwiaG9yaXpvbnRhbC1sclwiPk1lbmRlczwvYT48L3NwYW4+XG5cbiAgICAgICAgPHNwYW4+44Gr44KI44KL5YaZ55yfPC9zcGFuPlxuICAgICAgPC9zcGFuPlxuXG4gICAgICA8c3BhbiBjbGFzcz1cImdpdGh1YiBob3Jpem9udGFsLWxyXCI+R2l0aHViPC9zcGFuPmA7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJDb250YWN0KCkge1xuICBtYWtlVGFiTmF2aWdhdGlvbigpO1xuICBtYWtlTWFpbigpO1xuICBtYWtlRm9vdGVyKCk7XG59XG4iLCJjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG5mdW5jdGlvbiBtYWtlVGFiTmF2aWdhdGlvbigpIHtcbiAgY29uc3QgdGFiTmF2aWdhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhYk5hdmlnYXRpb24uY2xhc3NMaXN0LmFkZChcInRhYi1uYXZpZ2F0aW9uXCIpO1xuXG4gIGNvbnN0IGhvbWVwYWdlVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGhvbWVwYWdlVGFiLmNsYXNzTGlzdC5hZGQoXCJob21lLXBhZ2UtdGFiXCIsIFwidGFiXCIsIFwiY3VycmVudC10YWJcIik7XG4gIGhvbWVwYWdlVGFiLnRleHRDb250ZW50ID0gXCLjg5vjg7zjg6Djg5rjg7zjgrhcIjtcblxuICBjb25zdCBtZW51VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIG1lbnVUYWIuY2xhc3NMaXN0LmFkZChcIm1lbnUtdGFiXCIsIFwidGFiXCIpO1xuICBtZW51VGFiLnRleHRDb250ZW50ID0gXCLjg6Hjg4vjg6Xjg7xcIjtcblxuICBjb25zdCBjb250YWN0VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNvbnRhY3RUYWIuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtdGFiXCIsIFwidGFiXCIpO1xuICBjb250YWN0VGFiLnRleHRDb250ZW50ID0gXCLpgKPntaFcIjtcblxuICB0YWJOYXZpZ2F0aW9uLmFwcGVuZENoaWxkKGhvbWVwYWdlVGFiKTtcbiAgdGFiTmF2aWdhdGlvbi5hcHBlbmRDaGlsZChtZW51VGFiKTtcbiAgdGFiTmF2aWdhdGlvbi5hcHBlbmRDaGlsZChjb250YWN0VGFiKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKHRhYk5hdmlnYXRpb24pO1xufVxuXG5mdW5jdGlvbiBtYWtlTWFpbigpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuXG4gIGNvbnN0IGhlcm9IZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBoZXJvSGVhZGluZy5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJob3Jpem9udGFsLWxyXCI+QWxleDwvc3Bhbj5cbiAgICAgICAgPHNwYW4+44CAPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhvcml6b250YWwtbHJcIj5IYXJsZXk8L3NwYW4+XG4gICAgICAgIDxzcGFuPuOBqDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJob3Jpem9udGFsLXJsXCI+2YLZhtio2YTYqTwvc3Bhbj5cbiAgICAgICAgPHNwYW4+44CAPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhvcml6b250YWwtcmxcIj7YrNmKPC9zcGFuPlxuICAgICAgICA8c3Bhbj7jgIA8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaG9yaXpvbnRhbC1ybFwiPtiz2Yo8L3NwYW4+XG4gICAgICAgIDxzcGFuPuOAgDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJob3Jpem9udGFsLXJsXCI+2KXYszwvc3Bhbj5cbiAgICAgICAgPHNwYW4+44Gu44Os44K544OI44Op44Oz44G444KI44GG44GT44Gd77yBPC9zcGFuPmA7XG5cbiAgY29uc3QgaG9tZXBhZ2VQaG90byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGhvbWVwYWdlUGhvdG8uY2xhc3NMaXN0LmFkZChcImhvbWUtcGFnZS1waG90b1wiKTtcbiAgaG9tZXBhZ2VQaG90by5zZXRBdHRyaWJ1dGUoXG4gICAgXCJzcmNcIixcbiAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjY3NjA0OTg3OTcwLTRiYmQ2ZWQ1MWQwZD9hdXRvPWZvcm1hdCZmaXQ9Y3JvcCZxPTgwJnc9MTk3MiZpeGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4ZkElM0QlM0RcIlxuICApO1xuICBob21lcGFnZVBob3RvLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIuODrOOCueODiOODqeODs+OBruWGmeecn1wiKTtcblxuICBjb25zdCBsb2NhdGlvbkhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGxvY2F0aW9uSGVhZGluZy5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJsb2NhdGlvbi1oZWFkaW5nXCI+5L2N572uPC9zcGFuPmA7XG5cbiAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgbG9jYXRpb24uY2xhc3NMaXN0LmFkZChcImxvY2F0aW9uXCIpO1xuICBsb2NhdGlvbi50ZXh0Q29udGVudCA9IFwi6ZyH6Zu756S+77yT5Y+36Ii577yI5p2x5Lqs44Cc44Ot44K144Oz44K844Or44K577yJXCI7XG5cbiAgbWFpbi5hcHBlbmRDaGlsZChoZXJvSGVhZGluZyk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoaG9tZXBhZ2VQaG90byk7XG4gIG1haW4uYXBwZW5kQ2hpbGQobG9jYXRpb25IZWFkaW5nKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChsb2NhdGlvbik7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcbn1cblxuZnVuY3Rpb24gbWFrZUZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgZm9vdGVyLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cImNyZWRpdCBmbGV4LW5vbmVcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJob3Jpem9udGFsLWxyXCI+VW5zcGxhc2g8L3NwYW4+XG4gICAgICAgIDxzcGFuPuOBrjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJob3Jpem9udGFsLWxyXCI+PGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MvYS10YWJsZS13aXRoLWdsYXNzZXMtYW5kLWJvdHRsZXMtb24taXQtYnktYS13aW5kb3ctd2l0aC13YXRlci1xYlc5S0xxV0RpUVwiXG4gICAgICAgICAgICBjbGFzcz1cImhvcml6b250YWwtbHJcIj5KYW5uaWs8L2E+PC9zcGFuPlxuICAgICAgICA8c3Bhbj7jgavjgojjgovlhpnnnJ88L3NwYW4+XG4gICAgICA8L3NwYW4+XG5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZ2l0aHViIGhvcml6b250YWwtbHJcIj5HaXRodWI8L3NwYW4+YDtcbiAgXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckhvbWVwYWdlKCkge1xuICBtYWtlVGFiTmF2aWdhdGlvbigpO1xuICBtYWtlTWFpbigpO1xuICBtYWtlRm9vdGVyKCk7XG59XG4iLCJjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG5mdW5jdGlvbiBtYWtlVGFiTmF2aWdhdGlvbigpIHtcbiAgY29uc3QgdGFiTmF2aWdhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhYk5hdmlnYXRpb24uY2xhc3NMaXN0LmFkZChcInRhYi1uYXZpZ2F0aW9uXCIpO1xuXG4gIGNvbnN0IGhvbWVwYWdlVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGhvbWVwYWdlVGFiLmNsYXNzTGlzdC5hZGQoXCJob21lLXBhZ2UtdGFiXCIsIFwidGFiXCIpO1xuICBob21lcGFnZVRhYi50ZXh0Q29udGVudCA9IFwi44Ob44O844Og44Oa44O844K4XCI7XG5cbiAgY29uc3QgbWVudVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBtZW51VGFiLmNsYXNzTGlzdC5hZGQoXCJtZW51LXRhYlwiLCBcInRhYlwiLCBcImN1cnJlbnQtdGFiXCIpO1xuICBtZW51VGFiLnRleHRDb250ZW50ID0gXCLjg6Hjg4vjg6Xjg7xcIjtcblxuICBjb25zdCBjb250YWN0VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNvbnRhY3RUYWIuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtdGFiXCIsIFwidGFiXCIpO1xuICBjb250YWN0VGFiLnRleHRDb250ZW50ID0gXCLpgKPntaFcIjtcblxuICB0YWJOYXZpZ2F0aW9uLmFwcGVuZENoaWxkKGhvbWVwYWdlVGFiKTtcbiAgdGFiTmF2aWdhdGlvbi5hcHBlbmRDaGlsZChtZW51VGFiKTtcbiAgdGFiTmF2aWdhdGlvbi5hcHBlbmRDaGlsZChjb250YWN0VGFiKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKHRhYk5hdmlnYXRpb24pO1xufVxuXG5mdW5jdGlvbiBtYWtlTWFpbigpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICBtYWluLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwibWVudS1pdGVtXCI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU1NDk4MDI5MS1jM2U3Y2VhNzU4NzI/YXV0bz1mb3JtYXQmZml0PWNyb3AmcT04MCZ3PTE5OTYmaXhsaWI9cmItNC4wLjMmaXhpZD1NM3d4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OGZBJTNEJTNEXCJcbiAgICAgICAgICBhbHQ9XCLjg5Pjg7zjgqzjg7Pjg53jg4bjg4jjgrnjg7zjg5dcIj5cblxuICAgICAgICA8c3BhbiBjbGFzcz1cIml0ZW0tbmFtZVwiPuODk+ODvOOCrOODs+ODneODhuODiOOCueODvOODlzwvc3Bhbj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJpY2VcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImRvbGxhciBob3Jpem9udGFsLWxyXCI+JDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImFtbW91bnQgaG9yaXpvbnRhbC1sclwiPjMuOTk8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTM0MzUyMjExOTY4LThkMjVkYmUwZTk1MT9hdXRvPWZvcm1hdCZmaXQ9Y3JvcCZxPTgwJnc9MTkyOSZpeGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4ZkElM0QlM0RcIlxuICAgICAgICAgIGFsdD1cIuODk+ODvOOCrOODs+OCteODs+ODieOCpOODg+ODgVwiPlxuXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaXRlbS1uYW1lXCI+44OT44O844Ks44Oz44K144Oz44OJ44Kk44OD44OBPC9zcGFuPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcmljZVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZG9sbGFyIGhvcml6b250YWwtbHJcIj4kPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYW1tb3VudCBob3Jpem9udGFsLWxyXCI+Mi45OTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwibWVudS1pdGVtXCI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYzMTMxMTY5NTI1NS04ZGRlNmJmOTZjYjU/YXV0bz1mb3JtYXQmZml0PWNyb3AmcT04MCZ3PTE5NzYmaXhsaWI9cmItNC4wLjMmaXhpZD1NM3d4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OGZBJTNEJTNEXCJcbiAgICAgICAgICBhbHQ9XCLjg5Pjg7zjgqzjg7PjgrXjg6njg4Djg5zjgqbjg6tcIj5cblxuICAgICAgICA8c3BhbiBjbGFzcz1cIml0ZW0tbmFtZVwiPuODk+ODvOOCrOODs+OCteODqeODgOODnOOCpuODqzwvc3Bhbj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJpY2VcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImRvbGxhciBob3Jpem9udGFsLWxyXCI+JDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImFtbW91bnQgaG9yaXpvbnRhbC1sclwiPjMuOTk8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbVwiPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NDEwMTQ3NDEyNTktZGU1Mjk0MTFiOTZhP2F1dG89Zm9ybWF0JmZpdD1jcm9wJnE9ODAmdz0xOTc0Jml4bGliPXJiLTQuMC4zJml4aWQ9TTN3eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDhmQSUzRCUzRFwiXG4gICAgICAgICAgYWx0PVwi44OT44O844Ks44Oz5be744GN5a+/5Y+4XCI+XG5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJpdGVtLW5hbWVcIj7jg5Pjg7zjgqzjg7Plt7vjgY3lr7/lj7g8L3NwYW4+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByaWNlXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJkb2xsYXIgaG9yaXpvbnRhbC1sclwiPiQ8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJhbW1vdW50IGhvcml6b250YWwtbHJcIj40Ljk5PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgICA8L2Rpdj5gO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG59XG5cbmZ1bmN0aW9uIG1ha2VGb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gIGZvb3Rlci5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJjcmVkaXQgZmxleC1ub25lXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaG9yaXpvbnRhbC1sclwiPlVuc3BsYXNoPC9zcGFuPlxuICAgICAgICA8c3Bhbj7jga48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaG9yaXpvbnRhbC1sclwiPjxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MvY29va2VkLWZvb2Qtd1NoMEV4cmI2MmdcIlxuICAgICAgICAgICAgY2xhc3M9XCJob3Jpem9udGFsLWxyXCI+VmljdG9yaWE8L2E+PC9zcGFuPlxuICAgICAgICA8c3Bhbj7jgIA8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaG9yaXpvbnRhbC1sclwiPjxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MvY29va2VkLWZvb2Qtd1NoMEV4cmI2MmdcIlxuICAgICAgICAgICAgY2xhc3M9XCJob3Jpem9udGFsLWxyXCI+U2hlczwvYT48L3NwYW4+XG4gICAgICAgIDxzcGFuPuOAgTwvc3Bhbj5cblxuICAgICAgICA8c3BhbiBjbGFzcz1cImhvcml6b250YWwtbHJcIj48YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL3ZlZ2V0YWJsZS1zYW5kd2ljaC1NQWJoaGozUUNYUVwiXG4gICAgICAgICAgICBjbGFzcz1cImhvcml6b250YWwtbHJcIj5BbGV4YW5kcmE8L2E+PC9zcGFuPlxuICAgICAgICA8c3Bhbj7jgIA8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaG9yaXpvbnRhbC1sclwiPjxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MvdmVnZXRhYmxlLXNhbmR3aWNoLU1BYmhoajNRQ1hRXCJcbiAgICAgICAgICAgIGNsYXNzPVwiaG9yaXpvbnRhbC1sclwiPkdvbG92YWM8L2E+PC9zcGFuPlxuICAgICAgICA8c3Bhbj7jgIE8L3NwYW4+XG5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJob3Jpem9udGFsLWxyXCI+PGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9hLWJvd2wtZmlsbGVkLXdpdGgtdmVnZXRhYmxlcy1hbmQtZHJlc3NpbmctbmV4dC10by1hLWdsYXNzLW9mLW1pbGstUHF0MXlJRi1GdzBcIlxuICAgICAgICAgICAgY2xhc3M9XCJob3Jpem9udGFsLWxyXCI+Q2Fyb2xpbmU8L2E+PC9zcGFuPlxuICAgICAgICA8c3Bhbj7jgIA8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaG9yaXpvbnRhbC1sclwiPjxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MvYS1ib3dsLWZpbGxlZC13aXRoLXZlZ2V0YWJsZXMtYW5kLWRyZXNzaW5nLW5leHQtdG8tYS1nbGFzcy1vZi1taWxrLVBxdDF5SUYtRncwXCJcbiAgICAgICAgICAgIGNsYXNzPVwiaG9yaXpvbnRhbC1sclwiPkdyZWVuPC9hPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4+44CBPC9zcGFuPlxuXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaG9yaXpvbnRhbC1sclwiPjxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MvdmVnZXRhYmxlLXNhbGFkLXNlcnZlZC1vbi13aGl0ZS1ib3dsLTZVeEQwTnpEeXdJXCJcbiAgICAgICAgICAgIGNsYXNzPVwiaG9yaXpvbnRhbC1sclwiPkVsbGE8L2E+PC9zcGFuPlxuICAgICAgICA8c3Bhbj7jgIA8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaG9yaXpvbnRhbC1sclwiPjxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MvdmVnZXRhYmxlLXNhbGFkLXNlcnZlZC1vbi13aGl0ZS1ib3dsLTZVeEQwTnpEeXdJXCJcbiAgICAgICAgICAgIGNsYXNzPVwiaG9yaXpvbnRhbC1sclwiPk9sc3NvbjwvYT48L3NwYW4+XG5cbiAgICAgICAgPHNwYW4+44Gr44KI44KL5YaZ55yfPC9zcGFuPlxuICAgICAgPC9zcGFuPlxuXG4gICAgICA8c3BhbiBjbGFzcz1cImdpdGh1YiBob3Jpem9udGFsLWxyXCI+R2l0aHViPC9zcGFuPmA7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyTWVudSgpIHtcbiAgbWFrZVRhYk5hdmlnYXRpb24oKTtcbiAgbWFrZU1haW4oKTtcbiAgbWFrZUZvb3RlcigpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgcmVuZGVySG9tZXBhZ2UgfSBmcm9tIFwiLi9ob21lLmpzXCI7XG5pbXBvcnQgeyByZW5kZXJNZW51IH0gZnJvbSBcIi4vbWVudS5qc1wiO1xuaW1wb3J0IHsgcmVuZGVyQ29udGFjdCB9IGZyb20gXCIuL2NvbnRhY3QuanNcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbnJlbmRlckhvbWVwYWdlKCk7XG5cbmZ1bmN0aW9uIGNsZWFyQ29udGVudCgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgY29udGVudC50ZXh0Q29udGVudCA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIG1ha2VUYWJzU3dpdGNoYWJsZSgpIHtcbiAgY29uc3QgaG9tZXBhZ2VUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWUtcGFnZS10YWJcIik7XG4gIGhvbWVwYWdlVGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2xlYXJDb250ZW50KCk7XG4gICAgcmVuZGVySG9tZXBhZ2UoKTtcbiAgICBtYWtlVGFic1N3aXRjaGFibGUoKTtcbiAgfSlcblxuICBjb25zdCBtZW51VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LXRhYlwiKTtcbiAgbWVudVRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgY2xlYXJDb250ZW50KCk7XG4gICByZW5kZXJNZW51KCk7XG4gICBtYWtlVGFic1N3aXRjaGFibGUoKTtcbiAgfSk7XG5cbiAgY29uc3QgY29udGFjdFRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFjdC10YWJcIik7XG4gIGNvbnRhY3RUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjbGVhckNvbnRlbnQoKTtcbiAgICByZW5kZXJDb250YWN0KCk7XG4gICAgbWFrZVRhYnNTd2l0Y2hhYmxlKCk7XG4gIH0pO1xufVxuXG5tYWtlVGFic1N3aXRjaGFibGUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==