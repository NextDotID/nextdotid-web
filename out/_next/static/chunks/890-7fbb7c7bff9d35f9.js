(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[890],{9954:function(e){/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */e.exports=function(){var e={686:function(e,t,n){"use strict";n.d(t,{default:function(){return s}});var r=n(279),o=n.n(r),i=n(370),c=n.n(i),u=n(817),a=n.n(u);function command(e){try{return document.execCommand(e)}catch(e){return!1}}var actions_cut=function(e){var t=a()(e);return command("cut"),t};function createFakeElement(e){var t="rtl"===document.documentElement.getAttribute("dir"),n=document.createElement("textarea");n.style.fontSize="12pt",n.style.border="0",n.style.padding="0",n.style.margin="0",n.style.position="absolute",n.style[t?"right":"left"]="-9999px";var r=window.pageYOffset||document.documentElement.scrollTop;return n.style.top="".concat(r,"px"),n.setAttribute("readonly",""),n.value=e,n}var fakeCopyAction=function(e,t){var n=createFakeElement(e);t.container.appendChild(n);var r=a()(n);return command("copy"),n.remove(),r},actions_copy=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body},n="";return"string"==typeof e?n=fakeCopyAction(e,t):e instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(null==e?void 0:e.type)?n=fakeCopyAction(e.value,t):(n=a()(e),command("copy")),n};function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var actions_default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.action,n=void 0===t?"copy":t,r=e.container,o=e.target,i=e.text;if("copy"!==n&&"cut"!==n)throw Error('Invalid "action" value, use either "copy" or "cut"');if(void 0!==o){if(o&&"object"===_typeof(o)&&1===o.nodeType){if("copy"===n&&o.hasAttribute("disabled"))throw Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===n&&(o.hasAttribute("readonly")||o.hasAttribute("disabled")))throw Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')}else throw Error('Invalid "target" value, use a valid Element')}return i?actions_copy(i,{container:r}):o?"cut"===n?actions_cut(o):actions_copy(o,{container:r}):void 0};function clipboard_typeof(e){return(clipboard_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var n,r=_getPrototypeOf(e);if(t){var o=_getPrototypeOf(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){return t&&("object"===clipboard_typeof(t)||"function"==typeof t)?t:_assertThisInitialized(e)}function _assertThisInitialized(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function getAttributeValue(e,t){var n="data-clipboard-".concat(e);if(t.hasAttribute(n))return t.getAttribute(n)}var s=function(e){_inherits(Clipboard,e);var t=_createSuper(Clipboard);function Clipboard(e,n){var r;return _classCallCheck(this,Clipboard),(r=t.call(this)).resolveOptions(n),r.listenClick(e),r}return _createClass(Clipboard,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===clipboard_typeof(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=c()(e,"click",function(e){return t.onClick(e)})}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget,n=this.action(t)||"copy",r=actions_default({action:n,container:this.container,target:this.target(t),text:this.text(t)});this.emit(r?"success":"error",{action:n,text:r,trigger:t,clearSelection:function(){t&&t.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(e){return getAttributeValue("action",e)}},{key:"defaultTarget",value:function(e){var t=getAttributeValue("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return getAttributeValue("text",e)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body};return actions_copy(e,t)}},{key:"cut",value:function(e){return actions_cut(e)}},{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t=!!document.queryCommandSupported;return("string"==typeof e?[e]:e).forEach(function(e){t=t&&!!document.queryCommandSupported(e)}),t}}]),Clipboard}(o())},828:function(e){if("undefined"!=typeof Element&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function closest(e,t){for(;e&&9!==e.nodeType;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}e.exports=closest},438:function(e,t,n){var r=n(828);function _delegate(e,t,n,r,o){var i=listener.apply(this,arguments);return e.addEventListener(n,i,o),{destroy:function(){e.removeEventListener(n,i,o)}}}function delegate(e,t,n,r,o){return"function"==typeof e.addEventListener?_delegate.apply(null,arguments):"function"==typeof n?_delegate.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,function(e){return _delegate(e,t,n,r,o)}))}function listener(e,t,n,o){return function(n){n.delegateTarget=r(n.target,t),n.delegateTarget&&o.call(e,n)}}e.exports=delegate},879:function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},370:function(e,t,n){var r=n(879),o=n(438);function listen(e,t,n){if(!e&&!t&&!n)throw Error("Missing required arguments");if(!r.string(t))throw TypeError("Second argument must be a String");if(!r.fn(n))throw TypeError("Third argument must be a Function");if(r.node(e))return listenNode(e,t,n);if(r.nodeList(e))return listenNodeList(e,t,n);if(r.string(e))return listenSelector(e,t,n);throw TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function listenNode(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}function listenNodeList(e,t,n){return Array.prototype.forEach.call(e,function(e){e.addEventListener(t,n)}),{destroy:function(){Array.prototype.forEach.call(e,function(e){e.removeEventListener(t,n)})}}}function listenSelector(e,t,n){return o(document.body,e,t,n)}e.exports=listen},817:function(e){function select(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var r=window.getSelection(),o=document.createRange();o.selectNodeContents(e),r.removeAllRanges(),r.addRange(o),t=r.toString()}return t}e.exports=select},279:function(e){function E(){}E.prototype={on:function(e,t,n){var r=this.e||(this.e={});return(r[e]||(r[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var r=this;function listener(){r.off(e,listener),t.apply(n,arguments)}return listener._=t,this.on(e,listener,n)},emit:function(e){for(var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),r=0,o=n.length;r<o;r++)n[r].fn.apply(n[r].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),r=n[e],o=[];if(r&&t)for(var i=0,c=r.length;i<c;i++)r[i].fn!==t&&r[i].fn._!==t&&o.push(r[i]);return o.length?n[e]=o:delete n[e],this}},e.exports=E,e.exports.TinyEmitter=E}},t={};function __nested_webpack_require_24495__(n){if(t[n])return t[n].exports;var r=t[n]={exports:{}};return e[n](r,r.exports,__nested_webpack_require_24495__),r.exports}return __nested_webpack_require_24495__.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return __nested_webpack_require_24495__.d(t,{a:t}),t},__nested_webpack_require_24495__.d=function(e,t){for(var n in t)__nested_webpack_require_24495__.o(t,n)&&!__nested_webpack_require_24495__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},__nested_webpack_require_24495__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__nested_webpack_require_24495__(686)}().default},1396:function(e,t,n){e.exports=n(8326)},3018:function(e,t,n){"use strict";var r=n(1289);function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,e.exports=function(){function shim(e,t,n,o,i,c){if(c!==r){var u=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function getShim(){return shim}shim.isRequired=shim;var e={array:shim,bigint:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return e.PropTypes=e,e}},4275:function(e,t,n){e.exports=n(3018)()},1289:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},7469:function(e,t,n){var r,o,i,c;e.exports=(r=n(9954),o=n(4275),i=n(2265),c=n(4887),function(e){var t={};function __nested_webpack_require_986__(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,__nested_webpack_require_986__),r.l=!0,r.exports}return __nested_webpack_require_986__.m=e,__nested_webpack_require_986__.c=t,__nested_webpack_require_986__.d=function(e,t,n){__nested_webpack_require_986__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},__nested_webpack_require_986__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__nested_webpack_require_986__.t=function(e,t){if(1&t&&(e=__nested_webpack_require_986__(e)),8&t||4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(__nested_webpack_require_986__.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)__nested_webpack_require_986__.d(n,r,(function(t){return e[t]}).bind(null,r));return n},__nested_webpack_require_986__.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return __nested_webpack_require_986__.d(t,"a",t),t},__nested_webpack_require_986__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__nested_webpack_require_986__.p="",__nested_webpack_require_986__(__nested_webpack_require_986__.s="./index.js")}({"./index.js":function(e,t,n){"use strict";n.r(t);var r=n(/*! react */"react"),o=n.n(r),i=n(/*! react-dom */"react-dom"),c=n.n(i),u=n(/*! prop-types */"prop-types"),a=n.n(u);function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){_defineProperty(e,t,n[t])})}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _possibleConstructorReturn(e,t){return t&&("object"===_typeof(t)||"function"==typeof t)?t:_assertThisInitialized(e)}function _assertThisInitialized(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e){function ClipboardButton(){return _classCallCheck(this,ClipboardButton),_possibleConstructorReturn(this,_getPrototypeOf(ClipboardButton).apply(this,arguments))}return _inherits(ClipboardButton,e),_createClass(ClipboardButton,[{key:"propsWith",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n={};return Object.keys(this.props).forEach(function(r){-1!==r.search(e)&&(n[t?r.replace(e,""):r]=this.props[r])},this),n}},{key:"componentWillUnmount",value:function(){this.clipboard&&this.clipboard.destroy()}},{key:"componentDidMount",value:function(){var e=this.props.options||this.propsWith(/^option-/,!0),t=c.a.findDOMNode(this.element);if(t){var r=n(/*! clipboard */"clipboard");this.clipboard=new r(t,e),Object.keys(this.propsWith(/^on/,!0)).forEach(function(e){this.clipboard.on(e.toLowerCase(),this.props["on"+e])},this)}}},{key:"render",value:function(){var e=this,t=_objectSpread({title:this.props.title||"",type:this.getType(),className:this.props.className||"",style:this.props.style||{},ref:function(t){return e.element=t},onClick:this.props.onClick},this.propsWith(/^data-/),this.propsWith(/^button-/,!0)),r=n(/*! clipboard */"clipboard");return this.props.isVisibleWhenUnsupported||r.isSupported()?o.a.createElement(this.getComponent(),t,this.props.children):null}},{key:"getType",value:function(){return"button"===this.getComponent()||"input"===this.getComponent()?this.props.type||"button":void 0}},{key:"getComponent",value:function(){return this.props.component||"button"}}]),ClipboardButton}(o.a.Component);_defineProperty(s,"propTypes",{options:function(e,t,n){var r=e[t];return r&&"object"!==_typeof(r)||Array.isArray(r)?Error("Invalid props '".concat(t,"' supplied to '").concat(n,"'. ")+"'".concat(t,"' is not an object.")):void 0!==e["option-text"]&&"function"!=typeof e["option-text"]?Error("Invalid props 'option-text' supplied to '".concat(n,"'. ")+"'option-text' is not a function."):void 0},title:a.a.string,type:a.a.string,className:a.a.string,style:a.a.object,component:a.a.any,children:a.a.any}),_defineProperty(s,"defaultProps",{isVisibleWhenUnsupported:!0,onClick:function(){}}),t.default=s},clipboard:function(e,t){e.exports=r},"prop-types":function(e,t){e.exports=o},react:function(e,t){e.exports=i},"react-dom":function(e,t){e.exports=c}}))}}]);