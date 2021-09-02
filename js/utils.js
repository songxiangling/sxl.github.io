"use strict";function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArrayLimit(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var btf={debounce:function(n,o,i){var a;return function(){var e=this,t=arguments,r=i&&!a;clearTimeout(a),a=setTimeout(function(){a=null,i||n.apply(e,t)},o),r&&n.apply(e,t)}},throttle:function(r,n,o){var i,a,l,u=0;o||(o={});var s=function(){u=!1===o.leading?0:(new Date).getTime(),i=null,r.apply(a,l),i||(a=l=null)};return function(){var e=(new Date).getTime();u||!1!==o.leading||(u=e);var t=n-(e-u);a=this,l=arguments,t<=0||n<t?(i&&(clearTimeout(i),i=null),u=e,r.apply(a,l),i||(a=l=null)):i||!1===o.trailing||(i=setTimeout(s,t))}},sidebarPaddingR:function(){var e=window.innerWidth,t=document.body.clientWidth,r=e-t;e!==t&&(document.body.style.paddingRight=r+"px")},snackbarShow:function(e,t,r){var n=void 0!==t&&t,o=void 0!==r?r:2e3,i=GLOBAL_CONFIG.Snackbar.position,a="light"===document.documentElement.getAttribute("data-theme")?GLOBAL_CONFIG.Snackbar.bgLight:GLOBAL_CONFIG.Snackbar.bgDark;Snackbar.show({text:e,backgroundColor:a,showAction:n,duration:o,pos:i})},initJustifiedGallery:function(e){e instanceof jQuery||(e=$(e)),e.each(function(e,t){$(this).is(":visible")&&$(this).justifiedGallery({rowHeight:220,margins:4})})},diffDate:function(e){var t,r=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=new Date,o=new Date(e),i=n.getTime()-o.getTime();if(r){var a=i/2592e6,l=i/864e5,u=i/36e5,s=i/6e4;t=12<a?o.toLocaleDateString().replace(/\//g,"-"):1<=a?parseInt(a)+" "+GLOBAL_CONFIG.date_suffix.month:1<=l?parseInt(l)+" "+GLOBAL_CONFIG.date_suffix.day:1<=u?parseInt(u)+" "+GLOBAL_CONFIG.date_suffix.hour:1<=s?parseInt(s)+" "+GLOBAL_CONFIG.date_suffix.min:GLOBAL_CONFIG.date_suffix.just}else t=parseInt(i/864e5);return t},loadComment:function(e,t){if("IntersectionObserver"in window){var r=new IntersectionObserver(function(e){e[0].isIntersecting&&(t(),r.disconnect())},{threshold:[0]});r.observe(e)}else t()},scrollToDest:function(o,i){if(!(o<0||i<0)){var a=window.scrollY||window.screenTop;if(o<a&&(o-=70),"CSS"in window&&CSS.supports("scroll-behavior","smooth"))window.scrollTo({top:o,behavior:"smooth"});else{var l=null;i=i||500,window.requestAnimationFrame(function e(t){if(l=l||t,a<o){var r=t-l;window.scrollTo(0,(o-a)*r/i+a),r<i?window.requestAnimationFrame(e):window.scrollTo(0,o)}else{var n=t-l;window.scrollTo(0,a-(a-o)*n/i),n<i?window.requestAnimationFrame(e):window.scrollTo(0,o)}})}}},fadeIn:function(e,t){e.style.cssText="display:block;animation: to_show ".concat(t,"s")},fadeOut:function(t,e){t.addEventListener("animationend",function e(){t.style.cssText="display: none; animation: '' ",t.removeEventListener("animationend",e)}),t.style.animation="to_hide ".concat(e,"s")},getParents:function(e,t){for(;e&&e!==document;e=e.parentNode)if(e.matches(t))return e;return null},siblings:function(t,r){return _toConsumableArray(t.parentNode.children).filter(function(e){return r?e!==t&&e.matches(r):e!==t})},wrap:function(e,t,r){for(var n=document.createElement(t),o=0,i=Object.entries(r);o<i.length;o++){var a=_slicedToArray(i[o],2),l=a[0],u=a[1];n.setAttribute(l,u)}e.parentNode.insertBefore(n,e),n.appendChild(e)},unwrap:function(e){var t=e.parentNode;t!==document.body&&(t.parentNode.insertBefore(e,t),t.parentNode.removeChild(t))},isJqueryLoad:function(e){"undefined"==typeof jQuery?getScript(GLOBAL_CONFIG.source.jQuery).then(e):e()},isHidden:function(e){return 0===e.offsetHeight&&0===e.offsetWidth},getEleTop:function(e){for(var t=e.offsetTop,r=e.offsetParent;null!==r;)t+=r.offsetTop,r=r.offsetParent;return t}};