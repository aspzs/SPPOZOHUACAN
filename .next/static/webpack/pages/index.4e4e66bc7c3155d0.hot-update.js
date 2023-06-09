"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./components/Header/index.js\");\n/* harmony import */ var _components_ServiceCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ServiceCard */ \"./components/ServiceCard/index.js\");\n/* harmony import */ var _components_Socials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Socials */ \"./components/Socials/index.js\");\n/* harmony import */ var _components_WorkCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/WorkCard */ \"./components/WorkCard/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ \"./utils/index.js\");\n/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../animations */ \"./animations/index.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Button */ \"./components/Button/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _components_Cursor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Cursor */ \"./components/Cursor/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _data_portfolio_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../data/portfolio.json */ \"./data/portfolio.json\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// Local Data\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    _s();\n    // Ref\n    var workRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var aboutRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var textOne = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var textTwo = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var textThree = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var textFour = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    // Handling Scroll\n    var handleWorkScroll = function() {\n        window.scrollTo({\n            top: workRef.current.offsetTop,\n            left: 0,\n            behavior: \"smooth\"\n        });\n    };\n    var handleAboutScroll = function() {\n        window.scrollTo({\n            top: aboutRef.current.offsetTop,\n            left: 0,\n            behavior: \"smooth\"\n        });\n    };\n    (0,_utils__WEBPACK_IMPORTED_MODULE_6__.useIsomorphicLayoutEffect)(function() {\n        (0,_animations__WEBPACK_IMPORTED_MODULE_7__.stagger)([\n            textOne.current,\n            textTwo.current,\n            textThree.current,\n            textFour.current\n        ], {\n            y: 40,\n            x: -10,\n            transform: \"scale(0.95) skew(10deg)\"\n        }, {\n            y: 0,\n            x: 0,\n            transform: \"scale(1)\"\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative \".concat(_data_portfolio_json__WEBPACK_IMPORTED_MODULE_14__.showCursor && \"cursor-none\"),\n        children: [\n            _data_portfolio_json__WEBPACK_IMPORTED_MODULE_14__.showCursor && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Cursor__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/a00001/Desktop/ADMAGUAS/SPPOZOHUACAN/SPPOZOHUACAN/pages/index.js\",\n                lineNumber: 55,\n                columnNumber: 27\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_9___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Sistema de Agua Potable de San Pedro Pozohuacan\"\n                }, void 0, false, {\n                    fileName: \"/Users/a00001/Desktop/ADMAGUAS/SPPOZOHUACAN/SPPOZOHUACAN/pages/index.js\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/a00001/Desktop/ADMAGUAS/SPPOZOHUACAN/SPPOZOHUACAN/pages/index.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto mb-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        handleWorkScroll: handleWorkScroll,\n                        handleAboutScroll: handleAboutScroll\n                    }, void 0, false, {\n                        fileName: \"/Users/a00001/Desktop/ADMAGUAS/SPPOZOHUACAN/SPPOZOHUACAN/pages/index.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"laptop:mt-20 mt-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-9\",\n                            id: \"titulo\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    ref: textOne,\n                                    className: \"text-xl tablet:text-2xl laptop:text-3xl laptopl:text-3xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5\",\n                                    children: _data_portfolio_json__WEBPACK_IMPORTED_MODULE_14__.headerTaglineOne\n                                }, void 0, false, {\n                                    fileName: \"/Users/a00001/Desktop/ADMAGUAS/SPPOZOHUACAN/SPPOZOHUACAN/pages/index.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    id: \"texto\",\n                                    ref: textTwo,\n                                    className: \"text-3xl tablet:text-3xl laptop:text-3xl laptopl:text-6xl tablet:p-2 text-bold laptop:w-4/5\",\n                                    children: _data_portfolio_json__WEBPACK_IMPORTED_MODULE_14__.headerTaglineTwo\n                                }, void 0, false, {\n                                    fileName: \"/Users/a00001/Desktop/ADMAGUAS/SPPOZOHUACAN/SPPOZOHUACAN/pages/index.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    id: \"imagenTitulo\",\n                                    src: \"https://raw.githubusercontent.com/aspzs/SPPOZOHUACAN/main/sanpedro.jpeg\",\n                                    alt: \"Girl in a jacket\",\n                                    width: \"auto\",\n                                    height: \"auto\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/a00001/Desktop/ADMAGUAS/SPPOZOHUACAN/SPPOZOHUACAN/pages/index.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/a00001/Desktop/ADMAGUAS/SPPOZOHUACAN/SPPOZOHUACAN/pages/index.js\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/a00001/Desktop/ADMAGUAS/SPPOZOHUACAN/SPPOZOHUACAN/pages/index.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-10 laptop:mt-30 p-2 laptop:p-0\",\n                        ref: workRef,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-2xl text-center font-semibold text-blue-900\",\n                                children: \"Avisos\"\n                            }, void 0, false, {\n                                fileName: \"/Users/a00001/Desktop/ADMAGUAS/SPPOZOHUACAN/SPPOZOHUACAN/pages/index.js\",\n                                lineNumber: 86,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-2 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-4 gap-4\",\n                                id: \"avisosDivs\",\n                                children: _data_portfolio_json__WEBPACK_IMPORTED_MODULE_14__.projects.map(function(project) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_WorkCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        img: project.imageSrc,\n                                        name: project.title,\n                                        description: project.description,\n                                        onClick: function() {\n                                            return window.open(project.url);\n                                        }\n                                    }, project.id, false, {\n                                        fileName: \"/Users/a00001/Desktop/ADMAGUAS/SPPOZOHUACAN/SPPOZOHUACAN/pages/index.js\",\n                                        lineNumber: 89,\n                                        columnNumber: 15\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/a00001/Desktop/ADMAGUAS/SPPOZOHUACAN/SPPOZOHUACAN/pages/index.js\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/a00001/Desktop/ADMAGUAS/SPPOZOHUACAN/SPPOZOHUACAN/pages/index.js\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-10 laptop:mt-30 p-2 laptop:p-0\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"tablet:m-10 text-center text-2xl font-semibold text-blue-900\",\n                                children: \"Formas de contacto\"\n                            }, void 0, false, {\n                                fileName: \"/Users/a00001/Desktop/ADMAGUAS/SPPOZOHUACAN/SPPOZOHUACAN/pages/index.js\",\n                                lineNumber: 101,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6\",\n                                children: [\n                                    _data_portfolio_json__WEBPACK_IMPORTED_MODULE_14__.services.map(function(service, index) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ServiceCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                            name: service.title,\n                                            description: service.description\n                                        }, index, false, {\n                                            fileName: \"/Users/a00001/Desktop/ADMAGUAS/SPPOZOHUACAN/SPPOZOHUACAN/pages/index.js\",\n                                            lineNumber: 104,\n                                            columnNumber: 15\n                                        }, _this);\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        children: service.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/a00001/Desktop/ADMAGUAS/SPPOZOHUACAN/SPPOZOHUACAN/pages/index.js\",\n                                        lineNumber: 110,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/a00001/Desktop/ADMAGUAS/SPPOZOHUACAN/SPPOZOHUACAN/pages/index.js\",\n                                lineNumber: 102,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/a00001/Desktop/ADMAGUAS/SPPOZOHUACAN/SPPOZOHUACAN/pages/index.js\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"laptop:mt-0 p-2 laptop:p-0\",\n                        ref: aboutRef,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"tablet:m-10 text-center text-2xl font-semibold text-blue-900\",\n                                children: \"Nosotros\"\n                            }, void 0, false, {\n                                fileName: \"/Users/a00001/Desktop/ADMAGUAS/SPPOZOHUACAN/SPPOZOHUACAN/pages/index.js\",\n                                lineNumber: 116,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"tablet:m-10 laptop:text-2xl opacity-80\",\n                                style: {\n                                    whiteSpace: \"pre-line\"\n                                },\n                                children: _data_portfolio_json__WEBPACK_IMPORTED_MODULE_14__.aboutpara\n                            }, void 0, false, {\n                                fileName: \"/Users/a00001/Desktop/ADMAGUAS/SPPOZOHUACAN/SPPOZOHUACAN/pages/index.js\",\n                                lineNumber: 117,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/a00001/Desktop/ADMAGUAS/SPPOZOHUACAN/SPPOZOHUACAN/pages/index.js\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"tablet:m-10 text-right text-3xl font-semibold text-blue-900\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Socials__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            className: \"laptop:mt-5\"\n                        }, void 0, false, {\n                            fileName: \"/Users/a00001/Desktop/ADMAGUAS/SPPOZOHUACAN/SPPOZOHUACAN/pages/index.js\",\n                            lineNumber: 122,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/a00001/Desktop/ADMAGUAS/SPPOZOHUACAN/SPPOZOHUACAN/pages/index.js\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/a00001/Desktop/ADMAGUAS/SPPOZOHUACAN/SPPOZOHUACAN/pages/index.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/a00001/Desktop/ADMAGUAS/SPPOZOHUACAN/SPPOZOHUACAN/pages/index.js\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"bh5xM4nhTHnijH5aCZVObLoQP10=\", false, function() {\n    return [\n        _utils__WEBPACK_IMPORTED_MODULE_6__.useIsomorphicLayoutEffect\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VjtxQ0FDSCxDQUFDO2tEQUNGLDhEQUFDQyxHQUFDO2tEQUFFRixPQUFPLENBQUN0QixLQUFLOzs7Ozs0Q0FBSzs7Ozs7O29DQUNsQjs7Ozs7OzRCQUNGO2tDQUdOLDhEQUFDSCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsNEJBQTRCO3dCQUFDSyxHQUFHLEVBQUV2QixRQUFROzswQ0FDekQsOERBQUNzQixJQUFFO2dDQUFDSixTQUFTLEVBQUMsOERBQThEOzBDQUFDLFVBQVE7Ozs7O29DQUFLOzBDQUN4Riw4REFBQzJCLEdBQUM7Z0NBQUMzQixTQUFTLEVBQUMsd0NBQXlDO2dDQUFDNEIsS0FBSyxFQUFFO29DQUFFQyxVQUFVLEVBQUUsVUFBVTtpQ0FBRTswQ0FDckZsRCw0REFBYzs7Ozs7b0NBQ2I7Ozs7Ozs0QkFDQTtrQ0FDTiw4REFBQ29CLEtBQUc7d0JBQUNDLFNBQVMsRUFBQyw2REFBNkQ7a0NBQzVFLDRFQUFDL0IsMkRBQU87NEJBQUMrQixTQUFTLEVBQUMsYUFBYTs7Ozs7Z0NBQUc7Ozs7OzRCQUM3Qjs7Ozs7O29CQUNGOzs7Ozs7WUFDRixDQUNOO0NBQ0g7R0E1R3VCcEIsSUFBSTs7UUEwQjFCVCw2REFBeUI7OztBQTFCSFMsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBTZXJ2aWNlQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9TZXJ2aWNlQ2FyZFwiO1xuaW1wb3J0IFNvY2lhbHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvU29jaWFsc1wiO1xuaW1wb3J0IFdvcmtDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL1dvcmtDYXJkXCI7XG5pbXBvcnQgeyB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0IH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5pbXBvcnQgeyBzdGFnZ2VyIH0gZnJvbSBcIi4uL2FuaW1hdGlvbnNcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL0J1dHRvblwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEN1cnNvciBmcm9tIFwiLi4vY29tcG9uZW50cy9DdXJzb3JcIjtcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuXG4vLyBMb2NhbCBEYXRhXG5pbXBvcnQgZGF0YSBmcm9tIFwiLi4vZGF0YS9wb3J0Zm9saW8uanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAvLyBSZWZcbiAgY29uc3Qgd29ya1JlZiA9IHVzZVJlZigpO1xuICBjb25zdCBhYm91dFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCB0ZXh0T25lID0gdXNlUmVmKCk7XG4gIGNvbnN0IHRleHRUd28gPSB1c2VSZWYoKTtcbiAgY29uc3QgdGV4dFRocmVlID0gdXNlUmVmKCk7XG4gIGNvbnN0IHRleHRGb3VyID0gdXNlUmVmKCk7XG5cbiAgLy8gSGFuZGxpbmcgU2Nyb2xsXG4gIGNvbnN0IGhhbmRsZVdvcmtTY3JvbGwgPSAoKSA9PiB7XG4gICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgIHRvcDogd29ya1JlZi5jdXJyZW50Lm9mZnNldFRvcCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVBYm91dFNjcm9sbCA9ICgpID0+IHtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgdG9wOiBhYm91dFJlZi5jdXJyZW50Lm9mZnNldFRvcCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICB9KTtcbiAgfTtcblxuICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBzdGFnZ2VyKFxuICAgICAgW3RleHRPbmUuY3VycmVudCwgdGV4dFR3by5jdXJyZW50LCB0ZXh0VGhyZWUuY3VycmVudCwgdGV4dEZvdXIuY3VycmVudF0sXG4gICAgICB7IHk6IDQwLCB4OiAtMTAsIHRyYW5zZm9ybTogXCJzY2FsZSgwLjk1KSBza2V3KDEwZGVnKVwiIH0sXG4gICAgICB7IHk6IDAsIHg6IDAsIHRyYW5zZm9ybTogXCJzY2FsZSgxKVwiIH1cbiAgICApO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YHJlbGF0aXZlICR7ZGF0YS5zaG93Q3Vyc29yICYmIFwiY3Vyc29yLW5vbmVcIn1gfT5cbiAgICAgIHtkYXRhLnNob3dDdXJzb3IgJiYgPEN1cnNvciAvPn1cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+U2lzdGVtYSBkZSBBZ3VhIFBvdGFibGUgZGUgU2FuIFBlZHJvIFBvem9odWFjYW48L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gbWItMTBcIj5cbiAgICAgICAgPEhlYWRlclxuICAgICAgICAgIGhhbmRsZVdvcmtTY3JvbGw9e2hhbmRsZVdvcmtTY3JvbGx9XG4gICAgICAgICAgaGFuZGxlQWJvdXRTY3JvbGw9e2hhbmRsZUFib3V0U2Nyb2xsfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhcHRvcDptdC0yMCBtdC0xMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOVwiIGlkPVwidGl0dWxvXCI+XG4gICAgICAgICAgICA8aDFcbiAgICAgICAgICAgICAgcmVmPXt0ZXh0T25lfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRhYmxldDp0ZXh0LTJ4bCBsYXB0b3A6dGV4dC0zeGwgbGFwdG9wbDp0ZXh0LTN4bCBwLTEgdGFibGV0OnAtMiB0ZXh0LWJvbGQgdy00LzUgbW9iOnctZnVsbCBsYXB0b3A6dy00LzVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7ZGF0YS5oZWFkZXJUYWdsaW5lT25lfVxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxoMlxuICAgICAgICAgICAgICBpZD1cInRleHRvXCJcbiAgICAgICAgICAgICAgcmVmPXt0ZXh0VHdvfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LTN4bCB0YWJsZXQ6dGV4dC0zeGwgbGFwdG9wOnRleHQtM3hsIGxhcHRvcGw6dGV4dC02eGwgdGFibGV0OnAtMiB0ZXh0LWJvbGQgbGFwdG9wOnctNC81XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2RhdGEuaGVhZGVyVGFnbGluZVR3b31cbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8aW1nIGlkPVwiaW1hZ2VuVGl0dWxvXCIgc3JjPVwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FzcHpzL1NQUE9aT0hVQUNBTi9tYWluL3NhbnBlZHJvLmpwZWdcIiBhbHQ9XCJHaXJsIGluIGEgamFja2V0XCIgd2lkdGg9XCJhdXRvXCIgaGVpZ2h0PVwiYXV0b1wiPjwvaW1nPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEwIGxhcHRvcDptdC0zMCBwLTIgbGFwdG9wOnAtMFwiIHJlZj17d29ya1JlZn0+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtY2VudGVyIGZvbnQtc2VtaWJvbGQgIHRleHQtYmx1ZS05MDBcIj5Bdmlzb3M8L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMiBsYXB0b3A6bXQtMTAgZ3JpZCBncmlkLWNvbHMtMSB0YWJsZXQ6Z3JpZC1jb2xzLTQgZ2FwLTRcIiBpZD1cImF2aXNvc0RpdnNcIj5cbiAgICAgICAgICAgIHtkYXRhLnByb2plY3RzLm1hcCgocHJvamVjdCkgPT4gKFxuICAgICAgICAgICAgICA8V29ya0NhcmRcbiAgICAgICAgICAgICAgICBrZXk9e3Byb2plY3QuaWR9XG4gICAgICAgICAgICAgICAgaW1nPXtwcm9qZWN0LmltYWdlU3JjfVxuICAgICAgICAgICAgICAgIG5hbWU9e3Byb2plY3QudGl0bGV9XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3Byb2plY3QuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gd2luZG93Lm9wZW4ocHJvamVjdC51cmwpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTAgbGFwdG9wOm10LTMwIHAtMiBsYXB0b3A6cC0wXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRhYmxldDptLTEwIHRleHQtY2VudGVyIHRleHQtMnhsIGZvbnQtc2VtaWJvbGQgdGV4dC1ibHVlLTkwMFwiPkZvcm1hcyBkZSBjb250YWN0bzwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01IHRhYmxldDptLTEwIGdyaWQgZ3JpZC1jb2xzLTEgbGFwdG9wOmdyaWQtY29scy0yIGdhcC02XCI+XG4gICAgICAgICAgICB7ZGF0YS5zZXJ2aWNlcy5tYXAoKHNlcnZpY2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxTZXJ2aWNlQ2FyZFxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgbmFtZT17c2VydmljZS50aXRsZX1cbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17c2VydmljZS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPGE+e3NlcnZpY2UudGl0bGV9PC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIFRoaXMgYnV0dG9uIHNob3VsZCBub3QgZ28gaW50byBwcm9kdWN0aW9uICovfVxuIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhcHRvcDptdC0wIHAtMiBsYXB0b3A6cC0wXCIgcmVmPXthYm91dFJlZn0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0YWJsZXQ6bS0xMCB0ZXh0LWNlbnRlciB0ZXh0LTJ4bCBmb250LXNlbWlib2xkIHRleHQtYmx1ZS05MDBcIj5Ob3NvdHJvczwvaDE+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGFibGV0Om0tMTAgIGxhcHRvcDp0ZXh0LTJ4bCBvcGFjaXR5LTgwXCIgc3R5bGU9e3sgd2hpdGVTcGFjZTogXCJwcmUtbGluZVwiIH19PlxuICAgICAgICAgICAge2RhdGEuYWJvdXRwYXJhfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGV0Om0tMTAgdGV4dC1yaWdodCB0ZXh0LTN4bCBmb250LXNlbWlib2xkIHRleHQtYmx1ZS05MDBcIj5cbiAgICAgICAgPFNvY2lhbHMgY2xhc3NOYW1lPVwibGFwdG9wOm10LTVcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVJlZiIsIkhlYWRlciIsIlNlcnZpY2VDYXJkIiwiU29jaWFscyIsIldvcmtDYXJkIiwidXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCIsInN0YWdnZXIiLCJGb290ZXIiLCJIZWFkIiwiQnV0dG9uIiwiTGluayIsIkN1cnNvciIsIkltYWdlIiwiZGF0YSIsIkhvbWUiLCJ3b3JrUmVmIiwiYWJvdXRSZWYiLCJ0ZXh0T25lIiwidGV4dFR3byIsInRleHRUaHJlZSIsInRleHRGb3VyIiwiaGFuZGxlV29ya1Njcm9sbCIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwiY3VycmVudCIsIm9mZnNldFRvcCIsImxlZnQiLCJiZWhhdmlvciIsImhhbmRsZUFib3V0U2Nyb2xsIiwieSIsIngiLCJ0cmFuc2Zvcm0iLCJkaXYiLCJjbGFzc05hbWUiLCJzaG93Q3Vyc29yIiwidGl0bGUiLCJpZCIsImgxIiwicmVmIiwiaGVhZGVyVGFnbGluZU9uZSIsImgyIiwiaGVhZGVyVGFnbGluZVR3byIsImltZyIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwicHJvamVjdHMiLCJtYXAiLCJwcm9qZWN0IiwiaW1hZ2VTcmMiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJvbkNsaWNrIiwib3BlbiIsInVybCIsInNlcnZpY2VzIiwic2VydmljZSIsImluZGV4IiwiYSIsInAiLCJzdHlsZSIsIndoaXRlU3BhY2UiLCJhYm91dHBhcmEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});