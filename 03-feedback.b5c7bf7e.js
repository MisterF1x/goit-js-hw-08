var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t=(Feedback,{}),n="Expected a function",i=NaN,r="[object Symbol]",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return d.Date.now()};function y(e,t,i){var r,o,a,u,f,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(n);function y(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function h(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function j(){var e=p();if(h(e))return S(e);f=setTimeout(j,function(e){var n=t-(e-l);return d?g(n,a-(e-c)):n}(e))}function S(e){return f=void 0,m&&r?y(e):(r=o=void 0,u)}function T(){var e=p(),n=h(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return function(e){return c=e,f=setTimeout(j,t),s?y(e):u}(l);if(d)return f=setTimeout(j,t),y(l)}return void 0===f&&(f=setTimeout(j,t)),u}return t=E(t)||0,b(i)&&(s=!!i.leading,a=(d="maxWait"in i)?v(E(i.maxWait)||0,t):a,m="trailing"in i?!!i.trailing:m),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},T.flush=function(){return void 0===f?u:S(p())},T}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function E(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&m.call(e)==r}(e))return i;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=u.test(e);return n||f.test(e)?l(e.slice(2),n?2:8):a.test(e)?i:+e}t=function(e,t,i){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(n);return b(i)&&(r="leading"in i?!!i.leading:r,o="trailing"in i?!!i.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})};const h={formEl:document.querySelector(".feedback-form"),emailEl:document.querySelector("input[type='email']"),textareaEl:document.querySelector("textarea")},{formEl:j,emailEl:S,textareaEl:T}=h,w="feedback-form-state",x={};!function(e){const t=JSON.parse(localStorage.getItem(e));t&&(t.email&&(S.value=t.email),t.message&&(T.value=t.message))}(w),j.addEventListener("submit",(function(e){if(e.preventDefault(),!S.value||!T.value)return alert("Please fill in all the fields!");console.log({email:S.value,message:T.value}),e.currentTarget.reset(),localStorage.removeItem(w)})),j.addEventListener("input",t((function(e){x[e.target.name]=e.target.value,localStorage.setItem(w,JSON.stringify(x))}),500));
//# sourceMappingURL=03-feedback.b5c7bf7e.js.map
