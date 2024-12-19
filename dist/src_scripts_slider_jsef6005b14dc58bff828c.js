"use strict";
(self["webpackChunkwebpack_starter"] = self["webpackChunkwebpack_starter"] || []).push([["src_scripts_slider_js"],{

/***/ "./src/scripts/slider.js":
/*!*******************************!*\
  !*** ./src/scripts/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider() {
  var test = tns({
    container: ".my-slider",
    items: 1,
    // mouseDrag: true,
    nav: true,
    controls: false,
    speed: 800
    // lazyload: true
  });
  var menuItems = document.querySelectorAll(".menu-item");
  menuItems.forEach(function myFunction(item, index) {
    item.addEventListener("click", function () {
      var slideIndex = index;
      test.goTo(slideIndex);
      var activeNav = document.querySelector(".tns-nav-active");
      activeNav.innerHTML = "0" + (slideIndex + 1);
    });
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ })

}]);
//# sourceMappingURL=src_scripts_slider_jsef6005b14dc58bff828c.js.map