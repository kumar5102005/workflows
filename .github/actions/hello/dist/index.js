/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 761:
/***/ ((module) => {

module.exports = eval("require")("./@actions/core");


/***/ }),

/***/ 729:
/***/ ((module) => {

module.exports = eval("require")("./@actions/github");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
const core = __nccwpck_require__(761);
const github = __nccwpck_require__(729);

try{

core.debug("debug");
core.error("error");
core.warning("warning");

const who_to_greet = core.getInput("who_to_greet");

console.log(`hello ${who_to_greet}`);

const time = new Date();
core.setOutput("time", time.toTimeString());

core.exportVariable("TIME", time);

core.startGroup("logging the github context");
console.log(JSON.stringify(github.context, null, 2));
core.endGroup();

}catch(error){
    core.setFailed(error.message);
}

module.exports = __webpack_exports__;
/******/ })()
;