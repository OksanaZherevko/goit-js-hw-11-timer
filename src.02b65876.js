parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"amqR":[function(require,module,exports) {

},{}],"dsUX":[function(require,module,exports) {
module.exports={style:require("./style.css")};
},{"./style.css":"amqR"}],"sdOj":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var s=function(){return'\n  <h1 class="main-title">This is my timer=)</h1>\n  <div class="timer" id="timer-1">\n  <div class="field">\n    <span class="value" data-value="days">--</span>\n    <span class="label">Days</span>\n  </div>\n  <div class="field">\n    <span class="value" data-value="hours">--</span>\n    <span class="label">Hours</span>\n  </div>\n  <div class="field">\n    <span class="value" data-value="mins">--</span>\n    <span class="label">Minutes</span>\n  </div>\n  <div class="field">\n    <span class="value" data-value="secs">--</span>\n    <span class="label">Seconds</span>\n  </div>\n</div>'};exports.default=s;
},{}],"R9ZO":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r=function(){function t(n){var r=n.targetTime,a=n.onTick;e(this,t),this.targetTime=r,this.onTick=a}return n(t,[{key:"start",value:function(){var e=this;setInterval(function(){var t=Date.now(),n=e.targetTime-t,r=e.getTimeComponennt(n);e.onTick(r)},1e3)}},{key:"getTimeComponennt",value:function(e){return{days:this.pad(Math.floor(e/864e5)),hours:this.pad(Math.floor(e%864e5/36e5)),mins:this.pad(Math.floor(e%36e5/6e4)),secs:this.pad(Math.floor(e%6e4/1e3))}}},{key:"pad",value:function(e){return String(e).padStart(2,"0")}}]),t}();exports.default=r;
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./css/*.css");var e=n(require("./js/page-render")),t=n(require("./js/TimerConstruct"));function n(e){return e&&e.__esModule?e:{default:e}}document.body.insertAdjacentHTML("afterbegin",(0,e.default)());var a={pageTimer:document.body,days:document.querySelector('[data-value="days"]'),hours:document.querySelector('[data-value="hours"]'),mins:document.querySelector('[data-value="mins"]'),secs:document.querySelector('[data-value="secs"]')},r=function(e){var t=e.days,n=e.hours,r=e.mins,s=e.secs;a.days.textContent="".concat(t),a.hours.textContent="".concat(n),a.mins.textContent="".concat(r),a.secs.textContent="".concat(s)},s=new t.default({targetTime:new Date("Nov 23, 2021"),onTick:r});s.start();
},{"./css/*.css":"dsUX","./js/page-render":"sdOj","./js/TimerConstruct":"R9ZO"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-timer/src.02b65876.js.map