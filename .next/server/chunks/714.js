"use strict";
exports.id = 714;
exports.ids = [714];
exports.modules = {

/***/ 5714:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function Navbar() {
    // mobile nav or full
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    return(// navbar
    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `bg-slate-900 text-gray-200 h-12 py-4
        flex flex-col top-0 shadow-md shadow-light-gray
        transition-height duration-1000 ease-in-out
            ${open ? "h-80 md:h-12 rounded-b-lg" : ""}
        `,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                className: `flex flex-row w-full content-start gap-6
                ${open ? "flex-col md:flex-row" : ""}
            `,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: ` ${open ? "pb-4 border-b-[0.5px] border-slate-200 border-solid animate-widthGrowing" : ""}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            className: "ml-4",
                            href: "/",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "Finns\xe4terg\xe5rd"
                            })
                        })
                    }),
                    [
                        [
                            "Home",
                            "/"
                        ],
                        [
                            "Farmen",
                            "/Farmen"
                        ],
                        [
                            "#",
                            "#"
                        ],
                        [
                            "##",
                            "#"
                        ],
                        [
                            "###",
                            "#"
                        ],
                        [
                            "####",
                            "#"
                        ]
                    ].map(([title, url])=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: `md:inline
                    ${open ? "inline ml-4 animate-visibilityGrowing" : "hidden"} `,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: url,
                                className: "hover:bg-slate-700 hover:p-1 rounded-md",
                                children: title
                            }, title)
                        }, title))
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `md:hidden absolute right-6 top-1 cursor-pointer`,
                onClick: ()=>{
                    setOpen(!open);
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `w-6 h-[2px] bg-slate-200 mx-0 my-2
                transform transition duration-700 ease-in-out ${open ? "rotate-45 translate-y-2.5" : ""}
                `
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `w-6 h-[2px] bg-slate-200 mx-0 my-2
                transition duration-700 ease-in-out ${open ? "opacity-0" : ""}
                `
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `w-6 h-[2px] bg-slate-200 mx-0 my-2
                transform transition duration-700 ease-in-out ${open ? "-rotate-45 -translate-y-2.5" : ""}
                `
                    })
                ]
            })
        ]
    }));
}


/***/ })

};
;