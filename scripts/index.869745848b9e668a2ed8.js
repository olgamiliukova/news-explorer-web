!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/news-explorer-web/",n(n.s=9)}([function(e,t,n){var o=n(1);void 0!==document&&o(document);var r=document.querySelector(".button__signin");r&&r.addEventListener("click",(function(e){e.preventDefault(),document.querySelector(".popup__signin").classList.add("popup_is-opened")}));var u=document.querySelector(".button__logout");u&&u.addEventListener("click",(function(e){e.preventDefault(),document.location.href="index.html"}))},function(e,t){e.exports=function(e){var t=e.querySelector(".header__menu-toggler");t&&t.addEventListener("click",(function(t){t.preventDefault(),e.querySelector(".header").classList.toggle("header_expanded");var n=this.children.item(0);n.classList.toggle("header__menu-icon_toggler-dark"),n.classList.toggle("header__menu-icon_collapse-dark")}))}},function(e,t,n){var o=n(3);void 0!==document&&o(document)},function(e,t,n){var o=n(4),r=n(5);e.exports=function(e){e.querySelectorAll(".card").forEach((function(e){o(e),r(e)}))}},function(e,t){e.exports=function(e){var t=e.querySelector(".bookmark");t&&t.addEventListener("click",(function(e){e.preventDefault(),this.classList.toggle("bookmark_marked")}))}},function(e,t){e.exports=function(e){var t=e.querySelector(".delete");t&&t.addEventListener("click",(function(t){t.preventDefault(),e.remove()}))}},,,,function(e,t,n){n(10),n(0),n(11),n(2),n(15)},function(e,t,n){},function(e,t,n){var o=n(12),r=n(13),u=document.querySelector(".search__input-container");u&&u.addEventListener("submit",(function(e){e.preventDefault();var t=document.querySelector(".results");t.innerHTML=o,setTimeout((function(){t.innerHTML=r}),1e3)}))},function(e,t){e.exports='<div class="results__loading section section_narrow">\n  <i class="circle-preloader"></i>\n  <p class="results__subtitle subtitle subtitle_normal">Идет поиск новостей...</p>\n</div>'},function(e,t,n){e.exports='<div class="results__no-results section section_narrow">\n  <img src="'+n(14)+'" alt="грустный смайлик" class="results__image">\n  <h2 class="title title_small">Ничего не найдено</h2>\n  <p class="results__subtitle subtitle subtitle_normal">К сожалению по вашему запросу\n      ничего не найдено.</p>\n</div>'},function(e,t,n){e.exports=n.p+"/images/not-found_v1.5bfe873d4dfc83452a2788700dd92bb5.png"},function(e,t,n){var o=n(16);void 0!==document&&o(document);var r=document.querySelector(".popup__link-signup");r&&r.addEventListener("click",(function(e){e.preventDefault(),this.closest(".popup").classList.remove("popup_is-opened"),document.querySelector(".popup__signup").classList.add("popup_is-opened")}));var u=document.querySelector(".popup__link-signin");u&&u.addEventListener("click",(function(e){e.preventDefault(),this.closest(".popup").classList.remove("popup_is-opened"),document.querySelector(".popup__signin").classList.add("popup_is-opened")}));var i=document.querySelector(".popup__signup .popup__form");i&&i.addEventListener("submit",(function(e){e.preventDefault(),this.closest(".popup").classList.remove("popup_is-opened"),this.reset(),document.querySelector(".popup__signup-after").classList.add("popup_is-opened")}))},function(e,t){e.exports=function(e){var t=e.querySelectorAll(".popup");t.length&&t.forEach((function(e){var t=e.querySelector(".popup__close");t&&t.addEventListener("click",(function(t){t.preventDefault(),e.classList.remove("popup_is-opened")}))}))}}]);