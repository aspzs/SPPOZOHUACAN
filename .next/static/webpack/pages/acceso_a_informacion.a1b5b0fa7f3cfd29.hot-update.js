"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/acceso_a_informacion",{

/***/ "./pages/acceso_a_informacion/index.js":
/*!*********************************************!*\
  !*** ./pages/acceso_a_informacion/index.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../animations */ \"./animations/index.js\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Button */ \"./components/Button/index.js\");\n/* harmony import */ var _components_Cursor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Cursor */ \"./components/Cursor/index.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Header */ \"./components/Header/index.js\");\n/* harmony import */ var _data_portfolio_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../data/portfolio.json */ \"./data/portfolio.json\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils */ \"./utils/index.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Blog = function(param) {\n    var posts = param.posts;\n    var _this1 = _this;\n    _s();\n    var showBlog = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(_data_portfolio_json__WEBPACK_IMPORTED_MODULE_8__.showBlog);\n    var text = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), mounted = ref[0], setMounted = ref[1];\n    (0,_utils__WEBPACK_IMPORTED_MODULE_9__.useIsomorphicLayoutEffect)(function() {\n        (0,_animations__WEBPACK_IMPORTED_MODULE_4__.stagger)([\n            text.current\n        ], {\n            y: 40,\n            x: -10,\n            transform: \"scale(0.95) skew(10deg)\"\n        }, {\n            y: 0,\n            x: 0,\n            transform: \"scale(1)\"\n        });\n        if (showBlog.current) (0,_animations__WEBPACK_IMPORTED_MODULE_4__.stagger)([\n            text.current\n        ], {\n            y: 30\n        }, {\n            y: 0\n        });\n        else router.push(\"/\");\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        setMounted(true);\n    }, []);\n    return showBlog.current && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            _data_portfolio_json__WEBPACK_IMPORTED_MODULE_8__.showCursor && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Cursor__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/a00001/Desktop/ADMAGUAS/SPPOZOHUACAN/SPPOZOHUACAN/pages/acceso_a_informacion/index.js\",\n                lineNumber: 35,\n                columnNumber: 29\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Acceso a la informaci\\xf3n\"\n                }, void 0, false, {\n                    fileName: \"/Users/a00001/Desktop/ADMAGUAS/SPPOZOHUACAN/SPPOZOHUACAN/pages/acceso_a_informacion/index.js\",\n                    lineNumber: 37,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/a00001/Desktop/ADMAGUAS/SPPOZOHUACAN/SPPOZOHUACAN/pages/acceso_a_informacion/index.js\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto mb-10 \".concat(_data_portfolio_json__WEBPACK_IMPORTED_MODULE_8__.showCursor && \"cursor-none\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        isBlog: true\n                    }, void 0, false, {\n                        fileName: \"/Users/a00001/Desktop/ADMAGUAS/SPPOZOHUACAN/SPPOZOHUACAN/pages/acceso_a_informacion/index.js\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-10\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                ref: text,\n                                className: \"mob:p-2 text-bold text-6xl laptop:text-8xl w-full\",\n                                id: \"avisos\",\n                                children: \"Acceso a la informaci\\xf3n\"\n                            }, void 0, false, {\n                                fileName: \"/Users/a00001/Desktop/ADMAGUAS/SPPOZOHUACAN/SPPOZOHUACAN/pages/acceso_a_informacion/index.js\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: \"seccionDocs\",\n                                className: \"mt-10 grid grid-cols-1 mob:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2 gap-10\",\n                                children: posts && posts.map(function(post) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"cursor-pointer relative\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                className: \"mt-5 text-4xl\",\n                                                children: post.title\n                                            }, void 0, false, {\n                                                fileName: \"/Users/a00001/Desktop/ADMAGUAS/SPPOZOHUACAN/SPPOZOHUACAN/pages/acceso_a_informacion/index.js\",\n                                                lineNumber: 60,\n                                                columnNumber: 21\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"mt-2 opacity-50 text-lg\",\n                                                children: post.preview\n                                            }, void 0, false, {\n                                                fileName: \"/Users/a00001/Desktop/ADMAGUAS/SPPOZOHUACAN/SPPOZOHUACAN/pages/acceso_a_informacion/index.js\",\n                                                lineNumber: 61,\n                                                columnNumber: 21\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: post.vinculo,\n                                                target: \"_blank\",\n                                                rel: \"noreferrer\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    className: \"w-full h-60 rounded-lg shadow-lg object-cover\",\n                                                    src: post.image,\n                                                    alt: post.title\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/a00001/Desktop/ADMAGUAS/SPPOZOHUACAN/SPPOZOHUACAN/pages/acceso_a_informacion/index.js\",\n                                                    lineNumber: 63,\n                                                    columnNumber: 21\n                                                }, _this1)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/a00001/Desktop/ADMAGUAS/SPPOZOHUACAN/SPPOZOHUACAN/pages/acceso_a_informacion/index.js\",\n                                                lineNumber: 62,\n                                                columnNumber: 21\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"text-sm mt-5 opacity-25\",\n                                                children: (0,_utils__WEBPACK_IMPORTED_MODULE_9__.ISOToDate)(post.date)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/a00001/Desktop/ADMAGUAS/SPPOZOHUACAN/SPPOZOHUACAN/pages/acceso_a_informacion/index.js\",\n                                                lineNumber: 69,\n                                                columnNumber: 21\n                                            }, _this1)\n                                        ]\n                                    }, post.slug, true, {\n                                        fileName: \"/Users/a00001/Desktop/ADMAGUAS/SPPOZOHUACAN/SPPOZOHUACAN/pages/acceso_a_informacion/index.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 19\n                                    }, _this1);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/a00001/Desktop/ADMAGUAS/SPPOZOHUACAN/SPPOZOHUACAN/pages/acceso_a_informacion/index.js\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/a00001/Desktop/ADMAGUAS/SPPOZOHUACAN/SPPOZOHUACAN/pages/acceso_a_informacion/index.js\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/a00001/Desktop/ADMAGUAS/SPPOZOHUACAN/SPPOZOHUACAN/pages/acceso_a_informacion/index.js\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Blog, \"aNSfXuIzbUkNDIclDNfIY3nYdfg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _utils__WEBPACK_IMPORTED_MODULE_9__.useIsomorphicLayoutEffect\n    ];\n});\n_c = Blog;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\nvar _c;\n$RefreshReg$(_c, \"Blog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hY2Nlc29fYV9pbmZvcm1hY2lvbi9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNkI7QUFDbUI7QUFDSTtBQUNUO0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDc0I7O0FBRW5FLElBQU1hLElBQUksR0FBRyxnQkFBZTtRQUFaQyxLQUFLLFNBQUxBLEtBQUs7OztJQUNuQixJQUFNQyxRQUFRLEdBQUdYLDZDQUFNLENBQUNNLDBEQUFhLENBQUM7SUFDdEMsSUFBTU0sSUFBSSxHQUFHWiw2Q0FBTSxFQUFFO0lBQ3JCLElBQU1hLE1BQU0sR0FBR2Ysc0RBQVMsRUFBRTtJQUMxQixJQUE4QkcsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQWQvQyxPQWNnQixHQUFnQkEsR0FBZSxHQUEvQixFQWRoQixVQWM0QixHQUFJQSxHQUFlLEdBQW5CO0lBRTFCTyxpRUFBeUIsQ0FBQyxXQUFNO1FBQzlCTixvREFBTyxDQUNMO1lBQUNVLElBQUksQ0FBQ0ksT0FBTztTQUFDLEVBQ2Q7WUFBRUMsQ0FBQyxFQUFFLEVBQUU7WUFBRUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUFFQyxTQUFTLEVBQUUseUJBQXlCO1NBQUUsRUFDdkQ7WUFBRUYsQ0FBQyxFQUFFLENBQUM7WUFBRUMsQ0FBQyxFQUFFLENBQUM7WUFBRUMsU0FBUyxFQUFFLFVBQVU7U0FBRSxDQUN0QyxDQUFDO1FBQ0YsSUFBSVIsUUFBUSxDQUFDSyxPQUFPLEVBQUVkLG9EQUFPLENBQUM7WUFBQ1UsSUFBSSxDQUFDSSxPQUFPO1NBQUMsRUFBRTtZQUFFQyxDQUFDLEVBQUUsRUFBRTtTQUFFLEVBQUU7WUFBRUEsQ0FBQyxFQUFFLENBQUM7U0FBRSxDQUFDLENBQUM7YUFDOURKLE1BQU0sQ0FBQ08sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3ZCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUHJCLGdEQUFTLENBQUMsV0FBTTtRQUNkZ0IsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2xCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFHUCxPQUNFSixRQUFRLENBQUNLLE9BQU8sa0JBQ2Q7O1lBQ0dWLDREQUFlLGtCQUFJLDhEQUFDRiwwREFBTTs7OztxQkFBRzswQkFDOUIsOERBQUNSLGtEQUFJOzBCQUNILDRFQUFDMEIsT0FBSzs4QkFBQyw0QkFBdUI7Ozs7O3lCQUFTOzs7OztxQkFDakM7MEJBQ1IsOERBQUNDLEtBQUc7Z0JBQ0ZDLFNBQVMsRUFBRSwwQkFBeUIsQ0FFbkMsT0FEQ2xCLDREQUFlLElBQUksYUFBYSxDQUNoQzs7a0NBRUYsOERBQUNELDBEQUFNO3dCQUFDb0IsTUFBTSxFQUFFLElBQUk7Ozs7OzZCQUFXO2tDQUMvQiw4REFBQ0YsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLE9BQU87OzBDQUNwQiw4REFBQ0UsSUFBRTtnQ0FDREMsR0FBRyxFQUFFZixJQUFJO2dDQUNUWSxTQUFTLEVBQUMsbURBQW1EO2dDQUM3REksRUFBRSxFQUFDLFFBQVE7MENBQ1osNEJBRUQ7Ozs7O3FDQUFLOzBDQUNMLDhEQUFDTCxLQUFHO2dDQUFDSyxFQUFFLEVBQUMsYUFBYTtnQ0FBQ0osU0FBUyxFQUFDLHFGQUFxRjswQ0FDbEhkLEtBQUssSUFDSkEsS0FBSyxDQUFDbUIsR0FBRyxDQUFDLFNBQUNDLElBQUk7eURBQ2IsOERBQUNQLEtBQUc7d0NBQ0ZDLFNBQVMsRUFBQyx5QkFBeUI7OzBEQUduQyw4REFBQ08sSUFBRTtnREFBQ1AsU0FBUyxFQUFDLGVBQWU7MERBQUVNLElBQUksQ0FBQ1IsS0FBSzs7Ozs7c0RBQU07MERBQy9DLDhEQUFDVSxHQUFDO2dEQUFDUixTQUFTLEVBQUMseUJBQXlCOzBEQUFFTSxJQUFJLENBQUNHLE9BQU87Ozs7O3NEQUFLOzBEQUN6RCw4REFBQ0MsR0FBQztnREFBQ0MsSUFBSSxFQUFFTCxJQUFJLENBQUNNLE9BQU87Z0RBQUVDLE1BQU0sRUFBQyxRQUFRO2dEQUFDQyxHQUFHLEVBQUMsWUFBWTswREFDdkQsNEVBQUNDLEtBQUc7b0RBQ0ZmLFNBQVMsRUFBQywrQ0FBK0M7b0RBQ3pEZ0IsR0FBRyxFQUFFVixJQUFJLENBQUNXLEtBQUs7b0RBQ2ZDLEdBQUcsRUFBRVosSUFBSSxDQUFDUixLQUFLOzs7OzswREFDVjs7Ozs7c0RBQ0Q7MERBQ04sOERBQUNxQixNQUFJO2dEQUFDbkIsU0FBUyxFQUFDLHlCQUF5QjswREFDdENqQixpREFBUyxDQUFDdUIsSUFBSSxDQUFDYyxJQUFJLENBQUM7Ozs7O3NEQUNoQjs7dUNBYkZkLElBQUksQ0FBQ2UsSUFBSTs7Ozs4Q0FjVjtpQ0FDUCxDQUFDOzs7OztxQ0FDQTs7Ozs7OzZCQUNGOzs7Ozs7cUJBQ0Y7O29CQUNMLENBRUw7Q0FDSDtHQXJFS3BDLElBQUk7O1FBR09YLGtEQUFTO1FBR3hCVSw2REFBeUI7OztBQU5yQkMsS0FBQUEsSUFBSTs7QUF5RlYsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hY2Nlc29fYV9pbmZvcm1hY2lvbi9pbmRleC5qcz8yMDE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHN0YWdnZXIgfSBmcm9tIFwiLi4vLi4vYW5pbWF0aW9uc1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CdXR0b25cIjtcbmltcG9ydCBDdXJzb3IgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ3Vyc29yXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IGRhdGEgZnJvbSBcIi4uLy4uL2RhdGEvcG9ydGZvbGlvLmpzb25cIjtcbmltcG9ydCB7IElTT1RvRGF0ZSwgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuaW1wb3J0IHsgZ2V0QWxsUG9zdHMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvYXBpXCI7XG5jb25zdCBCbG9nID0gKHsgcG9zdHMgfSkgPT4ge1xuICBjb25zdCBzaG93QmxvZyA9IHVzZVJlZihkYXRhLnNob3dCbG9nKTtcbiAgY29uc3QgdGV4dCA9IHVzZVJlZigpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW21vdW50ZWQsIHNldE1vdW50ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIHN0YWdnZXIoXG4gICAgICBbdGV4dC5jdXJyZW50XSxcbiAgICAgIHsgeTogNDAsIHg6IC0xMCwgdHJhbnNmb3JtOiBcInNjYWxlKDAuOTUpIHNrZXcoMTBkZWcpXCIgfSxcbiAgICAgIHsgeTogMCwgeDogMCwgdHJhbnNmb3JtOiBcInNjYWxlKDEpXCIgfVxuICAgICk7XG4gICAgaWYgKHNob3dCbG9nLmN1cnJlbnQpIHN0YWdnZXIoW3RleHQuY3VycmVudF0sIHsgeTogMzAgfSwgeyB5OiAwIH0pO1xuICAgIGVsc2Ugcm91dGVyLnB1c2goXCIvXCIpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRNb3VudGVkKHRydWUpO1xuICB9LCBbXSk7XG5cblxuICByZXR1cm4gKFxuICAgIHNob3dCbG9nLmN1cnJlbnQgJiYgKFxuICAgICAgPD5cbiAgICAgICAge2RhdGEuc2hvd0N1cnNvciAmJiA8Q3Vyc29yIC8+fVxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+QWNjZXNvIGEgbGEgaW5mb3JtYWNpw7NuPC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgY29udGFpbmVyIG14LWF1dG8gbWItMTAgJHtcbiAgICAgICAgICAgIGRhdGEuc2hvd0N1cnNvciAmJiBcImN1cnNvci1ub25lXCJcbiAgICAgICAgICB9YH1cbiAgICAgICAgPlxuICAgICAgICAgIDxIZWFkZXIgaXNCbG9nPXt0cnVlfT48L0hlYWRlcj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEwXCI+XG4gICAgICAgICAgICA8aDFcbiAgICAgICAgICAgICAgcmVmPXt0ZXh0fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb2I6cC0yIHRleHQtYm9sZCB0ZXh0LTZ4bCBsYXB0b3A6dGV4dC04eGwgdy1mdWxsXCJcbiAgICAgICAgICAgICAgaWQ9XCJhdmlzb3NcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBY2Nlc28gYSBsYSBpbmZvcm1hY2nDs25cbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8ZGl2IGlkPVwic2VjY2lvbkRvY3NcIiBjbGFzc05hbWU9XCJtdC0xMCBncmlkIGdyaWQtY29scy0xIG1vYjpncmlkLWNvbHMtMSB0YWJsZXQ6Z3JpZC1jb2xzLTIgbGFwdG9wOmdyaWQtY29scy0yIGdhcC0xMFwiPlxuICAgICAgICAgICAgICB7cG9zdHMgJiZcbiAgICAgICAgICAgICAgICBwb3N0cy5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgcmVsYXRpdmVcIlxuICAgICAgICAgICAgICAgICAgICBrZXk9e3Bvc3Quc2x1Z31cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm10LTUgdGV4dC00eGxcIj57cG9zdC50aXRsZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0yIG9wYWNpdHktNTAgdGV4dC1sZ1wiPntwb3N0LnByZXZpZXd9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtwb3N0LnZpbmN1bG99IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTYwIHJvdW5kZWQtbGcgc2hhZG93LWxnIG9iamVjdC1jb3ZlclwiXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtwb3N0LmltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgIGFsdD17cG9zdC50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgPjwvaW1nPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSBtdC01IG9wYWNpdHktMjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7SVNPVG9EYXRlKHBvc3QuZGF0ZSl9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC8+XG4gICAgKVxuICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBwb3N0cyA9IGdldEFsbFBvc3RzKFtcbiAgICBcInNsdWdcIixcbiAgICBcInRpdGxlXCIsXG4gICAgXCJpbWFnZVwiLFxuICAgIFwicHJldmlld1wiLFxuICAgIFwiYXV0aG9yXCIsXG4gICAgXCJkYXRlXCIsXG4gICAgXCJ2aW5jdWxvXCJcbiAgXSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdHM6IFsuLi5wb3N0c10sXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxvZztcbiJdLCJuYW1lcyI6WyJIZWFkIiwiUm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJzdGFnZ2VyIiwiQnV0dG9uIiwiQ3Vyc29yIiwiSGVhZGVyIiwiZGF0YSIsIklTT1RvRGF0ZSIsInVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QiLCJCbG9nIiwicG9zdHMiLCJzaG93QmxvZyIsInRleHQiLCJyb3V0ZXIiLCJtb3VudGVkIiwic2V0TW91bnRlZCIsImN1cnJlbnQiLCJ5IiwieCIsInRyYW5zZm9ybSIsInB1c2giLCJzaG93Q3Vyc29yIiwidGl0bGUiLCJkaXYiLCJjbGFzc05hbWUiLCJpc0Jsb2ciLCJoMSIsInJlZiIsImlkIiwibWFwIiwicG9zdCIsImgyIiwicCIsInByZXZpZXciLCJhIiwiaHJlZiIsInZpbmN1bG8iLCJ0YXJnZXQiLCJyZWwiLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCIsInNwYW4iLCJkYXRlIiwic2x1ZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/acceso_a_informacion/index.js\n");

/***/ })

});