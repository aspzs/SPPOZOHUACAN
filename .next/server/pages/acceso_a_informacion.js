"use strict";
(() => {
var exports = {};
exports.id = 406;
exports.ids = [406];
exports.modules = {

/***/ 5237:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1353);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5542);
/* harmony import */ var _components_Cursor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9617);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2665);
/* harmony import */ var _data_portfolio_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9954);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(558);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8382);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Header__WEBPACK_IMPORTED_MODULE_7__]);
_components_Header__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const Blog = ({ posts  })=>{
    const showBlog = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(_data_portfolio_json__WEBPACK_IMPORTED_MODULE_8__.showBlog);
    const text = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { 0: mounted , 1: setMounted  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    (0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .useIsomorphicLayoutEffect */ .LI)(()=>{
        (0,_animations__WEBPACK_IMPORTED_MODULE_4__/* .stagger */ .E)([
            text.current
        ], {
            y: 40,
            x: -10,
            transform: "scale(0.95) skew(10deg)"
        }, {
            y: 0,
            x: 0,
            transform: "scale(1)"
        });
        if (showBlog.current) (0,_animations__WEBPACK_IMPORTED_MODULE_4__/* .stagger */ .E)([
            text.current
        ], {
            y: 30
        }, {
            y: 0
        });
        else router.push("/");
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setMounted(true);
    }, []);
    return showBlog.current && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            _data_portfolio_json__WEBPACK_IMPORTED_MODULE_8__.showCursor && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Cursor__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Acceso a la informaci\xf3n"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `container mx-auto mb-10 ${_data_portfolio_json__WEBPACK_IMPORTED_MODULE_8__.showCursor && "cursor-none"}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        isBlog: true
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-10",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                ref: text,
                                className: "mob:p-2 text-bold text-6xl laptop:text-8xl w-full",
                                id: "avisos",
                                children: "Acceso a la informaci\xf3n"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                id: "seccionDocs",
                                className: "mt-10 grid grid-cols-1 mob:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2 gap-10",
                                children: posts && posts.map((post)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "cursor-pointer relative",
                                        id: "cadaDoc",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: "mt-5 text-4xl",
                                                children: post.title
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "mt-2 opacity-50 text-lg",
                                                children: post.preview
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: post.vinculo,
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    className: "w-full h-60 rounded-lg shadow-lg object-cover",
                                                    src: post.image,
                                                    alt: post.title
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-sm mt-5 opacity-25",
                                                children: (0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .ISOToDate */ .KO)(post.date)
                                            })
                                        ]
                                    }, post.slug)
                                )
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
async function getStaticProps() {
    const posts = (0,_utils_api__WEBPACK_IMPORTED_MODULE_10__/* .getAllPosts */ .Bd)([
        "slug",
        "title",
        "image",
        "preview",
        "author",
        "date",
        "vinculo"
    ]);
    return {
        props: {
            posts: [
                ...posts
            ]
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blog);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1263:
/***/ ((module) => {

module.exports = require("custom-cursor-react");

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 4287:
/***/ ((module) => {

module.exports = require("gsap");

/***/ }),

/***/ 1162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,61,542,665,617,134,382], () => (__webpack_exec__(5237)));
module.exports = __webpack_exports__;

})();