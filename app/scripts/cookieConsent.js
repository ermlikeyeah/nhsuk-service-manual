export default () => {

!function(n){var e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(o,r,function(e){return n[e]}.bind(null,r));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=2)}([function(n,e){n.exports='<div id="cookie-banner">\n  <div class=".nhsuk-grid-column-full">\n    <div class="cookie-text clear">\n      <p>\n        The NHS website uses cookies to improve your on-site experience.\n        <a class="cookie-banner-policy" href="/service-manual/cookies">Find out more about cookies</a>\n      </p>\n      <p class="cookie-banner-close" onclick="document.getElementById(\'cookie-banner\').style.display = \'none\';">\n        <a href="#">\n          <img src="/service-manual/assets/cookie-close-icon.gif" alt="Close cookie banner">\n        </a>\n      </p>\n    </div>\n  </div>\n</div>'},function(n,e,t){(n.exports=t(4)(!1)).push([n.i,'#cookie-banner {\n  background: #034484;\n  font-size: 10px;\n}\n\n#cookie-banner .cookie-text {\n  background: #034484;\n  /* background color needed due to ipad issue showing a line */\n  margin: 0 auto;\n  text-align: center;\n  max-width: 960px;\n}\n@media (max-width: 1019px) {\n  #cookie-banner .cookie-text {\n    margin: 0 32px;\n  }\n}\n\n@media (max-width: 769px) {\n  #cookie-banner .cookie-text {\n    margin: 0 16px;\n  }\n}\n#cookie-banner .cookie-text:after {\n  content: ".";\n  display: block;\n  height: 0;\n  clear: both;\n  visibility: hidden;\n}\n\n#cookie-banner .cookie-text p {\n  background: #034484;\n  color: #fff;\n  float: left;\n  font-size: 13px;\n  font-weight: 600;\n  margin: 0;\n  padding: 1.2em 0;\n  text-align: left;\n  width: 90%;\n}\n\n#cookie-banner .cookie-text .cookie-banner-close {\n  text-align: right;\n  width: 10%;\n}\n\n#cookie-banner .cookie-text a {\n  color: #fff;\n  text-decoration: underline;\n}\n\n#cookie-banner .cookie-text a:hover,\n#cookie-banner .cookie-text a:active,\n#cookie-banner .cookie-text a:focus {\n  text-decoration: none; color: #212b32; \n}\n\n#cookie-banner .cookie-banner-close a:hover,\n#cookie-banner .cookie-banner-close a:focus {\n  background: none;\n  box-shadow: none;\n}\n\n#cookie-banner .cookie-banner-close img {\n  display: inline;\n  position: relative;\n}',""])},function(n,e,t){"use strict";t.r(e),function(n){t.d(e,"hideCookieBanner",function(){return u}),t.d(e,"insertCookieBanner",function(){return s}),t.d(e,"getCookie",function(){return l}),t.d(e,"createCookie",function(){return _}),t.d(e,"__get__",function(){return E}),t.d(e,"__GetDependency__",function(){return E}),t.d(e,"__Rewire__",function(){return x}),t.d(e,"__set__",function(){return x}),t.d(e,"__ResetDependency__",function(){return O}),t.d(e,"__RewireAPI__",function(){return h});var o=t(0),r=t.n(o),i=t(1),c=t.n(i);function a(n){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function u(){document.getElementById("cookie-banner").style.display="none"}function s(){var n="".concat(E("bannerHtml")," <style>").concat(E("bannerCss").toString(),"</style>");document.getElementsByTagName("body")[0].innerHTML=n+document.getElementsByTagName("body")[0].innerHTML,document.getElementById("cookiebannerclose").onclick=E("hideCookieBanner")}var f="nhsuk-cookie-consent";function l(n){var e=document.cookie.split(";"),t=e.map(function(n){if(""!=document.cookie)return n.split("=")[1].trim()})[e.map(function(n){return n.split("=")[0].trim()}).indexOf(n)];return void 0===t?null:decodeURIComponent(t)}function _(n,e,t,o,r,i){var c;if(t){var a=new Date;a.setTime(a.getTime()+24*t*60*60*1e3),c=a.toGMTString()}else c="";var u="".concat(n,"=").concat(escape(e));c&&(u+=";expires="+c),o&&(u+=";path="+escape(o)),r&&(u+=";domain="+escape(r)),i&&(u+=";secure"),u+=";",document.cookie=u}function d(){console.log(E("getCookie")(E("COOKIE_NAME"))),null==E("getCookie")(E("COOKIE_NAME"))&&(E("createCookie")(E("COOKIE_NAME"),E("COOKIE_NAME"),365,"/"),E("insertCookieBanner")())}function b(){try{if(n)return n}catch(n){try{if(window)return window}catch(n){return this}}}window.addEventListener("load",E("checkCookie"));var p,k=null;function m(){if(null===k){var n=b();n.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__||(n.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__=0),k=__$$GLOBAL_REWIRE_NEXT_MODULE_ID__++}return k}function y(){var n=b();return n.__$$GLOBAL_REWIRE_REGISTRY__||(n.__$$GLOBAL_REWIRE_REGISTRY__=Object.create(null)),n.__$$GLOBAL_REWIRE_REGISTRY__}function v(){var n=m(),e=y(),t=e[n];return t||(e[n]=Object.create(null),t=e[n]),t}(p=b()).__rewire_reset_all__||(p.__rewire_reset_all__=function(){p.__$$GLOBAL_REWIRE_REGISTRY__=Object.create(null)});var g="__INTENTIONAL_UNDEFINED__",h={};function E(n){var e=v();if(void 0===e[n])return function(n){switch(n){case"bannerHtml":return r.a;case"bannerCss":return c.a;case"hideCookieBanner":return u;case"getCookie":return l;case"COOKIE_NAME":return f;case"createCookie":return _;case"insertCookieBanner":return s;case"checkCookie":return d}return}(n);var t=e[n];return t===g?void 0:t}function x(n,e){var t=v();return"object"===a(n)?(Object.keys(n).forEach(function(e){t[e]=n[e]}),function(){Object.keys(n).forEach(function(e){O(n)})}):(t[n]=void 0===e?g:e,function(){O(n)})}function O(n){var e=v();delete e[n],0==Object.keys(e).length&&delete y()[m]}function R(n){var e=v(),t=Object.keys(n),o={};function r(){t.forEach(function(n){e[n]=o[n]})}return function(i){t.forEach(function(t){o[t]=e[t],e[t]=n[t]});var c=i();return c&&"function"==typeof c.then?c.then(r).catch(r):r(),c}}!function(){function n(n,e){Object.defineProperty(h,n,{value:e,enumerable:!1,configurable:!0})}n("__get__",E),n("__GetDependency__",E),n("__Rewire__",x),n("__set__",x),n("__reset__",O),n("__ResetDependency__",O),n("__with__",R)}(),e.default=h}.call(this,t(3))},function(n,e){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(n){"object"==typeof window&&(t=window)}n.exports=t},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=function(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var r=(c=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(c))))+" */"),i=o.sources.map(function(n){return"/*# sourceURL="+o.sourceRoot+n+" */"});return[t].concat(i).concat([r]).join("\n")}var c;return[t].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(r=0;r<n.length;r++){var c=n[r];null!=c[0]&&o[c[0]]||(t&&!c[2]?c[2]=t:t&&(c[2]="("+c[2]+") and ("+t+")"),e.push(c))}},e}}]);

}
