!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){$(document).ready((function(){const e=$("#menu-open"),t=$("#menu-close"),n=$("#page-navigation"),o=$(document.body),r=$("#submit-form"),a=$("#sign-up");$("#hero-slider").slick({dots:!0,slidesToScroll:4}),e.on("click",(function(){n.addClass("page-nav--opened"),o.addClass("overflow-hidden")})),t.on("click",(function(){n.removeClass("page-nav--opened"),o.removeClass("overflow-hidden")})),a.on("click",(function(e){e.preventDefault(),form=$(this).closest("form"),form.addClass("submitted")})),r.on("click",(function(e){const t=$("#validation-message");e.preventDefault(),form=$(this).closest("form");const n=form.find(".contact__form-element");form.addClass("submitted");let o=!0;n.each((function(e){if(!this.checkValidity())return t.removeClass("contact__validation-message--success"),t.addClass("contact__validation-message--error"),o=!1,!1})),o&&(t.removeClass("contact__validation-message--error"),t.addClass("contact__validation-message--success"))}))}))}]);