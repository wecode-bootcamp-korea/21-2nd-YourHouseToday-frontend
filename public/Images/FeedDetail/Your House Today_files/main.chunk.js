(this["webpackJsonpyourhouse-today"] = this["webpackJsonpyourhouse-today"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Styles/index.css":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/Styles/index.css ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".rc-slider {\n  position: relative;\n  height: 14px;\n  padding: 5px 0;\n  width: 100%;\n  border-radius: 6px;\n  touch-action: none;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider * {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider-rail {\n  position: absolute;\n  width: 100%;\n  background-color: rgb(237, 237, 237);\n  height: 10px;\n  border-radius: 10px;\n}\n.rc-slider-track {\n  position: absolute;\n  left: 0;\n  height: 10px;\n  border-radius: 10px;\n  background-color: rgb(197, 242, 255);\n}\n.rc-slider-handle {\n  position: absolute;\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n  cursor: -webkit-grab;\n  margin-top: -8px;\n  cursor: grab;\n  border-radius: 50%;\n  background-color: rgb(53, 197, 240);\n  touch-action: pan-x;\n  transition: left 0.1s ease 0s;\n}\n.rc-slider-handle-dragging.rc-slider-handle-dragging.rc-slider-handle-dragging {\n}\n.rc-slider-handle:focus {\n  outline: none;\n}\n.rc-slider-handle-click-focused:focus {\n}\n.rc-slider-handle:hover {\n  border-color: #57c5f7;\n}\n.rc-slider-handle:active {\n  cursor: grabbing;\n}\n.rc-slider-mark {\n  position: absolute;\n  top: 18px;\n  left: 0;\n  width: 100%;\n  font-size: 12px;\n}\n.rc-slider-mark-text {\n  position: absolute;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n  cursor: pointer;\n  color: #999;\n}\n.rc-slider-mark-text-active {\n  color: #666;\n}\n.rc-slider-step {\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  background: transparent;\n}\n.rc-slider-dot {\n  position: absolute;\n  bottom: -2px;\n  margin-left: -4px;\n  width: 8px;\n  height: 8px;\n  border: 2px solid #e9e9e9;\n  background-color: #fff;\n  cursor: pointer;\n  border-radius: 50%;\n  vertical-align: middle;\n}\n.rc-slider-dot-active {\n  border-color: #96dbfa;\n}\n.rc-slider-dot-reverse {\n  margin-right: -4px;\n}\n.rc-slider-disabled {\n  background-color: #e9e9e9;\n}\n.rc-slider-disabled .rc-slider-track {\n  background-color: #ccc;\n}\n.rc-slider-disabled .rc-slider-handle,\n.rc-slider-disabled .rc-slider-dot {\n  border-color: #ccc;\n  box-shadow: none;\n  background-color: #fff;\n  cursor: not-allowed;\n}\n.rc-slider-disabled .rc-slider-mark-text,\n.rc-slider-disabled .rc-slider-dot {\n  cursor: not-allowed !important;\n}\n.rc-slider-vertical {\n  width: 14px;\n  height: 100%;\n  padding: 0 5px;\n}\n.rc-slider-vertical .rc-slider-rail {\n  height: 100%;\n  width: 4px;\n}\n.rc-slider-vertical .rc-slider-track {\n  left: 5px;\n  bottom: 0;\n  width: 4px;\n}\n.rc-slider-vertical .rc-slider-handle {\n  margin-left: -5px;\n  touch-action: pan-y;\n}\n.rc-slider-vertical .rc-slider-mark {\n  top: 0;\n  left: 18px;\n  height: 100%;\n}\n.rc-slider-vertical .rc-slider-step {\n  height: 100%;\n  width: 4px;\n}\n.rc-slider-vertical .rc-slider-dot {\n  left: 2px;\n  margin-bottom: -4px;\n}\n.rc-slider-vertical .rc-slider-dot:first-child {\n  margin-bottom: -4px;\n}\n.rc-slider-vertical .rc-slider-dot:last-child {\n  margin-bottom: -4px;\n}\n.rc-slider-tooltip-zoom-down-enter,\n.rc-slider-tooltip-zoom-down-appear {\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  display: block !important;\n  animation-play-state: paused;\n}\n.rc-slider-tooltip-zoom-down-leave {\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  display: block !important;\n  animation-play-state: paused;\n}\n.rc-slider-tooltip-zoom-down-enter.rc-slider-tooltip-zoom-down-enter-active,\n.rc-slider-tooltip-zoom-down-appear.rc-slider-tooltip-zoom-down-appear-active {\n  animation-name: rcSliderTooltipZoomDownIn;\n  animation-play-state: running;\n}\n.rc-slider-tooltip-zoom-down-leave.rc-slider-tooltip-zoom-down-leave-active {\n  animation-name: rcSliderTooltipZoomDownOut;\n  animation-play-state: running;\n}\n.rc-slider-tooltip-zoom-down-enter,\n.rc-slider-tooltip-zoom-down-appear {\n  transform: scale(0, 0);\n  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n}\n.rc-slider-tooltip-zoom-down-leave {\n  animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n}\n@keyframes rcSliderTooltipZoomDownIn {\n  0% {\n    opacity: 0;\n    transform-origin: 50% 100%;\n    transform: scale(0, 0);\n  }\n  100% {\n    transform-origin: 50% 100%;\n    transform: scale(1, 1);\n  }\n}\n@keyframes rcSliderTooltipZoomDownOut {\n  0% {\n    transform-origin: 50% 100%;\n    transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    transform-origin: 50% 100%;\n    transform: scale(0, 0);\n  }\n}\n.rc-slider-tooltip {\n  position: absolute;\n  left: -9999px;\n  top: -9999px;\n  visibility: visible;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider-tooltip * {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider-tooltip-hidden {\n  display: none;\n}\n.rc-slider-tooltip-placement-top {\n  padding: 4px 0 8px 0;\n}\n.rc-slider-tooltip-inner {\n  padding: 6px 2px;\n  min-width: 24px;\n  height: 24px;\n  font-size: 12px;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  background-color: #6c6c6c;\n  border-radius: 6px;\n  box-shadow: 0 0 4px #d9d9d9;\n}\n.rc-slider-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.rc-slider-tooltip-placement-top .rc-slider-tooltip-arrow {\n  bottom: 4px;\n  left: 50%;\n  margin-left: -4px;\n  border-width: 4px 4px 0;\n  border-top-color: #6c6c6c;\n}\n", "",{"version":3,"sources":["webpack://src/Styles/index.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,YAAY;EACZ,cAAc;EACd,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EAClB,sBAAsB;EACtB,6CAA6C;AAC/C;AACA;EACE,sBAAsB;EACtB,6CAA6C;AAC/C;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,oCAAoC;EACpC,YAAY;EACZ,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,OAAO;EACP,YAAY;EACZ,mBAAmB;EACnB,oCAAoC;AACtC;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,eAAe;EACf,oBAAoB;EACpB,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;EAClB,mCAAmC;EACnC,mBAAmB;EACnB,6BAA6B;AAC/B;AACA;AACA;AACA;EACE,aAAa;AACf;AACA;AACA;AACA;EACE,qBAAqB;AACvB;AACA;EAEE,gBAAgB;AAClB;AACA;EACE,kBAAkB;EAClB,SAAS;EACT,OAAO;EACP,WAAW;EACX,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,sBAAsB;EACtB,kBAAkB;EAClB,eAAe;EACf,WAAW;AACb;AACA;EACE,WAAW;AACb;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,uBAAuB;AACzB;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;EACjB,UAAU;EACV,WAAW;EACX,yBAAyB;EACzB,sBAAsB;EACtB,eAAe;EACf,kBAAkB;EAClB,sBAAsB;AACxB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,sBAAsB;AACxB;AACA;;EAEE,kBAAkB;EAClB,gBAAgB;EAChB,sBAAsB;EACtB,mBAAmB;AACrB;AACA;;EAEE,8BAA8B;AAChC;AACA;EACE,WAAW;EACX,YAAY;EACZ,cAAc;AAChB;AACA;EACE,YAAY;EACZ,UAAU;AACZ;AACA;EACE,SAAS;EACT,SAAS;EACT,UAAU;AACZ;AACA;EACE,iBAAiB;EACjB,mBAAmB;AACrB;AACA;EACE,MAAM;EACN,UAAU;EACV,YAAY;AACd;AACA;EACE,YAAY;EACZ,UAAU;AACZ;AACA;EACE,SAAS;EACT,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;;EAEE,wBAAwB;EACxB,yBAAyB;EACzB,yBAAyB;EACzB,4BAA4B;AAC9B;AACA;EACE,wBAAwB;EACxB,yBAAyB;EACzB,yBAAyB;EACzB,4BAA4B;AAC9B;AACA;;EAEE,yCAAyC;EACzC,6BAA6B;AAC/B;AACA;EACE,0CAA0C;EAC1C,6BAA6B;AAC/B;AACA;;EAEE,sBAAsB;EACtB,yDAAyD;AAC3D;AACA;EACE,iEAAiE;AACnE;AACA;EACE;IACE,UAAU;IACV,0BAA0B;IAC1B,sBAAsB;EACxB;EACA;IACE,0BAA0B;IAC1B,sBAAsB;EACxB;AACF;AACA;EACE;IACE,0BAA0B;IAC1B,sBAAsB;EACxB;EACA;IACE,UAAU;IACV,0BAA0B;IAC1B,sBAAsB;EACxB;AACF;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,sBAAsB;EACtB,6CAA6C;AAC/C;AACA;EACE,sBAAsB;EACtB,6CAA6C;AAC/C;AACA;EACE,aAAa;AACf;AACA;EACE,oBAAoB;AACtB;AACA;EACE,gBAAgB;EAChB,eAAe;EACf,YAAY;EACZ,eAAe;EACf,cAAc;EACd,WAAW;EACX,kBAAkB;EAClB,qBAAqB;EACrB,yBAAyB;EACzB,kBAAkB;EAClB,2BAA2B;AAC7B;AACA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,yBAAyB;EACzB,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,SAAS;EACT,iBAAiB;EACjB,uBAAuB;EACvB,yBAAyB;AAC3B","sourcesContent":[".rc-slider {\n  position: relative;\n  height: 14px;\n  padding: 5px 0;\n  width: 100%;\n  border-radius: 6px;\n  touch-action: none;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider * {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider-rail {\n  position: absolute;\n  width: 100%;\n  background-color: rgb(237, 237, 237);\n  height: 10px;\n  border-radius: 10px;\n}\n.rc-slider-track {\n  position: absolute;\n  left: 0;\n  height: 10px;\n  border-radius: 10px;\n  background-color: rgb(197, 242, 255);\n}\n.rc-slider-handle {\n  position: absolute;\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n  cursor: -webkit-grab;\n  margin-top: -8px;\n  cursor: grab;\n  border-radius: 50%;\n  background-color: rgb(53, 197, 240);\n  touch-action: pan-x;\n  transition: left 0.1s ease 0s;\n}\n.rc-slider-handle-dragging.rc-slider-handle-dragging.rc-slider-handle-dragging {\n}\n.rc-slider-handle:focus {\n  outline: none;\n}\n.rc-slider-handle-click-focused:focus {\n}\n.rc-slider-handle:hover {\n  border-color: #57c5f7;\n}\n.rc-slider-handle:active {\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n.rc-slider-mark {\n  position: absolute;\n  top: 18px;\n  left: 0;\n  width: 100%;\n  font-size: 12px;\n}\n.rc-slider-mark-text {\n  position: absolute;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n  cursor: pointer;\n  color: #999;\n}\n.rc-slider-mark-text-active {\n  color: #666;\n}\n.rc-slider-step {\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  background: transparent;\n}\n.rc-slider-dot {\n  position: absolute;\n  bottom: -2px;\n  margin-left: -4px;\n  width: 8px;\n  height: 8px;\n  border: 2px solid #e9e9e9;\n  background-color: #fff;\n  cursor: pointer;\n  border-radius: 50%;\n  vertical-align: middle;\n}\n.rc-slider-dot-active {\n  border-color: #96dbfa;\n}\n.rc-slider-dot-reverse {\n  margin-right: -4px;\n}\n.rc-slider-disabled {\n  background-color: #e9e9e9;\n}\n.rc-slider-disabled .rc-slider-track {\n  background-color: #ccc;\n}\n.rc-slider-disabled .rc-slider-handle,\n.rc-slider-disabled .rc-slider-dot {\n  border-color: #ccc;\n  box-shadow: none;\n  background-color: #fff;\n  cursor: not-allowed;\n}\n.rc-slider-disabled .rc-slider-mark-text,\n.rc-slider-disabled .rc-slider-dot {\n  cursor: not-allowed !important;\n}\n.rc-slider-vertical {\n  width: 14px;\n  height: 100%;\n  padding: 0 5px;\n}\n.rc-slider-vertical .rc-slider-rail {\n  height: 100%;\n  width: 4px;\n}\n.rc-slider-vertical .rc-slider-track {\n  left: 5px;\n  bottom: 0;\n  width: 4px;\n}\n.rc-slider-vertical .rc-slider-handle {\n  margin-left: -5px;\n  touch-action: pan-y;\n}\n.rc-slider-vertical .rc-slider-mark {\n  top: 0;\n  left: 18px;\n  height: 100%;\n}\n.rc-slider-vertical .rc-slider-step {\n  height: 100%;\n  width: 4px;\n}\n.rc-slider-vertical .rc-slider-dot {\n  left: 2px;\n  margin-bottom: -4px;\n}\n.rc-slider-vertical .rc-slider-dot:first-child {\n  margin-bottom: -4px;\n}\n.rc-slider-vertical .rc-slider-dot:last-child {\n  margin-bottom: -4px;\n}\n.rc-slider-tooltip-zoom-down-enter,\n.rc-slider-tooltip-zoom-down-appear {\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  display: block !important;\n  animation-play-state: paused;\n}\n.rc-slider-tooltip-zoom-down-leave {\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  display: block !important;\n  animation-play-state: paused;\n}\n.rc-slider-tooltip-zoom-down-enter.rc-slider-tooltip-zoom-down-enter-active,\n.rc-slider-tooltip-zoom-down-appear.rc-slider-tooltip-zoom-down-appear-active {\n  animation-name: rcSliderTooltipZoomDownIn;\n  animation-play-state: running;\n}\n.rc-slider-tooltip-zoom-down-leave.rc-slider-tooltip-zoom-down-leave-active {\n  animation-name: rcSliderTooltipZoomDownOut;\n  animation-play-state: running;\n}\n.rc-slider-tooltip-zoom-down-enter,\n.rc-slider-tooltip-zoom-down-appear {\n  transform: scale(0, 0);\n  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n}\n.rc-slider-tooltip-zoom-down-leave {\n  animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n}\n@keyframes rcSliderTooltipZoomDownIn {\n  0% {\n    opacity: 0;\n    transform-origin: 50% 100%;\n    transform: scale(0, 0);\n  }\n  100% {\n    transform-origin: 50% 100%;\n    transform: scale(1, 1);\n  }\n}\n@keyframes rcSliderTooltipZoomDownOut {\n  0% {\n    transform-origin: 50% 100%;\n    transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    transform-origin: 50% 100%;\n    transform: scale(0, 0);\n  }\n}\n.rc-slider-tooltip {\n  position: absolute;\n  left: -9999px;\n  top: -9999px;\n  visibility: visible;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider-tooltip * {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider-tooltip-hidden {\n  display: none;\n}\n.rc-slider-tooltip-placement-top {\n  padding: 4px 0 8px 0;\n}\n.rc-slider-tooltip-inner {\n  padding: 6px 2px;\n  min-width: 24px;\n  height: 24px;\n  font-size: 12px;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  background-color: #6c6c6c;\n  border-radius: 6px;\n  box-shadow: 0 0 4px #d9d9d9;\n}\n.rc-slider-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.rc-slider-tooltip-placement-top .rc-slider-tooltip-arrow {\n  bottom: 4px;\n  left: 50%;\n  margin-left: -4px;\n  border-width: 4px 4px 0;\n  border-top-color: #6c6c6c;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/Components/Footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/Components/Footer/Footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/mac/Desktop/WECODE/21-2nd-YourHouseToday-frontend/src/Components/Footer/Footer.js";






class Footer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const {
      location: {
        pathname
      }
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
      children: pathname !== '/writing' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Container, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Header, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(CsCenter, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(CenterLink, {
              children: "\uACE0\uAC1D\uC13C\uD130 >"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(CenterTel, {
              children: "1600-5379"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(CenterTime, {
              children: "\uD3C9\uC77C 09:00 ~ 18:00 (\uC8FC\uB9D0 & \uACF5\uD734\uC77C \uC81C\uC678)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(SocialLogo, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("i", {
              className: "fab fa-apple"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("i", {
              className: "fab fa-google-play"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("i", {
              className: "fab fa-youtube"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("i", {
              className: "fab fa-facebook-f"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("i", {
              className: "fab fa-instagram"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Category, {
            children: "\uBE0C\uB79C\uB4DC \uC2A4\uD1A0\uB9AC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Category, {
            children: "\uD68C\uC0AC\uC18C\uAC1C"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Category, {
            children: "\uCC44\uC6A9\uC815\uBCF4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Category, {
            children: "\uC774\uC6A9\uC57D\uAD00"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Category, {
            children: "\uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uBC29cla"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Category, {
            children: "\uACF5\uC9C0\uC0AC\uD56D"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Category, {
            children: "\uACE0\uAC1D\uC13C\uD130"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Category, {
            children: "\uACE0\uAC1D\uC758 \uC18C\uB9AC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Category, {
            children: "\uC804\uBB38\uAC00 \uB4F1\uB85D"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Category, {
            children: "\uC0AC\uC5C5\uC790 \uAD6C\uB9E4\uD68C\uC6D0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Category, {
            children: "\uC81C\uD734/\uAD11\uACE0 \uBB38\uC758"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Category, {
            children: "\uC785\uC810\uC2E0\uCCAD \uBB38\uC758"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Info, {
          children: ["\uC0C1\uD638\uBA85(\uC8FC)\uC624\uB298\uC758 \uB108\uB124\uC9D1 \uC774\uBA54\uC77C(\uACE0\uAC1D\uBB38\uC758) yourhousetoday.net (\uC81C\uD734\uBB38\uC758) yourhousetoday.net \uB300\uD45C\uC774\uC0AC\uC624\uC2E4\uC7A5\uC0AC\uC5C5\uC790\uB4F1\uB85D\uBC88\uD638119-86-9****\uD1B5\uC2E0\uD310\uB9E4\uC5C5\uC2E0\uACE0\uBC88\uD638\uC81C2018-\uC11C\uC6B8\uAC15\uB0A8-***8\uD638\uC8FC\uC18C\uC11C\uC6B8 \uC11C\uCD08\uAD6C \uAC15\uBCC0\uBD81\uB85C74\uAE38 4 \uC0BC\uC131", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 15
          }, this), "\uC0DD\uBA85\uAC15\uBCC0\uD0C0\uC6CC 27\uCE35 \uCE5C\uD55C\uC740\uD589 \uCC44\uBB34\uC9C0\uAE09\uBCF4\uC99D\uC548\uB0B4(\uC8FC)\uC624\uB298\uC758 \uB108\uB124\uC9D1\uC740 \uACE0\uAC1D\uB2D8\uC774 \uD604\uAE08\uACB0\uC81C\uD55C \uAE08\uC561\uC5D0 \uB300\uD574 \uCE5C\uD55C\uC740\uD589\uACFC \uCC44\uBB34\uC9C0\uAE09\uBCF4\uC99D \uACC4\uC57D\uC744 \uCCB4\uACB0\uD558\uC5EC \uC548\uC804\uAC70\uB798\uB97C \uBCF4\uC7A5\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uC11C\uBE44\uC2A4\uAC00\uC785\uC0AC\uC2E4 \uD655\uC778 (\uC8FC)\uC624\uB298\uC758 \uB108\uB124\uC9D1\uC740 \uD1B5\uC2E0\uD310\uB9E4\uC911\uAC1C\uC790", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 15
          }, this), "\uB85C\uC11C \uD1B5\uC2E0\uD310\uB9E4\uC758 \uB2F9\uC0AC\uC790\uAC00 \uC544\uB2C8\uBA70, \uC785\uC810\uC5C5\uCCB4\uAC00 \uB4F1\uB85D\uD55C \uC0C1\uD488, \uC0C1\uD488\uC815\uBCF4 \uBC0F \uAC70\uB798\uC5D0 \uB300\uD558\uC5EC (\uC8FC)\uC624\uB298\uC758 \uB108\uB124\uC9D1\uC740 \uC77C\uCCB4 \uCC45\uC784\uC744 \uC9C0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
            children: "Copyright 2021. yourhousetoday, Co., Ltd. All rights reserved"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 11
      }, this) : null
    }, void 0, false);
  }

}

const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].footer`
  width: 100vw;
  height: 281px;
  padding: 30px 320px 40px;
  background-color: #f5f5f5;
`;
_c = Container;
const Header = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  justify-content: space-between;
  height: 95px;
  color: #424242;
`;
_c2 = Header;
const CsCenter = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  flex-direction: column;
`;
_c3 = CsCenter;
const CenterLink = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span`
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 12px;
`;
_c4 = CenterLink;
const CenterTel = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span`
  font-size: 28px;
`;
_c5 = CenterTel;
const CenterTime = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span`
  font-size: 12px;
  color: #757575;
`;
_c6 = CenterTime;
const SocialLogo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  justify-content: space-between;
  width: 264px;

  i {
    font-size: 25px;
  }
`;
_c7 = SocialLogo;
const Category = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span`
  margin-right: 10px;
  font-size: 10px;
  color: #424242;
`;
_c8 = Category;
const Info = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p`
  margin-top: 20px;
  font-size: 10px;
  color: #757575;

  span {
    color: #424242;
  }
`;
_c9 = Info;
/* harmony default export */ __webpack_exports__["default"] = (_c10 = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Footer));

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;

__webpack_require__.$Refresh$.register(_c, "Container");
__webpack_require__.$Refresh$.register(_c2, "Header");
__webpack_require__.$Refresh$.register(_c3, "CsCenter");
__webpack_require__.$Refresh$.register(_c4, "CenterLink");
__webpack_require__.$Refresh$.register(_c5, "CenterTel");
__webpack_require__.$Refresh$.register(_c6, "CenterTime");
__webpack_require__.$Refresh$.register(_c7, "SocialLogo");
__webpack_require__.$Refresh$.register(_c8, "Category");
__webpack_require__.$Refresh$.register(_c9, "Info");
__webpack_require__.$Refresh$.register(_c10, "%default%");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Components/Nav/Nav.js":
/*!***********************************!*\
  !*** ./src/Components/Nav/Nav.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Pages_Login_Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Pages/Login/Login */ "./src/Pages/Login/Login.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/mac/Desktop/WECODE/21-2nd-YourHouseToday-frontend/src/Components/Nav/Nav.js",
    _s = __webpack_require__.$Refresh$.signature();








function Nav() {
  _s();

  const [isOpen, setIsOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [getInfo, setGetInfo] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [getToken, setGetToken] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(localStorage.getItem('access_token'));
  const [isClicked, setIsClicked] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [isTab, setIsTab] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useLocation"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (location.pathname === '/') setGetInfo(JSON.parse(localStorage.getItem('user-info')));
  }, [location.pathname]);

  const handleLogin = () => {
    setIsOpen(!isOpen);
  };

  const handleTab = e => {
    setIsTab(e.target.id);
  };

  const handleList = () => {
    setIsClicked(!isClicked);
  };

  const logoutWithKakao = () => {
    if (window.Kakao.Auth.getAccessToken()) {
      window.Kakao.Auth.logout(() => {
        localStorage.clear();
        setGetToken('');
        setGetInfo('');
      });
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
    children: location.pathname !== '/writing' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Container, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Wrapper, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
          to: '/',
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Logo, {
            alt: "\uB85C\uACE0",
            src: "Images/Logo/\uC624\uB298\uC758\uC9D1 \uB85C\uACE0.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Catagory, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
            children: "\uCEE4\uBBA4\uB2C8\uD2F0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
            children: "\uC2A4\uD1A0\uC5B4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
            children: "\uC778\uD14C\uB9AC\uC5B4\uC2DC\uACF5"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(SmallWrapper, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(InputBox, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Input, {
              placeholder: "\uC624\uB298\uC740 \uB108\uB124\uC9D1 \uD1B5\uD569\uAC80\uC0C9"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("i", {
              className: "fas fa-search"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 15
          }, this), !getInfo && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(ButtonBox, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
              onClick: handleLogin,
              children: "\uB85C\uADF8\uC778 / \uD68C\uC6D0\uAC00\uC785"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 17
          }, this), getInfo && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(BookMark, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("i", {
                className: "far fa-bookmark"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Bell, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("i", {
                className: "far fa-bell"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(ProfileBox, {
              onClick: handleList,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(ProfileImg, {
                  alt: "\uD504\uB85C\uD544\uC0AC\uC9C4",
                  src: getInfo.profile_image
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(PageList, {
                  isDisplay: isClicked,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(MyPage, {
                    children: "\uB9C8\uC774\uD398\uC774\uC9C0"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 81,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(LogOut, {
                    onClick: logoutWithKakao,
                    children: "\uB85C\uADF8\uC544\uC6C3"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 82,
                    columnNumber: 25
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 23
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("i", {
                className: "fas fa-sort-down"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 19
            }, this)]
          }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Write, {
            children: "\uAE00\uC4F0\uAE30"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(MenuContainer, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Menu, {
          children: MenuList.map((list, idx) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(MenuItem, {
            to: list.path,
            id: list.id,
            onClick: handleTab,
            chooseTab: parseInt(isTab) === list.id,
            children: list.name
          }, idx, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 17
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 11
      }, this), isOpen ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_Pages_Login_Login__WEBPACK_IMPORTED_MODULE_2__["default"], {
        isOpen: isOpen,
        setIsOpen: setIsOpen,
        getInfo: getToken,
        getToken: getToken,
        setGetInfo: setGetInfo,
        setGetToken: setGetToken
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 13
      }, this) : '']
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }, this) : null
  }, void 0, false);
}

_s(Nav, "Vs22Qcgd3fkaN34YQyyotpYLhfU=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useLocation"]];
});

_c = Nav;
const Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  background-color: #fff;
`;
_c2 = Container;
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 80px;
  padding: 0 320px;
  border-bottom: 1px solid #ededed;
`;
_c3 = Wrapper;
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].img`
  height: 50px;
`;
_c4 = Logo;
const Catagory = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div`
  display: flex;
  justify-content: space-around;
  position: relative;
  width: 300px;
  font-weight: 700;
  font-size: 18px;
  color: #424242;

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 38px;
    left: 17%;
    width: 0;
    height: 0;
    border-style: solid;
  }

  &:before {
    margin: 1px 0 0 -5px;
    border-width: 0 5px 10px;
    border-color: transparent transparent #dbdbdb;
  }

  &:after {
    margin: 2px 0 0 -4px;
    border-width: 0 4.5px 9px;
    border-color: transparent transparent #fff;
    transform: translateX(-0.5px);
  }

  span {
    &:hover {
      color: #3fc5f0;
    }
  }
`;
_c5 = Catagory;
const MenuContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div`
  display: flex;
  justify-content: flex-start;
  position: relative;
  width: 100vw;
  height: 50px;
  padding: 0 320px;
  border-bottom: 1px solid #ededed;
`;
_c6 = MenuContainer;
const MenuItem = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"])`
  display: flex;
  align-items: center;
  height: 50px;
  font-weight: 700;
  font-size: 16px;
  color: #424242;
  border-bottom: 4px solid ${props => props.chooseTab ? ' #3fc5f0' : 'none'};

  &:hover {
    color: #3fc5f0;
  }
`;
_c7 = MenuItem;
const Menu = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 640px;
`;
_c8 = Menu;
const SmallWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 520px;
`;
_c9 = SmallWrapper;
const InputBox = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div`
  display: flex;
  align-items: center;
  position: relative;

  i {
    position: absolute;
    left: 8px;
    top: 10px;
    color: #757575;
    font-size: 20px;
  }
`;
_c10 = InputBox;
const Input = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].input`
  width: 266px;
  height: 40px;
  padding: 8px 9px 10px 40px;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  line-height: 20px;
  font-size: 15px;

  &::placeholder {
    color: #dbdbdb;
  }

  &:focus {
    outline: none;
  }
`;
_c11 = Input;
const BookMark = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div`
  width: 32px;
  height: 32px;
  text-align: center;
  border-radius: 100%;
  i {
    margin-top: 7px;
    font-size: 20px;
    color: #757575;
  }

  &:hover {
    background-color: #3fc5f0;

    i {
      color: #fff;
    }
  }
`;
_c12 = BookMark;
const Bell = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div`
  width: 32px;
  height: 32px;
  text-align: center;
  border-radius: 100%;
  i {
    margin-top: 5px;
    font-size: 22px;
    color: #757575;
  }

  &:hover {
    background-color: #3fc5f0;

    i {
      color: #fff;
    }
  }
`;
_c13 = Bell;
const ProfileBox = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button`
  display: flex;
  align-items: center;

  div {
    position: relative;
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
  i {
    margin-left: 4px;
  }
  &:hover {
    i {
      color: #3fc5f0;
    }
    div {
      border: 2px solid #3fc5f0;
    }
  }
`;
_c14 = ProfileBox;
const ProfileImg = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 32px;
  height: 32px;
  border-radius: 100%;
  transform: translate(-50%, -50%);
`;
_c15 = ProfileImg;
const ButtonBox = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;

  div {
    width: 1px;
    height: 15px;
    margin: 0 7px;
    background-color: #757575;
  }

  button {
    font-weight: 700;
    font-size: 15px;
    color: #757575;
  }
`;
_c16 = ButtonBox;
const PageList = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].aside`
  display: ${props => props.isDisplay ? 'block' : 'none'};
  position: absolute;
  top: 57px;
  left: -57px;
  width: 150px;
  height: 110px;
  padding: 10px;
  background: #fff;
  border-radius: 0.4em;
  border: 1px solid #ebebeb;
  box-shadow: 5px 5px 5px 5px #ededed;
  z-index: 1;

  &:before {
    content: '';
    position: absolute;
    top: -1px;
    left: 50%;
    width: 0;
    height: 0;
    border: 14px solid transparent;
    border-bottom-color: #ebebeb;
    border-top: 0;
    margin-left: -14px;
    margin-top: -14px;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 14px solid transparent;
    border-bottom-color: #fff;
    border-top: 0;
    margin-left: -14px;
    margin-top: -14px;
  }
`;
_c17 = PageList;
const MyPage = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p`
  padding: 10px 14px 11px;
  font-weight: 400;
  font-size: 15px;
  color: #424242;

  &:hover {
    background-color: #f7f8fa;
  }
`;
_c18 = MyPage;
const LogOut = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p`
  padding: 10px 14px 11px;
  font-weight: 400;
  font-size: 15px;
  color: #424242;

  &:hover {
    background-color: #f7f8fa;
  }
`;
_c19 = LogOut;
const Write = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button`
  width: 100px;
  height: 40px;
  border-radius: 12px;
  background-color: #3fc5f0;
  font-weight: 700;
  font-size: 16px;
  color: #fff;

  &:hover {
    transform: translateY(-1.5px);
  }
`;
_c20 = Write;
const MenuList = [{
  id: 0,
  name: '홈',
  path: '/'
}, {
  id: 1,
  name: '팔로잉',
  path: '/'
}, {
  id: 2,
  name: '사진',
  path: '/'
}, {
  id: 3,
  name: '집들이',
  path: '/writing'
}, {
  id: 4,
  name: '노하우',
  path: '/'
}, {
  id: 5,
  name: '전문가집들이',
  path: '/'
}, {
  id: 6,
  name: '셀프가이드',
  path: '/'
}, {
  id: 7,
  name: '질문과답변',
  path: '/'
}];
/* harmony default export */ __webpack_exports__["default"] = (Nav);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20;

__webpack_require__.$Refresh$.register(_c, "Nav");
__webpack_require__.$Refresh$.register(_c2, "Container");
__webpack_require__.$Refresh$.register(_c3, "Wrapper");
__webpack_require__.$Refresh$.register(_c4, "Logo");
__webpack_require__.$Refresh$.register(_c5, "Catagory");
__webpack_require__.$Refresh$.register(_c6, "MenuContainer");
__webpack_require__.$Refresh$.register(_c7, "MenuItem");
__webpack_require__.$Refresh$.register(_c8, "Menu");
__webpack_require__.$Refresh$.register(_c9, "SmallWrapper");
__webpack_require__.$Refresh$.register(_c10, "InputBox");
__webpack_require__.$Refresh$.register(_c11, "Input");
__webpack_require__.$Refresh$.register(_c12, "BookMark");
__webpack_require__.$Refresh$.register(_c13, "Bell");
__webpack_require__.$Refresh$.register(_c14, "ProfileBox");
__webpack_require__.$Refresh$.register(_c15, "ProfileImg");
__webpack_require__.$Refresh$.register(_c16, "ButtonBox");
__webpack_require__.$Refresh$.register(_c17, "PageList");
__webpack_require__.$Refresh$.register(_c18, "MyPage");
__webpack_require__.$Refresh$.register(_c19, "LogOut");
__webpack_require__.$Refresh$.register(_c20, "Write");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Pages/FeedDetail/CommentBox.js":
/*!********************************************!*\
  !*** ./src/Pages/FeedDetail/CommentBox.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/mac/Desktop/WECODE/21-2nd-YourHouseToday-frontend/src/Pages/FeedDetail/CommentBox.js",
    _s = __webpack_require__.$Refresh$.signature();






const CommentBox = ({
  id,
  key,
  addEditComment,
  createDate,
  comment,
  formOpen,
  edittingCommentBoxId,
  formClose,
  isLoggedIn,
  onRemove
}) => {
  _s();

  const [newComment, setNewComment] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(comment.userComment);

  const handleEdit = e => {
    setNewComment(e.target.value);
    addEditComment(e.target.value, id);
  };

  const handleDate = data => {
    createDate(data);
  };

  const handleOnRemove = () => {
    onRemove(id);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
      className: "commentLi",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(CommentContainer, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
          src: "Images/FeedDetail/profile.png",
          alt: "profile"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "commentContents",
          children: [edittingCommentBoxId !== comment.id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(CommentTop, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
              className: "commentUserId",
              children: comment.user
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
              className: "commentText",
              children: comment.text
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 15
          }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(FormEdit, {
            onBlur: formClose,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
              className: "commentUserId",
              children: comment.user
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
              value: newComment,
              onChange: e => handleEdit(e)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(CommentBtn, {
              comment: comment,
              onClick: formClose,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                children: "\uD655\uC778"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 15
          }, undefined), edittingCommentBoxId !== comment.id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(CommentInfo, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
              className: "commentDate",
              children: () => handleDate()
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
              class: "bullit",
              children: '・'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
              children: "\uC88B\uC544\uC694"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
              class: "bullit",
              children: '・'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
              children: "\uB2F5\uAE00\uB2EC\uAE30"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 17
            }, undefined), isLoggedIn === true && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                class: "bullit",
                children: '・'
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 21
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
                onClick: () => formOpen(comment.id),
                children: "\uC218\uC815\uD558\uAE30"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 21
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                class: "bullit",
                children: '・'
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 21
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
                onClick: () => handleOnRemove(id),
                children: "\uC0AD\uC81C\uD558\uAE30"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 21
              }, undefined)]
            }, void 0, true)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 15
          }, undefined) : null]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

_s(CommentBox, "KtzA/Z5nEI9FkKSAxmeaZL2Re18=");

_c = CommentBox;
const CommentContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  flex-direction: row;
  height: 30px;

  .commentUserId {
    display: flex;
    font-weight: 700;
    padding-right: 16px;
    align-items: flex-start;
  }

  .commentText {
    display: flex;
    align-items: flex-start;
  }

  img {
    display: flex;
    margin-right: 10px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;
_c2 = CommentContainer;
const CommentInfo = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  height: 19px;
  flex-direction: row;
  align-items: center;
  & .commentDate {
    padding-top: 5px;
    font-size: 12px;
    padding-right: 6px;
    color: #757575;
  }
  span {
    display: flex;
    color: #757575;
    font-size: 12px;
  }
  button {
    display: flex;
    color: #757575;
    font-size: 12px;
    font-weight: 600;
  }
`;
_c3 = CommentInfo;
const CommentTop = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  flex-direction: row;
  span {
    display: flex;
  }
  button {
    display: flex;
  }
`;
_c4 = CommentTop;
const FormEdit = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  background-color: none;
  display: flex;
  & .commentUserId {
    display: flex;
    font-weight: 700;
    padding-right: 16px;
    align-items: center;
  }
  input {
    display: flex;
    outline: none;
    min-width: 400px;
    width: 550px;
    height: 30px;
    overflow: hidden;
    word-wrap: break-word;
    box-sizing: border-box;
    border-top: 1px solid #ededed;
    border-left: 1px solid #ededed;
    border-right: none;
    border-bottom: 1px solid #ededed;
    border-radius: 5px 0px 5px 5px;
    text-indent: 8px;
  }
`;
_c5 = FormEdit;
const CommentBtn = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  padding: 8px 15px 8px 0;
  margin: 0 -7.5px;
  height: 30px;
  border-top: 1px solid #ededed;
  border-right: 1px solid #ededed;
  border-bottom: 1px solid #ededed;
  border-left: none;
  border-radius: 0px 5px 5px 0px;
  color: #35c5f0;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  span {
    opacity: ${props => props.comment.length > 0 ? 1 : 0.5};
  }
`;
_c6 = CommentBtn;
/* harmony default export */ __webpack_exports__["default"] = (CommentBox);

var _c, _c2, _c3, _c4, _c5, _c6;

__webpack_require__.$Refresh$.register(_c, "CommentBox");
__webpack_require__.$Refresh$.register(_c2, "CommentContainer");
__webpack_require__.$Refresh$.register(_c3, "CommentInfo");
__webpack_require__.$Refresh$.register(_c4, "CommentTop");
__webpack_require__.$Refresh$.register(_c5, "FormEdit");
__webpack_require__.$Refresh$.register(_c6, "CommentBtn");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Pages/FeedDetail/Content.js":
/*!*****************************************!*\
  !*** ./src/Pages/FeedDetail/Content.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/mac/Desktop/WECODE/21-2nd-YourHouseToday-frontend/src/Pages/FeedDetail/Content.js";




class Content extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const {
      img,
      text
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ContentWrap, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
        alt: "content",
        src: img
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ContentsText, {
        children: [" ", text, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this);
  }

}

const ContentWrap = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  margin: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  img {
    display: flex;
    width: 100%;
  }
`;
_c = ContentWrap;
const ContentsText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  margin: 30px 0 30px 0;
  display: flex;
  width: 100%;
  white-space: pre-line;
`;
_c2 = ContentsText;
/* harmony default export */ __webpack_exports__["default"] = (Content);

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "ContentWrap");
__webpack_require__.$Refresh$.register(_c2, "ContentsText");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Pages/FeedDetail/FeedDetail.js":
/*!********************************************!*\
  !*** ./src/Pages/FeedDetail/FeedDetail.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _CommentBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CommentBox */ "./src/Pages/FeedDetail/CommentBox.js");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Content */ "./src/Pages/FeedDetail/Content.js");
/* harmony import */ var _Feeds__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Feeds */ "./src/Pages/FeedDetail/Feeds.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config */ "./src/config.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/mac/Desktop/WECODE/21-2nd-YourHouseToday-frontend/src/Pages/FeedDetail/FeedDetail.js",
    _s = __webpack_require__.$Refresh$.signature();














const createDate = () => {
  const today = new Date();
  const timeValue = new Date();
  const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
  if (betweenTime < 1) return '방금전';

  if (betweenTime < 60) {
    return `${betweenTime}분전`;
  }

  const betweenTimeHour = Math.floor(betweenTime / 60);

  if (betweenTimeHour < 24) {
    return `${betweenTimeHour}시간전`;
  }

  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);

  if (betweenTimeDay < 365) {
    return `${betweenTimeDay}일전`;
  }
};

function FeedDetail() {
  _s();

  var _related_user$, _related_user$2;

  const [feedData, setFeedData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [commentLists, setCommentLists] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [comment, setComment] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [editComment, setEditComment] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [edittingCommentBoxId, setEdittingCommentBoxId] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [isLoggedIn, setIsLoggedIn] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [likeBtn, setLikeBtn] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [feedsList, setFeedsList] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [items, setItems] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(10);
  let location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useLocation"])();
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  const match = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useRouteMatch"])();
  const feedId = match.params.id;
  console.log(match);

  const formOpen = id => {
    setEdittingCommentBoxId(id);
  };

  const formClose = () => {
    setEdittingCommentBoxId('');
  };

  const LIMIT = 5;

  const infiniteScroll = () => {
    let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    let scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    let clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      setItems(items + 10);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetch(`${_config__WEBPACK_IMPORTED_MODULE_6__["API"]}/postings`).then(res => res.json()).then(res => {
      console.log(res);
      setFeedData(res.postings);
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetch(`${_config__WEBPACK_IMPORTED_MODULE_6__["API"]}/comments?posting_id=${feedId}`, {
      method: 'GET'
    }).then(res => res.json()).then(data => {
      setCommentLists(data.commemt);
      setEditComment(data.userComment);
      setIsLoggedIn(true);
    });
    window.addEventListener('scroll', infiniteScroll, true);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetch(`${_config__WEBPACK_IMPORTED_MODULE_6__["API"]}/postings?`, {
      method: 'GET'
    }).then(res => res.json()).then(res => {
      let result = res.result.slice(0, items);
      setFeedsList([...feedsList, ...result]);
    });
  }, [items]);

  const handleClickLike = () => {
    if (!localStorage.getItem('token')) {
      alert('로그인 후 사용이 가능합니다.');
      this.props.history.push('/login');
      return;
    }

    if (!likeBtn) {
      fetch(`${_config__WEBPACK_IMPORTED_MODULE_6__["API"]}/postings/like/${feedId}`, {
        method: 'POST',
        headers: {
          Authorization: localStorage.getItem('token')
        },
        body: JSON.stringify({
          user_id: commentLists.userId,
          posting_id: feedData.profileId
        })
      }).then(response => response.json()).then(result => {
        if (result.message === 'SUCCESS') {
          alert('찜하기 성공.');
        } else {
          alert('찜하기 실패');
        }
      });
      setLikeBtn(true);
    } else {
      fetch(`${_config__WEBPACK_IMPORTED_MODULE_6__["API"]}/postings/like/${feedId}`, {
        method: 'delete',
        headers: {
          Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjJ9.W0grRe41iPCBjg0AB4vIgyClD0YmHuU9HWhBRW7k_Vc'
        }
      }).then(response => response);
    }
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      addComment();
    }
  };

  const handleClickBtn = id => {
    const query = `?limit=${LIMIT}&offset=${id * LIMIT}`;
    history.push(`/feedDetail${query}`);
    console.log(query);
  };

  const addEditComment = (contents, id) => {
    setCommentLists(commentLists.map(comment => {
      if (comment.id === id) {
        return { ...comment,
          userComment: contents
        };
      } else {
        return comment;
      }
    }));
  };

  const onRemove = id => {
    setCommentLists(commentLists.filter(comment => comment.id !== id));
  };

  const addComment = () => {
    if (isLoggedIn) {
      setCommentLists([{
        userId: 'blackCow',
        userComment: comment,
        Date: createDate()
      }, ...commentLists]);
      setComment('');
    } else {
      alert('로그인 후 사용이 가능합니다.');
    }
  };

  console.log(feedData);
  if (!feedData) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
    children: "loading"
  }, void 0, false);
  const {
    posting: {
      size,
      style,
      housing_type,
      image,
      text,
      like,
      view,
      related_user
    }
  } = feedData;
  console.log(feedData);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(commentLists.length / 5); i++) {
    pageNumbers.push(i);
  }

  console.log(pageNumbers);
  const currentCommentPage = location.search ? qs__WEBPACK_IMPORTED_MODULE_8___default.a.parse(location.search.slice(1)).offset / 5 : 1;
  console.log(commentLists);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(Container, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(Section, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(Article, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(ArticleWrap, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(DetailTopinfo, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(TopTag, {
                  children: size
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 229,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(TopTag, {
                  children: style
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 230,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(TopTag, {
                  children: housing_type
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 231,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 228,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(TopDate, {
                children: createDate()
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 233,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 227,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_Content__WEBPACK_IMPORTED_MODULE_4__["default"], {
              img: image,
              text: text
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 235,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
              className: "buttonContainer",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
                to: `main/feeds=${size}`,
                className: "tagBtn",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
                  children: "# "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 239,
                  columnNumber: 19
                }, this), size]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 238,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
                to: `main/feeds=${style}`,
                className: "tagBtn",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
                  children: "# "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 243,
                  columnNumber: 19
                }, this), style]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 242,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
                to: `main/feeds=${housing_type}`,
                className: "tagBtn",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
                  children: "# "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 247,
                  columnNumber: 19
                }, this), housing_type]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 246,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 237,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(CountWrap, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
                className: "viewCount",
                children: ["\uC870\uD68C ", view === null || view === void 0 ? void 0 : view.toLocaleString()]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 253,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
                class: "bullit",
                children: '・'
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 254,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
                className: "commentCount",
                children: ["\uB313\uAE00 ", commentLists.length]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 255,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
                class: "bullit",
                children: '・'
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 256,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
                classname: "shareCount",
                children: "\uACF5\uC720 18"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 257,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
                class: "bullit",
                children: '・'
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 258,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
                children: "\uC2E0\uACE0"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 259,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 252,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(CommentWrap, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(CommentContainer, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(CountComment, {
                  children: ["\uB313\uAE00 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
                    children: [" ", commentLists.length, " "]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 265,
                    columnNumber: 24
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 264,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(LoginComment, {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("img", {
                    src: "Images/FeedDetail/profile.png",
                    alt: "profile"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 268,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
                    className: "commentInput",
                    placeholder: "\uCE6D\uCC2C\uACFC \uACA9\uB824\uC758 \uB313\uAE00\uC740 \uC791\uC131\uC790\uC5D0\uAC8C \uD070 \uD798\uC774 \uB429\uB2C8\uB2E4 :)",
                    type: "text",
                    value: comment,
                    onKeyPress: handleKeyPress,
                    onChange: e => setComment(e.target.value)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 272,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(CommentBtn, {
                    comment: comment,
                    onClick: comment => addComment(comment),
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
                      children: "\uB4F1\uB85D"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 284,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 280,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 267,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(CommentList, {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(CommentUl, {
                    children: commentLists === null || commentLists === void 0 ? void 0 : commentLists.map(comment => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_CommentBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
                      id: comment.id,
                      comment: comment,
                      createDate: createDate,
                      editComment: editComment,
                      addEditComment: addEditComment,
                      formOpen: formOpen,
                      edittingCommentBoxId: edittingCommentBoxId,
                      formClose: formClose,
                      isLoggedIn: isLoggedIn,
                      onRemove: onRemove
                    }, comment.id, false, {
                      fileName: _jsxFileName,
                      lineNumber: 290,
                      columnNumber: 25
                    }, this))
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 288,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 287,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(PageNum, {
                  children: pageNumbers.map(page => {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(ClickBtn, {
                      type: "button",
                      isSelected: page === currentCommentPage,
                      onClick: () => handleClickBtn(page),
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
                        children: page
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 314,
                        columnNumber: 27
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 309,
                      columnNumber: 25
                    }, this);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 306,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 263,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 262,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(Aside, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(AsideContainer, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(LikeBtn, {
              onClick: () => handleClickLike(),
              children: likeBtn === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("img", {
                  src: "../Images/FeedDetail/strokeLike.png",
                  alt: "unlike"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 328,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
                  children: like
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 332,
                  columnNumber: 21
                }, this)]
              }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("img", {
                  src: "../Images/FeedDetail/fillLike.png",
                  alt: "like"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 336,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
                  children: like + 1
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 340,
                  columnNumber: 21
                }, this)]
              }, void 0, true)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 325,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(UserProfile, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(ProfileImg, {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("img", {
                  src: (_related_user$ = related_user[0]) === null || _related_user$ === void 0 ? void 0 : _related_user$.image_url,
                  alt: "userProfile"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 347,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 346,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(ProfileInfo, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
                  className: "id",
                  children: related_user[0].nickname
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 350,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
                  children: (_related_user$2 = related_user[0]) === null || _related_user$2 === void 0 ? void 0 : _related_user$2.introduction
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 351,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 349,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 345,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 324,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 323,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(Others, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(TextBox, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h2", {
          children: "\uC720\uC800\uB4E4\uC758 \uBE44\uC2B7\uD55C \uCF58\uD150\uCE20"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 360,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 359,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(FeedsWrap, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_Feeds__WEBPACK_IMPORTED_MODULE_5__["default"], {
          feedsList: feedsList
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 363,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 362,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(FeedDetail, "ZWwQAJp7+BqPr7Z57Upt3BnFWoo=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useLocation"], react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"], react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useRouteMatch"]];
});

_c = FeedDetail;
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 200px;
`;
_c2 = Container;
const Section = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #f5f5f5;
  width: 100%;
  height: 100%;
`;
_c3 = Section;
const Others = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #f5f5f5;
  width: 100%;
  height: 100%;
`;
_c4 = Others;
const TextBox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  width: 1200px;
  h2 {
    margin-left: 13.5px;
    margin-top: 30px;
    font-size: 18px;
    font-weight: 700;
  }
`;
_c5 = TextBox;
const ArticleWrap = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  width: 770px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  letter-spacing: -0.4px;
  padding: 0 10px 0px 10px;
  line-height: 15px;
`;
_c6 = ArticleWrap;
const CountWrap = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  align-items: center;
  margin-top: 60px;
  color: dimgray;
  font-size: 14px;
  span {
    padding-right: 12px;
  }
  button {
    display: flex;
    font-size: 14px;
    color: dimgray;
    opacity: 50%;
  }
`;
_c7 = CountWrap;
const FeedsWrap = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  margin-top: 30px;
  display: inline-block;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #f5f5f5;
  width: 1200px;
  height: 100%;
`;
_c8 = FeedsWrap;
const DetailTopinfo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  color: DimGray;
  width: 100%;
  margin: 40px 0 40px 0px;
  height: 16px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;
_c9 = DetailTopinfo;
const TopTag = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span`
  padding-right: 8px;
  margin-left: 8px;
  border-right: 1px solid DimGray;
  :last-child {
    border: none;
  }
  :first-child {
    margin: 0;
  }
`;
_c10 = TopTag;
const TopDate = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  padding-right: 8px;
  margin-left: 8px;
`;
_c11 = TopDate;
const CommentWrap = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  margin-top: 60px;
  padding: 60px 0px 30px 0px;
  border-top: 1px solid #f5f5f5;
  display: flex;
`;
_c12 = CommentWrap;
const CommentContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  flex-direction: column;
`;
_c13 = CommentContainer;
const CountComment = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: 700;
  color: #333333;
  span {
    padding-left: 5px;
    color: #35c5f0;
  }
`;
_c14 = CountComment;
const LoginComment = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  height: 38px;
  display: flex;
  align-content: center;
  justify-content: center;
  text-align: center;
  img {
    margin-top: 4px;
    margin-right: 10px;
    width: 30px;
    height: 30px;
    border-color: burlywood;
    border-radius: 50%;
  }
  input {
    display: flex;
    outline: none;
    min-width: 400px;
    width: 667px;
    height: 38px;
    overflow: hidden;
    word-wrap: break-word;
    box-sizing: border-box;
    border-top: 1px solid #ededed;
    border-left: 1px solid #ededed;
    border-right: none;
    border-bottom: 1px solid #ededed;
    border-radius: 5px 0px 5px 5px;
    text-indent: 8px;
    &::placeholder {
      text-indent: 8px;
    }
  }
`;
_c15 = LoginComment;
const Article = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  padding: 0 auto;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 1256px;
  height: 100%;

  & .tagBtn {
    background-color: #f5f5f5;
    border-radius: 5px;
    height: 32px;
    padding: 4px 10px 4px 10px;
    margin-right: 10px;
    font-size: 16px;
    color: DimGray;
    span {
      font-size: 14px;
      color: Silver;
    }
    &:hover {
      background-color: #ededed;
    }
    text-decoration: none;
  }
`;
_c16 = Article;
const CommentBtn = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  padding: 12px 15px 7px 0;
  margin: 0 -7.5px;
  height: 38px;
  border-top: 1px solid #ededed;
  border-right: 1px solid #ededed;
  border-bottom: 1px solid #ededed;
  border-left: none;
  border-radius: 0px 5px 5px 0px;
  color: #35c5f0;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  span {
    opacity: ${props => props.comment.length > 0 ? 1 : 0.5};
  }
`;
_c17 = CommentBtn;
const CommentList = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  flex-direction: row;
`;
_c18 = CommentList;
const CommentUl = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  list-style-type: none;
  .commentLi {
    display: flex;
    margin-bottom: 30px;
  }
`;
_c19 = CommentUl;
const PageNum = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button`
  display: flex;
  width: 100%;
  justify-content: center;
  text-align: center;
  padding-top: 30px;
  padding-bottom: 30px;

  span {
    padding: 0;
    text-align: center;
    display: flex;
    padding: 0;
    font-size: 16px;
    font-weight: 500;
  }
`;
_c20 = PageNum;
const ClickBtn = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 30px;
  height: 30px;
  margin: 4px;
  padding: 0;
  border-radius: 10px;
  background-color: ${({
  isSelected
}) => isSelected ? '#35c5f0' : 'none'};
  color: ${({
  isSelected
}) => isSelected ? 'white' : '#333333'};
`;
_c21 = ClickBtn;
const Aside = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  border-left: 1px solid #f5f5f5;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;
  height: 1800px;
`;
_c22 = Aside;
const LikeBtn = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 280px;
  height: 60px;
  margin-top: 60px;
  color: dimgray;
  background-color: #f5f5f5;
  border-radius: 10px;
  margin-left: 16px;
  img {
    margin-right: 16px;
    width: 24px;
    height: 24px;
  }
`;
_c23 = LikeBtn;
const AsideContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  flex-direction: column;
`;
_c24 = AsideContainer;
const UserProfile = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 100px;
  margin-left: 16px;
`;
_c25 = UserProfile;
const ProfileImg = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  justify-content: center;
  align-items: center;
  width: 45px;
  width: 45px;
  img {
    width: 45px;
    width: 45px;
  }
`;
_c26 = ProfileImg;
const ProfileInfo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  padding-left: 16px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  & .id {
    font-size: 18px;
    font-weight: 700;
  }
`;
_c27 = ProfileInfo;
/* harmony default export */ __webpack_exports__["default"] = (_c28 = Object(react_router__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(FeedDetail));

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23, _c24, _c25, _c26, _c27, _c28;

__webpack_require__.$Refresh$.register(_c, "FeedDetail");
__webpack_require__.$Refresh$.register(_c2, "Container");
__webpack_require__.$Refresh$.register(_c3, "Section");
__webpack_require__.$Refresh$.register(_c4, "Others");
__webpack_require__.$Refresh$.register(_c5, "TextBox");
__webpack_require__.$Refresh$.register(_c6, "ArticleWrap");
__webpack_require__.$Refresh$.register(_c7, "CountWrap");
__webpack_require__.$Refresh$.register(_c8, "FeedsWrap");
__webpack_require__.$Refresh$.register(_c9, "DetailTopinfo");
__webpack_require__.$Refresh$.register(_c10, "TopTag");
__webpack_require__.$Refresh$.register(_c11, "TopDate");
__webpack_require__.$Refresh$.register(_c12, "CommentWrap");
__webpack_require__.$Refresh$.register(_c13, "CommentContainer");
__webpack_require__.$Refresh$.register(_c14, "CountComment");
__webpack_require__.$Refresh$.register(_c15, "LoginComment");
__webpack_require__.$Refresh$.register(_c16, "Article");
__webpack_require__.$Refresh$.register(_c17, "CommentBtn");
__webpack_require__.$Refresh$.register(_c18, "CommentList");
__webpack_require__.$Refresh$.register(_c19, "CommentUl");
__webpack_require__.$Refresh$.register(_c20, "PageNum");
__webpack_require__.$Refresh$.register(_c21, "ClickBtn");
__webpack_require__.$Refresh$.register(_c22, "Aside");
__webpack_require__.$Refresh$.register(_c23, "LikeBtn");
__webpack_require__.$Refresh$.register(_c24, "AsideContainer");
__webpack_require__.$Refresh$.register(_c25, "UserProfile");
__webpack_require__.$Refresh$.register(_c26, "ProfileImg");
__webpack_require__.$Refresh$.register(_c27, "ProfileInfo");
__webpack_require__.$Refresh$.register(_c28, "%default%");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Pages/FeedDetail/Feeds.js":
/*!***************************************!*\
  !*** ./src/Pages/FeedDetail/Feeds.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/mac/Desktop/WECODE/21-2nd-YourHouseToday-frontend/src/Pages/FeedDetail/Feeds.js",
    _s = __webpack_require__.$Refresh$.signature();








const Feeds = ({
  feedsList
}) => {
  _s();

  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: feedsList.length && feedsList.map(feed => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(FeedsWrap, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", {
        onClick: () => history.push(`FeedDetail/${feed.id}`),
        alt: "contents",
        src: feed.img
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }, undefined))
  }, void 0, false);
};

_s(Feeds, "9cZfZ04734qoCGIctmKX7+sX6eU=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"]];
});

_c = Feeds;
const FeedsWrap = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: inline-block;
  position: relative;
  width: 250px;
  max-width: 250px;
  max-height: 250px;
  margin: 13.5px;
  border-radius: 10px;
  overflow: hidden;
  flex-wrap: wrap;
  &:nth-child(4n) {
    flex-basis: 0;
  }

  img {
    position: relative;
    width: 250px;
    max-width: 100%;
    height: 250px;
    margin-bottom: 8px;
    border-radius: 10px;
    object-fit: cover;
    cursor: pointer;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    &:hover {
      -webkit-transform: scale(1.05);
      transform: scale(1.05);
    }
  }
`;
_c2 = FeedsWrap;
/* harmony default export */ __webpack_exports__["default"] = (_c3 = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Feeds));

var _c, _c2, _c3;

__webpack_require__.$Refresh$.register(_c, "Feeds");
__webpack_require__.$Refresh$.register(_c2, "FeedsWrap");
__webpack_require__.$Refresh$.register(_c3, "%default%");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Pages/Login/EditUserName.js":
/*!*****************************************!*\
  !*** ./src/Pages/Login/EditUserName.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./src/config.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/mac/Desktop/WECODE/21-2nd-YourHouseToday-frontend/src/Pages/Login/EditUserName.js",
    _s = __webpack_require__.$Refresh$.signature();







function EditUserName() {
  _s();

  const [userNickName, setUserNickName] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(JSON.parse(localStorage.getItem('user-info')).nickname);
  const [caution, setCaution] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [isOverLap, setIsOverLap] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [suggestName, setSuggestName] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();

  const validationCheck = e => {
    setUserNickName(e.target.value);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (userNickName.length === 0) {
      setCaution('필수 항목 입니다.');
      setIsOverLap(false);
    } else if (userNickName.length === 1) {
      setCaution('2자 이상 입력해주세요');
      setIsOverLap(false);
    } else if (isOverLap) {
      setCaution('사용 중인 닉네임입니다.');
    } else {
      setCaution('');
    }
  }, [userNickName, isOverLap]);

  const checkId = () => {
    if (userNickName.length) {
      fetch(`${_config__WEBPACK_IMPORTED_MODULE_3__["GET_EDITINFO_API"]}`, {
        method: 'post',
        body: JSON.stringify({
          nickname: userNickName
        })
      }).then(res => res.json()).then(res => {
        if (res.message === 'NICKNAME ALEADY EXISTS') {
          setSuggestName(res.recommend_nickname);
          setIsOverLap(true);
        } else {
          setIsOverLap(false);
        }
      });
    }
  };

  const chooseName = () => {
    setUserNickName(suggestName);
    setIsOverLap(false);
  };

  const handleSubmit = () => {
    const userInfo = JSON.parse(localStorage.getItem('user-info'));
    fetch(`${_config__WEBPACK_IMPORTED_MODULE_3__["GET_SIGNUP_API"]}`, {
      method: 'post',
      body: JSON.stringify({
        id: userInfo.id,
        profile_image: userInfo.profile_image,
        nickname: userNickName,
        email: userInfo.email
      })
    }).then(res => {
      if (res.status !== 201) return alert('페이지 로드에 실패 했습니다.');
      alert('로그인 성공!');
      return res.json();
    }).then(res => {
      localStorage.setItem('user-info', JSON.stringify(res));
      localStorage.setItem('access_token', res.self_token);
      history.push('/');
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Container, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Wrapper, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Header, {
        children: "\uCD94\uAC00 \uC815\uBCF4 \uC785\uB825"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(InputBox, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(InputNickName, {
          value: userNickName,
          length: userNickName.length,
          onChange: validationCheck,
          onBlur: checkId
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Caution, {
          children: caution
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, this), isOverLap && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(SuggestBox, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Suggest, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
            children: ["'", suggestName, "'"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 15
          }, this), "\uC774 \uBCC4\uBA85\uC740 \uC5B4\uB5A0\uC2E0\uAC00\uC694?", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 15
          }, this), " \uBCC4\uBA85\uC740 \uC5B8\uC81C\uB4E0 \uC218\uC815\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(UseSuggest, {
          onClick: chooseName,
          children: "\uC0AC\uC6A9\uD558\uAE30"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Submit, {
        onClick: handleSubmit,
        children: "\uC644\uB8CC"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 5
  }, this);
}

_s(EditUserName, "XbRFs5ECD6Lg6sPiNYXEWKosifc=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"]];
});

_c = EditUserName;
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  width: 100vw;
  height: 100%;
`;
_c2 = Container;
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 360px;
  margin: 200px auto;
`;
_c3 = Wrapper;
const Header = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p`
  font-weight: 700;
  font-size: 20px;
  color: #292929;
`;
_c4 = Header;
const InputBox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
_c5 = InputBox;
const InputNickName = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input`
  width: 320px;
  height: 40px;
  margin-top: 30px;
  padding-left: 20px;
  border: 1px solid ${props => props.length < 2 ? '#ff7777' : '#ededed'};
  border-radius: 4px;
  outline: none;

  &:focus {
    box-shadow: 2px 2px 4px 2px rgba(55, 197, 245, 0.4);
  }
`;
_c6 = InputNickName;
const Caution = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span`
  margin-top: 17px;
  font-size: 13px;
  color: #ff7777;
`;
_c7 = Caution;
const SuggestBox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 320px;
  height: 64px;
  margin-top: 20px;
  border-radius: 4px;
  background-color: #f5f5f5;
`;
_c8 = SuggestBox;
const Suggest = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p`
  margin-left: 25px;
  font-size: 13px;
  color: #424242;
  line-height: 20px;

  span {
    margin-right: 3px;
    font-weight: 700;
    color: #3fc5f0;
  }
`;
_c9 = Suggest;
const UseSuggest = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button`
  display: flex;
  align-items: center;
  height: 31px;
  margin-right: 25px;
  padding: 7px 12px;
  border-radius: 4px;
  background-color: #35c5f0;
  font-weight: 700;
  font-size: 14px;
  color: #fff;
`;
_c10 = UseSuggest;
const Submit = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button`
  width: 320px;
  height: 50px;
  margin-top: 10px;
  background-color: #3fc5f0;
  border-radius: 4px;
  font-weight: 70;
  font-size: 17px;
  color: white;

  &:hover {
    background-color: #09addb;
  }

  &:active {
    transform: scale(0.98);
  }
`;
_c11 = Submit;
/* harmony default export */ __webpack_exports__["default"] = (EditUserName);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;

__webpack_require__.$Refresh$.register(_c, "EditUserName");
__webpack_require__.$Refresh$.register(_c2, "Container");
__webpack_require__.$Refresh$.register(_c3, "Wrapper");
__webpack_require__.$Refresh$.register(_c4, "Header");
__webpack_require__.$Refresh$.register(_c5, "InputBox");
__webpack_require__.$Refresh$.register(_c6, "InputNickName");
__webpack_require__.$Refresh$.register(_c7, "Caution");
__webpack_require__.$Refresh$.register(_c8, "SuggestBox");
__webpack_require__.$Refresh$.register(_c9, "Suggest");
__webpack_require__.$Refresh$.register(_c10, "UseSuggest");
__webpack_require__.$Refresh$.register(_c11, "Submit");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Pages/Login/Login.js":
/*!**********************************!*\
  !*** ./src/Pages/Login/Login.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./src/config.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/mac/Desktop/WECODE/21-2nd-YourHouseToday-frontend/src/Pages/Login/Login.js",
    _s = __webpack_require__.$Refresh$.signature();







function Login({
  isOpen,
  setIsOpen,
  setGetInfo,
  setGetToken
}) {
  _s();

  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  const loginModal = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const loginWithKakao = () => {
    window.Kakao.init("7a2c275840c65de07e0b1b5b8be8b435");
    setIsOpen(false);
    window.Kakao.Auth.login({
      success: auth => {
        fetch(`${_config__WEBPACK_IMPORTED_MODULE_3__["GET_SIGNIN_API"]}`, {
          method: 'post',
          headers: {
            Authorization: auth.access_token
          }
        }).then(res => res.json()).then(res => {
          if (res.self_token) {
            localStorage.setItem('user-info', JSON.stringify(res));
            localStorage.setItem('access_token', res.self_token);
            setGetInfo(JSON.parse(localStorage.getItem('user-info')));
            setGetToken(localStorage.getItem('access_token'));
          } else {
            localStorage.setItem('user-info', JSON.stringify(res));
            history.push('/editusername');
          }
        });
      },
      fail: err => {
        console.error(err);
      }
    });
  };

  const handleClickOutside = ({
    target
  }) => {
    if (loginModal.current === null) return;

    if (isOpen && !loginModal.current.contains(target)) {
      return setIsOpen(false);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Modal, {
    isDisplay: isOpen,
    ref: loginModal,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Subject, {
      children: "\uB85C\uADF8\uC778"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(InputBox, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
        placeholder: "\uC544\uC774\uB514"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
        placeholder: "\uBE44\uBC00\uBC88\uD638"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(LoginBtn, {
      children: "\uB85C\uADF8\uC778"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Social, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
        children: "SNS\uACC4\uC815\uC73C\uB85C \uAC04\uD3B8 \uB85C\uADF8\uC778/\uD68C\uC6D0\uAC00\uC785"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Logo, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
            alt: "\uD398\uC774\uC2A4\uBD81\uB85C\uACE0",
            src: "/Images/Social/facebook_logo.jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
          onClick: loginWithKakao,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
            alt: "\uCE74\uCE74\uC624\uB85C\uACE0",
            src: "/Images/Social/kakaotalk_logo.jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
            alt: "\uB77C\uC778\uB85C\uACE0",
            src: "/Images/Social/Line_logo.jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }, this);
}

_s(Login, "Yc2uIqi51AVDUQdL//PIGIQuCso=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"]];
});

_c = Login;
const Modal = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: ${props => props.isDisplay ? 'block' : 'none'};
  position: relative;
  top: -40px;
  left: 358px;
  width: 400px;
  height: 450px;
  background: #fff;
  border-radius: 0.4em;
  border: 1px solid #ebebeb;
  box-shadow: 5px 5px 5px 5px #ededed;

  &:before {
    content: '';
    position: absolute;
    top: -1px;
    left: 50%;
    width: 0;
    height: 0;
    border: 16px solid transparent;
    border-bottom-color: #ebebeb;
    border-top: 0;
    margin-left: -16px;
    margin-top: -16px;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 16px solid transparent;
    border-bottom-color: #fff;
    border-top: 0;
    margin-left: -16px;
    margin-top: -16px;
  }
`;
_c2 = Modal;
const Subject = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p`
  margin: 25px;
  font-weight: 700;
  font-size: 25px;
  color: #424242;
`;
_c3 = Subject;
const InputBox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 350px;
    height: 55px;
    margin-top: 15px;
    padding-left: 20px;
    border: 1px solid #ededed;
    border-radius: 4px;
    outline: none;
    font-size: 15px;

    &::placeholder {
      color: #dbdbdb;
    }

    &:focus {
      box-shadow: 5px 5px 5px 2px #dbdbdb;
    }
  }
`;
_c4 = InputBox;
const LoginBtn = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button`
  width: 350px;
  height: 50px;
  margin: 15px 0px 0px 24px;
  background-color: #35c5f0;
  border-radius: 4px;
  font-size: 15px;
  color: #fff;

  &:hover {
    transform: translateY(-1.5px);
  }
`;
_c5 = LoginBtn;
const Social = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  span {
    font-size: 12px;
    color: #757575;
  }
`;
_c6 = Social;
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin-top: 15px;

  img {
    width: 63px;

    &:hover {
      cursor: pointer;
    }
  }
`;
_c7 = Logo;
/* harmony default export */ __webpack_exports__["default"] = (Login);

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

__webpack_require__.$Refresh$.register(_c, "Login");
__webpack_require__.$Refresh$.register(_c2, "Modal");
__webpack_require__.$Refresh$.register(_c3, "Subject");
__webpack_require__.$Refresh$.register(_c4, "InputBox");
__webpack_require__.$Refresh$.register(_c5, "LoginBtn");
__webpack_require__.$Refresh$.register(_c6, "Social");
__webpack_require__.$Refresh$.register(_c7, "Logo");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Pages/Main/Feeds.js":
/*!*********************************!*\
  !*** ./src/Pages/Main/Feeds.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./src/config.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/mac/Desktop/WECODE/21-2nd-YourHouseToday-frontend/src/Pages/Main/Feeds.js",
    _s = __webpack_require__.$Refresh$.signature();








function Feeds(props) {
  _s();

  const [isHover, setIsHover] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [likeCount, setLikeCount] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.data.heartCount);
  const [isLike, setIsLike] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  function handleToggle() {
    setIsHover(isHover => !isHover);
  }

  const {
    profileImage,
    profileName,
    introduce,
    title,
    cardImage,
    viewCount,
    commentCount,
    writerImage,
    writerName,
    commentContent,
    id
  } = props.data;

  function handleLike() {
    setIsLike(isLike => !isLike);
    isLike ? setLikeCount(likeCount => likeCount - 1) : setLikeCount(likeCount => likeCount + 1);
    isLike ? fetch(`${_config__WEBPACK_IMPORTED_MODULE_3__["API"]}/postings/like/${id}`, {
      method: 'delete',
      headers: {
        Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjJ9.W0grRe41iPCBjg0AB4vIgyClD0YmHuU9HWhBRW7k_Vc'
      }
    }).then(response => response) : fetch(`${_config__WEBPACK_IMPORTED_MODULE_3__["API"]}/postings/like/${id}`, {
      method: 'post',
      headers: {
        Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjJ9.W0grRe41iPCBjg0AB4vIgyClD0YmHuU9HWhBRW7k_Vc'
      }
    }).then(response => response);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CardFeed, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CardItem, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CardItemHead, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("address", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Head, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(WriteLink, {
              to: `/ProdDetail/${id}`,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(ProfileImage, {
                src: profileImage
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(ProfileName, {
                children: profileName
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 15
            }, this), "s", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Follow, {
              children: "\uD314\uB85C\uC6B0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 16
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Introduce, {
            children: introduce
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CardItemBody, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(ContentLink, {
          to: `/ProdDetail/${id}`,
          onMouseOver: () => handleToggle(),
          onMouseOut: () => handleToggle()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Title, {
          isHover: isHover,
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(ImageWrap, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CardImage, {
              src: cardImage,
              isHover: isHover
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(ViewCount, {
              children: ["\uC870\uD68C\uC218 ", viewCount.toLocaleString()]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(IconList, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(HeartWrap, {
            onClick: () => handleLike(),
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(HeartImg, {
              src: isLike ? 'images/Main/blueheart.png' : 'images/Main/heart.png'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Count, {
              children: likeCount
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CommentCountWrap, {
            to: `/ProdDetail/${id}`,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CommentImg, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Count, {
              children: commentCount
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CommentWrap, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CardComment, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CommentWriter, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(WriterLink, {
              to: `/ProdDetail/${id}`,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(WriterImageBox, {
                display: writerImage ? 'block' : 'none',
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(WriterImage, {
                  src: writerImage
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(WriterName, {
                children: writerName
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CommentLink, {
            to: `/ProdDetail/${id}`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CommentContent, {
              children: commentContent
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 5
  }, this);
}

_s(Feeds, "GYGYt6kgsjatfA8IKT7qrjoG510=");

_c = Feeds;
/* harmony default export */ __webpack_exports__["default"] = (Feeds);
const hover = styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
  cursor: pointer;
  transition: opacity 0.1s;
  &:hover {
    opacity: 0.5;
  }
`;

const flexCenter = (flex, justify, align) => styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
  display: ${flex};
  justify-content: ${justify};
  align-items: ${align};
`;

const size = styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
  width: 20px;
  height: 20px;
`;
const iconWrap = styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
  ${flexCenter('flex', 'center', 'center')};
  position: relative;
  padding: 13px 0 16px;
  margin: 0;
  box-flex: 1;
  background: none;
  border: none;
  text-align: center;
  z-index: 2;
  transition: opacity 0.1s;
  flex: 1 0 0px;
  &:hover {
    opacity: 0.5;
  }
`;
const CardFeed = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  padding-right: 10px;
  padding-left: 10px;
  max-width: 25%;
  flex: 0 0 25%;
`;
_c2 = CardFeed;
const CardItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].article`
  padding-bottom: 40px;
`;
_c3 = CardItem;
const CardItemHead = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  ${flexCenter('flex', 'center', 'normal')};
  position: relative;
  min-height: 36px;
  margin: 0 0 16px;
  padding: 0 0 0 48px;
  flex-direction: column;

  address {
    margin-top: -5px;
    font-size: 15px;
    line-height: 19px;
    flex: 0 0 auto;
  }
`;
_c4 = CardItemHead;
const Head = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
`;
_c5 = Head;
const WriteLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"])`
  display: inline-block;
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  flex: 0 1 auto;
  ${hover}
`;
_c6 = WriteLink;
const ProfileImage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img`
  position: absolute;
  top: 0;
  left: 0;
  width: 36px;
  height: 36px;
  background-color: #ededed;
  border-radius: 100%;
`;
_c7 = ProfileImage;
const ProfileName = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span`
  color: #424242;
  font-weight: 500;
`;
_c8 = ProfileName;
const Follow = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button`
  margin-left: 10px;
  padding: 0;
  border: none;
  color: #35c5f0;
  background: none;
  flex: 0 0 auto;
  font-weight: 700;
  font: inherit;
  ${hover}
`;
_c9 = Follow;
const Introduce = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  margin-top: 2px;
  color: #757575;
  white-space: nowrap;
  line-height: 16px;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
_c10 = Introduce;
const CardItemBody = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  position: relative;
  flex-direction: column;
`;
_c11 = CardItemBody;
const ContentLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"])`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;
_c12 = ContentLink;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: -webkit-box;
  margin: 12px 0 0;
  max-height: 66px;
  max-height: 110px;
  line-height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 15px;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  order: 1;
  opacity: ${props => props.isHover ? 0.5 : 1};
`;
_c13 = Title;
const ImageWrap = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  background-color: #ededed;
  border-radius: 6px;
  overflow: hidden;
`;
_c14 = ImageWrap;
const CardImage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transition: transform 0.2s;
  transform: ${props => props.isHover ? 'translate(-50%, -50%) scale(1.05)' : 'translate(-50%, -50%)'};
`;
_c15 = CardImage;
const ViewCount = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span`
  position: absolute;
  bottom: 12px;
  right: 12px;
  color: #fff;
  text-shadow: 0 0 4px rgb(0 0 0 / 50%);
  font-size: 13px;
`;
_c16 = ViewCount;
const IconList = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].aside`
  display: flex;
  margin-bottom: -12px;
  flex: 0 0 auto;
`;
_c17 = IconList;
const HeartWrap = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button`
  ${iconWrap}
`;
_c18 = HeartWrap;
const CommentCountWrap = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"])`
  ${iconWrap}
`;
_c19 = CommentCountWrap;
const HeartImg = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img`
  ${size}
`;
_c20 = HeartImg;
const Count = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span`
  margin-left: 6px;
  font-size: 14px;
  color: #424242;
`;
_c21 = Count;
const CommentImg = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.attrs({
  src: 'images/Main/speech-bubble.png'
})`
  ${size}
`;
_c22 = CommentImg;
const CommentWrap = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  ${flexCenter('flex', 'center', 'normal')};
  position: relative;
  margin: 12px 0 0;
  padding: 0 0 0 34px;
  min-height: 24px;
  -webkit-box-orient: vertical;
  flex-direction: column;
`;
_c23 = CommentWrap;
const CardComment = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].article`
  padding: 4px;
  margin: -4px;
  max-height: 66px;
  font-size: 15px;
  color: #424242;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 22px;
`;
_c24 = CardComment;
const CommentWriter = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].address`
  display: inline;
  font-weight: 700;
`;
_c25 = CommentWriter;
const WriterLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"])`
  display: inline-block;
  color: #424242;
  ${hover}
`;
_c26 = WriterLink;
const WriterImageBox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: ${props => props.display};
  position: absolute;
  top: 0;
  left: 0;
  ${size}
  background-color: #ededed;
  border-radius: 100%;
  overflow: hidden;
`;
_c27 = WriterImageBox;
const WriterImage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img`
  ${size}
`;
_c28 = WriterImage;
const WriterName = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span`
  ${hover}
`;
_c29 = WriterName;
const CommentLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"])`
  ${hover}
  color: #424242;
`;
_c30 = CommentLink;
const CommentContent = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p`
  display: inline;
  margin-left: 6px;
`;
_c31 = CommentContent;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23, _c24, _c25, _c26, _c27, _c28, _c29, _c30, _c31;

__webpack_require__.$Refresh$.register(_c, "Feeds");
__webpack_require__.$Refresh$.register(_c2, "CardFeed");
__webpack_require__.$Refresh$.register(_c3, "CardItem");
__webpack_require__.$Refresh$.register(_c4, "CardItemHead");
__webpack_require__.$Refresh$.register(_c5, "Head");
__webpack_require__.$Refresh$.register(_c6, "WriteLink");
__webpack_require__.$Refresh$.register(_c7, "ProfileImage");
__webpack_require__.$Refresh$.register(_c8, "ProfileName");
__webpack_require__.$Refresh$.register(_c9, "Follow");
__webpack_require__.$Refresh$.register(_c10, "Introduce");
__webpack_require__.$Refresh$.register(_c11, "CardItemBody");
__webpack_require__.$Refresh$.register(_c12, "ContentLink");
__webpack_require__.$Refresh$.register(_c13, "Title");
__webpack_require__.$Refresh$.register(_c14, "ImageWrap");
__webpack_require__.$Refresh$.register(_c15, "CardImage");
__webpack_require__.$Refresh$.register(_c16, "ViewCount");
__webpack_require__.$Refresh$.register(_c17, "IconList");
__webpack_require__.$Refresh$.register(_c18, "HeartWrap");
__webpack_require__.$Refresh$.register(_c19, "CommentCountWrap");
__webpack_require__.$Refresh$.register(_c20, "HeartImg");
__webpack_require__.$Refresh$.register(_c21, "Count");
__webpack_require__.$Refresh$.register(_c22, "CommentImg");
__webpack_require__.$Refresh$.register(_c23, "CommentWrap");
__webpack_require__.$Refresh$.register(_c24, "CardComment");
__webpack_require__.$Refresh$.register(_c25, "CommentWriter");
__webpack_require__.$Refresh$.register(_c26, "WriterLink");
__webpack_require__.$Refresh$.register(_c27, "WriterImageBox");
__webpack_require__.$Refresh$.register(_c28, "WriterImage");
__webpack_require__.$Refresh$.register(_c29, "WriterName");
__webpack_require__.$Refresh$.register(_c30, "CommentLink");
__webpack_require__.$Refresh$.register(_c31, "CommentContent");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Pages/Main/Filter/Badge.js":
/*!****************************************!*\
  !*** ./src/Pages/Main/Filter/Badge.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/mac/Desktop/WECODE/21-2nd-YourHouseToday-frontend/src/Pages/Main/Filter/Badge.js";




function Badge(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(TagListItem, {
    onClick: () => props.deleteFilter(props.tapId, props.item),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(TagButton, {
      children: [props.name, props.color && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ColorIcon, {
        color: props.color
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 25
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Svg, {
        width: "12",
        height: "12",
        viewBox: "0 0 12 12",
        fill: "currentColor",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("path", {
          d: "M6 4.94L3.879 2.817l-1.061 1.06L4.939 6 2.818 8.121l1.06 1.061L6 7.061l2.121 2.121 1.061-1.06L7.061 6l2.121-2.121-1.06-1.061L6 4.939zM6 12A6 6 0 1 1 6 0a6 6 0 0 1 0 12z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

_c = Badge;
/* harmony default export */ __webpack_exports__["default"] = (Badge);
const TagButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button`
  display: block;
  padding: 3px 8px;
  background-color: #35c5f0;
  color: #fff;
  border-color: #35c5f0;
  font-size: 15px;
  line-height: 18px;
  font-weight: 700;
  border-radius: 26px;
`;
_c2 = TagButton;
const Svg = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].svg`
  margin: 0 -4px 0 7px;
  vertical-align: -1px;
  color: #fff;
`;
_c3 = Svg;
const TagListItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li`
  display: inline-block;
  margin: 0 2px;
  padding: 2px 0;
`;
_c4 = TagListItem;
const ColorIcon = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span`
  position: relative;
  vertical-align: -4px;
  display: inline-block;
  width: 18px;
  height: 18px;
  margin-left: 5px;
  background-color: ${props => props.color};
  border-radius: 18px;
`;
_c5 = ColorIcon;

var _c, _c2, _c3, _c4, _c5;

__webpack_require__.$Refresh$.register(_c, "Badge");
__webpack_require__.$Refresh$.register(_c2, "TagButton");
__webpack_require__.$Refresh$.register(_c3, "Svg");
__webpack_require__.$Refresh$.register(_c4, "TagListItem");
__webpack_require__.$Refresh$.register(_c5, "ColorIcon");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Pages/Main/Filter/FilterBar.js":
/*!********************************************!*\
  !*** ./src/Pages/Main/Filter/FilterBar.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-slider */ "./node_modules/rc-slider/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Badge */ "./src/Pages/Main/Filter/Badge.js");
/* harmony import */ var _FilterListData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FilterListData */ "./src/Pages/Main/Filter/FilterListData.js");
/* harmony import */ var _Styles_index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Styles/index.css */ "./src/Styles/index.css");
/* harmony import */ var _Styles_index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Styles_index_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/mac/Desktop/WECODE/21-2nd-YourHouseToday-frontend/src/Pages/Main/Filter/FilterBar.js";









function FilterBar(props) {
  const {
    setDisplay,
    display,
    addFilter,
    handleReset,
    title,
    handleInput,
    addFilterInput,
    value,
    toggleButton,
    handleColorToggle,
    colorToggle,
    selectedList,
    deleteFilter,
    clearFilter
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(FilterBarContainer, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(FilterBarUl, {
      children: [_FilterListData__WEBPACK_IMPORTED_MODULE_4__["default"].slice(0, -2).map(item => {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(FilterBarList, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(FilterItem, {
            onMouseOver: () => setDisplay(item.id - 1),
            onMouseOut: () => setDisplay(''),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(FilterList, {
              children: [item.name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(Image, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(DropdownContainer, {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(DropdownContent, {
                  block: display === item.id - 1 ? true : false,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(DropdownPanel, {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(PanelList, {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("li", {
                        children: _FilterListData__WEBPACK_IMPORTED_MODULE_4__["default"][item.id - 1].subTap.map(item => {
                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(PanelItem, {
                            onClick: () => addFilter(item),
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(ItemHead, {
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("span", {
                                children: item.name
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 52,
                                columnNumber: 37
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 51,
                              columnNumber: 35
                            }, this)
                          }, item.id, false, {
                            fileName: _jsxFileName,
                            lineNumber: 47,
                            columnNumber: 33
                          }, this);
                        })
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 44,
                        columnNumber: 27
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 43,
                      columnNumber: 25
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 42,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 39,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 15
          }, this)
        }, item.id, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 13
        }, this);
      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(FilterBarList, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(FilterItem, {
          onMouseOver: () => setDisplay(3),
          onMouseOut: () => setDisplay(''),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(FilterList, {
            children: ["\uD3C9\uC218", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(Image, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(DropdownContainer, {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(DropdownContent, {
                  block: display === 3 ? true : false,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(DropdownPanel, {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(PanelRangeControl, {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(RangeHeader, {
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(RangeTitle, {
                          children: title
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 81,
                          columnNumber: 27
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(ResetSlide, {
                          onClick: () => handleReset(),
                          children: "\uCD08\uAE30\uD654"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 82,
                          columnNumber: 27
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 80,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(RangeSlider, {
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(InputWrap, {
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(InputContent, {
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(rc_slider__WEBPACK_IMPORTED_MODULE_1__["Range"], {
                                min: 0,
                                max: 80,
                                onChange: event => handleInput(event),
                                defaultValue: [0, 80],
                                onAfterChange: () => addFilterInput(),
                                value: value
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 90,
                                columnNumber: 33
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 89,
                              columnNumber: 31
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 88,
                            columnNumber: 29
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(FooterWrap, {
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(FooterText, {
                              children: "1\uD3C9"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 101,
                              columnNumber: 31
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(FooterText, {
                              children: "70\uD3C9 \uC774\uC0C1"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 102,
                              columnNumber: 31
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 100,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 87,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 86,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(OptionList, {
                        children: _FilterListData__WEBPACK_IMPORTED_MODULE_4__["default"][3].subTap.map(item => {
                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(OptionItem, {
                            onClick: () => toggleButton(item.id, item),
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(OptionItemButton, {
                              isCheck: !(value[0] === 0 && value[1] === 80) && value[0] >= 0 && value[0] <= (item.id + 1) * 10 && !(value[1] <= item.id * 10) ? true : false,
                              children: item.name
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 113,
                              columnNumber: 33
                            }, this)
                          }, item.id, false, {
                            fileName: _jsxFileName,
                            lineNumber: 109,
                            columnNumber: 31
                          }, this);
                        })
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 106,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 79,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 78,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 17
              }, this)
            }, void 0, false)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(FilterBarList, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(FilterItem, {
          onMouseOver: () => setDisplay(4),
          onMouseOut: () => setDisplay(''),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(FilterList, {
            children: ["\uCEEC\uB7EC", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(Image, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(DropdownContainer, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(DropdownContent, {
                block: display === 4 ? true : false,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(DropdownPanel, {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(PanelGroupControl, {
                    children: _FilterListData__WEBPACK_IMPORTED_MODULE_4__["default"][4].subTap.map(item => {
                      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("section", {
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(ColorHeader, {
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(ItemTitle, {
                            children: item.name
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 153,
                            columnNumber: 31
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(ItemToggle, {
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(ToggleIcon, {
                              onClick: () => handleColorToggle(item.id),
                              background: colorToggle === item.id ? '#3fc5f0' : '#ededed',
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(ToggleIconHandle, {
                                transform: colorToggle === item.id ? 'translateX(22px)' : 0
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 163,
                                columnNumber: 35
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 155,
                              columnNumber: 33
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 154,
                            columnNumber: 31
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 152,
                          columnNumber: 29
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(ColorContent, {
                          height: colorToggle === item.id ? '54px' : '0',
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
                            className: "ColorPanel",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(ColorList, {
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(ItemWrap, {
                                children: _FilterListData__WEBPACK_IMPORTED_MODULE_4__["default"][4].subTap[item.id].tapColor.map(item => {
                                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(ListItem, {
                                    onClick: () => addFilter(item),
                                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(ColorItemHead, {
                                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(ColorControl, {
                                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(ColorIcon, {
                                          color: item.color,
                                          "data-set": item.color
                                        }, void 0, false, {
                                          fileName: _jsxFileName,
                                          lineNumber: 189,
                                          columnNumber: 47
                                        }, this), item.value]
                                      }, void 0, true, {
                                        fileName: _jsxFileName,
                                        lineNumber: 188,
                                        columnNumber: 45
                                      }, this)
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 187,
                                      columnNumber: 43
                                    }, this)
                                  }, item.id, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 183,
                                    columnNumber: 41
                                  }, this);
                                })
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 178,
                                columnNumber: 35
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 177,
                              columnNumber: 33
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 176,
                            columnNumber: 31
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 173,
                          columnNumber: 29
                        }, this)]
                      }, item.id, true, {
                        fileName: _jsxFileName,
                        lineNumber: 151,
                        columnNumber: 27
                      }, this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 148,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 147,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(TagList, {
      children: [selectedList.map((item, index) => {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_Badge__WEBPACK_IMPORTED_MODULE_3__["default"], {
          color: item.color,
          name: item.name,
          value: value,
          deleteFilter: deleteFilter,
          tapId: item.tapId,
          item: item
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 13
        }, this);
      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(TagListItem, {
        children: selectedList.length !== 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(ListClear, {
          onClick: () => clearFilter(),
          children: "\uCD08\uAE30\uD654"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

_c = FilterBar;
/* harmony default export */ __webpack_exports__["default"] = (FilterBar);
const FilterBarContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  margin: 30px auto;
  width: 1136px;
  max-width: 100%;
  min-height: 1px;
  transition: top 0.1s;
  z-index: 100;
`;
_c2 = FilterBarContainer;
const FilterBarUl = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul`
  display: flex;
`;
_c3 = FilterBarUl;
const FilterBarList = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li`
  margin: 0 3px;
  vertical-align: bottom;
  font-size: 0;
  line-height: 0;
`;
_c4 = FilterBarList;
const FilterItem = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  position: relative;
  display: inline-block;
`;
_c5 = FilterItem;
const FilterList = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  padding: 7px 8px 6px;
  background-color: #f5f5f5;
  border-color: #f5f5f5;
  color: #757575;
  line-height: 19px;
  font-size: 15px;
  border-radius: 4px;
  cursor: pointer;
`;
_c6 = FilterList;
const Image = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.attrs({
  src: '/images/Main/arrow.png'
})`
  width: 10px;
  height: 10px;
  margin-left: 5px;
  margin-top: 5px;
  vertical-align: -1px;
`;
_c7 = Image;
const DropdownContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  position: absolute;
  z-index: 1000;
  cursor: auto;
`;
_c8 = DropdownContainer;
const DropdownContent = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  display: ${props => props.block ? 'block' : 'none'};
  margin-top: 17px;

  &:after {
    position: absolute;
    display: block;
    margin: 0 1px;
    left: 20px;
    top: 9px;
    content: '';
    border-width: 0 9px 9px;
    border-color: transparent transparent #fff;
    z-index: 1000;
    border-style: solid;
  }
`;
_c9 = DropdownContent;
const DropdownPanel = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  margin: 0 -1px;
  background-color: #fff;
  box-shadow: 0 -1px 16px rgb(0 0 0 / 20%);
  border-radius: 10px;
  overflow: hidden;
  white-space: nowrap;
`;
_c10 = DropdownPanel;
const PanelList = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul`
  position: relative;
  width: 200px;
  max-height: 425px;
  min-height: 50px;
  overflow: auto;
`;
_c11 = PanelList;
const PanelItem = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button`
  display: block;
  position: relative;
  width: 100%;
  padding: 15px;
  margin: 0;
  background: #fff;
  color: #424242;
  font-family: inherit;
  font-weight: 400;
  font-size: 15px;
  line-height: 30px;
  text-decoration: none;
  text-align: left;
  cursor: pointer;

  &:hover {
    background-color: #effbff;
    color: #35c5f0;
    font-weight: 700;
  }
`;
_c12 = PanelItem;
const ItemHead = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
_c13 = ItemHead;
const PanelRangeControl = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section`
  position: relative;
  padding: 20px 15px;
  margin: 0px;
  width: 375px;
  overflow: auto;
  cursor: auto;
`;
_c14 = PanelRangeControl;
const RangeHeader = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 12px 0px 18px;
`;
_c15 = RangeHeader;
const RangeTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1`
  margin: 0px;
  padding: 0px;
  color: rgb(66, 66, 66);
  font-weight: 700;
  line-height: 30px;
  font-size: 20px;
  flex: 0 0 auto;
  -webkit-box-flex: 0;
`;
_c16 = RangeTitle;
const RangeSlider = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  margin-bottom: 38px;
`;
_c17 = RangeSlider;
const InputWrap = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  position: relative;
  padding: 7px 0px;
  height: 10px;
`;
_c18 = InputWrap;
const InputContent = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  position: absolute;
  top: 7px;
  left: 12px;
  right: 12px;
  height: 10px;
`;
_c19 = InputContent;
const FooterWrap = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin-top: 15px;
`;
_c20 = FooterWrap;
const FooterText = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  color: rgb(117, 117, 117);
  font-size: 13px;
  line-height: 16px;
`;
_c21 = FooterText;
const OptionList = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul`
  display: flex;
  margin: 8px -2px -2px;
  padding: 0px;
  list-style: none;
  flex-wrap: wrap;
`;
_c22 = OptionList;
const OptionItem = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li`
  -webkit-box-flex: 0;
  flex: 0 0 25%;
  width: 25%;
  padding: 2px;
`;
_c23 = OptionItem;
const OptionItemButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button`
  width: 100%;
  padding: 9px 0px;
  font-size: 13px;
  background-color: ${props => props.isCheck ? '#35c5f0' : '#f5f5f5'};
  border-color: ${props => props.isCheck ? '#35c5f0' : '#f5f5f5'};
  color: ${props => props.isCheck ? '#fff' : '#757575'};
  line-height: 20px;
  border-radius: 5px;

  &:hover {
    background-color: ${props => props.isCheck ? '#09addb' : '#f0f0f0'};
    border-color: ${props => props.isCheck ? '#09addb' : '#f0f0f0'};
  }
`;
_c24 = OptionItemButton;
const ResetSlide = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button`
  color: #35c5f0;
  font-size: 15px;
  border: none;
  background: none;
  font-family: inherit;
  text-decoration: none;
  text-align: center;
  transition: opacity 0.1s;
  cursor: pointer;
`;
_c25 = ResetSlide;
const PanelGroupControl = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  max-width: 600px;
  max-height: 400px;
  overflow: auto;
`;
_c26 = PanelGroupControl;
const ColorHeader = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1`
  display: flex;
  margin: 0;
  padding: 7.5px 15px;
  -webkit-box-align: center;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
  font-weight: 400;
  line-height: 30px;
  color: #424242;
`;
_c27 = ColorHeader;
const ItemTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span`
  margin-right: 5px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  flex: 0 0 auto;
`;
_c28 = ItemTitle;
const ItemToggle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button`
  margin: -5px 0;
  padding: 5px 0;
  background: none;
  font-size: 0;
  line-height: 0;
  transition: opacity 0.1s;
  border: none;
  cursor: pointer;
`;
_c29 = ItemToggle;
const ToggleIcon = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span`
  position: relative;
  display: inline-block;
  width: 45px;
  height: 23px;
  background-color: ${props => props.background};
  border-radius: 23px;
  transition: background-color 0.2s;
`;
_c30 = ToggleIcon;
const ToggleIconHandle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span`
  transform: ${props => props.transform};
  position: absolute;
  display: inline-block;
  width: 15px;
  height: 15px;
  top: 50%;
  left: 4px;
  margin-top: -7.5px;
  background-color: #fff;
  border-radius: 15px;
  transition: transform 0.15s ease-in-out;
`;
_c31 = ToggleIconHandle;
const ColorContent = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  height: ${props => props.height};
  overflow: hidden;
  transition: 0.2s all;
`;
_c32 = ColorContent;
const ColorList = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul`
  position: relative;
  padding: 10px 5px;
  width: auto;
  min-height: 50px;
  white-space: nowrap;
  overflow: auto;
`;
_c33 = ColorList;
const ItemWrap = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li`
  display: inline-block;
  vertical-align: bottom;
`;
_c34 = ItemWrap;
const ListItem = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button`
  padding: 5px;
  color: #757575;
  border-radius: 4px;
  border: none;
  font-weight: 700;
  background: none;
  line-height: 20px;
`;
_c35 = ListItem;
const ColorItemHead = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-box-pack: justify;
`;
_c36 = ColorItemHead;
const ColorControl = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span`
  font-size: 0;
  line-height: 0;
`;
_c37 = ColorControl;
const ColorIcon = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span`
  position: relative;
  display: inline-block;
  width: 24px;
  height: 24px;
  background-color: ${props => props.color};
  border-radius: 24px;
  border: ${props => props.color === 'rgb(255,255,255)' ? '1px solid #dbdbdb' : '1px solid transparent'};
`;
_c38 = ColorIcon;
const TagList = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul`
  margin-top: 10px;
  padding: 5px 0;
  list-style: none;
  font-size: 0;
  line-height: 0;
`;
_c39 = TagList;
const TagListItem = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li`
  display: inline-block;
  margin: 0 2px;
  padding: 2px 0;
`;
_c40 = TagListItem;
const ListClear = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button`
  margin: 0;
  padding: 2px 10px;
  border: none;
  background: none;
  font-family: inherit;
  font-size: 15px;
  font-weight: 700;
  line-height: 18px;
  text-decoration: none;
  text-align: center;
  color: #35c5f0;
  cursor: pointer;
  transition: opacity 0.1s;
`;
_c41 = ListClear;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23, _c24, _c25, _c26, _c27, _c28, _c29, _c30, _c31, _c32, _c33, _c34, _c35, _c36, _c37, _c38, _c39, _c40, _c41;

__webpack_require__.$Refresh$.register(_c, "FilterBar");
__webpack_require__.$Refresh$.register(_c2, "FilterBarContainer");
__webpack_require__.$Refresh$.register(_c3, "FilterBarUl");
__webpack_require__.$Refresh$.register(_c4, "FilterBarList");
__webpack_require__.$Refresh$.register(_c5, "FilterItem");
__webpack_require__.$Refresh$.register(_c6, "FilterList");
__webpack_require__.$Refresh$.register(_c7, "Image");
__webpack_require__.$Refresh$.register(_c8, "DropdownContainer");
__webpack_require__.$Refresh$.register(_c9, "DropdownContent");
__webpack_require__.$Refresh$.register(_c10, "DropdownPanel");
__webpack_require__.$Refresh$.register(_c11, "PanelList");
__webpack_require__.$Refresh$.register(_c12, "PanelItem");
__webpack_require__.$Refresh$.register(_c13, "ItemHead");
__webpack_require__.$Refresh$.register(_c14, "PanelRangeControl");
__webpack_require__.$Refresh$.register(_c15, "RangeHeader");
__webpack_require__.$Refresh$.register(_c16, "RangeTitle");
__webpack_require__.$Refresh$.register(_c17, "RangeSlider");
__webpack_require__.$Refresh$.register(_c18, "InputWrap");
__webpack_require__.$Refresh$.register(_c19, "InputContent");
__webpack_require__.$Refresh$.register(_c20, "FooterWrap");
__webpack_require__.$Refresh$.register(_c21, "FooterText");
__webpack_require__.$Refresh$.register(_c22, "OptionList");
__webpack_require__.$Refresh$.register(_c23, "OptionItem");
__webpack_require__.$Refresh$.register(_c24, "OptionItemButton");
__webpack_require__.$Refresh$.register(_c25, "ResetSlide");
__webpack_require__.$Refresh$.register(_c26, "PanelGroupControl");
__webpack_require__.$Refresh$.register(_c27, "ColorHeader");
__webpack_require__.$Refresh$.register(_c28, "ItemTitle");
__webpack_require__.$Refresh$.register(_c29, "ItemToggle");
__webpack_require__.$Refresh$.register(_c30, "ToggleIcon");
__webpack_require__.$Refresh$.register(_c31, "ToggleIconHandle");
__webpack_require__.$Refresh$.register(_c32, "ColorContent");
__webpack_require__.$Refresh$.register(_c33, "ColorList");
__webpack_require__.$Refresh$.register(_c34, "ItemWrap");
__webpack_require__.$Refresh$.register(_c35, "ListItem");
__webpack_require__.$Refresh$.register(_c36, "ColorItemHead");
__webpack_require__.$Refresh$.register(_c37, "ColorControl");
__webpack_require__.$Refresh$.register(_c38, "ColorIcon");
__webpack_require__.$Refresh$.register(_c39, "TagList");
__webpack_require__.$Refresh$.register(_c40, "TagListItem");
__webpack_require__.$Refresh$.register(_c41, "ListClear");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Pages/Main/Filter/FilterListData.js":
/*!*************************************************!*\
  !*** ./src/Pages/Main/Filter/FilterListData.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const FilterListData = [{
  id: 1,
  name: '정렬',
  subTap: [{
    id: 1,
    tapId: 1,
    name: '역대 인기순',
    query: 'sort=-view'
  }, {
    id: 2,
    tapId: 1,
    name: '최신순',
    query: 'sort=-create_at'
  }]
}, {
  id: 2,
  name: '주거형태',
  subTap: [{
    id: 1,
    tapId: 2,
    name: '원룸&오피스텔',
    query: 'housing-type=1'
  }, {
    id: 2,
    tapId: 2,
    name: '아파트',
    query: 'housing-type=2'
  }, {
    id: 3,
    tapId: 2,
    name: '빌라&연립',
    query: 'housing-type=3'
  }, {
    id: 4,
    tapId: 2,
    name: '단독주택',
    query: 'housing-type=4'
  }, {
    id: 5,
    tapId: 2,
    name: '사무공간',
    query: 'housing-type=5'
  }, {
    id: 6,
    tapId: 2,
    name: '상업공간',
    query: 'housing-type=6'
  }, {
    id: 7,
    tapId: 2,
    name: '기타',
    query: 'housing-type=7'
  }]
}, {
  id: 3,
  name: '스타일',
  subTap: [{
    id: 1,
    tapId: 3,
    name: '모던',
    query: 'style=1'
  }, {
    id: 2,
    tapId: 3,
    name: '북유럽',
    query: 'style=2'
  }, {
    id: 3,
    tapId: 3,
    name: '빈티지',
    query: 'style=3'
  }, {
    id: 4,
    tapId: 3,
    name: '내츄럴',
    query: 'style=4'
  }, {
    id: 5,
    tapId: 3,
    name: '프로방스&로맨틱',
    query: 'style=5'
  }, {
    id: 6,
    tapId: 3,
    name: '클래식&앤틱',
    query: 'style=6'
  }, {
    id: 7,
    tapId: 3,
    name: '한국&아시아',
    query: 'style=7'
  }, {
    id: 8,
    tapId: 3,
    name: '유니크',
    query: 'style=8'
  }]
}, {
  id: 4,
  name: '평수',
  subTap: [{
    id: 0,
    tapId: 4,
    name: '1-10평대',
    query: 'min-size=1&max-size=10'
  }, {
    id: 1,
    tapId: 4,
    name: '10평대',
    query: 'min-size=11&max-size=20'
  }, {
    id: 2,
    tapId: 4,
    name: '20평대',
    query: 'min-size=21&max-size=30'
  }, {
    id: 3,
    tapId: 4,
    name: '30평대',
    query: 'min-size=31&max-size=40'
  }, {
    id: 4,
    tapId: 4,
    name: '40평대',
    query: 'min-size=41&max-size=50'
  }, {
    id: 5,
    tapId: 4,
    name: '50평대',
    query: 'min-size=51&max-size=60'
  }, {
    id: 6,
    tapId: 4,
    name: '60평대',
    query: 'min-size=61&max-size=70'
  }, {
    id: 7,
    tapId: 4,
    name: '70평대',
    query: 'min-size=71&max-size=80'
  }]
}, {
  id: 5,
  name: '컬러',
  subTap: [{
    id: 0,
    name: '배경',
    tapId: 5,
    tapColor: [{
      id: 1,
      tapId: 5,
      name: '배경 - 블랙',
      color: 'rgb(0,0,0)',
      query: 'back-color=1'
    }, {
      id: 2,
      tapId: 5,
      name: '배경 - 화이트',
      color: 'rgb(255,255,255)',
      query: 'back-color=2'
    }, {
      id: 3,
      tapId: 5,
      name: '배경 - 그레이',
      color: 'rgb(189,189,189)',
      query: 'back-color=3'
    }, {
      id: 4,
      tapId: 5,
      name: '배경 - 베이지',
      color: 'rgb(244,231,197)',
      query: 'back-color=4'
    }, {
      id: 5,
      tapId: 5,
      name: '배경 - 라이트 브라운',
      color: 'rgb(232,192,120)',
      query: 'back-color=5'
    }, {
      id: 6,
      tapId: 5,
      name: '배경 - 브라운',
      color: 'rgb(100,65,52)',
      query: 'back-color=6'
    }, {
      id: 7,
      tapId: 5,
      name: '배경 - 레드',
      color: 'rgb(213,55,54)',
      query: 'back-color=7'
    }, {
      id: 8,
      tapId: 5,
      name: '배경 - 핑크',
      color: 'rgb(238,138,148)',
      query: 'back-color=8'
    }, {
      id: 9,
      tapId: 5,
      name: '배경 - 옐로우',
      color: 'rgb(254,209,68)',
      query: 'back-color=9'
    }, {
      id: 10,
      tapId: 5,
      name: '배경 - 그린',
      color: 'rgb(150,215,131)',
      query: 'back-color=10'
    }, {
      id: 11,
      tapId: 5,
      name: '배경 - 민트',
      color: 'rgb(144,208,197)',
      query: 'back-color=11'
    }, {
      id: 12,
      tapId: 5,
      name: '배경 - 블루',
      color: 'rgb(61,151,221)',
      query: 'back-color=12'
    }, {
      id: 13,
      tapId: 5,
      name: '배경 - 네이비',
      color: 'rgb(34,62,95)',
      query: 'back-color=13'
    }]
  }, {
    id: 1,
    name: '소품',
    tapId: 6,
    tapColor: [{
      id: 1,
      tapId: 6,
      name: '소품 - 블랙',
      color: 'rgb(0,0,0)',
      query: 'item-color=1'
    }, {
      id: 2,
      tapId: 6,
      name: '소품 - 화이트',
      color: 'rgb(255,255,255)',
      query: 'item-color=2'
    }, {
      id: 3,
      tapId: 6,
      name: '소품 - 그레이',
      color: 'rgb(189,189,189)',
      query: 'item-color=3'
    }, {
      id: 4,
      tapId: 6,
      name: '소품 - 베이지',
      color: 'rgb(244,231,197)',
      query: 'item-color=4'
    }, {
      id: 5,
      tapId: 6,
      name: '소품 - 라이트 브라운',
      color: 'rgb(232,192,120)',
      query: 'item-color=5'
    }, {
      id: 6,
      tapId: 6,
      name: '소품 - 브라운',
      color: 'rgb(100,65,52)',
      query: 'item-color=6'
    }, {
      id: 7,
      tapId: 6,
      name: '소품 - 레드',
      color: 'rgb(213,55,54)',
      query: 'item-color=7'
    }, {
      id: 8,
      tapId: 6,
      name: '소품 - 핑크',
      color: 'rgb(238,138,148)',
      query: 'item-color=8'
    }, {
      id: 9,
      tapId: 6,
      name: '소품 - 옐로우',
      color: 'rgb(254,209,68)',
      query: 'item-color=9'
    }, {
      id: 10,
      tapId: 6,
      name: '소품 - 그린',
      color: 'rgb(150,215,131)',
      query: 'item-color=10'
    }, {
      id: 11,
      tapId: 6,
      name: '소품 - 민트',
      color: 'rgb(144,208,197)',
      query: 'item-color=11'
    }, {
      id: 12,
      tapId: 6,
      name: '소품 - 블루',
      color: 'rgb(61,151,221)',
      query: 'item-color=12'
    }, {
      id: 13,
      tapId: 6,
      name: '소품 - 네이비',
      color: 'rgb(34,62,95)',
      query: 'item-color=13'
    }]
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (FilterListData);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Pages/Main/Head/HomeHead.js":
/*!*****************************************!*\
  !*** ./src/Pages/Main/Head/HomeHead.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/mac/Desktop/WECODE/21-2nd-YourHouseToday-frontend/src/Pages/Main/Head/HomeHead.js",
    _s = __webpack_require__.$Refresh$.signature();







const BANNER_SLIDER = [{
  id: 1,
  url: 'images/Main/slide1.webp'
}, {
  id: 2,
  url: 'images/Main/slide2.jpeg'
}, {
  id: 3,
  url: 'images/Main/slide3.jpeg'
}, {
  id: 4,
  url: 'images/Main/slide4.webp'
}, {
  id: 5,
  url: 'images/Main/slide5.webp'
}];

function HomeHead() {
  _s();

  const [isHover, setIsHover] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  function handleToggle() {
    setIsHover(isHover => !isHover);
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dotsClass: 'slickDots',
    pauseOnHover: true
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Container, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Row, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(BannerLeft, {
        onMouseOver: () => handleToggle(),
        onMouseOut: () => handleToggle(),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(StoryLink, {
          href: "/",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(BannerImage, {
            isHover: isHover
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(ContentWrap, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Content, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(SubTitle, {
                children: "\uB0B4\uC9D1\uC740 \uCC98\uC74C\uC774\uB77C"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Title, {
                children: "\uC790\uCDE8\uC0DD\uD65C 10\uB144 \uCC28\uC758 \uCCAB \uB0B4 \uC9D1 \uB9C8\uB828\uAE30"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(ContentProfile, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(ProfileImage, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
                  children: "rain98"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 49,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(More, {
              isHover: isHover,
              children: "\uBCF4\uB7EC\uAC00\uAE30"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(BannerRight, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(StyledSlider, { ...settings,
          children: BANNER_SLIDER.map(item => {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(ImageContainer, {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Image, {
                  src: item.url
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 19
              }, this)
            }, item.id, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 17
            }, this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(BannerLeftBottom, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

_s(HomeHead, "FTC8EpIspi2qaDtU9gFRhqZT02A=");

_c = HomeHead;
/* harmony default export */ __webpack_exports__["default"] = (HomeHead);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section`
  padding: 30px 0 0;
  width: 1136px;
  margin-right: auto;
  margin-left: auto;
  max-width: 100%;
`;
_c2 = Container;
const Row = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  height: 505px;
`;
_c3 = Row;
const BannerLeft = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  position: relative;
  min-width: 850px;
  border-radius: 10px;
  overflow: hidden;

  &:hover {
  }
`;
_c4 = BannerLeft;
const StoryLink = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a`
  width: 100%;
  &:after {
    content: '';
    position: absolute;
    height: 230px;
    left: 0;
    right: 0;
    bottom: 0;
    top: auto;
    background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.5));
    z-index: 1;
    border-radius: 10px;
  }
`;
_c5 = StoryLink;
const BannerImage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.attrs({
  src: '/images/Main/main2.webp'
})`
  width: 100%;
  height: 505px;
  transition: transform 0.2s;
  border-radius: 10px;
  transform: ${props => props.isHover ? 'scale(1.05)' : null};
`;
_c6 = BannerImage;
const ContentWrap = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  position: absolute;
  padding: 40px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;
_c7 = ContentWrap;
const Content = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  position: absolute;
  bottom: 40px;
  color: #fff;
  font-weight: 700;
`;
_c8 = Content;
const SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  font-size: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 1.2;
`;
_c9 = SubTitle;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  margin: 8px 0 10px;
  max-height: 88px;
  font-size: 32px;
`;
_c10 = Title;
const ContentProfile = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: block;
  font-size: 12px;
  font-weight: 400;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
_c11 = ContentProfile;
const ProfileImage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.attrs({
  src: '/images/Main/avatar.png'
})`
  display: inline-block;
  width: 22px;
  height: 22px;
  margin-right: 3px;
  border-radius: 100%;
  vertical-align: -6px;
  background-size: cover;
  background-position: 50%;
`;
_c12 = ProfileImage;
const More = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  position: absolute;
  bottom: 40px;
  right: 40px;
  width: 140px;
  padding: 18px 0 17px;
  text-align: center;
  font-size: 15px;
  background-color: ${props => props.isHover ? '#35c5f0' : 'transparent'};
  border: ${props => props.isHover ? 'none' : '1px solid #fff'};
  border-radius: 4px;
  color: #fff;
  transition: background-color 0.1s, border 0.1s;
  font-weight: 700;
`;
_c13 = More;
const BannerRight = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  width: 267px;
  margin-left: 16px;

  .slick-prev,
  .slick-next {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    transition: 0.2s;
  }

  .slick-prev:hover,
  .slick-next:hover {
    background-color: #35c5f0;
  }

  .slick-next:before,
  .slick-prev:before {
    position: absolute;
    transform: translate(-50%, -50%);
    font-size: 40px;
  }

  .slick-prev,
  .slick-next {
    top: 470px;
    z-index: 101;
  }

  .slick-prev {
    left: 10px;
  }

  .slick-next {
    right: 10px;
  }
`;
_c14 = BannerRight;
const ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  margin: 0;
  overflow: hidden;
  border-radius: 10px;
`;
_c15 = ImageContainer;
const Image = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img`
  max-width: 100%;
  max-height: 100%;
  transition: 0.2s;
  overflow: hidden;
  &:hover {
    transform: scale(1.05);
  }
`;
_c16 = Image;
const StyledSlider = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a)`
  .slickDots {
    position: absolute;
    padding: 0;
    width: 100%;
    bottom: 20px;
    list-style: none;
    text-align: center;
    z-index: 100;
  }
  .slickDots li {
    display: inline-block;
    position: relative;
    padding: 0;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  .slickDots li button {
    display: block;
    width: 20px;
    height: 20px;
    padding: 5px;
    font-size: 0;
    line-height: 0;
    color: transparent;
    border: 0;
    outline: 0;
    background: 0 0;
    cursor: pointer;
  }

  .slickDots li button:before {
    content: '•';
    position: absolute;
    width: 20px;
    height: 20px;
    top: 0;
    left: 0;
    color: #fff;
    font-size: 2.7rem;
    line-height: 20px;
    text-align: center;
    opacity: 0.75;
  }

  .slickDots li.slick-active button:before {
    opacity: 0.75;
    color: #35c5f0;
  }
`;
_c17 = StyledSlider;
const BannerLeftBottom = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  -moz-align-items: center;
  align-items: center;
  z-index: 0;
  top: -64px;
  width: 267px;
  border-radius: 10px;
  position: relative;
  height: 60px;
  padding: 10px 5px;
  background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.3));
`;
_c18 = BannerLeftBottom;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18;

__webpack_require__.$Refresh$.register(_c, "HomeHead");
__webpack_require__.$Refresh$.register(_c2, "Container");
__webpack_require__.$Refresh$.register(_c3, "Row");
__webpack_require__.$Refresh$.register(_c4, "BannerLeft");
__webpack_require__.$Refresh$.register(_c5, "StoryLink");
__webpack_require__.$Refresh$.register(_c6, "BannerImage");
__webpack_require__.$Refresh$.register(_c7, "ContentWrap");
__webpack_require__.$Refresh$.register(_c8, "Content");
__webpack_require__.$Refresh$.register(_c9, "SubTitle");
__webpack_require__.$Refresh$.register(_c10, "Title");
__webpack_require__.$Refresh$.register(_c11, "ContentProfile");
__webpack_require__.$Refresh$.register(_c12, "ProfileImage");
__webpack_require__.$Refresh$.register(_c13, "More");
__webpack_require__.$Refresh$.register(_c14, "BannerRight");
__webpack_require__.$Refresh$.register(_c15, "ImageContainer");
__webpack_require__.$Refresh$.register(_c16, "Image");
__webpack_require__.$Refresh$.register(_c17, "StyledSlider");
__webpack_require__.$Refresh$.register(_c18, "BannerLeftBottom");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Pages/Main/Main.js":
/*!********************************!*\
  !*** ./src/Pages/Main/Main.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Head_HomeHead__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Head/HomeHead */ "./src/Pages/Main/Head/HomeHead.js");
/* harmony import */ var _Filter_FilterBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Filter/FilterBar */ "./src/Pages/Main/Filter/FilterBar.js");
/* harmony import */ var _Feeds__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Feeds */ "./src/Pages/Main/Feeds.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config */ "./src/config.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/mac/Desktop/WECODE/21-2nd-YourHouseToday-frontend/src/Pages/Main/Main.js",
    _s = __webpack_require__.$Refresh$.signature();











function Main(props) {
  _s();

  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const [feedData, setFeedData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [display, setDisplay] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [value, setValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([0, 80]);
  const [title, setTitle] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('모든 평수');
  const [colorToggle, setColorToggle] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [selectedList, setSelectedList] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [items, setItems] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(8);
  const [preItems, setPreItems] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);

  function makeQueryString(event) {
    const sumString = event.reduce((prev, curr) => prev + `&${curr.query}`, '');
    return sumString;
  }

  function handleInput(event) {
    setValue(event);

    if (event[0] === 0 && event[1] === 80) {
      setTitle('모든 평수');
    } else if (event[0] === 0) {
      setTitle(event[1] + '평 이하');
    } else if (event[1] === 80) {
      setTitle(event[0] + '평 이상');
    } else if (event[0] > 0 && event[1] < 80) {
      setTitle(event[0] + ' - ' + event[1] + '평');
    }
  }

  function addFilterInput() {
    const newFilter = [...selectedList];
    let query;

    if (value[0] === 0) {
      query = `&max-size=${value[1]}`;
    } else if (value[1] === 80) {
      query = `min-size=${value[0]}`;
    } else if (value[0] > 0 && value[1] < 80) {
      query = `min-size=${value[0]}&max-size=${value[1]}`;
    }

    const sizeFilter = {
      tapId: 4,
      name: title,
      query: query
    };
    let index = -1;

    for (let i = 0; i < newFilter.length; i++) {
      if (sizeFilter.tapId === newFilter[i].tapId) {
        index = i;
        break;
      }
    }

    if (index !== -1) newFilter.splice(index, 1);
    setSelectedList(newFilter.concat(sizeFilter));
  }

  function toggleButton(index, event) {
    let newValue = [...value];
    setValue([newValue[0] = index * 10 + 1, newValue[1] = (index + 1) * 10]);
    setTitle([newValue[0] + ' - ' + newValue[1]] + '평');
    addFilter(event);
  }

  function handleReset() {
    setValue([0, 80]);
    setTitle('모든 평수');
  }

  function handleColorToggle(index) {
    if (colorToggle === index) {
      setColorToggle(null);
    } else setColorToggle(index);
  }

  function addFilter(event) {
    const newFilter = [...selectedList];
    let index = -1;

    for (let i = 0; i < newFilter.length; i++) {
      if (newFilter[i].tapId === event.tapId) {
        index = i;
        break;
      }
    }

    if (index !== -1) newFilter.splice(index, 1);
    setSelectedList(newFilter.concat(event));
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const query = makeQueryString([...selectedList]);
    fetch(`${_config__WEBPACK_IMPORTED_MODULE_6__["API"]}/postings?${query}`).then(response => response.json()).then(data => {
      setFeedData(data.result);
    });
    props.history.push(`/postings?${query}`);
  }, [selectedList]);

  function deleteFilter(tapId) {
    setSelectedList(selectedList.filter(user => user.tapId !== tapId));
  }

  function clearFilter() {
    setSelectedList([]);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetch(`${_config__WEBPACK_IMPORTED_MODULE_6__["API"]}/postings`).then(response => response.json()).then(res => {
      const resultdata = res.result.slice(preItems, items);
      setFeedData([...feedData, ...resultdata]);
      setLoading(false);
    });
    window.addEventListener('scroll', () => infiniteScroll());
    props.history.push(`/postings`);
    return () => {
      window.removeEventListener('scroll', () => infiniteScroll());
    };
  }, [items]);

  function infiniteScroll() {
    const {
      documentElement,
      body
    } = document;
    const scrollHeight = Math.max(documentElement.scrollHeight, body.scrollHeight);
    const scrollTop = Math.max(documentElement.scrollTop, body.scrollTop);
    const clientHeight = documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      setPreItems(items);
      setItems(items + 8);
    }
  }

  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 151,
    columnNumber: 23
  }, this);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_Head_HomeHead__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_Filter_FilterBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      setDisplay: setDisplay,
      display: display,
      addFilter: addFilter,
      title: title,
      handleReset: handleReset,
      handleInput: handleInput,
      addFilterInput: addFilterInput,
      value: value,
      toggleButton: toggleButton,
      handleColorToggle: handleColorToggle,
      colorToggle: colorToggle,
      selectedList: selectedList,
      deleteFilter: deleteFilter,
      clearFilter: clearFilter
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(CardWrap, {
      children: feedData.map((el, index) => {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_Feeds__WEBPACK_IMPORTED_MODULE_5__["default"], {
          data: el
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 18
        }, this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Main, "eO30sei/QLtaHk3uzWqxvxnZq3M=");

_c = Main;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Main));
const CardWrap = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  display: flex;
  position: relative;
  margin-right: auto;
  margin-left: auto;
  width: 1136px;
  margin-top: 30px;
  padding-top: 0px;
  max-width: 100%;
  min-height: 1px;
  transform: translateY(0px);
  flex: 0 0 auto;
  flex-wrap: wrap;
`;
_c3 = CardWrap;

var _c, _c2, _c3;

__webpack_require__.$Refresh$.register(_c, "Main");
__webpack_require__.$Refresh$.register(_c2, "%default%");
__webpack_require__.$Refresh$.register(_c3, "CardWrap");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Pages/Mypage/EmptyBox.js":
/*!**************************************!*\
  !*** ./src/Pages/Mypage/EmptyBox.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/mac/Desktop/WECODE/21-2nd-YourHouseToday-frontend/src/Pages/Mypage/EmptyBox.js";





function EmptyBox() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(CardItemWrap, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(CardItem, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Empty, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(CardItem, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Empty, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(CardItem, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Empty, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(CardItem, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Empty, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_c = EmptyBox;
/* harmony default export */ __webpack_exports__["default"] = (EmptyBox);
const CardItemWrap = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
`;
_c2 = CardItemWrap;
const CardItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  position: absolute;
  padding-right: 10px;
  padding-left: 10px;
  width: 100%;
  min-height: 1px;
  flex: 0 0 25%;
  max-width: 25%;
  z-index: 0;

  &:nth-child(2) {
    left: 25%;
  }

  &:nth-child(3) {
    left: 50%;
  }

  &:nth-child(4) {
    left: 75%;
  }
`;
_c3 = CardItem;
const Empty = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  &:after {
    display: block;
    padding-top: 100%;
    background-color: #f5f5f5;
    content: '';
  }
`;
_c4 = Empty;

var _c, _c2, _c3, _c4;

__webpack_require__.$Refresh$.register(_c, "EmptyBox");
__webpack_require__.$Refresh$.register(_c2, "CardItemWrap");
__webpack_require__.$Refresh$.register(_c3, "CardItem");
__webpack_require__.$Refresh$.register(_c4, "Empty");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Pages/Mypage/MyPageData.js":
/*!****************************************!*\
  !*** ./src/Pages/Mypage/MyPageData.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const MyPageData = [{
  navOwnerMenu: [{
    id: 1,
    name: '프로필'
  }, {
    id: 2,
    name: '나의 쇼핑'
  }, {
    id: 3,
    name: '나의 리뷰'
  }, {
    id: 4,
    name: '설정'
  }]
}, {
  navContentList: [{
    id: 1,
    name: '모두보기'
  }, {
    id: 2,
    name: '사진'
  }, {
    id: 3,
    name: '집들이'
  }, {
    id: 4,
    name: '노하우'
  }, {
    id: 5,
    name: '질문과답변'
  }, {
    id: 6,
    name: '스크랩북'
  }, {
    id: 7,
    name: '좋아요'
  }, {
    id: 8,
    name: '나의활동'
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (MyPageData);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Pages/Mypage/Mypage.js":
/*!************************************!*\
  !*** ./src/Pages/Mypage/Mypage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _MyPageData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyPageData */ "./src/Pages/Mypage/MyPageData.js");
/* harmony import */ var _EmptyBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EmptyBox */ "./src/Pages/Mypage/EmptyBox.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/mac/Desktop/WECODE/21-2nd-YourHouseToday-frontend/src/Pages/Mypage/Mypage.js",
    _s = __webpack_require__.$Refresh$.signature();








function Mypage() {
  _s();

  const [active, SetActive] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [trendList, setTrendList] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [myPhoto, setMyPhoto] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetch('/data/Mypage/mypage.json').then(response => response.json()).then(data => {
      setMyPhoto(data.result);
    });
    fetch('/data/Mypage/main.json').then(response => response.json()).then(data => {
      setTrendList(data.result);
    });
  }, []);
  const CUT_ITEM = [{
    id: 1,
    name: '스크랩북',
    count: 122,
    url: 'images/MyPage/ribbon.png'
  }, {
    id: 2,
    name: '좋아요',
    count: 1301,
    url: 'images/MyPage/heart.png'
  }, {
    id: 3,
    name: '내쿠폰',
    count: 10,
    url: 'images/MyPage/tickets.png'
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(UserShowLayOut, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(WrapNav, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(NavOwner, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(NavOwnerContents, {
            children: _MyPageData__WEBPACK_IMPORTED_MODULE_2__["default"][0].navOwnerMenu.map(item => {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(NavItem, {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(OwnerItem, {
                  children: item.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 40,
                  columnNumber: 21
                }, this)
              }, item.id, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 19
              }, this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(NavContent, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(NavContents, {
            children: _MyPageData__WEBPACK_IMPORTED_MODULE_2__["default"][1].navContentList.map(item => {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(NavItem, {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(ContentItem, {
                  onClick: () => SetActive(item.id - 1),
                  children: [item.name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(BarItem, {
                    display: active === item.id - 1
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 53,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 51,
                  columnNumber: 21
                }, this)
              }, item.id, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 19
              }, this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Container, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Row, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(WrapProfile, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(StikyContainer, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(StikyChild, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(UserName, {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(UserNameShare, {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(ShareButton, {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Icon, {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 69,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 68,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 67,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(UserNameContainer, {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(ProfileImageContent, {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(ProfileImage, {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 74,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 73,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(ProfileInfo, {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(ProfileInfoName, {
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
                          children: "Rnanfsid"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 78,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 77,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(ProfileInfoFollow, {
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(FollowText, {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("a", {
                            children: ["\uD314\uB85C\uC6CC", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(HighLight, {
                              children: " 81"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 84,
                              columnNumber: 31
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 82,
                            columnNumber: 29
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 81,
                          columnNumber: 27
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(FollowBar, {}, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 87,
                          columnNumber: 27
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(FollowText, {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("a", {
                            children: ["\uD314\uB85C\uC789", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(HighLight, {
                              children: " 39"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 91,
                              columnNumber: 31
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 89,
                            columnNumber: 29
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 88,
                          columnNumber: 27
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 80,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(ProfileInfoActions, {
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(ProfileInfoBtn, {
                          children: "\uC124\uC815"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 96,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 95,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 76,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 72,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(UserNameLinks, {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(ShortCut, {
                      children: CUT_ITEM.map(item => {
                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(ShortCutItem, {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CutItemLink, {
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(ShortCutIconWrap, {
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(ShortCutIcon, {
                                src: item.url
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 107,
                                columnNumber: 35
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 106,
                              columnNumber: 33
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(ShortCutText, {
                              children: item.name
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 109,
                              columnNumber: 33
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(ShortCutText, {
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(BoldText, {
                                children: item.count
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 111,
                                columnNumber: 35
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 110,
                              columnNumber: 33
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 105,
                            columnNumber: 31
                          }, this)
                        }, item.id, false, {
                          fileName: _jsxFileName,
                          lineNumber: 104,
                          columnNumber: 29
                        }, this);
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 101,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 100,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(FooterInfo, {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(FooterLink, {
                    children: ["\uCE5C\uAD6C \uCD08\uB300\uD558\uACE0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(BoldPoint, {
                      children: " 5,000P "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 123,
                      columnNumber: 23
                    }, this), "\uBC1B\uAE30", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(ArrowIcon, {
                      src: "images/MyPage/right-arrow.png"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 125,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 121,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(WrapContents, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Contents, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(PostCard, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(PostTitle, {
                  children: ["\uC0AC\uC9C4", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("strong", {
                    children: [" ", myPhoto.length]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 136,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 134,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(PostCardList, {
                  margin: myPhoto.length === 0,
                  children: [myPhoto.length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(PostUpload, {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(UploadIcon, {
                      src: "images/MyPage/plus.png"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 141,
                      columnNumber: 25
                    }, this), "\uCCAB \uBC88\uC9F8 \uC0AC\uC9C4\uC744 \uC62C\uB824\uBCF4\uC138\uC694"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 140,
                    columnNumber: 23
                  }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_EmptyBox__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 145,
                    columnNumber: 23
                  }, this), myPhoto.map((item, index) => {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CardItem, {
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CardImageWrap, {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CardImage, {
                            src: item.cardImage
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 152,
                            columnNumber: 31
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 151,
                          columnNumber: 29
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 150,
                        columnNumber: 27
                      }, this)
                    }, index, false, {
                      fileName: _jsxFileName,
                      lineNumber: 149,
                      columnNumber: 25
                    }, this);
                  })]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 138,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(PostUploadBtn, {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(UploadIcon, {
                    src: "images/MyPage/plus.png"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 160,
                    columnNumber: 21
                  }, this), "\uC0AC\uC9C4 \uC62C\uB9AC\uAE30"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 159,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(PostCard, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(PostTitle, {
                  children: "\uD2B8\uB80C\uB4DC"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 165,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(PostCardList, {
                  children: trendList.map((item, index) => {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CardItem, {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CardImageWrap, {
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CardImage, {
                          src: item.cardImage
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 171,
                          columnNumber: 29
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 170,
                        columnNumber: 27
                      }, this)
                    }, index, false, {
                      fileName: _jsxFileName,
                      lineNumber: 169,
                      columnNumber: 25
                    }, this);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 166,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(PostUploadBtn, {
                  children: ["\uC804\uCCB4 \uBCF4\uAE30", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(MoreIcon, {
                    src: "images/MyPage/right-arrow.png"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 179,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 177,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 164,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_s(Mypage, "ki3kw2mu/nZGhmTUTDMIbvuYV3s=");

_c = Mypage;
/* harmony default export */ __webpack_exports__["default"] = (Mypage);
const UserShowLayOut = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  position: relative;
`;
_c2 = UserShowLayOut;
const WrapNav = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  position: relative;
  width: 100%;
  margin: 0 auto;
`;
_c3 = WrapNav;
const NavOwner = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].nav`
  width: 100%;
  border-bottom: 1px solid #ededed;
  font-size: 18px;
`;
_c4 = NavOwner;
const NavOwnerContents = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul`
  text-align: center;
  white-space: nowrap;
`;
_c5 = NavOwnerContents;
const NavItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li`
  display: inline-block;
  margin-left: 30px;

  &:first-child {
    margin-left: 0;
  }
`;
_c6 = NavItem;
const OwnerItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a`
  position: relative;
  display: block;
  padding: 0 10px;
  height: 60px;
  font-weight: 700;
  line-height: 60px;
  transition: color 0.15s ease;

  &:hover {
    color: #35c5f0;
  }
`;
_c7 = OwnerItem;
const NavContent = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].nav`
  width: 100%;
  border-bottom: 1px solid #ededed;
  overflow: hidden;
`;
_c8 = NavContent;
const NavContents = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul`
  text-align: center;
  white-space: nowrap;
`;
_c9 = NavContents;
const ContentItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a`
  position: relative;
  display: block;
  padding: 0 10px;
  height: 60px;
  font-weight: 700;
  line-height: 60px;
  transition: color 0.15s ease;

  &:hover {
    color: #35c5f0;
  }
`;
_c10 = ContentItem;
const BarItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  position: absolute;
  display: ${props => props.display ? 'block' : 'none'};
  width: 100%;
  height: 4px;
  left: 0;
  bottom: 0;
  background: #35c5f0;
`;
_c11 = BarItem;
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  width: 1136px;
  margin-right: auto;
  margin-left: auto;
  max-width: 100%;
  min-height: 1px;
  margin-bottom: 40px;
`;
_c12 = Container;
const Row = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  margin-right: -10px;
  margin-left: -10px;
  flex-wrap: wrap;
`;
_c13 = Row;
const WrapProfile = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  position: relative;
  padding: 30px 10px 0;
  width: 100%;
  min-height: 1px;
  order: 1;
  flex: 0 0 25%;
`;
_c14 = WrapProfile;
const StikyContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  position: sticky;
  top: 81px;
`;
_c15 = StikyContainer;
const StikyChild = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  position: relative;
`;
_c16 = StikyChild;
const UserName = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  margin-top: 20px;
  padding: 30px 25px 0;
  border: 1px solid #dadce0;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgb(63 71 77 / 6%);
`;
_c17 = UserName;
const UserNameShare = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  position: absolute;
  top: 18px;
  right: 12px;
`;
_c18 = UserNameShare;
const ShareButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button`
  background: transparent;
  transition: opacity 0.1s;
  border: none;
`;
_c19 = ShareButton;
const Icon = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.attrs({
  src: 'images/MyPage/share.png'
})`
  width: 24px;
  height: 24px;
`;
_c20 = Icon;
const UserNameContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  margin-bottom: 20px;
  flex-direction: column;
  align-items: center;
`;
_c21 = UserNameContainer;
const ProfileImageContent = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  margin-right: 0;
  margin-bottom: 24px;
  width: 120px;
  height: 120px;
  border-radius: 100%;
  border: 1px solid rgba(0, 0, 0, 0.07);
  overflow: hidden;
`;
_c22 = ProfileImageContent;
const ProfileImage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.attrs({
  src: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/default_images/avatar.png?gif=1&w=144&h=144&c=c'
})`
  width: 100%;
  height: 100%;
`;
_c23 = ProfileImage;
const ProfileInfo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  max-width: 100%;
  align-items: center;
  flex-direction: column;
`;
_c24 = ProfileInfo;
const ProfileInfoName = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  margin-bottom: 10px;
  color: #292929;
  font-size: 26px;
  line-height: 1.15;
  font-weight: 700;
  word-break: break-all;
  letter-spacing: normal;
  font-stretch: normal;
  font-style: normal;
  align-items: center;
  text-align: center;
  overflow-wrap: break-word;
`;
_c25 = ProfileInfoName;
const ProfileInfoFollow = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  margin-bottom: 16px;
  color: #828c94;
  font-weight: 400;
  font-size: 13px;
  line-height: 1;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  align-self: center;
  align-items: center;
`;
_c26 = ProfileInfoFollow;
const FollowText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: inline-block;
  padding-left: 10px;
  padding-right: 10px;
  transition: opacity 0.1s;
`;
_c27 = FollowText;
const HighLight = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span`
  margin-top: 10px;
  color: #525b61;
  font-weight: 700;
`;
_c28 = HighLight;
const FollowBar = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  margin-top: 1px;
  margin-left: 2px;
  margin-right: 2px;
  width: 1px;
  height: 9px;
  background-color: #dadce0;
`;
_c29 = FollowBar;
const ProfileInfoActions = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  justify-content: center;
`;
_c30 = ProfileInfoActions;
const ProfileInfoBtn = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a`
  display: block;
  padding: 6px 16px;
  min-width: 28px;
  background-color: #fff;
  color: #292929;
  border-radius: 4px;
  border: 1px solid #eaebef;
  font-size: 12px;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  transition: background-color 0.3s ease, color 0.3s ease, border 0.3s;
`;
_c31 = ProfileInfoBtn;
const UserNameLinks = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  padding: 24px 0;
  justify-content: center;
  border-top: 1px solid #eaebef;
`;
_c32 = UserNameLinks;
const ShortCut = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  width: 100%;
`;
_c33 = ShortCut;
const ShortCutItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  max-width: 33.33333%;
  font-weight: 700;
  text-align: center;
  flex: 1;
  transition: opacity 0.1s;
`;
_c34 = ShortCutItem;
const CutItemLink = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a`
  display: block;
  width: 100%;
`;
_c35 = CutItemLink;
const ShortCutIconWrap = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  position: relative;
  margin: 0 auto 4px;
`;
_c36 = ShortCutIconWrap;
const ShortCutText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  color: #424242;
  font-size: 13px;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
`;
_c37 = ShortCutText;
const BoldText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].b`
  display: block;
  margin: 0 2px;
  font-size: 15px;
`;
_c38 = BoldText;
const FooterInfo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  margin-top: 14px;
`;
_c39 = FooterInfo;
const FooterLink = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a`
  display: block;
  padding: 14px 0;
  min-width: 28px;
  background-color: #effbff;
  color: #3f474d;
  font-size: 14px;
  border: 1px solid #effbff;
  border-radius: 4px;
  font-stretch: normal;
  font-style: normal;
  text-align: center;
  transition: background-color 0.3s ease, color 0.3s ease, border 0.3s;
  line-height: 1.5;
  letter-spacing: -0.28px;
`;
_c40 = FooterLink;
const BoldPoint = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span`
  color: #35c5f0;
  font-weight: 700;
`;
_c41 = BoldPoint;
const WrapContents = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  position: relative;
  width: 100%;
  max-width: 66.6666666667%;
  padding-right: 10px;
  padding-left: 10px;
  margin-left: 8.3333333333%;
  min-height: 1px;
  flex: 0 0 66.6666666667%;
  order: 2;
`;
_c42 = WrapContents;
const Contents = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  padding-top: 50px;
`;
_c43 = Contents;
const PostCard = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section`
  position: relative;
  margin-bottom: 60px;
`;
_c44 = PostCard;
const PostTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h5`
  position: relative;
  margin-bottom: 20px;
  color: #000;
  font-weight: 700;
  font-size: 18px;

  strong {
    color: #35c5f0;
  }
`;
_c45 = PostTitle;
const PostUpload = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a`
  display: flex;
  width: 100%;
  padding: 80px 0;
  color: #757575;
  border: 1px dashed #dbdbdb;
  font-weight: 700;
  font-size: 13px;
  align-items: center;
  justify-content: center;
  &:hover {
    text-decoration: underline;
  }
`;
_c46 = PostUpload;
const ShortCutIcon = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img`
  width: 28px;
  height: 28px;
`;
_c47 = ShortCutIcon;
const UploadIcon = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img`
  margin-right: 5px;
  width: 12px;
  height: 12px;
  margin-top: -3px;
`;
_c48 = UploadIcon;
const ArrowIcon = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img`
  margin-left: 10px;
  margin-bottom: 3px;
  width: 12px;
  height: 12px;
  vertical-align: middle;
`;
_c49 = ArrowIcon;
const PostCardList = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  margin: ${props => props.margin ? '0 ' : '0 -10px'};
  flex-wrap: wrap;
`;
_c50 = PostCardList;
const CardItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  position: relative;
  padding-right: 10px;
  padding-left: 10px;
  width: 100%;
  min-height: 1px;
  flex: 0 0 25%;
  max-width: 25%;
`;
_c51 = CardItem;
const CardImageWrap = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  position: relative;
  margin-bottom: 20px;
  overflow: hidden;
  &:after {
    display: block;
    padding-bottom: 100%;
    content: '';
    background-color: #f5f5f5;
  }
`;
_c52 = CardImageWrap;
const CardImage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img`
  position: absolute;
  display: block;
  left: 50%;
  top: 50%;
  width: 100%;
  border-radius: 6px;
  transform: translate(-50%, -50%);
`;
_c53 = CardImage;
const Empty = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  &:after {
    display: block;
    padding-top: 100%;
    background-color: #f5f5f5;
    content: '';
  }
`;
const PostUploadBtn = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a`
  display: inline-block;
  margin-top: 30px;
  padding: 21px 0;
  height: 60px;
  width: 100%;
  background-color: #ffffff;
  color: #757575;
  border-radius: 4px;
  border-color: #dbdbdb;
  line-height: 1;
  font-size: 15px;
  border-width: 1px;
  border-style: solid;
  text-align: center;
  font-weight: bold;
`;
_c54 = PostUploadBtn;
const MoreIcon = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img`
  margin-left: 5px;
  width: 12px;
  height: 12px;
`;
_c55 = MoreIcon;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23, _c24, _c25, _c26, _c27, _c28, _c29, _c30, _c31, _c32, _c33, _c34, _c35, _c36, _c37, _c38, _c39, _c40, _c41, _c42, _c43, _c44, _c45, _c46, _c47, _c48, _c49, _c50, _c51, _c52, _c53, _c54, _c55;

__webpack_require__.$Refresh$.register(_c, "Mypage");
__webpack_require__.$Refresh$.register(_c2, "UserShowLayOut");
__webpack_require__.$Refresh$.register(_c3, "WrapNav");
__webpack_require__.$Refresh$.register(_c4, "NavOwner");
__webpack_require__.$Refresh$.register(_c5, "NavOwnerContents");
__webpack_require__.$Refresh$.register(_c6, "NavItem");
__webpack_require__.$Refresh$.register(_c7, "OwnerItem");
__webpack_require__.$Refresh$.register(_c8, "NavContent");
__webpack_require__.$Refresh$.register(_c9, "NavContents");
__webpack_require__.$Refresh$.register(_c10, "ContentItem");
__webpack_require__.$Refresh$.register(_c11, "BarItem");
__webpack_require__.$Refresh$.register(_c12, "Container");
__webpack_require__.$Refresh$.register(_c13, "Row");
__webpack_require__.$Refresh$.register(_c14, "WrapProfile");
__webpack_require__.$Refresh$.register(_c15, "StikyContainer");
__webpack_require__.$Refresh$.register(_c16, "StikyChild");
__webpack_require__.$Refresh$.register(_c17, "UserName");
__webpack_require__.$Refresh$.register(_c18, "UserNameShare");
__webpack_require__.$Refresh$.register(_c19, "ShareButton");
__webpack_require__.$Refresh$.register(_c20, "Icon");
__webpack_require__.$Refresh$.register(_c21, "UserNameContainer");
__webpack_require__.$Refresh$.register(_c22, "ProfileImageContent");
__webpack_require__.$Refresh$.register(_c23, "ProfileImage");
__webpack_require__.$Refresh$.register(_c24, "ProfileInfo");
__webpack_require__.$Refresh$.register(_c25, "ProfileInfoName");
__webpack_require__.$Refresh$.register(_c26, "ProfileInfoFollow");
__webpack_require__.$Refresh$.register(_c27, "FollowText");
__webpack_require__.$Refresh$.register(_c28, "HighLight");
__webpack_require__.$Refresh$.register(_c29, "FollowBar");
__webpack_require__.$Refresh$.register(_c30, "ProfileInfoActions");
__webpack_require__.$Refresh$.register(_c31, "ProfileInfoBtn");
__webpack_require__.$Refresh$.register(_c32, "UserNameLinks");
__webpack_require__.$Refresh$.register(_c33, "ShortCut");
__webpack_require__.$Refresh$.register(_c34, "ShortCutItem");
__webpack_require__.$Refresh$.register(_c35, "CutItemLink");
__webpack_require__.$Refresh$.register(_c36, "ShortCutIconWrap");
__webpack_require__.$Refresh$.register(_c37, "ShortCutText");
__webpack_require__.$Refresh$.register(_c38, "BoldText");
__webpack_require__.$Refresh$.register(_c39, "FooterInfo");
__webpack_require__.$Refresh$.register(_c40, "FooterLink");
__webpack_require__.$Refresh$.register(_c41, "BoldPoint");
__webpack_require__.$Refresh$.register(_c42, "WrapContents");
__webpack_require__.$Refresh$.register(_c43, "Contents");
__webpack_require__.$Refresh$.register(_c44, "PostCard");
__webpack_require__.$Refresh$.register(_c45, "PostTitle");
__webpack_require__.$Refresh$.register(_c46, "PostUpload");
__webpack_require__.$Refresh$.register(_c47, "ShortCutIcon");
__webpack_require__.$Refresh$.register(_c48, "UploadIcon");
__webpack_require__.$Refresh$.register(_c49, "ArrowIcon");
__webpack_require__.$Refresh$.register(_c50, "PostCardList");
__webpack_require__.$Refresh$.register(_c51, "CardItem");
__webpack_require__.$Refresh$.register(_c52, "CardImageWrap");
__webpack_require__.$Refresh$.register(_c53, "CardImage");
__webpack_require__.$Refresh$.register(_c54, "PostUploadBtn");
__webpack_require__.$Refresh$.register(_c55, "MoreIcon");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Pages/SignUp/SignUp.js":
/*!************************************!*\
  !*** ./src/Pages/SignUp/SignUp.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



class SignUp extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SignUp);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Pages/Writing/Writing.js":
/*!**************************************!*\
  !*** ./src/Pages/Writing/Writing.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_CategoryBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/CategoryBox */ "./src/Pages/Writing/components/CategoryBox.js");
/* harmony import */ var _components_UploadPhoto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/UploadPhoto */ "./src/Pages/Writing/components/UploadPhoto.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/mac/Desktop/WECODE/21-2nd-YourHouseToday-frontend/src/Pages/Writing/Writing.js",
    _s = __webpack_require__.$Refresh$.signature();








function Writing() {
  _s();

  const [isDroped, setIsDroped] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [isChanged, setIsChanged] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [imgFile, setImgFile] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [previewUrl, setPreviewUrl] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [colorPick, setColorPick] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    back_color: '',
    item_color: ''
  });
  const [selectInput, setSelectInput] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    size: '평수',
    type: '주거형태',
    style: '스타일',
    roomType: '공간',
    back_color: '배경',
    item_color: '소품',
    textData: ''
  });
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useHistory"])();

  const selectForm = e => {
    setIsDroped(false);
    const {
      name,
      value,
      id
    } = e.target;
    setColorPick({ ...colorPick,
      [name]: id
    });
    setSelectInput({ ...selectInput,
      [name]: value
    });
  };

  const handleText = e => {
    const currentTextarea = { ...selectInput,
      textData: e.target.value
    };
    setSelectInput(currentTextarea);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    for (let i = 0; i < 6; i++) {
      isChanged.push(0);
    }
  }, [isChanged]);

  const handleDrop = idx => {
    setIsDroped(idx);
    isChanged[idx] = 1;
    setIsChanged(isChanged);
  };

  const showImg = e => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setImgFile(file);
      setPreviewUrl(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    const sendObject = {
      size: selectInput.size,
      housing_type: selectInput.type,
      style: selectInput.style,
      back_color: selectInput.back_color,
      item_color: selectInput.item_color,
      text: selectInput.textData
    };
    const validate = {
      size: size => size !== '평수',
      housing_type: housing_type => housing_type !== '주거형태',
      style: style => style !== '스타일',
      back_color: back_color => back_color !== '배경',
      item_color: item_color => item_color !== '소품',
      text: textData => textData !== ''
    };

    const isAllChecked = data => {
      for (let name in data) {
        const value = data[name];
        const validateFunction = validate[name];
        let result = validateFunction(value);
        if (!result) return false;
      }

      return true;
    };

    if (isAllChecked(sendObject) && imgFile !== '') {
      const fileData = new FormData();
      fileData.append('image', imgFile);
      fileData.append('info', JSON.stringify(sendObject));
      fetch('http://10.58.4.129:8000/postings', {
        method: 'post',
        headers: {
          Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjJ9.W0grRe41iPCBjg0AB4vIgyClD0YmHuU9HWhBRW7k_Vc'
        },
        body: fileData
      }).then(res => {
        if (res.status !== 201) return alert('항목을 모두 입력해주세요');
        alert('게시물이 업로드 되었습니다.');
        history.push('/');
      });
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Container, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(HeaderBox, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Header, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
          to: '/',
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Logo, {
            alt: "\uB85C\uACE0",
            src: "/Images/\uC624\uB298\uC758\uC9D1 \uB85C\uACE0.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Submit, {
          onClick: handleSubmit,
          children: "\uC62C\uB9AC\uAE30"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(WritingNav, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(PostType, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Photo, {
          children: "\uC0AC\uC9C4"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Video, {
          children: ["\uB3D9\uC601\uC0C1", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            children: "new"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(MainContainer, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Main, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_CategoryBox__WEBPACK_IMPORTED_MODULE_2__["default"], {
          isDroped: isDroped,
          isChanged: isChanged,
          colorPick: colorPick,
          handleDrop: handleDrop,
          selectInput: selectInput,
          selectForm: selectForm
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_UploadPhoto__WEBPACK_IMPORTED_MODULE_3__["default"], {
          showImg: showImg,
          previewUrl: previewUrl,
          imgFile: imgFile
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Aside, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(CategroyName, {
          onClick: () => handleDrop(5),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Category, {
            isChanged: isChanged[5],
            children: selectInput.roomType
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
            className: "fas fa-sort-down"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(DropList, {
          dropDown: isDroped === 5 ? true : false,
          children: ROOM_LIST.map((room, idx) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("button", {
            name: "roomType",
            value: room.name,
            onClick: selectForm,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(RoomName, {
              children: room.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 17
            }, this)
          }, idx, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 15
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(TextBox, {
          placeholder: "\uC0AC\uC9C4\uC5D0 \uB300\uD574 \uC124\uBA85\uD574\uC8FC\uC138\uC694.",
          onChange: handleText
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 118,
    columnNumber: 5
  }, this);
}

_s(Writing, "a3b/m3iOez0sXKm5ilUAz6Z3UWc=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useHistory"]];
});

_c = Writing;
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div``;
_c2 = Container;
const HeaderBox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].header`
  border-bottom: 1px solid #ededed;
`;
_c3 = HeaderBox;
const Header = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  margin: 0 320px;
`;
_c4 = Header;
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img`
  height: 50px;
`;
_c5 = Logo;
const Submit = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button`
  height: 45px;
  width: 135px;
  border-radius: 4px;
  background-color: #35c5f0;
  font-weight: 700;
  font-size: 16px;
  color: #fff;
`;
_c6 = Submit;
const WritingNav = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  height: 48px;
  border-bottom: 1px solid #ededed;
`;
_c7 = WritingNav;
const PostType = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  margin: 0 320px;
`;
_c8 = PostType;
const Photo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button`
  width: 40px;
  margin-right: 40px;
  padding: 14px 0;
  font-weight: 700;
  font-size: 16px;
  color: #424242;

  &:hover {
    border-bottom: 2px solid #35c5f0;
  }
`;
_c9 = Photo;
const Video = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button`
  display: flex;
  align-items: flex-start;
  padding: 14px 0;
  font-weight: 700;
  font-size: 16px;
  color: #424242;

  &:hover {
    border-bottom: 2px solid #35c5f0;
  }

  div {
    width: 28px;
    margin-left: 4px;
    padding-bottom: 1px;
    border-radius: 3px;
    background-color: #f77;
    font-weight: 400;
    font-size: 12px;
    color: #fff;
  }
`;
_c10 = Video;
const MainContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  margin: 0px 320px;
`;
_c11 = MainContainer;
const Main = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].main`
  position: relative;
  height: 800px;
  margin: 0 50px;
  padding: 40px 10px;
`;
_c12 = Main;
const Aside = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].aside`
  width: 400px;
  height: 400px;
  margin-top: 90px;
`;
_c13 = Aside;
const TextBox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].textarea`
  width: 100%;
  height: 145px;
  resize: none;
  margin-top: 20px;
  padding: 8px 15px 9px;
  border-color: #dbdbdb;
  border-radius: 4px;
  font-size: 15px;
  outline: none;
  cursor: text;

  &::placeholder {
    color: #dbdbdb;
  }

  &:focus {
    box-shadow: 1px 1px 5px 1px rgb(98, 165, 230);
  }
`;
_c14 = TextBox;
const CategroyName = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  width: 100%;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #dbdbdb;
  background-color: #fff;
  font-size: 14px;
  color: #dbdbdb;

  &:hover {
    color: #35c5f0;

    span{
      color: #35c5f0;
    }
  }

  
  }
`;
_c15 = CategroyName;
const Category = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span`
  margin-right: 230px;
  color: ${props => !props.isChanged ? '#dbdbdb' : '#424242'};
  &:hover {
    color: #35c5f0;
  }
`;
_c16 = Category;
const DropList = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: inherit;

  button {
    display: ${props => !props.dropDown ? 'none' : 'block'};
    height: 40px;
    padding-top: 8px;
    border: 1px solid #ededed;
    border-top: none;
    background-color: #fff;
    color: #424242;

    &:hover {
      background-color: #ededed;
    }
  }
`;
_c17 = DropList;
const RoomName = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span`
  margin-right: 290px;
`;
_c18 = RoomName;
const ROOM_LIST = [{
  name: '원룸'
}, {
  name: '거실'
}, {
  name: '침실'
}, {
  name: '주방'
}, {
  name: '욕실'
}, {
  name: '아이방'
}, {
  name: '드레스룸'
}, {
  name: '서재&작업실'
}, {
  name: '베란다'
}, {
  name: '사무공간'
}, {
  name: '상업공간'
}, {
  name: '가구&소품'
}, {
  name: '현관'
}, {
  name: '외관&기타'
}];
/* harmony default export */ __webpack_exports__["default"] = (Writing);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18;

__webpack_require__.$Refresh$.register(_c, "Writing");
__webpack_require__.$Refresh$.register(_c2, "Container");
__webpack_require__.$Refresh$.register(_c3, "HeaderBox");
__webpack_require__.$Refresh$.register(_c4, "Header");
__webpack_require__.$Refresh$.register(_c5, "Logo");
__webpack_require__.$Refresh$.register(_c6, "Submit");
__webpack_require__.$Refresh$.register(_c7, "WritingNav");
__webpack_require__.$Refresh$.register(_c8, "PostType");
__webpack_require__.$Refresh$.register(_c9, "Photo");
__webpack_require__.$Refresh$.register(_c10, "Video");
__webpack_require__.$Refresh$.register(_c11, "MainContainer");
__webpack_require__.$Refresh$.register(_c12, "Main");
__webpack_require__.$Refresh$.register(_c13, "Aside");
__webpack_require__.$Refresh$.register(_c14, "TextBox");
__webpack_require__.$Refresh$.register(_c15, "CategroyName");
__webpack_require__.$Refresh$.register(_c16, "Category");
__webpack_require__.$Refresh$.register(_c17, "DropList");
__webpack_require__.$Refresh$.register(_c18, "RoomName");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Pages/Writing/components/CategoryBox.js":
/*!*****************************************************!*\
  !*** ./src/Pages/Writing/components/CategoryBox.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/mac/Desktop/WECODE/21-2nd-YourHouseToday-frontend/src/Pages/Writing/components/CategoryBox.js";




function CategoryBox({
  isDroped,
  isChanged,
  selectForm,
  selectInput,
  handleDrop,
  colorPick
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(CategoryContainer, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(TopWrapper, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(CategroyName, {
          onClick: () => handleDrop(0),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Category, {
            isChanged: isChanged[0],
            children: selectInput.size
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
            className: "fas fa-sort-down"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(DropList, {
          dropDown: isDroped === 0 ? true : false,
          children: SIZE_LIST.map((size, idx) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HouseBtn, {
            name: "size",
            value: size.name,
            onClick: selectForm,
            children: size.name
          }, idx, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 15
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(CategroyName, {
          onClick: () => handleDrop(1),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Category, {
            isChanged: isChanged[1],
            children: selectInput.type
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
            className: "fas fa-sort-down"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(DropList, {
          dropDown: isDroped === 1 ? true : false,
          children: TYPE_LIST.map((type, idx) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HouseBtn, {
            name: "type",
            value: type.name,
            onClick: selectForm,
            children: type.name
          }, idx, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 15
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(CategroyName, {
          onClick: () => handleDrop(2),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Category, {
            isChanged: isChanged[2],
            children: selectInput.style
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
            className: "fas fa-sort-down"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(DropList, {
          dropDown: isDroped === 2 ? true : false,
          children: STYLE_LIST.map((style, idx) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HouseBtn, {
            name: "style",
            value: style.name,
            onClick: selectForm,
            children: style.name
          }, idx, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 15
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(LowWrapper, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(CategroyName, {
          onClick: () => handleDrop(3),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Category, {
            isChanged: isChanged[3],
            children: [colorPick.back_color === '' ? null : '배경 - ', selectInput.back_color]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, this), colorPick.back_color === '' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
            className: "fas fa-sort-down"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 15
          }, this) : null]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(DropList, {
          dropDown: isDroped === 3 ? true : false,
          children: COLOR_LIST.map((color, idx) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ColorBtn, {
              name: "back_color",
              id: color.color,
              value: color.name,
              onClick: selectForm,
              circle: color.color,
              children: [color.name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(PreviewColor, {
                preview: color.color
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(SelectedBackColor, {
              selected: colorPick.back_color
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 17
            }, this)]
          }, idx, true, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 15
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(CategroyName, {
          onClick: () => handleDrop(4),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Category, {
            isChanged: isChanged[4],
            children: [colorPick.item_color === '' ? null : '소품 - ', selectInput.item_color]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 13
          }, this), colorPick.item_color === '' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
            className: "fas fa-sort-down"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 15
          }, this) : null]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(DropList, {
          dropDown: isDroped === 4 ? true : false,
          children: COLOR_LIST.map((color, idx) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ColorBtn, {
              name: "item_color",
              id: color.color,
              value: color.name,
              onClick: selectForm,
              circle: color.color,
              children: [color.name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(PreviewColor, {
                preview: color.color
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(SelectedItemColor, {
              selected: colorPick.item_color
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 17
            }, this)]
          }, idx, true, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 15
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

_c = CategoryBox;
const CategoryContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 40px;
`;
_c2 = CategoryContainer;
const TopWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  justify-content: space-around;
  width: inherit;
`;
_c3 = TopWrapper;
const LowWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  button {
    width: 235px;
  }
`;
_c4 = LowWrapper;
const CategroyName = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button`
  position: relative;
  width: 150px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #dbdbdb;
  background-color: #fff;
  font-size: 14px;
  color: #dbdbdb;
  z-index: 2;

  &:hover {
    color: #35c5f0;

    span {
      color: #35c5f0;
    }
  }
`;
_c5 = CategroyName;
const Category = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span`
  margin-right: 30px;
  color: ${props => !props.isChanged ? '#dbdbdb' : '#424242'};
`;
_c6 = Category;
const DropList = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  position: absolute;
  z-index: 3;

  button {
    display: ${props => !props.dropDown ? 'none' : 'flex'};
  }
`;
_c7 = DropList;
const HouseBtn = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button`
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 40px;
  padding-top: 8px;
  border: 1px solid #dbdbdb;
  border-top: none;
  background-color: #fff;
  color: #424242;
  &:hover {
    background-color: #dbdbdb;
  }
`;
_c8 = HouseBtn;
const ColorBtn = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button`
  justify-content: flex-start;
  align-items: center;
  height: 40px;
  padding-top: 8px;
  padding-left: 25px;
  border: 1px solid #dbdbdb;
  border-top: none;
  background-color: #fff;
  color: #424242;
  &:hover {
    background-color: ${props => props.circle || '#fff'};
    color: ${props => props.circle !== 'rgb(255,255,255)' ? '#fff' : '#ededed'};
  }
`;
_c9 = ColorBtn;
const SelectedBackColor = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  position: absolute;
  top: -30px;
  left: 172px;
  width: 40px;
  height: 20px;
  border-radius: 4px;
  border: ${props => props.selected === 'rgb(255,255,255)' ? '1px solid #ededed' : 'none'};
  background-color: ${props => props.selected};
`;
_c10 = SelectedBackColor;
const SelectedItemColor = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(SelectedBackColor)``;
_c11 = SelectedItemColor;
const PreviewColor = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  position: absolute;
  left: 80%;
  width: 20px;
  height: 20px;
  margin-bottom: 5px;
  border-radius: 100%;
  border: ${props => props.preview !== 'rgb(255,255,255)' ? 'none' : '1px solid #dbdbdb'};
  background-color: ${props => props.preview || '#fff'};
`;
_c12 = PreviewColor;
const SIZE_LIST = [{
  name: '10평대 미만'
}, {
  name: '10평대'
}, {
  name: '20평대'
}, {
  name: '30평대 '
}, {
  name: '40평대 '
}, {
  name: '50평대 이상'
}];
const TYPE_LIST = [{
  name: '원룸&오피스텔'
}, {
  name: '아파트'
}, {
  name: '빌라'
}, {
  name: '단독주택'
}, {
  name: '사무공간'
}, {
  name: '상업공간'
}, {
  name: '기타'
}];
const STYLE_LIST = [{
  name: '모던'
}, {
  name: '북유럽'
}, {
  name: '빈티지'
}, {
  name: '내추럴 '
}, {
  name: '프로방스'
}, {
  name: '클래식'
}, {
  name: '한국'
}, {
  name: '유니크'
}];
const COLOR_LIST = [{
  name: '블랙',
  color: 'rgb(0,0,0)'
}, {
  name: '화이트',
  color: 'rgb(255,255,255)'
}, {
  name: '그레이',
  color: 'rgb(189,189,189)'
}, {
  name: '베이지',
  color: 'rgb(244,231,197)'
}, {
  name: '라이트 브라운',
  color: 'rgb(232,192,120)'
}, {
  name: '브라운',
  color: 'rgb(100,65,52)'
}, {
  name: '레드',
  color: 'rgb(233,55,54)'
}, {
  name: '핑크',
  color: 'rgb(238,138,148)'
}, {
  name: '옐로우',
  color: 'rgb(254,209,68)'
}, {
  name: '그린',
  color: 'rgb(150,215,131)'
}, {
  name: '민트',
  color: 'rgb(144,208,197)'
}, {
  name: '블루',
  color: 'rgb(61,151,221)'
}, {
  name: '네이비',
  color: 'rgb(34,62,95)'
}];
/* harmony default export */ __webpack_exports__["default"] = (CategoryBox);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;

__webpack_require__.$Refresh$.register(_c, "CategoryBox");
__webpack_require__.$Refresh$.register(_c2, "CategoryContainer");
__webpack_require__.$Refresh$.register(_c3, "TopWrapper");
__webpack_require__.$Refresh$.register(_c4, "LowWrapper");
__webpack_require__.$Refresh$.register(_c5, "CategroyName");
__webpack_require__.$Refresh$.register(_c6, "Category");
__webpack_require__.$Refresh$.register(_c7, "DropList");
__webpack_require__.$Refresh$.register(_c8, "HouseBtn");
__webpack_require__.$Refresh$.register(_c9, "ColorBtn");
__webpack_require__.$Refresh$.register(_c10, "SelectedBackColor");
__webpack_require__.$Refresh$.register(_c11, "SelectedItemColor");
__webpack_require__.$Refresh$.register(_c12, "PreviewColor");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Pages/Writing/components/UploadPhoto.js":
/*!*****************************************************!*\
  !*** ./src/Pages/Writing/components/UploadPhoto.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/mac/Desktop/WECODE/21-2nd-YourHouseToday-frontend/src/Pages/Writing/components/UploadPhoto.js";




function UploadPhoto({
  showImg,
  previewUrl,
  imgFile
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(PhotoBox, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(InputLable, {
      htmlFor: "uploadbutton",
      isfile: previewUrl !== '',
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
        className: "fas fa-camera"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this), "\uC0AC\uC9C4 \uC62C\uB9AC\uAE30", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
        children: "(*\uCD5C\uB300 1\uC7A5\uAE4C\uC9C0)\x1C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(PhotoInput, {
      id: "uploadbutton",
      type: "file",
      accept: "image/jpg,image/png,image/jpeg,image/gif",
      onChange: showImg
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), previewUrl && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ViewImg, {
      alt: "\uC5C5\uB85C\uB4DC\uC774\uBBF8\uC9C0",
      src: previewUrl
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 22
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

_c = UploadPhoto;
const PhotoBox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
_c2 = PhotoBox;
const InputLable = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].label`
  display: ${props => props.isfile ? 'none' : 'flex'};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 500px;
  margin-top: 70px;
  border: 1px solid #ebebeb;
  border-bottom-color: #e2e2e2;
  border-radius: 10px;
  vertical-align: middle;
  background-color: #ededed;
  font-weight: 700;
  font-size: 16px;
  color: #828c94;
  cursor: pointer;

  i {
    margin-bottom: 20px;
    font-size: 60px;
  }

  span {
    margin-top: 20px;
    font-weight: 400;
    font-size: 12px;
  }
`;
_c3 = InputLable;
const PhotoInput = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;
_c4 = PhotoInput;
const ViewImg = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img`
  position: absolute;
  width: 500px;
  margin-top: 70px;
  border-radius: 10px;
  z-index: 1;
`;
_c5 = ViewImg;
/* harmony default export */ __webpack_exports__["default"] = (UploadPhoto);

var _c, _c2, _c3, _c4, _c5;

__webpack_require__.$Refresh$.register(_c, "UploadPhoto");
__webpack_require__.$Refresh$.register(_c2, "PhotoBox");
__webpack_require__.$Refresh$.register(_c3, "InputLable");
__webpack_require__.$Refresh$.register(_c4, "PhotoInput");
__webpack_require__.$Refresh$.register(_c5, "ViewImg");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Routes.js":
/*!***********************!*\
  !*** ./src/Routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Pages_Main_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pages/Main/Main */ "./src/Pages/Main/Main.js");
/* harmony import */ var _Pages_Writing_Writing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pages/Writing/Writing */ "./src/Pages/Writing/Writing.js");
/* harmony import */ var _Pages_FeedDetail_FeedDetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Pages/FeedDetail/FeedDetail */ "./src/Pages/FeedDetail/FeedDetail.js");
/* harmony import */ var _Pages_Login_Login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pages/Login/Login */ "./src/Pages/Login/Login.js");
/* harmony import */ var _Pages_Login_EditUserName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Pages/Login/EditUserName */ "./src/Pages/Login/EditUserName.js");
/* harmony import */ var _Pages_SignUp_SignUp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Pages/SignUp/SignUp */ "./src/Pages/SignUp/SignUp.js");
/* harmony import */ var _Pages_Mypage_Mypage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Pages/Mypage/Mypage */ "./src/Pages/Mypage/Mypage.js");
/* harmony import */ var _Components_Nav_Nav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Components/Nav/Nav */ "./src/Components/Nav/Nav.js");
/* harmony import */ var _Components_Footer_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Components/Footer/Footer */ "./src/Components/Footer/Footer.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/mac/Desktop/WECODE/21-2nd-YourHouseToday-frontend/src/Routes.js";













class Routes extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_Components_Nav_Nav__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          exact: true,
          path: "/postings",
          component: _Pages_Main_Main__WEBPACK_IMPORTED_MODULE_2__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          exact: true,
          path: "/writing",
          component: _Pages_Writing_Writing__WEBPACK_IMPORTED_MODULE_3__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          exact: true,
          path: "/feedDetail",
          component: _Pages_FeedDetail_FeedDetail__WEBPACK_IMPORTED_MODULE_4__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          exact: true,
          path: "/feedDetail/:id",
          component: _Pages_FeedDetail_FeedDetail__WEBPACK_IMPORTED_MODULE_4__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          exact: true,
          path: "/login",
          component: _Pages_Login_Login__WEBPACK_IMPORTED_MODULE_5__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          exact: true,
          path: "/editusername",
          component: _Pages_Login_EditUserName__WEBPACK_IMPORTED_MODULE_6__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          exact: true,
          path: "/signup",
          component: _Pages_SignUp_SignUp__WEBPACK_IMPORTED_MODULE_7__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          exact: true,
          path: "/mypage",
          component: _Pages_Mypage_Mypage__WEBPACK_IMPORTED_MODULE_8__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_Components_Footer_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Routes);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Styles/GlobalStyle.js":
/*!***********************************!*\
  !*** ./src/Styles/GlobalStyle.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_reset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-reset */ "./node_modules/styled-reset/lib/esm/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
  ${styled_reset__WEBPACK_IMPORTED_MODULE_1__["default"]};

* {
  box-sizing: border-box;
  font-family: 'Noto Sans KR', sans-serif;
}
button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}
img {
  object-fit: cover;
}
input[type='checkbox'] {
  cursor: pointer;
}
a {
  text-decoration: none;
  cursor: pointer;
}
html {
  overflow-x: hidden;
}

`;
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyle);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Styles/index.css":
/*!******************************!*\
  !*** ./src/Styles/index.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Styles/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Styles/index.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Styles/index.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/Styles/theme.js":
/*!*****************************!*\
  !*** ./src/Styles/theme.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const theme = {};
/* harmony default export */ __webpack_exports__["default"] = (theme);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: GET_EDITINFO_API, GET_SIGNIN_API, GET_SIGNUP_API, API */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_EDITINFO_API", function() { return GET_EDITINFO_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SIGNIN_API", function() { return GET_SIGNIN_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SIGNUP_API", function() { return GET_SIGNUP_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const BASE_URL = 'http://13.125.156.74:8000';
const GET_EDITINFO_API = `${BASE_URL}/users/nickname-check`;
const GET_SIGNIN_API = `${BASE_URL}/users/signin`;
const GET_SIGNUP_API = `${BASE_URL}/users/signup`;
const API = 'http://13.125.156.74:8000';

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Routes */ "./src/Routes.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Styles_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Styles/theme */ "./src/Styles/theme.js");
/* harmony import */ var _Styles_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Styles/GlobalStyle */ "./src/Styles/GlobalStyle.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/mac/Desktop/WECODE/21-2nd-YourHouseToday-frontend/src/index.js";








react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_Styles_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: _Styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"],
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_Routes__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined)]
}, void 0, true), document.getElementById('root'));

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ 1:
/*!**********************************************************************************************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/mac/Desktop/WECODE/21-2nd-YourHouseToday-frontend/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/mac/Desktop/WECODE/21-2nd-YourHouseToday-frontend/node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js */"./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
__webpack_require__(/*! /Users/mac/Desktop/WECODE/21-2nd-YourHouseToday-frontend/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/mac/Desktop/WECODE/21-2nd-YourHouseToday-frontend/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main","vendors~main"]]]);
//# sourceMappingURL=main.chunk.js.map