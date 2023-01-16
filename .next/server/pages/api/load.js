"use strict";
(() => {
var exports = {};
exports.id = 259;
exports.ids = [259];
exports.modules = {

/***/ 8181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ load)
});

;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/load.ts


const Load = (req, res)=>{
    const sourceFolder = `pictures`;
    const dir = external_path_default().resolve("./public", sourceFolder);
    const filenames = external_fs_default().readdirSync(dir);
    // filenames = filenames.filter(file => file)
    const images = filenames.map((name)=>external_path_default().join("/", sourceFolder, name));
    const filtered = images.filter((file)=>file.includes(".jpg"));
    res.statusCode = 200;
    res.status(200).json(filtered);
};
/* harmony default export */ const load = (Load);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8181));
module.exports = __webpack_exports__;

})();