var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,i=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,a=f||u||Function("return this")(),c=Object.prototype.toString,l=Math.max,s=Math.min,m=function(){return a.Date.now()};function d(e,t,n){var o,r,i,f,u,a,c=0,d=!1,b=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,f=e.apply(i,n)}function j(e){return c=e,u=setTimeout(O,t),d?y(e):f}function S(e){var n=e-a;return void 0===a||n>=t||n<0||b&&e-c>=i}function O(){var e=m();if(S(e))return T(e);u=setTimeout(O,function(e){var n=t-(e-a);return b?s(n,i-(e-c)):n}(e))}function T(e){return u=void 0,g&&o?y(e):(o=r=void 0,f)}function h(){var e=m(),n=S(e);if(o=arguments,r=this,a=e,n){if(void 0===u)return j(a);if(b)return u=setTimeout(O,t),y(a)}return void 0===u&&(u=setTimeout(O,t)),f}return t=p(t)||0,v(n)&&(d=!!n.leading,i=(b="maxWait"in n)?l(p(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),h.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=a=r=u=void 0},h.flush=function(){return void 0===u?f:T(m())},h}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(v(e)){var f="function"==typeof e.valueOf?e.valueOf():e;e=v(f)?f+"":f}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var u=o.test(e);return u||r.test(e)?i(e.slice(2),u?2:8):n.test(e)?NaN:+e}const b={email:document.querySelector("input"),message:document.querySelector("textarea"),form:document.querySelector(".feedback-form")},g={};!function(){const e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e),n=t.email,o=t.message;n&&(b.email.value=n);o&&(b.message.value=o)}(),b.form.addEventListener("input",(function(e){const t=e.target.name,n=e.target.value;g[t]=n,localStorage.setItem("feedback-form-state",JSON.stringify(g))})),b.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(g),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.8bcd4df6.js.map