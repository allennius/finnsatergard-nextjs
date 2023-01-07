"use strict";
exports.id = 767;
exports.ids = [767];
exports.modules = {

/***/ 6767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Topbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



const closeNavbarOnClick = ()=>{
    document.querySelectorAll("a").forEach((link)=>{
        link.addEventListener("click", function() {
            document.querySelector(".topNav")?.classList.remove("responsive");
            toggleHamburger();
        });
    });
};
const toggleHamburger = ()=>{
    // 3 lines in hamburgerButton
    const line1 = document.querySelector(".bar1");
    const line2 = document.querySelector(".bar2");
    const line3 = document.querySelector(".bar3");
    if (document.querySelector(".topNav")?.classList.contains("responsive")) {
        if (!line1?.classList.contains("change")) {
            line1?.classList.toggle("change");
            line2?.classList.toggle("change");
            line3?.classList.toggle("change");
        }
    } else {
        if (line1?.classList.contains("change")) {
            line1?.classList.toggle("change");
            line2?.classList.toggle("change");
            line3?.classList.toggle("change");
        }
    }
// 3 lines in hamburgerButton
// document.querySelector('.menuButtonContainer').childNodes[0].classList.toggle('change')   
// document.querySelector('.menuButtonContainer').childNodes[1].classList.toggle('change')   
// document.querySelector('.menuButtonContainer').childNodes[2].classList.toggle('change')   
};
const toggleMenuButton = ()=>{
    // toggle Navbar
    document.querySelector(".topNav")?.classList.toggle("responsive");
    toggleHamburger();
};
function Topbar() {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        closeNavbarOnClick();
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "topNav",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                className: "navList",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "navHead",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            className: "navLink",
                            href: "/",
                            children: [
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: " Finns\xe4terg\xe5rd"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: "navItem",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            className: "navLink",
                            href: "/",
                            children: "Home"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: "navItem",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            className: "navLink",
                            href: "/ko",
                            children: "Kossa"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: "navItem",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            className: "navLink",
                            href: "/sheep",
                            children: "F\xe5r"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "menuButtonContainer",
                onClick: ()=>toggleMenuButton(),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "bar1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "bar2"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "bar3"
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;