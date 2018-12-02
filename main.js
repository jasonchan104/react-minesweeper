/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(11);
} else {}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, isValidElement, REACT_ELEMENT_TYPE; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(15)();
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {}

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(root);
/* harmony default export */ __webpack_exports__["a"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5), __webpack_require__(17)(module)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(12);
} else {}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try { // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)))

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.5.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var m=__webpack_require__(4),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.async_mode"):60111,y=n?Symbol.for("react.forward_ref"):60112;n&&Symbol.for("react.placeholder");
var z="function"===typeof Symbol&&Symbol.iterator;function A(a,b,d,c,e,g,h,f){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var k=[d,c,e,g,h,f],l=0;a=Error(b.replace(/%s/g,function(){return k[l++]}));a.name="Invariant Violation"}a.framesToPop=1;throw a;}}
function B(a){for(var b=arguments.length-1,d="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=0;c<b;c++)d+="&args[]="+encodeURIComponent(arguments[c+1]);A(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",d)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D={};
function E(a,b,d){this.props=a;this.context=b;this.refs=D;this.updater=d||C}E.prototype.isReactComponent={};E.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?B("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,d){this.props=a;this.context=b;this.refs=D;this.updater=d||C}var H=G.prototype=new F;
H.constructor=G;m(H,E.prototype);H.isPureReactComponent=!0;var I={current:null,currentDispatcher:null},J=Object.prototype.hasOwnProperty,K={key:!0,ref:!0,__self:!0,__source:!0};
function L(a,b,d){var c=void 0,e={},g=null,h=null;if(null!=b)for(c in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(g=""+b.key),b)J.call(b,c)&&!K.hasOwnProperty(c)&&(e[c]=b[c]);var f=arguments.length-2;if(1===f)e.children=d;else if(1<f){for(var k=Array(f),l=0;l<f;l++)k[l]=arguments[l+2];e.children=k}if(a&&a.defaultProps)for(c in f=a.defaultProps,f)void 0===e[c]&&(e[c]=f[c]);return{$$typeof:p,type:a,key:g,ref:h,props:e,_owner:I.current}}
function M(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function N(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var O=/\/+/g,P=[];function Q(a,b,d,c){if(P.length){var e=P.pop();e.result=a;e.keyPrefix=b;e.func=d;e.context=c;e.count=0;return e}return{result:a,keyPrefix:b,func:d,context:c,count:0}}
function R(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>P.length&&P.push(a)}
function S(a,b,d,c){var e=typeof a;if("undefined"===e||"boolean"===e)a=null;var g=!1;if(null===a)g=!0;else switch(e){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return d(c,a,""===b?"."+T(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var h=0;h<a.length;h++){e=a[h];var f=b+T(e,h);g+=S(e,f,d,c)}else if(null===a||"object"!==typeof a?f=null:(f=z&&a[z]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),h=
0;!(e=a.next()).done;)e=e.value,f=b+T(e,h++),g+=S(e,f,d,c);else"object"===e&&(d=""+a,B("31","[object Object]"===d?"object with keys {"+Object.keys(a).join(", ")+"}":d,""));return g}function U(a,b,d){return null==a?0:S(a,"",b,d)}function T(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function V(a,b){a.func.call(a.context,b,a.count++)}
function aa(a,b,d){var c=a.result,e=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?W(a,c,d,function(a){return a}):null!=a&&(N(a)&&(a=M(a,e+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+d)),c.push(a))}function W(a,b,d,c,e){var g="";null!=d&&(g=(""+d).replace(O,"$&/")+"/");b=Q(b,g,c,e);U(a,aa,b);R(b)}function ba(a,b){var d=I.currentDispatcher;null===d?B("277"):void 0;return d.readContext(a,b)}
var X={Children:{map:function(a,b,d){if(null==a)return a;var c=[];W(a,c,null,b,d);return c},forEach:function(a,b,d){if(null==a)return a;b=Q(null,null,b,d);U(a,V,b);R(b)},count:function(a){return U(a,function(){return null},null)},toArray:function(a){var b=[];W(a,b,null,function(a){return a});return b},only:function(a){N(a)?void 0:B("143");return a}},createRef:function(){return{current:null}},Component:E,PureComponent:G,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,
_currentValue:a,_currentValue2:a,Provider:null,Consumer:null,unstable_read:null};a.Provider={$$typeof:v,_context:a};a.Consumer=a;a.unstable_read=ba.bind(null,a);return a},forwardRef:function(a){return{$$typeof:y,render:a}},Fragment:r,StrictMode:t,unstable_AsyncMode:x,unstable_Profiler:u,createElement:L,cloneElement:function(a,b,d){null===a||void 0===a?B("267",a):void 0;var c=void 0,e=m({},a.props),g=a.key,h=a.ref,f=a._owner;if(null!=b){void 0!==b.ref&&(h=b.ref,f=I.current);void 0!==b.key&&(g=""+b.key);
var k=void 0;a.type&&a.type.defaultProps&&(k=a.type.defaultProps);for(c in b)J.call(b,c)&&!K.hasOwnProperty(c)&&(e[c]=void 0===b[c]&&void 0!==k?k[c]:b[c])}c=arguments.length-2;if(1===c)e.children=d;else if(1<c){k=Array(c);for(var l=0;l<c;l++)k[l]=arguments[l+2];e.children=k}return{$$typeof:p,type:a.type,key:g,ref:h,props:e,_owner:f}},createFactory:function(a){var b=L.bind(null,a);b.type=a;return b},isValidElement:N,version:"16.5.2",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:I,
assign:m}},Y={default:X},Z=Y&&X||Y;module.exports=Z.default||Z;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.5.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(0),n=__webpack_require__(4),ba=__webpack_require__(13);function ca(a,b,c,d,e,f,g,h){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var k=[c,d,e,f,g,h],l=0;a=Error(b.replace(/%s/g,function(){return k[l++]}));a.name="Invariant Violation"}a.framesToPop=1;throw a;}}
function t(a){for(var b=arguments.length-1,c="https://reactjs.org/docs/error-decoder.html?invariant="+a,d=0;d<b;d++)c+="&args[]="+encodeURIComponent(arguments[d+1]);ca(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",c)}aa?void 0:t("227");function da(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}
var ea=!1,fa=null,ha=!1,ia=null,ja={onError:function(a){ea=!0;fa=a}};function ka(a,b,c,d,e,f,g,h,k){ea=!1;fa=null;da.apply(ja,arguments)}function la(a,b,c,d,e,f,g,h,k){ka.apply(this,arguments);if(ea){if(ea){var l=fa;ea=!1;fa=null}else t("198"),l=void 0;ha||(ha=!0,ia=l)}}var ma=null,na={};
function oa(){if(ma)for(var a in na){var b=na[a],c=ma.indexOf(a);-1<c?void 0:t("96",a);if(!pa[c]){b.extractEvents?void 0:t("97",a);pa[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;qa.hasOwnProperty(h)?t("99",h):void 0;qa[h]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&ra(k[e],g,h);e=!0}else f.registrationName?(ra(f.registrationName,g,h),e=!0):e=!1;e?void 0:t("98",d,a)}}}}
function ra(a,b,c){sa[a]?t("100",a):void 0;sa[a]=b;ta[a]=b.eventTypes[c].dependencies}var pa=[],qa={},sa={},ta={},ua=null,va=null,wa=null;function xa(a,b,c,d){b=a.type||"unknown-event";a.currentTarget=wa(d);la(b,c,void 0,a);a.currentTarget=null}function ya(a,b){null==b?t("30"):void 0;if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}
function za(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var Aa=null;function Ba(a,b){if(a){var c=a._dispatchListeners,d=a._dispatchInstances;if(Array.isArray(c))for(var e=0;e<c.length&&!a.isPropagationStopped();e++)xa(a,b,c[e],d[e]);else c&&xa(a,b,c,d);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}function Ca(a){return Ba(a,!0)}function Da(a){return Ba(a,!1)}
var Ea={injectEventPluginOrder:function(a){ma?t("101"):void 0;ma=Array.prototype.slice.call(a);oa()},injectEventPluginsByName:function(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];na.hasOwnProperty(c)&&na[c]===d||(na[c]?t("102",c):void 0,na[c]=d,b=!0)}b&&oa()}};
function Fa(a,b){var c=a.stateNode;if(!c)return null;var d=ua(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;c&&"function"!==typeof c?t("231",b,typeof c):void 0;
return c}function Ga(a,b){null!==a&&(Aa=ya(Aa,a));a=Aa;Aa=null;if(a&&(b?za(a,Ca):za(a,Da),Aa?t("95"):void 0,ha))throw b=ia,ha=!1,ia=null,b;}var Ha=Math.random().toString(36).slice(2),Ia="__reactInternalInstance$"+Ha,Ja="__reactEventHandlers$"+Ha;function Ka(a){if(a[Ia])return a[Ia];for(;!a[Ia];)if(a.parentNode)a=a.parentNode;else return null;a=a[Ia];return 7===a.tag||8===a.tag?a:null}function La(a){a=a[Ia];return!a||7!==a.tag&&8!==a.tag?null:a}
function Ma(a){if(7===a.tag||8===a.tag)return a.stateNode;t("33")}function Na(a){return a[Ja]||null}function Oa(a){do a=a.return;while(a&&7!==a.tag);return a?a:null}function Pa(a,b,c){if(b=Fa(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=ya(c._dispatchListeners,b),c._dispatchInstances=ya(c._dispatchInstances,a)}
function Qa(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=Oa(b);for(b=c.length;0<b--;)Pa(c[b],"captured",a);for(b=0;b<c.length;b++)Pa(c[b],"bubbled",a)}}function Ra(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Fa(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=ya(c._dispatchListeners,b),c._dispatchInstances=ya(c._dispatchInstances,a))}function Ta(a){a&&a.dispatchConfig.registrationName&&Ra(a._targetInst,null,a)}
function Ua(a){za(a,Qa)}var Va=!("undefined"===typeof window||!window.document||!window.document.createElement);function Wa(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Ya={animationend:Wa("Animation","AnimationEnd"),animationiteration:Wa("Animation","AnimationIteration"),animationstart:Wa("Animation","AnimationStart"),transitionend:Wa("Transition","TransitionEnd")},Za={},$a={};
Va&&($a=document.createElement("div").style,"AnimationEvent"in window||(delete Ya.animationend.animation,delete Ya.animationiteration.animation,delete Ya.animationstart.animation),"TransitionEvent"in window||delete Ya.transitionend.transition);function ab(a){if(Za[a])return Za[a];if(!Ya[a])return a;var b=Ya[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in $a)return Za[a]=b[c];return a}
var bb=ab("animationend"),cb=ab("animationiteration"),db=ab("animationstart"),eb=ab("transitionend"),fb="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gb=null,hb=null,ib=null;
function jb(){if(ib)return ib;var a,b=hb,c=b.length,d,e="value"in gb?gb.value:gb.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return ib=e.slice(a,1<d?1-d:void 0)}function kb(){return!0}function lb(){return!1}
function z(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?kb:lb;this.isPropagationStopped=lb;return this}
n(z.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=kb)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=kb)},persist:function(){this.isPersistent=kb},isPersistent:lb,destructor:function(){var a=this.constructor.Interface,
b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=lb;this._dispatchInstances=this._dispatchListeners=null}});z.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
z.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;n(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=n({},d.Interface,a);c.extend=d.extend;mb(c);return c};mb(z);function nb(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}function ob(a){a instanceof this?void 0:t("279");a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}
function mb(a){a.eventPool=[];a.getPooled=nb;a.release=ob}var pb=z.extend({data:null}),qb=z.extend({data:null}),rb=[9,13,27,32],sb=Va&&"CompositionEvent"in window,tb=null;Va&&"documentMode"in document&&(tb=document.documentMode);
var ub=Va&&"TextEvent"in window&&!tb,vb=Va&&(!sb||tb&&8<tb&&11>=tb),wb=String.fromCharCode(32),xb={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},yb=!1;
function zb(a,b){switch(a){case "keyup":return-1!==rb.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function Ab(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var Bb=!1;function Cb(a,b){switch(a){case "compositionend":return Ab(b);case "keypress":if(32!==b.which)return null;yb=!0;return wb;case "textInput":return a=b.data,a===wb&&yb?null:a;default:return null}}
function Db(a,b){if(Bb)return"compositionend"===a||!sb&&zb(a,b)?(a=jb(),ib=hb=gb=null,Bb=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return vb&&"ko"!==b.locale?null:b.data;default:return null}}
var Eb={eventTypes:xb,extractEvents:function(a,b,c,d){var e=void 0;var f=void 0;if(sb)b:{switch(a){case "compositionstart":e=xb.compositionStart;break b;case "compositionend":e=xb.compositionEnd;break b;case "compositionupdate":e=xb.compositionUpdate;break b}e=void 0}else Bb?zb(a,c)&&(e=xb.compositionEnd):"keydown"===a&&229===c.keyCode&&(e=xb.compositionStart);e?(vb&&"ko"!==c.locale&&(Bb||e!==xb.compositionStart?e===xb.compositionEnd&&Bb&&(f=jb()):(gb=d,hb="value"in gb?gb.value:gb.textContent,Bb=
!0)),e=pb.getPooled(e,b,c,d),f?e.data=f:(f=Ab(c),null!==f&&(e.data=f)),Ua(e),f=e):f=null;(a=ub?Cb(a,c):Db(a,c))?(b=qb.getPooled(xb.beforeInput,b,c,d),b.data=a,Ua(b)):b=null;return null===f?b:null===b?f:[f,b]}},Fb=null,Gb=null,Hb=null;function Ib(a){if(a=va(a)){"function"!==typeof Fb?t("280"):void 0;var b=ua(a.stateNode);Fb(a.stateNode,a.type,b)}}function Jb(a){Gb?Hb?Hb.push(a):Hb=[a]:Gb=a}function Kb(){if(Gb){var a=Gb,b=Hb;Hb=Gb=null;Ib(a);if(b)for(a=0;a<b.length;a++)Ib(b[a])}}
function Lb(a,b){return a(b)}function Mb(a,b,c){return a(b,c)}function Nb(){}var Ob=!1;function Pb(a,b){if(Ob)return a(b);Ob=!0;try{return Lb(a,b)}finally{if(Ob=!1,null!==Gb||null!==Hb)Nb(),Kb()}}var Qb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rb(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!Qb[a.type]:"textarea"===b?!0:!1}
function Sb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function Tb(a){if(!Va)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}function Ub(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Vb(a){var b=Ub(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Wb(a){a._valueTracker||(a._valueTracker=Vb(a))}function Xb(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Ub(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}
var Yb=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zb=/^(.*)[\\\/]/,C="function"===typeof Symbol&&Symbol.for,$b=C?Symbol.for("react.element"):60103,ac=C?Symbol.for("react.portal"):60106,bc=C?Symbol.for("react.fragment"):60107,cc=C?Symbol.for("react.strict_mode"):60108,dc=C?Symbol.for("react.profiler"):60114,ec=C?Symbol.for("react.provider"):60109,fc=C?Symbol.for("react.context"):60110,gc=C?Symbol.for("react.async_mode"):60111,hc=C?Symbol.for("react.forward_ref"):60112,ic=C?Symbol.for("react.placeholder"):
60113,jc="function"===typeof Symbol&&Symbol.iterator;function kc(a){if(null===a||"object"!==typeof a)return null;a=jc&&a[jc]||a["@@iterator"];return"function"===typeof a?a:null}
function lc(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case gc:return"AsyncMode";case bc:return"Fragment";case ac:return"Portal";case dc:return"Profiler";case cc:return"StrictMode";case ic:return"Placeholder"}if("object"===typeof a){switch(a.$$typeof){case fc:return"Context.Consumer";case ec:return"Context.Provider";case hc:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+")":
"ForwardRef")}if("function"===typeof a.then&&(a=1===a._reactStatus?a._reactResult:null))return lc(a)}return null}function mc(a){var b="";do{a:switch(a.tag){case 4:case 0:case 1:case 2:case 3:case 7:case 10:var c=a._debugOwner,d=a._debugSource,e=lc(a.type);var f=null;c&&(f=lc(c.type));c=e;e="";d?e=" (at "+d.fileName.replace(Zb,"")+":"+d.lineNumber+")":f&&(e=" (created by "+f+")");f="\n    in "+(c||"Unknown")+e;break a;default:f=""}b+=f;a=a.return}while(a);return b}
var nc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pc=Object.prototype.hasOwnProperty,qc={},rc={};
function sc(a){if(pc.call(rc,a))return!0;if(pc.call(qc,a))return!1;if(nc.test(a))return rc[a]=!0;qc[a]=!0;return!1}function tc(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function uc(a,b,c,d){if(null===b||"undefined"===typeof b||tc(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function D(a,b,c,d,e){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b}var E={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){E[a]=new D(a,0,!1,a,null)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];E[b]=new D(b,1,!1,a[1],null)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){E[a]=new D(a,2,!1,a.toLowerCase(),null)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){E[a]=new D(a,2,!1,a,null)});"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){E[a]=new D(a,3,!1,a.toLowerCase(),null)});["checked","multiple","muted","selected"].forEach(function(a){E[a]=new D(a,3,!0,a,null)});
["capture","download"].forEach(function(a){E[a]=new D(a,4,!1,a,null)});["cols","rows","size","span"].forEach(function(a){E[a]=new D(a,6,!1,a,null)});["rowSpan","start"].forEach(function(a){E[a]=new D(a,5,!1,a.toLowerCase(),null)});var vc=/[\-:]([a-z])/g;function wc(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(vc,
wc);E[b]=new D(b,1,!1,a,null)});"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(vc,wc);E[b]=new D(b,1,!1,a,"http://www.w3.org/1999/xlink")});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(vc,wc);E[b]=new D(b,1,!1,a,"http://www.w3.org/XML/1998/namespace")});E.tabIndex=new D("tabIndex",1,!1,"tabindex",null);
function xc(a,b,c,d){var e=E.hasOwnProperty(b)?E[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(uc(b,c,e,d)&&(c=null),d||null===e?sc(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
function yc(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function zc(a,b){var c=b.checked;return n({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
function Bc(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=yc(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function Cc(a,b){b=b.checked;null!=b&&xc(a,"checked",b,!1)}
function Dc(a,b){Cc(a,b);var c=yc(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?Ec(a,b.type,c):b.hasOwnProperty("defaultValue")&&Ec(a,b.type,yc(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function Fc(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!a.defaultChecked;a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function Ec(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}var Gc={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function Hc(a,b,c){a=z.getPooled(Gc.change,a,b,c);a.type="change";Jb(c);Ua(a);return a}var Ic=null,Jc=null;function Kc(a){Ga(a,!1)}
function Lc(a){var b=Ma(a);if(Xb(b))return a}function Mc(a,b){if("change"===a)return b}var Nc=!1;Va&&(Nc=Tb("input")&&(!document.documentMode||9<document.documentMode));function Oc(){Ic&&(Ic.detachEvent("onpropertychange",Pc),Jc=Ic=null)}function Pc(a){"value"===a.propertyName&&Lc(Jc)&&(a=Hc(Jc,a,Sb(a)),Pb(Kc,a))}function Qc(a,b,c){"focus"===a?(Oc(),Ic=b,Jc=c,Ic.attachEvent("onpropertychange",Pc)):"blur"===a&&Oc()}function Rc(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return Lc(Jc)}
function Sc(a,b){if("click"===a)return Lc(b)}function Tc(a,b){if("input"===a||"change"===a)return Lc(b)}
var Uc={eventTypes:Gc,_isInputEventSupported:Nc,extractEvents:function(a,b,c,d){var e=b?Ma(b):window,f=void 0,g=void 0,h=e.nodeName&&e.nodeName.toLowerCase();"select"===h||"input"===h&&"file"===e.type?f=Mc:Rb(e)?Nc?f=Tc:(f=Rc,g=Qc):(h=e.nodeName)&&"input"===h.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(f=Sc);if(f&&(f=f(a,b)))return Hc(f,c,d);g&&g(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Ec(e,"number",e.value)}},Vc=z.extend({view:null,detail:null}),Wc={Alt:"altKey",
Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xc(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Wc[a])?!!b[a]:!1}function Yc(){return Xc}
var Zc=0,$c=0,ad=!1,bd=!1,cd=Vc.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Yc,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=Zc;Zc=a.screenX;return ad?"mousemove"===a.type?a.screenX-b:0:(ad=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;
var b=$c;$c=a.screenY;return bd?"mousemove"===a.type?a.screenY-b:0:(bd=!0,0)}}),dd=cd.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),ed={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",
dependencies:["pointerout","pointerover"]}},fd={eventTypes:ed,extractEvents:function(a,b,c,d){var e="mouseover"===a||"pointerover"===a,f="mouseout"===a||"pointerout"===a;if(e&&(c.relatedTarget||c.fromElement)||!f&&!e)return null;e=d.window===d?d:(e=d.ownerDocument)?e.defaultView||e.parentWindow:window;f?(f=b,b=(b=c.relatedTarget||c.toElement)?Ka(b):null):f=null;if(f===b)return null;var g=void 0,h=void 0,k=void 0,l=void 0;if("mouseout"===a||"mouseover"===a)g=cd,h=ed.mouseLeave,k=ed.mouseEnter,l="mouse";
else if("pointerout"===a||"pointerover"===a)g=dd,h=ed.pointerLeave,k=ed.pointerEnter,l="pointer";var m=null==f?e:Ma(f);e=null==b?e:Ma(b);a=g.getPooled(h,f,c,d);a.type=l+"leave";a.target=m;a.relatedTarget=e;c=g.getPooled(k,b,c,d);c.type=l+"enter";c.target=e;c.relatedTarget=m;d=b;if(f&&d)a:{b=f;e=d;l=0;for(g=b;g;g=Oa(g))l++;g=0;for(k=e;k;k=Oa(k))g++;for(;0<l-g;)b=Oa(b),l--;for(;0<g-l;)e=Oa(e),g--;for(;l--;){if(b===e||b===e.alternate)break a;b=Oa(b);e=Oa(e)}b=null}else b=null;e=b;for(b=[];f&&f!==e;){l=
f.alternate;if(null!==l&&l===e)break;b.push(f);f=Oa(f)}for(f=[];d&&d!==e;){l=d.alternate;if(null!==l&&l===e)break;f.push(d);d=Oa(d)}for(d=0;d<b.length;d++)Ra(b[d],"bubbled",a);for(d=f.length;0<d--;)Ra(f[d],"captured",c);return[a,c]}},gd=Object.prototype.hasOwnProperty;function hd(a,b){return a===b?0!==a||0!==b||1/a===1/b:a!==a&&b!==b}
function id(a,b){if(hd(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!gd.call(b,c[d])||!hd(a[c[d]],b[c[d]]))return!1;return!0}function jd(a){var b=a;if(a.alternate)for(;b.return;)b=b.return;else{if(0!==(b.effectTag&2))return 1;for(;b.return;)if(b=b.return,0!==(b.effectTag&2))return 1}return 5===b.tag?2:3}function kd(a){2!==jd(a)?t("188"):void 0}
function ld(a){var b=a.alternate;if(!b)return b=jd(a),3===b?t("188"):void 0,1===b?null:a;for(var c=a,d=b;;){var e=c.return,f=e?e.alternate:null;if(!e||!f)break;if(e.child===f.child){for(var g=e.child;g;){if(g===c)return kd(e),a;if(g===d)return kd(e),b;g=g.sibling}t("188")}if(c.return!==d.return)c=e,d=f;else{g=!1;for(var h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}g?
void 0:t("189")}}c.alternate!==d?t("190"):void 0}5!==c.tag?t("188"):void 0;return c.stateNode.current===c?a:b}function md(a){a=ld(a);if(!a)return null;for(var b=a;;){if(7===b.tag||8===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
var nd=z.extend({animationName:null,elapsedTime:null,pseudoElement:null}),od=z.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),pd=Vc.extend({relatedTarget:null});function qd(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
var rd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},td=Vc.extend({key:function(a){if(a.key){var b=rd[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=qd(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?sd[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Yc,charCode:function(a){return"keypress"===
a.type?qd(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?qd(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),ud=cd.extend({dataTransfer:null}),vd=Vc.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Yc}),wd=z.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),xd=cd.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in
a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),yd=[["abort","abort"],[bb,"animationEnd"],[cb,"animationIteration"],[db,"animationStart"],["canplay","canPlay"],["canplaythrough","canPlayThrough"],["drag","drag"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],
["ended","ended"],["error","error"],["gotpointercapture","gotPointerCapture"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["loadstart","loadStart"],["lostpointercapture","lostPointerCapture"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["playing","playing"],["pointermove","pointerMove"],["pointerout","pointerOut"],["pointerover","pointerOver"],["progress","progress"],["scroll","scroll"],["seeking","seeking"],["stalled","stalled"],
["suspend","suspend"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchmove","touchMove"],[eb,"transitionEnd"],["waiting","waiting"],["wheel","wheel"]],zd={},Ad={};function Bd(a,b){var c=a[0];a=a[1];var d="on"+(a[0].toUpperCase()+a.slice(1));b={phasedRegistrationNames:{bubbled:d,captured:d+"Capture"},dependencies:[c],isInteractive:b};zd[a]=b;Ad[c]=b}
[["blur","blur"],["cancel","cancel"],["click","click"],["close","close"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["auxclick","auxClick"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragstart","dragStart"],["drop","drop"],["focus","focus"],["input","input"],["invalid","invalid"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["mousedown","mouseDown"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["pointercancel","pointerCancel"],
["pointerdown","pointerDown"],["pointerup","pointerUp"],["ratechange","rateChange"],["reset","reset"],["seeked","seeked"],["submit","submit"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchstart","touchStart"],["volumechange","volumeChange"]].forEach(function(a){Bd(a,!0)});yd.forEach(function(a){Bd(a,!1)});
var Cd={eventTypes:zd,isInteractiveTopLevelEventType:function(a){a=Ad[a];return void 0!==a&&!0===a.isInteractive},extractEvents:function(a,b,c,d){var e=Ad[a];if(!e)return null;switch(a){case "keypress":if(0===qd(c))return null;case "keydown":case "keyup":a=td;break;case "blur":case "focus":a=pd;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=cd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=
ud;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=vd;break;case bb:case cb:case db:a=nd;break;case eb:a=wd;break;case "scroll":a=Vc;break;case "wheel":a=xd;break;case "copy":case "cut":case "paste":a=od;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=dd;break;default:a=z}b=a.getPooled(e,b,c,d);Ua(b);return b}},Dd=Cd.isInteractiveTopLevelEventType,
Ed=[];function Fd(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d;for(d=c;d.return;)d=d.return;d=5!==d.tag?null:d.stateNode.containerInfo;if(!d)break;a.ancestors.push(c);c=Ka(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=Sb(a.nativeEvent);d=a.topLevelType;for(var f=a.nativeEvent,g=null,h=0;h<pa.length;h++){var k=pa[h];k&&(k=k.extractEvents(d,b,f,e))&&(g=ya(g,k))}Ga(g,!1)}}var Gd=!0;
function F(a,b){if(!b)return null;var c=(Dd(a)?Hd:Id).bind(null,a);b.addEventListener(a,c,!1)}function Jd(a,b){if(!b)return null;var c=(Dd(a)?Hd:Id).bind(null,a);b.addEventListener(a,c,!0)}function Hd(a,b){Mb(Id,a,b)}
function Id(a,b){if(Gd){var c=Sb(b);c=Ka(c);null===c||"number"!==typeof c.tag||2===jd(c)||(c=null);if(Ed.length){var d=Ed.pop();d.topLevelType=a;d.nativeEvent=b;d.targetInst=c;a=d}else a={topLevelType:a,nativeEvent:b,targetInst:c,ancestors:[]};try{Pb(Fd,a)}finally{a.topLevelType=null,a.nativeEvent=null,a.targetInst=null,a.ancestors.length=0,10>Ed.length&&Ed.push(a)}}}var Kd={},Ld=0,Md="_reactListenersID"+(""+Math.random()).slice(2);
function Nd(a){Object.prototype.hasOwnProperty.call(a,Md)||(a[Md]=Ld++,Kd[a[Md]]={});return Kd[a[Md]]}function Od(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function Qd(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Rd(a,b){var c=Qd(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Qd(c)}}function Sd(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Sd(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Td(){for(var a=window,b=Od();b instanceof a.HTMLIFrameElement;){try{a=b.contentDocument.defaultView}catch(c){break}b=Od(a.document)}return b}function Ud(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
var Vd=Va&&"documentMode"in document&&11>=document.documentMode,Wd={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},Xd=null,Yd=null,Zd=null,$d=!1;
function ae(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if($d||null==Xd||Xd!==Od(c))return null;c=Xd;"selectionStart"in c&&Ud(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return Zd&&id(Zd,c)?null:(Zd=c,a=z.getPooled(Wd.select,Yd,a,b),a.type="select",a.target=Xd,Ua(a),a)}
var be={eventTypes:Wd,extractEvents:function(a,b,c,d){var e=d.window===d?d.document:9===d.nodeType?d:d.ownerDocument,f;if(!(f=!e)){a:{e=Nd(e);f=ta.onSelect;for(var g=0;g<f.length;g++){var h=f[g];if(!e.hasOwnProperty(h)||!e[h]){e=!1;break a}}e=!0}f=!e}if(f)return null;e=b?Ma(b):window;switch(a){case "focus":if(Rb(e)||"true"===e.contentEditable)Xd=e,Yd=b,Zd=null;break;case "blur":Zd=Yd=Xd=null;break;case "mousedown":$d=!0;break;case "contextmenu":case "mouseup":case "dragend":return $d=!1,ae(c,d);case "selectionchange":if(Vd)break;
case "keydown":case "keyup":return ae(c,d)}return null}};Ea.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));ua=Na;va=La;wa=Ma;Ea.injectEventPluginsByName({SimpleEventPlugin:Cd,EnterLeaveEventPlugin:fd,ChangeEventPlugin:Uc,SelectEventPlugin:be,BeforeInputEventPlugin:Eb});function ce(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}
function de(a,b){a=n({children:void 0},b);if(b=ce(b.children))a.children=b;return a}function ee(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+yc(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function fe(a,b){null!=b.dangerouslySetInnerHTML?t("91"):void 0;return n({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function ge(a,b){var c=b.value;null==c&&(c=b.defaultValue,b=b.children,null!=b&&(null!=c?t("92"):void 0,Array.isArray(b)&&(1>=b.length?void 0:t("93"),b=b[0]),c=b),null==c&&(c=""));a._wrapperState={initialValue:yc(c)}}
function he(a,b){var c=yc(b.value),d=yc(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function ie(a){var b=a.textContent;b===a._wrapperState.initialValue&&(a.value=b)}var je={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function ke(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function le(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?ke(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var me=void 0,ne=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==je.svg||"innerHTML"in a)a.innerHTML=b;else{me=me||document.createElement("div");me.innerHTML="<svg>"+b+"</svg>";for(b=me.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function oe(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var pe={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qe=["Webkit","ms","Moz","O"];Object.keys(pe).forEach(function(a){qe.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);pe[b]=pe[a]})});
function re(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--");var e=c;var f=b[c];e=null==f||"boolean"===typeof f||""===f?"":d||"number"!==typeof f||0===f||pe.hasOwnProperty(e)&&pe[e]?(""+f).trim():f+"px";"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var se=n({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function te(a,b){b&&(se[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML?t("137",a,""):void 0),null!=b.dangerouslySetInnerHTML&&(null!=b.children?t("60"):void 0,"object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML?void 0:t("61")),null!=b.style&&"object"!==typeof b.style?t("62",""):void 0)}
function ue(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}
function ve(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=Nd(a);b=ta[b];for(var d=0;d<b.length;d++){var e=b[d];if(!c.hasOwnProperty(e)||!c[e]){switch(e){case "scroll":Jd("scroll",a);break;case "focus":case "blur":Jd("focus",a);Jd("blur",a);c.blur=!0;c.focus=!0;break;case "cancel":case "close":Tb(e)&&Jd(e,a);break;case "invalid":case "submit":case "reset":break;default:-1===fb.indexOf(e)&&F(e,a)}c[e]=!0}}}function we(){}var xe=null,ye=null;
function ze(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}function Ae(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}function Be(a){for(a=a.nextSibling;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}
function Ce(a){for(a=a.firstChild;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}new Set;var De=[],Ee=-1;function G(a){0>Ee||(a.current=De[Ee],De[Ee]=null,Ee--)}function H(a,b){Ee++;De[Ee]=a.current;a.current=b}var Fe={},I={current:Fe},J={current:!1},Ge=Fe;
function He(a,b){var c=a.type.contextTypes;if(!c)return Fe;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function K(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Ie(a){G(J,a);G(I,a)}function Je(a){G(J,a);G(I,a)}
function Ke(a,b,c){I.current!==Fe?t("168"):void 0;H(I,b,a);H(J,c,a)}function Le(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)e in a?void 0:t("108",lc(b)||"Unknown",e);return n({},c,d)}function Me(a){var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||Fe;Ge=I.current;H(I,b,a);H(J,J.current,a);return!0}
function Ne(a,b,c){var d=a.stateNode;d?void 0:t("169");c?(b=Le(a,b,Ge),d.__reactInternalMemoizedMergedChildContext=b,G(J,a),G(I,a),H(I,b,a)):G(J,a);H(J,c,a)}var Oe=null,Pe=null;function Qe(a){return function(b){try{return a(b)}catch(c){}}}
function Re(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);Oe=Qe(function(a){return b.onCommitFiberRoot(c,a)});Pe=Qe(function(a){return b.onCommitFiberUnmount(c,a)})}catch(d){}return!0}
function Se(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=null;this.index=0;this.ref=null;this.pendingProps=b;this.firstContextDependency=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function Te(a){a=a.prototype;return!(!a||!a.isReactComponent)}
function Ue(a,b,c){var d=a.alternate;null===d?(d=new Se(a.tag,b,a.key,a.mode),d.type=a.type,d.stateNode=a.stateNode,d.alternate=a,a.alternate=d):(d.pendingProps=b,d.effectTag=0,d.nextEffect=null,d.firstEffect=null,d.lastEffect=null);d.childExpirationTime=a.childExpirationTime;d.expirationTime=b!==a.pendingProps?c:a.expirationTime;d.child=a.child;d.memoizedProps=a.memoizedProps;d.memoizedState=a.memoizedState;d.updateQueue=a.updateQueue;d.firstContextDependency=a.firstContextDependency;d.sibling=a.sibling;
d.index=a.index;d.ref=a.ref;return d}
function Ve(a,b,c){var d=a.type,e=a.key;a=a.props;var f=void 0;if("function"===typeof d)f=Te(d)?2:4;else if("string"===typeof d)f=7;else a:switch(d){case bc:return We(a.children,b,c,e);case gc:f=10;b|=3;break;case cc:f=10;b|=2;break;case dc:return d=new Se(15,a,e,b|4),d.type=dc,d.expirationTime=c,d;case ic:f=16;break;default:if("object"===typeof d&&null!==d)switch(d.$$typeof){case ec:f=12;break a;case fc:f=11;break a;case hc:f=13;break a;default:if("function"===typeof d.then){f=4;break a}}t("130",
null==d?d:typeof d,"")}b=new Se(f,a,e,b);b.type=d;b.expirationTime=c;return b}function We(a,b,c,d){a=new Se(9,a,d,b);a.expirationTime=c;return a}function Xe(a,b,c){a=new Se(8,a,null,b);a.expirationTime=c;return a}function Ye(a,b,c){b=new Se(6,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function Ze(a,b){a.didError=!1;var c=a.earliestPendingTime;0===c?a.earliestPendingTime=a.latestPendingTime=b:c>b?a.earliestPendingTime=b:a.latestPendingTime<b&&(a.latestPendingTime=b);$e(b,a)}function $e(a,b){var c=b.earliestSuspendedTime,d=b.latestSuspendedTime,e=b.earliestPendingTime,f=b.latestPingedTime;e=0!==e?e:f;0===e&&(0===a||d>a)&&(e=d);a=e;0!==a&&0!==c&&c<a&&(a=c);b.nextExpirationTimeToWorkOn=e;b.expirationTime=a}var af=!1;
function bf(a){return{baseState:a,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function cf(a){return{baseState:a.baseState,firstUpdate:a.firstUpdate,lastUpdate:a.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}
function df(a){return{expirationTime:a,tag:0,payload:null,callback:null,next:null,nextEffect:null}}function ef(a,b){null===a.lastUpdate?a.firstUpdate=a.lastUpdate=b:(a.lastUpdate.next=b,a.lastUpdate=b)}
function ff(a,b){var c=a.alternate;if(null===c){var d=a.updateQueue;var e=null;null===d&&(d=a.updateQueue=bf(a.memoizedState))}else d=a.updateQueue,e=c.updateQueue,null===d?null===e?(d=a.updateQueue=bf(a.memoizedState),e=c.updateQueue=bf(c.memoizedState)):d=a.updateQueue=cf(e):null===e&&(e=c.updateQueue=cf(d));null===e||d===e?ef(d,b):null===d.lastUpdate||null===e.lastUpdate?(ef(d,b),ef(e,b)):(ef(d,b),e.lastUpdate=b)}
function gf(a,b){var c=a.updateQueue;c=null===c?a.updateQueue=bf(a.memoizedState):hf(a,c);null===c.lastCapturedUpdate?c.firstCapturedUpdate=c.lastCapturedUpdate=b:(c.lastCapturedUpdate.next=b,c.lastCapturedUpdate=b)}function hf(a,b){var c=a.alternate;null!==c&&b===c.updateQueue&&(b=a.updateQueue=cf(b));return b}
function jf(a,b,c,d,e,f){switch(c.tag){case 1:return a=c.payload,"function"===typeof a?a.call(f,d,e):a;case 3:a.effectTag=a.effectTag&-1025|64;case 0:a=c.payload;e="function"===typeof a?a.call(f,d,e):a;if(null===e||void 0===e)break;return n({},d,e);case 2:af=!0}return d}
function kf(a,b,c,d,e){af=!1;b=hf(a,b);for(var f=b.baseState,g=null,h=0,k=b.firstUpdate,l=f;null!==k;){var m=k.expirationTime;if(m>e){if(null===g&&(g=k,f=l),0===h||h>m)h=m}else l=jf(a,b,k,l,c,d),null!==k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastEffect?b.firstEffect=b.lastEffect=k:(b.lastEffect.nextEffect=k,b.lastEffect=k));k=k.next}m=null;for(k=b.firstCapturedUpdate;null!==k;){var r=k.expirationTime;if(r>e){if(null===m&&(m=k,null===g&&(f=l)),0===h||h>r)h=r}else l=jf(a,b,k,l,c,d),
null!==k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastCapturedEffect?b.firstCapturedEffect=b.lastCapturedEffect=k:(b.lastCapturedEffect.nextEffect=k,b.lastCapturedEffect=k));k=k.next}null===g&&(b.lastUpdate=null);null===m?b.lastCapturedUpdate=null:a.effectTag|=32;null===g&&null===m&&(f=l);b.baseState=f;b.firstUpdate=g;b.firstCapturedUpdate=m;a.expirationTime=h;a.memoizedState=l}
function lf(a,b,c){null!==b.firstCapturedUpdate&&(null!==b.lastUpdate&&(b.lastUpdate.next=b.firstCapturedUpdate,b.lastUpdate=b.lastCapturedUpdate),b.firstCapturedUpdate=b.lastCapturedUpdate=null);mf(b.firstEffect,c);b.firstEffect=b.lastEffect=null;mf(b.firstCapturedEffect,c);b.firstCapturedEffect=b.lastCapturedEffect=null}function mf(a,b){for(;null!==a;){var c=a.callback;if(null!==c){a.callback=null;var d=b;"function"!==typeof c?t("191",c):void 0;c.call(d)}a=a.nextEffect}}
function nf(a,b){return{value:a,source:b,stack:mc(b)}}var of={current:null},pf=null,qf=null,rf=null;function sf(a,b){var c=a.type._context;H(of,c._currentValue,a);c._currentValue=b}function tf(a){var b=of.current;G(of,a);a.type._context._currentValue=b}function uf(a){pf=a;rf=qf=null;a.firstContextDependency=null}
function vf(a,b){if(rf!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)rf=a,b=1073741823;b={context:a,observedBits:b,next:null};null===qf?(null===pf?t("277"):void 0,pf.firstContextDependency=qf=b):qf=qf.next=b}return a._currentValue}var wf={},L={current:wf},xf={current:wf},yf={current:wf};function zf(a){a===wf?t("174"):void 0;return a}
function Af(a,b){H(yf,b,a);H(xf,a,a);H(L,wf,a);var c=b.nodeType;switch(c){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:le(null,"");break;default:c=8===c?b.parentNode:b,b=c.namespaceURI||null,c=c.tagName,b=le(b,c)}G(L,a);H(L,b,a)}function Bf(a){G(L,a);G(xf,a);G(yf,a)}function Cf(a){zf(yf.current);var b=zf(L.current);var c=le(b,a.type);b!==c&&(H(xf,a,a),H(L,c,a))}function Df(a){xf.current===a&&(G(L,a),G(xf,a))}var Ef=(new aa.Component).refs;
function Ff(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:n({},b,c);a.memoizedState=c;d=a.updateQueue;null!==d&&0===a.expirationTime&&(d.baseState=c)}
var Jf={isMounted:function(a){return(a=a._reactInternalFiber)?2===jd(a):!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=Gf();d=Hf(d,a);var e=df(d);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);ff(a,e);If(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=Gf();d=Hf(d,a);var e=df(d);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);ff(a,e);If(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=Gf();c=Hf(c,a);var d=df(c);d.tag=2;void 0!==
b&&null!==b&&(d.callback=b);ff(a,d);If(a,c)}};function Kf(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!id(c,d)||!id(e,f):!0}function Lf(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Jf.enqueueReplaceState(b,b.state,null)}
function Mf(a,b,c,d){var e=a.stateNode,f=K(b)?Ge:I.current;e.props=c;e.state=a.memoizedState;e.refs=Ef;e.context=He(a,f);f=a.updateQueue;null!==f&&(kf(a,f,c,e,d),e.state=a.memoizedState);f=b.getDerivedStateFromProps;"function"===typeof f&&(Ff(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,"function"===typeof e.componentWillMount&&
e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Jf.enqueueReplaceState(e,e.state,null),f=a.updateQueue,null!==f&&(kf(a,f,c,e,d),e.state=a.memoizedState));"function"===typeof e.componentDidMount&&(a.effectTag|=4)}var Nf=Array.isArray;
function Of(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;var d=void 0;c&&(2!==c.tag&&3!==c.tag?t("110"):void 0,d=c.stateNode);d?void 0:t("147",a);var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Ef&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}"string"!==typeof a?t("284"):void 0;c._owner?void 0:t("254",a)}return a}
function Pf(a,b){"textarea"!==a.type&&t("31","[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,"")}
function Qf(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b,c){a=Ue(a,b,c);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||8!==b.tag)return b=Xe(c,a.mode,d),b.return=a,b;b=e(b,c,d);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.type===c.type)return d=e(b,c.props,d),d.ref=Of(a,b,c),d.return=a,d;d=Ve(c,a.mode,d);d.ref=Of(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||6!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=
Ye(c,a.mode,d),b.return=a,b;b=e(b,c.children||[],d);b.return=a;return b}function m(a,b,c,d,f){if(null===b||9!==b.tag)return b=We(c,a.mode,d,f),b.return=a,b;b=e(b,c,d);b.return=a;return b}function r(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Xe(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case $b:return c=Ve(b,a.mode,c),c.ref=Of(a,null,b),c.return=a,c;case ac:return b=Ye(b,a.mode,c),b.return=a,b}if(Nf(b)||kc(b))return b=We(b,a.mode,c,null),b.return=
a,b;Pf(a,b)}return null}function A(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case $b:return c.key===e?c.type===bc?m(a,b,c.props.children,d,e):k(a,b,c,d):null;case ac:return c.key===e?l(a,b,c,d):null}if(Nf(c)||kc(c))return null!==e?null:m(a,b,c,d,null);Pf(a,c)}return null}function S(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);
if("object"===typeof d&&null!==d){switch(d.$$typeof){case $b:return a=a.get(null===d.key?c:d.key)||null,d.type===bc?m(b,a,d.props.children,e,d.key):k(b,a,d,e);case ac:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Nf(d)||kc(d))return a=a.get(c)||null,m(b,a,d,e,null);Pf(b,d)}return null}function B(e,g,h,k){for(var l=null,m=null,p=g,u=g=0,q=null;null!==p&&u<h.length;u++){p.index>u?(q=p,p=null):q=p.sibling;var v=A(e,p,h[u],k);if(null===v){null===p&&(p=q);break}a&&p&&null===v.alternate&&b(e,
p);g=f(v,g,u);null===m?l=v:m.sibling=v;m=v;p=q}if(u===h.length)return c(e,p),l;if(null===p){for(;u<h.length;u++)if(p=r(e,h[u],k))g=f(p,g,u),null===m?l=p:m.sibling=p,m=p;return l}for(p=d(e,p);u<h.length;u++)if(q=S(p,e,u,h[u],k))a&&null!==q.alternate&&p.delete(null===q.key?u:q.key),g=f(q,g,u),null===m?l=q:m.sibling=q,m=q;a&&p.forEach(function(a){return b(e,a)});return l}function P(e,g,h,k){var l=kc(h);"function"!==typeof l?t("150"):void 0;h=l.call(h);null==h?t("151"):void 0;for(var m=l=null,p=g,u=g=
0,q=null,v=h.next();null!==p&&!v.done;u++,v=h.next()){p.index>u?(q=p,p=null):q=p.sibling;var x=A(e,p,v.value,k);if(null===x){p||(p=q);break}a&&p&&null===x.alternate&&b(e,p);g=f(x,g,u);null===m?l=x:m.sibling=x;m=x;p=q}if(v.done)return c(e,p),l;if(null===p){for(;!v.done;u++,v=h.next())v=r(e,v.value,k),null!==v&&(g=f(v,g,u),null===m?l=v:m.sibling=v,m=v);return l}for(p=d(e,p);!v.done;u++,v=h.next())v=S(p,e,u,v.value,k),null!==v&&(a&&null!==v.alternate&&p.delete(null===v.key?u:v.key),g=f(v,g,u),null===
m?l=v:m.sibling=v,m=v);a&&p.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===bc&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case $b:a:{l=f.key;for(k=d;null!==k;){if(k.key===l)if(9===k.tag?f.type===bc:k.type===f.type){c(a,k.sibling);d=e(k,f.type===bc?f.props.children:f.props,h);d.ref=Of(a,k,f);d.return=a;a=d;break a}else{c(a,k);break}else b(a,k);k=k.sibling}f.type===bc?(d=We(f.props.children,
a.mode,h,f.key),d.return=a,a=d):(h=Ve(f,a.mode,h),h.ref=Of(a,d,f),h.return=a,a=h)}return g(a);case ac:a:{for(k=f.key;null!==d;){if(d.key===k)if(6===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[],h);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=Ye(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&8===d.tag?(c(a,d.sibling),d=e(d,f,h),d.return=
a,a=d):(c(a,d),d=Xe(f,a.mode,h),d.return=a,a=d),g(a);if(Nf(f))return B(a,d,f,h);if(kc(f))return P(a,d,f,h);l&&Pf(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 2:case 3:case 0:h=a.type,t("152",h.displayName||h.name||"Component")}return c(a,d)}}var Rf=Qf(!0),Sf=Qf(!1),Tf=null,Uf=null,Vf=!1;function Wf(a,b){var c=new Se(7,null,null,0);c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}
function Xf(a,b){switch(a.tag){case 7:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 8:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;default:return!1}}function Yf(a){if(Vf){var b=Uf;if(b){var c=b;if(!Xf(a,b)){b=Be(c);if(!b||!Xf(a,b)){a.effectTag|=2;Vf=!1;Tf=a;return}Wf(Tf,c)}Tf=a;Uf=Ce(b)}else a.effectTag|=2,Vf=!1,Tf=a}}
function Zf(a){for(a=a.return;null!==a&&7!==a.tag&&5!==a.tag;)a=a.return;Tf=a}function $f(a){if(a!==Tf)return!1;if(!Vf)return Zf(a),Vf=!0,!1;var b=a.type;if(7!==a.tag||"head"!==b&&"body"!==b&&!Ae(b,a.memoizedProps))for(b=Uf;b;)Wf(a,b),b=Be(b);Zf(a);Uf=Tf?Be(a.stateNode):null;return!0}function ag(){Uf=Tf=null;Vf=!1}
function bg(a){switch(a._reactStatus){case 1:return a._reactResult;case 2:throw a._reactResult;case 0:throw a;default:throw a._reactStatus=0,a.then(function(b){if(0===a._reactStatus){a._reactStatus=1;if("object"===typeof b&&null!==b){var c=b.default;b=void 0!==c&&null!==c?c:b}a._reactResult=b}},function(b){0===a._reactStatus&&(a._reactStatus=2,a._reactResult=b)}),a;}}var cg=Yb.ReactCurrentOwner;function M(a,b,c,d){b.child=null===a?Sf(b,null,c,d):Rf(b,a.child,c,d)}
function dg(a,b,c,d,e){c=c.render;var f=b.ref;if(!J.current&&b.memoizedProps===d&&f===(null!==a?a.ref:null))return eg(a,b,e);c=c(d,f);M(a,b,c,e);b.memoizedProps=d;return b.child}function fg(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function gg(a,b,c,d,e){var f=K(c)?Ge:I.current;f=He(b,f);uf(b,e);c=c(d,f);b.effectTag|=1;M(a,b,c,e);b.memoizedProps=d;return b.child}
function hg(a,b,c,d,e){if(K(c)){var f=!0;Me(b)}else f=!1;uf(b,e);if(null===a)if(null===b.stateNode){var g=K(c)?Ge:I.current,h=c.contextTypes,k=null!==h&&void 0!==h;h=k?He(b,g):Fe;var l=new c(d,h);b.memoizedState=null!==l.state&&void 0!==l.state?l.state:null;l.updater=Jf;b.stateNode=l;l._reactInternalFiber=b;k&&(k=b.stateNode,k.__reactInternalMemoizedUnmaskedChildContext=g,k.__reactInternalMemoizedMaskedChildContext=h);Mf(b,c,d,e);d=!0}else{g=b.stateNode;h=b.memoizedProps;g.props=h;var m=g.context;
k=K(c)?Ge:I.current;k=He(b,k);var r=c.getDerivedStateFromProps;(l="function"===typeof r||"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||m!==k)&&Lf(b,g,d,k);af=!1;var A=b.memoizedState;m=g.state=A;var S=b.updateQueue;null!==S&&(kf(b,S,d,g,e),m=b.memoizedState);h!==d||A!==m||J.current||af?("function"===typeof r&&(Ff(b,c,r,d),m=b.memoizedState),(h=af||Kf(b,c,h,d,A,m,k))?(l||"function"!==
typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=m),g.props=d,g.state=m,g.context=k,d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1)}else g=b.stateNode,h=
b.memoizedProps,g.props=h,m=g.context,k=K(c)?Ge:I.current,k=He(b,k),r=c.getDerivedStateFromProps,(l="function"===typeof r||"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||m!==k)&&Lf(b,g,d,k),af=!1,m=b.memoizedState,A=g.state=m,S=b.updateQueue,null!==S&&(kf(b,S,d,g,e),A=b.memoizedState),h!==d||m!==A||J.current||af?("function"===typeof r&&(Ff(b,c,r,d),A=b.memoizedState),(r=af||Kf(b,c,h,d,
m,A,k))?(l||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,A,k),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,A,k)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&m===a.memoizedState||(b.effectTag|=4),"function"!==
typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&m===a.memoizedState||(b.effectTag|=256),b.memoizedProps=d,b.memoizedState=A),g.props=d,g.state=A,g.context=k,d=r):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&m===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&m===a.memoizedState||(b.effectTag|=256),d=!1);return ig(a,b,c,d,f,e)}
function ig(a,b,c,d,e,f){fg(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&Ne(b,c,!1),eg(a,b,f);d=b.stateNode;cg.current=b;var h=g?null:d.render();b.effectTag|=1;null!==a&&g&&(M(a,b,null,f),b.child=null);M(a,b,h,f);b.memoizedState=d.state;b.memoizedProps=d.props;e&&Ne(b,c,!0);return b.child}function jg(a){var b=a.stateNode;b.pendingContext?Ke(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Ke(a,b.context,!1);Af(a,b.containerInfo)}
function ng(a,b){if(a&&a.defaultProps){b=n({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}
function og(a,b,c,d){null!==a?t("155"):void 0;var e=b.pendingProps;if("object"===typeof c&&null!==c&&"function"===typeof c.then){c=bg(c);var f=c;f="function"===typeof f?Te(f)?3:1:void 0!==f&&null!==f&&f.$$typeof?14:4;f=b.tag=f;var g=ng(c,e);switch(f){case 1:return gg(a,b,c,g,d);case 3:return hg(a,b,c,g,d);case 14:return dg(a,b,c,g,d);default:t("283",c)}}f=He(b,I.current);uf(b,d);f=c(e,f);b.effectTag|=1;if("object"===typeof f&&null!==f&&"function"===typeof f.render&&void 0===f.$$typeof){b.tag=2;K(c)?
(g=!0,Me(b)):g=!1;b.memoizedState=null!==f.state&&void 0!==f.state?f.state:null;var h=c.getDerivedStateFromProps;"function"===typeof h&&Ff(b,c,h,e);f.updater=Jf;b.stateNode=f;f._reactInternalFiber=b;Mf(b,c,e,d);return ig(a,b,c,!0,g,d)}b.tag=0;M(a,b,f,d);b.memoizedProps=e;return b.child}
function eg(a,b,c){null!==a&&(b.firstContextDependency=a.firstContextDependency);var d=b.childExpirationTime;if(0===d||d>c)return null;null!==a&&b.child!==a.child?t("153"):void 0;if(null!==b.child){a=b.child;c=Ue(a,a.pendingProps,a.expirationTime);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Ue(a,a.pendingProps,a.expirationTime),c.return=b;c.sibling=null}return b.child}
function pg(a,b,c){var d=b.expirationTime;if(!J.current&&(0===d||d>c)){switch(b.tag){case 5:jg(b);ag();break;case 7:Cf(b);break;case 2:K(b.type)&&Me(b);break;case 3:K(b.type._reactResult)&&Me(b);break;case 6:Af(b,b.stateNode.containerInfo);break;case 12:sf(b,b.memoizedProps.value)}return eg(a,b,c)}b.expirationTime=0;switch(b.tag){case 4:return og(a,b,b.type,c);case 0:return gg(a,b,b.type,b.pendingProps,c);case 1:var e=b.type._reactResult;d=b.pendingProps;a=gg(a,b,e,ng(e,d),c);b.memoizedProps=d;return a;
case 2:return hg(a,b,b.type,b.pendingProps,c);case 3:return e=b.type._reactResult,d=b.pendingProps,a=hg(a,b,e,ng(e,d),c),b.memoizedProps=d,a;case 5:jg(b);d=b.updateQueue;null===d?t("282"):void 0;e=b.memoizedState;e=null!==e?e.element:null;kf(b,d,b.pendingProps,null,c);d=b.memoizedState.element;if(d===e)ag(),b=eg(a,b,c);else{e=b.stateNode;if(e=(null===a||null===a.child)&&e.hydrate)Uf=Ce(b.stateNode.containerInfo),Tf=b,e=Vf=!0;e?(b.effectTag|=2,b.child=Sf(b,null,d,c)):(M(a,b,d,c),ag());b=b.child}return b;
case 7:Cf(b);null===a&&Yf(b);d=b.type;e=b.pendingProps;var f=null!==a?a.memoizedProps:null,g=e.children;Ae(d,e)?g=null:null!==f&&Ae(d,f)&&(b.effectTag|=16);fg(a,b);1073741823!==c&&b.mode&1&&e.hidden?(b.expirationTime=1073741823,b.memoizedProps=e,b=null):(M(a,b,g,c),b.memoizedProps=e,b=b.child);return b;case 8:return null===a&&Yf(b),b.memoizedProps=b.pendingProps,null;case 16:return null;case 6:return Af(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Rf(b,null,d,c):M(a,b,d,c),b.memoizedProps=
d,b.child;case 13:return dg(a,b,b.type,b.pendingProps,c);case 14:return e=b.type._reactResult,d=b.pendingProps,a=dg(a,b,e,ng(e,d),c),b.memoizedProps=d,a;case 9:return d=b.pendingProps,M(a,b,d,c),b.memoizedProps=d,b.child;case 10:return d=b.pendingProps.children,M(a,b,d,c),b.memoizedProps=d,b.child;case 15:return d=b.pendingProps,M(a,b,d.children,c),b.memoizedProps=d,b.child;case 12:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;b.memoizedProps=e;sf(b,f);if(null!==g){var h=g.value;
f=h===f&&(0!==h||1/h===1/f)||h!==h&&f!==f?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0;if(0===f){if(g.children===e.children&&!J.current){b=eg(a,b,c);break a}}else for(g=b.child,null!==g&&(g.return=b);null!==g;){h=g.firstContextDependency;if(null!==h){do{if(h.context===d&&0!==(h.observedBits&f)){if(2===g.tag||3===g.tag){var k=df(c);k.tag=2;ff(g,k)}if(0===g.expirationTime||g.expirationTime>c)g.expirationTime=c;k=g.alternate;null!==k&&(0===k.expirationTime||
k.expirationTime>c)&&(k.expirationTime=c);for(var l=g.return;null!==l;){k=l.alternate;if(0===l.childExpirationTime||l.childExpirationTime>c)l.childExpirationTime=c,null!==k&&(0===k.childExpirationTime||k.childExpirationTime>c)&&(k.childExpirationTime=c);else if(null!==k&&(0===k.childExpirationTime||k.childExpirationTime>c))k.childExpirationTime=c;else break;l=l.return}}k=g.child;h=h.next}while(null!==h)}else k=12===g.tag?g.type===b.type?null:g.child:g.child;if(null!==k)k.return=g;else for(k=g;null!==
k;){if(k===b){k=null;break}g=k.sibling;if(null!==g){g.return=k.return;k=g;break}k=k.return}g=k}}M(a,b,e.children,c);b=b.child}return b;case 11:return f=b.type,d=b.pendingProps,e=d.children,uf(b,c),f=vf(f,d.unstable_observedBits),e=e(f),b.effectTag|=1,M(a,b,e,c),b.memoizedProps=d,b.child;default:t("156")}}function qg(a){a.effectTag|=4}var rg=void 0,sg=void 0,tg=void 0;rg=function(){};
sg=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;zf(L.current);a=null;switch(c){case "input":f=zc(g,f);d=zc(g,d);a=[];break;case "option":f=de(g,f);d=de(g,d);a=[];break;case "select":f=n({},f,{value:void 0});d=n({},d,{value:void 0});a=[];break;case "textarea":f=fe(g,f);d=fe(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=we)}te(c,d);g=c=void 0;var h=null;for(c in f)if(!d.hasOwnProperty(c)&&f.hasOwnProperty(c)&&null!=f[c])if("style"===
c){var k=f[c];for(g in k)k.hasOwnProperty(g)&&(h||(h={}),h[g]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(sa.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in d){var l=d[c];k=null!=f?f[c]:void 0;if(d.hasOwnProperty(c)&&l!==k&&(null!=l||null!=k))if("style"===c)if(k){for(g in k)!k.hasOwnProperty(g)||l&&l.hasOwnProperty(g)||(h||(h={}),h[g]="");for(g in l)l.hasOwnProperty(g)&&k[g]!==l[g]&&(h||
(h={}),h[g]=l[g])}else h||(a||(a=[]),a.push(c,h)),h=l;else"dangerouslySetInnerHTML"===c?(l=l?l.__html:void 0,k=k?k.__html:void 0,null!=l&&k!==l&&(a=a||[]).push(c,""+l)):"children"===c?k===l||"string"!==typeof l&&"number"!==typeof l||(a=a||[]).push(c,""+l):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(sa.hasOwnProperty(c)?(null!=l&&ve(e,c),a||k===l||(a=[])):(a=a||[]).push(c,l))}h&&(a=a||[]).push("style",h);e=a;(b.updateQueue=e)&&qg(b)}};tg=function(a,b,c,d){c!==d&&qg(b)};
function ug(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=mc(c));null!==c&&lc(c.type);b=b.value;null!==a&&2===a.tag&&lc(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function vg(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){wg(a,c)}else b.current=null}
function xg(a){"function"===typeof Pe&&Pe(a);switch(a.tag){case 2:case 3:vg(a);var b=a.stateNode;if("function"===typeof b.componentWillUnmount)try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(c){wg(a,c)}break;case 7:vg(a);break;case 6:yg(a)}}function zg(a){return 7===a.tag||5===a.tag||6===a.tag}
function Ag(a){a:{for(var b=a.return;null!==b;){if(zg(b)){var c=b;break a}b=b.return}t("160");c=void 0}var d=b=void 0;switch(c.tag){case 7:b=c.stateNode;d=!1;break;case 5:b=c.stateNode.containerInfo;d=!0;break;case 6:b=c.stateNode.containerInfo;d=!0;break;default:t("161")}c.effectTag&16&&(oe(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||zg(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;7!==c.tag&&8!==c.tag;){if(c.effectTag&2)continue b;
if(null===c.child||6===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}for(var e=a;;){if(7===e.tag||8===e.tag)if(c)if(d){var f=b,g=e.stateNode,h=c;8===f.nodeType?f.parentNode.insertBefore(g,h):f.insertBefore(g,h)}else b.insertBefore(e.stateNode,c);else d?(f=b,g=e.stateNode,8===f.nodeType?(h=f.parentNode,h.insertBefore(g,f)):(h=f,h.appendChild(g)),null===h.onclick&&(h.onclick=we)):b.appendChild(e.stateNode);else if(6!==e.tag&&null!==e.child){e.child.return=
e;e=e.child;continue}if(e===a)break;for(;null===e.sibling;){if(null===e.return||e.return===a)return;e=e.return}e.sibling.return=e.return;e=e.sibling}}
function yg(a){for(var b=a,c=!1,d=void 0,e=void 0;;){if(!c){c=b.return;a:for(;;){null===c?t("160"):void 0;switch(c.tag){case 7:d=c.stateNode;e=!1;break a;case 5:d=c.stateNode.containerInfo;e=!0;break a;case 6:d=c.stateNode.containerInfo;e=!0;break a}c=c.return}c=!0}if(7===b.tag||8===b.tag){a:for(var f=b,g=f;;)if(xg(g),null!==g.child&&6!==g.tag)g.child.return=g,g=g.child;else{if(g===f)break;for(;null===g.sibling;){if(null===g.return||g.return===f)break a;g=g.return}g.sibling.return=g.return;g=g.sibling}e?
(f=d,g=b.stateNode,8===f.nodeType?f.parentNode.removeChild(g):f.removeChild(g)):d.removeChild(b.stateNode)}else if(6===b.tag?(d=b.stateNode.containerInfo,e=!0):xg(b),null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return;b=b.return;6===b.tag&&(c=!1)}b.sibling.return=b.return;b=b.sibling}}
function Bg(a,b){switch(b.tag){case 2:case 3:break;case 7:var c=b.stateNode;if(null!=c){var d=b.memoizedProps,e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[Ja]=d;"input"===a&&"radio"===d.type&&null!=d.name&&Cc(c,d);ue(a,e);b=ue(a,d);for(e=0;e<f.length;e+=2){var g=f[e],h=f[e+1];"style"===g?re(c,h):"dangerouslySetInnerHTML"===g?ne(c,h):"children"===g?oe(c,h):xc(c,g,h,b)}switch(a){case "input":Dc(c,d);break;case "textarea":he(c,d);break;case "select":a=c._wrapperState.wasMultiple,
c._wrapperState.wasMultiple=!!d.multiple,f=d.value,null!=f?ee(c,!!d.multiple,f,!1):a!==!!d.multiple&&(null!=d.defaultValue?ee(c,!!d.multiple,d.defaultValue,!0):ee(c,!!d.multiple,d.multiple?[]:"",!1))}}}break;case 8:null===b.stateNode?t("162"):void 0;b.stateNode.nodeValue=b.memoizedProps;break;case 5:break;case 15:break;case 16:break;default:t("163")}}function Cg(a,b,c){c=df(c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Dg(d);ug(a,b)};return c}
function Eg(a,b,c){c=df(c);c.tag=3;var d=a.stateNode;null!==d&&"function"===typeof d.componentDidCatch&&(c.callback=function(){null===Fg?Fg=new Set([this]):Fg.add(this);var c=b.value,d=b.stack;ug(a,b);this.componentDidCatch(c,{componentStack:null!==d?d:""})});return c}
function Gg(a){switch(a.tag){case 2:K(a.type)&&Ie(a);var b=a.effectTag;return b&1024?(a.effectTag=b&-1025|64,a):null;case 3:return K(a.type._reactResult)&&Ie(a),b=a.effectTag,b&1024?(a.effectTag=b&-1025|64,a):null;case 5:return Bf(a),Je(a),b=a.effectTag,0!==(b&64)?t("285"):void 0,a.effectTag=b&-1025|64,a;case 7:return Df(a),null;case 16:return b=a.effectTag,b&1024?(a.effectTag=b&-1025|64,a):null;case 6:return Bf(a),null;case 12:return tf(a),null;default:return null}}
var Hg={readContext:vf},Ig=Yb.ReactCurrentOwner,Jg=0,Kg=0,Lg=!1,N=null,Mg=null,O=0,Ng=!1,Q=null,Og=!1,Fg=null;function Pg(){if(null!==N)for(var a=N.return;null!==a;){var b=a;switch(b.tag){case 2:var c=b.type.childContextTypes;null!==c&&void 0!==c&&Ie(b);break;case 3:c=b.type._reactResult.childContextTypes;null!==c&&void 0!==c&&Ie(b);break;case 5:Bf(b);Je(b);break;case 7:Df(b);break;case 6:Bf(b);break;case 12:tf(b)}a=a.return}Mg=null;O=0;Ng=!1;N=null}
function Qg(a){for(;;){var b=a.alternate,c=a.return,d=a.sibling;if(0===(a.effectTag&512)){var e=b;b=a;var f=b.pendingProps;switch(b.tag){case 0:case 1:break;case 2:K(b.type)&&Ie(b);break;case 3:K(b.type._reactResult)&&Ie(b);break;case 5:Bf(b);Je(b);f=b.stateNode;f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null);if(null===e||null===e.child)$f(b),b.effectTag&=-3;rg(b);break;case 7:Df(b);var g=zf(yf.current),h=b.type;if(null!==e&&null!=b.stateNode)sg(e,b,h,f,g),e.ref!==b.ref&&(b.effectTag|=
128);else if(f){var k=zf(L.current);if($f(b)){f=b;e=f.stateNode;var l=f.type,m=f.memoizedProps,r=g;e[Ia]=f;e[Ja]=m;h=void 0;g=l;switch(g){case "iframe":case "object":F("load",e);break;case "video":case "audio":for(l=0;l<fb.length;l++)F(fb[l],e);break;case "source":F("error",e);break;case "img":case "image":case "link":F("error",e);F("load",e);break;case "form":F("reset",e);F("submit",e);break;case "details":F("toggle",e);break;case "input":Bc(e,m);F("invalid",e);ve(r,"onChange");break;case "select":e._wrapperState=
{wasMultiple:!!m.multiple};F("invalid",e);ve(r,"onChange");break;case "textarea":ge(e,m),F("invalid",e),ve(r,"onChange")}te(g,m);l=null;for(h in m)m.hasOwnProperty(h)&&(k=m[h],"children"===h?"string"===typeof k?e.textContent!==k&&(l=["children",k]):"number"===typeof k&&e.textContent!==""+k&&(l=["children",""+k]):sa.hasOwnProperty(h)&&null!=k&&ve(r,h));switch(g){case "input":Wb(e);Fc(e,m,!0);break;case "textarea":Wb(e);ie(e,m);break;case "select":case "option":break;default:"function"===typeof m.onClick&&
(e.onclick=we)}h=l;f.updateQueue=h;f=null!==h?!0:!1;f&&qg(b)}else{m=b;e=h;r=f;l=9===g.nodeType?g:g.ownerDocument;k===je.html&&(k=ke(e));k===je.html?"script"===e?(e=l.createElement("div"),e.innerHTML="<script>\x3c/script>",l=e.removeChild(e.firstChild)):"string"===typeof r.is?l=l.createElement(e,{is:r.is}):(l=l.createElement(e),"select"===e&&r.multiple&&(l.multiple=!0)):l=l.createElementNS(k,e);e=l;e[Ia]=m;e[Ja]=f;a:for(m=e,r=b,l=r.child;null!==l;){if(7===l.tag||8===l.tag)m.appendChild(l.stateNode);
else if(6!==l.tag&&null!==l.child){l.child.return=l;l=l.child;continue}if(l===r)break;for(;null===l.sibling;){if(null===l.return||l.return===r)break a;l=l.return}l.sibling.return=l.return;l=l.sibling}r=e;l=h;m=f;var A=g,S=ue(l,m);switch(l){case "iframe":case "object":F("load",r);g=m;break;case "video":case "audio":for(g=0;g<fb.length;g++)F(fb[g],r);g=m;break;case "source":F("error",r);g=m;break;case "img":case "image":case "link":F("error",r);F("load",r);g=m;break;case "form":F("reset",r);F("submit",
r);g=m;break;case "details":F("toggle",r);g=m;break;case "input":Bc(r,m);g=zc(r,m);F("invalid",r);ve(A,"onChange");break;case "option":g=de(r,m);break;case "select":r._wrapperState={wasMultiple:!!m.multiple};g=n({},m,{value:void 0});F("invalid",r);ve(A,"onChange");break;case "textarea":ge(r,m);g=fe(r,m);F("invalid",r);ve(A,"onChange");break;default:g=m}te(l,g);k=void 0;var B=l,P=r,v=g;for(k in v)if(v.hasOwnProperty(k)){var p=v[k];"style"===k?re(P,p):"dangerouslySetInnerHTML"===k?(p=p?p.__html:void 0,
null!=p&&ne(P,p)):"children"===k?"string"===typeof p?("textarea"!==B||""!==p)&&oe(P,p):"number"===typeof p&&oe(P,""+p):"suppressContentEditableWarning"!==k&&"suppressHydrationWarning"!==k&&"autoFocus"!==k&&(sa.hasOwnProperty(k)?null!=p&&ve(A,k):null!=p&&xc(P,k,p,S))}switch(l){case "input":Wb(r);Fc(r,m,!1);break;case "textarea":Wb(r);ie(r,m);break;case "option":null!=m.value&&r.setAttribute("value",""+yc(m.value));break;case "select":g=r;g.multiple=!!m.multiple;r=m.value;null!=r?ee(g,!!m.multiple,
r,!1):null!=m.defaultValue&&ee(g,!!m.multiple,m.defaultValue,!0);break;default:"function"===typeof g.onClick&&(r.onclick=we)}(f=ze(h,f))&&qg(b);b.stateNode=e}null!==b.ref&&(b.effectTag|=128)}else null===b.stateNode?t("166"):void 0;break;case 8:e&&null!=b.stateNode?tg(e,b,e.memoizedProps,f):("string"!==typeof f&&(null===b.stateNode?t("166"):void 0),e=zf(yf.current),zf(L.current),$f(b)?(f=b,h=f.stateNode,e=f.memoizedProps,h[Ia]=f,(f=h.nodeValue!==e)&&qg(b)):(h=b,f=(9===e.nodeType?e:e.ownerDocument).createTextNode(f),
f[Ia]=h,b.stateNode=f));break;case 13:case 14:break;case 16:break;case 9:break;case 10:break;case 15:break;case 6:Bf(b);rg(b);break;case 12:tf(b);break;case 11:break;case 4:t("167");default:t("156")}b=N=null;f=a;if(1073741823===O||1073741823!==f.childExpirationTime){h=0;for(e=f.child;null!==e;){g=e.expirationTime;m=e.childExpirationTime;if(0===h||0!==g&&g<h)h=g;if(0===h||0!==m&&m<h)h=m;e=e.sibling}f.childExpirationTime=h}if(null!==b)return b;null!==c&&0===(c.effectTag&512)&&(null===c.firstEffect&&
(c.firstEffect=a.firstEffect),null!==a.lastEffect&&(null!==c.lastEffect&&(c.lastEffect.nextEffect=a.firstEffect),c.lastEffect=a.lastEffect),1<a.effectTag&&(null!==c.lastEffect?c.lastEffect.nextEffect=a:c.firstEffect=a,c.lastEffect=a))}else{a=Gg(a,O);if(null!==a)return a.effectTag&=511,a;null!==c&&(c.firstEffect=c.lastEffect=null,c.effectTag|=512)}if(null!==d)return d;if(null!==c)a=c;else break}return null}function Rg(a){var b=pg(a.alternate,a,O);null===b&&(b=Qg(a));Ig.current=null;return b}
function Sg(a,b,c){Lg?t("243"):void 0;Lg=!0;Ig.currentDispatcher=Hg;var d=a.nextExpirationTimeToWorkOn;if(d!==O||a!==Mg||null===N)Pg(),Mg=a,O=d,N=Ue(Mg.current,null,O),a.pendingCommitExpirationTime=0;var e=!1;do{try{if(b)for(;null!==N&&!Tg();)N=Rg(N);else for(;null!==N;)N=Rg(N)}catch(r){if(null===N)e=!0,Dg(r);else{null===N?t("271"):void 0;var f=N,g=f.return;if(null===g)e=!0,Dg(r);else{a:{var h=g,k=f,l=r;g=O;k.effectTag|=512;k.firstEffect=k.lastEffect=null;Ng=!0;l=nf(l,k);do{switch(h.tag){case 5:h.effectTag|=
1024;h.expirationTime=g;g=Cg(h,l,g);gf(h,g);break a;case 2:case 3:k=l;var m=h.stateNode;if(0===(h.effectTag&64)&&null!==m&&"function"===typeof m.componentDidCatch&&(null===Fg||!Fg.has(m))){h.effectTag|=1024;h.expirationTime=g;g=Eg(h,k,g);gf(h,g);break a}}h=h.return}while(null!==h)}N=Qg(f);continue}}}break}while(1);Lg=!1;rf=qf=pf=Ig.currentDispatcher=null;if(e)Mg=null,a.finishedWork=null;else if(null!==N)a.finishedWork=null;else{b=a.current.alternate;null===b?t("281"):void 0;Mg=null;if(Ng){e=a.latestPendingTime;
f=a.latestSuspendedTime;g=a.latestPingedTime;if(0!==e&&e>d||0!==f&&f>d||0!==g&&g>d){a.didError=!1;c=a.latestPingedTime;0!==c&&c<=d&&(a.latestPingedTime=0);c=a.earliestPendingTime;b=a.latestPendingTime;c===d?a.earliestPendingTime=b===d?a.latestPendingTime=0:b:b===d&&(a.latestPendingTime=c);c=a.earliestSuspendedTime;b=a.latestSuspendedTime;0===c?a.earliestSuspendedTime=a.latestSuspendedTime=d:c>d?a.earliestSuspendedTime=d:b<d&&(a.latestSuspendedTime=d);$e(d,a);a.expirationTime=a.expirationTime;return}if(!a.didError&&
!c){a.didError=!0;a.nextExpirationTimeToWorkOn=d;d=a.expirationTime=1;a.expirationTime=d;return}}a.pendingCommitExpirationTime=d;a.finishedWork=b}}
function wg(a,b){var c;a:{Lg&&!Og?t("263"):void 0;for(c=a.return;null!==c;){switch(c.tag){case 2:case 3:var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromCatch||"function"===typeof d.componentDidCatch&&(null===Fg||!Fg.has(d))){a=nf(b,a);a=Eg(c,a,1);ff(c,a);If(c,1);c=void 0;break a}break;case 5:a=nf(b,a);a=Cg(c,a,1);ff(c,a);If(c,1);c=void 0;break a}c=c.return}5===a.tag&&(c=nf(b,a),c=Cg(a,c,1),ff(a,c),If(a,1));c=void 0}return c}
function Hf(a,b){0!==Kg?a=Kg:Lg?a=Og?1:O:b.mode&1?(a=Ug?2+10*(((a-2+15)/10|0)+1):2+25*(((a-2+500)/25|0)+1),null!==Mg&&a===O&&(a+=1)):a=1;Ug&&(0===Vg||a>Vg)&&(Vg=a);return a}
function If(a,b){a:{if(0===a.expirationTime||a.expirationTime>b)a.expirationTime=b;var c=a.alternate;null!==c&&(0===c.expirationTime||c.expirationTime>b)&&(c.expirationTime=b);var d=a.return;if(null===d&&5===a.tag)a=a.stateNode;else{for(;null!==d;){c=d.alternate;if(0===d.childExpirationTime||d.childExpirationTime>b)d.childExpirationTime=b;null!==c&&(0===c.childExpirationTime||c.childExpirationTime>b)&&(c.childExpirationTime=b);if(null===d.return&&5===d.tag){a=d.stateNode;break a}d=d.return}a=null}}if(null!==
a){!Lg&&0!==O&&b<O&&Pg();Ze(a,b);if(!Lg||Og||Mg!==a){b=a;a=a.expirationTime;if(null===b.nextScheduledRoot)b.expirationTime=a,null===T?(U=T=b,b.nextScheduledRoot=b):(T=T.nextScheduledRoot=b,T.nextScheduledRoot=U);else if(c=b.expirationTime,0===c||a<c)b.expirationTime=a;V||(W?Wg&&(Y=b,Z=1,Xg(b,1,!0)):1===a?Yg(1,null):Zg(b,a))}$g>ah&&($g=0,t("185"))}}function bh(a,b,c,d,e){var f=Kg;Kg=1;try{return a(b,c,d,e)}finally{Kg=f}}
var U=null,T=null,ch=0,dh=void 0,V=!1,Y=null,Z=0,Vg=0,eh=!1,fh=!1,gh=null,hh=null,W=!1,Wg=!1,Ug=!1,ih=null,jh=ba.unstable_now(),kh=(jh/10|0)+2,lh=kh,ah=50,$g=0,mh=null,nh=1;function oh(){kh=((ba.unstable_now()-jh)/10|0)+2}function Zg(a,b){if(0!==ch){if(b>ch)return;null!==dh&&ba.unstable_cancelScheduledWork(dh)}ch=b;a=ba.unstable_now()-jh;dh=ba.unstable_scheduleWork(ph,{timeout:10*(b-2)-a})}function Gf(){if(V)return lh;qh();if(0===Z||1073741823===Z)oh(),lh=kh;return lh}
function qh(){var a=0,b=null;if(null!==T)for(var c=T,d=U;null!==d;){var e=d.expirationTime;if(0===e){null===c||null===T?t("244"):void 0;if(d===d.nextScheduledRoot){U=T=d.nextScheduledRoot=null;break}else if(d===U)U=e=d.nextScheduledRoot,T.nextScheduledRoot=e,d.nextScheduledRoot=null;else if(d===T){T=c;T.nextScheduledRoot=U;d.nextScheduledRoot=null;break}else c.nextScheduledRoot=d.nextScheduledRoot,d.nextScheduledRoot=null;d=c.nextScheduledRoot}else{if(0===a||e<a)a=e,b=d;if(d===T)break;if(1===a)break;
c=d;d=d.nextScheduledRoot}}Y=b;Z=a}function ph(a){if(a.didTimeout&&null!==U){oh();var b=U;do{var c=b.expirationTime;0!==c&&kh>=c&&(b.nextExpirationTimeToWorkOn=kh);b=b.nextScheduledRoot}while(b!==U)}Yg(0,a)}
function Yg(a,b){hh=b;qh();if(null!==hh)for(oh(),lh=kh;null!==Y&&0!==Z&&(0===a||a>=Z)&&(!eh||kh>=Z);)Xg(Y,Z,kh>=Z),qh(),oh(),lh=kh;else for(;null!==Y&&0!==Z&&(0===a||a>=Z);)Xg(Y,Z,!0),qh();null!==hh&&(ch=0,dh=null);0!==Z&&Zg(Y,Z);hh=null;eh=!1;$g=0;mh=null;if(null!==ih)for(a=ih,ih=null,b=0;b<a.length;b++){var c=a[b];try{c._onComplete()}catch(d){fh||(fh=!0,gh=d)}}if(fh)throw a=gh,gh=null,fh=!1,a;}
function Xg(a,b,c){V?t("245"):void 0;V=!0;if(null===hh||c){var d=a.finishedWork;null!==d?rh(a,d,b):(a.finishedWork=null,Sg(a,!1,c),d=a.finishedWork,null!==d&&rh(a,d,b))}else d=a.finishedWork,null!==d?rh(a,d,b):(a.finishedWork=null,Sg(a,!0,c),d=a.finishedWork,null!==d&&(Tg()?a.finishedWork=d:rh(a,d,b)));V=!1}
function rh(a,b,c){var d=a.firstBatch;if(null!==d&&d._expirationTime<=c&&(null===ih?ih=[d]:ih.push(d),d._defer)){a.finishedWork=b;a.expirationTime=0;return}a.finishedWork=null;a===mh?$g++:(mh=a,$g=0);Og=Lg=!0;a.current===b?t("177"):void 0;c=a.pendingCommitExpirationTime;0===c?t("261"):void 0;a.pendingCommitExpirationTime=0;d=b.expirationTime;var e=b.childExpirationTime;d=0===d||0!==e&&e<d?e:d;a.didError=!1;0===d?(a.earliestPendingTime=0,a.latestPendingTime=0,a.earliestSuspendedTime=0,a.latestSuspendedTime=
0,a.latestPingedTime=0):(e=a.latestPendingTime,0!==e&&(e<d?a.earliestPendingTime=a.latestPendingTime=0:a.earliestPendingTime<d&&(a.earliestPendingTime=a.latestPendingTime)),e=a.earliestSuspendedTime,0===e?Ze(a,d):d>a.latestSuspendedTime?(a.earliestSuspendedTime=0,a.latestSuspendedTime=0,a.latestPingedTime=0,Ze(a,d)):d<e&&Ze(a,d));$e(0,a);Ig.current=null;1<b.effectTag?null!==b.lastEffect?(b.lastEffect.nextEffect=b,d=b.firstEffect):d=b:d=b.firstEffect;xe=Gd;e=Td();if(Ud(e)){if("selectionStart"in e)var f=
{start:e.selectionStart,end:e.selectionEnd};else a:{f=(f=e.ownerDocument)&&f.defaultView||window;var g=f.getSelection&&f.getSelection();if(g&&0!==g.rangeCount){f=g.anchorNode;var h=g.anchorOffset,k=g.focusNode;g=g.focusOffset;try{f.nodeType,k.nodeType}catch(Xa){f=null;break a}var l=0,m=-1,r=-1,A=0,S=0,B=e,P=null;b:for(;;){for(var v;;){B!==f||0!==h&&3!==B.nodeType||(m=l+h);B!==k||0!==g&&3!==B.nodeType||(r=l+g);3===B.nodeType&&(l+=B.nodeValue.length);if(null===(v=B.firstChild))break;P=B;B=v}for(;;){if(B===
e)break b;P===f&&++A===h&&(m=l);P===k&&++S===g&&(r=l);if(null!==(v=B.nextSibling))break;B=P;P=B.parentNode}B=v}f=-1===m||-1===r?null:{start:m,end:r}}else f=null}f=f||{start:0,end:0}}else f=null;ye={focusedElem:e,selectionRange:f};Gd=!1;for(Q=d;null!==Q;){e=!1;f=void 0;try{for(;null!==Q;){if(Q.effectTag&256){var p=Q.alternate;a:switch(h=Q,h.tag){case 2:case 3:if(h.effectTag&256&&null!==p){var u=p.memoizedProps,x=p.memoizedState,R=h.stateNode;R.props=h.memoizedProps;R.state=h.memoizedState;var yh=R.getSnapshotBeforeUpdate(u,
x);R.__reactInternalSnapshotBeforeUpdate=yh}break a;case 5:case 7:case 8:case 6:break a;default:t("163")}}Q=Q.nextEffect}}catch(Xa){e=!0,f=Xa}e&&(null===Q?t("178"):void 0,wg(Q,f),null!==Q&&(Q=Q.nextEffect))}for(Q=d;null!==Q;){p=!1;u=void 0;try{for(;null!==Q;){var w=Q.effectTag;w&16&&oe(Q.stateNode,"");if(w&128){var y=Q.alternate;if(null!==y){var q=y.ref;null!==q&&("function"===typeof q?q(null):q.current=null)}}switch(w&14){case 2:Ag(Q);Q.effectTag&=-3;break;case 6:Ag(Q);Q.effectTag&=-3;Bg(Q.alternate,
Q);break;case 4:Bg(Q.alternate,Q);break;case 8:x=Q,yg(x),x.return=null,x.child=null,x.alternate&&(x.alternate.child=null,x.alternate.return=null)}Q=Q.nextEffect}}catch(Xa){p=!0,u=Xa}p&&(null===Q?t("178"):void 0,wg(Q,u),null!==Q&&(Q=Q.nextEffect))}q=ye;y=Td();w=q.focusedElem;u=q.selectionRange;if(y!==w&&w&&w.ownerDocument&&Sd(w.ownerDocument.documentElement,w)){null!==u&&Ud(w)&&(y=u.start,q=u.end,void 0===q&&(q=y),"selectionStart"in w?(w.selectionStart=y,w.selectionEnd=Math.min(q,w.value.length)):
(p=w.ownerDocument||document,y=(p&&p.defaultView||window).getSelection(),x=w.textContent.length,q=Math.min(u.start,x),u=void 0===u.end?q:Math.min(u.end,x),!y.extend&&q>u&&(x=u,u=q,q=x),x=Rd(w,q),R=Rd(w,u),x&&R&&(1!==y.rangeCount||y.anchorNode!==x.node||y.anchorOffset!==x.offset||y.focusNode!==R.node||y.focusOffset!==R.offset)&&(p=p.createRange(),p.setStart(x.node,x.offset),y.removeAllRanges(),q>u?(y.addRange(p),y.extend(R.node,R.offset)):(p.setEnd(R.node,R.offset),y.addRange(p)))));y=[];for(q=w;q=
q.parentNode;)1===q.nodeType&&y.push({element:q,left:q.scrollLeft,top:q.scrollTop});"function"===typeof w.focus&&w.focus();for(w=0;w<y.length;w++)q=y[w],q.element.scrollLeft=q.left,q.element.scrollTop=q.top}ye=null;Gd=!!xe;xe=null;a.current=b;for(Q=d;null!==Q;){d=!1;w=void 0;try{for(y=c;null!==Q;){var Sa=Q.effectTag;if(Sa&36){var oc=Q.alternate;q=Q;p=y;switch(q.tag){case 2:case 3:var X=q.stateNode;if(q.effectTag&4)if(null===oc)X.props=q.memoizedProps,X.state=q.memoizedState,X.componentDidMount();
else{var Ih=oc.memoizedProps,Jh=oc.memoizedState;X.props=q.memoizedProps;X.state=q.memoizedState;X.componentDidUpdate(Ih,Jh,X.__reactInternalSnapshotBeforeUpdate)}var kg=q.updateQueue;null!==kg&&(X.props=q.memoizedProps,X.state=q.memoizedState,lf(q,kg,X,p));break;case 5:var lg=q.updateQueue;if(null!==lg){u=null;if(null!==q.child)switch(q.child.tag){case 7:u=q.child.stateNode;break;case 2:case 3:u=q.child.stateNode}lf(q,lg,u,p)}break;case 7:var Kh=q.stateNode;null===oc&&q.effectTag&4&&ze(q.type,q.memoizedProps)&&
Kh.focus();break;case 8:break;case 6:break;case 15:break;case 16:break;default:t("163")}}if(Sa&128){var Ac=Q.ref;if(null!==Ac){var mg=Q.stateNode;switch(Q.tag){case 7:var Pd=mg;break;default:Pd=mg}"function"===typeof Ac?Ac(Pd):Ac.current=Pd}}var Lh=Q.nextEffect;Q.nextEffect=null;Q=Lh}}catch(Xa){d=!0,w=Xa}d&&(null===Q?t("178"):void 0,wg(Q,w),null!==Q&&(Q=Q.nextEffect))}Lg=Og=!1;"function"===typeof Oe&&Oe(b.stateNode);Sa=b.expirationTime;b=b.childExpirationTime;b=0===Sa||0!==b&&b<Sa?b:Sa;0===b&&(Fg=
null);a.expirationTime=b;a.finishedWork=null}function Tg(){return eh?!0:null===hh||hh.timeRemaining()>nh?!1:eh=!0}function Dg(a){null===Y?t("246"):void 0;Y.expirationTime=0;fh||(fh=!0,gh=a)}function sh(a,b){var c=W;W=!0;try{return a(b)}finally{(W=c)||V||Yg(1,null)}}function th(a,b){if(W&&!Wg){Wg=!0;try{return a(b)}finally{Wg=!1}}return a(b)}function uh(a,b,c){if(Ug)return a(b,c);W||V||0===Vg||(Yg(Vg,null),Vg=0);var d=Ug,e=W;W=Ug=!0;try{return a(b,c)}finally{Ug=d,(W=e)||V||Yg(1,null)}}
function vh(a){if(!a)return Fe;a=a._reactInternalFiber;a:{2!==jd(a)||2!==a.tag&&3!==a.tag?t("170"):void 0;var b=a;do{switch(b.tag){case 5:b=b.stateNode.context;break a;case 2:if(K(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}break;case 3:if(K(b.type._reactResult)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}}b=b.return}while(null!==b);t("171");b=void 0}if(2===a.tag){var c=a.type;if(K(c))return Le(a,c,b)}else if(3===a.tag&&(c=a.type._reactResult,K(c)))return Le(a,
c,b);return b}function wh(a,b,c,d,e){var f=b.current;c=vh(c);null===b.context?b.context=c:b.pendingContext=c;b=e;e=df(d);e.payload={element:a};b=void 0===b?null:b;null!==b&&(e.callback=b);ff(f,e);If(f,d);return d}function xh(a,b,c,d){var e=b.current,f=Gf();e=Hf(f,e);return wh(a,b,c,e,d)}function zh(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 7:return a.child.stateNode;default:return a.child.stateNode}}
function Ah(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:ac,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
Fb=function(a,b,c){switch(b){case "input":Dc(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Na(d);e?void 0:t("90");Xb(d);Dc(d,e)}}}break;case "textarea":he(a,c);break;case "select":b=c.value,null!=b&&ee(a,!!c.multiple,b,!1)}};
function Bh(a){var b=2+25*(((Gf()-2+500)/25|0)+1);b<=Jg&&(b=Jg+1);this._expirationTime=Jg=b;this._root=a;this._callbacks=this._next=null;this._hasChildren=this._didComplete=!1;this._children=null;this._defer=!0}Bh.prototype.render=function(a){this._defer?void 0:t("250");this._hasChildren=!0;this._children=a;var b=this._root._internalRoot,c=this._expirationTime,d=new Ch;wh(a,b,null,c,d._onCommit);return d};
Bh.prototype.then=function(a){if(this._didComplete)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
Bh.prototype.commit=function(){var a=this._root._internalRoot,b=a.firstBatch;this._defer&&null!==b?void 0:t("251");if(this._hasChildren){var c=this._expirationTime;if(b!==this){this._hasChildren&&(c=this._expirationTime=b._expirationTime,this.render(this._children));for(var d=null,e=b;e!==this;)d=e,e=e._next;null===d?t("251"):void 0;d._next=e._next;this._next=b;a.firstBatch=this}this._defer=!1;b=c;V?t("253"):void 0;Y=a;Z=b;Xg(a,b,!0);Yg(1,null);b=this._next;this._next=null;b=a.firstBatch=b;null!==
b&&b._hasChildren&&b.render(b._children)}else this._next=null,this._defer=!1};Bh.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++)(0,a[b])()}};function Ch(){this._callbacks=null;this._didCommit=!1;this._onCommit=this._onCommit.bind(this)}Ch.prototype.then=function(a){if(this._didCommit)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
Ch.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++){var c=a[b];"function"!==typeof c?t("191",c):void 0;c()}}};
function Dh(a,b,c){b=new Se(5,null,null,b?3:0);a={current:b,containerInfo:a,pendingChildren:null,earliestPendingTime:0,latestPendingTime:0,earliestSuspendedTime:0,latestSuspendedTime:0,latestPingedTime:0,didError:!1,pendingCommitExpirationTime:0,finishedWork:null,timeoutHandle:-1,context:null,pendingContext:null,hydrate:c,nextExpirationTimeToWorkOn:0,expirationTime:0,firstBatch:null,nextScheduledRoot:null};this._internalRoot=b.stateNode=a}
Dh.prototype.render=function(a,b){var c=this._internalRoot,d=new Ch;b=void 0===b?null:b;null!==b&&d.then(b);xh(a,c,null,d._onCommit);return d};Dh.prototype.unmount=function(a){var b=this._internalRoot,c=new Ch;a=void 0===a?null:a;null!==a&&c.then(a);xh(null,b,null,c._onCommit);return c};Dh.prototype.legacy_renderSubtreeIntoContainer=function(a,b,c){var d=this._internalRoot,e=new Ch;c=void 0===c?null:c;null!==c&&e.then(c);xh(b,d,a,e._onCommit);return e};
Dh.prototype.createBatch=function(){var a=new Bh(this),b=a._expirationTime,c=this._internalRoot,d=c.firstBatch;if(null===d)c.firstBatch=a,a._next=null;else{for(c=null;null!==d&&d._expirationTime<=b;)c=d,d=d._next;a._next=d;null!==c&&(c._next=a)}return a};function Eh(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}Lb=sh;Mb=uh;Nb=function(){V||0===Vg||(Yg(Vg,null),Vg=0)};
function Fh(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new Dh(a,!1,b)}
function Gh(a,b,c,d,e){Eh(c)?void 0:t("200");var f=c._reactRootContainer;if(f){if("function"===typeof e){var g=e;e=function(){var a=zh(f._internalRoot);g.call(a)}}null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)}else{f=c._reactRootContainer=Fh(c,d);if("function"===typeof e){var h=e;e=function(){var a=zh(f._internalRoot);h.call(a)}}th(function(){null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)})}return zh(f._internalRoot)}
function Hh(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;Eh(b)?void 0:t("200");return Ah(a,b,null,c)}
var Mh={createPortal:Hh,findDOMNode:function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;void 0===b&&("function"===typeof a.render?t("188"):t("268",Object.keys(a)));a=md(b);a=null===a?null:a.stateNode;return a},hydrate:function(a,b,c){return Gh(null,a,b,!0,c)},render:function(a,b,c){return Gh(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,b,c,d){null==a||void 0===a._reactInternalFiber?t("38"):void 0;return Gh(a,b,c,!1,d)},unmountComponentAtNode:function(a){Eh(a)?
void 0:t("40");return a._reactRootContainer?(th(function(){Gh(null,null,a,!1,function(){a._reactRootContainer=null})}),!0):!1},unstable_createPortal:function(){return Hh.apply(void 0,arguments)},unstable_batchedUpdates:sh,unstable_interactiveUpdates:uh,flushSync:function(a,b){V?t("187"):void 0;var c=W;W=!0;try{return bh(a,b)}finally{W=c,Yg(1,null)}},unstable_flushControlled:function(a){var b=W;W=!0;try{bh(a)}finally{(W=b)||V||Yg(1,null)}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[La,
Ma,Na,Ea.injectEventPluginsByName,qa,Ua,function(a){za(a,Ta)},Jb,Kb,Id,Ga]},unstable_createRoot:function(a,b){Eh(a)?void 0:t("278");return new Dh(a,!0,null!=b&&!0===b.hydrate)}};(function(a){var b=a.findFiberByHostInstance;return Re(n({},a,{findHostInstanceByFiber:function(a){a=md(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null}}))})({findFiberByHostInstance:Ka,bundleType:0,version:"16.5.2",rendererPackageName:"react-dom"});
var Nh={default:Mh},Oh=Nh&&Mh||Nh;module.exports=Oh.default||Oh;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(14);
} else {}


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.5.2
 * schedule.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports,"__esModule",{value:!0});var c=null,e=!1,f=!1,g="object"===typeof performance&&"function"===typeof performance.now,l={timeRemaining:g?function(){var a=h()-performance.now();return 0<a?a:0}:function(){var a=h()-Date.now();return 0<a?a:0},didTimeout:!1};function m(){if(!e){var a=c.timesOutAt;f?n():f=!0;p(q,a)}}function r(){var a=c,b=c.next;if(c===b)c=null;else{var d=c.previous;c=d.next=b;b.previous=d}a.next=a.previous=null;a=a.callback;a(l)}
function q(a){e=!0;l.didTimeout=a;try{if(a)for(;null!==c;){var b=exports.unstable_now();if(c.timesOutAt<=b){do r();while(null!==c&&c.timesOutAt<=b)}else break}else if(null!==c){do r();while(null!==c&&0<h()-exports.unstable_now())}}finally{e=!1,null!==c?m(c):f=!1}}
var t=Date,u="function"===typeof setTimeout?setTimeout:void 0,v="function"===typeof clearTimeout?clearTimeout:void 0,w="function"===typeof requestAnimationFrame?requestAnimationFrame:void 0,x="function"===typeof cancelAnimationFrame?cancelAnimationFrame:void 0,y,z;function A(a){y=w(function(b){v(z);a(b)});z=u(function(){x(y);a(exports.unstable_now())},100)}if(g){var B=performance;exports.unstable_now=function(){return B.now()}}else exports.unstable_now=function(){return t.now()};var p,n,h;
if("undefined"===typeof window){var C=-1;p=function(a){C=setTimeout(a,0,!0)};n=function(){clearTimeout(C)};h=function(){return 0}}else if(window._schedMock){var D=window._schedMock;p=D[0];n=D[1];h=D[2]}else{"undefined"!==typeof console&&("function"!==typeof w&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!==typeof x&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));
var E=null,F=!1,G=-1,H=!1,I=!1,J=0,K=33,L=33;h=function(){return J};var M="__reactIdleCallback$"+Math.random().toString(36).slice(2);window.addEventListener("message",function(a){if(a.source===window&&a.data===M){F=!1;var b=exports.unstable_now();a=!1;if(0>=J-b)if(-1!==G&&G<=b)a=!0;else{H||(H=!0,A(N));return}G=-1;b=E;E=null;if(null!==b){I=!0;try{b(a)}finally{I=!1}}}},!1);var N=function(a){H=!1;var b=a-J+L;b<L&&K<L?(8>b&&(b=8),L=b<K?K:b):K=b;J=a+L;F||(F=!0,window.postMessage(M,"*"))};p=function(a,
b){E=a;G=b;I?window.postMessage(M,"*"):H||(H=!0,A(N))};n=function(){E=null;F=!1;G=-1}}exports.unstable_scheduleWork=function(a,b){var d=exports.unstable_now();b=void 0!==b&&null!==b&&null!==b.timeout&&void 0!==b.timeout?d+b.timeout:d+5E3;a={callback:a,timesOutAt:b,next:null,previous:null};if(null===c)c=a.next=a.previous=a,m(c);else{d=null;var k=c;do{if(k.timesOutAt>b){d=k;break}k=k.next}while(k!==c);null===d?d=c:d===c&&(c=a,m(c));b=d.previous;b.next=d.previous=a;a.next=d;a.previous=b}return a};
exports.unstable_cancelScheduledWork=function(a){var b=a.next;if(null!==b){if(b===a)c=null;else{a===c&&(c=b);var d=a.previous;d.next=b;b.previous=d}a.next=a.previous=null}};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(16);

function emptyFunction() {}

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/index.css
var src = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/PropTypes.js


var subscriptionShape = prop_types_default.a.shape({
  trySubscribe: prop_types_default.a.func.isRequired,
  tryUnsubscribe: prop_types_default.a.func.isRequired,
  notifyNestedSubs: prop_types_default.a.func.isRequired,
  isSubscribed: prop_types_default.a.func.isRequired
});

var storeShape = prop_types_default.a.shape({
  subscribe: prop_types_default.a.func.isRequired,
  dispatch: prop_types_default.a.func.isRequired,
  getState: prop_types_default.a.func.isRequired
});
// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/warning.js
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/components/Provider.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var didWarnAboutReceivingStore = false;
function warnAboutReceivingStore() {
  if (didWarnAboutReceivingStore) {
    return;
  }
  didWarnAboutReceivingStore = true;

  warning('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
}

function createProvider() {
  var _Provider$childContex;

  var storeKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'store';
  var subKey = arguments[1];

  var subscriptionKey = subKey || storeKey + 'Subscription';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref;
    };

    function Provider(props, context) {
      _classCallCheck(this, Provider);

      var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

      _this[storeKey] = props.store;
      return _this;
    }

    Provider.prototype.render = function render() {
      return react["Children"].only(this.props.children);
    };

    return Provider;
  }(react["Component"]);

  if (false) {}

  Provider.propTypes = {
    store: storeShape.isRequired,
    children: prop_types_default.a.element.isRequired
  };
  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = storeShape.isRequired, _Provider$childContex[subscriptionKey] = subscriptionShape, _Provider$childContex);

  return Provider;
}

/* harmony default export */ var components_Provider = (createProvider());
// EXTERNAL MODULE: ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__(7);
var hoist_non_react_statics_cjs_default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics_cjs);

// EXTERNAL MODULE: ./node_modules/invariant/browser.js
var browser = __webpack_require__(2);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);

// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/Subscription.js
function Subscription_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var CLEARED = null;
var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  // the current/next pattern is copied from redux's createStore code.
  // TODO: refactor+expose that code to be reusable here?
  var current = [];
  var next = [];

  return {
    clear: function clear() {
      next = CLEARED;
      current = CLEARED;
    },
    notify: function notify() {
      var listeners = current = next;
      for (var i = 0; i < listeners.length; i++) {
        listeners[i]();
      }
    },
    get: function get() {
      return next;
    },
    subscribe: function subscribe(listener) {
      var isSubscribed = true;
      if (next === current) next = current.slice();
      next.push(listener);

      return function unsubscribe() {
        if (!isSubscribed || current === CLEARED) return;
        isSubscribed = false;

        if (next === current) next = current.slice();
        next.splice(next.indexOf(listener), 1);
      };
    }
  };
}

var Subscription = function () {
  function Subscription(store, parentSub, onStateChange) {
    Subscription_classCallCheck(this, Subscription);

    this.store = store;
    this.parentSub = parentSub;
    this.onStateChange = onStateChange;
    this.unsubscribe = null;
    this.listeners = nullListeners;
  }

  Subscription.prototype.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  Subscription.prototype.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  Subscription.prototype.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  Subscription.prototype.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);

      this.listeners = createListenerCollection();
    }
  };

  Subscription.prototype.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();


// CONCATENATED MODULE: ./node_modules/react-redux/es/components/connectAdvanced.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function connectAdvanced_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function connectAdvanced_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function connectAdvanced_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








var hotReloadingVersion = 0;
var dummyState = {};
function noop() {}
function makeSelectorStateful(sourceSelector, store) {
  // wrap the selector in an object that tracks its results between runs.
  var selector = {
    run: function runComponentSelector(props) {
      try {
        var nextProps = sourceSelector(store.getState(), props);
        if (nextProps !== selector.props || selector.error) {
          selector.shouldComponentUpdate = true;
          selector.props = nextProps;
          selector.error = null;
        }
      } catch (error) {
        selector.shouldComponentUpdate = true;
        selector.error = error;
      }
    }
  };

  return selector;
}

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
     export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory) {
  var _contextTypes, _childContextTypes;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$getDisplayName = _ref.getDisplayName,
      getDisplayName = _ref$getDisplayName === undefined ? function (name) {
    return 'ConnectAdvanced(' + name + ')';
  } : _ref$getDisplayName,
      _ref$methodName = _ref.methodName,
      methodName = _ref$methodName === undefined ? 'connectAdvanced' : _ref$methodName,
      _ref$renderCountProp = _ref.renderCountProp,
      renderCountProp = _ref$renderCountProp === undefined ? undefined : _ref$renderCountProp,
      _ref$shouldHandleStat = _ref.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref$shouldHandleStat === undefined ? true : _ref$shouldHandleStat,
      _ref$storeKey = _ref.storeKey,
      storeKey = _ref$storeKey === undefined ? 'store' : _ref$storeKey,
      _ref$withRef = _ref.withRef,
      withRef = _ref$withRef === undefined ? false : _ref$withRef,
      connectOptions = _objectWithoutProperties(_ref, ['getDisplayName', 'methodName', 'renderCountProp', 'shouldHandleStateChanges', 'storeKey', 'withRef']);

  var subscriptionKey = storeKey + 'Subscription';
  var version = hotReloadingVersion++;

  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = storeShape, _contextTypes[subscriptionKey] = subscriptionShape, _contextTypes);
  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = subscriptionShape, _childContextTypes);

  return function wrapWithConnect(WrappedComponent) {
    browser_default()(typeof WrappedComponent == 'function', 'You must pass a component to the function returned by ' + (methodName + '. Instead received ' + JSON.stringify(WrappedComponent)));

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = _extends({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      withRef: withRef,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var Connect = function (_Component) {
      connectAdvanced_inherits(Connect, _Component);

      function Connect(props, context) {
        connectAdvanced_classCallCheck(this, Connect);

        var _this = connectAdvanced_possibleConstructorReturn(this, _Component.call(this, props, context));

        _this.version = version;
        _this.state = {};
        _this.renderCount = 0;
        _this.store = props[storeKey] || context[storeKey];
        _this.propsMode = Boolean(props[storeKey]);
        _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);

        browser_default()(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));

        _this.initSelector();
        _this.initSubscription();
        return _this;
      }

      Connect.prototype.getChildContext = function getChildContext() {
        var _ref2;

        // If this component received store from props, its subscription should be transparent
        // to any descendants receiving store+subscription from context; it passes along
        // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
        // Connect to control ordering of notifications to flow top-down.
        var subscription = this.propsMode ? null : this.subscription;
        return _ref2 = {}, _ref2[subscriptionKey] = subscription || this.context[subscriptionKey], _ref2;
      };

      Connect.prototype.componentDidMount = function componentDidMount() {
        if (!shouldHandleStateChanges) return;

        // componentWillMount fires during server side rendering, but componentDidMount and
        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
        // To handle the case where a child component may have triggered a state change by
        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
        // re-render.
        this.subscription.trySubscribe();
        this.selector.run(this.props);
        if (this.selector.shouldComponentUpdate) this.forceUpdate();
      };

      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.selector.run(nextProps);
      };

      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        return this.selector.shouldComponentUpdate;
      };

      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.subscription) this.subscription.tryUnsubscribe();
        this.subscription = null;
        this.notifyNestedSubs = noop;
        this.store = null;
        this.selector.run = noop;
        this.selector.shouldComponentUpdate = false;
      };

      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
        browser_default()(withRef, 'To access the wrapped instance, you need to specify ' + ('{ withRef: true } in the options argument of the ' + methodName + '() call.'));
        return this.wrappedInstance;
      };

      Connect.prototype.setWrappedInstance = function setWrappedInstance(ref) {
        this.wrappedInstance = ref;
      };

      Connect.prototype.initSelector = function initSelector() {
        var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
        this.selector = makeSelectorStateful(sourceSelector, this.store);
        this.selector.run(this.props);
      };

      Connect.prototype.initSubscription = function initSubscription() {
        if (!shouldHandleStateChanges) return;

        // parentSub's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.
        var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
        this.subscription = new Subscription(this.store, parentSub, this.onStateChange.bind(this));

        // `notifyNestedSubs` is duplicated to handle the case where the component is  unmounted in
        // the middle of the notification loop, where `this.subscription` will then be null. An
        // extra null check every change can be avoided by copying the method onto `this` and then
        // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
        // listeners logic is changed to not call listeners that have been unsubscribed in the
        // middle of the notification loop.
        this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
      };

      Connect.prototype.onStateChange = function onStateChange() {
        this.selector.run(this.props);

        if (!this.selector.shouldComponentUpdate) {
          this.notifyNestedSubs();
        } else {
          this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
          this.setState(dummyState);
        }
      };

      Connect.prototype.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
        // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
        // needs to notify nested subs. Once called, it unimplements itself until further state
        // changes occur. Doing it this way vs having a permanent `componentDidUpdate` that does
        // a boolean check every time avoids an extra method call most of the time, resulting
        // in some perf boost.
        this.componentDidUpdate = undefined;
        this.notifyNestedSubs();
      };

      Connect.prototype.isSubscribed = function isSubscribed() {
        return Boolean(this.subscription) && this.subscription.isSubscribed();
      };

      Connect.prototype.addExtraProps = function addExtraProps(props) {
        if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props;
        // make a shallow copy so that fields added don't leak to the original selector.
        // this is especially important for 'ref' since that's a reference back to the component
        // instance. a singleton memoized selector would then be holding a reference to the
        // instance, preventing the instance from being garbage collected, and that would be bad
        var withExtras = _extends({}, props);
        if (withRef) withExtras.ref = this.setWrappedInstance;
        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
        if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
        return withExtras;
      };

      Connect.prototype.render = function render() {
        var selector = this.selector;
        selector.shouldComponentUpdate = false;

        if (selector.error) {
          throw selector.error;
        } else {
          return Object(react["createElement"])(WrappedComponent, this.addExtraProps(selector.props));
        }
      };

      return Connect;
    }(react["Component"]);

    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;
    Connect.childContextTypes = childContextTypes;
    Connect.contextTypes = contextTypes;
    Connect.propTypes = contextTypes;

    if (false) {}

    return hoist_non_react_statics_cjs_default()(Connect, WrappedComponent);
  };
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/shallowEqual.js
var hasOwn = Object.prototype.hasOwnProperty;

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}
// EXTERNAL MODULE: ./node_modules/symbol-observable/es/index.js
var es = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/redux/es/redux.js


/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[es["a" /* default */]] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[es["a" /* default */]] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function redux_warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {}

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers);
  var unexpectedKeyCache;

  if (false) {}

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) { var warningMessage; }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error("Dispatching while constructing your middleware is not allowed. " + "Other middleware would not be applied to this dispatch.");
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if (false) {}



// EXTERNAL MODULE: ./node_modules/lodash-es/_freeGlobal.js
var _freeGlobal = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/lodash-es/_root.js


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal["a" /* default */] || freeSelf || Function('return this')();

/* harmony default export */ var _root = (root);

// CONCATENATED MODULE: ./node_modules/lodash-es/_Symbol.js


/** Built-in value references. */
var Symbol = _root.Symbol;

/* harmony default export */ var _Symbol = (Symbol);

// CONCATENATED MODULE: ./node_modules/lodash-es/_getRawTag.js


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _getRawTag_hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = _getRawTag_hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ var _getRawTag = (getRawTag);

// CONCATENATED MODULE: ./node_modules/lodash-es/_objectToString.js
/** Used for built-in method references. */
var _objectToString_objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var _objectToString_nativeObjectToString = _objectToString_objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return _objectToString_nativeObjectToString.call(value);
}

/* harmony default export */ var _objectToString = (objectToString);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseGetTag.js




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var _baseGetTag_symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (_baseGetTag_symToStringTag && _baseGetTag_symToStringTag in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

/* harmony default export */ var _baseGetTag = (baseGetTag);

// CONCATENATED MODULE: ./node_modules/lodash-es/_overArg.js
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ var _overArg = (overArg);

// CONCATENATED MODULE: ./node_modules/lodash-es/_getPrototype.js


/** Built-in value references. */
var getPrototype = _overArg(Object.getPrototypeOf, Object);

/* harmony default export */ var _getPrototype = (getPrototype);

// CONCATENATED MODULE: ./node_modules/lodash-es/isObjectLike.js
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ var lodash_es_isObjectLike = (isObjectLike);

// CONCATENATED MODULE: ./node_modules/lodash-es/isPlainObject.js




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    isPlainObject_objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var isPlainObject_hasOwnProperty = isPlainObject_objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject_isPlainObject(value) {
  if (!lodash_es_isObjectLike(value) || _baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = _getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = isPlainObject_hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ var lodash_es_isPlainObject = (isPlainObject_isPlainObject);

// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/verifyPlainObject.js



function verifyPlainObject(value, displayName, methodName) {
  if (!lodash_es_isPlainObject(value)) {
    warning(methodName + '() in ' + displayName + ' must return a plain object. Instead received ' + value + '.');
  }
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/wrapMapToProps.js


function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }
    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
}

// dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
// 
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..
function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
}

// Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
// 
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//    
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//    
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//    
function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    };

    // allow detectFactoryAndVerify to get ownProps
    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (false) {}

      return props;
    };

    return proxy;
  };
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/mapDispatchToProps.js



function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? wrapMapToPropsFunc(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}

function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? wrapMapToPropsConstant(function (dispatch) {
    return { dispatch: dispatch };
  }) : undefined;
}

function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? wrapMapToPropsConstant(function (dispatch) {
    return bindActionCreators(mapDispatchToProps, dispatch);
  }) : undefined;
}

/* harmony default export */ var connect_mapDispatchToProps = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/mapStateToProps.js


function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? wrapMapToPropsFunc(mapStateToProps, 'mapStateToProps') : undefined;
}

function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? wrapMapToPropsConstant(function () {
    return {};
  }) : undefined;
}

/* harmony default export */ var connect_mapStateToProps = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/mergeProps.js
var mergeProps_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return mergeProps_extends({}, ownProps, stateProps, dispatchProps);
}

function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;

    var hasRunOnce = false;
    var mergedProps = void 0;

    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;

        if (false) {}
      }

      return mergedProps;
    };
  };
}

function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}

function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}

/* harmony default export */ var connect_mergeProps = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/verifySubselectors.js


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error('Unexpected value for ' + methodName + ' in ' + displayName + '.');
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
      warning('The selector for ' + methodName + ' of ' + displayName + ' did not specify a value for dependsOnOwnProps.');
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/selectorFactory.js
function selectorFactory_objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }



function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}

function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;

  var hasRunAtLeastOnce = false;
  var state = void 0;
  var ownProps = void 0;
  var stateProps = void 0;
  var dispatchProps = void 0;
  var mergedProps = void 0;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;

    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);

    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;

    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
}

// TODO: Add more comments

// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = selectorFactory_objectWithoutProperties(_ref2, ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps']);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (false) {}

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;

  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/connect.js
var connect_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function connect_objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error('Invalid value of type ' + typeof arg + ' for ' + name + ' argument when connecting component ' + options.wrappedComponentName + '.');
  };
}

function strictEqual(a, b) {
  return a === b;
}

// createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios
function createConnect() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === undefined ? connectAdvanced : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === undefined ? connect_mapStateToProps : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === undefined ? connect_mapDispatchToProps : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === undefined ? connect_mergeProps : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === undefined ? finalPropsSelectorFactory : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
    var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
        _ref2$pure = _ref2.pure,
        pure = _ref2$pure === undefined ? true : _ref2$pure,
        _ref2$areStatesEqual = _ref2.areStatesEqual,
        areStatesEqual = _ref2$areStatesEqual === undefined ? strictEqual : _ref2$areStatesEqual,
        _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual,
        areOwnPropsEqual = _ref2$areOwnPropsEqua === undefined ? shallowEqual : _ref2$areOwnPropsEqua,
        _ref2$areStatePropsEq = _ref2.areStatePropsEqual,
        areStatePropsEqual = _ref2$areStatePropsEq === undefined ? shallowEqual : _ref2$areStatePropsEq,
        _ref2$areMergedPropsE = _ref2.areMergedPropsEqual,
        areMergedPropsEqual = _ref2$areMergedPropsE === undefined ? shallowEqual : _ref2$areMergedPropsE,
        extraOptions = connect_objectWithoutProperties(_ref2, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');

    return connectHOC(selectorFactory, connect_extends({
      // used in error messages
      methodName: 'connect',

      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return 'Connect(' + name + ')';
      },

      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),

      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual

    }, extraOptions));
  };
}

/* harmony default export */ var connect_connect = (createConnect());
// CONCATENATED MODULE: ./node_modules/react-redux/es/index.js





// CONCATENATED MODULE: ./node_modules/redux-thunk/es/index.js
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

/* harmony default export */ var redux_thunk_es = (thunk);
// CONCATENATED MODULE: ./src/utils/gridHelper.ts
function adjacentToSafeSpot(x, y, safeX, safeY) {
    for (var i = safeX - 1; i < safeX + 2; i++) {
        for (var j = safeY - 1; j < safeY + 2; j++) {
            if (x == i && y == j) {
                return true;
            }
        }
    }
    return false;
}
function getCell(grid, x, y) {
    if (isInGrid(grid, x, y)) {
        return grid.cells[x][y];
    }
    throw new Error("(" + x + ", " + y + ") is not a valid coordinate in the grid");
}
function setMine(grid, x, y) {
    if (isInGrid(grid, x, y) && !grid.cells[x][y].isMine()) {
        grid.cells[x][y].setMine();
        grid = incrementValuesAroundMine(grid, x, y);
        return true;
    }
    return false;
}
function incrementValuesAroundMine(grid, mineX, mineY) {
    for (var i = mineX - 1; i < mineX + 2; i++) {
        for (var j = mineY - 1; j < mineY + 2; j++) {
            if (isInGrid(grid, i, j)) {
                grid.cells[i][j].increment();
            }
        }
    }
    return grid;
}
function isInGrid(grid, x, y) {
    return (x >= 0 && x < grid.columns) && (y >= 0 && y < grid.rows);
}
function gridHelper_openAdjacentCells(grid, x, y) {
    for (var i = x - 1; i < x + 2; i++) {
        for (var j = y - 1; j < y + 2; j++) {
            gridHelper_openCell(grid, i, j);
        }
    }
    return grid;
}
function gridHelper_openCell(grid, x, y) {
    if (isInGrid(grid, x, y)) {
        var cell = grid.cells[x][y];
        if (!cell.open) {
            cell.open = true;
            grid.openedCells++;
            if (cell.isMine()) {
                grid.openMine = true;
            }
            else if (cell.hasNoAdjacentMine()) {
                grid = gridHelper_openAdjacentCells(grid, x, y);
            }
        }
    }
    return grid;
}
function gridHelper_flagCell(grid, x, y) {
    if (isInGrid(grid, x, y)) {
        var cell = grid.cells[x][y];
        (cell.flag) ? grid.numFlags-- : grid.numFlags++;
        cell.flag = !cell.flag;
    }
    return grid;
}
function gameWon(grid) {
    return grid.openedCells == numCells(grid) - grid.numMines;
}
function numCells(grid) {
    return grid.rows * grid.columns;
}
/** Returns the number of rows, number of columns, and number of mines in a list */
function gridHelper_gridSize(difficulty) {
    switch (difficulty) {
        case "Beginner": return [9, 9, 10];
        case "Intermediate": return [16, 16, 40];
        case "Expert": return [16, 30, 99];
        default: return [9, 9, 10];
    }
}

// CONCATENATED MODULE: ./src/utils/index.ts


// CONCATENATED MODULE: ./src/components/gridComponent.tsx




function GridComponentView(props) {
    var grid = props.grid;
    var gridButtons = [];
    for (var row = grid.rows - 1; 0 <= row; row--) {
        var rowButtons = [];
        for (var column = 0; column < grid.columns; column++) {
            var cell = getCell(grid, column, row);
            rowButtons.push(react["createElement"](GridButton, { key: row + ", " + column, gridValue: cell, open: cell.open, flag: cell.flag, disabled: props.gameOver || props.win }));
        }
        gridButtons.push(react["createElement"]("div", { key: row, className: "buttons has-addons is-marginless is-centered" }, rowButtons));
    }
    return (react["createElement"]("div", null,
        react["createElement"]("div", { className: "grid" }, gridButtons)));
}
function gridComponent_mapStateToProps(state) {
    return { grid: state.grid };
}
var GridComponent = connect_connect(gridComponent_mapStateToProps)(GridComponentView);

// CONCATENATED MODULE: ./src/actions/actionTypes.ts
var CHANGE_DIFFICULTY = 'CHANGE_DIFFICULTY';
var FIRST_CLICK = 'FIRST_CLICK';
var FLAG_CELL = 'FLAG_CELL';
var GAME_SETUP = 'GAME_SETUP';
var GRID_SETUP = 'GRID_SETUP';
var GRID_SETUP_WITH_SAFE_SPOT = 'GRID_SETUP_WITH_SAFE_SPOT';
var OPEN_ADJACENT_CELLS = 'OPEN_ADJACENT_CELLS';
var OPEN_CELL = 'OPEN_CELL';

// CONCATENATED MODULE: ./src/actions/actions.ts

var actions_Actions;
(function (Actions) {
    function changeDifficulty(difficulty) {
        return { type: CHANGE_DIFFICULTY, payload: difficulty };
    }
    Actions.changeDifficulty = changeDifficulty;
    function firstClick() {
        return { type: FIRST_CLICK, payload: null };
    }
    Actions.firstClick = firstClick;
    function gameSetup(difficulty) {
        return { type: GAME_SETUP, payload: difficulty };
    }
    Actions.gameSetup = gameSetup;
    function gridSetup(gridSize) {
        return { type: GRID_SETUP, payload: gridSize };
    }
    Actions.gridSetup = gridSetup;
    function gridSetupWithSafeSpot(gridSize, x, y) {
        return { type: GRID_SETUP_WITH_SAFE_SPOT, payload: { gridSize: gridSize, x: x, y: y } };
    }
    Actions.gridSetupWithSafeSpot = gridSetupWithSafeSpot;
    function openAdjacentCells(x, y) {
        return { type: OPEN_ADJACENT_CELLS, payload: { x: x, y: y } };
    }
    Actions.openAdjacentCells = openAdjacentCells;
    function openCell(x, y) {
        return { type: OPEN_CELL, payload: { x: x, y: y } };
    }
    Actions.openCell = openCell;
    function flagCell(x, y) {
        return { type: FLAG_CELL, payload: { x: x, y: y } };
    }
    Actions.flagCell = flagCell;
})(actions_Actions || (actions_Actions = {}));

// CONCATENATED MODULE: ./src/actions/index.ts



// CONCATENATED MODULE: ./src/components/gridButton.tsx




function GridButtonComponent(props) {
    var cell = props.gridValue;
    if (props.open) {
        var icon = void 0;
        if (cell.isMine()) {
            icon = react["createElement"]("span", { className: "icon" },
                react["createElement"]("i", { className: "fas fa-bomb fa-lg" }));
        }
        else {
            var cellText = cell.value == 0 ? "" : cell.value;
            var cellColour = getCellTextColour(cellText);
            icon = react["createElement"]("span", { className: "icon " + cellColour + " has-text-weight-bold" }, cellText);
        }
        return react["createElement"]("div", { className: "button is-small is-marginless is-static" }, icon);
    }
    else {
        var flagCell = (props.disabled) ? disableContextMenu : function (e) { return onRightClickHandler(e, props.gridValue, props.flagCell); };
        if (props.flag) {
            return react["createElement"]("button", { className: "button is-small is-marginless", disabled: props.disabled, onContextMenu: flagCell },
                react["createElement"]("span", { className: "icon" },
                    react["createElement"]("i", { className: "fas fa-flag fa-lg has-text-red" })));
        }
        else {
            return react["createElement"]("button", { className: "button is-small is-outlined is-marginless", disabled: props.disabled, onClick: function () { return onClickHandler(props); }, onContextMenu: flagCell },
                react["createElement"]("span", { className: "icon" }));
        }
    }
}
function onClickHandler(props) {
    var x = props.gridValue.x;
    var y = props.gridValue.y;
    if (props.gameState.firstClick) {
        // create grid, set firstClick to false
        props.gridSetup(gridHelper_gridSize(props.gameState.difficulty), x, y);
        props.firstClick();
    }
    props.openCell(x, y);
}
function onRightClickHandler(e, gridValue, flagCell) {
    disableContextMenu(e);
    flagCell(gridValue.x, gridValue.y);
}
function disableContextMenu(e) {
    e.preventDefault();
}
function getCellTextColour(cellText) {
    switch (cellText) {
        case 1: return "has-text-blue";
        case 2: return "has-text-green";
        case 3: return "has-text-red";
        case 4: return "has-text-purple";
        case 5: return "has-text-orange";
        case 6: return "has-text-cyan";
        case 7: return "has-text-yellow";
        case 8: return "has-text-grey";
        default: return "has-text-dark";
    }
}
function gridButton_mapStateToProps(state) {
    return { gameState: state.gameState };
}
function gridButton_mapDispatchToProps(dispatch) {
    return {
        gridSetup: function (gridSize, x, y) { return dispatch(actions_Actions.gridSetupWithSafeSpot(gridSize, x, y)); },
        firstClick: function () { return dispatch(actions_Actions.firstClick()); },
        flagCell: function (x, y) { return dispatch(actions_Actions.flagCell(x, y)); },
        openAdjacentCells: function (x, y) { return dispatch(actions_Actions.openAdjacentCells(x, y)); },
        openCell: function (x, y) { return dispatch(actions_Actions.openCell(x, y)); },
    };
}
var GridButton = connect_connect(gridButton_mapStateToProps, gridButton_mapDispatchToProps)(GridButtonComponent);

// CONCATENATED MODULE: ./src/model/gameState.ts
var GameDifficulty;
(function (GameDifficulty) {
    GameDifficulty["Beginner"] = "Beginner";
    GameDifficulty["Intermediate"] = "Intermediate";
    GameDifficulty["Expert"] = "Expert";
})(GameDifficulty || (GameDifficulty = {}));
function toGameDifficulty(difficulty) {
    switch (difficulty) {
        case "Beginner": return GameDifficulty.Beginner;
        case "Intermediate": return GameDifficulty.Intermediate;
        case "Expert": return GameDifficulty.Expert;
        default: return GameDifficulty.Beginner;
    }
}
var GameState = /** @class */ (function () {
    function GameState(difficulty) {
        if (difficulty === void 0) { difficulty = GameDifficulty.Beginner; }
        this.firstClick = true;
        this.difficulty = difficulty;
    }
    return GameState;
}());


// CONCATENATED MODULE: ./src/model/grid.ts


var grid_Grid = /** @class */ (function () {
    /**
     * @constructor
     * @param rows total number of rows in grid
     * @param columns total number of columns in grid
     * @param numMines total number of mines in grid
     * @param safeX cells adjacent to (safeX, safeY) should not contain a mine
     * @param safeY
    */
    function Grid(rows, columns, numMines, safeX, safeY) {
        if (safeX === void 0) { safeX = -10; }
        if (safeY === void 0) { safeY = -10; }
        this.rows = rows;
        this.columns = columns;
        this.numMines = numMines;
        this.openMine = false;
        this.openedCells = 0;
        this.numFlags = 0;
        // initialize grid
        this.cells = new Array(columns);
        for (var i = 0; i < columns; i++) {
            this.cells[i] = new Array(rows);
            for (var j = 0; j < rows; j++) {
                this.cells[i][j] = new GridValue(i, j);
            }
        }
        // Set mines
        for (var i = 0; i < numMines; i++) {
            var x = void 0;
            var y = void 0;
            do {
                x = Math.round(Math.random() * (columns - 1));
                y = Math.round(Math.random() * (rows - 1));
            } while (adjacentToSafeSpot(x, y, safeX, safeY) || !setMine(this, x, y));
        }
    }
    return Grid;
}());


// CONCATENATED MODULE: ./src/model/gridValue.ts
var GridValue = /** @class */ (function () {
    function GridValue(x, y) {
        this.x = x;
        this.y = y;
        this.value = 0;
        this.mine = false;
        this.open = false;
        this.flag = false;
    }
    GridValue.prototype.increment = function () {
        this.value++;
    };
    GridValue.prototype.isMine = function () {
        return this.mine;
    };
    GridValue.prototype.setMine = function () {
        this.mine = true;
    };
    GridValue.prototype.hasNoAdjacentMine = function () {
        return this.value == 0;
    };
    GridValue.prototype.isFlag = function () {
        return this.flag;
    };
    return GridValue;
}());


// CONCATENATED MODULE: ./src/model/store.ts
var Store = /** @class */ (function () {
    function Store() {
    }
    return Store;
}());


// CONCATENATED MODULE: ./src/model/index.ts





// EXTERNAL MODULE: ./src/components/minesweeper.scss
var minesweeper = __webpack_require__(18);

// CONCATENATED MODULE: ./src/components/minesweeper.tsx
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var minesweeper_MinesweeperView = /** @class */ (function (_super) {
    __extends(MinesweeperView, _super);
    function MinesweeperView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MinesweeperView.prototype.componentDidMount = function () {
        this.props.gameSetup();
    };
    MinesweeperView.prototype.render = function () {
        var _this = this;
        var grid = this.props.grid;
        var gameOver = grid.openMine;
        var win = gameWon(grid);
        var totalSafeCells = numCells(grid) - grid.numMines;
        var progessColourClass = "";
        if (gameOver) {
            progessColourClass = "is-danger";
        }
        else if (win) {
            progessColourClass = "is-success";
        }
        return (react["createElement"]("div", { className: "container" },
            react["createElement"]("div", { className: "toolbar" },
                react["createElement"]("div", null,
                    react["createElement"]("button", { className: "button is-primary", onClick: function () { return _this.props.gameSetup(_this.props.gameState.difficulty); } }, "New Game"),
                    react["createElement"](OptionsMenu, { difficulty: this.props.gameState.difficulty }),
                    react["createElement"]("div", { className: "mine-counter" },
                        react["createElement"]("span", { className: "icon" },
                            react["createElement"]("i", { className: "fas fa-bomb fa-lg" })), " " + (grid.numMines - grid.numFlags))),
                react["createElement"]("progress", { className: "progress is-small progress-layout " + progessColourClass, value: grid.openedCells, max: totalSafeCells })),
            react["createElement"](GridComponent, { gameOver: gameOver, win: win })));
    };
    return MinesweeperView;
}(react["Component"]));

function minesweeper_mapStateToProps(state) {
    return {
        gameState: state.gameState,
        grid: state.grid
    };
}
function minesweeper_mapDispatchToProps(dispatch) {
    return {
        gameSetup: function (difficulty) {
            if (difficulty === void 0) { difficulty = GameDifficulty.Beginner; }
            dispatch(actions_Actions.gameSetup(difficulty));
            dispatch(actions_Actions.gridSetup(gridHelper_gridSize(difficulty)));
        }
    };
}
var Minesweeper = connect_connect(minesweeper_mapStateToProps, minesweeper_mapDispatchToProps)(minesweeper_MinesweeperView);

// CONCATENATED MODULE: ./src/components/optionsMenu.tsx




function OptionsMenuComponent(props) {
    var dropdownItems = [];
    var _loop_1 = function (difficulty) {
        dropdownItems.push(react["createElement"]("a", { key: difficulty, className: "dropdown-item", onClick: function () { return props.changeDifficulty(toGameDifficulty(difficulty)); } }, difficulty));
    };
    for (var difficulty in GameDifficulty) {
        _loop_1(difficulty);
    }
    return (react["createElement"]("div", { className: "dropdown is-hoverable" },
        react["createElement"]("div", { className: "dropdown-trigger" },
            react["createElement"]("button", { className: "button dropdown-button" },
                react["createElement"]("div", { className: "level", style: { width: "100%" } },
                    react["createElement"]("span", { className: "level-left" }, props.difficulty),
                    react["createElement"]("span", { className: "level-right is-small" },
                        react["createElement"]("i", { className: "fas fa-angle-down" }))))),
        react["createElement"]("div", { className: "dropdown-menu", id: "dropdown-menu", role: "menu" },
            react["createElement"]("div", { className: "dropdown-content" }, dropdownItems))));
}
function optionsMenu_mapDispatchToProps(dispatch) {
    return {
        changeDifficulty: function (difficulty) { return dispatch(actions_Actions.changeDifficulty(difficulty)); }
    };
}
var OptionsMenu = connect_connect(null, optionsMenu_mapDispatchToProps)(OptionsMenuComponent);

// CONCATENATED MODULE: ./src/components/index.ts





// CONCATENATED MODULE: ./src/reducers/gameStateReducer.ts
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


function gameStateReducer(state, action) {
    switch (action.type) {
        case GAME_SETUP:
            var difficulty = action.payload;
            return new GameState(difficulty);
        case CHANGE_DIFFICULTY:
            var newGameState = __assign({}, state);
            newGameState.difficulty = action.payload;
            return newGameState;
        case FIRST_CLICK:
            newGameState = __assign({}, state);
            newGameState.firstClick = false;
            return newGameState;
        default:
            return (state) ? state : new GameState();
    }
}

// CONCATENATED MODULE: ./src/reducers/gridReducer.ts
var gridReducer_assign = (undefined && undefined.__assign) || function () {
    gridReducer_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return gridReducer_assign.apply(this, arguments);
};




function gridReducer(state, action) {
    var _a;
    var newState;
    var x;
    var y;
    switch (action.type) {
        case GRID_SETUP:
            var _b = action.payload, numRows = _b[0], numColumns = _b[1], numMines = _b[2];
            return new grid_Grid(numRows, numColumns, numMines);
        case GRID_SETUP_WITH_SAFE_SPOT:
            _a = action.payload.gridSize, numRows = _a[0], numColumns = _a[1], numMines = _a[2];
            x = action.payload.x;
            y = action.payload.y;
            return new grid_Grid(numRows, numColumns, numMines, x, y);
        case OPEN_ADJACENT_CELLS:
            newState = gridReducer_assign({}, state);
            x = action.payload.x;
            y = action.payload.y;
            return gridHelper_openAdjacentCells(newState, x, y);
        case OPEN_CELL:
            newState = gridReducer_assign({}, state);
            x = action.payload.x;
            y = action.payload.y;
            return gridHelper_openCell(newState, x, y);
        case FLAG_CELL:
            newState = gridReducer_assign({}, state);
            x = action.payload.x;
            y = action.payload.y;
            return gridHelper_flagCell(newState, x, y);
        default:
            return (state) ? state : new grid_Grid(1, 1, 0);
    }
}

// CONCATENATED MODULE: ./src/reducers/rootReducer.ts


var rootReducer = combineReducers({
    gameState: gameStateReducer,
    grid: gridReducer
});

// CONCATENATED MODULE: ./src/reducers/index.ts




// EXTERNAL MODULE: ./src/styles.scss
var styles = __webpack_require__(19);

// CONCATENATED MODULE: ./src/index.tsx









var store = createStore(rootReducer, applyMiddleware(redux_thunk_es));
Object(react_dom["render"])(react["createElement"](components_Provider, { store: store },
    react["createElement"](Minesweeper, null)), document.getElementById("root"));


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbnZhcmlhbnQvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3ltYm9sLW9ic2VydmFibGUvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy9kaXN0L2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzLmNqcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19mcmVlR2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zeW1ib2wtb2JzZXJ2YWJsZS9lcy9wb255ZmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9janMvcmVhY3QtZG9tLnByb2R1Y3Rpb24ubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zY2hlZHVsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2NoZWR1bGUvY2pzL3NjaGVkdWxlLnByb2R1Y3Rpb24ubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2hhcm1vbnktbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21pbmVzd2VlcGVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy91dGlscy9Qcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL3V0aWxzL3dhcm5pbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2NvbXBvbmVudHMvUHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL3V0aWxzL1N1YnNjcmlwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29tcG9uZW50cy9jb25uZWN0QWR2YW5jZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL3V0aWxzL3NoYWxsb3dFcXVhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvcmVkdXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19TeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZ2V0UmF3VGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX29iamVjdFRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fb3ZlckFyZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19nZXRQcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc1BsYWluT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy91dGlscy92ZXJpZnlQbGFpbk9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29ubmVjdC93cmFwTWFwVG9Qcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29ubmVjdC9tYXBEaXNwYXRjaFRvUHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2Nvbm5lY3QvbWFwU3RhdGVUb1Byb3BzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9jb25uZWN0L21lcmdlUHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2Nvbm5lY3QvdmVyaWZ5U3Vic2VsZWN0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9jb25uZWN0L3NlbGVjdG9yRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29ubmVjdC9jb25uZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVkdXgtdGh1bmsvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2dyaWRIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2dyaWRDb21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2FjdGlvblR5cGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZ3JpZEJ1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsL2dhbWVTdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvZ3JpZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvZ3JpZFZhbHVlLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC9zdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWluZXN3ZWVwZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29wdGlvbnNNZW51LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvZ2FtZVN0YXRlUmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvZ3JpZFJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL3Jvb3RSZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtB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V0FBVyxHQUFHLGVBQWUsQ0FBQztJQUN2QyxTQUFTLEVBQUUsZ0JBQWdCO0lBQzNCLElBQUksRUFBRSxXQUFXO0NBQ3BCLENBQUMsQ0FBQzs7O0FDTm1EO0FBQ1Y7QUFDQTs7Ozs7O0FDRnZCO0FBRVU7QUFDSTtBQUNJO0FBQ2M7QUFDckI7QUFFVztBQUNGO0FBQ2xCO0FBRXZCLElBQU0sS0FBSyxHQUFHLFdBQVcsQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDLGNBQUssQ0FBQyxDQUFDLENBQUM7QUFFL0QsMkJBQU0sQ0FDSix1QkFBQyxtQkFBUSxJQUFDLEtBQUssRUFBRSxLQUFLO0lBQ3BCLHVCQUFDLFdBQVcsT0FBRyxDQUNOLEVBQ1gsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FDaEMsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIwKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiZcbiAgICBTeW1ib2wuZm9yICYmXG4gICAgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpKSB8fFxuICAgIDB4ZWFjNztcblxuICB2YXIgaXNWYWxpZEVsZW1lbnQgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiZcbiAgICAgIG9iamVjdCAhPT0gbnVsbCAmJlxuICAgICAgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG4gIH07XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciBpbnZhcmlhbnQgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgICdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICtcbiAgICAgICAgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJ1xuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107IH0pXG4gICAgICApO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IHBvbnlmaWxsIGZyb20gJy4vcG9ueWZpbGwuanMnO1xuXG52YXIgcm9vdDtcblxuaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gc2VsZjtcbn0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IHdpbmRvdztcbn0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IGdsb2JhbDtcbn0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IG1vZHVsZTtcbn0gZWxzZSB7XG4gIHJvb3QgPSBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xufVxuXG52YXIgcmVzdWx0ID0gcG9ueWZpbGwocm9vdCk7XG5leHBvcnQgZGVmYXVsdCByZXN1bHQ7XG4iLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsIGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaCAoZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGNoZWNrRENFKCkge1xuICAvKiBnbG9iYWwgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICovXG4gIGlmIChcbiAgICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fID09PSAndW5kZWZpbmVkJyB8fFxuICAgIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18uY2hlY2tEQ0UgIT09ICdmdW5jdGlvbidcbiAgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gVGhpcyBicmFuY2ggaXMgdW5yZWFjaGFibGUgYmVjYXVzZSB0aGlzIGZ1bmN0aW9uIGlzIG9ubHkgY2FsbGVkXG4gICAgLy8gaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBjb25kaXRpb24gaXMgdHJ1ZSBvbmx5IGluIGRldmVsb3BtZW50LlxuICAgIC8vIFRoZXJlZm9yZSBpZiB0aGUgYnJhbmNoIGlzIHN0aWxsIGhlcmUsIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3YXNuJ3RcbiAgICAvLyBwcm9wZXJseSBhcHBsaWVkLlxuICAgIC8vIERvbid0IGNoYW5nZSB0aGUgbWVzc2FnZS4gUmVhY3QgRGV2VG9vbHMgcmVsaWVzIG9uIGl0LiBBbHNvIG1ha2Ugc3VyZVxuICAgIC8vIHRoaXMgbWVzc2FnZSBkb2Vzbid0IG9jY3VyIGVsc2V3aGVyZSBpbiB0aGlzIGZ1bmN0aW9uLCBvciBpdCB3aWxsIGNhdXNlXG4gICAgLy8gYSBmYWxzZSBwb3NpdGl2ZS5cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ15fXicpO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gVmVyaWZ5IHRoYXQgdGhlIGNvZGUgYWJvdmUgaGFzIGJlZW4gZGVhZCBjb2RlIGVsaW1pbmF0ZWQgKERDRSdkKS5cbiAgICBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18uY2hlY2tEQ0UoY2hlY2tEQ0UpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBEZXZUb29scyBzaG91bGRuJ3QgY3Jhc2ggUmVhY3QsIG5vIG1hdHRlciB3aGF0LlxuICAgIC8vIFdlIHNob3VsZCBzdGlsbCByZXBvcnQgaW4gY2FzZSB3ZSBicmVhayB0aGlzIGNvZGUuXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICB9XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIC8vIERDRSBjaGVjayBzaG91bGQgaGFwcGVuIGJlZm9yZSBSZWFjdERPTSBidW5kbGUgZXhlY3V0ZXMgc28gdGhhdFxuICAvLyBEZXZUb29scyBjYW4gcmVwb3J0IGJhZCBtaW5pZmljYXRpb24gZHVyaW5nIGluamVjdGlvbi5cbiAgY2hlY2tEQ0UoKTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1kb20ucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtZG9tLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ29weXJpZ2h0IDIwMTUsIFlhaG9vISBJbmMuXG4gKiBDb3B5cmlnaHRzIGxpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIExpY2Vuc2UuIFNlZSB0aGUgYWNjb21wYW55aW5nIExJQ0VOU0UgZmlsZSBmb3IgdGVybXMuXG4gKi9cbnZhciBSRUFDVF9TVEFUSUNTID0ge1xuICAgIGNoaWxkQ29udGV4dFR5cGVzOiB0cnVlLFxuICAgIGNvbnRleHRUeXBlczogdHJ1ZSxcbiAgICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gICAgZGlzcGxheU5hbWU6IHRydWUsXG4gICAgZ2V0RGVmYXVsdFByb3BzOiB0cnVlLFxuICAgIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wczogdHJ1ZSxcbiAgICBtaXhpbnM6IHRydWUsXG4gICAgcHJvcFR5cGVzOiB0cnVlLFxuICAgIHR5cGU6IHRydWVcbn07XG5cbnZhciBLTk9XTl9TVEFUSUNTID0ge1xuICAgIG5hbWU6IHRydWUsXG4gICAgbGVuZ3RoOiB0cnVlLFxuICAgIHByb3RvdHlwZTogdHJ1ZSxcbiAgICBjYWxsZXI6IHRydWUsXG4gICAgY2FsbGVlOiB0cnVlLFxuICAgIGFyZ3VtZW50czogdHJ1ZSxcbiAgICBhcml0eTogdHJ1ZVxufTtcblxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIGdldE93blByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG52YXIgb2JqZWN0UHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YgJiYgZ2V0UHJvdG90eXBlT2YoT2JqZWN0KTtcblxuZnVuY3Rpb24gaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBzb3VyY2VDb21wb25lbnQsIGJsYWNrbGlzdCkge1xuICAgIGlmICh0eXBlb2Ygc291cmNlQ29tcG9uZW50ICE9PSAnc3RyaW5nJykgeyAvLyBkb24ndCBob2lzdCBvdmVyIHN0cmluZyAoaHRtbCkgY29tcG9uZW50c1xuXG4gICAgICAgIGlmIChvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgICAgICAgIHZhciBpbmhlcml0ZWRDb21wb25lbnQgPSBnZXRQcm90b3R5cGVPZihzb3VyY2VDb21wb25lbnQpO1xuICAgICAgICAgICAgaWYgKGluaGVyaXRlZENvbXBvbmVudCAmJiBpbmhlcml0ZWRDb21wb25lbnQgIT09IG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgICAgICAgICAgIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgaW5oZXJpdGVkQ29tcG9uZW50LCBibGFja2xpc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICAgICAgaWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAgICAgICAga2V5cyA9IGtleXMuY29uY2F0KGdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2VDb21wb25lbnQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAgICAgICBpZiAoIVJFQUNUX1NUQVRJQ1Nba2V5XSAmJiAhS05PV05fU1RBVElDU1trZXldICYmICghYmxhY2tsaXN0IHx8ICFibGFja2xpc3Rba2V5XSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2VDb21wb25lbnQsIGtleSk7XG4gICAgICAgICAgICAgICAgdHJ5IHsgLy8gQXZvaWQgZmFpbHVyZXMgZnJvbSByZWFkLW9ubHkgcHJvcGVydGllc1xuICAgICAgICAgICAgICAgICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXRDb21wb25lbnQsIGtleSwgZGVzY3JpcHRvcik7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXRDb21wb25lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldENvbXBvbmVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBob2lzdE5vblJlYWN0U3RhdGljcztcbiIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbmV4cG9ydCBkZWZhdWx0IGZyZWVHbG9iYWw7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzeW1ib2xPYnNlcnZhYmxlUG9ueWZpbGwocm9vdCkge1xuXHR2YXIgcmVzdWx0O1xuXHR2YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cblx0aWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicpIHtcblx0XHRpZiAoU3ltYm9sLm9ic2VydmFibGUpIHtcblx0XHRcdHJlc3VsdCA9IFN5bWJvbC5vYnNlcnZhYmxlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXN1bHQgPSBTeW1ib2woJ29ic2VydmFibGUnKTtcblx0XHRcdFN5bWJvbC5vYnNlcnZhYmxlID0gcmVzdWx0O1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZXN1bHQgPSAnQEBvYnNlcnZhYmxlJztcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi41LjJcbiAqIHJlYWN0LnByb2R1Y3Rpb24ubWluLmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO3ZhciBtPXJlcXVpcmUoXCJvYmplY3QtYXNzaWduXCIpLG49XCJmdW5jdGlvblwiPT09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvcixwPW4/U3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIik6NjAxMDMscT1uP1N5bWJvbC5mb3IoXCJyZWFjdC5wb3J0YWxcIik6NjAxMDYscj1uP1N5bWJvbC5mb3IoXCJyZWFjdC5mcmFnbWVudFwiKTo2MDEwNyx0PW4/U3ltYm9sLmZvcihcInJlYWN0LnN0cmljdF9tb2RlXCIpOjYwMTA4LHU9bj9TeW1ib2wuZm9yKFwicmVhY3QucHJvZmlsZXJcIik6NjAxMTQsdj1uP1N5bWJvbC5mb3IoXCJyZWFjdC5wcm92aWRlclwiKTo2MDEwOSx3PW4/U3ltYm9sLmZvcihcInJlYWN0LmNvbnRleHRcIik6NjAxMTAseD1uP1N5bWJvbC5mb3IoXCJyZWFjdC5hc3luY19tb2RlXCIpOjYwMTExLHk9bj9TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIik6NjAxMTI7biYmU3ltYm9sLmZvcihcInJlYWN0LnBsYWNlaG9sZGVyXCIpO1xudmFyIHo9XCJmdW5jdGlvblwiPT09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLml0ZXJhdG9yO2Z1bmN0aW9uIEEoYSxiLGQsYyxlLGcsaCxmKXtpZighYSl7YT12b2lkIDA7aWYodm9pZCAwPT09YilhPUVycm9yKFwiTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy5cIik7ZWxzZXt2YXIgaz1bZCxjLGUsZyxoLGZdLGw9MDthPUVycm9yKGIucmVwbGFjZSgvJXMvZyxmdW5jdGlvbigpe3JldHVybiBrW2wrK119KSk7YS5uYW1lPVwiSW52YXJpYW50IFZpb2xhdGlvblwifWEuZnJhbWVzVG9Qb3A9MTt0aHJvdyBhO319XG5mdW5jdGlvbiBCKGEpe2Zvcih2YXIgYj1hcmd1bWVudHMubGVuZ3RoLTEsZD1cImh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9lcnJvci1kZWNvZGVyLmh0bWw/aW52YXJpYW50PVwiK2EsYz0wO2M8YjtjKyspZCs9XCImYXJnc1tdPVwiK2VuY29kZVVSSUNvbXBvbmVudChhcmd1bWVudHNbYysxXSk7QSghMSxcIk1pbmlmaWVkIFJlYWN0IGVycm9yICNcIithK1wiOyB2aXNpdCAlcyBmb3IgdGhlIGZ1bGwgbWVzc2FnZSBvciB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgZm9yIGZ1bGwgZXJyb3JzIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuIFwiLGQpfXZhciBDPXtpc01vdW50ZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hMX0sZW5xdWV1ZUZvcmNlVXBkYXRlOmZ1bmN0aW9uKCl7fSxlbnF1ZXVlUmVwbGFjZVN0YXRlOmZ1bmN0aW9uKCl7fSxlbnF1ZXVlU2V0U3RhdGU6ZnVuY3Rpb24oKXt9fSxEPXt9O1xuZnVuY3Rpb24gRShhLGIsZCl7dGhpcy5wcm9wcz1hO3RoaXMuY29udGV4dD1iO3RoaXMucmVmcz1EO3RoaXMudXBkYXRlcj1kfHxDfUUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9e307RS5wcm90b3R5cGUuc2V0U3RhdGU9ZnVuY3Rpb24oYSxiKXtcIm9iamVjdFwiIT09dHlwZW9mIGEmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBhJiZudWxsIT1hP0IoXCI4NVwiKTp2b2lkIDA7dGhpcy51cGRhdGVyLmVucXVldWVTZXRTdGF0ZSh0aGlzLGEsYixcInNldFN0YXRlXCIpfTtFLnByb3RvdHlwZS5mb3JjZVVwZGF0ZT1mdW5jdGlvbihhKXt0aGlzLnVwZGF0ZXIuZW5xdWV1ZUZvcmNlVXBkYXRlKHRoaXMsYSxcImZvcmNlVXBkYXRlXCIpfTtmdW5jdGlvbiBGKCl7fUYucHJvdG90eXBlPUUucHJvdG90eXBlO2Z1bmN0aW9uIEcoYSxiLGQpe3RoaXMucHJvcHM9YTt0aGlzLmNvbnRleHQ9Yjt0aGlzLnJlZnM9RDt0aGlzLnVwZGF0ZXI9ZHx8Q312YXIgSD1HLnByb3RvdHlwZT1uZXcgRjtcbkguY29uc3RydWN0b3I9RzttKEgsRS5wcm90b3R5cGUpO0guaXNQdXJlUmVhY3RDb21wb25lbnQ9ITA7dmFyIEk9e2N1cnJlbnQ6bnVsbCxjdXJyZW50RGlzcGF0Y2hlcjpudWxsfSxKPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksSz17a2V5OiEwLHJlZjohMCxfX3NlbGY6ITAsX19zb3VyY2U6ITB9O1xuZnVuY3Rpb24gTChhLGIsZCl7dmFyIGM9dm9pZCAwLGU9e30sZz1udWxsLGg9bnVsbDtpZihudWxsIT1iKWZvcihjIGluIHZvaWQgMCE9PWIucmVmJiYoaD1iLnJlZiksdm9pZCAwIT09Yi5rZXkmJihnPVwiXCIrYi5rZXkpLGIpSi5jYWxsKGIsYykmJiFLLmhhc093blByb3BlcnR5KGMpJiYoZVtjXT1iW2NdKTt2YXIgZj1hcmd1bWVudHMubGVuZ3RoLTI7aWYoMT09PWYpZS5jaGlsZHJlbj1kO2Vsc2UgaWYoMTxmKXtmb3IodmFyIGs9QXJyYXkoZiksbD0wO2w8ZjtsKyspa1tsXT1hcmd1bWVudHNbbCsyXTtlLmNoaWxkcmVuPWt9aWYoYSYmYS5kZWZhdWx0UHJvcHMpZm9yKGMgaW4gZj1hLmRlZmF1bHRQcm9wcyxmKXZvaWQgMD09PWVbY10mJihlW2NdPWZbY10pO3JldHVybnskJHR5cGVvZjpwLHR5cGU6YSxrZXk6ZyxyZWY6aCxwcm9wczplLF9vd25lcjpJLmN1cnJlbnR9fVxuZnVuY3Rpb24gTShhLGIpe3JldHVybnskJHR5cGVvZjpwLHR5cGU6YS50eXBlLGtleTpiLHJlZjphLnJlZixwcm9wczphLnByb3BzLF9vd25lcjphLl9vd25lcn19ZnVuY3Rpb24gTihhKXtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiZhLiQkdHlwZW9mPT09cH1mdW5jdGlvbiBlc2NhcGUoYSl7dmFyIGI9e1wiPVwiOlwiPTBcIixcIjpcIjpcIj0yXCJ9O3JldHVyblwiJFwiKyhcIlwiK2EpLnJlcGxhY2UoL1s9Ol0vZyxmdW5jdGlvbihhKXtyZXR1cm4gYlthXX0pfXZhciBPPS9cXC8rL2csUD1bXTtmdW5jdGlvbiBRKGEsYixkLGMpe2lmKFAubGVuZ3RoKXt2YXIgZT1QLnBvcCgpO2UucmVzdWx0PWE7ZS5rZXlQcmVmaXg9YjtlLmZ1bmM9ZDtlLmNvbnRleHQ9YztlLmNvdW50PTA7cmV0dXJuIGV9cmV0dXJue3Jlc3VsdDphLGtleVByZWZpeDpiLGZ1bmM6ZCxjb250ZXh0OmMsY291bnQ6MH19XG5mdW5jdGlvbiBSKGEpe2EucmVzdWx0PW51bGw7YS5rZXlQcmVmaXg9bnVsbDthLmZ1bmM9bnVsbDthLmNvbnRleHQ9bnVsbDthLmNvdW50PTA7MTA+UC5sZW5ndGgmJlAucHVzaChhKX1cbmZ1bmN0aW9uIFMoYSxiLGQsYyl7dmFyIGU9dHlwZW9mIGE7aWYoXCJ1bmRlZmluZWRcIj09PWV8fFwiYm9vbGVhblwiPT09ZSlhPW51bGw7dmFyIGc9ITE7aWYobnVsbD09PWEpZz0hMDtlbHNlIHN3aXRjaChlKXtjYXNlIFwic3RyaW5nXCI6Y2FzZSBcIm51bWJlclwiOmc9ITA7YnJlYWs7Y2FzZSBcIm9iamVjdFwiOnN3aXRjaChhLiQkdHlwZW9mKXtjYXNlIHA6Y2FzZSBxOmc9ITB9fWlmKGcpcmV0dXJuIGQoYyxhLFwiXCI9PT1iP1wiLlwiK1QoYSwwKTpiKSwxO2c9MDtiPVwiXCI9PT1iP1wiLlwiOmIrXCI6XCI7aWYoQXJyYXkuaXNBcnJheShhKSlmb3IodmFyIGg9MDtoPGEubGVuZ3RoO2grKyl7ZT1hW2hdO3ZhciBmPWIrVChlLGgpO2crPVMoZSxmLGQsYyl9ZWxzZSBpZihudWxsPT09YXx8XCJvYmplY3RcIiE9PXR5cGVvZiBhP2Y9bnVsbDooZj16JiZhW3pdfHxhW1wiQEBpdGVyYXRvclwiXSxmPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBmP2Y6bnVsbCksXCJmdW5jdGlvblwiPT09dHlwZW9mIGYpZm9yKGE9Zi5jYWxsKGEpLGg9XG4wOyEoZT1hLm5leHQoKSkuZG9uZTspZT1lLnZhbHVlLGY9YitUKGUsaCsrKSxnKz1TKGUsZixkLGMpO2Vsc2VcIm9iamVjdFwiPT09ZSYmKGQ9XCJcIithLEIoXCIzMVwiLFwiW29iamVjdCBPYmplY3RdXCI9PT1kP1wib2JqZWN0IHdpdGgga2V5cyB7XCIrT2JqZWN0LmtleXMoYSkuam9pbihcIiwgXCIpK1wifVwiOmQsXCJcIikpO3JldHVybiBnfWZ1bmN0aW9uIFUoYSxiLGQpe3JldHVybiBudWxsPT1hPzA6UyhhLFwiXCIsYixkKX1mdW5jdGlvbiBUKGEsYil7cmV0dXJuXCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSYmbnVsbCE9YS5rZXk/ZXNjYXBlKGEua2V5KTpiLnRvU3RyaW5nKDM2KX1mdW5jdGlvbiBWKGEsYil7YS5mdW5jLmNhbGwoYS5jb250ZXh0LGIsYS5jb3VudCsrKX1cbmZ1bmN0aW9uIGFhKGEsYixkKXt2YXIgYz1hLnJlc3VsdCxlPWEua2V5UHJlZml4O2E9YS5mdW5jLmNhbGwoYS5jb250ZXh0LGIsYS5jb3VudCsrKTtBcnJheS5pc0FycmF5KGEpP1coYSxjLGQsZnVuY3Rpb24oYSl7cmV0dXJuIGF9KTpudWxsIT1hJiYoTihhKSYmKGE9TShhLGUrKCFhLmtleXx8YiYmYi5rZXk9PT1hLmtleT9cIlwiOihcIlwiK2Eua2V5KS5yZXBsYWNlKE8sXCIkJi9cIikrXCIvXCIpK2QpKSxjLnB1c2goYSkpfWZ1bmN0aW9uIFcoYSxiLGQsYyxlKXt2YXIgZz1cIlwiO251bGwhPWQmJihnPShcIlwiK2QpLnJlcGxhY2UoTyxcIiQmL1wiKStcIi9cIik7Yj1RKGIsZyxjLGUpO1UoYSxhYSxiKTtSKGIpfWZ1bmN0aW9uIGJhKGEsYil7dmFyIGQ9SS5jdXJyZW50RGlzcGF0Y2hlcjtudWxsPT09ZD9CKFwiMjc3XCIpOnZvaWQgMDtyZXR1cm4gZC5yZWFkQ29udGV4dChhLGIpfVxudmFyIFg9e0NoaWxkcmVuOnttYXA6ZnVuY3Rpb24oYSxiLGQpe2lmKG51bGw9PWEpcmV0dXJuIGE7dmFyIGM9W107VyhhLGMsbnVsbCxiLGQpO3JldHVybiBjfSxmb3JFYWNoOmZ1bmN0aW9uKGEsYixkKXtpZihudWxsPT1hKXJldHVybiBhO2I9UShudWxsLG51bGwsYixkKTtVKGEsVixiKTtSKGIpfSxjb3VudDpmdW5jdGlvbihhKXtyZXR1cm4gVShhLGZ1bmN0aW9uKCl7cmV0dXJuIG51bGx9LG51bGwpfSx0b0FycmF5OmZ1bmN0aW9uKGEpe3ZhciBiPVtdO1coYSxiLG51bGwsZnVuY3Rpb24oYSl7cmV0dXJuIGF9KTtyZXR1cm4gYn0sb25seTpmdW5jdGlvbihhKXtOKGEpP3ZvaWQgMDpCKFwiMTQzXCIpO3JldHVybiBhfX0sY3JlYXRlUmVmOmZ1bmN0aW9uKCl7cmV0dXJue2N1cnJlbnQ6bnVsbH19LENvbXBvbmVudDpFLFB1cmVDb21wb25lbnQ6RyxjcmVhdGVDb250ZXh0OmZ1bmN0aW9uKGEsYil7dm9pZCAwPT09YiYmKGI9bnVsbCk7YT17JCR0eXBlb2Y6dyxfY2FsY3VsYXRlQ2hhbmdlZEJpdHM6Yixcbl9jdXJyZW50VmFsdWU6YSxfY3VycmVudFZhbHVlMjphLFByb3ZpZGVyOm51bGwsQ29uc3VtZXI6bnVsbCx1bnN0YWJsZV9yZWFkOm51bGx9O2EuUHJvdmlkZXI9eyQkdHlwZW9mOnYsX2NvbnRleHQ6YX07YS5Db25zdW1lcj1hO2EudW5zdGFibGVfcmVhZD1iYS5iaW5kKG51bGwsYSk7cmV0dXJuIGF9LGZvcndhcmRSZWY6ZnVuY3Rpb24oYSl7cmV0dXJueyQkdHlwZW9mOnkscmVuZGVyOmF9fSxGcmFnbWVudDpyLFN0cmljdE1vZGU6dCx1bnN0YWJsZV9Bc3luY01vZGU6eCx1bnN0YWJsZV9Qcm9maWxlcjp1LGNyZWF0ZUVsZW1lbnQ6TCxjbG9uZUVsZW1lbnQ6ZnVuY3Rpb24oYSxiLGQpe251bGw9PT1hfHx2b2lkIDA9PT1hP0IoXCIyNjdcIixhKTp2b2lkIDA7dmFyIGM9dm9pZCAwLGU9bSh7fSxhLnByb3BzKSxnPWEua2V5LGg9YS5yZWYsZj1hLl9vd25lcjtpZihudWxsIT1iKXt2b2lkIDAhPT1iLnJlZiYmKGg9Yi5yZWYsZj1JLmN1cnJlbnQpO3ZvaWQgMCE9PWIua2V5JiYoZz1cIlwiK2Iua2V5KTtcbnZhciBrPXZvaWQgMDthLnR5cGUmJmEudHlwZS5kZWZhdWx0UHJvcHMmJihrPWEudHlwZS5kZWZhdWx0UHJvcHMpO2ZvcihjIGluIGIpSi5jYWxsKGIsYykmJiFLLmhhc093blByb3BlcnR5KGMpJiYoZVtjXT12b2lkIDA9PT1iW2NdJiZ2b2lkIDAhPT1rP2tbY106YltjXSl9Yz1hcmd1bWVudHMubGVuZ3RoLTI7aWYoMT09PWMpZS5jaGlsZHJlbj1kO2Vsc2UgaWYoMTxjKXtrPUFycmF5KGMpO2Zvcih2YXIgbD0wO2w8YztsKyspa1tsXT1hcmd1bWVudHNbbCsyXTtlLmNoaWxkcmVuPWt9cmV0dXJueyQkdHlwZW9mOnAsdHlwZTphLnR5cGUsa2V5OmcscmVmOmgscHJvcHM6ZSxfb3duZXI6Zn19LGNyZWF0ZUZhY3Rvcnk6ZnVuY3Rpb24oYSl7dmFyIGI9TC5iaW5kKG51bGwsYSk7Yi50eXBlPWE7cmV0dXJuIGJ9LGlzVmFsaWRFbGVtZW50Ok4sdmVyc2lvbjpcIjE2LjUuMlwiLF9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEOntSZWFjdEN1cnJlbnRPd25lcjpJLFxuYXNzaWduOm19fSxZPXtkZWZhdWx0Olh9LFo9WSYmWHx8WTttb2R1bGUuZXhwb3J0cz1aLmRlZmF1bHR8fFo7XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjUuMlxuICogcmVhY3QtZG9tLnByb2R1Y3Rpb24ubWluLmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuLypcbiBNb2Rlcm5penIgMy4wLjBwcmUgKEN1c3RvbSBCdWlsZCkgfCBNSVRcbiovXG4ndXNlIHN0cmljdCc7dmFyIGFhPXJlcXVpcmUoXCJyZWFjdFwiKSxuPXJlcXVpcmUoXCJvYmplY3QtYXNzaWduXCIpLGJhPXJlcXVpcmUoXCJzY2hlZHVsZVwiKTtmdW5jdGlvbiBjYShhLGIsYyxkLGUsZixnLGgpe2lmKCFhKXthPXZvaWQgMDtpZih2b2lkIDA9PT1iKWE9RXJyb3IoXCJNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCBmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLlwiKTtlbHNle3ZhciBrPVtjLGQsZSxmLGcsaF0sbD0wO2E9RXJyb3IoYi5yZXBsYWNlKC8lcy9nLGZ1bmN0aW9uKCl7cmV0dXJuIGtbbCsrXX0pKTthLm5hbWU9XCJJbnZhcmlhbnQgVmlvbGF0aW9uXCJ9YS5mcmFtZXNUb1BvcD0xO3Rocm93IGE7fX1cbmZ1bmN0aW9uIHQoYSl7Zm9yKHZhciBiPWFyZ3VtZW50cy5sZW5ndGgtMSxjPVwiaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL2Vycm9yLWRlY29kZXIuaHRtbD9pbnZhcmlhbnQ9XCIrYSxkPTA7ZDxiO2QrKyljKz1cIiZhcmdzW109XCIrZW5jb2RlVVJJQ29tcG9uZW50KGFyZ3VtZW50c1tkKzFdKTtjYSghMSxcIk1pbmlmaWVkIFJlYWN0IGVycm9yICNcIithK1wiOyB2aXNpdCAlcyBmb3IgdGhlIGZ1bGwgbWVzc2FnZSBvciB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgZm9yIGZ1bGwgZXJyb3JzIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuIFwiLGMpfWFhP3ZvaWQgMDp0KFwiMjI3XCIpO2Z1bmN0aW9uIGRhKGEsYixjLGQsZSxmLGcsaCxrKXt2YXIgbD1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMyk7dHJ5e2IuYXBwbHkoYyxsKX1jYXRjaChtKXt0aGlzLm9uRXJyb3IobSl9fVxudmFyIGVhPSExLGZhPW51bGwsaGE9ITEsaWE9bnVsbCxqYT17b25FcnJvcjpmdW5jdGlvbihhKXtlYT0hMDtmYT1hfX07ZnVuY3Rpb24ga2EoYSxiLGMsZCxlLGYsZyxoLGspe2VhPSExO2ZhPW51bGw7ZGEuYXBwbHkoamEsYXJndW1lbnRzKX1mdW5jdGlvbiBsYShhLGIsYyxkLGUsZixnLGgsayl7a2EuYXBwbHkodGhpcyxhcmd1bWVudHMpO2lmKGVhKXtpZihlYSl7dmFyIGw9ZmE7ZWE9ITE7ZmE9bnVsbH1lbHNlIHQoXCIxOThcIiksbD12b2lkIDA7aGF8fChoYT0hMCxpYT1sKX19dmFyIG1hPW51bGwsbmE9e307XG5mdW5jdGlvbiBvYSgpe2lmKG1hKWZvcih2YXIgYSBpbiBuYSl7dmFyIGI9bmFbYV0sYz1tYS5pbmRleE9mKGEpOy0xPGM/dm9pZCAwOnQoXCI5NlwiLGEpO2lmKCFwYVtjXSl7Yi5leHRyYWN0RXZlbnRzP3ZvaWQgMDp0KFwiOTdcIixhKTtwYVtjXT1iO2M9Yi5ldmVudFR5cGVzO2Zvcih2YXIgZCBpbiBjKXt2YXIgZT12b2lkIDA7dmFyIGY9Y1tkXSxnPWIsaD1kO3FhLmhhc093blByb3BlcnR5KGgpP3QoXCI5OVwiLGgpOnZvaWQgMDtxYVtoXT1mO3ZhciBrPWYucGhhc2VkUmVnaXN0cmF0aW9uTmFtZXM7aWYoayl7Zm9yKGUgaW4gaylrLmhhc093blByb3BlcnR5KGUpJiZyYShrW2VdLGcsaCk7ZT0hMH1lbHNlIGYucmVnaXN0cmF0aW9uTmFtZT8ocmEoZi5yZWdpc3RyYXRpb25OYW1lLGcsaCksZT0hMCk6ZT0hMTtlP3ZvaWQgMDp0KFwiOThcIixkLGEpfX19fVxuZnVuY3Rpb24gcmEoYSxiLGMpe3NhW2FdP3QoXCIxMDBcIixhKTp2b2lkIDA7c2FbYV09Yjt0YVthXT1iLmV2ZW50VHlwZXNbY10uZGVwZW5kZW5jaWVzfXZhciBwYT1bXSxxYT17fSxzYT17fSx0YT17fSx1YT1udWxsLHZhPW51bGwsd2E9bnVsbDtmdW5jdGlvbiB4YShhLGIsYyxkKXtiPWEudHlwZXx8XCJ1bmtub3duLWV2ZW50XCI7YS5jdXJyZW50VGFyZ2V0PXdhKGQpO2xhKGIsYyx2b2lkIDAsYSk7YS5jdXJyZW50VGFyZ2V0PW51bGx9ZnVuY3Rpb24geWEoYSxiKXtudWxsPT1iP3QoXCIzMFwiKTp2b2lkIDA7aWYobnVsbD09YSlyZXR1cm4gYjtpZihBcnJheS5pc0FycmF5KGEpKXtpZihBcnJheS5pc0FycmF5KGIpKXJldHVybiBhLnB1c2guYXBwbHkoYSxiKSxhO2EucHVzaChiKTtyZXR1cm4gYX1yZXR1cm4gQXJyYXkuaXNBcnJheShiKT9bYV0uY29uY2F0KGIpOlthLGJdfVxuZnVuY3Rpb24gemEoYSxiLGMpe0FycmF5LmlzQXJyYXkoYSk/YS5mb3JFYWNoKGIsYyk6YSYmYi5jYWxsKGMsYSl9dmFyIEFhPW51bGw7ZnVuY3Rpb24gQmEoYSxiKXtpZihhKXt2YXIgYz1hLl9kaXNwYXRjaExpc3RlbmVycyxkPWEuX2Rpc3BhdGNoSW5zdGFuY2VzO2lmKEFycmF5LmlzQXJyYXkoYykpZm9yKHZhciBlPTA7ZTxjLmxlbmd0aCYmIWEuaXNQcm9wYWdhdGlvblN0b3BwZWQoKTtlKyspeGEoYSxiLGNbZV0sZFtlXSk7ZWxzZSBjJiZ4YShhLGIsYyxkKTthLl9kaXNwYXRjaExpc3RlbmVycz1udWxsO2EuX2Rpc3BhdGNoSW5zdGFuY2VzPW51bGw7YS5pc1BlcnNpc3RlbnQoKXx8YS5jb25zdHJ1Y3Rvci5yZWxlYXNlKGEpfX1mdW5jdGlvbiBDYShhKXtyZXR1cm4gQmEoYSwhMCl9ZnVuY3Rpb24gRGEoYSl7cmV0dXJuIEJhKGEsITEpfVxudmFyIEVhPXtpbmplY3RFdmVudFBsdWdpbk9yZGVyOmZ1bmN0aW9uKGEpe21hP3QoXCIxMDFcIik6dm9pZCAwO21hPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGEpO29hKCl9LGluamVjdEV2ZW50UGx1Z2luc0J5TmFtZTpmdW5jdGlvbihhKXt2YXIgYj0hMSxjO2ZvcihjIGluIGEpaWYoYS5oYXNPd25Qcm9wZXJ0eShjKSl7dmFyIGQ9YVtjXTtuYS5oYXNPd25Qcm9wZXJ0eShjKSYmbmFbY109PT1kfHwobmFbY10/dChcIjEwMlwiLGMpOnZvaWQgMCxuYVtjXT1kLGI9ITApfWImJm9hKCl9fTtcbmZ1bmN0aW9uIEZhKGEsYil7dmFyIGM9YS5zdGF0ZU5vZGU7aWYoIWMpcmV0dXJuIG51bGw7dmFyIGQ9dWEoYyk7aWYoIWQpcmV0dXJuIG51bGw7Yz1kW2JdO2E6c3dpdGNoKGIpe2Nhc2UgXCJvbkNsaWNrXCI6Y2FzZSBcIm9uQ2xpY2tDYXB0dXJlXCI6Y2FzZSBcIm9uRG91YmxlQ2xpY2tcIjpjYXNlIFwib25Eb3VibGVDbGlja0NhcHR1cmVcIjpjYXNlIFwib25Nb3VzZURvd25cIjpjYXNlIFwib25Nb3VzZURvd25DYXB0dXJlXCI6Y2FzZSBcIm9uTW91c2VNb3ZlXCI6Y2FzZSBcIm9uTW91c2VNb3ZlQ2FwdHVyZVwiOmNhc2UgXCJvbk1vdXNlVXBcIjpjYXNlIFwib25Nb3VzZVVwQ2FwdHVyZVwiOihkPSFkLmRpc2FibGVkKXx8KGE9YS50eXBlLGQ9IShcImJ1dHRvblwiPT09YXx8XCJpbnB1dFwiPT09YXx8XCJzZWxlY3RcIj09PWF8fFwidGV4dGFyZWFcIj09PWEpKTthPSFkO2JyZWFrIGE7ZGVmYXVsdDphPSExfWlmKGEpcmV0dXJuIG51bGw7YyYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGM/dChcIjIzMVwiLGIsdHlwZW9mIGMpOnZvaWQgMDtcbnJldHVybiBjfWZ1bmN0aW9uIEdhKGEsYil7bnVsbCE9PWEmJihBYT15YShBYSxhKSk7YT1BYTtBYT1udWxsO2lmKGEmJihiP3phKGEsQ2EpOnphKGEsRGEpLEFhP3QoXCI5NVwiKTp2b2lkIDAsaGEpKXRocm93IGI9aWEsaGE9ITEsaWE9bnVsbCxiO312YXIgSGE9TWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMiksSWE9XCJfX3JlYWN0SW50ZXJuYWxJbnN0YW5jZSRcIitIYSxKYT1cIl9fcmVhY3RFdmVudEhhbmRsZXJzJFwiK0hhO2Z1bmN0aW9uIEthKGEpe2lmKGFbSWFdKXJldHVybiBhW0lhXTtmb3IoOyFhW0lhXTspaWYoYS5wYXJlbnROb2RlKWE9YS5wYXJlbnROb2RlO2Vsc2UgcmV0dXJuIG51bGw7YT1hW0lhXTtyZXR1cm4gNz09PWEudGFnfHw4PT09YS50YWc/YTpudWxsfWZ1bmN0aW9uIExhKGEpe2E9YVtJYV07cmV0dXJuIWF8fDchPT1hLnRhZyYmOCE9PWEudGFnP251bGw6YX1cbmZ1bmN0aW9uIE1hKGEpe2lmKDc9PT1hLnRhZ3x8OD09PWEudGFnKXJldHVybiBhLnN0YXRlTm9kZTt0KFwiMzNcIil9ZnVuY3Rpb24gTmEoYSl7cmV0dXJuIGFbSmFdfHxudWxsfWZ1bmN0aW9uIE9hKGEpe2RvIGE9YS5yZXR1cm47d2hpbGUoYSYmNyE9PWEudGFnKTtyZXR1cm4gYT9hOm51bGx9ZnVuY3Rpb24gUGEoYSxiLGMpe2lmKGI9RmEoYSxjLmRpc3BhdGNoQ29uZmlnLnBoYXNlZFJlZ2lzdHJhdGlvbk5hbWVzW2JdKSljLl9kaXNwYXRjaExpc3RlbmVycz15YShjLl9kaXNwYXRjaExpc3RlbmVycyxiKSxjLl9kaXNwYXRjaEluc3RhbmNlcz15YShjLl9kaXNwYXRjaEluc3RhbmNlcyxhKX1cbmZ1bmN0aW9uIFFhKGEpe2lmKGEmJmEuZGlzcGF0Y2hDb25maWcucGhhc2VkUmVnaXN0cmF0aW9uTmFtZXMpe2Zvcih2YXIgYj1hLl90YXJnZXRJbnN0LGM9W107YjspYy5wdXNoKGIpLGI9T2EoYik7Zm9yKGI9Yy5sZW5ndGg7MDxiLS07KVBhKGNbYl0sXCJjYXB0dXJlZFwiLGEpO2ZvcihiPTA7YjxjLmxlbmd0aDtiKyspUGEoY1tiXSxcImJ1YmJsZWRcIixhKX19ZnVuY3Rpb24gUmEoYSxiLGMpe2EmJmMmJmMuZGlzcGF0Y2hDb25maWcucmVnaXN0cmF0aW9uTmFtZSYmKGI9RmEoYSxjLmRpc3BhdGNoQ29uZmlnLnJlZ2lzdHJhdGlvbk5hbWUpKSYmKGMuX2Rpc3BhdGNoTGlzdGVuZXJzPXlhKGMuX2Rpc3BhdGNoTGlzdGVuZXJzLGIpLGMuX2Rpc3BhdGNoSW5zdGFuY2VzPXlhKGMuX2Rpc3BhdGNoSW5zdGFuY2VzLGEpKX1mdW5jdGlvbiBUYShhKXthJiZhLmRpc3BhdGNoQ29uZmlnLnJlZ2lzdHJhdGlvbk5hbWUmJlJhKGEuX3RhcmdldEluc3QsbnVsbCxhKX1cbmZ1bmN0aW9uIFVhKGEpe3phKGEsUWEpfXZhciBWYT0hKFwidW5kZWZpbmVkXCI9PT10eXBlb2Ygd2luZG93fHwhd2luZG93LmRvY3VtZW50fHwhd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO2Z1bmN0aW9uIFdhKGEsYil7dmFyIGM9e307Y1thLnRvTG93ZXJDYXNlKCldPWIudG9Mb3dlckNhc2UoKTtjW1wiV2Via2l0XCIrYV09XCJ3ZWJraXRcIitiO2NbXCJNb3pcIithXT1cIm1velwiK2I7cmV0dXJuIGN9dmFyIFlhPXthbmltYXRpb25lbmQ6V2EoXCJBbmltYXRpb25cIixcIkFuaW1hdGlvbkVuZFwiKSxhbmltYXRpb25pdGVyYXRpb246V2EoXCJBbmltYXRpb25cIixcIkFuaW1hdGlvbkl0ZXJhdGlvblwiKSxhbmltYXRpb25zdGFydDpXYShcIkFuaW1hdGlvblwiLFwiQW5pbWF0aW9uU3RhcnRcIiksdHJhbnNpdGlvbmVuZDpXYShcIlRyYW5zaXRpb25cIixcIlRyYW5zaXRpb25FbmRcIil9LFphPXt9LCRhPXt9O1xuVmEmJigkYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLnN0eWxlLFwiQW5pbWF0aW9uRXZlbnRcImluIHdpbmRvd3x8KGRlbGV0ZSBZYS5hbmltYXRpb25lbmQuYW5pbWF0aW9uLGRlbGV0ZSBZYS5hbmltYXRpb25pdGVyYXRpb24uYW5pbWF0aW9uLGRlbGV0ZSBZYS5hbmltYXRpb25zdGFydC5hbmltYXRpb24pLFwiVHJhbnNpdGlvbkV2ZW50XCJpbiB3aW5kb3d8fGRlbGV0ZSBZYS50cmFuc2l0aW9uZW5kLnRyYW5zaXRpb24pO2Z1bmN0aW9uIGFiKGEpe2lmKFphW2FdKXJldHVybiBaYVthXTtpZighWWFbYV0pcmV0dXJuIGE7dmFyIGI9WWFbYV0sYztmb3IoYyBpbiBiKWlmKGIuaGFzT3duUHJvcGVydHkoYykmJmMgaW4gJGEpcmV0dXJuIFphW2FdPWJbY107cmV0dXJuIGF9XG52YXIgYmI9YWIoXCJhbmltYXRpb25lbmRcIiksY2I9YWIoXCJhbmltYXRpb25pdGVyYXRpb25cIiksZGI9YWIoXCJhbmltYXRpb25zdGFydFwiKSxlYj1hYihcInRyYW5zaXRpb25lbmRcIiksZmI9XCJhYm9ydCBjYW5wbGF5IGNhbnBsYXl0aHJvdWdoIGR1cmF0aW9uY2hhbmdlIGVtcHRpZWQgZW5jcnlwdGVkIGVuZGVkIGVycm9yIGxvYWRlZGRhdGEgbG9hZGVkbWV0YWRhdGEgbG9hZHN0YXJ0IHBhdXNlIHBsYXkgcGxheWluZyBwcm9ncmVzcyByYXRlY2hhbmdlIHNlZWtlZCBzZWVraW5nIHN0YWxsZWQgc3VzcGVuZCB0aW1ldXBkYXRlIHZvbHVtZWNoYW5nZSB3YWl0aW5nXCIuc3BsaXQoXCIgXCIpLGdiPW51bGwsaGI9bnVsbCxpYj1udWxsO1xuZnVuY3Rpb24gamIoKXtpZihpYilyZXR1cm4gaWI7dmFyIGEsYj1oYixjPWIubGVuZ3RoLGQsZT1cInZhbHVlXCJpbiBnYj9nYi52YWx1ZTpnYi50ZXh0Q29udGVudCxmPWUubGVuZ3RoO2ZvcihhPTA7YTxjJiZiW2FdPT09ZVthXTthKyspO3ZhciBnPWMtYTtmb3IoZD0xO2Q8PWcmJmJbYy1kXT09PWVbZi1kXTtkKyspO3JldHVybiBpYj1lLnNsaWNlKGEsMTxkPzEtZDp2b2lkIDApfWZ1bmN0aW9uIGtiKCl7cmV0dXJuITB9ZnVuY3Rpb24gbGIoKXtyZXR1cm4hMX1cbmZ1bmN0aW9uIHooYSxiLGMsZCl7dGhpcy5kaXNwYXRjaENvbmZpZz1hO3RoaXMuX3RhcmdldEluc3Q9Yjt0aGlzLm5hdGl2ZUV2ZW50PWM7YT10aGlzLmNvbnN0cnVjdG9yLkludGVyZmFjZTtmb3IodmFyIGUgaW4gYSlhLmhhc093blByb3BlcnR5KGUpJiYoKGI9YVtlXSk/dGhpc1tlXT1iKGMpOlwidGFyZ2V0XCI9PT1lP3RoaXMudGFyZ2V0PWQ6dGhpc1tlXT1jW2VdKTt0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD0obnVsbCE9Yy5kZWZhdWx0UHJldmVudGVkP2MuZGVmYXVsdFByZXZlbnRlZDohMT09PWMucmV0dXJuVmFsdWUpP2tiOmxiO3RoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQ9bGI7cmV0dXJuIHRoaXN9XG5uKHoucHJvdG90eXBlLHtwcmV2ZW50RGVmYXVsdDpmdW5jdGlvbigpe3RoaXMuZGVmYXVsdFByZXZlbnRlZD0hMDt2YXIgYT10aGlzLm5hdGl2ZUV2ZW50O2EmJihhLnByZXZlbnREZWZhdWx0P2EucHJldmVudERlZmF1bHQoKTpcInVua25vd25cIiE9PXR5cGVvZiBhLnJldHVyblZhbHVlJiYoYS5yZXR1cm5WYWx1ZT0hMSksdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9a2IpfSxzdG9wUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm5hdGl2ZUV2ZW50O2EmJihhLnN0b3BQcm9wYWdhdGlvbj9hLnN0b3BQcm9wYWdhdGlvbigpOlwidW5rbm93blwiIT09dHlwZW9mIGEuY2FuY2VsQnViYmxlJiYoYS5jYW5jZWxCdWJibGU9ITApLHRoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQ9a2IpfSxwZXJzaXN0OmZ1bmN0aW9uKCl7dGhpcy5pc1BlcnNpc3RlbnQ9a2J9LGlzUGVyc2lzdGVudDpsYixkZXN0cnVjdG9yOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5jb25zdHJ1Y3Rvci5JbnRlcmZhY2UsXG5iO2ZvcihiIGluIGEpdGhpc1tiXT1udWxsO3RoaXMubmF0aXZlRXZlbnQ9dGhpcy5fdGFyZ2V0SW5zdD10aGlzLmRpc3BhdGNoQ29uZmlnPW51bGw7dGhpcy5pc1Byb3BhZ2F0aW9uU3RvcHBlZD10aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1sYjt0aGlzLl9kaXNwYXRjaEluc3RhbmNlcz10aGlzLl9kaXNwYXRjaExpc3RlbmVycz1udWxsfX0pO3ouSW50ZXJmYWNlPXt0eXBlOm51bGwsdGFyZ2V0Om51bGwsY3VycmVudFRhcmdldDpmdW5jdGlvbigpe3JldHVybiBudWxsfSxldmVudFBoYXNlOm51bGwsYnViYmxlczpudWxsLGNhbmNlbGFibGU6bnVsbCx0aW1lU3RhbXA6ZnVuY3Rpb24oYSl7cmV0dXJuIGEudGltZVN0YW1wfHxEYXRlLm5vdygpfSxkZWZhdWx0UHJldmVudGVkOm51bGwsaXNUcnVzdGVkOm51bGx9O1xuei5leHRlbmQ9ZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYigpe31mdW5jdGlvbiBjKCl7cmV0dXJuIGQuYXBwbHkodGhpcyxhcmd1bWVudHMpfXZhciBkPXRoaXM7Yi5wcm90b3R5cGU9ZC5wcm90b3R5cGU7dmFyIGU9bmV3IGI7bihlLGMucHJvdG90eXBlKTtjLnByb3RvdHlwZT1lO2MucHJvdG90eXBlLmNvbnN0cnVjdG9yPWM7Yy5JbnRlcmZhY2U9bih7fSxkLkludGVyZmFjZSxhKTtjLmV4dGVuZD1kLmV4dGVuZDttYihjKTtyZXR1cm4gY307bWIoeik7ZnVuY3Rpb24gbmIoYSxiLGMsZCl7aWYodGhpcy5ldmVudFBvb2wubGVuZ3RoKXt2YXIgZT10aGlzLmV2ZW50UG9vbC5wb3AoKTt0aGlzLmNhbGwoZSxhLGIsYyxkKTtyZXR1cm4gZX1yZXR1cm4gbmV3IHRoaXMoYSxiLGMsZCl9ZnVuY3Rpb24gb2IoYSl7YSBpbnN0YW5jZW9mIHRoaXM/dm9pZCAwOnQoXCIyNzlcIik7YS5kZXN0cnVjdG9yKCk7MTA+dGhpcy5ldmVudFBvb2wubGVuZ3RoJiZ0aGlzLmV2ZW50UG9vbC5wdXNoKGEpfVxuZnVuY3Rpb24gbWIoYSl7YS5ldmVudFBvb2w9W107YS5nZXRQb29sZWQ9bmI7YS5yZWxlYXNlPW9ifXZhciBwYj16LmV4dGVuZCh7ZGF0YTpudWxsfSkscWI9ei5leHRlbmQoe2RhdGE6bnVsbH0pLHJiPVs5LDEzLDI3LDMyXSxzYj1WYSYmXCJDb21wb3NpdGlvbkV2ZW50XCJpbiB3aW5kb3csdGI9bnVsbDtWYSYmXCJkb2N1bWVudE1vZGVcImluIGRvY3VtZW50JiYodGI9ZG9jdW1lbnQuZG9jdW1lbnRNb2RlKTtcbnZhciB1Yj1WYSYmXCJUZXh0RXZlbnRcImluIHdpbmRvdyYmIXRiLHZiPVZhJiYoIXNifHx0YiYmODx0YiYmMTE+PXRiKSx3Yj1TdHJpbmcuZnJvbUNoYXJDb2RlKDMyKSx4Yj17YmVmb3JlSW5wdXQ6e3BoYXNlZFJlZ2lzdHJhdGlvbk5hbWVzOntidWJibGVkOlwib25CZWZvcmVJbnB1dFwiLGNhcHR1cmVkOlwib25CZWZvcmVJbnB1dENhcHR1cmVcIn0sZGVwZW5kZW5jaWVzOltcImNvbXBvc2l0aW9uZW5kXCIsXCJrZXlwcmVzc1wiLFwidGV4dElucHV0XCIsXCJwYXN0ZVwiXX0sY29tcG9zaXRpb25FbmQ6e3BoYXNlZFJlZ2lzdHJhdGlvbk5hbWVzOntidWJibGVkOlwib25Db21wb3NpdGlvbkVuZFwiLGNhcHR1cmVkOlwib25Db21wb3NpdGlvbkVuZENhcHR1cmVcIn0sZGVwZW5kZW5jaWVzOlwiYmx1ciBjb21wb3NpdGlvbmVuZCBrZXlkb3duIGtleXByZXNzIGtleXVwIG1vdXNlZG93blwiLnNwbGl0KFwiIFwiKX0sY29tcG9zaXRpb25TdGFydDp7cGhhc2VkUmVnaXN0cmF0aW9uTmFtZXM6e2J1YmJsZWQ6XCJvbkNvbXBvc2l0aW9uU3RhcnRcIixcbmNhcHR1cmVkOlwib25Db21wb3NpdGlvblN0YXJ0Q2FwdHVyZVwifSxkZXBlbmRlbmNpZXM6XCJibHVyIGNvbXBvc2l0aW9uc3RhcnQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBtb3VzZWRvd25cIi5zcGxpdChcIiBcIil9LGNvbXBvc2l0aW9uVXBkYXRlOntwaGFzZWRSZWdpc3RyYXRpb25OYW1lczp7YnViYmxlZDpcIm9uQ29tcG9zaXRpb25VcGRhdGVcIixjYXB0dXJlZDpcIm9uQ29tcG9zaXRpb25VcGRhdGVDYXB0dXJlXCJ9LGRlcGVuZGVuY2llczpcImJsdXIgY29tcG9zaXRpb251cGRhdGUga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBtb3VzZWRvd25cIi5zcGxpdChcIiBcIil9fSx5Yj0hMTtcbmZ1bmN0aW9uIHpiKGEsYil7c3dpdGNoKGEpe2Nhc2UgXCJrZXl1cFwiOnJldHVybi0xIT09cmIuaW5kZXhPZihiLmtleUNvZGUpO2Nhc2UgXCJrZXlkb3duXCI6cmV0dXJuIDIyOSE9PWIua2V5Q29kZTtjYXNlIFwia2V5cHJlc3NcIjpjYXNlIFwibW91c2Vkb3duXCI6Y2FzZSBcImJsdXJcIjpyZXR1cm4hMDtkZWZhdWx0OnJldHVybiExfX1mdW5jdGlvbiBBYihhKXthPWEuZGV0YWlsO3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmXCJkYXRhXCJpbiBhP2EuZGF0YTpudWxsfXZhciBCYj0hMTtmdW5jdGlvbiBDYihhLGIpe3N3aXRjaChhKXtjYXNlIFwiY29tcG9zaXRpb25lbmRcIjpyZXR1cm4gQWIoYik7Y2FzZSBcImtleXByZXNzXCI6aWYoMzIhPT1iLndoaWNoKXJldHVybiBudWxsO3liPSEwO3JldHVybiB3YjtjYXNlIFwidGV4dElucHV0XCI6cmV0dXJuIGE9Yi5kYXRhLGE9PT13YiYmeWI/bnVsbDphO2RlZmF1bHQ6cmV0dXJuIG51bGx9fVxuZnVuY3Rpb24gRGIoYSxiKXtpZihCYilyZXR1cm5cImNvbXBvc2l0aW9uZW5kXCI9PT1hfHwhc2ImJnpiKGEsYik/KGE9amIoKSxpYj1oYj1nYj1udWxsLEJiPSExLGEpOm51bGw7c3dpdGNoKGEpe2Nhc2UgXCJwYXN0ZVwiOnJldHVybiBudWxsO2Nhc2UgXCJrZXlwcmVzc1wiOmlmKCEoYi5jdHJsS2V5fHxiLmFsdEtleXx8Yi5tZXRhS2V5KXx8Yi5jdHJsS2V5JiZiLmFsdEtleSl7aWYoYi5jaGFyJiYxPGIuY2hhci5sZW5ndGgpcmV0dXJuIGIuY2hhcjtpZihiLndoaWNoKXJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGIud2hpY2gpfXJldHVybiBudWxsO2Nhc2UgXCJjb21wb3NpdGlvbmVuZFwiOnJldHVybiB2YiYmXCJrb1wiIT09Yi5sb2NhbGU/bnVsbDpiLmRhdGE7ZGVmYXVsdDpyZXR1cm4gbnVsbH19XG52YXIgRWI9e2V2ZW50VHlwZXM6eGIsZXh0cmFjdEV2ZW50czpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZT12b2lkIDA7dmFyIGY9dm9pZCAwO2lmKHNiKWI6e3N3aXRjaChhKXtjYXNlIFwiY29tcG9zaXRpb25zdGFydFwiOmU9eGIuY29tcG9zaXRpb25TdGFydDticmVhayBiO2Nhc2UgXCJjb21wb3NpdGlvbmVuZFwiOmU9eGIuY29tcG9zaXRpb25FbmQ7YnJlYWsgYjtjYXNlIFwiY29tcG9zaXRpb251cGRhdGVcIjplPXhiLmNvbXBvc2l0aW9uVXBkYXRlO2JyZWFrIGJ9ZT12b2lkIDB9ZWxzZSBCYj96YihhLGMpJiYoZT14Yi5jb21wb3NpdGlvbkVuZCk6XCJrZXlkb3duXCI9PT1hJiYyMjk9PT1jLmtleUNvZGUmJihlPXhiLmNvbXBvc2l0aW9uU3RhcnQpO2U/KHZiJiZcImtvXCIhPT1jLmxvY2FsZSYmKEJifHxlIT09eGIuY29tcG9zaXRpb25TdGFydD9lPT09eGIuY29tcG9zaXRpb25FbmQmJkJiJiYoZj1qYigpKTooZ2I9ZCxoYj1cInZhbHVlXCJpbiBnYj9nYi52YWx1ZTpnYi50ZXh0Q29udGVudCxCYj1cbiEwKSksZT1wYi5nZXRQb29sZWQoZSxiLGMsZCksZj9lLmRhdGE9ZjooZj1BYihjKSxudWxsIT09ZiYmKGUuZGF0YT1mKSksVWEoZSksZj1lKTpmPW51bGw7KGE9dWI/Q2IoYSxjKTpEYihhLGMpKT8oYj1xYi5nZXRQb29sZWQoeGIuYmVmb3JlSW5wdXQsYixjLGQpLGIuZGF0YT1hLFVhKGIpKTpiPW51bGw7cmV0dXJuIG51bGw9PT1mP2I6bnVsbD09PWI/ZjpbZixiXX19LEZiPW51bGwsR2I9bnVsbCxIYj1udWxsO2Z1bmN0aW9uIEliKGEpe2lmKGE9dmEoYSkpe1wiZnVuY3Rpb25cIiE9PXR5cGVvZiBGYj90KFwiMjgwXCIpOnZvaWQgMDt2YXIgYj11YShhLnN0YXRlTm9kZSk7RmIoYS5zdGF0ZU5vZGUsYS50eXBlLGIpfX1mdW5jdGlvbiBKYihhKXtHYj9IYj9IYi5wdXNoKGEpOkhiPVthXTpHYj1hfWZ1bmN0aW9uIEtiKCl7aWYoR2Ipe3ZhciBhPUdiLGI9SGI7SGI9R2I9bnVsbDtJYihhKTtpZihiKWZvcihhPTA7YTxiLmxlbmd0aDthKyspSWIoYlthXSl9fVxuZnVuY3Rpb24gTGIoYSxiKXtyZXR1cm4gYShiKX1mdW5jdGlvbiBNYihhLGIsYyl7cmV0dXJuIGEoYixjKX1mdW5jdGlvbiBOYigpe312YXIgT2I9ITE7ZnVuY3Rpb24gUGIoYSxiKXtpZihPYilyZXR1cm4gYShiKTtPYj0hMDt0cnl7cmV0dXJuIExiKGEsYil9ZmluYWxseXtpZihPYj0hMSxudWxsIT09R2J8fG51bGwhPT1IYilOYigpLEtiKCl9fXZhciBRYj17Y29sb3I6ITAsZGF0ZTohMCxkYXRldGltZTohMCxcImRhdGV0aW1lLWxvY2FsXCI6ITAsZW1haWw6ITAsbW9udGg6ITAsbnVtYmVyOiEwLHBhc3N3b3JkOiEwLHJhbmdlOiEwLHNlYXJjaDohMCx0ZWw6ITAsdGV4dDohMCx0aW1lOiEwLHVybDohMCx3ZWVrOiEwfTtmdW5jdGlvbiBSYihhKXt2YXIgYj1hJiZhLm5vZGVOYW1lJiZhLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09Yj8hIVFiW2EudHlwZV06XCJ0ZXh0YXJlYVwiPT09Yj8hMDohMX1cbmZ1bmN0aW9uIFNiKGEpe2E9YS50YXJnZXR8fGEuc3JjRWxlbWVudHx8d2luZG93O2EuY29ycmVzcG9uZGluZ1VzZUVsZW1lbnQmJihhPWEuY29ycmVzcG9uZGluZ1VzZUVsZW1lbnQpO3JldHVybiAzPT09YS5ub2RlVHlwZT9hLnBhcmVudE5vZGU6YX1mdW5jdGlvbiBUYihhKXtpZighVmEpcmV0dXJuITE7YT1cIm9uXCIrYTt2YXIgYj1hIGluIGRvY3VtZW50O2J8fChiPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksYi5zZXRBdHRyaWJ1dGUoYSxcInJldHVybjtcIiksYj1cImZ1bmN0aW9uXCI9PT10eXBlb2YgYlthXSk7cmV0dXJuIGJ9ZnVuY3Rpb24gVWIoYSl7dmFyIGI9YS50eXBlO3JldHVybihhPWEubm9kZU5hbWUpJiZcImlucHV0XCI9PT1hLnRvTG93ZXJDYXNlKCkmJihcImNoZWNrYm94XCI9PT1ifHxcInJhZGlvXCI9PT1iKX1cbmZ1bmN0aW9uIFZiKGEpe3ZhciBiPVViKGEpP1wiY2hlY2tlZFwiOlwidmFsdWVcIixjPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUsYiksZD1cIlwiK2FbYl07aWYoIWEuaGFzT3duUHJvcGVydHkoYikmJlwidW5kZWZpbmVkXCIhPT10eXBlb2YgYyYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGMuZ2V0JiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgYy5zZXQpe3ZhciBlPWMuZ2V0LGY9Yy5zZXQ7T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsYix7Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBlLmNhbGwodGhpcyl9LHNldDpmdW5jdGlvbihhKXtkPVwiXCIrYTtmLmNhbGwodGhpcyxhKX19KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxiLHtlbnVtZXJhYmxlOmMuZW51bWVyYWJsZX0pO3JldHVybntnZXRWYWx1ZTpmdW5jdGlvbigpe3JldHVybiBkfSxzZXRWYWx1ZTpmdW5jdGlvbihhKXtkPVwiXCIrYX0sc3RvcFRyYWNraW5nOmZ1bmN0aW9uKCl7YS5fdmFsdWVUcmFja2VyPVxubnVsbDtkZWxldGUgYVtiXX19fX1mdW5jdGlvbiBXYihhKXthLl92YWx1ZVRyYWNrZXJ8fChhLl92YWx1ZVRyYWNrZXI9VmIoYSkpfWZ1bmN0aW9uIFhiKGEpe2lmKCFhKXJldHVybiExO3ZhciBiPWEuX3ZhbHVlVHJhY2tlcjtpZighYilyZXR1cm4hMDt2YXIgYz1iLmdldFZhbHVlKCk7dmFyIGQ9XCJcIjthJiYoZD1VYihhKT9hLmNoZWNrZWQ/XCJ0cnVlXCI6XCJmYWxzZVwiOmEudmFsdWUpO2E9ZDtyZXR1cm4gYSE9PWM/KGIuc2V0VmFsdWUoYSksITApOiExfVxudmFyIFliPWFhLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVELFpiPS9eKC4qKVtcXFxcXFwvXS8sQz1cImZ1bmN0aW9uXCI9PT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yLCRiPUM/U3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIik6NjAxMDMsYWM9Qz9TeW1ib2wuZm9yKFwicmVhY3QucG9ydGFsXCIpOjYwMTA2LGJjPUM/U3ltYm9sLmZvcihcInJlYWN0LmZyYWdtZW50XCIpOjYwMTA3LGNjPUM/U3ltYm9sLmZvcihcInJlYWN0LnN0cmljdF9tb2RlXCIpOjYwMTA4LGRjPUM/U3ltYm9sLmZvcihcInJlYWN0LnByb2ZpbGVyXCIpOjYwMTE0LGVjPUM/U3ltYm9sLmZvcihcInJlYWN0LnByb3ZpZGVyXCIpOjYwMTA5LGZjPUM/U3ltYm9sLmZvcihcInJlYWN0LmNvbnRleHRcIik6NjAxMTAsZ2M9Qz9TeW1ib2wuZm9yKFwicmVhY3QuYXN5bmNfbW9kZVwiKTo2MDExMSxoYz1DP1N5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKTo2MDExMixpYz1DP1N5bWJvbC5mb3IoXCJyZWFjdC5wbGFjZWhvbGRlclwiKTpcbjYwMTEzLGpjPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5pdGVyYXRvcjtmdW5jdGlvbiBrYyhhKXtpZihudWxsPT09YXx8XCJvYmplY3RcIiE9PXR5cGVvZiBhKXJldHVybiBudWxsO2E9amMmJmFbamNdfHxhW1wiQEBpdGVyYXRvclwiXTtyZXR1cm5cImZ1bmN0aW9uXCI9PT10eXBlb2YgYT9hOm51bGx9XG5mdW5jdGlvbiBsYyhhKXtpZihudWxsPT1hKXJldHVybiBudWxsO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhKXJldHVybiBhLmRpc3BsYXlOYW1lfHxhLm5hbWV8fG51bGw7aWYoXCJzdHJpbmdcIj09PXR5cGVvZiBhKXJldHVybiBhO3N3aXRjaChhKXtjYXNlIGdjOnJldHVyblwiQXN5bmNNb2RlXCI7Y2FzZSBiYzpyZXR1cm5cIkZyYWdtZW50XCI7Y2FzZSBhYzpyZXR1cm5cIlBvcnRhbFwiO2Nhc2UgZGM6cmV0dXJuXCJQcm9maWxlclwiO2Nhc2UgY2M6cmV0dXJuXCJTdHJpY3RNb2RlXCI7Y2FzZSBpYzpyZXR1cm5cIlBsYWNlaG9sZGVyXCJ9aWYoXCJvYmplY3RcIj09PXR5cGVvZiBhKXtzd2l0Y2goYS4kJHR5cGVvZil7Y2FzZSBmYzpyZXR1cm5cIkNvbnRleHQuQ29uc3VtZXJcIjtjYXNlIGVjOnJldHVyblwiQ29udGV4dC5Qcm92aWRlclwiO2Nhc2UgaGM6dmFyIGI9YS5yZW5kZXI7Yj1iLmRpc3BsYXlOYW1lfHxiLm5hbWV8fFwiXCI7cmV0dXJuIGEuZGlzcGxheU5hbWV8fChcIlwiIT09Yj9cIkZvcndhcmRSZWYoXCIrYitcIilcIjpcblwiRm9yd2FyZFJlZlwiKX1pZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYS50aGVuJiYoYT0xPT09YS5fcmVhY3RTdGF0dXM/YS5fcmVhY3RSZXN1bHQ6bnVsbCkpcmV0dXJuIGxjKGEpfXJldHVybiBudWxsfWZ1bmN0aW9uIG1jKGEpe3ZhciBiPVwiXCI7ZG97YTpzd2l0Y2goYS50YWcpe2Nhc2UgNDpjYXNlIDA6Y2FzZSAxOmNhc2UgMjpjYXNlIDM6Y2FzZSA3OmNhc2UgMTA6dmFyIGM9YS5fZGVidWdPd25lcixkPWEuX2RlYnVnU291cmNlLGU9bGMoYS50eXBlKTt2YXIgZj1udWxsO2MmJihmPWxjKGMudHlwZSkpO2M9ZTtlPVwiXCI7ZD9lPVwiIChhdCBcIitkLmZpbGVOYW1lLnJlcGxhY2UoWmIsXCJcIikrXCI6XCIrZC5saW5lTnVtYmVyK1wiKVwiOmYmJihlPVwiIChjcmVhdGVkIGJ5IFwiK2YrXCIpXCIpO2Y9XCJcXG4gICAgaW4gXCIrKGN8fFwiVW5rbm93blwiKStlO2JyZWFrIGE7ZGVmYXVsdDpmPVwiXCJ9Yis9ZjthPWEucmV0dXJufXdoaWxlKGEpO3JldHVybiBifVxudmFyIG5jPS9eWzpBLVpfYS16XFx1MDBDMC1cXHUwMEQ2XFx1MDBEOC1cXHUwMEY2XFx1MDBGOC1cXHUwMkZGXFx1MDM3MC1cXHUwMzdEXFx1MDM3Ri1cXHUxRkZGXFx1MjAwQy1cXHUyMDBEXFx1MjA3MC1cXHUyMThGXFx1MkMwMC1cXHUyRkVGXFx1MzAwMS1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkZEXVs6QS1aX2EtelxcdTAwQzAtXFx1MDBENlxcdTAwRDgtXFx1MDBGNlxcdTAwRjgtXFx1MDJGRlxcdTAzNzAtXFx1MDM3RFxcdTAzN0YtXFx1MUZGRlxcdTIwMEMtXFx1MjAwRFxcdTIwNzAtXFx1MjE4RlxcdTJDMDAtXFx1MkZFRlxcdTMwMDEtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZGRFxcLS4wLTlcXHUwMEI3XFx1MDMwMC1cXHUwMzZGXFx1MjAzRi1cXHUyMDQwXSokLyxwYz1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LHFjPXt9LHJjPXt9O1xuZnVuY3Rpb24gc2MoYSl7aWYocGMuY2FsbChyYyxhKSlyZXR1cm4hMDtpZihwYy5jYWxsKHFjLGEpKXJldHVybiExO2lmKG5jLnRlc3QoYSkpcmV0dXJuIHJjW2FdPSEwO3FjW2FdPSEwO3JldHVybiExfWZ1bmN0aW9uIHRjKGEsYixjLGQpe2lmKG51bGwhPT1jJiYwPT09Yy50eXBlKXJldHVybiExO3N3aXRjaCh0eXBlb2YgYil7Y2FzZSBcImZ1bmN0aW9uXCI6Y2FzZSBcInN5bWJvbFwiOnJldHVybiEwO2Nhc2UgXCJib29sZWFuXCI6aWYoZClyZXR1cm4hMTtpZihudWxsIT09YylyZXR1cm4hYy5hY2NlcHRzQm9vbGVhbnM7YT1hLnRvTG93ZXJDYXNlKCkuc2xpY2UoMCw1KTtyZXR1cm5cImRhdGEtXCIhPT1hJiZcImFyaWEtXCIhPT1hO2RlZmF1bHQ6cmV0dXJuITF9fVxuZnVuY3Rpb24gdWMoYSxiLGMsZCl7aWYobnVsbD09PWJ8fFwidW5kZWZpbmVkXCI9PT10eXBlb2YgYnx8dGMoYSxiLGMsZCkpcmV0dXJuITA7aWYoZClyZXR1cm4hMTtpZihudWxsIT09Yylzd2l0Y2goYy50eXBlKXtjYXNlIDM6cmV0dXJuIWI7Y2FzZSA0OnJldHVybiExPT09YjtjYXNlIDU6cmV0dXJuIGlzTmFOKGIpO2Nhc2UgNjpyZXR1cm4gaXNOYU4oYil8fDE+Yn1yZXR1cm4hMX1mdW5jdGlvbiBEKGEsYixjLGQsZSl7dGhpcy5hY2NlcHRzQm9vbGVhbnM9Mj09PWJ8fDM9PT1ifHw0PT09Yjt0aGlzLmF0dHJpYnV0ZU5hbWU9ZDt0aGlzLmF0dHJpYnV0ZU5hbWVzcGFjZT1lO3RoaXMubXVzdFVzZVByb3BlcnR5PWM7dGhpcy5wcm9wZXJ0eU5hbWU9YTt0aGlzLnR5cGU9Yn12YXIgRT17fTtcblwiY2hpbGRyZW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgZGVmYXVsdFZhbHVlIGRlZmF1bHRDaGVja2VkIGlubmVySFRNTCBzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmcgc3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nIHN0eWxlXCIuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24oYSl7RVthXT1uZXcgRChhLDAsITEsYSxudWxsKX0pO1tbXCJhY2NlcHRDaGFyc2V0XCIsXCJhY2NlcHQtY2hhcnNldFwiXSxbXCJjbGFzc05hbWVcIixcImNsYXNzXCJdLFtcImh0bWxGb3JcIixcImZvclwiXSxbXCJodHRwRXF1aXZcIixcImh0dHAtZXF1aXZcIl1dLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGI9YVswXTtFW2JdPW5ldyBEKGIsMSwhMSxhWzFdLG51bGwpfSk7W1wiY29udGVudEVkaXRhYmxlXCIsXCJkcmFnZ2FibGVcIixcInNwZWxsQ2hlY2tcIixcInZhbHVlXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RVthXT1uZXcgRChhLDIsITEsYS50b0xvd2VyQ2FzZSgpLG51bGwpfSk7XG5bXCJhdXRvUmV2ZXJzZVwiLFwiZXh0ZXJuYWxSZXNvdXJjZXNSZXF1aXJlZFwiLFwiZm9jdXNhYmxlXCIsXCJwcmVzZXJ2ZUFscGhhXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RVthXT1uZXcgRChhLDIsITEsYSxudWxsKX0pO1wiYWxsb3dGdWxsU2NyZWVuIGFzeW5jIGF1dG9Gb2N1cyBhdXRvUGxheSBjb250cm9scyBkZWZhdWx0IGRlZmVyIGRpc2FibGVkIGZvcm1Ob1ZhbGlkYXRlIGhpZGRlbiBsb29wIG5vTW9kdWxlIG5vVmFsaWRhdGUgb3BlbiBwbGF5c0lubGluZSByZWFkT25seSByZXF1aXJlZCByZXZlcnNlZCBzY29wZWQgc2VhbWxlc3MgaXRlbVNjb3BlXCIuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24oYSl7RVthXT1uZXcgRChhLDMsITEsYS50b0xvd2VyQ2FzZSgpLG51bGwpfSk7W1wiY2hlY2tlZFwiLFwibXVsdGlwbGVcIixcIm11dGVkXCIsXCJzZWxlY3RlZFwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0VbYV09bmV3IEQoYSwzLCEwLGEsbnVsbCl9KTtcbltcImNhcHR1cmVcIixcImRvd25sb2FkXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RVthXT1uZXcgRChhLDQsITEsYSxudWxsKX0pO1tcImNvbHNcIixcInJvd3NcIixcInNpemVcIixcInNwYW5cIl0uZm9yRWFjaChmdW5jdGlvbihhKXtFW2FdPW5ldyBEKGEsNiwhMSxhLG51bGwpfSk7W1wicm93U3BhblwiLFwic3RhcnRcIl0uZm9yRWFjaChmdW5jdGlvbihhKXtFW2FdPW5ldyBEKGEsNSwhMSxhLnRvTG93ZXJDYXNlKCksbnVsbCl9KTt2YXIgdmM9L1tcXC06XShbYS16XSkvZztmdW5jdGlvbiB3YyhhKXtyZXR1cm4gYVsxXS50b1VwcGVyQ2FzZSgpfVxuXCJhY2NlbnQtaGVpZ2h0IGFsaWdubWVudC1iYXNlbGluZSBhcmFiaWMtZm9ybSBiYXNlbGluZS1zaGlmdCBjYXAtaGVpZ2h0IGNsaXAtcGF0aCBjbGlwLXJ1bGUgY29sb3ItaW50ZXJwb2xhdGlvbiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnMgY29sb3ItcHJvZmlsZSBjb2xvci1yZW5kZXJpbmcgZG9taW5hbnQtYmFzZWxpbmUgZW5hYmxlLWJhY2tncm91bmQgZmlsbC1vcGFjaXR5IGZpbGwtcnVsZSBmbG9vZC1jb2xvciBmbG9vZC1vcGFjaXR5IGZvbnQtZmFtaWx5IGZvbnQtc2l6ZSBmb250LXNpemUtYWRqdXN0IGZvbnQtc3RyZXRjaCBmb250LXN0eWxlIGZvbnQtdmFyaWFudCBmb250LXdlaWdodCBnbHlwaC1uYW1lIGdseXBoLW9yaWVudGF0aW9uLWhvcml6b250YWwgZ2x5cGgtb3JpZW50YXRpb24tdmVydGljYWwgaG9yaXotYWR2LXggaG9yaXotb3JpZ2luLXggaW1hZ2UtcmVuZGVyaW5nIGxldHRlci1zcGFjaW5nIGxpZ2h0aW5nLWNvbG9yIG1hcmtlci1lbmQgbWFya2VyLW1pZCBtYXJrZXItc3RhcnQgb3ZlcmxpbmUtcG9zaXRpb24gb3ZlcmxpbmUtdGhpY2tuZXNzIHBhaW50LW9yZGVyIHBhbm9zZS0xIHBvaW50ZXItZXZlbnRzIHJlbmRlcmluZy1pbnRlbnQgc2hhcGUtcmVuZGVyaW5nIHN0b3AtY29sb3Igc3RvcC1vcGFjaXR5IHN0cmlrZXRocm91Z2gtcG9zaXRpb24gc3RyaWtldGhyb3VnaC10aGlja25lc3Mgc3Ryb2tlLWRhc2hhcnJheSBzdHJva2UtZGFzaG9mZnNldCBzdHJva2UtbGluZWNhcCBzdHJva2UtbGluZWpvaW4gc3Ryb2tlLW1pdGVybGltaXQgc3Ryb2tlLW9wYWNpdHkgc3Ryb2tlLXdpZHRoIHRleHQtYW5jaG9yIHRleHQtZGVjb3JhdGlvbiB0ZXh0LXJlbmRlcmluZyB1bmRlcmxpbmUtcG9zaXRpb24gdW5kZXJsaW5lLXRoaWNrbmVzcyB1bmljb2RlLWJpZGkgdW5pY29kZS1yYW5nZSB1bml0cy1wZXItZW0gdi1hbHBoYWJldGljIHYtaGFuZ2luZyB2LWlkZW9ncmFwaGljIHYtbWF0aGVtYXRpY2FsIHZlY3Rvci1lZmZlY3QgdmVydC1hZHYteSB2ZXJ0LW9yaWdpbi14IHZlcnQtb3JpZ2luLXkgd29yZC1zcGFjaW5nIHdyaXRpbmctbW9kZSB4bWxuczp4bGluayB4LWhlaWdodFwiLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZSh2YyxcbndjKTtFW2JdPW5ldyBEKGIsMSwhMSxhLG51bGwpfSk7XCJ4bGluazphY3R1YXRlIHhsaW5rOmFyY3JvbGUgeGxpbms6aHJlZiB4bGluazpyb2xlIHhsaW5rOnNob3cgeGxpbms6dGl0bGUgeGxpbms6dHlwZVwiLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZSh2Yyx3Yyk7RVtiXT1uZXcgRChiLDEsITEsYSxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIil9KTtbXCJ4bWw6YmFzZVwiLFwieG1sOmxhbmdcIixcInhtbDpzcGFjZVwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZSh2Yyx3Yyk7RVtiXT1uZXcgRChiLDEsITEsYSxcImh0dHA6Ly93d3cudzMub3JnL1hNTC8xOTk4L25hbWVzcGFjZVwiKX0pO0UudGFiSW5kZXg9bmV3IEQoXCJ0YWJJbmRleFwiLDEsITEsXCJ0YWJpbmRleFwiLG51bGwpO1xuZnVuY3Rpb24geGMoYSxiLGMsZCl7dmFyIGU9RS5oYXNPd25Qcm9wZXJ0eShiKT9FW2JdOm51bGw7dmFyIGY9bnVsbCE9PWU/MD09PWUudHlwZTpkPyExOiEoMjxiLmxlbmd0aCl8fFwib1wiIT09YlswXSYmXCJPXCIhPT1iWzBdfHxcIm5cIiE9PWJbMV0mJlwiTlwiIT09YlsxXT8hMTohMDtmfHwodWMoYixjLGUsZCkmJihjPW51bGwpLGR8fG51bGw9PT1lP3NjKGIpJiYobnVsbD09PWM/YS5yZW1vdmVBdHRyaWJ1dGUoYik6YS5zZXRBdHRyaWJ1dGUoYixcIlwiK2MpKTplLm11c3RVc2VQcm9wZXJ0eT9hW2UucHJvcGVydHlOYW1lXT1udWxsPT09Yz8zPT09ZS50eXBlPyExOlwiXCI6YzooYj1lLmF0dHJpYnV0ZU5hbWUsZD1lLmF0dHJpYnV0ZU5hbWVzcGFjZSxudWxsPT09Yz9hLnJlbW92ZUF0dHJpYnV0ZShiKTooZT1lLnR5cGUsYz0zPT09ZXx8ND09PWUmJiEwPT09Yz9cIlwiOlwiXCIrYyxkP2Euc2V0QXR0cmlidXRlTlMoZCxiLGMpOmEuc2V0QXR0cmlidXRlKGIsYykpKSl9XG5mdW5jdGlvbiB5YyhhKXtzd2l0Y2godHlwZW9mIGEpe2Nhc2UgXCJib29sZWFuXCI6Y2FzZSBcIm51bWJlclwiOmNhc2UgXCJvYmplY3RcIjpjYXNlIFwic3RyaW5nXCI6Y2FzZSBcInVuZGVmaW5lZFwiOnJldHVybiBhO2RlZmF1bHQ6cmV0dXJuXCJcIn19ZnVuY3Rpb24gemMoYSxiKXt2YXIgYz1iLmNoZWNrZWQ7cmV0dXJuIG4oe30sYix7ZGVmYXVsdENoZWNrZWQ6dm9pZCAwLGRlZmF1bHRWYWx1ZTp2b2lkIDAsdmFsdWU6dm9pZCAwLGNoZWNrZWQ6bnVsbCE9Yz9jOmEuX3dyYXBwZXJTdGF0ZS5pbml0aWFsQ2hlY2tlZH0pfVxuZnVuY3Rpb24gQmMoYSxiKXt2YXIgYz1udWxsPT1iLmRlZmF1bHRWYWx1ZT9cIlwiOmIuZGVmYXVsdFZhbHVlLGQ9bnVsbCE9Yi5jaGVja2VkP2IuY2hlY2tlZDpiLmRlZmF1bHRDaGVja2VkO2M9eWMobnVsbCE9Yi52YWx1ZT9iLnZhbHVlOmMpO2EuX3dyYXBwZXJTdGF0ZT17aW5pdGlhbENoZWNrZWQ6ZCxpbml0aWFsVmFsdWU6Yyxjb250cm9sbGVkOlwiY2hlY2tib3hcIj09PWIudHlwZXx8XCJyYWRpb1wiPT09Yi50eXBlP251bGwhPWIuY2hlY2tlZDpudWxsIT1iLnZhbHVlfX1mdW5jdGlvbiBDYyhhLGIpe2I9Yi5jaGVja2VkO251bGwhPWImJnhjKGEsXCJjaGVja2VkXCIsYiwhMSl9XG5mdW5jdGlvbiBEYyhhLGIpe0NjKGEsYik7dmFyIGM9eWMoYi52YWx1ZSksZD1iLnR5cGU7aWYobnVsbCE9YylpZihcIm51bWJlclwiPT09ZCl7aWYoMD09PWMmJlwiXCI9PT1hLnZhbHVlfHxhLnZhbHVlIT1jKWEudmFsdWU9XCJcIitjfWVsc2UgYS52YWx1ZSE9PVwiXCIrYyYmKGEudmFsdWU9XCJcIitjKTtlbHNlIGlmKFwic3VibWl0XCI9PT1kfHxcInJlc2V0XCI9PT1kKXthLnJlbW92ZUF0dHJpYnV0ZShcInZhbHVlXCIpO3JldHVybn1iLmhhc093blByb3BlcnR5KFwidmFsdWVcIik/RWMoYSxiLnR5cGUsYyk6Yi5oYXNPd25Qcm9wZXJ0eShcImRlZmF1bHRWYWx1ZVwiKSYmRWMoYSxiLnR5cGUseWMoYi5kZWZhdWx0VmFsdWUpKTtudWxsPT1iLmNoZWNrZWQmJm51bGwhPWIuZGVmYXVsdENoZWNrZWQmJihhLmRlZmF1bHRDaGVja2VkPSEhYi5kZWZhdWx0Q2hlY2tlZCl9XG5mdW5jdGlvbiBGYyhhLGIsYyl7aWYoYi5oYXNPd25Qcm9wZXJ0eShcInZhbHVlXCIpfHxiLmhhc093blByb3BlcnR5KFwiZGVmYXVsdFZhbHVlXCIpKXt2YXIgZD1iLnR5cGU7aWYoIShcInN1Ym1pdFwiIT09ZCYmXCJyZXNldFwiIT09ZHx8dm9pZCAwIT09Yi52YWx1ZSYmbnVsbCE9PWIudmFsdWUpKXJldHVybjtiPVwiXCIrYS5fd3JhcHBlclN0YXRlLmluaXRpYWxWYWx1ZTtjfHxiPT09YS52YWx1ZXx8KGEudmFsdWU9Yik7YS5kZWZhdWx0VmFsdWU9Yn1jPWEubmFtZTtcIlwiIT09YyYmKGEubmFtZT1cIlwiKTthLmRlZmF1bHRDaGVja2VkPSFhLmRlZmF1bHRDaGVja2VkO2EuZGVmYXVsdENoZWNrZWQ9ISFhLl93cmFwcGVyU3RhdGUuaW5pdGlhbENoZWNrZWQ7XCJcIiE9PWMmJihhLm5hbWU9Yyl9XG5mdW5jdGlvbiBFYyhhLGIsYyl7aWYoXCJudW1iZXJcIiE9PWJ8fGEub3duZXJEb2N1bWVudC5hY3RpdmVFbGVtZW50IT09YSludWxsPT1jP2EuZGVmYXVsdFZhbHVlPVwiXCIrYS5fd3JhcHBlclN0YXRlLmluaXRpYWxWYWx1ZTphLmRlZmF1bHRWYWx1ZSE9PVwiXCIrYyYmKGEuZGVmYXVsdFZhbHVlPVwiXCIrYyl9dmFyIEdjPXtjaGFuZ2U6e3BoYXNlZFJlZ2lzdHJhdGlvbk5hbWVzOntidWJibGVkOlwib25DaGFuZ2VcIixjYXB0dXJlZDpcIm9uQ2hhbmdlQ2FwdHVyZVwifSxkZXBlbmRlbmNpZXM6XCJibHVyIGNoYW5nZSBjbGljayBmb2N1cyBpbnB1dCBrZXlkb3duIGtleXVwIHNlbGVjdGlvbmNoYW5nZVwiLnNwbGl0KFwiIFwiKX19O2Z1bmN0aW9uIEhjKGEsYixjKXthPXouZ2V0UG9vbGVkKEdjLmNoYW5nZSxhLGIsYyk7YS50eXBlPVwiY2hhbmdlXCI7SmIoYyk7VWEoYSk7cmV0dXJuIGF9dmFyIEljPW51bGwsSmM9bnVsbDtmdW5jdGlvbiBLYyhhKXtHYShhLCExKX1cbmZ1bmN0aW9uIExjKGEpe3ZhciBiPU1hKGEpO2lmKFhiKGIpKXJldHVybiBhfWZ1bmN0aW9uIE1jKGEsYil7aWYoXCJjaGFuZ2VcIj09PWEpcmV0dXJuIGJ9dmFyIE5jPSExO1ZhJiYoTmM9VGIoXCJpbnB1dFwiKSYmKCFkb2N1bWVudC5kb2N1bWVudE1vZGV8fDk8ZG9jdW1lbnQuZG9jdW1lbnRNb2RlKSk7ZnVuY3Rpb24gT2MoKXtJYyYmKEljLmRldGFjaEV2ZW50KFwib25wcm9wZXJ0eWNoYW5nZVwiLFBjKSxKYz1JYz1udWxsKX1mdW5jdGlvbiBQYyhhKXtcInZhbHVlXCI9PT1hLnByb3BlcnR5TmFtZSYmTGMoSmMpJiYoYT1IYyhKYyxhLFNiKGEpKSxQYihLYyxhKSl9ZnVuY3Rpb24gUWMoYSxiLGMpe1wiZm9jdXNcIj09PWE/KE9jKCksSWM9YixKYz1jLEljLmF0dGFjaEV2ZW50KFwib25wcm9wZXJ0eWNoYW5nZVwiLFBjKSk6XCJibHVyXCI9PT1hJiZPYygpfWZ1bmN0aW9uIFJjKGEpe2lmKFwic2VsZWN0aW9uY2hhbmdlXCI9PT1hfHxcImtleXVwXCI9PT1hfHxcImtleWRvd25cIj09PWEpcmV0dXJuIExjKEpjKX1cbmZ1bmN0aW9uIFNjKGEsYil7aWYoXCJjbGlja1wiPT09YSlyZXR1cm4gTGMoYil9ZnVuY3Rpb24gVGMoYSxiKXtpZihcImlucHV0XCI9PT1hfHxcImNoYW5nZVwiPT09YSlyZXR1cm4gTGMoYil9XG52YXIgVWM9e2V2ZW50VHlwZXM6R2MsX2lzSW5wdXRFdmVudFN1cHBvcnRlZDpOYyxleHRyYWN0RXZlbnRzOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPWI/TWEoYik6d2luZG93LGY9dm9pZCAwLGc9dm9pZCAwLGg9ZS5ub2RlTmFtZSYmZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1wic2VsZWN0XCI9PT1ofHxcImlucHV0XCI9PT1oJiZcImZpbGVcIj09PWUudHlwZT9mPU1jOlJiKGUpP05jP2Y9VGM6KGY9UmMsZz1RYyk6KGg9ZS5ub2RlTmFtZSkmJlwiaW5wdXRcIj09PWgudG9Mb3dlckNhc2UoKSYmKFwiY2hlY2tib3hcIj09PWUudHlwZXx8XCJyYWRpb1wiPT09ZS50eXBlKSYmKGY9U2MpO2lmKGYmJihmPWYoYSxiKSkpcmV0dXJuIEhjKGYsYyxkKTtnJiZnKGEsZSxiKTtcImJsdXJcIj09PWEmJihhPWUuX3dyYXBwZXJTdGF0ZSkmJmEuY29udHJvbGxlZCYmXCJudW1iZXJcIj09PWUudHlwZSYmRWMoZSxcIm51bWJlclwiLGUudmFsdWUpfX0sVmM9ei5leHRlbmQoe3ZpZXc6bnVsbCxkZXRhaWw6bnVsbH0pLFdjPXtBbHQ6XCJhbHRLZXlcIixcbkNvbnRyb2w6XCJjdHJsS2V5XCIsTWV0YTpcIm1ldGFLZXlcIixTaGlmdDpcInNoaWZ0S2V5XCJ9O2Z1bmN0aW9uIFhjKGEpe3ZhciBiPXRoaXMubmF0aXZlRXZlbnQ7cmV0dXJuIGIuZ2V0TW9kaWZpZXJTdGF0ZT9iLmdldE1vZGlmaWVyU3RhdGUoYSk6KGE9V2NbYV0pPyEhYlthXTohMX1mdW5jdGlvbiBZYygpe3JldHVybiBYY31cbnZhciBaYz0wLCRjPTAsYWQ9ITEsYmQ9ITEsY2Q9VmMuZXh0ZW5kKHtzY3JlZW5YOm51bGwsc2NyZWVuWTpudWxsLGNsaWVudFg6bnVsbCxjbGllbnRZOm51bGwscGFnZVg6bnVsbCxwYWdlWTpudWxsLGN0cmxLZXk6bnVsbCxzaGlmdEtleTpudWxsLGFsdEtleTpudWxsLG1ldGFLZXk6bnVsbCxnZXRNb2RpZmllclN0YXRlOlljLGJ1dHRvbjpudWxsLGJ1dHRvbnM6bnVsbCxyZWxhdGVkVGFyZ2V0OmZ1bmN0aW9uKGEpe3JldHVybiBhLnJlbGF0ZWRUYXJnZXR8fChhLmZyb21FbGVtZW50PT09YS5zcmNFbGVtZW50P2EudG9FbGVtZW50OmEuZnJvbUVsZW1lbnQpfSxtb3ZlbWVudFg6ZnVuY3Rpb24oYSl7aWYoXCJtb3ZlbWVudFhcImluIGEpcmV0dXJuIGEubW92ZW1lbnRYO3ZhciBiPVpjO1pjPWEuc2NyZWVuWDtyZXR1cm4gYWQ/XCJtb3VzZW1vdmVcIj09PWEudHlwZT9hLnNjcmVlblgtYjowOihhZD0hMCwwKX0sbW92ZW1lbnRZOmZ1bmN0aW9uKGEpe2lmKFwibW92ZW1lbnRZXCJpbiBhKXJldHVybiBhLm1vdmVtZW50WTtcbnZhciBiPSRjOyRjPWEuc2NyZWVuWTtyZXR1cm4gYmQ/XCJtb3VzZW1vdmVcIj09PWEudHlwZT9hLnNjcmVlblktYjowOihiZD0hMCwwKX19KSxkZD1jZC5leHRlbmQoe3BvaW50ZXJJZDpudWxsLHdpZHRoOm51bGwsaGVpZ2h0Om51bGwscHJlc3N1cmU6bnVsbCx0YW5nZW50aWFsUHJlc3N1cmU6bnVsbCx0aWx0WDpudWxsLHRpbHRZOm51bGwsdHdpc3Q6bnVsbCxwb2ludGVyVHlwZTpudWxsLGlzUHJpbWFyeTpudWxsfSksZWQ9e21vdXNlRW50ZXI6e3JlZ2lzdHJhdGlvbk5hbWU6XCJvbk1vdXNlRW50ZXJcIixkZXBlbmRlbmNpZXM6W1wibW91c2VvdXRcIixcIm1vdXNlb3ZlclwiXX0sbW91c2VMZWF2ZTp7cmVnaXN0cmF0aW9uTmFtZTpcIm9uTW91c2VMZWF2ZVwiLGRlcGVuZGVuY2llczpbXCJtb3VzZW91dFwiLFwibW91c2VvdmVyXCJdfSxwb2ludGVyRW50ZXI6e3JlZ2lzdHJhdGlvbk5hbWU6XCJvblBvaW50ZXJFbnRlclwiLGRlcGVuZGVuY2llczpbXCJwb2ludGVyb3V0XCIsXCJwb2ludGVyb3ZlclwiXX0scG9pbnRlckxlYXZlOntyZWdpc3RyYXRpb25OYW1lOlwib25Qb2ludGVyTGVhdmVcIixcbmRlcGVuZGVuY2llczpbXCJwb2ludGVyb3V0XCIsXCJwb2ludGVyb3ZlclwiXX19LGZkPXtldmVudFR5cGVzOmVkLGV4dHJhY3RFdmVudHM6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9XCJtb3VzZW92ZXJcIj09PWF8fFwicG9pbnRlcm92ZXJcIj09PWEsZj1cIm1vdXNlb3V0XCI9PT1hfHxcInBvaW50ZXJvdXRcIj09PWE7aWYoZSYmKGMucmVsYXRlZFRhcmdldHx8Yy5mcm9tRWxlbWVudCl8fCFmJiYhZSlyZXR1cm4gbnVsbDtlPWQud2luZG93PT09ZD9kOihlPWQub3duZXJEb2N1bWVudCk/ZS5kZWZhdWx0Vmlld3x8ZS5wYXJlbnRXaW5kb3c6d2luZG93O2Y/KGY9YixiPShiPWMucmVsYXRlZFRhcmdldHx8Yy50b0VsZW1lbnQpP0thKGIpOm51bGwpOmY9bnVsbDtpZihmPT09YilyZXR1cm4gbnVsbDt2YXIgZz12b2lkIDAsaD12b2lkIDAsaz12b2lkIDAsbD12b2lkIDA7aWYoXCJtb3VzZW91dFwiPT09YXx8XCJtb3VzZW92ZXJcIj09PWEpZz1jZCxoPWVkLm1vdXNlTGVhdmUsaz1lZC5tb3VzZUVudGVyLGw9XCJtb3VzZVwiO1xuZWxzZSBpZihcInBvaW50ZXJvdXRcIj09PWF8fFwicG9pbnRlcm92ZXJcIj09PWEpZz1kZCxoPWVkLnBvaW50ZXJMZWF2ZSxrPWVkLnBvaW50ZXJFbnRlcixsPVwicG9pbnRlclwiO3ZhciBtPW51bGw9PWY/ZTpNYShmKTtlPW51bGw9PWI/ZTpNYShiKTthPWcuZ2V0UG9vbGVkKGgsZixjLGQpO2EudHlwZT1sK1wibGVhdmVcIjthLnRhcmdldD1tO2EucmVsYXRlZFRhcmdldD1lO2M9Zy5nZXRQb29sZWQoayxiLGMsZCk7Yy50eXBlPWwrXCJlbnRlclwiO2MudGFyZ2V0PWU7Yy5yZWxhdGVkVGFyZ2V0PW07ZD1iO2lmKGYmJmQpYTp7Yj1mO2U9ZDtsPTA7Zm9yKGc9YjtnO2c9T2EoZykpbCsrO2c9MDtmb3Ioaz1lO2s7az1PYShrKSlnKys7Zm9yKDswPGwtZzspYj1PYShiKSxsLS07Zm9yKDswPGctbDspZT1PYShlKSxnLS07Zm9yKDtsLS07KXtpZihiPT09ZXx8Yj09PWUuYWx0ZXJuYXRlKWJyZWFrIGE7Yj1PYShiKTtlPU9hKGUpfWI9bnVsbH1lbHNlIGI9bnVsbDtlPWI7Zm9yKGI9W107ZiYmZiE9PWU7KXtsPVxuZi5hbHRlcm5hdGU7aWYobnVsbCE9PWwmJmw9PT1lKWJyZWFrO2IucHVzaChmKTtmPU9hKGYpfWZvcihmPVtdO2QmJmQhPT1lOyl7bD1kLmFsdGVybmF0ZTtpZihudWxsIT09bCYmbD09PWUpYnJlYWs7Zi5wdXNoKGQpO2Q9T2EoZCl9Zm9yKGQ9MDtkPGIubGVuZ3RoO2QrKylSYShiW2RdLFwiYnViYmxlZFwiLGEpO2ZvcihkPWYubGVuZ3RoOzA8ZC0tOylSYShmW2RdLFwiY2FwdHVyZWRcIixjKTtyZXR1cm5bYSxjXX19LGdkPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7ZnVuY3Rpb24gaGQoYSxiKXtyZXR1cm4gYT09PWI/MCE9PWF8fDAhPT1ifHwxL2E9PT0xL2I6YSE9PWEmJmIhPT1ifVxuZnVuY3Rpb24gaWQoYSxiKXtpZihoZChhLGIpKXJldHVybiEwO2lmKFwib2JqZWN0XCIhPT10eXBlb2YgYXx8bnVsbD09PWF8fFwib2JqZWN0XCIhPT10eXBlb2YgYnx8bnVsbD09PWIpcmV0dXJuITE7dmFyIGM9T2JqZWN0LmtleXMoYSksZD1PYmplY3Qua2V5cyhiKTtpZihjLmxlbmd0aCE9PWQubGVuZ3RoKXJldHVybiExO2ZvcihkPTA7ZDxjLmxlbmd0aDtkKyspaWYoIWdkLmNhbGwoYixjW2RdKXx8IWhkKGFbY1tkXV0sYltjW2RdXSkpcmV0dXJuITE7cmV0dXJuITB9ZnVuY3Rpb24gamQoYSl7dmFyIGI9YTtpZihhLmFsdGVybmF0ZSlmb3IoO2IucmV0dXJuOyliPWIucmV0dXJuO2Vsc2V7aWYoMCE9PShiLmVmZmVjdFRhZyYyKSlyZXR1cm4gMTtmb3IoO2IucmV0dXJuOylpZihiPWIucmV0dXJuLDAhPT0oYi5lZmZlY3RUYWcmMikpcmV0dXJuIDF9cmV0dXJuIDU9PT1iLnRhZz8yOjN9ZnVuY3Rpb24ga2QoYSl7MiE9PWpkKGEpP3QoXCIxODhcIik6dm9pZCAwfVxuZnVuY3Rpb24gbGQoYSl7dmFyIGI9YS5hbHRlcm5hdGU7aWYoIWIpcmV0dXJuIGI9amQoYSksMz09PWI/dChcIjE4OFwiKTp2b2lkIDAsMT09PWI/bnVsbDphO2Zvcih2YXIgYz1hLGQ9Yjs7KXt2YXIgZT1jLnJldHVybixmPWU/ZS5hbHRlcm5hdGU6bnVsbDtpZighZXx8IWYpYnJlYWs7aWYoZS5jaGlsZD09PWYuY2hpbGQpe2Zvcih2YXIgZz1lLmNoaWxkO2c7KXtpZihnPT09YylyZXR1cm4ga2QoZSksYTtpZihnPT09ZClyZXR1cm4ga2QoZSksYjtnPWcuc2libGluZ310KFwiMTg4XCIpfWlmKGMucmV0dXJuIT09ZC5yZXR1cm4pYz1lLGQ9ZjtlbHNle2c9ITE7Zm9yKHZhciBoPWUuY2hpbGQ7aDspe2lmKGg9PT1jKXtnPSEwO2M9ZTtkPWY7YnJlYWt9aWYoaD09PWQpe2c9ITA7ZD1lO2M9ZjticmVha31oPWguc2libGluZ31pZighZyl7Zm9yKGg9Zi5jaGlsZDtoOyl7aWYoaD09PWMpe2c9ITA7Yz1mO2Q9ZTticmVha31pZihoPT09ZCl7Zz0hMDtkPWY7Yz1lO2JyZWFrfWg9aC5zaWJsaW5nfWc/XG52b2lkIDA6dChcIjE4OVwiKX19Yy5hbHRlcm5hdGUhPT1kP3QoXCIxOTBcIik6dm9pZCAwfTUhPT1jLnRhZz90KFwiMTg4XCIpOnZvaWQgMDtyZXR1cm4gYy5zdGF0ZU5vZGUuY3VycmVudD09PWM/YTpifWZ1bmN0aW9uIG1kKGEpe2E9bGQoYSk7aWYoIWEpcmV0dXJuIG51bGw7Zm9yKHZhciBiPWE7Oyl7aWYoNz09PWIudGFnfHw4PT09Yi50YWcpcmV0dXJuIGI7aWYoYi5jaGlsZCliLmNoaWxkLnJldHVybj1iLGI9Yi5jaGlsZDtlbHNle2lmKGI9PT1hKWJyZWFrO2Zvcig7IWIuc2libGluZzspe2lmKCFiLnJldHVybnx8Yi5yZXR1cm49PT1hKXJldHVybiBudWxsO2I9Yi5yZXR1cm59Yi5zaWJsaW5nLnJldHVybj1iLnJldHVybjtiPWIuc2libGluZ319cmV0dXJuIG51bGx9XG52YXIgbmQ9ei5leHRlbmQoe2FuaW1hdGlvbk5hbWU6bnVsbCxlbGFwc2VkVGltZTpudWxsLHBzZXVkb0VsZW1lbnQ6bnVsbH0pLG9kPXouZXh0ZW5kKHtjbGlwYm9hcmREYXRhOmZ1bmN0aW9uKGEpe3JldHVyblwiY2xpcGJvYXJkRGF0YVwiaW4gYT9hLmNsaXBib2FyZERhdGE6d2luZG93LmNsaXBib2FyZERhdGF9fSkscGQ9VmMuZXh0ZW5kKHtyZWxhdGVkVGFyZ2V0Om51bGx9KTtmdW5jdGlvbiBxZChhKXt2YXIgYj1hLmtleUNvZGU7XCJjaGFyQ29kZVwiaW4gYT8oYT1hLmNoYXJDb2RlLDA9PT1hJiYxMz09PWImJihhPTEzKSk6YT1iOzEwPT09YSYmKGE9MTMpO3JldHVybiAzMjw9YXx8MTM9PT1hP2E6MH1cbnZhciByZD17RXNjOlwiRXNjYXBlXCIsU3BhY2ViYXI6XCIgXCIsTGVmdDpcIkFycm93TGVmdFwiLFVwOlwiQXJyb3dVcFwiLFJpZ2h0OlwiQXJyb3dSaWdodFwiLERvd246XCJBcnJvd0Rvd25cIixEZWw6XCJEZWxldGVcIixXaW46XCJPU1wiLE1lbnU6XCJDb250ZXh0TWVudVwiLEFwcHM6XCJDb250ZXh0TWVudVwiLFNjcm9sbDpcIlNjcm9sbExvY2tcIixNb3pQcmludGFibGVLZXk6XCJVbmlkZW50aWZpZWRcIn0sc2Q9ezg6XCJCYWNrc3BhY2VcIiw5OlwiVGFiXCIsMTI6XCJDbGVhclwiLDEzOlwiRW50ZXJcIiwxNjpcIlNoaWZ0XCIsMTc6XCJDb250cm9sXCIsMTg6XCJBbHRcIiwxOTpcIlBhdXNlXCIsMjA6XCJDYXBzTG9ja1wiLDI3OlwiRXNjYXBlXCIsMzI6XCIgXCIsMzM6XCJQYWdlVXBcIiwzNDpcIlBhZ2VEb3duXCIsMzU6XCJFbmRcIiwzNjpcIkhvbWVcIiwzNzpcIkFycm93TGVmdFwiLDM4OlwiQXJyb3dVcFwiLDM5OlwiQXJyb3dSaWdodFwiLDQwOlwiQXJyb3dEb3duXCIsNDU6XCJJbnNlcnRcIiw0NjpcIkRlbGV0ZVwiLDExMjpcIkYxXCIsMTEzOlwiRjJcIiwxMTQ6XCJGM1wiLDExNTpcIkY0XCIsXG4xMTY6XCJGNVwiLDExNzpcIkY2XCIsMTE4OlwiRjdcIiwxMTk6XCJGOFwiLDEyMDpcIkY5XCIsMTIxOlwiRjEwXCIsMTIyOlwiRjExXCIsMTIzOlwiRjEyXCIsMTQ0OlwiTnVtTG9ja1wiLDE0NTpcIlNjcm9sbExvY2tcIiwyMjQ6XCJNZXRhXCJ9LHRkPVZjLmV4dGVuZCh7a2V5OmZ1bmN0aW9uKGEpe2lmKGEua2V5KXt2YXIgYj1yZFthLmtleV18fGEua2V5O2lmKFwiVW5pZGVudGlmaWVkXCIhPT1iKXJldHVybiBifXJldHVyblwia2V5cHJlc3NcIj09PWEudHlwZT8oYT1xZChhKSwxMz09PWE/XCJFbnRlclwiOlN0cmluZy5mcm9tQ2hhckNvZGUoYSkpOlwia2V5ZG93blwiPT09YS50eXBlfHxcImtleXVwXCI9PT1hLnR5cGU/c2RbYS5rZXlDb2RlXXx8XCJVbmlkZW50aWZpZWRcIjpcIlwifSxsb2NhdGlvbjpudWxsLGN0cmxLZXk6bnVsbCxzaGlmdEtleTpudWxsLGFsdEtleTpudWxsLG1ldGFLZXk6bnVsbCxyZXBlYXQ6bnVsbCxsb2NhbGU6bnVsbCxnZXRNb2RpZmllclN0YXRlOlljLGNoYXJDb2RlOmZ1bmN0aW9uKGEpe3JldHVyblwia2V5cHJlc3NcIj09PVxuYS50eXBlP3FkKGEpOjB9LGtleUNvZGU6ZnVuY3Rpb24oYSl7cmV0dXJuXCJrZXlkb3duXCI9PT1hLnR5cGV8fFwia2V5dXBcIj09PWEudHlwZT9hLmtleUNvZGU6MH0sd2hpY2g6ZnVuY3Rpb24oYSl7cmV0dXJuXCJrZXlwcmVzc1wiPT09YS50eXBlP3FkKGEpOlwia2V5ZG93blwiPT09YS50eXBlfHxcImtleXVwXCI9PT1hLnR5cGU/YS5rZXlDb2RlOjB9fSksdWQ9Y2QuZXh0ZW5kKHtkYXRhVHJhbnNmZXI6bnVsbH0pLHZkPVZjLmV4dGVuZCh7dG91Y2hlczpudWxsLHRhcmdldFRvdWNoZXM6bnVsbCxjaGFuZ2VkVG91Y2hlczpudWxsLGFsdEtleTpudWxsLG1ldGFLZXk6bnVsbCxjdHJsS2V5Om51bGwsc2hpZnRLZXk6bnVsbCxnZXRNb2RpZmllclN0YXRlOlljfSksd2Q9ei5leHRlbmQoe3Byb3BlcnR5TmFtZTpudWxsLGVsYXBzZWRUaW1lOm51bGwscHNldWRvRWxlbWVudDpudWxsfSkseGQ9Y2QuZXh0ZW5kKHtkZWx0YVg6ZnVuY3Rpb24oYSl7cmV0dXJuXCJkZWx0YVhcImluIGE/YS5kZWx0YVg6XCJ3aGVlbERlbHRhWFwiaW5cbmE/LWEud2hlZWxEZWx0YVg6MH0sZGVsdGFZOmZ1bmN0aW9uKGEpe3JldHVyblwiZGVsdGFZXCJpbiBhP2EuZGVsdGFZOlwid2hlZWxEZWx0YVlcImluIGE/LWEud2hlZWxEZWx0YVk6XCJ3aGVlbERlbHRhXCJpbiBhPy1hLndoZWVsRGVsdGE6MH0sZGVsdGFaOm51bGwsZGVsdGFNb2RlOm51bGx9KSx5ZD1bW1wiYWJvcnRcIixcImFib3J0XCJdLFtiYixcImFuaW1hdGlvbkVuZFwiXSxbY2IsXCJhbmltYXRpb25JdGVyYXRpb25cIl0sW2RiLFwiYW5pbWF0aW9uU3RhcnRcIl0sW1wiY2FucGxheVwiLFwiY2FuUGxheVwiXSxbXCJjYW5wbGF5dGhyb3VnaFwiLFwiY2FuUGxheVRocm91Z2hcIl0sW1wiZHJhZ1wiLFwiZHJhZ1wiXSxbXCJkcmFnZW50ZXJcIixcImRyYWdFbnRlclwiXSxbXCJkcmFnZXhpdFwiLFwiZHJhZ0V4aXRcIl0sW1wiZHJhZ2xlYXZlXCIsXCJkcmFnTGVhdmVcIl0sW1wiZHJhZ292ZXJcIixcImRyYWdPdmVyXCJdLFtcImR1cmF0aW9uY2hhbmdlXCIsXCJkdXJhdGlvbkNoYW5nZVwiXSxbXCJlbXB0aWVkXCIsXCJlbXB0aWVkXCJdLFtcImVuY3J5cHRlZFwiLFwiZW5jcnlwdGVkXCJdLFxuW1wiZW5kZWRcIixcImVuZGVkXCJdLFtcImVycm9yXCIsXCJlcnJvclwiXSxbXCJnb3Rwb2ludGVyY2FwdHVyZVwiLFwiZ290UG9pbnRlckNhcHR1cmVcIl0sW1wibG9hZFwiLFwibG9hZFwiXSxbXCJsb2FkZWRkYXRhXCIsXCJsb2FkZWREYXRhXCJdLFtcImxvYWRlZG1ldGFkYXRhXCIsXCJsb2FkZWRNZXRhZGF0YVwiXSxbXCJsb2Fkc3RhcnRcIixcImxvYWRTdGFydFwiXSxbXCJsb3N0cG9pbnRlcmNhcHR1cmVcIixcImxvc3RQb2ludGVyQ2FwdHVyZVwiXSxbXCJtb3VzZW1vdmVcIixcIm1vdXNlTW92ZVwiXSxbXCJtb3VzZW91dFwiLFwibW91c2VPdXRcIl0sW1wibW91c2VvdmVyXCIsXCJtb3VzZU92ZXJcIl0sW1wicGxheWluZ1wiLFwicGxheWluZ1wiXSxbXCJwb2ludGVybW92ZVwiLFwicG9pbnRlck1vdmVcIl0sW1wicG9pbnRlcm91dFwiLFwicG9pbnRlck91dFwiXSxbXCJwb2ludGVyb3ZlclwiLFwicG9pbnRlck92ZXJcIl0sW1wicHJvZ3Jlc3NcIixcInByb2dyZXNzXCJdLFtcInNjcm9sbFwiLFwic2Nyb2xsXCJdLFtcInNlZWtpbmdcIixcInNlZWtpbmdcIl0sW1wic3RhbGxlZFwiLFwic3RhbGxlZFwiXSxcbltcInN1c3BlbmRcIixcInN1c3BlbmRcIl0sW1widGltZXVwZGF0ZVwiLFwidGltZVVwZGF0ZVwiXSxbXCJ0b2dnbGVcIixcInRvZ2dsZVwiXSxbXCJ0b3VjaG1vdmVcIixcInRvdWNoTW92ZVwiXSxbZWIsXCJ0cmFuc2l0aW9uRW5kXCJdLFtcIndhaXRpbmdcIixcIndhaXRpbmdcIl0sW1wid2hlZWxcIixcIndoZWVsXCJdXSx6ZD17fSxBZD17fTtmdW5jdGlvbiBCZChhLGIpe3ZhciBjPWFbMF07YT1hWzFdO3ZhciBkPVwib25cIisoYVswXS50b1VwcGVyQ2FzZSgpK2Euc2xpY2UoMSkpO2I9e3BoYXNlZFJlZ2lzdHJhdGlvbk5hbWVzOntidWJibGVkOmQsY2FwdHVyZWQ6ZCtcIkNhcHR1cmVcIn0sZGVwZW5kZW5jaWVzOltjXSxpc0ludGVyYWN0aXZlOmJ9O3pkW2FdPWI7QWRbY109Yn1cbltbXCJibHVyXCIsXCJibHVyXCJdLFtcImNhbmNlbFwiLFwiY2FuY2VsXCJdLFtcImNsaWNrXCIsXCJjbGlja1wiXSxbXCJjbG9zZVwiLFwiY2xvc2VcIl0sW1wiY29udGV4dG1lbnVcIixcImNvbnRleHRNZW51XCJdLFtcImNvcHlcIixcImNvcHlcIl0sW1wiY3V0XCIsXCJjdXRcIl0sW1wiYXV4Y2xpY2tcIixcImF1eENsaWNrXCJdLFtcImRibGNsaWNrXCIsXCJkb3VibGVDbGlja1wiXSxbXCJkcmFnZW5kXCIsXCJkcmFnRW5kXCJdLFtcImRyYWdzdGFydFwiLFwiZHJhZ1N0YXJ0XCJdLFtcImRyb3BcIixcImRyb3BcIl0sW1wiZm9jdXNcIixcImZvY3VzXCJdLFtcImlucHV0XCIsXCJpbnB1dFwiXSxbXCJpbnZhbGlkXCIsXCJpbnZhbGlkXCJdLFtcImtleWRvd25cIixcImtleURvd25cIl0sW1wia2V5cHJlc3NcIixcImtleVByZXNzXCJdLFtcImtleXVwXCIsXCJrZXlVcFwiXSxbXCJtb3VzZWRvd25cIixcIm1vdXNlRG93blwiXSxbXCJtb3VzZXVwXCIsXCJtb3VzZVVwXCJdLFtcInBhc3RlXCIsXCJwYXN0ZVwiXSxbXCJwYXVzZVwiLFwicGF1c2VcIl0sW1wicGxheVwiLFwicGxheVwiXSxbXCJwb2ludGVyY2FuY2VsXCIsXCJwb2ludGVyQ2FuY2VsXCJdLFxuW1wicG9pbnRlcmRvd25cIixcInBvaW50ZXJEb3duXCJdLFtcInBvaW50ZXJ1cFwiLFwicG9pbnRlclVwXCJdLFtcInJhdGVjaGFuZ2VcIixcInJhdGVDaGFuZ2VcIl0sW1wicmVzZXRcIixcInJlc2V0XCJdLFtcInNlZWtlZFwiLFwic2Vla2VkXCJdLFtcInN1Ym1pdFwiLFwic3VibWl0XCJdLFtcInRvdWNoY2FuY2VsXCIsXCJ0b3VjaENhbmNlbFwiXSxbXCJ0b3VjaGVuZFwiLFwidG91Y2hFbmRcIl0sW1widG91Y2hzdGFydFwiLFwidG91Y2hTdGFydFwiXSxbXCJ2b2x1bWVjaGFuZ2VcIixcInZvbHVtZUNoYW5nZVwiXV0uZm9yRWFjaChmdW5jdGlvbihhKXtCZChhLCEwKX0pO3lkLmZvckVhY2goZnVuY3Rpb24oYSl7QmQoYSwhMSl9KTtcbnZhciBDZD17ZXZlbnRUeXBlczp6ZCxpc0ludGVyYWN0aXZlVG9wTGV2ZWxFdmVudFR5cGU6ZnVuY3Rpb24oYSl7YT1BZFthXTtyZXR1cm4gdm9pZCAwIT09YSYmITA9PT1hLmlzSW50ZXJhY3RpdmV9LGV4dHJhY3RFdmVudHM6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9QWRbYV07aWYoIWUpcmV0dXJuIG51bGw7c3dpdGNoKGEpe2Nhc2UgXCJrZXlwcmVzc1wiOmlmKDA9PT1xZChjKSlyZXR1cm4gbnVsbDtjYXNlIFwia2V5ZG93blwiOmNhc2UgXCJrZXl1cFwiOmE9dGQ7YnJlYWs7Y2FzZSBcImJsdXJcIjpjYXNlIFwiZm9jdXNcIjphPXBkO2JyZWFrO2Nhc2UgXCJjbGlja1wiOmlmKDI9PT1jLmJ1dHRvbilyZXR1cm4gbnVsbDtjYXNlIFwiYXV4Y2xpY2tcIjpjYXNlIFwiZGJsY2xpY2tcIjpjYXNlIFwibW91c2Vkb3duXCI6Y2FzZSBcIm1vdXNlbW92ZVwiOmNhc2UgXCJtb3VzZXVwXCI6Y2FzZSBcIm1vdXNlb3V0XCI6Y2FzZSBcIm1vdXNlb3ZlclwiOmNhc2UgXCJjb250ZXh0bWVudVwiOmE9Y2Q7YnJlYWs7Y2FzZSBcImRyYWdcIjpjYXNlIFwiZHJhZ2VuZFwiOmNhc2UgXCJkcmFnZW50ZXJcIjpjYXNlIFwiZHJhZ2V4aXRcIjpjYXNlIFwiZHJhZ2xlYXZlXCI6Y2FzZSBcImRyYWdvdmVyXCI6Y2FzZSBcImRyYWdzdGFydFwiOmNhc2UgXCJkcm9wXCI6YT1cbnVkO2JyZWFrO2Nhc2UgXCJ0b3VjaGNhbmNlbFwiOmNhc2UgXCJ0b3VjaGVuZFwiOmNhc2UgXCJ0b3VjaG1vdmVcIjpjYXNlIFwidG91Y2hzdGFydFwiOmE9dmQ7YnJlYWs7Y2FzZSBiYjpjYXNlIGNiOmNhc2UgZGI6YT1uZDticmVhaztjYXNlIGViOmE9d2Q7YnJlYWs7Y2FzZSBcInNjcm9sbFwiOmE9VmM7YnJlYWs7Y2FzZSBcIndoZWVsXCI6YT14ZDticmVhaztjYXNlIFwiY29weVwiOmNhc2UgXCJjdXRcIjpjYXNlIFwicGFzdGVcIjphPW9kO2JyZWFrO2Nhc2UgXCJnb3Rwb2ludGVyY2FwdHVyZVwiOmNhc2UgXCJsb3N0cG9pbnRlcmNhcHR1cmVcIjpjYXNlIFwicG9pbnRlcmNhbmNlbFwiOmNhc2UgXCJwb2ludGVyZG93blwiOmNhc2UgXCJwb2ludGVybW92ZVwiOmNhc2UgXCJwb2ludGVyb3V0XCI6Y2FzZSBcInBvaW50ZXJvdmVyXCI6Y2FzZSBcInBvaW50ZXJ1cFwiOmE9ZGQ7YnJlYWs7ZGVmYXVsdDphPXp9Yj1hLmdldFBvb2xlZChlLGIsYyxkKTtVYShiKTtyZXR1cm4gYn19LERkPUNkLmlzSW50ZXJhY3RpdmVUb3BMZXZlbEV2ZW50VHlwZSxcbkVkPVtdO2Z1bmN0aW9uIEZkKGEpe3ZhciBiPWEudGFyZ2V0SW5zdCxjPWI7ZG97aWYoIWMpe2EuYW5jZXN0b3JzLnB1c2goYyk7YnJlYWt9dmFyIGQ7Zm9yKGQ9YztkLnJldHVybjspZD1kLnJldHVybjtkPTUhPT1kLnRhZz9udWxsOmQuc3RhdGVOb2RlLmNvbnRhaW5lckluZm87aWYoIWQpYnJlYWs7YS5hbmNlc3RvcnMucHVzaChjKTtjPUthKGQpfXdoaWxlKGMpO2ZvcihjPTA7YzxhLmFuY2VzdG9ycy5sZW5ndGg7YysrKXtiPWEuYW5jZXN0b3JzW2NdO3ZhciBlPVNiKGEubmF0aXZlRXZlbnQpO2Q9YS50b3BMZXZlbFR5cGU7Zm9yKHZhciBmPWEubmF0aXZlRXZlbnQsZz1udWxsLGg9MDtoPHBhLmxlbmd0aDtoKyspe3ZhciBrPXBhW2hdO2smJihrPWsuZXh0cmFjdEV2ZW50cyhkLGIsZixlKSkmJihnPXlhKGcsaykpfUdhKGcsITEpfX12YXIgR2Q9ITA7XG5mdW5jdGlvbiBGKGEsYil7aWYoIWIpcmV0dXJuIG51bGw7dmFyIGM9KERkKGEpP0hkOklkKS5iaW5kKG51bGwsYSk7Yi5hZGRFdmVudExpc3RlbmVyKGEsYywhMSl9ZnVuY3Rpb24gSmQoYSxiKXtpZighYilyZXR1cm4gbnVsbDt2YXIgYz0oRGQoYSk/SGQ6SWQpLmJpbmQobnVsbCxhKTtiLmFkZEV2ZW50TGlzdGVuZXIoYSxjLCEwKX1mdW5jdGlvbiBIZChhLGIpe01iKElkLGEsYil9XG5mdW5jdGlvbiBJZChhLGIpe2lmKEdkKXt2YXIgYz1TYihiKTtjPUthKGMpO251bGw9PT1jfHxcIm51bWJlclwiIT09dHlwZW9mIGMudGFnfHwyPT09amQoYyl8fChjPW51bGwpO2lmKEVkLmxlbmd0aCl7dmFyIGQ9RWQucG9wKCk7ZC50b3BMZXZlbFR5cGU9YTtkLm5hdGl2ZUV2ZW50PWI7ZC50YXJnZXRJbnN0PWM7YT1kfWVsc2UgYT17dG9wTGV2ZWxUeXBlOmEsbmF0aXZlRXZlbnQ6Yix0YXJnZXRJbnN0OmMsYW5jZXN0b3JzOltdfTt0cnl7UGIoRmQsYSl9ZmluYWxseXthLnRvcExldmVsVHlwZT1udWxsLGEubmF0aXZlRXZlbnQ9bnVsbCxhLnRhcmdldEluc3Q9bnVsbCxhLmFuY2VzdG9ycy5sZW5ndGg9MCwxMD5FZC5sZW5ndGgmJkVkLnB1c2goYSl9fX12YXIgS2Q9e30sTGQ9MCxNZD1cIl9yZWFjdExpc3RlbmVyc0lEXCIrKFwiXCIrTWF0aC5yYW5kb20oKSkuc2xpY2UoMik7XG5mdW5jdGlvbiBOZChhKXtPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYSxNZCl8fChhW01kXT1MZCsrLEtkW2FbTWRdXT17fSk7cmV0dXJuIEtkW2FbTWRdXX1mdW5jdGlvbiBPZChhKXthPWF8fChcInVuZGVmaW5lZFwiIT09dHlwZW9mIGRvY3VtZW50P2RvY3VtZW50OnZvaWQgMCk7aWYoXCJ1bmRlZmluZWRcIj09PXR5cGVvZiBhKXJldHVybiBudWxsO3RyeXtyZXR1cm4gYS5hY3RpdmVFbGVtZW50fHxhLmJvZHl9Y2F0Y2goYil7cmV0dXJuIGEuYm9keX19ZnVuY3Rpb24gUWQoYSl7Zm9yKDthJiZhLmZpcnN0Q2hpbGQ7KWE9YS5maXJzdENoaWxkO3JldHVybiBhfVxuZnVuY3Rpb24gUmQoYSxiKXt2YXIgYz1RZChhKTthPTA7Zm9yKHZhciBkO2M7KXtpZigzPT09Yy5ub2RlVHlwZSl7ZD1hK2MudGV4dENvbnRlbnQubGVuZ3RoO2lmKGE8PWImJmQ+PWIpcmV0dXJue25vZGU6YyxvZmZzZXQ6Yi1hfTthPWR9YTp7Zm9yKDtjOyl7aWYoYy5uZXh0U2libGluZyl7Yz1jLm5leHRTaWJsaW5nO2JyZWFrIGF9Yz1jLnBhcmVudE5vZGV9Yz12b2lkIDB9Yz1RZChjKX19ZnVuY3Rpb24gU2QoYSxiKXtyZXR1cm4gYSYmYj9hPT09Yj8hMDphJiYzPT09YS5ub2RlVHlwZT8hMTpiJiYzPT09Yi5ub2RlVHlwZT9TZChhLGIucGFyZW50Tm9kZSk6XCJjb250YWluc1wiaW4gYT9hLmNvbnRhaW5zKGIpOmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24/ISEoYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihiKSYxNik6ITE6ITF9XG5mdW5jdGlvbiBUZCgpe2Zvcih2YXIgYT13aW5kb3csYj1PZCgpO2IgaW5zdGFuY2VvZiBhLkhUTUxJRnJhbWVFbGVtZW50Oyl7dHJ5e2E9Yi5jb250ZW50RG9jdW1lbnQuZGVmYXVsdFZpZXd9Y2F0Y2goYyl7YnJlYWt9Yj1PZChhLmRvY3VtZW50KX1yZXR1cm4gYn1mdW5jdGlvbiBVZChhKXt2YXIgYj1hJiZhLm5vZGVOYW1lJiZhLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGImJihcImlucHV0XCI9PT1iJiYoXCJ0ZXh0XCI9PT1hLnR5cGV8fFwic2VhcmNoXCI9PT1hLnR5cGV8fFwidGVsXCI9PT1hLnR5cGV8fFwidXJsXCI9PT1hLnR5cGV8fFwicGFzc3dvcmRcIj09PWEudHlwZSl8fFwidGV4dGFyZWFcIj09PWJ8fFwidHJ1ZVwiPT09YS5jb250ZW50RWRpdGFibGUpfVxudmFyIFZkPVZhJiZcImRvY3VtZW50TW9kZVwiaW4gZG9jdW1lbnQmJjExPj1kb2N1bWVudC5kb2N1bWVudE1vZGUsV2Q9e3NlbGVjdDp7cGhhc2VkUmVnaXN0cmF0aW9uTmFtZXM6e2J1YmJsZWQ6XCJvblNlbGVjdFwiLGNhcHR1cmVkOlwib25TZWxlY3RDYXB0dXJlXCJ9LGRlcGVuZGVuY2llczpcImJsdXIgY29udGV4dG1lbnUgZHJhZ2VuZCBmb2N1cyBrZXlkb3duIGtleXVwIG1vdXNlZG93biBtb3VzZXVwIHNlbGVjdGlvbmNoYW5nZVwiLnNwbGl0KFwiIFwiKX19LFhkPW51bGwsWWQ9bnVsbCxaZD1udWxsLCRkPSExO1xuZnVuY3Rpb24gYWUoYSxiKXt2YXIgYz1iLndpbmRvdz09PWI/Yi5kb2N1bWVudDo5PT09Yi5ub2RlVHlwZT9iOmIub3duZXJEb2N1bWVudDtpZigkZHx8bnVsbD09WGR8fFhkIT09T2QoYykpcmV0dXJuIG51bGw7Yz1YZDtcInNlbGVjdGlvblN0YXJ0XCJpbiBjJiZVZChjKT9jPXtzdGFydDpjLnNlbGVjdGlvblN0YXJ0LGVuZDpjLnNlbGVjdGlvbkVuZH06KGM9KGMub3duZXJEb2N1bWVudCYmYy5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3fHx3aW5kb3cpLmdldFNlbGVjdGlvbigpLGM9e2FuY2hvck5vZGU6Yy5hbmNob3JOb2RlLGFuY2hvck9mZnNldDpjLmFuY2hvck9mZnNldCxmb2N1c05vZGU6Yy5mb2N1c05vZGUsZm9jdXNPZmZzZXQ6Yy5mb2N1c09mZnNldH0pO3JldHVybiBaZCYmaWQoWmQsYyk/bnVsbDooWmQ9YyxhPXouZ2V0UG9vbGVkKFdkLnNlbGVjdCxZZCxhLGIpLGEudHlwZT1cInNlbGVjdFwiLGEudGFyZ2V0PVhkLFVhKGEpLGEpfVxudmFyIGJlPXtldmVudFR5cGVzOldkLGV4dHJhY3RFdmVudHM6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9ZC53aW5kb3c9PT1kP2QuZG9jdW1lbnQ6OT09PWQubm9kZVR5cGU/ZDpkLm93bmVyRG9jdW1lbnQsZjtpZighKGY9IWUpKXthOntlPU5kKGUpO2Y9dGEub25TZWxlY3Q7Zm9yKHZhciBnPTA7ZzxmLmxlbmd0aDtnKyspe3ZhciBoPWZbZ107aWYoIWUuaGFzT3duUHJvcGVydHkoaCl8fCFlW2hdKXtlPSExO2JyZWFrIGF9fWU9ITB9Zj0hZX1pZihmKXJldHVybiBudWxsO2U9Yj9NYShiKTp3aW5kb3c7c3dpdGNoKGEpe2Nhc2UgXCJmb2N1c1wiOmlmKFJiKGUpfHxcInRydWVcIj09PWUuY29udGVudEVkaXRhYmxlKVhkPWUsWWQ9YixaZD1udWxsO2JyZWFrO2Nhc2UgXCJibHVyXCI6WmQ9WWQ9WGQ9bnVsbDticmVhaztjYXNlIFwibW91c2Vkb3duXCI6JGQ9ITA7YnJlYWs7Y2FzZSBcImNvbnRleHRtZW51XCI6Y2FzZSBcIm1vdXNldXBcIjpjYXNlIFwiZHJhZ2VuZFwiOnJldHVybiAkZD0hMSxhZShjLGQpO2Nhc2UgXCJzZWxlY3Rpb25jaGFuZ2VcIjppZihWZClicmVhaztcbmNhc2UgXCJrZXlkb3duXCI6Y2FzZSBcImtleXVwXCI6cmV0dXJuIGFlKGMsZCl9cmV0dXJuIG51bGx9fTtFYS5pbmplY3RFdmVudFBsdWdpbk9yZGVyKFwiUmVzcG9uZGVyRXZlbnRQbHVnaW4gU2ltcGxlRXZlbnRQbHVnaW4gRW50ZXJMZWF2ZUV2ZW50UGx1Z2luIENoYW5nZUV2ZW50UGx1Z2luIFNlbGVjdEV2ZW50UGx1Z2luIEJlZm9yZUlucHV0RXZlbnRQbHVnaW5cIi5zcGxpdChcIiBcIikpO3VhPU5hO3ZhPUxhO3dhPU1hO0VhLmluamVjdEV2ZW50UGx1Z2luc0J5TmFtZSh7U2ltcGxlRXZlbnRQbHVnaW46Q2QsRW50ZXJMZWF2ZUV2ZW50UGx1Z2luOmZkLENoYW5nZUV2ZW50UGx1Z2luOlVjLFNlbGVjdEV2ZW50UGx1Z2luOmJlLEJlZm9yZUlucHV0RXZlbnRQbHVnaW46RWJ9KTtmdW5jdGlvbiBjZShhKXt2YXIgYj1cIlwiO2FhLkNoaWxkcmVuLmZvckVhY2goYSxmdW5jdGlvbihhKXtudWxsIT1hJiYoYis9YSl9KTtyZXR1cm4gYn1cbmZ1bmN0aW9uIGRlKGEsYil7YT1uKHtjaGlsZHJlbjp2b2lkIDB9LGIpO2lmKGI9Y2UoYi5jaGlsZHJlbikpYS5jaGlsZHJlbj1iO3JldHVybiBhfWZ1bmN0aW9uIGVlKGEsYixjLGQpe2E9YS5vcHRpb25zO2lmKGIpe2I9e307Zm9yKHZhciBlPTA7ZTxjLmxlbmd0aDtlKyspYltcIiRcIitjW2VdXT0hMDtmb3IoYz0wO2M8YS5sZW5ndGg7YysrKWU9Yi5oYXNPd25Qcm9wZXJ0eShcIiRcIithW2NdLnZhbHVlKSxhW2NdLnNlbGVjdGVkIT09ZSYmKGFbY10uc2VsZWN0ZWQ9ZSksZSYmZCYmKGFbY10uZGVmYXVsdFNlbGVjdGVkPSEwKX1lbHNle2M9XCJcIit5YyhjKTtiPW51bGw7Zm9yKGU9MDtlPGEubGVuZ3RoO2UrKyl7aWYoYVtlXS52YWx1ZT09PWMpe2FbZV0uc2VsZWN0ZWQ9ITA7ZCYmKGFbZV0uZGVmYXVsdFNlbGVjdGVkPSEwKTtyZXR1cm59bnVsbCE9PWJ8fGFbZV0uZGlzYWJsZWR8fChiPWFbZV0pfW51bGwhPT1iJiYoYi5zZWxlY3RlZD0hMCl9fVxuZnVuY3Rpb24gZmUoYSxiKXtudWxsIT1iLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MP3QoXCI5MVwiKTp2b2lkIDA7cmV0dXJuIG4oe30sYix7dmFsdWU6dm9pZCAwLGRlZmF1bHRWYWx1ZTp2b2lkIDAsY2hpbGRyZW46XCJcIithLl93cmFwcGVyU3RhdGUuaW5pdGlhbFZhbHVlfSl9ZnVuY3Rpb24gZ2UoYSxiKXt2YXIgYz1iLnZhbHVlO251bGw9PWMmJihjPWIuZGVmYXVsdFZhbHVlLGI9Yi5jaGlsZHJlbixudWxsIT1iJiYobnVsbCE9Yz90KFwiOTJcIik6dm9pZCAwLEFycmF5LmlzQXJyYXkoYikmJigxPj1iLmxlbmd0aD92b2lkIDA6dChcIjkzXCIpLGI9YlswXSksYz1iKSxudWxsPT1jJiYoYz1cIlwiKSk7YS5fd3JhcHBlclN0YXRlPXtpbml0aWFsVmFsdWU6eWMoYyl9fVxuZnVuY3Rpb24gaGUoYSxiKXt2YXIgYz15YyhiLnZhbHVlKSxkPXljKGIuZGVmYXVsdFZhbHVlKTtudWxsIT1jJiYoYz1cIlwiK2MsYyE9PWEudmFsdWUmJihhLnZhbHVlPWMpLG51bGw9PWIuZGVmYXVsdFZhbHVlJiZhLmRlZmF1bHRWYWx1ZSE9PWMmJihhLmRlZmF1bHRWYWx1ZT1jKSk7bnVsbCE9ZCYmKGEuZGVmYXVsdFZhbHVlPVwiXCIrZCl9ZnVuY3Rpb24gaWUoYSl7dmFyIGI9YS50ZXh0Q29udGVudDtiPT09YS5fd3JhcHBlclN0YXRlLmluaXRpYWxWYWx1ZSYmKGEudmFsdWU9Yil9dmFyIGplPXtodG1sOlwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiLG1hdGhtbDpcImh0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUxcIixzdmc6XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wifTtcbmZ1bmN0aW9uIGtlKGEpe3N3aXRjaChhKXtjYXNlIFwic3ZnXCI6cmV0dXJuXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO2Nhc2UgXCJtYXRoXCI6cmV0dXJuXCJodHRwOi8vd3d3LnczLm9yZy8xOTk4L01hdGgvTWF0aE1MXCI7ZGVmYXVsdDpyZXR1cm5cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIn19ZnVuY3Rpb24gbGUoYSxiKXtyZXR1cm4gbnVsbD09YXx8XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI9PT1hP2tlKGIpOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj09PWEmJlwiZm9yZWlnbk9iamVjdFwiPT09Yj9cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIjphfVxudmFyIG1lPXZvaWQgMCxuZT1mdW5jdGlvbihhKXtyZXR1cm5cInVuZGVmaW5lZFwiIT09dHlwZW9mIE1TQXBwJiZNU0FwcC5leGVjVW5zYWZlTG9jYWxGdW5jdGlvbj9mdW5jdGlvbihiLGMsZCxlKXtNU0FwcC5leGVjVW5zYWZlTG9jYWxGdW5jdGlvbihmdW5jdGlvbigpe3JldHVybiBhKGIsYyxkLGUpfSl9OmF9KGZ1bmN0aW9uKGEsYil7aWYoYS5uYW1lc3BhY2VVUkkhPT1qZS5zdmd8fFwiaW5uZXJIVE1MXCJpbiBhKWEuaW5uZXJIVE1MPWI7ZWxzZXttZT1tZXx8ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTttZS5pbm5lckhUTUw9XCI8c3ZnPlwiK2IrXCI8L3N2Zz5cIjtmb3IoYj1tZS5maXJzdENoaWxkO2EuZmlyc3RDaGlsZDspYS5yZW1vdmVDaGlsZChhLmZpcnN0Q2hpbGQpO2Zvcig7Yi5maXJzdENoaWxkOylhLmFwcGVuZENoaWxkKGIuZmlyc3RDaGlsZCl9fSk7XG5mdW5jdGlvbiBvZShhLGIpe2lmKGIpe3ZhciBjPWEuZmlyc3RDaGlsZDtpZihjJiZjPT09YS5sYXN0Q2hpbGQmJjM9PT1jLm5vZGVUeXBlKXtjLm5vZGVWYWx1ZT1iO3JldHVybn19YS50ZXh0Q29udGVudD1ifVxudmFyIHBlPXthbmltYXRpb25JdGVyYXRpb25Db3VudDohMCxib3JkZXJJbWFnZU91dHNldDohMCxib3JkZXJJbWFnZVNsaWNlOiEwLGJvcmRlckltYWdlV2lkdGg6ITAsYm94RmxleDohMCxib3hGbGV4R3JvdXA6ITAsYm94T3JkaW5hbEdyb3VwOiEwLGNvbHVtbkNvdW50OiEwLGNvbHVtbnM6ITAsZmxleDohMCxmbGV4R3JvdzohMCxmbGV4UG9zaXRpdmU6ITAsZmxleFNocmluazohMCxmbGV4TmVnYXRpdmU6ITAsZmxleE9yZGVyOiEwLGdyaWRBcmVhOiEwLGdyaWRSb3c6ITAsZ3JpZFJvd0VuZDohMCxncmlkUm93U3BhbjohMCxncmlkUm93U3RhcnQ6ITAsZ3JpZENvbHVtbjohMCxncmlkQ29sdW1uRW5kOiEwLGdyaWRDb2x1bW5TcGFuOiEwLGdyaWRDb2x1bW5TdGFydDohMCxmb250V2VpZ2h0OiEwLGxpbmVDbGFtcDohMCxsaW5lSGVpZ2h0OiEwLG9wYWNpdHk6ITAsb3JkZXI6ITAsb3JwaGFuczohMCx0YWJTaXplOiEwLHdpZG93czohMCx6SW5kZXg6ITAsem9vbTohMCxmaWxsT3BhY2l0eTohMCxcbmZsb29kT3BhY2l0eTohMCxzdG9wT3BhY2l0eTohMCxzdHJva2VEYXNoYXJyYXk6ITAsc3Ryb2tlRGFzaG9mZnNldDohMCxzdHJva2VNaXRlcmxpbWl0OiEwLHN0cm9rZU9wYWNpdHk6ITAsc3Ryb2tlV2lkdGg6ITB9LHFlPVtcIldlYmtpdFwiLFwibXNcIixcIk1velwiLFwiT1wiXTtPYmplY3Qua2V5cyhwZSkuZm9yRWFjaChmdW5jdGlvbihhKXtxZS5mb3JFYWNoKGZ1bmN0aW9uKGIpe2I9YithLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2Euc3Vic3RyaW5nKDEpO3BlW2JdPXBlW2FdfSl9KTtcbmZ1bmN0aW9uIHJlKGEsYil7YT1hLnN0eWxlO2Zvcih2YXIgYyBpbiBiKWlmKGIuaGFzT3duUHJvcGVydHkoYykpe3ZhciBkPTA9PT1jLmluZGV4T2YoXCItLVwiKTt2YXIgZT1jO3ZhciBmPWJbY107ZT1udWxsPT1mfHxcImJvb2xlYW5cIj09PXR5cGVvZiBmfHxcIlwiPT09Zj9cIlwiOmR8fFwibnVtYmVyXCIhPT10eXBlb2YgZnx8MD09PWZ8fHBlLmhhc093blByb3BlcnR5KGUpJiZwZVtlXT8oXCJcIitmKS50cmltKCk6ZitcInB4XCI7XCJmbG9hdFwiPT09YyYmKGM9XCJjc3NGbG9hdFwiKTtkP2Euc2V0UHJvcGVydHkoYyxlKTphW2NdPWV9fXZhciBzZT1uKHttZW51aXRlbTohMH0se2FyZWE6ITAsYmFzZTohMCxicjohMCxjb2w6ITAsZW1iZWQ6ITAsaHI6ITAsaW1nOiEwLGlucHV0OiEwLGtleWdlbjohMCxsaW5rOiEwLG1ldGE6ITAscGFyYW06ITAsc291cmNlOiEwLHRyYWNrOiEwLHdicjohMH0pO1xuZnVuY3Rpb24gdGUoYSxiKXtiJiYoc2VbYV0mJihudWxsIT1iLmNoaWxkcmVufHxudWxsIT1iLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MP3QoXCIxMzdcIixhLFwiXCIpOnZvaWQgMCksbnVsbCE9Yi5kYW5nZXJvdXNseVNldElubmVySFRNTCYmKG51bGwhPWIuY2hpbGRyZW4/dChcIjYwXCIpOnZvaWQgMCxcIm9iamVjdFwiPT09dHlwZW9mIGIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwmJlwiX19odG1sXCJpbiBiLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MP3ZvaWQgMDp0KFwiNjFcIikpLG51bGwhPWIuc3R5bGUmJlwib2JqZWN0XCIhPT10eXBlb2YgYi5zdHlsZT90KFwiNjJcIixcIlwiKTp2b2lkIDApfVxuZnVuY3Rpb24gdWUoYSxiKXtpZigtMT09PWEuaW5kZXhPZihcIi1cIikpcmV0dXJuXCJzdHJpbmdcIj09PXR5cGVvZiBiLmlzO3N3aXRjaChhKXtjYXNlIFwiYW5ub3RhdGlvbi14bWxcIjpjYXNlIFwiY29sb3ItcHJvZmlsZVwiOmNhc2UgXCJmb250LWZhY2VcIjpjYXNlIFwiZm9udC1mYWNlLXNyY1wiOmNhc2UgXCJmb250LWZhY2UtdXJpXCI6Y2FzZSBcImZvbnQtZmFjZS1mb3JtYXRcIjpjYXNlIFwiZm9udC1mYWNlLW5hbWVcIjpjYXNlIFwibWlzc2luZy1nbHlwaFwiOnJldHVybiExO2RlZmF1bHQ6cmV0dXJuITB9fVxuZnVuY3Rpb24gdmUoYSxiKXthPTk9PT1hLm5vZGVUeXBlfHwxMT09PWEubm9kZVR5cGU/YTphLm93bmVyRG9jdW1lbnQ7dmFyIGM9TmQoYSk7Yj10YVtiXTtmb3IodmFyIGQ9MDtkPGIubGVuZ3RoO2QrKyl7dmFyIGU9YltkXTtpZighYy5oYXNPd25Qcm9wZXJ0eShlKXx8IWNbZV0pe3N3aXRjaChlKXtjYXNlIFwic2Nyb2xsXCI6SmQoXCJzY3JvbGxcIixhKTticmVhaztjYXNlIFwiZm9jdXNcIjpjYXNlIFwiYmx1clwiOkpkKFwiZm9jdXNcIixhKTtKZChcImJsdXJcIixhKTtjLmJsdXI9ITA7Yy5mb2N1cz0hMDticmVhaztjYXNlIFwiY2FuY2VsXCI6Y2FzZSBcImNsb3NlXCI6VGIoZSkmJkpkKGUsYSk7YnJlYWs7Y2FzZSBcImludmFsaWRcIjpjYXNlIFwic3VibWl0XCI6Y2FzZSBcInJlc2V0XCI6YnJlYWs7ZGVmYXVsdDotMT09PWZiLmluZGV4T2YoZSkmJkYoZSxhKX1jW2VdPSEwfX19ZnVuY3Rpb24gd2UoKXt9dmFyIHhlPW51bGwseWU9bnVsbDtcbmZ1bmN0aW9uIHplKGEsYil7c3dpdGNoKGEpe2Nhc2UgXCJidXR0b25cIjpjYXNlIFwiaW5wdXRcIjpjYXNlIFwic2VsZWN0XCI6Y2FzZSBcInRleHRhcmVhXCI6cmV0dXJuISFiLmF1dG9Gb2N1c31yZXR1cm4hMX1mdW5jdGlvbiBBZShhLGIpe3JldHVyblwidGV4dGFyZWFcIj09PWF8fFwib3B0aW9uXCI9PT1hfHxcIm5vc2NyaXB0XCI9PT1hfHxcInN0cmluZ1wiPT09dHlwZW9mIGIuY2hpbGRyZW58fFwibnVtYmVyXCI9PT10eXBlb2YgYi5jaGlsZHJlbnx8XCJvYmplY3RcIj09PXR5cGVvZiBiLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MJiZudWxsIT09Yi5kYW5nZXJvdXNseVNldElubmVySFRNTCYmbnVsbCE9Yi5kYW5nZXJvdXNseVNldElubmVySFRNTC5fX2h0bWx9ZnVuY3Rpb24gQmUoYSl7Zm9yKGE9YS5uZXh0U2libGluZzthJiYxIT09YS5ub2RlVHlwZSYmMyE9PWEubm9kZVR5cGU7KWE9YS5uZXh0U2libGluZztyZXR1cm4gYX1cbmZ1bmN0aW9uIENlKGEpe2ZvcihhPWEuZmlyc3RDaGlsZDthJiYxIT09YS5ub2RlVHlwZSYmMyE9PWEubm9kZVR5cGU7KWE9YS5uZXh0U2libGluZztyZXR1cm4gYX1uZXcgU2V0O3ZhciBEZT1bXSxFZT0tMTtmdW5jdGlvbiBHKGEpezA+RWV8fChhLmN1cnJlbnQ9RGVbRWVdLERlW0VlXT1udWxsLEVlLS0pfWZ1bmN0aW9uIEgoYSxiKXtFZSsrO0RlW0VlXT1hLmN1cnJlbnQ7YS5jdXJyZW50PWJ9dmFyIEZlPXt9LEk9e2N1cnJlbnQ6RmV9LEo9e2N1cnJlbnQ6ITF9LEdlPUZlO1xuZnVuY3Rpb24gSGUoYSxiKXt2YXIgYz1hLnR5cGUuY29udGV4dFR5cGVzO2lmKCFjKXJldHVybiBGZTt2YXIgZD1hLnN0YXRlTm9kZTtpZihkJiZkLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkVW5tYXNrZWRDaGlsZENvbnRleHQ9PT1iKXJldHVybiBkLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkTWFza2VkQ2hpbGRDb250ZXh0O3ZhciBlPXt9LGY7Zm9yKGYgaW4gYyllW2ZdPWJbZl07ZCYmKGE9YS5zdGF0ZU5vZGUsYS5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZFVubWFza2VkQ2hpbGRDb250ZXh0PWIsYS5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZE1hc2tlZENoaWxkQ29udGV4dD1lKTtyZXR1cm4gZX1mdW5jdGlvbiBLKGEpe2E9YS5jaGlsZENvbnRleHRUeXBlcztyZXR1cm4gbnVsbCE9PWEmJnZvaWQgMCE9PWF9ZnVuY3Rpb24gSWUoYSl7RyhKLGEpO0coSSxhKX1mdW5jdGlvbiBKZShhKXtHKEosYSk7RyhJLGEpfVxuZnVuY3Rpb24gS2UoYSxiLGMpe0kuY3VycmVudCE9PUZlP3QoXCIxNjhcIik6dm9pZCAwO0goSSxiLGEpO0goSixjLGEpfWZ1bmN0aW9uIExlKGEsYixjKXt2YXIgZD1hLnN0YXRlTm9kZTthPWIuY2hpbGRDb250ZXh0VHlwZXM7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIGQuZ2V0Q2hpbGRDb250ZXh0KXJldHVybiBjO2Q9ZC5nZXRDaGlsZENvbnRleHQoKTtmb3IodmFyIGUgaW4gZCllIGluIGE/dm9pZCAwOnQoXCIxMDhcIixsYyhiKXx8XCJVbmtub3duXCIsZSk7cmV0dXJuIG4oe30sYyxkKX1mdW5jdGlvbiBNZShhKXt2YXIgYj1hLnN0YXRlTm9kZTtiPWImJmIuX19yZWFjdEludGVybmFsTWVtb2l6ZWRNZXJnZWRDaGlsZENvbnRleHR8fEZlO0dlPUkuY3VycmVudDtIKEksYixhKTtIKEosSi5jdXJyZW50LGEpO3JldHVybiEwfVxuZnVuY3Rpb24gTmUoYSxiLGMpe3ZhciBkPWEuc3RhdGVOb2RlO2Q/dm9pZCAwOnQoXCIxNjlcIik7Yz8oYj1MZShhLGIsR2UpLGQuX19yZWFjdEludGVybmFsTWVtb2l6ZWRNZXJnZWRDaGlsZENvbnRleHQ9YixHKEosYSksRyhJLGEpLEgoSSxiLGEpKTpHKEosYSk7SChKLGMsYSl9dmFyIE9lPW51bGwsUGU9bnVsbDtmdW5jdGlvbiBRZShhKXtyZXR1cm4gZnVuY3Rpb24oYil7dHJ5e3JldHVybiBhKGIpfWNhdGNoKGMpe319fVxuZnVuY3Rpb24gUmUoYSl7aWYoXCJ1bmRlZmluZWRcIj09PXR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18pcmV0dXJuITE7dmFyIGI9X19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fO2lmKGIuaXNEaXNhYmxlZHx8IWIuc3VwcG9ydHNGaWJlcilyZXR1cm4hMDt0cnl7dmFyIGM9Yi5pbmplY3QoYSk7T2U9UWUoZnVuY3Rpb24oYSl7cmV0dXJuIGIub25Db21taXRGaWJlclJvb3QoYyxhKX0pO1BlPVFlKGZ1bmN0aW9uKGEpe3JldHVybiBiLm9uQ29tbWl0RmliZXJVbm1vdW50KGMsYSl9KX1jYXRjaChkKXt9cmV0dXJuITB9XG5mdW5jdGlvbiBTZShhLGIsYyxkKXt0aGlzLnRhZz1hO3RoaXMua2V5PWM7dGhpcy5zaWJsaW5nPXRoaXMuY2hpbGQ9dGhpcy5yZXR1cm49dGhpcy5zdGF0ZU5vZGU9dGhpcy50eXBlPW51bGw7dGhpcy5pbmRleD0wO3RoaXMucmVmPW51bGw7dGhpcy5wZW5kaW5nUHJvcHM9Yjt0aGlzLmZpcnN0Q29udGV4dERlcGVuZGVuY3k9dGhpcy5tZW1vaXplZFN0YXRlPXRoaXMudXBkYXRlUXVldWU9dGhpcy5tZW1vaXplZFByb3BzPW51bGw7dGhpcy5tb2RlPWQ7dGhpcy5lZmZlY3RUYWc9MDt0aGlzLmxhc3RFZmZlY3Q9dGhpcy5maXJzdEVmZmVjdD10aGlzLm5leHRFZmZlY3Q9bnVsbDt0aGlzLmNoaWxkRXhwaXJhdGlvblRpbWU9dGhpcy5leHBpcmF0aW9uVGltZT0wO3RoaXMuYWx0ZXJuYXRlPW51bGx9ZnVuY3Rpb24gVGUoYSl7YT1hLnByb3RvdHlwZTtyZXR1cm4hKCFhfHwhYS5pc1JlYWN0Q29tcG9uZW50KX1cbmZ1bmN0aW9uIFVlKGEsYixjKXt2YXIgZD1hLmFsdGVybmF0ZTtudWxsPT09ZD8oZD1uZXcgU2UoYS50YWcsYixhLmtleSxhLm1vZGUpLGQudHlwZT1hLnR5cGUsZC5zdGF0ZU5vZGU9YS5zdGF0ZU5vZGUsZC5hbHRlcm5hdGU9YSxhLmFsdGVybmF0ZT1kKTooZC5wZW5kaW5nUHJvcHM9YixkLmVmZmVjdFRhZz0wLGQubmV4dEVmZmVjdD1udWxsLGQuZmlyc3RFZmZlY3Q9bnVsbCxkLmxhc3RFZmZlY3Q9bnVsbCk7ZC5jaGlsZEV4cGlyYXRpb25UaW1lPWEuY2hpbGRFeHBpcmF0aW9uVGltZTtkLmV4cGlyYXRpb25UaW1lPWIhPT1hLnBlbmRpbmdQcm9wcz9jOmEuZXhwaXJhdGlvblRpbWU7ZC5jaGlsZD1hLmNoaWxkO2QubWVtb2l6ZWRQcm9wcz1hLm1lbW9pemVkUHJvcHM7ZC5tZW1vaXplZFN0YXRlPWEubWVtb2l6ZWRTdGF0ZTtkLnVwZGF0ZVF1ZXVlPWEudXBkYXRlUXVldWU7ZC5maXJzdENvbnRleHREZXBlbmRlbmN5PWEuZmlyc3RDb250ZXh0RGVwZW5kZW5jeTtkLnNpYmxpbmc9YS5zaWJsaW5nO1xuZC5pbmRleD1hLmluZGV4O2QucmVmPWEucmVmO3JldHVybiBkfVxuZnVuY3Rpb24gVmUoYSxiLGMpe3ZhciBkPWEudHlwZSxlPWEua2V5O2E9YS5wcm9wczt2YXIgZj12b2lkIDA7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGQpZj1UZShkKT8yOjQ7ZWxzZSBpZihcInN0cmluZ1wiPT09dHlwZW9mIGQpZj03O2Vsc2UgYTpzd2l0Y2goZCl7Y2FzZSBiYzpyZXR1cm4gV2UoYS5jaGlsZHJlbixiLGMsZSk7Y2FzZSBnYzpmPTEwO2J8PTM7YnJlYWs7Y2FzZSBjYzpmPTEwO2J8PTI7YnJlYWs7Y2FzZSBkYzpyZXR1cm4gZD1uZXcgU2UoMTUsYSxlLGJ8NCksZC50eXBlPWRjLGQuZXhwaXJhdGlvblRpbWU9YyxkO2Nhc2UgaWM6Zj0xNjticmVhaztkZWZhdWx0OmlmKFwib2JqZWN0XCI9PT10eXBlb2YgZCYmbnVsbCE9PWQpc3dpdGNoKGQuJCR0eXBlb2Ype2Nhc2UgZWM6Zj0xMjticmVhayBhO2Nhc2UgZmM6Zj0xMTticmVhayBhO2Nhc2UgaGM6Zj0xMzticmVhayBhO2RlZmF1bHQ6aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGQudGhlbil7Zj00O2JyZWFrIGF9fXQoXCIxMzBcIixcbm51bGw9PWQ/ZDp0eXBlb2YgZCxcIlwiKX1iPW5ldyBTZShmLGEsZSxiKTtiLnR5cGU9ZDtiLmV4cGlyYXRpb25UaW1lPWM7cmV0dXJuIGJ9ZnVuY3Rpb24gV2UoYSxiLGMsZCl7YT1uZXcgU2UoOSxhLGQsYik7YS5leHBpcmF0aW9uVGltZT1jO3JldHVybiBhfWZ1bmN0aW9uIFhlKGEsYixjKXthPW5ldyBTZSg4LGEsbnVsbCxiKTthLmV4cGlyYXRpb25UaW1lPWM7cmV0dXJuIGF9ZnVuY3Rpb24gWWUoYSxiLGMpe2I9bmV3IFNlKDYsbnVsbCE9PWEuY2hpbGRyZW4/YS5jaGlsZHJlbjpbXSxhLmtleSxiKTtiLmV4cGlyYXRpb25UaW1lPWM7Yi5zdGF0ZU5vZGU9e2NvbnRhaW5lckluZm86YS5jb250YWluZXJJbmZvLHBlbmRpbmdDaGlsZHJlbjpudWxsLGltcGxlbWVudGF0aW9uOmEuaW1wbGVtZW50YXRpb259O3JldHVybiBifVxuZnVuY3Rpb24gWmUoYSxiKXthLmRpZEVycm9yPSExO3ZhciBjPWEuZWFybGllc3RQZW5kaW5nVGltZTswPT09Yz9hLmVhcmxpZXN0UGVuZGluZ1RpbWU9YS5sYXRlc3RQZW5kaW5nVGltZT1iOmM+Yj9hLmVhcmxpZXN0UGVuZGluZ1RpbWU9YjphLmxhdGVzdFBlbmRpbmdUaW1lPGImJihhLmxhdGVzdFBlbmRpbmdUaW1lPWIpOyRlKGIsYSl9ZnVuY3Rpb24gJGUoYSxiKXt2YXIgYz1iLmVhcmxpZXN0U3VzcGVuZGVkVGltZSxkPWIubGF0ZXN0U3VzcGVuZGVkVGltZSxlPWIuZWFybGllc3RQZW5kaW5nVGltZSxmPWIubGF0ZXN0UGluZ2VkVGltZTtlPTAhPT1lP2U6ZjswPT09ZSYmKDA9PT1hfHxkPmEpJiYoZT1kKTthPWU7MCE9PWEmJjAhPT1jJiZjPGEmJihhPWMpO2IubmV4dEV4cGlyYXRpb25UaW1lVG9Xb3JrT249ZTtiLmV4cGlyYXRpb25UaW1lPWF9dmFyIGFmPSExO1xuZnVuY3Rpb24gYmYoYSl7cmV0dXJue2Jhc2VTdGF0ZTphLGZpcnN0VXBkYXRlOm51bGwsbGFzdFVwZGF0ZTpudWxsLGZpcnN0Q2FwdHVyZWRVcGRhdGU6bnVsbCxsYXN0Q2FwdHVyZWRVcGRhdGU6bnVsbCxmaXJzdEVmZmVjdDpudWxsLGxhc3RFZmZlY3Q6bnVsbCxmaXJzdENhcHR1cmVkRWZmZWN0Om51bGwsbGFzdENhcHR1cmVkRWZmZWN0Om51bGx9fWZ1bmN0aW9uIGNmKGEpe3JldHVybntiYXNlU3RhdGU6YS5iYXNlU3RhdGUsZmlyc3RVcGRhdGU6YS5maXJzdFVwZGF0ZSxsYXN0VXBkYXRlOmEubGFzdFVwZGF0ZSxmaXJzdENhcHR1cmVkVXBkYXRlOm51bGwsbGFzdENhcHR1cmVkVXBkYXRlOm51bGwsZmlyc3RFZmZlY3Q6bnVsbCxsYXN0RWZmZWN0Om51bGwsZmlyc3RDYXB0dXJlZEVmZmVjdDpudWxsLGxhc3RDYXB0dXJlZEVmZmVjdDpudWxsfX1cbmZ1bmN0aW9uIGRmKGEpe3JldHVybntleHBpcmF0aW9uVGltZTphLHRhZzowLHBheWxvYWQ6bnVsbCxjYWxsYmFjazpudWxsLG5leHQ6bnVsbCxuZXh0RWZmZWN0Om51bGx9fWZ1bmN0aW9uIGVmKGEsYil7bnVsbD09PWEubGFzdFVwZGF0ZT9hLmZpcnN0VXBkYXRlPWEubGFzdFVwZGF0ZT1iOihhLmxhc3RVcGRhdGUubmV4dD1iLGEubGFzdFVwZGF0ZT1iKX1cbmZ1bmN0aW9uIGZmKGEsYil7dmFyIGM9YS5hbHRlcm5hdGU7aWYobnVsbD09PWMpe3ZhciBkPWEudXBkYXRlUXVldWU7dmFyIGU9bnVsbDtudWxsPT09ZCYmKGQ9YS51cGRhdGVRdWV1ZT1iZihhLm1lbW9pemVkU3RhdGUpKX1lbHNlIGQ9YS51cGRhdGVRdWV1ZSxlPWMudXBkYXRlUXVldWUsbnVsbD09PWQ/bnVsbD09PWU/KGQ9YS51cGRhdGVRdWV1ZT1iZihhLm1lbW9pemVkU3RhdGUpLGU9Yy51cGRhdGVRdWV1ZT1iZihjLm1lbW9pemVkU3RhdGUpKTpkPWEudXBkYXRlUXVldWU9Y2YoZSk6bnVsbD09PWUmJihlPWMudXBkYXRlUXVldWU9Y2YoZCkpO251bGw9PT1lfHxkPT09ZT9lZihkLGIpOm51bGw9PT1kLmxhc3RVcGRhdGV8fG51bGw9PT1lLmxhc3RVcGRhdGU/KGVmKGQsYiksZWYoZSxiKSk6KGVmKGQsYiksZS5sYXN0VXBkYXRlPWIpfVxuZnVuY3Rpb24gZ2YoYSxiKXt2YXIgYz1hLnVwZGF0ZVF1ZXVlO2M9bnVsbD09PWM/YS51cGRhdGVRdWV1ZT1iZihhLm1lbW9pemVkU3RhdGUpOmhmKGEsYyk7bnVsbD09PWMubGFzdENhcHR1cmVkVXBkYXRlP2MuZmlyc3RDYXB0dXJlZFVwZGF0ZT1jLmxhc3RDYXB0dXJlZFVwZGF0ZT1iOihjLmxhc3RDYXB0dXJlZFVwZGF0ZS5uZXh0PWIsYy5sYXN0Q2FwdHVyZWRVcGRhdGU9Yil9ZnVuY3Rpb24gaGYoYSxiKXt2YXIgYz1hLmFsdGVybmF0ZTtudWxsIT09YyYmYj09PWMudXBkYXRlUXVldWUmJihiPWEudXBkYXRlUXVldWU9Y2YoYikpO3JldHVybiBifVxuZnVuY3Rpb24gamYoYSxiLGMsZCxlLGYpe3N3aXRjaChjLnRhZyl7Y2FzZSAxOnJldHVybiBhPWMucGF5bG9hZCxcImZ1bmN0aW9uXCI9PT10eXBlb2YgYT9hLmNhbGwoZixkLGUpOmE7Y2FzZSAzOmEuZWZmZWN0VGFnPWEuZWZmZWN0VGFnJi0xMDI1fDY0O2Nhc2UgMDphPWMucGF5bG9hZDtlPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBhP2EuY2FsbChmLGQsZSk6YTtpZihudWxsPT09ZXx8dm9pZCAwPT09ZSlicmVhaztyZXR1cm4gbih7fSxkLGUpO2Nhc2UgMjphZj0hMH1yZXR1cm4gZH1cbmZ1bmN0aW9uIGtmKGEsYixjLGQsZSl7YWY9ITE7Yj1oZihhLGIpO2Zvcih2YXIgZj1iLmJhc2VTdGF0ZSxnPW51bGwsaD0wLGs9Yi5maXJzdFVwZGF0ZSxsPWY7bnVsbCE9PWs7KXt2YXIgbT1rLmV4cGlyYXRpb25UaW1lO2lmKG0+ZSl7aWYobnVsbD09PWcmJihnPWssZj1sKSwwPT09aHx8aD5tKWg9bX1lbHNlIGw9amYoYSxiLGssbCxjLGQpLG51bGwhPT1rLmNhbGxiYWNrJiYoYS5lZmZlY3RUYWd8PTMyLGsubmV4dEVmZmVjdD1udWxsLG51bGw9PT1iLmxhc3RFZmZlY3Q/Yi5maXJzdEVmZmVjdD1iLmxhc3RFZmZlY3Q9azooYi5sYXN0RWZmZWN0Lm5leHRFZmZlY3Q9ayxiLmxhc3RFZmZlY3Q9aykpO2s9ay5uZXh0fW09bnVsbDtmb3Ioaz1iLmZpcnN0Q2FwdHVyZWRVcGRhdGU7bnVsbCE9PWs7KXt2YXIgcj1rLmV4cGlyYXRpb25UaW1lO2lmKHI+ZSl7aWYobnVsbD09PW0mJihtPWssbnVsbD09PWcmJihmPWwpKSwwPT09aHx8aD5yKWg9cn1lbHNlIGw9amYoYSxiLGssbCxjLGQpLFxubnVsbCE9PWsuY2FsbGJhY2smJihhLmVmZmVjdFRhZ3w9MzIsay5uZXh0RWZmZWN0PW51bGwsbnVsbD09PWIubGFzdENhcHR1cmVkRWZmZWN0P2IuZmlyc3RDYXB0dXJlZEVmZmVjdD1iLmxhc3RDYXB0dXJlZEVmZmVjdD1rOihiLmxhc3RDYXB0dXJlZEVmZmVjdC5uZXh0RWZmZWN0PWssYi5sYXN0Q2FwdHVyZWRFZmZlY3Q9aykpO2s9ay5uZXh0fW51bGw9PT1nJiYoYi5sYXN0VXBkYXRlPW51bGwpO251bGw9PT1tP2IubGFzdENhcHR1cmVkVXBkYXRlPW51bGw6YS5lZmZlY3RUYWd8PTMyO251bGw9PT1nJiZudWxsPT09bSYmKGY9bCk7Yi5iYXNlU3RhdGU9ZjtiLmZpcnN0VXBkYXRlPWc7Yi5maXJzdENhcHR1cmVkVXBkYXRlPW07YS5leHBpcmF0aW9uVGltZT1oO2EubWVtb2l6ZWRTdGF0ZT1sfVxuZnVuY3Rpb24gbGYoYSxiLGMpe251bGwhPT1iLmZpcnN0Q2FwdHVyZWRVcGRhdGUmJihudWxsIT09Yi5sYXN0VXBkYXRlJiYoYi5sYXN0VXBkYXRlLm5leHQ9Yi5maXJzdENhcHR1cmVkVXBkYXRlLGIubGFzdFVwZGF0ZT1iLmxhc3RDYXB0dXJlZFVwZGF0ZSksYi5maXJzdENhcHR1cmVkVXBkYXRlPWIubGFzdENhcHR1cmVkVXBkYXRlPW51bGwpO21mKGIuZmlyc3RFZmZlY3QsYyk7Yi5maXJzdEVmZmVjdD1iLmxhc3RFZmZlY3Q9bnVsbDttZihiLmZpcnN0Q2FwdHVyZWRFZmZlY3QsYyk7Yi5maXJzdENhcHR1cmVkRWZmZWN0PWIubGFzdENhcHR1cmVkRWZmZWN0PW51bGx9ZnVuY3Rpb24gbWYoYSxiKXtmb3IoO251bGwhPT1hOyl7dmFyIGM9YS5jYWxsYmFjaztpZihudWxsIT09Yyl7YS5jYWxsYmFjaz1udWxsO3ZhciBkPWI7XCJmdW5jdGlvblwiIT09dHlwZW9mIGM/dChcIjE5MVwiLGMpOnZvaWQgMDtjLmNhbGwoZCl9YT1hLm5leHRFZmZlY3R9fVxuZnVuY3Rpb24gbmYoYSxiKXtyZXR1cm57dmFsdWU6YSxzb3VyY2U6YixzdGFjazptYyhiKX19dmFyIG9mPXtjdXJyZW50Om51bGx9LHBmPW51bGwscWY9bnVsbCxyZj1udWxsO2Z1bmN0aW9uIHNmKGEsYil7dmFyIGM9YS50eXBlLl9jb250ZXh0O0gob2YsYy5fY3VycmVudFZhbHVlLGEpO2MuX2N1cnJlbnRWYWx1ZT1ifWZ1bmN0aW9uIHRmKGEpe3ZhciBiPW9mLmN1cnJlbnQ7RyhvZixhKTthLnR5cGUuX2NvbnRleHQuX2N1cnJlbnRWYWx1ZT1ifWZ1bmN0aW9uIHVmKGEpe3BmPWE7cmY9cWY9bnVsbDthLmZpcnN0Q29udGV4dERlcGVuZGVuY3k9bnVsbH1cbmZ1bmN0aW9uIHZmKGEsYil7aWYocmYhPT1hJiYhMSE9PWImJjAhPT1iKXtpZihcIm51bWJlclwiIT09dHlwZW9mIGJ8fDEwNzM3NDE4MjM9PT1iKXJmPWEsYj0xMDczNzQxODIzO2I9e2NvbnRleHQ6YSxvYnNlcnZlZEJpdHM6YixuZXh0Om51bGx9O251bGw9PT1xZj8obnVsbD09PXBmP3QoXCIyNzdcIik6dm9pZCAwLHBmLmZpcnN0Q29udGV4dERlcGVuZGVuY3k9cWY9Yik6cWY9cWYubmV4dD1ifXJldHVybiBhLl9jdXJyZW50VmFsdWV9dmFyIHdmPXt9LEw9e2N1cnJlbnQ6d2Z9LHhmPXtjdXJyZW50OndmfSx5Zj17Y3VycmVudDp3Zn07ZnVuY3Rpb24gemYoYSl7YT09PXdmP3QoXCIxNzRcIik6dm9pZCAwO3JldHVybiBhfVxuZnVuY3Rpb24gQWYoYSxiKXtIKHlmLGIsYSk7SCh4ZixhLGEpO0goTCx3ZixhKTt2YXIgYz1iLm5vZGVUeXBlO3N3aXRjaChjKXtjYXNlIDk6Y2FzZSAxMTpiPShiPWIuZG9jdW1lbnRFbGVtZW50KT9iLm5hbWVzcGFjZVVSSTpsZShudWxsLFwiXCIpO2JyZWFrO2RlZmF1bHQ6Yz04PT09Yz9iLnBhcmVudE5vZGU6YixiPWMubmFtZXNwYWNlVVJJfHxudWxsLGM9Yy50YWdOYW1lLGI9bGUoYixjKX1HKEwsYSk7SChMLGIsYSl9ZnVuY3Rpb24gQmYoYSl7RyhMLGEpO0coeGYsYSk7Ryh5ZixhKX1mdW5jdGlvbiBDZihhKXt6Zih5Zi5jdXJyZW50KTt2YXIgYj16ZihMLmN1cnJlbnQpO3ZhciBjPWxlKGIsYS50eXBlKTtiIT09YyYmKEgoeGYsYSxhKSxIKEwsYyxhKSl9ZnVuY3Rpb24gRGYoYSl7eGYuY3VycmVudD09PWEmJihHKEwsYSksRyh4ZixhKSl9dmFyIEVmPShuZXcgYWEuQ29tcG9uZW50KS5yZWZzO1xuZnVuY3Rpb24gRmYoYSxiLGMsZCl7Yj1hLm1lbW9pemVkU3RhdGU7Yz1jKGQsYik7Yz1udWxsPT09Y3x8dm9pZCAwPT09Yz9iOm4oe30sYixjKTthLm1lbW9pemVkU3RhdGU9YztkPWEudXBkYXRlUXVldWU7bnVsbCE9PWQmJjA9PT1hLmV4cGlyYXRpb25UaW1lJiYoZC5iYXNlU3RhdGU9Yyl9XG52YXIgSmY9e2lzTW91bnRlZDpmdW5jdGlvbihhKXtyZXR1cm4oYT1hLl9yZWFjdEludGVybmFsRmliZXIpPzI9PT1qZChhKTohMX0sZW5xdWV1ZVNldFN0YXRlOmZ1bmN0aW9uKGEsYixjKXthPWEuX3JlYWN0SW50ZXJuYWxGaWJlcjt2YXIgZD1HZigpO2Q9SGYoZCxhKTt2YXIgZT1kZihkKTtlLnBheWxvYWQ9Yjt2b2lkIDAhPT1jJiZudWxsIT09YyYmKGUuY2FsbGJhY2s9Yyk7ZmYoYSxlKTtJZihhLGQpfSxlbnF1ZXVlUmVwbGFjZVN0YXRlOmZ1bmN0aW9uKGEsYixjKXthPWEuX3JlYWN0SW50ZXJuYWxGaWJlcjt2YXIgZD1HZigpO2Q9SGYoZCxhKTt2YXIgZT1kZihkKTtlLnRhZz0xO2UucGF5bG9hZD1iO3ZvaWQgMCE9PWMmJm51bGwhPT1jJiYoZS5jYWxsYmFjaz1jKTtmZihhLGUpO0lmKGEsZCl9LGVucXVldWVGb3JjZVVwZGF0ZTpmdW5jdGlvbihhLGIpe2E9YS5fcmVhY3RJbnRlcm5hbEZpYmVyO3ZhciBjPUdmKCk7Yz1IZihjLGEpO3ZhciBkPWRmKGMpO2QudGFnPTI7dm9pZCAwIT09XG5iJiZudWxsIT09YiYmKGQuY2FsbGJhY2s9Yik7ZmYoYSxkKTtJZihhLGMpfX07ZnVuY3Rpb24gS2YoYSxiLGMsZCxlLGYsZyl7YT1hLnN0YXRlTm9kZTtyZXR1cm5cImZ1bmN0aW9uXCI9PT10eXBlb2YgYS5zaG91bGRDb21wb25lbnRVcGRhdGU/YS5zaG91bGRDb21wb25lbnRVcGRhdGUoZCxmLGcpOmIucHJvdG90eXBlJiZiLnByb3RvdHlwZS5pc1B1cmVSZWFjdENvbXBvbmVudD8haWQoYyxkKXx8IWlkKGUsZik6ITB9ZnVuY3Rpb24gTGYoYSxiLGMsZCl7YT1iLnN0YXRlO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBiLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMmJmIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhjLGQpO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBiLlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZiLlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKGMsZCk7Yi5zdGF0ZSE9PWEmJkpmLmVucXVldWVSZXBsYWNlU3RhdGUoYixiLnN0YXRlLG51bGwpfVxuZnVuY3Rpb24gTWYoYSxiLGMsZCl7dmFyIGU9YS5zdGF0ZU5vZGUsZj1LKGIpP0dlOkkuY3VycmVudDtlLnByb3BzPWM7ZS5zdGF0ZT1hLm1lbW9pemVkU3RhdGU7ZS5yZWZzPUVmO2UuY29udGV4dD1IZShhLGYpO2Y9YS51cGRhdGVRdWV1ZTtudWxsIT09ZiYmKGtmKGEsZixjLGUsZCksZS5zdGF0ZT1hLm1lbW9pemVkU3RhdGUpO2Y9Yi5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM7XCJmdW5jdGlvblwiPT09dHlwZW9mIGYmJihGZihhLGIsZixjKSxlLnN0YXRlPWEubWVtb2l6ZWRTdGF0ZSk7XCJmdW5jdGlvblwiPT09dHlwZW9mIGIuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzfHxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZS5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZXx8XCJmdW5jdGlvblwiIT09dHlwZW9mIGUuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGUuY29tcG9uZW50V2lsbE1vdW50fHwoYj1lLnN0YXRlLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBlLmNvbXBvbmVudFdpbGxNb3VudCYmXG5lLmNvbXBvbmVudFdpbGxNb3VudCgpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBlLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQmJmUuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpLGIhPT1lLnN0YXRlJiZKZi5lbnF1ZXVlUmVwbGFjZVN0YXRlKGUsZS5zdGF0ZSxudWxsKSxmPWEudXBkYXRlUXVldWUsbnVsbCE9PWYmJihrZihhLGYsYyxlLGQpLGUuc3RhdGU9YS5tZW1vaXplZFN0YXRlKSk7XCJmdW5jdGlvblwiPT09dHlwZW9mIGUuY29tcG9uZW50RGlkTW91bnQmJihhLmVmZmVjdFRhZ3w9NCl9dmFyIE5mPUFycmF5LmlzQXJyYXk7XG5mdW5jdGlvbiBPZihhLGIsYyl7YT1jLnJlZjtpZihudWxsIT09YSYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGEmJlwib2JqZWN0XCIhPT10eXBlb2YgYSl7aWYoYy5fb3duZXIpe2M9Yy5fb3duZXI7dmFyIGQ9dm9pZCAwO2MmJigyIT09Yy50YWcmJjMhPT1jLnRhZz90KFwiMTEwXCIpOnZvaWQgMCxkPWMuc3RhdGVOb2RlKTtkP3ZvaWQgMDp0KFwiMTQ3XCIsYSk7dmFyIGU9XCJcIithO2lmKG51bGwhPT1iJiZudWxsIT09Yi5yZWYmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBiLnJlZiYmYi5yZWYuX3N0cmluZ1JlZj09PWUpcmV0dXJuIGIucmVmO2I9ZnVuY3Rpb24oYSl7dmFyIGI9ZC5yZWZzO2I9PT1FZiYmKGI9ZC5yZWZzPXt9KTtudWxsPT09YT9kZWxldGUgYltlXTpiW2VdPWF9O2IuX3N0cmluZ1JlZj1lO3JldHVybiBifVwic3RyaW5nXCIhPT10eXBlb2YgYT90KFwiMjg0XCIpOnZvaWQgMDtjLl9vd25lcj92b2lkIDA6dChcIjI1NFwiLGEpfXJldHVybiBhfVxuZnVuY3Rpb24gUGYoYSxiKXtcInRleHRhcmVhXCIhPT1hLnR5cGUmJnQoXCIzMVwiLFwiW29iamVjdCBPYmplY3RdXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYik/XCJvYmplY3Qgd2l0aCBrZXlzIHtcIitPYmplY3Qua2V5cyhiKS5qb2luKFwiLCBcIikrXCJ9XCI6YixcIlwiKX1cbmZ1bmN0aW9uIFFmKGEpe2Z1bmN0aW9uIGIoYixjKXtpZihhKXt2YXIgZD1iLmxhc3RFZmZlY3Q7bnVsbCE9PWQ/KGQubmV4dEVmZmVjdD1jLGIubGFzdEVmZmVjdD1jKTpiLmZpcnN0RWZmZWN0PWIubGFzdEVmZmVjdD1jO2MubmV4dEVmZmVjdD1udWxsO2MuZWZmZWN0VGFnPTh9fWZ1bmN0aW9uIGMoYyxkKXtpZighYSlyZXR1cm4gbnVsbDtmb3IoO251bGwhPT1kOyliKGMsZCksZD1kLnNpYmxpbmc7cmV0dXJuIG51bGx9ZnVuY3Rpb24gZChhLGIpe2ZvcihhPW5ldyBNYXA7bnVsbCE9PWI7KW51bGwhPT1iLmtleT9hLnNldChiLmtleSxiKTphLnNldChiLmluZGV4LGIpLGI9Yi5zaWJsaW5nO3JldHVybiBhfWZ1bmN0aW9uIGUoYSxiLGMpe2E9VWUoYSxiLGMpO2EuaW5kZXg9MDthLnNpYmxpbmc9bnVsbDtyZXR1cm4gYX1mdW5jdGlvbiBmKGIsYyxkKXtiLmluZGV4PWQ7aWYoIWEpcmV0dXJuIGM7ZD1iLmFsdGVybmF0ZTtpZihudWxsIT09ZClyZXR1cm4gZD1kLmluZGV4LGQ8Yz8oYi5lZmZlY3RUYWc9XG4yLGMpOmQ7Yi5lZmZlY3RUYWc9MjtyZXR1cm4gY31mdW5jdGlvbiBnKGIpe2EmJm51bGw9PT1iLmFsdGVybmF0ZSYmKGIuZWZmZWN0VGFnPTIpO3JldHVybiBifWZ1bmN0aW9uIGgoYSxiLGMsZCl7aWYobnVsbD09PWJ8fDghPT1iLnRhZylyZXR1cm4gYj1YZShjLGEubW9kZSxkKSxiLnJldHVybj1hLGI7Yj1lKGIsYyxkKTtiLnJldHVybj1hO3JldHVybiBifWZ1bmN0aW9uIGsoYSxiLGMsZCl7aWYobnVsbCE9PWImJmIudHlwZT09PWMudHlwZSlyZXR1cm4gZD1lKGIsYy5wcm9wcyxkKSxkLnJlZj1PZihhLGIsYyksZC5yZXR1cm49YSxkO2Q9VmUoYyxhLm1vZGUsZCk7ZC5yZWY9T2YoYSxiLGMpO2QucmV0dXJuPWE7cmV0dXJuIGR9ZnVuY3Rpb24gbChhLGIsYyxkKXtpZihudWxsPT09Ynx8NiE9PWIudGFnfHxiLnN0YXRlTm9kZS5jb250YWluZXJJbmZvIT09Yy5jb250YWluZXJJbmZvfHxiLnN0YXRlTm9kZS5pbXBsZW1lbnRhdGlvbiE9PWMuaW1wbGVtZW50YXRpb24pcmV0dXJuIGI9XG5ZZShjLGEubW9kZSxkKSxiLnJldHVybj1hLGI7Yj1lKGIsYy5jaGlsZHJlbnx8W10sZCk7Yi5yZXR1cm49YTtyZXR1cm4gYn1mdW5jdGlvbiBtKGEsYixjLGQsZil7aWYobnVsbD09PWJ8fDkhPT1iLnRhZylyZXR1cm4gYj1XZShjLGEubW9kZSxkLGYpLGIucmV0dXJuPWEsYjtiPWUoYixjLGQpO2IucmV0dXJuPWE7cmV0dXJuIGJ9ZnVuY3Rpb24gcihhLGIsYyl7aWYoXCJzdHJpbmdcIj09PXR5cGVvZiBifHxcIm51bWJlclwiPT09dHlwZW9mIGIpcmV0dXJuIGI9WGUoXCJcIitiLGEubW9kZSxjKSxiLnJldHVybj1hLGI7aWYoXCJvYmplY3RcIj09PXR5cGVvZiBiJiZudWxsIT09Yil7c3dpdGNoKGIuJCR0eXBlb2Ype2Nhc2UgJGI6cmV0dXJuIGM9VmUoYixhLm1vZGUsYyksYy5yZWY9T2YoYSxudWxsLGIpLGMucmV0dXJuPWEsYztjYXNlIGFjOnJldHVybiBiPVllKGIsYS5tb2RlLGMpLGIucmV0dXJuPWEsYn1pZihOZihiKXx8a2MoYikpcmV0dXJuIGI9V2UoYixhLm1vZGUsYyxudWxsKSxiLnJldHVybj1cbmEsYjtQZihhLGIpfXJldHVybiBudWxsfWZ1bmN0aW9uIEEoYSxiLGMsZCl7dmFyIGU9bnVsbCE9PWI/Yi5rZXk6bnVsbDtpZihcInN0cmluZ1wiPT09dHlwZW9mIGN8fFwibnVtYmVyXCI9PT10eXBlb2YgYylyZXR1cm4gbnVsbCE9PWU/bnVsbDpoKGEsYixcIlwiK2MsZCk7aWYoXCJvYmplY3RcIj09PXR5cGVvZiBjJiZudWxsIT09Yyl7c3dpdGNoKGMuJCR0eXBlb2Ype2Nhc2UgJGI6cmV0dXJuIGMua2V5PT09ZT9jLnR5cGU9PT1iYz9tKGEsYixjLnByb3BzLmNoaWxkcmVuLGQsZSk6ayhhLGIsYyxkKTpudWxsO2Nhc2UgYWM6cmV0dXJuIGMua2V5PT09ZT9sKGEsYixjLGQpOm51bGx9aWYoTmYoYyl8fGtjKGMpKXJldHVybiBudWxsIT09ZT9udWxsOm0oYSxiLGMsZCxudWxsKTtQZihhLGMpfXJldHVybiBudWxsfWZ1bmN0aW9uIFMoYSxiLGMsZCxlKXtpZihcInN0cmluZ1wiPT09dHlwZW9mIGR8fFwibnVtYmVyXCI9PT10eXBlb2YgZClyZXR1cm4gYT1hLmdldChjKXx8bnVsbCxoKGIsYSxcIlwiK2QsZSk7XG5pZihcIm9iamVjdFwiPT09dHlwZW9mIGQmJm51bGwhPT1kKXtzd2l0Y2goZC4kJHR5cGVvZil7Y2FzZSAkYjpyZXR1cm4gYT1hLmdldChudWxsPT09ZC5rZXk/YzpkLmtleSl8fG51bGwsZC50eXBlPT09YmM/bShiLGEsZC5wcm9wcy5jaGlsZHJlbixlLGQua2V5KTprKGIsYSxkLGUpO2Nhc2UgYWM6cmV0dXJuIGE9YS5nZXQobnVsbD09PWQua2V5P2M6ZC5rZXkpfHxudWxsLGwoYixhLGQsZSl9aWYoTmYoZCl8fGtjKGQpKXJldHVybiBhPWEuZ2V0KGMpfHxudWxsLG0oYixhLGQsZSxudWxsKTtQZihiLGQpfXJldHVybiBudWxsfWZ1bmN0aW9uIEIoZSxnLGgsayl7Zm9yKHZhciBsPW51bGwsbT1udWxsLHA9Zyx1PWc9MCxxPW51bGw7bnVsbCE9PXAmJnU8aC5sZW5ndGg7dSsrKXtwLmluZGV4PnU/KHE9cCxwPW51bGwpOnE9cC5zaWJsaW5nO3ZhciB2PUEoZSxwLGhbdV0sayk7aWYobnVsbD09PXYpe251bGw9PT1wJiYocD1xKTticmVha31hJiZwJiZudWxsPT09di5hbHRlcm5hdGUmJmIoZSxcbnApO2c9Zih2LGcsdSk7bnVsbD09PW0/bD12Om0uc2libGluZz12O209djtwPXF9aWYodT09PWgubGVuZ3RoKXJldHVybiBjKGUscCksbDtpZihudWxsPT09cCl7Zm9yKDt1PGgubGVuZ3RoO3UrKylpZihwPXIoZSxoW3VdLGspKWc9ZihwLGcsdSksbnVsbD09PW0/bD1wOm0uc2libGluZz1wLG09cDtyZXR1cm4gbH1mb3IocD1kKGUscCk7dTxoLmxlbmd0aDt1KyspaWYocT1TKHAsZSx1LGhbdV0saykpYSYmbnVsbCE9PXEuYWx0ZXJuYXRlJiZwLmRlbGV0ZShudWxsPT09cS5rZXk/dTpxLmtleSksZz1mKHEsZyx1KSxudWxsPT09bT9sPXE6bS5zaWJsaW5nPXEsbT1xO2EmJnAuZm9yRWFjaChmdW5jdGlvbihhKXtyZXR1cm4gYihlLGEpfSk7cmV0dXJuIGx9ZnVuY3Rpb24gUChlLGcsaCxrKXt2YXIgbD1rYyhoKTtcImZ1bmN0aW9uXCIhPT10eXBlb2YgbD90KFwiMTUwXCIpOnZvaWQgMDtoPWwuY2FsbChoKTtudWxsPT1oP3QoXCIxNTFcIik6dm9pZCAwO2Zvcih2YXIgbT1sPW51bGwscD1nLHU9Zz1cbjAscT1udWxsLHY9aC5uZXh0KCk7bnVsbCE9PXAmJiF2LmRvbmU7dSsrLHY9aC5uZXh0KCkpe3AuaW5kZXg+dT8ocT1wLHA9bnVsbCk6cT1wLnNpYmxpbmc7dmFyIHg9QShlLHAsdi52YWx1ZSxrKTtpZihudWxsPT09eCl7cHx8KHA9cSk7YnJlYWt9YSYmcCYmbnVsbD09PXguYWx0ZXJuYXRlJiZiKGUscCk7Zz1mKHgsZyx1KTtudWxsPT09bT9sPXg6bS5zaWJsaW5nPXg7bT14O3A9cX1pZih2LmRvbmUpcmV0dXJuIGMoZSxwKSxsO2lmKG51bGw9PT1wKXtmb3IoOyF2LmRvbmU7dSsrLHY9aC5uZXh0KCkpdj1yKGUsdi52YWx1ZSxrKSxudWxsIT09diYmKGc9Zih2LGcsdSksbnVsbD09PW0/bD12Om0uc2libGluZz12LG09dik7cmV0dXJuIGx9Zm9yKHA9ZChlLHApOyF2LmRvbmU7dSsrLHY9aC5uZXh0KCkpdj1TKHAsZSx1LHYudmFsdWUsayksbnVsbCE9PXYmJihhJiZudWxsIT09di5hbHRlcm5hdGUmJnAuZGVsZXRlKG51bGw9PT12LmtleT91OnYua2V5KSxnPWYodixnLHUpLG51bGw9PT1cbm0/bD12Om0uc2libGluZz12LG09dik7YSYmcC5mb3JFYWNoKGZ1bmN0aW9uKGEpe3JldHVybiBiKGUsYSl9KTtyZXR1cm4gbH1yZXR1cm4gZnVuY3Rpb24oYSxkLGYsaCl7dmFyIGs9XCJvYmplY3RcIj09PXR5cGVvZiBmJiZudWxsIT09ZiYmZi50eXBlPT09YmMmJm51bGw9PT1mLmtleTtrJiYoZj1mLnByb3BzLmNoaWxkcmVuKTt2YXIgbD1cIm9iamVjdFwiPT09dHlwZW9mIGYmJm51bGwhPT1mO2lmKGwpc3dpdGNoKGYuJCR0eXBlb2Ype2Nhc2UgJGI6YTp7bD1mLmtleTtmb3Ioaz1kO251bGwhPT1rOyl7aWYoay5rZXk9PT1sKWlmKDk9PT1rLnRhZz9mLnR5cGU9PT1iYzprLnR5cGU9PT1mLnR5cGUpe2MoYSxrLnNpYmxpbmcpO2Q9ZShrLGYudHlwZT09PWJjP2YucHJvcHMuY2hpbGRyZW46Zi5wcm9wcyxoKTtkLnJlZj1PZihhLGssZik7ZC5yZXR1cm49YTthPWQ7YnJlYWsgYX1lbHNle2MoYSxrKTticmVha31lbHNlIGIoYSxrKTtrPWsuc2libGluZ31mLnR5cGU9PT1iYz8oZD1XZShmLnByb3BzLmNoaWxkcmVuLFxuYS5tb2RlLGgsZi5rZXkpLGQucmV0dXJuPWEsYT1kKTooaD1WZShmLGEubW9kZSxoKSxoLnJlZj1PZihhLGQsZiksaC5yZXR1cm49YSxhPWgpfXJldHVybiBnKGEpO2Nhc2UgYWM6YTp7Zm9yKGs9Zi5rZXk7bnVsbCE9PWQ7KXtpZihkLmtleT09PWspaWYoNj09PWQudGFnJiZkLnN0YXRlTm9kZS5jb250YWluZXJJbmZvPT09Zi5jb250YWluZXJJbmZvJiZkLnN0YXRlTm9kZS5pbXBsZW1lbnRhdGlvbj09PWYuaW1wbGVtZW50YXRpb24pe2MoYSxkLnNpYmxpbmcpO2Q9ZShkLGYuY2hpbGRyZW58fFtdLGgpO2QucmV0dXJuPWE7YT1kO2JyZWFrIGF9ZWxzZXtjKGEsZCk7YnJlYWt9ZWxzZSBiKGEsZCk7ZD1kLnNpYmxpbmd9ZD1ZZShmLGEubW9kZSxoKTtkLnJldHVybj1hO2E9ZH1yZXR1cm4gZyhhKX1pZihcInN0cmluZ1wiPT09dHlwZW9mIGZ8fFwibnVtYmVyXCI9PT10eXBlb2YgZilyZXR1cm4gZj1cIlwiK2YsbnVsbCE9PWQmJjg9PT1kLnRhZz8oYyhhLGQuc2libGluZyksZD1lKGQsZixoKSxkLnJldHVybj1cbmEsYT1kKTooYyhhLGQpLGQ9WGUoZixhLm1vZGUsaCksZC5yZXR1cm49YSxhPWQpLGcoYSk7aWYoTmYoZikpcmV0dXJuIEIoYSxkLGYsaCk7aWYoa2MoZikpcmV0dXJuIFAoYSxkLGYsaCk7bCYmUGYoYSxmKTtpZihcInVuZGVmaW5lZFwiPT09dHlwZW9mIGYmJiFrKXN3aXRjaChhLnRhZyl7Y2FzZSAyOmNhc2UgMzpjYXNlIDA6aD1hLnR5cGUsdChcIjE1MlwiLGguZGlzcGxheU5hbWV8fGgubmFtZXx8XCJDb21wb25lbnRcIil9cmV0dXJuIGMoYSxkKX19dmFyIFJmPVFmKCEwKSxTZj1RZighMSksVGY9bnVsbCxVZj1udWxsLFZmPSExO2Z1bmN0aW9uIFdmKGEsYil7dmFyIGM9bmV3IFNlKDcsbnVsbCxudWxsLDApO2MudHlwZT1cIkRFTEVURURcIjtjLnN0YXRlTm9kZT1iO2MucmV0dXJuPWE7Yy5lZmZlY3RUYWc9ODtudWxsIT09YS5sYXN0RWZmZWN0PyhhLmxhc3RFZmZlY3QubmV4dEVmZmVjdD1jLGEubGFzdEVmZmVjdD1jKTphLmZpcnN0RWZmZWN0PWEubGFzdEVmZmVjdD1jfVxuZnVuY3Rpb24gWGYoYSxiKXtzd2l0Y2goYS50YWcpe2Nhc2UgNzp2YXIgYz1hLnR5cGU7Yj0xIT09Yi5ub2RlVHlwZXx8Yy50b0xvd2VyQ2FzZSgpIT09Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpP251bGw6YjtyZXR1cm4gbnVsbCE9PWI/KGEuc3RhdGVOb2RlPWIsITApOiExO2Nhc2UgODpyZXR1cm4gYj1cIlwiPT09YS5wZW5kaW5nUHJvcHN8fDMhPT1iLm5vZGVUeXBlP251bGw6YixudWxsIT09Yj8oYS5zdGF0ZU5vZGU9YiwhMCk6ITE7ZGVmYXVsdDpyZXR1cm4hMX19ZnVuY3Rpb24gWWYoYSl7aWYoVmYpe3ZhciBiPVVmO2lmKGIpe3ZhciBjPWI7aWYoIVhmKGEsYikpe2I9QmUoYyk7aWYoIWJ8fCFYZihhLGIpKXthLmVmZmVjdFRhZ3w9MjtWZj0hMTtUZj1hO3JldHVybn1XZihUZixjKX1UZj1hO1VmPUNlKGIpfWVsc2UgYS5lZmZlY3RUYWd8PTIsVmY9ITEsVGY9YX19XG5mdW5jdGlvbiBaZihhKXtmb3IoYT1hLnJldHVybjtudWxsIT09YSYmNyE9PWEudGFnJiY1IT09YS50YWc7KWE9YS5yZXR1cm47VGY9YX1mdW5jdGlvbiAkZihhKXtpZihhIT09VGYpcmV0dXJuITE7aWYoIVZmKXJldHVybiBaZihhKSxWZj0hMCwhMTt2YXIgYj1hLnR5cGU7aWYoNyE9PWEudGFnfHxcImhlYWRcIiE9PWImJlwiYm9keVwiIT09YiYmIUFlKGIsYS5tZW1vaXplZFByb3BzKSlmb3IoYj1VZjtiOylXZihhLGIpLGI9QmUoYik7WmYoYSk7VWY9VGY/QmUoYS5zdGF0ZU5vZGUpOm51bGw7cmV0dXJuITB9ZnVuY3Rpb24gYWcoKXtVZj1UZj1udWxsO1ZmPSExfVxuZnVuY3Rpb24gYmcoYSl7c3dpdGNoKGEuX3JlYWN0U3RhdHVzKXtjYXNlIDE6cmV0dXJuIGEuX3JlYWN0UmVzdWx0O2Nhc2UgMjp0aHJvdyBhLl9yZWFjdFJlc3VsdDtjYXNlIDA6dGhyb3cgYTtkZWZhdWx0OnRocm93IGEuX3JlYWN0U3RhdHVzPTAsYS50aGVuKGZ1bmN0aW9uKGIpe2lmKDA9PT1hLl9yZWFjdFN0YXR1cyl7YS5fcmVhY3RTdGF0dXM9MTtpZihcIm9iamVjdFwiPT09dHlwZW9mIGImJm51bGwhPT1iKXt2YXIgYz1iLmRlZmF1bHQ7Yj12b2lkIDAhPT1jJiZudWxsIT09Yz9jOmJ9YS5fcmVhY3RSZXN1bHQ9Yn19LGZ1bmN0aW9uKGIpezA9PT1hLl9yZWFjdFN0YXR1cyYmKGEuX3JlYWN0U3RhdHVzPTIsYS5fcmVhY3RSZXN1bHQ9Yil9KSxhO319dmFyIGNnPVliLlJlYWN0Q3VycmVudE93bmVyO2Z1bmN0aW9uIE0oYSxiLGMsZCl7Yi5jaGlsZD1udWxsPT09YT9TZihiLG51bGwsYyxkKTpSZihiLGEuY2hpbGQsYyxkKX1cbmZ1bmN0aW9uIGRnKGEsYixjLGQsZSl7Yz1jLnJlbmRlcjt2YXIgZj1iLnJlZjtpZighSi5jdXJyZW50JiZiLm1lbW9pemVkUHJvcHM9PT1kJiZmPT09KG51bGwhPT1hP2EucmVmOm51bGwpKXJldHVybiBlZyhhLGIsZSk7Yz1jKGQsZik7TShhLGIsYyxlKTtiLm1lbW9pemVkUHJvcHM9ZDtyZXR1cm4gYi5jaGlsZH1mdW5jdGlvbiBmZyhhLGIpe3ZhciBjPWIucmVmO2lmKG51bGw9PT1hJiZudWxsIT09Y3x8bnVsbCE9PWEmJmEucmVmIT09YyliLmVmZmVjdFRhZ3w9MTI4fWZ1bmN0aW9uIGdnKGEsYixjLGQsZSl7dmFyIGY9SyhjKT9HZTpJLmN1cnJlbnQ7Zj1IZShiLGYpO3VmKGIsZSk7Yz1jKGQsZik7Yi5lZmZlY3RUYWd8PTE7TShhLGIsYyxlKTtiLm1lbW9pemVkUHJvcHM9ZDtyZXR1cm4gYi5jaGlsZH1cbmZ1bmN0aW9uIGhnKGEsYixjLGQsZSl7aWYoSyhjKSl7dmFyIGY9ITA7TWUoYil9ZWxzZSBmPSExO3VmKGIsZSk7aWYobnVsbD09PWEpaWYobnVsbD09PWIuc3RhdGVOb2RlKXt2YXIgZz1LKGMpP0dlOkkuY3VycmVudCxoPWMuY29udGV4dFR5cGVzLGs9bnVsbCE9PWgmJnZvaWQgMCE9PWg7aD1rP0hlKGIsZyk6RmU7dmFyIGw9bmV3IGMoZCxoKTtiLm1lbW9pemVkU3RhdGU9bnVsbCE9PWwuc3RhdGUmJnZvaWQgMCE9PWwuc3RhdGU/bC5zdGF0ZTpudWxsO2wudXBkYXRlcj1KZjtiLnN0YXRlTm9kZT1sO2wuX3JlYWN0SW50ZXJuYWxGaWJlcj1iO2smJihrPWIuc3RhdGVOb2RlLGsuX19yZWFjdEludGVybmFsTWVtb2l6ZWRVbm1hc2tlZENoaWxkQ29udGV4dD1nLGsuX19yZWFjdEludGVybmFsTWVtb2l6ZWRNYXNrZWRDaGlsZENvbnRleHQ9aCk7TWYoYixjLGQsZSk7ZD0hMH1lbHNle2c9Yi5zdGF0ZU5vZGU7aD1iLm1lbW9pemVkUHJvcHM7Zy5wcm9wcz1oO3ZhciBtPWcuY29udGV4dDtcbms9SyhjKT9HZTpJLmN1cnJlbnQ7az1IZShiLGspO3ZhciByPWMuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzOyhsPVwiZnVuY3Rpb25cIj09PXR5cGVvZiByfHxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSl8fFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzfHwoaCE9PWR8fG0hPT1rKSYmTGYoYixnLGQsayk7YWY9ITE7dmFyIEE9Yi5tZW1vaXplZFN0YXRlO209Zy5zdGF0ZT1BO3ZhciBTPWIudXBkYXRlUXVldWU7bnVsbCE9PVMmJihrZihiLFMsZCxnLGUpLG09Yi5tZW1vaXplZFN0YXRlKTtoIT09ZHx8QSE9PW18fEouY3VycmVudHx8YWY/KFwiZnVuY3Rpb25cIj09PXR5cGVvZiByJiYoRmYoYixjLHIsZCksbT1iLm1lbW9pemVkU3RhdGUpLChoPWFmfHxLZihiLGMsaCxkLEEsbSxrKSk/KGx8fFwiZnVuY3Rpb25cIiE9PVxudHlwZW9mIGcuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuY29tcG9uZW50V2lsbE1vdW50fHwoXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuY29tcG9uZW50V2lsbE1vdW50JiZnLmNvbXBvbmVudFdpbGxNb3VudCgpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQmJmcuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpKSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5jb21wb25lbnREaWRNb3VudCYmKGIuZWZmZWN0VGFnfD00KSk6KFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmNvbXBvbmVudERpZE1vdW50JiYoYi5lZmZlY3RUYWd8PTQpLGIubWVtb2l6ZWRQcm9wcz1kLGIubWVtb2l6ZWRTdGF0ZT1tKSxnLnByb3BzPWQsZy5zdGF0ZT1tLGcuY29udGV4dD1rLGQ9aCk6KFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmNvbXBvbmVudERpZE1vdW50JiYoYi5lZmZlY3RUYWd8PTQpLGQ9ITEpfWVsc2UgZz1iLnN0YXRlTm9kZSxoPVxuYi5tZW1vaXplZFByb3BzLGcucHJvcHM9aCxtPWcuY29udGV4dCxrPUsoYyk/R2U6SS5jdXJyZW50LGs9SGUoYixrKSxyPWMuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzLChsPVwiZnVuY3Rpb25cIj09PXR5cGVvZiByfHxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSl8fFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzfHwoaCE9PWR8fG0hPT1rKSYmTGYoYixnLGQsayksYWY9ITEsbT1iLm1lbW9pemVkU3RhdGUsQT1nLnN0YXRlPW0sUz1iLnVwZGF0ZVF1ZXVlLG51bGwhPT1TJiYoa2YoYixTLGQsZyxlKSxBPWIubWVtb2l6ZWRTdGF0ZSksaCE9PWR8fG0hPT1BfHxKLmN1cnJlbnR8fGFmPyhcImZ1bmN0aW9uXCI9PT10eXBlb2YgciYmKEZmKGIsYyxyLGQpLEE9Yi5tZW1vaXplZFN0YXRlKSwocj1hZnx8S2YoYixjLGgsZCxcbm0sQSxrKSk/KGx8fFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLlVOU0FGRV9jb21wb25lbnRXaWxsVXBkYXRlJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5jb21wb25lbnRXaWxsVXBkYXRlfHwoXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuY29tcG9uZW50V2lsbFVwZGF0ZSYmZy5jb21wb25lbnRXaWxsVXBkYXRlKGQsQSxrKSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5VTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZSYmZy5VTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZShkLEEsaykpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmNvbXBvbmVudERpZFVwZGF0ZSYmKGIuZWZmZWN0VGFnfD00KSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSYmKGIuZWZmZWN0VGFnfD0yNTYpKTooXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuY29tcG9uZW50RGlkVXBkYXRlfHxoPT09YS5tZW1vaXplZFByb3BzJiZtPT09YS5tZW1vaXplZFN0YXRlfHwoYi5lZmZlY3RUYWd8PTQpLFwiZnVuY3Rpb25cIiE9PVxudHlwZW9mIGcuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fGg9PT1hLm1lbW9pemVkUHJvcHMmJm09PT1hLm1lbW9pemVkU3RhdGV8fChiLmVmZmVjdFRhZ3w9MjU2KSxiLm1lbW9pemVkUHJvcHM9ZCxiLm1lbW9pemVkU3RhdGU9QSksZy5wcm9wcz1kLGcuc3RhdGU9QSxnLmNvbnRleHQ9ayxkPXIpOihcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5jb21wb25lbnREaWRVcGRhdGV8fGg9PT1hLm1lbW9pemVkUHJvcHMmJm09PT1hLm1lbW9pemVkU3RhdGV8fChiLmVmZmVjdFRhZ3w9NCksXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fGg9PT1hLm1lbW9pemVkUHJvcHMmJm09PT1hLm1lbW9pemVkU3RhdGV8fChiLmVmZmVjdFRhZ3w9MjU2KSxkPSExKTtyZXR1cm4gaWcoYSxiLGMsZCxmLGUpfVxuZnVuY3Rpb24gaWcoYSxiLGMsZCxlLGYpe2ZnKGEsYik7dmFyIGc9MCE9PShiLmVmZmVjdFRhZyY2NCk7aWYoIWQmJiFnKXJldHVybiBlJiZOZShiLGMsITEpLGVnKGEsYixmKTtkPWIuc3RhdGVOb2RlO2NnLmN1cnJlbnQ9Yjt2YXIgaD1nP251bGw6ZC5yZW5kZXIoKTtiLmVmZmVjdFRhZ3w9MTtudWxsIT09YSYmZyYmKE0oYSxiLG51bGwsZiksYi5jaGlsZD1udWxsKTtNKGEsYixoLGYpO2IubWVtb2l6ZWRTdGF0ZT1kLnN0YXRlO2IubWVtb2l6ZWRQcm9wcz1kLnByb3BzO2UmJk5lKGIsYywhMCk7cmV0dXJuIGIuY2hpbGR9ZnVuY3Rpb24gamcoYSl7dmFyIGI9YS5zdGF0ZU5vZGU7Yi5wZW5kaW5nQ29udGV4dD9LZShhLGIucGVuZGluZ0NvbnRleHQsYi5wZW5kaW5nQ29udGV4dCE9PWIuY29udGV4dCk6Yi5jb250ZXh0JiZLZShhLGIuY29udGV4dCwhMSk7QWYoYSxiLmNvbnRhaW5lckluZm8pfVxuZnVuY3Rpb24gbmcoYSxiKXtpZihhJiZhLmRlZmF1bHRQcm9wcyl7Yj1uKHt9LGIpO2E9YS5kZWZhdWx0UHJvcHM7Zm9yKHZhciBjIGluIGEpdm9pZCAwPT09YltjXSYmKGJbY109YVtjXSl9cmV0dXJuIGJ9XG5mdW5jdGlvbiBvZyhhLGIsYyxkKXtudWxsIT09YT90KFwiMTU1XCIpOnZvaWQgMDt2YXIgZT1iLnBlbmRpbmdQcm9wcztpZihcIm9iamVjdFwiPT09dHlwZW9mIGMmJm51bGwhPT1jJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgYy50aGVuKXtjPWJnKGMpO3ZhciBmPWM7Zj1cImZ1bmN0aW9uXCI9PT10eXBlb2YgZj9UZShmKT8zOjE6dm9pZCAwIT09ZiYmbnVsbCE9PWYmJmYuJCR0eXBlb2Y/MTQ6NDtmPWIudGFnPWY7dmFyIGc9bmcoYyxlKTtzd2l0Y2goZil7Y2FzZSAxOnJldHVybiBnZyhhLGIsYyxnLGQpO2Nhc2UgMzpyZXR1cm4gaGcoYSxiLGMsZyxkKTtjYXNlIDE0OnJldHVybiBkZyhhLGIsYyxnLGQpO2RlZmF1bHQ6dChcIjI4M1wiLGMpfX1mPUhlKGIsSS5jdXJyZW50KTt1ZihiLGQpO2Y9YyhlLGYpO2IuZWZmZWN0VGFnfD0xO2lmKFwib2JqZWN0XCI9PT10eXBlb2YgZiYmbnVsbCE9PWYmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBmLnJlbmRlciYmdm9pZCAwPT09Zi4kJHR5cGVvZil7Yi50YWc9MjtLKGMpP1xuKGc9ITAsTWUoYikpOmc9ITE7Yi5tZW1vaXplZFN0YXRlPW51bGwhPT1mLnN0YXRlJiZ2b2lkIDAhPT1mLnN0YXRlP2Yuc3RhdGU6bnVsbDt2YXIgaD1jLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcztcImZ1bmN0aW9uXCI9PT10eXBlb2YgaCYmRmYoYixjLGgsZSk7Zi51cGRhdGVyPUpmO2Iuc3RhdGVOb2RlPWY7Zi5fcmVhY3RJbnRlcm5hbEZpYmVyPWI7TWYoYixjLGUsZCk7cmV0dXJuIGlnKGEsYixjLCEwLGcsZCl9Yi50YWc9MDtNKGEsYixmLGQpO2IubWVtb2l6ZWRQcm9wcz1lO3JldHVybiBiLmNoaWxkfVxuZnVuY3Rpb24gZWcoYSxiLGMpe251bGwhPT1hJiYoYi5maXJzdENvbnRleHREZXBlbmRlbmN5PWEuZmlyc3RDb250ZXh0RGVwZW5kZW5jeSk7dmFyIGQ9Yi5jaGlsZEV4cGlyYXRpb25UaW1lO2lmKDA9PT1kfHxkPmMpcmV0dXJuIG51bGw7bnVsbCE9PWEmJmIuY2hpbGQhPT1hLmNoaWxkP3QoXCIxNTNcIik6dm9pZCAwO2lmKG51bGwhPT1iLmNoaWxkKXthPWIuY2hpbGQ7Yz1VZShhLGEucGVuZGluZ1Byb3BzLGEuZXhwaXJhdGlvblRpbWUpO2IuY2hpbGQ9Yztmb3IoYy5yZXR1cm49YjtudWxsIT09YS5zaWJsaW5nOylhPWEuc2libGluZyxjPWMuc2libGluZz1VZShhLGEucGVuZGluZ1Byb3BzLGEuZXhwaXJhdGlvblRpbWUpLGMucmV0dXJuPWI7Yy5zaWJsaW5nPW51bGx9cmV0dXJuIGIuY2hpbGR9XG5mdW5jdGlvbiBwZyhhLGIsYyl7dmFyIGQ9Yi5leHBpcmF0aW9uVGltZTtpZighSi5jdXJyZW50JiYoMD09PWR8fGQ+Yykpe3N3aXRjaChiLnRhZyl7Y2FzZSA1OmpnKGIpO2FnKCk7YnJlYWs7Y2FzZSA3OkNmKGIpO2JyZWFrO2Nhc2UgMjpLKGIudHlwZSkmJk1lKGIpO2JyZWFrO2Nhc2UgMzpLKGIudHlwZS5fcmVhY3RSZXN1bHQpJiZNZShiKTticmVhaztjYXNlIDY6QWYoYixiLnN0YXRlTm9kZS5jb250YWluZXJJbmZvKTticmVhaztjYXNlIDEyOnNmKGIsYi5tZW1vaXplZFByb3BzLnZhbHVlKX1yZXR1cm4gZWcoYSxiLGMpfWIuZXhwaXJhdGlvblRpbWU9MDtzd2l0Y2goYi50YWcpe2Nhc2UgNDpyZXR1cm4gb2coYSxiLGIudHlwZSxjKTtjYXNlIDA6cmV0dXJuIGdnKGEsYixiLnR5cGUsYi5wZW5kaW5nUHJvcHMsYyk7Y2FzZSAxOnZhciBlPWIudHlwZS5fcmVhY3RSZXN1bHQ7ZD1iLnBlbmRpbmdQcm9wczthPWdnKGEsYixlLG5nKGUsZCksYyk7Yi5tZW1vaXplZFByb3BzPWQ7cmV0dXJuIGE7XG5jYXNlIDI6cmV0dXJuIGhnKGEsYixiLnR5cGUsYi5wZW5kaW5nUHJvcHMsYyk7Y2FzZSAzOnJldHVybiBlPWIudHlwZS5fcmVhY3RSZXN1bHQsZD1iLnBlbmRpbmdQcm9wcyxhPWhnKGEsYixlLG5nKGUsZCksYyksYi5tZW1vaXplZFByb3BzPWQsYTtjYXNlIDU6amcoYik7ZD1iLnVwZGF0ZVF1ZXVlO251bGw9PT1kP3QoXCIyODJcIik6dm9pZCAwO2U9Yi5tZW1vaXplZFN0YXRlO2U9bnVsbCE9PWU/ZS5lbGVtZW50Om51bGw7a2YoYixkLGIucGVuZGluZ1Byb3BzLG51bGwsYyk7ZD1iLm1lbW9pemVkU3RhdGUuZWxlbWVudDtpZihkPT09ZSlhZygpLGI9ZWcoYSxiLGMpO2Vsc2V7ZT1iLnN0YXRlTm9kZTtpZihlPShudWxsPT09YXx8bnVsbD09PWEuY2hpbGQpJiZlLmh5ZHJhdGUpVWY9Q2UoYi5zdGF0ZU5vZGUuY29udGFpbmVySW5mbyksVGY9YixlPVZmPSEwO2U/KGIuZWZmZWN0VGFnfD0yLGIuY2hpbGQ9U2YoYixudWxsLGQsYykpOihNKGEsYixkLGMpLGFnKCkpO2I9Yi5jaGlsZH1yZXR1cm4gYjtcbmNhc2UgNzpDZihiKTtudWxsPT09YSYmWWYoYik7ZD1iLnR5cGU7ZT1iLnBlbmRpbmdQcm9wczt2YXIgZj1udWxsIT09YT9hLm1lbW9pemVkUHJvcHM6bnVsbCxnPWUuY2hpbGRyZW47QWUoZCxlKT9nPW51bGw6bnVsbCE9PWYmJkFlKGQsZikmJihiLmVmZmVjdFRhZ3w9MTYpO2ZnKGEsYik7MTA3Mzc0MTgyMyE9PWMmJmIubW9kZSYxJiZlLmhpZGRlbj8oYi5leHBpcmF0aW9uVGltZT0xMDczNzQxODIzLGIubWVtb2l6ZWRQcm9wcz1lLGI9bnVsbCk6KE0oYSxiLGcsYyksYi5tZW1vaXplZFByb3BzPWUsYj1iLmNoaWxkKTtyZXR1cm4gYjtjYXNlIDg6cmV0dXJuIG51bGw9PT1hJiZZZihiKSxiLm1lbW9pemVkUHJvcHM9Yi5wZW5kaW5nUHJvcHMsbnVsbDtjYXNlIDE2OnJldHVybiBudWxsO2Nhc2UgNjpyZXR1cm4gQWYoYixiLnN0YXRlTm9kZS5jb250YWluZXJJbmZvKSxkPWIucGVuZGluZ1Byb3BzLG51bGw9PT1hP2IuY2hpbGQ9UmYoYixudWxsLGQsYyk6TShhLGIsZCxjKSxiLm1lbW9pemVkUHJvcHM9XG5kLGIuY2hpbGQ7Y2FzZSAxMzpyZXR1cm4gZGcoYSxiLGIudHlwZSxiLnBlbmRpbmdQcm9wcyxjKTtjYXNlIDE0OnJldHVybiBlPWIudHlwZS5fcmVhY3RSZXN1bHQsZD1iLnBlbmRpbmdQcm9wcyxhPWRnKGEsYixlLG5nKGUsZCksYyksYi5tZW1vaXplZFByb3BzPWQsYTtjYXNlIDk6cmV0dXJuIGQ9Yi5wZW5kaW5nUHJvcHMsTShhLGIsZCxjKSxiLm1lbW9pemVkUHJvcHM9ZCxiLmNoaWxkO2Nhc2UgMTA6cmV0dXJuIGQ9Yi5wZW5kaW5nUHJvcHMuY2hpbGRyZW4sTShhLGIsZCxjKSxiLm1lbW9pemVkUHJvcHM9ZCxiLmNoaWxkO2Nhc2UgMTU6cmV0dXJuIGQ9Yi5wZW5kaW5nUHJvcHMsTShhLGIsZC5jaGlsZHJlbixjKSxiLm1lbW9pemVkUHJvcHM9ZCxiLmNoaWxkO2Nhc2UgMTI6YTp7ZD1iLnR5cGUuX2NvbnRleHQ7ZT1iLnBlbmRpbmdQcm9wcztnPWIubWVtb2l6ZWRQcm9wcztmPWUudmFsdWU7Yi5tZW1vaXplZFByb3BzPWU7c2YoYixmKTtpZihudWxsIT09Zyl7dmFyIGg9Zy52YWx1ZTtcbmY9aD09PWYmJigwIT09aHx8MS9oPT09MS9mKXx8aCE9PWgmJmYhPT1mPzA6KFwiZnVuY3Rpb25cIj09PXR5cGVvZiBkLl9jYWxjdWxhdGVDaGFuZ2VkQml0cz9kLl9jYWxjdWxhdGVDaGFuZ2VkQml0cyhoLGYpOjEwNzM3NDE4MjMpfDA7aWYoMD09PWYpe2lmKGcuY2hpbGRyZW49PT1lLmNoaWxkcmVuJiYhSi5jdXJyZW50KXtiPWVnKGEsYixjKTticmVhayBhfX1lbHNlIGZvcihnPWIuY2hpbGQsbnVsbCE9PWcmJihnLnJldHVybj1iKTtudWxsIT09Zzspe2g9Zy5maXJzdENvbnRleHREZXBlbmRlbmN5O2lmKG51bGwhPT1oKXtkb3tpZihoLmNvbnRleHQ9PT1kJiYwIT09KGgub2JzZXJ2ZWRCaXRzJmYpKXtpZigyPT09Zy50YWd8fDM9PT1nLnRhZyl7dmFyIGs9ZGYoYyk7ay50YWc9MjtmZihnLGspfWlmKDA9PT1nLmV4cGlyYXRpb25UaW1lfHxnLmV4cGlyYXRpb25UaW1lPmMpZy5leHBpcmF0aW9uVGltZT1jO2s9Zy5hbHRlcm5hdGU7bnVsbCE9PWsmJigwPT09ay5leHBpcmF0aW9uVGltZXx8XG5rLmV4cGlyYXRpb25UaW1lPmMpJiYoay5leHBpcmF0aW9uVGltZT1jKTtmb3IodmFyIGw9Zy5yZXR1cm47bnVsbCE9PWw7KXtrPWwuYWx0ZXJuYXRlO2lmKDA9PT1sLmNoaWxkRXhwaXJhdGlvblRpbWV8fGwuY2hpbGRFeHBpcmF0aW9uVGltZT5jKWwuY2hpbGRFeHBpcmF0aW9uVGltZT1jLG51bGwhPT1rJiYoMD09PWsuY2hpbGRFeHBpcmF0aW9uVGltZXx8ay5jaGlsZEV4cGlyYXRpb25UaW1lPmMpJiYoay5jaGlsZEV4cGlyYXRpb25UaW1lPWMpO2Vsc2UgaWYobnVsbCE9PWsmJigwPT09ay5jaGlsZEV4cGlyYXRpb25UaW1lfHxrLmNoaWxkRXhwaXJhdGlvblRpbWU+Yykpay5jaGlsZEV4cGlyYXRpb25UaW1lPWM7ZWxzZSBicmVhaztsPWwucmV0dXJufX1rPWcuY2hpbGQ7aD1oLm5leHR9d2hpbGUobnVsbCE9PWgpfWVsc2Ugaz0xMj09PWcudGFnP2cudHlwZT09PWIudHlwZT9udWxsOmcuY2hpbGQ6Zy5jaGlsZDtpZihudWxsIT09aylrLnJldHVybj1nO2Vsc2UgZm9yKGs9ZztudWxsIT09XG5rOyl7aWYoaz09PWIpe2s9bnVsbDticmVha31nPWsuc2libGluZztpZihudWxsIT09Zyl7Zy5yZXR1cm49ay5yZXR1cm47az1nO2JyZWFrfWs9ay5yZXR1cm59Zz1rfX1NKGEsYixlLmNoaWxkcmVuLGMpO2I9Yi5jaGlsZH1yZXR1cm4gYjtjYXNlIDExOnJldHVybiBmPWIudHlwZSxkPWIucGVuZGluZ1Byb3BzLGU9ZC5jaGlsZHJlbix1ZihiLGMpLGY9dmYoZixkLnVuc3RhYmxlX29ic2VydmVkQml0cyksZT1lKGYpLGIuZWZmZWN0VGFnfD0xLE0oYSxiLGUsYyksYi5tZW1vaXplZFByb3BzPWQsYi5jaGlsZDtkZWZhdWx0OnQoXCIxNTZcIil9fWZ1bmN0aW9uIHFnKGEpe2EuZWZmZWN0VGFnfD00fXZhciByZz12b2lkIDAsc2c9dm9pZCAwLHRnPXZvaWQgMDtyZz1mdW5jdGlvbigpe307XG5zZz1mdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmPWEubWVtb2l6ZWRQcm9wcztpZihmIT09ZCl7dmFyIGc9Yi5zdGF0ZU5vZGU7emYoTC5jdXJyZW50KTthPW51bGw7c3dpdGNoKGMpe2Nhc2UgXCJpbnB1dFwiOmY9emMoZyxmKTtkPXpjKGcsZCk7YT1bXTticmVhaztjYXNlIFwib3B0aW9uXCI6Zj1kZShnLGYpO2Q9ZGUoZyxkKTthPVtdO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjpmPW4oe30sZix7dmFsdWU6dm9pZCAwfSk7ZD1uKHt9LGQse3ZhbHVlOnZvaWQgMH0pO2E9W107YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6Zj1mZShnLGYpO2Q9ZmUoZyxkKTthPVtdO2JyZWFrO2RlZmF1bHQ6XCJmdW5jdGlvblwiIT09dHlwZW9mIGYub25DbGljayYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGQub25DbGljayYmKGcub25jbGljaz13ZSl9dGUoYyxkKTtnPWM9dm9pZCAwO3ZhciBoPW51bGw7Zm9yKGMgaW4gZilpZighZC5oYXNPd25Qcm9wZXJ0eShjKSYmZi5oYXNPd25Qcm9wZXJ0eShjKSYmbnVsbCE9ZltjXSlpZihcInN0eWxlXCI9PT1cbmMpe3ZhciBrPWZbY107Zm9yKGcgaW4gaylrLmhhc093blByb3BlcnR5KGcpJiYoaHx8KGg9e30pLGhbZ109XCJcIil9ZWxzZVwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIiE9PWMmJlwiY2hpbGRyZW5cIiE9PWMmJlwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nXCIhPT1jJiZcInN1cHByZXNzSHlkcmF0aW9uV2FybmluZ1wiIT09YyYmXCJhdXRvRm9jdXNcIiE9PWMmJihzYS5oYXNPd25Qcm9wZXJ0eShjKT9hfHwoYT1bXSk6KGE9YXx8W10pLnB1c2goYyxudWxsKSk7Zm9yKGMgaW4gZCl7dmFyIGw9ZFtjXTtrPW51bGwhPWY/ZltjXTp2b2lkIDA7aWYoZC5oYXNPd25Qcm9wZXJ0eShjKSYmbCE9PWsmJihudWxsIT1sfHxudWxsIT1rKSlpZihcInN0eWxlXCI9PT1jKWlmKGspe2ZvcihnIGluIGspIWsuaGFzT3duUHJvcGVydHkoZyl8fGwmJmwuaGFzT3duUHJvcGVydHkoZyl8fChofHwoaD17fSksaFtnXT1cIlwiKTtmb3IoZyBpbiBsKWwuaGFzT3duUHJvcGVydHkoZykmJmtbZ10hPT1sW2ddJiYoaHx8XG4oaD17fSksaFtnXT1sW2ddKX1lbHNlIGh8fChhfHwoYT1bXSksYS5wdXNoKGMsaCkpLGg9bDtlbHNlXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiPT09Yz8obD1sP2wuX19odG1sOnZvaWQgMCxrPWs/ay5fX2h0bWw6dm9pZCAwLG51bGwhPWwmJmshPT1sJiYoYT1hfHxbXSkucHVzaChjLFwiXCIrbCkpOlwiY2hpbGRyZW5cIj09PWM/az09PWx8fFwic3RyaW5nXCIhPT10eXBlb2YgbCYmXCJudW1iZXJcIiE9PXR5cGVvZiBsfHwoYT1hfHxbXSkucHVzaChjLFwiXCIrbCk6XCJzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmdcIiE9PWMmJlwic3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nXCIhPT1jJiYoc2EuaGFzT3duUHJvcGVydHkoYyk/KG51bGwhPWwmJnZlKGUsYyksYXx8az09PWx8fChhPVtdKSk6KGE9YXx8W10pLnB1c2goYyxsKSl9aCYmKGE9YXx8W10pLnB1c2goXCJzdHlsZVwiLGgpO2U9YTsoYi51cGRhdGVRdWV1ZT1lKSYmcWcoYil9fTt0Zz1mdW5jdGlvbihhLGIsYyxkKXtjIT09ZCYmcWcoYil9O1xuZnVuY3Rpb24gdWcoYSxiKXt2YXIgYz1iLnNvdXJjZSxkPWIuc3RhY2s7bnVsbD09PWQmJm51bGwhPT1jJiYoZD1tYyhjKSk7bnVsbCE9PWMmJmxjKGMudHlwZSk7Yj1iLnZhbHVlO251bGwhPT1hJiYyPT09YS50YWcmJmxjKGEudHlwZSk7dHJ5e2NvbnNvbGUuZXJyb3IoYil9Y2F0Y2goZSl7c2V0VGltZW91dChmdW5jdGlvbigpe3Rocm93IGU7fSl9fWZ1bmN0aW9uIHZnKGEpe3ZhciBiPWEucmVmO2lmKG51bGwhPT1iKWlmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBiKXRyeXtiKG51bGwpfWNhdGNoKGMpe3dnKGEsYyl9ZWxzZSBiLmN1cnJlbnQ9bnVsbH1cbmZ1bmN0aW9uIHhnKGEpe1wiZnVuY3Rpb25cIj09PXR5cGVvZiBQZSYmUGUoYSk7c3dpdGNoKGEudGFnKXtjYXNlIDI6Y2FzZSAzOnZnKGEpO3ZhciBiPWEuc3RhdGVOb2RlO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBiLmNvbXBvbmVudFdpbGxVbm1vdW50KXRyeXtiLnByb3BzPWEubWVtb2l6ZWRQcm9wcyxiLnN0YXRlPWEubWVtb2l6ZWRTdGF0ZSxiLmNvbXBvbmVudFdpbGxVbm1vdW50KCl9Y2F0Y2goYyl7d2coYSxjKX1icmVhaztjYXNlIDc6dmcoYSk7YnJlYWs7Y2FzZSA2OnlnKGEpfX1mdW5jdGlvbiB6ZyhhKXtyZXR1cm4gNz09PWEudGFnfHw1PT09YS50YWd8fDY9PT1hLnRhZ31cbmZ1bmN0aW9uIEFnKGEpe2E6e2Zvcih2YXIgYj1hLnJldHVybjtudWxsIT09Yjspe2lmKHpnKGIpKXt2YXIgYz1iO2JyZWFrIGF9Yj1iLnJldHVybn10KFwiMTYwXCIpO2M9dm9pZCAwfXZhciBkPWI9dm9pZCAwO3N3aXRjaChjLnRhZyl7Y2FzZSA3OmI9Yy5zdGF0ZU5vZGU7ZD0hMTticmVhaztjYXNlIDU6Yj1jLnN0YXRlTm9kZS5jb250YWluZXJJbmZvO2Q9ITA7YnJlYWs7Y2FzZSA2OmI9Yy5zdGF0ZU5vZGUuY29udGFpbmVySW5mbztkPSEwO2JyZWFrO2RlZmF1bHQ6dChcIjE2MVwiKX1jLmVmZmVjdFRhZyYxNiYmKG9lKGIsXCJcIiksYy5lZmZlY3RUYWcmPS0xNyk7YTpiOmZvcihjPWE7Oyl7Zm9yKDtudWxsPT09Yy5zaWJsaW5nOyl7aWYobnVsbD09PWMucmV0dXJufHx6ZyhjLnJldHVybikpe2M9bnVsbDticmVhayBhfWM9Yy5yZXR1cm59Yy5zaWJsaW5nLnJldHVybj1jLnJldHVybjtmb3IoYz1jLnNpYmxpbmc7NyE9PWMudGFnJiY4IT09Yy50YWc7KXtpZihjLmVmZmVjdFRhZyYyKWNvbnRpbnVlIGI7XG5pZihudWxsPT09Yy5jaGlsZHx8Nj09PWMudGFnKWNvbnRpbnVlIGI7ZWxzZSBjLmNoaWxkLnJldHVybj1jLGM9Yy5jaGlsZH1pZighKGMuZWZmZWN0VGFnJjIpKXtjPWMuc3RhdGVOb2RlO2JyZWFrIGF9fWZvcih2YXIgZT1hOzspe2lmKDc9PT1lLnRhZ3x8OD09PWUudGFnKWlmKGMpaWYoZCl7dmFyIGY9YixnPWUuc3RhdGVOb2RlLGg9Yzs4PT09Zi5ub2RlVHlwZT9mLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGcsaCk6Zi5pbnNlcnRCZWZvcmUoZyxoKX1lbHNlIGIuaW5zZXJ0QmVmb3JlKGUuc3RhdGVOb2RlLGMpO2Vsc2UgZD8oZj1iLGc9ZS5zdGF0ZU5vZGUsOD09PWYubm9kZVR5cGU/KGg9Zi5wYXJlbnROb2RlLGguaW5zZXJ0QmVmb3JlKGcsZikpOihoPWYsaC5hcHBlbmRDaGlsZChnKSksbnVsbD09PWgub25jbGljayYmKGgub25jbGljaz13ZSkpOmIuYXBwZW5kQ2hpbGQoZS5zdGF0ZU5vZGUpO2Vsc2UgaWYoNiE9PWUudGFnJiZudWxsIT09ZS5jaGlsZCl7ZS5jaGlsZC5yZXR1cm49XG5lO2U9ZS5jaGlsZDtjb250aW51ZX1pZihlPT09YSlicmVhaztmb3IoO251bGw9PT1lLnNpYmxpbmc7KXtpZihudWxsPT09ZS5yZXR1cm58fGUucmV0dXJuPT09YSlyZXR1cm47ZT1lLnJldHVybn1lLnNpYmxpbmcucmV0dXJuPWUucmV0dXJuO2U9ZS5zaWJsaW5nfX1cbmZ1bmN0aW9uIHlnKGEpe2Zvcih2YXIgYj1hLGM9ITEsZD12b2lkIDAsZT12b2lkIDA7Oyl7aWYoIWMpe2M9Yi5yZXR1cm47YTpmb3IoOzspe251bGw9PT1jP3QoXCIxNjBcIik6dm9pZCAwO3N3aXRjaChjLnRhZyl7Y2FzZSA3OmQ9Yy5zdGF0ZU5vZGU7ZT0hMTticmVhayBhO2Nhc2UgNTpkPWMuc3RhdGVOb2RlLmNvbnRhaW5lckluZm87ZT0hMDticmVhayBhO2Nhc2UgNjpkPWMuc3RhdGVOb2RlLmNvbnRhaW5lckluZm87ZT0hMDticmVhayBhfWM9Yy5yZXR1cm59Yz0hMH1pZig3PT09Yi50YWd8fDg9PT1iLnRhZyl7YTpmb3IodmFyIGY9YixnPWY7OylpZih4ZyhnKSxudWxsIT09Zy5jaGlsZCYmNiE9PWcudGFnKWcuY2hpbGQucmV0dXJuPWcsZz1nLmNoaWxkO2Vsc2V7aWYoZz09PWYpYnJlYWs7Zm9yKDtudWxsPT09Zy5zaWJsaW5nOyl7aWYobnVsbD09PWcucmV0dXJufHxnLnJldHVybj09PWYpYnJlYWsgYTtnPWcucmV0dXJufWcuc2libGluZy5yZXR1cm49Zy5yZXR1cm47Zz1nLnNpYmxpbmd9ZT9cbihmPWQsZz1iLnN0YXRlTm9kZSw4PT09Zi5ub2RlVHlwZT9mLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZyk6Zi5yZW1vdmVDaGlsZChnKSk6ZC5yZW1vdmVDaGlsZChiLnN0YXRlTm9kZSl9ZWxzZSBpZig2PT09Yi50YWc/KGQ9Yi5zdGF0ZU5vZGUuY29udGFpbmVySW5mbyxlPSEwKTp4ZyhiKSxudWxsIT09Yi5jaGlsZCl7Yi5jaGlsZC5yZXR1cm49YjtiPWIuY2hpbGQ7Y29udGludWV9aWYoYj09PWEpYnJlYWs7Zm9yKDtudWxsPT09Yi5zaWJsaW5nOyl7aWYobnVsbD09PWIucmV0dXJufHxiLnJldHVybj09PWEpcmV0dXJuO2I9Yi5yZXR1cm47Nj09PWIudGFnJiYoYz0hMSl9Yi5zaWJsaW5nLnJldHVybj1iLnJldHVybjtiPWIuc2libGluZ319XG5mdW5jdGlvbiBCZyhhLGIpe3N3aXRjaChiLnRhZyl7Y2FzZSAyOmNhc2UgMzpicmVhaztjYXNlIDc6dmFyIGM9Yi5zdGF0ZU5vZGU7aWYobnVsbCE9Yyl7dmFyIGQ9Yi5tZW1vaXplZFByb3BzLGU9bnVsbCE9PWE/YS5tZW1vaXplZFByb3BzOmQ7YT1iLnR5cGU7dmFyIGY9Yi51cGRhdGVRdWV1ZTtiLnVwZGF0ZVF1ZXVlPW51bGw7aWYobnVsbCE9PWYpe2NbSmFdPWQ7XCJpbnB1dFwiPT09YSYmXCJyYWRpb1wiPT09ZC50eXBlJiZudWxsIT1kLm5hbWUmJkNjKGMsZCk7dWUoYSxlKTtiPXVlKGEsZCk7Zm9yKGU9MDtlPGYubGVuZ3RoO2UrPTIpe3ZhciBnPWZbZV0saD1mW2UrMV07XCJzdHlsZVwiPT09Zz9yZShjLGgpOlwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIj09PWc/bmUoYyxoKTpcImNoaWxkcmVuXCI9PT1nP29lKGMsaCk6eGMoYyxnLGgsYil9c3dpdGNoKGEpe2Nhc2UgXCJpbnB1dFwiOkRjKGMsZCk7YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6aGUoYyxkKTticmVhaztjYXNlIFwic2VsZWN0XCI6YT1jLl93cmFwcGVyU3RhdGUud2FzTXVsdGlwbGUsXG5jLl93cmFwcGVyU3RhdGUud2FzTXVsdGlwbGU9ISFkLm11bHRpcGxlLGY9ZC52YWx1ZSxudWxsIT1mP2VlKGMsISFkLm11bHRpcGxlLGYsITEpOmEhPT0hIWQubXVsdGlwbGUmJihudWxsIT1kLmRlZmF1bHRWYWx1ZT9lZShjLCEhZC5tdWx0aXBsZSxkLmRlZmF1bHRWYWx1ZSwhMCk6ZWUoYywhIWQubXVsdGlwbGUsZC5tdWx0aXBsZT9bXTpcIlwiLCExKSl9fX1icmVhaztjYXNlIDg6bnVsbD09PWIuc3RhdGVOb2RlP3QoXCIxNjJcIik6dm9pZCAwO2Iuc3RhdGVOb2RlLm5vZGVWYWx1ZT1iLm1lbW9pemVkUHJvcHM7YnJlYWs7Y2FzZSA1OmJyZWFrO2Nhc2UgMTU6YnJlYWs7Y2FzZSAxNjpicmVhaztkZWZhdWx0OnQoXCIxNjNcIil9fWZ1bmN0aW9uIENnKGEsYixjKXtjPWRmKGMpO2MudGFnPTM7Yy5wYXlsb2FkPXtlbGVtZW50Om51bGx9O3ZhciBkPWIudmFsdWU7Yy5jYWxsYmFjaz1mdW5jdGlvbigpe0RnKGQpO3VnKGEsYil9O3JldHVybiBjfVxuZnVuY3Rpb24gRWcoYSxiLGMpe2M9ZGYoYyk7Yy50YWc9Mzt2YXIgZD1hLnN0YXRlTm9kZTtudWxsIT09ZCYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGQuY29tcG9uZW50RGlkQ2F0Y2gmJihjLmNhbGxiYWNrPWZ1bmN0aW9uKCl7bnVsbD09PUZnP0ZnPW5ldyBTZXQoW3RoaXNdKTpGZy5hZGQodGhpcyk7dmFyIGM9Yi52YWx1ZSxkPWIuc3RhY2s7dWcoYSxiKTt0aGlzLmNvbXBvbmVudERpZENhdGNoKGMse2NvbXBvbmVudFN0YWNrOm51bGwhPT1kP2Q6XCJcIn0pfSk7cmV0dXJuIGN9XG5mdW5jdGlvbiBHZyhhKXtzd2l0Y2goYS50YWcpe2Nhc2UgMjpLKGEudHlwZSkmJkllKGEpO3ZhciBiPWEuZWZmZWN0VGFnO3JldHVybiBiJjEwMjQ/KGEuZWZmZWN0VGFnPWImLTEwMjV8NjQsYSk6bnVsbDtjYXNlIDM6cmV0dXJuIEsoYS50eXBlLl9yZWFjdFJlc3VsdCkmJkllKGEpLGI9YS5lZmZlY3RUYWcsYiYxMDI0PyhhLmVmZmVjdFRhZz1iJi0xMDI1fDY0LGEpOm51bGw7Y2FzZSA1OnJldHVybiBCZihhKSxKZShhKSxiPWEuZWZmZWN0VGFnLDAhPT0oYiY2NCk/dChcIjI4NVwiKTp2b2lkIDAsYS5lZmZlY3RUYWc9YiYtMTAyNXw2NCxhO2Nhc2UgNzpyZXR1cm4gRGYoYSksbnVsbDtjYXNlIDE2OnJldHVybiBiPWEuZWZmZWN0VGFnLGImMTAyND8oYS5lZmZlY3RUYWc9YiYtMTAyNXw2NCxhKTpudWxsO2Nhc2UgNjpyZXR1cm4gQmYoYSksbnVsbDtjYXNlIDEyOnJldHVybiB0ZihhKSxudWxsO2RlZmF1bHQ6cmV0dXJuIG51bGx9fVxudmFyIEhnPXtyZWFkQ29udGV4dDp2Zn0sSWc9WWIuUmVhY3RDdXJyZW50T3duZXIsSmc9MCxLZz0wLExnPSExLE49bnVsbCxNZz1udWxsLE89MCxOZz0hMSxRPW51bGwsT2c9ITEsRmc9bnVsbDtmdW5jdGlvbiBQZygpe2lmKG51bGwhPT1OKWZvcih2YXIgYT1OLnJldHVybjtudWxsIT09YTspe3ZhciBiPWE7c3dpdGNoKGIudGFnKXtjYXNlIDI6dmFyIGM9Yi50eXBlLmNoaWxkQ29udGV4dFR5cGVzO251bGwhPT1jJiZ2b2lkIDAhPT1jJiZJZShiKTticmVhaztjYXNlIDM6Yz1iLnR5cGUuX3JlYWN0UmVzdWx0LmNoaWxkQ29udGV4dFR5cGVzO251bGwhPT1jJiZ2b2lkIDAhPT1jJiZJZShiKTticmVhaztjYXNlIDU6QmYoYik7SmUoYik7YnJlYWs7Y2FzZSA3OkRmKGIpO2JyZWFrO2Nhc2UgNjpCZihiKTticmVhaztjYXNlIDEyOnRmKGIpfWE9YS5yZXR1cm59TWc9bnVsbDtPPTA7Tmc9ITE7Tj1udWxsfVxuZnVuY3Rpb24gUWcoYSl7Zm9yKDs7KXt2YXIgYj1hLmFsdGVybmF0ZSxjPWEucmV0dXJuLGQ9YS5zaWJsaW5nO2lmKDA9PT0oYS5lZmZlY3RUYWcmNTEyKSl7dmFyIGU9YjtiPWE7dmFyIGY9Yi5wZW5kaW5nUHJvcHM7c3dpdGNoKGIudGFnKXtjYXNlIDA6Y2FzZSAxOmJyZWFrO2Nhc2UgMjpLKGIudHlwZSkmJkllKGIpO2JyZWFrO2Nhc2UgMzpLKGIudHlwZS5fcmVhY3RSZXN1bHQpJiZJZShiKTticmVhaztjYXNlIDU6QmYoYik7SmUoYik7Zj1iLnN0YXRlTm9kZTtmLnBlbmRpbmdDb250ZXh0JiYoZi5jb250ZXh0PWYucGVuZGluZ0NvbnRleHQsZi5wZW5kaW5nQ29udGV4dD1udWxsKTtpZihudWxsPT09ZXx8bnVsbD09PWUuY2hpbGQpJGYoYiksYi5lZmZlY3RUYWcmPS0zO3JnKGIpO2JyZWFrO2Nhc2UgNzpEZihiKTt2YXIgZz16Zih5Zi5jdXJyZW50KSxoPWIudHlwZTtpZihudWxsIT09ZSYmbnVsbCE9Yi5zdGF0ZU5vZGUpc2coZSxiLGgsZixnKSxlLnJlZiE9PWIucmVmJiYoYi5lZmZlY3RUYWd8PVxuMTI4KTtlbHNlIGlmKGYpe3ZhciBrPXpmKEwuY3VycmVudCk7aWYoJGYoYikpe2Y9YjtlPWYuc3RhdGVOb2RlO3ZhciBsPWYudHlwZSxtPWYubWVtb2l6ZWRQcm9wcyxyPWc7ZVtJYV09ZjtlW0phXT1tO2g9dm9pZCAwO2c9bDtzd2l0Y2goZyl7Y2FzZSBcImlmcmFtZVwiOmNhc2UgXCJvYmplY3RcIjpGKFwibG9hZFwiLGUpO2JyZWFrO2Nhc2UgXCJ2aWRlb1wiOmNhc2UgXCJhdWRpb1wiOmZvcihsPTA7bDxmYi5sZW5ndGg7bCsrKUYoZmJbbF0sZSk7YnJlYWs7Y2FzZSBcInNvdXJjZVwiOkYoXCJlcnJvclwiLGUpO2JyZWFrO2Nhc2UgXCJpbWdcIjpjYXNlIFwiaW1hZ2VcIjpjYXNlIFwibGlua1wiOkYoXCJlcnJvclwiLGUpO0YoXCJsb2FkXCIsZSk7YnJlYWs7Y2FzZSBcImZvcm1cIjpGKFwicmVzZXRcIixlKTtGKFwic3VibWl0XCIsZSk7YnJlYWs7Y2FzZSBcImRldGFpbHNcIjpGKFwidG9nZ2xlXCIsZSk7YnJlYWs7Y2FzZSBcImlucHV0XCI6QmMoZSxtKTtGKFwiaW52YWxpZFwiLGUpO3ZlKHIsXCJvbkNoYW5nZVwiKTticmVhaztjYXNlIFwic2VsZWN0XCI6ZS5fd3JhcHBlclN0YXRlPVxue3dhc011bHRpcGxlOiEhbS5tdWx0aXBsZX07RihcImludmFsaWRcIixlKTt2ZShyLFwib25DaGFuZ2VcIik7YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6Z2UoZSxtKSxGKFwiaW52YWxpZFwiLGUpLHZlKHIsXCJvbkNoYW5nZVwiKX10ZShnLG0pO2w9bnVsbDtmb3IoaCBpbiBtKW0uaGFzT3duUHJvcGVydHkoaCkmJihrPW1baF0sXCJjaGlsZHJlblwiPT09aD9cInN0cmluZ1wiPT09dHlwZW9mIGs/ZS50ZXh0Q29udGVudCE9PWsmJihsPVtcImNoaWxkcmVuXCIsa10pOlwibnVtYmVyXCI9PT10eXBlb2YgayYmZS50ZXh0Q29udGVudCE9PVwiXCIrayYmKGw9W1wiY2hpbGRyZW5cIixcIlwiK2tdKTpzYS5oYXNPd25Qcm9wZXJ0eShoKSYmbnVsbCE9ayYmdmUocixoKSk7c3dpdGNoKGcpe2Nhc2UgXCJpbnB1dFwiOldiKGUpO0ZjKGUsbSwhMCk7YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6V2IoZSk7aWUoZSxtKTticmVhaztjYXNlIFwic2VsZWN0XCI6Y2FzZSBcIm9wdGlvblwiOmJyZWFrO2RlZmF1bHQ6XCJmdW5jdGlvblwiPT09dHlwZW9mIG0ub25DbGljayYmXG4oZS5vbmNsaWNrPXdlKX1oPWw7Zi51cGRhdGVRdWV1ZT1oO2Y9bnVsbCE9PWg/ITA6ITE7ZiYmcWcoYil9ZWxzZXttPWI7ZT1oO3I9ZjtsPTk9PT1nLm5vZGVUeXBlP2c6Zy5vd25lckRvY3VtZW50O2s9PT1qZS5odG1sJiYoaz1rZShlKSk7az09PWplLmh0bWw/XCJzY3JpcHRcIj09PWU/KGU9bC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGUuaW5uZXJIVE1MPVwiPHNjcmlwdD5cXHgzYy9zY3JpcHQ+XCIsbD1lLnJlbW92ZUNoaWxkKGUuZmlyc3RDaGlsZCkpOlwic3RyaW5nXCI9PT10eXBlb2Ygci5pcz9sPWwuY3JlYXRlRWxlbWVudChlLHtpczpyLmlzfSk6KGw9bC5jcmVhdGVFbGVtZW50KGUpLFwic2VsZWN0XCI9PT1lJiZyLm11bHRpcGxlJiYobC5tdWx0aXBsZT0hMCkpOmw9bC5jcmVhdGVFbGVtZW50TlMoayxlKTtlPWw7ZVtJYV09bTtlW0phXT1mO2E6Zm9yKG09ZSxyPWIsbD1yLmNoaWxkO251bGwhPT1sOyl7aWYoNz09PWwudGFnfHw4PT09bC50YWcpbS5hcHBlbmRDaGlsZChsLnN0YXRlTm9kZSk7XG5lbHNlIGlmKDYhPT1sLnRhZyYmbnVsbCE9PWwuY2hpbGQpe2wuY2hpbGQucmV0dXJuPWw7bD1sLmNoaWxkO2NvbnRpbnVlfWlmKGw9PT1yKWJyZWFrO2Zvcig7bnVsbD09PWwuc2libGluZzspe2lmKG51bGw9PT1sLnJldHVybnx8bC5yZXR1cm49PT1yKWJyZWFrIGE7bD1sLnJldHVybn1sLnNpYmxpbmcucmV0dXJuPWwucmV0dXJuO2w9bC5zaWJsaW5nfXI9ZTtsPWg7bT1mO3ZhciBBPWcsUz11ZShsLG0pO3N3aXRjaChsKXtjYXNlIFwiaWZyYW1lXCI6Y2FzZSBcIm9iamVjdFwiOkYoXCJsb2FkXCIscik7Zz1tO2JyZWFrO2Nhc2UgXCJ2aWRlb1wiOmNhc2UgXCJhdWRpb1wiOmZvcihnPTA7ZzxmYi5sZW5ndGg7ZysrKUYoZmJbZ10scik7Zz1tO2JyZWFrO2Nhc2UgXCJzb3VyY2VcIjpGKFwiZXJyb3JcIixyKTtnPW07YnJlYWs7Y2FzZSBcImltZ1wiOmNhc2UgXCJpbWFnZVwiOmNhc2UgXCJsaW5rXCI6RihcImVycm9yXCIscik7RihcImxvYWRcIixyKTtnPW07YnJlYWs7Y2FzZSBcImZvcm1cIjpGKFwicmVzZXRcIixyKTtGKFwic3VibWl0XCIsXG5yKTtnPW07YnJlYWs7Y2FzZSBcImRldGFpbHNcIjpGKFwidG9nZ2xlXCIscik7Zz1tO2JyZWFrO2Nhc2UgXCJpbnB1dFwiOkJjKHIsbSk7Zz16YyhyLG0pO0YoXCJpbnZhbGlkXCIscik7dmUoQSxcIm9uQ2hhbmdlXCIpO2JyZWFrO2Nhc2UgXCJvcHRpb25cIjpnPWRlKHIsbSk7YnJlYWs7Y2FzZSBcInNlbGVjdFwiOnIuX3dyYXBwZXJTdGF0ZT17d2FzTXVsdGlwbGU6ISFtLm11bHRpcGxlfTtnPW4oe30sbSx7dmFsdWU6dm9pZCAwfSk7RihcImludmFsaWRcIixyKTt2ZShBLFwib25DaGFuZ2VcIik7YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6Z2UocixtKTtnPWZlKHIsbSk7RihcImludmFsaWRcIixyKTt2ZShBLFwib25DaGFuZ2VcIik7YnJlYWs7ZGVmYXVsdDpnPW19dGUobCxnKTtrPXZvaWQgMDt2YXIgQj1sLFA9cix2PWc7Zm9yKGsgaW4gdilpZih2Lmhhc093blByb3BlcnR5KGspKXt2YXIgcD12W2tdO1wic3R5bGVcIj09PWs/cmUoUCxwKTpcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCI9PT1rPyhwPXA/cC5fX2h0bWw6dm9pZCAwLFxubnVsbCE9cCYmbmUoUCxwKSk6XCJjaGlsZHJlblwiPT09az9cInN0cmluZ1wiPT09dHlwZW9mIHA/KFwidGV4dGFyZWFcIiE9PUJ8fFwiXCIhPT1wKSYmb2UoUCxwKTpcIm51bWJlclwiPT09dHlwZW9mIHAmJm9lKFAsXCJcIitwKTpcInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZ1wiIT09ayYmXCJzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmdcIiE9PWsmJlwiYXV0b0ZvY3VzXCIhPT1rJiYoc2EuaGFzT3duUHJvcGVydHkoayk/bnVsbCE9cCYmdmUoQSxrKTpudWxsIT1wJiZ4YyhQLGsscCxTKSl9c3dpdGNoKGwpe2Nhc2UgXCJpbnB1dFwiOldiKHIpO0ZjKHIsbSwhMSk7YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6V2Iocik7aWUocixtKTticmVhaztjYXNlIFwib3B0aW9uXCI6bnVsbCE9bS52YWx1ZSYmci5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFwiXCIreWMobS52YWx1ZSkpO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjpnPXI7Zy5tdWx0aXBsZT0hIW0ubXVsdGlwbGU7cj1tLnZhbHVlO251bGwhPXI/ZWUoZywhIW0ubXVsdGlwbGUsXG5yLCExKTpudWxsIT1tLmRlZmF1bHRWYWx1ZSYmZWUoZywhIW0ubXVsdGlwbGUsbS5kZWZhdWx0VmFsdWUsITApO2JyZWFrO2RlZmF1bHQ6XCJmdW5jdGlvblwiPT09dHlwZW9mIGcub25DbGljayYmKHIub25jbGljaz13ZSl9KGY9emUoaCxmKSkmJnFnKGIpO2Iuc3RhdGVOb2RlPWV9bnVsbCE9PWIucmVmJiYoYi5lZmZlY3RUYWd8PTEyOCl9ZWxzZSBudWxsPT09Yi5zdGF0ZU5vZGU/dChcIjE2NlwiKTp2b2lkIDA7YnJlYWs7Y2FzZSA4OmUmJm51bGwhPWIuc3RhdGVOb2RlP3RnKGUsYixlLm1lbW9pemVkUHJvcHMsZik6KFwic3RyaW5nXCIhPT10eXBlb2YgZiYmKG51bGw9PT1iLnN0YXRlTm9kZT90KFwiMTY2XCIpOnZvaWQgMCksZT16Zih5Zi5jdXJyZW50KSx6ZihMLmN1cnJlbnQpLCRmKGIpPyhmPWIsaD1mLnN0YXRlTm9kZSxlPWYubWVtb2l6ZWRQcm9wcyxoW0lhXT1mLChmPWgubm9kZVZhbHVlIT09ZSkmJnFnKGIpKTooaD1iLGY9KDk9PT1lLm5vZGVUeXBlP2U6ZS5vd25lckRvY3VtZW50KS5jcmVhdGVUZXh0Tm9kZShmKSxcbmZbSWFdPWgsYi5zdGF0ZU5vZGU9ZikpO2JyZWFrO2Nhc2UgMTM6Y2FzZSAxNDpicmVhaztjYXNlIDE2OmJyZWFrO2Nhc2UgOTpicmVhaztjYXNlIDEwOmJyZWFrO2Nhc2UgMTU6YnJlYWs7Y2FzZSA2OkJmKGIpO3JnKGIpO2JyZWFrO2Nhc2UgMTI6dGYoYik7YnJlYWs7Y2FzZSAxMTpicmVhaztjYXNlIDQ6dChcIjE2N1wiKTtkZWZhdWx0OnQoXCIxNTZcIil9Yj1OPW51bGw7Zj1hO2lmKDEwNzM3NDE4MjM9PT1PfHwxMDczNzQxODIzIT09Zi5jaGlsZEV4cGlyYXRpb25UaW1lKXtoPTA7Zm9yKGU9Zi5jaGlsZDtudWxsIT09ZTspe2c9ZS5leHBpcmF0aW9uVGltZTttPWUuY2hpbGRFeHBpcmF0aW9uVGltZTtpZigwPT09aHx8MCE9PWcmJmc8aCloPWc7aWYoMD09PWh8fDAhPT1tJiZtPGgpaD1tO2U9ZS5zaWJsaW5nfWYuY2hpbGRFeHBpcmF0aW9uVGltZT1ofWlmKG51bGwhPT1iKXJldHVybiBiO251bGwhPT1jJiYwPT09KGMuZWZmZWN0VGFnJjUxMikmJihudWxsPT09Yy5maXJzdEVmZmVjdCYmXG4oYy5maXJzdEVmZmVjdD1hLmZpcnN0RWZmZWN0KSxudWxsIT09YS5sYXN0RWZmZWN0JiYobnVsbCE9PWMubGFzdEVmZmVjdCYmKGMubGFzdEVmZmVjdC5uZXh0RWZmZWN0PWEuZmlyc3RFZmZlY3QpLGMubGFzdEVmZmVjdD1hLmxhc3RFZmZlY3QpLDE8YS5lZmZlY3RUYWcmJihudWxsIT09Yy5sYXN0RWZmZWN0P2MubGFzdEVmZmVjdC5uZXh0RWZmZWN0PWE6Yy5maXJzdEVmZmVjdD1hLGMubGFzdEVmZmVjdD1hKSl9ZWxzZXthPUdnKGEsTyk7aWYobnVsbCE9PWEpcmV0dXJuIGEuZWZmZWN0VGFnJj01MTEsYTtudWxsIT09YyYmKGMuZmlyc3RFZmZlY3Q9Yy5sYXN0RWZmZWN0PW51bGwsYy5lZmZlY3RUYWd8PTUxMil9aWYobnVsbCE9PWQpcmV0dXJuIGQ7aWYobnVsbCE9PWMpYT1jO2Vsc2UgYnJlYWt9cmV0dXJuIG51bGx9ZnVuY3Rpb24gUmcoYSl7dmFyIGI9cGcoYS5hbHRlcm5hdGUsYSxPKTtudWxsPT09YiYmKGI9UWcoYSkpO0lnLmN1cnJlbnQ9bnVsbDtyZXR1cm4gYn1cbmZ1bmN0aW9uIFNnKGEsYixjKXtMZz90KFwiMjQzXCIpOnZvaWQgMDtMZz0hMDtJZy5jdXJyZW50RGlzcGF0Y2hlcj1IZzt2YXIgZD1hLm5leHRFeHBpcmF0aW9uVGltZVRvV29ya09uO2lmKGQhPT1PfHxhIT09TWd8fG51bGw9PT1OKVBnKCksTWc9YSxPPWQsTj1VZShNZy5jdXJyZW50LG51bGwsTyksYS5wZW5kaW5nQ29tbWl0RXhwaXJhdGlvblRpbWU9MDt2YXIgZT0hMTtkb3t0cnl7aWYoYilmb3IoO251bGwhPT1OJiYhVGcoKTspTj1SZyhOKTtlbHNlIGZvcig7bnVsbCE9PU47KU49UmcoTil9Y2F0Y2gocil7aWYobnVsbD09PU4pZT0hMCxEZyhyKTtlbHNle251bGw9PT1OP3QoXCIyNzFcIik6dm9pZCAwO3ZhciBmPU4sZz1mLnJldHVybjtpZihudWxsPT09ZyllPSEwLERnKHIpO2Vsc2V7YTp7dmFyIGg9ZyxrPWYsbD1yO2c9TztrLmVmZmVjdFRhZ3w9NTEyO2suZmlyc3RFZmZlY3Q9ay5sYXN0RWZmZWN0PW51bGw7Tmc9ITA7bD1uZihsLGspO2Rve3N3aXRjaChoLnRhZyl7Y2FzZSA1OmguZWZmZWN0VGFnfD1cbjEwMjQ7aC5leHBpcmF0aW9uVGltZT1nO2c9Q2coaCxsLGcpO2dmKGgsZyk7YnJlYWsgYTtjYXNlIDI6Y2FzZSAzOms9bDt2YXIgbT1oLnN0YXRlTm9kZTtpZigwPT09KGguZWZmZWN0VGFnJjY0KSYmbnVsbCE9PW0mJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBtLmNvbXBvbmVudERpZENhdGNoJiYobnVsbD09PUZnfHwhRmcuaGFzKG0pKSl7aC5lZmZlY3RUYWd8PTEwMjQ7aC5leHBpcmF0aW9uVGltZT1nO2c9RWcoaCxrLGcpO2dmKGgsZyk7YnJlYWsgYX19aD1oLnJldHVybn13aGlsZShudWxsIT09aCl9Tj1RZyhmKTtjb250aW51ZX19fWJyZWFrfXdoaWxlKDEpO0xnPSExO3JmPXFmPXBmPUlnLmN1cnJlbnREaXNwYXRjaGVyPW51bGw7aWYoZSlNZz1udWxsLGEuZmluaXNoZWRXb3JrPW51bGw7ZWxzZSBpZihudWxsIT09TilhLmZpbmlzaGVkV29yaz1udWxsO2Vsc2V7Yj1hLmN1cnJlbnQuYWx0ZXJuYXRlO251bGw9PT1iP3QoXCIyODFcIik6dm9pZCAwO01nPW51bGw7aWYoTmcpe2U9YS5sYXRlc3RQZW5kaW5nVGltZTtcbmY9YS5sYXRlc3RTdXNwZW5kZWRUaW1lO2c9YS5sYXRlc3RQaW5nZWRUaW1lO2lmKDAhPT1lJiZlPmR8fDAhPT1mJiZmPmR8fDAhPT1nJiZnPmQpe2EuZGlkRXJyb3I9ITE7Yz1hLmxhdGVzdFBpbmdlZFRpbWU7MCE9PWMmJmM8PWQmJihhLmxhdGVzdFBpbmdlZFRpbWU9MCk7Yz1hLmVhcmxpZXN0UGVuZGluZ1RpbWU7Yj1hLmxhdGVzdFBlbmRpbmdUaW1lO2M9PT1kP2EuZWFybGllc3RQZW5kaW5nVGltZT1iPT09ZD9hLmxhdGVzdFBlbmRpbmdUaW1lPTA6YjpiPT09ZCYmKGEubGF0ZXN0UGVuZGluZ1RpbWU9Yyk7Yz1hLmVhcmxpZXN0U3VzcGVuZGVkVGltZTtiPWEubGF0ZXN0U3VzcGVuZGVkVGltZTswPT09Yz9hLmVhcmxpZXN0U3VzcGVuZGVkVGltZT1hLmxhdGVzdFN1c3BlbmRlZFRpbWU9ZDpjPmQ/YS5lYXJsaWVzdFN1c3BlbmRlZFRpbWU9ZDpiPGQmJihhLmxhdGVzdFN1c3BlbmRlZFRpbWU9ZCk7JGUoZCxhKTthLmV4cGlyYXRpb25UaW1lPWEuZXhwaXJhdGlvblRpbWU7cmV0dXJufWlmKCFhLmRpZEVycm9yJiZcbiFjKXthLmRpZEVycm9yPSEwO2EubmV4dEV4cGlyYXRpb25UaW1lVG9Xb3JrT249ZDtkPWEuZXhwaXJhdGlvblRpbWU9MTthLmV4cGlyYXRpb25UaW1lPWQ7cmV0dXJufX1hLnBlbmRpbmdDb21taXRFeHBpcmF0aW9uVGltZT1kO2EuZmluaXNoZWRXb3JrPWJ9fVxuZnVuY3Rpb24gd2coYSxiKXt2YXIgYzthOntMZyYmIU9nP3QoXCIyNjNcIik6dm9pZCAwO2ZvcihjPWEucmV0dXJuO251bGwhPT1jOyl7c3dpdGNoKGMudGFnKXtjYXNlIDI6Y2FzZSAzOnZhciBkPWMuc3RhdGVOb2RlO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBjLnR5cGUuZ2V0RGVyaXZlZFN0YXRlRnJvbUNhdGNofHxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZC5jb21wb25lbnREaWRDYXRjaCYmKG51bGw9PT1GZ3x8IUZnLmhhcyhkKSkpe2E9bmYoYixhKTthPUVnKGMsYSwxKTtmZihjLGEpO0lmKGMsMSk7Yz12b2lkIDA7YnJlYWsgYX1icmVhaztjYXNlIDU6YT1uZihiLGEpO2E9Q2coYyxhLDEpO2ZmKGMsYSk7SWYoYywxKTtjPXZvaWQgMDticmVhayBhfWM9Yy5yZXR1cm59NT09PWEudGFnJiYoYz1uZihiLGEpLGM9Q2coYSxjLDEpLGZmKGEsYyksSWYoYSwxKSk7Yz12b2lkIDB9cmV0dXJuIGN9XG5mdW5jdGlvbiBIZihhLGIpezAhPT1LZz9hPUtnOkxnP2E9T2c/MTpPOmIubW9kZSYxPyhhPVVnPzIrMTAqKCgoYS0yKzE1KS8xMHwwKSsxKToyKzI1KigoKGEtMis1MDApLzI1fDApKzEpLG51bGwhPT1NZyYmYT09PU8mJihhKz0xKSk6YT0xO1VnJiYoMD09PVZnfHxhPlZnKSYmKFZnPWEpO3JldHVybiBhfVxuZnVuY3Rpb24gSWYoYSxiKXthOntpZigwPT09YS5leHBpcmF0aW9uVGltZXx8YS5leHBpcmF0aW9uVGltZT5iKWEuZXhwaXJhdGlvblRpbWU9Yjt2YXIgYz1hLmFsdGVybmF0ZTtudWxsIT09YyYmKDA9PT1jLmV4cGlyYXRpb25UaW1lfHxjLmV4cGlyYXRpb25UaW1lPmIpJiYoYy5leHBpcmF0aW9uVGltZT1iKTt2YXIgZD1hLnJldHVybjtpZihudWxsPT09ZCYmNT09PWEudGFnKWE9YS5zdGF0ZU5vZGU7ZWxzZXtmb3IoO251bGwhPT1kOyl7Yz1kLmFsdGVybmF0ZTtpZigwPT09ZC5jaGlsZEV4cGlyYXRpb25UaW1lfHxkLmNoaWxkRXhwaXJhdGlvblRpbWU+YilkLmNoaWxkRXhwaXJhdGlvblRpbWU9YjtudWxsIT09YyYmKDA9PT1jLmNoaWxkRXhwaXJhdGlvblRpbWV8fGMuY2hpbGRFeHBpcmF0aW9uVGltZT5iKSYmKGMuY2hpbGRFeHBpcmF0aW9uVGltZT1iKTtpZihudWxsPT09ZC5yZXR1cm4mJjU9PT1kLnRhZyl7YT1kLnN0YXRlTm9kZTticmVhayBhfWQ9ZC5yZXR1cm59YT1udWxsfX1pZihudWxsIT09XG5hKXshTGcmJjAhPT1PJiZiPE8mJlBnKCk7WmUoYSxiKTtpZighTGd8fE9nfHxNZyE9PWEpe2I9YTthPWEuZXhwaXJhdGlvblRpbWU7aWYobnVsbD09PWIubmV4dFNjaGVkdWxlZFJvb3QpYi5leHBpcmF0aW9uVGltZT1hLG51bGw9PT1UPyhVPVQ9YixiLm5leHRTY2hlZHVsZWRSb290PWIpOihUPVQubmV4dFNjaGVkdWxlZFJvb3Q9YixULm5leHRTY2hlZHVsZWRSb290PVUpO2Vsc2UgaWYoYz1iLmV4cGlyYXRpb25UaW1lLDA9PT1jfHxhPGMpYi5leHBpcmF0aW9uVGltZT1hO1Z8fChXP1dnJiYoWT1iLFo9MSxYZyhiLDEsITApKToxPT09YT9ZZygxLG51bGwpOlpnKGIsYSkpfSRnPmFoJiYoJGc9MCx0KFwiMTg1XCIpKX19ZnVuY3Rpb24gYmgoYSxiLGMsZCxlKXt2YXIgZj1LZztLZz0xO3RyeXtyZXR1cm4gYShiLGMsZCxlKX1maW5hbGx5e0tnPWZ9fVxudmFyIFU9bnVsbCxUPW51bGwsY2g9MCxkaD12b2lkIDAsVj0hMSxZPW51bGwsWj0wLFZnPTAsZWg9ITEsZmg9ITEsZ2g9bnVsbCxoaD1udWxsLFc9ITEsV2c9ITEsVWc9ITEsaWg9bnVsbCxqaD1iYS51bnN0YWJsZV9ub3coKSxraD0oamgvMTB8MCkrMixsaD1raCxhaD01MCwkZz0wLG1oPW51bGwsbmg9MTtmdW5jdGlvbiBvaCgpe2toPSgoYmEudW5zdGFibGVfbm93KCktamgpLzEwfDApKzJ9ZnVuY3Rpb24gWmcoYSxiKXtpZigwIT09Y2gpe2lmKGI+Y2gpcmV0dXJuO251bGwhPT1kaCYmYmEudW5zdGFibGVfY2FuY2VsU2NoZWR1bGVkV29yayhkaCl9Y2g9YjthPWJhLnVuc3RhYmxlX25vdygpLWpoO2RoPWJhLnVuc3RhYmxlX3NjaGVkdWxlV29yayhwaCx7dGltZW91dDoxMCooYi0yKS1hfSl9ZnVuY3Rpb24gR2YoKXtpZihWKXJldHVybiBsaDtxaCgpO2lmKDA9PT1afHwxMDczNzQxODIzPT09WilvaCgpLGxoPWtoO3JldHVybiBsaH1cbmZ1bmN0aW9uIHFoKCl7dmFyIGE9MCxiPW51bGw7aWYobnVsbCE9PVQpZm9yKHZhciBjPVQsZD1VO251bGwhPT1kOyl7dmFyIGU9ZC5leHBpcmF0aW9uVGltZTtpZigwPT09ZSl7bnVsbD09PWN8fG51bGw9PT1UP3QoXCIyNDRcIik6dm9pZCAwO2lmKGQ9PT1kLm5leHRTY2hlZHVsZWRSb290KXtVPVQ9ZC5uZXh0U2NoZWR1bGVkUm9vdD1udWxsO2JyZWFrfWVsc2UgaWYoZD09PVUpVT1lPWQubmV4dFNjaGVkdWxlZFJvb3QsVC5uZXh0U2NoZWR1bGVkUm9vdD1lLGQubmV4dFNjaGVkdWxlZFJvb3Q9bnVsbDtlbHNlIGlmKGQ9PT1UKXtUPWM7VC5uZXh0U2NoZWR1bGVkUm9vdD1VO2QubmV4dFNjaGVkdWxlZFJvb3Q9bnVsbDticmVha31lbHNlIGMubmV4dFNjaGVkdWxlZFJvb3Q9ZC5uZXh0U2NoZWR1bGVkUm9vdCxkLm5leHRTY2hlZHVsZWRSb290PW51bGw7ZD1jLm5leHRTY2hlZHVsZWRSb290fWVsc2V7aWYoMD09PWF8fGU8YSlhPWUsYj1kO2lmKGQ9PT1UKWJyZWFrO2lmKDE9PT1hKWJyZWFrO1xuYz1kO2Q9ZC5uZXh0U2NoZWR1bGVkUm9vdH19WT1iO1o9YX1mdW5jdGlvbiBwaChhKXtpZihhLmRpZFRpbWVvdXQmJm51bGwhPT1VKXtvaCgpO3ZhciBiPVU7ZG97dmFyIGM9Yi5leHBpcmF0aW9uVGltZTswIT09YyYma2g+PWMmJihiLm5leHRFeHBpcmF0aW9uVGltZVRvV29ya09uPWtoKTtiPWIubmV4dFNjaGVkdWxlZFJvb3R9d2hpbGUoYiE9PVUpfVlnKDAsYSl9XG5mdW5jdGlvbiBZZyhhLGIpe2hoPWI7cWgoKTtpZihudWxsIT09aGgpZm9yKG9oKCksbGg9a2g7bnVsbCE9PVkmJjAhPT1aJiYoMD09PWF8fGE+PVopJiYoIWVofHxraD49Wik7KVhnKFksWixraD49WikscWgoKSxvaCgpLGxoPWtoO2Vsc2UgZm9yKDtudWxsIT09WSYmMCE9PVomJigwPT09YXx8YT49Wik7KVhnKFksWiwhMCkscWgoKTtudWxsIT09aGgmJihjaD0wLGRoPW51bGwpOzAhPT1aJiZaZyhZLFopO2hoPW51bGw7ZWg9ITE7JGc9MDttaD1udWxsO2lmKG51bGwhPT1paClmb3IoYT1paCxpaD1udWxsLGI9MDtiPGEubGVuZ3RoO2IrKyl7dmFyIGM9YVtiXTt0cnl7Yy5fb25Db21wbGV0ZSgpfWNhdGNoKGQpe2ZofHwoZmg9ITAsZ2g9ZCl9fWlmKGZoKXRocm93IGE9Z2gsZ2g9bnVsbCxmaD0hMSxhO31cbmZ1bmN0aW9uIFhnKGEsYixjKXtWP3QoXCIyNDVcIik6dm9pZCAwO1Y9ITA7aWYobnVsbD09PWhofHxjKXt2YXIgZD1hLmZpbmlzaGVkV29yaztudWxsIT09ZD9yaChhLGQsYik6KGEuZmluaXNoZWRXb3JrPW51bGwsU2coYSwhMSxjKSxkPWEuZmluaXNoZWRXb3JrLG51bGwhPT1kJiZyaChhLGQsYikpfWVsc2UgZD1hLmZpbmlzaGVkV29yayxudWxsIT09ZD9yaChhLGQsYik6KGEuZmluaXNoZWRXb3JrPW51bGwsU2coYSwhMCxjKSxkPWEuZmluaXNoZWRXb3JrLG51bGwhPT1kJiYoVGcoKT9hLmZpbmlzaGVkV29yaz1kOnJoKGEsZCxiKSkpO1Y9ITF9XG5mdW5jdGlvbiByaChhLGIsYyl7dmFyIGQ9YS5maXJzdEJhdGNoO2lmKG51bGwhPT1kJiZkLl9leHBpcmF0aW9uVGltZTw9YyYmKG51bGw9PT1paD9paD1bZF06aWgucHVzaChkKSxkLl9kZWZlcikpe2EuZmluaXNoZWRXb3JrPWI7YS5leHBpcmF0aW9uVGltZT0wO3JldHVybn1hLmZpbmlzaGVkV29yaz1udWxsO2E9PT1taD8kZysrOihtaD1hLCRnPTApO09nPUxnPSEwO2EuY3VycmVudD09PWI/dChcIjE3N1wiKTp2b2lkIDA7Yz1hLnBlbmRpbmdDb21taXRFeHBpcmF0aW9uVGltZTswPT09Yz90KFwiMjYxXCIpOnZvaWQgMDthLnBlbmRpbmdDb21taXRFeHBpcmF0aW9uVGltZT0wO2Q9Yi5leHBpcmF0aW9uVGltZTt2YXIgZT1iLmNoaWxkRXhwaXJhdGlvblRpbWU7ZD0wPT09ZHx8MCE9PWUmJmU8ZD9lOmQ7YS5kaWRFcnJvcj0hMTswPT09ZD8oYS5lYXJsaWVzdFBlbmRpbmdUaW1lPTAsYS5sYXRlc3RQZW5kaW5nVGltZT0wLGEuZWFybGllc3RTdXNwZW5kZWRUaW1lPTAsYS5sYXRlc3RTdXNwZW5kZWRUaW1lPVxuMCxhLmxhdGVzdFBpbmdlZFRpbWU9MCk6KGU9YS5sYXRlc3RQZW5kaW5nVGltZSwwIT09ZSYmKGU8ZD9hLmVhcmxpZXN0UGVuZGluZ1RpbWU9YS5sYXRlc3RQZW5kaW5nVGltZT0wOmEuZWFybGllc3RQZW5kaW5nVGltZTxkJiYoYS5lYXJsaWVzdFBlbmRpbmdUaW1lPWEubGF0ZXN0UGVuZGluZ1RpbWUpKSxlPWEuZWFybGllc3RTdXNwZW5kZWRUaW1lLDA9PT1lP1plKGEsZCk6ZD5hLmxhdGVzdFN1c3BlbmRlZFRpbWU/KGEuZWFybGllc3RTdXNwZW5kZWRUaW1lPTAsYS5sYXRlc3RTdXNwZW5kZWRUaW1lPTAsYS5sYXRlc3RQaW5nZWRUaW1lPTAsWmUoYSxkKSk6ZDxlJiZaZShhLGQpKTskZSgwLGEpO0lnLmN1cnJlbnQ9bnVsbDsxPGIuZWZmZWN0VGFnP251bGwhPT1iLmxhc3RFZmZlY3Q/KGIubGFzdEVmZmVjdC5uZXh0RWZmZWN0PWIsZD1iLmZpcnN0RWZmZWN0KTpkPWI6ZD1iLmZpcnN0RWZmZWN0O3hlPUdkO2U9VGQoKTtpZihVZChlKSl7aWYoXCJzZWxlY3Rpb25TdGFydFwiaW4gZSl2YXIgZj1cbntzdGFydDplLnNlbGVjdGlvblN0YXJ0LGVuZDplLnNlbGVjdGlvbkVuZH07ZWxzZSBhOntmPShmPWUub3duZXJEb2N1bWVudCkmJmYuZGVmYXVsdFZpZXd8fHdpbmRvdzt2YXIgZz1mLmdldFNlbGVjdGlvbiYmZi5nZXRTZWxlY3Rpb24oKTtpZihnJiYwIT09Zy5yYW5nZUNvdW50KXtmPWcuYW5jaG9yTm9kZTt2YXIgaD1nLmFuY2hvck9mZnNldCxrPWcuZm9jdXNOb2RlO2c9Zy5mb2N1c09mZnNldDt0cnl7Zi5ub2RlVHlwZSxrLm5vZGVUeXBlfWNhdGNoKFhhKXtmPW51bGw7YnJlYWsgYX12YXIgbD0wLG09LTEscj0tMSxBPTAsUz0wLEI9ZSxQPW51bGw7Yjpmb3IoOzspe2Zvcih2YXIgdjs7KXtCIT09Znx8MCE9PWgmJjMhPT1CLm5vZGVUeXBlfHwobT1sK2gpO0IhPT1rfHwwIT09ZyYmMyE9PUIubm9kZVR5cGV8fChyPWwrZyk7Mz09PUIubm9kZVR5cGUmJihsKz1CLm5vZGVWYWx1ZS5sZW5ndGgpO2lmKG51bGw9PT0odj1CLmZpcnN0Q2hpbGQpKWJyZWFrO1A9QjtCPXZ9Zm9yKDs7KXtpZihCPT09XG5lKWJyZWFrIGI7UD09PWYmJisrQT09PWgmJihtPWwpO1A9PT1rJiYrK1M9PT1nJiYocj1sKTtpZihudWxsIT09KHY9Qi5uZXh0U2libGluZykpYnJlYWs7Qj1QO1A9Qi5wYXJlbnROb2RlfUI9dn1mPS0xPT09bXx8LTE9PT1yP251bGw6e3N0YXJ0Om0sZW5kOnJ9fWVsc2UgZj1udWxsfWY9Znx8e3N0YXJ0OjAsZW5kOjB9fWVsc2UgZj1udWxsO3llPXtmb2N1c2VkRWxlbTplLHNlbGVjdGlvblJhbmdlOmZ9O0dkPSExO2ZvcihRPWQ7bnVsbCE9PVE7KXtlPSExO2Y9dm9pZCAwO3RyeXtmb3IoO251bGwhPT1ROyl7aWYoUS5lZmZlY3RUYWcmMjU2KXt2YXIgcD1RLmFsdGVybmF0ZTthOnN3aXRjaChoPVEsaC50YWcpe2Nhc2UgMjpjYXNlIDM6aWYoaC5lZmZlY3RUYWcmMjU2JiZudWxsIT09cCl7dmFyIHU9cC5tZW1vaXplZFByb3BzLHg9cC5tZW1vaXplZFN0YXRlLFI9aC5zdGF0ZU5vZGU7Ui5wcm9wcz1oLm1lbW9pemVkUHJvcHM7Ui5zdGF0ZT1oLm1lbW9pemVkU3RhdGU7dmFyIHloPVIuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUodSxcbngpO1IuX19yZWFjdEludGVybmFsU25hcHNob3RCZWZvcmVVcGRhdGU9eWh9YnJlYWsgYTtjYXNlIDU6Y2FzZSA3OmNhc2UgODpjYXNlIDY6YnJlYWsgYTtkZWZhdWx0OnQoXCIxNjNcIil9fVE9US5uZXh0RWZmZWN0fX1jYXRjaChYYSl7ZT0hMCxmPVhhfWUmJihudWxsPT09UT90KFwiMTc4XCIpOnZvaWQgMCx3ZyhRLGYpLG51bGwhPT1RJiYoUT1RLm5leHRFZmZlY3QpKX1mb3IoUT1kO251bGwhPT1ROyl7cD0hMTt1PXZvaWQgMDt0cnl7Zm9yKDtudWxsIT09UTspe3ZhciB3PVEuZWZmZWN0VGFnO3cmMTYmJm9lKFEuc3RhdGVOb2RlLFwiXCIpO2lmKHcmMTI4KXt2YXIgeT1RLmFsdGVybmF0ZTtpZihudWxsIT09eSl7dmFyIHE9eS5yZWY7bnVsbCE9PXEmJihcImZ1bmN0aW9uXCI9PT10eXBlb2YgcT9xKG51bGwpOnEuY3VycmVudD1udWxsKX19c3dpdGNoKHcmMTQpe2Nhc2UgMjpBZyhRKTtRLmVmZmVjdFRhZyY9LTM7YnJlYWs7Y2FzZSA2OkFnKFEpO1EuZWZmZWN0VGFnJj0tMztCZyhRLmFsdGVybmF0ZSxcblEpO2JyZWFrO2Nhc2UgNDpCZyhRLmFsdGVybmF0ZSxRKTticmVhaztjYXNlIDg6eD1RLHlnKHgpLHgucmV0dXJuPW51bGwseC5jaGlsZD1udWxsLHguYWx0ZXJuYXRlJiYoeC5hbHRlcm5hdGUuY2hpbGQ9bnVsbCx4LmFsdGVybmF0ZS5yZXR1cm49bnVsbCl9UT1RLm5leHRFZmZlY3R9fWNhdGNoKFhhKXtwPSEwLHU9WGF9cCYmKG51bGw9PT1RP3QoXCIxNzhcIik6dm9pZCAwLHdnKFEsdSksbnVsbCE9PVEmJihRPVEubmV4dEVmZmVjdCkpfXE9eWU7eT1UZCgpO3c9cS5mb2N1c2VkRWxlbTt1PXEuc2VsZWN0aW9uUmFuZ2U7aWYoeSE9PXcmJncmJncub3duZXJEb2N1bWVudCYmU2Qody5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCx3KSl7bnVsbCE9PXUmJlVkKHcpJiYoeT11LnN0YXJ0LHE9dS5lbmQsdm9pZCAwPT09cSYmKHE9eSksXCJzZWxlY3Rpb25TdGFydFwiaW4gdz8ody5zZWxlY3Rpb25TdGFydD15LHcuc2VsZWN0aW9uRW5kPU1hdGgubWluKHEsdy52YWx1ZS5sZW5ndGgpKTpcbihwPXcub3duZXJEb2N1bWVudHx8ZG9jdW1lbnQseT0ocCYmcC5kZWZhdWx0Vmlld3x8d2luZG93KS5nZXRTZWxlY3Rpb24oKSx4PXcudGV4dENvbnRlbnQubGVuZ3RoLHE9TWF0aC5taW4odS5zdGFydCx4KSx1PXZvaWQgMD09PXUuZW5kP3E6TWF0aC5taW4odS5lbmQseCksIXkuZXh0ZW5kJiZxPnUmJih4PXUsdT1xLHE9eCkseD1SZCh3LHEpLFI9UmQodyx1KSx4JiZSJiYoMSE9PXkucmFuZ2VDb3VudHx8eS5hbmNob3JOb2RlIT09eC5ub2RlfHx5LmFuY2hvck9mZnNldCE9PXgub2Zmc2V0fHx5LmZvY3VzTm9kZSE9PVIubm9kZXx8eS5mb2N1c09mZnNldCE9PVIub2Zmc2V0KSYmKHA9cC5jcmVhdGVSYW5nZSgpLHAuc2V0U3RhcnQoeC5ub2RlLHgub2Zmc2V0KSx5LnJlbW92ZUFsbFJhbmdlcygpLHE+dT8oeS5hZGRSYW5nZShwKSx5LmV4dGVuZChSLm5vZGUsUi5vZmZzZXQpKToocC5zZXRFbmQoUi5ub2RlLFIub2Zmc2V0KSx5LmFkZFJhbmdlKHApKSkpKTt5PVtdO2ZvcihxPXc7cT1cbnEucGFyZW50Tm9kZTspMT09PXEubm9kZVR5cGUmJnkucHVzaCh7ZWxlbWVudDpxLGxlZnQ6cS5zY3JvbGxMZWZ0LHRvcDpxLnNjcm9sbFRvcH0pO1wiZnVuY3Rpb25cIj09PXR5cGVvZiB3LmZvY3VzJiZ3LmZvY3VzKCk7Zm9yKHc9MDt3PHkubGVuZ3RoO3crKylxPXlbd10scS5lbGVtZW50LnNjcm9sbExlZnQ9cS5sZWZ0LHEuZWxlbWVudC5zY3JvbGxUb3A9cS50b3B9eWU9bnVsbDtHZD0hIXhlO3hlPW51bGw7YS5jdXJyZW50PWI7Zm9yKFE9ZDtudWxsIT09UTspe2Q9ITE7dz12b2lkIDA7dHJ5e2Zvcih5PWM7bnVsbCE9PVE7KXt2YXIgU2E9US5lZmZlY3RUYWc7aWYoU2EmMzYpe3ZhciBvYz1RLmFsdGVybmF0ZTtxPVE7cD15O3N3aXRjaChxLnRhZyl7Y2FzZSAyOmNhc2UgMzp2YXIgWD1xLnN0YXRlTm9kZTtpZihxLmVmZmVjdFRhZyY0KWlmKG51bGw9PT1vYylYLnByb3BzPXEubWVtb2l6ZWRQcm9wcyxYLnN0YXRlPXEubWVtb2l6ZWRTdGF0ZSxYLmNvbXBvbmVudERpZE1vdW50KCk7XG5lbHNle3ZhciBJaD1vYy5tZW1vaXplZFByb3BzLEpoPW9jLm1lbW9pemVkU3RhdGU7WC5wcm9wcz1xLm1lbW9pemVkUHJvcHM7WC5zdGF0ZT1xLm1lbW9pemVkU3RhdGU7WC5jb21wb25lbnREaWRVcGRhdGUoSWgsSmgsWC5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdEJlZm9yZVVwZGF0ZSl9dmFyIGtnPXEudXBkYXRlUXVldWU7bnVsbCE9PWtnJiYoWC5wcm9wcz1xLm1lbW9pemVkUHJvcHMsWC5zdGF0ZT1xLm1lbW9pemVkU3RhdGUsbGYocSxrZyxYLHApKTticmVhaztjYXNlIDU6dmFyIGxnPXEudXBkYXRlUXVldWU7aWYobnVsbCE9PWxnKXt1PW51bGw7aWYobnVsbCE9PXEuY2hpbGQpc3dpdGNoKHEuY2hpbGQudGFnKXtjYXNlIDc6dT1xLmNoaWxkLnN0YXRlTm9kZTticmVhaztjYXNlIDI6Y2FzZSAzOnU9cS5jaGlsZC5zdGF0ZU5vZGV9bGYocSxsZyx1LHApfWJyZWFrO2Nhc2UgNzp2YXIgS2g9cS5zdGF0ZU5vZGU7bnVsbD09PW9jJiZxLmVmZmVjdFRhZyY0JiZ6ZShxLnR5cGUscS5tZW1vaXplZFByb3BzKSYmXG5LaC5mb2N1cygpO2JyZWFrO2Nhc2UgODpicmVhaztjYXNlIDY6YnJlYWs7Y2FzZSAxNTpicmVhaztjYXNlIDE2OmJyZWFrO2RlZmF1bHQ6dChcIjE2M1wiKX19aWYoU2EmMTI4KXt2YXIgQWM9US5yZWY7aWYobnVsbCE9PUFjKXt2YXIgbWc9US5zdGF0ZU5vZGU7c3dpdGNoKFEudGFnKXtjYXNlIDc6dmFyIFBkPW1nO2JyZWFrO2RlZmF1bHQ6UGQ9bWd9XCJmdW5jdGlvblwiPT09dHlwZW9mIEFjP0FjKFBkKTpBYy5jdXJyZW50PVBkfX12YXIgTGg9US5uZXh0RWZmZWN0O1EubmV4dEVmZmVjdD1udWxsO1E9TGh9fWNhdGNoKFhhKXtkPSEwLHc9WGF9ZCYmKG51bGw9PT1RP3QoXCIxNzhcIik6dm9pZCAwLHdnKFEsdyksbnVsbCE9PVEmJihRPVEubmV4dEVmZmVjdCkpfUxnPU9nPSExO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBPZSYmT2UoYi5zdGF0ZU5vZGUpO1NhPWIuZXhwaXJhdGlvblRpbWU7Yj1iLmNoaWxkRXhwaXJhdGlvblRpbWU7Yj0wPT09U2F8fDAhPT1iJiZiPFNhP2I6U2E7MD09PWImJihGZz1cbm51bGwpO2EuZXhwaXJhdGlvblRpbWU9YjthLmZpbmlzaGVkV29yaz1udWxsfWZ1bmN0aW9uIFRnKCl7cmV0dXJuIGVoPyEwOm51bGw9PT1oaHx8aGgudGltZVJlbWFpbmluZygpPm5oPyExOmVoPSEwfWZ1bmN0aW9uIERnKGEpe251bGw9PT1ZP3QoXCIyNDZcIik6dm9pZCAwO1kuZXhwaXJhdGlvblRpbWU9MDtmaHx8KGZoPSEwLGdoPWEpfWZ1bmN0aW9uIHNoKGEsYil7dmFyIGM9VztXPSEwO3RyeXtyZXR1cm4gYShiKX1maW5hbGx5eyhXPWMpfHxWfHxZZygxLG51bGwpfX1mdW5jdGlvbiB0aChhLGIpe2lmKFcmJiFXZyl7V2c9ITA7dHJ5e3JldHVybiBhKGIpfWZpbmFsbHl7V2c9ITF9fXJldHVybiBhKGIpfWZ1bmN0aW9uIHVoKGEsYixjKXtpZihVZylyZXR1cm4gYShiLGMpO1d8fFZ8fDA9PT1WZ3x8KFlnKFZnLG51bGwpLFZnPTApO3ZhciBkPVVnLGU9VztXPVVnPSEwO3RyeXtyZXR1cm4gYShiLGMpfWZpbmFsbHl7VWc9ZCwoVz1lKXx8Vnx8WWcoMSxudWxsKX19XG5mdW5jdGlvbiB2aChhKXtpZighYSlyZXR1cm4gRmU7YT1hLl9yZWFjdEludGVybmFsRmliZXI7YTp7MiE9PWpkKGEpfHwyIT09YS50YWcmJjMhPT1hLnRhZz90KFwiMTcwXCIpOnZvaWQgMDt2YXIgYj1hO2Rve3N3aXRjaChiLnRhZyl7Y2FzZSA1OmI9Yi5zdGF0ZU5vZGUuY29udGV4dDticmVhayBhO2Nhc2UgMjppZihLKGIudHlwZSkpe2I9Yi5zdGF0ZU5vZGUuX19yZWFjdEludGVybmFsTWVtb2l6ZWRNZXJnZWRDaGlsZENvbnRleHQ7YnJlYWsgYX1icmVhaztjYXNlIDM6aWYoSyhiLnR5cGUuX3JlYWN0UmVzdWx0KSl7Yj1iLnN0YXRlTm9kZS5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZE1lcmdlZENoaWxkQ29udGV4dDticmVhayBhfX1iPWIucmV0dXJufXdoaWxlKG51bGwhPT1iKTt0KFwiMTcxXCIpO2I9dm9pZCAwfWlmKDI9PT1hLnRhZyl7dmFyIGM9YS50eXBlO2lmKEsoYykpcmV0dXJuIExlKGEsYyxiKX1lbHNlIGlmKDM9PT1hLnRhZyYmKGM9YS50eXBlLl9yZWFjdFJlc3VsdCxLKGMpKSlyZXR1cm4gTGUoYSxcbmMsYik7cmV0dXJuIGJ9ZnVuY3Rpb24gd2goYSxiLGMsZCxlKXt2YXIgZj1iLmN1cnJlbnQ7Yz12aChjKTtudWxsPT09Yi5jb250ZXh0P2IuY29udGV4dD1jOmIucGVuZGluZ0NvbnRleHQ9YztiPWU7ZT1kZihkKTtlLnBheWxvYWQ9e2VsZW1lbnQ6YX07Yj12b2lkIDA9PT1iP251bGw6YjtudWxsIT09YiYmKGUuY2FsbGJhY2s9Yik7ZmYoZixlKTtJZihmLGQpO3JldHVybiBkfWZ1bmN0aW9uIHhoKGEsYixjLGQpe3ZhciBlPWIuY3VycmVudCxmPUdmKCk7ZT1IZihmLGUpO3JldHVybiB3aChhLGIsYyxlLGQpfWZ1bmN0aW9uIHpoKGEpe2E9YS5jdXJyZW50O2lmKCFhLmNoaWxkKXJldHVybiBudWxsO3N3aXRjaChhLmNoaWxkLnRhZyl7Y2FzZSA3OnJldHVybiBhLmNoaWxkLnN0YXRlTm9kZTtkZWZhdWx0OnJldHVybiBhLmNoaWxkLnN0YXRlTm9kZX19XG5mdW5jdGlvbiBBaChhLGIsYyl7dmFyIGQ9Mzxhcmd1bWVudHMubGVuZ3RoJiZ2b2lkIDAhPT1hcmd1bWVudHNbM10/YXJndW1lbnRzWzNdOm51bGw7cmV0dXJueyQkdHlwZW9mOmFjLGtleTpudWxsPT1kP251bGw6XCJcIitkLGNoaWxkcmVuOmEsY29udGFpbmVySW5mbzpiLGltcGxlbWVudGF0aW9uOmN9fVxuRmI9ZnVuY3Rpb24oYSxiLGMpe3N3aXRjaChiKXtjYXNlIFwiaW5wdXRcIjpEYyhhLGMpO2I9Yy5uYW1lO2lmKFwicmFkaW9cIj09PWMudHlwZSYmbnVsbCE9Yil7Zm9yKGM9YTtjLnBhcmVudE5vZGU7KWM9Yy5wYXJlbnROb2RlO2M9Yy5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbbmFtZT1cIitKU09OLnN0cmluZ2lmeShcIlwiK2IpKyddW3R5cGU9XCJyYWRpb1wiXScpO2ZvcihiPTA7YjxjLmxlbmd0aDtiKyspe3ZhciBkPWNbYl07aWYoZCE9PWEmJmQuZm9ybT09PWEuZm9ybSl7dmFyIGU9TmEoZCk7ZT92b2lkIDA6dChcIjkwXCIpO1hiKGQpO0RjKGQsZSl9fX1icmVhaztjYXNlIFwidGV4dGFyZWFcIjpoZShhLGMpO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjpiPWMudmFsdWUsbnVsbCE9YiYmZWUoYSwhIWMubXVsdGlwbGUsYiwhMSl9fTtcbmZ1bmN0aW9uIEJoKGEpe3ZhciBiPTIrMjUqKCgoR2YoKS0yKzUwMCkvMjV8MCkrMSk7Yjw9SmcmJihiPUpnKzEpO3RoaXMuX2V4cGlyYXRpb25UaW1lPUpnPWI7dGhpcy5fcm9vdD1hO3RoaXMuX2NhbGxiYWNrcz10aGlzLl9uZXh0PW51bGw7dGhpcy5faGFzQ2hpbGRyZW49dGhpcy5fZGlkQ29tcGxldGU9ITE7dGhpcy5fY2hpbGRyZW49bnVsbDt0aGlzLl9kZWZlcj0hMH1CaC5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKGEpe3RoaXMuX2RlZmVyP3ZvaWQgMDp0KFwiMjUwXCIpO3RoaXMuX2hhc0NoaWxkcmVuPSEwO3RoaXMuX2NoaWxkcmVuPWE7dmFyIGI9dGhpcy5fcm9vdC5faW50ZXJuYWxSb290LGM9dGhpcy5fZXhwaXJhdGlvblRpbWUsZD1uZXcgQ2g7d2goYSxiLG51bGwsYyxkLl9vbkNvbW1pdCk7cmV0dXJuIGR9O1xuQmgucHJvdG90eXBlLnRoZW49ZnVuY3Rpb24oYSl7aWYodGhpcy5fZGlkQ29tcGxldGUpYSgpO2Vsc2V7dmFyIGI9dGhpcy5fY2FsbGJhY2tzO251bGw9PT1iJiYoYj10aGlzLl9jYWxsYmFja3M9W10pO2IucHVzaChhKX19O1xuQmgucHJvdG90eXBlLmNvbW1pdD1mdW5jdGlvbigpe3ZhciBhPXRoaXMuX3Jvb3QuX2ludGVybmFsUm9vdCxiPWEuZmlyc3RCYXRjaDt0aGlzLl9kZWZlciYmbnVsbCE9PWI/dm9pZCAwOnQoXCIyNTFcIik7aWYodGhpcy5faGFzQ2hpbGRyZW4pe3ZhciBjPXRoaXMuX2V4cGlyYXRpb25UaW1lO2lmKGIhPT10aGlzKXt0aGlzLl9oYXNDaGlsZHJlbiYmKGM9dGhpcy5fZXhwaXJhdGlvblRpbWU9Yi5fZXhwaXJhdGlvblRpbWUsdGhpcy5yZW5kZXIodGhpcy5fY2hpbGRyZW4pKTtmb3IodmFyIGQ9bnVsbCxlPWI7ZSE9PXRoaXM7KWQ9ZSxlPWUuX25leHQ7bnVsbD09PWQ/dChcIjI1MVwiKTp2b2lkIDA7ZC5fbmV4dD1lLl9uZXh0O3RoaXMuX25leHQ9YjthLmZpcnN0QmF0Y2g9dGhpc310aGlzLl9kZWZlcj0hMTtiPWM7Vj90KFwiMjUzXCIpOnZvaWQgMDtZPWE7Wj1iO1hnKGEsYiwhMCk7WWcoMSxudWxsKTtiPXRoaXMuX25leHQ7dGhpcy5fbmV4dD1udWxsO2I9YS5maXJzdEJhdGNoPWI7bnVsbCE9PVxuYiYmYi5faGFzQ2hpbGRyZW4mJmIucmVuZGVyKGIuX2NoaWxkcmVuKX1lbHNlIHRoaXMuX25leHQ9bnVsbCx0aGlzLl9kZWZlcj0hMX07QmgucHJvdG90eXBlLl9vbkNvbXBsZXRlPWZ1bmN0aW9uKCl7aWYoIXRoaXMuX2RpZENvbXBsZXRlKXt0aGlzLl9kaWRDb21wbGV0ZT0hMDt2YXIgYT10aGlzLl9jYWxsYmFja3M7aWYobnVsbCE9PWEpZm9yKHZhciBiPTA7YjxhLmxlbmd0aDtiKyspKDAsYVtiXSkoKX19O2Z1bmN0aW9uIENoKCl7dGhpcy5fY2FsbGJhY2tzPW51bGw7dGhpcy5fZGlkQ29tbWl0PSExO3RoaXMuX29uQ29tbWl0PXRoaXMuX29uQ29tbWl0LmJpbmQodGhpcyl9Q2gucHJvdG90eXBlLnRoZW49ZnVuY3Rpb24oYSl7aWYodGhpcy5fZGlkQ29tbWl0KWEoKTtlbHNle3ZhciBiPXRoaXMuX2NhbGxiYWNrcztudWxsPT09YiYmKGI9dGhpcy5fY2FsbGJhY2tzPVtdKTtiLnB1c2goYSl9fTtcbkNoLnByb3RvdHlwZS5fb25Db21taXQ9ZnVuY3Rpb24oKXtpZighdGhpcy5fZGlkQ29tbWl0KXt0aGlzLl9kaWRDb21taXQ9ITA7dmFyIGE9dGhpcy5fY2FsbGJhY2tzO2lmKG51bGwhPT1hKWZvcih2YXIgYj0wO2I8YS5sZW5ndGg7YisrKXt2YXIgYz1hW2JdO1wiZnVuY3Rpb25cIiE9PXR5cGVvZiBjP3QoXCIxOTFcIixjKTp2b2lkIDA7YygpfX19O1xuZnVuY3Rpb24gRGgoYSxiLGMpe2I9bmV3IFNlKDUsbnVsbCxudWxsLGI/MzowKTthPXtjdXJyZW50OmIsY29udGFpbmVySW5mbzphLHBlbmRpbmdDaGlsZHJlbjpudWxsLGVhcmxpZXN0UGVuZGluZ1RpbWU6MCxsYXRlc3RQZW5kaW5nVGltZTowLGVhcmxpZXN0U3VzcGVuZGVkVGltZTowLGxhdGVzdFN1c3BlbmRlZFRpbWU6MCxsYXRlc3RQaW5nZWRUaW1lOjAsZGlkRXJyb3I6ITEscGVuZGluZ0NvbW1pdEV4cGlyYXRpb25UaW1lOjAsZmluaXNoZWRXb3JrOm51bGwsdGltZW91dEhhbmRsZTotMSxjb250ZXh0Om51bGwscGVuZGluZ0NvbnRleHQ6bnVsbCxoeWRyYXRlOmMsbmV4dEV4cGlyYXRpb25UaW1lVG9Xb3JrT246MCxleHBpcmF0aW9uVGltZTowLGZpcnN0QmF0Y2g6bnVsbCxuZXh0U2NoZWR1bGVkUm9vdDpudWxsfTt0aGlzLl9pbnRlcm5hbFJvb3Q9Yi5zdGF0ZU5vZGU9YX1cbkRoLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLl9pbnRlcm5hbFJvb3QsZD1uZXcgQ2g7Yj12b2lkIDA9PT1iP251bGw6YjtudWxsIT09YiYmZC50aGVuKGIpO3hoKGEsYyxudWxsLGQuX29uQ29tbWl0KTtyZXR1cm4gZH07RGgucHJvdG90eXBlLnVubW91bnQ9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5faW50ZXJuYWxSb290LGM9bmV3IENoO2E9dm9pZCAwPT09YT9udWxsOmE7bnVsbCE9PWEmJmMudGhlbihhKTt4aChudWxsLGIsbnVsbCxjLl9vbkNvbW1pdCk7cmV0dXJuIGN9O0RoLnByb3RvdHlwZS5sZWdhY3lfcmVuZGVyU3VidHJlZUludG9Db250YWluZXI9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPXRoaXMuX2ludGVybmFsUm9vdCxlPW5ldyBDaDtjPXZvaWQgMD09PWM/bnVsbDpjO251bGwhPT1jJiZlLnRoZW4oYyk7eGgoYixkLGEsZS5fb25Db21taXQpO3JldHVybiBlfTtcbkRoLnByb3RvdHlwZS5jcmVhdGVCYXRjaD1mdW5jdGlvbigpe3ZhciBhPW5ldyBCaCh0aGlzKSxiPWEuX2V4cGlyYXRpb25UaW1lLGM9dGhpcy5faW50ZXJuYWxSb290LGQ9Yy5maXJzdEJhdGNoO2lmKG51bGw9PT1kKWMuZmlyc3RCYXRjaD1hLGEuX25leHQ9bnVsbDtlbHNle2ZvcihjPW51bGw7bnVsbCE9PWQmJmQuX2V4cGlyYXRpb25UaW1lPD1iOyljPWQsZD1kLl9uZXh0O2EuX25leHQ9ZDtudWxsIT09YyYmKGMuX25leHQ9YSl9cmV0dXJuIGF9O2Z1bmN0aW9uIEVoKGEpe3JldHVybiEoIWF8fDEhPT1hLm5vZGVUeXBlJiY5IT09YS5ub2RlVHlwZSYmMTEhPT1hLm5vZGVUeXBlJiYoOCE9PWEubm9kZVR5cGV8fFwiIHJlYWN0LW1vdW50LXBvaW50LXVuc3RhYmxlIFwiIT09YS5ub2RlVmFsdWUpKX1MYj1zaDtNYj11aDtOYj1mdW5jdGlvbigpe1Z8fDA9PT1WZ3x8KFlnKFZnLG51bGwpLFZnPTApfTtcbmZ1bmN0aW9uIEZoKGEsYil7Ynx8KGI9YT85PT09YS5ub2RlVHlwZT9hLmRvY3VtZW50RWxlbWVudDphLmZpcnN0Q2hpbGQ6bnVsbCxiPSEoIWJ8fDEhPT1iLm5vZGVUeXBlfHwhYi5oYXNBdHRyaWJ1dGUoXCJkYXRhLXJlYWN0cm9vdFwiKSkpO2lmKCFiKWZvcih2YXIgYztjPWEubGFzdENoaWxkOylhLnJlbW92ZUNoaWxkKGMpO3JldHVybiBuZXcgRGgoYSwhMSxiKX1cbmZ1bmN0aW9uIEdoKGEsYixjLGQsZSl7RWgoYyk/dm9pZCAwOnQoXCIyMDBcIik7dmFyIGY9Yy5fcmVhY3RSb290Q29udGFpbmVyO2lmKGYpe2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBlKXt2YXIgZz1lO2U9ZnVuY3Rpb24oKXt2YXIgYT16aChmLl9pbnRlcm5hbFJvb3QpO2cuY2FsbChhKX19bnVsbCE9YT9mLmxlZ2FjeV9yZW5kZXJTdWJ0cmVlSW50b0NvbnRhaW5lcihhLGIsZSk6Zi5yZW5kZXIoYixlKX1lbHNle2Y9Yy5fcmVhY3RSb290Q29udGFpbmVyPUZoKGMsZCk7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGUpe3ZhciBoPWU7ZT1mdW5jdGlvbigpe3ZhciBhPXpoKGYuX2ludGVybmFsUm9vdCk7aC5jYWxsKGEpfX10aChmdW5jdGlvbigpe251bGwhPWE/Zi5sZWdhY3lfcmVuZGVyU3VidHJlZUludG9Db250YWluZXIoYSxiLGUpOmYucmVuZGVyKGIsZSl9KX1yZXR1cm4gemgoZi5faW50ZXJuYWxSb290KX1cbmZ1bmN0aW9uIEhoKGEsYil7dmFyIGM9Mjxhcmd1bWVudHMubGVuZ3RoJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOm51bGw7RWgoYik/dm9pZCAwOnQoXCIyMDBcIik7cmV0dXJuIEFoKGEsYixudWxsLGMpfVxudmFyIE1oPXtjcmVhdGVQb3J0YWw6SGgsZmluZERPTU5vZGU6ZnVuY3Rpb24oYSl7aWYobnVsbD09YSlyZXR1cm4gbnVsbDtpZigxPT09YS5ub2RlVHlwZSlyZXR1cm4gYTt2YXIgYj1hLl9yZWFjdEludGVybmFsRmliZXI7dm9pZCAwPT09YiYmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhLnJlbmRlcj90KFwiMTg4XCIpOnQoXCIyNjhcIixPYmplY3Qua2V5cyhhKSkpO2E9bWQoYik7YT1udWxsPT09YT9udWxsOmEuc3RhdGVOb2RlO3JldHVybiBhfSxoeWRyYXRlOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gR2gobnVsbCxhLGIsITAsYyl9LHJlbmRlcjpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIEdoKG51bGwsYSxiLCExLGMpfSx1bnN0YWJsZV9yZW5kZXJTdWJ0cmVlSW50b0NvbnRhaW5lcjpmdW5jdGlvbihhLGIsYyxkKXtudWxsPT1hfHx2b2lkIDA9PT1hLl9yZWFjdEludGVybmFsRmliZXI/dChcIjM4XCIpOnZvaWQgMDtyZXR1cm4gR2goYSxiLGMsITEsZCl9LHVubW91bnRDb21wb25lbnRBdE5vZGU6ZnVuY3Rpb24oYSl7RWgoYSk/XG52b2lkIDA6dChcIjQwXCIpO3JldHVybiBhLl9yZWFjdFJvb3RDb250YWluZXI/KHRoKGZ1bmN0aW9uKCl7R2gobnVsbCxudWxsLGEsITEsZnVuY3Rpb24oKXthLl9yZWFjdFJvb3RDb250YWluZXI9bnVsbH0pfSksITApOiExfSx1bnN0YWJsZV9jcmVhdGVQb3J0YWw6ZnVuY3Rpb24oKXtyZXR1cm4gSGguYXBwbHkodm9pZCAwLGFyZ3VtZW50cyl9LHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzOnNoLHVuc3RhYmxlX2ludGVyYWN0aXZlVXBkYXRlczp1aCxmbHVzaFN5bmM6ZnVuY3Rpb24oYSxiKXtWP3QoXCIxODdcIik6dm9pZCAwO3ZhciBjPVc7Vz0hMDt0cnl7cmV0dXJuIGJoKGEsYil9ZmluYWxseXtXPWMsWWcoMSxudWxsKX19LHVuc3RhYmxlX2ZsdXNoQ29udHJvbGxlZDpmdW5jdGlvbihhKXt2YXIgYj1XO1c9ITA7dHJ5e2JoKGEpfWZpbmFsbHl7KFc9Yil8fFZ8fFlnKDEsbnVsbCl9fSxfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDp7RXZlbnRzOltMYSxcbk1hLE5hLEVhLmluamVjdEV2ZW50UGx1Z2luc0J5TmFtZSxxYSxVYSxmdW5jdGlvbihhKXt6YShhLFRhKX0sSmIsS2IsSWQsR2FdfSx1bnN0YWJsZV9jcmVhdGVSb290OmZ1bmN0aW9uKGEsYil7RWgoYSk/dm9pZCAwOnQoXCIyNzhcIik7cmV0dXJuIG5ldyBEaChhLCEwLG51bGwhPWImJiEwPT09Yi5oeWRyYXRlKX19OyhmdW5jdGlvbihhKXt2YXIgYj1hLmZpbmRGaWJlckJ5SG9zdEluc3RhbmNlO3JldHVybiBSZShuKHt9LGEse2ZpbmRIb3N0SW5zdGFuY2VCeUZpYmVyOmZ1bmN0aW9uKGEpe2E9bWQoYSk7cmV0dXJuIG51bGw9PT1hP251bGw6YS5zdGF0ZU5vZGV9LGZpbmRGaWJlckJ5SG9zdEluc3RhbmNlOmZ1bmN0aW9uKGEpe3JldHVybiBiP2IoYSk6bnVsbH19KSl9KSh7ZmluZEZpYmVyQnlIb3N0SW5zdGFuY2U6S2EsYnVuZGxlVHlwZTowLHZlcnNpb246XCIxNi41LjJcIixyZW5kZXJlclBhY2thZ2VOYW1lOlwicmVhY3QtZG9tXCJ9KTtcbnZhciBOaD17ZGVmYXVsdDpNaH0sT2g9TmgmJk1ofHxOaDttb2R1bGUuZXhwb3J0cz1PaC5kZWZhdWx0fHxPaDtcbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9zY2hlZHVsZS5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9zY2hlZHVsZS5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi41LjJcbiAqIHNjaGVkdWxlLnByb2R1Y3Rpb24ubWluLmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBjPW51bGwsZT0hMSxmPSExLGc9XCJvYmplY3RcIj09PXR5cGVvZiBwZXJmb3JtYW5jZSYmXCJmdW5jdGlvblwiPT09dHlwZW9mIHBlcmZvcm1hbmNlLm5vdyxsPXt0aW1lUmVtYWluaW5nOmc/ZnVuY3Rpb24oKXt2YXIgYT1oKCktcGVyZm9ybWFuY2Uubm93KCk7cmV0dXJuIDA8YT9hOjB9OmZ1bmN0aW9uKCl7dmFyIGE9aCgpLURhdGUubm93KCk7cmV0dXJuIDA8YT9hOjB9LGRpZFRpbWVvdXQ6ITF9O2Z1bmN0aW9uIG0oKXtpZighZSl7dmFyIGE9Yy50aW1lc091dEF0O2Y/bigpOmY9ITA7cChxLGEpfX1mdW5jdGlvbiByKCl7dmFyIGE9YyxiPWMubmV4dDtpZihjPT09YiljPW51bGw7ZWxzZXt2YXIgZD1jLnByZXZpb3VzO2M9ZC5uZXh0PWI7Yi5wcmV2aW91cz1kfWEubmV4dD1hLnByZXZpb3VzPW51bGw7YT1hLmNhbGxiYWNrO2EobCl9XG5mdW5jdGlvbiBxKGEpe2U9ITA7bC5kaWRUaW1lb3V0PWE7dHJ5e2lmKGEpZm9yKDtudWxsIT09Yzspe3ZhciBiPWV4cG9ydHMudW5zdGFibGVfbm93KCk7aWYoYy50aW1lc091dEF0PD1iKXtkbyByKCk7d2hpbGUobnVsbCE9PWMmJmMudGltZXNPdXRBdDw9Yil9ZWxzZSBicmVha31lbHNlIGlmKG51bGwhPT1jKXtkbyByKCk7d2hpbGUobnVsbCE9PWMmJjA8aCgpLWV4cG9ydHMudW5zdGFibGVfbm93KCkpfX1maW5hbGx5e2U9ITEsbnVsbCE9PWM/bShjKTpmPSExfX1cbnZhciB0PURhdGUsdT1cImZ1bmN0aW9uXCI9PT10eXBlb2Ygc2V0VGltZW91dD9zZXRUaW1lb3V0OnZvaWQgMCx2PVwiZnVuY3Rpb25cIj09PXR5cGVvZiBjbGVhclRpbWVvdXQ/Y2xlYXJUaW1lb3V0OnZvaWQgMCx3PVwiZnVuY3Rpb25cIj09PXR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWU/cmVxdWVzdEFuaW1hdGlvbkZyYW1lOnZvaWQgMCx4PVwiZnVuY3Rpb25cIj09PXR5cGVvZiBjYW5jZWxBbmltYXRpb25GcmFtZT9jYW5jZWxBbmltYXRpb25GcmFtZTp2b2lkIDAseSx6O2Z1bmN0aW9uIEEoYSl7eT13KGZ1bmN0aW9uKGIpe3Yoeik7YShiKX0pO3o9dShmdW5jdGlvbigpe3goeSk7YShleHBvcnRzLnVuc3RhYmxlX25vdygpKX0sMTAwKX1pZihnKXt2YXIgQj1wZXJmb3JtYW5jZTtleHBvcnRzLnVuc3RhYmxlX25vdz1mdW5jdGlvbigpe3JldHVybiBCLm5vdygpfX1lbHNlIGV4cG9ydHMudW5zdGFibGVfbm93PWZ1bmN0aW9uKCl7cmV0dXJuIHQubm93KCl9O3ZhciBwLG4saDtcbmlmKFwidW5kZWZpbmVkXCI9PT10eXBlb2Ygd2luZG93KXt2YXIgQz0tMTtwPWZ1bmN0aW9uKGEpe0M9c2V0VGltZW91dChhLDAsITApfTtuPWZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KEMpfTtoPWZ1bmN0aW9uKCl7cmV0dXJuIDB9fWVsc2UgaWYod2luZG93Ll9zY2hlZE1vY2spe3ZhciBEPXdpbmRvdy5fc2NoZWRNb2NrO3A9RFswXTtuPURbMV07aD1EWzJdfWVsc2V7XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBjb25zb2xlJiYoXCJmdW5jdGlvblwiIT09dHlwZW9mIHcmJmNvbnNvbGUuZXJyb3IoXCJUaGlzIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IHJlcXVlc3RBbmltYXRpb25GcmFtZS4gTWFrZSBzdXJlIHRoYXQgeW91IGxvYWQgYSBwb2x5ZmlsbCBpbiBvbGRlciBicm93c2Vycy4gaHR0cHM6Ly9mYi5tZS9yZWFjdC1wb2x5ZmlsbHNcIiksXCJmdW5jdGlvblwiIT09dHlwZW9mIHgmJmNvbnNvbGUuZXJyb3IoXCJUaGlzIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IGNhbmNlbEFuaW1hdGlvbkZyYW1lLiBNYWtlIHN1cmUgdGhhdCB5b3UgbG9hZCBhIHBvbHlmaWxsIGluIG9sZGVyIGJyb3dzZXJzLiBodHRwczovL2ZiLm1lL3JlYWN0LXBvbHlmaWxsc1wiKSk7XG52YXIgRT1udWxsLEY9ITEsRz0tMSxIPSExLEk9ITEsSj0wLEs9MzMsTD0zMztoPWZ1bmN0aW9uKCl7cmV0dXJuIEp9O3ZhciBNPVwiX19yZWFjdElkbGVDYWxsYmFjayRcIitNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyKTt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixmdW5jdGlvbihhKXtpZihhLnNvdXJjZT09PXdpbmRvdyYmYS5kYXRhPT09TSl7Rj0hMTt2YXIgYj1leHBvcnRzLnVuc3RhYmxlX25vdygpO2E9ITE7aWYoMD49Si1iKWlmKC0xIT09RyYmRzw9YilhPSEwO2Vsc2V7SHx8KEg9ITAsQShOKSk7cmV0dXJufUc9LTE7Yj1FO0U9bnVsbDtpZihudWxsIT09Yil7ST0hMDt0cnl7YihhKX1maW5hbGx5e0k9ITF9fX19LCExKTt2YXIgTj1mdW5jdGlvbihhKXtIPSExO3ZhciBiPWEtSitMO2I8TCYmSzxMPyg4PmImJihiPTgpLEw9YjxLP0s6Yik6Sz1iO0o9YStMO0Z8fChGPSEwLHdpbmRvdy5wb3N0TWVzc2FnZShNLFwiKlwiKSl9O3A9ZnVuY3Rpb24oYSxcbmIpe0U9YTtHPWI7ST93aW5kb3cucG9zdE1lc3NhZ2UoTSxcIipcIik6SHx8KEg9ITAsQShOKSl9O249ZnVuY3Rpb24oKXtFPW51bGw7Rj0hMTtHPS0xfX1leHBvcnRzLnVuc3RhYmxlX3NjaGVkdWxlV29yaz1mdW5jdGlvbihhLGIpe3ZhciBkPWV4cG9ydHMudW5zdGFibGVfbm93KCk7Yj12b2lkIDAhPT1iJiZudWxsIT09YiYmbnVsbCE9PWIudGltZW91dCYmdm9pZCAwIT09Yi50aW1lb3V0P2QrYi50aW1lb3V0OmQrNUUzO2E9e2NhbGxiYWNrOmEsdGltZXNPdXRBdDpiLG5leHQ6bnVsbCxwcmV2aW91czpudWxsfTtpZihudWxsPT09YyljPWEubmV4dD1hLnByZXZpb3VzPWEsbShjKTtlbHNle2Q9bnVsbDt2YXIgaz1jO2Rve2lmKGsudGltZXNPdXRBdD5iKXtkPWs7YnJlYWt9az1rLm5leHR9d2hpbGUoayE9PWMpO251bGw9PT1kP2Q9YzpkPT09YyYmKGM9YSxtKGMpKTtiPWQucHJldmlvdXM7Yi5uZXh0PWQucHJldmlvdXM9YTthLm5leHQ9ZDthLnByZXZpb3VzPWJ9cmV0dXJuIGF9O1xuZXhwb3J0cy51bnN0YWJsZV9jYW5jZWxTY2hlZHVsZWRXb3JrPWZ1bmN0aW9uKGEpe3ZhciBiPWEubmV4dDtpZihudWxsIT09Yil7aWYoYj09PWEpYz1udWxsO2Vsc2V7YT09PWMmJihjPWIpO3ZhciBkPWEucHJldmlvdXM7ZC5uZXh0PWI7Yi5wcmV2aW91cz1kfWEubmV4dD1hLnByZXZpb3VzPW51bGx9fTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuXG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge31cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gc2hpbShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgIGlmIChzZWNyZXQgPT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAvLyBJdCBpcyBzdGlsbCBzYWZlIHdoZW4gY2FsbGVkIGZyb20gUmVhY3QuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXG4gICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAnVXNlIFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICApO1xuICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIHRocm93IGVycjtcbiAgfTtcbiAgc2hpbS5pc1JlcXVpcmVkID0gc2hpbTtcbiAgZnVuY3Rpb24gZ2V0U2hpbSgpIHtcbiAgICByZXR1cm4gc2hpbTtcbiAgfTtcbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBzaGltLFxuICAgIGJvb2w6IHNoaW0sXG4gICAgZnVuYzogc2hpbSxcbiAgICBudW1iZXI6IHNoaW0sXG4gICAgb2JqZWN0OiBzaGltLFxuICAgIHN0cmluZzogc2hpbSxcbiAgICBzeW1ib2w6IHNoaW0sXG5cbiAgICBhbnk6IHNoaW0sXG4gICAgYXJyYXlPZjogZ2V0U2hpbSxcbiAgICBlbGVtZW50OiBzaGltLFxuICAgIGluc3RhbmNlT2Y6IGdldFNoaW0sXG4gICAgbm9kZTogc2hpbSxcbiAgICBvYmplY3RPZjogZ2V0U2hpbSxcbiAgICBvbmVPZjogZ2V0U2hpbSxcbiAgICBvbmVPZlR5cGU6IGdldFNoaW0sXG4gICAgc2hhcGU6IGdldFNoaW0sXG4gICAgZXhhY3Q6IGdldFNoaW1cbiAgfTtcblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGVtcHR5RnVuY3Rpb247XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWxNb2R1bGUpIHtcblx0aWYgKCFvcmlnaW5hbE1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHR2YXIgbW9kdWxlID0gT2JqZWN0LmNyZWF0ZShvcmlnaW5hbE1vZHVsZSk7XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiZXhwb3J0c1wiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5leHBvcnQgdmFyIHN1YnNjcmlwdGlvblNoYXBlID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgdHJ5U3Vic2NyaWJlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB0cnlVbnN1YnNjcmliZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgbm90aWZ5TmVzdGVkU3ViczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgaXNTdWJzY3JpYmVkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59KTtcblxuZXhwb3J0IHZhciBzdG9yZVNoYXBlID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgc3Vic2NyaWJlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBkaXNwYXRjaDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZ2V0U3RhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn0pOyIsIi8qKlxuICogUHJpbnRzIGEgd2FybmluZyBpbiB0aGUgY29uc29sZSBpZiBpdCBleGlzdHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgVGhlIHdhcm5pbmcgbWVzc2FnZS5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3YXJuaW5nKG1lc3NhZ2UpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjb25zb2xlLmVycm9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgfVxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IGlmIHlvdSBlbmFibGVcbiAgICAvLyBcImJyZWFrIG9uIGFsbCBleGNlcHRpb25zXCIgaW4geW91ciBjb25zb2xlLFxuICAgIC8vIGl0IHdvdWxkIHBhdXNlIHRoZSBleGVjdXRpb24gYXQgdGhpcyBsaW5lLlxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1lbXB0eSAqL1xuICB9IGNhdGNoIChlKSB7fVxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLWVtcHR5ICovXG59IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHN0b3JlU2hhcGUsIHN1YnNjcmlwdGlvblNoYXBlIH0gZnJvbSAnLi4vdXRpbHMvUHJvcFR5cGVzJztcbmltcG9ydCB3YXJuaW5nIGZyb20gJy4uL3V0aWxzL3dhcm5pbmcnO1xuXG52YXIgZGlkV2FybkFib3V0UmVjZWl2aW5nU3RvcmUgPSBmYWxzZTtcbmZ1bmN0aW9uIHdhcm5BYm91dFJlY2VpdmluZ1N0b3JlKCkge1xuICBpZiAoZGlkV2FybkFib3V0UmVjZWl2aW5nU3RvcmUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgZGlkV2FybkFib3V0UmVjZWl2aW5nU3RvcmUgPSB0cnVlO1xuXG4gIHdhcm5pbmcoJzxQcm92aWRlcj4gZG9lcyBub3Qgc3VwcG9ydCBjaGFuZ2luZyBgc3RvcmVgIG9uIHRoZSBmbHkuICcgKyAnSXQgaXMgbW9zdCBsaWtlbHkgdGhhdCB5b3Ugc2VlIHRoaXMgZXJyb3IgYmVjYXVzZSB5b3UgdXBkYXRlZCB0byAnICsgJ1JlZHV4IDIueCBhbmQgUmVhY3QgUmVkdXggMi54IHdoaWNoIG5vIGxvbmdlciBob3QgcmVsb2FkIHJlZHVjZXJzICcgKyAnYXV0b21hdGljYWxseS4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JlYWN0LXJlZHV4L3JlbGVhc2VzLycgKyAndGFnL3YyLjAuMCBmb3IgdGhlIG1pZ3JhdGlvbiBpbnN0cnVjdGlvbnMuJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm92aWRlcigpIHtcbiAgdmFyIF9Qcm92aWRlciRjaGlsZENvbnRleDtcblxuICB2YXIgc3RvcmVLZXkgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICdzdG9yZSc7XG4gIHZhciBzdWJLZXkgPSBhcmd1bWVudHNbMV07XG5cbiAgdmFyIHN1YnNjcmlwdGlvbktleSA9IHN1YktleSB8fCBzdG9yZUtleSArICdTdWJzY3JpcHRpb24nO1xuXG4gIHZhciBQcm92aWRlciA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKFByb3ZpZGVyLCBfQ29tcG9uZW50KTtcblxuICAgIFByb3ZpZGVyLnByb3RvdHlwZS5nZXRDaGlsZENvbnRleHQgPSBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICB2YXIgX3JlZjtcblxuICAgICAgcmV0dXJuIF9yZWYgPSB7fSwgX3JlZltzdG9yZUtleV0gPSB0aGlzW3N0b3JlS2V5XSwgX3JlZltzdWJzY3JpcHRpb25LZXldID0gbnVsbCwgX3JlZjtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gUHJvdmlkZXIocHJvcHMsIGNvbnRleHQpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQcm92aWRlcik7XG5cbiAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkpO1xuXG4gICAgICBfdGhpc1tzdG9yZUtleV0gPSBwcm9wcy5zdG9yZTtcbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBQcm92aWRlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIENoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gICAgfTtcblxuICAgIHJldHVybiBQcm92aWRlcjtcbiAgfShDb21wb25lbnQpO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgUHJvdmlkZXIucHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBmdW5jdGlvbiAobmV4dFByb3BzKSB7XG4gICAgICBpZiAodGhpc1tzdG9yZUtleV0gIT09IG5leHRQcm9wcy5zdG9yZSkge1xuICAgICAgICB3YXJuQWJvdXRSZWNlaXZpbmdTdG9yZSgpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBQcm92aWRlci5wcm9wVHlwZXMgPSB7XG4gICAgc3RvcmU6IHN0b3JlU2hhcGUuaXNSZXF1aXJlZCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmVsZW1lbnQuaXNSZXF1aXJlZFxuICB9O1xuICBQcm92aWRlci5jaGlsZENvbnRleHRUeXBlcyA9IChfUHJvdmlkZXIkY2hpbGRDb250ZXggPSB7fSwgX1Byb3ZpZGVyJGNoaWxkQ29udGV4W3N0b3JlS2V5XSA9IHN0b3JlU2hhcGUuaXNSZXF1aXJlZCwgX1Byb3ZpZGVyJGNoaWxkQ29udGV4W3N1YnNjcmlwdGlvbktleV0gPSBzdWJzY3JpcHRpb25TaGFwZSwgX1Byb3ZpZGVyJGNoaWxkQ29udGV4KTtcblxuICByZXR1cm4gUHJvdmlkZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVByb3ZpZGVyKCk7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLy8gZW5jYXBzdWxhdGVzIHRoZSBzdWJzY3JpcHRpb24gbG9naWMgZm9yIGNvbm5lY3RpbmcgYSBjb21wb25lbnQgdG8gdGhlIHJlZHV4IHN0b3JlLCBhc1xuLy8gd2VsbCBhcyBuZXN0aW5nIHN1YnNjcmlwdGlvbnMgb2YgZGVzY2VuZGFudCBjb21wb25lbnRzLCBzbyB0aGF0IHdlIGNhbiBlbnN1cmUgdGhlXG4vLyBhbmNlc3RvciBjb21wb25lbnRzIHJlLXJlbmRlciBiZWZvcmUgZGVzY2VuZGFudHNcblxudmFyIENMRUFSRUQgPSBudWxsO1xudmFyIG51bGxMaXN0ZW5lcnMgPSB7XG4gIG5vdGlmeTogZnVuY3Rpb24gbm90aWZ5KCkge31cbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpc3RlbmVyQ29sbGVjdGlvbigpIHtcbiAgLy8gdGhlIGN1cnJlbnQvbmV4dCBwYXR0ZXJuIGlzIGNvcGllZCBmcm9tIHJlZHV4J3MgY3JlYXRlU3RvcmUgY29kZS5cbiAgLy8gVE9ETzogcmVmYWN0b3IrZXhwb3NlIHRoYXQgY29kZSB0byBiZSByZXVzYWJsZSBoZXJlP1xuICB2YXIgY3VycmVudCA9IFtdO1xuICB2YXIgbmV4dCA9IFtdO1xuXG4gIHJldHVybiB7XG4gICAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgbmV4dCA9IENMRUFSRUQ7XG4gICAgICBjdXJyZW50ID0gQ0xFQVJFRDtcbiAgICB9LFxuICAgIG5vdGlmeTogZnVuY3Rpb24gbm90aWZ5KCkge1xuICAgICAgdmFyIGxpc3RlbmVycyA9IGN1cnJlbnQgPSBuZXh0O1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGlzdGVuZXJzW2ldKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH0sXG4gICAgc3Vic2NyaWJlOiBmdW5jdGlvbiBzdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgICAgIHZhciBpc1N1YnNjcmliZWQgPSB0cnVlO1xuICAgICAgaWYgKG5leHQgPT09IGN1cnJlbnQpIG5leHQgPSBjdXJyZW50LnNsaWNlKCk7XG4gICAgICBuZXh0LnB1c2gobGlzdGVuZXIpO1xuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gdW5zdWJzY3JpYmUoKSB7XG4gICAgICAgIGlmICghaXNTdWJzY3JpYmVkIHx8IGN1cnJlbnQgPT09IENMRUFSRUQpIHJldHVybjtcbiAgICAgICAgaXNTdWJzY3JpYmVkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKG5leHQgPT09IGN1cnJlbnQpIG5leHQgPSBjdXJyZW50LnNsaWNlKCk7XG4gICAgICAgIG5leHQuc3BsaWNlKG5leHQuaW5kZXhPZihsaXN0ZW5lciksIDEpO1xuICAgICAgfTtcbiAgICB9XG4gIH07XG59XG5cbnZhciBTdWJzY3JpcHRpb24gPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFN1YnNjcmlwdGlvbihzdG9yZSwgcGFyZW50U3ViLCBvblN0YXRlQ2hhbmdlKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN1YnNjcmlwdGlvbik7XG5cbiAgICB0aGlzLnN0b3JlID0gc3RvcmU7XG4gICAgdGhpcy5wYXJlbnRTdWIgPSBwYXJlbnRTdWI7XG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlID0gb25TdGF0ZUNoYW5nZTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlID0gbnVsbDtcbiAgICB0aGlzLmxpc3RlbmVycyA9IG51bGxMaXN0ZW5lcnM7XG4gIH1cblxuICBTdWJzY3JpcHRpb24ucHJvdG90eXBlLmFkZE5lc3RlZFN1YiA9IGZ1bmN0aW9uIGFkZE5lc3RlZFN1YihsaXN0ZW5lcikge1xuICAgIHRoaXMudHJ5U3Vic2NyaWJlKCk7XG4gICAgcmV0dXJuIHRoaXMubGlzdGVuZXJzLnN1YnNjcmliZShsaXN0ZW5lcik7XG4gIH07XG5cbiAgU3Vic2NyaXB0aW9uLnByb3RvdHlwZS5ub3RpZnlOZXN0ZWRTdWJzID0gZnVuY3Rpb24gbm90aWZ5TmVzdGVkU3VicygpIHtcbiAgICB0aGlzLmxpc3RlbmVycy5ub3RpZnkoKTtcbiAgfTtcblxuICBTdWJzY3JpcHRpb24ucHJvdG90eXBlLmlzU3Vic2NyaWJlZCA9IGZ1bmN0aW9uIGlzU3Vic2NyaWJlZCgpIHtcbiAgICByZXR1cm4gQm9vbGVhbih0aGlzLnVuc3Vic2NyaWJlKTtcbiAgfTtcblxuICBTdWJzY3JpcHRpb24ucHJvdG90eXBlLnRyeVN1YnNjcmliZSA9IGZ1bmN0aW9uIHRyeVN1YnNjcmliZSgpIHtcbiAgICBpZiAoIXRoaXMudW5zdWJzY3JpYmUpIHtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUgPSB0aGlzLnBhcmVudFN1YiA/IHRoaXMucGFyZW50U3ViLmFkZE5lc3RlZFN1Yih0aGlzLm9uU3RhdGVDaGFuZ2UpIDogdGhpcy5zdG9yZS5zdWJzY3JpYmUodGhpcy5vblN0YXRlQ2hhbmdlKTtcblxuICAgICAgdGhpcy5saXN0ZW5lcnMgPSBjcmVhdGVMaXN0ZW5lckNvbGxlY3Rpb24oKTtcbiAgICB9XG4gIH07XG5cbiAgU3Vic2NyaXB0aW9uLnByb3RvdHlwZS50cnlVbnN1YnNjcmliZSA9IGZ1bmN0aW9uIHRyeVVuc3Vic2NyaWJlKCkge1xuICAgIGlmICh0aGlzLnVuc3Vic2NyaWJlKSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlID0gbnVsbDtcbiAgICAgIHRoaXMubGlzdGVuZXJzLmNsZWFyKCk7XG4gICAgICB0aGlzLmxpc3RlbmVycyA9IG51bGxMaXN0ZW5lcnM7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBTdWJzY3JpcHRpb247XG59KCk7XG5cbmV4cG9ydCB7IFN1YnNjcmlwdGlvbiBhcyBkZWZhdWx0IH07IiwidmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmltcG9ydCBob2lzdFN0YXRpY3MgZnJvbSAnaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MnO1xuaW1wb3J0IGludmFyaWFudCBmcm9tICdpbnZhcmlhbnQnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBjcmVhdGVFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgU3Vic2NyaXB0aW9uIGZyb20gJy4uL3V0aWxzL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBzdG9yZVNoYXBlLCBzdWJzY3JpcHRpb25TaGFwZSB9IGZyb20gJy4uL3V0aWxzL1Byb3BUeXBlcyc7XG5cbnZhciBob3RSZWxvYWRpbmdWZXJzaW9uID0gMDtcbnZhciBkdW1teVN0YXRlID0ge307XG5mdW5jdGlvbiBub29wKCkge31cbmZ1bmN0aW9uIG1ha2VTZWxlY3RvclN0YXRlZnVsKHNvdXJjZVNlbGVjdG9yLCBzdG9yZSkge1xuICAvLyB3cmFwIHRoZSBzZWxlY3RvciBpbiBhbiBvYmplY3QgdGhhdCB0cmFja3MgaXRzIHJlc3VsdHMgYmV0d2VlbiBydW5zLlxuICB2YXIgc2VsZWN0b3IgPSB7XG4gICAgcnVuOiBmdW5jdGlvbiBydW5Db21wb25lbnRTZWxlY3Rvcihwcm9wcykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIG5leHRQcm9wcyA9IHNvdXJjZVNlbGVjdG9yKHN0b3JlLmdldFN0YXRlKCksIHByb3BzKTtcbiAgICAgICAgaWYgKG5leHRQcm9wcyAhPT0gc2VsZWN0b3IucHJvcHMgfHwgc2VsZWN0b3IuZXJyb3IpIHtcbiAgICAgICAgICBzZWxlY3Rvci5zaG91bGRDb21wb25lbnRVcGRhdGUgPSB0cnVlO1xuICAgICAgICAgIHNlbGVjdG9yLnByb3BzID0gbmV4dFByb3BzO1xuICAgICAgICAgIHNlbGVjdG9yLmVycm9yID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgc2VsZWN0b3Iuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgc2VsZWN0b3IuZXJyb3IgPSBlcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHNlbGVjdG9yO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25uZWN0QWR2YW5jZWQoXG4vKlxuICBzZWxlY3RvckZhY3RvcnkgaXMgYSBmdW5jIHRoYXQgaXMgcmVzcG9uc2libGUgZm9yIHJldHVybmluZyB0aGUgc2VsZWN0b3IgZnVuY3Rpb24gdXNlZCB0b1xuICBjb21wdXRlIG5ldyBwcm9wcyBmcm9tIHN0YXRlLCBwcm9wcywgYW5kIGRpc3BhdGNoLiBGb3IgZXhhbXBsZTpcbiAgICAgZXhwb3J0IGRlZmF1bHQgY29ubmVjdEFkdmFuY2VkKChkaXNwYXRjaCwgb3B0aW9ucykgPT4gKHN0YXRlLCBwcm9wcykgPT4gKHtcbiAgICAgIHRoaW5nOiBzdGF0ZS50aGluZ3NbcHJvcHMudGhpbmdJZF0sXG4gICAgICBzYXZlVGhpbmc6IGZpZWxkcyA9PiBkaXNwYXRjaChhY3Rpb25DcmVhdG9ycy5zYXZlVGhpbmcocHJvcHMudGhpbmdJZCwgZmllbGRzKSksXG4gICAgfSkpKFlvdXJDb21wb25lbnQpXG4gICBBY2Nlc3MgdG8gZGlzcGF0Y2ggaXMgcHJvdmlkZWQgdG8gdGhlIGZhY3Rvcnkgc28gc2VsZWN0b3JGYWN0b3JpZXMgY2FuIGJpbmQgYWN0aW9uQ3JlYXRvcnNcbiAgb3V0c2lkZSBvZiB0aGVpciBzZWxlY3RvciBhcyBhbiBvcHRpbWl6YXRpb24uIE9wdGlvbnMgcGFzc2VkIHRvIGNvbm5lY3RBZHZhbmNlZCBhcmUgcGFzc2VkIHRvXG4gIHRoZSBzZWxlY3RvckZhY3RvcnksIGFsb25nIHdpdGggZGlzcGxheU5hbWUgYW5kIFdyYXBwZWRDb21wb25lbnQsIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQuXG4gICBOb3RlIHRoYXQgc2VsZWN0b3JGYWN0b3J5IGlzIHJlc3BvbnNpYmxlIGZvciBhbGwgY2FjaGluZy9tZW1vaXphdGlvbiBvZiBpbmJvdW5kIGFuZCBvdXRib3VuZFxuICBwcm9wcy4gRG8gbm90IHVzZSBjb25uZWN0QWR2YW5jZWQgZGlyZWN0bHkgd2l0aG91dCBtZW1vaXppbmcgcmVzdWx0cyBiZXR3ZWVuIGNhbGxzIHRvIHlvdXJcbiAgc2VsZWN0b3IsIG90aGVyd2lzZSB0aGUgQ29ubmVjdCBjb21wb25lbnQgd2lsbCByZS1yZW5kZXIgb24gZXZlcnkgc3RhdGUgb3IgcHJvcHMgY2hhbmdlLlxuKi9cbnNlbGVjdG9yRmFjdG9yeSkge1xuICB2YXIgX2NvbnRleHRUeXBlcywgX2NoaWxkQ29udGV4dFR5cGVzO1xuXG4gIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fSxcbiAgICAgIF9yZWYkZ2V0RGlzcGxheU5hbWUgPSBfcmVmLmdldERpc3BsYXlOYW1lLFxuICAgICAgZ2V0RGlzcGxheU5hbWUgPSBfcmVmJGdldERpc3BsYXlOYW1lID09PSB1bmRlZmluZWQgPyBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiAnQ29ubmVjdEFkdmFuY2VkKCcgKyBuYW1lICsgJyknO1xuICB9IDogX3JlZiRnZXREaXNwbGF5TmFtZSxcbiAgICAgIF9yZWYkbWV0aG9kTmFtZSA9IF9yZWYubWV0aG9kTmFtZSxcbiAgICAgIG1ldGhvZE5hbWUgPSBfcmVmJG1ldGhvZE5hbWUgPT09IHVuZGVmaW5lZCA/ICdjb25uZWN0QWR2YW5jZWQnIDogX3JlZiRtZXRob2ROYW1lLFxuICAgICAgX3JlZiRyZW5kZXJDb3VudFByb3AgPSBfcmVmLnJlbmRlckNvdW50UHJvcCxcbiAgICAgIHJlbmRlckNvdW50UHJvcCA9IF9yZWYkcmVuZGVyQ291bnRQcm9wID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBfcmVmJHJlbmRlckNvdW50UHJvcCxcbiAgICAgIF9yZWYkc2hvdWxkSGFuZGxlU3RhdCA9IF9yZWYuc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzLFxuICAgICAgc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzID0gX3JlZiRzaG91bGRIYW5kbGVTdGF0ID09PSB1bmRlZmluZWQgPyB0cnVlIDogX3JlZiRzaG91bGRIYW5kbGVTdGF0LFxuICAgICAgX3JlZiRzdG9yZUtleSA9IF9yZWYuc3RvcmVLZXksXG4gICAgICBzdG9yZUtleSA9IF9yZWYkc3RvcmVLZXkgPT09IHVuZGVmaW5lZCA/ICdzdG9yZScgOiBfcmVmJHN0b3JlS2V5LFxuICAgICAgX3JlZiR3aXRoUmVmID0gX3JlZi53aXRoUmVmLFxuICAgICAgd2l0aFJlZiA9IF9yZWYkd2l0aFJlZiA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfcmVmJHdpdGhSZWYsXG4gICAgICBjb25uZWN0T3B0aW9ucyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbJ2dldERpc3BsYXlOYW1lJywgJ21ldGhvZE5hbWUnLCAncmVuZGVyQ291bnRQcm9wJywgJ3Nob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcycsICdzdG9yZUtleScsICd3aXRoUmVmJ10pO1xuXG4gIHZhciBzdWJzY3JpcHRpb25LZXkgPSBzdG9yZUtleSArICdTdWJzY3JpcHRpb24nO1xuICB2YXIgdmVyc2lvbiA9IGhvdFJlbG9hZGluZ1ZlcnNpb24rKztcblxuICB2YXIgY29udGV4dFR5cGVzID0gKF9jb250ZXh0VHlwZXMgPSB7fSwgX2NvbnRleHRUeXBlc1tzdG9yZUtleV0gPSBzdG9yZVNoYXBlLCBfY29udGV4dFR5cGVzW3N1YnNjcmlwdGlvbktleV0gPSBzdWJzY3JpcHRpb25TaGFwZSwgX2NvbnRleHRUeXBlcyk7XG4gIHZhciBjaGlsZENvbnRleHRUeXBlcyA9IChfY2hpbGRDb250ZXh0VHlwZXMgPSB7fSwgX2NoaWxkQ29udGV4dFR5cGVzW3N1YnNjcmlwdGlvbktleV0gPSBzdWJzY3JpcHRpb25TaGFwZSwgX2NoaWxkQ29udGV4dFR5cGVzKTtcblxuICByZXR1cm4gZnVuY3Rpb24gd3JhcFdpdGhDb25uZWN0KFdyYXBwZWRDb21wb25lbnQpIHtcbiAgICBpbnZhcmlhbnQodHlwZW9mIFdyYXBwZWRDb21wb25lbnQgPT0gJ2Z1bmN0aW9uJywgJ1lvdSBtdXN0IHBhc3MgYSBjb21wb25lbnQgdG8gdGhlIGZ1bmN0aW9uIHJldHVybmVkIGJ5ICcgKyAobWV0aG9kTmFtZSArICcuIEluc3RlYWQgcmVjZWl2ZWQgJyArIEpTT04uc3RyaW5naWZ5KFdyYXBwZWRDb21wb25lbnQpKSk7XG5cbiAgICB2YXIgd3JhcHBlZENvbXBvbmVudE5hbWUgPSBXcmFwcGVkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IFdyYXBwZWRDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50JztcblxuICAgIHZhciBkaXNwbGF5TmFtZSA9IGdldERpc3BsYXlOYW1lKHdyYXBwZWRDb21wb25lbnROYW1lKTtcblxuICAgIHZhciBzZWxlY3RvckZhY3RvcnlPcHRpb25zID0gX2V4dGVuZHMoe30sIGNvbm5lY3RPcHRpb25zLCB7XG4gICAgICBnZXREaXNwbGF5TmFtZTogZ2V0RGlzcGxheU5hbWUsXG4gICAgICBtZXRob2ROYW1lOiBtZXRob2ROYW1lLFxuICAgICAgcmVuZGVyQ291bnRQcm9wOiByZW5kZXJDb3VudFByb3AsXG4gICAgICBzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXM6IHNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcyxcbiAgICAgIHN0b3JlS2V5OiBzdG9yZUtleSxcbiAgICAgIHdpdGhSZWY6IHdpdGhSZWYsXG4gICAgICBkaXNwbGF5TmFtZTogZGlzcGxheU5hbWUsXG4gICAgICB3cmFwcGVkQ29tcG9uZW50TmFtZTogd3JhcHBlZENvbXBvbmVudE5hbWUsXG4gICAgICBXcmFwcGVkQ29tcG9uZW50OiBXcmFwcGVkQ29tcG9uZW50XG4gICAgfSk7XG5cbiAgICB2YXIgQ29ubmVjdCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgICBfaW5oZXJpdHMoQ29ubmVjdCwgX0NvbXBvbmVudCk7XG5cbiAgICAgIGZ1bmN0aW9uIENvbm5lY3QocHJvcHMsIGNvbnRleHQpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbm5lY3QpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkpO1xuXG4gICAgICAgIF90aGlzLnZlcnNpb24gPSB2ZXJzaW9uO1xuICAgICAgICBfdGhpcy5zdGF0ZSA9IHt9O1xuICAgICAgICBfdGhpcy5yZW5kZXJDb3VudCA9IDA7XG4gICAgICAgIF90aGlzLnN0b3JlID0gcHJvcHNbc3RvcmVLZXldIHx8IGNvbnRleHRbc3RvcmVLZXldO1xuICAgICAgICBfdGhpcy5wcm9wc01vZGUgPSBCb29sZWFuKHByb3BzW3N0b3JlS2V5XSk7XG4gICAgICAgIF90aGlzLnNldFdyYXBwZWRJbnN0YW5jZSA9IF90aGlzLnNldFdyYXBwZWRJbnN0YW5jZS5iaW5kKF90aGlzKTtcblxuICAgICAgICBpbnZhcmlhbnQoX3RoaXMuc3RvcmUsICdDb3VsZCBub3QgZmluZCBcIicgKyBzdG9yZUtleSArICdcIiBpbiBlaXRoZXIgdGhlIGNvbnRleHQgb3IgcHJvcHMgb2YgJyArICgnXCInICsgZGlzcGxheU5hbWUgKyAnXCIuIEVpdGhlciB3cmFwIHRoZSByb290IGNvbXBvbmVudCBpbiBhIDxQcm92aWRlcj4sICcpICsgKCdvciBleHBsaWNpdGx5IHBhc3MgXCInICsgc3RvcmVLZXkgKyAnXCIgYXMgYSBwcm9wIHRvIFwiJyArIGRpc3BsYXlOYW1lICsgJ1wiLicpKTtcblxuICAgICAgICBfdGhpcy5pbml0U2VsZWN0b3IoKTtcbiAgICAgICAgX3RoaXMuaW5pdFN1YnNjcmlwdGlvbigpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICB9XG5cbiAgICAgIENvbm5lY3QucHJvdG90eXBlLmdldENoaWxkQ29udGV4dCA9IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICAgICAgdmFyIF9yZWYyO1xuXG4gICAgICAgIC8vIElmIHRoaXMgY29tcG9uZW50IHJlY2VpdmVkIHN0b3JlIGZyb20gcHJvcHMsIGl0cyBzdWJzY3JpcHRpb24gc2hvdWxkIGJlIHRyYW5zcGFyZW50XG4gICAgICAgIC8vIHRvIGFueSBkZXNjZW5kYW50cyByZWNlaXZpbmcgc3RvcmUrc3Vic2NyaXB0aW9uIGZyb20gY29udGV4dDsgaXQgcGFzc2VzIGFsb25nXG4gICAgICAgIC8vIHN1YnNjcmlwdGlvbiBwYXNzZWQgdG8gaXQuIE90aGVyd2lzZSwgaXQgc2hhZG93cyB0aGUgcGFyZW50IHN1YnNjcmlwdGlvbiwgd2hpY2ggYWxsb3dzXG4gICAgICAgIC8vIENvbm5lY3QgdG8gY29udHJvbCBvcmRlcmluZyBvZiBub3RpZmljYXRpb25zIHRvIGZsb3cgdG9wLWRvd24uXG4gICAgICAgIHZhciBzdWJzY3JpcHRpb24gPSB0aGlzLnByb3BzTW9kZSA/IG51bGwgOiB0aGlzLnN1YnNjcmlwdGlvbjtcbiAgICAgICAgcmV0dXJuIF9yZWYyID0ge30sIF9yZWYyW3N1YnNjcmlwdGlvbktleV0gPSBzdWJzY3JpcHRpb24gfHwgdGhpcy5jb250ZXh0W3N1YnNjcmlwdGlvbktleV0sIF9yZWYyO1xuICAgICAgfTtcblxuICAgICAgQ29ubmVjdC5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKCFzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMpIHJldHVybjtcblxuICAgICAgICAvLyBjb21wb25lbnRXaWxsTW91bnQgZmlyZXMgZHVyaW5nIHNlcnZlciBzaWRlIHJlbmRlcmluZywgYnV0IGNvbXBvbmVudERpZE1vdW50IGFuZFxuICAgICAgICAvLyBjb21wb25lbnRXaWxsVW5tb3VudCBkbyBub3QuIEJlY2F1c2Ugb2YgdGhpcywgdHJ5U3Vic2NyaWJlIGhhcHBlbnMgZHVyaW5nIC4uLmRpZE1vdW50LlxuICAgICAgICAvLyBPdGhlcndpc2UsIHVuc3Vic2NyaXB0aW9uIHdvdWxkIG5ldmVyIHRha2UgcGxhY2UgZHVyaW5nIFNTUiwgY2F1c2luZyBhIG1lbW9yeSBsZWFrLlxuICAgICAgICAvLyBUbyBoYW5kbGUgdGhlIGNhc2Ugd2hlcmUgYSBjaGlsZCBjb21wb25lbnQgbWF5IGhhdmUgdHJpZ2dlcmVkIGEgc3RhdGUgY2hhbmdlIGJ5XG4gICAgICAgIC8vIGRpc3BhdGNoaW5nIGFuIGFjdGlvbiBpbiBpdHMgY29tcG9uZW50V2lsbE1vdW50LCB3ZSBoYXZlIHRvIHJlLXJ1biB0aGUgc2VsZWN0IGFuZCBtYXliZVxuICAgICAgICAvLyByZS1yZW5kZXIuXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnRyeVN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLnNlbGVjdG9yLnJ1bih0aGlzLnByb3BzKTtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0b3Iuc2hvdWxkQ29tcG9uZW50VXBkYXRlKSB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgICB9O1xuXG4gICAgICBDb25uZWN0LnByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rvci5ydW4obmV4dFByb3BzKTtcbiAgICAgIH07XG5cbiAgICAgIENvbm5lY3QucHJvdG90eXBlLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0b3Iuc2hvdWxkQ29tcG9uZW50VXBkYXRlO1xuICAgICAgfTtcblxuICAgICAgQ29ubmVjdC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB0aGlzLnN1YnNjcmlwdGlvbi50cnlVbnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMubm90aWZ5TmVzdGVkU3VicyA9IG5vb3A7XG4gICAgICAgIHRoaXMuc3RvcmUgPSBudWxsO1xuICAgICAgICB0aGlzLnNlbGVjdG9yLnJ1biA9IG5vb3A7XG4gICAgICAgIHRoaXMuc2VsZWN0b3Iuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZmFsc2U7XG4gICAgICB9O1xuXG4gICAgICBDb25uZWN0LnByb3RvdHlwZS5nZXRXcmFwcGVkSW5zdGFuY2UgPSBmdW5jdGlvbiBnZXRXcmFwcGVkSW5zdGFuY2UoKSB7XG4gICAgICAgIGludmFyaWFudCh3aXRoUmVmLCAnVG8gYWNjZXNzIHRoZSB3cmFwcGVkIGluc3RhbmNlLCB5b3UgbmVlZCB0byBzcGVjaWZ5ICcgKyAoJ3sgd2l0aFJlZjogdHJ1ZSB9IGluIHRoZSBvcHRpb25zIGFyZ3VtZW50IG9mIHRoZSAnICsgbWV0aG9kTmFtZSArICcoKSBjYWxsLicpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMud3JhcHBlZEluc3RhbmNlO1xuICAgICAgfTtcblxuICAgICAgQ29ubmVjdC5wcm90b3R5cGUuc2V0V3JhcHBlZEluc3RhbmNlID0gZnVuY3Rpb24gc2V0V3JhcHBlZEluc3RhbmNlKHJlZikge1xuICAgICAgICB0aGlzLndyYXBwZWRJbnN0YW5jZSA9IHJlZjtcbiAgICAgIH07XG5cbiAgICAgIENvbm5lY3QucHJvdG90eXBlLmluaXRTZWxlY3RvciA9IGZ1bmN0aW9uIGluaXRTZWxlY3RvcigpIHtcbiAgICAgICAgdmFyIHNvdXJjZVNlbGVjdG9yID0gc2VsZWN0b3JGYWN0b3J5KHRoaXMuc3RvcmUuZGlzcGF0Y2gsIHNlbGVjdG9yRmFjdG9yeU9wdGlvbnMpO1xuICAgICAgICB0aGlzLnNlbGVjdG9yID0gbWFrZVNlbGVjdG9yU3RhdGVmdWwoc291cmNlU2VsZWN0b3IsIHRoaXMuc3RvcmUpO1xuICAgICAgICB0aGlzLnNlbGVjdG9yLnJ1bih0aGlzLnByb3BzKTtcbiAgICAgIH07XG5cbiAgICAgIENvbm5lY3QucHJvdG90eXBlLmluaXRTdWJzY3JpcHRpb24gPSBmdW5jdGlvbiBpbml0U3Vic2NyaXB0aW9uKCkge1xuICAgICAgICBpZiAoIXNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcykgcmV0dXJuO1xuXG4gICAgICAgIC8vIHBhcmVudFN1YidzIHNvdXJjZSBzaG91bGQgbWF0Y2ggd2hlcmUgc3RvcmUgY2FtZSBmcm9tOiBwcm9wcyB2cy4gY29udGV4dC4gQSBjb21wb25lbnRcbiAgICAgICAgLy8gY29ubmVjdGVkIHRvIHRoZSBzdG9yZSB2aWEgcHJvcHMgc2hvdWxkbid0IHVzZSBzdWJzY3JpcHRpb24gZnJvbSBjb250ZXh0LCBvciB2aWNlIHZlcnNhLlxuICAgICAgICB2YXIgcGFyZW50U3ViID0gKHRoaXMucHJvcHNNb2RlID8gdGhpcy5wcm9wcyA6IHRoaXMuY29udGV4dClbc3Vic2NyaXB0aW9uS2V5XTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKHRoaXMuc3RvcmUsIHBhcmVudFN1YiwgdGhpcy5vblN0YXRlQ2hhbmdlLmJpbmQodGhpcykpO1xuXG4gICAgICAgIC8vIGBub3RpZnlOZXN0ZWRTdWJzYCBpcyBkdXBsaWNhdGVkIHRvIGhhbmRsZSB0aGUgY2FzZSB3aGVyZSB0aGUgY29tcG9uZW50IGlzICB1bm1vdW50ZWQgaW5cbiAgICAgICAgLy8gdGhlIG1pZGRsZSBvZiB0aGUgbm90aWZpY2F0aW9uIGxvb3AsIHdoZXJlIGB0aGlzLnN1YnNjcmlwdGlvbmAgd2lsbCB0aGVuIGJlIG51bGwuIEFuXG4gICAgICAgIC8vIGV4dHJhIG51bGwgY2hlY2sgZXZlcnkgY2hhbmdlIGNhbiBiZSBhdm9pZGVkIGJ5IGNvcHlpbmcgdGhlIG1ldGhvZCBvbnRvIGB0aGlzYCBhbmQgdGhlblxuICAgICAgICAvLyByZXBsYWNpbmcgaXQgd2l0aCBhIG5vLW9wIG9uIHVubW91bnQuIFRoaXMgY2FuIHByb2JhYmx5IGJlIGF2b2lkZWQgaWYgU3Vic2NyaXB0aW9uJ3NcbiAgICAgICAgLy8gbGlzdGVuZXJzIGxvZ2ljIGlzIGNoYW5nZWQgdG8gbm90IGNhbGwgbGlzdGVuZXJzIHRoYXQgaGF2ZSBiZWVuIHVuc3Vic2NyaWJlZCBpbiB0aGVcbiAgICAgICAgLy8gbWlkZGxlIG9mIHRoZSBub3RpZmljYXRpb24gbG9vcC5cbiAgICAgICAgdGhpcy5ub3RpZnlOZXN0ZWRTdWJzID0gdGhpcy5zdWJzY3JpcHRpb24ubm90aWZ5TmVzdGVkU3Vicy5iaW5kKHRoaXMuc3Vic2NyaXB0aW9uKTtcbiAgICAgIH07XG5cbiAgICAgIENvbm5lY3QucHJvdG90eXBlLm9uU3RhdGVDaGFuZ2UgPSBmdW5jdGlvbiBvblN0YXRlQ2hhbmdlKCkge1xuICAgICAgICB0aGlzLnNlbGVjdG9yLnJ1bih0aGlzLnByb3BzKTtcblxuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0b3Iuc2hvdWxkQ29tcG9uZW50VXBkYXRlKSB7XG4gICAgICAgICAgdGhpcy5ub3RpZnlOZXN0ZWRTdWJzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jb21wb25lbnREaWRVcGRhdGUgPSB0aGlzLm5vdGlmeU5lc3RlZFN1YnNPbkNvbXBvbmVudERpZFVwZGF0ZTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKGR1bW15U3RhdGUpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBDb25uZWN0LnByb3RvdHlwZS5ub3RpZnlOZXN0ZWRTdWJzT25Db21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBub3RpZnlOZXN0ZWRTdWJzT25Db21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIC8vIGBjb21wb25lbnREaWRVcGRhdGVgIGlzIGNvbmRpdGlvbmFsbHkgaW1wbGVtZW50ZWQgd2hlbiBgb25TdGF0ZUNoYW5nZWAgZGV0ZXJtaW5lcyBpdFxuICAgICAgICAvLyBuZWVkcyB0byBub3RpZnkgbmVzdGVkIHN1YnMuIE9uY2UgY2FsbGVkLCBpdCB1bmltcGxlbWVudHMgaXRzZWxmIHVudGlsIGZ1cnRoZXIgc3RhdGVcbiAgICAgICAgLy8gY2hhbmdlcyBvY2N1ci4gRG9pbmcgaXQgdGhpcyB3YXkgdnMgaGF2aW5nIGEgcGVybWFuZW50IGBjb21wb25lbnREaWRVcGRhdGVgIHRoYXQgZG9lc1xuICAgICAgICAvLyBhIGJvb2xlYW4gY2hlY2sgZXZlcnkgdGltZSBhdm9pZHMgYW4gZXh0cmEgbWV0aG9kIGNhbGwgbW9zdCBvZiB0aGUgdGltZSwgcmVzdWx0aW5nXG4gICAgICAgIC8vIGluIHNvbWUgcGVyZiBib29zdC5cbiAgICAgICAgdGhpcy5jb21wb25lbnREaWRVcGRhdGUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMubm90aWZ5TmVzdGVkU3VicygpO1xuICAgICAgfTtcblxuICAgICAgQ29ubmVjdC5wcm90b3R5cGUuaXNTdWJzY3JpYmVkID0gZnVuY3Rpb24gaXNTdWJzY3JpYmVkKCkge1xuICAgICAgICByZXR1cm4gQm9vbGVhbih0aGlzLnN1YnNjcmlwdGlvbikgJiYgdGhpcy5zdWJzY3JpcHRpb24uaXNTdWJzY3JpYmVkKCk7XG4gICAgICB9O1xuXG4gICAgICBDb25uZWN0LnByb3RvdHlwZS5hZGRFeHRyYVByb3BzID0gZnVuY3Rpb24gYWRkRXh0cmFQcm9wcyhwcm9wcykge1xuICAgICAgICBpZiAoIXdpdGhSZWYgJiYgIXJlbmRlckNvdW50UHJvcCAmJiAhKHRoaXMucHJvcHNNb2RlICYmIHRoaXMuc3Vic2NyaXB0aW9uKSkgcmV0dXJuIHByb3BzO1xuICAgICAgICAvLyBtYWtlIGEgc2hhbGxvdyBjb3B5IHNvIHRoYXQgZmllbGRzIGFkZGVkIGRvbid0IGxlYWsgdG8gdGhlIG9yaWdpbmFsIHNlbGVjdG9yLlxuICAgICAgICAvLyB0aGlzIGlzIGVzcGVjaWFsbHkgaW1wb3J0YW50IGZvciAncmVmJyBzaW5jZSB0aGF0J3MgYSByZWZlcmVuY2UgYmFjayB0byB0aGUgY29tcG9uZW50XG4gICAgICAgIC8vIGluc3RhbmNlLiBhIHNpbmdsZXRvbiBtZW1vaXplZCBzZWxlY3RvciB3b3VsZCB0aGVuIGJlIGhvbGRpbmcgYSByZWZlcmVuY2UgdG8gdGhlXG4gICAgICAgIC8vIGluc3RhbmNlLCBwcmV2ZW50aW5nIHRoZSBpbnN0YW5jZSBmcm9tIGJlaW5nIGdhcmJhZ2UgY29sbGVjdGVkLCBhbmQgdGhhdCB3b3VsZCBiZSBiYWRcbiAgICAgICAgdmFyIHdpdGhFeHRyYXMgPSBfZXh0ZW5kcyh7fSwgcHJvcHMpO1xuICAgICAgICBpZiAod2l0aFJlZikgd2l0aEV4dHJhcy5yZWYgPSB0aGlzLnNldFdyYXBwZWRJbnN0YW5jZTtcbiAgICAgICAgaWYgKHJlbmRlckNvdW50UHJvcCkgd2l0aEV4dHJhc1tyZW5kZXJDb3VudFByb3BdID0gdGhpcy5yZW5kZXJDb3VudCsrO1xuICAgICAgICBpZiAodGhpcy5wcm9wc01vZGUgJiYgdGhpcy5zdWJzY3JpcHRpb24pIHdpdGhFeHRyYXNbc3Vic2NyaXB0aW9uS2V5XSA9IHRoaXMuc3Vic2NyaXB0aW9uO1xuICAgICAgICByZXR1cm4gd2l0aEV4dHJhcztcbiAgICAgIH07XG5cbiAgICAgIENvbm5lY3QucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIHNlbGVjdG9yID0gdGhpcy5zZWxlY3RvcjtcbiAgICAgICAgc2VsZWN0b3Iuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHNlbGVjdG9yLmVycm9yKSB7XG4gICAgICAgICAgdGhyb3cgc2VsZWN0b3IuZXJyb3I7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoV3JhcHBlZENvbXBvbmVudCwgdGhpcy5hZGRFeHRyYVByb3BzKHNlbGVjdG9yLnByb3BzKSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBDb25uZWN0O1xuICAgIH0oQ29tcG9uZW50KTtcblxuICAgIENvbm5lY3QuV3JhcHBlZENvbXBvbmVudCA9IFdyYXBwZWRDb21wb25lbnQ7XG4gICAgQ29ubmVjdC5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xuICAgIENvbm5lY3QuY2hpbGRDb250ZXh0VHlwZXMgPSBjaGlsZENvbnRleHRUeXBlcztcbiAgICBDb25uZWN0LmNvbnRleHRUeXBlcyA9IGNvbnRleHRUeXBlcztcbiAgICBDb25uZWN0LnByb3BUeXBlcyA9IGNvbnRleHRUeXBlcztcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBDb25uZWN0LnByb3RvdHlwZS5jb21wb25lbnRXaWxsVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVwZGF0ZSgpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgLy8gV2UgYXJlIGhvdCByZWxvYWRpbmchXG4gICAgICAgIGlmICh0aGlzLnZlcnNpb24gIT09IHZlcnNpb24pIHtcbiAgICAgICAgICB0aGlzLnZlcnNpb24gPSB2ZXJzaW9uO1xuICAgICAgICAgIHRoaXMuaW5pdFNlbGVjdG9yKCk7XG5cbiAgICAgICAgICAvLyBJZiBhbnkgY29ubmVjdGVkIGRlc2NlbmRhbnRzIGRvbid0IGhvdCByZWxvYWQgKGFuZCByZXN1YnNjcmliZSBpbiB0aGUgcHJvY2VzcyksIHRoZWlyXG4gICAgICAgICAgLy8gbGlzdGVuZXJzIHdpbGwgYmUgbG9zdCB3aGVuIHdlIHVuc3Vic2NyaWJlLiBVbmZvcnR1bmF0ZWx5LCBieSBjb3B5aW5nIG92ZXIgYWxsXG4gICAgICAgICAgLy8gbGlzdGVuZXJzLCB0aGlzIGRvZXMgbWVhbiB0aGF0IHRoZSBvbGQgdmVyc2lvbnMgb2YgY29ubmVjdGVkIGRlc2NlbmRhbnRzIHdpbGwgc3RpbGwgYmVcbiAgICAgICAgICAvLyBub3RpZmllZCBvZiBzdGF0ZSBjaGFuZ2VzOyBob3dldmVyLCB0aGVpciBvblN0YXRlQ2hhbmdlIGZ1bmN0aW9uIGlzIGEgbm8tb3Agc28gdGhpc1xuICAgICAgICAgIC8vIGlzbid0IGEgaHVnZSBkZWFsLlxuICAgICAgICAgIHZhciBvbGRMaXN0ZW5lcnMgPSBbXTtcblxuICAgICAgICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgb2xkTGlzdGVuZXJzID0gdGhpcy5zdWJzY3JpcHRpb24ubGlzdGVuZXJzLmdldCgpO1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24udHJ5VW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5pbml0U3Vic2NyaXB0aW9uKCk7XG4gICAgICAgICAgaWYgKHNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcykge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24udHJ5U3Vic2NyaWJlKCk7XG4gICAgICAgICAgICBvbGRMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5zdWJzY3JpcHRpb24ubGlzdGVuZXJzLnN1YnNjcmliZShsaXN0ZW5lcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGhvaXN0U3RhdGljcyhDb25uZWN0LCBXcmFwcGVkQ29tcG9uZW50KTtcbiAgfTtcbn0iLCJ2YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuZnVuY3Rpb24gaXMoeCwgeSkge1xuICBpZiAoeCA9PT0geSkge1xuICAgIHJldHVybiB4ICE9PSAwIHx8IHkgIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hhbGxvd0VxdWFsKG9iakEsIG9iakIpIHtcbiAgaWYgKGlzKG9iakEsIG9iakIpKSByZXR1cm4gdHJ1ZTtcblxuICBpZiAodHlwZW9mIG9iakEgIT09ICdvYmplY3QnIHx8IG9iakEgPT09IG51bGwgfHwgdHlwZW9mIG9iakIgIT09ICdvYmplY3QnIHx8IG9iakIgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIga2V5c0EgPSBPYmplY3Qua2V5cyhvYmpBKTtcbiAgdmFyIGtleXNCID0gT2JqZWN0LmtleXMob2JqQik7XG5cbiAgaWYgKGtleXNBLmxlbmd0aCAhPT0ga2V5c0IubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzQS5sZW5ndGg7IGkrKykge1xuICAgIGlmICghaGFzT3duLmNhbGwob2JqQiwga2V5c0FbaV0pIHx8ICFpcyhvYmpBW2tleXNBW2ldXSwgb2JqQltrZXlzQVtpXV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59IiwiaW1wb3J0ICQkb2JzZXJ2YWJsZSBmcm9tICdzeW1ib2wtb2JzZXJ2YWJsZSc7XG5cbi8qKlxuICogVGhlc2UgYXJlIHByaXZhdGUgYWN0aW9uIHR5cGVzIHJlc2VydmVkIGJ5IFJlZHV4LlxuICogRm9yIGFueSB1bmtub3duIGFjdGlvbnMsIHlvdSBtdXN0IHJldHVybiB0aGUgY3VycmVudCBzdGF0ZS5cbiAqIElmIHRoZSBjdXJyZW50IHN0YXRlIGlzIHVuZGVmaW5lZCwgeW91IG11c3QgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLlxuICogRG8gbm90IHJlZmVyZW5jZSB0aGVzZSBhY3Rpb24gdHlwZXMgZGlyZWN0bHkgaW4geW91ciBjb2RlLlxuICovXG52YXIgcmFuZG9tU3RyaW5nID0gZnVuY3Rpb24gcmFuZG9tU3RyaW5nKCkge1xuICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpLnNwbGl0KCcnKS5qb2luKCcuJyk7XG59O1xuXG52YXIgQWN0aW9uVHlwZXMgPSB7XG4gIElOSVQ6IFwiQEByZWR1eC9JTklUXCIgKyByYW5kb21TdHJpbmcoKSxcbiAgUkVQTEFDRTogXCJAQHJlZHV4L1JFUExBQ0VcIiArIHJhbmRvbVN0cmluZygpLFxuICBQUk9CRV9VTktOT1dOX0FDVElPTjogZnVuY3Rpb24gUFJPQkVfVU5LTk9XTl9BQ1RJT04oKSB7XG4gICAgcmV0dXJuIFwiQEByZWR1eC9QUk9CRV9VTktOT1dOX0FDVElPTlwiICsgcmFuZG9tU3RyaW5nKCk7XG4gIH1cbn07XG5cbi8qKlxuICogQHBhcmFtIHthbnl9IG9iaiBUaGUgb2JqZWN0IHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgYXJndW1lbnQgYXBwZWFycyB0byBiZSBhIHBsYWluIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvYmopIHtcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnIHx8IG9iaiA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICB2YXIgcHJvdG8gPSBvYmo7XG5cbiAgd2hpbGUgKE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90bykgIT09IG51bGwpIHtcbiAgICBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90byk7XG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaikgPT09IHByb3RvO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBSZWR1eCBzdG9yZSB0aGF0IGhvbGRzIHRoZSBzdGF0ZSB0cmVlLlxuICogVGhlIG9ubHkgd2F5IHRvIGNoYW5nZSB0aGUgZGF0YSBpbiB0aGUgc3RvcmUgaXMgdG8gY2FsbCBgZGlzcGF0Y2goKWAgb24gaXQuXG4gKlxuICogVGhlcmUgc2hvdWxkIG9ubHkgYmUgYSBzaW5nbGUgc3RvcmUgaW4geW91ciBhcHAuIFRvIHNwZWNpZnkgaG93IGRpZmZlcmVudFxuICogcGFydHMgb2YgdGhlIHN0YXRlIHRyZWUgcmVzcG9uZCB0byBhY3Rpb25zLCB5b3UgbWF5IGNvbWJpbmUgc2V2ZXJhbCByZWR1Y2Vyc1xuICogaW50byBhIHNpbmdsZSByZWR1Y2VyIGZ1bmN0aW9uIGJ5IHVzaW5nIGBjb21iaW5lUmVkdWNlcnNgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlZHVjZXIgQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIG5leHQgc3RhdGUgdHJlZSwgZ2l2ZW5cbiAqIHRoZSBjdXJyZW50IHN0YXRlIHRyZWUgYW5kIHRoZSBhY3Rpb24gdG8gaGFuZGxlLlxuICpcbiAqIEBwYXJhbSB7YW55fSBbcHJlbG9hZGVkU3RhdGVdIFRoZSBpbml0aWFsIHN0YXRlLiBZb3UgbWF5IG9wdGlvbmFsbHkgc3BlY2lmeSBpdFxuICogdG8gaHlkcmF0ZSB0aGUgc3RhdGUgZnJvbSB0aGUgc2VydmVyIGluIHVuaXZlcnNhbCBhcHBzLCBvciB0byByZXN0b3JlIGFcbiAqIHByZXZpb3VzbHkgc2VyaWFsaXplZCB1c2VyIHNlc3Npb24uXG4gKiBJZiB5b3UgdXNlIGBjb21iaW5lUmVkdWNlcnNgIHRvIHByb2R1Y2UgdGhlIHJvb3QgcmVkdWNlciBmdW5jdGlvbiwgdGhpcyBtdXN0IGJlXG4gKiBhbiBvYmplY3Qgd2l0aCB0aGUgc2FtZSBzaGFwZSBhcyBgY29tYmluZVJlZHVjZXJzYCBrZXlzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtlbmhhbmNlcl0gVGhlIHN0b3JlIGVuaGFuY2VyLiBZb3UgbWF5IG9wdGlvbmFsbHkgc3BlY2lmeSBpdFxuICogdG8gZW5oYW5jZSB0aGUgc3RvcmUgd2l0aCB0aGlyZC1wYXJ0eSBjYXBhYmlsaXRpZXMgc3VjaCBhcyBtaWRkbGV3YXJlLFxuICogdGltZSB0cmF2ZWwsIHBlcnNpc3RlbmNlLCBldGMuIFRoZSBvbmx5IHN0b3JlIGVuaGFuY2VyIHRoYXQgc2hpcHMgd2l0aCBSZWR1eFxuICogaXMgYGFwcGx5TWlkZGxld2FyZSgpYC5cbiAqXG4gKiBAcmV0dXJucyB7U3RvcmV9IEEgUmVkdXggc3RvcmUgdGhhdCBsZXRzIHlvdSByZWFkIHRoZSBzdGF0ZSwgZGlzcGF0Y2ggYWN0aW9uc1xuICogYW5kIHN1YnNjcmliZSB0byBjaGFuZ2VzLlxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZVN0b3JlKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlLCBlbmhhbmNlcikge1xuICB2YXIgX3JlZjI7XG5cbiAgaWYgKHR5cGVvZiBwcmVsb2FkZWRTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZW5oYW5jZXIgPT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIGVuaGFuY2VyID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBhcmd1bWVudHNbM10gPT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0l0IGxvb2tzIGxpa2UgeW91IGFyZSBwYXNzaW5nIHNldmVyYWwgc3RvcmUgZW5oYW5jZXJzIHRvICcgKyAnY3JlYXRlU3RvcmUoKS4gVGhpcyBpcyBub3Qgc3VwcG9ydGVkLiBJbnN0ZWFkLCBjb21wb3NlIHRoZW0gJyArICd0b2dldGhlciB0byBhIHNpbmdsZSBmdW5jdGlvbicpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBwcmVsb2FkZWRTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZW5oYW5jZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZW5oYW5jZXIgPSBwcmVsb2FkZWRTdGF0ZTtcbiAgICBwcmVsb2FkZWRTdGF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZW5oYW5jZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiBlbmhhbmNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgZW5oYW5jZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZW5oYW5jZXIoY3JlYXRlU3RvcmUpKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcmVkdWNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdGhlIHJlZHVjZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciBjdXJyZW50UmVkdWNlciA9IHJlZHVjZXI7XG4gIHZhciBjdXJyZW50U3RhdGUgPSBwcmVsb2FkZWRTdGF0ZTtcbiAgdmFyIGN1cnJlbnRMaXN0ZW5lcnMgPSBbXTtcbiAgdmFyIG5leHRMaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzO1xuICB2YXIgaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKG5leHRMaXN0ZW5lcnMgPT09IGN1cnJlbnRMaXN0ZW5lcnMpIHtcbiAgICAgIG5leHRMaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzLnNsaWNlKCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBSZWFkcyB0aGUgc3RhdGUgdHJlZSBtYW5hZ2VkIGJ5IHRoZSBzdG9yZS5cbiAgICpcbiAgICogQHJldHVybnMge2FueX0gVGhlIGN1cnJlbnQgc3RhdGUgdHJlZSBvZiB5b3VyIGFwcGxpY2F0aW9uLlxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGdldFN0YXRlKCkge1xuICAgIGlmIChpc0Rpc3BhdGNoaW5nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtYXkgbm90IGNhbGwgc3RvcmUuZ2V0U3RhdGUoKSB3aGlsZSB0aGUgcmVkdWNlciBpcyBleGVjdXRpbmcuICcgKyAnVGhlIHJlZHVjZXIgaGFzIGFscmVhZHkgcmVjZWl2ZWQgdGhlIHN0YXRlIGFzIGFuIGFyZ3VtZW50LiAnICsgJ1Bhc3MgaXQgZG93biBmcm9tIHRoZSB0b3AgcmVkdWNlciBpbnN0ZWFkIG9mIHJlYWRpbmcgaXQgZnJvbSB0aGUgc3RvcmUuJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGN1cnJlbnRTdGF0ZTtcbiAgfVxuICAvKipcbiAgICogQWRkcyBhIGNoYW5nZSBsaXN0ZW5lci4gSXQgd2lsbCBiZSBjYWxsZWQgYW55IHRpbWUgYW4gYWN0aW9uIGlzIGRpc3BhdGNoZWQsXG4gICAqIGFuZCBzb21lIHBhcnQgb2YgdGhlIHN0YXRlIHRyZWUgbWF5IHBvdGVudGlhbGx5IGhhdmUgY2hhbmdlZC4gWW91IG1heSB0aGVuXG4gICAqIGNhbGwgYGdldFN0YXRlKClgIHRvIHJlYWQgdGhlIGN1cnJlbnQgc3RhdGUgdHJlZSBpbnNpZGUgdGhlIGNhbGxiYWNrLlxuICAgKlxuICAgKiBZb3UgbWF5IGNhbGwgYGRpc3BhdGNoKClgIGZyb20gYSBjaGFuZ2UgbGlzdGVuZXIsIHdpdGggdGhlIGZvbGxvd2luZ1xuICAgKiBjYXZlYXRzOlxuICAgKlxuICAgKiAxLiBUaGUgc3Vic2NyaXB0aW9ucyBhcmUgc25hcHNob3R0ZWQganVzdCBiZWZvcmUgZXZlcnkgYGRpc3BhdGNoKClgIGNhbGwuXG4gICAqIElmIHlvdSBzdWJzY3JpYmUgb3IgdW5zdWJzY3JpYmUgd2hpbGUgdGhlIGxpc3RlbmVycyBhcmUgYmVpbmcgaW52b2tlZCwgdGhpc1xuICAgKiB3aWxsIG5vdCBoYXZlIGFueSBlZmZlY3Qgb24gdGhlIGBkaXNwYXRjaCgpYCB0aGF0IGlzIGN1cnJlbnRseSBpbiBwcm9ncmVzcy5cbiAgICogSG93ZXZlciwgdGhlIG5leHQgYGRpc3BhdGNoKClgIGNhbGwsIHdoZXRoZXIgbmVzdGVkIG9yIG5vdCwgd2lsbCB1c2UgYSBtb3JlXG4gICAqIHJlY2VudCBzbmFwc2hvdCBvZiB0aGUgc3Vic2NyaXB0aW9uIGxpc3QuXG4gICAqXG4gICAqIDIuIFRoZSBsaXN0ZW5lciBzaG91bGQgbm90IGV4cGVjdCB0byBzZWUgYWxsIHN0YXRlIGNoYW5nZXMsIGFzIHRoZSBzdGF0ZVxuICAgKiBtaWdodCBoYXZlIGJlZW4gdXBkYXRlZCBtdWx0aXBsZSB0aW1lcyBkdXJpbmcgYSBuZXN0ZWQgYGRpc3BhdGNoKClgIGJlZm9yZVxuICAgKiB0aGUgbGlzdGVuZXIgaXMgY2FsbGVkLiBJdCBpcywgaG93ZXZlciwgZ3VhcmFudGVlZCB0aGF0IGFsbCBzdWJzY3JpYmVyc1xuICAgKiByZWdpc3RlcmVkIGJlZm9yZSB0aGUgYGRpc3BhdGNoKClgIHN0YXJ0ZWQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgbGF0ZXN0XG4gICAqIHN0YXRlIGJ5IHRoZSB0aW1lIGl0IGV4aXRzLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciBBIGNhbGxiYWNrIHRvIGJlIGludm9rZWQgb24gZXZlcnkgZGlzcGF0Y2guXG4gICAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBmdW5jdGlvbiB0byByZW1vdmUgdGhpcyBjaGFuZ2UgbGlzdGVuZXIuXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgbGlzdGVuZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICBpZiAoaXNEaXNwYXRjaGluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbWF5IG5vdCBjYWxsIHN0b3JlLnN1YnNjcmliZSgpIHdoaWxlIHRoZSByZWR1Y2VyIGlzIGV4ZWN1dGluZy4gJyArICdJZiB5b3Ugd291bGQgbGlrZSB0byBiZSBub3RpZmllZCBhZnRlciB0aGUgc3RvcmUgaGFzIGJlZW4gdXBkYXRlZCwgc3Vic2NyaWJlIGZyb20gYSAnICsgJ2NvbXBvbmVudCBhbmQgaW52b2tlIHN0b3JlLmdldFN0YXRlKCkgaW4gdGhlIGNhbGxiYWNrIHRvIGFjY2VzcyB0aGUgbGF0ZXN0IHN0YXRlLiAnICsgJ1NlZSBodHRwczovL3JlZHV4LmpzLm9yZy9hcGktcmVmZXJlbmNlL3N0b3JlI3N1YnNjcmliZShsaXN0ZW5lcikgZm9yIG1vcmUgZGV0YWlscy4nKTtcbiAgICB9XG5cbiAgICB2YXIgaXNTdWJzY3JpYmVkID0gdHJ1ZTtcbiAgICBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCk7XG4gICAgbmV4dExpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gdW5zdWJzY3JpYmUoKSB7XG4gICAgICBpZiAoIWlzU3Vic2NyaWJlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Rpc3BhdGNoaW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG1heSBub3QgdW5zdWJzY3JpYmUgZnJvbSBhIHN0b3JlIGxpc3RlbmVyIHdoaWxlIHRoZSByZWR1Y2VyIGlzIGV4ZWN1dGluZy4gJyArICdTZWUgaHR0cHM6Ly9yZWR1eC5qcy5vcmcvYXBpLXJlZmVyZW5jZS9zdG9yZSNzdWJzY3JpYmUobGlzdGVuZXIpIGZvciBtb3JlIGRldGFpbHMuJyk7XG4gICAgICB9XG5cbiAgICAgIGlzU3Vic2NyaWJlZCA9IGZhbHNlO1xuICAgICAgZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpO1xuICAgICAgdmFyIGluZGV4ID0gbmV4dExpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcbiAgICAgIG5leHRMaXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBEaXNwYXRjaGVzIGFuIGFjdGlvbi4gSXQgaXMgdGhlIG9ubHkgd2F5IHRvIHRyaWdnZXIgYSBzdGF0ZSBjaGFuZ2UuXG4gICAqXG4gICAqIFRoZSBgcmVkdWNlcmAgZnVuY3Rpb24sIHVzZWQgdG8gY3JlYXRlIHRoZSBzdG9yZSwgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGVcbiAgICogY3VycmVudCBzdGF0ZSB0cmVlIGFuZCB0aGUgZ2l2ZW4gYGFjdGlvbmAuIEl0cyByZXR1cm4gdmFsdWUgd2lsbFxuICAgKiBiZSBjb25zaWRlcmVkIHRoZSAqKm5leHQqKiBzdGF0ZSBvZiB0aGUgdHJlZSwgYW5kIHRoZSBjaGFuZ2UgbGlzdGVuZXJzXG4gICAqIHdpbGwgYmUgbm90aWZpZWQuXG4gICAqXG4gICAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9ubHkgc3VwcG9ydHMgcGxhaW4gb2JqZWN0IGFjdGlvbnMuIElmIHlvdSB3YW50IHRvXG4gICAqIGRpc3BhdGNoIGEgUHJvbWlzZSwgYW4gT2JzZXJ2YWJsZSwgYSB0aHVuaywgb3Igc29tZXRoaW5nIGVsc2UsIHlvdSBuZWVkIHRvXG4gICAqIHdyYXAgeW91ciBzdG9yZSBjcmVhdGluZyBmdW5jdGlvbiBpbnRvIHRoZSBjb3JyZXNwb25kaW5nIG1pZGRsZXdhcmUuIEZvclxuICAgKiBleGFtcGxlLCBzZWUgdGhlIGRvY3VtZW50YXRpb24gZm9yIHRoZSBgcmVkdXgtdGh1bmtgIHBhY2thZ2UuIEV2ZW4gdGhlXG4gICAqIG1pZGRsZXdhcmUgd2lsbCBldmVudHVhbGx5IGRpc3BhdGNoIHBsYWluIG9iamVjdCBhY3Rpb25zIHVzaW5nIHRoaXMgbWV0aG9kLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIEEgcGxhaW4gb2JqZWN0IHJlcHJlc2VudGluZyDigJx3aGF0IGNoYW5nZWTigJ0uIEl0IGlzXG4gICAqIGEgZ29vZCBpZGVhIHRvIGtlZXAgYWN0aW9ucyBzZXJpYWxpemFibGUgc28geW91IGNhbiByZWNvcmQgYW5kIHJlcGxheSB1c2VyXG4gICAqIHNlc3Npb25zLCBvciB1c2UgdGhlIHRpbWUgdHJhdmVsbGluZyBgcmVkdXgtZGV2dG9vbHNgLiBBbiBhY3Rpb24gbXVzdCBoYXZlXG4gICAqIGEgYHR5cGVgIHByb3BlcnR5IHdoaWNoIG1heSBub3QgYmUgYHVuZGVmaW5lZGAuIEl0IGlzIGEgZ29vZCBpZGVhIHRvIHVzZVxuICAgKiBzdHJpbmcgY29uc3RhbnRzIGZvciBhY3Rpb24gdHlwZXMuXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IEZvciBjb252ZW5pZW5jZSwgdGhlIHNhbWUgYWN0aW9uIG9iamVjdCB5b3UgZGlzcGF0Y2hlZC5cbiAgICpcbiAgICogTm90ZSB0aGF0LCBpZiB5b3UgdXNlIGEgY3VzdG9tIG1pZGRsZXdhcmUsIGl0IG1heSB3cmFwIGBkaXNwYXRjaCgpYCB0b1xuICAgKiByZXR1cm4gc29tZXRoaW5nIGVsc2UgKGZvciBleGFtcGxlLCBhIFByb21pc2UgeW91IGNhbiBhd2FpdCkuXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gZGlzcGF0Y2goYWN0aW9uKSB7XG4gICAgaWYgKCFpc1BsYWluT2JqZWN0KGFjdGlvbikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQWN0aW9ucyBtdXN0IGJlIHBsYWluIG9iamVjdHMuICcgKyAnVXNlIGN1c3RvbSBtaWRkbGV3YXJlIGZvciBhc3luYyBhY3Rpb25zLicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYWN0aW9uLnR5cGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FjdGlvbnMgbWF5IG5vdCBoYXZlIGFuIHVuZGVmaW5lZCBcInR5cGVcIiBwcm9wZXJ0eS4gJyArICdIYXZlIHlvdSBtaXNzcGVsbGVkIGEgY29uc3RhbnQ/Jyk7XG4gICAgfVxuXG4gICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVkdWNlcnMgbWF5IG5vdCBkaXNwYXRjaCBhY3Rpb25zLicpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBpc0Rpc3BhdGNoaW5nID0gdHJ1ZTtcbiAgICAgIGN1cnJlbnRTdGF0ZSA9IGN1cnJlbnRSZWR1Y2VyKGN1cnJlbnRTdGF0ZSwgYWN0aW9uKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBsaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzID0gbmV4dExpc3RlbmVycztcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgbGlzdGVuZXIgPSBsaXN0ZW5lcnNbaV07XG4gICAgICBsaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIHJldHVybiBhY3Rpb247XG4gIH1cbiAgLyoqXG4gICAqIFJlcGxhY2VzIHRoZSByZWR1Y2VyIGN1cnJlbnRseSB1c2VkIGJ5IHRoZSBzdG9yZSB0byBjYWxjdWxhdGUgdGhlIHN0YXRlLlxuICAgKlxuICAgKiBZb3UgbWlnaHQgbmVlZCB0aGlzIGlmIHlvdXIgYXBwIGltcGxlbWVudHMgY29kZSBzcGxpdHRpbmcgYW5kIHlvdSB3YW50IHRvXG4gICAqIGxvYWQgc29tZSBvZiB0aGUgcmVkdWNlcnMgZHluYW1pY2FsbHkuIFlvdSBtaWdodCBhbHNvIG5lZWQgdGhpcyBpZiB5b3VcbiAgICogaW1wbGVtZW50IGEgaG90IHJlbG9hZGluZyBtZWNoYW5pc20gZm9yIFJlZHV4LlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBuZXh0UmVkdWNlciBUaGUgcmVkdWNlciBmb3IgdGhlIHN0b3JlIHRvIHVzZSBpbnN0ZWFkLlxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG5cblxuICBmdW5jdGlvbiByZXBsYWNlUmVkdWNlcihuZXh0UmVkdWNlcikge1xuICAgIGlmICh0eXBlb2YgbmV4dFJlZHVjZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdGhlIG5leHRSZWR1Y2VyIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgY3VycmVudFJlZHVjZXIgPSBuZXh0UmVkdWNlcjtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBBY3Rpb25UeXBlcy5SRVBMQUNFXG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIEludGVyb3BlcmFiaWxpdHkgcG9pbnQgZm9yIG9ic2VydmFibGUvcmVhY3RpdmUgbGlicmFyaWVzLlxuICAgKiBAcmV0dXJucyB7b2JzZXJ2YWJsZX0gQSBtaW5pbWFsIG9ic2VydmFibGUgb2Ygc3RhdGUgY2hhbmdlcy5cbiAgICogRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZSB0aGUgb2JzZXJ2YWJsZSBwcm9wb3NhbDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtb2JzZXJ2YWJsZVxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIG9ic2VydmFibGUoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgb3V0ZXJTdWJzY3JpYmUgPSBzdWJzY3JpYmU7XG4gICAgcmV0dXJuIF9yZWYgPSB7XG4gICAgICAvKipcbiAgICAgICAqIFRoZSBtaW5pbWFsIG9ic2VydmFibGUgc3Vic2NyaXB0aW9uIG1ldGhvZC5cbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYnNlcnZlciBBbnkgb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgYXMgYW4gb2JzZXJ2ZXIuXG4gICAgICAgKiBUaGUgb2JzZXJ2ZXIgb2JqZWN0IHNob3VsZCBoYXZlIGEgYG5leHRgIG1ldGhvZC5cbiAgICAgICAqIEByZXR1cm5zIHtzdWJzY3JpcHRpb259IEFuIG9iamVjdCB3aXRoIGFuIGB1bnN1YnNjcmliZWAgbWV0aG9kIHRoYXQgY2FuXG4gICAgICAgKiBiZSB1c2VkIHRvIHVuc3Vic2NyaWJlIHRoZSBvYnNlcnZhYmxlIGZyb20gdGhlIHN0b3JlLCBhbmQgcHJldmVudCBmdXJ0aGVyXG4gICAgICAgKiBlbWlzc2lvbiBvZiB2YWx1ZXMgZnJvbSB0aGUgb2JzZXJ2YWJsZS5cbiAgICAgICAqL1xuICAgICAgc3Vic2NyaWJlOiBmdW5jdGlvbiBzdWJzY3JpYmUob2JzZXJ2ZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvYnNlcnZlciAhPT0gJ29iamVjdCcgfHwgb2JzZXJ2ZXIgPT09IG51bGwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCB0aGUgb2JzZXJ2ZXIgdG8gYmUgYW4gb2JqZWN0LicpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gb2JzZXJ2ZVN0YXRlKCkge1xuICAgICAgICAgIGlmIChvYnNlcnZlci5uZXh0KSB7XG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KGdldFN0YXRlKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG9ic2VydmVTdGF0ZSgpO1xuICAgICAgICB2YXIgdW5zdWJzY3JpYmUgPSBvdXRlclN1YnNjcmliZShvYnNlcnZlU3RhdGUpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHVuc3Vic2NyaWJlOiB1bnN1YnNjcmliZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0sIF9yZWZbJCRvYnNlcnZhYmxlXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sIF9yZWY7XG4gIH0gLy8gV2hlbiBhIHN0b3JlIGlzIGNyZWF0ZWQsIGFuIFwiSU5JVFwiIGFjdGlvbiBpcyBkaXNwYXRjaGVkIHNvIHRoYXQgZXZlcnlcbiAgLy8gcmVkdWNlciByZXR1cm5zIHRoZWlyIGluaXRpYWwgc3RhdGUuIFRoaXMgZWZmZWN0aXZlbHkgcG9wdWxhdGVzXG4gIC8vIHRoZSBpbml0aWFsIHN0YXRlIHRyZWUuXG5cblxuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuSU5JVFxuICB9KTtcbiAgcmV0dXJuIF9yZWYyID0ge1xuICAgIGRpc3BhdGNoOiBkaXNwYXRjaCxcbiAgICBzdWJzY3JpYmU6IHN1YnNjcmliZSxcbiAgICBnZXRTdGF0ZTogZ2V0U3RhdGUsXG4gICAgcmVwbGFjZVJlZHVjZXI6IHJlcGxhY2VSZWR1Y2VyXG4gIH0sIF9yZWYyWyQkb2JzZXJ2YWJsZV0gPSBvYnNlcnZhYmxlLCBfcmVmMjtcbn1cblxuLyoqXG4gKiBQcmludHMgYSB3YXJuaW5nIGluIHRoZSBjb25zb2xlIGlmIGl0IGV4aXN0cy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBUaGUgd2FybmluZyBtZXNzYWdlLlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIHdhcm5pbmcobWVzc2FnZSkge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGNvbnNvbGUuZXJyb3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICB9XG4gIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuXG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IGlmIHlvdSBlbmFibGVcbiAgICAvLyBcImJyZWFrIG9uIGFsbCBleGNlcHRpb25zXCIgaW4geW91ciBjb25zb2xlLFxuICAgIC8vIGl0IHdvdWxkIHBhdXNlIHRoZSBleGVjdXRpb24gYXQgdGhpcyBsaW5lLlxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgfSBjYXRjaCAoZSkge30gLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1lbXB0eVxuXG59XG5cbmZ1bmN0aW9uIGdldFVuZGVmaW5lZFN0YXRlRXJyb3JNZXNzYWdlKGtleSwgYWN0aW9uKSB7XG4gIHZhciBhY3Rpb25UeXBlID0gYWN0aW9uICYmIGFjdGlvbi50eXBlO1xuICB2YXIgYWN0aW9uRGVzY3JpcHRpb24gPSBhY3Rpb25UeXBlICYmIFwiYWN0aW9uIFxcXCJcIiArIFN0cmluZyhhY3Rpb25UeXBlKSArIFwiXFxcIlwiIHx8ICdhbiBhY3Rpb24nO1xuICByZXR1cm4gXCJHaXZlbiBcIiArIGFjdGlvbkRlc2NyaXB0aW9uICsgXCIsIHJlZHVjZXIgXFxcIlwiICsga2V5ICsgXCJcXFwiIHJldHVybmVkIHVuZGVmaW5lZC4gXCIgKyBcIlRvIGlnbm9yZSBhbiBhY3Rpb24sIHlvdSBtdXN0IGV4cGxpY2l0bHkgcmV0dXJuIHRoZSBwcmV2aW91cyBzdGF0ZS4gXCIgKyBcIklmIHlvdSB3YW50IHRoaXMgcmVkdWNlciB0byBob2xkIG5vIHZhbHVlLCB5b3UgY2FuIHJldHVybiBudWxsIGluc3RlYWQgb2YgdW5kZWZpbmVkLlwiO1xufVxuXG5mdW5jdGlvbiBnZXRVbmV4cGVjdGVkU3RhdGVTaGFwZVdhcm5pbmdNZXNzYWdlKGlucHV0U3RhdGUsIHJlZHVjZXJzLCBhY3Rpb24sIHVuZXhwZWN0ZWRLZXlDYWNoZSkge1xuICB2YXIgcmVkdWNlcktleXMgPSBPYmplY3Qua2V5cyhyZWR1Y2Vycyk7XG4gIHZhciBhcmd1bWVudE5hbWUgPSBhY3Rpb24gJiYgYWN0aW9uLnR5cGUgPT09IEFjdGlvblR5cGVzLklOSVQgPyAncHJlbG9hZGVkU3RhdGUgYXJndW1lbnQgcGFzc2VkIHRvIGNyZWF0ZVN0b3JlJyA6ICdwcmV2aW91cyBzdGF0ZSByZWNlaXZlZCBieSB0aGUgcmVkdWNlcic7XG5cbiAgaWYgKHJlZHVjZXJLZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAnU3RvcmUgZG9lcyBub3QgaGF2ZSBhIHZhbGlkIHJlZHVjZXIuIE1ha2Ugc3VyZSB0aGUgYXJndW1lbnQgcGFzc2VkICcgKyAndG8gY29tYmluZVJlZHVjZXJzIGlzIGFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIHJlZHVjZXJzLic7XG4gIH1cblxuICBpZiAoIWlzUGxhaW5PYmplY3QoaW5wdXRTdGF0ZSkpIHtcbiAgICByZXR1cm4gXCJUaGUgXCIgKyBhcmd1bWVudE5hbWUgKyBcIiBoYXMgdW5leHBlY3RlZCB0eXBlIG9mIFxcXCJcIiArIHt9LnRvU3RyaW5nLmNhbGwoaW5wdXRTdGF0ZSkubWF0Y2goL1xccyhbYS16fEEtWl0rKS8pWzFdICsgXCJcXFwiLiBFeHBlY3RlZCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nIFwiICsgKFwia2V5czogXFxcIlwiICsgcmVkdWNlcktleXMuam9pbignXCIsIFwiJykgKyBcIlxcXCJcIik7XG4gIH1cblxuICB2YXIgdW5leHBlY3RlZEtleXMgPSBPYmplY3Qua2V5cyhpbnB1dFN0YXRlKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiAhcmVkdWNlcnMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAhdW5leHBlY3RlZEtleUNhY2hlW2tleV07XG4gIH0pO1xuICB1bmV4cGVjdGVkS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB1bmV4cGVjdGVkS2V5Q2FjaGVba2V5XSA9IHRydWU7XG4gIH0pO1xuICBpZiAoYWN0aW9uICYmIGFjdGlvbi50eXBlID09PSBBY3Rpb25UeXBlcy5SRVBMQUNFKSByZXR1cm47XG5cbiAgaWYgKHVuZXhwZWN0ZWRLZXlzLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gXCJVbmV4cGVjdGVkIFwiICsgKHVuZXhwZWN0ZWRLZXlzLmxlbmd0aCA+IDEgPyAna2V5cycgOiAna2V5JykgKyBcIiBcIiArIChcIlxcXCJcIiArIHVuZXhwZWN0ZWRLZXlzLmpvaW4oJ1wiLCBcIicpICsgXCJcXFwiIGZvdW5kIGluIFwiICsgYXJndW1lbnROYW1lICsgXCIuIFwiKSArIFwiRXhwZWN0ZWQgdG8gZmluZCBvbmUgb2YgdGhlIGtub3duIHJlZHVjZXIga2V5cyBpbnN0ZWFkOiBcIiArIChcIlxcXCJcIiArIHJlZHVjZXJLZXlzLmpvaW4oJ1wiLCBcIicpICsgXCJcXFwiLiBVbmV4cGVjdGVkIGtleXMgd2lsbCBiZSBpZ25vcmVkLlwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NlcnRSZWR1Y2VyU2hhcGUocmVkdWNlcnMpIHtcbiAgT2JqZWN0LmtleXMocmVkdWNlcnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciByZWR1Y2VyID0gcmVkdWNlcnNba2V5XTtcbiAgICB2YXIgaW5pdGlhbFN0YXRlID0gcmVkdWNlcih1bmRlZmluZWQsIHtcbiAgICAgIHR5cGU6IEFjdGlvblR5cGVzLklOSVRcbiAgICB9KTtcblxuICAgIGlmICh0eXBlb2YgaW5pdGlhbFN0YXRlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVkdWNlciBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgcmV0dXJuZWQgdW5kZWZpbmVkIGR1cmluZyBpbml0aWFsaXphdGlvbi4gXCIgKyBcIklmIHRoZSBzdGF0ZSBwYXNzZWQgdG8gdGhlIHJlZHVjZXIgaXMgdW5kZWZpbmVkLCB5b3UgbXVzdCBcIiArIFwiZXhwbGljaXRseSByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUuIFRoZSBpbml0aWFsIHN0YXRlIG1heSBcIiArIFwibm90IGJlIHVuZGVmaW5lZC4gSWYgeW91IGRvbid0IHdhbnQgdG8gc2V0IGEgdmFsdWUgZm9yIHRoaXMgcmVkdWNlciwgXCIgKyBcInlvdSBjYW4gdXNlIG51bGwgaW5zdGVhZCBvZiB1bmRlZmluZWQuXCIpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcmVkdWNlcih1bmRlZmluZWQsIHtcbiAgICAgIHR5cGU6IEFjdGlvblR5cGVzLlBST0JFX1VOS05PV05fQUNUSU9OKClcbiAgICB9KSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlZHVjZXIgXFxcIlwiICsga2V5ICsgXCJcXFwiIHJldHVybmVkIHVuZGVmaW5lZCB3aGVuIHByb2JlZCB3aXRoIGEgcmFuZG9tIHR5cGUuIFwiICsgKFwiRG9uJ3QgdHJ5IHRvIGhhbmRsZSBcIiArIEFjdGlvblR5cGVzLklOSVQgKyBcIiBvciBvdGhlciBhY3Rpb25zIGluIFxcXCJyZWR1eC8qXFxcIiBcIikgKyBcIm5hbWVzcGFjZS4gVGhleSBhcmUgY29uc2lkZXJlZCBwcml2YXRlLiBJbnN0ZWFkLCB5b3UgbXVzdCByZXR1cm4gdGhlIFwiICsgXCJjdXJyZW50IHN0YXRlIGZvciBhbnkgdW5rbm93biBhY3Rpb25zLCB1bmxlc3MgaXQgaXMgdW5kZWZpbmVkLCBcIiArIFwiaW4gd2hpY2ggY2FzZSB5b3UgbXVzdCByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUsIHJlZ2FyZGxlc3Mgb2YgdGhlIFwiICsgXCJhY3Rpb24gdHlwZS4gVGhlIGluaXRpYWwgc3RhdGUgbWF5IG5vdCBiZSB1bmRlZmluZWQsIGJ1dCBjYW4gYmUgbnVsbC5cIik7XG4gICAgfVxuICB9KTtcbn1cbi8qKlxuICogVHVybnMgYW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgZGlmZmVyZW50IHJlZHVjZXIgZnVuY3Rpb25zLCBpbnRvIGEgc2luZ2xlXG4gKiByZWR1Y2VyIGZ1bmN0aW9uLiBJdCB3aWxsIGNhbGwgZXZlcnkgY2hpbGQgcmVkdWNlciwgYW5kIGdhdGhlciB0aGVpciByZXN1bHRzXG4gKiBpbnRvIGEgc2luZ2xlIHN0YXRlIG9iamVjdCwgd2hvc2Uga2V5cyBjb3JyZXNwb25kIHRvIHRoZSBrZXlzIG9mIHRoZSBwYXNzZWRcbiAqIHJlZHVjZXIgZnVuY3Rpb25zLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSByZWR1Y2VycyBBbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGNvcnJlc3BvbmQgdG8gZGlmZmVyZW50XG4gKiByZWR1Y2VyIGZ1bmN0aW9ucyB0aGF0IG5lZWQgdG8gYmUgY29tYmluZWQgaW50byBvbmUuIE9uZSBoYW5keSB3YXkgdG8gb2J0YWluXG4gKiBpdCBpcyB0byB1c2UgRVM2IGBpbXBvcnQgKiBhcyByZWR1Y2Vyc2Agc3ludGF4LiBUaGUgcmVkdWNlcnMgbWF5IG5ldmVyIHJldHVyblxuICogdW5kZWZpbmVkIGZvciBhbnkgYWN0aW9uLiBJbnN0ZWFkLCB0aGV5IHNob3VsZCByZXR1cm4gdGhlaXIgaW5pdGlhbCBzdGF0ZVxuICogaWYgdGhlIHN0YXRlIHBhc3NlZCB0byB0aGVtIHdhcyB1bmRlZmluZWQsIGFuZCB0aGUgY3VycmVudCBzdGF0ZSBmb3IgYW55XG4gKiB1bnJlY29nbml6ZWQgYWN0aW9uLlxuICpcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSByZWR1Y2VyIGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBldmVyeSByZWR1Y2VyIGluc2lkZSB0aGVcbiAqIHBhc3NlZCBvYmplY3QsIGFuZCBidWlsZHMgYSBzdGF0ZSBvYmplY3Qgd2l0aCB0aGUgc2FtZSBzaGFwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNvbWJpbmVSZWR1Y2VycyhyZWR1Y2Vycykge1xuICB2YXIgcmVkdWNlcktleXMgPSBPYmplY3Qua2V5cyhyZWR1Y2Vycyk7XG4gIHZhciBmaW5hbFJlZHVjZXJzID0ge307XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZWR1Y2VyS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSByZWR1Y2VyS2V5c1tpXTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHJlZHVjZXJzW2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHdhcm5pbmcoXCJObyByZWR1Y2VyIHByb3ZpZGVkIGZvciBrZXkgXFxcIlwiICsga2V5ICsgXCJcXFwiXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcmVkdWNlcnNba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZmluYWxSZWR1Y2Vyc1trZXldID0gcmVkdWNlcnNba2V5XTtcbiAgICB9XG4gIH1cblxuICB2YXIgZmluYWxSZWR1Y2VyS2V5cyA9IE9iamVjdC5rZXlzKGZpbmFsUmVkdWNlcnMpO1xuICB2YXIgdW5leHBlY3RlZEtleUNhY2hlO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdW5leHBlY3RlZEtleUNhY2hlID0ge307XG4gIH1cblxuICB2YXIgc2hhcGVBc3NlcnRpb25FcnJvcjtcblxuICB0cnkge1xuICAgIGFzc2VydFJlZHVjZXJTaGFwZShmaW5hbFJlZHVjZXJzKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHNoYXBlQXNzZXJ0aW9uRXJyb3IgPSBlO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGNvbWJpbmF0aW9uKHN0YXRlLCBhY3Rpb24pIHtcbiAgICBpZiAoc3RhdGUgPT09IHZvaWQgMCkge1xuICAgICAgc3RhdGUgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoc2hhcGVBc3NlcnRpb25FcnJvcikge1xuICAgICAgdGhyb3cgc2hhcGVBc3NlcnRpb25FcnJvcjtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIHdhcm5pbmdNZXNzYWdlID0gZ2V0VW5leHBlY3RlZFN0YXRlU2hhcGVXYXJuaW5nTWVzc2FnZShzdGF0ZSwgZmluYWxSZWR1Y2VycywgYWN0aW9uLCB1bmV4cGVjdGVkS2V5Q2FjaGUpO1xuXG4gICAgICBpZiAod2FybmluZ01lc3NhZ2UpIHtcbiAgICAgICAgd2FybmluZyh3YXJuaW5nTWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGhhc0NoYW5nZWQgPSBmYWxzZTtcbiAgICB2YXIgbmV4dFN0YXRlID0ge307XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgZmluYWxSZWR1Y2VyS2V5cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfa2V5ID0gZmluYWxSZWR1Y2VyS2V5c1tfaV07XG4gICAgICB2YXIgcmVkdWNlciA9IGZpbmFsUmVkdWNlcnNbX2tleV07XG4gICAgICB2YXIgcHJldmlvdXNTdGF0ZUZvcktleSA9IHN0YXRlW19rZXldO1xuICAgICAgdmFyIG5leHRTdGF0ZUZvcktleSA9IHJlZHVjZXIocHJldmlvdXNTdGF0ZUZvcktleSwgYWN0aW9uKTtcblxuICAgICAgaWYgKHR5cGVvZiBuZXh0U3RhdGVGb3JLZXkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSBnZXRVbmRlZmluZWRTdGF0ZUVycm9yTWVzc2FnZShfa2V5LCBhY3Rpb24pO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JNZXNzYWdlKTtcbiAgICAgIH1cblxuICAgICAgbmV4dFN0YXRlW19rZXldID0gbmV4dFN0YXRlRm9yS2V5O1xuICAgICAgaGFzQ2hhbmdlZCA9IGhhc0NoYW5nZWQgfHwgbmV4dFN0YXRlRm9yS2V5ICE9PSBwcmV2aW91c1N0YXRlRm9yS2V5O1xuICAgIH1cblxuICAgIHJldHVybiBoYXNDaGFuZ2VkID8gbmV4dFN0YXRlIDogc3RhdGU7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3IsIGRpc3BhdGNoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoKGFjdGlvbkNyZWF0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH07XG59XG4vKipcbiAqIFR1cm5zIGFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIGFjdGlvbiBjcmVhdG9ycywgaW50byBhbiBvYmplY3Qgd2l0aCB0aGVcbiAqIHNhbWUga2V5cywgYnV0IHdpdGggZXZlcnkgZnVuY3Rpb24gd3JhcHBlZCBpbnRvIGEgYGRpc3BhdGNoYCBjYWxsIHNvIHRoZXlcbiAqIG1heSBiZSBpbnZva2VkIGRpcmVjdGx5LiBUaGlzIGlzIGp1c3QgYSBjb252ZW5pZW5jZSBtZXRob2QsIGFzIHlvdSBjYW4gY2FsbFxuICogYHN0b3JlLmRpc3BhdGNoKE15QWN0aW9uQ3JlYXRvcnMuZG9Tb21ldGhpbmcoKSlgIHlvdXJzZWxmIGp1c3QgZmluZS5cbiAqXG4gKiBGb3IgY29udmVuaWVuY2UsIHlvdSBjYW4gYWxzbyBwYXNzIGEgc2luZ2xlIGZ1bmN0aW9uIGFzIHRoZSBmaXJzdCBhcmd1bWVudCxcbiAqIGFuZCBnZXQgYSBmdW5jdGlvbiBpbiByZXR1cm4uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbnxPYmplY3R9IGFjdGlvbkNyZWF0b3JzIEFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIGFjdGlvblxuICogY3JlYXRvciBmdW5jdGlvbnMuIE9uZSBoYW5keSB3YXkgdG8gb2J0YWluIGl0IGlzIHRvIHVzZSBFUzYgYGltcG9ydCAqIGFzYFxuICogc3ludGF4LiBZb3UgbWF5IGFsc28gcGFzcyBhIHNpbmdsZSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBkaXNwYXRjaCBUaGUgYGRpc3BhdGNoYCBmdW5jdGlvbiBhdmFpbGFibGUgb24geW91ciBSZWR1eFxuICogc3RvcmUuXG4gKlxuICogQHJldHVybnMge0Z1bmN0aW9ufE9iamVjdH0gVGhlIG9iamVjdCBtaW1pY2tpbmcgdGhlIG9yaWdpbmFsIG9iamVjdCwgYnV0IHdpdGhcbiAqIGV2ZXJ5IGFjdGlvbiBjcmVhdG9yIHdyYXBwZWQgaW50byB0aGUgYGRpc3BhdGNoYCBjYWxsLiBJZiB5b3UgcGFzc2VkIGFcbiAqIGZ1bmN0aW9uIGFzIGBhY3Rpb25DcmVhdG9yc2AsIHRoZSByZXR1cm4gdmFsdWUgd2lsbCBhbHNvIGJlIGEgc2luZ2xlXG4gKiBmdW5jdGlvbi5cbiAqL1xuXG5cbmZ1bmN0aW9uIGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpIHtcbiAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9ycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9ycyAhPT0gJ29iamVjdCcgfHwgYWN0aW9uQ3JlYXRvcnMgPT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJiaW5kQWN0aW9uQ3JlYXRvcnMgZXhwZWN0ZWQgYW4gb2JqZWN0IG9yIGEgZnVuY3Rpb24sIGluc3RlYWQgcmVjZWl2ZWQgXCIgKyAoYWN0aW9uQ3JlYXRvcnMgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgYWN0aW9uQ3JlYXRvcnMpICsgXCIuIFwiICsgXCJEaWQgeW91IHdyaXRlIFxcXCJpbXBvcnQgQWN0aW9uQ3JlYXRvcnMgZnJvbVxcXCIgaW5zdGVhZCBvZiBcXFwiaW1wb3J0ICogYXMgQWN0aW9uQ3JlYXRvcnMgZnJvbVxcXCI/XCIpO1xuICB9XG5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhhY3Rpb25DcmVhdG9ycyk7XG4gIHZhciBib3VuZEFjdGlvbkNyZWF0b3JzID0ge307XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgdmFyIGFjdGlvbkNyZWF0b3IgPSBhY3Rpb25DcmVhdG9yc1trZXldO1xuXG4gICAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBib3VuZEFjdGlvbkNyZWF0b3JzW2tleV0gPSBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9yLCBkaXNwYXRjaCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJvdW5kQWN0aW9uQ3JlYXRvcnM7XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuICAgIHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcblxuICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG4vKipcbiAqIENvbXBvc2VzIHNpbmdsZS1hcmd1bWVudCBmdW5jdGlvbnMgZnJvbSByaWdodCB0byBsZWZ0LiBUaGUgcmlnaHRtb3N0XG4gKiBmdW5jdGlvbiBjYW4gdGFrZSBtdWx0aXBsZSBhcmd1bWVudHMgYXMgaXQgcHJvdmlkZXMgdGhlIHNpZ25hdHVyZSBmb3JcbiAqIHRoZSByZXN1bHRpbmcgY29tcG9zaXRlIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7Li4uRnVuY3Rpb259IGZ1bmNzIFRoZSBmdW5jdGlvbnMgdG8gY29tcG9zZS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBmdW5jdGlvbiBvYnRhaW5lZCBieSBjb21wb3NpbmcgdGhlIGFyZ3VtZW50IGZ1bmN0aW9uc1xuICogZnJvbSByaWdodCB0byBsZWZ0LiBGb3IgZXhhbXBsZSwgY29tcG9zZShmLCBnLCBoKSBpcyBpZGVudGljYWwgdG8gZG9pbmdcbiAqICguLi5hcmdzKSA9PiBmKGcoaCguLi5hcmdzKSkpLlxuICovXG5mdW5jdGlvbiBjb21wb3NlKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgZnVuY3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgZnVuY3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBpZiAoZnVuY3MubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgIHJldHVybiBhcmc7XG4gICAgfTtcbiAgfVxuXG4gIGlmIChmdW5jcy5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gZnVuY3NbMF07XG4gIH1cblxuICByZXR1cm4gZnVuY3MucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhKGIuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpKTtcbiAgICB9O1xuICB9KTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RvcmUgZW5oYW5jZXIgdGhhdCBhcHBsaWVzIG1pZGRsZXdhcmUgdG8gdGhlIGRpc3BhdGNoIG1ldGhvZFxuICogb2YgdGhlIFJlZHV4IHN0b3JlLiBUaGlzIGlzIGhhbmR5IGZvciBhIHZhcmlldHkgb2YgdGFza3MsIHN1Y2ggYXMgZXhwcmVzc2luZ1xuICogYXN5bmNocm9ub3VzIGFjdGlvbnMgaW4gYSBjb25jaXNlIG1hbm5lciwgb3IgbG9nZ2luZyBldmVyeSBhY3Rpb24gcGF5bG9hZC5cbiAqXG4gKiBTZWUgYHJlZHV4LXRodW5rYCBwYWNrYWdlIGFzIGFuIGV4YW1wbGUgb2YgdGhlIFJlZHV4IG1pZGRsZXdhcmUuXG4gKlxuICogQmVjYXVzZSBtaWRkbGV3YXJlIGlzIHBvdGVudGlhbGx5IGFzeW5jaHJvbm91cywgdGhpcyBzaG91bGQgYmUgdGhlIGZpcnN0XG4gKiBzdG9yZSBlbmhhbmNlciBpbiB0aGUgY29tcG9zaXRpb24gY2hhaW4uXG4gKlxuICogTm90ZSB0aGF0IGVhY2ggbWlkZGxld2FyZSB3aWxsIGJlIGdpdmVuIHRoZSBgZGlzcGF0Y2hgIGFuZCBgZ2V0U3RhdGVgIGZ1bmN0aW9uc1xuICogYXMgbmFtZWQgYXJndW1lbnRzLlxuICpcbiAqIEBwYXJhbSB7Li4uRnVuY3Rpb259IG1pZGRsZXdhcmVzIFRoZSBtaWRkbGV3YXJlIGNoYWluIHRvIGJlIGFwcGxpZWQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgc3RvcmUgZW5oYW5jZXIgYXBwbHlpbmcgdGhlIG1pZGRsZXdhcmUuXG4gKi9cblxuZnVuY3Rpb24gYXBwbHlNaWRkbGV3YXJlKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgbWlkZGxld2FyZXMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgbWlkZGxld2FyZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGNyZWF0ZVN0b3JlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzdG9yZSA9IGNyZWF0ZVN0b3JlLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcblxuICAgICAgdmFyIF9kaXNwYXRjaCA9IGZ1bmN0aW9uIGRpc3BhdGNoKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaXNwYXRjaGluZyB3aGlsZSBjb25zdHJ1Y3RpbmcgeW91ciBtaWRkbGV3YXJlIGlzIG5vdCBhbGxvd2VkLiBcIiArIFwiT3RoZXIgbWlkZGxld2FyZSB3b3VsZCBub3QgYmUgYXBwbGllZCB0byB0aGlzIGRpc3BhdGNoLlwiKTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBtaWRkbGV3YXJlQVBJID0ge1xuICAgICAgICBnZXRTdGF0ZTogc3RvcmUuZ2V0U3RhdGUsXG4gICAgICAgIGRpc3BhdGNoOiBmdW5jdGlvbiBkaXNwYXRjaCgpIHtcbiAgICAgICAgICByZXR1cm4gX2Rpc3BhdGNoLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHZhciBjaGFpbiA9IG1pZGRsZXdhcmVzLm1hcChmdW5jdGlvbiAobWlkZGxld2FyZSkge1xuICAgICAgICByZXR1cm4gbWlkZGxld2FyZShtaWRkbGV3YXJlQVBJKTtcbiAgICAgIH0pO1xuICAgICAgX2Rpc3BhdGNoID0gY29tcG9zZS5hcHBseSh2b2lkIDAsIGNoYWluKShzdG9yZS5kaXNwYXRjaCk7XG4gICAgICByZXR1cm4gX29iamVjdFNwcmVhZCh7fSwgc3RvcmUsIHtcbiAgICAgICAgZGlzcGF0Y2g6IF9kaXNwYXRjaFxuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcbn1cblxuLypcbiAqIFRoaXMgaXMgYSBkdW1teSBmdW5jdGlvbiB0byBjaGVjayBpZiB0aGUgZnVuY3Rpb24gbmFtZSBoYXMgYmVlbiBhbHRlcmVkIGJ5IG1pbmlmaWNhdGlvbi5cbiAqIElmIHRoZSBmdW5jdGlvbiBoYXMgYmVlbiBtaW5pZmllZCBhbmQgTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJywgd2FybiB0aGUgdXNlci5cbiAqL1xuXG5mdW5jdGlvbiBpc0NydXNoZWQoKSB7fVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgaXNDcnVzaGVkLm5hbWUgPT09ICdzdHJpbmcnICYmIGlzQ3J1c2hlZC5uYW1lICE9PSAnaXNDcnVzaGVkJykge1xuICB3YXJuaW5nKCdZb3UgYXJlIGN1cnJlbnRseSB1c2luZyBtaW5pZmllZCBjb2RlIG91dHNpZGUgb2YgTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiLiAnICsgJ1RoaXMgbWVhbnMgdGhhdCB5b3UgYXJlIHJ1bm5pbmcgYSBzbG93ZXIgZGV2ZWxvcG1lbnQgYnVpbGQgb2YgUmVkdXguICcgKyAnWW91IGNhbiB1c2UgbG9vc2UtZW52aWZ5IChodHRwczovL2dpdGh1Yi5jb20vemVydG9zaC9sb29zZS1lbnZpZnkpIGZvciBicm93c2VyaWZ5ICcgKyAnb3Igc2V0dGluZyBtb2RlIHRvIHByb2R1Y3Rpb24gaW4gd2VicGFjayAoaHR0cHM6Ly93ZWJwYWNrLmpzLm9yZy9jb25jZXB0cy9tb2RlLykgJyArICd0byBlbnN1cmUgeW91IGhhdmUgdGhlIGNvcnJlY3QgY29kZSBmb3IgeW91ciBwcm9kdWN0aW9uIGJ1aWxkLicpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzLCBiaW5kQWN0aW9uQ3JlYXRvcnMsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSwgQWN0aW9uVHlwZXMgYXMgX19ET19OT1RfVVNFX19BY3Rpb25UeXBlcyB9O1xuIiwiaW1wb3J0IGZyZWVHbG9iYWwgZnJvbSAnLi9fZnJlZUdsb2JhbC5qcyc7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdDtcbiIsImltcG9ydCByb290IGZyb20gJy4vX3Jvb3QuanMnO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxuZXhwb3J0IGRlZmF1bHQgU3ltYm9sO1xuIiwiaW1wb3J0IFN5bWJvbCBmcm9tICcuL19TeW1ib2wuanMnO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldFJhd1RhZztcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBvYmplY3RUb1N0cmluZztcbiIsImltcG9ydCBTeW1ib2wgZnJvbSAnLi9fU3ltYm9sLmpzJztcbmltcG9ydCBnZXRSYXdUYWcgZnJvbSAnLi9fZ2V0UmF3VGFnLmpzJztcbmltcG9ydCBvYmplY3RUb1N0cmluZyBmcm9tICcuL19vYmplY3RUb1N0cmluZy5qcyc7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlR2V0VGFnO1xuIiwiLyoqXG4gKiBDcmVhdGVzIGEgdW5hcnkgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIGl0cyBhcmd1bWVudCB0cmFuc2Zvcm1lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gd3JhcC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgYXJndW1lbnQgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJBcmcoZnVuYywgdHJhbnNmb3JtKSB7XG4gIHJldHVybiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gZnVuYyh0cmFuc2Zvcm0oYXJnKSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG92ZXJBcmc7XG4iLCJpbXBvcnQgb3ZlckFyZyBmcm9tICcuL19vdmVyQXJnLmpzJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgZ2V0UHJvdG90eXBlID0gb3ZlckFyZyhPYmplY3QuZ2V0UHJvdG90eXBlT2YsIE9iamVjdCk7XG5cbmV4cG9ydCBkZWZhdWx0IGdldFByb3RvdHlwZTtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc09iamVjdExpa2U7XG4iLCJpbXBvcnQgYmFzZUdldFRhZyBmcm9tICcuL19iYXNlR2V0VGFnLmpzJztcbmltcG9ydCBnZXRQcm90b3R5cGUgZnJvbSAnLi9fZ2V0UHJvdG90eXBlLmpzJztcbmltcG9ydCBpc09iamVjdExpa2UgZnJvbSAnLi9pc09iamVjdExpa2UuanMnO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XSc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBpbmZlciB0aGUgYE9iamVjdGAgY29uc3RydWN0b3IuICovXG52YXIgb2JqZWN0Q3RvclN0cmluZyA9IGZ1bmNUb1N0cmluZy5jYWxsKE9iamVjdCk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBwbGFpbiBvYmplY3QsIHRoYXQgaXMsIGFuIG9iamVjdCBjcmVhdGVkIGJ5IHRoZVxuICogYE9iamVjdGAgY29uc3RydWN0b3Igb3Igb25lIHdpdGggYSBgW1tQcm90b3R5cGVdXWAgb2YgYG51bGxgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC44LjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcGxhaW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqIH1cbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QobmV3IEZvbyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoeyAneCc6IDAsICd5JzogMCB9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoT2JqZWN0LmNyZWF0ZShudWxsKSk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdExpa2UodmFsdWUpIHx8IGJhc2VHZXRUYWcodmFsdWUpICE9IG9iamVjdFRhZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcHJvdG8gPSBnZXRQcm90b3R5cGUodmFsdWUpO1xuICBpZiAocHJvdG8gPT09IG51bGwpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB2YXIgQ3RvciA9IGhhc093blByb3BlcnR5LmNhbGwocHJvdG8sICdjb25zdHJ1Y3RvcicpICYmIHByb3RvLmNvbnN0cnVjdG9yO1xuICByZXR1cm4gdHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yIGluc3RhbmNlb2YgQ3RvciAmJlxuICAgIGZ1bmNUb1N0cmluZy5jYWxsKEN0b3IpID09IG9iamVjdEN0b3JTdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzUGxhaW5PYmplY3Q7XG4iLCJpbXBvcnQgaXNQbGFpbk9iamVjdCBmcm9tICdsb2Rhc2gtZXMvaXNQbGFpbk9iamVjdCc7XG5pbXBvcnQgd2FybmluZyBmcm9tICcuL3dhcm5pbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlQbGFpbk9iamVjdCh2YWx1ZSwgZGlzcGxheU5hbWUsIG1ldGhvZE5hbWUpIHtcbiAgaWYgKCFpc1BsYWluT2JqZWN0KHZhbHVlKSkge1xuICAgIHdhcm5pbmcobWV0aG9kTmFtZSArICcoKSBpbiAnICsgZGlzcGxheU5hbWUgKyAnIG11c3QgcmV0dXJuIGEgcGxhaW4gb2JqZWN0LiBJbnN0ZWFkIHJlY2VpdmVkICcgKyB2YWx1ZSArICcuJyk7XG4gIH1cbn0iLCJpbXBvcnQgdmVyaWZ5UGxhaW5PYmplY3QgZnJvbSAnLi4vdXRpbHMvdmVyaWZ5UGxhaW5PYmplY3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gd3JhcE1hcFRvUHJvcHNDb25zdGFudChnZXRDb25zdGFudCkge1xuICByZXR1cm4gZnVuY3Rpb24gaW5pdENvbnN0YW50U2VsZWN0b3IoZGlzcGF0Y2gsIG9wdGlvbnMpIHtcbiAgICB2YXIgY29uc3RhbnQgPSBnZXRDb25zdGFudChkaXNwYXRjaCwgb3B0aW9ucyk7XG5cbiAgICBmdW5jdGlvbiBjb25zdGFudFNlbGVjdG9yKCkge1xuICAgICAgcmV0dXJuIGNvbnN0YW50O1xuICAgIH1cbiAgICBjb25zdGFudFNlbGVjdG9yLmRlcGVuZHNPbk93blByb3BzID0gZmFsc2U7XG4gICAgcmV0dXJuIGNvbnN0YW50U2VsZWN0b3I7XG4gIH07XG59XG5cbi8vIGRlcGVuZHNPbk93blByb3BzIGlzIHVzZWQgYnkgY3JlYXRlTWFwVG9Qcm9wc1Byb3h5IHRvIGRldGVybWluZSB3aGV0aGVyIHRvIHBhc3MgcHJvcHMgYXMgYXJnc1xuLy8gdG8gdGhlIG1hcFRvUHJvcHMgZnVuY3Rpb24gYmVpbmcgd3JhcHBlZC4gSXQgaXMgYWxzbyB1c2VkIGJ5IG1ha2VQdXJlUHJvcHNTZWxlY3RvciB0byBkZXRlcm1pbmVcbi8vIHdoZXRoZXIgbWFwVG9Qcm9wcyBuZWVkcyB0byBiZSBpbnZva2VkIHdoZW4gcHJvcHMgaGF2ZSBjaGFuZ2VkLlxuLy8gXG4vLyBBIGxlbmd0aCBvZiBvbmUgc2lnbmFscyB0aGF0IG1hcFRvUHJvcHMgZG9lcyBub3QgZGVwZW5kIG9uIHByb3BzIGZyb20gdGhlIHBhcmVudCBjb21wb25lbnQuXG4vLyBBIGxlbmd0aCBvZiB6ZXJvIGlzIGFzc3VtZWQgdG8gbWVhbiBtYXBUb1Byb3BzIGlzIGdldHRpbmcgYXJncyB2aWEgYXJndW1lbnRzIG9yIC4uLmFyZ3MgYW5kXG4vLyB0aGVyZWZvcmUgbm90IHJlcG9ydGluZyBpdHMgbGVuZ3RoIGFjY3VyYXRlbHkuLlxuZXhwb3J0IGZ1bmN0aW9uIGdldERlcGVuZHNPbk93blByb3BzKG1hcFRvUHJvcHMpIHtcbiAgcmV0dXJuIG1hcFRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMgIT09IG51bGwgJiYgbWFwVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcyAhPT0gdW5kZWZpbmVkID8gQm9vbGVhbihtYXBUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzKSA6IG1hcFRvUHJvcHMubGVuZ3RoICE9PSAxO1xufVxuXG4vLyBVc2VkIGJ5IHdoZW5NYXBTdGF0ZVRvUHJvcHNJc0Z1bmN0aW9uIGFuZCB3aGVuTWFwRGlzcGF0Y2hUb1Byb3BzSXNGdW5jdGlvbixcbi8vIHRoaXMgZnVuY3Rpb24gd3JhcHMgbWFwVG9Qcm9wcyBpbiBhIHByb3h5IGZ1bmN0aW9uIHdoaWNoIGRvZXMgc2V2ZXJhbCB0aGluZ3M6XG4vLyBcbi8vICAqIERldGVjdHMgd2hldGhlciB0aGUgbWFwVG9Qcm9wcyBmdW5jdGlvbiBiZWluZyBjYWxsZWQgZGVwZW5kcyBvbiBwcm9wcywgd2hpY2hcbi8vICAgIGlzIHVzZWQgYnkgc2VsZWN0b3JGYWN0b3J5IHRvIGRlY2lkZSBpZiBpdCBzaG91bGQgcmVpbnZva2Ugb24gcHJvcHMgY2hhbmdlcy5cbi8vICAgIFxuLy8gICogT24gZmlyc3QgY2FsbCwgaGFuZGxlcyBtYXBUb1Byb3BzIGlmIHJldHVybnMgYW5vdGhlciBmdW5jdGlvbiwgYW5kIHRyZWF0cyB0aGF0XG4vLyAgICBuZXcgZnVuY3Rpb24gYXMgdGhlIHRydWUgbWFwVG9Qcm9wcyBmb3Igc3Vic2VxdWVudCBjYWxscy5cbi8vICAgIFxuLy8gICogT24gZmlyc3QgY2FsbCwgdmVyaWZpZXMgdGhlIGZpcnN0IHJlc3VsdCBpcyBhIHBsYWluIG9iamVjdCwgaW4gb3JkZXIgdG8gd2FyblxuLy8gICAgdGhlIGRldmVsb3BlciB0aGF0IHRoZWlyIG1hcFRvUHJvcHMgZnVuY3Rpb24gaXMgbm90IHJldHVybmluZyBhIHZhbGlkIHJlc3VsdC5cbi8vICAgIFxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBNYXBUb1Byb3BzRnVuYyhtYXBUb1Byb3BzLCBtZXRob2ROYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbiBpbml0UHJveHlTZWxlY3RvcihkaXNwYXRjaCwgX3JlZikge1xuICAgIHZhciBkaXNwbGF5TmFtZSA9IF9yZWYuZGlzcGxheU5hbWU7XG5cbiAgICB2YXIgcHJveHkgPSBmdW5jdGlvbiBtYXBUb1Byb3BzUHJveHkoc3RhdGVPckRpc3BhdGNoLCBvd25Qcm9wcykge1xuICAgICAgcmV0dXJuIHByb3h5LmRlcGVuZHNPbk93blByb3BzID8gcHJveHkubWFwVG9Qcm9wcyhzdGF0ZU9yRGlzcGF0Y2gsIG93blByb3BzKSA6IHByb3h5Lm1hcFRvUHJvcHMoc3RhdGVPckRpc3BhdGNoKTtcbiAgICB9O1xuXG4gICAgLy8gYWxsb3cgZGV0ZWN0RmFjdG9yeUFuZFZlcmlmeSB0byBnZXQgb3duUHJvcHNcbiAgICBwcm94eS5kZXBlbmRzT25Pd25Qcm9wcyA9IHRydWU7XG5cbiAgICBwcm94eS5tYXBUb1Byb3BzID0gZnVuY3Rpb24gZGV0ZWN0RmFjdG9yeUFuZFZlcmlmeShzdGF0ZU9yRGlzcGF0Y2gsIG93blByb3BzKSB7XG4gICAgICBwcm94eS5tYXBUb1Byb3BzID0gbWFwVG9Qcm9wcztcbiAgICAgIHByb3h5LmRlcGVuZHNPbk93blByb3BzID0gZ2V0RGVwZW5kc09uT3duUHJvcHMobWFwVG9Qcm9wcyk7XG4gICAgICB2YXIgcHJvcHMgPSBwcm94eShzdGF0ZU9yRGlzcGF0Y2gsIG93blByb3BzKTtcblxuICAgICAgaWYgKHR5cGVvZiBwcm9wcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcm94eS5tYXBUb1Byb3BzID0gcHJvcHM7XG4gICAgICAgIHByb3h5LmRlcGVuZHNPbk93blByb3BzID0gZ2V0RGVwZW5kc09uT3duUHJvcHMocHJvcHMpO1xuICAgICAgICBwcm9wcyA9IHByb3h5KHN0YXRlT3JEaXNwYXRjaCwgb3duUHJvcHMpO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgdmVyaWZ5UGxhaW5PYmplY3QocHJvcHMsIGRpc3BsYXlOYW1lLCBtZXRob2ROYW1lKTtcblxuICAgICAgcmV0dXJuIHByb3BzO1xuICAgIH07XG5cbiAgICByZXR1cm4gcHJveHk7XG4gIH07XG59IiwiaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgd3JhcE1hcFRvUHJvcHNDb25zdGFudCwgd3JhcE1hcFRvUHJvcHNGdW5jIH0gZnJvbSAnLi93cmFwTWFwVG9Qcm9wcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiB3aGVuTWFwRGlzcGF0Y2hUb1Byb3BzSXNGdW5jdGlvbihtYXBEaXNwYXRjaFRvUHJvcHMpIHtcbiAgcmV0dXJuIHR5cGVvZiBtYXBEaXNwYXRjaFRvUHJvcHMgPT09ICdmdW5jdGlvbicgPyB3cmFwTWFwVG9Qcm9wc0Z1bmMobWFwRGlzcGF0Y2hUb1Byb3BzLCAnbWFwRGlzcGF0Y2hUb1Byb3BzJykgOiB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3aGVuTWFwRGlzcGF0Y2hUb1Byb3BzSXNNaXNzaW5nKG1hcERpc3BhdGNoVG9Qcm9wcykge1xuICByZXR1cm4gIW1hcERpc3BhdGNoVG9Qcm9wcyA/IHdyYXBNYXBUb1Byb3BzQ29uc3RhbnQoZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG4gICAgcmV0dXJuIHsgZGlzcGF0Y2g6IGRpc3BhdGNoIH07XG4gIH0pIDogdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2hlbk1hcERpc3BhdGNoVG9Qcm9wc0lzT2JqZWN0KG1hcERpc3BhdGNoVG9Qcm9wcykge1xuICByZXR1cm4gbWFwRGlzcGF0Y2hUb1Byb3BzICYmIHR5cGVvZiBtYXBEaXNwYXRjaFRvUHJvcHMgPT09ICdvYmplY3QnID8gd3JhcE1hcFRvUHJvcHNDb25zdGFudChmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcbiAgICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKG1hcERpc3BhdGNoVG9Qcm9wcywgZGlzcGF0Y2gpO1xuICB9KSA6IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgW3doZW5NYXBEaXNwYXRjaFRvUHJvcHNJc0Z1bmN0aW9uLCB3aGVuTWFwRGlzcGF0Y2hUb1Byb3BzSXNNaXNzaW5nLCB3aGVuTWFwRGlzcGF0Y2hUb1Byb3BzSXNPYmplY3RdOyIsImltcG9ydCB7IHdyYXBNYXBUb1Byb3BzQ29uc3RhbnQsIHdyYXBNYXBUb1Byb3BzRnVuYyB9IGZyb20gJy4vd3JhcE1hcFRvUHJvcHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gd2hlbk1hcFN0YXRlVG9Qcm9wc0lzRnVuY3Rpb24obWFwU3RhdGVUb1Byb3BzKSB7XG4gIHJldHVybiB0eXBlb2YgbWFwU3RhdGVUb1Byb3BzID09PSAnZnVuY3Rpb24nID8gd3JhcE1hcFRvUHJvcHNGdW5jKG1hcFN0YXRlVG9Qcm9wcywgJ21hcFN0YXRlVG9Qcm9wcycpIDogdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2hlbk1hcFN0YXRlVG9Qcm9wc0lzTWlzc2luZyhtYXBTdGF0ZVRvUHJvcHMpIHtcbiAgcmV0dXJuICFtYXBTdGF0ZVRvUHJvcHMgPyB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge307XG4gIH0pIDogdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBbd2hlbk1hcFN0YXRlVG9Qcm9wc0lzRnVuY3Rpb24sIHdoZW5NYXBTdGF0ZVRvUHJvcHNJc01pc3NpbmddOyIsInZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmltcG9ydCB2ZXJpZnlQbGFpbk9iamVjdCBmcm9tICcuLi91dGlscy92ZXJpZnlQbGFpbk9iamVjdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0TWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcykge1xuICByZXR1cm4gX2V4dGVuZHMoe30sIG93blByb3BzLCBzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBNZXJnZVByb3BzRnVuYyhtZXJnZVByb3BzKSB7XG4gIHJldHVybiBmdW5jdGlvbiBpbml0TWVyZ2VQcm9wc1Byb3h5KGRpc3BhdGNoLCBfcmVmKSB7XG4gICAgdmFyIGRpc3BsYXlOYW1lID0gX3JlZi5kaXNwbGF5TmFtZSxcbiAgICAgICAgcHVyZSA9IF9yZWYucHVyZSxcbiAgICAgICAgYXJlTWVyZ2VkUHJvcHNFcXVhbCA9IF9yZWYuYXJlTWVyZ2VkUHJvcHNFcXVhbDtcblxuICAgIHZhciBoYXNSdW5PbmNlID0gZmFsc2U7XG4gICAgdmFyIG1lcmdlZFByb3BzID0gdm9pZCAwO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1lcmdlUHJvcHNQcm94eShzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcykge1xuICAgICAgdmFyIG5leHRNZXJnZWRQcm9wcyA9IG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpO1xuXG4gICAgICBpZiAoaGFzUnVuT25jZSkge1xuICAgICAgICBpZiAoIXB1cmUgfHwgIWFyZU1lcmdlZFByb3BzRXF1YWwobmV4dE1lcmdlZFByb3BzLCBtZXJnZWRQcm9wcykpIG1lcmdlZFByb3BzID0gbmV4dE1lcmdlZFByb3BzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGFzUnVuT25jZSA9IHRydWU7XG4gICAgICAgIG1lcmdlZFByb3BzID0gbmV4dE1lcmdlZFByb3BzO1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB2ZXJpZnlQbGFpbk9iamVjdChtZXJnZWRQcm9wcywgZGlzcGxheU5hbWUsICdtZXJnZVByb3BzJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgICB9O1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2hlbk1lcmdlUHJvcHNJc0Z1bmN0aW9uKG1lcmdlUHJvcHMpIHtcbiAgcmV0dXJuIHR5cGVvZiBtZXJnZVByb3BzID09PSAnZnVuY3Rpb24nID8gd3JhcE1lcmdlUHJvcHNGdW5jKG1lcmdlUHJvcHMpIDogdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2hlbk1lcmdlUHJvcHNJc09taXR0ZWQobWVyZ2VQcm9wcykge1xuICByZXR1cm4gIW1lcmdlUHJvcHMgPyBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRNZXJnZVByb3BzO1xuICB9IDogdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBbd2hlbk1lcmdlUHJvcHNJc0Z1bmN0aW9uLCB3aGVuTWVyZ2VQcm9wc0lzT21pdHRlZF07IiwiaW1wb3J0IHdhcm5pbmcgZnJvbSAnLi4vdXRpbHMvd2FybmluZyc7XG5cbmZ1bmN0aW9uIHZlcmlmeShzZWxlY3RvciwgbWV0aG9kTmFtZSwgZGlzcGxheU5hbWUpIHtcbiAgaWYgKCFzZWxlY3Rvcikge1xuICAgIHRocm93IG5ldyBFcnJvcignVW5leHBlY3RlZCB2YWx1ZSBmb3IgJyArIG1ldGhvZE5hbWUgKyAnIGluICcgKyBkaXNwbGF5TmFtZSArICcuJyk7XG4gIH0gZWxzZSBpZiAobWV0aG9kTmFtZSA9PT0gJ21hcFN0YXRlVG9Qcm9wcycgfHwgbWV0aG9kTmFtZSA9PT0gJ21hcERpc3BhdGNoVG9Qcm9wcycpIHtcbiAgICBpZiAoIXNlbGVjdG9yLmhhc093blByb3BlcnR5KCdkZXBlbmRzT25Pd25Qcm9wcycpKSB7XG4gICAgICB3YXJuaW5nKCdUaGUgc2VsZWN0b3IgZm9yICcgKyBtZXRob2ROYW1lICsgJyBvZiAnICsgZGlzcGxheU5hbWUgKyAnIGRpZCBub3Qgc3BlY2lmeSBhIHZhbHVlIGZvciBkZXBlbmRzT25Pd25Qcm9wcy4nKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5U3Vic2VsZWN0b3JzKG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2ZXJpZnkobWFwU3RhdGVUb1Byb3BzLCAnbWFwU3RhdGVUb1Byb3BzJywgZGlzcGxheU5hbWUpO1xuICB2ZXJpZnkobWFwRGlzcGF0Y2hUb1Byb3BzLCAnbWFwRGlzcGF0Y2hUb1Byb3BzJywgZGlzcGxheU5hbWUpO1xuICB2ZXJpZnkobWVyZ2VQcm9wcywgJ21lcmdlUHJvcHMnLCBkaXNwbGF5TmFtZSk7XG59IiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5pbXBvcnQgdmVyaWZ5U3Vic2VsZWN0b3JzIGZyb20gJy4vdmVyaWZ5U3Vic2VsZWN0b3JzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGltcHVyZUZpbmFsUHJvcHNTZWxlY3RvckZhY3RvcnkobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMsIGRpc3BhdGNoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBpbXB1cmVGaW5hbFByb3BzU2VsZWN0b3Ioc3RhdGUsIG93blByb3BzKSB7XG4gICAgcmV0dXJuIG1lcmdlUHJvcHMobWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcyksIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3duUHJvcHMpLCBvd25Qcm9wcyk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwdXJlRmluYWxQcm9wc1NlbGVjdG9yRmFjdG9yeShtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWVyZ2VQcm9wcywgZGlzcGF0Y2gsIF9yZWYpIHtcbiAgdmFyIGFyZVN0YXRlc0VxdWFsID0gX3JlZi5hcmVTdGF0ZXNFcXVhbCxcbiAgICAgIGFyZU93blByb3BzRXF1YWwgPSBfcmVmLmFyZU93blByb3BzRXF1YWwsXG4gICAgICBhcmVTdGF0ZVByb3BzRXF1YWwgPSBfcmVmLmFyZVN0YXRlUHJvcHNFcXVhbDtcblxuICB2YXIgaGFzUnVuQXRMZWFzdE9uY2UgPSBmYWxzZTtcbiAgdmFyIHN0YXRlID0gdm9pZCAwO1xuICB2YXIgb3duUHJvcHMgPSB2b2lkIDA7XG4gIHZhciBzdGF0ZVByb3BzID0gdm9pZCAwO1xuICB2YXIgZGlzcGF0Y2hQcm9wcyA9IHZvaWQgMDtcbiAgdmFyIG1lcmdlZFByb3BzID0gdm9pZCAwO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUZpcnN0Q2FsbChmaXJzdFN0YXRlLCBmaXJzdE93blByb3BzKSB7XG4gICAgc3RhdGUgPSBmaXJzdFN0YXRlO1xuICAgIG93blByb3BzID0gZmlyc3RPd25Qcm9wcztcbiAgICBzdGF0ZVByb3BzID0gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcyk7XG4gICAgZGlzcGF0Y2hQcm9wcyA9IG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3duUHJvcHMpO1xuICAgIG1lcmdlZFByb3BzID0gbWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcyk7XG4gICAgaGFzUnVuQXRMZWFzdE9uY2UgPSB0cnVlO1xuICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU5ld1Byb3BzQW5kTmV3U3RhdGUoKSB7XG4gICAgc3RhdGVQcm9wcyA9IG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpO1xuXG4gICAgaWYgKG1hcERpc3BhdGNoVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcykgZGlzcGF0Y2hQcm9wcyA9IG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3duUHJvcHMpO1xuXG4gICAgbWVyZ2VkUHJvcHMgPSBtZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKTtcbiAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVOZXdQcm9wcygpIHtcbiAgICBpZiAobWFwU3RhdGVUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzKSBzdGF0ZVByb3BzID0gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcyk7XG5cbiAgICBpZiAobWFwRGlzcGF0Y2hUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzKSBkaXNwYXRjaFByb3BzID0gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoLCBvd25Qcm9wcyk7XG5cbiAgICBtZXJnZWRQcm9wcyA9IG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpO1xuICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU5ld1N0YXRlKCkge1xuICAgIHZhciBuZXh0U3RhdGVQcm9wcyA9IG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpO1xuICAgIHZhciBzdGF0ZVByb3BzQ2hhbmdlZCA9ICFhcmVTdGF0ZVByb3BzRXF1YWwobmV4dFN0YXRlUHJvcHMsIHN0YXRlUHJvcHMpO1xuICAgIHN0YXRlUHJvcHMgPSBuZXh0U3RhdGVQcm9wcztcblxuICAgIGlmIChzdGF0ZVByb3BzQ2hhbmdlZCkgbWVyZ2VkUHJvcHMgPSBtZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKTtcblxuICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVN1YnNlcXVlbnRDYWxscyhuZXh0U3RhdGUsIG5leHRPd25Qcm9wcykge1xuICAgIHZhciBwcm9wc0NoYW5nZWQgPSAhYXJlT3duUHJvcHNFcXVhbChuZXh0T3duUHJvcHMsIG93blByb3BzKTtcbiAgICB2YXIgc3RhdGVDaGFuZ2VkID0gIWFyZVN0YXRlc0VxdWFsKG5leHRTdGF0ZSwgc3RhdGUpO1xuICAgIHN0YXRlID0gbmV4dFN0YXRlO1xuICAgIG93blByb3BzID0gbmV4dE93blByb3BzO1xuXG4gICAgaWYgKHByb3BzQ2hhbmdlZCAmJiBzdGF0ZUNoYW5nZWQpIHJldHVybiBoYW5kbGVOZXdQcm9wc0FuZE5ld1N0YXRlKCk7XG4gICAgaWYgKHByb3BzQ2hhbmdlZCkgcmV0dXJuIGhhbmRsZU5ld1Byb3BzKCk7XG4gICAgaWYgKHN0YXRlQ2hhbmdlZCkgcmV0dXJuIGhhbmRsZU5ld1N0YXRlKCk7XG4gICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHB1cmVGaW5hbFByb3BzU2VsZWN0b3IobmV4dFN0YXRlLCBuZXh0T3duUHJvcHMpIHtcbiAgICByZXR1cm4gaGFzUnVuQXRMZWFzdE9uY2UgPyBoYW5kbGVTdWJzZXF1ZW50Q2FsbHMobmV4dFN0YXRlLCBuZXh0T3duUHJvcHMpIDogaGFuZGxlRmlyc3RDYWxsKG5leHRTdGF0ZSwgbmV4dE93blByb3BzKTtcbiAgfTtcbn1cblxuLy8gVE9ETzogQWRkIG1vcmUgY29tbWVudHNcblxuLy8gSWYgcHVyZSBpcyB0cnVlLCB0aGUgc2VsZWN0b3IgcmV0dXJuZWQgYnkgc2VsZWN0b3JGYWN0b3J5IHdpbGwgbWVtb2l6ZSBpdHMgcmVzdWx0cyxcbi8vIGFsbG93aW5nIGNvbm5lY3RBZHZhbmNlZCdzIHNob3VsZENvbXBvbmVudFVwZGF0ZSB0byByZXR1cm4gZmFsc2UgaWYgZmluYWxcbi8vIHByb3BzIGhhdmUgbm90IGNoYW5nZWQuIElmIGZhbHNlLCB0aGUgc2VsZWN0b3Igd2lsbCBhbHdheXMgcmV0dXJuIGEgbmV3XG4vLyBvYmplY3QgYW5kIHNob3VsZENvbXBvbmVudFVwZGF0ZSB3aWxsIGFsd2F5cyByZXR1cm4gdHJ1ZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmluYWxQcm9wc1NlbGVjdG9yRmFjdG9yeShkaXNwYXRjaCwgX3JlZjIpIHtcbiAgdmFyIGluaXRNYXBTdGF0ZVRvUHJvcHMgPSBfcmVmMi5pbml0TWFwU3RhdGVUb1Byb3BzLFxuICAgICAgaW5pdE1hcERpc3BhdGNoVG9Qcm9wcyA9IF9yZWYyLmluaXRNYXBEaXNwYXRjaFRvUHJvcHMsXG4gICAgICBpbml0TWVyZ2VQcm9wcyA9IF9yZWYyLmluaXRNZXJnZVByb3BzLFxuICAgICAgb3B0aW9ucyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmMiwgWydpbml0TWFwU3RhdGVUb1Byb3BzJywgJ2luaXRNYXBEaXNwYXRjaFRvUHJvcHMnLCAnaW5pdE1lcmdlUHJvcHMnXSk7XG5cbiAgdmFyIG1hcFN0YXRlVG9Qcm9wcyA9IGluaXRNYXBTdGF0ZVRvUHJvcHMoZGlzcGF0Y2gsIG9wdGlvbnMpO1xuICB2YXIgbWFwRGlzcGF0Y2hUb1Byb3BzID0gaW5pdE1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3B0aW9ucyk7XG4gIHZhciBtZXJnZVByb3BzID0gaW5pdE1lcmdlUHJvcHMoZGlzcGF0Y2gsIG9wdGlvbnMpO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdmVyaWZ5U3Vic2VsZWN0b3JzKG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzLCBvcHRpb25zLmRpc3BsYXlOYW1lKTtcbiAgfVxuXG4gIHZhciBzZWxlY3RvckZhY3RvcnkgPSBvcHRpb25zLnB1cmUgPyBwdXJlRmluYWxQcm9wc1NlbGVjdG9yRmFjdG9yeSA6IGltcHVyZUZpbmFsUHJvcHNTZWxlY3RvckZhY3Rvcnk7XG5cbiAgcmV0dXJuIHNlbGVjdG9yRmFjdG9yeShtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWVyZ2VQcm9wcywgZGlzcGF0Y2gsIG9wdGlvbnMpO1xufSIsInZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuaW1wb3J0IGNvbm5lY3RBZHZhbmNlZCBmcm9tICcuLi9jb21wb25lbnRzL2Nvbm5lY3RBZHZhbmNlZCc7XG5pbXBvcnQgc2hhbGxvd0VxdWFsIGZyb20gJy4uL3V0aWxzL3NoYWxsb3dFcXVhbCc7XG5pbXBvcnQgZGVmYXVsdE1hcERpc3BhdGNoVG9Qcm9wc0ZhY3RvcmllcyBmcm9tICcuL21hcERpc3BhdGNoVG9Qcm9wcyc7XG5pbXBvcnQgZGVmYXVsdE1hcFN0YXRlVG9Qcm9wc0ZhY3RvcmllcyBmcm9tICcuL21hcFN0YXRlVG9Qcm9wcyc7XG5pbXBvcnQgZGVmYXVsdE1lcmdlUHJvcHNGYWN0b3JpZXMgZnJvbSAnLi9tZXJnZVByb3BzJztcbmltcG9ydCBkZWZhdWx0U2VsZWN0b3JGYWN0b3J5IGZyb20gJy4vc2VsZWN0b3JGYWN0b3J5JztcblxuLypcbiAgY29ubmVjdCBpcyBhIGZhY2FkZSBvdmVyIGNvbm5lY3RBZHZhbmNlZC4gSXQgdHVybnMgaXRzIGFyZ3MgaW50byBhIGNvbXBhdGlibGVcbiAgc2VsZWN0b3JGYWN0b3J5LCB3aGljaCBoYXMgdGhlIHNpZ25hdHVyZTpcblxuICAgIChkaXNwYXRjaCwgb3B0aW9ucykgPT4gKG5leHRTdGF0ZSwgbmV4dE93blByb3BzKSA9PiBuZXh0RmluYWxQcm9wc1xuICBcbiAgY29ubmVjdCBwYXNzZXMgaXRzIGFyZ3MgdG8gY29ubmVjdEFkdmFuY2VkIGFzIG9wdGlvbnMsIHdoaWNoIHdpbGwgaW4gdHVybiBwYXNzIHRoZW0gdG9cbiAgc2VsZWN0b3JGYWN0b3J5IGVhY2ggdGltZSBhIENvbm5lY3QgY29tcG9uZW50IGluc3RhbmNlIGlzIGluc3RhbnRpYXRlZCBvciBob3QgcmVsb2FkZWQuXG5cbiAgc2VsZWN0b3JGYWN0b3J5IHJldHVybnMgYSBmaW5hbCBwcm9wcyBzZWxlY3RvciBmcm9tIGl0cyBtYXBTdGF0ZVRvUHJvcHMsXG4gIG1hcFN0YXRlVG9Qcm9wc0ZhY3RvcmllcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHNGYWN0b3JpZXMsIG1lcmdlUHJvcHMsXG4gIG1lcmdlUHJvcHNGYWN0b3JpZXMsIGFuZCBwdXJlIGFyZ3MuXG5cbiAgVGhlIHJlc3VsdGluZyBmaW5hbCBwcm9wcyBzZWxlY3RvciBpcyBjYWxsZWQgYnkgdGhlIENvbm5lY3QgY29tcG9uZW50IGluc3RhbmNlIHdoZW5ldmVyXG4gIGl0IHJlY2VpdmVzIG5ldyBwcm9wcyBvciBzdG9yZSBzdGF0ZS5cbiAqL1xuXG5mdW5jdGlvbiBtYXRjaChhcmcsIGZhY3RvcmllcywgbmFtZSkge1xuICBmb3IgKHZhciBpID0gZmFjdG9yaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIHJlc3VsdCA9IGZhY3Rvcmllc1tpXShhcmcpO1xuICAgIGlmIChyZXN1bHQpIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoLCBvcHRpb25zKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHZhbHVlIG9mIHR5cGUgJyArIHR5cGVvZiBhcmcgKyAnIGZvciAnICsgbmFtZSArICcgYXJndW1lbnQgd2hlbiBjb25uZWN0aW5nIGNvbXBvbmVudCAnICsgb3B0aW9ucy53cmFwcGVkQ29tcG9uZW50TmFtZSArICcuJyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHN0cmljdEVxdWFsKGEsIGIpIHtcbiAgcmV0dXJuIGEgPT09IGI7XG59XG5cbi8vIGNyZWF0ZUNvbm5lY3Qgd2l0aCBkZWZhdWx0IGFyZ3MgYnVpbGRzIHRoZSAnb2ZmaWNpYWwnIGNvbm5lY3QgYmVoYXZpb3IuIENhbGxpbmcgaXQgd2l0aFxuLy8gZGlmZmVyZW50IG9wdGlvbnMgb3BlbnMgdXAgc29tZSB0ZXN0aW5nIGFuZCBleHRlbnNpYmlsaXR5IHNjZW5hcmlvc1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbm5lY3QoKSB7XG4gIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fSxcbiAgICAgIF9yZWYkY29ubmVjdEhPQyA9IF9yZWYuY29ubmVjdEhPQyxcbiAgICAgIGNvbm5lY3RIT0MgPSBfcmVmJGNvbm5lY3RIT0MgPT09IHVuZGVmaW5lZCA/IGNvbm5lY3RBZHZhbmNlZCA6IF9yZWYkY29ubmVjdEhPQyxcbiAgICAgIF9yZWYkbWFwU3RhdGVUb1Byb3BzRiA9IF9yZWYubWFwU3RhdGVUb1Byb3BzRmFjdG9yaWVzLFxuICAgICAgbWFwU3RhdGVUb1Byb3BzRmFjdG9yaWVzID0gX3JlZiRtYXBTdGF0ZVRvUHJvcHNGID09PSB1bmRlZmluZWQgPyBkZWZhdWx0TWFwU3RhdGVUb1Byb3BzRmFjdG9yaWVzIDogX3JlZiRtYXBTdGF0ZVRvUHJvcHNGLFxuICAgICAgX3JlZiRtYXBEaXNwYXRjaFRvUHJvID0gX3JlZi5tYXBEaXNwYXRjaFRvUHJvcHNGYWN0b3JpZXMsXG4gICAgICBtYXBEaXNwYXRjaFRvUHJvcHNGYWN0b3JpZXMgPSBfcmVmJG1hcERpc3BhdGNoVG9Qcm8gPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRNYXBEaXNwYXRjaFRvUHJvcHNGYWN0b3JpZXMgOiBfcmVmJG1hcERpc3BhdGNoVG9Qcm8sXG4gICAgICBfcmVmJG1lcmdlUHJvcHNGYWN0b3IgPSBfcmVmLm1lcmdlUHJvcHNGYWN0b3JpZXMsXG4gICAgICBtZXJnZVByb3BzRmFjdG9yaWVzID0gX3JlZiRtZXJnZVByb3BzRmFjdG9yID09PSB1bmRlZmluZWQgPyBkZWZhdWx0TWVyZ2VQcm9wc0ZhY3RvcmllcyA6IF9yZWYkbWVyZ2VQcm9wc0ZhY3RvcixcbiAgICAgIF9yZWYkc2VsZWN0b3JGYWN0b3J5ID0gX3JlZi5zZWxlY3RvckZhY3RvcnksXG4gICAgICBzZWxlY3RvckZhY3RvcnkgPSBfcmVmJHNlbGVjdG9yRmFjdG9yeSA9PT0gdW5kZWZpbmVkID8gZGVmYXVsdFNlbGVjdG9yRmFjdG9yeSA6IF9yZWYkc2VsZWN0b3JGYWN0b3J5O1xuXG4gIHJldHVybiBmdW5jdGlvbiBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzKSB7XG4gICAgdmFyIF9yZWYyID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiB7fSxcbiAgICAgICAgX3JlZjIkcHVyZSA9IF9yZWYyLnB1cmUsXG4gICAgICAgIHB1cmUgPSBfcmVmMiRwdXJlID09PSB1bmRlZmluZWQgPyB0cnVlIDogX3JlZjIkcHVyZSxcbiAgICAgICAgX3JlZjIkYXJlU3RhdGVzRXF1YWwgPSBfcmVmMi5hcmVTdGF0ZXNFcXVhbCxcbiAgICAgICAgYXJlU3RhdGVzRXF1YWwgPSBfcmVmMiRhcmVTdGF0ZXNFcXVhbCA9PT0gdW5kZWZpbmVkID8gc3RyaWN0RXF1YWwgOiBfcmVmMiRhcmVTdGF0ZXNFcXVhbCxcbiAgICAgICAgX3JlZjIkYXJlT3duUHJvcHNFcXVhID0gX3JlZjIuYXJlT3duUHJvcHNFcXVhbCxcbiAgICAgICAgYXJlT3duUHJvcHNFcXVhbCA9IF9yZWYyJGFyZU93blByb3BzRXF1YSA9PT0gdW5kZWZpbmVkID8gc2hhbGxvd0VxdWFsIDogX3JlZjIkYXJlT3duUHJvcHNFcXVhLFxuICAgICAgICBfcmVmMiRhcmVTdGF0ZVByb3BzRXEgPSBfcmVmMi5hcmVTdGF0ZVByb3BzRXF1YWwsXG4gICAgICAgIGFyZVN0YXRlUHJvcHNFcXVhbCA9IF9yZWYyJGFyZVN0YXRlUHJvcHNFcSA9PT0gdW5kZWZpbmVkID8gc2hhbGxvd0VxdWFsIDogX3JlZjIkYXJlU3RhdGVQcm9wc0VxLFxuICAgICAgICBfcmVmMiRhcmVNZXJnZWRQcm9wc0UgPSBfcmVmMi5hcmVNZXJnZWRQcm9wc0VxdWFsLFxuICAgICAgICBhcmVNZXJnZWRQcm9wc0VxdWFsID0gX3JlZjIkYXJlTWVyZ2VkUHJvcHNFID09PSB1bmRlZmluZWQgPyBzaGFsbG93RXF1YWwgOiBfcmVmMiRhcmVNZXJnZWRQcm9wc0UsXG4gICAgICAgIGV4dHJhT3B0aW9ucyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmMiwgWydwdXJlJywgJ2FyZVN0YXRlc0VxdWFsJywgJ2FyZU93blByb3BzRXF1YWwnLCAnYXJlU3RhdGVQcm9wc0VxdWFsJywgJ2FyZU1lcmdlZFByb3BzRXF1YWwnXSk7XG5cbiAgICB2YXIgaW5pdE1hcFN0YXRlVG9Qcm9wcyA9IG1hdGNoKG1hcFN0YXRlVG9Qcm9wcywgbWFwU3RhdGVUb1Byb3BzRmFjdG9yaWVzLCAnbWFwU3RhdGVUb1Byb3BzJyk7XG4gICAgdmFyIGluaXRNYXBEaXNwYXRjaFRvUHJvcHMgPSBtYXRjaChtYXBEaXNwYXRjaFRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wc0ZhY3RvcmllcywgJ21hcERpc3BhdGNoVG9Qcm9wcycpO1xuICAgIHZhciBpbml0TWVyZ2VQcm9wcyA9IG1hdGNoKG1lcmdlUHJvcHMsIG1lcmdlUHJvcHNGYWN0b3JpZXMsICdtZXJnZVByb3BzJyk7XG5cbiAgICByZXR1cm4gY29ubmVjdEhPQyhzZWxlY3RvckZhY3RvcnksIF9leHRlbmRzKHtcbiAgICAgIC8vIHVzZWQgaW4gZXJyb3IgbWVzc2FnZXNcbiAgICAgIG1ldGhvZE5hbWU6ICdjb25uZWN0JyxcblxuICAgICAgLy8gdXNlZCB0byBjb21wdXRlIENvbm5lY3QncyBkaXNwbGF5TmFtZSBmcm9tIHRoZSB3cmFwcGVkIGNvbXBvbmVudCdzIGRpc3BsYXlOYW1lLlxuICAgICAgZ2V0RGlzcGxheU5hbWU6IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuICdDb25uZWN0KCcgKyBuYW1lICsgJyknO1xuICAgICAgfSxcblxuICAgICAgLy8gaWYgbWFwU3RhdGVUb1Byb3BzIGlzIGZhbHN5LCB0aGUgQ29ubmVjdCBjb21wb25lbnQgZG9lc24ndCBzdWJzY3JpYmUgdG8gc3RvcmUgc3RhdGUgY2hhbmdlc1xuICAgICAgc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzOiBCb29sZWFuKG1hcFN0YXRlVG9Qcm9wcyksXG5cbiAgICAgIC8vIHBhc3NlZCB0aHJvdWdoIHRvIHNlbGVjdG9yRmFjdG9yeVxuICAgICAgaW5pdE1hcFN0YXRlVG9Qcm9wczogaW5pdE1hcFN0YXRlVG9Qcm9wcyxcbiAgICAgIGluaXRNYXBEaXNwYXRjaFRvUHJvcHM6IGluaXRNYXBEaXNwYXRjaFRvUHJvcHMsXG4gICAgICBpbml0TWVyZ2VQcm9wczogaW5pdE1lcmdlUHJvcHMsXG4gICAgICBwdXJlOiBwdXJlLFxuICAgICAgYXJlU3RhdGVzRXF1YWw6IGFyZVN0YXRlc0VxdWFsLFxuICAgICAgYXJlT3duUHJvcHNFcXVhbDogYXJlT3duUHJvcHNFcXVhbCxcbiAgICAgIGFyZVN0YXRlUHJvcHNFcXVhbDogYXJlU3RhdGVQcm9wc0VxdWFsLFxuICAgICAgYXJlTWVyZ2VkUHJvcHNFcXVhbDogYXJlTWVyZ2VkUHJvcHNFcXVhbFxuXG4gICAgfSwgZXh0cmFPcHRpb25zKSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbm5lY3QoKTsiLCJpbXBvcnQgUHJvdmlkZXIsIHsgY3JlYXRlUHJvdmlkZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvUHJvdmlkZXInO1xuaW1wb3J0IGNvbm5lY3RBZHZhbmNlZCBmcm9tICcuL2NvbXBvbmVudHMvY29ubmVjdEFkdmFuY2VkJztcbmltcG9ydCBjb25uZWN0IGZyb20gJy4vY29ubmVjdC9jb25uZWN0JztcblxuZXhwb3J0IHsgUHJvdmlkZXIsIGNyZWF0ZVByb3ZpZGVyLCBjb25uZWN0QWR2YW5jZWQsIGNvbm5lY3QgfTsiLCJmdW5jdGlvbiBjcmVhdGVUaHVua01pZGRsZXdhcmUoZXh0cmFBcmd1bWVudCkge1xuICByZXR1cm4gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgZGlzcGF0Y2ggPSBfcmVmLmRpc3BhdGNoLFxuICAgICAgICBnZXRTdGF0ZSA9IF9yZWYuZ2V0U3RhdGU7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICBpZiAodHlwZW9mIGFjdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJldHVybiBhY3Rpb24oZGlzcGF0Y2gsIGdldFN0YXRlLCBleHRyYUFyZ3VtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXh0KGFjdGlvbik7XG4gICAgICB9O1xuICAgIH07XG4gIH07XG59XG5cbnZhciB0aHVuayA9IGNyZWF0ZVRodW5rTWlkZGxld2FyZSgpO1xudGh1bmsud2l0aEV4dHJhQXJndW1lbnQgPSBjcmVhdGVUaHVua01pZGRsZXdhcmU7XG5cbmV4cG9ydCBkZWZhdWx0IHRodW5rOyIsImltcG9ydCB7IEdyaWQsIEdyaWRWYWx1ZSwgR2FtZURpZmZpY3VsdHkgfSBmcm9tIFwiLi4vbW9kZWxcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGphY2VudFRvU2FmZVNwb3QoeDogbnVtYmVyLCB5OiBudW1iZXIsIHNhZmVYOiBudW1iZXIsIHNhZmVZOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIGZvciAobGV0IGkgPSBzYWZlWCAtIDE7IGkgPCBzYWZlWCArIDI7IGkrKykge1xyXG4gICAgICAgIGZvciAobGV0IGogPSBzYWZlWSAtIDE7IGogPCBzYWZlWSArIDI7IGorKykge1xyXG4gICAgICAgICAgICBpZiAoeCA9PSBpICYmIHkgPT0gaikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDZWxsKGdyaWQ6IEdyaWQsIHg6IG51bWJlciwgeTogbnVtYmVyKTogR3JpZFZhbHVlIHtcclxuICAgIGlmIChpc0luR3JpZChncmlkLCB4LCB5KSkge1xyXG4gICAgICAgIHJldHVybiBncmlkLmNlbGxzW3hdW3ldO1xyXG4gICAgfVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKGAoJHt4fSwgJHt5fSkgaXMgbm90IGEgdmFsaWQgY29vcmRpbmF0ZSBpbiB0aGUgZ3JpZGApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0TWluZShncmlkOiBHcmlkLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgaWYgKGlzSW5HcmlkKGdyaWQsIHgsIHkpICYmICFncmlkLmNlbGxzW3hdW3ldLmlzTWluZSgpKSB7XHJcbiAgICAgICAgZ3JpZC5jZWxsc1t4XVt5XS5zZXRNaW5lKCk7XHJcbiAgICAgICAgZ3JpZCA9IGluY3JlbWVudFZhbHVlc0Fyb3VuZE1pbmUoZ3JpZCwgeCwgeSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbmNyZW1lbnRWYWx1ZXNBcm91bmRNaW5lKGdyaWQ6IEdyaWQsIG1pbmVYOiBudW1iZXIsIG1pbmVZOiBudW1iZXIpOiBHcmlkIHtcclxuICAgIGZvciAobGV0IGkgPSBtaW5lWCAtIDE7IGkgPCBtaW5lWCArIDI7IGkrKykge1xyXG4gICAgICAgIGZvciAobGV0IGogPSBtaW5lWSAtIDE7IGogPCBtaW5lWSArIDI7IGorKykge1xyXG4gICAgICAgICAgICBpZiAoaXNJbkdyaWQoZ3JpZCwgaSwgaikpIHtcclxuICAgICAgICAgICAgICAgIGdyaWQuY2VsbHNbaV1bal0uaW5jcmVtZW50KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZ3JpZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzSW5HcmlkKGdyaWQ6IEdyaWQsIHg6IG51bWJlciwgeTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKHggPj0gMCAmJiB4IDwgZ3JpZC5jb2x1bW5zKSAmJiAoeSA+PSAwICYmIHkgPCBncmlkLnJvd3MpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb3BlbkFkamFjZW50Q2VsbHMoZ3JpZDogR3JpZCwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBHcmlkIHtcclxuICAgIGZvciAobGV0IGkgPSB4IC0gMTsgaSA8IHggKyAyOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0geSAtIDE7IGogPCB5ICsgMjsgaisrKSB7XHJcbiAgICAgICAgICAgIG9wZW5DZWxsKGdyaWQsIGksIGopO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBncmlkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb3BlbkNlbGwoZ3JpZDogR3JpZCwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBHcmlkIHtcclxuICAgIGlmIChpc0luR3JpZChncmlkLCB4LCB5KSkge1xyXG4gICAgICAgIGNvbnN0IGNlbGwgPSBncmlkLmNlbGxzW3hdW3ldO1xyXG4gICAgICAgIGlmICghY2VsbC5vcGVuKSB7XHJcbiAgICAgICAgICAgIGNlbGwub3BlbiA9IHRydWU7XHJcbiAgICAgICAgICAgIGdyaWQub3BlbmVkQ2VsbHMrKztcclxuICAgICAgICAgICAgaWYgKGNlbGwuaXNNaW5lKCkpIHtcclxuICAgICAgICAgICAgICAgIGdyaWQub3Blbk1pbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNlbGwuaGFzTm9BZGphY2VudE1pbmUoKSkge1xyXG4gICAgICAgICAgICAgICAgZ3JpZCA9IG9wZW5BZGphY2VudENlbGxzKGdyaWQsIHgsIHkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGdyaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmbGFnQ2VsbChncmlkOiBHcmlkLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IEdyaWQge1xyXG4gICAgaWYgKGlzSW5HcmlkKGdyaWQsIHgsIHkpKSB7XHJcbiAgICAgICAgY29uc3QgY2VsbCA9IGdyaWQuY2VsbHNbeF1beV07XHJcbiAgICAgICAgKGNlbGwuZmxhZykgPyBncmlkLm51bUZsYWdzLS0gOiBncmlkLm51bUZsYWdzKys7XHJcbiAgICAgICAgY2VsbC5mbGFnID0gIWNlbGwuZmxhZztcclxuICAgIH1cclxuICAgIHJldHVybiBncmlkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2FtZVdvbihncmlkOiBHcmlkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZ3JpZC5vcGVuZWRDZWxscyA9PSBudW1DZWxscyhncmlkKSAtIGdyaWQubnVtTWluZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBudW1DZWxscyhncmlkOiBHcmlkKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBncmlkLnJvd3MgKiBncmlkLmNvbHVtbnM7XHJcbn1cclxuXHJcbi8qKiBSZXR1cm5zIHRoZSBudW1iZXIgb2Ygcm93cywgbnVtYmVyIG9mIGNvbHVtbnMsIGFuZCBudW1iZXIgb2YgbWluZXMgaW4gYSBsaXN0ICovXHJcbmV4cG9ydCBmdW5jdGlvbiBncmlkU2l6ZShkaWZmaWN1bHR5OiBHYW1lRGlmZmljdWx0eSk6IG51bWJlcltdIHtcclxuICAgIHN3aXRjaCAoZGlmZmljdWx0eSkge1xyXG4gICAgICAgIGNhc2UgXCJCZWdpbm5lclwiOiByZXR1cm4gWzksIDksIDEwXTtcclxuICAgICAgICBjYXNlIFwiSW50ZXJtZWRpYXRlXCI6IHJldHVybiBbMTYsIDE2LCA0MF07XHJcbiAgICAgICAgY2FzZSBcIkV4cGVydFwiOiByZXR1cm4gWzE2LCAzMCwgOTldO1xyXG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiBbOSwgOSwgMTBdO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vZ3JpZEhlbHBlcic7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmltcG9ydCB7IEdyaWQsIFN0b3JlIH0gZnJvbSAnLi4vbW9kZWwnO1xyXG5pbXBvcnQgeyBHcmlkQnV0dG9uIH0gZnJvbSAnLi8nO1xyXG5pbXBvcnQgeyBnZXRDZWxsIH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5cclxuaW50ZXJmYWNlIEdyaWRDb21wb25lbnRQcm9wcyB7XHJcbiAgICBnYW1lT3ZlcjogYm9vbGVhbjtcclxuICAgIHdpbjogYm9vbGVhblxyXG59XHJcblxyXG5pbnRlcmZhY2UgR3JpZENvbXBvbmVudFN0YXRlUHJvcHMge1xyXG4gICAgZ3JpZDogR3JpZDtcclxufVxyXG5cclxuZnVuY3Rpb24gR3JpZENvbXBvbmVudFZpZXcocHJvcHM6IEdyaWRDb21wb25lbnRQcm9wcyAmIEdyaWRDb21wb25lbnRTdGF0ZVByb3BzKSB7XHJcbiAgICBjb25zdCBncmlkID0gcHJvcHMuZ3JpZDtcclxuICAgIGNvbnN0IGdyaWRCdXR0b25zOiBKU1guRWxlbWVudFtdID0gW107XHJcbiAgICBmb3IgKGxldCByb3cgPSBncmlkLnJvd3MgLSAxOyAwIDw9IHJvdzsgcm93LS0pIHtcclxuICAgICAgICBjb25zdCByb3dCdXR0b25zOiBKU1guRWxlbWVudFtdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgZ3JpZC5jb2x1bW5zOyBjb2x1bW4rKykge1xyXG4gICAgICAgICAgICBjb25zdCBjZWxsID0gZ2V0Q2VsbChncmlkLCBjb2x1bW4sIHJvdyk7XHJcbiAgICAgICAgICAgIHJvd0J1dHRvbnMucHVzaCg8R3JpZEJ1dHRvbiBrZXk9e2Ake3Jvd30sICR7Y29sdW1ufWB9IGdyaWRWYWx1ZT17Y2VsbH0gb3Blbj17Y2VsbC5vcGVufSBmbGFnPXtjZWxsLmZsYWd9IGRpc2FibGVkPXtwcm9wcy5nYW1lT3ZlciB8fCBwcm9wcy53aW59IC8+KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ3JpZEJ1dHRvbnMucHVzaCg8ZGl2IGtleT17cm93fSBjbGFzc05hbWU9XCJidXR0b25zIGhhcy1hZGRvbnMgaXMtbWFyZ2lubGVzcyBpcy1jZW50ZXJlZFwiPntyb3dCdXR0b25zfTwvZGl2Pik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRcIj5cclxuICAgICAgICAgICAgICAgIHtncmlkQnV0dG9uc31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGU6IFN0b3JlKTogR3JpZENvbXBvbmVudFN0YXRlUHJvcHMge1xyXG4gICAgcmV0dXJuIHsgZ3JpZDogc3RhdGUuZ3JpZCB9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR3JpZENvbXBvbmVudCA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShHcmlkQ29tcG9uZW50Vmlldyk7XHJcbiIsImV4cG9ydCBjb25zdCBDSEFOR0VfRElGRklDVUxUWSA9ICdDSEFOR0VfRElGRklDVUxUWSc7XHJcbmV4cG9ydCBjb25zdCBGSVJTVF9DTElDSyA9ICdGSVJTVF9DTElDSyc7XHJcbmV4cG9ydCBjb25zdCBGTEFHX0NFTEwgPSAnRkxBR19DRUxMJztcclxuZXhwb3J0IGNvbnN0IEdBTUVfU0VUVVAgPSAnR0FNRV9TRVRVUCc7XHJcbmV4cG9ydCBjb25zdCBHUklEX1NFVFVQID0gJ0dSSURfU0VUVVAnO1xyXG5leHBvcnQgY29uc3QgR1JJRF9TRVRVUF9XSVRIX1NBRkVfU1BPVCA9ICdHUklEX1NFVFVQX1dJVEhfU0FGRV9TUE9UJztcclxuZXhwb3J0IGNvbnN0IE9QRU5fQURKQUNFTlRfQ0VMTFMgPSAnT1BFTl9BREpBQ0VOVF9DRUxMUyc7XHJcbmV4cG9ydCBjb25zdCBPUEVOX0NFTEwgPSAnT1BFTl9DRUxMJztcclxuIiwiaW1wb3J0IHsgR2FtZURpZmZpY3VsdHkgfSBmcm9tICcuLy4uL21vZGVsL2dhbWVTdGF0ZSc7XHJcbmltcG9ydCAqIGFzIEFjdGlvblR5cGVzIGZyb20gJy4vYWN0aW9uVHlwZXMnO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBBY3Rpb25zIHtcclxuICAgIGV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VEaWZmaWN1bHR5KGRpZmZpY3VsdHk6IEdhbWVEaWZmaWN1bHR5KTogeyB0eXBlOiBzdHJpbmcsIHBheWxvYWQ6IEdhbWVEaWZmaWN1bHR5IH0ge1xyXG4gICAgICAgIHJldHVybiB7IHR5cGU6IEFjdGlvblR5cGVzLkNIQU5HRV9ESUZGSUNVTFRZLCBwYXlsb2FkOiBkaWZmaWN1bHR5IH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gZmlyc3RDbGljaygpOiB7IHR5cGU6IHN0cmluZywgcGF5bG9hZDogYW55IH0ge1xyXG4gICAgICAgIHJldHVybiB7IHR5cGU6IEFjdGlvblR5cGVzLkZJUlNUX0NMSUNLLCBwYXlsb2FkOiBudWxsIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gZ2FtZVNldHVwKGRpZmZpY3VsdHk6IEdhbWVEaWZmaWN1bHR5KTogeyB0eXBlOiBzdHJpbmcsIHBheWxvYWQ6IEdhbWVEaWZmaWN1bHR5IH0ge1xyXG4gICAgICAgIHJldHVybiB7IHR5cGU6IEFjdGlvblR5cGVzLkdBTUVfU0VUVVAsIHBheWxvYWQ6IGRpZmZpY3VsdHkgfTtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gZ3JpZFNldHVwKGdyaWRTaXplOiBudW1iZXJbXSk6IHsgdHlwZTogc3RyaW5nLCBwYXlsb2FkOiBudW1iZXJbXSB9IHtcclxuICAgICAgICByZXR1cm4geyB0eXBlOiBBY3Rpb25UeXBlcy5HUklEX1NFVFVQLCBwYXlsb2FkOiBncmlkU2l6ZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBncmlkU2V0dXBXaXRoU2FmZVNwb3QoZ3JpZFNpemU6IG51bWJlcltdLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IHsgdHlwZTogc3RyaW5nLCBwYXlsb2FkOiB7IGdyaWRTaXplOiBudW1iZXJbXSwgeDogbnVtYmVyLCB5OiBudW1iZXIgfSB9IHtcclxuICAgICAgICByZXR1cm4geyB0eXBlOiBBY3Rpb25UeXBlcy5HUklEX1NFVFVQX1dJVEhfU0FGRV9TUE9ULCBwYXlsb2FkOiB7IGdyaWRTaXplLCB4LCB5IH0gfTtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gb3BlbkFkamFjZW50Q2VsbHMoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB7IHR5cGU6IHN0cmluZywgcGF5bG9hZDogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9IH0ge1xyXG4gICAgICAgIHJldHVybiB7IHR5cGU6IEFjdGlvblR5cGVzLk9QRU5fQURKQUNFTlRfQ0VMTFMsIHBheWxvYWQ6IHsgeCwgeSB9IH07XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIG9wZW5DZWxsKHg6IG51bWJlciwgeTogbnVtYmVyKTogeyB0eXBlOiBzdHJpbmcsIHBheWxvYWQ6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfSB9IHtcclxuICAgICAgICByZXR1cm4geyB0eXBlOiBBY3Rpb25UeXBlcy5PUEVOX0NFTEwsIHBheWxvYWQ6IHsgeCwgeSB9IH07XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGZsYWdDZWxsKHg6IG51bWJlciwgeTogbnVtYmVyKTogeyB0eXBlOiBzdHJpbmcsIHBheWxvYWQ6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfSB9IHtcclxuICAgICAgICByZXR1cm4geyB0eXBlOiBBY3Rpb25UeXBlcy5GTEFHX0NFTEwsIHBheWxvYWQ6IHsgeCwgeSB9IH07XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IHsgQWN0aW9ucyB9IGZyb20gJy4vYWN0aW9ucyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vYWN0aW9uVHlwZXMnO1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IERpc3BhdGNoIH0gZnJvbSAnLi4vLi4vbm9kZV9tb2R1bGVzL3JlZHV4JztcclxuaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBHYW1lU3RhdGUsIEdyaWRWYWx1ZSwgU3RvcmUgfSBmcm9tICcuLi9tb2RlbCc7XHJcbmltcG9ydCB7IGdyaWRTaXplIH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5cclxuaW50ZXJmYWNlIEdyaWRCdXR0b25Qcm9wcyB7XHJcbiAgICBncmlkVmFsdWU6IEdyaWRWYWx1ZTtcclxuICAgIG9wZW46IGJvb2xlYW47XHJcbiAgICBmbGFnOiBib29sZWFuO1xyXG4gICAgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbn1cclxuXHJcbmludGVyZmFjZSBHcmlkQnV0dG9uU3RhdGVQcm9wcyB7XHJcbiAgICBnYW1lU3RhdGU6IEdhbWVTdGF0ZTtcclxufVxyXG5cclxuaW50ZXJmYWNlIEdyaWRCdXR0b25EaXNwYXRjaFByb3BzIHtcclxuICAgIGdyaWRTZXR1cDogKGdyaWRTaXplOiBudW1iZXJbXSwgeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IGFueTtcclxuICAgIGZpcnN0Q2xpY2s6ICgpID0+IGFueTtcclxuICAgIGZsYWdDZWxsOiAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IGFueTtcclxuICAgIG9wZW5BZGphY2VudENlbGxzOiAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IGFueTtcclxuICAgIG9wZW5DZWxsOiAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IGFueTtcclxufVxyXG5cclxuZnVuY3Rpb24gR3JpZEJ1dHRvbkNvbXBvbmVudChwcm9wczogR3JpZEJ1dHRvblByb3BzICYgR3JpZEJ1dHRvblN0YXRlUHJvcHMgJiBHcmlkQnV0dG9uRGlzcGF0Y2hQcm9wcykge1xyXG4gICAgY29uc3QgY2VsbCA9IHByb3BzLmdyaWRWYWx1ZTtcclxuICAgIGlmIChwcm9wcy5vcGVuKSB7XHJcbiAgICAgICAgbGV0IGljb246IEpTWC5FbGVtZW50O1xyXG4gICAgICAgIGlmIChjZWxsLmlzTWluZSgpKSB7XHJcbiAgICAgICAgICAgIGljb24gPSA8c3BhbiBjbGFzc05hbWU9XCJpY29uXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYm9tYiBmYS1sZ1wiPjwvaT5cclxuICAgICAgICAgICAgPC9zcGFuPjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBjZWxsVGV4dCA9IGNlbGwudmFsdWUgPT0gMCA/IFwiXCIgOiBjZWxsLnZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBjZWxsQ29sb3VyID0gZ2V0Q2VsbFRleHRDb2xvdXIoY2VsbFRleHQpXHJcbiAgICAgICAgICAgIGljb24gPSA8c3BhbiBjbGFzc05hbWU9e2BpY29uICR7Y2VsbENvbG91cn0gaGFzLXRleHQtd2VpZ2h0LWJvbGRgfT5cclxuICAgICAgICAgICAgICAgIHtjZWxsVGV4dH1cclxuICAgICAgICAgICAgPC9zcGFuPjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXNtYWxsIGlzLW1hcmdpbmxlc3MgaXMtc3RhdGljXCI+XHJcbiAgICAgICAgICAgIHtpY29ufVxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgZmxhZ0NlbGwgPSAocHJvcHMuZGlzYWJsZWQpID8gZGlzYWJsZUNvbnRleHRNZW51IDogKGU6IGFueSkgPT4gb25SaWdodENsaWNrSGFuZGxlcihlLCBwcm9wcy5ncmlkVmFsdWUsIHByb3BzLmZsYWdDZWxsKTtcclxuICAgICAgICBpZiAocHJvcHMuZmxhZykge1xyXG4gICAgICAgICAgICByZXR1cm4gPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gaXMtc21hbGwgaXMtbWFyZ2lubGVzc1wiIGRpc2FibGVkPXtwcm9wcy5kaXNhYmxlZH1cclxuICAgICAgICAgICAgICAgIG9uQ29udGV4dE1lbnU9e2ZsYWdDZWxsfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZmxhZyBmYS1sZyBoYXMtdGV4dC1yZWRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gaXMtc21hbGwgaXMtb3V0bGluZWQgaXMtbWFyZ2lubGVzc1wiIGRpc2FibGVkPXtwcm9wcy5kaXNhYmxlZH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2tIYW5kbGVyKHByb3BzKX0gb25Db250ZXh0TWVudT17ZmxhZ0NlbGx9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvblwiIC8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uQ2xpY2tIYW5kbGVyKHByb3BzOiBHcmlkQnV0dG9uUHJvcHMgJiBHcmlkQnV0dG9uU3RhdGVQcm9wcyAmIEdyaWRCdXR0b25EaXNwYXRjaFByb3BzKSB7XHJcbiAgICBjb25zdCB4ID0gcHJvcHMuZ3JpZFZhbHVlLng7XHJcbiAgICBjb25zdCB5ID0gcHJvcHMuZ3JpZFZhbHVlLnlcclxuICAgIGlmIChwcm9wcy5nYW1lU3RhdGUuZmlyc3RDbGljaykge1xyXG4gICAgICAgIC8vIGNyZWF0ZSBncmlkLCBzZXQgZmlyc3RDbGljayB0byBmYWxzZVxyXG4gICAgICAgIHByb3BzLmdyaWRTZXR1cChncmlkU2l6ZShwcm9wcy5nYW1lU3RhdGUuZGlmZmljdWx0eSksIHgsIHkpO1xyXG4gICAgICAgIHByb3BzLmZpcnN0Q2xpY2soKTtcclxuICAgIH1cclxuICAgIHByb3BzLm9wZW5DZWxsKHgsIHkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvblJpZ2h0Q2xpY2tIYW5kbGVyKGU6IGFueSwgZ3JpZFZhbHVlOiBHcmlkVmFsdWUsIGZsYWdDZWxsOiAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IGFueSkge1xyXG4gICAgZGlzYWJsZUNvbnRleHRNZW51KGUpO1xyXG4gICAgZmxhZ0NlbGwoZ3JpZFZhbHVlLngsIGdyaWRWYWx1ZS55KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzYWJsZUNvbnRleHRNZW51KGU6IGFueSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDZWxsVGV4dENvbG91cihjZWxsVGV4dDogbnVtYmVyIHwgc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHN3aXRjaCAoY2VsbFRleHQpIHtcclxuICAgICAgICBjYXNlIDE6IHJldHVybiBcImhhcy10ZXh0LWJsdWVcIlxyXG4gICAgICAgIGNhc2UgMjogcmV0dXJuIFwiaGFzLXRleHQtZ3JlZW5cIlxyXG4gICAgICAgIGNhc2UgMzogcmV0dXJuIFwiaGFzLXRleHQtcmVkXCJcclxuICAgICAgICBjYXNlIDQ6IHJldHVybiBcImhhcy10ZXh0LXB1cnBsZVwiXHJcbiAgICAgICAgY2FzZSA1OiByZXR1cm4gXCJoYXMtdGV4dC1vcmFuZ2VcIlxyXG4gICAgICAgIGNhc2UgNjogcmV0dXJuIFwiaGFzLXRleHQtY3lhblwiXHJcbiAgICAgICAgY2FzZSA3OiByZXR1cm4gXCJoYXMtdGV4dC15ZWxsb3dcIlxyXG4gICAgICAgIGNhc2UgODogcmV0dXJuIFwiaGFzLXRleHQtZ3JleVwiXHJcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIFwiaGFzLXRleHQtZGFya1wiXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZTogU3RvcmUpOiBHcmlkQnV0dG9uU3RhdGVQcm9wcyB7XHJcbiAgICByZXR1cm4geyBnYW1lU3RhdGU6IHN0YXRlLmdhbWVTdGF0ZSB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2g6IERpc3BhdGNoKTogR3JpZEJ1dHRvbkRpc3BhdGNoUHJvcHMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBncmlkU2V0dXA6IChncmlkU2l6ZTogbnVtYmVyW10sIHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiBkaXNwYXRjaChBY3Rpb25zLmdyaWRTZXR1cFdpdGhTYWZlU3BvdChncmlkU2l6ZSwgeCwgeSkpLFxyXG4gICAgICAgIGZpcnN0Q2xpY2s6ICgpID0+IGRpc3BhdGNoKEFjdGlvbnMuZmlyc3RDbGljaygpKSxcclxuICAgICAgICBmbGFnQ2VsbDogKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiBkaXNwYXRjaChBY3Rpb25zLmZsYWdDZWxsKHgsIHkpKSxcclxuICAgICAgICBvcGVuQWRqYWNlbnRDZWxsczogKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiBkaXNwYXRjaChBY3Rpb25zLm9wZW5BZGphY2VudENlbGxzKHgsIHkpKSxcclxuICAgICAgICBvcGVuQ2VsbDogKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiBkaXNwYXRjaChBY3Rpb25zLm9wZW5DZWxsKHgsIHkpKSxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdyaWRCdXR0b24gPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShHcmlkQnV0dG9uQ29tcG9uZW50KTtcclxuIiwiZXhwb3J0IGVudW0gR2FtZURpZmZpY3VsdHkge1xyXG4gICAgQmVnaW5uZXIgPSBcIkJlZ2lubmVyXCIsXHJcbiAgICBJbnRlcm1lZGlhdGUgPSBcIkludGVybWVkaWF0ZVwiLFxyXG4gICAgRXhwZXJ0ID0gXCJFeHBlcnRcIlxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9HYW1lRGlmZmljdWx0eShkaWZmaWN1bHR5OiBzdHJpbmcpOiBHYW1lRGlmZmljdWx0eSB7XHJcbiAgICBzd2l0Y2ggKGRpZmZpY3VsdHkpIHtcclxuICAgICAgICBjYXNlIFwiQmVnaW5uZXJcIjogcmV0dXJuIEdhbWVEaWZmaWN1bHR5LkJlZ2lubmVyO1xyXG4gICAgICAgIGNhc2UgXCJJbnRlcm1lZGlhdGVcIjogcmV0dXJuIEdhbWVEaWZmaWN1bHR5LkludGVybWVkaWF0ZTtcclxuICAgICAgICBjYXNlIFwiRXhwZXJ0XCI6IHJldHVybiBHYW1lRGlmZmljdWx0eS5FeHBlcnQ7XHJcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIEdhbWVEaWZmaWN1bHR5LkJlZ2lubmVyO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZVN0YXRlIHtcclxuICAgIGZpcnN0Q2xpY2s6IGJvb2xlYW47XHJcbiAgICBkaWZmaWN1bHR5OiBHYW1lRGlmZmljdWx0eTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihkaWZmaWN1bHR5OiBHYW1lRGlmZmljdWx0eSA9IEdhbWVEaWZmaWN1bHR5LkJlZ2lubmVyKSB7XHJcbiAgICAgICAgdGhpcy5maXJzdENsaWNrID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmRpZmZpY3VsdHkgPSBkaWZmaWN1bHR5O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEdyaWRWYWx1ZSB9IGZyb20gXCIuXCI7XHJcbmltcG9ydCB7IHNldE1pbmUsIGFkamFjZW50VG9TYWZlU3BvdCB9IGZyb20gXCIuLi91dGlsc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdyaWQge1xyXG5cclxuICAgIC8vIGNvbHVtbnMgPSBtYXggeC12YWx1ZSwgcm93cyA9IG1heCB5LXZhbHVlXHJcbiAgICByb3dzOiBudW1iZXI7XHJcbiAgICBjb2x1bW5zOiBudW1iZXI7XHJcbiAgICBudW1NaW5lczogbnVtYmVyO1xyXG4gICAgY2VsbHM6IEdyaWRWYWx1ZVtdW107XHJcbiAgICBvcGVuTWluZTogYm9vbGVhbjtcclxuICAgIG9wZW5lZENlbGxzOiBudW1iZXI7XHJcbiAgICBudW1GbGFnczogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKiBAcGFyYW0gcm93cyB0b3RhbCBudW1iZXIgb2Ygcm93cyBpbiBncmlkXHJcbiAgICAgKiBAcGFyYW0gY29sdW1ucyB0b3RhbCBudW1iZXIgb2YgY29sdW1ucyBpbiBncmlkXHJcbiAgICAgKiBAcGFyYW0gbnVtTWluZXMgdG90YWwgbnVtYmVyIG9mIG1pbmVzIGluIGdyaWRcclxuICAgICAqIEBwYXJhbSBzYWZlWCBjZWxscyBhZGphY2VudCB0byAoc2FmZVgsIHNhZmVZKSBzaG91bGQgbm90IGNvbnRhaW4gYSBtaW5lXHJcbiAgICAgKiBAcGFyYW0gc2FmZVlcclxuICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihyb3dzOiBudW1iZXIsIGNvbHVtbnM6IG51bWJlciwgbnVtTWluZXM6IG51bWJlciwgc2FmZVggPSAtMTAsIHNhZmVZID0gLTEwKSB7XHJcbiAgICAgICAgdGhpcy5yb3dzID0gcm93cztcclxuICAgICAgICB0aGlzLmNvbHVtbnMgPSBjb2x1bW5zO1xyXG4gICAgICAgIHRoaXMubnVtTWluZXMgPSBudW1NaW5lcztcclxuICAgICAgICB0aGlzLm9wZW5NaW5lID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vcGVuZWRDZWxscyA9IDA7XHJcbiAgICAgICAgdGhpcy5udW1GbGFncyA9IDA7XHJcblxyXG4gICAgICAgIC8vIGluaXRpYWxpemUgZ3JpZFxyXG4gICAgICAgIHRoaXMuY2VsbHMgPSBuZXcgQXJyYXkoY29sdW1ucyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2x1bW5zOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5jZWxsc1tpXSA9IG5ldyBBcnJheShyb3dzKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByb3dzOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2VsbHNbaV1bal0gPSBuZXcgR3JpZFZhbHVlKGksIGopO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTZXQgbWluZXNcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bU1pbmVzOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHg6IG51bWJlcjtcclxuICAgICAgICAgICAgbGV0IHk6IG51bWJlcjtcclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgeCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChjb2x1bW5zIC0gMSkpO1xyXG4gICAgICAgICAgICAgICAgeSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChyb3dzIC0gMSkpO1xyXG4gICAgICAgICAgICB9IHdoaWxlIChhZGphY2VudFRvU2FmZVNwb3QoeCwgeSwgc2FmZVgsIHNhZmVZKSB8fCAhc2V0TWluZSh0aGlzLCB4LCB5KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBHcmlkVmFsdWUge1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG4gICAgdmFsdWU6IG51bWJlcjtcclxuICAgIG1pbmU6IGJvb2xlYW47XHJcbiAgICBvcGVuOiBib29sZWFuO1xyXG4gICAgZmxhZzogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gMDtcclxuICAgICAgICB0aGlzLm1pbmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmZsYWcgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpbmNyZW1lbnQoKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSsrO1xyXG4gICAgfVxyXG5cclxuICAgIGlzTWluZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5taW5lO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE1pbmUoKSB7XHJcbiAgICAgICAgdGhpcy5taW5lID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBoYXNOb0FkamFjZW50TWluZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSA9PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlzRmxhZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mbGFnO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEdyaWQsIEdhbWVTdGF0ZSB9IGZyb20gXCIuXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3RvcmUge1xyXG4gICAgZ2FtZVN0YXRlOiBHYW1lU3RhdGU7XHJcbiAgICBncmlkOiBHcmlkO1xyXG59XHJcbiIsImV4cG9ydCB7IEdhbWVEaWZmaWN1bHR5LCBHYW1lU3RhdGUsIHRvR2FtZURpZmZpY3VsdHkgfSBmcm9tICcuL2dhbWVTdGF0ZSc7XHJcbmV4cG9ydCB7IEdyaWQgfSBmcm9tICcuL2dyaWQnO1xyXG5leHBvcnQgeyBHcmlkVmFsdWUgfSBmcm9tICcuL2dyaWRWYWx1ZSc7XHJcbmV4cG9ydCB7IFN0b3JlIH0gZnJvbSAnLi9zdG9yZSc7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgRGlzcGF0Y2ggfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IEFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zJztcclxuaW1wb3J0IHsgR2FtZURpZmZpY3VsdHksIEdhbWVTdGF0ZSwgR3JpZCwgU3RvcmUgfSBmcm9tICcuLi9tb2RlbCc7XHJcbmltcG9ydCB7IGdhbWVXb24sIGdyaWRTaXplLCBudW1DZWxscyB9IGZyb20gJy4uL3V0aWxzJztcclxuaW1wb3J0IHsgR3JpZENvbXBvbmVudCwgT3B0aW9uc01lbnUgfSBmcm9tICcuLyc7XHJcbmltcG9ydCAnLi9taW5lc3dlZXBlci5zY3NzJztcclxuXHJcblxyXG5pbnRlcmZhY2UgTWluZXN3ZWVwZXJTdGF0ZVByb3BzIHtcclxuICAgIGdhbWVTdGF0ZTogR2FtZVN0YXRlO1xyXG4gICAgZ3JpZDogR3JpZDtcclxufVxyXG5cclxuaW50ZXJmYWNlIE1pbmVzd2VlcGVyRGlzcGF0Y2hQcm9wcyB7XHJcbiAgICBnYW1lU2V0dXA6IChkaWZmaWN1bHR5PzogR2FtZURpZmZpY3VsdHkpID0+IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE1pbmVzd2VlcGVyVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxNaW5lc3dlZXBlclN0YXRlUHJvcHMgJiBNaW5lc3dlZXBlckRpc3BhdGNoUHJvcHMsIGFueT4ge1xyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMuZ2FtZVNldHVwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGdyaWQgPSB0aGlzLnByb3BzLmdyaWQ7XHJcbiAgICAgICAgY29uc3QgZ2FtZU92ZXIgPSBncmlkLm9wZW5NaW5lO1xyXG4gICAgICAgIGNvbnN0IHdpbiA9IGdhbWVXb24oZ3JpZCk7XHJcbiAgICAgICAgY29uc3QgdG90YWxTYWZlQ2VsbHMgPSBudW1DZWxscyhncmlkKSAtIGdyaWQubnVtTWluZXM7XHJcbiAgICAgICAgbGV0IHByb2dlc3NDb2xvdXJDbGFzcyA9IFwiXCI7XHJcbiAgICAgICAgaWYgKGdhbWVPdmVyKSB7XHJcbiAgICAgICAgICAgIHByb2dlc3NDb2xvdXJDbGFzcyA9IFwiaXMtZGFuZ2VyXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh3aW4pIHtcclxuICAgICAgICAgICAgcHJvZ2Vzc0NvbG91ckNsYXNzID0gXCJpcy1zdWNjZXNzXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sYmFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gaXMtcHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuZ2FtZVNldHVwKHRoaXMucHJvcHMuZ2FtZVN0YXRlLmRpZmZpY3VsdHkpfT5OZXcgR2FtZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uc01lbnUgZGlmZmljdWx0eT17dGhpcy5wcm9wcy5nYW1lU3RhdGUuZGlmZmljdWx0eX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW5lLWNvdW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYm9tYiBmYS1sZ1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgICR7Z3JpZC5udW1NaW5lcyAtIGdyaWQubnVtRmxhZ3N9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHByb2dyZXNzIGNsYXNzTmFtZT17YHByb2dyZXNzIGlzLXNtYWxsIHByb2dyZXNzLWxheW91dCAke3Byb2dlc3NDb2xvdXJDbGFzc31gfSB2YWx1ZT17Z3JpZC5vcGVuZWRDZWxsc30gbWF4PXt0b3RhbFNhZmVDZWxsc30gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPEdyaWRDb21wb25lbnQgZ2FtZU92ZXI9e2dhbWVPdmVyfSB3aW49e3dpbn0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlOiBTdG9yZSk6IE1pbmVzd2VlcGVyU3RhdGVQcm9wcyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdhbWVTdGF0ZTogc3RhdGUuZ2FtZVN0YXRlLFxyXG4gICAgICAgIGdyaWQ6IHN0YXRlLmdyaWRcclxuICAgIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaDogRGlzcGF0Y2gpOiBNaW5lc3dlZXBlckRpc3BhdGNoUHJvcHMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnYW1lU2V0dXA6IChkaWZmaWN1bHR5OiBHYW1lRGlmZmljdWx0eSA9IEdhbWVEaWZmaWN1bHR5LkJlZ2lubmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKEFjdGlvbnMuZ2FtZVNldHVwKGRpZmZpY3VsdHkpKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goQWN0aW9ucy5ncmlkU2V0dXAoZ3JpZFNpemUoZGlmZmljdWx0eSkpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE1pbmVzd2VlcGVyID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTWluZXN3ZWVwZXJWaWV3KTtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IERpc3BhdGNoIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IHsgR2FtZURpZmZpY3VsdHksIHRvR2FtZURpZmZpY3VsdHkgfSBmcm9tICcuLi9tb2RlbCc7XG5cbmludGVyZmFjZSBPcHRpb25zTWVudVByb3BzIHtcbiAgICBkaWZmaWN1bHR5OiBHYW1lRGlmZmljdWx0eTtcbn1cblxuaW50ZXJmYWNlIE9wdGlvbnNNZW51RGlzcGF0Y2hQcm9wcyB7XG4gICAgY2hhbmdlRGlmZmljdWx0eTogKGRpZmZpY3VsdHk6IEdhbWVEaWZmaWN1bHR5KSA9PiBhbnk7XG59XG5cbmZ1bmN0aW9uIE9wdGlvbnNNZW51Q29tcG9uZW50KHByb3BzOiBPcHRpb25zTWVudVByb3BzICYgT3B0aW9uc01lbnVEaXNwYXRjaFByb3BzKTogSlNYLkVsZW1lbnQge1xuICAgIGNvbnN0IGRyb3Bkb3duSXRlbXMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGRpZmZpY3VsdHkgaW4gR2FtZURpZmZpY3VsdHkpIHtcbiAgICAgICAgZHJvcGRvd25JdGVtcy5wdXNoKFxuICAgICAgICAgICAgPGEga2V5PXtkaWZmaWN1bHR5fSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgb25DbGljaz17KCkgPT4gcHJvcHMuY2hhbmdlRGlmZmljdWx0eSh0b0dhbWVEaWZmaWN1bHR5KGRpZmZpY3VsdHkpKX0+XG4gICAgICAgICAgICAgICAge2RpZmZpY3VsdHl9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93biBpcy1ob3ZlcmFibGVcIiA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLXRyaWdnZXJcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbiBkcm9wZG93bi1idXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbFwiIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxldmVsLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZGlmZmljdWx0eX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxldmVsLXJpZ2h0IGlzLXNtYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFuZ2xlLWRvd25cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCIgaWQ9XCJkcm9wZG93bi1tZW51XCIgcm9sZT1cIm1lbnVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAge2Ryb3Bkb3duSXRlbXN9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2g6IERpc3BhdGNoKTogT3B0aW9uc01lbnVEaXNwYXRjaFByb3BzIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjaGFuZ2VEaWZmaWN1bHR5OiAoZGlmZmljdWx0eTogR2FtZURpZmZpY3VsdHkpID0+IGRpc3BhdGNoKEFjdGlvbnMuY2hhbmdlRGlmZmljdWx0eShkaWZmaWN1bHR5KSlcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBPcHRpb25zTWVudSA9IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShPcHRpb25zTWVudUNvbXBvbmVudCk7XG4iLCJleHBvcnQgeyBHcmlkQ29tcG9uZW50IH0gZnJvbSBcIi4vZ3JpZENvbXBvbmVudFwiO1xyXG5leHBvcnQgeyBHcmlkQnV0dG9uIH0gZnJvbSBcIi4vZ3JpZEJ1dHRvblwiO1xyXG5leHBvcnQgeyBNaW5lc3dlZXBlciB9IGZyb20gXCIuL21pbmVzd2VlcGVyXCI7XHJcbmV4cG9ydCB7IE9wdGlvbnNNZW51IH0gZnJvbSBcIi4vb3B0aW9uc01lbnVcIjtcclxuIiwiaW1wb3J0IHsgQ0hBTkdFX0RJRkZJQ1VMVFksIEdBTUVfU0VUVVAsIEZJUlNUX0NMSUNLIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgR2FtZVN0YXRlIH0gZnJvbSBcIi4uL21vZGVsXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2FtZVN0YXRlUmVkdWNlcihzdGF0ZTogR2FtZVN0YXRlLCBhY3Rpb246IHsgdHlwZTogU3RyaW5nLCBwYXlsb2FkOiBhbnkgfSk6IEdhbWVTdGF0ZSB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBHQU1FX1NFVFVQOlxyXG4gICAgICAgICAgICBjb25zdCBkaWZmaWN1bHR5ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgR2FtZVN0YXRlKGRpZmZpY3VsdHkpO1xyXG4gICAgICAgIGNhc2UgQ0hBTkdFX0RJRkZJQ1VMVFk6XHJcbiAgICAgICAgICAgIGxldCBuZXdHYW1lU3RhdGUgPSB7IC4uLnN0YXRlIH07XHJcbiAgICAgICAgICAgIG5ld0dhbWVTdGF0ZS5kaWZmaWN1bHR5ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXdHYW1lU3RhdGU7XHJcbiAgICAgICAgY2FzZSBGSVJTVF9DTElDSzpcclxuICAgICAgICAgICAgbmV3R2FtZVN0YXRlID0geyAuLi5zdGF0ZSB9O1xyXG4gICAgICAgICAgICBuZXdHYW1lU3RhdGUuZmlyc3RDbGljayA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3R2FtZVN0YXRlO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiAoc3RhdGUpID8gc3RhdGUgOiBuZXcgR2FtZVN0YXRlKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRkxBR19DRUxMLCBHUklEX1NFVFVQX1dJVEhfU0FGRV9TUE9UIH0gZnJvbSAnLi8uLi9hY3Rpb25zL2FjdGlvblR5cGVzJztcclxuaW1wb3J0IHsgR3JpZCB9IGZyb20gXCIuLi9tb2RlbFwiO1xyXG5pbXBvcnQgeyBHUklEX1NFVFVQLCBPUEVOX0FESkFDRU5UX0NFTExTLCBPUEVOX0NFTEwgfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBvcGVuQWRqYWNlbnRDZWxscywgb3BlbkNlbGwsIGZsYWdDZWxsIH0gZnJvbSBcIi4uL3V0aWxzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ3JpZFJlZHVjZXIoc3RhdGU6IEdyaWQsIGFjdGlvbjogeyB0eXBlOiBTdHJpbmcsIHBheWxvYWQ6IGFueSB9KTogR3JpZCB7XHJcbiAgICBsZXQgbmV3U3RhdGU6IEdyaWQ7XHJcbiAgICBsZXQgeDogbnVtYmVyO1xyXG4gICAgbGV0IHk6IG51bWJlcjtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEdSSURfU0VUVVA6XHJcbiAgICAgICAgICAgIGxldCBbbnVtUm93cywgbnVtQ29sdW1ucywgbnVtTWluZXNdID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgR3JpZChudW1Sb3dzLCBudW1Db2x1bW5zLCBudW1NaW5lcyk7XHJcbiAgICAgICAgY2FzZSBHUklEX1NFVFVQX1dJVEhfU0FGRV9TUE9UOlxyXG4gICAgICAgICAgICBbbnVtUm93cywgbnVtQ29sdW1ucywgbnVtTWluZXNdID0gYWN0aW9uLnBheWxvYWQuZ3JpZFNpemU7XHJcbiAgICAgICAgICAgIHggPSBhY3Rpb24ucGF5bG9hZC54O1xyXG4gICAgICAgICAgICB5ID0gYWN0aW9uLnBheWxvYWQueTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBHcmlkKG51bVJvd3MsIG51bUNvbHVtbnMsIG51bU1pbmVzLCB4LCB5KTtcclxuICAgICAgICBjYXNlIE9QRU5fQURKQUNFTlRfQ0VMTFM6XHJcbiAgICAgICAgICAgIG5ld1N0YXRlID0geyAuLi5zdGF0ZSB9O1xyXG4gICAgICAgICAgICB4ID0gYWN0aW9uLnBheWxvYWQueDtcclxuICAgICAgICAgICAgeSA9IGFjdGlvbi5wYXlsb2FkLnk7XHJcbiAgICAgICAgICAgIHJldHVybiBvcGVuQWRqYWNlbnRDZWxscyhuZXdTdGF0ZSwgeCwgeSk7XHJcbiAgICAgICAgY2FzZSBPUEVOX0NFTEw6XHJcbiAgICAgICAgICAgIG5ld1N0YXRlID0geyAuLi5zdGF0ZSB9O1xyXG4gICAgICAgICAgICB4ID0gYWN0aW9uLnBheWxvYWQueDtcclxuICAgICAgICAgICAgeSA9IGFjdGlvbi5wYXlsb2FkLnk7XHJcbiAgICAgICAgICAgIHJldHVybiBvcGVuQ2VsbChuZXdTdGF0ZSwgeCwgeSk7XHJcbiAgICAgICAgY2FzZSBGTEFHX0NFTEw6XHJcbiAgICAgICAgICAgIG5ld1N0YXRlID0geyAuLi5zdGF0ZSB9O1xyXG4gICAgICAgICAgICB4ID0gYWN0aW9uLnBheWxvYWQueDtcclxuICAgICAgICAgICAgeSA9IGFjdGlvbi5wYXlsb2FkLnk7XHJcbiAgICAgICAgICAgIHJldHVybiBmbGFnQ2VsbChuZXdTdGF0ZSwgeCwgeSk7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIChzdGF0ZSkgPyBzdGF0ZSA6IG5ldyBHcmlkKDEsIDEsIDApO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgZ2FtZVN0YXRlUmVkdWNlciwgZ3JpZFJlZHVjZXIgfSBmcm9tICcuLyc7XHJcblxyXG5leHBvcnQgY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgZ2FtZVN0YXRlOiBnYW1lU3RhdGVSZWR1Y2VyLFxyXG4gICAgZ3JpZDogZ3JpZFJlZHVjZXJcclxufSk7XHJcbiIsImV4cG9ydCB7IGdhbWVTdGF0ZVJlZHVjZXIgfSBmcm9tICcuL2dhbWVTdGF0ZVJlZHVjZXInO1xyXG5leHBvcnQgeyBncmlkUmVkdWNlciB9IGZyb20gJy4vZ3JpZFJlZHVjZXInO1xyXG5leHBvcnQgeyByb290UmVkdWNlciB9IGZyb20gJy4vcm9vdFJlZHVjZXInO1xyXG4iLCJpbXBvcnQgJy4vaW5kZXguY3NzJztcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XHJcblxyXG5pbXBvcnQgeyBNaW5lc3dlZXBlciB9IGZyb20gJy4vY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHJvb3RSZWR1Y2VyIH0gZnJvbSAnLi9yZWR1Y2Vycyc7XHJcbmltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XHJcblxyXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBhcHBseU1pZGRsZXdhcmUodGh1bmspKTtcclxuXHJcbnJlbmRlcihcclxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfSA+XHJcbiAgICA8TWluZXN3ZWVwZXIgLz5cclxuICA8L1Byb3ZpZGVyPixcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIiksXHJcbik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=