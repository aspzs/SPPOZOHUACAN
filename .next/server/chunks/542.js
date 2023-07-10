"use strict";
exports.id = 542;
exports.ids = [542];
exports.modules = {

/***/ 5542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_portfolio_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9954);




const Button = ({ children , type , onClick , classes  })=>{
    const { theme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    if (type === "primary") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            onClick: onClick,
            type: "button",
            className: `text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg ${theme === "dark" ? "bg-white text-black" : "bg-black text-white"}  transition-all duration-300 ease-out first:ml-0 hover:scale-105 active:scale-100 link ${_data_portfolio_json__WEBPACK_IMPORTED_MODULE_3__.showCursor && "cursor-none"}  ${classes}`,
            children: children
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        onClick: onClick,
        type: "button",
        className: `text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 ${theme === "dark" ? "hover:bg-slate-600 text-white" : "hover:bg-slate-100"} hover:scale-105 active:scale-100  tablet:first:ml-0  ${_data_portfolio_json__WEBPACK_IMPORTED_MODULE_3__.showCursor && "cursor-none"} ${classes} link`,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 9954:
/***/ ((module) => {

module.exports = JSON.parse('{"name":" ","headerTaglineTwo":"Administración del Sistema de Agua Potable. San Pedro Pozohuacan.","showCursor":false,"showBlog":true,"lightMode":true,"showResume":true,"socials":[{"id":"2","title":"Facebook","link":"https://www.facebook.com/profile.php?id=100093122305622"},{"id":"3","title":"Email","link":"mailto:pozosanpedrop@gmail.com"}],"projects":[{"id":"1","title":"Horarios de atención","description":"Jueves 16 a 19 hrs","imageSrc":"https://raw.githubusercontent.com/aspzs/contentADMSP/main/horarios_atencion.gif","url":"/"},{"id":"2","title":"Regulariza tu toma","description":"Tenemos convenios de pago, ¡pregúntanos!","imageSrc":"https://raw.githubusercontent.com/aspzs/contentADMSP/main/convenio.gif","url":"/"}],"services":[{"id":"1","title":"Nuestras redes sociales","description":"Síguenos y contactanos mediante nuestras redes sociales","face":"Facebook: Administración del sistema de agua potable San Pedro Pozohuacan","mailContacto":"Mail: pozosanpedrop@gmail.com"},{"id":"3","title":"Vísita nuestras oficinas","description":"Av 16 de Septiembre S/N Plaza Principal"}],"aboutpara":"\\nGracias por visitar nuestra página web.\\n\\nAquí encontrarás información de contacto para comunicarte con nosotros en caso de emergencias,\\nreportes de fugas o cualquier consulta relacionada con el suministro de agua potable.\\n\\nEstamos aquí para servirte y resolver cualquier inquietud que puedas tener.\\n\\nTrabajamos arduamente para asegurar que todos los habitantes de San Pedro Pozohuacan tengan acceso a agua potable de calidad.\\n\\nJuntos, podemos cuidar y preservar este valioso recurso para las generaciones futuras.","resume":{"description":"Bienvenido a la página oficial de la Administración del Sistema de Agua Potable de San Pedro Pozohuacan. Nuestro objetivo es brindar un servicio confiable y de calidad en el suministro de agua potable a los habitantes de nuestra comunidad.","description2":"Además, nos esforzamos por mantener una comunicación abierta y transparente con nuestra comunidad. En la sección de noticias y actualizaciones, te mantendremos al tanto de los avances en nuestros proyectos, así como de cualquier situación o evento relevante relacionado con el suministro de agua potable en San Pedro Pozohuacan.","experiences":[{"id":"1","dates":"Mas info","type":"INFO","bullets":"Bullet One"}]}}');

/***/ })

};
;