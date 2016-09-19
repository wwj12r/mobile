!function(t){String.prototype.trim===t&&(String.prototype.trim=function(){return this.replace(/^\s+/,"").replace(/\s+$/,"")}),Array.prototype.reduce===t&&(Array.prototype.reduce=function(n){if(void 0===this||null===this)throw new TypeError;var e=Object(this),i=e.length>>>0,r=0,o;if("function"!=typeof n)throw new TypeError;if(0==i&&1==arguments.length)throw new TypeError;if(arguments.length>=2)o=arguments[1];else for(;;){if(r in e){o=e[r++];break}if(++r>=i)throw new TypeError}for(;i>r;)r in e&&(o=n.call(t,o,e[r],r,e)),r++;return o})}();var Zepto=function(){function t(t){return"[object Function]"==L.call(t)}function n(t){return t instanceof Object}function e(n){var e,i;if("[object Object]"!==L.call(n))return!1;if(i=t(n.constructor)&&n.constructor.prototype,!i||!hasOwnProperty.call(i,"isPrototypeOf"))return!1;for(e in n);return e===m||hasOwnProperty.call(n,e)}function i(t){return t instanceof Array}function r(t){return"number"==typeof t.length}function o(t){return t.filter(function(t){return t!==m&&null!==t})}function a(t){return t.length>0?[].concat.apply([],t):t}function s(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function u(t){return t in T?T[t]:T[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function c(t,n){return"number"!=typeof n||S[s(t)]?n:n+"px"}function l(t){var n,e;return E[t]||(n=b.createElement(t),b.body.appendChild(n),e=j(n,"").getPropertyValue("display"),n.parentNode.removeChild(n),"none"==e&&(e="block"),E[t]=e),E[t]}function f(t,n){return n===m?v(t):v(t).filter(n)}function h(n,e,i,r){return t(e)?e.call(n,i,r):e}function p(t,n,e){var i=t%2?n:n.parentNode;i?i.insertBefore(e,t?1==t?i.firstChild:2==t?n:null:n.nextSibling):v(e).remove()}function d(t,n){n(t);for(var e in t.childNodes)d(t.childNodes[e],n)}var m,g,v,y,w=[],x=w.slice,b=window.document,E={},T={},j=b.defaultView.getComputedStyle,S={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},N=/^\s*<(\w+|!)[^>]*>/,O=[1,3,8,9,11],C=["after","prepend","before","append"],P=b.createElement("table"),k=b.createElement("tr"),A={tr:b.createElement("tbody"),tbody:P,thead:P,tfoot:P,td:k,th:k,"*":b.createElement("div")},M=/complete|loaded|interactive/,Z=/^\.([\w-]+)$/,R=/^#([\w-]+)$/,z=/^[\w-]+$/,L={}.toString,_={},D,q,U=b.createElement("div");return _.matches=function(t,n){if(!t||1!==t.nodeType)return!1;var e=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(e)return e.call(t,n);var i,r=t.parentNode,o=!r;return o&&(r=U).appendChild(t),i=~_.qsa(r,n).indexOf(t),o&&U.removeChild(t),i},D=function(t){return t.replace(/-+(.)?/g,function(t,n){return n?n.toUpperCase():""})},q=function(t){return t.filter(function(n,e){return t.indexOf(n)==e})},_.fragment=function(t,n){n===m&&(n=N.test(t)&&RegExp.$1),n in A||(n="*");var e=A[n];return e.innerHTML=""+t,v.each(x.call(e.childNodes),function(){e.removeChild(this)})},_.Z=function(t,n){return t=t||[],t.__proto__=arguments.callee.prototype,t.selector=n||"",t},_.isZ=function(t){return t instanceof _.Z},_.init=function(n,r){if(!n)return _.Z();if(t(n))return v(b).ready(n);if(_.isZ(n))return n;var a;if(i(n))a=o(n);else if(e(n))a=[v.extend({},n)],n=null;else if(O.indexOf(n.nodeType)>=0||n===window)a=[n],n=null;else if(N.test(n))a=_.fragment(n.trim(),RegExp.$1),n=null;else{if(r!==m)return v(r).find(n);a=_.qsa(b,n)}return _.Z(a,n)},v=function(t,n){return _.init(t,n)},v.extend=function(t){return x.call(arguments,1).forEach(function(n){for(g in n)n[g]!==m&&(t[g]=n[g])}),t},_.qsa=function(t,n){var e;return t===b&&R.test(n)?(e=t.getElementById(RegExp.$1))?[e]:w:1!==t.nodeType&&9!==t.nodeType?w:x.call(Z.test(n)?t.getElementsByClassName(RegExp.$1):z.test(n)?t.getElementsByTagName(n):t.querySelectorAll(n))},v.isFunction=t,v.isObject=n,v.isArray=i,v.isPlainObject=e,v.inArray=function(t,n,e){return w.indexOf.call(n,t,e)},v.trim=function(t){return t.trim()},v.uuid=0,v.map=function(t,n){var e,i=[],o,s;if(r(t))for(o=0;o<t.length;o++)e=n(t[o],o),null!=e&&i.push(e);else for(s in t)e=n(t[s],s),null!=e&&i.push(e);return a(i)},v.each=function(t,n){var e,i;if(r(t)){for(e=0;e<t.length;e++)if(n.call(t[e],e,t[e])===!1)return t}else for(i in t)if(n.call(t[i],i,t[i])===!1)return t;return t},v.fn={forEach:w.forEach,reduce:w.reduce,push:w.push,indexOf:w.indexOf,concat:w.concat,map:function(t){return v.map(this,function(n,e){return t.call(n,e,n)})},slice:function(){return v(x.apply(this,arguments))},ready:function(t){return M.test(b.readyState)?t(v):b.addEventListener("DOMContentLoaded",function(){t(v)},!1),this},get:function(t){return t===m?x.call(this):this[t]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return this.forEach(function(n,e){t.call(n,e,n)}),this},filter:function(t){return v([].filter.call(this,function(n){return _.matches(n,t)}))},add:function(t,n){return v(q(this.concat(v(t,n))))},is:function(t){return this.length>0&&_.matches(this[0],t)},not:function(n){var e=[];if(t(n)&&n.call!==m)this.each(function(t){n.call(this,t)||e.push(this)});else{var i="string"==typeof n?this.filter(n):r(n)&&t(n.item)?x.call(n):v(n);this.forEach(function(t){i.indexOf(t)<0&&e.push(t)})}return v(e)},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!n(t)?t:v(t)},last:function(){var t=this[this.length-1];return t&&!n(t)?t:v(t)},find:function(t){var n;return n=1==this.length?_.qsa(this[0],t):this.map(function(){return _.qsa(this,t)}),v(n)},closest:function(t,n){for(var e=this[0];e&&!_.matches(e,t);)e=e!==n&&e!==b&&e.parentNode;return v(e)},parents:function(t){for(var n=[],e=this;e.length>0;)e=v.map(e,function(t){return(t=t.parentNode)&&t!==b&&n.indexOf(t)<0?(n.push(t),t):void 0});return f(n,t)},parent:function(t){return f(q(this.pluck("parentNode")),t)},children:function(t){return f(this.map(function(){return x.call(this.children)}),t)},siblings:function(t){return f(this.map(function(t,n){return x.call(n.parentNode.children).filter(function(t){return t!==n})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return this.map(function(){return this[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=null),"none"==j(this,"").getPropertyValue("display")&&(this.style.display=l(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){return this.each(function(){v(this).wrapAll(v(t)[0].cloneNode(!1))})},wrapAll:function(t){return this[0]&&(v(this[0]).before(t=v(t)),t.append(this)),this},unwrap:function(){return this.parent().each(function(){v(this).replaceWith(v(this).children())}),this},clone:function(){return v(this.map(function(){return this.cloneNode(!0)}))},hide:function(){return this.css("display","none")},toggle:function(t){return(t===m?"none"==this.css("display"):t)?this.show():this.hide()},prev:function(){return v(this.pluck("previousElementSibling"))},next:function(){return v(this.pluck("nextElementSibling"))},html:function(t){return t===m?this.length>0?this[0].innerHTML:null:this.each(function(n){var e=this.innerHTML;v(this).empty().append(h(this,t,n,e))})},text:function(t){return t===m?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=t})},attr:function(t,e){var i;return"string"==typeof t&&e===m?0==this.length||1!==this[0].nodeType?m:"value"==t&&"INPUT"==this[0].nodeName?this.val():!(i=this[0].getAttribute(t))&&t in this[0]?this[0][t]:i:this.each(function(i){if(1===this.nodeType)if(n(t))for(g in t)this.setAttribute(g,t[g]);else this.setAttribute(t,h(this,e,i,this.getAttribute(t)))})},removeAttr:function(t){return this.each(function(){1===this.nodeType&&this.removeAttribute(t)})},prop:function(t,n){return n===m?this[0]?this[0][t]:m:this.each(function(e){this[t]=h(this,n,e,this[t])})},data:function(t,n){var e=this.attr("data-"+s(t),n);return null!==e?e:m},val:function(t){return t===m?this.length>0?this[0].value:m:this.each(function(n){this.value=h(this,t,n,this.value)})},offset:function(){if(0==this.length)return null;var t=this[0].getBoundingClientRect();return{left:t.left+window.pageXOffset,top:t.top+window.pageYOffset,width:t.width,height:t.height}},css:function(t,n){if(n===m&&"string"==typeof t)return 0==this.length?m:this[0].style[D(t)]||j(this[0],"").getPropertyValue(t);var e="";for(g in t)"string"==typeof t[g]&&""==t[g]?this.each(function(){this.style.removeProperty(s(g))}):e+=s(g)+":"+c(g,t[g])+";";return"string"==typeof t&&(""==n?this.each(function(){this.style.removeProperty(s(t))}):e=s(t)+":"+c(t,n)),this.each(function(){this.style.cssText+=";"+e})},index:function(t){return t?this.indexOf(v(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return this.length<1?!1:u(t).test(this[0].className)},addClass:function(t){return this.each(function(n){y=[];var e=this.className,i=h(this,t,n,e);i.split(/\s+/g).forEach(function(t){v(this).hasClass(t)||y.push(t)},this),y.length&&(this.className+=(e?" ":"")+y.join(" "))})},removeClass:function(t){return this.each(function(n){return t===m?this.className="":(y=this.className,h(this,t,n,y).split(/\s+/g).forEach(function(t){y=y.replace(u(t)," ")}),this.className=y.trim(),void 0)})},toggleClass:function(t,n){return this.each(function(e){var i=h(this,t,e,this.className);(n===m?!v(this).hasClass(i):n)?v(this).addClass(i):v(this).removeClass(i)})}},["width","height"].forEach(function(t){v.fn[t]=function(n){var e,i=t.replace(/./,function(t){return t[0].toUpperCase()});return n===m?this[0]==window?window["inner"+i]:this[0]==b?b.documentElement["offset"+i]:(e=this.offset())&&e[t]:this.each(function(e){var i=v(this);i.css(t,h(this,n,e,i[t]()))})}}),C.forEach(function(t,e){v.fn[t]=function(){var t=v.map(arguments,function(t){return n(t)?t:_.fragment(t)});if(t.length<1)return this;var i=this.length,r=i>1,o=2>e;return this.each(function(n,a){for(var s=0;s<t.length;s++){var u=t[o?t.length-s-1:s];d(u,function(t){null!=t.nodeName&&"SCRIPT"===t.nodeName.toUpperCase()&&(!t.type||"text/javascript"===t.type)&&window.eval.call(window,t.innerHTML)}),r&&i-1>n&&(u=u.cloneNode(!0)),p(e,a,u)}})},v.fn[e%2?t+"To":"insert"+(e?"Before":"After")]=function(n){return v(n)[t](this),this}}),_.Z.prototype=v.fn,_.camelize=D,_.uniq=q,v.zepto=_,v}();window.Zepto=Zepto,"$"in window||(window.$=Zepto),function(t){function n(t){return t._zid||(t._zid=h++)}function e(t,e,o,a){if(e=i(e),e.ns)var s=r(e.ns);return(f[n(t)]||[]).filter(function(t){return!(!t||e.e&&t.e!=e.e||e.ns&&!s.test(t.ns)||o&&n(t.fn)!==n(o)||a&&t.sel!=a)})}function i(t){var n=(""+t).split(".");return{e:n[0],ns:n.slice(1).sort().join(" ")}}function r(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function o(n,e,i){t.isObject(n)?t.each(n,i):n.split(/\s/).forEach(function(t){i(t,e)})}function a(e,r,a,s,u,c){c=!!c;var l=n(e),h=f[l]||(f[l]=[]);o(r,a,function(n,r){var o=u&&u(r,n),a=o||r,l=function(t){var n=a.apply(e,[t].concat(t.data));return n===!1&&t.preventDefault(),n},f=t.extend(i(n),{fn:r,proxy:l,sel:s,del:o,i:h.length});h.push(f),e.addEventListener(f.e,l,c)})}function s(t,i,r,a){var s=n(t);o(i||"",r,function(n,i){e(t,n,i,a).forEach(function(n){delete f[s][n.i],t.removeEventListener(n.e,n.proxy,!1)})})}function u(n){var e=t.extend({originalEvent:n},n);return t.each(g,function(t,i){e[t]=function(){return this[i]=d,n[t].apply(n,arguments)},e[i]=m}),e}function c(t){if(!("defaultPrevented"in t)){t.defaultPrevented=!1;var n=t.preventDefault;t.preventDefault=function(){this.defaultPrevented=!0,n.call(this)}}}var l=t.zepto.qsa,f={},h=1,p={};p.click=p.mousedown=p.mouseup=p.mousemove="MouseEvents",t.event={add:a,remove:s},t.proxy=function(e,i){if(t.isFunction(e)){var r=function(){return e.apply(i,arguments)};return r._zid=n(e),r}if("string"==typeof i)return t.proxy(e[i],e);throw new TypeError("expected function")},t.fn.bind=function(t,n){return this.each(function(){a(this,t,n)})},t.fn.unbind=function(t,n){return this.each(function(){s(this,t,n)})},t.fn.one=function(t,n){return this.each(function(e,i){a(this,t,n,null,function(t,n){return function(){var e=t.apply(i,arguments);return s(i,n,t),e}})})};var d=function(){return!0},m=function(){return!1},g={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(n,e,i){var r=!1;return("blur"==e||"focus"==e)&&(t.iswebkit?e="blur"==e?"focusout":"focus"==e?"focusin":e:r=!0),this.each(function(o,s){a(s,e,i,n,function(e){return function(i){var r,o=t(i.target).closest(n,s).get(0);return o?(r=t.extend(u(i),{currentTarget:o,liveFired:s}),e.apply(o,[r].concat([].slice.call(arguments,1)))):void 0}},r)})},t.fn.undelegate=function(t,n,e){return this.each(function(){s(this,n,e,t)})},t.fn.live=function(n,e){return t(document.body).delegate(this.selector,n,e),this},t.fn.die=function(n,e){return t(document.body).undelegate(this.selector,n,e),this},t.fn.on=function(n,e,i){return void 0==e||t.isFunction(e)?this.bind(n,e):this.delegate(e,n,i)},t.fn.off=function(n,e,i){return void 0==e||t.isFunction(e)?this.unbind(n,e):this.undelegate(e,n,i)},t.fn.trigger=function(n,e){return"string"==typeof n&&(n=t.Event(n)),c(n),n.data=e,this.each(function(){"dispatchEvent"in this&&this.dispatchEvent(n)})},t.fn.triggerHandler=function(n,i){var r,o;return this.each(function(a,s){r=u("string"==typeof n?t.Event(n):n),r.data=i,r.target=s,t.each(e(s,n.type||n),function(t,n){return o=n.proxy(r),r.isImmediatePropagationStopped()?!1:void 0})}),o},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout change select keydown keypress keyup error".split(" ").forEach(function(n){t.fn[n]=function(t){return this.bind(n,t)}}),["focus","blur"].forEach(function(n){t.fn[n]=function(t){if(t)this.bind(n,t);else if(this.length)try{this.get(0)[n]()}catch(e){}return this}}),t.Event=function(t,n){var e=document.createEvent(p[t]||"Events"),i=!0;if(n)for(var r in n)"bubbles"==r?i=!!n[r]:e[r]=n[r];return e.initEvent(t,i,!0,null,null,null,null,null,null,null,null,null,null,null,null),e}}(Zepto),function(t){function n(t){var n=this.os={},e=this.browser={},i=t.match(/WebKit\/([\d.]+)/),r=t.match(/(Android)\s+([\d.]+)/),o=t.match(/(iPad).*OS\s([\d_]+)/),a=!o&&t.match(/(iPhone\sOS)\s([\d_]+)/),s=t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),u=s&&t.match(/TouchPad/),c=t.match(/Kindle\/([\d.]+)/),l=t.match(/Silk\/([\d._]+)/),f=t.match(/(BlackBerry).*Version\/([\d.]+)/);(e.webkit=!!i)&&(e.version=i[1]),r&&(n.android=!0,n.version=r[2]),a&&(n.ios=n.iphone=!0,n.version=a[2].replace(/_/g,".")),o&&(n.ios=n.ipad=!0,n.version=o[2].replace(/_/g,".")),s&&(n.webos=!0,n.version=s[2]),u&&(n.touchpad=!0),f&&(n.blackberry=!0,n.version=f[2]),c&&(n.kindle=!0,n.version=c[1]),l&&(e.silk=!0,e.version=l[1]),!l&&n.android&&t.match(/Kindle Fire/)&&(e.silk=!0)}n.call(t,navigator.userAgent),t.__detect=n}(Zepto),function(t,n){function e(t){return t.toLowerCase()}function i(t){return o?o+t:e(t)}var r="",o,a,s,u={Webkit:"webkit",Moz:"",O:"o",ms:"MS"},c=window.document,l=c.createElement("div"),f=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,h={};t.each(u,function(t,i){return l.style[t+"TransitionProperty"]!==n?(r="-"+e(t)+"-",o=i,!1):void 0}),h[r+"transition-property"]=h[r+"transition-duration"]=h[r+"transition-timing-function"]=h[r+"animation-name"]=h[r+"animation-duration"]="",t.fx={off:o===n&&l.style.transitionProperty===n,cssPrefix:r,transitionEnd:i("TransitionEnd"),animationEnd:i("AnimationEnd")},t.fn.animate=function(n,e,i,r){return t.isObject(e)&&(i=e.easing,r=e.complete,e=e.duration),e&&(e/=1e3),this.anim(n,e,i,r)},t.fn.anim=function(e,i,o,a){var s,u={},c,l=this,p,d=t.fx.transitionEnd;if(i===n&&(i=.4),t.fx.off&&(i=0),"string"==typeof e)u[r+"animation-name"]=e,u[r+"animation-duration"]=i+"s",d=t.fx.animationEnd;else{for(c in e)f.test(c)?(s||(s=[]),s.push(c+"("+e[c]+")")):u[c]=e[c];s&&(u[r+"transform"]=s.join(" ")),!t.fx.off&&"object"==typeof e&&(u[r+"transition-property"]=Object.keys(e).join(", "),u[r+"transition-duration"]=i+"s",u[r+"transition-timing-function"]=o||"linear")}return p=function(n){if("undefined"!=typeof n){if(n.target!==n.currentTarget)return;t(n.target).unbind(d,arguments.callee)}t(this).css(h),a&&a.call(this)},i>0&&this.bind(d,p),setTimeout(function(){l.css(u),0>=i&&setTimeout(function(){l.each(function(){p.call(this)})},0)},0),this},l=null}(Zepto),function($){function t(t,n,e){var i=$.Event(n);return $(t).trigger(i,e),!i.defaultPrevented}function n(n,e,i,r){return n.global?t(e||m,i,r):void 0}function e(t){t.global&&0===$.active++&&n(t,null,"ajaxStart")}function i(t){t.global&&!--$.active&&n(t,null,"ajaxStop")}function r(t,e){var i=e.context;return e.beforeSend.call(i,t,e)===!1||n(e,i,"ajaxBeforeSend",[t,e])===!1?!1:void n(e,i,"ajaxSend",[t,e])}function o(t,e,i){var r=i.context,o="success";i.success.call(r,t,o,e),n(i,r,"ajaxSuccess",[e,i,t]),s(o,e,i)}function a(t,e,i,r){var o=r.context;r.error.call(o,i,e,t),n(r,o,"ajaxError",[i,r,t]),s(e,i,r)}function s(t,e,r){var o=r.context;r.complete.call(o,e,t),n(r,o,"ajaxComplete",[e,r]),i(r)}function u(){}function c(t){return t&&(t==E?"html":t==b?"json":w.test(t)?"script":x.test(t)&&"xml")||"text"}function l(t,n){return(t+"&"+n).replace(/[&?]{1,2}/,"?")}function f(t){d(t.data)&&(t.data=$.param(t.data)),t.data&&(!t.type||"GET"==t.type.toUpperCase())&&(t.url=l(t.url,t.data))}function h(t,n,e,i){var r=$.isArray(n);$.each(n,function(n,o){i&&(n=e?i:i+"["+(r?"":n)+"]"),!i&&r?t.add(o.name,o.value):(e?$.isArray(o):d(o))?h(t,o,e,n):t.add(n,o)})}var p=0,d=$.isObject,m=window.document,g,v,y=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,w=/^(?:text|application)\/javascript/i,x=/^(?:text|application)\/xml/i,b="application/json",E="text/html",T=/^\s*$/;$.active=0,$.ajaxJSONP=function(t){var n="jsonp"+ ++p,e=m.createElement("script"),i=function(){$(e).remove(),n in window&&(window[n]=u),s("abort",r,t)},r={abort:i},a;return t.error&&(e.onerror=function(){r.abort(),t.error()}),window[n]=function(i){clearTimeout(a),$(e).remove(),delete window[n],o(i,r,t)},f(t),e.src=t.url.replace(/=\?/,"="+n),$("head").append(e),t.timeout>0&&(a=setTimeout(function(){r.abort(),s("timeout",r,t)},t.timeout)),r},$.ajaxSettings={type:"GET",beforeSend:u,success:u,error:u,complete:u,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript",json:b,xml:"application/xml, text/xml",html:E,text:"text/plain"},crossDomain:!1,timeout:0},$.ajax=function(t){var n=$.extend({},t||{});for(g in $.ajaxSettings)void 0===n[g]&&(n[g]=$.ajaxSettings[g]);e(n),n.crossDomain||(n.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(n.url)&&RegExp.$2!=window.location.host);var i=n.dataType,s=/=\?/.test(n.url);if("jsonp"==i||s)return s||(n.url=l(n.url,"callback=?")),$.ajaxJSONP(n);n.url||(n.url=window.location.toString()),f(n);var h=n.accepts[i],p={},d=/^([\w-]+:)\/\//.test(n.url)?RegExp.$1:window.location.protocol,m=$.ajaxSettings.xhr(),y;n.crossDomain||(p["X-Requested-With"]="XMLHttpRequest"),h&&(p.Accept=h,h.indexOf(",")>-1&&(h=h.split(",",2)[0]),m.overrideMimeType&&m.overrideMimeType(h)),(n.contentType||n.data&&"GET"!=n.type.toUpperCase())&&(p["Content-Type"]=n.contentType||"application/x-www-form-urlencoded"),n.headers=$.extend(p,n.headers||{}),m.onreadystatechange=function(){if(4==m.readyState){clearTimeout(y);var t,e=!1;if(m.status>=200&&m.status<300||304==m.status||0==m.status&&"file:"==d){i=i||c(m.getResponseHeader("content-type")),t=m.responseText;try{"script"==i?(1,eval)(t):"xml"==i?t=m.responseXML:"json"==i&&(t=T.test(t)?null:JSON.parse(t))}catch(r){e=r}e?a(e,"parsererror",m,n):o(t,m,n)}else a(null,"error",m,n)}};var w="async"in n?n.async:!0;m.open(n.type,n.url,w);for(v in n.headers)m.setRequestHeader(v,n.headers[v]);return r(m,n)===!1?(m.abort(),!1):(n.timeout>0&&(y=setTimeout(function(){m.onreadystatechange=u,m.abort(),a(null,"timeout",m,n)},n.timeout)),m.send(n.data?n.data:null),m)},$.get=function(t,n){return $.ajax({url:t,success:n})},$.post=function(t,n,e,i){return $.isFunction(n)&&(i=i||e,e=n,n=null),$.ajax({type:"POST",url:t,data:n,success:e,dataType:i})},$.getJSON=function(t,n){return $.ajax({url:t,success:n,dataType:"json"})},$.fn.load=function(t,n){if(!this.length)return this;var e=this,i=t.split(/\s/),r;return i.length>1&&(t=i[0],r=i[1]),$.get(t,function(t){e.html(r?$(m.createElement("div")).html(t.replace(y,"")).find(r).html():t),n&&n.call(e)}),this};var j=encodeURIComponent;$.param=function(t,n){var e=[];return e.add=function(t,n){this.push(j(t)+"="+j(n))},h(e,t,n),e.join("&").replace("%20","+")}}(Zepto),function(t){t.fn.serializeArray=function(){var n=[],e;return t(Array.prototype.slice.call(this.get(0).elements)).each(function(){e=t(this);var i=e.attr("type");"fieldset"!=this.nodeName.toLowerCase()&&!this.disabled&&"submit"!=i&&"reset"!=i&&"button"!=i&&("radio"!=i&&"checkbox"!=i||this.checked)&&n.push({name:e.attr("name"),value:e.val()})}),n},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(n){t.push(encodeURIComponent(n.name)+"="+encodeURIComponent(n.value))}),t.join("&")},t.fn.submit=function(n){if(n)this.bind("submit",n);else if(this.length){var e=t.Event("submit");this.eq(0).trigger(e),e.defaultPrevented||this.get(0).submit()}return this}}(Zepto),function(t){function n(t){return"tagName"in t?t:t.parentNode}function e(t,n,e,i){var r=Math.abs(t-n),o=Math.abs(e-i);return r>=o?t-n>0?"Left":"Right":e-i>0?"Up":"Down"}function i(){u=null,o.last&&(o.el.trigger("longTap"),o={})}function r(){u&&clearTimeout(u),u=null}var o={},a,s=750,u;t(document).ready(function(){var c,l;t(document.body).bind("touchstart",function(e){c=Date.now(),l=c-(o.last||c),o.el=t(n(e.touches[0].target)),a&&clearTimeout(a),o.x1=e.touches[0].pageX,o.y1=e.touches[0].pageY,l>0&&250>=l&&(o.isDoubleTap=!0),o.last=c,u=setTimeout(i,s)}).bind("touchmove",function(t){r(),o.x2=t.touches[0].pageX,o.y2=t.touches[0].pageY}).bind("touchend",function(t){r(),o.isDoubleTap?(o.el.trigger("doubleTap"),o={}):o.x2&&Math.abs(o.x1-o.x2)>30||o.y2&&Math.abs(o.y1-o.y2)>30?(o.el.trigger("swipe")&&o.el.trigger("swipe"+e(o.x1,o.x2,o.y1,o.y2)),o={}):"last"in o&&(o.el.trigger("tap"),a=setTimeout(function(){a=null,o.el.trigger("singleTap"),o={}},250))}).bind("touchcancel",function(){a&&clearTimeout(a),u&&clearTimeout(u),u=a=null,o={}})}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(n){t.fn[n]=function(t){return this.bind(n,t)}})}(Zepto);