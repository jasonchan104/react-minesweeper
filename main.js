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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
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

if (false) { var throwOnDirectAccess, ReactIs; } else {
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(17);
} else {}


/***/ }),
/* 4 */
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6), __webpack_require__(18)(module)))

/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var ReactIs = __webpack_require__(3);
var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
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

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
};

var MEMO_STATICS = {
    '$$typeof': true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
};

var TYPE_STATICS = {};
TYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;

function getStatics(component) {
    if (ReactIs.isMemo(component)) {
        return MEMO_STATICS;
    }
    return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

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

        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
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
/** @license React v16.8.6
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var k=__webpack_require__(5),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.concurrent_mode"):60111,y=n?Symbol.for("react.forward_ref"):60112,z=n?Symbol.for("react.suspense"):60113,aa=n?Symbol.for("react.memo"):
60115,ba=n?Symbol.for("react.lazy"):60116,A="function"===typeof Symbol&&Symbol.iterator;function ca(a,b,d,c,e,g,h,f){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[d,c,e,g,h,f],m=0;a=Error(b.replace(/%s/g,function(){return l[m++]}));a.name="Invariant Violation"}a.framesToPop=1;throw a;}}
function B(a){for(var b=arguments.length-1,d="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=0;c<b;c++)d+="&args[]="+encodeURIComponent(arguments[c+1]);ca(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",d)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D={};
function E(a,b,d){this.props=a;this.context=b;this.refs=D;this.updater=d||C}E.prototype.isReactComponent={};E.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?B("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,d){this.props=a;this.context=b;this.refs=D;this.updater=d||C}var H=G.prototype=new F;
H.constructor=G;k(H,E.prototype);H.isPureReactComponent=!0;var I={current:null},J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,d){var c=void 0,e={},g=null,h=null;if(null!=b)for(c in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,c)&&!L.hasOwnProperty(c)&&(e[c]=b[c]);var f=arguments.length-2;if(1===f)e.children=d;else if(1<f){for(var l=Array(f),m=0;m<f;m++)l[m]=arguments[m+2];e.children=l}if(a&&a.defaultProps)for(c in f=a.defaultProps,f)void 0===e[c]&&(e[c]=f[c]);return{$$typeof:p,type:a,key:g,ref:h,props:e,_owner:J.current}}
function da(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function N(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var O=/\/+/g,P=[];function Q(a,b,d,c){if(P.length){var e=P.pop();e.result=a;e.keyPrefix=b;e.func=d;e.context=c;e.count=0;return e}return{result:a,keyPrefix:b,func:d,context:c,count:0}}
function R(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>P.length&&P.push(a)}
function S(a,b,d,c){var e=typeof a;if("undefined"===e||"boolean"===e)a=null;var g=!1;if(null===a)g=!0;else switch(e){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return d(c,a,""===b?"."+T(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var h=0;h<a.length;h++){e=a[h];var f=b+T(e,h);g+=S(e,f,d,c)}else if(null===a||"object"!==typeof a?f=null:(f=A&&a[A]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),h=
0;!(e=a.next()).done;)e=e.value,f=b+T(e,h++),g+=S(e,f,d,c);else"object"===e&&(d=""+a,B("31","[object Object]"===d?"object with keys {"+Object.keys(a).join(", ")+"}":d,""));return g}function U(a,b,d){return null==a?0:S(a,"",b,d)}function T(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function ea(a,b){a.func.call(a.context,b,a.count++)}
function fa(a,b,d){var c=a.result,e=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?V(a,c,d,function(a){return a}):null!=a&&(N(a)&&(a=da(a,e+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+d)),c.push(a))}function V(a,b,d,c,e){var g="";null!=d&&(g=(""+d).replace(O,"$&/")+"/");b=Q(b,g,c,e);U(a,fa,b);R(b)}function W(){var a=I.current;null===a?B("321"):void 0;return a}
var X={Children:{map:function(a,b,d){if(null==a)return a;var c=[];V(a,c,null,b,d);return c},forEach:function(a,b,d){if(null==a)return a;b=Q(null,null,b,d);U(a,ea,b);R(b)},count:function(a){return U(a,function(){return null},null)},toArray:function(a){var b=[];V(a,b,null,function(a){return a});return b},only:function(a){N(a)?void 0:B("143");return a}},createRef:function(){return{current:null}},Component:E,PureComponent:G,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,
_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a},forwardRef:function(a){return{$$typeof:y,render:a}},lazy:function(a){return{$$typeof:ba,_ctor:a,_status:-1,_result:null}},memo:function(a,b){return{$$typeof:aa,type:a,compare:void 0===b?null:b}},useCallback:function(a,b){return W().useCallback(a,b)},useContext:function(a,b){return W().useContext(a,b)},useEffect:function(a,b){return W().useEffect(a,b)},useImperativeHandle:function(a,
b,d){return W().useImperativeHandle(a,b,d)},useDebugValue:function(){},useLayoutEffect:function(a,b){return W().useLayoutEffect(a,b)},useMemo:function(a,b){return W().useMemo(a,b)},useReducer:function(a,b,d){return W().useReducer(a,b,d)},useRef:function(a){return W().useRef(a)},useState:function(a){return W().useState(a)},Fragment:r,StrictMode:t,Suspense:z,createElement:M,cloneElement:function(a,b,d){null===a||void 0===a?B("267",a):void 0;var c=void 0,e=k({},a.props),g=a.key,h=a.ref,f=a._owner;if(null!=
b){void 0!==b.ref&&(h=b.ref,f=J.current);void 0!==b.key&&(g=""+b.key);var l=void 0;a.type&&a.type.defaultProps&&(l=a.type.defaultProps);for(c in b)K.call(b,c)&&!L.hasOwnProperty(c)&&(e[c]=void 0===b[c]&&void 0!==l?l[c]:b[c])}c=arguments.length-2;if(1===c)e.children=d;else if(1<c){l=Array(c);for(var m=0;m<c;m++)l[m]=arguments[m+2];e.children=l}return{$$typeof:p,type:a.type,key:g,ref:h,props:e,_owner:f}},createFactory:function(a){var b=M.bind(null,a);b.type=a;return b},isValidElement:N,version:"16.8.6",
unstable_ConcurrentMode:x,unstable_Profiler:u,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:I,ReactCurrentOwner:J,assign:k}},Y={default:X},Z=Y&&X||Y;module.exports=Z.default||Z;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
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
var aa=__webpack_require__(0),n=__webpack_require__(5),r=__webpack_require__(13);function ba(a,b,c,d,e,f,g,h){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[c,d,e,f,g,h],k=0;a=Error(b.replace(/%s/g,function(){return l[k++]}));a.name="Invariant Violation"}a.framesToPop=1;throw a;}}
function x(a){for(var b=arguments.length-1,c="https://reactjs.org/docs/error-decoder.html?invariant="+a,d=0;d<b;d++)c+="&args[]="+encodeURIComponent(arguments[d+1]);ba(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",c)}aa?void 0:x("227");function ca(a,b,c,d,e,f,g,h,l){var k=Array.prototype.slice.call(arguments,3);try{b.apply(c,k)}catch(m){this.onError(m)}}
var da=!1,ea=null,fa=!1,ha=null,ia={onError:function(a){da=!0;ea=a}};function ja(a,b,c,d,e,f,g,h,l){da=!1;ea=null;ca.apply(ia,arguments)}function ka(a,b,c,d,e,f,g,h,l){ja.apply(this,arguments);if(da){if(da){var k=ea;da=!1;ea=null}else x("198"),k=void 0;fa||(fa=!0,ha=k)}}var la=null,ma={};
function na(){if(la)for(var a in ma){var b=ma[a],c=la.indexOf(a);-1<c?void 0:x("96",a);if(!oa[c]){b.extractEvents?void 0:x("97",a);oa[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;pa.hasOwnProperty(h)?x("99",h):void 0;pa[h]=f;var l=f.phasedRegistrationNames;if(l){for(e in l)l.hasOwnProperty(e)&&qa(l[e],g,h);e=!0}else f.registrationName?(qa(f.registrationName,g,h),e=!0):e=!1;e?void 0:x("98",d,a)}}}}
function qa(a,b,c){ra[a]?x("100",a):void 0;ra[a]=b;sa[a]=b.eventTypes[c].dependencies}var oa=[],pa={},ra={},sa={},ta=null,ua=null,va=null;function wa(a,b,c){var d=a.type||"unknown-event";a.currentTarget=va(c);ka(d,b,void 0,a);a.currentTarget=null}function xa(a,b){null==b?x("30"):void 0;if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}
function ya(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var za=null;function Aa(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)wa(a,b[d],c[d]);else b&&wa(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}
var Ba={injectEventPluginOrder:function(a){la?x("101"):void 0;la=Array.prototype.slice.call(a);na()},injectEventPluginsByName:function(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];ma.hasOwnProperty(c)&&ma[c]===d||(ma[c]?x("102",c):void 0,ma[c]=d,b=!0)}b&&na()}};
function Ca(a,b){var c=a.stateNode;if(!c)return null;var d=ta(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;c&&"function"!==typeof c?x("231",b,typeof c):void 0;
return c}function Da(a){null!==a&&(za=xa(za,a));a=za;za=null;if(a&&(ya(a,Aa),za?x("95"):void 0,fa))throw a=ha,fa=!1,ha=null,a;}var Ea=Math.random().toString(36).slice(2),Fa="__reactInternalInstance$"+Ea,Ga="__reactEventHandlers$"+Ea;function Ha(a){if(a[Fa])return a[Fa];for(;!a[Fa];)if(a.parentNode)a=a.parentNode;else return null;a=a[Fa];return 5===a.tag||6===a.tag?a:null}function Ia(a){a=a[Fa];return!a||5!==a.tag&&6!==a.tag?null:a}
function Ja(a){if(5===a.tag||6===a.tag)return a.stateNode;x("33")}function Ka(a){return a[Ga]||null}function La(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}function Ma(a,b,c){if(b=Ca(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=xa(c._dispatchListeners,b),c._dispatchInstances=xa(c._dispatchInstances,a)}
function Na(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=La(b);for(b=c.length;0<b--;)Ma(c[b],"captured",a);for(b=0;b<c.length;b++)Ma(c[b],"bubbled",a)}}function Oa(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Ca(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=xa(c._dispatchListeners,b),c._dispatchInstances=xa(c._dispatchInstances,a))}function Pa(a){a&&a.dispatchConfig.registrationName&&Oa(a._targetInst,null,a)}
function Qa(a){ya(a,Na)}var Ra=!("undefined"===typeof window||!window.document||!window.document.createElement);function Sa(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Ta={animationend:Sa("Animation","AnimationEnd"),animationiteration:Sa("Animation","AnimationIteration"),animationstart:Sa("Animation","AnimationStart"),transitionend:Sa("Transition","TransitionEnd")},Ua={},Va={};
Ra&&(Va=document.createElement("div").style,"AnimationEvent"in window||(delete Ta.animationend.animation,delete Ta.animationiteration.animation,delete Ta.animationstart.animation),"TransitionEvent"in window||delete Ta.transitionend.transition);function Wa(a){if(Ua[a])return Ua[a];if(!Ta[a])return a;var b=Ta[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Va)return Ua[a]=b[c];return a}
var Xa=Wa("animationend"),Ya=Wa("animationiteration"),Za=Wa("animationstart"),$a=Wa("transitionend"),ab="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bb=null,cb=null,db=null;
function eb(){if(db)return db;var a,b=cb,c=b.length,d,e="value"in bb?bb.value:bb.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return db=e.slice(a,1<d?1-d:void 0)}function fb(){return!0}function gb(){return!1}
function y(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?fb:gb;this.isPropagationStopped=gb;return this}
n(y.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=fb)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=fb)},persist:function(){this.isPersistent=fb},isPersistent:gb,destructor:function(){var a=this.constructor.Interface,
b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=gb;this._dispatchInstances=this._dispatchListeners=null}});y.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
y.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;n(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=n({},d.Interface,a);c.extend=d.extend;hb(c);return c};hb(y);function ib(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}function jb(a){a instanceof this?void 0:x("279");a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}
function hb(a){a.eventPool=[];a.getPooled=ib;a.release=jb}var kb=y.extend({data:null}),lb=y.extend({data:null}),mb=[9,13,27,32],nb=Ra&&"CompositionEvent"in window,ob=null;Ra&&"documentMode"in document&&(ob=document.documentMode);
var pb=Ra&&"TextEvent"in window&&!ob,qb=Ra&&(!nb||ob&&8<ob&&11>=ob),rb=String.fromCharCode(32),sb={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},tb=!1;
function ub(a,b){switch(a){case "keyup":return-1!==mb.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function vb(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var wb=!1;function xb(a,b){switch(a){case "compositionend":return vb(b);case "keypress":if(32!==b.which)return null;tb=!0;return rb;case "textInput":return a=b.data,a===rb&&tb?null:a;default:return null}}
function yb(a,b){if(wb)return"compositionend"===a||!nb&&ub(a,b)?(a=eb(),db=cb=bb=null,wb=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return qb&&"ko"!==b.locale?null:b.data;default:return null}}
var zb={eventTypes:sb,extractEvents:function(a,b,c,d){var e=void 0;var f=void 0;if(nb)b:{switch(a){case "compositionstart":e=sb.compositionStart;break b;case "compositionend":e=sb.compositionEnd;break b;case "compositionupdate":e=sb.compositionUpdate;break b}e=void 0}else wb?ub(a,c)&&(e=sb.compositionEnd):"keydown"===a&&229===c.keyCode&&(e=sb.compositionStart);e?(qb&&"ko"!==c.locale&&(wb||e!==sb.compositionStart?e===sb.compositionEnd&&wb&&(f=eb()):(bb=d,cb="value"in bb?bb.value:bb.textContent,wb=
!0)),e=kb.getPooled(e,b,c,d),f?e.data=f:(f=vb(c),null!==f&&(e.data=f)),Qa(e),f=e):f=null;(a=pb?xb(a,c):yb(a,c))?(b=lb.getPooled(sb.beforeInput,b,c,d),b.data=a,Qa(b)):b=null;return null===f?b:null===b?f:[f,b]}},Ab=null,Bb=null,Cb=null;function Db(a){if(a=ua(a)){"function"!==typeof Ab?x("280"):void 0;var b=ta(a.stateNode);Ab(a.stateNode,a.type,b)}}function Eb(a){Bb?Cb?Cb.push(a):Cb=[a]:Bb=a}function Fb(){if(Bb){var a=Bb,b=Cb;Cb=Bb=null;Db(a);if(b)for(a=0;a<b.length;a++)Db(b[a])}}
function Gb(a,b){return a(b)}function Hb(a,b,c){return a(b,c)}function Ib(){}var Jb=!1;function Kb(a,b){if(Jb)return a(b);Jb=!0;try{return Gb(a,b)}finally{if(Jb=!1,null!==Bb||null!==Cb)Ib(),Fb()}}var Lb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mb(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!Lb[a.type]:"textarea"===b?!0:!1}
function Nb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function Ob(a){if(!Ra)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}function Pb(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Qb(a){var b=Pb(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Rb(a){a._valueTracker||(a._valueTracker=Qb(a))}function Sb(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Pb(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}var Tb=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Tb.hasOwnProperty("ReactCurrentDispatcher")||(Tb.ReactCurrentDispatcher={current:null});
var Ub=/^(.*)[\\\/]/,z="function"===typeof Symbol&&Symbol.for,Vb=z?Symbol.for("react.element"):60103,Wb=z?Symbol.for("react.portal"):60106,Xb=z?Symbol.for("react.fragment"):60107,Yb=z?Symbol.for("react.strict_mode"):60108,Zb=z?Symbol.for("react.profiler"):60114,$b=z?Symbol.for("react.provider"):60109,ac=z?Symbol.for("react.context"):60110,bc=z?Symbol.for("react.concurrent_mode"):60111,cc=z?Symbol.for("react.forward_ref"):60112,dc=z?Symbol.for("react.suspense"):60113,ec=z?Symbol.for("react.memo"):
60115,fc=z?Symbol.for("react.lazy"):60116,gc="function"===typeof Symbol&&Symbol.iterator;function hc(a){if(null===a||"object"!==typeof a)return null;a=gc&&a[gc]||a["@@iterator"];return"function"===typeof a?a:null}
function ic(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case bc:return"ConcurrentMode";case Xb:return"Fragment";case Wb:return"Portal";case Zb:return"Profiler";case Yb:return"StrictMode";case dc:return"Suspense"}if("object"===typeof a)switch(a.$$typeof){case ac:return"Context.Consumer";case $b:return"Context.Provider";case cc:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+
")":"ForwardRef");case ec:return ic(a.type);case fc:if(a=1===a._status?a._result:null)return ic(a)}return null}function jc(a){var b="";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c="";break a;default:var d=a._debugOwner,e=a._debugSource,f=ic(a.type);c=null;d&&(c=ic(d.type));d=f;f="";e?f=" (at "+e.fileName.replace(Ub,"")+":"+e.lineNumber+")":c&&(f=" (created by "+c+")");c="\n    in "+(d||"Unknown")+f}b+=c;a=a.return}while(a);return b}
var kc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lc=Object.prototype.hasOwnProperty,mc={},nc={};
function oc(a){if(lc.call(nc,a))return!0;if(lc.call(mc,a))return!1;if(kc.test(a))return nc[a]=!0;mc[a]=!0;return!1}function pc(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function qc(a,b,c,d){if(null===b||"undefined"===typeof b||pc(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function C(a,b,c,d,e){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b}var D={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){D[a]=new C(a,0,!1,a,null)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];D[b]=new C(b,1,!1,a[1],null)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){D[a]=new C(a,2,!1,a.toLowerCase(),null)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){D[a]=new C(a,2,!1,a,null)});"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){D[a]=new C(a,3,!1,a.toLowerCase(),null)});["checked","multiple","muted","selected"].forEach(function(a){D[a]=new C(a,3,!0,a,null)});
["capture","download"].forEach(function(a){D[a]=new C(a,4,!1,a,null)});["cols","rows","size","span"].forEach(function(a){D[a]=new C(a,6,!1,a,null)});["rowSpan","start"].forEach(function(a){D[a]=new C(a,5,!1,a.toLowerCase(),null)});var rc=/[\-:]([a-z])/g;function sc(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(rc,
sc);D[b]=new C(b,1,!1,a,null)});"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(rc,sc);D[b]=new C(b,1,!1,a,"http://www.w3.org/1999/xlink")});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(rc,sc);D[b]=new C(b,1,!1,a,"http://www.w3.org/XML/1998/namespace")});["tabIndex","crossOrigin"].forEach(function(a){D[a]=new C(a,1,!1,a.toLowerCase(),null)});
function tc(a,b,c,d){var e=D.hasOwnProperty(b)?D[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(qc(b,c,e,d)&&(c=null),d||null===e?oc(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
function uc(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function vc(a,b){var c=b.checked;return n({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
function wc(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=uc(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function xc(a,b){b=b.checked;null!=b&&tc(a,"checked",b,!1)}
function yc(a,b){xc(a,b);var c=uc(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?zc(a,b.type,c):b.hasOwnProperty("defaultValue")&&zc(a,b.type,uc(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function Ac(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!a.defaultChecked;a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function zc(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}var Bc={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function Cc(a,b,c){a=y.getPooled(Bc.change,a,b,c);a.type="change";Eb(c);Qa(a);return a}var Dc=null,Ec=null;function Fc(a){Da(a)}
function Gc(a){var b=Ja(a);if(Sb(b))return a}function Hc(a,b){if("change"===a)return b}var Ic=!1;Ra&&(Ic=Ob("input")&&(!document.documentMode||9<document.documentMode));function Jc(){Dc&&(Dc.detachEvent("onpropertychange",Kc),Ec=Dc=null)}function Kc(a){"value"===a.propertyName&&Gc(Ec)&&(a=Cc(Ec,a,Nb(a)),Kb(Fc,a))}function Lc(a,b,c){"focus"===a?(Jc(),Dc=b,Ec=c,Dc.attachEvent("onpropertychange",Kc)):"blur"===a&&Jc()}function Mc(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return Gc(Ec)}
function Nc(a,b){if("click"===a)return Gc(b)}function Oc(a,b){if("input"===a||"change"===a)return Gc(b)}
var Pc={eventTypes:Bc,_isInputEventSupported:Ic,extractEvents:function(a,b,c,d){var e=b?Ja(b):window,f=void 0,g=void 0,h=e.nodeName&&e.nodeName.toLowerCase();"select"===h||"input"===h&&"file"===e.type?f=Hc:Mb(e)?Ic?f=Oc:(f=Mc,g=Lc):(h=e.nodeName)&&"input"===h.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(f=Nc);if(f&&(f=f(a,b)))return Cc(f,c,d);g&&g(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&zc(e,"number",e.value)}},Qc=y.extend({view:null,detail:null}),Rc={Alt:"altKey",
Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sc(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Rc[a])?!!b[a]:!1}function Tc(){return Sc}
var Uc=0,Vc=0,Wc=!1,Xc=!1,Yc=Qc.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Tc,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=Uc;Uc=a.screenX;return Wc?"mousemove"===a.type?a.screenX-b:0:(Wc=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;
var b=Vc;Vc=a.screenY;return Xc?"mousemove"===a.type?a.screenY-b:0:(Xc=!0,0)}}),Zc=Yc.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),$c={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",
dependencies:["pointerout","pointerover"]}},ad={eventTypes:$c,extractEvents:function(a,b,c,d){var e="mouseover"===a||"pointerover"===a,f="mouseout"===a||"pointerout"===a;if(e&&(c.relatedTarget||c.fromElement)||!f&&!e)return null;e=d.window===d?d:(e=d.ownerDocument)?e.defaultView||e.parentWindow:window;f?(f=b,b=(b=c.relatedTarget||c.toElement)?Ha(b):null):f=null;if(f===b)return null;var g=void 0,h=void 0,l=void 0,k=void 0;if("mouseout"===a||"mouseover"===a)g=Yc,h=$c.mouseLeave,l=$c.mouseEnter,k="mouse";
else if("pointerout"===a||"pointerover"===a)g=Zc,h=$c.pointerLeave,l=$c.pointerEnter,k="pointer";var m=null==f?e:Ja(f);e=null==b?e:Ja(b);a=g.getPooled(h,f,c,d);a.type=k+"leave";a.target=m;a.relatedTarget=e;c=g.getPooled(l,b,c,d);c.type=k+"enter";c.target=e;c.relatedTarget=m;d=b;if(f&&d)a:{b=f;e=d;k=0;for(g=b;g;g=La(g))k++;g=0;for(l=e;l;l=La(l))g++;for(;0<k-g;)b=La(b),k--;for(;0<g-k;)e=La(e),g--;for(;k--;){if(b===e||b===e.alternate)break a;b=La(b);e=La(e)}b=null}else b=null;e=b;for(b=[];f&&f!==e;){k=
f.alternate;if(null!==k&&k===e)break;b.push(f);f=La(f)}for(f=[];d&&d!==e;){k=d.alternate;if(null!==k&&k===e)break;f.push(d);d=La(d)}for(d=0;d<b.length;d++)Oa(b[d],"bubbled",a);for(d=f.length;0<d--;)Oa(f[d],"captured",c);return[a,c]}};function bd(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var cd=Object.prototype.hasOwnProperty;
function dd(a,b){if(bd(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!cd.call(b,c[d])||!bd(a[c[d]],b[c[d]]))return!1;return!0}function ed(a){var b=a;if(a.alternate)for(;b.return;)b=b.return;else{if(0!==(b.effectTag&2))return 1;for(;b.return;)if(b=b.return,0!==(b.effectTag&2))return 1}return 3===b.tag?2:3}function fd(a){2!==ed(a)?x("188"):void 0}
function gd(a){var b=a.alternate;if(!b)return b=ed(a),3===b?x("188"):void 0,1===b?null:a;for(var c=a,d=b;;){var e=c.return,f=e?e.alternate:null;if(!e||!f)break;if(e.child===f.child){for(var g=e.child;g;){if(g===c)return fd(e),a;if(g===d)return fd(e),b;g=g.sibling}x("188")}if(c.return!==d.return)c=e,d=f;else{g=!1;for(var h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}g?
void 0:x("189")}}c.alternate!==d?x("190"):void 0}3!==c.tag?x("188"):void 0;return c.stateNode.current===c?a:b}function hd(a){a=gd(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
var id=y.extend({animationName:null,elapsedTime:null,pseudoElement:null}),jd=y.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),kd=Qc.extend({relatedTarget:null});function ld(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
var md={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},od=Qc.extend({key:function(a){if(a.key){var b=md[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=ld(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?nd[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Tc,charCode:function(a){return"keypress"===
a.type?ld(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?ld(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),pd=Yc.extend({dataTransfer:null}),qd=Qc.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Tc}),rd=y.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),sd=Yc.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in
a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),td=[["abort","abort"],[Xa,"animationEnd"],[Ya,"animationIteration"],[Za,"animationStart"],["canplay","canPlay"],["canplaythrough","canPlayThrough"],["drag","drag"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],
["ended","ended"],["error","error"],["gotpointercapture","gotPointerCapture"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["loadstart","loadStart"],["lostpointercapture","lostPointerCapture"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["playing","playing"],["pointermove","pointerMove"],["pointerout","pointerOut"],["pointerover","pointerOver"],["progress","progress"],["scroll","scroll"],["seeking","seeking"],["stalled","stalled"],
["suspend","suspend"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchmove","touchMove"],[$a,"transitionEnd"],["waiting","waiting"],["wheel","wheel"]],ud={},vd={};function wd(a,b){var c=a[0];a=a[1];var d="on"+(a[0].toUpperCase()+a.slice(1));b={phasedRegistrationNames:{bubbled:d,captured:d+"Capture"},dependencies:[c],isInteractive:b};ud[a]=b;vd[c]=b}
[["blur","blur"],["cancel","cancel"],["click","click"],["close","close"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["auxclick","auxClick"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragstart","dragStart"],["drop","drop"],["focus","focus"],["input","input"],["invalid","invalid"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["mousedown","mouseDown"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["pointercancel","pointerCancel"],
["pointerdown","pointerDown"],["pointerup","pointerUp"],["ratechange","rateChange"],["reset","reset"],["seeked","seeked"],["submit","submit"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchstart","touchStart"],["volumechange","volumeChange"]].forEach(function(a){wd(a,!0)});td.forEach(function(a){wd(a,!1)});
var xd={eventTypes:ud,isInteractiveTopLevelEventType:function(a){a=vd[a];return void 0!==a&&!0===a.isInteractive},extractEvents:function(a,b,c,d){var e=vd[a];if(!e)return null;switch(a){case "keypress":if(0===ld(c))return null;case "keydown":case "keyup":a=od;break;case "blur":case "focus":a=kd;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=Yc;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=
pd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=qd;break;case Xa:case Ya:case Za:a=id;break;case $a:a=rd;break;case "scroll":a=Qc;break;case "wheel":a=sd;break;case "copy":case "cut":case "paste":a=jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=Zc;break;default:a=y}b=a.getPooled(e,b,c,d);Qa(b);return b}},yd=xd.isInteractiveTopLevelEventType,
zd=[];function Ad(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d;for(d=c;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo;if(!d)break;a.ancestors.push(c);c=Ha(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=Nb(a.nativeEvent);d=a.topLevelType;for(var f=a.nativeEvent,g=null,h=0;h<oa.length;h++){var l=oa[h];l&&(l=l.extractEvents(d,b,f,e))&&(g=xa(g,l))}Da(g)}}var Bd=!0;
function E(a,b){if(!b)return null;var c=(yd(a)?Cd:Dd).bind(null,a);b.addEventListener(a,c,!1)}function Ed(a,b){if(!b)return null;var c=(yd(a)?Cd:Dd).bind(null,a);b.addEventListener(a,c,!0)}function Cd(a,b){Hb(Dd,a,b)}
function Dd(a,b){if(Bd){var c=Nb(b);c=Ha(c);null===c||"number"!==typeof c.tag||2===ed(c)||(c=null);if(zd.length){var d=zd.pop();d.topLevelType=a;d.nativeEvent=b;d.targetInst=c;a=d}else a={topLevelType:a,nativeEvent:b,targetInst:c,ancestors:[]};try{Kb(Ad,a)}finally{a.topLevelType=null,a.nativeEvent=null,a.targetInst=null,a.ancestors.length=0,10>zd.length&&zd.push(a)}}}var Fd={},Gd=0,Hd="_reactListenersID"+(""+Math.random()).slice(2);
function Id(a){Object.prototype.hasOwnProperty.call(a,Hd)||(a[Hd]=Gd++,Fd[a[Hd]]={});return Fd[a[Hd]]}function Jd(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function Kd(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Ld(a,b){var c=Kd(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Kd(c)}}function Md(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Md(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Nd(){for(var a=window,b=Jd();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Jd(a.document)}return b}function Od(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
function Pd(){var a=Nd();if(Od(a)){if("selectionStart"in a)var b={start:a.selectionStart,end:a.selectionEnd};else a:{b=(b=a.ownerDocument)&&b.defaultView||window;var c=b.getSelection&&b.getSelection();if(c&&0!==c.rangeCount){b=c.anchorNode;var d=c.anchorOffset,e=c.focusNode;c=c.focusOffset;try{b.nodeType,e.nodeType}catch(A){b=null;break a}var f=0,g=-1,h=-1,l=0,k=0,m=a,p=null;b:for(;;){for(var t;;){m!==b||0!==d&&3!==m.nodeType||(g=f+d);m!==e||0!==c&&3!==m.nodeType||(h=f+c);3===m.nodeType&&(f+=m.nodeValue.length);
if(null===(t=m.firstChild))break;p=m;m=t}for(;;){if(m===a)break b;p===b&&++l===d&&(g=f);p===e&&++k===c&&(h=f);if(null!==(t=m.nextSibling))break;m=p;p=m.parentNode}m=t}b=-1===g||-1===h?null:{start:g,end:h}}else b=null}b=b||{start:0,end:0}}else b=null;return{focusedElem:a,selectionRange:b}}
function Qd(a){var b=Nd(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Md(c.ownerDocument.documentElement,c)){if(null!==d&&Od(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=Ld(c,f);var g=Ld(c,
d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),a.addRange(b)))}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}
var Rd=Ra&&"documentMode"in document&&11>=document.documentMode,Sd={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},Td=null,Ud=null,Vd=null,Wd=!1;
function Xd(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if(Wd||null==Td||Td!==Jd(c))return null;c=Td;"selectionStart"in c&&Od(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return Vd&&dd(Vd,c)?null:(Vd=c,a=y.getPooled(Sd.select,Ud,a,b),a.type="select",a.target=Td,Qa(a),a)}
var Yd={eventTypes:Sd,extractEvents:function(a,b,c,d){var e=d.window===d?d.document:9===d.nodeType?d:d.ownerDocument,f;if(!(f=!e)){a:{e=Id(e);f=sa.onSelect;for(var g=0;g<f.length;g++){var h=f[g];if(!e.hasOwnProperty(h)||!e[h]){e=!1;break a}}e=!0}f=!e}if(f)return null;e=b?Ja(b):window;switch(a){case "focus":if(Mb(e)||"true"===e.contentEditable)Td=e,Ud=b,Vd=null;break;case "blur":Vd=Ud=Td=null;break;case "mousedown":Wd=!0;break;case "contextmenu":case "mouseup":case "dragend":return Wd=!1,Xd(c,d);case "selectionchange":if(Rd)break;
case "keydown":case "keyup":return Xd(c,d)}return null}};Ba.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));ta=Ka;ua=Ia;va=Ja;Ba.injectEventPluginsByName({SimpleEventPlugin:xd,EnterLeaveEventPlugin:ad,ChangeEventPlugin:Pc,SelectEventPlugin:Yd,BeforeInputEventPlugin:zb});function Zd(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}
function $d(a,b){a=n({children:void 0},b);if(b=Zd(b.children))a.children=b;return a}function ae(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+uc(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function be(a,b){null!=b.dangerouslySetInnerHTML?x("91"):void 0;return n({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function ce(a,b){var c=b.value;null==c&&(c=b.defaultValue,b=b.children,null!=b&&(null!=c?x("92"):void 0,Array.isArray(b)&&(1>=b.length?void 0:x("93"),b=b[0]),c=b),null==c&&(c=""));a._wrapperState={initialValue:uc(c)}}
function de(a,b){var c=uc(b.value),d=uc(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function ee(a){var b=a.textContent;b===a._wrapperState.initialValue&&(a.value=b)}var fe={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function ge(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function he(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?ge(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var ie=void 0,je=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==fe.svg||"innerHTML"in a)a.innerHTML=b;else{ie=ie||document.createElement("div");ie.innerHTML="<svg>"+b+"</svg>";for(b=ie.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function ke(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var le={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},me=["Webkit","ms","Moz","O"];Object.keys(le).forEach(function(a){me.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);le[b]=le[a]})});function ne(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||le.hasOwnProperty(a)&&le[a]?(""+b).trim():b+"px"}
function oe(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=ne(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var pe=n({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function qe(a,b){b&&(pe[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML?x("137",a,""):void 0),null!=b.dangerouslySetInnerHTML&&(null!=b.children?x("60"):void 0,"object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML?void 0:x("61")),null!=b.style&&"object"!==typeof b.style?x("62",""):void 0)}
function re(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}
function se(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=Id(a);b=sa[b];for(var d=0;d<b.length;d++){var e=b[d];if(!c.hasOwnProperty(e)||!c[e]){switch(e){case "scroll":Ed("scroll",a);break;case "focus":case "blur":Ed("focus",a);Ed("blur",a);c.blur=!0;c.focus=!0;break;case "cancel":case "close":Ob(e)&&Ed(e,a);break;case "invalid":case "submit":case "reset":break;default:-1===ab.indexOf(e)&&E(e,a)}c[e]=!0}}}function te(){}var ue=null,ve=null;
function we(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}function xe(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}
var ye="function"===typeof setTimeout?setTimeout:void 0,ze="function"===typeof clearTimeout?clearTimeout:void 0,Ae=r.unstable_scheduleCallback,Be=r.unstable_cancelCallback;
function Ce(a,b,c,d,e){a[Ga]=e;"input"===c&&"radio"===e.type&&null!=e.name&&xc(a,e);re(c,d);d=re(c,e);for(var f=0;f<b.length;f+=2){var g=b[f],h=b[f+1];"style"===g?oe(a,h):"dangerouslySetInnerHTML"===g?je(a,h):"children"===g?ke(a,h):tc(a,g,h,d)}switch(c){case "input":yc(a,e);break;case "textarea":de(a,e);break;case "select":b=a._wrapperState.wasMultiple,a._wrapperState.wasMultiple=!!e.multiple,c=e.value,null!=c?ae(a,!!e.multiple,c,!1):b!==!!e.multiple&&(null!=e.defaultValue?ae(a,!!e.multiple,e.defaultValue,
!0):ae(a,!!e.multiple,e.multiple?[]:"",!1))}}function De(a){for(a=a.nextSibling;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}function Ee(a){for(a=a.firstChild;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}new Set;var Fe=[],Ge=-1;function F(a){0>Ge||(a.current=Fe[Ge],Fe[Ge]=null,Ge--)}function G(a,b){Ge++;Fe[Ge]=a.current;a.current=b}var He={},H={current:He},I={current:!1},Ie=He;
function Je(a,b){var c=a.type.contextTypes;if(!c)return He;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function J(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Ke(a){F(I,a);F(H,a)}function Le(a){F(I,a);F(H,a)}
function Me(a,b,c){H.current!==He?x("168"):void 0;G(H,b,a);G(I,c,a)}function Ne(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)e in a?void 0:x("108",ic(b)||"Unknown",e);return n({},c,d)}function Oe(a){var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||He;Ie=H.current;G(H,b,a);G(I,I.current,a);return!0}
function Pe(a,b,c){var d=a.stateNode;d?void 0:x("169");c?(b=Ne(a,b,Ie),d.__reactInternalMemoizedMergedChildContext=b,F(I,a),F(H,a),G(H,b,a)):F(I,a);G(I,c,a)}var Qe=null,Re=null;function Se(a){return function(b){try{return a(b)}catch(c){}}}
function Te(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);Qe=Se(function(a){return b.onCommitFiberRoot(c,a)});Re=Se(function(a){return b.onCommitFiberUnmount(c,a)})}catch(d){}return!0}
function Ue(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.contextDependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function K(a,b,c,d){return new Ue(a,b,c,d)}
function Ve(a){a=a.prototype;return!(!a||!a.isReactComponent)}function We(a){if("function"===typeof a)return Ve(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===cc)return 11;if(a===ec)return 14}return 2}
function Xe(a,b){var c=a.alternate;null===c?(c=K(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;c.contextDependencies=a.contextDependencies;c.sibling=a.sibling;
c.index=a.index;c.ref=a.ref;return c}
function Ye(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)Ve(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case Xb:return Ze(c.children,e,f,b);case bc:return $e(c,e|3,f,b);case Yb:return $e(c,e|2,f,b);case Zb:return a=K(12,c,b,e|4),a.elementType=Zb,a.type=Zb,a.expirationTime=f,a;case dc:return a=K(13,c,b,e),a.elementType=dc,a.type=dc,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case $b:g=10;break a;case ac:g=9;break a;case cc:g=11;break a;case ec:g=
14;break a;case fc:g=16;d=null;break a}x("130",null==a?a:typeof a,"")}b=K(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function Ze(a,b,c,d){a=K(7,a,d,b);a.expirationTime=c;return a}function $e(a,b,c,d){a=K(8,a,d,b);b=0===(b&1)?Yb:bc;a.elementType=b;a.type=b;a.expirationTime=c;return a}function af(a,b,c){a=K(6,a,null,b);a.expirationTime=c;return a}
function bf(a,b,c){b=K(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}function cf(a,b){a.didError=!1;var c=a.earliestPendingTime;0===c?a.earliestPendingTime=a.latestPendingTime=b:c<b?a.earliestPendingTime=b:a.latestPendingTime>b&&(a.latestPendingTime=b);df(b,a)}
function ef(a,b){a.didError=!1;if(0===b)a.earliestPendingTime=0,a.latestPendingTime=0,a.earliestSuspendedTime=0,a.latestSuspendedTime=0,a.latestPingedTime=0;else{b<a.latestPingedTime&&(a.latestPingedTime=0);var c=a.latestPendingTime;0!==c&&(c>b?a.earliestPendingTime=a.latestPendingTime=0:a.earliestPendingTime>b&&(a.earliestPendingTime=a.latestPendingTime));c=a.earliestSuspendedTime;0===c?cf(a,b):b<a.latestSuspendedTime?(a.earliestSuspendedTime=0,a.latestSuspendedTime=0,a.latestPingedTime=0,cf(a,b)):
b>c&&cf(a,b)}df(0,a)}function ff(a,b){a.didError=!1;a.latestPingedTime>=b&&(a.latestPingedTime=0);var c=a.earliestPendingTime,d=a.latestPendingTime;c===b?a.earliestPendingTime=d===b?a.latestPendingTime=0:d:d===b&&(a.latestPendingTime=c);c=a.earliestSuspendedTime;d=a.latestSuspendedTime;0===c?a.earliestSuspendedTime=a.latestSuspendedTime=b:c<b?a.earliestSuspendedTime=b:d>b&&(a.latestSuspendedTime=b);df(b,a)}
function gf(a,b){var c=a.earliestPendingTime;a=a.earliestSuspendedTime;c>b&&(b=c);a>b&&(b=a);return b}function df(a,b){var c=b.earliestSuspendedTime,d=b.latestSuspendedTime,e=b.earliestPendingTime,f=b.latestPingedTime;e=0!==e?e:f;0===e&&(0===a||d<a)&&(e=d);a=e;0!==a&&c>a&&(a=c);b.nextExpirationTimeToWorkOn=e;b.expirationTime=a}function L(a,b){if(a&&a.defaultProps){b=n({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}
function hf(a){var b=a._result;switch(a._status){case 1:return b;case 2:throw b;case 0:throw b;default:a._status=0;b=a._ctor;b=b();b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)});switch(a._status){case 1:return a._result;case 2:throw a._result;}a._result=b;throw b;}}var jf=(new aa.Component).refs;
function kf(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:n({},b,c);a.memoizedState=c;d=a.updateQueue;null!==d&&0===a.expirationTime&&(d.baseState=c)}
var tf={isMounted:function(a){return(a=a._reactInternalFiber)?2===ed(a):!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=lf();d=mf(d,a);var e=nf(d);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);of();pf(a,e);qf(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=lf();d=mf(d,a);var e=nf(d);e.tag=rf;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);of();pf(a,e);qf(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=lf();c=mf(c,a);var d=nf(c);d.tag=
sf;void 0!==b&&null!==b&&(d.callback=b);of();pf(a,d);qf(a,c)}};function uf(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!dd(c,d)||!dd(e,f):!0}
function vf(a,b,c){var d=!1,e=He;var f=b.contextType;"object"===typeof f&&null!==f?f=M(f):(e=J(b)?Ie:H.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Je(a,e):He);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=tf;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function wf(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&tf.enqueueReplaceState(b,b.state,null)}
function xf(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=jf;var f=b.contextType;"object"===typeof f&&null!==f?e.context=M(f):(f=J(b)?Ie:H.current,e.context=Je(a,f));f=a.updateQueue;null!==f&&(yf(a,f,c,e,d),e.state=a.memoizedState);f=b.getDerivedStateFromProps;"function"===typeof f&&(kf(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==
typeof e.componentWillMount||(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&tf.enqueueReplaceState(e,e.state,null),f=a.updateQueue,null!==f&&(yf(a,f,c,e,d),e.state=a.memoizedState));"function"===typeof e.componentDidMount&&(a.effectTag|=4)}var zf=Array.isArray;
function Af(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;var d=void 0;c&&(1!==c.tag?x("309"):void 0,d=c.stateNode);d?void 0:x("147",a);var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===jf&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}"string"!==typeof a?x("284"):void 0;c._owner?void 0:x("290",a)}return a}
function Bf(a,b){"textarea"!==a.type&&x("31","[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,"")}
function Cf(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b,c){a=Xe(a,b,c);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=af(c,a.mode,d),b.return=a,b;b=e(b,c,d);b.return=a;return b}function l(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props,d),d.ref=Af(a,b,c),d.return=a,d;d=Ye(c.type,c.key,c.props,null,a.mode,d);d.ref=Af(a,b,c);d.return=a;return d}function k(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==
c.implementation)return b=bf(c,a.mode,d),b.return=a,b;b=e(b,c.children||[],d);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Ze(c,a.mode,d,f),b.return=a,b;b=e(b,c,d);b.return=a;return b}function p(a,b,c){if("string"===typeof b||"number"===typeof b)return b=af(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case Vb:return c=Ye(b.type,b.key,b.props,null,a.mode,c),c.ref=Af(a,null,b),c.return=a,c;case Wb:return b=bf(b,a.mode,c),b.return=a,b}if(zf(b)||
hc(b))return b=Ze(b,a.mode,c,null),b.return=a,b;Bf(a,b)}return null}function t(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Vb:return c.key===e?c.type===Xb?m(a,b,c.props.children,d,e):l(a,b,c,d):null;case Wb:return c.key===e?k(a,b,c,d):null}if(zf(c)||hc(c))return null!==e?null:m(a,b,c,d,null);Bf(a,c)}return null}function A(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=
a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Vb:return a=a.get(null===d.key?c:d.key)||null,d.type===Xb?m(b,a,d.props.children,e,d.key):l(b,a,d,e);case Wb:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e)}if(zf(d)||hc(d))return a=a.get(c)||null,m(b,a,d,e,null);Bf(b,d)}return null}function v(e,g,h,k){for(var l=null,m=null,q=g,u=g=0,B=null;null!==q&&u<h.length;u++){q.index>u?(B=q,q=null):B=q.sibling;var w=t(e,q,h[u],k);if(null===w){null===q&&(q=B);break}a&&
q&&null===w.alternate&&b(e,q);g=f(w,g,u);null===m?l=w:m.sibling=w;m=w;q=B}if(u===h.length)return c(e,q),l;if(null===q){for(;u<h.length;u++)if(q=p(e,h[u],k))g=f(q,g,u),null===m?l=q:m.sibling=q,m=q;return l}for(q=d(e,q);u<h.length;u++)if(B=A(q,e,u,h[u],k))a&&null!==B.alternate&&q.delete(null===B.key?u:B.key),g=f(B,g,u),null===m?l=B:m.sibling=B,m=B;a&&q.forEach(function(a){return b(e,a)});return l}function R(e,g,h,k){var l=hc(h);"function"!==typeof l?x("150"):void 0;h=l.call(h);null==h?x("151"):void 0;
for(var m=l=null,q=g,u=g=0,B=null,w=h.next();null!==q&&!w.done;u++,w=h.next()){q.index>u?(B=q,q=null):B=q.sibling;var v=t(e,q,w.value,k);if(null===v){q||(q=B);break}a&&q&&null===v.alternate&&b(e,q);g=f(v,g,u);null===m?l=v:m.sibling=v;m=v;q=B}if(w.done)return c(e,q),l;if(null===q){for(;!w.done;u++,w=h.next())w=p(e,w.value,k),null!==w&&(g=f(w,g,u),null===m?l=w:m.sibling=w,m=w);return l}for(q=d(e,q);!w.done;u++,w=h.next())w=A(q,e,u,w.value,k),null!==w&&(a&&null!==w.alternate&&q.delete(null===w.key?u:
w.key),g=f(w,g,u),null===m?l=w:m.sibling=w,m=w);a&&q.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===Xb&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case Vb:a:{l=f.key;for(k=d;null!==k;){if(k.key===l)if(7===k.tag?f.type===Xb:k.elementType===f.type){c(a,k.sibling);d=e(k,f.type===Xb?f.props.children:f.props,h);d.ref=Af(a,k,f);d.return=a;a=d;break a}else{c(a,k);break}else b(a,k);k=
k.sibling}f.type===Xb?(d=Ze(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Ye(f.type,f.key,f.props,null,a.mode,h),h.ref=Af(a,d,f),h.return=a,a=h)}return g(a);case Wb:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[],h);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=bf(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=
""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f,h),d.return=a,a=d):(c(a,d),d=af(f,a.mode,h),d.return=a,a=d),g(a);if(zf(f))return v(a,d,f,h);if(hc(f))return R(a,d,f,h);l&&Bf(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:h=a.type,x("152",h.displayName||h.name||"Component")}return c(a,d)}}var Df=Cf(!0),Ef=Cf(!1),Ff={},N={current:Ff},Gf={current:Ff},Hf={current:Ff};function If(a){a===Ff?x("174"):void 0;return a}
function Jf(a,b){G(Hf,b,a);G(Gf,a,a);G(N,Ff,a);var c=b.nodeType;switch(c){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:he(null,"");break;default:c=8===c?b.parentNode:b,b=c.namespaceURI||null,c=c.tagName,b=he(b,c)}F(N,a);G(N,b,a)}function Kf(a){F(N,a);F(Gf,a);F(Hf,a)}function Lf(a){If(Hf.current);var b=If(N.current);var c=he(b,a.type);b!==c&&(G(Gf,a,a),G(N,c,a))}function Mf(a){Gf.current===a&&(F(N,a),F(Gf,a))}
var Nf=0,Of=2,Pf=4,Qf=8,Rf=16,Sf=32,Tf=64,Uf=128,Vf=Tb.ReactCurrentDispatcher,Wf=0,Xf=null,O=null,P=null,Yf=null,Q=null,Zf=null,$f=0,ag=null,bg=0,cg=!1,dg=null,eg=0;function fg(){x("321")}function gg(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!bd(a[c],b[c]))return!1;return!0}
function hg(a,b,c,d,e,f){Wf=f;Xf=b;P=null!==a?a.memoizedState:null;Vf.current=null===P?ig:jg;b=c(d,e);if(cg){do cg=!1,eg+=1,P=null!==a?a.memoizedState:null,Zf=Yf,ag=Q=O=null,Vf.current=jg,b=c(d,e);while(cg);dg=null;eg=0}Vf.current=kg;a=Xf;a.memoizedState=Yf;a.expirationTime=$f;a.updateQueue=ag;a.effectTag|=bg;a=null!==O&&null!==O.next;Wf=0;Zf=Q=Yf=P=O=Xf=null;$f=0;ag=null;bg=0;a?x("300"):void 0;return b}function lg(){Vf.current=kg;Wf=0;Zf=Q=Yf=P=O=Xf=null;$f=0;ag=null;bg=0;cg=!1;dg=null;eg=0}
function mg(){var a={memoizedState:null,baseState:null,queue:null,baseUpdate:null,next:null};null===Q?Yf=Q=a:Q=Q.next=a;return Q}function ng(){if(null!==Zf)Q=Zf,Zf=Q.next,O=P,P=null!==O?O.next:null;else{null===P?x("310"):void 0;O=P;var a={memoizedState:O.memoizedState,baseState:O.baseState,queue:O.queue,baseUpdate:O.baseUpdate,next:null};Q=null===Q?Yf=a:Q.next=a;P=O.next}return Q}function og(a,b){return"function"===typeof b?b(a):b}
function pg(a){var b=ng(),c=b.queue;null===c?x("311"):void 0;c.lastRenderedReducer=a;if(0<eg){var d=c.dispatch;if(null!==dg){var e=dg.get(c);if(void 0!==e){dg.delete(c);var f=b.memoizedState;do f=a(f,e.action),e=e.next;while(null!==e);bd(f,b.memoizedState)||(qg=!0);b.memoizedState=f;b.baseUpdate===c.last&&(b.baseState=f);c.lastRenderedState=f;return[f,d]}}return[b.memoizedState,d]}d=c.last;var g=b.baseUpdate;f=b.baseState;null!==g?(null!==d&&(d.next=null),d=g.next):d=null!==d?d.next:null;if(null!==
d){var h=e=null,l=d,k=!1;do{var m=l.expirationTime;m<Wf?(k||(k=!0,h=g,e=f),m>$f&&($f=m)):f=l.eagerReducer===a?l.eagerState:a(f,l.action);g=l;l=l.next}while(null!==l&&l!==d);k||(h=g,e=f);bd(f,b.memoizedState)||(qg=!0);b.memoizedState=f;b.baseUpdate=h;b.baseState=e;c.lastRenderedState=f}return[b.memoizedState,c.dispatch]}
function rg(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};null===ag?(ag={lastEffect:null},ag.lastEffect=a.next=a):(b=ag.lastEffect,null===b?ag.lastEffect=a.next=a:(c=b.next,b.next=a,a.next=c,ag.lastEffect=a));return a}function sg(a,b,c,d){var e=mg();bg|=a;e.memoizedState=rg(b,c,void 0,void 0===d?null:d)}
function tg(a,b,c,d){var e=ng();d=void 0===d?null:d;var f=void 0;if(null!==O){var g=O.memoizedState;f=g.destroy;if(null!==d&&gg(d,g.deps)){rg(Nf,c,f,d);return}}bg|=a;e.memoizedState=rg(b,c,f,d)}function ug(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function vg(){}
function wg(a,b,c){25>eg?void 0:x("301");var d=a.alternate;if(a===Xf||null!==d&&d===Xf)if(cg=!0,a={expirationTime:Wf,action:c,eagerReducer:null,eagerState:null,next:null},null===dg&&(dg=new Map),c=dg.get(b),void 0===c)dg.set(b,a);else{for(b=c;null!==b.next;)b=b.next;b.next=a}else{of();var e=lf();e=mf(e,a);var f={expirationTime:e,action:c,eagerReducer:null,eagerState:null,next:null},g=b.last;if(null===g)f.next=f;else{var h=g.next;null!==h&&(f.next=h);g.next=f}b.last=f;if(0===a.expirationTime&&(null===
d||0===d.expirationTime)&&(d=b.lastRenderedReducer,null!==d))try{var l=b.lastRenderedState,k=d(l,c);f.eagerReducer=d;f.eagerState=k;if(bd(k,l))return}catch(m){}finally{}qf(a,e)}}
var kg={readContext:M,useCallback:fg,useContext:fg,useEffect:fg,useImperativeHandle:fg,useLayoutEffect:fg,useMemo:fg,useReducer:fg,useRef:fg,useState:fg,useDebugValue:fg},ig={readContext:M,useCallback:function(a,b){mg().memoizedState=[a,void 0===b?null:b];return a},useContext:M,useEffect:function(a,b){return sg(516,Uf|Tf,a,b)},useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return sg(4,Pf|Sf,ug.bind(null,b,a),c)},useLayoutEffect:function(a,b){return sg(4,Pf|Sf,a,b)},
useMemo:function(a,b){var c=mg();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=mg();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={last:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=wg.bind(null,Xf,a);return[d.memoizedState,a]},useRef:function(a){var b=mg();a={current:a};return b.memoizedState=a},useState:function(a){var b=mg();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={last:null,dispatch:null,
lastRenderedReducer:og,lastRenderedState:a};a=a.dispatch=wg.bind(null,Xf,a);return[b.memoizedState,a]},useDebugValue:vg},jg={readContext:M,useCallback:function(a,b){var c=ng();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&gg(b,d[1]))return d[0];c.memoizedState=[a,b];return a},useContext:M,useEffect:function(a,b){return tg(516,Uf|Tf,a,b)},useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return tg(4,Pf|Sf,ug.bind(null,b,a),c)},useLayoutEffect:function(a,
b){return tg(4,Pf|Sf,a,b)},useMemo:function(a,b){var c=ng();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&gg(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a},useReducer:pg,useRef:function(){return ng().memoizedState},useState:function(a){return pg(og,a)},useDebugValue:vg},xg=null,yg=null,zg=!1;
function Ag(a,b){var c=K(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function Bg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
function Cg(a){if(zg){var b=yg;if(b){var c=b;if(!Bg(a,b)){b=De(c);if(!b||!Bg(a,b)){a.effectTag|=2;zg=!1;xg=a;return}Ag(xg,c)}xg=a;yg=Ee(b)}else a.effectTag|=2,zg=!1,xg=a}}function Dg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&18!==a.tag;)a=a.return;xg=a}function Eg(a){if(a!==xg)return!1;if(!zg)return Dg(a),zg=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!xe(b,a.memoizedProps))for(b=yg;b;)Ag(a,b),b=De(b);Dg(a);yg=xg?De(a.stateNode):null;return!0}function Fg(){yg=xg=null;zg=!1}
var Gg=Tb.ReactCurrentOwner,qg=!1;function S(a,b,c,d){b.child=null===a?Ef(b,null,c,d):Df(b,a.child,c,d)}function Hg(a,b,c,d,e){c=c.render;var f=b.ref;Ig(b,e);d=hg(a,b,c,d,f,e);if(null!==a&&!qg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),Jg(a,b,e);b.effectTag|=1;S(a,b,d,e);return b.child}
function Kg(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!Ve(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,Lg(a,b,g,d,e,f);a=Ye(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(e<f&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:dd,c(e,d)&&a.ref===b.ref))return Jg(a,b,f);b.effectTag|=1;a=Xe(g,d,f);a.ref=b.ref;a.return=b;return b.child=a}
function Lg(a,b,c,d,e,f){return null!==a&&dd(a.memoizedProps,d)&&a.ref===b.ref&&(qg=!1,e<f)?Jg(a,b,f):Mg(a,b,c,d,f)}function Ng(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function Mg(a,b,c,d,e){var f=J(c)?Ie:H.current;f=Je(b,f);Ig(b,e);c=hg(a,b,c,d,f,e);if(null!==a&&!qg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),Jg(a,b,e);b.effectTag|=1;S(a,b,c,e);return b.child}
function Og(a,b,c,d,e){if(J(c)){var f=!0;Oe(b)}else f=!1;Ig(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),vf(b,c,d,e),xf(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var l=g.context,k=c.contextType;"object"===typeof k&&null!==k?k=M(k):(k=J(c)?Ie:H.current,k=Je(b,k));var m=c.getDerivedStateFromProps,p="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;p||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||l!==k)&&wf(b,g,d,k);Pg=!1;var t=b.memoizedState;l=g.state=t;var A=b.updateQueue;null!==A&&(yf(b,A,d,g,e),l=b.memoizedState);h!==d||t!==l||I.current||Pg?("function"===typeof m&&(kf(b,c,m,d),l=b.memoizedState),(h=Pg||uf(b,c,h,d,t,l,k))?(p||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&
g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=l),g.props=d,g.state=l,g.context=k,d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1)}else g=b.stateNode,h=b.memoizedProps,g.props=b.type===b.elementType?h:L(b.type,h),l=g.context,k=c.contextType,"object"===typeof k&&null!==k?k=M(k):(k=J(c)?Ie:H.current,k=Je(b,k)),m=c.getDerivedStateFromProps,(p="function"===
typeof m||"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||l!==k)&&wf(b,g,d,k),Pg=!1,l=b.memoizedState,t=g.state=l,A=b.updateQueue,null!==A&&(yf(b,A,d,g,e),t=b.memoizedState),h!==d||l!==t||I.current||Pg?("function"===typeof m&&(kf(b,c,m,d),t=b.memoizedState),(m=Pg||uf(b,c,h,d,l,t,k))?(p||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===
typeof g.componentWillUpdate&&g.componentWillUpdate(d,t,k),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,t,k)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=256),b.memoizedProps=d,b.memoizedState=
t),g.props=d,g.state=t,g.context=k,d=m):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=256),d=!1);return Qg(a,b,c,d,f,e)}
function Qg(a,b,c,d,e,f){Ng(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&Pe(b,c,!1),Jg(a,b,f);d=b.stateNode;Gg.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&g?(b.child=Df(b,a.child,null,f),b.child=Df(b,null,h,f)):S(a,b,h,f);b.memoizedState=d.state;e&&Pe(b,c,!0);return b.child}function Rg(a){var b=a.stateNode;b.pendingContext?Me(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Me(a,b.context,!1);Jf(a,b.containerInfo)}
function Sg(a,b,c){var d=b.mode,e=b.pendingProps,f=b.memoizedState;if(0===(b.effectTag&64)){f=null;var g=!1}else f={timedOutAt:null!==f?f.timedOutAt:0},g=!0,b.effectTag&=-65;if(null===a)if(g){var h=e.fallback;a=Ze(null,d,0,null);0===(b.mode&1)&&(a.child=null!==b.memoizedState?b.child.child:b.child);d=Ze(h,d,c,null);a.sibling=d;c=a;c.return=d.return=b}else c=d=Ef(b,null,e.children,c);else null!==a.memoizedState?(d=a.child,h=d.sibling,g?(c=e.fallback,e=Xe(d,d.pendingProps,0),0===(b.mode&1)&&(g=null!==
b.memoizedState?b.child.child:b.child,g!==d.child&&(e.child=g)),d=e.sibling=Xe(h,c,h.expirationTime),c=e,e.childExpirationTime=0,c.return=d.return=b):c=d=Df(b,d.child,e.children,c)):(h=a.child,g?(g=e.fallback,e=Ze(null,d,0,null),e.child=h,0===(b.mode&1)&&(e.child=null!==b.memoizedState?b.child.child:b.child),d=e.sibling=Ze(g,d,c,null),d.effectTag|=2,c=e,e.childExpirationTime=0,c.return=d.return=b):d=c=Df(b,h,e.children,c)),b.stateNode=a.stateNode;b.memoizedState=f;b.child=c;return d}
function Jg(a,b,c){null!==a&&(b.contextDependencies=a.contextDependencies);if(b.childExpirationTime<c)return null;null!==a&&b.child!==a.child?x("153"):void 0;if(null!==b.child){a=b.child;c=Xe(a,a.pendingProps,a.expirationTime);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Xe(a,a.pendingProps,a.expirationTime),c.return=b;c.sibling=null}return b.child}
function Tg(a,b,c){var d=b.expirationTime;if(null!==a)if(a.memoizedProps!==b.pendingProps||I.current)qg=!0;else{if(d<c){qg=!1;switch(b.tag){case 3:Rg(b);Fg();break;case 5:Lf(b);break;case 1:J(b.type)&&Oe(b);break;case 4:Jf(b,b.stateNode.containerInfo);break;case 10:Ug(b,b.memoizedProps.value);break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;if(0!==d&&d>=c)return Sg(a,b,c);b=Jg(a,b,c);return null!==b?b.sibling:null}}return Jg(a,b,c)}}else qg=!1;b.expirationTime=0;switch(b.tag){case 2:d=
b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;var e=Je(b,H.current);Ig(b,c);e=hg(null,b,d,a,e,c);b.effectTag|=1;if("object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;lg();if(J(d)){var f=!0;Oe(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;var g=d.getDerivedStateFromProps;"function"===typeof g&&kf(b,d,g,a);e.updater=tf;b.stateNode=e;e._reactInternalFiber=b;xf(b,d,a,c);b=Qg(null,b,d,!0,f,
c)}else b.tag=0,S(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);f=b.pendingProps;a=hf(e);b.type=a;e=b.tag=We(a);f=L(a,f);g=void 0;switch(e){case 0:g=Mg(null,b,a,f,c);break;case 1:g=Og(null,b,a,f,c);break;case 11:g=Hg(null,b,a,f,c);break;case 14:g=Kg(null,b,a,L(a.type,f),d,c);break;default:x("306",a,"")}return g;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:L(d,e),Mg(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,
e=b.elementType===d?e:L(d,e),Og(a,b,d,e,c);case 3:Rg(b);d=b.updateQueue;null===d?x("282"):void 0;e=b.memoizedState;e=null!==e?e.element:null;yf(b,d,b.pendingProps,null,c);d=b.memoizedState.element;if(d===e)Fg(),b=Jg(a,b,c);else{e=b.stateNode;if(e=(null===a||null===a.child)&&e.hydrate)yg=Ee(b.stateNode.containerInfo),xg=b,e=zg=!0;e?(b.effectTag|=2,b.child=Ef(b,null,d,c)):(S(a,b,d,c),Fg());b=b.child}return b;case 5:return Lf(b),null===a&&Cg(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,
g=e.children,xe(d,e)?g=null:null!==f&&xe(d,f)&&(b.effectTag|=16),Ng(a,b),1!==c&&b.mode&1&&e.hidden?(b.expirationTime=b.childExpirationTime=1,b=null):(S(a,b,g,c),b=b.child),b;case 6:return null===a&&Cg(b),null;case 13:return Sg(a,b,c);case 4:return Jf(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Df(b,null,d,c):S(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:L(d,e),Hg(a,b,d,e,c);case 7:return S(a,b,b.pendingProps,c),b.child;case 8:return S(a,b,b.pendingProps.children,
c),b.child;case 12:return S(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;Ug(b,f);if(null!==g){var h=g.value;f=bd(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0;if(0===f){if(g.children===e.children&&!I.current){b=Jg(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var l=h.contextDependencies;if(null!==l){g=h.child;for(var k=l.first;null!==k;){if(k.context===d&&0!==
(k.observedBits&f)){1===h.tag&&(k=nf(c),k.tag=sf,pf(h,k));h.expirationTime<c&&(h.expirationTime=c);k=h.alternate;null!==k&&k.expirationTime<c&&(k.expirationTime=c);k=c;for(var m=h.return;null!==m;){var p=m.alternate;if(m.childExpirationTime<k)m.childExpirationTime=k,null!==p&&p.childExpirationTime<k&&(p.childExpirationTime=k);else if(null!==p&&p.childExpirationTime<k)p.childExpirationTime=k;else break;m=m.return}l.expirationTime<c&&(l.expirationTime=c);break}k=k.next}}else g=10===h.tag?h.type===b.type?
null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=g}}S(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,Ig(b,c),e=M(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,S(a,b,d,c),b.child;case 14:return e=b.type,f=L(e,b.pendingProps),f=L(e.type,f),Kg(a,b,e,f,d,c);case 15:return Lg(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===
d?e:L(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,J(d)?(a=!0,Oe(b)):a=!1,Ig(b,c),vf(b,d,e,c),xf(b,d,e,c),Qg(null,b,d,!0,a,c)}x("156")}var Vg={current:null},Wg=null,Xg=null,Yg=null;function Ug(a,b){var c=a.type._context;G(Vg,c._currentValue,a);c._currentValue=b}function Zg(a){var b=Vg.current;F(Vg,a);a.type._context._currentValue=b}function Ig(a,b){Wg=a;Yg=Xg=null;var c=a.contextDependencies;null!==c&&c.expirationTime>=b&&(qg=!0);a.contextDependencies=null}
function M(a,b){if(Yg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)Yg=a,b=1073741823;b={context:a,observedBits:b,next:null};null===Xg?(null===Wg?x("308"):void 0,Xg=b,Wg.contextDependencies={first:b,expirationTime:0}):Xg=Xg.next=b}return a._currentValue}var $g=0,rf=1,sf=2,ah=3,Pg=!1;function bh(a){return{baseState:a,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}
function ch(a){return{baseState:a.baseState,firstUpdate:a.firstUpdate,lastUpdate:a.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function nf(a){return{expirationTime:a,tag:$g,payload:null,callback:null,next:null,nextEffect:null}}function dh(a,b){null===a.lastUpdate?a.firstUpdate=a.lastUpdate=b:(a.lastUpdate.next=b,a.lastUpdate=b)}
function pf(a,b){var c=a.alternate;if(null===c){var d=a.updateQueue;var e=null;null===d&&(d=a.updateQueue=bh(a.memoizedState))}else d=a.updateQueue,e=c.updateQueue,null===d?null===e?(d=a.updateQueue=bh(a.memoizedState),e=c.updateQueue=bh(c.memoizedState)):d=a.updateQueue=ch(e):null===e&&(e=c.updateQueue=ch(d));null===e||d===e?dh(d,b):null===d.lastUpdate||null===e.lastUpdate?(dh(d,b),dh(e,b)):(dh(d,b),e.lastUpdate=b)}
function eh(a,b){var c=a.updateQueue;c=null===c?a.updateQueue=bh(a.memoizedState):fh(a,c);null===c.lastCapturedUpdate?c.firstCapturedUpdate=c.lastCapturedUpdate=b:(c.lastCapturedUpdate.next=b,c.lastCapturedUpdate=b)}function fh(a,b){var c=a.alternate;null!==c&&b===c.updateQueue&&(b=a.updateQueue=ch(b));return b}
function gh(a,b,c,d,e,f){switch(c.tag){case rf:return a=c.payload,"function"===typeof a?a.call(f,d,e):a;case ah:a.effectTag=a.effectTag&-2049|64;case $g:a=c.payload;e="function"===typeof a?a.call(f,d,e):a;if(null===e||void 0===e)break;return n({},d,e);case sf:Pg=!0}return d}
function yf(a,b,c,d,e){Pg=!1;b=fh(a,b);for(var f=b.baseState,g=null,h=0,l=b.firstUpdate,k=f;null!==l;){var m=l.expirationTime;m<e?(null===g&&(g=l,f=k),h<m&&(h=m)):(k=gh(a,b,l,k,c,d),null!==l.callback&&(a.effectTag|=32,l.nextEffect=null,null===b.lastEffect?b.firstEffect=b.lastEffect=l:(b.lastEffect.nextEffect=l,b.lastEffect=l)));l=l.next}m=null;for(l=b.firstCapturedUpdate;null!==l;){var p=l.expirationTime;p<e?(null===m&&(m=l,null===g&&(f=k)),h<p&&(h=p)):(k=gh(a,b,l,k,c,d),null!==l.callback&&(a.effectTag|=
32,l.nextEffect=null,null===b.lastCapturedEffect?b.firstCapturedEffect=b.lastCapturedEffect=l:(b.lastCapturedEffect.nextEffect=l,b.lastCapturedEffect=l)));l=l.next}null===g&&(b.lastUpdate=null);null===m?b.lastCapturedUpdate=null:a.effectTag|=32;null===g&&null===m&&(f=k);b.baseState=f;b.firstUpdate=g;b.firstCapturedUpdate=m;a.expirationTime=h;a.memoizedState=k}
function hh(a,b,c){null!==b.firstCapturedUpdate&&(null!==b.lastUpdate&&(b.lastUpdate.next=b.firstCapturedUpdate,b.lastUpdate=b.lastCapturedUpdate),b.firstCapturedUpdate=b.lastCapturedUpdate=null);ih(b.firstEffect,c);b.firstEffect=b.lastEffect=null;ih(b.firstCapturedEffect,c);b.firstCapturedEffect=b.lastCapturedEffect=null}function ih(a,b){for(;null!==a;){var c=a.callback;if(null!==c){a.callback=null;var d=b;"function"!==typeof c?x("191",c):void 0;c.call(d)}a=a.nextEffect}}
function jh(a,b){return{value:a,source:b,stack:jc(b)}}function kh(a){a.effectTag|=4}var lh=void 0,mh=void 0,nh=void 0,oh=void 0;lh=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};mh=function(){};
nh=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;If(N.current);a=null;switch(c){case "input":f=vc(g,f);d=vc(g,d);a=[];break;case "option":f=$d(g,f);d=$d(g,d);a=[];break;case "select":f=n({},f,{value:void 0});d=n({},d,{value:void 0});a=[];break;case "textarea":f=be(g,f);d=be(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=te)}qe(c,d);g=c=void 0;var h=null;for(c in f)if(!d.hasOwnProperty(c)&&f.hasOwnProperty(c)&&null!=f[c])if("style"===
c){var l=f[c];for(g in l)l.hasOwnProperty(g)&&(h||(h={}),h[g]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(ra.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in d){var k=d[c];l=null!=f?f[c]:void 0;if(d.hasOwnProperty(c)&&k!==l&&(null!=k||null!=l))if("style"===c)if(l){for(g in l)!l.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(h||(h={}),h[g]="");for(g in k)k.hasOwnProperty(g)&&l[g]!==k[g]&&(h||
(h={}),h[g]=k[g])}else h||(a||(a=[]),a.push(c,h)),h=k;else"dangerouslySetInnerHTML"===c?(k=k?k.__html:void 0,l=l?l.__html:void 0,null!=k&&l!==k&&(a=a||[]).push(c,""+k)):"children"===c?l===k||"string"!==typeof k&&"number"!==typeof k||(a=a||[]).push(c,""+k):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(ra.hasOwnProperty(c)?(null!=k&&se(e,c),a||l===k||(a=[])):(a=a||[]).push(c,k))}h&&(a=a||[]).push("style",h);e=a;(b.updateQueue=e)&&kh(b)}};oh=function(a,b,c,d){c!==d&&kh(b)};
var ph="function"===typeof WeakSet?WeakSet:Set;function qh(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=jc(c));null!==c&&ic(c.type);b=b.value;null!==a&&1===a.tag&&ic(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function rh(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){sh(a,c)}else b.current=null}
function th(a,b,c){c=c.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do{if((d.tag&a)!==Nf){var e=d.destroy;d.destroy=void 0;void 0!==e&&e()}(d.tag&b)!==Nf&&(e=d.create,d.destroy=e());d=d.next}while(d!==c)}}
function uh(a,b){for(var c=a;;){if(5===c.tag){var d=c.stateNode;if(b)d.style.display="none";else{d=c.stateNode;var e=c.memoizedProps.style;e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null;d.style.display=ne("display",e)}}else if(6===c.tag)c.stateNode.nodeValue=b?"":c.memoizedProps;else if(13===c.tag&&null!==c.memoizedState){d=c.child.sibling;d.return=c;c=d;continue}else if(null!==c.child){c.child.return=c;c=c.child;continue}if(c===a)break;for(;null===c.sibling;){if(null===c.return||
c.return===a)return;c=c.return}c.sibling.return=c.return;c=c.sibling}}
function vh(a){"function"===typeof Re&&Re(a);switch(a.tag){case 0:case 11:case 14:case 15:var b=a.updateQueue;if(null!==b&&(b=b.lastEffect,null!==b)){var c=b=b.next;do{var d=c.destroy;if(void 0!==d){var e=a;try{d()}catch(f){sh(e,f)}}c=c.next}while(c!==b)}break;case 1:rh(a);b=a.stateNode;if("function"===typeof b.componentWillUnmount)try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(f){sh(a,f)}break;case 5:rh(a);break;case 4:wh(a)}}
function xh(a){return 5===a.tag||3===a.tag||4===a.tag}
function yh(a){a:{for(var b=a.return;null!==b;){if(xh(b)){var c=b;break a}b=b.return}x("160");c=void 0}var d=b=void 0;switch(c.tag){case 5:b=c.stateNode;d=!1;break;case 3:b=c.stateNode.containerInfo;d=!0;break;case 4:b=c.stateNode.containerInfo;d=!0;break;default:x("161")}c.effectTag&16&&(ke(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||xh(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.effectTag&
2)continue b;if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}for(var e=a;;){if(5===e.tag||6===e.tag)if(c)if(d){var f=b,g=e.stateNode,h=c;8===f.nodeType?f.parentNode.insertBefore(g,h):f.insertBefore(g,h)}else b.insertBefore(e.stateNode,c);else d?(g=b,h=e.stateNode,8===g.nodeType?(f=g.parentNode,f.insertBefore(h,g)):(f=g,f.appendChild(h)),g=g._reactRootContainer,null!==g&&void 0!==g||null!==f.onclick||(f.onclick=te)):b.appendChild(e.stateNode);
else if(4!==e.tag&&null!==e.child){e.child.return=e;e=e.child;continue}if(e===a)break;for(;null===e.sibling;){if(null===e.return||e.return===a)return;e=e.return}e.sibling.return=e.return;e=e.sibling}}
function wh(a){for(var b=a,c=!1,d=void 0,e=void 0;;){if(!c){c=b.return;a:for(;;){null===c?x("160"):void 0;switch(c.tag){case 5:d=c.stateNode;e=!1;break a;case 3:d=c.stateNode.containerInfo;e=!0;break a;case 4:d=c.stateNode.containerInfo;e=!0;break a}c=c.return}c=!0}if(5===b.tag||6===b.tag){a:for(var f=b,g=f;;)if(vh(g),null!==g.child&&4!==g.tag)g.child.return=g,g=g.child;else{if(g===f)break;for(;null===g.sibling;){if(null===g.return||g.return===f)break a;g=g.return}g.sibling.return=g.return;g=g.sibling}e?
(f=d,g=b.stateNode,8===f.nodeType?f.parentNode.removeChild(g):f.removeChild(g)):d.removeChild(b.stateNode)}else if(4===b.tag){if(null!==b.child){d=b.stateNode.containerInfo;e=!0;b.child.return=b;b=b.child;continue}}else if(vh(b),null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return;b=b.return;4===b.tag&&(c=!1)}b.sibling.return=b.return;b=b.sibling}}
function zh(a,b){switch(b.tag){case 0:case 11:case 14:case 15:th(Pf,Qf,b);break;case 1:break;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps;a=null!==a?a.memoizedProps:d;var e=b.type,f=b.updateQueue;b.updateQueue=null;null!==f&&Ce(c,f,e,a,d,b)}break;case 6:null===b.stateNode?x("162"):void 0;b.stateNode.nodeValue=b.memoizedProps;break;case 3:break;case 12:break;case 13:c=b.memoizedState;d=void 0;a=b;null===c?d=!1:(d=!0,a=b.child,0===c.timedOutAt&&(c.timedOutAt=lf()));null!==a&&uh(a,d);c=
b.updateQueue;if(null!==c){b.updateQueue=null;var g=b.stateNode;null===g&&(g=b.stateNode=new ph);c.forEach(function(a){var c=Ah.bind(null,b,a);g.has(a)||(g.add(a),a.then(c,c))})}break;case 17:break;default:x("163")}}var Bh="function"===typeof WeakMap?WeakMap:Map;function Ch(a,b,c){c=nf(c);c.tag=ah;c.payload={element:null};var d=b.value;c.callback=function(){Dh(d);qh(a,b)};return c}
function Eh(a,b,c){c=nf(c);c.tag=ah;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===Fh?Fh=new Set([this]):Fh.add(this));var c=b.value,e=b.stack;qh(a,b);this.componentDidCatch(c,{componentStack:null!==e?e:""})});return c}
function Gh(a){switch(a.tag){case 1:J(a.type)&&Ke(a);var b=a.effectTag;return b&2048?(a.effectTag=b&-2049|64,a):null;case 3:return Kf(a),Le(a),b=a.effectTag,0!==(b&64)?x("285"):void 0,a.effectTag=b&-2049|64,a;case 5:return Mf(a),null;case 13:return b=a.effectTag,b&2048?(a.effectTag=b&-2049|64,a):null;case 18:return null;case 4:return Kf(a),null;case 10:return Zg(a),null;default:return null}}
var Hh=Tb.ReactCurrentDispatcher,Ih=Tb.ReactCurrentOwner,Jh=1073741822,Kh=!1,T=null,Lh=null,U=0,Mh=-1,Nh=!1,V=null,Oh=!1,Ph=null,Qh=null,Rh=null,Fh=null;function Sh(){if(null!==T)for(var a=T.return;null!==a;){var b=a;switch(b.tag){case 1:var c=b.type.childContextTypes;null!==c&&void 0!==c&&Ke(b);break;case 3:Kf(b);Le(b);break;case 5:Mf(b);break;case 4:Kf(b);break;case 10:Zg(b)}a=a.return}Lh=null;U=0;Mh=-1;Nh=!1;T=null}
function Th(){for(;null!==V;){var a=V.effectTag;a&16&&ke(V.stateNode,"");if(a&128){var b=V.alternate;null!==b&&(b=b.ref,null!==b&&("function"===typeof b?b(null):b.current=null))}switch(a&14){case 2:yh(V);V.effectTag&=-3;break;case 6:yh(V);V.effectTag&=-3;zh(V.alternate,V);break;case 4:zh(V.alternate,V);break;case 8:a=V,wh(a),a.return=null,a.child=null,a.memoizedState=null,a.updateQueue=null,a=a.alternate,null!==a&&(a.return=null,a.child=null,a.memoizedState=null,a.updateQueue=null)}V=V.nextEffect}}
function Uh(){for(;null!==V;){if(V.effectTag&256)a:{var a=V.alternate,b=V;switch(b.tag){case 0:case 11:case 15:th(Of,Nf,b);break a;case 1:if(b.effectTag&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:L(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}break a;case 3:case 5:case 6:case 4:case 17:break a;default:x("163")}}V=V.nextEffect}}
function Vh(a,b){for(;null!==V;){var c=V.effectTag;if(c&36){var d=V.alternate,e=V,f=b;switch(e.tag){case 0:case 11:case 15:th(Rf,Sf,e);break;case 1:var g=e.stateNode;if(e.effectTag&4)if(null===d)g.componentDidMount();else{var h=e.elementType===e.type?d.memoizedProps:L(e.type,d.memoizedProps);g.componentDidUpdate(h,d.memoizedState,g.__reactInternalSnapshotBeforeUpdate)}d=e.updateQueue;null!==d&&hh(e,d,g,f);break;case 3:d=e.updateQueue;if(null!==d){g=null;if(null!==e.child)switch(e.child.tag){case 5:g=
e.child.stateNode;break;case 1:g=e.child.stateNode}hh(e,d,g,f)}break;case 5:f=e.stateNode;null===d&&e.effectTag&4&&we(e.type,e.memoizedProps)&&f.focus();break;case 6:break;case 4:break;case 12:break;case 13:break;case 17:break;default:x("163")}}c&128&&(e=V.ref,null!==e&&(f=V.stateNode,"function"===typeof e?e(f):e.current=f));c&512&&(Ph=a);V=V.nextEffect}}
function Wh(a,b){Rh=Qh=Ph=null;var c=W;W=!0;do{if(b.effectTag&512){var d=!1,e=void 0;try{var f=b;th(Uf,Nf,f);th(Nf,Tf,f)}catch(g){d=!0,e=g}d&&sh(b,e)}b=b.nextEffect}while(null!==b);W=c;c=a.expirationTime;0!==c&&Xh(a,c);X||W||Yh(1073741823,!1)}function of(){null!==Qh&&Be(Qh);null!==Rh&&Rh()}
function Zh(a,b){Oh=Kh=!0;a.current===b?x("177"):void 0;var c=a.pendingCommitExpirationTime;0===c?x("261"):void 0;a.pendingCommitExpirationTime=0;var d=b.expirationTime,e=b.childExpirationTime;ef(a,e>d?e:d);Ih.current=null;d=void 0;1<b.effectTag?null!==b.lastEffect?(b.lastEffect.nextEffect=b,d=b.firstEffect):d=b:d=b.firstEffect;ue=Bd;ve=Pd();Bd=!1;for(V=d;null!==V;){e=!1;var f=void 0;try{Uh()}catch(h){e=!0,f=h}e&&(null===V?x("178"):void 0,sh(V,f),null!==V&&(V=V.nextEffect))}for(V=d;null!==V;){e=!1;
f=void 0;try{Th()}catch(h){e=!0,f=h}e&&(null===V?x("178"):void 0,sh(V,f),null!==V&&(V=V.nextEffect))}Qd(ve);ve=null;Bd=!!ue;ue=null;a.current=b;for(V=d;null!==V;){e=!1;f=void 0;try{Vh(a,c)}catch(h){e=!0,f=h}e&&(null===V?x("178"):void 0,sh(V,f),null!==V&&(V=V.nextEffect))}if(null!==d&&null!==Ph){var g=Wh.bind(null,a,d);Qh=r.unstable_runWithPriority(r.unstable_NormalPriority,function(){return Ae(g)});Rh=g}Kh=Oh=!1;"function"===typeof Qe&&Qe(b.stateNode);c=b.expirationTime;b=b.childExpirationTime;b=
b>c?b:c;0===b&&(Fh=null);$h(a,b)}
function ai(a){for(;;){var b=a.alternate,c=a.return,d=a.sibling;if(0===(a.effectTag&1024)){T=a;a:{var e=b;b=a;var f=U;var g=b.pendingProps;switch(b.tag){case 2:break;case 16:break;case 15:case 0:break;case 1:J(b.type)&&Ke(b);break;case 3:Kf(b);Le(b);g=b.stateNode;g.pendingContext&&(g.context=g.pendingContext,g.pendingContext=null);if(null===e||null===e.child)Eg(b),b.effectTag&=-3;mh(b);break;case 5:Mf(b);var h=If(Hf.current);f=b.type;if(null!==e&&null!=b.stateNode)nh(e,b,f,g,h),e.ref!==b.ref&&(b.effectTag|=
128);else if(g){var l=If(N.current);if(Eg(b)){g=b;e=g.stateNode;var k=g.type,m=g.memoizedProps,p=h;e[Fa]=g;e[Ga]=m;f=void 0;h=k;switch(h){case "iframe":case "object":E("load",e);break;case "video":case "audio":for(k=0;k<ab.length;k++)E(ab[k],e);break;case "source":E("error",e);break;case "img":case "image":case "link":E("error",e);E("load",e);break;case "form":E("reset",e);E("submit",e);break;case "details":E("toggle",e);break;case "input":wc(e,m);E("invalid",e);se(p,"onChange");break;case "select":e._wrapperState=
{wasMultiple:!!m.multiple};E("invalid",e);se(p,"onChange");break;case "textarea":ce(e,m),E("invalid",e),se(p,"onChange")}qe(h,m);k=null;for(f in m)m.hasOwnProperty(f)&&(l=m[f],"children"===f?"string"===typeof l?e.textContent!==l&&(k=["children",l]):"number"===typeof l&&e.textContent!==""+l&&(k=["children",""+l]):ra.hasOwnProperty(f)&&null!=l&&se(p,f));switch(h){case "input":Rb(e);Ac(e,m,!0);break;case "textarea":Rb(e);ee(e,m);break;case "select":case "option":break;default:"function"===typeof m.onClick&&
(e.onclick=te)}f=k;g.updateQueue=f;g=null!==f?!0:!1;g&&kh(b)}else{m=b;p=f;e=g;k=9===h.nodeType?h:h.ownerDocument;l===fe.html&&(l=ge(p));l===fe.html?"script"===p?(e=k.createElement("div"),e.innerHTML="<script>\x3c/script>",k=e.removeChild(e.firstChild)):"string"===typeof e.is?k=k.createElement(p,{is:e.is}):(k=k.createElement(p),"select"===p&&(p=k,e.multiple?p.multiple=!0:e.size&&(p.size=e.size))):k=k.createElementNS(l,p);e=k;e[Fa]=m;e[Ga]=g;lh(e,b,!1,!1);p=e;k=f;m=g;var t=h,A=re(k,m);switch(k){case "iframe":case "object":E("load",
p);h=m;break;case "video":case "audio":for(h=0;h<ab.length;h++)E(ab[h],p);h=m;break;case "source":E("error",p);h=m;break;case "img":case "image":case "link":E("error",p);E("load",p);h=m;break;case "form":E("reset",p);E("submit",p);h=m;break;case "details":E("toggle",p);h=m;break;case "input":wc(p,m);h=vc(p,m);E("invalid",p);se(t,"onChange");break;case "option":h=$d(p,m);break;case "select":p._wrapperState={wasMultiple:!!m.multiple};h=n({},m,{value:void 0});E("invalid",p);se(t,"onChange");break;case "textarea":ce(p,
m);h=be(p,m);E("invalid",p);se(t,"onChange");break;default:h=m}qe(k,h);l=void 0;var v=k,R=p,u=h;for(l in u)if(u.hasOwnProperty(l)){var q=u[l];"style"===l?oe(R,q):"dangerouslySetInnerHTML"===l?(q=q?q.__html:void 0,null!=q&&je(R,q)):"children"===l?"string"===typeof q?("textarea"!==v||""!==q)&&ke(R,q):"number"===typeof q&&ke(R,""+q):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ra.hasOwnProperty(l)?null!=q&&se(t,l):null!=q&&tc(R,l,q,A))}switch(k){case "input":Rb(p);
Ac(p,m,!1);break;case "textarea":Rb(p);ee(p,m);break;case "option":null!=m.value&&p.setAttribute("value",""+uc(m.value));break;case "select":h=p;h.multiple=!!m.multiple;p=m.value;null!=p?ae(h,!!m.multiple,p,!1):null!=m.defaultValue&&ae(h,!!m.multiple,m.defaultValue,!0);break;default:"function"===typeof h.onClick&&(p.onclick=te)}(g=we(f,g))&&kh(b);b.stateNode=e}null!==b.ref&&(b.effectTag|=128)}else null===b.stateNode?x("166"):void 0;break;case 6:e&&null!=b.stateNode?oh(e,b,e.memoizedProps,g):("string"!==
typeof g&&(null===b.stateNode?x("166"):void 0),e=If(Hf.current),If(N.current),Eg(b)?(g=b,f=g.stateNode,e=g.memoizedProps,f[Fa]=g,(g=f.nodeValue!==e)&&kh(b)):(f=b,g=(9===e.nodeType?e:e.ownerDocument).createTextNode(g),g[Fa]=b,f.stateNode=g));break;case 11:break;case 13:g=b.memoizedState;if(0!==(b.effectTag&64)){b.expirationTime=f;T=b;break a}g=null!==g;f=null!==e&&null!==e.memoizedState;null!==e&&!g&&f&&(e=e.child.sibling,null!==e&&(h=b.firstEffect,null!==h?(b.firstEffect=e,e.nextEffect=h):(b.firstEffect=
b.lastEffect=e,e.nextEffect=null),e.effectTag=8));if(g||f)b.effectTag|=4;break;case 7:break;case 8:break;case 12:break;case 4:Kf(b);mh(b);break;case 10:Zg(b);break;case 9:break;case 14:break;case 17:J(b.type)&&Ke(b);break;case 18:break;default:x("156")}T=null}b=a;if(1===U||1!==b.childExpirationTime){g=0;for(f=b.child;null!==f;)e=f.expirationTime,h=f.childExpirationTime,e>g&&(g=e),h>g&&(g=h),f=f.sibling;b.childExpirationTime=g}if(null!==T)return T;null!==c&&0===(c.effectTag&1024)&&(null===c.firstEffect&&
(c.firstEffect=a.firstEffect),null!==a.lastEffect&&(null!==c.lastEffect&&(c.lastEffect.nextEffect=a.firstEffect),c.lastEffect=a.lastEffect),1<a.effectTag&&(null!==c.lastEffect?c.lastEffect.nextEffect=a:c.firstEffect=a,c.lastEffect=a))}else{a=Gh(a,U);if(null!==a)return a.effectTag&=1023,a;null!==c&&(c.firstEffect=c.lastEffect=null,c.effectTag|=1024)}if(null!==d)return d;if(null!==c)a=c;else break}return null}
function bi(a){var b=Tg(a.alternate,a,U);a.memoizedProps=a.pendingProps;null===b&&(b=ai(a));Ih.current=null;return b}
function ci(a,b){Kh?x("243"):void 0;of();Kh=!0;var c=Hh.current;Hh.current=kg;var d=a.nextExpirationTimeToWorkOn;if(d!==U||a!==Lh||null===T)Sh(),Lh=a,U=d,T=Xe(Lh.current,null,U),a.pendingCommitExpirationTime=0;var e=!1;do{try{if(b)for(;null!==T&&!di();)T=bi(T);else for(;null!==T;)T=bi(T)}catch(u){if(Yg=Xg=Wg=null,lg(),null===T)e=!0,Dh(u);else{null===T?x("271"):void 0;var f=T,g=f.return;if(null===g)e=!0,Dh(u);else{a:{var h=a,l=g,k=f,m=u;g=U;k.effectTag|=1024;k.firstEffect=k.lastEffect=null;if(null!==
m&&"object"===typeof m&&"function"===typeof m.then){var p=m;m=l;var t=-1,A=-1;do{if(13===m.tag){var v=m.alternate;if(null!==v&&(v=v.memoizedState,null!==v)){A=10*(1073741822-v.timedOutAt);break}v=m.pendingProps.maxDuration;if("number"===typeof v)if(0>=v)t=0;else if(-1===t||v<t)t=v}m=m.return}while(null!==m);m=l;do{if(v=13===m.tag)v=void 0===m.memoizedProps.fallback?!1:null===m.memoizedState;if(v){l=m.updateQueue;null===l?(l=new Set,l.add(p),m.updateQueue=l):l.add(p);if(0===(m.mode&1)){m.effectTag|=
64;k.effectTag&=-1957;1===k.tag&&(null===k.alternate?k.tag=17:(g=nf(1073741823),g.tag=sf,pf(k,g)));k.expirationTime=1073741823;break a}k=h;l=g;var R=k.pingCache;null===R?(R=k.pingCache=new Bh,v=new Set,R.set(p,v)):(v=R.get(p),void 0===v&&(v=new Set,R.set(p,v)));v.has(l)||(v.add(l),k=ei.bind(null,k,p,l),p.then(k,k));-1===t?h=1073741823:(-1===A&&(A=10*(1073741822-gf(h,g))-5E3),h=A+t);0<=h&&Mh<h&&(Mh=h);m.effectTag|=2048;m.expirationTime=g;break a}m=m.return}while(null!==m);m=Error((ic(k.type)||"A React component")+
" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+jc(k))}Nh=!0;m=jh(m,k);h=l;do{switch(h.tag){case 3:h.effectTag|=2048;h.expirationTime=g;g=Ch(h,m,g);eh(h,g);break a;case 1:if(t=m,A=h.type,k=h.stateNode,0===(h.effectTag&64)&&("function"===typeof A.getDerivedStateFromError||null!==k&&"function"===typeof k.componentDidCatch&&(null===Fh||!Fh.has(k)))){h.effectTag|=2048;
h.expirationTime=g;g=Eh(h,t,g);eh(h,g);break a}}h=h.return}while(null!==h)}T=ai(f);continue}}}break}while(1);Kh=!1;Hh.current=c;Yg=Xg=Wg=null;lg();if(e)Lh=null,a.finishedWork=null;else if(null!==T)a.finishedWork=null;else{c=a.current.alternate;null===c?x("281"):void 0;Lh=null;if(Nh){e=a.latestPendingTime;f=a.latestSuspendedTime;g=a.latestPingedTime;if(0!==e&&e<d||0!==f&&f<d||0!==g&&g<d){ff(a,d);fi(a,c,d,a.expirationTime,-1);return}if(!a.didError&&b){a.didError=!0;d=a.nextExpirationTimeToWorkOn=d;
b=a.expirationTime=1073741823;fi(a,c,d,b,-1);return}}b&&-1!==Mh?(ff(a,d),b=10*(1073741822-gf(a,d)),b<Mh&&(Mh=b),b=10*(1073741822-lf()),b=Mh-b,fi(a,c,d,a.expirationTime,0>b?0:b)):(a.pendingCommitExpirationTime=d,a.finishedWork=c)}}
function sh(a,b){for(var c=a.return;null!==c;){switch(c.tag){case 1:var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Fh||!Fh.has(d))){a=jh(b,a);a=Eh(c,a,1073741823);pf(c,a);qf(c,1073741823);return}break;case 3:a=jh(b,a);a=Ch(c,a,1073741823);pf(c,a);qf(c,1073741823);return}c=c.return}3===a.tag&&(c=jh(b,a),c=Ch(a,c,1073741823),pf(a,c),qf(a,1073741823))}
function mf(a,b){var c=r.unstable_getCurrentPriorityLevel(),d=void 0;if(0===(b.mode&1))d=1073741823;else if(Kh&&!Oh)d=U;else{switch(c){case r.unstable_ImmediatePriority:d=1073741823;break;case r.unstable_UserBlockingPriority:d=1073741822-10*(((1073741822-a+15)/10|0)+1);break;case r.unstable_NormalPriority:d=1073741822-25*(((1073741822-a+500)/25|0)+1);break;case r.unstable_LowPriority:case r.unstable_IdlePriority:d=1;break;default:x("313")}null!==Lh&&d===U&&--d}c===r.unstable_UserBlockingPriority&&
(0===gi||d<gi)&&(gi=d);return d}function ei(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);if(null!==Lh&&U===c)Lh=null;else if(b=a.earliestSuspendedTime,d=a.latestSuspendedTime,0!==b&&c<=b&&c>=d){a.didError=!1;b=a.latestPingedTime;if(0===b||b>c)a.latestPingedTime=c;df(c,a);c=a.expirationTime;0!==c&&Xh(a,c)}}function Ah(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=lf();b=mf(b,a);a=hi(a,b);null!==a&&(cf(a,b),b=a.expirationTime,0!==b&&Xh(a,b))}
function hi(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return}return e}
function qf(a,b){a=hi(a,b);null!==a&&(!Kh&&0!==U&&b>U&&Sh(),cf(a,b),Kh&&!Oh&&Lh===a||Xh(a,a.expirationTime),ii>ji&&(ii=0,x("185")))}function ki(a,b,c,d,e){return r.unstable_runWithPriority(r.unstable_ImmediatePriority,function(){return a(b,c,d,e)})}var li=null,Y=null,mi=0,ni=void 0,W=!1,oi=null,Z=0,gi=0,pi=!1,qi=null,X=!1,ri=!1,si=null,ti=r.unstable_now(),ui=1073741822-(ti/10|0),vi=ui,ji=50,ii=0,wi=null;function xi(){ui=1073741822-((r.unstable_now()-ti)/10|0)}
function yi(a,b){if(0!==mi){if(b<mi)return;null!==ni&&r.unstable_cancelCallback(ni)}mi=b;a=r.unstable_now()-ti;ni=r.unstable_scheduleCallback(zi,{timeout:10*(1073741822-b)-a})}function fi(a,b,c,d,e){a.expirationTime=d;0!==e||di()?0<e&&(a.timeoutHandle=ye(Ai.bind(null,a,b,c),e)):(a.pendingCommitExpirationTime=c,a.finishedWork=b)}function Ai(a,b,c){a.pendingCommitExpirationTime=c;a.finishedWork=b;xi();vi=ui;Bi(a,c)}function $h(a,b){a.expirationTime=b;a.finishedWork=null}
function lf(){if(W)return vi;Ci();if(0===Z||1===Z)xi(),vi=ui;return vi}function Xh(a,b){null===a.nextScheduledRoot?(a.expirationTime=b,null===Y?(li=Y=a,a.nextScheduledRoot=a):(Y=Y.nextScheduledRoot=a,Y.nextScheduledRoot=li)):b>a.expirationTime&&(a.expirationTime=b);W||(X?ri&&(oi=a,Z=1073741823,Di(a,1073741823,!1)):1073741823===b?Yh(1073741823,!1):yi(a,b))}
function Ci(){var a=0,b=null;if(null!==Y)for(var c=Y,d=li;null!==d;){var e=d.expirationTime;if(0===e){null===c||null===Y?x("244"):void 0;if(d===d.nextScheduledRoot){li=Y=d.nextScheduledRoot=null;break}else if(d===li)li=e=d.nextScheduledRoot,Y.nextScheduledRoot=e,d.nextScheduledRoot=null;else if(d===Y){Y=c;Y.nextScheduledRoot=li;d.nextScheduledRoot=null;break}else c.nextScheduledRoot=d.nextScheduledRoot,d.nextScheduledRoot=null;d=c.nextScheduledRoot}else{e>a&&(a=e,b=d);if(d===Y)break;if(1073741823===
a)break;c=d;d=d.nextScheduledRoot}}oi=b;Z=a}var Ei=!1;function di(){return Ei?!0:r.unstable_shouldYield()?Ei=!0:!1}function zi(){try{if(!di()&&null!==li){xi();var a=li;do{var b=a.expirationTime;0!==b&&ui<=b&&(a.nextExpirationTimeToWorkOn=ui);a=a.nextScheduledRoot}while(a!==li)}Yh(0,!0)}finally{Ei=!1}}
function Yh(a,b){Ci();if(b)for(xi(),vi=ui;null!==oi&&0!==Z&&a<=Z&&!(Ei&&ui>Z);)Di(oi,Z,ui>Z),Ci(),xi(),vi=ui;else for(;null!==oi&&0!==Z&&a<=Z;)Di(oi,Z,!1),Ci();b&&(mi=0,ni=null);0!==Z&&yi(oi,Z);ii=0;wi=null;if(null!==si)for(a=si,si=null,b=0;b<a.length;b++){var c=a[b];try{c._onComplete()}catch(d){pi||(pi=!0,qi=d)}}if(pi)throw a=qi,qi=null,pi=!1,a;}function Bi(a,b){W?x("253"):void 0;oi=a;Z=b;Di(a,b,!1);Yh(1073741823,!1)}
function Di(a,b,c){W?x("245"):void 0;W=!0;if(c){var d=a.finishedWork;null!==d?Fi(a,d,b):(a.finishedWork=null,d=a.timeoutHandle,-1!==d&&(a.timeoutHandle=-1,ze(d)),ci(a,c),d=a.finishedWork,null!==d&&(di()?a.finishedWork=d:Fi(a,d,b)))}else d=a.finishedWork,null!==d?Fi(a,d,b):(a.finishedWork=null,d=a.timeoutHandle,-1!==d&&(a.timeoutHandle=-1,ze(d)),ci(a,c),d=a.finishedWork,null!==d&&Fi(a,d,b));W=!1}
function Fi(a,b,c){var d=a.firstBatch;if(null!==d&&d._expirationTime>=c&&(null===si?si=[d]:si.push(d),d._defer)){a.finishedWork=b;a.expirationTime=0;return}a.finishedWork=null;a===wi?ii++:(wi=a,ii=0);r.unstable_runWithPriority(r.unstable_ImmediatePriority,function(){Zh(a,b)})}function Dh(a){null===oi?x("246"):void 0;oi.expirationTime=0;pi||(pi=!0,qi=a)}function Gi(a,b){var c=X;X=!0;try{return a(b)}finally{(X=c)||W||Yh(1073741823,!1)}}
function Hi(a,b){if(X&&!ri){ri=!0;try{return a(b)}finally{ri=!1}}return a(b)}function Ii(a,b,c){X||W||0===gi||(Yh(gi,!1),gi=0);var d=X;X=!0;try{return r.unstable_runWithPriority(r.unstable_UserBlockingPriority,function(){return a(b,c)})}finally{(X=d)||W||Yh(1073741823,!1)}}
function Ji(a,b,c,d,e){var f=b.current;a:if(c){c=c._reactInternalFiber;b:{2===ed(c)&&1===c.tag?void 0:x("170");var g=c;do{switch(g.tag){case 3:g=g.stateNode.context;break b;case 1:if(J(g.type)){g=g.stateNode.__reactInternalMemoizedMergedChildContext;break b}}g=g.return}while(null!==g);x("171");g=void 0}if(1===c.tag){var h=c.type;if(J(h)){c=Ne(c,h,g);break a}}c=g}else c=He;null===b.context?b.context=c:b.pendingContext=c;b=e;e=nf(d);e.payload={element:a};b=void 0===b?null:b;null!==b&&(e.callback=b);
of();pf(f,e);qf(f,d);return d}function Ki(a,b,c,d){var e=b.current,f=lf();e=mf(f,e);return Ji(a,b,c,e,d)}function Li(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function Mi(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:Wb,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
Ab=function(a,b,c){switch(b){case "input":yc(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Ka(d);e?void 0:x("90");Sb(d);yc(d,e)}}}break;case "textarea":de(a,c);break;case "select":b=c.value,null!=b&&ae(a,!!c.multiple,b,!1)}};
function Ni(a){var b=1073741822-25*(((1073741822-lf()+500)/25|0)+1);b>=Jh&&(b=Jh-1);this._expirationTime=Jh=b;this._root=a;this._callbacks=this._next=null;this._hasChildren=this._didComplete=!1;this._children=null;this._defer=!0}Ni.prototype.render=function(a){this._defer?void 0:x("250");this._hasChildren=!0;this._children=a;var b=this._root._internalRoot,c=this._expirationTime,d=new Oi;Ji(a,b,null,c,d._onCommit);return d};
Ni.prototype.then=function(a){if(this._didComplete)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
Ni.prototype.commit=function(){var a=this._root._internalRoot,b=a.firstBatch;this._defer&&null!==b?void 0:x("251");if(this._hasChildren){var c=this._expirationTime;if(b!==this){this._hasChildren&&(c=this._expirationTime=b._expirationTime,this.render(this._children));for(var d=null,e=b;e!==this;)d=e,e=e._next;null===d?x("251"):void 0;d._next=e._next;this._next=b;a.firstBatch=this}this._defer=!1;Bi(a,c);b=this._next;this._next=null;b=a.firstBatch=b;null!==b&&b._hasChildren&&b.render(b._children)}else this._next=
null,this._defer=!1};Ni.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++)(0,a[b])()}};function Oi(){this._callbacks=null;this._didCommit=!1;this._onCommit=this._onCommit.bind(this)}Oi.prototype.then=function(a){if(this._didCommit)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
Oi.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++){var c=a[b];"function"!==typeof c?x("191",c):void 0;c()}}};
function Pi(a,b,c){b=K(3,null,null,b?3:0);a={current:b,containerInfo:a,pendingChildren:null,pingCache:null,earliestPendingTime:0,latestPendingTime:0,earliestSuspendedTime:0,latestSuspendedTime:0,latestPingedTime:0,didError:!1,pendingCommitExpirationTime:0,finishedWork:null,timeoutHandle:-1,context:null,pendingContext:null,hydrate:c,nextExpirationTimeToWorkOn:0,expirationTime:0,firstBatch:null,nextScheduledRoot:null};this._internalRoot=b.stateNode=a}
Pi.prototype.render=function(a,b){var c=this._internalRoot,d=new Oi;b=void 0===b?null:b;null!==b&&d.then(b);Ki(a,c,null,d._onCommit);return d};Pi.prototype.unmount=function(a){var b=this._internalRoot,c=new Oi;a=void 0===a?null:a;null!==a&&c.then(a);Ki(null,b,null,c._onCommit);return c};Pi.prototype.legacy_renderSubtreeIntoContainer=function(a,b,c){var d=this._internalRoot,e=new Oi;c=void 0===c?null:c;null!==c&&e.then(c);Ki(b,d,a,e._onCommit);return e};
Pi.prototype.createBatch=function(){var a=new Ni(this),b=a._expirationTime,c=this._internalRoot,d=c.firstBatch;if(null===d)c.firstBatch=a,a._next=null;else{for(c=null;null!==d&&d._expirationTime>=b;)c=d,d=d._next;a._next=d;null!==c&&(c._next=a)}return a};function Qi(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}Gb=Gi;Hb=Ii;Ib=function(){W||0===gi||(Yh(gi,!1),gi=0)};
function Ri(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new Pi(a,!1,b)}
function Si(a,b,c,d,e){var f=c._reactRootContainer;if(f){if("function"===typeof e){var g=e;e=function(){var a=Li(f._internalRoot);g.call(a)}}null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)}else{f=c._reactRootContainer=Ri(c,d);if("function"===typeof e){var h=e;e=function(){var a=Li(f._internalRoot);h.call(a)}}Hi(function(){null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)})}return Li(f._internalRoot)}
function Ti(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;Qi(b)?void 0:x("200");return Mi(a,b,null,c)}
var Vi={createPortal:Ti,findDOMNode:function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;void 0===b&&("function"===typeof a.render?x("188"):x("268",Object.keys(a)));a=hd(b);a=null===a?null:a.stateNode;return a},hydrate:function(a,b,c){Qi(b)?void 0:x("200");return Si(null,a,b,!0,c)},render:function(a,b,c){Qi(b)?void 0:x("200");return Si(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,b,c,d){Qi(c)?void 0:x("200");null==a||void 0===a._reactInternalFiber?
x("38"):void 0;return Si(a,b,c,!1,d)},unmountComponentAtNode:function(a){Qi(a)?void 0:x("40");return a._reactRootContainer?(Hi(function(){Si(null,null,a,!1,function(){a._reactRootContainer=null})}),!0):!1},unstable_createPortal:function(){return Ti.apply(void 0,arguments)},unstable_batchedUpdates:Gi,unstable_interactiveUpdates:Ii,flushSync:function(a,b){W?x("187"):void 0;var c=X;X=!0;try{return ki(a,b)}finally{X=c,Yh(1073741823,!1)}},unstable_createRoot:Ui,unstable_flushControlled:function(a){var b=
X;X=!0;try{ki(a)}finally{(X=b)||W||Yh(1073741823,!1)}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[Ia,Ja,Ka,Ba.injectEventPluginsByName,pa,Qa,function(a){ya(a,Pa)},Eb,Fb,Dd,Da]}};function Ui(a,b){Qi(a)?void 0:x("299","unstable_createRoot");return new Pi(a,!0,null!=b&&!0===b.hydrate)}
(function(a){var b=a.findFiberByHostInstance;return Te(n({},a,{overrideProps:null,currentDispatcherRef:Tb.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=hd(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null}}))})({findFiberByHostInstance:Ha,bundleType:0,version:"16.8.6",rendererPackageName:"react-dom"});var Wi={default:Vi},Xi=Wi&&Vi||Wi;module.exports=Xi.default||Xi;


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
/* WEBPACK VAR INJECTION */(function(global) {/** @license React v0.13.6
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports,"__esModule",{value:!0});var d=null,e=!1,g=3,k=-1,l=-1,m=!1,n=!1;function p(){if(!m){var a=d.expirationTime;n?q():n=!0;r(t,a)}}
function u(){var a=d,b=d.next;if(d===b)d=null;else{var c=d.previous;d=c.next=b;b.previous=c}a.next=a.previous=null;c=a.callback;b=a.expirationTime;a=a.priorityLevel;var f=g,Q=l;g=a;l=b;try{var h=c()}finally{g=f,l=Q}if("function"===typeof h)if(h={callback:h,priorityLevel:a,expirationTime:b,next:null,previous:null},null===d)d=h.next=h.previous=h;else{c=null;a=d;do{if(a.expirationTime>=b){c=a;break}a=a.next}while(a!==d);null===c?c=d:c===d&&(d=h,p());b=c.previous;b.next=c.previous=h;h.next=c;h.previous=
b}}function v(){if(-1===k&&null!==d&&1===d.priorityLevel){m=!0;try{do u();while(null!==d&&1===d.priorityLevel)}finally{m=!1,null!==d?p():n=!1}}}function t(a){m=!0;var b=e;e=a;try{if(a)for(;null!==d;){var c=exports.unstable_now();if(d.expirationTime<=c){do u();while(null!==d&&d.expirationTime<=c)}else break}else if(null!==d){do u();while(null!==d&&!w())}}finally{m=!1,e=b,null!==d?p():n=!1,v()}}
var x=Date,y="function"===typeof setTimeout?setTimeout:void 0,z="function"===typeof clearTimeout?clearTimeout:void 0,A="function"===typeof requestAnimationFrame?requestAnimationFrame:void 0,B="function"===typeof cancelAnimationFrame?cancelAnimationFrame:void 0,C,D;function E(a){C=A(function(b){z(D);a(b)});D=y(function(){B(C);a(exports.unstable_now())},100)}
if("object"===typeof performance&&"function"===typeof performance.now){var F=performance;exports.unstable_now=function(){return F.now()}}else exports.unstable_now=function(){return x.now()};var r,q,w,G=null;"undefined"!==typeof window?G=window:"undefined"!==typeof global&&(G=global);
if(G&&G._schedMock){var H=G._schedMock;r=H[0];q=H[1];w=H[2];exports.unstable_now=H[3]}else if("undefined"===typeof window||"function"!==typeof MessageChannel){var I=null,J=function(a){if(null!==I)try{I(a)}finally{I=null}};r=function(a){null!==I?setTimeout(r,0,a):(I=a,setTimeout(J,0,!1))};q=function(){I=null};w=function(){return!1}}else{"undefined"!==typeof console&&("function"!==typeof A&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),
"function"!==typeof B&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));var K=null,L=!1,M=-1,N=!1,O=!1,P=0,R=33,S=33;w=function(){return P<=exports.unstable_now()};var T=new MessageChannel,U=T.port2;T.port1.onmessage=function(){L=!1;var a=K,b=M;K=null;M=-1;var c=exports.unstable_now(),f=!1;if(0>=P-c)if(-1!==b&&b<=c)f=!0;else{N||(N=!0,E(V));K=a;M=b;return}if(null!==a){O=!0;try{a(f)}finally{O=!1}}};
var V=function(a){if(null!==K){E(V);var b=a-P+S;b<S&&R<S?(8>b&&(b=8),S=b<R?R:b):R=b;P=a+S;L||(L=!0,U.postMessage(void 0))}else N=!1};r=function(a,b){K=a;M=b;O||0>b?U.postMessage(void 0):N||(N=!0,E(V))};q=function(){K=null;L=!1;M=-1}}exports.unstable_ImmediatePriority=1;exports.unstable_UserBlockingPriority=2;exports.unstable_NormalPriority=3;exports.unstable_IdlePriority=5;exports.unstable_LowPriority=4;
exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=g,f=k;g=a;k=exports.unstable_now();try{return b()}finally{g=c,k=f,v()}};exports.unstable_next=function(a){switch(g){case 1:case 2:case 3:var b=3;break;default:b=g}var c=g,f=k;g=b;k=exports.unstable_now();try{return a()}finally{g=c,k=f,v()}};
exports.unstable_scheduleCallback=function(a,b){var c=-1!==k?k:exports.unstable_now();if("object"===typeof b&&null!==b&&"number"===typeof b.timeout)b=c+b.timeout;else switch(g){case 1:b=c+-1;break;case 2:b=c+250;break;case 5:b=c+1073741823;break;case 4:b=c+1E4;break;default:b=c+5E3}a={callback:a,priorityLevel:g,expirationTime:b,next:null,previous:null};if(null===d)d=a.next=a.previous=a,p();else{c=null;var f=d;do{if(f.expirationTime>b){c=f;break}f=f.next}while(f!==d);null===c?c=d:c===d&&(d=a,p());
b=c.previous;b.next=c.previous=a;a.next=c;a.previous=b}return a};exports.unstable_cancelCallback=function(a){var b=a.next;if(null!==b){if(b===a)d=null;else{a===d&&(d=b);var c=a.previous;c.next=b;b.previous=c}a.next=a.previous=null}};exports.unstable_wrapCallback=function(a){var b=g;return function(){var c=g,f=k;g=b;k=exports.unstable_now();try{return a.apply(this,arguments)}finally{g=c,k=f,v()}}};exports.unstable_getCurrentPriorityLevel=function(){return g};
exports.unstable_shouldYield=function(){return!e&&(null!==d&&d.expirationTime<l||w())};exports.unstable_continueExecution=function(){null!==d&&p()};exports.unstable_pauseExecution=function(){};exports.unstable_getFirstCallbackNode=function(){return d};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)))

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
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

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
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports,"__esModule",{value:!0});
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.memo"):
60115,r=b?Symbol.for("react.lazy"):60116;function t(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case h:return a;default:return u}}case r:case q:case d:return u}}}function v(a){return t(a)===m}exports.typeOf=t;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;
exports.Fragment=e;exports.Lazy=r;exports.Memo=q;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||"object"===typeof a&&null!==a&&(a.$$typeof===r||a.$$typeof===q||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n)};exports.isAsyncMode=function(a){return v(a)||t(a)===l};exports.isConcurrentMode=v;exports.isContextConsumer=function(a){return t(a)===k};
exports.isContextProvider=function(a){return t(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return t(a)===n};exports.isFragment=function(a){return t(a)===e};exports.isLazy=function(a){return t(a)===r};exports.isMemo=function(a){return t(a)===q};exports.isPortal=function(a){return t(a)===d};exports.isProfiler=function(a){return t(a)===g};exports.isStrictMode=function(a){return t(a)===f};
exports.isSuspense=function(a){return t(a)===p};


/***/ }),
/* 18 */
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/index.css
var src = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
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





var didWarnAboutReceivingStore = false;

function warnAboutReceivingStore() {
  if (didWarnAboutReceivingStore) {
    return;
  }

  didWarnAboutReceivingStore = true;
  warning('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reduxjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
}

function createProvider(storeKey) {
  var _Provider$childContex;

  if (storeKey === void 0) {
    storeKey = 'store';
  }

  var subscriptionKey = storeKey + "Subscription";

  var Provider =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(Provider, _Component);

    var _proto = Provider.prototype;

    _proto.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref;
    };

    function Provider(props, context) {
      var _this;

      _this = _Component.call(this, props, context) || this;
      _this[storeKey] = props.store;
      return _this;
    }

    _proto.render = function render() {
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
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// EXTERNAL MODULE: ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__(8);
var hoist_non_react_statics_cjs_default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics_cjs);

// EXTERNAL MODULE: ./node_modules/invariant/browser.js
var browser = __webpack_require__(2);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);

// EXTERNAL MODULE: ./node_modules/react-is/index.js
var react_is = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/Subscription.js
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

var Subscription =
/*#__PURE__*/
function () {
  function Subscription(store, parentSub, onStateChange) {
    this.store = store;
    this.parentSub = parentSub;
    this.onStateChange = onStateChange;
    this.unsubscribe = null;
    this.listeners = nullListeners;
  }

  var _proto = Subscription.prototype;

  _proto.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  _proto.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  _proto.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  _proto.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);
      this.listeners = createListenerCollection();
    }
  };

  _proto.tryUnsubscribe = function tryUnsubscribe() {
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
selectorFactory, // options object:
_ref) {
  var _contextTypes, _childContextTypes;

  if (_ref === void 0) {
    _ref = {};
  }

  var _ref2 = _ref,
      _ref2$getDisplayName = _ref2.getDisplayName,
      getDisplayName = _ref2$getDisplayName === void 0 ? function (name) {
    return "ConnectAdvanced(" + name + ")";
  } : _ref2$getDisplayName,
      _ref2$methodName = _ref2.methodName,
      methodName = _ref2$methodName === void 0 ? 'connectAdvanced' : _ref2$methodName,
      _ref2$renderCountProp = _ref2.renderCountProp,
      renderCountProp = _ref2$renderCountProp === void 0 ? undefined : _ref2$renderCountProp,
      _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta,
      _ref2$storeKey = _ref2.storeKey,
      storeKey = _ref2$storeKey === void 0 ? 'store' : _ref2$storeKey,
      _ref2$withRef = _ref2.withRef,
      withRef = _ref2$withRef === void 0 ? false : _ref2$withRef,
      connectOptions = _objectWithoutPropertiesLoose(_ref2, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef"]);

  var subscriptionKey = storeKey + 'Subscription';
  var version = hotReloadingVersion++;
  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = storeShape, _contextTypes[subscriptionKey] = subscriptionShape, _contextTypes);
  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = subscriptionShape, _childContextTypes);
  return function wrapWithConnect(WrappedComponent) {
    browser_default()(Object(react_is["isValidElementType"])(WrappedComponent), "You must pass a component to the function returned by " + (methodName + ". Instead received " + JSON.stringify(WrappedComponent)));
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
      WrappedComponent: WrappedComponent // TODO Actually fix our use of componentWillReceiveProps

      /* eslint-disable react/no-deprecated */

    });

    var Connect =
    /*#__PURE__*/
    function (_Component) {
      _inheritsLoose(Connect, _Component);

      function Connect(props, context) {
        var _this;

        _this = _Component.call(this, props, context) || this;
        _this.version = version;
        _this.state = {};
        _this.renderCount = 0;
        _this.store = props[storeKey] || context[storeKey];
        _this.propsMode = Boolean(props[storeKey]);
        _this.setWrappedInstance = _this.setWrappedInstance.bind(_assertThisInitialized(_assertThisInitialized(_this)));
        browser_default()(_this.store, "Could not find \"" + storeKey + "\" in either the context or props of " + ("\"" + displayName + "\". Either wrap the root component in a <Provider>, ") + ("or explicitly pass \"" + storeKey + "\" as a prop to \"" + displayName + "\"."));

        _this.initSelector();

        _this.initSubscription();

        return _this;
      }

      var _proto = Connect.prototype;

      _proto.getChildContext = function getChildContext() {
        var _ref3;

        // If this component received store from props, its subscription should be transparent
        // to any descendants receiving store+subscription from context; it passes along
        // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
        // Connect to control ordering of notifications to flow top-down.
        var subscription = this.propsMode ? null : this.subscription;
        return _ref3 = {}, _ref3[subscriptionKey] = subscription || this.context[subscriptionKey], _ref3;
      };

      _proto.componentDidMount = function componentDidMount() {
        if (!shouldHandleStateChanges) return; // componentWillMount fires during server side rendering, but componentDidMount and
        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
        // To handle the case where a child component may have triggered a state change by
        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
        // re-render.

        this.subscription.trySubscribe();
        this.selector.run(this.props);
        if (this.selector.shouldComponentUpdate) this.forceUpdate();
      };

      _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.selector.run(nextProps);
      };

      _proto.shouldComponentUpdate = function shouldComponentUpdate() {
        return this.selector.shouldComponentUpdate;
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        if (this.subscription) this.subscription.tryUnsubscribe();
        this.subscription = null;
        this.notifyNestedSubs = noop;
        this.store = null;
        this.selector.run = noop;
        this.selector.shouldComponentUpdate = false;
      };

      _proto.getWrappedInstance = function getWrappedInstance() {
        browser_default()(withRef, "To access the wrapped instance, you need to specify " + ("{ withRef: true } in the options argument of the " + methodName + "() call."));
        return this.wrappedInstance;
      };

      _proto.setWrappedInstance = function setWrappedInstance(ref) {
        this.wrappedInstance = ref;
      };

      _proto.initSelector = function initSelector() {
        var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
        this.selector = makeSelectorStateful(sourceSelector, this.store);
        this.selector.run(this.props);
      };

      _proto.initSubscription = function initSubscription() {
        if (!shouldHandleStateChanges) return; // parentSub's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.

        var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
        this.subscription = new Subscription(this.store, parentSub, this.onStateChange.bind(this)); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
        // the middle of the notification loop, where `this.subscription` will then be null. An
        // extra null check every change can be avoided by copying the method onto `this` and then
        // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
        // listeners logic is changed to not call listeners that have been unsubscribed in the
        // middle of the notification loop.

        this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
      };

      _proto.onStateChange = function onStateChange() {
        this.selector.run(this.props);

        if (!this.selector.shouldComponentUpdate) {
          this.notifyNestedSubs();
        } else {
          this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
          this.setState(dummyState);
        }
      };

      _proto.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
        // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
        // needs to notify nested subs. Once called, it unimplements itself until further state
        // changes occur. Doing it this way vs having a permanent `componentDidUpdate` that does
        // a boolean check every time avoids an extra method call most of the time, resulting
        // in some perf boost.
        this.componentDidUpdate = undefined;
        this.notifyNestedSubs();
      };

      _proto.isSubscribed = function isSubscribed() {
        return Boolean(this.subscription) && this.subscription.isSubscribed();
      };

      _proto.addExtraProps = function addExtraProps(props) {
        if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props; // make a shallow copy so that fields added don't leak to the original selector.
        // this is especially important for 'ref' since that's a reference back to the component
        // instance. a singleton memoized selector would then be holding a reference to the
        // instance, preventing the instance from being garbage collected, and that would be bad

        var withExtras = _extends({}, props);

        if (withRef) withExtras.ref = this.setWrappedInstance;
        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
        if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
        return withExtras;
      };

      _proto.render = function render() {
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
    /* eslint-enable react/no-deprecated */


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
var es = __webpack_require__(4);

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



// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/isPlainObject.js
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject_isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = Object.getPrototypeOf(obj);
  if (proto === null) return true;
  var baseProto = proto;

  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }

  return proto === baseProto;
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/verifyPlainObject.js


function verifyPlainObject(value, displayName, methodName) {
  if (!isPlainObject_isPlainObject(value)) {
    warning(methodName + "() in " + displayName + " must return a plain object. Instead received " + value + ".");
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
} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
// 
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..

function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
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
    }; // allow detectFactoryAndVerify to get ownProps


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
    return {
      dispatch: dispatch
    };
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


function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return _extends({}, ownProps, stateProps, dispatchProps);
}
function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;
    var hasRunOnce = false;
    var mergedProps;
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
    throw new Error("Unexpected value for " + methodName + " in " + displayName + ".");
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
      warning("The selector for " + methodName + " of " + displayName + " did not specify a value for dependsOnOwnProps.");
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/selectorFactory.js


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
  var state;
  var ownProps;
  var stateProps;
  var dispatchProps;
  var mergedProps;

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
} // TODO: Add more comments
// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = _objectWithoutPropertiesLoose(_ref2, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (false) {}

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/connect.js








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
    throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
  };
}

function strictEqual(a, b) {
  return a === b;
} // createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios


function createConnect(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === void 0 ? connectAdvanced : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? connect_mapStateToProps : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? connect_mapDispatchToProps : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === void 0 ? connect_mergeProps : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === void 0 ? finalPropsSelectorFactory : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2) {
    if (_ref2 === void 0) {
      _ref2 = {};
    }

    var _ref3 = _ref2,
        _ref3$pure = _ref3.pure,
        pure = _ref3$pure === void 0 ? true : _ref3$pure,
        _ref3$areStatesEqual = _ref3.areStatesEqual,
        areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual,
        _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual,
        areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? shallowEqual : _ref3$areOwnPropsEqua,
        _ref3$areStatePropsEq = _ref3.areStatePropsEqual,
        areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? shallowEqual : _ref3$areStatePropsEq,
        _ref3$areMergedPropsE = _ref3.areMergedPropsEqual,
        areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? shallowEqual : _ref3$areMergedPropsE,
        extraOptions = _objectWithoutPropertiesLoose(_ref3, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');
    return connectHOC(selectorFactory, _extends({
      // used in error messages
      methodName: 'connect',
      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return "Connect(" + name + ")";
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
var minesweeper = __webpack_require__(19);

// CONCATENATED MODULE: ./src/components/minesweeper.tsx
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
var styles = __webpack_require__(20);

// CONCATENATED MODULE: ./src/index.tsx









var store = createStore(rootReducer, applyMiddleware(redux_thunk_es));
Object(react_dom["render"])(react["createElement"](components_Provider, { store: store },
    react["createElement"](Minesweeper, null)), document.getElementById("root"));


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbnZhcmlhbnQvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N5bWJvbC1vYnNlcnZhYmxlL2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvZGlzdC9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy5janMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N5bWJvbC1vYnNlcnZhYmxlL2VzL3BvbnlmaWxsLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL2Nqcy9yZWFjdC1kb20ucHJvZHVjdGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NjaGVkdWxlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2NoZWR1bGVyL2Nqcy9zY2hlZHVsZXIucHJvZHVjdGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9oYXJtb255LW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9taW5lc3dlZXBlci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvdXRpbHMvUHJvcFR5cGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy91dGlscy93YXJuaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9jb21wb25lbnRzL1Byb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL3V0aWxzL1N1YnNjcmlwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29tcG9uZW50cy9jb25uZWN0QWR2YW5jZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL3V0aWxzL3NoYWxsb3dFcXVhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvcmVkdXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL3V0aWxzL2lzUGxhaW5PYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL3V0aWxzL3ZlcmlmeVBsYWluT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9jb25uZWN0L3dyYXBNYXBUb1Byb3BzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9jb25uZWN0L21hcERpc3BhdGNoVG9Qcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29ubmVjdC9tYXBTdGF0ZVRvUHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2Nvbm5lY3QvbWVyZ2VQcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29ubmVjdC92ZXJpZnlTdWJzZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2Nvbm5lY3Qvc2VsZWN0b3JGYWN0b3J5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9jb25uZWN0L2Nvbm5lY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWR1eC10aHVuay9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZ3JpZEhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZ3JpZENvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvYWN0aW9uVHlwZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ncmlkQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvZ2FtZVN0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC9ncmlkLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC9ncmlkVmFsdWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsL3N0b3JlLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9taW5lc3dlZXBlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3B0aW9uc01lbnUudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9nYW1lU3RhdGVSZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9ncmlkUmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvcm9vdFJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVB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OztBQ0Z2QjtBQUVVO0FBQ0k7QUFDSTtBQUNjO0FBQ3JCO0FBRVc7QUFDRjtBQUNsQjtBQUV2QixJQUFNLEtBQUssR0FBRyxXQUFXLENBQUMsV0FBVyxFQUFFLGVBQWUsQ0FBQyxjQUFLLENBQUMsQ0FBQyxDQUFDO0FBRS9ELDJCQUFNLENBQ0osdUJBQUMsbUJBQVEsSUFBQyxLQUFLLEVBQUUsS0FBSztJQUNwQix1QkFBQyxXQUFXLE9BQUcsQ0FDTixFQUNYLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQ2hDLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyMSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoUmVhY3RJcy5pc0VsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgaW52YXJpYW50ID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICAnTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArXG4gICAgICAgICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLidcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSB7IHJldHVybiBhcmdzW2FyZ0luZGV4KytdOyB9KVxuICAgICAgKTtcbiAgICAgIGVycm9yLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDtcbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IHBvbnlmaWxsIGZyb20gJy4vcG9ueWZpbGwuanMnO1xuXG52YXIgcm9vdDtcblxuaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gc2VsZjtcbn0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IHdpbmRvdztcbn0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IGdsb2JhbDtcbn0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IG1vZHVsZTtcbn0gZWxzZSB7XG4gIHJvb3QgPSBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xufVxuXG52YXIgcmVzdWx0ID0gcG9ueWZpbGwocm9vdCk7XG5leHBvcnQgZGVmYXVsdCByZXN1bHQ7XG4iLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBjaGVja0RDRSgpIHtcbiAgLyogZ2xvYmFsIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAqL1xuICBpZiAoXG4gICAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLmNoZWNrRENFICE9PSAnZnVuY3Rpb24nXG4gICkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vIFRoaXMgYnJhbmNoIGlzIHVucmVhY2hhYmxlIGJlY2F1c2UgdGhpcyBmdW5jdGlvbiBpcyBvbmx5IGNhbGxlZFxuICAgIC8vIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgY29uZGl0aW9uIGlzIHRydWUgb25seSBpbiBkZXZlbG9wbWVudC5cbiAgICAvLyBUaGVyZWZvcmUgaWYgdGhlIGJyYW5jaCBpcyBzdGlsbCBoZXJlLCBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2Fzbid0XG4gICAgLy8gcHJvcGVybHkgYXBwbGllZC5cbiAgICAvLyBEb24ndCBjaGFuZ2UgdGhlIG1lc3NhZ2UuIFJlYWN0IERldlRvb2xzIHJlbGllcyBvbiBpdC4gQWxzbyBtYWtlIHN1cmVcbiAgICAvLyB0aGlzIG1lc3NhZ2UgZG9lc24ndCBvY2N1ciBlbHNld2hlcmUgaW4gdGhpcyBmdW5jdGlvbiwgb3IgaXQgd2lsbCBjYXVzZVxuICAgIC8vIGEgZmFsc2UgcG9zaXRpdmUuXG4gICAgdGhyb3cgbmV3IEVycm9yKCdeX14nKTtcbiAgfVxuICB0cnkge1xuICAgIC8vIFZlcmlmeSB0aGF0IHRoZSBjb2RlIGFib3ZlIGhhcyBiZWVuIGRlYWQgY29kZSBlbGltaW5hdGVkIChEQ0UnZCkuXG4gICAgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLmNoZWNrRENFKGNoZWNrRENFKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gRGV2VG9vbHMgc2hvdWxkbid0IGNyYXNoIFJlYWN0LCBubyBtYXR0ZXIgd2hhdC5cbiAgICAvLyBXZSBzaG91bGQgc3RpbGwgcmVwb3J0IGluIGNhc2Ugd2UgYnJlYWsgdGhpcyBjb2RlLlxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgfVxufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAvLyBEQ0UgY2hlY2sgc2hvdWxkIGhhcHBlbiBiZWZvcmUgUmVhY3RET00gYnVuZGxlIGV4ZWN1dGVzIHNvIHRoYXRcbiAgLy8gRGV2VG9vbHMgY2FuIHJlcG9ydCBiYWQgbWluaWZpY2F0aW9uIGR1cmluZyBpbmplY3Rpb24uXG4gIGNoZWNrRENFKCk7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtZG9tLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWRvbS5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENvcHlyaWdodCAyMDE1LCBZYWhvbyEgSW5jLlxuICogQ29weXJpZ2h0cyBsaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBMaWNlbnNlLiBTZWUgdGhlIGFjY29tcGFueWluZyBMSUNFTlNFIGZpbGUgZm9yIHRlcm1zLlxuICovXG52YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG52YXIgUkVBQ1RfU1RBVElDUyA9IHtcbiAgICBjaGlsZENvbnRleHRUeXBlczogdHJ1ZSxcbiAgICBjb250ZXh0VHlwZTogdHJ1ZSxcbiAgICBjb250ZXh0VHlwZXM6IHRydWUsXG4gICAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICAgIGRpc3BsYXlOYW1lOiB0cnVlLFxuICAgIGdldERlZmF1bHRQcm9wczogdHJ1ZSxcbiAgICBnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3I6IHRydWUsXG4gICAgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzOiB0cnVlLFxuICAgIG1peGluczogdHJ1ZSxcbiAgICBwcm9wVHlwZXM6IHRydWUsXG4gICAgdHlwZTogdHJ1ZVxufTtcblxudmFyIEtOT1dOX1NUQVRJQ1MgPSB7XG4gICAgbmFtZTogdHJ1ZSxcbiAgICBsZW5ndGg6IHRydWUsXG4gICAgcHJvdG90eXBlOiB0cnVlLFxuICAgIGNhbGxlcjogdHJ1ZSxcbiAgICBjYWxsZWU6IHRydWUsXG4gICAgYXJndW1lbnRzOiB0cnVlLFxuICAgIGFyaXR5OiB0cnVlXG59O1xuXG52YXIgRk9SV0FSRF9SRUZfU1RBVElDUyA9IHtcbiAgICAnJCR0eXBlb2YnOiB0cnVlLFxuICAgIHJlbmRlcjogdHJ1ZSxcbiAgICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gICAgZGlzcGxheU5hbWU6IHRydWUsXG4gICAgcHJvcFR5cGVzOiB0cnVlXG59O1xuXG52YXIgTUVNT19TVEFUSUNTID0ge1xuICAgICckJHR5cGVvZic6IHRydWUsXG4gICAgY29tcGFyZTogdHJ1ZSxcbiAgICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gICAgZGlzcGxheU5hbWU6IHRydWUsXG4gICAgcHJvcFR5cGVzOiB0cnVlLFxuICAgIHR5cGU6IHRydWVcbn07XG5cbnZhciBUWVBFX1NUQVRJQ1MgPSB7fTtcblRZUEVfU1RBVElDU1tSZWFjdElzLkZvcndhcmRSZWZdID0gRk9SV0FSRF9SRUZfU1RBVElDUztcblxuZnVuY3Rpb24gZ2V0U3RhdGljcyhjb21wb25lbnQpIHtcbiAgICBpZiAoUmVhY3RJcy5pc01lbW8oY29tcG9uZW50KSkge1xuICAgICAgICByZXR1cm4gTUVNT19TVEFUSUNTO1xuICAgIH1cbiAgICByZXR1cm4gVFlQRV9TVEFUSUNTW2NvbXBvbmVudFsnJCR0eXBlb2YnXV0gfHwgUkVBQ1RfU1RBVElDUztcbn1cblxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIGdldE93blByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG52YXIgb2JqZWN0UHJvdG90eXBlID0gT2JqZWN0LnByb3RvdHlwZTtcblxuZnVuY3Rpb24gaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBzb3VyY2VDb21wb25lbnQsIGJsYWNrbGlzdCkge1xuICAgIGlmICh0eXBlb2Ygc291cmNlQ29tcG9uZW50ICE9PSAnc3RyaW5nJykge1xuICAgICAgICAvLyBkb24ndCBob2lzdCBvdmVyIHN0cmluZyAoaHRtbCkgY29tcG9uZW50c1xuXG4gICAgICAgIGlmIChvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgICAgICAgIHZhciBpbmhlcml0ZWRDb21wb25lbnQgPSBnZXRQcm90b3R5cGVPZihzb3VyY2VDb21wb25lbnQpO1xuICAgICAgICAgICAgaWYgKGluaGVyaXRlZENvbXBvbmVudCAmJiBpbmhlcml0ZWRDb21wb25lbnQgIT09IG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgICAgICAgICAgIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgaW5oZXJpdGVkQ29tcG9uZW50LCBibGFja2xpc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICAgICAgaWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAgICAgICAga2V5cyA9IGtleXMuY29uY2F0KGdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2VDb21wb25lbnQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0YXJnZXRTdGF0aWNzID0gZ2V0U3RhdGljcyh0YXJnZXRDb21wb25lbnQpO1xuICAgICAgICB2YXIgc291cmNlU3RhdGljcyA9IGdldFN0YXRpY3Moc291cmNlQ29tcG9uZW50KTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgICAgaWYgKCFLTk9XTl9TVEFUSUNTW2tleV0gJiYgIShibGFja2xpc3QgJiYgYmxhY2tsaXN0W2tleV0pICYmICEoc291cmNlU3RhdGljcyAmJiBzb3VyY2VTdGF0aWNzW2tleV0pICYmICEodGFyZ2V0U3RhdGljcyAmJiB0YXJnZXRTdGF0aWNzW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlQ29tcG9uZW50LCBrZXkpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEF2b2lkIGZhaWx1cmVzIGZyb20gcmVhZC1vbmx5IHByb3BlcnRpZXNcbiAgICAgICAgICAgICAgICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0Q29tcG9uZW50LCBrZXksIGRlc2NyaXB0b3IpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0Q29tcG9uZW50O1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRDb21wb25lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaG9pc3ROb25SZWFjdFN0YXRpY3M7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzeW1ib2xPYnNlcnZhYmxlUG9ueWZpbGwocm9vdCkge1xuXHR2YXIgcmVzdWx0O1xuXHR2YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cblx0aWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicpIHtcblx0XHRpZiAoU3ltYm9sLm9ic2VydmFibGUpIHtcblx0XHRcdHJlc3VsdCA9IFN5bWJvbC5vYnNlcnZhYmxlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXN1bHQgPSBTeW1ib2woJ29ic2VydmFibGUnKTtcblx0XHRcdFN5bWJvbC5vYnNlcnZhYmxlID0gcmVzdWx0O1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZXN1bHQgPSAnQEBvYnNlcnZhYmxlJztcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi44LjZcbiAqIHJlYWN0LnByb2R1Y3Rpb24ubWluLmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO3ZhciBrPXJlcXVpcmUoXCJvYmplY3QtYXNzaWduXCIpLG49XCJmdW5jdGlvblwiPT09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvcixwPW4/U3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIik6NjAxMDMscT1uP1N5bWJvbC5mb3IoXCJyZWFjdC5wb3J0YWxcIik6NjAxMDYscj1uP1N5bWJvbC5mb3IoXCJyZWFjdC5mcmFnbWVudFwiKTo2MDEwNyx0PW4/U3ltYm9sLmZvcihcInJlYWN0LnN0cmljdF9tb2RlXCIpOjYwMTA4LHU9bj9TeW1ib2wuZm9yKFwicmVhY3QucHJvZmlsZXJcIik6NjAxMTQsdj1uP1N5bWJvbC5mb3IoXCJyZWFjdC5wcm92aWRlclwiKTo2MDEwOSx3PW4/U3ltYm9sLmZvcihcInJlYWN0LmNvbnRleHRcIik6NjAxMTAseD1uP1N5bWJvbC5mb3IoXCJyZWFjdC5jb25jdXJyZW50X21vZGVcIik6NjAxMTEseT1uP1N5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKTo2MDExMix6PW4/U3ltYm9sLmZvcihcInJlYWN0LnN1c3BlbnNlXCIpOjYwMTEzLGFhPW4/U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIik6XG42MDExNSxiYT1uP1N5bWJvbC5mb3IoXCJyZWFjdC5sYXp5XCIpOjYwMTE2LEE9XCJmdW5jdGlvblwiPT09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLml0ZXJhdG9yO2Z1bmN0aW9uIGNhKGEsYixkLGMsZSxnLGgsZil7aWYoIWEpe2E9dm9pZCAwO2lmKHZvaWQgMD09PWIpYT1FcnJvcihcIk1pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50IGZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuXCIpO2Vsc2V7dmFyIGw9W2QsYyxlLGcsaCxmXSxtPTA7YT1FcnJvcihiLnJlcGxhY2UoLyVzL2csZnVuY3Rpb24oKXtyZXR1cm4gbFttKytdfSkpO2EubmFtZT1cIkludmFyaWFudCBWaW9sYXRpb25cIn1hLmZyYW1lc1RvUG9wPTE7dGhyb3cgYTt9fVxuZnVuY3Rpb24gQihhKXtmb3IodmFyIGI9YXJndW1lbnRzLmxlbmd0aC0xLGQ9XCJodHRwczovL3JlYWN0anMub3JnL2RvY3MvZXJyb3ItZGVjb2Rlci5odG1sP2ludmFyaWFudD1cIithLGM9MDtjPGI7YysrKWQrPVwiJmFyZ3NbXT1cIitlbmNvZGVVUklDb21wb25lbnQoYXJndW1lbnRzW2MrMV0pO2NhKCExLFwiTWluaWZpZWQgUmVhY3QgZXJyb3IgI1wiK2ErXCI7IHZpc2l0ICVzIGZvciB0aGUgZnVsbCBtZXNzYWdlIG9yIHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCBmb3IgZnVsbCBlcnJvcnMgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4gXCIsZCl9dmFyIEM9e2lzTW91bnRlZDpmdW5jdGlvbigpe3JldHVybiExfSxlbnF1ZXVlRm9yY2VVcGRhdGU6ZnVuY3Rpb24oKXt9LGVucXVldWVSZXBsYWNlU3RhdGU6ZnVuY3Rpb24oKXt9LGVucXVldWVTZXRTdGF0ZTpmdW5jdGlvbigpe319LEQ9e307XG5mdW5jdGlvbiBFKGEsYixkKXt0aGlzLnByb3BzPWE7dGhpcy5jb250ZXh0PWI7dGhpcy5yZWZzPUQ7dGhpcy51cGRhdGVyPWR8fEN9RS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD17fTtFLnByb3RvdHlwZS5zZXRTdGF0ZT1mdW5jdGlvbihhLGIpe1wib2JqZWN0XCIhPT10eXBlb2YgYSYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGEmJm51bGwhPWE/QihcIjg1XCIpOnZvaWQgMDt0aGlzLnVwZGF0ZXIuZW5xdWV1ZVNldFN0YXRlKHRoaXMsYSxiLFwic2V0U3RhdGVcIil9O0UucHJvdG90eXBlLmZvcmNlVXBkYXRlPWZ1bmN0aW9uKGEpe3RoaXMudXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUodGhpcyxhLFwiZm9yY2VVcGRhdGVcIil9O2Z1bmN0aW9uIEYoKXt9Ri5wcm90b3R5cGU9RS5wcm90b3R5cGU7ZnVuY3Rpb24gRyhhLGIsZCl7dGhpcy5wcm9wcz1hO3RoaXMuY29udGV4dD1iO3RoaXMucmVmcz1EO3RoaXMudXBkYXRlcj1kfHxDfXZhciBIPUcucHJvdG90eXBlPW5ldyBGO1xuSC5jb25zdHJ1Y3Rvcj1HO2soSCxFLnByb3RvdHlwZSk7SC5pc1B1cmVSZWFjdENvbXBvbmVudD0hMDt2YXIgST17Y3VycmVudDpudWxsfSxKPXtjdXJyZW50Om51bGx9LEs9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxMPXtrZXk6ITAscmVmOiEwLF9fc2VsZjohMCxfX3NvdXJjZTohMH07XG5mdW5jdGlvbiBNKGEsYixkKXt2YXIgYz12b2lkIDAsZT17fSxnPW51bGwsaD1udWxsO2lmKG51bGwhPWIpZm9yKGMgaW4gdm9pZCAwIT09Yi5yZWYmJihoPWIucmVmKSx2b2lkIDAhPT1iLmtleSYmKGc9XCJcIitiLmtleSksYilLLmNhbGwoYixjKSYmIUwuaGFzT3duUHJvcGVydHkoYykmJihlW2NdPWJbY10pO3ZhciBmPWFyZ3VtZW50cy5sZW5ndGgtMjtpZigxPT09ZillLmNoaWxkcmVuPWQ7ZWxzZSBpZigxPGYpe2Zvcih2YXIgbD1BcnJheShmKSxtPTA7bTxmO20rKylsW21dPWFyZ3VtZW50c1ttKzJdO2UuY2hpbGRyZW49bH1pZihhJiZhLmRlZmF1bHRQcm9wcylmb3IoYyBpbiBmPWEuZGVmYXVsdFByb3BzLGYpdm9pZCAwPT09ZVtjXSYmKGVbY109ZltjXSk7cmV0dXJueyQkdHlwZW9mOnAsdHlwZTphLGtleTpnLHJlZjpoLHByb3BzOmUsX293bmVyOkouY3VycmVudH19XG5mdW5jdGlvbiBkYShhLGIpe3JldHVybnskJHR5cGVvZjpwLHR5cGU6YS50eXBlLGtleTpiLHJlZjphLnJlZixwcm9wczphLnByb3BzLF9vd25lcjphLl9vd25lcn19ZnVuY3Rpb24gTihhKXtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiZhLiQkdHlwZW9mPT09cH1mdW5jdGlvbiBlc2NhcGUoYSl7dmFyIGI9e1wiPVwiOlwiPTBcIixcIjpcIjpcIj0yXCJ9O3JldHVyblwiJFwiKyhcIlwiK2EpLnJlcGxhY2UoL1s9Ol0vZyxmdW5jdGlvbihhKXtyZXR1cm4gYlthXX0pfXZhciBPPS9cXC8rL2csUD1bXTtmdW5jdGlvbiBRKGEsYixkLGMpe2lmKFAubGVuZ3RoKXt2YXIgZT1QLnBvcCgpO2UucmVzdWx0PWE7ZS5rZXlQcmVmaXg9YjtlLmZ1bmM9ZDtlLmNvbnRleHQ9YztlLmNvdW50PTA7cmV0dXJuIGV9cmV0dXJue3Jlc3VsdDphLGtleVByZWZpeDpiLGZ1bmM6ZCxjb250ZXh0OmMsY291bnQ6MH19XG5mdW5jdGlvbiBSKGEpe2EucmVzdWx0PW51bGw7YS5rZXlQcmVmaXg9bnVsbDthLmZ1bmM9bnVsbDthLmNvbnRleHQ9bnVsbDthLmNvdW50PTA7MTA+UC5sZW5ndGgmJlAucHVzaChhKX1cbmZ1bmN0aW9uIFMoYSxiLGQsYyl7dmFyIGU9dHlwZW9mIGE7aWYoXCJ1bmRlZmluZWRcIj09PWV8fFwiYm9vbGVhblwiPT09ZSlhPW51bGw7dmFyIGc9ITE7aWYobnVsbD09PWEpZz0hMDtlbHNlIHN3aXRjaChlKXtjYXNlIFwic3RyaW5nXCI6Y2FzZSBcIm51bWJlclwiOmc9ITA7YnJlYWs7Y2FzZSBcIm9iamVjdFwiOnN3aXRjaChhLiQkdHlwZW9mKXtjYXNlIHA6Y2FzZSBxOmc9ITB9fWlmKGcpcmV0dXJuIGQoYyxhLFwiXCI9PT1iP1wiLlwiK1QoYSwwKTpiKSwxO2c9MDtiPVwiXCI9PT1iP1wiLlwiOmIrXCI6XCI7aWYoQXJyYXkuaXNBcnJheShhKSlmb3IodmFyIGg9MDtoPGEubGVuZ3RoO2grKyl7ZT1hW2hdO3ZhciBmPWIrVChlLGgpO2crPVMoZSxmLGQsYyl9ZWxzZSBpZihudWxsPT09YXx8XCJvYmplY3RcIiE9PXR5cGVvZiBhP2Y9bnVsbDooZj1BJiZhW0FdfHxhW1wiQEBpdGVyYXRvclwiXSxmPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBmP2Y6bnVsbCksXCJmdW5jdGlvblwiPT09dHlwZW9mIGYpZm9yKGE9Zi5jYWxsKGEpLGg9XG4wOyEoZT1hLm5leHQoKSkuZG9uZTspZT1lLnZhbHVlLGY9YitUKGUsaCsrKSxnKz1TKGUsZixkLGMpO2Vsc2VcIm9iamVjdFwiPT09ZSYmKGQ9XCJcIithLEIoXCIzMVwiLFwiW29iamVjdCBPYmplY3RdXCI9PT1kP1wib2JqZWN0IHdpdGgga2V5cyB7XCIrT2JqZWN0LmtleXMoYSkuam9pbihcIiwgXCIpK1wifVwiOmQsXCJcIikpO3JldHVybiBnfWZ1bmN0aW9uIFUoYSxiLGQpe3JldHVybiBudWxsPT1hPzA6UyhhLFwiXCIsYixkKX1mdW5jdGlvbiBUKGEsYil7cmV0dXJuXCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSYmbnVsbCE9YS5rZXk/ZXNjYXBlKGEua2V5KTpiLnRvU3RyaW5nKDM2KX1mdW5jdGlvbiBlYShhLGIpe2EuZnVuYy5jYWxsKGEuY29udGV4dCxiLGEuY291bnQrKyl9XG5mdW5jdGlvbiBmYShhLGIsZCl7dmFyIGM9YS5yZXN1bHQsZT1hLmtleVByZWZpeDthPWEuZnVuYy5jYWxsKGEuY29udGV4dCxiLGEuY291bnQrKyk7QXJyYXkuaXNBcnJheShhKT9WKGEsYyxkLGZ1bmN0aW9uKGEpe3JldHVybiBhfSk6bnVsbCE9YSYmKE4oYSkmJihhPWRhKGEsZSsoIWEua2V5fHxiJiZiLmtleT09PWEua2V5P1wiXCI6KFwiXCIrYS5rZXkpLnJlcGxhY2UoTyxcIiQmL1wiKStcIi9cIikrZCkpLGMucHVzaChhKSl9ZnVuY3Rpb24gVihhLGIsZCxjLGUpe3ZhciBnPVwiXCI7bnVsbCE9ZCYmKGc9KFwiXCIrZCkucmVwbGFjZShPLFwiJCYvXCIpK1wiL1wiKTtiPVEoYixnLGMsZSk7VShhLGZhLGIpO1IoYil9ZnVuY3Rpb24gVygpe3ZhciBhPUkuY3VycmVudDtudWxsPT09YT9CKFwiMzIxXCIpOnZvaWQgMDtyZXR1cm4gYX1cbnZhciBYPXtDaGlsZHJlbjp7bWFwOmZ1bmN0aW9uKGEsYixkKXtpZihudWxsPT1hKXJldHVybiBhO3ZhciBjPVtdO1YoYSxjLG51bGwsYixkKTtyZXR1cm4gY30sZm9yRWFjaDpmdW5jdGlvbihhLGIsZCl7aWYobnVsbD09YSlyZXR1cm4gYTtiPVEobnVsbCxudWxsLGIsZCk7VShhLGVhLGIpO1IoYil9LGNvdW50OmZ1bmN0aW9uKGEpe3JldHVybiBVKGEsZnVuY3Rpb24oKXtyZXR1cm4gbnVsbH0sbnVsbCl9LHRvQXJyYXk6ZnVuY3Rpb24oYSl7dmFyIGI9W107VihhLGIsbnVsbCxmdW5jdGlvbihhKXtyZXR1cm4gYX0pO3JldHVybiBifSxvbmx5OmZ1bmN0aW9uKGEpe04oYSk/dm9pZCAwOkIoXCIxNDNcIik7cmV0dXJuIGF9fSxjcmVhdGVSZWY6ZnVuY3Rpb24oKXtyZXR1cm57Y3VycmVudDpudWxsfX0sQ29tcG9uZW50OkUsUHVyZUNvbXBvbmVudDpHLGNyZWF0ZUNvbnRleHQ6ZnVuY3Rpb24oYSxiKXt2b2lkIDA9PT1iJiYoYj1udWxsKTthPXskJHR5cGVvZjp3LF9jYWxjdWxhdGVDaGFuZ2VkQml0czpiLFxuX2N1cnJlbnRWYWx1ZTphLF9jdXJyZW50VmFsdWUyOmEsX3RocmVhZENvdW50OjAsUHJvdmlkZXI6bnVsbCxDb25zdW1lcjpudWxsfTthLlByb3ZpZGVyPXskJHR5cGVvZjp2LF9jb250ZXh0OmF9O3JldHVybiBhLkNvbnN1bWVyPWF9LGZvcndhcmRSZWY6ZnVuY3Rpb24oYSl7cmV0dXJueyQkdHlwZW9mOnkscmVuZGVyOmF9fSxsYXp5OmZ1bmN0aW9uKGEpe3JldHVybnskJHR5cGVvZjpiYSxfY3RvcjphLF9zdGF0dXM6LTEsX3Jlc3VsdDpudWxsfX0sbWVtbzpmdW5jdGlvbihhLGIpe3JldHVybnskJHR5cGVvZjphYSx0eXBlOmEsY29tcGFyZTp2b2lkIDA9PT1iP251bGw6Yn19LHVzZUNhbGxiYWNrOmZ1bmN0aW9uKGEsYil7cmV0dXJuIFcoKS51c2VDYWxsYmFjayhhLGIpfSx1c2VDb250ZXh0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIFcoKS51c2VDb250ZXh0KGEsYil9LHVzZUVmZmVjdDpmdW5jdGlvbihhLGIpe3JldHVybiBXKCkudXNlRWZmZWN0KGEsYil9LHVzZUltcGVyYXRpdmVIYW5kbGU6ZnVuY3Rpb24oYSxcbmIsZCl7cmV0dXJuIFcoKS51c2VJbXBlcmF0aXZlSGFuZGxlKGEsYixkKX0sdXNlRGVidWdWYWx1ZTpmdW5jdGlvbigpe30sdXNlTGF5b3V0RWZmZWN0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIFcoKS51c2VMYXlvdXRFZmZlY3QoYSxiKX0sdXNlTWVtbzpmdW5jdGlvbihhLGIpe3JldHVybiBXKCkudXNlTWVtbyhhLGIpfSx1c2VSZWR1Y2VyOmZ1bmN0aW9uKGEsYixkKXtyZXR1cm4gVygpLnVzZVJlZHVjZXIoYSxiLGQpfSx1c2VSZWY6ZnVuY3Rpb24oYSl7cmV0dXJuIFcoKS51c2VSZWYoYSl9LHVzZVN0YXRlOmZ1bmN0aW9uKGEpe3JldHVybiBXKCkudXNlU3RhdGUoYSl9LEZyYWdtZW50OnIsU3RyaWN0TW9kZTp0LFN1c3BlbnNlOnosY3JlYXRlRWxlbWVudDpNLGNsb25lRWxlbWVudDpmdW5jdGlvbihhLGIsZCl7bnVsbD09PWF8fHZvaWQgMD09PWE/QihcIjI2N1wiLGEpOnZvaWQgMDt2YXIgYz12b2lkIDAsZT1rKHt9LGEucHJvcHMpLGc9YS5rZXksaD1hLnJlZixmPWEuX293bmVyO2lmKG51bGwhPVxuYil7dm9pZCAwIT09Yi5yZWYmJihoPWIucmVmLGY9Si5jdXJyZW50KTt2b2lkIDAhPT1iLmtleSYmKGc9XCJcIitiLmtleSk7dmFyIGw9dm9pZCAwO2EudHlwZSYmYS50eXBlLmRlZmF1bHRQcm9wcyYmKGw9YS50eXBlLmRlZmF1bHRQcm9wcyk7Zm9yKGMgaW4gYilLLmNhbGwoYixjKSYmIUwuaGFzT3duUHJvcGVydHkoYykmJihlW2NdPXZvaWQgMD09PWJbY10mJnZvaWQgMCE9PWw/bFtjXTpiW2NdKX1jPWFyZ3VtZW50cy5sZW5ndGgtMjtpZigxPT09YyllLmNoaWxkcmVuPWQ7ZWxzZSBpZigxPGMpe2w9QXJyYXkoYyk7Zm9yKHZhciBtPTA7bTxjO20rKylsW21dPWFyZ3VtZW50c1ttKzJdO2UuY2hpbGRyZW49bH1yZXR1cm57JCR0eXBlb2Y6cCx0eXBlOmEudHlwZSxrZXk6ZyxyZWY6aCxwcm9wczplLF9vd25lcjpmfX0sY3JlYXRlRmFjdG9yeTpmdW5jdGlvbihhKXt2YXIgYj1NLmJpbmQobnVsbCxhKTtiLnR5cGU9YTtyZXR1cm4gYn0saXNWYWxpZEVsZW1lbnQ6Tix2ZXJzaW9uOlwiMTYuOC42XCIsXG51bnN0YWJsZV9Db25jdXJyZW50TW9kZTp4LHVuc3RhYmxlX1Byb2ZpbGVyOnUsX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ6e1JlYWN0Q3VycmVudERpc3BhdGNoZXI6SSxSZWFjdEN1cnJlbnRPd25lcjpKLGFzc2lnbjprfX0sWT17ZGVmYXVsdDpYfSxaPVkmJlh8fFk7bW9kdWxlLmV4cG9ydHM9Wi5kZWZhdWx0fHxaO1xuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi44LjZcbiAqIHJlYWN0LWRvbS5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbi8qXG4gTW9kZXJuaXpyIDMuMC4wcHJlIChDdXN0b20gQnVpbGQpIHwgTUlUXG4qL1xuJ3VzZSBzdHJpY3QnO3ZhciBhYT1yZXF1aXJlKFwicmVhY3RcIiksbj1yZXF1aXJlKFwib2JqZWN0LWFzc2lnblwiKSxyPXJlcXVpcmUoXCJzY2hlZHVsZXJcIik7ZnVuY3Rpb24gYmEoYSxiLGMsZCxlLGYsZyxoKXtpZighYSl7YT12b2lkIDA7aWYodm9pZCAwPT09YilhPUVycm9yKFwiTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy5cIik7ZWxzZXt2YXIgbD1bYyxkLGUsZixnLGhdLGs9MDthPUVycm9yKGIucmVwbGFjZSgvJXMvZyxmdW5jdGlvbigpe3JldHVybiBsW2srK119KSk7YS5uYW1lPVwiSW52YXJpYW50IFZpb2xhdGlvblwifWEuZnJhbWVzVG9Qb3A9MTt0aHJvdyBhO319XG5mdW5jdGlvbiB4KGEpe2Zvcih2YXIgYj1hcmd1bWVudHMubGVuZ3RoLTEsYz1cImh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9lcnJvci1kZWNvZGVyLmh0bWw/aW52YXJpYW50PVwiK2EsZD0wO2Q8YjtkKyspYys9XCImYXJnc1tdPVwiK2VuY29kZVVSSUNvbXBvbmVudChhcmd1bWVudHNbZCsxXSk7YmEoITEsXCJNaW5pZmllZCBSZWFjdCBlcnJvciAjXCIrYStcIjsgdmlzaXQgJXMgZm9yIHRoZSBmdWxsIG1lc3NhZ2Ugb3IgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50IGZvciBmdWxsIGVycm9ycyBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLiBcIixjKX1hYT92b2lkIDA6eChcIjIyN1wiKTtmdW5jdGlvbiBjYShhLGIsYyxkLGUsZixnLGgsbCl7dmFyIGs9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDMpO3RyeXtiLmFwcGx5KGMsayl9Y2F0Y2gobSl7dGhpcy5vbkVycm9yKG0pfX1cbnZhciBkYT0hMSxlYT1udWxsLGZhPSExLGhhPW51bGwsaWE9e29uRXJyb3I6ZnVuY3Rpb24oYSl7ZGE9ITA7ZWE9YX19O2Z1bmN0aW9uIGphKGEsYixjLGQsZSxmLGcsaCxsKXtkYT0hMTtlYT1udWxsO2NhLmFwcGx5KGlhLGFyZ3VtZW50cyl9ZnVuY3Rpb24ga2EoYSxiLGMsZCxlLGYsZyxoLGwpe2phLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtpZihkYSl7aWYoZGEpe3ZhciBrPWVhO2RhPSExO2VhPW51bGx9ZWxzZSB4KFwiMTk4XCIpLGs9dm9pZCAwO2ZhfHwoZmE9ITAsaGE9ayl9fXZhciBsYT1udWxsLG1hPXt9O1xuZnVuY3Rpb24gbmEoKXtpZihsYSlmb3IodmFyIGEgaW4gbWEpe3ZhciBiPW1hW2FdLGM9bGEuaW5kZXhPZihhKTstMTxjP3ZvaWQgMDp4KFwiOTZcIixhKTtpZighb2FbY10pe2IuZXh0cmFjdEV2ZW50cz92b2lkIDA6eChcIjk3XCIsYSk7b2FbY109YjtjPWIuZXZlbnRUeXBlcztmb3IodmFyIGQgaW4gYyl7dmFyIGU9dm9pZCAwO3ZhciBmPWNbZF0sZz1iLGg9ZDtwYS5oYXNPd25Qcm9wZXJ0eShoKT94KFwiOTlcIixoKTp2b2lkIDA7cGFbaF09Zjt2YXIgbD1mLnBoYXNlZFJlZ2lzdHJhdGlvbk5hbWVzO2lmKGwpe2ZvcihlIGluIGwpbC5oYXNPd25Qcm9wZXJ0eShlKSYmcWEobFtlXSxnLGgpO2U9ITB9ZWxzZSBmLnJlZ2lzdHJhdGlvbk5hbWU/KHFhKGYucmVnaXN0cmF0aW9uTmFtZSxnLGgpLGU9ITApOmU9ITE7ZT92b2lkIDA6eChcIjk4XCIsZCxhKX19fX1cbmZ1bmN0aW9uIHFhKGEsYixjKXtyYVthXT94KFwiMTAwXCIsYSk6dm9pZCAwO3JhW2FdPWI7c2FbYV09Yi5ldmVudFR5cGVzW2NdLmRlcGVuZGVuY2llc312YXIgb2E9W10scGE9e30scmE9e30sc2E9e30sdGE9bnVsbCx1YT1udWxsLHZhPW51bGw7ZnVuY3Rpb24gd2EoYSxiLGMpe3ZhciBkPWEudHlwZXx8XCJ1bmtub3duLWV2ZW50XCI7YS5jdXJyZW50VGFyZ2V0PXZhKGMpO2thKGQsYix2b2lkIDAsYSk7YS5jdXJyZW50VGFyZ2V0PW51bGx9ZnVuY3Rpb24geGEoYSxiKXtudWxsPT1iP3goXCIzMFwiKTp2b2lkIDA7aWYobnVsbD09YSlyZXR1cm4gYjtpZihBcnJheS5pc0FycmF5KGEpKXtpZihBcnJheS5pc0FycmF5KGIpKXJldHVybiBhLnB1c2guYXBwbHkoYSxiKSxhO2EucHVzaChiKTtyZXR1cm4gYX1yZXR1cm4gQXJyYXkuaXNBcnJheShiKT9bYV0uY29uY2F0KGIpOlthLGJdfVxuZnVuY3Rpb24geWEoYSxiLGMpe0FycmF5LmlzQXJyYXkoYSk/YS5mb3JFYWNoKGIsYyk6YSYmYi5jYWxsKGMsYSl9dmFyIHphPW51bGw7ZnVuY3Rpb24gQWEoYSl7aWYoYSl7dmFyIGI9YS5fZGlzcGF0Y2hMaXN0ZW5lcnMsYz1hLl9kaXNwYXRjaEluc3RhbmNlcztpZihBcnJheS5pc0FycmF5KGIpKWZvcih2YXIgZD0wO2Q8Yi5sZW5ndGgmJiFhLmlzUHJvcGFnYXRpb25TdG9wcGVkKCk7ZCsrKXdhKGEsYltkXSxjW2RdKTtlbHNlIGImJndhKGEsYixjKTthLl9kaXNwYXRjaExpc3RlbmVycz1udWxsO2EuX2Rpc3BhdGNoSW5zdGFuY2VzPW51bGw7YS5pc1BlcnNpc3RlbnQoKXx8YS5jb25zdHJ1Y3Rvci5yZWxlYXNlKGEpfX1cbnZhciBCYT17aW5qZWN0RXZlbnRQbHVnaW5PcmRlcjpmdW5jdGlvbihhKXtsYT94KFwiMTAxXCIpOnZvaWQgMDtsYT1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhKTtuYSgpfSxpbmplY3RFdmVudFBsdWdpbnNCeU5hbWU6ZnVuY3Rpb24oYSl7dmFyIGI9ITEsYztmb3IoYyBpbiBhKWlmKGEuaGFzT3duUHJvcGVydHkoYykpe3ZhciBkPWFbY107bWEuaGFzT3duUHJvcGVydHkoYykmJm1hW2NdPT09ZHx8KG1hW2NdP3goXCIxMDJcIixjKTp2b2lkIDAsbWFbY109ZCxiPSEwKX1iJiZuYSgpfX07XG5mdW5jdGlvbiBDYShhLGIpe3ZhciBjPWEuc3RhdGVOb2RlO2lmKCFjKXJldHVybiBudWxsO3ZhciBkPXRhKGMpO2lmKCFkKXJldHVybiBudWxsO2M9ZFtiXTthOnN3aXRjaChiKXtjYXNlIFwib25DbGlja1wiOmNhc2UgXCJvbkNsaWNrQ2FwdHVyZVwiOmNhc2UgXCJvbkRvdWJsZUNsaWNrXCI6Y2FzZSBcIm9uRG91YmxlQ2xpY2tDYXB0dXJlXCI6Y2FzZSBcIm9uTW91c2VEb3duXCI6Y2FzZSBcIm9uTW91c2VEb3duQ2FwdHVyZVwiOmNhc2UgXCJvbk1vdXNlTW92ZVwiOmNhc2UgXCJvbk1vdXNlTW92ZUNhcHR1cmVcIjpjYXNlIFwib25Nb3VzZVVwXCI6Y2FzZSBcIm9uTW91c2VVcENhcHR1cmVcIjooZD0hZC5kaXNhYmxlZCl8fChhPWEudHlwZSxkPSEoXCJidXR0b25cIj09PWF8fFwiaW5wdXRcIj09PWF8fFwic2VsZWN0XCI9PT1hfHxcInRleHRhcmVhXCI9PT1hKSk7YT0hZDticmVhayBhO2RlZmF1bHQ6YT0hMX1pZihhKXJldHVybiBudWxsO2MmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBjP3goXCIyMzFcIixiLHR5cGVvZiBjKTp2b2lkIDA7XG5yZXR1cm4gY31mdW5jdGlvbiBEYShhKXtudWxsIT09YSYmKHphPXhhKHphLGEpKTthPXphO3phPW51bGw7aWYoYSYmKHlhKGEsQWEpLHphP3goXCI5NVwiKTp2b2lkIDAsZmEpKXRocm93IGE9aGEsZmE9ITEsaGE9bnVsbCxhO312YXIgRWE9TWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMiksRmE9XCJfX3JlYWN0SW50ZXJuYWxJbnN0YW5jZSRcIitFYSxHYT1cIl9fcmVhY3RFdmVudEhhbmRsZXJzJFwiK0VhO2Z1bmN0aW9uIEhhKGEpe2lmKGFbRmFdKXJldHVybiBhW0ZhXTtmb3IoOyFhW0ZhXTspaWYoYS5wYXJlbnROb2RlKWE9YS5wYXJlbnROb2RlO2Vsc2UgcmV0dXJuIG51bGw7YT1hW0ZhXTtyZXR1cm4gNT09PWEudGFnfHw2PT09YS50YWc/YTpudWxsfWZ1bmN0aW9uIElhKGEpe2E9YVtGYV07cmV0dXJuIWF8fDUhPT1hLnRhZyYmNiE9PWEudGFnP251bGw6YX1cbmZ1bmN0aW9uIEphKGEpe2lmKDU9PT1hLnRhZ3x8Nj09PWEudGFnKXJldHVybiBhLnN0YXRlTm9kZTt4KFwiMzNcIil9ZnVuY3Rpb24gS2EoYSl7cmV0dXJuIGFbR2FdfHxudWxsfWZ1bmN0aW9uIExhKGEpe2RvIGE9YS5yZXR1cm47d2hpbGUoYSYmNSE9PWEudGFnKTtyZXR1cm4gYT9hOm51bGx9ZnVuY3Rpb24gTWEoYSxiLGMpe2lmKGI9Q2EoYSxjLmRpc3BhdGNoQ29uZmlnLnBoYXNlZFJlZ2lzdHJhdGlvbk5hbWVzW2JdKSljLl9kaXNwYXRjaExpc3RlbmVycz14YShjLl9kaXNwYXRjaExpc3RlbmVycyxiKSxjLl9kaXNwYXRjaEluc3RhbmNlcz14YShjLl9kaXNwYXRjaEluc3RhbmNlcyxhKX1cbmZ1bmN0aW9uIE5hKGEpe2lmKGEmJmEuZGlzcGF0Y2hDb25maWcucGhhc2VkUmVnaXN0cmF0aW9uTmFtZXMpe2Zvcih2YXIgYj1hLl90YXJnZXRJbnN0LGM9W107YjspYy5wdXNoKGIpLGI9TGEoYik7Zm9yKGI9Yy5sZW5ndGg7MDxiLS07KU1hKGNbYl0sXCJjYXB0dXJlZFwiLGEpO2ZvcihiPTA7YjxjLmxlbmd0aDtiKyspTWEoY1tiXSxcImJ1YmJsZWRcIixhKX19ZnVuY3Rpb24gT2EoYSxiLGMpe2EmJmMmJmMuZGlzcGF0Y2hDb25maWcucmVnaXN0cmF0aW9uTmFtZSYmKGI9Q2EoYSxjLmRpc3BhdGNoQ29uZmlnLnJlZ2lzdHJhdGlvbk5hbWUpKSYmKGMuX2Rpc3BhdGNoTGlzdGVuZXJzPXhhKGMuX2Rpc3BhdGNoTGlzdGVuZXJzLGIpLGMuX2Rpc3BhdGNoSW5zdGFuY2VzPXhhKGMuX2Rpc3BhdGNoSW5zdGFuY2VzLGEpKX1mdW5jdGlvbiBQYShhKXthJiZhLmRpc3BhdGNoQ29uZmlnLnJlZ2lzdHJhdGlvbk5hbWUmJk9hKGEuX3RhcmdldEluc3QsbnVsbCxhKX1cbmZ1bmN0aW9uIFFhKGEpe3lhKGEsTmEpfXZhciBSYT0hKFwidW5kZWZpbmVkXCI9PT10eXBlb2Ygd2luZG93fHwhd2luZG93LmRvY3VtZW50fHwhd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO2Z1bmN0aW9uIFNhKGEsYil7dmFyIGM9e307Y1thLnRvTG93ZXJDYXNlKCldPWIudG9Mb3dlckNhc2UoKTtjW1wiV2Via2l0XCIrYV09XCJ3ZWJraXRcIitiO2NbXCJNb3pcIithXT1cIm1velwiK2I7cmV0dXJuIGN9dmFyIFRhPXthbmltYXRpb25lbmQ6U2EoXCJBbmltYXRpb25cIixcIkFuaW1hdGlvbkVuZFwiKSxhbmltYXRpb25pdGVyYXRpb246U2EoXCJBbmltYXRpb25cIixcIkFuaW1hdGlvbkl0ZXJhdGlvblwiKSxhbmltYXRpb25zdGFydDpTYShcIkFuaW1hdGlvblwiLFwiQW5pbWF0aW9uU3RhcnRcIiksdHJhbnNpdGlvbmVuZDpTYShcIlRyYW5zaXRpb25cIixcIlRyYW5zaXRpb25FbmRcIil9LFVhPXt9LFZhPXt9O1xuUmEmJihWYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLnN0eWxlLFwiQW5pbWF0aW9uRXZlbnRcImluIHdpbmRvd3x8KGRlbGV0ZSBUYS5hbmltYXRpb25lbmQuYW5pbWF0aW9uLGRlbGV0ZSBUYS5hbmltYXRpb25pdGVyYXRpb24uYW5pbWF0aW9uLGRlbGV0ZSBUYS5hbmltYXRpb25zdGFydC5hbmltYXRpb24pLFwiVHJhbnNpdGlvbkV2ZW50XCJpbiB3aW5kb3d8fGRlbGV0ZSBUYS50cmFuc2l0aW9uZW5kLnRyYW5zaXRpb24pO2Z1bmN0aW9uIFdhKGEpe2lmKFVhW2FdKXJldHVybiBVYVthXTtpZighVGFbYV0pcmV0dXJuIGE7dmFyIGI9VGFbYV0sYztmb3IoYyBpbiBiKWlmKGIuaGFzT3duUHJvcGVydHkoYykmJmMgaW4gVmEpcmV0dXJuIFVhW2FdPWJbY107cmV0dXJuIGF9XG52YXIgWGE9V2EoXCJhbmltYXRpb25lbmRcIiksWWE9V2EoXCJhbmltYXRpb25pdGVyYXRpb25cIiksWmE9V2EoXCJhbmltYXRpb25zdGFydFwiKSwkYT1XYShcInRyYW5zaXRpb25lbmRcIiksYWI9XCJhYm9ydCBjYW5wbGF5IGNhbnBsYXl0aHJvdWdoIGR1cmF0aW9uY2hhbmdlIGVtcHRpZWQgZW5jcnlwdGVkIGVuZGVkIGVycm9yIGxvYWRlZGRhdGEgbG9hZGVkbWV0YWRhdGEgbG9hZHN0YXJ0IHBhdXNlIHBsYXkgcGxheWluZyBwcm9ncmVzcyByYXRlY2hhbmdlIHNlZWtlZCBzZWVraW5nIHN0YWxsZWQgc3VzcGVuZCB0aW1ldXBkYXRlIHZvbHVtZWNoYW5nZSB3YWl0aW5nXCIuc3BsaXQoXCIgXCIpLGJiPW51bGwsY2I9bnVsbCxkYj1udWxsO1xuZnVuY3Rpb24gZWIoKXtpZihkYilyZXR1cm4gZGI7dmFyIGEsYj1jYixjPWIubGVuZ3RoLGQsZT1cInZhbHVlXCJpbiBiYj9iYi52YWx1ZTpiYi50ZXh0Q29udGVudCxmPWUubGVuZ3RoO2ZvcihhPTA7YTxjJiZiW2FdPT09ZVthXTthKyspO3ZhciBnPWMtYTtmb3IoZD0xO2Q8PWcmJmJbYy1kXT09PWVbZi1kXTtkKyspO3JldHVybiBkYj1lLnNsaWNlKGEsMTxkPzEtZDp2b2lkIDApfWZ1bmN0aW9uIGZiKCl7cmV0dXJuITB9ZnVuY3Rpb24gZ2IoKXtyZXR1cm4hMX1cbmZ1bmN0aW9uIHkoYSxiLGMsZCl7dGhpcy5kaXNwYXRjaENvbmZpZz1hO3RoaXMuX3RhcmdldEluc3Q9Yjt0aGlzLm5hdGl2ZUV2ZW50PWM7YT10aGlzLmNvbnN0cnVjdG9yLkludGVyZmFjZTtmb3IodmFyIGUgaW4gYSlhLmhhc093blByb3BlcnR5KGUpJiYoKGI9YVtlXSk/dGhpc1tlXT1iKGMpOlwidGFyZ2V0XCI9PT1lP3RoaXMudGFyZ2V0PWQ6dGhpc1tlXT1jW2VdKTt0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD0obnVsbCE9Yy5kZWZhdWx0UHJldmVudGVkP2MuZGVmYXVsdFByZXZlbnRlZDohMT09PWMucmV0dXJuVmFsdWUpP2ZiOmdiO3RoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQ9Z2I7cmV0dXJuIHRoaXN9XG5uKHkucHJvdG90eXBlLHtwcmV2ZW50RGVmYXVsdDpmdW5jdGlvbigpe3RoaXMuZGVmYXVsdFByZXZlbnRlZD0hMDt2YXIgYT10aGlzLm5hdGl2ZUV2ZW50O2EmJihhLnByZXZlbnREZWZhdWx0P2EucHJldmVudERlZmF1bHQoKTpcInVua25vd25cIiE9PXR5cGVvZiBhLnJldHVyblZhbHVlJiYoYS5yZXR1cm5WYWx1ZT0hMSksdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9ZmIpfSxzdG9wUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm5hdGl2ZUV2ZW50O2EmJihhLnN0b3BQcm9wYWdhdGlvbj9hLnN0b3BQcm9wYWdhdGlvbigpOlwidW5rbm93blwiIT09dHlwZW9mIGEuY2FuY2VsQnViYmxlJiYoYS5jYW5jZWxCdWJibGU9ITApLHRoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQ9ZmIpfSxwZXJzaXN0OmZ1bmN0aW9uKCl7dGhpcy5pc1BlcnNpc3RlbnQ9ZmJ9LGlzUGVyc2lzdGVudDpnYixkZXN0cnVjdG9yOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5jb25zdHJ1Y3Rvci5JbnRlcmZhY2UsXG5iO2ZvcihiIGluIGEpdGhpc1tiXT1udWxsO3RoaXMubmF0aXZlRXZlbnQ9dGhpcy5fdGFyZ2V0SW5zdD10aGlzLmRpc3BhdGNoQ29uZmlnPW51bGw7dGhpcy5pc1Byb3BhZ2F0aW9uU3RvcHBlZD10aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1nYjt0aGlzLl9kaXNwYXRjaEluc3RhbmNlcz10aGlzLl9kaXNwYXRjaExpc3RlbmVycz1udWxsfX0pO3kuSW50ZXJmYWNlPXt0eXBlOm51bGwsdGFyZ2V0Om51bGwsY3VycmVudFRhcmdldDpmdW5jdGlvbigpe3JldHVybiBudWxsfSxldmVudFBoYXNlOm51bGwsYnViYmxlczpudWxsLGNhbmNlbGFibGU6bnVsbCx0aW1lU3RhbXA6ZnVuY3Rpb24oYSl7cmV0dXJuIGEudGltZVN0YW1wfHxEYXRlLm5vdygpfSxkZWZhdWx0UHJldmVudGVkOm51bGwsaXNUcnVzdGVkOm51bGx9O1xueS5leHRlbmQ9ZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYigpe31mdW5jdGlvbiBjKCl7cmV0dXJuIGQuYXBwbHkodGhpcyxhcmd1bWVudHMpfXZhciBkPXRoaXM7Yi5wcm90b3R5cGU9ZC5wcm90b3R5cGU7dmFyIGU9bmV3IGI7bihlLGMucHJvdG90eXBlKTtjLnByb3RvdHlwZT1lO2MucHJvdG90eXBlLmNvbnN0cnVjdG9yPWM7Yy5JbnRlcmZhY2U9bih7fSxkLkludGVyZmFjZSxhKTtjLmV4dGVuZD1kLmV4dGVuZDtoYihjKTtyZXR1cm4gY307aGIoeSk7ZnVuY3Rpb24gaWIoYSxiLGMsZCl7aWYodGhpcy5ldmVudFBvb2wubGVuZ3RoKXt2YXIgZT10aGlzLmV2ZW50UG9vbC5wb3AoKTt0aGlzLmNhbGwoZSxhLGIsYyxkKTtyZXR1cm4gZX1yZXR1cm4gbmV3IHRoaXMoYSxiLGMsZCl9ZnVuY3Rpb24gamIoYSl7YSBpbnN0YW5jZW9mIHRoaXM/dm9pZCAwOngoXCIyNzlcIik7YS5kZXN0cnVjdG9yKCk7MTA+dGhpcy5ldmVudFBvb2wubGVuZ3RoJiZ0aGlzLmV2ZW50UG9vbC5wdXNoKGEpfVxuZnVuY3Rpb24gaGIoYSl7YS5ldmVudFBvb2w9W107YS5nZXRQb29sZWQ9aWI7YS5yZWxlYXNlPWpifXZhciBrYj15LmV4dGVuZCh7ZGF0YTpudWxsfSksbGI9eS5leHRlbmQoe2RhdGE6bnVsbH0pLG1iPVs5LDEzLDI3LDMyXSxuYj1SYSYmXCJDb21wb3NpdGlvbkV2ZW50XCJpbiB3aW5kb3csb2I9bnVsbDtSYSYmXCJkb2N1bWVudE1vZGVcImluIGRvY3VtZW50JiYob2I9ZG9jdW1lbnQuZG9jdW1lbnRNb2RlKTtcbnZhciBwYj1SYSYmXCJUZXh0RXZlbnRcImluIHdpbmRvdyYmIW9iLHFiPVJhJiYoIW5ifHxvYiYmODxvYiYmMTE+PW9iKSxyYj1TdHJpbmcuZnJvbUNoYXJDb2RlKDMyKSxzYj17YmVmb3JlSW5wdXQ6e3BoYXNlZFJlZ2lzdHJhdGlvbk5hbWVzOntidWJibGVkOlwib25CZWZvcmVJbnB1dFwiLGNhcHR1cmVkOlwib25CZWZvcmVJbnB1dENhcHR1cmVcIn0sZGVwZW5kZW5jaWVzOltcImNvbXBvc2l0aW9uZW5kXCIsXCJrZXlwcmVzc1wiLFwidGV4dElucHV0XCIsXCJwYXN0ZVwiXX0sY29tcG9zaXRpb25FbmQ6e3BoYXNlZFJlZ2lzdHJhdGlvbk5hbWVzOntidWJibGVkOlwib25Db21wb3NpdGlvbkVuZFwiLGNhcHR1cmVkOlwib25Db21wb3NpdGlvbkVuZENhcHR1cmVcIn0sZGVwZW5kZW5jaWVzOlwiYmx1ciBjb21wb3NpdGlvbmVuZCBrZXlkb3duIGtleXByZXNzIGtleXVwIG1vdXNlZG93blwiLnNwbGl0KFwiIFwiKX0sY29tcG9zaXRpb25TdGFydDp7cGhhc2VkUmVnaXN0cmF0aW9uTmFtZXM6e2J1YmJsZWQ6XCJvbkNvbXBvc2l0aW9uU3RhcnRcIixcbmNhcHR1cmVkOlwib25Db21wb3NpdGlvblN0YXJ0Q2FwdHVyZVwifSxkZXBlbmRlbmNpZXM6XCJibHVyIGNvbXBvc2l0aW9uc3RhcnQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBtb3VzZWRvd25cIi5zcGxpdChcIiBcIil9LGNvbXBvc2l0aW9uVXBkYXRlOntwaGFzZWRSZWdpc3RyYXRpb25OYW1lczp7YnViYmxlZDpcIm9uQ29tcG9zaXRpb25VcGRhdGVcIixjYXB0dXJlZDpcIm9uQ29tcG9zaXRpb25VcGRhdGVDYXB0dXJlXCJ9LGRlcGVuZGVuY2llczpcImJsdXIgY29tcG9zaXRpb251cGRhdGUga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBtb3VzZWRvd25cIi5zcGxpdChcIiBcIil9fSx0Yj0hMTtcbmZ1bmN0aW9uIHViKGEsYil7c3dpdGNoKGEpe2Nhc2UgXCJrZXl1cFwiOnJldHVybi0xIT09bWIuaW5kZXhPZihiLmtleUNvZGUpO2Nhc2UgXCJrZXlkb3duXCI6cmV0dXJuIDIyOSE9PWIua2V5Q29kZTtjYXNlIFwia2V5cHJlc3NcIjpjYXNlIFwibW91c2Vkb3duXCI6Y2FzZSBcImJsdXJcIjpyZXR1cm4hMDtkZWZhdWx0OnJldHVybiExfX1mdW5jdGlvbiB2YihhKXthPWEuZGV0YWlsO3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmXCJkYXRhXCJpbiBhP2EuZGF0YTpudWxsfXZhciB3Yj0hMTtmdW5jdGlvbiB4YihhLGIpe3N3aXRjaChhKXtjYXNlIFwiY29tcG9zaXRpb25lbmRcIjpyZXR1cm4gdmIoYik7Y2FzZSBcImtleXByZXNzXCI6aWYoMzIhPT1iLndoaWNoKXJldHVybiBudWxsO3RiPSEwO3JldHVybiByYjtjYXNlIFwidGV4dElucHV0XCI6cmV0dXJuIGE9Yi5kYXRhLGE9PT1yYiYmdGI/bnVsbDphO2RlZmF1bHQ6cmV0dXJuIG51bGx9fVxuZnVuY3Rpb24geWIoYSxiKXtpZih3YilyZXR1cm5cImNvbXBvc2l0aW9uZW5kXCI9PT1hfHwhbmImJnViKGEsYik/KGE9ZWIoKSxkYj1jYj1iYj1udWxsLHdiPSExLGEpOm51bGw7c3dpdGNoKGEpe2Nhc2UgXCJwYXN0ZVwiOnJldHVybiBudWxsO2Nhc2UgXCJrZXlwcmVzc1wiOmlmKCEoYi5jdHJsS2V5fHxiLmFsdEtleXx8Yi5tZXRhS2V5KXx8Yi5jdHJsS2V5JiZiLmFsdEtleSl7aWYoYi5jaGFyJiYxPGIuY2hhci5sZW5ndGgpcmV0dXJuIGIuY2hhcjtpZihiLndoaWNoKXJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGIud2hpY2gpfXJldHVybiBudWxsO2Nhc2UgXCJjb21wb3NpdGlvbmVuZFwiOnJldHVybiBxYiYmXCJrb1wiIT09Yi5sb2NhbGU/bnVsbDpiLmRhdGE7ZGVmYXVsdDpyZXR1cm4gbnVsbH19XG52YXIgemI9e2V2ZW50VHlwZXM6c2IsZXh0cmFjdEV2ZW50czpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZT12b2lkIDA7dmFyIGY9dm9pZCAwO2lmKG5iKWI6e3N3aXRjaChhKXtjYXNlIFwiY29tcG9zaXRpb25zdGFydFwiOmU9c2IuY29tcG9zaXRpb25TdGFydDticmVhayBiO2Nhc2UgXCJjb21wb3NpdGlvbmVuZFwiOmU9c2IuY29tcG9zaXRpb25FbmQ7YnJlYWsgYjtjYXNlIFwiY29tcG9zaXRpb251cGRhdGVcIjplPXNiLmNvbXBvc2l0aW9uVXBkYXRlO2JyZWFrIGJ9ZT12b2lkIDB9ZWxzZSB3Yj91YihhLGMpJiYoZT1zYi5jb21wb3NpdGlvbkVuZCk6XCJrZXlkb3duXCI9PT1hJiYyMjk9PT1jLmtleUNvZGUmJihlPXNiLmNvbXBvc2l0aW9uU3RhcnQpO2U/KHFiJiZcImtvXCIhPT1jLmxvY2FsZSYmKHdifHxlIT09c2IuY29tcG9zaXRpb25TdGFydD9lPT09c2IuY29tcG9zaXRpb25FbmQmJndiJiYoZj1lYigpKTooYmI9ZCxjYj1cInZhbHVlXCJpbiBiYj9iYi52YWx1ZTpiYi50ZXh0Q29udGVudCx3Yj1cbiEwKSksZT1rYi5nZXRQb29sZWQoZSxiLGMsZCksZj9lLmRhdGE9ZjooZj12YihjKSxudWxsIT09ZiYmKGUuZGF0YT1mKSksUWEoZSksZj1lKTpmPW51bGw7KGE9cGI/eGIoYSxjKTp5YihhLGMpKT8oYj1sYi5nZXRQb29sZWQoc2IuYmVmb3JlSW5wdXQsYixjLGQpLGIuZGF0YT1hLFFhKGIpKTpiPW51bGw7cmV0dXJuIG51bGw9PT1mP2I6bnVsbD09PWI/ZjpbZixiXX19LEFiPW51bGwsQmI9bnVsbCxDYj1udWxsO2Z1bmN0aW9uIERiKGEpe2lmKGE9dWEoYSkpe1wiZnVuY3Rpb25cIiE9PXR5cGVvZiBBYj94KFwiMjgwXCIpOnZvaWQgMDt2YXIgYj10YShhLnN0YXRlTm9kZSk7QWIoYS5zdGF0ZU5vZGUsYS50eXBlLGIpfX1mdW5jdGlvbiBFYihhKXtCYj9DYj9DYi5wdXNoKGEpOkNiPVthXTpCYj1hfWZ1bmN0aW9uIEZiKCl7aWYoQmIpe3ZhciBhPUJiLGI9Q2I7Q2I9QmI9bnVsbDtEYihhKTtpZihiKWZvcihhPTA7YTxiLmxlbmd0aDthKyspRGIoYlthXSl9fVxuZnVuY3Rpb24gR2IoYSxiKXtyZXR1cm4gYShiKX1mdW5jdGlvbiBIYihhLGIsYyl7cmV0dXJuIGEoYixjKX1mdW5jdGlvbiBJYigpe312YXIgSmI9ITE7ZnVuY3Rpb24gS2IoYSxiKXtpZihKYilyZXR1cm4gYShiKTtKYj0hMDt0cnl7cmV0dXJuIEdiKGEsYil9ZmluYWxseXtpZihKYj0hMSxudWxsIT09QmJ8fG51bGwhPT1DYilJYigpLEZiKCl9fXZhciBMYj17Y29sb3I6ITAsZGF0ZTohMCxkYXRldGltZTohMCxcImRhdGV0aW1lLWxvY2FsXCI6ITAsZW1haWw6ITAsbW9udGg6ITAsbnVtYmVyOiEwLHBhc3N3b3JkOiEwLHJhbmdlOiEwLHNlYXJjaDohMCx0ZWw6ITAsdGV4dDohMCx0aW1lOiEwLHVybDohMCx3ZWVrOiEwfTtmdW5jdGlvbiBNYihhKXt2YXIgYj1hJiZhLm5vZGVOYW1lJiZhLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09Yj8hIUxiW2EudHlwZV06XCJ0ZXh0YXJlYVwiPT09Yj8hMDohMX1cbmZ1bmN0aW9uIE5iKGEpe2E9YS50YXJnZXR8fGEuc3JjRWxlbWVudHx8d2luZG93O2EuY29ycmVzcG9uZGluZ1VzZUVsZW1lbnQmJihhPWEuY29ycmVzcG9uZGluZ1VzZUVsZW1lbnQpO3JldHVybiAzPT09YS5ub2RlVHlwZT9hLnBhcmVudE5vZGU6YX1mdW5jdGlvbiBPYihhKXtpZighUmEpcmV0dXJuITE7YT1cIm9uXCIrYTt2YXIgYj1hIGluIGRvY3VtZW50O2J8fChiPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksYi5zZXRBdHRyaWJ1dGUoYSxcInJldHVybjtcIiksYj1cImZ1bmN0aW9uXCI9PT10eXBlb2YgYlthXSk7cmV0dXJuIGJ9ZnVuY3Rpb24gUGIoYSl7dmFyIGI9YS50eXBlO3JldHVybihhPWEubm9kZU5hbWUpJiZcImlucHV0XCI9PT1hLnRvTG93ZXJDYXNlKCkmJihcImNoZWNrYm94XCI9PT1ifHxcInJhZGlvXCI9PT1iKX1cbmZ1bmN0aW9uIFFiKGEpe3ZhciBiPVBiKGEpP1wiY2hlY2tlZFwiOlwidmFsdWVcIixjPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUsYiksZD1cIlwiK2FbYl07aWYoIWEuaGFzT3duUHJvcGVydHkoYikmJlwidW5kZWZpbmVkXCIhPT10eXBlb2YgYyYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGMuZ2V0JiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgYy5zZXQpe3ZhciBlPWMuZ2V0LGY9Yy5zZXQ7T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsYix7Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBlLmNhbGwodGhpcyl9LHNldDpmdW5jdGlvbihhKXtkPVwiXCIrYTtmLmNhbGwodGhpcyxhKX19KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxiLHtlbnVtZXJhYmxlOmMuZW51bWVyYWJsZX0pO3JldHVybntnZXRWYWx1ZTpmdW5jdGlvbigpe3JldHVybiBkfSxzZXRWYWx1ZTpmdW5jdGlvbihhKXtkPVwiXCIrYX0sc3RvcFRyYWNraW5nOmZ1bmN0aW9uKCl7YS5fdmFsdWVUcmFja2VyPVxubnVsbDtkZWxldGUgYVtiXX19fX1mdW5jdGlvbiBSYihhKXthLl92YWx1ZVRyYWNrZXJ8fChhLl92YWx1ZVRyYWNrZXI9UWIoYSkpfWZ1bmN0aW9uIFNiKGEpe2lmKCFhKXJldHVybiExO3ZhciBiPWEuX3ZhbHVlVHJhY2tlcjtpZighYilyZXR1cm4hMDt2YXIgYz1iLmdldFZhbHVlKCk7dmFyIGQ9XCJcIjthJiYoZD1QYihhKT9hLmNoZWNrZWQ/XCJ0cnVlXCI6XCJmYWxzZVwiOmEudmFsdWUpO2E9ZDtyZXR1cm4gYSE9PWM/KGIuc2V0VmFsdWUoYSksITApOiExfXZhciBUYj1hYS5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDtUYi5oYXNPd25Qcm9wZXJ0eShcIlJlYWN0Q3VycmVudERpc3BhdGNoZXJcIil8fChUYi5SZWFjdEN1cnJlbnREaXNwYXRjaGVyPXtjdXJyZW50Om51bGx9KTtcbnZhciBVYj0vXiguKilbXFxcXFxcL10vLHo9XCJmdW5jdGlvblwiPT09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvcixWYj16P1N5bWJvbC5mb3IoXCJyZWFjdC5lbGVtZW50XCIpOjYwMTAzLFdiPXo/U3ltYm9sLmZvcihcInJlYWN0LnBvcnRhbFwiKTo2MDEwNixYYj16P1N5bWJvbC5mb3IoXCJyZWFjdC5mcmFnbWVudFwiKTo2MDEwNyxZYj16P1N5bWJvbC5mb3IoXCJyZWFjdC5zdHJpY3RfbW9kZVwiKTo2MDEwOCxaYj16P1N5bWJvbC5mb3IoXCJyZWFjdC5wcm9maWxlclwiKTo2MDExNCwkYj16P1N5bWJvbC5mb3IoXCJyZWFjdC5wcm92aWRlclwiKTo2MDEwOSxhYz16P1N5bWJvbC5mb3IoXCJyZWFjdC5jb250ZXh0XCIpOjYwMTEwLGJjPXo/U3ltYm9sLmZvcihcInJlYWN0LmNvbmN1cnJlbnRfbW9kZVwiKTo2MDExMSxjYz16P1N5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKTo2MDExMixkYz16P1N5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZVwiKTo2MDExMyxlYz16P1N5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpOlxuNjAxMTUsZmM9ej9TeW1ib2wuZm9yKFwicmVhY3QubGF6eVwiKTo2MDExNixnYz1cImZ1bmN0aW9uXCI9PT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuaXRlcmF0b3I7ZnVuY3Rpb24gaGMoYSl7aWYobnVsbD09PWF8fFwib2JqZWN0XCIhPT10eXBlb2YgYSlyZXR1cm4gbnVsbDthPWdjJiZhW2djXXx8YVtcIkBAaXRlcmF0b3JcIl07cmV0dXJuXCJmdW5jdGlvblwiPT09dHlwZW9mIGE/YTpudWxsfVxuZnVuY3Rpb24gaWMoYSl7aWYobnVsbD09YSlyZXR1cm4gbnVsbDtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYSlyZXR1cm4gYS5kaXNwbGF5TmFtZXx8YS5uYW1lfHxudWxsO2lmKFwic3RyaW5nXCI9PT10eXBlb2YgYSlyZXR1cm4gYTtzd2l0Y2goYSl7Y2FzZSBiYzpyZXR1cm5cIkNvbmN1cnJlbnRNb2RlXCI7Y2FzZSBYYjpyZXR1cm5cIkZyYWdtZW50XCI7Y2FzZSBXYjpyZXR1cm5cIlBvcnRhbFwiO2Nhc2UgWmI6cmV0dXJuXCJQcm9maWxlclwiO2Nhc2UgWWI6cmV0dXJuXCJTdHJpY3RNb2RlXCI7Y2FzZSBkYzpyZXR1cm5cIlN1c3BlbnNlXCJ9aWYoXCJvYmplY3RcIj09PXR5cGVvZiBhKXN3aXRjaChhLiQkdHlwZW9mKXtjYXNlIGFjOnJldHVyblwiQ29udGV4dC5Db25zdW1lclwiO2Nhc2UgJGI6cmV0dXJuXCJDb250ZXh0LlByb3ZpZGVyXCI7Y2FzZSBjYzp2YXIgYj1hLnJlbmRlcjtiPWIuZGlzcGxheU5hbWV8fGIubmFtZXx8XCJcIjtyZXR1cm4gYS5kaXNwbGF5TmFtZXx8KFwiXCIhPT1iP1wiRm9yd2FyZFJlZihcIitiK1xuXCIpXCI6XCJGb3J3YXJkUmVmXCIpO2Nhc2UgZWM6cmV0dXJuIGljKGEudHlwZSk7Y2FzZSBmYzppZihhPTE9PT1hLl9zdGF0dXM/YS5fcmVzdWx0Om51bGwpcmV0dXJuIGljKGEpfXJldHVybiBudWxsfWZ1bmN0aW9uIGpjKGEpe3ZhciBiPVwiXCI7ZG97YTpzd2l0Y2goYS50YWcpe2Nhc2UgMzpjYXNlIDQ6Y2FzZSA2OmNhc2UgNzpjYXNlIDEwOmNhc2UgOTp2YXIgYz1cIlwiO2JyZWFrIGE7ZGVmYXVsdDp2YXIgZD1hLl9kZWJ1Z093bmVyLGU9YS5fZGVidWdTb3VyY2UsZj1pYyhhLnR5cGUpO2M9bnVsbDtkJiYoYz1pYyhkLnR5cGUpKTtkPWY7Zj1cIlwiO2U/Zj1cIiAoYXQgXCIrZS5maWxlTmFtZS5yZXBsYWNlKFViLFwiXCIpK1wiOlwiK2UubGluZU51bWJlcitcIilcIjpjJiYoZj1cIiAoY3JlYXRlZCBieSBcIitjK1wiKVwiKTtjPVwiXFxuICAgIGluIFwiKyhkfHxcIlVua25vd25cIikrZn1iKz1jO2E9YS5yZXR1cm59d2hpbGUoYSk7cmV0dXJuIGJ9XG52YXIga2M9L15bOkEtWl9hLXpcXHUwMEMwLVxcdTAwRDZcXHUwMEQ4LVxcdTAwRjZcXHUwMEY4LVxcdTAyRkZcXHUwMzcwLVxcdTAzN0RcXHUwMzdGLVxcdTFGRkZcXHUyMDBDLVxcdTIwMERcXHUyMDcwLVxcdTIxOEZcXHUyQzAwLVxcdTJGRUZcXHUzMDAxLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRkRdWzpBLVpfYS16XFx1MDBDMC1cXHUwMEQ2XFx1MDBEOC1cXHUwMEY2XFx1MDBGOC1cXHUwMkZGXFx1MDM3MC1cXHUwMzdEXFx1MDM3Ri1cXHUxRkZGXFx1MjAwQy1cXHUyMDBEXFx1MjA3MC1cXHUyMThGXFx1MkMwMC1cXHUyRkVGXFx1MzAwMS1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkZEXFwtLjAtOVxcdTAwQjdcXHUwMzAwLVxcdTAzNkZcXHUyMDNGLVxcdTIwNDBdKiQvLGxjPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksbWM9e30sbmM9e307XG5mdW5jdGlvbiBvYyhhKXtpZihsYy5jYWxsKG5jLGEpKXJldHVybiEwO2lmKGxjLmNhbGwobWMsYSkpcmV0dXJuITE7aWYoa2MudGVzdChhKSlyZXR1cm4gbmNbYV09ITA7bWNbYV09ITA7cmV0dXJuITF9ZnVuY3Rpb24gcGMoYSxiLGMsZCl7aWYobnVsbCE9PWMmJjA9PT1jLnR5cGUpcmV0dXJuITE7c3dpdGNoKHR5cGVvZiBiKXtjYXNlIFwiZnVuY3Rpb25cIjpjYXNlIFwic3ltYm9sXCI6cmV0dXJuITA7Y2FzZSBcImJvb2xlYW5cIjppZihkKXJldHVybiExO2lmKG51bGwhPT1jKXJldHVybiFjLmFjY2VwdHNCb29sZWFuczthPWEudG9Mb3dlckNhc2UoKS5zbGljZSgwLDUpO3JldHVyblwiZGF0YS1cIiE9PWEmJlwiYXJpYS1cIiE9PWE7ZGVmYXVsdDpyZXR1cm4hMX19XG5mdW5jdGlvbiBxYyhhLGIsYyxkKXtpZihudWxsPT09Ynx8XCJ1bmRlZmluZWRcIj09PXR5cGVvZiBifHxwYyhhLGIsYyxkKSlyZXR1cm4hMDtpZihkKXJldHVybiExO2lmKG51bGwhPT1jKXN3aXRjaChjLnR5cGUpe2Nhc2UgMzpyZXR1cm4hYjtjYXNlIDQ6cmV0dXJuITE9PT1iO2Nhc2UgNTpyZXR1cm4gaXNOYU4oYik7Y2FzZSA2OnJldHVybiBpc05hTihiKXx8MT5ifXJldHVybiExfWZ1bmN0aW9uIEMoYSxiLGMsZCxlKXt0aGlzLmFjY2VwdHNCb29sZWFucz0yPT09Ynx8Mz09PWJ8fDQ9PT1iO3RoaXMuYXR0cmlidXRlTmFtZT1kO3RoaXMuYXR0cmlidXRlTmFtZXNwYWNlPWU7dGhpcy5tdXN0VXNlUHJvcGVydHk9Yzt0aGlzLnByb3BlcnR5TmFtZT1hO3RoaXMudHlwZT1ifXZhciBEPXt9O1xuXCJjaGlsZHJlbiBkYW5nZXJvdXNseVNldElubmVySFRNTCBkZWZhdWx0VmFsdWUgZGVmYXVsdENoZWNrZWQgaW5uZXJIVE1MIHN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyBzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmcgc3R5bGVcIi5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbihhKXtEW2FdPW5ldyBDKGEsMCwhMSxhLG51bGwpfSk7W1tcImFjY2VwdENoYXJzZXRcIixcImFjY2VwdC1jaGFyc2V0XCJdLFtcImNsYXNzTmFtZVwiLFwiY2xhc3NcIl0sW1wiaHRtbEZvclwiLFwiZm9yXCJdLFtcImh0dHBFcXVpdlwiLFwiaHR0cC1lcXVpdlwiXV0uZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYj1hWzBdO0RbYl09bmV3IEMoYiwxLCExLGFbMV0sbnVsbCl9KTtbXCJjb250ZW50RWRpdGFibGVcIixcImRyYWdnYWJsZVwiLFwic3BlbGxDaGVja1wiLFwidmFsdWVcIl0uZm9yRWFjaChmdW5jdGlvbihhKXtEW2FdPW5ldyBDKGEsMiwhMSxhLnRvTG93ZXJDYXNlKCksbnVsbCl9KTtcbltcImF1dG9SZXZlcnNlXCIsXCJleHRlcm5hbFJlc291cmNlc1JlcXVpcmVkXCIsXCJmb2N1c2FibGVcIixcInByZXNlcnZlQWxwaGFcIl0uZm9yRWFjaChmdW5jdGlvbihhKXtEW2FdPW5ldyBDKGEsMiwhMSxhLG51bGwpfSk7XCJhbGxvd0Z1bGxTY3JlZW4gYXN5bmMgYXV0b0ZvY3VzIGF1dG9QbGF5IGNvbnRyb2xzIGRlZmF1bHQgZGVmZXIgZGlzYWJsZWQgZm9ybU5vVmFsaWRhdGUgaGlkZGVuIGxvb3Agbm9Nb2R1bGUgbm9WYWxpZGF0ZSBvcGVuIHBsYXlzSW5saW5lIHJlYWRPbmx5IHJlcXVpcmVkIHJldmVyc2VkIHNjb3BlZCBzZWFtbGVzcyBpdGVtU2NvcGVcIi5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbihhKXtEW2FdPW5ldyBDKGEsMywhMSxhLnRvTG93ZXJDYXNlKCksbnVsbCl9KTtbXCJjaGVja2VkXCIsXCJtdWx0aXBsZVwiLFwibXV0ZWRcIixcInNlbGVjdGVkXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQyhhLDMsITAsYSxudWxsKX0pO1xuW1wiY2FwdHVyZVwiLFwiZG93bmxvYWRcIl0uZm9yRWFjaChmdW5jdGlvbihhKXtEW2FdPW5ldyBDKGEsNCwhMSxhLG51bGwpfSk7W1wiY29sc1wiLFwicm93c1wiLFwic2l6ZVwiLFwic3BhblwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0RbYV09bmV3IEMoYSw2LCExLGEsbnVsbCl9KTtbXCJyb3dTcGFuXCIsXCJzdGFydFwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0RbYV09bmV3IEMoYSw1LCExLGEudG9Mb3dlckNhc2UoKSxudWxsKX0pO3ZhciByYz0vW1xcLTpdKFthLXpdKS9nO2Z1bmN0aW9uIHNjKGEpe3JldHVybiBhWzFdLnRvVXBwZXJDYXNlKCl9XG5cImFjY2VudC1oZWlnaHQgYWxpZ25tZW50LWJhc2VsaW5lIGFyYWJpYy1mb3JtIGJhc2VsaW5lLXNoaWZ0IGNhcC1oZWlnaHQgY2xpcC1wYXRoIGNsaXAtcnVsZSBjb2xvci1pbnRlcnBvbGF0aW9uIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycyBjb2xvci1wcm9maWxlIGNvbG9yLXJlbmRlcmluZyBkb21pbmFudC1iYXNlbGluZSBlbmFibGUtYmFja2dyb3VuZCBmaWxsLW9wYWNpdHkgZmlsbC1ydWxlIGZsb29kLWNvbG9yIGZsb29kLW9wYWNpdHkgZm9udC1mYW1pbHkgZm9udC1zaXplIGZvbnQtc2l6ZS1hZGp1c3QgZm9udC1zdHJldGNoIGZvbnQtc3R5bGUgZm9udC12YXJpYW50IGZvbnQtd2VpZ2h0IGdseXBoLW5hbWUgZ2x5cGgtb3JpZW50YXRpb24taG9yaXpvbnRhbCBnbHlwaC1vcmllbnRhdGlvbi12ZXJ0aWNhbCBob3Jpei1hZHYteCBob3Jpei1vcmlnaW4teCBpbWFnZS1yZW5kZXJpbmcgbGV0dGVyLXNwYWNpbmcgbGlnaHRpbmctY29sb3IgbWFya2VyLWVuZCBtYXJrZXItbWlkIG1hcmtlci1zdGFydCBvdmVybGluZS1wb3NpdGlvbiBvdmVybGluZS10aGlja25lc3MgcGFpbnQtb3JkZXIgcGFub3NlLTEgcG9pbnRlci1ldmVudHMgcmVuZGVyaW5nLWludGVudCBzaGFwZS1yZW5kZXJpbmcgc3RvcC1jb2xvciBzdG9wLW9wYWNpdHkgc3RyaWtldGhyb3VnaC1wb3NpdGlvbiBzdHJpa2V0aHJvdWdoLXRoaWNrbmVzcyBzdHJva2UtZGFzaGFycmF5IHN0cm9rZS1kYXNob2Zmc2V0IHN0cm9rZS1saW5lY2FwIHN0cm9rZS1saW5lam9pbiBzdHJva2UtbWl0ZXJsaW1pdCBzdHJva2Utb3BhY2l0eSBzdHJva2Utd2lkdGggdGV4dC1hbmNob3IgdGV4dC1kZWNvcmF0aW9uIHRleHQtcmVuZGVyaW5nIHVuZGVybGluZS1wb3NpdGlvbiB1bmRlcmxpbmUtdGhpY2tuZXNzIHVuaWNvZGUtYmlkaSB1bmljb2RlLXJhbmdlIHVuaXRzLXBlci1lbSB2LWFscGhhYmV0aWMgdi1oYW5naW5nIHYtaWRlb2dyYXBoaWMgdi1tYXRoZW1hdGljYWwgdmVjdG9yLWVmZmVjdCB2ZXJ0LWFkdi15IHZlcnQtb3JpZ2luLXggdmVydC1vcmlnaW4teSB3b3JkLXNwYWNpbmcgd3JpdGluZy1tb2RlIHhtbG5zOnhsaW5rIHgtaGVpZ2h0XCIuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKHJjLFxuc2MpO0RbYl09bmV3IEMoYiwxLCExLGEsbnVsbCl9KTtcInhsaW5rOmFjdHVhdGUgeGxpbms6YXJjcm9sZSB4bGluazpocmVmIHhsaW5rOnJvbGUgeGxpbms6c2hvdyB4bGluazp0aXRsZSB4bGluazp0eXBlXCIuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKHJjLHNjKTtEW2JdPW5ldyBDKGIsMSwhMSxhLFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiKX0pO1tcInhtbDpiYXNlXCIsXCJ4bWw6bGFuZ1wiLFwieG1sOnNwYWNlXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKHJjLHNjKTtEW2JdPW5ldyBDKGIsMSwhMSxhLFwiaHR0cDovL3d3dy53My5vcmcvWE1MLzE5OTgvbmFtZXNwYWNlXCIpfSk7W1widGFiSW5kZXhcIixcImNyb3NzT3JpZ2luXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQyhhLDEsITEsYS50b0xvd2VyQ2FzZSgpLG51bGwpfSk7XG5mdW5jdGlvbiB0YyhhLGIsYyxkKXt2YXIgZT1ELmhhc093blByb3BlcnR5KGIpP0RbYl06bnVsbDt2YXIgZj1udWxsIT09ZT8wPT09ZS50eXBlOmQ/ITE6ISgyPGIubGVuZ3RoKXx8XCJvXCIhPT1iWzBdJiZcIk9cIiE9PWJbMF18fFwiblwiIT09YlsxXSYmXCJOXCIhPT1iWzFdPyExOiEwO2Z8fChxYyhiLGMsZSxkKSYmKGM9bnVsbCksZHx8bnVsbD09PWU/b2MoYikmJihudWxsPT09Yz9hLnJlbW92ZUF0dHJpYnV0ZShiKTphLnNldEF0dHJpYnV0ZShiLFwiXCIrYykpOmUubXVzdFVzZVByb3BlcnR5P2FbZS5wcm9wZXJ0eU5hbWVdPW51bGw9PT1jPzM9PT1lLnR5cGU/ITE6XCJcIjpjOihiPWUuYXR0cmlidXRlTmFtZSxkPWUuYXR0cmlidXRlTmFtZXNwYWNlLG51bGw9PT1jP2EucmVtb3ZlQXR0cmlidXRlKGIpOihlPWUudHlwZSxjPTM9PT1lfHw0PT09ZSYmITA9PT1jP1wiXCI6XCJcIitjLGQ/YS5zZXRBdHRyaWJ1dGVOUyhkLGIsYyk6YS5zZXRBdHRyaWJ1dGUoYixjKSkpKX1cbmZ1bmN0aW9uIHVjKGEpe3N3aXRjaCh0eXBlb2YgYSl7Y2FzZSBcImJvb2xlYW5cIjpjYXNlIFwibnVtYmVyXCI6Y2FzZSBcIm9iamVjdFwiOmNhc2UgXCJzdHJpbmdcIjpjYXNlIFwidW5kZWZpbmVkXCI6cmV0dXJuIGE7ZGVmYXVsdDpyZXR1cm5cIlwifX1mdW5jdGlvbiB2YyhhLGIpe3ZhciBjPWIuY2hlY2tlZDtyZXR1cm4gbih7fSxiLHtkZWZhdWx0Q2hlY2tlZDp2b2lkIDAsZGVmYXVsdFZhbHVlOnZvaWQgMCx2YWx1ZTp2b2lkIDAsY2hlY2tlZDpudWxsIT1jP2M6YS5fd3JhcHBlclN0YXRlLmluaXRpYWxDaGVja2VkfSl9XG5mdW5jdGlvbiB3YyhhLGIpe3ZhciBjPW51bGw9PWIuZGVmYXVsdFZhbHVlP1wiXCI6Yi5kZWZhdWx0VmFsdWUsZD1udWxsIT1iLmNoZWNrZWQ/Yi5jaGVja2VkOmIuZGVmYXVsdENoZWNrZWQ7Yz11YyhudWxsIT1iLnZhbHVlP2IudmFsdWU6Yyk7YS5fd3JhcHBlclN0YXRlPXtpbml0aWFsQ2hlY2tlZDpkLGluaXRpYWxWYWx1ZTpjLGNvbnRyb2xsZWQ6XCJjaGVja2JveFwiPT09Yi50eXBlfHxcInJhZGlvXCI9PT1iLnR5cGU/bnVsbCE9Yi5jaGVja2VkOm51bGwhPWIudmFsdWV9fWZ1bmN0aW9uIHhjKGEsYil7Yj1iLmNoZWNrZWQ7bnVsbCE9YiYmdGMoYSxcImNoZWNrZWRcIixiLCExKX1cbmZ1bmN0aW9uIHljKGEsYil7eGMoYSxiKTt2YXIgYz11YyhiLnZhbHVlKSxkPWIudHlwZTtpZihudWxsIT1jKWlmKFwibnVtYmVyXCI9PT1kKXtpZigwPT09YyYmXCJcIj09PWEudmFsdWV8fGEudmFsdWUhPWMpYS52YWx1ZT1cIlwiK2N9ZWxzZSBhLnZhbHVlIT09XCJcIitjJiYoYS52YWx1ZT1cIlwiK2MpO2Vsc2UgaWYoXCJzdWJtaXRcIj09PWR8fFwicmVzZXRcIj09PWQpe2EucmVtb3ZlQXR0cmlidXRlKFwidmFsdWVcIik7cmV0dXJufWIuaGFzT3duUHJvcGVydHkoXCJ2YWx1ZVwiKT96YyhhLGIudHlwZSxjKTpiLmhhc093blByb3BlcnR5KFwiZGVmYXVsdFZhbHVlXCIpJiZ6YyhhLGIudHlwZSx1YyhiLmRlZmF1bHRWYWx1ZSkpO251bGw9PWIuY2hlY2tlZCYmbnVsbCE9Yi5kZWZhdWx0Q2hlY2tlZCYmKGEuZGVmYXVsdENoZWNrZWQ9ISFiLmRlZmF1bHRDaGVja2VkKX1cbmZ1bmN0aW9uIEFjKGEsYixjKXtpZihiLmhhc093blByb3BlcnR5KFwidmFsdWVcIil8fGIuaGFzT3duUHJvcGVydHkoXCJkZWZhdWx0VmFsdWVcIikpe3ZhciBkPWIudHlwZTtpZighKFwic3VibWl0XCIhPT1kJiZcInJlc2V0XCIhPT1kfHx2b2lkIDAhPT1iLnZhbHVlJiZudWxsIT09Yi52YWx1ZSkpcmV0dXJuO2I9XCJcIithLl93cmFwcGVyU3RhdGUuaW5pdGlhbFZhbHVlO2N8fGI9PT1hLnZhbHVlfHwoYS52YWx1ZT1iKTthLmRlZmF1bHRWYWx1ZT1ifWM9YS5uYW1lO1wiXCIhPT1jJiYoYS5uYW1lPVwiXCIpO2EuZGVmYXVsdENoZWNrZWQ9IWEuZGVmYXVsdENoZWNrZWQ7YS5kZWZhdWx0Q2hlY2tlZD0hIWEuX3dyYXBwZXJTdGF0ZS5pbml0aWFsQ2hlY2tlZDtcIlwiIT09YyYmKGEubmFtZT1jKX1cbmZ1bmN0aW9uIHpjKGEsYixjKXtpZihcIm51bWJlclwiIT09Ynx8YS5vd25lckRvY3VtZW50LmFjdGl2ZUVsZW1lbnQhPT1hKW51bGw9PWM/YS5kZWZhdWx0VmFsdWU9XCJcIithLl93cmFwcGVyU3RhdGUuaW5pdGlhbFZhbHVlOmEuZGVmYXVsdFZhbHVlIT09XCJcIitjJiYoYS5kZWZhdWx0VmFsdWU9XCJcIitjKX12YXIgQmM9e2NoYW5nZTp7cGhhc2VkUmVnaXN0cmF0aW9uTmFtZXM6e2J1YmJsZWQ6XCJvbkNoYW5nZVwiLGNhcHR1cmVkOlwib25DaGFuZ2VDYXB0dXJlXCJ9LGRlcGVuZGVuY2llczpcImJsdXIgY2hhbmdlIGNsaWNrIGZvY3VzIGlucHV0IGtleWRvd24ga2V5dXAgc2VsZWN0aW9uY2hhbmdlXCIuc3BsaXQoXCIgXCIpfX07ZnVuY3Rpb24gQ2MoYSxiLGMpe2E9eS5nZXRQb29sZWQoQmMuY2hhbmdlLGEsYixjKTthLnR5cGU9XCJjaGFuZ2VcIjtFYihjKTtRYShhKTtyZXR1cm4gYX12YXIgRGM9bnVsbCxFYz1udWxsO2Z1bmN0aW9uIEZjKGEpe0RhKGEpfVxuZnVuY3Rpb24gR2MoYSl7dmFyIGI9SmEoYSk7aWYoU2IoYikpcmV0dXJuIGF9ZnVuY3Rpb24gSGMoYSxiKXtpZihcImNoYW5nZVwiPT09YSlyZXR1cm4gYn12YXIgSWM9ITE7UmEmJihJYz1PYihcImlucHV0XCIpJiYoIWRvY3VtZW50LmRvY3VtZW50TW9kZXx8OTxkb2N1bWVudC5kb2N1bWVudE1vZGUpKTtmdW5jdGlvbiBKYygpe0RjJiYoRGMuZGV0YWNoRXZlbnQoXCJvbnByb3BlcnR5Y2hhbmdlXCIsS2MpLEVjPURjPW51bGwpfWZ1bmN0aW9uIEtjKGEpe1widmFsdWVcIj09PWEucHJvcGVydHlOYW1lJiZHYyhFYykmJihhPUNjKEVjLGEsTmIoYSkpLEtiKEZjLGEpKX1mdW5jdGlvbiBMYyhhLGIsYyl7XCJmb2N1c1wiPT09YT8oSmMoKSxEYz1iLEVjPWMsRGMuYXR0YWNoRXZlbnQoXCJvbnByb3BlcnR5Y2hhbmdlXCIsS2MpKTpcImJsdXJcIj09PWEmJkpjKCl9ZnVuY3Rpb24gTWMoYSl7aWYoXCJzZWxlY3Rpb25jaGFuZ2VcIj09PWF8fFwia2V5dXBcIj09PWF8fFwia2V5ZG93blwiPT09YSlyZXR1cm4gR2MoRWMpfVxuZnVuY3Rpb24gTmMoYSxiKXtpZihcImNsaWNrXCI9PT1hKXJldHVybiBHYyhiKX1mdW5jdGlvbiBPYyhhLGIpe2lmKFwiaW5wdXRcIj09PWF8fFwiY2hhbmdlXCI9PT1hKXJldHVybiBHYyhiKX1cbnZhciBQYz17ZXZlbnRUeXBlczpCYyxfaXNJbnB1dEV2ZW50U3VwcG9ydGVkOkljLGV4dHJhY3RFdmVudHM6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9Yj9KYShiKTp3aW5kb3csZj12b2lkIDAsZz12b2lkIDAsaD1lLm5vZGVOYW1lJiZlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XCJzZWxlY3RcIj09PWh8fFwiaW5wdXRcIj09PWgmJlwiZmlsZVwiPT09ZS50eXBlP2Y9SGM6TWIoZSk/SWM/Zj1PYzooZj1NYyxnPUxjKTooaD1lLm5vZGVOYW1lKSYmXCJpbnB1dFwiPT09aC50b0xvd2VyQ2FzZSgpJiYoXCJjaGVja2JveFwiPT09ZS50eXBlfHxcInJhZGlvXCI9PT1lLnR5cGUpJiYoZj1OYyk7aWYoZiYmKGY9ZihhLGIpKSlyZXR1cm4gQ2MoZixjLGQpO2cmJmcoYSxlLGIpO1wiYmx1clwiPT09YSYmKGE9ZS5fd3JhcHBlclN0YXRlKSYmYS5jb250cm9sbGVkJiZcIm51bWJlclwiPT09ZS50eXBlJiZ6YyhlLFwibnVtYmVyXCIsZS52YWx1ZSl9fSxRYz15LmV4dGVuZCh7dmlldzpudWxsLGRldGFpbDpudWxsfSksUmM9e0FsdDpcImFsdEtleVwiLFxuQ29udHJvbDpcImN0cmxLZXlcIixNZXRhOlwibWV0YUtleVwiLFNoaWZ0Olwic2hpZnRLZXlcIn07ZnVuY3Rpb24gU2MoYSl7dmFyIGI9dGhpcy5uYXRpdmVFdmVudDtyZXR1cm4gYi5nZXRNb2RpZmllclN0YXRlP2IuZ2V0TW9kaWZpZXJTdGF0ZShhKTooYT1SY1thXSk/ISFiW2FdOiExfWZ1bmN0aW9uIFRjKCl7cmV0dXJuIFNjfVxudmFyIFVjPTAsVmM9MCxXYz0hMSxYYz0hMSxZYz1RYy5leHRlbmQoe3NjcmVlblg6bnVsbCxzY3JlZW5ZOm51bGwsY2xpZW50WDpudWxsLGNsaWVudFk6bnVsbCxwYWdlWDpudWxsLHBhZ2VZOm51bGwsY3RybEtleTpudWxsLHNoaWZ0S2V5Om51bGwsYWx0S2V5Om51bGwsbWV0YUtleTpudWxsLGdldE1vZGlmaWVyU3RhdGU6VGMsYnV0dG9uOm51bGwsYnV0dG9uczpudWxsLHJlbGF0ZWRUYXJnZXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGEucmVsYXRlZFRhcmdldHx8KGEuZnJvbUVsZW1lbnQ9PT1hLnNyY0VsZW1lbnQ/YS50b0VsZW1lbnQ6YS5mcm9tRWxlbWVudCl9LG1vdmVtZW50WDpmdW5jdGlvbihhKXtpZihcIm1vdmVtZW50WFwiaW4gYSlyZXR1cm4gYS5tb3ZlbWVudFg7dmFyIGI9VWM7VWM9YS5zY3JlZW5YO3JldHVybiBXYz9cIm1vdXNlbW92ZVwiPT09YS50eXBlP2Euc2NyZWVuWC1iOjA6KFdjPSEwLDApfSxtb3ZlbWVudFk6ZnVuY3Rpb24oYSl7aWYoXCJtb3ZlbWVudFlcImluIGEpcmV0dXJuIGEubW92ZW1lbnRZO1xudmFyIGI9VmM7VmM9YS5zY3JlZW5ZO3JldHVybiBYYz9cIm1vdXNlbW92ZVwiPT09YS50eXBlP2Euc2NyZWVuWS1iOjA6KFhjPSEwLDApfX0pLFpjPVljLmV4dGVuZCh7cG9pbnRlcklkOm51bGwsd2lkdGg6bnVsbCxoZWlnaHQ6bnVsbCxwcmVzc3VyZTpudWxsLHRhbmdlbnRpYWxQcmVzc3VyZTpudWxsLHRpbHRYOm51bGwsdGlsdFk6bnVsbCx0d2lzdDpudWxsLHBvaW50ZXJUeXBlOm51bGwsaXNQcmltYXJ5Om51bGx9KSwkYz17bW91c2VFbnRlcjp7cmVnaXN0cmF0aW9uTmFtZTpcIm9uTW91c2VFbnRlclwiLGRlcGVuZGVuY2llczpbXCJtb3VzZW91dFwiLFwibW91c2VvdmVyXCJdfSxtb3VzZUxlYXZlOntyZWdpc3RyYXRpb25OYW1lOlwib25Nb3VzZUxlYXZlXCIsZGVwZW5kZW5jaWVzOltcIm1vdXNlb3V0XCIsXCJtb3VzZW92ZXJcIl19LHBvaW50ZXJFbnRlcjp7cmVnaXN0cmF0aW9uTmFtZTpcIm9uUG9pbnRlckVudGVyXCIsZGVwZW5kZW5jaWVzOltcInBvaW50ZXJvdXRcIixcInBvaW50ZXJvdmVyXCJdfSxwb2ludGVyTGVhdmU6e3JlZ2lzdHJhdGlvbk5hbWU6XCJvblBvaW50ZXJMZWF2ZVwiLFxuZGVwZW5kZW5jaWVzOltcInBvaW50ZXJvdXRcIixcInBvaW50ZXJvdmVyXCJdfX0sYWQ9e2V2ZW50VHlwZXM6JGMsZXh0cmFjdEV2ZW50czpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1cIm1vdXNlb3ZlclwiPT09YXx8XCJwb2ludGVyb3ZlclwiPT09YSxmPVwibW91c2VvdXRcIj09PWF8fFwicG9pbnRlcm91dFwiPT09YTtpZihlJiYoYy5yZWxhdGVkVGFyZ2V0fHxjLmZyb21FbGVtZW50KXx8IWYmJiFlKXJldHVybiBudWxsO2U9ZC53aW5kb3c9PT1kP2Q6KGU9ZC5vd25lckRvY3VtZW50KT9lLmRlZmF1bHRWaWV3fHxlLnBhcmVudFdpbmRvdzp3aW5kb3c7Zj8oZj1iLGI9KGI9Yy5yZWxhdGVkVGFyZ2V0fHxjLnRvRWxlbWVudCk/SGEoYik6bnVsbCk6Zj1udWxsO2lmKGY9PT1iKXJldHVybiBudWxsO3ZhciBnPXZvaWQgMCxoPXZvaWQgMCxsPXZvaWQgMCxrPXZvaWQgMDtpZihcIm1vdXNlb3V0XCI9PT1hfHxcIm1vdXNlb3ZlclwiPT09YSlnPVljLGg9JGMubW91c2VMZWF2ZSxsPSRjLm1vdXNlRW50ZXIsaz1cIm1vdXNlXCI7XG5lbHNlIGlmKFwicG9pbnRlcm91dFwiPT09YXx8XCJwb2ludGVyb3ZlclwiPT09YSlnPVpjLGg9JGMucG9pbnRlckxlYXZlLGw9JGMucG9pbnRlckVudGVyLGs9XCJwb2ludGVyXCI7dmFyIG09bnVsbD09Zj9lOkphKGYpO2U9bnVsbD09Yj9lOkphKGIpO2E9Zy5nZXRQb29sZWQoaCxmLGMsZCk7YS50eXBlPWsrXCJsZWF2ZVwiO2EudGFyZ2V0PW07YS5yZWxhdGVkVGFyZ2V0PWU7Yz1nLmdldFBvb2xlZChsLGIsYyxkKTtjLnR5cGU9aytcImVudGVyXCI7Yy50YXJnZXQ9ZTtjLnJlbGF0ZWRUYXJnZXQ9bTtkPWI7aWYoZiYmZClhOntiPWY7ZT1kO2s9MDtmb3IoZz1iO2c7Zz1MYShnKSlrKys7Zz0wO2ZvcihsPWU7bDtsPUxhKGwpKWcrKztmb3IoOzA8ay1nOyliPUxhKGIpLGstLTtmb3IoOzA8Zy1rOyllPUxhKGUpLGctLTtmb3IoO2stLTspe2lmKGI9PT1lfHxiPT09ZS5hbHRlcm5hdGUpYnJlYWsgYTtiPUxhKGIpO2U9TGEoZSl9Yj1udWxsfWVsc2UgYj1udWxsO2U9Yjtmb3IoYj1bXTtmJiZmIT09ZTspe2s9XG5mLmFsdGVybmF0ZTtpZihudWxsIT09ayYmaz09PWUpYnJlYWs7Yi5wdXNoKGYpO2Y9TGEoZil9Zm9yKGY9W107ZCYmZCE9PWU7KXtrPWQuYWx0ZXJuYXRlO2lmKG51bGwhPT1rJiZrPT09ZSlicmVhaztmLnB1c2goZCk7ZD1MYShkKX1mb3IoZD0wO2Q8Yi5sZW5ndGg7ZCsrKU9hKGJbZF0sXCJidWJibGVkXCIsYSk7Zm9yKGQ9Zi5sZW5ndGg7MDxkLS07KU9hKGZbZF0sXCJjYXB0dXJlZFwiLGMpO3JldHVyblthLGNdfX07ZnVuY3Rpb24gYmQoYSxiKXtyZXR1cm4gYT09PWImJigwIT09YXx8MS9hPT09MS9iKXx8YSE9PWEmJmIhPT1ifXZhciBjZD1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuZnVuY3Rpb24gZGQoYSxiKXtpZihiZChhLGIpKXJldHVybiEwO2lmKFwib2JqZWN0XCIhPT10eXBlb2YgYXx8bnVsbD09PWF8fFwib2JqZWN0XCIhPT10eXBlb2YgYnx8bnVsbD09PWIpcmV0dXJuITE7dmFyIGM9T2JqZWN0LmtleXMoYSksZD1PYmplY3Qua2V5cyhiKTtpZihjLmxlbmd0aCE9PWQubGVuZ3RoKXJldHVybiExO2ZvcihkPTA7ZDxjLmxlbmd0aDtkKyspaWYoIWNkLmNhbGwoYixjW2RdKXx8IWJkKGFbY1tkXV0sYltjW2RdXSkpcmV0dXJuITE7cmV0dXJuITB9ZnVuY3Rpb24gZWQoYSl7dmFyIGI9YTtpZihhLmFsdGVybmF0ZSlmb3IoO2IucmV0dXJuOyliPWIucmV0dXJuO2Vsc2V7aWYoMCE9PShiLmVmZmVjdFRhZyYyKSlyZXR1cm4gMTtmb3IoO2IucmV0dXJuOylpZihiPWIucmV0dXJuLDAhPT0oYi5lZmZlY3RUYWcmMikpcmV0dXJuIDF9cmV0dXJuIDM9PT1iLnRhZz8yOjN9ZnVuY3Rpb24gZmQoYSl7MiE9PWVkKGEpP3goXCIxODhcIik6dm9pZCAwfVxuZnVuY3Rpb24gZ2QoYSl7dmFyIGI9YS5hbHRlcm5hdGU7aWYoIWIpcmV0dXJuIGI9ZWQoYSksMz09PWI/eChcIjE4OFwiKTp2b2lkIDAsMT09PWI/bnVsbDphO2Zvcih2YXIgYz1hLGQ9Yjs7KXt2YXIgZT1jLnJldHVybixmPWU/ZS5hbHRlcm5hdGU6bnVsbDtpZighZXx8IWYpYnJlYWs7aWYoZS5jaGlsZD09PWYuY2hpbGQpe2Zvcih2YXIgZz1lLmNoaWxkO2c7KXtpZihnPT09YylyZXR1cm4gZmQoZSksYTtpZihnPT09ZClyZXR1cm4gZmQoZSksYjtnPWcuc2libGluZ314KFwiMTg4XCIpfWlmKGMucmV0dXJuIT09ZC5yZXR1cm4pYz1lLGQ9ZjtlbHNle2c9ITE7Zm9yKHZhciBoPWUuY2hpbGQ7aDspe2lmKGg9PT1jKXtnPSEwO2M9ZTtkPWY7YnJlYWt9aWYoaD09PWQpe2c9ITA7ZD1lO2M9ZjticmVha31oPWguc2libGluZ31pZighZyl7Zm9yKGg9Zi5jaGlsZDtoOyl7aWYoaD09PWMpe2c9ITA7Yz1mO2Q9ZTticmVha31pZihoPT09ZCl7Zz0hMDtkPWY7Yz1lO2JyZWFrfWg9aC5zaWJsaW5nfWc/XG52b2lkIDA6eChcIjE4OVwiKX19Yy5hbHRlcm5hdGUhPT1kP3goXCIxOTBcIik6dm9pZCAwfTMhPT1jLnRhZz94KFwiMTg4XCIpOnZvaWQgMDtyZXR1cm4gYy5zdGF0ZU5vZGUuY3VycmVudD09PWM/YTpifWZ1bmN0aW9uIGhkKGEpe2E9Z2QoYSk7aWYoIWEpcmV0dXJuIG51bGw7Zm9yKHZhciBiPWE7Oyl7aWYoNT09PWIudGFnfHw2PT09Yi50YWcpcmV0dXJuIGI7aWYoYi5jaGlsZCliLmNoaWxkLnJldHVybj1iLGI9Yi5jaGlsZDtlbHNle2lmKGI9PT1hKWJyZWFrO2Zvcig7IWIuc2libGluZzspe2lmKCFiLnJldHVybnx8Yi5yZXR1cm49PT1hKXJldHVybiBudWxsO2I9Yi5yZXR1cm59Yi5zaWJsaW5nLnJldHVybj1iLnJldHVybjtiPWIuc2libGluZ319cmV0dXJuIG51bGx9XG52YXIgaWQ9eS5leHRlbmQoe2FuaW1hdGlvbk5hbWU6bnVsbCxlbGFwc2VkVGltZTpudWxsLHBzZXVkb0VsZW1lbnQ6bnVsbH0pLGpkPXkuZXh0ZW5kKHtjbGlwYm9hcmREYXRhOmZ1bmN0aW9uKGEpe3JldHVyblwiY2xpcGJvYXJkRGF0YVwiaW4gYT9hLmNsaXBib2FyZERhdGE6d2luZG93LmNsaXBib2FyZERhdGF9fSksa2Q9UWMuZXh0ZW5kKHtyZWxhdGVkVGFyZ2V0Om51bGx9KTtmdW5jdGlvbiBsZChhKXt2YXIgYj1hLmtleUNvZGU7XCJjaGFyQ29kZVwiaW4gYT8oYT1hLmNoYXJDb2RlLDA9PT1hJiYxMz09PWImJihhPTEzKSk6YT1iOzEwPT09YSYmKGE9MTMpO3JldHVybiAzMjw9YXx8MTM9PT1hP2E6MH1cbnZhciBtZD17RXNjOlwiRXNjYXBlXCIsU3BhY2ViYXI6XCIgXCIsTGVmdDpcIkFycm93TGVmdFwiLFVwOlwiQXJyb3dVcFwiLFJpZ2h0OlwiQXJyb3dSaWdodFwiLERvd246XCJBcnJvd0Rvd25cIixEZWw6XCJEZWxldGVcIixXaW46XCJPU1wiLE1lbnU6XCJDb250ZXh0TWVudVwiLEFwcHM6XCJDb250ZXh0TWVudVwiLFNjcm9sbDpcIlNjcm9sbExvY2tcIixNb3pQcmludGFibGVLZXk6XCJVbmlkZW50aWZpZWRcIn0sbmQ9ezg6XCJCYWNrc3BhY2VcIiw5OlwiVGFiXCIsMTI6XCJDbGVhclwiLDEzOlwiRW50ZXJcIiwxNjpcIlNoaWZ0XCIsMTc6XCJDb250cm9sXCIsMTg6XCJBbHRcIiwxOTpcIlBhdXNlXCIsMjA6XCJDYXBzTG9ja1wiLDI3OlwiRXNjYXBlXCIsMzI6XCIgXCIsMzM6XCJQYWdlVXBcIiwzNDpcIlBhZ2VEb3duXCIsMzU6XCJFbmRcIiwzNjpcIkhvbWVcIiwzNzpcIkFycm93TGVmdFwiLDM4OlwiQXJyb3dVcFwiLDM5OlwiQXJyb3dSaWdodFwiLDQwOlwiQXJyb3dEb3duXCIsNDU6XCJJbnNlcnRcIiw0NjpcIkRlbGV0ZVwiLDExMjpcIkYxXCIsMTEzOlwiRjJcIiwxMTQ6XCJGM1wiLDExNTpcIkY0XCIsXG4xMTY6XCJGNVwiLDExNzpcIkY2XCIsMTE4OlwiRjdcIiwxMTk6XCJGOFwiLDEyMDpcIkY5XCIsMTIxOlwiRjEwXCIsMTIyOlwiRjExXCIsMTIzOlwiRjEyXCIsMTQ0OlwiTnVtTG9ja1wiLDE0NTpcIlNjcm9sbExvY2tcIiwyMjQ6XCJNZXRhXCJ9LG9kPVFjLmV4dGVuZCh7a2V5OmZ1bmN0aW9uKGEpe2lmKGEua2V5KXt2YXIgYj1tZFthLmtleV18fGEua2V5O2lmKFwiVW5pZGVudGlmaWVkXCIhPT1iKXJldHVybiBifXJldHVyblwia2V5cHJlc3NcIj09PWEudHlwZT8oYT1sZChhKSwxMz09PWE/XCJFbnRlclwiOlN0cmluZy5mcm9tQ2hhckNvZGUoYSkpOlwia2V5ZG93blwiPT09YS50eXBlfHxcImtleXVwXCI9PT1hLnR5cGU/bmRbYS5rZXlDb2RlXXx8XCJVbmlkZW50aWZpZWRcIjpcIlwifSxsb2NhdGlvbjpudWxsLGN0cmxLZXk6bnVsbCxzaGlmdEtleTpudWxsLGFsdEtleTpudWxsLG1ldGFLZXk6bnVsbCxyZXBlYXQ6bnVsbCxsb2NhbGU6bnVsbCxnZXRNb2RpZmllclN0YXRlOlRjLGNoYXJDb2RlOmZ1bmN0aW9uKGEpe3JldHVyblwia2V5cHJlc3NcIj09PVxuYS50eXBlP2xkKGEpOjB9LGtleUNvZGU6ZnVuY3Rpb24oYSl7cmV0dXJuXCJrZXlkb3duXCI9PT1hLnR5cGV8fFwia2V5dXBcIj09PWEudHlwZT9hLmtleUNvZGU6MH0sd2hpY2g6ZnVuY3Rpb24oYSl7cmV0dXJuXCJrZXlwcmVzc1wiPT09YS50eXBlP2xkKGEpOlwia2V5ZG93blwiPT09YS50eXBlfHxcImtleXVwXCI9PT1hLnR5cGU/YS5rZXlDb2RlOjB9fSkscGQ9WWMuZXh0ZW5kKHtkYXRhVHJhbnNmZXI6bnVsbH0pLHFkPVFjLmV4dGVuZCh7dG91Y2hlczpudWxsLHRhcmdldFRvdWNoZXM6bnVsbCxjaGFuZ2VkVG91Y2hlczpudWxsLGFsdEtleTpudWxsLG1ldGFLZXk6bnVsbCxjdHJsS2V5Om51bGwsc2hpZnRLZXk6bnVsbCxnZXRNb2RpZmllclN0YXRlOlRjfSkscmQ9eS5leHRlbmQoe3Byb3BlcnR5TmFtZTpudWxsLGVsYXBzZWRUaW1lOm51bGwscHNldWRvRWxlbWVudDpudWxsfSksc2Q9WWMuZXh0ZW5kKHtkZWx0YVg6ZnVuY3Rpb24oYSl7cmV0dXJuXCJkZWx0YVhcImluIGE/YS5kZWx0YVg6XCJ3aGVlbERlbHRhWFwiaW5cbmE/LWEud2hlZWxEZWx0YVg6MH0sZGVsdGFZOmZ1bmN0aW9uKGEpe3JldHVyblwiZGVsdGFZXCJpbiBhP2EuZGVsdGFZOlwid2hlZWxEZWx0YVlcImluIGE/LWEud2hlZWxEZWx0YVk6XCJ3aGVlbERlbHRhXCJpbiBhPy1hLndoZWVsRGVsdGE6MH0sZGVsdGFaOm51bGwsZGVsdGFNb2RlOm51bGx9KSx0ZD1bW1wiYWJvcnRcIixcImFib3J0XCJdLFtYYSxcImFuaW1hdGlvbkVuZFwiXSxbWWEsXCJhbmltYXRpb25JdGVyYXRpb25cIl0sW1phLFwiYW5pbWF0aW9uU3RhcnRcIl0sW1wiY2FucGxheVwiLFwiY2FuUGxheVwiXSxbXCJjYW5wbGF5dGhyb3VnaFwiLFwiY2FuUGxheVRocm91Z2hcIl0sW1wiZHJhZ1wiLFwiZHJhZ1wiXSxbXCJkcmFnZW50ZXJcIixcImRyYWdFbnRlclwiXSxbXCJkcmFnZXhpdFwiLFwiZHJhZ0V4aXRcIl0sW1wiZHJhZ2xlYXZlXCIsXCJkcmFnTGVhdmVcIl0sW1wiZHJhZ292ZXJcIixcImRyYWdPdmVyXCJdLFtcImR1cmF0aW9uY2hhbmdlXCIsXCJkdXJhdGlvbkNoYW5nZVwiXSxbXCJlbXB0aWVkXCIsXCJlbXB0aWVkXCJdLFtcImVuY3J5cHRlZFwiLFwiZW5jcnlwdGVkXCJdLFxuW1wiZW5kZWRcIixcImVuZGVkXCJdLFtcImVycm9yXCIsXCJlcnJvclwiXSxbXCJnb3Rwb2ludGVyY2FwdHVyZVwiLFwiZ290UG9pbnRlckNhcHR1cmVcIl0sW1wibG9hZFwiLFwibG9hZFwiXSxbXCJsb2FkZWRkYXRhXCIsXCJsb2FkZWREYXRhXCJdLFtcImxvYWRlZG1ldGFkYXRhXCIsXCJsb2FkZWRNZXRhZGF0YVwiXSxbXCJsb2Fkc3RhcnRcIixcImxvYWRTdGFydFwiXSxbXCJsb3N0cG9pbnRlcmNhcHR1cmVcIixcImxvc3RQb2ludGVyQ2FwdHVyZVwiXSxbXCJtb3VzZW1vdmVcIixcIm1vdXNlTW92ZVwiXSxbXCJtb3VzZW91dFwiLFwibW91c2VPdXRcIl0sW1wibW91c2VvdmVyXCIsXCJtb3VzZU92ZXJcIl0sW1wicGxheWluZ1wiLFwicGxheWluZ1wiXSxbXCJwb2ludGVybW92ZVwiLFwicG9pbnRlck1vdmVcIl0sW1wicG9pbnRlcm91dFwiLFwicG9pbnRlck91dFwiXSxbXCJwb2ludGVyb3ZlclwiLFwicG9pbnRlck92ZXJcIl0sW1wicHJvZ3Jlc3NcIixcInByb2dyZXNzXCJdLFtcInNjcm9sbFwiLFwic2Nyb2xsXCJdLFtcInNlZWtpbmdcIixcInNlZWtpbmdcIl0sW1wic3RhbGxlZFwiLFwic3RhbGxlZFwiXSxcbltcInN1c3BlbmRcIixcInN1c3BlbmRcIl0sW1widGltZXVwZGF0ZVwiLFwidGltZVVwZGF0ZVwiXSxbXCJ0b2dnbGVcIixcInRvZ2dsZVwiXSxbXCJ0b3VjaG1vdmVcIixcInRvdWNoTW92ZVwiXSxbJGEsXCJ0cmFuc2l0aW9uRW5kXCJdLFtcIndhaXRpbmdcIixcIndhaXRpbmdcIl0sW1wid2hlZWxcIixcIndoZWVsXCJdXSx1ZD17fSx2ZD17fTtmdW5jdGlvbiB3ZChhLGIpe3ZhciBjPWFbMF07YT1hWzFdO3ZhciBkPVwib25cIisoYVswXS50b1VwcGVyQ2FzZSgpK2Euc2xpY2UoMSkpO2I9e3BoYXNlZFJlZ2lzdHJhdGlvbk5hbWVzOntidWJibGVkOmQsY2FwdHVyZWQ6ZCtcIkNhcHR1cmVcIn0sZGVwZW5kZW5jaWVzOltjXSxpc0ludGVyYWN0aXZlOmJ9O3VkW2FdPWI7dmRbY109Yn1cbltbXCJibHVyXCIsXCJibHVyXCJdLFtcImNhbmNlbFwiLFwiY2FuY2VsXCJdLFtcImNsaWNrXCIsXCJjbGlja1wiXSxbXCJjbG9zZVwiLFwiY2xvc2VcIl0sW1wiY29udGV4dG1lbnVcIixcImNvbnRleHRNZW51XCJdLFtcImNvcHlcIixcImNvcHlcIl0sW1wiY3V0XCIsXCJjdXRcIl0sW1wiYXV4Y2xpY2tcIixcImF1eENsaWNrXCJdLFtcImRibGNsaWNrXCIsXCJkb3VibGVDbGlja1wiXSxbXCJkcmFnZW5kXCIsXCJkcmFnRW5kXCJdLFtcImRyYWdzdGFydFwiLFwiZHJhZ1N0YXJ0XCJdLFtcImRyb3BcIixcImRyb3BcIl0sW1wiZm9jdXNcIixcImZvY3VzXCJdLFtcImlucHV0XCIsXCJpbnB1dFwiXSxbXCJpbnZhbGlkXCIsXCJpbnZhbGlkXCJdLFtcImtleWRvd25cIixcImtleURvd25cIl0sW1wia2V5cHJlc3NcIixcImtleVByZXNzXCJdLFtcImtleXVwXCIsXCJrZXlVcFwiXSxbXCJtb3VzZWRvd25cIixcIm1vdXNlRG93blwiXSxbXCJtb3VzZXVwXCIsXCJtb3VzZVVwXCJdLFtcInBhc3RlXCIsXCJwYXN0ZVwiXSxbXCJwYXVzZVwiLFwicGF1c2VcIl0sW1wicGxheVwiLFwicGxheVwiXSxbXCJwb2ludGVyY2FuY2VsXCIsXCJwb2ludGVyQ2FuY2VsXCJdLFxuW1wicG9pbnRlcmRvd25cIixcInBvaW50ZXJEb3duXCJdLFtcInBvaW50ZXJ1cFwiLFwicG9pbnRlclVwXCJdLFtcInJhdGVjaGFuZ2VcIixcInJhdGVDaGFuZ2VcIl0sW1wicmVzZXRcIixcInJlc2V0XCJdLFtcInNlZWtlZFwiLFwic2Vla2VkXCJdLFtcInN1Ym1pdFwiLFwic3VibWl0XCJdLFtcInRvdWNoY2FuY2VsXCIsXCJ0b3VjaENhbmNlbFwiXSxbXCJ0b3VjaGVuZFwiLFwidG91Y2hFbmRcIl0sW1widG91Y2hzdGFydFwiLFwidG91Y2hTdGFydFwiXSxbXCJ2b2x1bWVjaGFuZ2VcIixcInZvbHVtZUNoYW5nZVwiXV0uZm9yRWFjaChmdW5jdGlvbihhKXt3ZChhLCEwKX0pO3RkLmZvckVhY2goZnVuY3Rpb24oYSl7d2QoYSwhMSl9KTtcbnZhciB4ZD17ZXZlbnRUeXBlczp1ZCxpc0ludGVyYWN0aXZlVG9wTGV2ZWxFdmVudFR5cGU6ZnVuY3Rpb24oYSl7YT12ZFthXTtyZXR1cm4gdm9pZCAwIT09YSYmITA9PT1hLmlzSW50ZXJhY3RpdmV9LGV4dHJhY3RFdmVudHM6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9dmRbYV07aWYoIWUpcmV0dXJuIG51bGw7c3dpdGNoKGEpe2Nhc2UgXCJrZXlwcmVzc1wiOmlmKDA9PT1sZChjKSlyZXR1cm4gbnVsbDtjYXNlIFwia2V5ZG93blwiOmNhc2UgXCJrZXl1cFwiOmE9b2Q7YnJlYWs7Y2FzZSBcImJsdXJcIjpjYXNlIFwiZm9jdXNcIjphPWtkO2JyZWFrO2Nhc2UgXCJjbGlja1wiOmlmKDI9PT1jLmJ1dHRvbilyZXR1cm4gbnVsbDtjYXNlIFwiYXV4Y2xpY2tcIjpjYXNlIFwiZGJsY2xpY2tcIjpjYXNlIFwibW91c2Vkb3duXCI6Y2FzZSBcIm1vdXNlbW92ZVwiOmNhc2UgXCJtb3VzZXVwXCI6Y2FzZSBcIm1vdXNlb3V0XCI6Y2FzZSBcIm1vdXNlb3ZlclwiOmNhc2UgXCJjb250ZXh0bWVudVwiOmE9WWM7YnJlYWs7Y2FzZSBcImRyYWdcIjpjYXNlIFwiZHJhZ2VuZFwiOmNhc2UgXCJkcmFnZW50ZXJcIjpjYXNlIFwiZHJhZ2V4aXRcIjpjYXNlIFwiZHJhZ2xlYXZlXCI6Y2FzZSBcImRyYWdvdmVyXCI6Y2FzZSBcImRyYWdzdGFydFwiOmNhc2UgXCJkcm9wXCI6YT1cbnBkO2JyZWFrO2Nhc2UgXCJ0b3VjaGNhbmNlbFwiOmNhc2UgXCJ0b3VjaGVuZFwiOmNhc2UgXCJ0b3VjaG1vdmVcIjpjYXNlIFwidG91Y2hzdGFydFwiOmE9cWQ7YnJlYWs7Y2FzZSBYYTpjYXNlIFlhOmNhc2UgWmE6YT1pZDticmVhaztjYXNlICRhOmE9cmQ7YnJlYWs7Y2FzZSBcInNjcm9sbFwiOmE9UWM7YnJlYWs7Y2FzZSBcIndoZWVsXCI6YT1zZDticmVhaztjYXNlIFwiY29weVwiOmNhc2UgXCJjdXRcIjpjYXNlIFwicGFzdGVcIjphPWpkO2JyZWFrO2Nhc2UgXCJnb3Rwb2ludGVyY2FwdHVyZVwiOmNhc2UgXCJsb3N0cG9pbnRlcmNhcHR1cmVcIjpjYXNlIFwicG9pbnRlcmNhbmNlbFwiOmNhc2UgXCJwb2ludGVyZG93blwiOmNhc2UgXCJwb2ludGVybW92ZVwiOmNhc2UgXCJwb2ludGVyb3V0XCI6Y2FzZSBcInBvaW50ZXJvdmVyXCI6Y2FzZSBcInBvaW50ZXJ1cFwiOmE9WmM7YnJlYWs7ZGVmYXVsdDphPXl9Yj1hLmdldFBvb2xlZChlLGIsYyxkKTtRYShiKTtyZXR1cm4gYn19LHlkPXhkLmlzSW50ZXJhY3RpdmVUb3BMZXZlbEV2ZW50VHlwZSxcbnpkPVtdO2Z1bmN0aW9uIEFkKGEpe3ZhciBiPWEudGFyZ2V0SW5zdCxjPWI7ZG97aWYoIWMpe2EuYW5jZXN0b3JzLnB1c2goYyk7YnJlYWt9dmFyIGQ7Zm9yKGQ9YztkLnJldHVybjspZD1kLnJldHVybjtkPTMhPT1kLnRhZz9udWxsOmQuc3RhdGVOb2RlLmNvbnRhaW5lckluZm87aWYoIWQpYnJlYWs7YS5hbmNlc3RvcnMucHVzaChjKTtjPUhhKGQpfXdoaWxlKGMpO2ZvcihjPTA7YzxhLmFuY2VzdG9ycy5sZW5ndGg7YysrKXtiPWEuYW5jZXN0b3JzW2NdO3ZhciBlPU5iKGEubmF0aXZlRXZlbnQpO2Q9YS50b3BMZXZlbFR5cGU7Zm9yKHZhciBmPWEubmF0aXZlRXZlbnQsZz1udWxsLGg9MDtoPG9hLmxlbmd0aDtoKyspe3ZhciBsPW9hW2hdO2wmJihsPWwuZXh0cmFjdEV2ZW50cyhkLGIsZixlKSkmJihnPXhhKGcsbCkpfURhKGcpfX12YXIgQmQ9ITA7XG5mdW5jdGlvbiBFKGEsYil7aWYoIWIpcmV0dXJuIG51bGw7dmFyIGM9KHlkKGEpP0NkOkRkKS5iaW5kKG51bGwsYSk7Yi5hZGRFdmVudExpc3RlbmVyKGEsYywhMSl9ZnVuY3Rpb24gRWQoYSxiKXtpZighYilyZXR1cm4gbnVsbDt2YXIgYz0oeWQoYSk/Q2Q6RGQpLmJpbmQobnVsbCxhKTtiLmFkZEV2ZW50TGlzdGVuZXIoYSxjLCEwKX1mdW5jdGlvbiBDZChhLGIpe0hiKERkLGEsYil9XG5mdW5jdGlvbiBEZChhLGIpe2lmKEJkKXt2YXIgYz1OYihiKTtjPUhhKGMpO251bGw9PT1jfHxcIm51bWJlclwiIT09dHlwZW9mIGMudGFnfHwyPT09ZWQoYyl8fChjPW51bGwpO2lmKHpkLmxlbmd0aCl7dmFyIGQ9emQucG9wKCk7ZC50b3BMZXZlbFR5cGU9YTtkLm5hdGl2ZUV2ZW50PWI7ZC50YXJnZXRJbnN0PWM7YT1kfWVsc2UgYT17dG9wTGV2ZWxUeXBlOmEsbmF0aXZlRXZlbnQ6Yix0YXJnZXRJbnN0OmMsYW5jZXN0b3JzOltdfTt0cnl7S2IoQWQsYSl9ZmluYWxseXthLnRvcExldmVsVHlwZT1udWxsLGEubmF0aXZlRXZlbnQ9bnVsbCxhLnRhcmdldEluc3Q9bnVsbCxhLmFuY2VzdG9ycy5sZW5ndGg9MCwxMD56ZC5sZW5ndGgmJnpkLnB1c2goYSl9fX12YXIgRmQ9e30sR2Q9MCxIZD1cIl9yZWFjdExpc3RlbmVyc0lEXCIrKFwiXCIrTWF0aC5yYW5kb20oKSkuc2xpY2UoMik7XG5mdW5jdGlvbiBJZChhKXtPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYSxIZCl8fChhW0hkXT1HZCsrLEZkW2FbSGRdXT17fSk7cmV0dXJuIEZkW2FbSGRdXX1mdW5jdGlvbiBKZChhKXthPWF8fChcInVuZGVmaW5lZFwiIT09dHlwZW9mIGRvY3VtZW50P2RvY3VtZW50OnZvaWQgMCk7aWYoXCJ1bmRlZmluZWRcIj09PXR5cGVvZiBhKXJldHVybiBudWxsO3RyeXtyZXR1cm4gYS5hY3RpdmVFbGVtZW50fHxhLmJvZHl9Y2F0Y2goYil7cmV0dXJuIGEuYm9keX19ZnVuY3Rpb24gS2QoYSl7Zm9yKDthJiZhLmZpcnN0Q2hpbGQ7KWE9YS5maXJzdENoaWxkO3JldHVybiBhfVxuZnVuY3Rpb24gTGQoYSxiKXt2YXIgYz1LZChhKTthPTA7Zm9yKHZhciBkO2M7KXtpZigzPT09Yy5ub2RlVHlwZSl7ZD1hK2MudGV4dENvbnRlbnQubGVuZ3RoO2lmKGE8PWImJmQ+PWIpcmV0dXJue25vZGU6YyxvZmZzZXQ6Yi1hfTthPWR9YTp7Zm9yKDtjOyl7aWYoYy5uZXh0U2libGluZyl7Yz1jLm5leHRTaWJsaW5nO2JyZWFrIGF9Yz1jLnBhcmVudE5vZGV9Yz12b2lkIDB9Yz1LZChjKX19ZnVuY3Rpb24gTWQoYSxiKXtyZXR1cm4gYSYmYj9hPT09Yj8hMDphJiYzPT09YS5ub2RlVHlwZT8hMTpiJiYzPT09Yi5ub2RlVHlwZT9NZChhLGIucGFyZW50Tm9kZSk6XCJjb250YWluc1wiaW4gYT9hLmNvbnRhaW5zKGIpOmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24/ISEoYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihiKSYxNik6ITE6ITF9XG5mdW5jdGlvbiBOZCgpe2Zvcih2YXIgYT13aW5kb3csYj1KZCgpO2IgaW5zdGFuY2VvZiBhLkhUTUxJRnJhbWVFbGVtZW50Oyl7dHJ5e3ZhciBjPVwic3RyaW5nXCI9PT10eXBlb2YgYi5jb250ZW50V2luZG93LmxvY2F0aW9uLmhyZWZ9Y2F0Y2goZCl7Yz0hMX1pZihjKWE9Yi5jb250ZW50V2luZG93O2Vsc2UgYnJlYWs7Yj1KZChhLmRvY3VtZW50KX1yZXR1cm4gYn1mdW5jdGlvbiBPZChhKXt2YXIgYj1hJiZhLm5vZGVOYW1lJiZhLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGImJihcImlucHV0XCI9PT1iJiYoXCJ0ZXh0XCI9PT1hLnR5cGV8fFwic2VhcmNoXCI9PT1hLnR5cGV8fFwidGVsXCI9PT1hLnR5cGV8fFwidXJsXCI9PT1hLnR5cGV8fFwicGFzc3dvcmRcIj09PWEudHlwZSl8fFwidGV4dGFyZWFcIj09PWJ8fFwidHJ1ZVwiPT09YS5jb250ZW50RWRpdGFibGUpfVxuZnVuY3Rpb24gUGQoKXt2YXIgYT1OZCgpO2lmKE9kKGEpKXtpZihcInNlbGVjdGlvblN0YXJ0XCJpbiBhKXZhciBiPXtzdGFydDphLnNlbGVjdGlvblN0YXJ0LGVuZDphLnNlbGVjdGlvbkVuZH07ZWxzZSBhOntiPShiPWEub3duZXJEb2N1bWVudCkmJmIuZGVmYXVsdFZpZXd8fHdpbmRvdzt2YXIgYz1iLmdldFNlbGVjdGlvbiYmYi5nZXRTZWxlY3Rpb24oKTtpZihjJiYwIT09Yy5yYW5nZUNvdW50KXtiPWMuYW5jaG9yTm9kZTt2YXIgZD1jLmFuY2hvck9mZnNldCxlPWMuZm9jdXNOb2RlO2M9Yy5mb2N1c09mZnNldDt0cnl7Yi5ub2RlVHlwZSxlLm5vZGVUeXBlfWNhdGNoKEEpe2I9bnVsbDticmVhayBhfXZhciBmPTAsZz0tMSxoPS0xLGw9MCxrPTAsbT1hLHA9bnVsbDtiOmZvcig7Oyl7Zm9yKHZhciB0Ozspe20hPT1ifHwwIT09ZCYmMyE9PW0ubm9kZVR5cGV8fChnPWYrZCk7bSE9PWV8fDAhPT1jJiYzIT09bS5ub2RlVHlwZXx8KGg9ZitjKTszPT09bS5ub2RlVHlwZSYmKGYrPW0ubm9kZVZhbHVlLmxlbmd0aCk7XG5pZihudWxsPT09KHQ9bS5maXJzdENoaWxkKSlicmVhaztwPW07bT10fWZvcig7Oyl7aWYobT09PWEpYnJlYWsgYjtwPT09YiYmKytsPT09ZCYmKGc9Zik7cD09PWUmJisraz09PWMmJihoPWYpO2lmKG51bGwhPT0odD1tLm5leHRTaWJsaW5nKSlicmVhazttPXA7cD1tLnBhcmVudE5vZGV9bT10fWI9LTE9PT1nfHwtMT09PWg/bnVsbDp7c3RhcnQ6ZyxlbmQ6aH19ZWxzZSBiPW51bGx9Yj1ifHx7c3RhcnQ6MCxlbmQ6MH19ZWxzZSBiPW51bGw7cmV0dXJue2ZvY3VzZWRFbGVtOmEsc2VsZWN0aW9uUmFuZ2U6Yn19XG5mdW5jdGlvbiBRZChhKXt2YXIgYj1OZCgpLGM9YS5mb2N1c2VkRWxlbSxkPWEuc2VsZWN0aW9uUmFuZ2U7aWYoYiE9PWMmJmMmJmMub3duZXJEb2N1bWVudCYmTWQoYy5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxjKSl7aWYobnVsbCE9PWQmJk9kKGMpKWlmKGI9ZC5zdGFydCxhPWQuZW5kLHZvaWQgMD09PWEmJihhPWIpLFwic2VsZWN0aW9uU3RhcnRcImluIGMpYy5zZWxlY3Rpb25TdGFydD1iLGMuc2VsZWN0aW9uRW5kPU1hdGgubWluKGEsYy52YWx1ZS5sZW5ndGgpO2Vsc2UgaWYoYT0oYj1jLm93bmVyRG9jdW1lbnR8fGRvY3VtZW50KSYmYi5kZWZhdWx0Vmlld3x8d2luZG93LGEuZ2V0U2VsZWN0aW9uKXthPWEuZ2V0U2VsZWN0aW9uKCk7dmFyIGU9Yy50ZXh0Q29udGVudC5sZW5ndGgsZj1NYXRoLm1pbihkLnN0YXJ0LGUpO2Q9dm9pZCAwPT09ZC5lbmQ/ZjpNYXRoLm1pbihkLmVuZCxlKTshYS5leHRlbmQmJmY+ZCYmKGU9ZCxkPWYsZj1lKTtlPUxkKGMsZik7dmFyIGc9TGQoYyxcbmQpO2UmJmcmJigxIT09YS5yYW5nZUNvdW50fHxhLmFuY2hvck5vZGUhPT1lLm5vZGV8fGEuYW5jaG9yT2Zmc2V0IT09ZS5vZmZzZXR8fGEuZm9jdXNOb2RlIT09Zy5ub2RlfHxhLmZvY3VzT2Zmc2V0IT09Zy5vZmZzZXQpJiYoYj1iLmNyZWF0ZVJhbmdlKCksYi5zZXRTdGFydChlLm5vZGUsZS5vZmZzZXQpLGEucmVtb3ZlQWxsUmFuZ2VzKCksZj5kPyhhLmFkZFJhbmdlKGIpLGEuZXh0ZW5kKGcubm9kZSxnLm9mZnNldCkpOihiLnNldEVuZChnLm5vZGUsZy5vZmZzZXQpLGEuYWRkUmFuZ2UoYikpKX1iPVtdO2ZvcihhPWM7YT1hLnBhcmVudE5vZGU7KTE9PT1hLm5vZGVUeXBlJiZiLnB1c2goe2VsZW1lbnQ6YSxsZWZ0OmEuc2Nyb2xsTGVmdCx0b3A6YS5zY3JvbGxUb3B9KTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgYy5mb2N1cyYmYy5mb2N1cygpO2ZvcihjPTA7YzxiLmxlbmd0aDtjKyspYT1iW2NdLGEuZWxlbWVudC5zY3JvbGxMZWZ0PWEubGVmdCxhLmVsZW1lbnQuc2Nyb2xsVG9wPWEudG9wfX1cbnZhciBSZD1SYSYmXCJkb2N1bWVudE1vZGVcImluIGRvY3VtZW50JiYxMT49ZG9jdW1lbnQuZG9jdW1lbnRNb2RlLFNkPXtzZWxlY3Q6e3BoYXNlZFJlZ2lzdHJhdGlvbk5hbWVzOntidWJibGVkOlwib25TZWxlY3RcIixjYXB0dXJlZDpcIm9uU2VsZWN0Q2FwdHVyZVwifSxkZXBlbmRlbmNpZXM6XCJibHVyIGNvbnRleHRtZW51IGRyYWdlbmQgZm9jdXMga2V5ZG93biBrZXl1cCBtb3VzZWRvd24gbW91c2V1cCBzZWxlY3Rpb25jaGFuZ2VcIi5zcGxpdChcIiBcIil9fSxUZD1udWxsLFVkPW51bGwsVmQ9bnVsbCxXZD0hMTtcbmZ1bmN0aW9uIFhkKGEsYil7dmFyIGM9Yi53aW5kb3c9PT1iP2IuZG9jdW1lbnQ6OT09PWIubm9kZVR5cGU/YjpiLm93bmVyRG9jdW1lbnQ7aWYoV2R8fG51bGw9PVRkfHxUZCE9PUpkKGMpKXJldHVybiBudWxsO2M9VGQ7XCJzZWxlY3Rpb25TdGFydFwiaW4gYyYmT2QoYyk/Yz17c3RhcnQ6Yy5zZWxlY3Rpb25TdGFydCxlbmQ6Yy5zZWxlY3Rpb25FbmR9OihjPShjLm93bmVyRG9jdW1lbnQmJmMub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlld3x8d2luZG93KS5nZXRTZWxlY3Rpb24oKSxjPXthbmNob3JOb2RlOmMuYW5jaG9yTm9kZSxhbmNob3JPZmZzZXQ6Yy5hbmNob3JPZmZzZXQsZm9jdXNOb2RlOmMuZm9jdXNOb2RlLGZvY3VzT2Zmc2V0OmMuZm9jdXNPZmZzZXR9KTtyZXR1cm4gVmQmJmRkKFZkLGMpP251bGw6KFZkPWMsYT15LmdldFBvb2xlZChTZC5zZWxlY3QsVWQsYSxiKSxhLnR5cGU9XCJzZWxlY3RcIixhLnRhcmdldD1UZCxRYShhKSxhKX1cbnZhciBZZD17ZXZlbnRUeXBlczpTZCxleHRyYWN0RXZlbnRzOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPWQud2luZG93PT09ZD9kLmRvY3VtZW50Ojk9PT1kLm5vZGVUeXBlP2Q6ZC5vd25lckRvY3VtZW50LGY7aWYoIShmPSFlKSl7YTp7ZT1JZChlKTtmPXNhLm9uU2VsZWN0O2Zvcih2YXIgZz0wO2c8Zi5sZW5ndGg7ZysrKXt2YXIgaD1mW2ddO2lmKCFlLmhhc093blByb3BlcnR5KGgpfHwhZVtoXSl7ZT0hMTticmVhayBhfX1lPSEwfWY9IWV9aWYoZilyZXR1cm4gbnVsbDtlPWI/SmEoYik6d2luZG93O3N3aXRjaChhKXtjYXNlIFwiZm9jdXNcIjppZihNYihlKXx8XCJ0cnVlXCI9PT1lLmNvbnRlbnRFZGl0YWJsZSlUZD1lLFVkPWIsVmQ9bnVsbDticmVhaztjYXNlIFwiYmx1clwiOlZkPVVkPVRkPW51bGw7YnJlYWs7Y2FzZSBcIm1vdXNlZG93blwiOldkPSEwO2JyZWFrO2Nhc2UgXCJjb250ZXh0bWVudVwiOmNhc2UgXCJtb3VzZXVwXCI6Y2FzZSBcImRyYWdlbmRcIjpyZXR1cm4gV2Q9ITEsWGQoYyxkKTtjYXNlIFwic2VsZWN0aW9uY2hhbmdlXCI6aWYoUmQpYnJlYWs7XG5jYXNlIFwia2V5ZG93blwiOmNhc2UgXCJrZXl1cFwiOnJldHVybiBYZChjLGQpfXJldHVybiBudWxsfX07QmEuaW5qZWN0RXZlbnRQbHVnaW5PcmRlcihcIlJlc3BvbmRlckV2ZW50UGx1Z2luIFNpbXBsZUV2ZW50UGx1Z2luIEVudGVyTGVhdmVFdmVudFBsdWdpbiBDaGFuZ2VFdmVudFBsdWdpbiBTZWxlY3RFdmVudFBsdWdpbiBCZWZvcmVJbnB1dEV2ZW50UGx1Z2luXCIuc3BsaXQoXCIgXCIpKTt0YT1LYTt1YT1JYTt2YT1KYTtCYS5pbmplY3RFdmVudFBsdWdpbnNCeU5hbWUoe1NpbXBsZUV2ZW50UGx1Z2luOnhkLEVudGVyTGVhdmVFdmVudFBsdWdpbjphZCxDaGFuZ2VFdmVudFBsdWdpbjpQYyxTZWxlY3RFdmVudFBsdWdpbjpZZCxCZWZvcmVJbnB1dEV2ZW50UGx1Z2luOnpifSk7ZnVuY3Rpb24gWmQoYSl7dmFyIGI9XCJcIjthYS5DaGlsZHJlbi5mb3JFYWNoKGEsZnVuY3Rpb24oYSl7bnVsbCE9YSYmKGIrPWEpfSk7cmV0dXJuIGJ9XG5mdW5jdGlvbiAkZChhLGIpe2E9bih7Y2hpbGRyZW46dm9pZCAwfSxiKTtpZihiPVpkKGIuY2hpbGRyZW4pKWEuY2hpbGRyZW49YjtyZXR1cm4gYX1mdW5jdGlvbiBhZShhLGIsYyxkKXthPWEub3B0aW9ucztpZihiKXtiPXt9O2Zvcih2YXIgZT0wO2U8Yy5sZW5ndGg7ZSsrKWJbXCIkXCIrY1tlXV09ITA7Zm9yKGM9MDtjPGEubGVuZ3RoO2MrKyllPWIuaGFzT3duUHJvcGVydHkoXCIkXCIrYVtjXS52YWx1ZSksYVtjXS5zZWxlY3RlZCE9PWUmJihhW2NdLnNlbGVjdGVkPWUpLGUmJmQmJihhW2NdLmRlZmF1bHRTZWxlY3RlZD0hMCl9ZWxzZXtjPVwiXCIrdWMoYyk7Yj1udWxsO2ZvcihlPTA7ZTxhLmxlbmd0aDtlKyspe2lmKGFbZV0udmFsdWU9PT1jKXthW2VdLnNlbGVjdGVkPSEwO2QmJihhW2VdLmRlZmF1bHRTZWxlY3RlZD0hMCk7cmV0dXJufW51bGwhPT1ifHxhW2VdLmRpc2FibGVkfHwoYj1hW2VdKX1udWxsIT09YiYmKGIuc2VsZWN0ZWQ9ITApfX1cbmZ1bmN0aW9uIGJlKGEsYil7bnVsbCE9Yi5kYW5nZXJvdXNseVNldElubmVySFRNTD94KFwiOTFcIik6dm9pZCAwO3JldHVybiBuKHt9LGIse3ZhbHVlOnZvaWQgMCxkZWZhdWx0VmFsdWU6dm9pZCAwLGNoaWxkcmVuOlwiXCIrYS5fd3JhcHBlclN0YXRlLmluaXRpYWxWYWx1ZX0pfWZ1bmN0aW9uIGNlKGEsYil7dmFyIGM9Yi52YWx1ZTtudWxsPT1jJiYoYz1iLmRlZmF1bHRWYWx1ZSxiPWIuY2hpbGRyZW4sbnVsbCE9YiYmKG51bGwhPWM/eChcIjkyXCIpOnZvaWQgMCxBcnJheS5pc0FycmF5KGIpJiYoMT49Yi5sZW5ndGg/dm9pZCAwOngoXCI5M1wiKSxiPWJbMF0pLGM9YiksbnVsbD09YyYmKGM9XCJcIikpO2EuX3dyYXBwZXJTdGF0ZT17aW5pdGlhbFZhbHVlOnVjKGMpfX1cbmZ1bmN0aW9uIGRlKGEsYil7dmFyIGM9dWMoYi52YWx1ZSksZD11YyhiLmRlZmF1bHRWYWx1ZSk7bnVsbCE9YyYmKGM9XCJcIitjLGMhPT1hLnZhbHVlJiYoYS52YWx1ZT1jKSxudWxsPT1iLmRlZmF1bHRWYWx1ZSYmYS5kZWZhdWx0VmFsdWUhPT1jJiYoYS5kZWZhdWx0VmFsdWU9YykpO251bGwhPWQmJihhLmRlZmF1bHRWYWx1ZT1cIlwiK2QpfWZ1bmN0aW9uIGVlKGEpe3ZhciBiPWEudGV4dENvbnRlbnQ7Yj09PWEuX3dyYXBwZXJTdGF0ZS5pbml0aWFsVmFsdWUmJihhLnZhbHVlPWIpfXZhciBmZT17aHRtbDpcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIixtYXRobWw6XCJodHRwOi8vd3d3LnczLm9yZy8xOTk4L01hdGgvTWF0aE1MXCIsc3ZnOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIn07XG5mdW5jdGlvbiBnZShhKXtzd2l0Y2goYSl7Y2FzZSBcInN2Z1wiOnJldHVyblwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtjYXNlIFwibWF0aFwiOnJldHVyblwiaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTFwiO2RlZmF1bHQ6cmV0dXJuXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCJ9fWZ1bmN0aW9uIGhlKGEsYil7cmV0dXJuIG51bGw9PWF8fFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiPT09YT9nZShiKTpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI9PT1hJiZcImZvcmVpZ25PYmplY3RcIj09PWI/XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI6YX1cbnZhciBpZT12b2lkIDAsamU9ZnVuY3Rpb24oYSl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBNU0FwcCYmTVNBcHAuZXhlY1Vuc2FmZUxvY2FsRnVuY3Rpb24/ZnVuY3Rpb24oYixjLGQsZSl7TVNBcHAuZXhlY1Vuc2FmZUxvY2FsRnVuY3Rpb24oZnVuY3Rpb24oKXtyZXR1cm4gYShiLGMsZCxlKX0pfTphfShmdW5jdGlvbihhLGIpe2lmKGEubmFtZXNwYWNlVVJJIT09ZmUuc3ZnfHxcImlubmVySFRNTFwiaW4gYSlhLmlubmVySFRNTD1iO2Vsc2V7aWU9aWV8fGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7aWUuaW5uZXJIVE1MPVwiPHN2Zz5cIitiK1wiPC9zdmc+XCI7Zm9yKGI9aWUuZmlyc3RDaGlsZDthLmZpcnN0Q2hpbGQ7KWEucmVtb3ZlQ2hpbGQoYS5maXJzdENoaWxkKTtmb3IoO2IuZmlyc3RDaGlsZDspYS5hcHBlbmRDaGlsZChiLmZpcnN0Q2hpbGQpfX0pO1xuZnVuY3Rpb24ga2UoYSxiKXtpZihiKXt2YXIgYz1hLmZpcnN0Q2hpbGQ7aWYoYyYmYz09PWEubGFzdENoaWxkJiYzPT09Yy5ub2RlVHlwZSl7Yy5ub2RlVmFsdWU9YjtyZXR1cm59fWEudGV4dENvbnRlbnQ9Yn1cbnZhciBsZT17YW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6ITAsYm9yZGVySW1hZ2VPdXRzZXQ6ITAsYm9yZGVySW1hZ2VTbGljZTohMCxib3JkZXJJbWFnZVdpZHRoOiEwLGJveEZsZXg6ITAsYm94RmxleEdyb3VwOiEwLGJveE9yZGluYWxHcm91cDohMCxjb2x1bW5Db3VudDohMCxjb2x1bW5zOiEwLGZsZXg6ITAsZmxleEdyb3c6ITAsZmxleFBvc2l0aXZlOiEwLGZsZXhTaHJpbms6ITAsZmxleE5lZ2F0aXZlOiEwLGZsZXhPcmRlcjohMCxncmlkQXJlYTohMCxncmlkUm93OiEwLGdyaWRSb3dFbmQ6ITAsZ3JpZFJvd1NwYW46ITAsZ3JpZFJvd1N0YXJ0OiEwLGdyaWRDb2x1bW46ITAsZ3JpZENvbHVtbkVuZDohMCxncmlkQ29sdW1uU3BhbjohMCxncmlkQ29sdW1uU3RhcnQ6ITAsZm9udFdlaWdodDohMCxsaW5lQ2xhbXA6ITAsbGluZUhlaWdodDohMCxvcGFjaXR5OiEwLG9yZGVyOiEwLG9ycGhhbnM6ITAsdGFiU2l6ZTohMCx3aWRvd3M6ITAsekluZGV4OiEwLHpvb206ITAsZmlsbE9wYWNpdHk6ITAsXG5mbG9vZE9wYWNpdHk6ITAsc3RvcE9wYWNpdHk6ITAsc3Ryb2tlRGFzaGFycmF5OiEwLHN0cm9rZURhc2hvZmZzZXQ6ITAsc3Ryb2tlTWl0ZXJsaW1pdDohMCxzdHJva2VPcGFjaXR5OiEwLHN0cm9rZVdpZHRoOiEwfSxtZT1bXCJXZWJraXRcIixcIm1zXCIsXCJNb3pcIixcIk9cIl07T2JqZWN0LmtleXMobGUpLmZvckVhY2goZnVuY3Rpb24oYSl7bWUuZm9yRWFjaChmdW5jdGlvbihiKXtiPWIrYS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSthLnN1YnN0cmluZygxKTtsZVtiXT1sZVthXX0pfSk7ZnVuY3Rpb24gbmUoYSxiLGMpe3JldHVybiBudWxsPT1ifHxcImJvb2xlYW5cIj09PXR5cGVvZiBifHxcIlwiPT09Yj9cIlwiOmN8fFwibnVtYmVyXCIhPT10eXBlb2YgYnx8MD09PWJ8fGxlLmhhc093blByb3BlcnR5KGEpJiZsZVthXT8oXCJcIitiKS50cmltKCk6YitcInB4XCJ9XG5mdW5jdGlvbiBvZShhLGIpe2E9YS5zdHlsZTtmb3IodmFyIGMgaW4gYilpZihiLmhhc093blByb3BlcnR5KGMpKXt2YXIgZD0wPT09Yy5pbmRleE9mKFwiLS1cIiksZT1uZShjLGJbY10sZCk7XCJmbG9hdFwiPT09YyYmKGM9XCJjc3NGbG9hdFwiKTtkP2Euc2V0UHJvcGVydHkoYyxlKTphW2NdPWV9fXZhciBwZT1uKHttZW51aXRlbTohMH0se2FyZWE6ITAsYmFzZTohMCxicjohMCxjb2w6ITAsZW1iZWQ6ITAsaHI6ITAsaW1nOiEwLGlucHV0OiEwLGtleWdlbjohMCxsaW5rOiEwLG1ldGE6ITAscGFyYW06ITAsc291cmNlOiEwLHRyYWNrOiEwLHdicjohMH0pO1xuZnVuY3Rpb24gcWUoYSxiKXtiJiYocGVbYV0mJihudWxsIT1iLmNoaWxkcmVufHxudWxsIT1iLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MP3goXCIxMzdcIixhLFwiXCIpOnZvaWQgMCksbnVsbCE9Yi5kYW5nZXJvdXNseVNldElubmVySFRNTCYmKG51bGwhPWIuY2hpbGRyZW4/eChcIjYwXCIpOnZvaWQgMCxcIm9iamVjdFwiPT09dHlwZW9mIGIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwmJlwiX19odG1sXCJpbiBiLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MP3ZvaWQgMDp4KFwiNjFcIikpLG51bGwhPWIuc3R5bGUmJlwib2JqZWN0XCIhPT10eXBlb2YgYi5zdHlsZT94KFwiNjJcIixcIlwiKTp2b2lkIDApfVxuZnVuY3Rpb24gcmUoYSxiKXtpZigtMT09PWEuaW5kZXhPZihcIi1cIikpcmV0dXJuXCJzdHJpbmdcIj09PXR5cGVvZiBiLmlzO3N3aXRjaChhKXtjYXNlIFwiYW5ub3RhdGlvbi14bWxcIjpjYXNlIFwiY29sb3ItcHJvZmlsZVwiOmNhc2UgXCJmb250LWZhY2VcIjpjYXNlIFwiZm9udC1mYWNlLXNyY1wiOmNhc2UgXCJmb250LWZhY2UtdXJpXCI6Y2FzZSBcImZvbnQtZmFjZS1mb3JtYXRcIjpjYXNlIFwiZm9udC1mYWNlLW5hbWVcIjpjYXNlIFwibWlzc2luZy1nbHlwaFwiOnJldHVybiExO2RlZmF1bHQ6cmV0dXJuITB9fVxuZnVuY3Rpb24gc2UoYSxiKXthPTk9PT1hLm5vZGVUeXBlfHwxMT09PWEubm9kZVR5cGU/YTphLm93bmVyRG9jdW1lbnQ7dmFyIGM9SWQoYSk7Yj1zYVtiXTtmb3IodmFyIGQ9MDtkPGIubGVuZ3RoO2QrKyl7dmFyIGU9YltkXTtpZighYy5oYXNPd25Qcm9wZXJ0eShlKXx8IWNbZV0pe3N3aXRjaChlKXtjYXNlIFwic2Nyb2xsXCI6RWQoXCJzY3JvbGxcIixhKTticmVhaztjYXNlIFwiZm9jdXNcIjpjYXNlIFwiYmx1clwiOkVkKFwiZm9jdXNcIixhKTtFZChcImJsdXJcIixhKTtjLmJsdXI9ITA7Yy5mb2N1cz0hMDticmVhaztjYXNlIFwiY2FuY2VsXCI6Y2FzZSBcImNsb3NlXCI6T2IoZSkmJkVkKGUsYSk7YnJlYWs7Y2FzZSBcImludmFsaWRcIjpjYXNlIFwic3VibWl0XCI6Y2FzZSBcInJlc2V0XCI6YnJlYWs7ZGVmYXVsdDotMT09PWFiLmluZGV4T2YoZSkmJkUoZSxhKX1jW2VdPSEwfX19ZnVuY3Rpb24gdGUoKXt9dmFyIHVlPW51bGwsdmU9bnVsbDtcbmZ1bmN0aW9uIHdlKGEsYil7c3dpdGNoKGEpe2Nhc2UgXCJidXR0b25cIjpjYXNlIFwiaW5wdXRcIjpjYXNlIFwic2VsZWN0XCI6Y2FzZSBcInRleHRhcmVhXCI6cmV0dXJuISFiLmF1dG9Gb2N1c31yZXR1cm4hMX1mdW5jdGlvbiB4ZShhLGIpe3JldHVyblwidGV4dGFyZWFcIj09PWF8fFwib3B0aW9uXCI9PT1hfHxcIm5vc2NyaXB0XCI9PT1hfHxcInN0cmluZ1wiPT09dHlwZW9mIGIuY2hpbGRyZW58fFwibnVtYmVyXCI9PT10eXBlb2YgYi5jaGlsZHJlbnx8XCJvYmplY3RcIj09PXR5cGVvZiBiLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MJiZudWxsIT09Yi5kYW5nZXJvdXNseVNldElubmVySFRNTCYmbnVsbCE9Yi5kYW5nZXJvdXNseVNldElubmVySFRNTC5fX2h0bWx9XG52YXIgeWU9XCJmdW5jdGlvblwiPT09dHlwZW9mIHNldFRpbWVvdXQ/c2V0VGltZW91dDp2b2lkIDAsemU9XCJmdW5jdGlvblwiPT09dHlwZW9mIGNsZWFyVGltZW91dD9jbGVhclRpbWVvdXQ6dm9pZCAwLEFlPXIudW5zdGFibGVfc2NoZWR1bGVDYWxsYmFjayxCZT1yLnVuc3RhYmxlX2NhbmNlbENhbGxiYWNrO1xuZnVuY3Rpb24gQ2UoYSxiLGMsZCxlKXthW0dhXT1lO1wiaW5wdXRcIj09PWMmJlwicmFkaW9cIj09PWUudHlwZSYmbnVsbCE9ZS5uYW1lJiZ4YyhhLGUpO3JlKGMsZCk7ZD1yZShjLGUpO2Zvcih2YXIgZj0wO2Y8Yi5sZW5ndGg7Zis9Mil7dmFyIGc9YltmXSxoPWJbZisxXTtcInN0eWxlXCI9PT1nP29lKGEsaCk6XCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiPT09Zz9qZShhLGgpOlwiY2hpbGRyZW5cIj09PWc/a2UoYSxoKTp0YyhhLGcsaCxkKX1zd2l0Y2goYyl7Y2FzZSBcImlucHV0XCI6eWMoYSxlKTticmVhaztjYXNlIFwidGV4dGFyZWFcIjpkZShhLGUpO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjpiPWEuX3dyYXBwZXJTdGF0ZS53YXNNdWx0aXBsZSxhLl93cmFwcGVyU3RhdGUud2FzTXVsdGlwbGU9ISFlLm11bHRpcGxlLGM9ZS52YWx1ZSxudWxsIT1jP2FlKGEsISFlLm11bHRpcGxlLGMsITEpOmIhPT0hIWUubXVsdGlwbGUmJihudWxsIT1lLmRlZmF1bHRWYWx1ZT9hZShhLCEhZS5tdWx0aXBsZSxlLmRlZmF1bHRWYWx1ZSxcbiEwKTphZShhLCEhZS5tdWx0aXBsZSxlLm11bHRpcGxlP1tdOlwiXCIsITEpKX19ZnVuY3Rpb24gRGUoYSl7Zm9yKGE9YS5uZXh0U2libGluZzthJiYxIT09YS5ub2RlVHlwZSYmMyE9PWEubm9kZVR5cGU7KWE9YS5uZXh0U2libGluZztyZXR1cm4gYX1mdW5jdGlvbiBFZShhKXtmb3IoYT1hLmZpcnN0Q2hpbGQ7YSYmMSE9PWEubm9kZVR5cGUmJjMhPT1hLm5vZGVUeXBlOylhPWEubmV4dFNpYmxpbmc7cmV0dXJuIGF9bmV3IFNldDt2YXIgRmU9W10sR2U9LTE7ZnVuY3Rpb24gRihhKXswPkdlfHwoYS5jdXJyZW50PUZlW0dlXSxGZVtHZV09bnVsbCxHZS0tKX1mdW5jdGlvbiBHKGEsYil7R2UrKztGZVtHZV09YS5jdXJyZW50O2EuY3VycmVudD1ifXZhciBIZT17fSxIPXtjdXJyZW50OkhlfSxJPXtjdXJyZW50OiExfSxJZT1IZTtcbmZ1bmN0aW9uIEplKGEsYil7dmFyIGM9YS50eXBlLmNvbnRleHRUeXBlcztpZighYylyZXR1cm4gSGU7dmFyIGQ9YS5zdGF0ZU5vZGU7aWYoZCYmZC5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZFVubWFza2VkQ2hpbGRDb250ZXh0PT09YilyZXR1cm4gZC5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZE1hc2tlZENoaWxkQ29udGV4dDt2YXIgZT17fSxmO2ZvcihmIGluIGMpZVtmXT1iW2ZdO2QmJihhPWEuc3RhdGVOb2RlLGEuX19yZWFjdEludGVybmFsTWVtb2l6ZWRVbm1hc2tlZENoaWxkQ29udGV4dD1iLGEuX19yZWFjdEludGVybmFsTWVtb2l6ZWRNYXNrZWRDaGlsZENvbnRleHQ9ZSk7cmV0dXJuIGV9ZnVuY3Rpb24gSihhKXthPWEuY2hpbGRDb250ZXh0VHlwZXM7cmV0dXJuIG51bGwhPT1hJiZ2b2lkIDAhPT1hfWZ1bmN0aW9uIEtlKGEpe0YoSSxhKTtGKEgsYSl9ZnVuY3Rpb24gTGUoYSl7RihJLGEpO0YoSCxhKX1cbmZ1bmN0aW9uIE1lKGEsYixjKXtILmN1cnJlbnQhPT1IZT94KFwiMTY4XCIpOnZvaWQgMDtHKEgsYixhKTtHKEksYyxhKX1mdW5jdGlvbiBOZShhLGIsYyl7dmFyIGQ9YS5zdGF0ZU5vZGU7YT1iLmNoaWxkQ29udGV4dFR5cGVzO2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBkLmdldENoaWxkQ29udGV4dClyZXR1cm4gYztkPWQuZ2V0Q2hpbGRDb250ZXh0KCk7Zm9yKHZhciBlIGluIGQpZSBpbiBhP3ZvaWQgMDp4KFwiMTA4XCIsaWMoYil8fFwiVW5rbm93blwiLGUpO3JldHVybiBuKHt9LGMsZCl9ZnVuY3Rpb24gT2UoYSl7dmFyIGI9YS5zdGF0ZU5vZGU7Yj1iJiZiLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkTWVyZ2VkQ2hpbGRDb250ZXh0fHxIZTtJZT1ILmN1cnJlbnQ7RyhILGIsYSk7RyhJLEkuY3VycmVudCxhKTtyZXR1cm4hMH1cbmZ1bmN0aW9uIFBlKGEsYixjKXt2YXIgZD1hLnN0YXRlTm9kZTtkP3ZvaWQgMDp4KFwiMTY5XCIpO2M/KGI9TmUoYSxiLEllKSxkLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkTWVyZ2VkQ2hpbGRDb250ZXh0PWIsRihJLGEpLEYoSCxhKSxHKEgsYixhKSk6RihJLGEpO0coSSxjLGEpfXZhciBRZT1udWxsLFJlPW51bGw7ZnVuY3Rpb24gU2UoYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3RyeXtyZXR1cm4gYShiKX1jYXRjaChjKXt9fX1cbmZ1bmN0aW9uIFRlKGEpe2lmKFwidW5kZWZpbmVkXCI9PT10eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fKXJldHVybiExO3ZhciBiPV9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztpZihiLmlzRGlzYWJsZWR8fCFiLnN1cHBvcnRzRmliZXIpcmV0dXJuITA7dHJ5e3ZhciBjPWIuaW5qZWN0KGEpO1FlPVNlKGZ1bmN0aW9uKGEpe3JldHVybiBiLm9uQ29tbWl0RmliZXJSb290KGMsYSl9KTtSZT1TZShmdW5jdGlvbihhKXtyZXR1cm4gYi5vbkNvbW1pdEZpYmVyVW5tb3VudChjLGEpfSl9Y2F0Y2goZCl7fXJldHVybiEwfVxuZnVuY3Rpb24gVWUoYSxiLGMsZCl7dGhpcy50YWc9YTt0aGlzLmtleT1jO3RoaXMuc2libGluZz10aGlzLmNoaWxkPXRoaXMucmV0dXJuPXRoaXMuc3RhdGVOb2RlPXRoaXMudHlwZT10aGlzLmVsZW1lbnRUeXBlPW51bGw7dGhpcy5pbmRleD0wO3RoaXMucmVmPW51bGw7dGhpcy5wZW5kaW5nUHJvcHM9Yjt0aGlzLmNvbnRleHREZXBlbmRlbmNpZXM9dGhpcy5tZW1vaXplZFN0YXRlPXRoaXMudXBkYXRlUXVldWU9dGhpcy5tZW1vaXplZFByb3BzPW51bGw7dGhpcy5tb2RlPWQ7dGhpcy5lZmZlY3RUYWc9MDt0aGlzLmxhc3RFZmZlY3Q9dGhpcy5maXJzdEVmZmVjdD10aGlzLm5leHRFZmZlY3Q9bnVsbDt0aGlzLmNoaWxkRXhwaXJhdGlvblRpbWU9dGhpcy5leHBpcmF0aW9uVGltZT0wO3RoaXMuYWx0ZXJuYXRlPW51bGx9ZnVuY3Rpb24gSyhhLGIsYyxkKXtyZXR1cm4gbmV3IFVlKGEsYixjLGQpfVxuZnVuY3Rpb24gVmUoYSl7YT1hLnByb3RvdHlwZTtyZXR1cm4hKCFhfHwhYS5pc1JlYWN0Q29tcG9uZW50KX1mdW5jdGlvbiBXZShhKXtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYSlyZXR1cm4gVmUoYSk/MTowO2lmKHZvaWQgMCE9PWEmJm51bGwhPT1hKXthPWEuJCR0eXBlb2Y7aWYoYT09PWNjKXJldHVybiAxMTtpZihhPT09ZWMpcmV0dXJuIDE0fXJldHVybiAyfVxuZnVuY3Rpb24gWGUoYSxiKXt2YXIgYz1hLmFsdGVybmF0ZTtudWxsPT09Yz8oYz1LKGEudGFnLGIsYS5rZXksYS5tb2RlKSxjLmVsZW1lbnRUeXBlPWEuZWxlbWVudFR5cGUsYy50eXBlPWEudHlwZSxjLnN0YXRlTm9kZT1hLnN0YXRlTm9kZSxjLmFsdGVybmF0ZT1hLGEuYWx0ZXJuYXRlPWMpOihjLnBlbmRpbmdQcm9wcz1iLGMuZWZmZWN0VGFnPTAsYy5uZXh0RWZmZWN0PW51bGwsYy5maXJzdEVmZmVjdD1udWxsLGMubGFzdEVmZmVjdD1udWxsKTtjLmNoaWxkRXhwaXJhdGlvblRpbWU9YS5jaGlsZEV4cGlyYXRpb25UaW1lO2MuZXhwaXJhdGlvblRpbWU9YS5leHBpcmF0aW9uVGltZTtjLmNoaWxkPWEuY2hpbGQ7Yy5tZW1vaXplZFByb3BzPWEubWVtb2l6ZWRQcm9wcztjLm1lbW9pemVkU3RhdGU9YS5tZW1vaXplZFN0YXRlO2MudXBkYXRlUXVldWU9YS51cGRhdGVRdWV1ZTtjLmNvbnRleHREZXBlbmRlbmNpZXM9YS5jb250ZXh0RGVwZW5kZW5jaWVzO2Muc2libGluZz1hLnNpYmxpbmc7XG5jLmluZGV4PWEuaW5kZXg7Yy5yZWY9YS5yZWY7cmV0dXJuIGN9XG5mdW5jdGlvbiBZZShhLGIsYyxkLGUsZil7dmFyIGc9MjtkPWE7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGEpVmUoYSkmJihnPTEpO2Vsc2UgaWYoXCJzdHJpbmdcIj09PXR5cGVvZiBhKWc9NTtlbHNlIGE6c3dpdGNoKGEpe2Nhc2UgWGI6cmV0dXJuIFplKGMuY2hpbGRyZW4sZSxmLGIpO2Nhc2UgYmM6cmV0dXJuICRlKGMsZXwzLGYsYik7Y2FzZSBZYjpyZXR1cm4gJGUoYyxlfDIsZixiKTtjYXNlIFpiOnJldHVybiBhPUsoMTIsYyxiLGV8NCksYS5lbGVtZW50VHlwZT1aYixhLnR5cGU9WmIsYS5leHBpcmF0aW9uVGltZT1mLGE7Y2FzZSBkYzpyZXR1cm4gYT1LKDEzLGMsYixlKSxhLmVsZW1lbnRUeXBlPWRjLGEudHlwZT1kYyxhLmV4cGlyYXRpb25UaW1lPWYsYTtkZWZhdWx0OmlmKFwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEpc3dpdGNoKGEuJCR0eXBlb2Ype2Nhc2UgJGI6Zz0xMDticmVhayBhO2Nhc2UgYWM6Zz05O2JyZWFrIGE7Y2FzZSBjYzpnPTExO2JyZWFrIGE7Y2FzZSBlYzpnPVxuMTQ7YnJlYWsgYTtjYXNlIGZjOmc9MTY7ZD1udWxsO2JyZWFrIGF9eChcIjEzMFwiLG51bGw9PWE/YTp0eXBlb2YgYSxcIlwiKX1iPUsoZyxjLGIsZSk7Yi5lbGVtZW50VHlwZT1hO2IudHlwZT1kO2IuZXhwaXJhdGlvblRpbWU9ZjtyZXR1cm4gYn1mdW5jdGlvbiBaZShhLGIsYyxkKXthPUsoNyxhLGQsYik7YS5leHBpcmF0aW9uVGltZT1jO3JldHVybiBhfWZ1bmN0aW9uICRlKGEsYixjLGQpe2E9Syg4LGEsZCxiKTtiPTA9PT0oYiYxKT9ZYjpiYzthLmVsZW1lbnRUeXBlPWI7YS50eXBlPWI7YS5leHBpcmF0aW9uVGltZT1jO3JldHVybiBhfWZ1bmN0aW9uIGFmKGEsYixjKXthPUsoNixhLG51bGwsYik7YS5leHBpcmF0aW9uVGltZT1jO3JldHVybiBhfVxuZnVuY3Rpb24gYmYoYSxiLGMpe2I9Syg0LG51bGwhPT1hLmNoaWxkcmVuP2EuY2hpbGRyZW46W10sYS5rZXksYik7Yi5leHBpcmF0aW9uVGltZT1jO2Iuc3RhdGVOb2RlPXtjb250YWluZXJJbmZvOmEuY29udGFpbmVySW5mbyxwZW5kaW5nQ2hpbGRyZW46bnVsbCxpbXBsZW1lbnRhdGlvbjphLmltcGxlbWVudGF0aW9ufTtyZXR1cm4gYn1mdW5jdGlvbiBjZihhLGIpe2EuZGlkRXJyb3I9ITE7dmFyIGM9YS5lYXJsaWVzdFBlbmRpbmdUaW1lOzA9PT1jP2EuZWFybGllc3RQZW5kaW5nVGltZT1hLmxhdGVzdFBlbmRpbmdUaW1lPWI6YzxiP2EuZWFybGllc3RQZW5kaW5nVGltZT1iOmEubGF0ZXN0UGVuZGluZ1RpbWU+YiYmKGEubGF0ZXN0UGVuZGluZ1RpbWU9Yik7ZGYoYixhKX1cbmZ1bmN0aW9uIGVmKGEsYil7YS5kaWRFcnJvcj0hMTtpZigwPT09YilhLmVhcmxpZXN0UGVuZGluZ1RpbWU9MCxhLmxhdGVzdFBlbmRpbmdUaW1lPTAsYS5lYXJsaWVzdFN1c3BlbmRlZFRpbWU9MCxhLmxhdGVzdFN1c3BlbmRlZFRpbWU9MCxhLmxhdGVzdFBpbmdlZFRpbWU9MDtlbHNle2I8YS5sYXRlc3RQaW5nZWRUaW1lJiYoYS5sYXRlc3RQaW5nZWRUaW1lPTApO3ZhciBjPWEubGF0ZXN0UGVuZGluZ1RpbWU7MCE9PWMmJihjPmI/YS5lYXJsaWVzdFBlbmRpbmdUaW1lPWEubGF0ZXN0UGVuZGluZ1RpbWU9MDphLmVhcmxpZXN0UGVuZGluZ1RpbWU+YiYmKGEuZWFybGllc3RQZW5kaW5nVGltZT1hLmxhdGVzdFBlbmRpbmdUaW1lKSk7Yz1hLmVhcmxpZXN0U3VzcGVuZGVkVGltZTswPT09Yz9jZihhLGIpOmI8YS5sYXRlc3RTdXNwZW5kZWRUaW1lPyhhLmVhcmxpZXN0U3VzcGVuZGVkVGltZT0wLGEubGF0ZXN0U3VzcGVuZGVkVGltZT0wLGEubGF0ZXN0UGluZ2VkVGltZT0wLGNmKGEsYikpOlxuYj5jJiZjZihhLGIpfWRmKDAsYSl9ZnVuY3Rpb24gZmYoYSxiKXthLmRpZEVycm9yPSExO2EubGF0ZXN0UGluZ2VkVGltZT49YiYmKGEubGF0ZXN0UGluZ2VkVGltZT0wKTt2YXIgYz1hLmVhcmxpZXN0UGVuZGluZ1RpbWUsZD1hLmxhdGVzdFBlbmRpbmdUaW1lO2M9PT1iP2EuZWFybGllc3RQZW5kaW5nVGltZT1kPT09Yj9hLmxhdGVzdFBlbmRpbmdUaW1lPTA6ZDpkPT09YiYmKGEubGF0ZXN0UGVuZGluZ1RpbWU9Yyk7Yz1hLmVhcmxpZXN0U3VzcGVuZGVkVGltZTtkPWEubGF0ZXN0U3VzcGVuZGVkVGltZTswPT09Yz9hLmVhcmxpZXN0U3VzcGVuZGVkVGltZT1hLmxhdGVzdFN1c3BlbmRlZFRpbWU9YjpjPGI/YS5lYXJsaWVzdFN1c3BlbmRlZFRpbWU9YjpkPmImJihhLmxhdGVzdFN1c3BlbmRlZFRpbWU9Yik7ZGYoYixhKX1cbmZ1bmN0aW9uIGdmKGEsYil7dmFyIGM9YS5lYXJsaWVzdFBlbmRpbmdUaW1lO2E9YS5lYXJsaWVzdFN1c3BlbmRlZFRpbWU7Yz5iJiYoYj1jKTthPmImJihiPWEpO3JldHVybiBifWZ1bmN0aW9uIGRmKGEsYil7dmFyIGM9Yi5lYXJsaWVzdFN1c3BlbmRlZFRpbWUsZD1iLmxhdGVzdFN1c3BlbmRlZFRpbWUsZT1iLmVhcmxpZXN0UGVuZGluZ1RpbWUsZj1iLmxhdGVzdFBpbmdlZFRpbWU7ZT0wIT09ZT9lOmY7MD09PWUmJigwPT09YXx8ZDxhKSYmKGU9ZCk7YT1lOzAhPT1hJiZjPmEmJihhPWMpO2IubmV4dEV4cGlyYXRpb25UaW1lVG9Xb3JrT249ZTtiLmV4cGlyYXRpb25UaW1lPWF9ZnVuY3Rpb24gTChhLGIpe2lmKGEmJmEuZGVmYXVsdFByb3BzKXtiPW4oe30sYik7YT1hLmRlZmF1bHRQcm9wcztmb3IodmFyIGMgaW4gYSl2b2lkIDA9PT1iW2NdJiYoYltjXT1hW2NdKX1yZXR1cm4gYn1cbmZ1bmN0aW9uIGhmKGEpe3ZhciBiPWEuX3Jlc3VsdDtzd2l0Y2goYS5fc3RhdHVzKXtjYXNlIDE6cmV0dXJuIGI7Y2FzZSAyOnRocm93IGI7Y2FzZSAwOnRocm93IGI7ZGVmYXVsdDphLl9zdGF0dXM9MDtiPWEuX2N0b3I7Yj1iKCk7Yi50aGVuKGZ1bmN0aW9uKGIpezA9PT1hLl9zdGF0dXMmJihiPWIuZGVmYXVsdCxhLl9zdGF0dXM9MSxhLl9yZXN1bHQ9Yil9LGZ1bmN0aW9uKGIpezA9PT1hLl9zdGF0dXMmJihhLl9zdGF0dXM9MixhLl9yZXN1bHQ9Yil9KTtzd2l0Y2goYS5fc3RhdHVzKXtjYXNlIDE6cmV0dXJuIGEuX3Jlc3VsdDtjYXNlIDI6dGhyb3cgYS5fcmVzdWx0O31hLl9yZXN1bHQ9Yjt0aHJvdyBiO319dmFyIGpmPShuZXcgYWEuQ29tcG9uZW50KS5yZWZzO1xuZnVuY3Rpb24ga2YoYSxiLGMsZCl7Yj1hLm1lbW9pemVkU3RhdGU7Yz1jKGQsYik7Yz1udWxsPT09Y3x8dm9pZCAwPT09Yz9iOm4oe30sYixjKTthLm1lbW9pemVkU3RhdGU9YztkPWEudXBkYXRlUXVldWU7bnVsbCE9PWQmJjA9PT1hLmV4cGlyYXRpb25UaW1lJiYoZC5iYXNlU3RhdGU9Yyl9XG52YXIgdGY9e2lzTW91bnRlZDpmdW5jdGlvbihhKXtyZXR1cm4oYT1hLl9yZWFjdEludGVybmFsRmliZXIpPzI9PT1lZChhKTohMX0sZW5xdWV1ZVNldFN0YXRlOmZ1bmN0aW9uKGEsYixjKXthPWEuX3JlYWN0SW50ZXJuYWxGaWJlcjt2YXIgZD1sZigpO2Q9bWYoZCxhKTt2YXIgZT1uZihkKTtlLnBheWxvYWQ9Yjt2b2lkIDAhPT1jJiZudWxsIT09YyYmKGUuY2FsbGJhY2s9Yyk7b2YoKTtwZihhLGUpO3FmKGEsZCl9LGVucXVldWVSZXBsYWNlU3RhdGU6ZnVuY3Rpb24oYSxiLGMpe2E9YS5fcmVhY3RJbnRlcm5hbEZpYmVyO3ZhciBkPWxmKCk7ZD1tZihkLGEpO3ZhciBlPW5mKGQpO2UudGFnPXJmO2UucGF5bG9hZD1iO3ZvaWQgMCE9PWMmJm51bGwhPT1jJiYoZS5jYWxsYmFjaz1jKTtvZigpO3BmKGEsZSk7cWYoYSxkKX0sZW5xdWV1ZUZvcmNlVXBkYXRlOmZ1bmN0aW9uKGEsYil7YT1hLl9yZWFjdEludGVybmFsRmliZXI7dmFyIGM9bGYoKTtjPW1mKGMsYSk7dmFyIGQ9bmYoYyk7ZC50YWc9XG5zZjt2b2lkIDAhPT1iJiZudWxsIT09YiYmKGQuY2FsbGJhY2s9Yik7b2YoKTtwZihhLGQpO3FmKGEsYyl9fTtmdW5jdGlvbiB1ZihhLGIsYyxkLGUsZixnKXthPWEuc3RhdGVOb2RlO3JldHVyblwiZnVuY3Rpb25cIj09PXR5cGVvZiBhLnNob3VsZENvbXBvbmVudFVwZGF0ZT9hLnNob3VsZENvbXBvbmVudFVwZGF0ZShkLGYsZyk6Yi5wcm90b3R5cGUmJmIucHJvdG90eXBlLmlzUHVyZVJlYWN0Q29tcG9uZW50PyFkZChjLGQpfHwhZGQoZSxmKTohMH1cbmZ1bmN0aW9uIHZmKGEsYixjKXt2YXIgZD0hMSxlPUhlO3ZhciBmPWIuY29udGV4dFR5cGU7XCJvYmplY3RcIj09PXR5cGVvZiBmJiZudWxsIT09Zj9mPU0oZik6KGU9SihiKT9JZTpILmN1cnJlbnQsZD1iLmNvbnRleHRUeXBlcyxmPShkPW51bGwhPT1kJiZ2b2lkIDAhPT1kKT9KZShhLGUpOkhlKTtiPW5ldyBiKGMsZik7YS5tZW1vaXplZFN0YXRlPW51bGwhPT1iLnN0YXRlJiZ2b2lkIDAhPT1iLnN0YXRlP2Iuc3RhdGU6bnVsbDtiLnVwZGF0ZXI9dGY7YS5zdGF0ZU5vZGU9YjtiLl9yZWFjdEludGVybmFsRmliZXI9YTtkJiYoYT1hLnN0YXRlTm9kZSxhLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkVW5tYXNrZWRDaGlsZENvbnRleHQ9ZSxhLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkTWFza2VkQ2hpbGRDb250ZXh0PWYpO3JldHVybiBifVxuZnVuY3Rpb24gd2YoYSxiLGMsZCl7YT1iLnN0YXRlO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBiLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMmJmIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhjLGQpO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBiLlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZiLlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKGMsZCk7Yi5zdGF0ZSE9PWEmJnRmLmVucXVldWVSZXBsYWNlU3RhdGUoYixiLnN0YXRlLG51bGwpfVxuZnVuY3Rpb24geGYoYSxiLGMsZCl7dmFyIGU9YS5zdGF0ZU5vZGU7ZS5wcm9wcz1jO2Uuc3RhdGU9YS5tZW1vaXplZFN0YXRlO2UucmVmcz1qZjt2YXIgZj1iLmNvbnRleHRUeXBlO1wib2JqZWN0XCI9PT10eXBlb2YgZiYmbnVsbCE9PWY/ZS5jb250ZXh0PU0oZik6KGY9SihiKT9JZTpILmN1cnJlbnQsZS5jb250ZXh0PUplKGEsZikpO2Y9YS51cGRhdGVRdWV1ZTtudWxsIT09ZiYmKHlmKGEsZixjLGUsZCksZS5zdGF0ZT1hLm1lbW9pemVkU3RhdGUpO2Y9Yi5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM7XCJmdW5jdGlvblwiPT09dHlwZW9mIGYmJihrZihhLGIsZixjKSxlLnN0YXRlPWEubWVtb2l6ZWRTdGF0ZSk7XCJmdW5jdGlvblwiPT09dHlwZW9mIGIuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzfHxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZS5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZXx8XCJmdW5jdGlvblwiIT09dHlwZW9mIGUuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCYmXCJmdW5jdGlvblwiIT09XG50eXBlb2YgZS5jb21wb25lbnRXaWxsTW91bnR8fChiPWUuc3RhdGUsXCJmdW5jdGlvblwiPT09dHlwZW9mIGUuY29tcG9uZW50V2lsbE1vdW50JiZlLmNvbXBvbmVudFdpbGxNb3VudCgpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBlLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQmJmUuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpLGIhPT1lLnN0YXRlJiZ0Zi5lbnF1ZXVlUmVwbGFjZVN0YXRlKGUsZS5zdGF0ZSxudWxsKSxmPWEudXBkYXRlUXVldWUsbnVsbCE9PWYmJih5ZihhLGYsYyxlLGQpLGUuc3RhdGU9YS5tZW1vaXplZFN0YXRlKSk7XCJmdW5jdGlvblwiPT09dHlwZW9mIGUuY29tcG9uZW50RGlkTW91bnQmJihhLmVmZmVjdFRhZ3w9NCl9dmFyIHpmPUFycmF5LmlzQXJyYXk7XG5mdW5jdGlvbiBBZihhLGIsYyl7YT1jLnJlZjtpZihudWxsIT09YSYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGEmJlwib2JqZWN0XCIhPT10eXBlb2YgYSl7aWYoYy5fb3duZXIpe2M9Yy5fb3duZXI7dmFyIGQ9dm9pZCAwO2MmJigxIT09Yy50YWc/eChcIjMwOVwiKTp2b2lkIDAsZD1jLnN0YXRlTm9kZSk7ZD92b2lkIDA6eChcIjE0N1wiLGEpO3ZhciBlPVwiXCIrYTtpZihudWxsIT09YiYmbnVsbCE9PWIucmVmJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgYi5yZWYmJmIucmVmLl9zdHJpbmdSZWY9PT1lKXJldHVybiBiLnJlZjtiPWZ1bmN0aW9uKGEpe3ZhciBiPWQucmVmcztiPT09amYmJihiPWQucmVmcz17fSk7bnVsbD09PWE/ZGVsZXRlIGJbZV06YltlXT1hfTtiLl9zdHJpbmdSZWY9ZTtyZXR1cm4gYn1cInN0cmluZ1wiIT09dHlwZW9mIGE/eChcIjI4NFwiKTp2b2lkIDA7Yy5fb3duZXI/dm9pZCAwOngoXCIyOTBcIixhKX1yZXR1cm4gYX1cbmZ1bmN0aW9uIEJmKGEsYil7XCJ0ZXh0YXJlYVwiIT09YS50eXBlJiZ4KFwiMzFcIixcIltvYmplY3QgT2JqZWN0XVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGIpP1wib2JqZWN0IHdpdGgga2V5cyB7XCIrT2JqZWN0LmtleXMoYikuam9pbihcIiwgXCIpK1wifVwiOmIsXCJcIil9XG5mdW5jdGlvbiBDZihhKXtmdW5jdGlvbiBiKGIsYyl7aWYoYSl7dmFyIGQ9Yi5sYXN0RWZmZWN0O251bGwhPT1kPyhkLm5leHRFZmZlY3Q9YyxiLmxhc3RFZmZlY3Q9Yyk6Yi5maXJzdEVmZmVjdD1iLmxhc3RFZmZlY3Q9YztjLm5leHRFZmZlY3Q9bnVsbDtjLmVmZmVjdFRhZz04fX1mdW5jdGlvbiBjKGMsZCl7aWYoIWEpcmV0dXJuIG51bGw7Zm9yKDtudWxsIT09ZDspYihjLGQpLGQ9ZC5zaWJsaW5nO3JldHVybiBudWxsfWZ1bmN0aW9uIGQoYSxiKXtmb3IoYT1uZXcgTWFwO251bGwhPT1iOyludWxsIT09Yi5rZXk/YS5zZXQoYi5rZXksYik6YS5zZXQoYi5pbmRleCxiKSxiPWIuc2libGluZztyZXR1cm4gYX1mdW5jdGlvbiBlKGEsYixjKXthPVhlKGEsYixjKTthLmluZGV4PTA7YS5zaWJsaW5nPW51bGw7cmV0dXJuIGF9ZnVuY3Rpb24gZihiLGMsZCl7Yi5pbmRleD1kO2lmKCFhKXJldHVybiBjO2Q9Yi5hbHRlcm5hdGU7aWYobnVsbCE9PWQpcmV0dXJuIGQ9ZC5pbmRleCxkPGM/KGIuZWZmZWN0VGFnPVxuMixjKTpkO2IuZWZmZWN0VGFnPTI7cmV0dXJuIGN9ZnVuY3Rpb24gZyhiKXthJiZudWxsPT09Yi5hbHRlcm5hdGUmJihiLmVmZmVjdFRhZz0yKTtyZXR1cm4gYn1mdW5jdGlvbiBoKGEsYixjLGQpe2lmKG51bGw9PT1ifHw2IT09Yi50YWcpcmV0dXJuIGI9YWYoYyxhLm1vZGUsZCksYi5yZXR1cm49YSxiO2I9ZShiLGMsZCk7Yi5yZXR1cm49YTtyZXR1cm4gYn1mdW5jdGlvbiBsKGEsYixjLGQpe2lmKG51bGwhPT1iJiZiLmVsZW1lbnRUeXBlPT09Yy50eXBlKXJldHVybiBkPWUoYixjLnByb3BzLGQpLGQucmVmPUFmKGEsYixjKSxkLnJldHVybj1hLGQ7ZD1ZZShjLnR5cGUsYy5rZXksYy5wcm9wcyxudWxsLGEubW9kZSxkKTtkLnJlZj1BZihhLGIsYyk7ZC5yZXR1cm49YTtyZXR1cm4gZH1mdW5jdGlvbiBrKGEsYixjLGQpe2lmKG51bGw9PT1ifHw0IT09Yi50YWd8fGIuc3RhdGVOb2RlLmNvbnRhaW5lckluZm8hPT1jLmNvbnRhaW5lckluZm98fGIuc3RhdGVOb2RlLmltcGxlbWVudGF0aW9uIT09XG5jLmltcGxlbWVudGF0aW9uKXJldHVybiBiPWJmKGMsYS5tb2RlLGQpLGIucmV0dXJuPWEsYjtiPWUoYixjLmNoaWxkcmVufHxbXSxkKTtiLnJldHVybj1hO3JldHVybiBifWZ1bmN0aW9uIG0oYSxiLGMsZCxmKXtpZihudWxsPT09Ynx8NyE9PWIudGFnKXJldHVybiBiPVplKGMsYS5tb2RlLGQsZiksYi5yZXR1cm49YSxiO2I9ZShiLGMsZCk7Yi5yZXR1cm49YTtyZXR1cm4gYn1mdW5jdGlvbiBwKGEsYixjKXtpZihcInN0cmluZ1wiPT09dHlwZW9mIGJ8fFwibnVtYmVyXCI9PT10eXBlb2YgYilyZXR1cm4gYj1hZihcIlwiK2IsYS5tb2RlLGMpLGIucmV0dXJuPWEsYjtpZihcIm9iamVjdFwiPT09dHlwZW9mIGImJm51bGwhPT1iKXtzd2l0Y2goYi4kJHR5cGVvZil7Y2FzZSBWYjpyZXR1cm4gYz1ZZShiLnR5cGUsYi5rZXksYi5wcm9wcyxudWxsLGEubW9kZSxjKSxjLnJlZj1BZihhLG51bGwsYiksYy5yZXR1cm49YSxjO2Nhc2UgV2I6cmV0dXJuIGI9YmYoYixhLm1vZGUsYyksYi5yZXR1cm49YSxifWlmKHpmKGIpfHxcbmhjKGIpKXJldHVybiBiPVplKGIsYS5tb2RlLGMsbnVsbCksYi5yZXR1cm49YSxiO0JmKGEsYil9cmV0dXJuIG51bGx9ZnVuY3Rpb24gdChhLGIsYyxkKXt2YXIgZT1udWxsIT09Yj9iLmtleTpudWxsO2lmKFwic3RyaW5nXCI9PT10eXBlb2YgY3x8XCJudW1iZXJcIj09PXR5cGVvZiBjKXJldHVybiBudWxsIT09ZT9udWxsOmgoYSxiLFwiXCIrYyxkKTtpZihcIm9iamVjdFwiPT09dHlwZW9mIGMmJm51bGwhPT1jKXtzd2l0Y2goYy4kJHR5cGVvZil7Y2FzZSBWYjpyZXR1cm4gYy5rZXk9PT1lP2MudHlwZT09PVhiP20oYSxiLGMucHJvcHMuY2hpbGRyZW4sZCxlKTpsKGEsYixjLGQpOm51bGw7Y2FzZSBXYjpyZXR1cm4gYy5rZXk9PT1lP2soYSxiLGMsZCk6bnVsbH1pZih6ZihjKXx8aGMoYykpcmV0dXJuIG51bGwhPT1lP251bGw6bShhLGIsYyxkLG51bGwpO0JmKGEsYyl9cmV0dXJuIG51bGx9ZnVuY3Rpb24gQShhLGIsYyxkLGUpe2lmKFwic3RyaW5nXCI9PT10eXBlb2YgZHx8XCJudW1iZXJcIj09PXR5cGVvZiBkKXJldHVybiBhPVxuYS5nZXQoYyl8fG51bGwsaChiLGEsXCJcIitkLGUpO2lmKFwib2JqZWN0XCI9PT10eXBlb2YgZCYmbnVsbCE9PWQpe3N3aXRjaChkLiQkdHlwZW9mKXtjYXNlIFZiOnJldHVybiBhPWEuZ2V0KG51bGw9PT1kLmtleT9jOmQua2V5KXx8bnVsbCxkLnR5cGU9PT1YYj9tKGIsYSxkLnByb3BzLmNoaWxkcmVuLGUsZC5rZXkpOmwoYixhLGQsZSk7Y2FzZSBXYjpyZXR1cm4gYT1hLmdldChudWxsPT09ZC5rZXk/YzpkLmtleSl8fG51bGwsayhiLGEsZCxlKX1pZih6ZihkKXx8aGMoZCkpcmV0dXJuIGE9YS5nZXQoYyl8fG51bGwsbShiLGEsZCxlLG51bGwpO0JmKGIsZCl9cmV0dXJuIG51bGx9ZnVuY3Rpb24gdihlLGcsaCxrKXtmb3IodmFyIGw9bnVsbCxtPW51bGwscT1nLHU9Zz0wLEI9bnVsbDtudWxsIT09cSYmdTxoLmxlbmd0aDt1Kyspe3EuaW5kZXg+dT8oQj1xLHE9bnVsbCk6Qj1xLnNpYmxpbmc7dmFyIHc9dChlLHEsaFt1XSxrKTtpZihudWxsPT09dyl7bnVsbD09PXEmJihxPUIpO2JyZWFrfWEmJlxucSYmbnVsbD09PXcuYWx0ZXJuYXRlJiZiKGUscSk7Zz1mKHcsZyx1KTtudWxsPT09bT9sPXc6bS5zaWJsaW5nPXc7bT13O3E9Qn1pZih1PT09aC5sZW5ndGgpcmV0dXJuIGMoZSxxKSxsO2lmKG51bGw9PT1xKXtmb3IoO3U8aC5sZW5ndGg7dSsrKWlmKHE9cChlLGhbdV0saykpZz1mKHEsZyx1KSxudWxsPT09bT9sPXE6bS5zaWJsaW5nPXEsbT1xO3JldHVybiBsfWZvcihxPWQoZSxxKTt1PGgubGVuZ3RoO3UrKylpZihCPUEocSxlLHUsaFt1XSxrKSlhJiZudWxsIT09Qi5hbHRlcm5hdGUmJnEuZGVsZXRlKG51bGw9PT1CLmtleT91OkIua2V5KSxnPWYoQixnLHUpLG51bGw9PT1tP2w9QjptLnNpYmxpbmc9QixtPUI7YSYmcS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3JldHVybiBiKGUsYSl9KTtyZXR1cm4gbH1mdW5jdGlvbiBSKGUsZyxoLGspe3ZhciBsPWhjKGgpO1wiZnVuY3Rpb25cIiE9PXR5cGVvZiBsP3goXCIxNTBcIik6dm9pZCAwO2g9bC5jYWxsKGgpO251bGw9PWg/eChcIjE1MVwiKTp2b2lkIDA7XG5mb3IodmFyIG09bD1udWxsLHE9Zyx1PWc9MCxCPW51bGwsdz1oLm5leHQoKTtudWxsIT09cSYmIXcuZG9uZTt1Kyssdz1oLm5leHQoKSl7cS5pbmRleD51PyhCPXEscT1udWxsKTpCPXEuc2libGluZzt2YXIgdj10KGUscSx3LnZhbHVlLGspO2lmKG51bGw9PT12KXtxfHwocT1CKTticmVha31hJiZxJiZudWxsPT09di5hbHRlcm5hdGUmJmIoZSxxKTtnPWYodixnLHUpO251bGw9PT1tP2w9djptLnNpYmxpbmc9djttPXY7cT1CfWlmKHcuZG9uZSlyZXR1cm4gYyhlLHEpLGw7aWYobnVsbD09PXEpe2Zvcig7IXcuZG9uZTt1Kyssdz1oLm5leHQoKSl3PXAoZSx3LnZhbHVlLGspLG51bGwhPT13JiYoZz1mKHcsZyx1KSxudWxsPT09bT9sPXc6bS5zaWJsaW5nPXcsbT13KTtyZXR1cm4gbH1mb3IocT1kKGUscSk7IXcuZG9uZTt1Kyssdz1oLm5leHQoKSl3PUEocSxlLHUsdy52YWx1ZSxrKSxudWxsIT09dyYmKGEmJm51bGwhPT13LmFsdGVybmF0ZSYmcS5kZWxldGUobnVsbD09PXcua2V5P3U6XG53LmtleSksZz1mKHcsZyx1KSxudWxsPT09bT9sPXc6bS5zaWJsaW5nPXcsbT13KTthJiZxLmZvckVhY2goZnVuY3Rpb24oYSl7cmV0dXJuIGIoZSxhKX0pO3JldHVybiBsfXJldHVybiBmdW5jdGlvbihhLGQsZixoKXt2YXIgaz1cIm9iamVjdFwiPT09dHlwZW9mIGYmJm51bGwhPT1mJiZmLnR5cGU9PT1YYiYmbnVsbD09PWYua2V5O2smJihmPWYucHJvcHMuY2hpbGRyZW4pO3ZhciBsPVwib2JqZWN0XCI9PT10eXBlb2YgZiYmbnVsbCE9PWY7aWYobClzd2l0Y2goZi4kJHR5cGVvZil7Y2FzZSBWYjphOntsPWYua2V5O2ZvcihrPWQ7bnVsbCE9PWs7KXtpZihrLmtleT09PWwpaWYoNz09PWsudGFnP2YudHlwZT09PVhiOmsuZWxlbWVudFR5cGU9PT1mLnR5cGUpe2MoYSxrLnNpYmxpbmcpO2Q9ZShrLGYudHlwZT09PVhiP2YucHJvcHMuY2hpbGRyZW46Zi5wcm9wcyxoKTtkLnJlZj1BZihhLGssZik7ZC5yZXR1cm49YTthPWQ7YnJlYWsgYX1lbHNle2MoYSxrKTticmVha31lbHNlIGIoYSxrKTtrPVxuay5zaWJsaW5nfWYudHlwZT09PVhiPyhkPVplKGYucHJvcHMuY2hpbGRyZW4sYS5tb2RlLGgsZi5rZXkpLGQucmV0dXJuPWEsYT1kKTooaD1ZZShmLnR5cGUsZi5rZXksZi5wcm9wcyxudWxsLGEubW9kZSxoKSxoLnJlZj1BZihhLGQsZiksaC5yZXR1cm49YSxhPWgpfXJldHVybiBnKGEpO2Nhc2UgV2I6YTp7Zm9yKGs9Zi5rZXk7bnVsbCE9PWQ7KXtpZihkLmtleT09PWspaWYoND09PWQudGFnJiZkLnN0YXRlTm9kZS5jb250YWluZXJJbmZvPT09Zi5jb250YWluZXJJbmZvJiZkLnN0YXRlTm9kZS5pbXBsZW1lbnRhdGlvbj09PWYuaW1wbGVtZW50YXRpb24pe2MoYSxkLnNpYmxpbmcpO2Q9ZShkLGYuY2hpbGRyZW58fFtdLGgpO2QucmV0dXJuPWE7YT1kO2JyZWFrIGF9ZWxzZXtjKGEsZCk7YnJlYWt9ZWxzZSBiKGEsZCk7ZD1kLnNpYmxpbmd9ZD1iZihmLGEubW9kZSxoKTtkLnJldHVybj1hO2E9ZH1yZXR1cm4gZyhhKX1pZihcInN0cmluZ1wiPT09dHlwZW9mIGZ8fFwibnVtYmVyXCI9PT10eXBlb2YgZilyZXR1cm4gZj1cblwiXCIrZixudWxsIT09ZCYmNj09PWQudGFnPyhjKGEsZC5zaWJsaW5nKSxkPWUoZCxmLGgpLGQucmV0dXJuPWEsYT1kKTooYyhhLGQpLGQ9YWYoZixhLm1vZGUsaCksZC5yZXR1cm49YSxhPWQpLGcoYSk7aWYoemYoZikpcmV0dXJuIHYoYSxkLGYsaCk7aWYoaGMoZikpcmV0dXJuIFIoYSxkLGYsaCk7bCYmQmYoYSxmKTtpZihcInVuZGVmaW5lZFwiPT09dHlwZW9mIGYmJiFrKXN3aXRjaChhLnRhZyl7Y2FzZSAxOmNhc2UgMDpoPWEudHlwZSx4KFwiMTUyXCIsaC5kaXNwbGF5TmFtZXx8aC5uYW1lfHxcIkNvbXBvbmVudFwiKX1yZXR1cm4gYyhhLGQpfX12YXIgRGY9Q2YoITApLEVmPUNmKCExKSxGZj17fSxOPXtjdXJyZW50OkZmfSxHZj17Y3VycmVudDpGZn0sSGY9e2N1cnJlbnQ6RmZ9O2Z1bmN0aW9uIElmKGEpe2E9PT1GZj94KFwiMTc0XCIpOnZvaWQgMDtyZXR1cm4gYX1cbmZ1bmN0aW9uIEpmKGEsYil7RyhIZixiLGEpO0coR2YsYSxhKTtHKE4sRmYsYSk7dmFyIGM9Yi5ub2RlVHlwZTtzd2l0Y2goYyl7Y2FzZSA5OmNhc2UgMTE6Yj0oYj1iLmRvY3VtZW50RWxlbWVudCk/Yi5uYW1lc3BhY2VVUkk6aGUobnVsbCxcIlwiKTticmVhaztkZWZhdWx0OmM9OD09PWM/Yi5wYXJlbnROb2RlOmIsYj1jLm5hbWVzcGFjZVVSSXx8bnVsbCxjPWMudGFnTmFtZSxiPWhlKGIsYyl9RihOLGEpO0coTixiLGEpfWZ1bmN0aW9uIEtmKGEpe0YoTixhKTtGKEdmLGEpO0YoSGYsYSl9ZnVuY3Rpb24gTGYoYSl7SWYoSGYuY3VycmVudCk7dmFyIGI9SWYoTi5jdXJyZW50KTt2YXIgYz1oZShiLGEudHlwZSk7YiE9PWMmJihHKEdmLGEsYSksRyhOLGMsYSkpfWZ1bmN0aW9uIE1mKGEpe0dmLmN1cnJlbnQ9PT1hJiYoRihOLGEpLEYoR2YsYSkpfVxudmFyIE5mPTAsT2Y9MixQZj00LFFmPTgsUmY9MTYsU2Y9MzIsVGY9NjQsVWY9MTI4LFZmPVRiLlJlYWN0Q3VycmVudERpc3BhdGNoZXIsV2Y9MCxYZj1udWxsLE89bnVsbCxQPW51bGwsWWY9bnVsbCxRPW51bGwsWmY9bnVsbCwkZj0wLGFnPW51bGwsYmc9MCxjZz0hMSxkZz1udWxsLGVnPTA7ZnVuY3Rpb24gZmcoKXt4KFwiMzIxXCIpfWZ1bmN0aW9uIGdnKGEsYil7aWYobnVsbD09PWIpcmV0dXJuITE7Zm9yKHZhciBjPTA7YzxiLmxlbmd0aCYmYzxhLmxlbmd0aDtjKyspaWYoIWJkKGFbY10sYltjXSkpcmV0dXJuITE7cmV0dXJuITB9XG5mdW5jdGlvbiBoZyhhLGIsYyxkLGUsZil7V2Y9ZjtYZj1iO1A9bnVsbCE9PWE/YS5tZW1vaXplZFN0YXRlOm51bGw7VmYuY3VycmVudD1udWxsPT09UD9pZzpqZztiPWMoZCxlKTtpZihjZyl7ZG8gY2c9ITEsZWcrPTEsUD1udWxsIT09YT9hLm1lbW9pemVkU3RhdGU6bnVsbCxaZj1ZZixhZz1RPU89bnVsbCxWZi5jdXJyZW50PWpnLGI9YyhkLGUpO3doaWxlKGNnKTtkZz1udWxsO2VnPTB9VmYuY3VycmVudD1rZzthPVhmO2EubWVtb2l6ZWRTdGF0ZT1ZZjthLmV4cGlyYXRpb25UaW1lPSRmO2EudXBkYXRlUXVldWU9YWc7YS5lZmZlY3RUYWd8PWJnO2E9bnVsbCE9PU8mJm51bGwhPT1PLm5leHQ7V2Y9MDtaZj1RPVlmPVA9Tz1YZj1udWxsOyRmPTA7YWc9bnVsbDtiZz0wO2E/eChcIjMwMFwiKTp2b2lkIDA7cmV0dXJuIGJ9ZnVuY3Rpb24gbGcoKXtWZi5jdXJyZW50PWtnO1dmPTA7WmY9UT1ZZj1QPU89WGY9bnVsbDskZj0wO2FnPW51bGw7Ymc9MDtjZz0hMTtkZz1udWxsO2VnPTB9XG5mdW5jdGlvbiBtZygpe3ZhciBhPXttZW1vaXplZFN0YXRlOm51bGwsYmFzZVN0YXRlOm51bGwscXVldWU6bnVsbCxiYXNlVXBkYXRlOm51bGwsbmV4dDpudWxsfTtudWxsPT09UT9ZZj1RPWE6UT1RLm5leHQ9YTtyZXR1cm4gUX1mdW5jdGlvbiBuZygpe2lmKG51bGwhPT1aZilRPVpmLFpmPVEubmV4dCxPPVAsUD1udWxsIT09Tz9PLm5leHQ6bnVsbDtlbHNle251bGw9PT1QP3goXCIzMTBcIik6dm9pZCAwO089UDt2YXIgYT17bWVtb2l6ZWRTdGF0ZTpPLm1lbW9pemVkU3RhdGUsYmFzZVN0YXRlOk8uYmFzZVN0YXRlLHF1ZXVlOk8ucXVldWUsYmFzZVVwZGF0ZTpPLmJhc2VVcGRhdGUsbmV4dDpudWxsfTtRPW51bGw9PT1RP1lmPWE6US5uZXh0PWE7UD1PLm5leHR9cmV0dXJuIFF9ZnVuY3Rpb24gb2coYSxiKXtyZXR1cm5cImZ1bmN0aW9uXCI9PT10eXBlb2YgYj9iKGEpOmJ9XG5mdW5jdGlvbiBwZyhhKXt2YXIgYj1uZygpLGM9Yi5xdWV1ZTtudWxsPT09Yz94KFwiMzExXCIpOnZvaWQgMDtjLmxhc3RSZW5kZXJlZFJlZHVjZXI9YTtpZigwPGVnKXt2YXIgZD1jLmRpc3BhdGNoO2lmKG51bGwhPT1kZyl7dmFyIGU9ZGcuZ2V0KGMpO2lmKHZvaWQgMCE9PWUpe2RnLmRlbGV0ZShjKTt2YXIgZj1iLm1lbW9pemVkU3RhdGU7ZG8gZj1hKGYsZS5hY3Rpb24pLGU9ZS5uZXh0O3doaWxlKG51bGwhPT1lKTtiZChmLGIubWVtb2l6ZWRTdGF0ZSl8fChxZz0hMCk7Yi5tZW1vaXplZFN0YXRlPWY7Yi5iYXNlVXBkYXRlPT09Yy5sYXN0JiYoYi5iYXNlU3RhdGU9Zik7Yy5sYXN0UmVuZGVyZWRTdGF0ZT1mO3JldHVybltmLGRdfX1yZXR1cm5bYi5tZW1vaXplZFN0YXRlLGRdfWQ9Yy5sYXN0O3ZhciBnPWIuYmFzZVVwZGF0ZTtmPWIuYmFzZVN0YXRlO251bGwhPT1nPyhudWxsIT09ZCYmKGQubmV4dD1udWxsKSxkPWcubmV4dCk6ZD1udWxsIT09ZD9kLm5leHQ6bnVsbDtpZihudWxsIT09XG5kKXt2YXIgaD1lPW51bGwsbD1kLGs9ITE7ZG97dmFyIG09bC5leHBpcmF0aW9uVGltZTttPFdmPyhrfHwoaz0hMCxoPWcsZT1mKSxtPiRmJiYoJGY9bSkpOmY9bC5lYWdlclJlZHVjZXI9PT1hP2wuZWFnZXJTdGF0ZTphKGYsbC5hY3Rpb24pO2c9bDtsPWwubmV4dH13aGlsZShudWxsIT09bCYmbCE9PWQpO2t8fChoPWcsZT1mKTtiZChmLGIubWVtb2l6ZWRTdGF0ZSl8fChxZz0hMCk7Yi5tZW1vaXplZFN0YXRlPWY7Yi5iYXNlVXBkYXRlPWg7Yi5iYXNlU3RhdGU9ZTtjLmxhc3RSZW5kZXJlZFN0YXRlPWZ9cmV0dXJuW2IubWVtb2l6ZWRTdGF0ZSxjLmRpc3BhdGNoXX1cbmZ1bmN0aW9uIHJnKGEsYixjLGQpe2E9e3RhZzphLGNyZWF0ZTpiLGRlc3Ryb3k6YyxkZXBzOmQsbmV4dDpudWxsfTtudWxsPT09YWc/KGFnPXtsYXN0RWZmZWN0Om51bGx9LGFnLmxhc3RFZmZlY3Q9YS5uZXh0PWEpOihiPWFnLmxhc3RFZmZlY3QsbnVsbD09PWI/YWcubGFzdEVmZmVjdD1hLm5leHQ9YTooYz1iLm5leHQsYi5uZXh0PWEsYS5uZXh0PWMsYWcubGFzdEVmZmVjdD1hKSk7cmV0dXJuIGF9ZnVuY3Rpb24gc2coYSxiLGMsZCl7dmFyIGU9bWcoKTtiZ3w9YTtlLm1lbW9pemVkU3RhdGU9cmcoYixjLHZvaWQgMCx2b2lkIDA9PT1kP251bGw6ZCl9XG5mdW5jdGlvbiB0ZyhhLGIsYyxkKXt2YXIgZT1uZygpO2Q9dm9pZCAwPT09ZD9udWxsOmQ7dmFyIGY9dm9pZCAwO2lmKG51bGwhPT1PKXt2YXIgZz1PLm1lbW9pemVkU3RhdGU7Zj1nLmRlc3Ryb3k7aWYobnVsbCE9PWQmJmdnKGQsZy5kZXBzKSl7cmcoTmYsYyxmLGQpO3JldHVybn19Ymd8PWE7ZS5tZW1vaXplZFN0YXRlPXJnKGIsYyxmLGQpfWZ1bmN0aW9uIHVnKGEsYil7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGIpcmV0dXJuIGE9YSgpLGIoYSksZnVuY3Rpb24oKXtiKG51bGwpfTtpZihudWxsIT09YiYmdm9pZCAwIT09YilyZXR1cm4gYT1hKCksYi5jdXJyZW50PWEsZnVuY3Rpb24oKXtiLmN1cnJlbnQ9bnVsbH19ZnVuY3Rpb24gdmcoKXt9XG5mdW5jdGlvbiB3ZyhhLGIsYyl7MjU+ZWc/dm9pZCAwOngoXCIzMDFcIik7dmFyIGQ9YS5hbHRlcm5hdGU7aWYoYT09PVhmfHxudWxsIT09ZCYmZD09PVhmKWlmKGNnPSEwLGE9e2V4cGlyYXRpb25UaW1lOldmLGFjdGlvbjpjLGVhZ2VyUmVkdWNlcjpudWxsLGVhZ2VyU3RhdGU6bnVsbCxuZXh0Om51bGx9LG51bGw9PT1kZyYmKGRnPW5ldyBNYXApLGM9ZGcuZ2V0KGIpLHZvaWQgMD09PWMpZGcuc2V0KGIsYSk7ZWxzZXtmb3IoYj1jO251bGwhPT1iLm5leHQ7KWI9Yi5uZXh0O2IubmV4dD1hfWVsc2V7b2YoKTt2YXIgZT1sZigpO2U9bWYoZSxhKTt2YXIgZj17ZXhwaXJhdGlvblRpbWU6ZSxhY3Rpb246YyxlYWdlclJlZHVjZXI6bnVsbCxlYWdlclN0YXRlOm51bGwsbmV4dDpudWxsfSxnPWIubGFzdDtpZihudWxsPT09ZylmLm5leHQ9ZjtlbHNle3ZhciBoPWcubmV4dDtudWxsIT09aCYmKGYubmV4dD1oKTtnLm5leHQ9Zn1iLmxhc3Q9ZjtpZigwPT09YS5leHBpcmF0aW9uVGltZSYmKG51bGw9PT1cbmR8fDA9PT1kLmV4cGlyYXRpb25UaW1lKSYmKGQ9Yi5sYXN0UmVuZGVyZWRSZWR1Y2VyLG51bGwhPT1kKSl0cnl7dmFyIGw9Yi5sYXN0UmVuZGVyZWRTdGF0ZSxrPWQobCxjKTtmLmVhZ2VyUmVkdWNlcj1kO2YuZWFnZXJTdGF0ZT1rO2lmKGJkKGssbCkpcmV0dXJufWNhdGNoKG0pe31maW5hbGx5e31xZihhLGUpfX1cbnZhciBrZz17cmVhZENvbnRleHQ6TSx1c2VDYWxsYmFjazpmZyx1c2VDb250ZXh0OmZnLHVzZUVmZmVjdDpmZyx1c2VJbXBlcmF0aXZlSGFuZGxlOmZnLHVzZUxheW91dEVmZmVjdDpmZyx1c2VNZW1vOmZnLHVzZVJlZHVjZXI6ZmcsdXNlUmVmOmZnLHVzZVN0YXRlOmZnLHVzZURlYnVnVmFsdWU6Zmd9LGlnPXtyZWFkQ29udGV4dDpNLHVzZUNhbGxiYWNrOmZ1bmN0aW9uKGEsYil7bWcoKS5tZW1vaXplZFN0YXRlPVthLHZvaWQgMD09PWI/bnVsbDpiXTtyZXR1cm4gYX0sdXNlQ29udGV4dDpNLHVzZUVmZmVjdDpmdW5jdGlvbihhLGIpe3JldHVybiBzZyg1MTYsVWZ8VGYsYSxiKX0sdXNlSW1wZXJhdGl2ZUhhbmRsZTpmdW5jdGlvbihhLGIsYyl7Yz1udWxsIT09YyYmdm9pZCAwIT09Yz9jLmNvbmNhdChbYV0pOm51bGw7cmV0dXJuIHNnKDQsUGZ8U2YsdWcuYmluZChudWxsLGIsYSksYyl9LHVzZUxheW91dEVmZmVjdDpmdW5jdGlvbihhLGIpe3JldHVybiBzZyg0LFBmfFNmLGEsYil9LFxudXNlTWVtbzpmdW5jdGlvbihhLGIpe3ZhciBjPW1nKCk7Yj12b2lkIDA9PT1iP251bGw6YjthPWEoKTtjLm1lbW9pemVkU3RhdGU9W2EsYl07cmV0dXJuIGF9LHVzZVJlZHVjZXI6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPW1nKCk7Yj12b2lkIDAhPT1jP2MoYik6YjtkLm1lbW9pemVkU3RhdGU9ZC5iYXNlU3RhdGU9YjthPWQucXVldWU9e2xhc3Q6bnVsbCxkaXNwYXRjaDpudWxsLGxhc3RSZW5kZXJlZFJlZHVjZXI6YSxsYXN0UmVuZGVyZWRTdGF0ZTpifTthPWEuZGlzcGF0Y2g9d2cuYmluZChudWxsLFhmLGEpO3JldHVybltkLm1lbW9pemVkU3RhdGUsYV19LHVzZVJlZjpmdW5jdGlvbihhKXt2YXIgYj1tZygpO2E9e2N1cnJlbnQ6YX07cmV0dXJuIGIubWVtb2l6ZWRTdGF0ZT1hfSx1c2VTdGF0ZTpmdW5jdGlvbihhKXt2YXIgYj1tZygpO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBhJiYoYT1hKCkpO2IubWVtb2l6ZWRTdGF0ZT1iLmJhc2VTdGF0ZT1hO2E9Yi5xdWV1ZT17bGFzdDpudWxsLGRpc3BhdGNoOm51bGwsXG5sYXN0UmVuZGVyZWRSZWR1Y2VyOm9nLGxhc3RSZW5kZXJlZFN0YXRlOmF9O2E9YS5kaXNwYXRjaD13Zy5iaW5kKG51bGwsWGYsYSk7cmV0dXJuW2IubWVtb2l6ZWRTdGF0ZSxhXX0sdXNlRGVidWdWYWx1ZTp2Z30samc9e3JlYWRDb250ZXh0Ok0sdXNlQ2FsbGJhY2s6ZnVuY3Rpb24oYSxiKXt2YXIgYz1uZygpO2I9dm9pZCAwPT09Yj9udWxsOmI7dmFyIGQ9Yy5tZW1vaXplZFN0YXRlO2lmKG51bGwhPT1kJiZudWxsIT09YiYmZ2coYixkWzFdKSlyZXR1cm4gZFswXTtjLm1lbW9pemVkU3RhdGU9W2EsYl07cmV0dXJuIGF9LHVzZUNvbnRleHQ6TSx1c2VFZmZlY3Q6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGcoNTE2LFVmfFRmLGEsYil9LHVzZUltcGVyYXRpdmVIYW5kbGU6ZnVuY3Rpb24oYSxiLGMpe2M9bnVsbCE9PWMmJnZvaWQgMCE9PWM/Yy5jb25jYXQoW2FdKTpudWxsO3JldHVybiB0Zyg0LFBmfFNmLHVnLmJpbmQobnVsbCxiLGEpLGMpfSx1c2VMYXlvdXRFZmZlY3Q6ZnVuY3Rpb24oYSxcbmIpe3JldHVybiB0Zyg0LFBmfFNmLGEsYil9LHVzZU1lbW86ZnVuY3Rpb24oYSxiKXt2YXIgYz1uZygpO2I9dm9pZCAwPT09Yj9udWxsOmI7dmFyIGQ9Yy5tZW1vaXplZFN0YXRlO2lmKG51bGwhPT1kJiZudWxsIT09YiYmZ2coYixkWzFdKSlyZXR1cm4gZFswXTthPWEoKTtjLm1lbW9pemVkU3RhdGU9W2EsYl07cmV0dXJuIGF9LHVzZVJlZHVjZXI6cGcsdXNlUmVmOmZ1bmN0aW9uKCl7cmV0dXJuIG5nKCkubWVtb2l6ZWRTdGF0ZX0sdXNlU3RhdGU6ZnVuY3Rpb24oYSl7cmV0dXJuIHBnKG9nLGEpfSx1c2VEZWJ1Z1ZhbHVlOnZnfSx4Zz1udWxsLHlnPW51bGwsemc9ITE7XG5mdW5jdGlvbiBBZyhhLGIpe3ZhciBjPUsoNSxudWxsLG51bGwsMCk7Yy5lbGVtZW50VHlwZT1cIkRFTEVURURcIjtjLnR5cGU9XCJERUxFVEVEXCI7Yy5zdGF0ZU5vZGU9YjtjLnJldHVybj1hO2MuZWZmZWN0VGFnPTg7bnVsbCE9PWEubGFzdEVmZmVjdD8oYS5sYXN0RWZmZWN0Lm5leHRFZmZlY3Q9YyxhLmxhc3RFZmZlY3Q9Yyk6YS5maXJzdEVmZmVjdD1hLmxhc3RFZmZlY3Q9Y31mdW5jdGlvbiBCZyhhLGIpe3N3aXRjaChhLnRhZyl7Y2FzZSA1OnZhciBjPWEudHlwZTtiPTEhPT1iLm5vZGVUeXBlfHxjLnRvTG93ZXJDYXNlKCkhPT1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk/bnVsbDpiO3JldHVybiBudWxsIT09Yj8oYS5zdGF0ZU5vZGU9YiwhMCk6ITE7Y2FzZSA2OnJldHVybiBiPVwiXCI9PT1hLnBlbmRpbmdQcm9wc3x8MyE9PWIubm9kZVR5cGU/bnVsbDpiLG51bGwhPT1iPyhhLnN0YXRlTm9kZT1iLCEwKTohMTtjYXNlIDEzOnJldHVybiExO2RlZmF1bHQ6cmV0dXJuITF9fVxuZnVuY3Rpb24gQ2coYSl7aWYoemcpe3ZhciBiPXlnO2lmKGIpe3ZhciBjPWI7aWYoIUJnKGEsYikpe2I9RGUoYyk7aWYoIWJ8fCFCZyhhLGIpKXthLmVmZmVjdFRhZ3w9Mjt6Zz0hMTt4Zz1hO3JldHVybn1BZyh4ZyxjKX14Zz1hO3lnPUVlKGIpfWVsc2UgYS5lZmZlY3RUYWd8PTIsemc9ITEseGc9YX19ZnVuY3Rpb24gRGcoYSl7Zm9yKGE9YS5yZXR1cm47bnVsbCE9PWEmJjUhPT1hLnRhZyYmMyE9PWEudGFnJiYxOCE9PWEudGFnOylhPWEucmV0dXJuO3hnPWF9ZnVuY3Rpb24gRWcoYSl7aWYoYSE9PXhnKXJldHVybiExO2lmKCF6ZylyZXR1cm4gRGcoYSksemc9ITAsITE7dmFyIGI9YS50eXBlO2lmKDUhPT1hLnRhZ3x8XCJoZWFkXCIhPT1iJiZcImJvZHlcIiE9PWImJiF4ZShiLGEubWVtb2l6ZWRQcm9wcykpZm9yKGI9eWc7YjspQWcoYSxiKSxiPURlKGIpO0RnKGEpO3lnPXhnP0RlKGEuc3RhdGVOb2RlKTpudWxsO3JldHVybiEwfWZ1bmN0aW9uIEZnKCl7eWc9eGc9bnVsbDt6Zz0hMX1cbnZhciBHZz1UYi5SZWFjdEN1cnJlbnRPd25lcixxZz0hMTtmdW5jdGlvbiBTKGEsYixjLGQpe2IuY2hpbGQ9bnVsbD09PWE/RWYoYixudWxsLGMsZCk6RGYoYixhLmNoaWxkLGMsZCl9ZnVuY3Rpb24gSGcoYSxiLGMsZCxlKXtjPWMucmVuZGVyO3ZhciBmPWIucmVmO0lnKGIsZSk7ZD1oZyhhLGIsYyxkLGYsZSk7aWYobnVsbCE9PWEmJiFxZylyZXR1cm4gYi51cGRhdGVRdWV1ZT1hLnVwZGF0ZVF1ZXVlLGIuZWZmZWN0VGFnJj0tNTE3LGEuZXhwaXJhdGlvblRpbWU8PWUmJihhLmV4cGlyYXRpb25UaW1lPTApLEpnKGEsYixlKTtiLmVmZmVjdFRhZ3w9MTtTKGEsYixkLGUpO3JldHVybiBiLmNoaWxkfVxuZnVuY3Rpb24gS2coYSxiLGMsZCxlLGYpe2lmKG51bGw9PT1hKXt2YXIgZz1jLnR5cGU7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGcmJiFWZShnKSYmdm9pZCAwPT09Zy5kZWZhdWx0UHJvcHMmJm51bGw9PT1jLmNvbXBhcmUmJnZvaWQgMD09PWMuZGVmYXVsdFByb3BzKXJldHVybiBiLnRhZz0xNSxiLnR5cGU9ZyxMZyhhLGIsZyxkLGUsZik7YT1ZZShjLnR5cGUsbnVsbCxkLG51bGwsYi5tb2RlLGYpO2EucmVmPWIucmVmO2EucmV0dXJuPWI7cmV0dXJuIGIuY2hpbGQ9YX1nPWEuY2hpbGQ7aWYoZTxmJiYoZT1nLm1lbW9pemVkUHJvcHMsYz1jLmNvbXBhcmUsYz1udWxsIT09Yz9jOmRkLGMoZSxkKSYmYS5yZWY9PT1iLnJlZikpcmV0dXJuIEpnKGEsYixmKTtiLmVmZmVjdFRhZ3w9MTthPVhlKGcsZCxmKTthLnJlZj1iLnJlZjthLnJldHVybj1iO3JldHVybiBiLmNoaWxkPWF9XG5mdW5jdGlvbiBMZyhhLGIsYyxkLGUsZil7cmV0dXJuIG51bGwhPT1hJiZkZChhLm1lbW9pemVkUHJvcHMsZCkmJmEucmVmPT09Yi5yZWYmJihxZz0hMSxlPGYpP0pnKGEsYixmKTpNZyhhLGIsYyxkLGYpfWZ1bmN0aW9uIE5nKGEsYil7dmFyIGM9Yi5yZWY7aWYobnVsbD09PWEmJm51bGwhPT1jfHxudWxsIT09YSYmYS5yZWYhPT1jKWIuZWZmZWN0VGFnfD0xMjh9ZnVuY3Rpb24gTWcoYSxiLGMsZCxlKXt2YXIgZj1KKGMpP0llOkguY3VycmVudDtmPUplKGIsZik7SWcoYixlKTtjPWhnKGEsYixjLGQsZixlKTtpZihudWxsIT09YSYmIXFnKXJldHVybiBiLnVwZGF0ZVF1ZXVlPWEudXBkYXRlUXVldWUsYi5lZmZlY3RUYWcmPS01MTcsYS5leHBpcmF0aW9uVGltZTw9ZSYmKGEuZXhwaXJhdGlvblRpbWU9MCksSmcoYSxiLGUpO2IuZWZmZWN0VGFnfD0xO1MoYSxiLGMsZSk7cmV0dXJuIGIuY2hpbGR9XG5mdW5jdGlvbiBPZyhhLGIsYyxkLGUpe2lmKEooYykpe3ZhciBmPSEwO09lKGIpfWVsc2UgZj0hMTtJZyhiLGUpO2lmKG51bGw9PT1iLnN0YXRlTm9kZSludWxsIT09YSYmKGEuYWx0ZXJuYXRlPW51bGwsYi5hbHRlcm5hdGU9bnVsbCxiLmVmZmVjdFRhZ3w9MiksdmYoYixjLGQsZSkseGYoYixjLGQsZSksZD0hMDtlbHNlIGlmKG51bGw9PT1hKXt2YXIgZz1iLnN0YXRlTm9kZSxoPWIubWVtb2l6ZWRQcm9wcztnLnByb3BzPWg7dmFyIGw9Zy5jb250ZXh0LGs9Yy5jb250ZXh0VHlwZTtcIm9iamVjdFwiPT09dHlwZW9mIGsmJm51bGwhPT1rP2s9TShrKTooaz1KKGMpP0llOkguY3VycmVudCxrPUplKGIsaykpO3ZhciBtPWMuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzLHA9XCJmdW5jdGlvblwiPT09dHlwZW9mIG18fFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlO3B8fFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZcblwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHN8fChoIT09ZHx8bCE9PWspJiZ3ZihiLGcsZCxrKTtQZz0hMTt2YXIgdD1iLm1lbW9pemVkU3RhdGU7bD1nLnN0YXRlPXQ7dmFyIEE9Yi51cGRhdGVRdWV1ZTtudWxsIT09QSYmKHlmKGIsQSxkLGcsZSksbD1iLm1lbW9pemVkU3RhdGUpO2ghPT1kfHx0IT09bHx8SS5jdXJyZW50fHxQZz8oXCJmdW5jdGlvblwiPT09dHlwZW9mIG0mJihrZihiLGMsbSxkKSxsPWIubWVtb2l6ZWRTdGF0ZSksKGg9UGd8fHVmKGIsYyxoLGQsdCxsLGspKT8ocHx8XCJmdW5jdGlvblwiIT09dHlwZW9mIGcuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuY29tcG9uZW50V2lsbE1vdW50fHwoXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuY29tcG9uZW50V2lsbE1vdW50JiZnLmNvbXBvbmVudFdpbGxNb3VudCgpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQmJlxuZy5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCkpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmNvbXBvbmVudERpZE1vdW50JiYoYi5lZmZlY3RUYWd8PTQpKTooXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuY29tcG9uZW50RGlkTW91bnQmJihiLmVmZmVjdFRhZ3w9NCksYi5tZW1vaXplZFByb3BzPWQsYi5tZW1vaXplZFN0YXRlPWwpLGcucHJvcHM9ZCxnLnN0YXRlPWwsZy5jb250ZXh0PWssZD1oKTooXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuY29tcG9uZW50RGlkTW91bnQmJihiLmVmZmVjdFRhZ3w9NCksZD0hMSl9ZWxzZSBnPWIuc3RhdGVOb2RlLGg9Yi5tZW1vaXplZFByb3BzLGcucHJvcHM9Yi50eXBlPT09Yi5lbGVtZW50VHlwZT9oOkwoYi50eXBlLGgpLGw9Zy5jb250ZXh0LGs9Yy5jb250ZXh0VHlwZSxcIm9iamVjdFwiPT09dHlwZW9mIGsmJm51bGwhPT1rP2s9TShrKTooaz1KKGMpP0llOkguY3VycmVudCxrPUplKGIsaykpLG09Yy5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMsKHA9XCJmdW5jdGlvblwiPT09XG50eXBlb2YgbXx8XCJmdW5jdGlvblwiPT09dHlwZW9mIGcuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUpfHxcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5VTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wc3x8KGghPT1kfHxsIT09aykmJndmKGIsZyxkLGspLFBnPSExLGw9Yi5tZW1vaXplZFN0YXRlLHQ9Zy5zdGF0ZT1sLEE9Yi51cGRhdGVRdWV1ZSxudWxsIT09QSYmKHlmKGIsQSxkLGcsZSksdD1iLm1lbW9pemVkU3RhdGUpLGghPT1kfHxsIT09dHx8SS5jdXJyZW50fHxQZz8oXCJmdW5jdGlvblwiPT09dHlwZW9mIG0mJihrZihiLGMsbSxkKSx0PWIubWVtb2l6ZWRTdGF0ZSksKG09UGd8fHVmKGIsYyxoLGQsbCx0LGspKT8ocHx8XCJmdW5jdGlvblwiIT09dHlwZW9mIGcuVU5TQUZFX2NvbXBvbmVudFdpbGxVcGRhdGUmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmNvbXBvbmVudFdpbGxVcGRhdGV8fChcImZ1bmN0aW9uXCI9PT1cbnR5cGVvZiBnLmNvbXBvbmVudFdpbGxVcGRhdGUmJmcuY29tcG9uZW50V2lsbFVwZGF0ZShkLHQsayksXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuVU5TQUZFX2NvbXBvbmVudFdpbGxVcGRhdGUmJmcuVU5TQUZFX2NvbXBvbmVudFdpbGxVcGRhdGUoZCx0LGspKSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5jb21wb25lbnREaWRVcGRhdGUmJihiLmVmZmVjdFRhZ3w9NCksXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUmJihiLmVmZmVjdFRhZ3w9MjU2KSk6KFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmNvbXBvbmVudERpZFVwZGF0ZXx8aD09PWEubWVtb2l6ZWRQcm9wcyYmbD09PWEubWVtb2l6ZWRTdGF0ZXx8KGIuZWZmZWN0VGFnfD00KSxcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZXx8aD09PWEubWVtb2l6ZWRQcm9wcyYmbD09PWEubWVtb2l6ZWRTdGF0ZXx8KGIuZWZmZWN0VGFnfD0yNTYpLGIubWVtb2l6ZWRQcm9wcz1kLGIubWVtb2l6ZWRTdGF0ZT1cbnQpLGcucHJvcHM9ZCxnLnN0YXRlPXQsZy5jb250ZXh0PWssZD1tKTooXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuY29tcG9uZW50RGlkVXBkYXRlfHxoPT09YS5tZW1vaXplZFByb3BzJiZsPT09YS5tZW1vaXplZFN0YXRlfHwoYi5lZmZlY3RUYWd8PTQpLFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlfHxoPT09YS5tZW1vaXplZFByb3BzJiZsPT09YS5tZW1vaXplZFN0YXRlfHwoYi5lZmZlY3RUYWd8PTI1NiksZD0hMSk7cmV0dXJuIFFnKGEsYixjLGQsZixlKX1cbmZ1bmN0aW9uIFFnKGEsYixjLGQsZSxmKXtOZyhhLGIpO3ZhciBnPTAhPT0oYi5lZmZlY3RUYWcmNjQpO2lmKCFkJiYhZylyZXR1cm4gZSYmUGUoYixjLCExKSxKZyhhLGIsZik7ZD1iLnN0YXRlTm9kZTtHZy5jdXJyZW50PWI7dmFyIGg9ZyYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGMuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yP251bGw6ZC5yZW5kZXIoKTtiLmVmZmVjdFRhZ3w9MTtudWxsIT09YSYmZz8oYi5jaGlsZD1EZihiLGEuY2hpbGQsbnVsbCxmKSxiLmNoaWxkPURmKGIsbnVsbCxoLGYpKTpTKGEsYixoLGYpO2IubWVtb2l6ZWRTdGF0ZT1kLnN0YXRlO2UmJlBlKGIsYywhMCk7cmV0dXJuIGIuY2hpbGR9ZnVuY3Rpb24gUmcoYSl7dmFyIGI9YS5zdGF0ZU5vZGU7Yi5wZW5kaW5nQ29udGV4dD9NZShhLGIucGVuZGluZ0NvbnRleHQsYi5wZW5kaW5nQ29udGV4dCE9PWIuY29udGV4dCk6Yi5jb250ZXh0JiZNZShhLGIuY29udGV4dCwhMSk7SmYoYSxiLmNvbnRhaW5lckluZm8pfVxuZnVuY3Rpb24gU2coYSxiLGMpe3ZhciBkPWIubW9kZSxlPWIucGVuZGluZ1Byb3BzLGY9Yi5tZW1vaXplZFN0YXRlO2lmKDA9PT0oYi5lZmZlY3RUYWcmNjQpKXtmPW51bGw7dmFyIGc9ITF9ZWxzZSBmPXt0aW1lZE91dEF0Om51bGwhPT1mP2YudGltZWRPdXRBdDowfSxnPSEwLGIuZWZmZWN0VGFnJj0tNjU7aWYobnVsbD09PWEpaWYoZyl7dmFyIGg9ZS5mYWxsYmFjazthPVplKG51bGwsZCwwLG51bGwpOzA9PT0oYi5tb2RlJjEpJiYoYS5jaGlsZD1udWxsIT09Yi5tZW1vaXplZFN0YXRlP2IuY2hpbGQuY2hpbGQ6Yi5jaGlsZCk7ZD1aZShoLGQsYyxudWxsKTthLnNpYmxpbmc9ZDtjPWE7Yy5yZXR1cm49ZC5yZXR1cm49Yn1lbHNlIGM9ZD1FZihiLG51bGwsZS5jaGlsZHJlbixjKTtlbHNlIG51bGwhPT1hLm1lbW9pemVkU3RhdGU/KGQ9YS5jaGlsZCxoPWQuc2libGluZyxnPyhjPWUuZmFsbGJhY2ssZT1YZShkLGQucGVuZGluZ1Byb3BzLDApLDA9PT0oYi5tb2RlJjEpJiYoZz1udWxsIT09XG5iLm1lbW9pemVkU3RhdGU/Yi5jaGlsZC5jaGlsZDpiLmNoaWxkLGchPT1kLmNoaWxkJiYoZS5jaGlsZD1nKSksZD1lLnNpYmxpbmc9WGUoaCxjLGguZXhwaXJhdGlvblRpbWUpLGM9ZSxlLmNoaWxkRXhwaXJhdGlvblRpbWU9MCxjLnJldHVybj1kLnJldHVybj1iKTpjPWQ9RGYoYixkLmNoaWxkLGUuY2hpbGRyZW4sYykpOihoPWEuY2hpbGQsZz8oZz1lLmZhbGxiYWNrLGU9WmUobnVsbCxkLDAsbnVsbCksZS5jaGlsZD1oLDA9PT0oYi5tb2RlJjEpJiYoZS5jaGlsZD1udWxsIT09Yi5tZW1vaXplZFN0YXRlP2IuY2hpbGQuY2hpbGQ6Yi5jaGlsZCksZD1lLnNpYmxpbmc9WmUoZyxkLGMsbnVsbCksZC5lZmZlY3RUYWd8PTIsYz1lLGUuY2hpbGRFeHBpcmF0aW9uVGltZT0wLGMucmV0dXJuPWQucmV0dXJuPWIpOmQ9Yz1EZihiLGgsZS5jaGlsZHJlbixjKSksYi5zdGF0ZU5vZGU9YS5zdGF0ZU5vZGU7Yi5tZW1vaXplZFN0YXRlPWY7Yi5jaGlsZD1jO3JldHVybiBkfVxuZnVuY3Rpb24gSmcoYSxiLGMpe251bGwhPT1hJiYoYi5jb250ZXh0RGVwZW5kZW5jaWVzPWEuY29udGV4dERlcGVuZGVuY2llcyk7aWYoYi5jaGlsZEV4cGlyYXRpb25UaW1lPGMpcmV0dXJuIG51bGw7bnVsbCE9PWEmJmIuY2hpbGQhPT1hLmNoaWxkP3goXCIxNTNcIik6dm9pZCAwO2lmKG51bGwhPT1iLmNoaWxkKXthPWIuY2hpbGQ7Yz1YZShhLGEucGVuZGluZ1Byb3BzLGEuZXhwaXJhdGlvblRpbWUpO2IuY2hpbGQ9Yztmb3IoYy5yZXR1cm49YjtudWxsIT09YS5zaWJsaW5nOylhPWEuc2libGluZyxjPWMuc2libGluZz1YZShhLGEucGVuZGluZ1Byb3BzLGEuZXhwaXJhdGlvblRpbWUpLGMucmV0dXJuPWI7Yy5zaWJsaW5nPW51bGx9cmV0dXJuIGIuY2hpbGR9XG5mdW5jdGlvbiBUZyhhLGIsYyl7dmFyIGQ9Yi5leHBpcmF0aW9uVGltZTtpZihudWxsIT09YSlpZihhLm1lbW9pemVkUHJvcHMhPT1iLnBlbmRpbmdQcm9wc3x8SS5jdXJyZW50KXFnPSEwO2Vsc2V7aWYoZDxjKXtxZz0hMTtzd2l0Y2goYi50YWcpe2Nhc2UgMzpSZyhiKTtGZygpO2JyZWFrO2Nhc2UgNTpMZihiKTticmVhaztjYXNlIDE6SihiLnR5cGUpJiZPZShiKTticmVhaztjYXNlIDQ6SmYoYixiLnN0YXRlTm9kZS5jb250YWluZXJJbmZvKTticmVhaztjYXNlIDEwOlVnKGIsYi5tZW1vaXplZFByb3BzLnZhbHVlKTticmVhaztjYXNlIDEzOmlmKG51bGwhPT1iLm1lbW9pemVkU3RhdGUpe2Q9Yi5jaGlsZC5jaGlsZEV4cGlyYXRpb25UaW1lO2lmKDAhPT1kJiZkPj1jKXJldHVybiBTZyhhLGIsYyk7Yj1KZyhhLGIsYyk7cmV0dXJuIG51bGwhPT1iP2Iuc2libGluZzpudWxsfX1yZXR1cm4gSmcoYSxiLGMpfX1lbHNlIHFnPSExO2IuZXhwaXJhdGlvblRpbWU9MDtzd2l0Y2goYi50YWcpe2Nhc2UgMjpkPVxuYi5lbGVtZW50VHlwZTtudWxsIT09YSYmKGEuYWx0ZXJuYXRlPW51bGwsYi5hbHRlcm5hdGU9bnVsbCxiLmVmZmVjdFRhZ3w9Mik7YT1iLnBlbmRpbmdQcm9wczt2YXIgZT1KZShiLEguY3VycmVudCk7SWcoYixjKTtlPWhnKG51bGwsYixkLGEsZSxjKTtiLmVmZmVjdFRhZ3w9MTtpZihcIm9iamVjdFwiPT09dHlwZW9mIGUmJm51bGwhPT1lJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgZS5yZW5kZXImJnZvaWQgMD09PWUuJCR0eXBlb2Ype2IudGFnPTE7bGcoKTtpZihKKGQpKXt2YXIgZj0hMDtPZShiKX1lbHNlIGY9ITE7Yi5tZW1vaXplZFN0YXRlPW51bGwhPT1lLnN0YXRlJiZ2b2lkIDAhPT1lLnN0YXRlP2Uuc3RhdGU6bnVsbDt2YXIgZz1kLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcztcImZ1bmN0aW9uXCI9PT10eXBlb2YgZyYma2YoYixkLGcsYSk7ZS51cGRhdGVyPXRmO2Iuc3RhdGVOb2RlPWU7ZS5fcmVhY3RJbnRlcm5hbEZpYmVyPWI7eGYoYixkLGEsYyk7Yj1RZyhudWxsLGIsZCwhMCxmLFxuYyl9ZWxzZSBiLnRhZz0wLFMobnVsbCxiLGUsYyksYj1iLmNoaWxkO3JldHVybiBiO2Nhc2UgMTY6ZT1iLmVsZW1lbnRUeXBlO251bGwhPT1hJiYoYS5hbHRlcm5hdGU9bnVsbCxiLmFsdGVybmF0ZT1udWxsLGIuZWZmZWN0VGFnfD0yKTtmPWIucGVuZGluZ1Byb3BzO2E9aGYoZSk7Yi50eXBlPWE7ZT1iLnRhZz1XZShhKTtmPUwoYSxmKTtnPXZvaWQgMDtzd2l0Y2goZSl7Y2FzZSAwOmc9TWcobnVsbCxiLGEsZixjKTticmVhaztjYXNlIDE6Zz1PZyhudWxsLGIsYSxmLGMpO2JyZWFrO2Nhc2UgMTE6Zz1IZyhudWxsLGIsYSxmLGMpO2JyZWFrO2Nhc2UgMTQ6Zz1LZyhudWxsLGIsYSxMKGEudHlwZSxmKSxkLGMpO2JyZWFrO2RlZmF1bHQ6eChcIjMwNlwiLGEsXCJcIil9cmV0dXJuIGc7Y2FzZSAwOnJldHVybiBkPWIudHlwZSxlPWIucGVuZGluZ1Byb3BzLGU9Yi5lbGVtZW50VHlwZT09PWQ/ZTpMKGQsZSksTWcoYSxiLGQsZSxjKTtjYXNlIDE6cmV0dXJuIGQ9Yi50eXBlLGU9Yi5wZW5kaW5nUHJvcHMsXG5lPWIuZWxlbWVudFR5cGU9PT1kP2U6TChkLGUpLE9nKGEsYixkLGUsYyk7Y2FzZSAzOlJnKGIpO2Q9Yi51cGRhdGVRdWV1ZTtudWxsPT09ZD94KFwiMjgyXCIpOnZvaWQgMDtlPWIubWVtb2l6ZWRTdGF0ZTtlPW51bGwhPT1lP2UuZWxlbWVudDpudWxsO3lmKGIsZCxiLnBlbmRpbmdQcm9wcyxudWxsLGMpO2Q9Yi5tZW1vaXplZFN0YXRlLmVsZW1lbnQ7aWYoZD09PWUpRmcoKSxiPUpnKGEsYixjKTtlbHNle2U9Yi5zdGF0ZU5vZGU7aWYoZT0obnVsbD09PWF8fG51bGw9PT1hLmNoaWxkKSYmZS5oeWRyYXRlKXlnPUVlKGIuc3RhdGVOb2RlLmNvbnRhaW5lckluZm8pLHhnPWIsZT16Zz0hMDtlPyhiLmVmZmVjdFRhZ3w9MixiLmNoaWxkPUVmKGIsbnVsbCxkLGMpKTooUyhhLGIsZCxjKSxGZygpKTtiPWIuY2hpbGR9cmV0dXJuIGI7Y2FzZSA1OnJldHVybiBMZihiKSxudWxsPT09YSYmQ2coYiksZD1iLnR5cGUsZT1iLnBlbmRpbmdQcm9wcyxmPW51bGwhPT1hP2EubWVtb2l6ZWRQcm9wczpudWxsLFxuZz1lLmNoaWxkcmVuLHhlKGQsZSk/Zz1udWxsOm51bGwhPT1mJiZ4ZShkLGYpJiYoYi5lZmZlY3RUYWd8PTE2KSxOZyhhLGIpLDEhPT1jJiZiLm1vZGUmMSYmZS5oaWRkZW4/KGIuZXhwaXJhdGlvblRpbWU9Yi5jaGlsZEV4cGlyYXRpb25UaW1lPTEsYj1udWxsKTooUyhhLGIsZyxjKSxiPWIuY2hpbGQpLGI7Y2FzZSA2OnJldHVybiBudWxsPT09YSYmQ2coYiksbnVsbDtjYXNlIDEzOnJldHVybiBTZyhhLGIsYyk7Y2FzZSA0OnJldHVybiBKZihiLGIuc3RhdGVOb2RlLmNvbnRhaW5lckluZm8pLGQ9Yi5wZW5kaW5nUHJvcHMsbnVsbD09PWE/Yi5jaGlsZD1EZihiLG51bGwsZCxjKTpTKGEsYixkLGMpLGIuY2hpbGQ7Y2FzZSAxMTpyZXR1cm4gZD1iLnR5cGUsZT1iLnBlbmRpbmdQcm9wcyxlPWIuZWxlbWVudFR5cGU9PT1kP2U6TChkLGUpLEhnKGEsYixkLGUsYyk7Y2FzZSA3OnJldHVybiBTKGEsYixiLnBlbmRpbmdQcm9wcyxjKSxiLmNoaWxkO2Nhc2UgODpyZXR1cm4gUyhhLGIsYi5wZW5kaW5nUHJvcHMuY2hpbGRyZW4sXG5jKSxiLmNoaWxkO2Nhc2UgMTI6cmV0dXJuIFMoYSxiLGIucGVuZGluZ1Byb3BzLmNoaWxkcmVuLGMpLGIuY2hpbGQ7Y2FzZSAxMDphOntkPWIudHlwZS5fY29udGV4dDtlPWIucGVuZGluZ1Byb3BzO2c9Yi5tZW1vaXplZFByb3BzO2Y9ZS52YWx1ZTtVZyhiLGYpO2lmKG51bGwhPT1nKXt2YXIgaD1nLnZhbHVlO2Y9YmQoaCxmKT8wOihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZC5fY2FsY3VsYXRlQ2hhbmdlZEJpdHM/ZC5fY2FsY3VsYXRlQ2hhbmdlZEJpdHMoaCxmKToxMDczNzQxODIzKXwwO2lmKDA9PT1mKXtpZihnLmNoaWxkcmVuPT09ZS5jaGlsZHJlbiYmIUkuY3VycmVudCl7Yj1KZyhhLGIsYyk7YnJlYWsgYX19ZWxzZSBmb3IoaD1iLmNoaWxkLG51bGwhPT1oJiYoaC5yZXR1cm49Yik7bnVsbCE9PWg7KXt2YXIgbD1oLmNvbnRleHREZXBlbmRlbmNpZXM7aWYobnVsbCE9PWwpe2c9aC5jaGlsZDtmb3IodmFyIGs9bC5maXJzdDtudWxsIT09azspe2lmKGsuY29udGV4dD09PWQmJjAhPT1cbihrLm9ic2VydmVkQml0cyZmKSl7MT09PWgudGFnJiYoaz1uZihjKSxrLnRhZz1zZixwZihoLGspKTtoLmV4cGlyYXRpb25UaW1lPGMmJihoLmV4cGlyYXRpb25UaW1lPWMpO2s9aC5hbHRlcm5hdGU7bnVsbCE9PWsmJmsuZXhwaXJhdGlvblRpbWU8YyYmKGsuZXhwaXJhdGlvblRpbWU9Yyk7az1jO2Zvcih2YXIgbT1oLnJldHVybjtudWxsIT09bTspe3ZhciBwPW0uYWx0ZXJuYXRlO2lmKG0uY2hpbGRFeHBpcmF0aW9uVGltZTxrKW0uY2hpbGRFeHBpcmF0aW9uVGltZT1rLG51bGwhPT1wJiZwLmNoaWxkRXhwaXJhdGlvblRpbWU8ayYmKHAuY2hpbGRFeHBpcmF0aW9uVGltZT1rKTtlbHNlIGlmKG51bGwhPT1wJiZwLmNoaWxkRXhwaXJhdGlvblRpbWU8aylwLmNoaWxkRXhwaXJhdGlvblRpbWU9aztlbHNlIGJyZWFrO209bS5yZXR1cm59bC5leHBpcmF0aW9uVGltZTxjJiYobC5leHBpcmF0aW9uVGltZT1jKTticmVha31rPWsubmV4dH19ZWxzZSBnPTEwPT09aC50YWc/aC50eXBlPT09Yi50eXBlP1xubnVsbDpoLmNoaWxkOmguY2hpbGQ7aWYobnVsbCE9PWcpZy5yZXR1cm49aDtlbHNlIGZvcihnPWg7bnVsbCE9PWc7KXtpZihnPT09Yil7Zz1udWxsO2JyZWFrfWg9Zy5zaWJsaW5nO2lmKG51bGwhPT1oKXtoLnJldHVybj1nLnJldHVybjtnPWg7YnJlYWt9Zz1nLnJldHVybn1oPWd9fVMoYSxiLGUuY2hpbGRyZW4sYyk7Yj1iLmNoaWxkfXJldHVybiBiO2Nhc2UgOTpyZXR1cm4gZT1iLnR5cGUsZj1iLnBlbmRpbmdQcm9wcyxkPWYuY2hpbGRyZW4sSWcoYixjKSxlPU0oZSxmLnVuc3RhYmxlX29ic2VydmVkQml0cyksZD1kKGUpLGIuZWZmZWN0VGFnfD0xLFMoYSxiLGQsYyksYi5jaGlsZDtjYXNlIDE0OnJldHVybiBlPWIudHlwZSxmPUwoZSxiLnBlbmRpbmdQcm9wcyksZj1MKGUudHlwZSxmKSxLZyhhLGIsZSxmLGQsYyk7Y2FzZSAxNTpyZXR1cm4gTGcoYSxiLGIudHlwZSxiLnBlbmRpbmdQcm9wcyxkLGMpO2Nhc2UgMTc6cmV0dXJuIGQ9Yi50eXBlLGU9Yi5wZW5kaW5nUHJvcHMsZT1iLmVsZW1lbnRUeXBlPT09XG5kP2U6TChkLGUpLG51bGwhPT1hJiYoYS5hbHRlcm5hdGU9bnVsbCxiLmFsdGVybmF0ZT1udWxsLGIuZWZmZWN0VGFnfD0yKSxiLnRhZz0xLEooZCk/KGE9ITAsT2UoYikpOmE9ITEsSWcoYixjKSx2ZihiLGQsZSxjKSx4ZihiLGQsZSxjKSxRZyhudWxsLGIsZCwhMCxhLGMpfXgoXCIxNTZcIil9dmFyIFZnPXtjdXJyZW50Om51bGx9LFdnPW51bGwsWGc9bnVsbCxZZz1udWxsO2Z1bmN0aW9uIFVnKGEsYil7dmFyIGM9YS50eXBlLl9jb250ZXh0O0coVmcsYy5fY3VycmVudFZhbHVlLGEpO2MuX2N1cnJlbnRWYWx1ZT1ifWZ1bmN0aW9uIFpnKGEpe3ZhciBiPVZnLmN1cnJlbnQ7RihWZyxhKTthLnR5cGUuX2NvbnRleHQuX2N1cnJlbnRWYWx1ZT1ifWZ1bmN0aW9uIElnKGEsYil7V2c9YTtZZz1YZz1udWxsO3ZhciBjPWEuY29udGV4dERlcGVuZGVuY2llcztudWxsIT09YyYmYy5leHBpcmF0aW9uVGltZT49YiYmKHFnPSEwKTthLmNvbnRleHREZXBlbmRlbmNpZXM9bnVsbH1cbmZ1bmN0aW9uIE0oYSxiKXtpZihZZyE9PWEmJiExIT09YiYmMCE9PWIpe2lmKFwibnVtYmVyXCIhPT10eXBlb2YgYnx8MTA3Mzc0MTgyMz09PWIpWWc9YSxiPTEwNzM3NDE4MjM7Yj17Y29udGV4dDphLG9ic2VydmVkQml0czpiLG5leHQ6bnVsbH07bnVsbD09PVhnPyhudWxsPT09V2c/eChcIjMwOFwiKTp2b2lkIDAsWGc9YixXZy5jb250ZXh0RGVwZW5kZW5jaWVzPXtmaXJzdDpiLGV4cGlyYXRpb25UaW1lOjB9KTpYZz1YZy5uZXh0PWJ9cmV0dXJuIGEuX2N1cnJlbnRWYWx1ZX12YXIgJGc9MCxyZj0xLHNmPTIsYWg9MyxQZz0hMTtmdW5jdGlvbiBiaChhKXtyZXR1cm57YmFzZVN0YXRlOmEsZmlyc3RVcGRhdGU6bnVsbCxsYXN0VXBkYXRlOm51bGwsZmlyc3RDYXB0dXJlZFVwZGF0ZTpudWxsLGxhc3RDYXB0dXJlZFVwZGF0ZTpudWxsLGZpcnN0RWZmZWN0Om51bGwsbGFzdEVmZmVjdDpudWxsLGZpcnN0Q2FwdHVyZWRFZmZlY3Q6bnVsbCxsYXN0Q2FwdHVyZWRFZmZlY3Q6bnVsbH19XG5mdW5jdGlvbiBjaChhKXtyZXR1cm57YmFzZVN0YXRlOmEuYmFzZVN0YXRlLGZpcnN0VXBkYXRlOmEuZmlyc3RVcGRhdGUsbGFzdFVwZGF0ZTphLmxhc3RVcGRhdGUsZmlyc3RDYXB0dXJlZFVwZGF0ZTpudWxsLGxhc3RDYXB0dXJlZFVwZGF0ZTpudWxsLGZpcnN0RWZmZWN0Om51bGwsbGFzdEVmZmVjdDpudWxsLGZpcnN0Q2FwdHVyZWRFZmZlY3Q6bnVsbCxsYXN0Q2FwdHVyZWRFZmZlY3Q6bnVsbH19ZnVuY3Rpb24gbmYoYSl7cmV0dXJue2V4cGlyYXRpb25UaW1lOmEsdGFnOiRnLHBheWxvYWQ6bnVsbCxjYWxsYmFjazpudWxsLG5leHQ6bnVsbCxuZXh0RWZmZWN0Om51bGx9fWZ1bmN0aW9uIGRoKGEsYil7bnVsbD09PWEubGFzdFVwZGF0ZT9hLmZpcnN0VXBkYXRlPWEubGFzdFVwZGF0ZT1iOihhLmxhc3RVcGRhdGUubmV4dD1iLGEubGFzdFVwZGF0ZT1iKX1cbmZ1bmN0aW9uIHBmKGEsYil7dmFyIGM9YS5hbHRlcm5hdGU7aWYobnVsbD09PWMpe3ZhciBkPWEudXBkYXRlUXVldWU7dmFyIGU9bnVsbDtudWxsPT09ZCYmKGQ9YS51cGRhdGVRdWV1ZT1iaChhLm1lbW9pemVkU3RhdGUpKX1lbHNlIGQ9YS51cGRhdGVRdWV1ZSxlPWMudXBkYXRlUXVldWUsbnVsbD09PWQ/bnVsbD09PWU/KGQ9YS51cGRhdGVRdWV1ZT1iaChhLm1lbW9pemVkU3RhdGUpLGU9Yy51cGRhdGVRdWV1ZT1iaChjLm1lbW9pemVkU3RhdGUpKTpkPWEudXBkYXRlUXVldWU9Y2goZSk6bnVsbD09PWUmJihlPWMudXBkYXRlUXVldWU9Y2goZCkpO251bGw9PT1lfHxkPT09ZT9kaChkLGIpOm51bGw9PT1kLmxhc3RVcGRhdGV8fG51bGw9PT1lLmxhc3RVcGRhdGU/KGRoKGQsYiksZGgoZSxiKSk6KGRoKGQsYiksZS5sYXN0VXBkYXRlPWIpfVxuZnVuY3Rpb24gZWgoYSxiKXt2YXIgYz1hLnVwZGF0ZVF1ZXVlO2M9bnVsbD09PWM/YS51cGRhdGVRdWV1ZT1iaChhLm1lbW9pemVkU3RhdGUpOmZoKGEsYyk7bnVsbD09PWMubGFzdENhcHR1cmVkVXBkYXRlP2MuZmlyc3RDYXB0dXJlZFVwZGF0ZT1jLmxhc3RDYXB0dXJlZFVwZGF0ZT1iOihjLmxhc3RDYXB0dXJlZFVwZGF0ZS5uZXh0PWIsYy5sYXN0Q2FwdHVyZWRVcGRhdGU9Yil9ZnVuY3Rpb24gZmgoYSxiKXt2YXIgYz1hLmFsdGVybmF0ZTtudWxsIT09YyYmYj09PWMudXBkYXRlUXVldWUmJihiPWEudXBkYXRlUXVldWU9Y2goYikpO3JldHVybiBifVxuZnVuY3Rpb24gZ2goYSxiLGMsZCxlLGYpe3N3aXRjaChjLnRhZyl7Y2FzZSByZjpyZXR1cm4gYT1jLnBheWxvYWQsXCJmdW5jdGlvblwiPT09dHlwZW9mIGE/YS5jYWxsKGYsZCxlKTphO2Nhc2UgYWg6YS5lZmZlY3RUYWc9YS5lZmZlY3RUYWcmLTIwNDl8NjQ7Y2FzZSAkZzphPWMucGF5bG9hZDtlPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBhP2EuY2FsbChmLGQsZSk6YTtpZihudWxsPT09ZXx8dm9pZCAwPT09ZSlicmVhaztyZXR1cm4gbih7fSxkLGUpO2Nhc2Ugc2Y6UGc9ITB9cmV0dXJuIGR9XG5mdW5jdGlvbiB5ZihhLGIsYyxkLGUpe1BnPSExO2I9ZmgoYSxiKTtmb3IodmFyIGY9Yi5iYXNlU3RhdGUsZz1udWxsLGg9MCxsPWIuZmlyc3RVcGRhdGUsaz1mO251bGwhPT1sOyl7dmFyIG09bC5leHBpcmF0aW9uVGltZTttPGU/KG51bGw9PT1nJiYoZz1sLGY9ayksaDxtJiYoaD1tKSk6KGs9Z2goYSxiLGwsayxjLGQpLG51bGwhPT1sLmNhbGxiYWNrJiYoYS5lZmZlY3RUYWd8PTMyLGwubmV4dEVmZmVjdD1udWxsLG51bGw9PT1iLmxhc3RFZmZlY3Q/Yi5maXJzdEVmZmVjdD1iLmxhc3RFZmZlY3Q9bDooYi5sYXN0RWZmZWN0Lm5leHRFZmZlY3Q9bCxiLmxhc3RFZmZlY3Q9bCkpKTtsPWwubmV4dH1tPW51bGw7Zm9yKGw9Yi5maXJzdENhcHR1cmVkVXBkYXRlO251bGwhPT1sOyl7dmFyIHA9bC5leHBpcmF0aW9uVGltZTtwPGU/KG51bGw9PT1tJiYobT1sLG51bGw9PT1nJiYoZj1rKSksaDxwJiYoaD1wKSk6KGs9Z2goYSxiLGwsayxjLGQpLG51bGwhPT1sLmNhbGxiYWNrJiYoYS5lZmZlY3RUYWd8PVxuMzIsbC5uZXh0RWZmZWN0PW51bGwsbnVsbD09PWIubGFzdENhcHR1cmVkRWZmZWN0P2IuZmlyc3RDYXB0dXJlZEVmZmVjdD1iLmxhc3RDYXB0dXJlZEVmZmVjdD1sOihiLmxhc3RDYXB0dXJlZEVmZmVjdC5uZXh0RWZmZWN0PWwsYi5sYXN0Q2FwdHVyZWRFZmZlY3Q9bCkpKTtsPWwubmV4dH1udWxsPT09ZyYmKGIubGFzdFVwZGF0ZT1udWxsKTtudWxsPT09bT9iLmxhc3RDYXB0dXJlZFVwZGF0ZT1udWxsOmEuZWZmZWN0VGFnfD0zMjtudWxsPT09ZyYmbnVsbD09PW0mJihmPWspO2IuYmFzZVN0YXRlPWY7Yi5maXJzdFVwZGF0ZT1nO2IuZmlyc3RDYXB0dXJlZFVwZGF0ZT1tO2EuZXhwaXJhdGlvblRpbWU9aDthLm1lbW9pemVkU3RhdGU9a31cbmZ1bmN0aW9uIGhoKGEsYixjKXtudWxsIT09Yi5maXJzdENhcHR1cmVkVXBkYXRlJiYobnVsbCE9PWIubGFzdFVwZGF0ZSYmKGIubGFzdFVwZGF0ZS5uZXh0PWIuZmlyc3RDYXB0dXJlZFVwZGF0ZSxiLmxhc3RVcGRhdGU9Yi5sYXN0Q2FwdHVyZWRVcGRhdGUpLGIuZmlyc3RDYXB0dXJlZFVwZGF0ZT1iLmxhc3RDYXB0dXJlZFVwZGF0ZT1udWxsKTtpaChiLmZpcnN0RWZmZWN0LGMpO2IuZmlyc3RFZmZlY3Q9Yi5sYXN0RWZmZWN0PW51bGw7aWgoYi5maXJzdENhcHR1cmVkRWZmZWN0LGMpO2IuZmlyc3RDYXB0dXJlZEVmZmVjdD1iLmxhc3RDYXB0dXJlZEVmZmVjdD1udWxsfWZ1bmN0aW9uIGloKGEsYil7Zm9yKDtudWxsIT09YTspe3ZhciBjPWEuY2FsbGJhY2s7aWYobnVsbCE9PWMpe2EuY2FsbGJhY2s9bnVsbDt2YXIgZD1iO1wiZnVuY3Rpb25cIiE9PXR5cGVvZiBjP3goXCIxOTFcIixjKTp2b2lkIDA7Yy5jYWxsKGQpfWE9YS5uZXh0RWZmZWN0fX1cbmZ1bmN0aW9uIGpoKGEsYil7cmV0dXJue3ZhbHVlOmEsc291cmNlOmIsc3RhY2s6amMoYil9fWZ1bmN0aW9uIGtoKGEpe2EuZWZmZWN0VGFnfD00fXZhciBsaD12b2lkIDAsbWg9dm9pZCAwLG5oPXZvaWQgMCxvaD12b2lkIDA7bGg9ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9Yi5jaGlsZDtudWxsIT09Yzspe2lmKDU9PT1jLnRhZ3x8Nj09PWMudGFnKWEuYXBwZW5kQ2hpbGQoYy5zdGF0ZU5vZGUpO2Vsc2UgaWYoNCE9PWMudGFnJiZudWxsIT09Yy5jaGlsZCl7Yy5jaGlsZC5yZXR1cm49YztjPWMuY2hpbGQ7Y29udGludWV9aWYoYz09PWIpYnJlYWs7Zm9yKDtudWxsPT09Yy5zaWJsaW5nOyl7aWYobnVsbD09PWMucmV0dXJufHxjLnJldHVybj09PWIpcmV0dXJuO2M9Yy5yZXR1cm59Yy5zaWJsaW5nLnJldHVybj1jLnJldHVybjtjPWMuc2libGluZ319O21oPWZ1bmN0aW9uKCl7fTtcbm5oPWZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGY9YS5tZW1vaXplZFByb3BzO2lmKGYhPT1kKXt2YXIgZz1iLnN0YXRlTm9kZTtJZihOLmN1cnJlbnQpO2E9bnVsbDtzd2l0Y2goYyl7Y2FzZSBcImlucHV0XCI6Zj12YyhnLGYpO2Q9dmMoZyxkKTthPVtdO2JyZWFrO2Nhc2UgXCJvcHRpb25cIjpmPSRkKGcsZik7ZD0kZChnLGQpO2E9W107YnJlYWs7Y2FzZSBcInNlbGVjdFwiOmY9bih7fSxmLHt2YWx1ZTp2b2lkIDB9KTtkPW4oe30sZCx7dmFsdWU6dm9pZCAwfSk7YT1bXTticmVhaztjYXNlIFwidGV4dGFyZWFcIjpmPWJlKGcsZik7ZD1iZShnLGQpO2E9W107YnJlYWs7ZGVmYXVsdDpcImZ1bmN0aW9uXCIhPT10eXBlb2YgZi5vbkNsaWNrJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgZC5vbkNsaWNrJiYoZy5vbmNsaWNrPXRlKX1xZShjLGQpO2c9Yz12b2lkIDA7dmFyIGg9bnVsbDtmb3IoYyBpbiBmKWlmKCFkLmhhc093blByb3BlcnR5KGMpJiZmLmhhc093blByb3BlcnR5KGMpJiZudWxsIT1mW2NdKWlmKFwic3R5bGVcIj09PVxuYyl7dmFyIGw9ZltjXTtmb3IoZyBpbiBsKWwuaGFzT3duUHJvcGVydHkoZykmJihofHwoaD17fSksaFtnXT1cIlwiKX1lbHNlXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiIT09YyYmXCJjaGlsZHJlblwiIT09YyYmXCJzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmdcIiE9PWMmJlwic3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nXCIhPT1jJiZcImF1dG9Gb2N1c1wiIT09YyYmKHJhLmhhc093blByb3BlcnR5KGMpP2F8fChhPVtdKTooYT1hfHxbXSkucHVzaChjLG51bGwpKTtmb3IoYyBpbiBkKXt2YXIgaz1kW2NdO2w9bnVsbCE9Zj9mW2NdOnZvaWQgMDtpZihkLmhhc093blByb3BlcnR5KGMpJiZrIT09bCYmKG51bGwhPWt8fG51bGwhPWwpKWlmKFwic3R5bGVcIj09PWMpaWYobCl7Zm9yKGcgaW4gbCkhbC5oYXNPd25Qcm9wZXJ0eShnKXx8ayYmay5oYXNPd25Qcm9wZXJ0eShnKXx8KGh8fChoPXt9KSxoW2ddPVwiXCIpO2ZvcihnIGluIGspay5oYXNPd25Qcm9wZXJ0eShnKSYmbFtnXSE9PWtbZ10mJihofHxcbihoPXt9KSxoW2ddPWtbZ10pfWVsc2UgaHx8KGF8fChhPVtdKSxhLnB1c2goYyxoKSksaD1rO2Vsc2VcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCI9PT1jPyhrPWs/ay5fX2h0bWw6dm9pZCAwLGw9bD9sLl9faHRtbDp2b2lkIDAsbnVsbCE9ayYmbCE9PWsmJihhPWF8fFtdKS5wdXNoKGMsXCJcIitrKSk6XCJjaGlsZHJlblwiPT09Yz9sPT09a3x8XCJzdHJpbmdcIiE9PXR5cGVvZiBrJiZcIm51bWJlclwiIT09dHlwZW9mIGt8fChhPWF8fFtdKS5wdXNoKGMsXCJcIitrKTpcInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZ1wiIT09YyYmXCJzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmdcIiE9PWMmJihyYS5oYXNPd25Qcm9wZXJ0eShjKT8obnVsbCE9ayYmc2UoZSxjKSxhfHxsPT09a3x8KGE9W10pKTooYT1hfHxbXSkucHVzaChjLGspKX1oJiYoYT1hfHxbXSkucHVzaChcInN0eWxlXCIsaCk7ZT1hOyhiLnVwZGF0ZVF1ZXVlPWUpJiZraChiKX19O29oPWZ1bmN0aW9uKGEsYixjLGQpe2MhPT1kJiZraChiKX07XG52YXIgcGg9XCJmdW5jdGlvblwiPT09dHlwZW9mIFdlYWtTZXQ/V2Vha1NldDpTZXQ7ZnVuY3Rpb24gcWgoYSxiKXt2YXIgYz1iLnNvdXJjZSxkPWIuc3RhY2s7bnVsbD09PWQmJm51bGwhPT1jJiYoZD1qYyhjKSk7bnVsbCE9PWMmJmljKGMudHlwZSk7Yj1iLnZhbHVlO251bGwhPT1hJiYxPT09YS50YWcmJmljKGEudHlwZSk7dHJ5e2NvbnNvbGUuZXJyb3IoYil9Y2F0Y2goZSl7c2V0VGltZW91dChmdW5jdGlvbigpe3Rocm93IGU7fSl9fWZ1bmN0aW9uIHJoKGEpe3ZhciBiPWEucmVmO2lmKG51bGwhPT1iKWlmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBiKXRyeXtiKG51bGwpfWNhdGNoKGMpe3NoKGEsYyl9ZWxzZSBiLmN1cnJlbnQ9bnVsbH1cbmZ1bmN0aW9uIHRoKGEsYixjKXtjPWMudXBkYXRlUXVldWU7Yz1udWxsIT09Yz9jLmxhc3RFZmZlY3Q6bnVsbDtpZihudWxsIT09Yyl7dmFyIGQ9Yz1jLm5leHQ7ZG97aWYoKGQudGFnJmEpIT09TmYpe3ZhciBlPWQuZGVzdHJveTtkLmRlc3Ryb3k9dm9pZCAwO3ZvaWQgMCE9PWUmJmUoKX0oZC50YWcmYikhPT1OZiYmKGU9ZC5jcmVhdGUsZC5kZXN0cm95PWUoKSk7ZD1kLm5leHR9d2hpbGUoZCE9PWMpfX1cbmZ1bmN0aW9uIHVoKGEsYil7Zm9yKHZhciBjPWE7Oyl7aWYoNT09PWMudGFnKXt2YXIgZD1jLnN0YXRlTm9kZTtpZihiKWQuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtlbHNle2Q9Yy5zdGF0ZU5vZGU7dmFyIGU9Yy5tZW1vaXplZFByb3BzLnN0eWxlO2U9dm9pZCAwIT09ZSYmbnVsbCE9PWUmJmUuaGFzT3duUHJvcGVydHkoXCJkaXNwbGF5XCIpP2UuZGlzcGxheTpudWxsO2Quc3R5bGUuZGlzcGxheT1uZShcImRpc3BsYXlcIixlKX19ZWxzZSBpZig2PT09Yy50YWcpYy5zdGF0ZU5vZGUubm9kZVZhbHVlPWI/XCJcIjpjLm1lbW9pemVkUHJvcHM7ZWxzZSBpZigxMz09PWMudGFnJiZudWxsIT09Yy5tZW1vaXplZFN0YXRlKXtkPWMuY2hpbGQuc2libGluZztkLnJldHVybj1jO2M9ZDtjb250aW51ZX1lbHNlIGlmKG51bGwhPT1jLmNoaWxkKXtjLmNoaWxkLnJldHVybj1jO2M9Yy5jaGlsZDtjb250aW51ZX1pZihjPT09YSlicmVhaztmb3IoO251bGw9PT1jLnNpYmxpbmc7KXtpZihudWxsPT09Yy5yZXR1cm58fFxuYy5yZXR1cm49PT1hKXJldHVybjtjPWMucmV0dXJufWMuc2libGluZy5yZXR1cm49Yy5yZXR1cm47Yz1jLnNpYmxpbmd9fVxuZnVuY3Rpb24gdmgoYSl7XCJmdW5jdGlvblwiPT09dHlwZW9mIFJlJiZSZShhKTtzd2l0Y2goYS50YWcpe2Nhc2UgMDpjYXNlIDExOmNhc2UgMTQ6Y2FzZSAxNTp2YXIgYj1hLnVwZGF0ZVF1ZXVlO2lmKG51bGwhPT1iJiYoYj1iLmxhc3RFZmZlY3QsbnVsbCE9PWIpKXt2YXIgYz1iPWIubmV4dDtkb3t2YXIgZD1jLmRlc3Ryb3k7aWYodm9pZCAwIT09ZCl7dmFyIGU9YTt0cnl7ZCgpfWNhdGNoKGYpe3NoKGUsZil9fWM9Yy5uZXh0fXdoaWxlKGMhPT1iKX1icmVhaztjYXNlIDE6cmgoYSk7Yj1hLnN0YXRlTm9kZTtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYi5jb21wb25lbnRXaWxsVW5tb3VudCl0cnl7Yi5wcm9wcz1hLm1lbW9pemVkUHJvcHMsYi5zdGF0ZT1hLm1lbW9pemVkU3RhdGUsYi5jb21wb25lbnRXaWxsVW5tb3VudCgpfWNhdGNoKGYpe3NoKGEsZil9YnJlYWs7Y2FzZSA1OnJoKGEpO2JyZWFrO2Nhc2UgNDp3aChhKX19XG5mdW5jdGlvbiB4aChhKXtyZXR1cm4gNT09PWEudGFnfHwzPT09YS50YWd8fDQ9PT1hLnRhZ31cbmZ1bmN0aW9uIHloKGEpe2E6e2Zvcih2YXIgYj1hLnJldHVybjtudWxsIT09Yjspe2lmKHhoKGIpKXt2YXIgYz1iO2JyZWFrIGF9Yj1iLnJldHVybn14KFwiMTYwXCIpO2M9dm9pZCAwfXZhciBkPWI9dm9pZCAwO3N3aXRjaChjLnRhZyl7Y2FzZSA1OmI9Yy5zdGF0ZU5vZGU7ZD0hMTticmVhaztjYXNlIDM6Yj1jLnN0YXRlTm9kZS5jb250YWluZXJJbmZvO2Q9ITA7YnJlYWs7Y2FzZSA0OmI9Yy5zdGF0ZU5vZGUuY29udGFpbmVySW5mbztkPSEwO2JyZWFrO2RlZmF1bHQ6eChcIjE2MVwiKX1jLmVmZmVjdFRhZyYxNiYmKGtlKGIsXCJcIiksYy5lZmZlY3RUYWcmPS0xNyk7YTpiOmZvcihjPWE7Oyl7Zm9yKDtudWxsPT09Yy5zaWJsaW5nOyl7aWYobnVsbD09PWMucmV0dXJufHx4aChjLnJldHVybikpe2M9bnVsbDticmVhayBhfWM9Yy5yZXR1cm59Yy5zaWJsaW5nLnJldHVybj1jLnJldHVybjtmb3IoYz1jLnNpYmxpbmc7NSE9PWMudGFnJiY2IT09Yy50YWcmJjE4IT09Yy50YWc7KXtpZihjLmVmZmVjdFRhZyZcbjIpY29udGludWUgYjtpZihudWxsPT09Yy5jaGlsZHx8ND09PWMudGFnKWNvbnRpbnVlIGI7ZWxzZSBjLmNoaWxkLnJldHVybj1jLGM9Yy5jaGlsZH1pZighKGMuZWZmZWN0VGFnJjIpKXtjPWMuc3RhdGVOb2RlO2JyZWFrIGF9fWZvcih2YXIgZT1hOzspe2lmKDU9PT1lLnRhZ3x8Nj09PWUudGFnKWlmKGMpaWYoZCl7dmFyIGY9YixnPWUuc3RhdGVOb2RlLGg9Yzs4PT09Zi5ub2RlVHlwZT9mLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGcsaCk6Zi5pbnNlcnRCZWZvcmUoZyxoKX1lbHNlIGIuaW5zZXJ0QmVmb3JlKGUuc3RhdGVOb2RlLGMpO2Vsc2UgZD8oZz1iLGg9ZS5zdGF0ZU5vZGUsOD09PWcubm9kZVR5cGU/KGY9Zy5wYXJlbnROb2RlLGYuaW5zZXJ0QmVmb3JlKGgsZykpOihmPWcsZi5hcHBlbmRDaGlsZChoKSksZz1nLl9yZWFjdFJvb3RDb250YWluZXIsbnVsbCE9PWcmJnZvaWQgMCE9PWd8fG51bGwhPT1mLm9uY2xpY2t8fChmLm9uY2xpY2s9dGUpKTpiLmFwcGVuZENoaWxkKGUuc3RhdGVOb2RlKTtcbmVsc2UgaWYoNCE9PWUudGFnJiZudWxsIT09ZS5jaGlsZCl7ZS5jaGlsZC5yZXR1cm49ZTtlPWUuY2hpbGQ7Y29udGludWV9aWYoZT09PWEpYnJlYWs7Zm9yKDtudWxsPT09ZS5zaWJsaW5nOyl7aWYobnVsbD09PWUucmV0dXJufHxlLnJldHVybj09PWEpcmV0dXJuO2U9ZS5yZXR1cm59ZS5zaWJsaW5nLnJldHVybj1lLnJldHVybjtlPWUuc2libGluZ319XG5mdW5jdGlvbiB3aChhKXtmb3IodmFyIGI9YSxjPSExLGQ9dm9pZCAwLGU9dm9pZCAwOzspe2lmKCFjKXtjPWIucmV0dXJuO2E6Zm9yKDs7KXtudWxsPT09Yz94KFwiMTYwXCIpOnZvaWQgMDtzd2l0Y2goYy50YWcpe2Nhc2UgNTpkPWMuc3RhdGVOb2RlO2U9ITE7YnJlYWsgYTtjYXNlIDM6ZD1jLnN0YXRlTm9kZS5jb250YWluZXJJbmZvO2U9ITA7YnJlYWsgYTtjYXNlIDQ6ZD1jLnN0YXRlTm9kZS5jb250YWluZXJJbmZvO2U9ITA7YnJlYWsgYX1jPWMucmV0dXJufWM9ITB9aWYoNT09PWIudGFnfHw2PT09Yi50YWcpe2E6Zm9yKHZhciBmPWIsZz1mOzspaWYodmgoZyksbnVsbCE9PWcuY2hpbGQmJjQhPT1nLnRhZylnLmNoaWxkLnJldHVybj1nLGc9Zy5jaGlsZDtlbHNle2lmKGc9PT1mKWJyZWFrO2Zvcig7bnVsbD09PWcuc2libGluZzspe2lmKG51bGw9PT1nLnJldHVybnx8Zy5yZXR1cm49PT1mKWJyZWFrIGE7Zz1nLnJldHVybn1nLnNpYmxpbmcucmV0dXJuPWcucmV0dXJuO2c9Zy5zaWJsaW5nfWU/XG4oZj1kLGc9Yi5zdGF0ZU5vZGUsOD09PWYubm9kZVR5cGU/Zi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGcpOmYucmVtb3ZlQ2hpbGQoZykpOmQucmVtb3ZlQ2hpbGQoYi5zdGF0ZU5vZGUpfWVsc2UgaWYoND09PWIudGFnKXtpZihudWxsIT09Yi5jaGlsZCl7ZD1iLnN0YXRlTm9kZS5jb250YWluZXJJbmZvO2U9ITA7Yi5jaGlsZC5yZXR1cm49YjtiPWIuY2hpbGQ7Y29udGludWV9fWVsc2UgaWYodmgoYiksbnVsbCE9PWIuY2hpbGQpe2IuY2hpbGQucmV0dXJuPWI7Yj1iLmNoaWxkO2NvbnRpbnVlfWlmKGI9PT1hKWJyZWFrO2Zvcig7bnVsbD09PWIuc2libGluZzspe2lmKG51bGw9PT1iLnJldHVybnx8Yi5yZXR1cm49PT1hKXJldHVybjtiPWIucmV0dXJuOzQ9PT1iLnRhZyYmKGM9ITEpfWIuc2libGluZy5yZXR1cm49Yi5yZXR1cm47Yj1iLnNpYmxpbmd9fVxuZnVuY3Rpb24gemgoYSxiKXtzd2l0Y2goYi50YWcpe2Nhc2UgMDpjYXNlIDExOmNhc2UgMTQ6Y2FzZSAxNTp0aChQZixRZixiKTticmVhaztjYXNlIDE6YnJlYWs7Y2FzZSA1OnZhciBjPWIuc3RhdGVOb2RlO2lmKG51bGwhPWMpe3ZhciBkPWIubWVtb2l6ZWRQcm9wczthPW51bGwhPT1hP2EubWVtb2l6ZWRQcm9wczpkO3ZhciBlPWIudHlwZSxmPWIudXBkYXRlUXVldWU7Yi51cGRhdGVRdWV1ZT1udWxsO251bGwhPT1mJiZDZShjLGYsZSxhLGQsYil9YnJlYWs7Y2FzZSA2Om51bGw9PT1iLnN0YXRlTm9kZT94KFwiMTYyXCIpOnZvaWQgMDtiLnN0YXRlTm9kZS5ub2RlVmFsdWU9Yi5tZW1vaXplZFByb3BzO2JyZWFrO2Nhc2UgMzpicmVhaztjYXNlIDEyOmJyZWFrO2Nhc2UgMTM6Yz1iLm1lbW9pemVkU3RhdGU7ZD12b2lkIDA7YT1iO251bGw9PT1jP2Q9ITE6KGQ9ITAsYT1iLmNoaWxkLDA9PT1jLnRpbWVkT3V0QXQmJihjLnRpbWVkT3V0QXQ9bGYoKSkpO251bGwhPT1hJiZ1aChhLGQpO2M9XG5iLnVwZGF0ZVF1ZXVlO2lmKG51bGwhPT1jKXtiLnVwZGF0ZVF1ZXVlPW51bGw7dmFyIGc9Yi5zdGF0ZU5vZGU7bnVsbD09PWcmJihnPWIuc3RhdGVOb2RlPW5ldyBwaCk7Yy5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBjPUFoLmJpbmQobnVsbCxiLGEpO2cuaGFzKGEpfHwoZy5hZGQoYSksYS50aGVuKGMsYykpfSl9YnJlYWs7Y2FzZSAxNzpicmVhaztkZWZhdWx0OngoXCIxNjNcIil9fXZhciBCaD1cImZ1bmN0aW9uXCI9PT10eXBlb2YgV2Vha01hcD9XZWFrTWFwOk1hcDtmdW5jdGlvbiBDaChhLGIsYyl7Yz1uZihjKTtjLnRhZz1haDtjLnBheWxvYWQ9e2VsZW1lbnQ6bnVsbH07dmFyIGQ9Yi52YWx1ZTtjLmNhbGxiYWNrPWZ1bmN0aW9uKCl7RGgoZCk7cWgoYSxiKX07cmV0dXJuIGN9XG5mdW5jdGlvbiBFaChhLGIsYyl7Yz1uZihjKTtjLnRhZz1haDt2YXIgZD1hLnR5cGUuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBkKXt2YXIgZT1iLnZhbHVlO2MucGF5bG9hZD1mdW5jdGlvbigpe3JldHVybiBkKGUpfX12YXIgZj1hLnN0YXRlTm9kZTtudWxsIT09ZiYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGYuY29tcG9uZW50RGlkQ2F0Y2gmJihjLmNhbGxiYWNrPWZ1bmN0aW9uKCl7XCJmdW5jdGlvblwiIT09dHlwZW9mIGQmJihudWxsPT09Rmg/Rmg9bmV3IFNldChbdGhpc10pOkZoLmFkZCh0aGlzKSk7dmFyIGM9Yi52YWx1ZSxlPWIuc3RhY2s7cWgoYSxiKTt0aGlzLmNvbXBvbmVudERpZENhdGNoKGMse2NvbXBvbmVudFN0YWNrOm51bGwhPT1lP2U6XCJcIn0pfSk7cmV0dXJuIGN9XG5mdW5jdGlvbiBHaChhKXtzd2l0Y2goYS50YWcpe2Nhc2UgMTpKKGEudHlwZSkmJktlKGEpO3ZhciBiPWEuZWZmZWN0VGFnO3JldHVybiBiJjIwNDg/KGEuZWZmZWN0VGFnPWImLTIwNDl8NjQsYSk6bnVsbDtjYXNlIDM6cmV0dXJuIEtmKGEpLExlKGEpLGI9YS5lZmZlY3RUYWcsMCE9PShiJjY0KT94KFwiMjg1XCIpOnZvaWQgMCxhLmVmZmVjdFRhZz1iJi0yMDQ5fDY0LGE7Y2FzZSA1OnJldHVybiBNZihhKSxudWxsO2Nhc2UgMTM6cmV0dXJuIGI9YS5lZmZlY3RUYWcsYiYyMDQ4PyhhLmVmZmVjdFRhZz1iJi0yMDQ5fDY0LGEpOm51bGw7Y2FzZSAxODpyZXR1cm4gbnVsbDtjYXNlIDQ6cmV0dXJuIEtmKGEpLG51bGw7Y2FzZSAxMDpyZXR1cm4gWmcoYSksbnVsbDtkZWZhdWx0OnJldHVybiBudWxsfX1cbnZhciBIaD1UYi5SZWFjdEN1cnJlbnREaXNwYXRjaGVyLEloPVRiLlJlYWN0Q3VycmVudE93bmVyLEpoPTEwNzM3NDE4MjIsS2g9ITEsVD1udWxsLExoPW51bGwsVT0wLE1oPS0xLE5oPSExLFY9bnVsbCxPaD0hMSxQaD1udWxsLFFoPW51bGwsUmg9bnVsbCxGaD1udWxsO2Z1bmN0aW9uIFNoKCl7aWYobnVsbCE9PVQpZm9yKHZhciBhPVQucmV0dXJuO251bGwhPT1hOyl7dmFyIGI9YTtzd2l0Y2goYi50YWcpe2Nhc2UgMTp2YXIgYz1iLnR5cGUuY2hpbGRDb250ZXh0VHlwZXM7bnVsbCE9PWMmJnZvaWQgMCE9PWMmJktlKGIpO2JyZWFrO2Nhc2UgMzpLZihiKTtMZShiKTticmVhaztjYXNlIDU6TWYoYik7YnJlYWs7Y2FzZSA0OktmKGIpO2JyZWFrO2Nhc2UgMTA6WmcoYil9YT1hLnJldHVybn1MaD1udWxsO1U9MDtNaD0tMTtOaD0hMTtUPW51bGx9XG5mdW5jdGlvbiBUaCgpe2Zvcig7bnVsbCE9PVY7KXt2YXIgYT1WLmVmZmVjdFRhZzthJjE2JiZrZShWLnN0YXRlTm9kZSxcIlwiKTtpZihhJjEyOCl7dmFyIGI9Vi5hbHRlcm5hdGU7bnVsbCE9PWImJihiPWIucmVmLG51bGwhPT1iJiYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGI/YihudWxsKTpiLmN1cnJlbnQ9bnVsbCkpfXN3aXRjaChhJjE0KXtjYXNlIDI6eWgoVik7Vi5lZmZlY3RUYWcmPS0zO2JyZWFrO2Nhc2UgNjp5aChWKTtWLmVmZmVjdFRhZyY9LTM7emgoVi5hbHRlcm5hdGUsVik7YnJlYWs7Y2FzZSA0OnpoKFYuYWx0ZXJuYXRlLFYpO2JyZWFrO2Nhc2UgODphPVYsd2goYSksYS5yZXR1cm49bnVsbCxhLmNoaWxkPW51bGwsYS5tZW1vaXplZFN0YXRlPW51bGwsYS51cGRhdGVRdWV1ZT1udWxsLGE9YS5hbHRlcm5hdGUsbnVsbCE9PWEmJihhLnJldHVybj1udWxsLGEuY2hpbGQ9bnVsbCxhLm1lbW9pemVkU3RhdGU9bnVsbCxhLnVwZGF0ZVF1ZXVlPW51bGwpfVY9Vi5uZXh0RWZmZWN0fX1cbmZ1bmN0aW9uIFVoKCl7Zm9yKDtudWxsIT09Vjspe2lmKFYuZWZmZWN0VGFnJjI1NilhOnt2YXIgYT1WLmFsdGVybmF0ZSxiPVY7c3dpdGNoKGIudGFnKXtjYXNlIDA6Y2FzZSAxMTpjYXNlIDE1OnRoKE9mLE5mLGIpO2JyZWFrIGE7Y2FzZSAxOmlmKGIuZWZmZWN0VGFnJjI1NiYmbnVsbCE9PWEpe3ZhciBjPWEubWVtb2l6ZWRQcm9wcyxkPWEubWVtb2l6ZWRTdGF0ZTthPWIuc3RhdGVOb2RlO2I9YS5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZShiLmVsZW1lbnRUeXBlPT09Yi50eXBlP2M6TChiLnR5cGUsYyksZCk7YS5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdEJlZm9yZVVwZGF0ZT1ifWJyZWFrIGE7Y2FzZSAzOmNhc2UgNTpjYXNlIDY6Y2FzZSA0OmNhc2UgMTc6YnJlYWsgYTtkZWZhdWx0OngoXCIxNjNcIil9fVY9Vi5uZXh0RWZmZWN0fX1cbmZ1bmN0aW9uIFZoKGEsYil7Zm9yKDtudWxsIT09Vjspe3ZhciBjPVYuZWZmZWN0VGFnO2lmKGMmMzYpe3ZhciBkPVYuYWx0ZXJuYXRlLGU9VixmPWI7c3dpdGNoKGUudGFnKXtjYXNlIDA6Y2FzZSAxMTpjYXNlIDE1OnRoKFJmLFNmLGUpO2JyZWFrO2Nhc2UgMTp2YXIgZz1lLnN0YXRlTm9kZTtpZihlLmVmZmVjdFRhZyY0KWlmKG51bGw9PT1kKWcuY29tcG9uZW50RGlkTW91bnQoKTtlbHNle3ZhciBoPWUuZWxlbWVudFR5cGU9PT1lLnR5cGU/ZC5tZW1vaXplZFByb3BzOkwoZS50eXBlLGQubWVtb2l6ZWRQcm9wcyk7Zy5jb21wb25lbnREaWRVcGRhdGUoaCxkLm1lbW9pemVkU3RhdGUsZy5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdEJlZm9yZVVwZGF0ZSl9ZD1lLnVwZGF0ZVF1ZXVlO251bGwhPT1kJiZoaChlLGQsZyxmKTticmVhaztjYXNlIDM6ZD1lLnVwZGF0ZVF1ZXVlO2lmKG51bGwhPT1kKXtnPW51bGw7aWYobnVsbCE9PWUuY2hpbGQpc3dpdGNoKGUuY2hpbGQudGFnKXtjYXNlIDU6Zz1cbmUuY2hpbGQuc3RhdGVOb2RlO2JyZWFrO2Nhc2UgMTpnPWUuY2hpbGQuc3RhdGVOb2RlfWhoKGUsZCxnLGYpfWJyZWFrO2Nhc2UgNTpmPWUuc3RhdGVOb2RlO251bGw9PT1kJiZlLmVmZmVjdFRhZyY0JiZ3ZShlLnR5cGUsZS5tZW1vaXplZFByb3BzKSYmZi5mb2N1cygpO2JyZWFrO2Nhc2UgNjpicmVhaztjYXNlIDQ6YnJlYWs7Y2FzZSAxMjpicmVhaztjYXNlIDEzOmJyZWFrO2Nhc2UgMTc6YnJlYWs7ZGVmYXVsdDp4KFwiMTYzXCIpfX1jJjEyOCYmKGU9Vi5yZWYsbnVsbCE9PWUmJihmPVYuc3RhdGVOb2RlLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBlP2UoZik6ZS5jdXJyZW50PWYpKTtjJjUxMiYmKFBoPWEpO1Y9Vi5uZXh0RWZmZWN0fX1cbmZ1bmN0aW9uIFdoKGEsYil7Umg9UWg9UGg9bnVsbDt2YXIgYz1XO1c9ITA7ZG97aWYoYi5lZmZlY3RUYWcmNTEyKXt2YXIgZD0hMSxlPXZvaWQgMDt0cnl7dmFyIGY9Yjt0aChVZixOZixmKTt0aChOZixUZixmKX1jYXRjaChnKXtkPSEwLGU9Z31kJiZzaChiLGUpfWI9Yi5uZXh0RWZmZWN0fXdoaWxlKG51bGwhPT1iKTtXPWM7Yz1hLmV4cGlyYXRpb25UaW1lOzAhPT1jJiZYaChhLGMpO1h8fFd8fFloKDEwNzM3NDE4MjMsITEpfWZ1bmN0aW9uIG9mKCl7bnVsbCE9PVFoJiZCZShRaCk7bnVsbCE9PVJoJiZSaCgpfVxuZnVuY3Rpb24gWmgoYSxiKXtPaD1LaD0hMDthLmN1cnJlbnQ9PT1iP3goXCIxNzdcIik6dm9pZCAwO3ZhciBjPWEucGVuZGluZ0NvbW1pdEV4cGlyYXRpb25UaW1lOzA9PT1jP3goXCIyNjFcIik6dm9pZCAwO2EucGVuZGluZ0NvbW1pdEV4cGlyYXRpb25UaW1lPTA7dmFyIGQ9Yi5leHBpcmF0aW9uVGltZSxlPWIuY2hpbGRFeHBpcmF0aW9uVGltZTtlZihhLGU+ZD9lOmQpO0loLmN1cnJlbnQ9bnVsbDtkPXZvaWQgMDsxPGIuZWZmZWN0VGFnP251bGwhPT1iLmxhc3RFZmZlY3Q/KGIubGFzdEVmZmVjdC5uZXh0RWZmZWN0PWIsZD1iLmZpcnN0RWZmZWN0KTpkPWI6ZD1iLmZpcnN0RWZmZWN0O3VlPUJkO3ZlPVBkKCk7QmQ9ITE7Zm9yKFY9ZDtudWxsIT09Vjspe2U9ITE7dmFyIGY9dm9pZCAwO3RyeXtVaCgpfWNhdGNoKGgpe2U9ITAsZj1ofWUmJihudWxsPT09Vj94KFwiMTc4XCIpOnZvaWQgMCxzaChWLGYpLG51bGwhPT1WJiYoVj1WLm5leHRFZmZlY3QpKX1mb3IoVj1kO251bGwhPT1WOyl7ZT0hMTtcbmY9dm9pZCAwO3RyeXtUaCgpfWNhdGNoKGgpe2U9ITAsZj1ofWUmJihudWxsPT09Vj94KFwiMTc4XCIpOnZvaWQgMCxzaChWLGYpLG51bGwhPT1WJiYoVj1WLm5leHRFZmZlY3QpKX1RZCh2ZSk7dmU9bnVsbDtCZD0hIXVlO3VlPW51bGw7YS5jdXJyZW50PWI7Zm9yKFY9ZDtudWxsIT09Vjspe2U9ITE7Zj12b2lkIDA7dHJ5e1ZoKGEsYyl9Y2F0Y2goaCl7ZT0hMCxmPWh9ZSYmKG51bGw9PT1WP3goXCIxNzhcIik6dm9pZCAwLHNoKFYsZiksbnVsbCE9PVYmJihWPVYubmV4dEVmZmVjdCkpfWlmKG51bGwhPT1kJiZudWxsIT09UGgpe3ZhciBnPVdoLmJpbmQobnVsbCxhLGQpO1FoPXIudW5zdGFibGVfcnVuV2l0aFByaW9yaXR5KHIudW5zdGFibGVfTm9ybWFsUHJpb3JpdHksZnVuY3Rpb24oKXtyZXR1cm4gQWUoZyl9KTtSaD1nfUtoPU9oPSExO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBRZSYmUWUoYi5zdGF0ZU5vZGUpO2M9Yi5leHBpcmF0aW9uVGltZTtiPWIuY2hpbGRFeHBpcmF0aW9uVGltZTtiPVxuYj5jP2I6YzswPT09YiYmKEZoPW51bGwpOyRoKGEsYil9XG5mdW5jdGlvbiBhaShhKXtmb3IoOzspe3ZhciBiPWEuYWx0ZXJuYXRlLGM9YS5yZXR1cm4sZD1hLnNpYmxpbmc7aWYoMD09PShhLmVmZmVjdFRhZyYxMDI0KSl7VD1hO2E6e3ZhciBlPWI7Yj1hO3ZhciBmPVU7dmFyIGc9Yi5wZW5kaW5nUHJvcHM7c3dpdGNoKGIudGFnKXtjYXNlIDI6YnJlYWs7Y2FzZSAxNjpicmVhaztjYXNlIDE1OmNhc2UgMDpicmVhaztjYXNlIDE6SihiLnR5cGUpJiZLZShiKTticmVhaztjYXNlIDM6S2YoYik7TGUoYik7Zz1iLnN0YXRlTm9kZTtnLnBlbmRpbmdDb250ZXh0JiYoZy5jb250ZXh0PWcucGVuZGluZ0NvbnRleHQsZy5wZW5kaW5nQ29udGV4dD1udWxsKTtpZihudWxsPT09ZXx8bnVsbD09PWUuY2hpbGQpRWcoYiksYi5lZmZlY3RUYWcmPS0zO21oKGIpO2JyZWFrO2Nhc2UgNTpNZihiKTt2YXIgaD1JZihIZi5jdXJyZW50KTtmPWIudHlwZTtpZihudWxsIT09ZSYmbnVsbCE9Yi5zdGF0ZU5vZGUpbmgoZSxiLGYsZyxoKSxlLnJlZiE9PWIucmVmJiYoYi5lZmZlY3RUYWd8PVxuMTI4KTtlbHNlIGlmKGcpe3ZhciBsPUlmKE4uY3VycmVudCk7aWYoRWcoYikpe2c9YjtlPWcuc3RhdGVOb2RlO3ZhciBrPWcudHlwZSxtPWcubWVtb2l6ZWRQcm9wcyxwPWg7ZVtGYV09ZztlW0dhXT1tO2Y9dm9pZCAwO2g9aztzd2l0Y2goaCl7Y2FzZSBcImlmcmFtZVwiOmNhc2UgXCJvYmplY3RcIjpFKFwibG9hZFwiLGUpO2JyZWFrO2Nhc2UgXCJ2aWRlb1wiOmNhc2UgXCJhdWRpb1wiOmZvcihrPTA7azxhYi5sZW5ndGg7aysrKUUoYWJba10sZSk7YnJlYWs7Y2FzZSBcInNvdXJjZVwiOkUoXCJlcnJvclwiLGUpO2JyZWFrO2Nhc2UgXCJpbWdcIjpjYXNlIFwiaW1hZ2VcIjpjYXNlIFwibGlua1wiOkUoXCJlcnJvclwiLGUpO0UoXCJsb2FkXCIsZSk7YnJlYWs7Y2FzZSBcImZvcm1cIjpFKFwicmVzZXRcIixlKTtFKFwic3VibWl0XCIsZSk7YnJlYWs7Y2FzZSBcImRldGFpbHNcIjpFKFwidG9nZ2xlXCIsZSk7YnJlYWs7Y2FzZSBcImlucHV0XCI6d2MoZSxtKTtFKFwiaW52YWxpZFwiLGUpO3NlKHAsXCJvbkNoYW5nZVwiKTticmVhaztjYXNlIFwic2VsZWN0XCI6ZS5fd3JhcHBlclN0YXRlPVxue3dhc011bHRpcGxlOiEhbS5tdWx0aXBsZX07RShcImludmFsaWRcIixlKTtzZShwLFwib25DaGFuZ2VcIik7YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6Y2UoZSxtKSxFKFwiaW52YWxpZFwiLGUpLHNlKHAsXCJvbkNoYW5nZVwiKX1xZShoLG0pO2s9bnVsbDtmb3IoZiBpbiBtKW0uaGFzT3duUHJvcGVydHkoZikmJihsPW1bZl0sXCJjaGlsZHJlblwiPT09Zj9cInN0cmluZ1wiPT09dHlwZW9mIGw/ZS50ZXh0Q29udGVudCE9PWwmJihrPVtcImNoaWxkcmVuXCIsbF0pOlwibnVtYmVyXCI9PT10eXBlb2YgbCYmZS50ZXh0Q29udGVudCE9PVwiXCIrbCYmKGs9W1wiY2hpbGRyZW5cIixcIlwiK2xdKTpyYS5oYXNPd25Qcm9wZXJ0eShmKSYmbnVsbCE9bCYmc2UocCxmKSk7c3dpdGNoKGgpe2Nhc2UgXCJpbnB1dFwiOlJiKGUpO0FjKGUsbSwhMCk7YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6UmIoZSk7ZWUoZSxtKTticmVhaztjYXNlIFwic2VsZWN0XCI6Y2FzZSBcIm9wdGlvblwiOmJyZWFrO2RlZmF1bHQ6XCJmdW5jdGlvblwiPT09dHlwZW9mIG0ub25DbGljayYmXG4oZS5vbmNsaWNrPXRlKX1mPWs7Zy51cGRhdGVRdWV1ZT1mO2c9bnVsbCE9PWY/ITA6ITE7ZyYma2goYil9ZWxzZXttPWI7cD1mO2U9ZztrPTk9PT1oLm5vZGVUeXBlP2g6aC5vd25lckRvY3VtZW50O2w9PT1mZS5odG1sJiYobD1nZShwKSk7bD09PWZlLmh0bWw/XCJzY3JpcHRcIj09PXA/KGU9ay5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGUuaW5uZXJIVE1MPVwiPHNjcmlwdD5cXHgzYy9zY3JpcHQ+XCIsaz1lLnJlbW92ZUNoaWxkKGUuZmlyc3RDaGlsZCkpOlwic3RyaW5nXCI9PT10eXBlb2YgZS5pcz9rPWsuY3JlYXRlRWxlbWVudChwLHtpczplLmlzfSk6KGs9ay5jcmVhdGVFbGVtZW50KHApLFwic2VsZWN0XCI9PT1wJiYocD1rLGUubXVsdGlwbGU/cC5tdWx0aXBsZT0hMDplLnNpemUmJihwLnNpemU9ZS5zaXplKSkpOms9ay5jcmVhdGVFbGVtZW50TlMobCxwKTtlPWs7ZVtGYV09bTtlW0dhXT1nO2xoKGUsYiwhMSwhMSk7cD1lO2s9ZjttPWc7dmFyIHQ9aCxBPXJlKGssbSk7c3dpdGNoKGspe2Nhc2UgXCJpZnJhbWVcIjpjYXNlIFwib2JqZWN0XCI6RShcImxvYWRcIixcbnApO2g9bTticmVhaztjYXNlIFwidmlkZW9cIjpjYXNlIFwiYXVkaW9cIjpmb3IoaD0wO2g8YWIubGVuZ3RoO2grKylFKGFiW2hdLHApO2g9bTticmVhaztjYXNlIFwic291cmNlXCI6RShcImVycm9yXCIscCk7aD1tO2JyZWFrO2Nhc2UgXCJpbWdcIjpjYXNlIFwiaW1hZ2VcIjpjYXNlIFwibGlua1wiOkUoXCJlcnJvclwiLHApO0UoXCJsb2FkXCIscCk7aD1tO2JyZWFrO2Nhc2UgXCJmb3JtXCI6RShcInJlc2V0XCIscCk7RShcInN1Ym1pdFwiLHApO2g9bTticmVhaztjYXNlIFwiZGV0YWlsc1wiOkUoXCJ0b2dnbGVcIixwKTtoPW07YnJlYWs7Y2FzZSBcImlucHV0XCI6d2MocCxtKTtoPXZjKHAsbSk7RShcImludmFsaWRcIixwKTtzZSh0LFwib25DaGFuZ2VcIik7YnJlYWs7Y2FzZSBcIm9wdGlvblwiOmg9JGQocCxtKTticmVhaztjYXNlIFwic2VsZWN0XCI6cC5fd3JhcHBlclN0YXRlPXt3YXNNdWx0aXBsZTohIW0ubXVsdGlwbGV9O2g9bih7fSxtLHt2YWx1ZTp2b2lkIDB9KTtFKFwiaW52YWxpZFwiLHApO3NlKHQsXCJvbkNoYW5nZVwiKTticmVhaztjYXNlIFwidGV4dGFyZWFcIjpjZShwLFxubSk7aD1iZShwLG0pO0UoXCJpbnZhbGlkXCIscCk7c2UodCxcIm9uQ2hhbmdlXCIpO2JyZWFrO2RlZmF1bHQ6aD1tfXFlKGssaCk7bD12b2lkIDA7dmFyIHY9ayxSPXAsdT1oO2ZvcihsIGluIHUpaWYodS5oYXNPd25Qcm9wZXJ0eShsKSl7dmFyIHE9dVtsXTtcInN0eWxlXCI9PT1sP29lKFIscSk6XCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiPT09bD8ocT1xP3EuX19odG1sOnZvaWQgMCxudWxsIT1xJiZqZShSLHEpKTpcImNoaWxkcmVuXCI9PT1sP1wic3RyaW5nXCI9PT10eXBlb2YgcT8oXCJ0ZXh0YXJlYVwiIT09dnx8XCJcIiE9PXEpJiZrZShSLHEpOlwibnVtYmVyXCI9PT10eXBlb2YgcSYma2UoUixcIlwiK3EpOlwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nXCIhPT1sJiZcInN1cHByZXNzSHlkcmF0aW9uV2FybmluZ1wiIT09bCYmXCJhdXRvRm9jdXNcIiE9PWwmJihyYS5oYXNPd25Qcm9wZXJ0eShsKT9udWxsIT1xJiZzZSh0LGwpOm51bGwhPXEmJnRjKFIsbCxxLEEpKX1zd2l0Y2goayl7Y2FzZSBcImlucHV0XCI6UmIocCk7XG5BYyhwLG0sITEpO2JyZWFrO2Nhc2UgXCJ0ZXh0YXJlYVwiOlJiKHApO2VlKHAsbSk7YnJlYWs7Y2FzZSBcIm9wdGlvblwiOm51bGwhPW0udmFsdWUmJnAuc2V0QXR0cmlidXRlKFwidmFsdWVcIixcIlwiK3VjKG0udmFsdWUpKTticmVhaztjYXNlIFwic2VsZWN0XCI6aD1wO2gubXVsdGlwbGU9ISFtLm11bHRpcGxlO3A9bS52YWx1ZTtudWxsIT1wP2FlKGgsISFtLm11bHRpcGxlLHAsITEpOm51bGwhPW0uZGVmYXVsdFZhbHVlJiZhZShoLCEhbS5tdWx0aXBsZSxtLmRlZmF1bHRWYWx1ZSwhMCk7YnJlYWs7ZGVmYXVsdDpcImZ1bmN0aW9uXCI9PT10eXBlb2YgaC5vbkNsaWNrJiYocC5vbmNsaWNrPXRlKX0oZz13ZShmLGcpKSYma2goYik7Yi5zdGF0ZU5vZGU9ZX1udWxsIT09Yi5yZWYmJihiLmVmZmVjdFRhZ3w9MTI4KX1lbHNlIG51bGw9PT1iLnN0YXRlTm9kZT94KFwiMTY2XCIpOnZvaWQgMDticmVhaztjYXNlIDY6ZSYmbnVsbCE9Yi5zdGF0ZU5vZGU/b2goZSxiLGUubWVtb2l6ZWRQcm9wcyxnKTooXCJzdHJpbmdcIiE9PVxudHlwZW9mIGcmJihudWxsPT09Yi5zdGF0ZU5vZGU/eChcIjE2NlwiKTp2b2lkIDApLGU9SWYoSGYuY3VycmVudCksSWYoTi5jdXJyZW50KSxFZyhiKT8oZz1iLGY9Zy5zdGF0ZU5vZGUsZT1nLm1lbW9pemVkUHJvcHMsZltGYV09ZywoZz1mLm5vZGVWYWx1ZSE9PWUpJiZraChiKSk6KGY9YixnPSg5PT09ZS5ub2RlVHlwZT9lOmUub3duZXJEb2N1bWVudCkuY3JlYXRlVGV4dE5vZGUoZyksZ1tGYV09YixmLnN0YXRlTm9kZT1nKSk7YnJlYWs7Y2FzZSAxMTpicmVhaztjYXNlIDEzOmc9Yi5tZW1vaXplZFN0YXRlO2lmKDAhPT0oYi5lZmZlY3RUYWcmNjQpKXtiLmV4cGlyYXRpb25UaW1lPWY7VD1iO2JyZWFrIGF9Zz1udWxsIT09ZztmPW51bGwhPT1lJiZudWxsIT09ZS5tZW1vaXplZFN0YXRlO251bGwhPT1lJiYhZyYmZiYmKGU9ZS5jaGlsZC5zaWJsaW5nLG51bGwhPT1lJiYoaD1iLmZpcnN0RWZmZWN0LG51bGwhPT1oPyhiLmZpcnN0RWZmZWN0PWUsZS5uZXh0RWZmZWN0PWgpOihiLmZpcnN0RWZmZWN0PVxuYi5sYXN0RWZmZWN0PWUsZS5uZXh0RWZmZWN0PW51bGwpLGUuZWZmZWN0VGFnPTgpKTtpZihnfHxmKWIuZWZmZWN0VGFnfD00O2JyZWFrO2Nhc2UgNzpicmVhaztjYXNlIDg6YnJlYWs7Y2FzZSAxMjpicmVhaztjYXNlIDQ6S2YoYik7bWgoYik7YnJlYWs7Y2FzZSAxMDpaZyhiKTticmVhaztjYXNlIDk6YnJlYWs7Y2FzZSAxNDpicmVhaztjYXNlIDE3OkooYi50eXBlKSYmS2UoYik7YnJlYWs7Y2FzZSAxODpicmVhaztkZWZhdWx0OngoXCIxNTZcIil9VD1udWxsfWI9YTtpZigxPT09VXx8MSE9PWIuY2hpbGRFeHBpcmF0aW9uVGltZSl7Zz0wO2ZvcihmPWIuY2hpbGQ7bnVsbCE9PWY7KWU9Zi5leHBpcmF0aW9uVGltZSxoPWYuY2hpbGRFeHBpcmF0aW9uVGltZSxlPmcmJihnPWUpLGg+ZyYmKGc9aCksZj1mLnNpYmxpbmc7Yi5jaGlsZEV4cGlyYXRpb25UaW1lPWd9aWYobnVsbCE9PVQpcmV0dXJuIFQ7bnVsbCE9PWMmJjA9PT0oYy5lZmZlY3RUYWcmMTAyNCkmJihudWxsPT09Yy5maXJzdEVmZmVjdCYmXG4oYy5maXJzdEVmZmVjdD1hLmZpcnN0RWZmZWN0KSxudWxsIT09YS5sYXN0RWZmZWN0JiYobnVsbCE9PWMubGFzdEVmZmVjdCYmKGMubGFzdEVmZmVjdC5uZXh0RWZmZWN0PWEuZmlyc3RFZmZlY3QpLGMubGFzdEVmZmVjdD1hLmxhc3RFZmZlY3QpLDE8YS5lZmZlY3RUYWcmJihudWxsIT09Yy5sYXN0RWZmZWN0P2MubGFzdEVmZmVjdC5uZXh0RWZmZWN0PWE6Yy5maXJzdEVmZmVjdD1hLGMubGFzdEVmZmVjdD1hKSl9ZWxzZXthPUdoKGEsVSk7aWYobnVsbCE9PWEpcmV0dXJuIGEuZWZmZWN0VGFnJj0xMDIzLGE7bnVsbCE9PWMmJihjLmZpcnN0RWZmZWN0PWMubGFzdEVmZmVjdD1udWxsLGMuZWZmZWN0VGFnfD0xMDI0KX1pZihudWxsIT09ZClyZXR1cm4gZDtpZihudWxsIT09YylhPWM7ZWxzZSBicmVha31yZXR1cm4gbnVsbH1cbmZ1bmN0aW9uIGJpKGEpe3ZhciBiPVRnKGEuYWx0ZXJuYXRlLGEsVSk7YS5tZW1vaXplZFByb3BzPWEucGVuZGluZ1Byb3BzO251bGw9PT1iJiYoYj1haShhKSk7SWguY3VycmVudD1udWxsO3JldHVybiBifVxuZnVuY3Rpb24gY2koYSxiKXtLaD94KFwiMjQzXCIpOnZvaWQgMDtvZigpO0toPSEwO3ZhciBjPUhoLmN1cnJlbnQ7SGguY3VycmVudD1rZzt2YXIgZD1hLm5leHRFeHBpcmF0aW9uVGltZVRvV29ya09uO2lmKGQhPT1VfHxhIT09TGh8fG51bGw9PT1UKVNoKCksTGg9YSxVPWQsVD1YZShMaC5jdXJyZW50LG51bGwsVSksYS5wZW5kaW5nQ29tbWl0RXhwaXJhdGlvblRpbWU9MDt2YXIgZT0hMTtkb3t0cnl7aWYoYilmb3IoO251bGwhPT1UJiYhZGkoKTspVD1iaShUKTtlbHNlIGZvcig7bnVsbCE9PVQ7KVQ9YmkoVCl9Y2F0Y2godSl7aWYoWWc9WGc9V2c9bnVsbCxsZygpLG51bGw9PT1UKWU9ITAsRGgodSk7ZWxzZXtudWxsPT09VD94KFwiMjcxXCIpOnZvaWQgMDt2YXIgZj1ULGc9Zi5yZXR1cm47aWYobnVsbD09PWcpZT0hMCxEaCh1KTtlbHNle2E6e3ZhciBoPWEsbD1nLGs9ZixtPXU7Zz1VO2suZWZmZWN0VGFnfD0xMDI0O2suZmlyc3RFZmZlY3Q9ay5sYXN0RWZmZWN0PW51bGw7aWYobnVsbCE9PVxubSYmXCJvYmplY3RcIj09PXR5cGVvZiBtJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgbS50aGVuKXt2YXIgcD1tO209bDt2YXIgdD0tMSxBPS0xO2Rve2lmKDEzPT09bS50YWcpe3ZhciB2PW0uYWx0ZXJuYXRlO2lmKG51bGwhPT12JiYodj12Lm1lbW9pemVkU3RhdGUsbnVsbCE9PXYpKXtBPTEwKigxMDczNzQxODIyLXYudGltZWRPdXRBdCk7YnJlYWt9dj1tLnBlbmRpbmdQcm9wcy5tYXhEdXJhdGlvbjtpZihcIm51bWJlclwiPT09dHlwZW9mIHYpaWYoMD49dil0PTA7ZWxzZSBpZigtMT09PXR8fHY8dCl0PXZ9bT1tLnJldHVybn13aGlsZShudWxsIT09bSk7bT1sO2Rve2lmKHY9MTM9PT1tLnRhZyl2PXZvaWQgMD09PW0ubWVtb2l6ZWRQcm9wcy5mYWxsYmFjaz8hMTpudWxsPT09bS5tZW1vaXplZFN0YXRlO2lmKHYpe2w9bS51cGRhdGVRdWV1ZTtudWxsPT09bD8obD1uZXcgU2V0LGwuYWRkKHApLG0udXBkYXRlUXVldWU9bCk6bC5hZGQocCk7aWYoMD09PShtLm1vZGUmMSkpe20uZWZmZWN0VGFnfD1cbjY0O2suZWZmZWN0VGFnJj0tMTk1NzsxPT09ay50YWcmJihudWxsPT09ay5hbHRlcm5hdGU/ay50YWc9MTc6KGc9bmYoMTA3Mzc0MTgyMyksZy50YWc9c2YscGYoayxnKSkpO2suZXhwaXJhdGlvblRpbWU9MTA3Mzc0MTgyMzticmVhayBhfWs9aDtsPWc7dmFyIFI9ay5waW5nQ2FjaGU7bnVsbD09PVI/KFI9ay5waW5nQ2FjaGU9bmV3IEJoLHY9bmV3IFNldCxSLnNldChwLHYpKToodj1SLmdldChwKSx2b2lkIDA9PT12JiYodj1uZXcgU2V0LFIuc2V0KHAsdikpKTt2LmhhcyhsKXx8KHYuYWRkKGwpLGs9ZWkuYmluZChudWxsLGsscCxsKSxwLnRoZW4oayxrKSk7LTE9PT10P2g9MTA3Mzc0MTgyMzooLTE9PT1BJiYoQT0xMCooMTA3Mzc0MTgyMi1nZihoLGcpKS01RTMpLGg9QSt0KTswPD1oJiZNaDxoJiYoTWg9aCk7bS5lZmZlY3RUYWd8PTIwNDg7bS5leHBpcmF0aW9uVGltZT1nO2JyZWFrIGF9bT1tLnJldHVybn13aGlsZShudWxsIT09bSk7bT1FcnJvcigoaWMoay50eXBlKXx8XCJBIFJlYWN0IGNvbXBvbmVudFwiKStcblwiIHN1c3BlbmRlZCB3aGlsZSByZW5kZXJpbmcsIGJ1dCBubyBmYWxsYmFjayBVSSB3YXMgc3BlY2lmaWVkLlxcblxcbkFkZCBhIDxTdXNwZW5zZSBmYWxsYmFjaz0uLi4+IGNvbXBvbmVudCBoaWdoZXIgaW4gdGhlIHRyZWUgdG8gcHJvdmlkZSBhIGxvYWRpbmcgaW5kaWNhdG9yIG9yIHBsYWNlaG9sZGVyIHRvIGRpc3BsYXkuXCIramMoaykpfU5oPSEwO209amgobSxrKTtoPWw7ZG97c3dpdGNoKGgudGFnKXtjYXNlIDM6aC5lZmZlY3RUYWd8PTIwNDg7aC5leHBpcmF0aW9uVGltZT1nO2c9Q2goaCxtLGcpO2VoKGgsZyk7YnJlYWsgYTtjYXNlIDE6aWYodD1tLEE9aC50eXBlLGs9aC5zdGF0ZU5vZGUsMD09PShoLmVmZmVjdFRhZyY2NCkmJihcImZ1bmN0aW9uXCI9PT10eXBlb2YgQS5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3J8fG51bGwhPT1rJiZcImZ1bmN0aW9uXCI9PT10eXBlb2Ygay5jb21wb25lbnREaWRDYXRjaCYmKG51bGw9PT1GaHx8IUZoLmhhcyhrKSkpKXtoLmVmZmVjdFRhZ3w9MjA0ODtcbmguZXhwaXJhdGlvblRpbWU9ZztnPUVoKGgsdCxnKTtlaChoLGcpO2JyZWFrIGF9fWg9aC5yZXR1cm59d2hpbGUobnVsbCE9PWgpfVQ9YWkoZik7Y29udGludWV9fX1icmVha313aGlsZSgxKTtLaD0hMTtIaC5jdXJyZW50PWM7WWc9WGc9V2c9bnVsbDtsZygpO2lmKGUpTGg9bnVsbCxhLmZpbmlzaGVkV29yaz1udWxsO2Vsc2UgaWYobnVsbCE9PVQpYS5maW5pc2hlZFdvcms9bnVsbDtlbHNle2M9YS5jdXJyZW50LmFsdGVybmF0ZTtudWxsPT09Yz94KFwiMjgxXCIpOnZvaWQgMDtMaD1udWxsO2lmKE5oKXtlPWEubGF0ZXN0UGVuZGluZ1RpbWU7Zj1hLmxhdGVzdFN1c3BlbmRlZFRpbWU7Zz1hLmxhdGVzdFBpbmdlZFRpbWU7aWYoMCE9PWUmJmU8ZHx8MCE9PWYmJmY8ZHx8MCE9PWcmJmc8ZCl7ZmYoYSxkKTtmaShhLGMsZCxhLmV4cGlyYXRpb25UaW1lLC0xKTtyZXR1cm59aWYoIWEuZGlkRXJyb3ImJmIpe2EuZGlkRXJyb3I9ITA7ZD1hLm5leHRFeHBpcmF0aW9uVGltZVRvV29ya09uPWQ7XG5iPWEuZXhwaXJhdGlvblRpbWU9MTA3Mzc0MTgyMztmaShhLGMsZCxiLC0xKTtyZXR1cm59fWImJi0xIT09TWg/KGZmKGEsZCksYj0xMCooMTA3Mzc0MTgyMi1nZihhLGQpKSxiPE1oJiYoTWg9YiksYj0xMCooMTA3Mzc0MTgyMi1sZigpKSxiPU1oLWIsZmkoYSxjLGQsYS5leHBpcmF0aW9uVGltZSwwPmI/MDpiKSk6KGEucGVuZGluZ0NvbW1pdEV4cGlyYXRpb25UaW1lPWQsYS5maW5pc2hlZFdvcms9Yyl9fVxuZnVuY3Rpb24gc2goYSxiKXtmb3IodmFyIGM9YS5yZXR1cm47bnVsbCE9PWM7KXtzd2l0Y2goYy50YWcpe2Nhc2UgMTp2YXIgZD1jLnN0YXRlTm9kZTtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYy50eXBlLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcnx8XCJmdW5jdGlvblwiPT09dHlwZW9mIGQuY29tcG9uZW50RGlkQ2F0Y2gmJihudWxsPT09Rmh8fCFGaC5oYXMoZCkpKXthPWpoKGIsYSk7YT1FaChjLGEsMTA3Mzc0MTgyMyk7cGYoYyxhKTtxZihjLDEwNzM3NDE4MjMpO3JldHVybn1icmVhaztjYXNlIDM6YT1qaChiLGEpO2E9Q2goYyxhLDEwNzM3NDE4MjMpO3BmKGMsYSk7cWYoYywxMDczNzQxODIzKTtyZXR1cm59Yz1jLnJldHVybn0zPT09YS50YWcmJihjPWpoKGIsYSksYz1DaChhLGMsMTA3Mzc0MTgyMykscGYoYSxjKSxxZihhLDEwNzM3NDE4MjMpKX1cbmZ1bmN0aW9uIG1mKGEsYil7dmFyIGM9ci51bnN0YWJsZV9nZXRDdXJyZW50UHJpb3JpdHlMZXZlbCgpLGQ9dm9pZCAwO2lmKDA9PT0oYi5tb2RlJjEpKWQ9MTA3Mzc0MTgyMztlbHNlIGlmKEtoJiYhT2gpZD1VO2Vsc2V7c3dpdGNoKGMpe2Nhc2Ugci51bnN0YWJsZV9JbW1lZGlhdGVQcmlvcml0eTpkPTEwNzM3NDE4MjM7YnJlYWs7Y2FzZSByLnVuc3RhYmxlX1VzZXJCbG9ja2luZ1ByaW9yaXR5OmQ9MTA3Mzc0MTgyMi0xMCooKCgxMDczNzQxODIyLWErMTUpLzEwfDApKzEpO2JyZWFrO2Nhc2Ugci51bnN0YWJsZV9Ob3JtYWxQcmlvcml0eTpkPTEwNzM3NDE4MjItMjUqKCgoMTA3Mzc0MTgyMi1hKzUwMCkvMjV8MCkrMSk7YnJlYWs7Y2FzZSByLnVuc3RhYmxlX0xvd1ByaW9yaXR5OmNhc2Ugci51bnN0YWJsZV9JZGxlUHJpb3JpdHk6ZD0xO2JyZWFrO2RlZmF1bHQ6eChcIjMxM1wiKX1udWxsIT09TGgmJmQ9PT1VJiYtLWR9Yz09PXIudW5zdGFibGVfVXNlckJsb2NraW5nUHJpb3JpdHkmJlxuKDA9PT1naXx8ZDxnaSkmJihnaT1kKTtyZXR1cm4gZH1mdW5jdGlvbiBlaShhLGIsYyl7dmFyIGQ9YS5waW5nQ2FjaGU7bnVsbCE9PWQmJmQuZGVsZXRlKGIpO2lmKG51bGwhPT1MaCYmVT09PWMpTGg9bnVsbDtlbHNlIGlmKGI9YS5lYXJsaWVzdFN1c3BlbmRlZFRpbWUsZD1hLmxhdGVzdFN1c3BlbmRlZFRpbWUsMCE9PWImJmM8PWImJmM+PWQpe2EuZGlkRXJyb3I9ITE7Yj1hLmxhdGVzdFBpbmdlZFRpbWU7aWYoMD09PWJ8fGI+YylhLmxhdGVzdFBpbmdlZFRpbWU9YztkZihjLGEpO2M9YS5leHBpcmF0aW9uVGltZTswIT09YyYmWGgoYSxjKX19ZnVuY3Rpb24gQWgoYSxiKXt2YXIgYz1hLnN0YXRlTm9kZTtudWxsIT09YyYmYy5kZWxldGUoYik7Yj1sZigpO2I9bWYoYixhKTthPWhpKGEsYik7bnVsbCE9PWEmJihjZihhLGIpLGI9YS5leHBpcmF0aW9uVGltZSwwIT09YiYmWGgoYSxiKSl9XG5mdW5jdGlvbiBoaShhLGIpe2EuZXhwaXJhdGlvblRpbWU8YiYmKGEuZXhwaXJhdGlvblRpbWU9Yik7dmFyIGM9YS5hbHRlcm5hdGU7bnVsbCE9PWMmJmMuZXhwaXJhdGlvblRpbWU8YiYmKGMuZXhwaXJhdGlvblRpbWU9Yik7dmFyIGQ9YS5yZXR1cm4sZT1udWxsO2lmKG51bGw9PT1kJiYzPT09YS50YWcpZT1hLnN0YXRlTm9kZTtlbHNlIGZvcig7bnVsbCE9PWQ7KXtjPWQuYWx0ZXJuYXRlO2QuY2hpbGRFeHBpcmF0aW9uVGltZTxiJiYoZC5jaGlsZEV4cGlyYXRpb25UaW1lPWIpO251bGwhPT1jJiZjLmNoaWxkRXhwaXJhdGlvblRpbWU8YiYmKGMuY2hpbGRFeHBpcmF0aW9uVGltZT1iKTtpZihudWxsPT09ZC5yZXR1cm4mJjM9PT1kLnRhZyl7ZT1kLnN0YXRlTm9kZTticmVha31kPWQucmV0dXJufXJldHVybiBlfVxuZnVuY3Rpb24gcWYoYSxiKXthPWhpKGEsYik7bnVsbCE9PWEmJighS2gmJjAhPT1VJiZiPlUmJlNoKCksY2YoYSxiKSxLaCYmIU9oJiZMaD09PWF8fFhoKGEsYS5leHBpcmF0aW9uVGltZSksaWk+amkmJihpaT0wLHgoXCIxODVcIikpKX1mdW5jdGlvbiBraShhLGIsYyxkLGUpe3JldHVybiByLnVuc3RhYmxlX3J1bldpdGhQcmlvcml0eShyLnVuc3RhYmxlX0ltbWVkaWF0ZVByaW9yaXR5LGZ1bmN0aW9uKCl7cmV0dXJuIGEoYixjLGQsZSl9KX12YXIgbGk9bnVsbCxZPW51bGwsbWk9MCxuaT12b2lkIDAsVz0hMSxvaT1udWxsLFo9MCxnaT0wLHBpPSExLHFpPW51bGwsWD0hMSxyaT0hMSxzaT1udWxsLHRpPXIudW5zdGFibGVfbm93KCksdWk9MTA3Mzc0MTgyMi0odGkvMTB8MCksdmk9dWksamk9NTAsaWk9MCx3aT1udWxsO2Z1bmN0aW9uIHhpKCl7dWk9MTA3Mzc0MTgyMi0oKHIudW5zdGFibGVfbm93KCktdGkpLzEwfDApfVxuZnVuY3Rpb24geWkoYSxiKXtpZigwIT09bWkpe2lmKGI8bWkpcmV0dXJuO251bGwhPT1uaSYmci51bnN0YWJsZV9jYW5jZWxDYWxsYmFjayhuaSl9bWk9YjthPXIudW5zdGFibGVfbm93KCktdGk7bmk9ci51bnN0YWJsZV9zY2hlZHVsZUNhbGxiYWNrKHppLHt0aW1lb3V0OjEwKigxMDczNzQxODIyLWIpLWF9KX1mdW5jdGlvbiBmaShhLGIsYyxkLGUpe2EuZXhwaXJhdGlvblRpbWU9ZDswIT09ZXx8ZGkoKT8wPGUmJihhLnRpbWVvdXRIYW5kbGU9eWUoQWkuYmluZChudWxsLGEsYixjKSxlKSk6KGEucGVuZGluZ0NvbW1pdEV4cGlyYXRpb25UaW1lPWMsYS5maW5pc2hlZFdvcms9Yil9ZnVuY3Rpb24gQWkoYSxiLGMpe2EucGVuZGluZ0NvbW1pdEV4cGlyYXRpb25UaW1lPWM7YS5maW5pc2hlZFdvcms9Yjt4aSgpO3ZpPXVpO0JpKGEsYyl9ZnVuY3Rpb24gJGgoYSxiKXthLmV4cGlyYXRpb25UaW1lPWI7YS5maW5pc2hlZFdvcms9bnVsbH1cbmZ1bmN0aW9uIGxmKCl7aWYoVylyZXR1cm4gdmk7Q2koKTtpZigwPT09Wnx8MT09PVopeGkoKSx2aT11aTtyZXR1cm4gdml9ZnVuY3Rpb24gWGgoYSxiKXtudWxsPT09YS5uZXh0U2NoZWR1bGVkUm9vdD8oYS5leHBpcmF0aW9uVGltZT1iLG51bGw9PT1ZPyhsaT1ZPWEsYS5uZXh0U2NoZWR1bGVkUm9vdD1hKTooWT1ZLm5leHRTY2hlZHVsZWRSb290PWEsWS5uZXh0U2NoZWR1bGVkUm9vdD1saSkpOmI+YS5leHBpcmF0aW9uVGltZSYmKGEuZXhwaXJhdGlvblRpbWU9Yik7V3x8KFg/cmkmJihvaT1hLFo9MTA3Mzc0MTgyMyxEaShhLDEwNzM3NDE4MjMsITEpKToxMDczNzQxODIzPT09Yj9ZaCgxMDczNzQxODIzLCExKTp5aShhLGIpKX1cbmZ1bmN0aW9uIENpKCl7dmFyIGE9MCxiPW51bGw7aWYobnVsbCE9PVkpZm9yKHZhciBjPVksZD1saTtudWxsIT09ZDspe3ZhciBlPWQuZXhwaXJhdGlvblRpbWU7aWYoMD09PWUpe251bGw9PT1jfHxudWxsPT09WT94KFwiMjQ0XCIpOnZvaWQgMDtpZihkPT09ZC5uZXh0U2NoZWR1bGVkUm9vdCl7bGk9WT1kLm5leHRTY2hlZHVsZWRSb290PW51bGw7YnJlYWt9ZWxzZSBpZihkPT09bGkpbGk9ZT1kLm5leHRTY2hlZHVsZWRSb290LFkubmV4dFNjaGVkdWxlZFJvb3Q9ZSxkLm5leHRTY2hlZHVsZWRSb290PW51bGw7ZWxzZSBpZihkPT09WSl7WT1jO1kubmV4dFNjaGVkdWxlZFJvb3Q9bGk7ZC5uZXh0U2NoZWR1bGVkUm9vdD1udWxsO2JyZWFrfWVsc2UgYy5uZXh0U2NoZWR1bGVkUm9vdD1kLm5leHRTY2hlZHVsZWRSb290LGQubmV4dFNjaGVkdWxlZFJvb3Q9bnVsbDtkPWMubmV4dFNjaGVkdWxlZFJvb3R9ZWxzZXtlPmEmJihhPWUsYj1kKTtpZihkPT09WSlicmVhaztpZigxMDczNzQxODIzPT09XG5hKWJyZWFrO2M9ZDtkPWQubmV4dFNjaGVkdWxlZFJvb3R9fW9pPWI7Wj1hfXZhciBFaT0hMTtmdW5jdGlvbiBkaSgpe3JldHVybiBFaT8hMDpyLnVuc3RhYmxlX3Nob3VsZFlpZWxkKCk/RWk9ITA6ITF9ZnVuY3Rpb24gemkoKXt0cnl7aWYoIWRpKCkmJm51bGwhPT1saSl7eGkoKTt2YXIgYT1saTtkb3t2YXIgYj1hLmV4cGlyYXRpb25UaW1lOzAhPT1iJiZ1aTw9YiYmKGEubmV4dEV4cGlyYXRpb25UaW1lVG9Xb3JrT249dWkpO2E9YS5uZXh0U2NoZWR1bGVkUm9vdH13aGlsZShhIT09bGkpfVloKDAsITApfWZpbmFsbHl7RWk9ITF9fVxuZnVuY3Rpb24gWWgoYSxiKXtDaSgpO2lmKGIpZm9yKHhpKCksdmk9dWk7bnVsbCE9PW9pJiYwIT09WiYmYTw9WiYmIShFaSYmdWk+Wik7KURpKG9pLFosdWk+WiksQ2koKSx4aSgpLHZpPXVpO2Vsc2UgZm9yKDtudWxsIT09b2kmJjAhPT1aJiZhPD1aOylEaShvaSxaLCExKSxDaSgpO2ImJihtaT0wLG5pPW51bGwpOzAhPT1aJiZ5aShvaSxaKTtpaT0wO3dpPW51bGw7aWYobnVsbCE9PXNpKWZvcihhPXNpLHNpPW51bGwsYj0wO2I8YS5sZW5ndGg7YisrKXt2YXIgYz1hW2JdO3RyeXtjLl9vbkNvbXBsZXRlKCl9Y2F0Y2goZCl7cGl8fChwaT0hMCxxaT1kKX19aWYocGkpdGhyb3cgYT1xaSxxaT1udWxsLHBpPSExLGE7fWZ1bmN0aW9uIEJpKGEsYil7Vz94KFwiMjUzXCIpOnZvaWQgMDtvaT1hO1o9YjtEaShhLGIsITEpO1loKDEwNzM3NDE4MjMsITEpfVxuZnVuY3Rpb24gRGkoYSxiLGMpe1c/eChcIjI0NVwiKTp2b2lkIDA7Vz0hMDtpZihjKXt2YXIgZD1hLmZpbmlzaGVkV29yaztudWxsIT09ZD9GaShhLGQsYik6KGEuZmluaXNoZWRXb3JrPW51bGwsZD1hLnRpbWVvdXRIYW5kbGUsLTEhPT1kJiYoYS50aW1lb3V0SGFuZGxlPS0xLHplKGQpKSxjaShhLGMpLGQ9YS5maW5pc2hlZFdvcmssbnVsbCE9PWQmJihkaSgpP2EuZmluaXNoZWRXb3JrPWQ6RmkoYSxkLGIpKSl9ZWxzZSBkPWEuZmluaXNoZWRXb3JrLG51bGwhPT1kP0ZpKGEsZCxiKTooYS5maW5pc2hlZFdvcms9bnVsbCxkPWEudGltZW91dEhhbmRsZSwtMSE9PWQmJihhLnRpbWVvdXRIYW5kbGU9LTEsemUoZCkpLGNpKGEsYyksZD1hLmZpbmlzaGVkV29yayxudWxsIT09ZCYmRmkoYSxkLGIpKTtXPSExfVxuZnVuY3Rpb24gRmkoYSxiLGMpe3ZhciBkPWEuZmlyc3RCYXRjaDtpZihudWxsIT09ZCYmZC5fZXhwaXJhdGlvblRpbWU+PWMmJihudWxsPT09c2k/c2k9W2RdOnNpLnB1c2goZCksZC5fZGVmZXIpKXthLmZpbmlzaGVkV29yaz1iO2EuZXhwaXJhdGlvblRpbWU9MDtyZXR1cm59YS5maW5pc2hlZFdvcms9bnVsbDthPT09d2k/aWkrKzood2k9YSxpaT0wKTtyLnVuc3RhYmxlX3J1bldpdGhQcmlvcml0eShyLnVuc3RhYmxlX0ltbWVkaWF0ZVByaW9yaXR5LGZ1bmN0aW9uKCl7WmgoYSxiKX0pfWZ1bmN0aW9uIERoKGEpe251bGw9PT1vaT94KFwiMjQ2XCIpOnZvaWQgMDtvaS5leHBpcmF0aW9uVGltZT0wO3BpfHwocGk9ITAscWk9YSl9ZnVuY3Rpb24gR2koYSxiKXt2YXIgYz1YO1g9ITA7dHJ5e3JldHVybiBhKGIpfWZpbmFsbHl7KFg9Yyl8fFd8fFloKDEwNzM3NDE4MjMsITEpfX1cbmZ1bmN0aW9uIEhpKGEsYil7aWYoWCYmIXJpKXtyaT0hMDt0cnl7cmV0dXJuIGEoYil9ZmluYWxseXtyaT0hMX19cmV0dXJuIGEoYil9ZnVuY3Rpb24gSWkoYSxiLGMpe1h8fFd8fDA9PT1naXx8KFloKGdpLCExKSxnaT0wKTt2YXIgZD1YO1g9ITA7dHJ5e3JldHVybiByLnVuc3RhYmxlX3J1bldpdGhQcmlvcml0eShyLnVuc3RhYmxlX1VzZXJCbG9ja2luZ1ByaW9yaXR5LGZ1bmN0aW9uKCl7cmV0dXJuIGEoYixjKX0pfWZpbmFsbHl7KFg9ZCl8fFd8fFloKDEwNzM3NDE4MjMsITEpfX1cbmZ1bmN0aW9uIEppKGEsYixjLGQsZSl7dmFyIGY9Yi5jdXJyZW50O2E6aWYoYyl7Yz1jLl9yZWFjdEludGVybmFsRmliZXI7Yjp7Mj09PWVkKGMpJiYxPT09Yy50YWc/dm9pZCAwOngoXCIxNzBcIik7dmFyIGc9Yztkb3tzd2l0Y2goZy50YWcpe2Nhc2UgMzpnPWcuc3RhdGVOb2RlLmNvbnRleHQ7YnJlYWsgYjtjYXNlIDE6aWYoSihnLnR5cGUpKXtnPWcuc3RhdGVOb2RlLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkTWVyZ2VkQ2hpbGRDb250ZXh0O2JyZWFrIGJ9fWc9Zy5yZXR1cm59d2hpbGUobnVsbCE9PWcpO3goXCIxNzFcIik7Zz12b2lkIDB9aWYoMT09PWMudGFnKXt2YXIgaD1jLnR5cGU7aWYoSihoKSl7Yz1OZShjLGgsZyk7YnJlYWsgYX19Yz1nfWVsc2UgYz1IZTtudWxsPT09Yi5jb250ZXh0P2IuY29udGV4dD1jOmIucGVuZGluZ0NvbnRleHQ9YztiPWU7ZT1uZihkKTtlLnBheWxvYWQ9e2VsZW1lbnQ6YX07Yj12b2lkIDA9PT1iP251bGw6YjtudWxsIT09YiYmKGUuY2FsbGJhY2s9Yik7XG5vZigpO3BmKGYsZSk7cWYoZixkKTtyZXR1cm4gZH1mdW5jdGlvbiBLaShhLGIsYyxkKXt2YXIgZT1iLmN1cnJlbnQsZj1sZigpO2U9bWYoZixlKTtyZXR1cm4gSmkoYSxiLGMsZSxkKX1mdW5jdGlvbiBMaShhKXthPWEuY3VycmVudDtpZighYS5jaGlsZClyZXR1cm4gbnVsbDtzd2l0Y2goYS5jaGlsZC50YWcpe2Nhc2UgNTpyZXR1cm4gYS5jaGlsZC5zdGF0ZU5vZGU7ZGVmYXVsdDpyZXR1cm4gYS5jaGlsZC5zdGF0ZU5vZGV9fWZ1bmN0aW9uIE1pKGEsYixjKXt2YXIgZD0zPGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PWFyZ3VtZW50c1szXT9hcmd1bWVudHNbM106bnVsbDtyZXR1cm57JCR0eXBlb2Y6V2Isa2V5Om51bGw9PWQ/bnVsbDpcIlwiK2QsY2hpbGRyZW46YSxjb250YWluZXJJbmZvOmIsaW1wbGVtZW50YXRpb246Y319XG5BYj1mdW5jdGlvbihhLGIsYyl7c3dpdGNoKGIpe2Nhc2UgXCJpbnB1dFwiOnljKGEsYyk7Yj1jLm5hbWU7aWYoXCJyYWRpb1wiPT09Yy50eXBlJiZudWxsIT1iKXtmb3IoYz1hO2MucGFyZW50Tm9kZTspYz1jLnBhcmVudE5vZGU7Yz1jLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFtuYW1lPVwiK0pTT04uc3RyaW5naWZ5KFwiXCIrYikrJ11bdHlwZT1cInJhZGlvXCJdJyk7Zm9yKGI9MDtiPGMubGVuZ3RoO2IrKyl7dmFyIGQ9Y1tiXTtpZihkIT09YSYmZC5mb3JtPT09YS5mb3JtKXt2YXIgZT1LYShkKTtlP3ZvaWQgMDp4KFwiOTBcIik7U2IoZCk7eWMoZCxlKX19fWJyZWFrO2Nhc2UgXCJ0ZXh0YXJlYVwiOmRlKGEsYyk7YnJlYWs7Y2FzZSBcInNlbGVjdFwiOmI9Yy52YWx1ZSxudWxsIT1iJiZhZShhLCEhYy5tdWx0aXBsZSxiLCExKX19O1xuZnVuY3Rpb24gTmkoYSl7dmFyIGI9MTA3Mzc0MTgyMi0yNSooKCgxMDczNzQxODIyLWxmKCkrNTAwKS8yNXwwKSsxKTtiPj1KaCYmKGI9SmgtMSk7dGhpcy5fZXhwaXJhdGlvblRpbWU9Smg9Yjt0aGlzLl9yb290PWE7dGhpcy5fY2FsbGJhY2tzPXRoaXMuX25leHQ9bnVsbDt0aGlzLl9oYXNDaGlsZHJlbj10aGlzLl9kaWRDb21wbGV0ZT0hMTt0aGlzLl9jaGlsZHJlbj1udWxsO3RoaXMuX2RlZmVyPSEwfU5pLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24oYSl7dGhpcy5fZGVmZXI/dm9pZCAwOngoXCIyNTBcIik7dGhpcy5faGFzQ2hpbGRyZW49ITA7dGhpcy5fY2hpbGRyZW49YTt2YXIgYj10aGlzLl9yb290Ll9pbnRlcm5hbFJvb3QsYz10aGlzLl9leHBpcmF0aW9uVGltZSxkPW5ldyBPaTtKaShhLGIsbnVsbCxjLGQuX29uQ29tbWl0KTtyZXR1cm4gZH07XG5OaS5wcm90b3R5cGUudGhlbj1mdW5jdGlvbihhKXtpZih0aGlzLl9kaWRDb21wbGV0ZSlhKCk7ZWxzZXt2YXIgYj10aGlzLl9jYWxsYmFja3M7bnVsbD09PWImJihiPXRoaXMuX2NhbGxiYWNrcz1bXSk7Yi5wdXNoKGEpfX07XG5OaS5wcm90b3R5cGUuY29tbWl0PWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5fcm9vdC5faW50ZXJuYWxSb290LGI9YS5maXJzdEJhdGNoO3RoaXMuX2RlZmVyJiZudWxsIT09Yj92b2lkIDA6eChcIjI1MVwiKTtpZih0aGlzLl9oYXNDaGlsZHJlbil7dmFyIGM9dGhpcy5fZXhwaXJhdGlvblRpbWU7aWYoYiE9PXRoaXMpe3RoaXMuX2hhc0NoaWxkcmVuJiYoYz10aGlzLl9leHBpcmF0aW9uVGltZT1iLl9leHBpcmF0aW9uVGltZSx0aGlzLnJlbmRlcih0aGlzLl9jaGlsZHJlbikpO2Zvcih2YXIgZD1udWxsLGU9YjtlIT09dGhpczspZD1lLGU9ZS5fbmV4dDtudWxsPT09ZD94KFwiMjUxXCIpOnZvaWQgMDtkLl9uZXh0PWUuX25leHQ7dGhpcy5fbmV4dD1iO2EuZmlyc3RCYXRjaD10aGlzfXRoaXMuX2RlZmVyPSExO0JpKGEsYyk7Yj10aGlzLl9uZXh0O3RoaXMuX25leHQ9bnVsbDtiPWEuZmlyc3RCYXRjaD1iO251bGwhPT1iJiZiLl9oYXNDaGlsZHJlbiYmYi5yZW5kZXIoYi5fY2hpbGRyZW4pfWVsc2UgdGhpcy5fbmV4dD1cbm51bGwsdGhpcy5fZGVmZXI9ITF9O05pLnByb3RvdHlwZS5fb25Db21wbGV0ZT1mdW5jdGlvbigpe2lmKCF0aGlzLl9kaWRDb21wbGV0ZSl7dGhpcy5fZGlkQ29tcGxldGU9ITA7dmFyIGE9dGhpcy5fY2FsbGJhY2tzO2lmKG51bGwhPT1hKWZvcih2YXIgYj0wO2I8YS5sZW5ndGg7YisrKSgwLGFbYl0pKCl9fTtmdW5jdGlvbiBPaSgpe3RoaXMuX2NhbGxiYWNrcz1udWxsO3RoaXMuX2RpZENvbW1pdD0hMTt0aGlzLl9vbkNvbW1pdD10aGlzLl9vbkNvbW1pdC5iaW5kKHRoaXMpfU9pLnByb3RvdHlwZS50aGVuPWZ1bmN0aW9uKGEpe2lmKHRoaXMuX2RpZENvbW1pdClhKCk7ZWxzZXt2YXIgYj10aGlzLl9jYWxsYmFja3M7bnVsbD09PWImJihiPXRoaXMuX2NhbGxiYWNrcz1bXSk7Yi5wdXNoKGEpfX07XG5PaS5wcm90b3R5cGUuX29uQ29tbWl0PWZ1bmN0aW9uKCl7aWYoIXRoaXMuX2RpZENvbW1pdCl7dGhpcy5fZGlkQ29tbWl0PSEwO3ZhciBhPXRoaXMuX2NhbGxiYWNrcztpZihudWxsIT09YSlmb3IodmFyIGI9MDtiPGEubGVuZ3RoO2IrKyl7dmFyIGM9YVtiXTtcImZ1bmN0aW9uXCIhPT10eXBlb2YgYz94KFwiMTkxXCIsYyk6dm9pZCAwO2MoKX19fTtcbmZ1bmN0aW9uIFBpKGEsYixjKXtiPUsoMyxudWxsLG51bGwsYj8zOjApO2E9e2N1cnJlbnQ6Yixjb250YWluZXJJbmZvOmEscGVuZGluZ0NoaWxkcmVuOm51bGwscGluZ0NhY2hlOm51bGwsZWFybGllc3RQZW5kaW5nVGltZTowLGxhdGVzdFBlbmRpbmdUaW1lOjAsZWFybGllc3RTdXNwZW5kZWRUaW1lOjAsbGF0ZXN0U3VzcGVuZGVkVGltZTowLGxhdGVzdFBpbmdlZFRpbWU6MCxkaWRFcnJvcjohMSxwZW5kaW5nQ29tbWl0RXhwaXJhdGlvblRpbWU6MCxmaW5pc2hlZFdvcms6bnVsbCx0aW1lb3V0SGFuZGxlOi0xLGNvbnRleHQ6bnVsbCxwZW5kaW5nQ29udGV4dDpudWxsLGh5ZHJhdGU6YyxuZXh0RXhwaXJhdGlvblRpbWVUb1dvcmtPbjowLGV4cGlyYXRpb25UaW1lOjAsZmlyc3RCYXRjaDpudWxsLG5leHRTY2hlZHVsZWRSb290Om51bGx9O3RoaXMuX2ludGVybmFsUm9vdD1iLnN0YXRlTm9kZT1hfVxuUGkucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMuX2ludGVybmFsUm9vdCxkPW5ldyBPaTtiPXZvaWQgMD09PWI/bnVsbDpiO251bGwhPT1iJiZkLnRoZW4oYik7S2koYSxjLG51bGwsZC5fb25Db21taXQpO3JldHVybiBkfTtQaS5wcm90b3R5cGUudW5tb3VudD1mdW5jdGlvbihhKXt2YXIgYj10aGlzLl9pbnRlcm5hbFJvb3QsYz1uZXcgT2k7YT12b2lkIDA9PT1hP251bGw6YTtudWxsIT09YSYmYy50aGVuKGEpO0tpKG51bGwsYixudWxsLGMuX29uQ29tbWl0KTtyZXR1cm4gY307UGkucHJvdG90eXBlLmxlZ2FjeV9yZW5kZXJTdWJ0cmVlSW50b0NvbnRhaW5lcj1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9dGhpcy5faW50ZXJuYWxSb290LGU9bmV3IE9pO2M9dm9pZCAwPT09Yz9udWxsOmM7bnVsbCE9PWMmJmUudGhlbihjKTtLaShiLGQsYSxlLl9vbkNvbW1pdCk7cmV0dXJuIGV9O1xuUGkucHJvdG90eXBlLmNyZWF0ZUJhdGNoPWZ1bmN0aW9uKCl7dmFyIGE9bmV3IE5pKHRoaXMpLGI9YS5fZXhwaXJhdGlvblRpbWUsYz10aGlzLl9pbnRlcm5hbFJvb3QsZD1jLmZpcnN0QmF0Y2g7aWYobnVsbD09PWQpYy5maXJzdEJhdGNoPWEsYS5fbmV4dD1udWxsO2Vsc2V7Zm9yKGM9bnVsbDtudWxsIT09ZCYmZC5fZXhwaXJhdGlvblRpbWU+PWI7KWM9ZCxkPWQuX25leHQ7YS5fbmV4dD1kO251bGwhPT1jJiYoYy5fbmV4dD1hKX1yZXR1cm4gYX07ZnVuY3Rpb24gUWkoYSl7cmV0dXJuISghYXx8MSE9PWEubm9kZVR5cGUmJjkhPT1hLm5vZGVUeXBlJiYxMSE9PWEubm9kZVR5cGUmJig4IT09YS5ub2RlVHlwZXx8XCIgcmVhY3QtbW91bnQtcG9pbnQtdW5zdGFibGUgXCIhPT1hLm5vZGVWYWx1ZSkpfUdiPUdpO0hiPUlpO0liPWZ1bmN0aW9uKCl7V3x8MD09PWdpfHwoWWgoZ2ksITEpLGdpPTApfTtcbmZ1bmN0aW9uIFJpKGEsYil7Ynx8KGI9YT85PT09YS5ub2RlVHlwZT9hLmRvY3VtZW50RWxlbWVudDphLmZpcnN0Q2hpbGQ6bnVsbCxiPSEoIWJ8fDEhPT1iLm5vZGVUeXBlfHwhYi5oYXNBdHRyaWJ1dGUoXCJkYXRhLXJlYWN0cm9vdFwiKSkpO2lmKCFiKWZvcih2YXIgYztjPWEubGFzdENoaWxkOylhLnJlbW92ZUNoaWxkKGMpO3JldHVybiBuZXcgUGkoYSwhMSxiKX1cbmZ1bmN0aW9uIFNpKGEsYixjLGQsZSl7dmFyIGY9Yy5fcmVhY3RSb290Q29udGFpbmVyO2lmKGYpe2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBlKXt2YXIgZz1lO2U9ZnVuY3Rpb24oKXt2YXIgYT1MaShmLl9pbnRlcm5hbFJvb3QpO2cuY2FsbChhKX19bnVsbCE9YT9mLmxlZ2FjeV9yZW5kZXJTdWJ0cmVlSW50b0NvbnRhaW5lcihhLGIsZSk6Zi5yZW5kZXIoYixlKX1lbHNle2Y9Yy5fcmVhY3RSb290Q29udGFpbmVyPVJpKGMsZCk7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGUpe3ZhciBoPWU7ZT1mdW5jdGlvbigpe3ZhciBhPUxpKGYuX2ludGVybmFsUm9vdCk7aC5jYWxsKGEpfX1IaShmdW5jdGlvbigpe251bGwhPWE/Zi5sZWdhY3lfcmVuZGVyU3VidHJlZUludG9Db250YWluZXIoYSxiLGUpOmYucmVuZGVyKGIsZSl9KX1yZXR1cm4gTGkoZi5faW50ZXJuYWxSb290KX1cbmZ1bmN0aW9uIFRpKGEsYil7dmFyIGM9Mjxhcmd1bWVudHMubGVuZ3RoJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOm51bGw7UWkoYik/dm9pZCAwOngoXCIyMDBcIik7cmV0dXJuIE1pKGEsYixudWxsLGMpfVxudmFyIFZpPXtjcmVhdGVQb3J0YWw6VGksZmluZERPTU5vZGU6ZnVuY3Rpb24oYSl7aWYobnVsbD09YSlyZXR1cm4gbnVsbDtpZigxPT09YS5ub2RlVHlwZSlyZXR1cm4gYTt2YXIgYj1hLl9yZWFjdEludGVybmFsRmliZXI7dm9pZCAwPT09YiYmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhLnJlbmRlcj94KFwiMTg4XCIpOngoXCIyNjhcIixPYmplY3Qua2V5cyhhKSkpO2E9aGQoYik7YT1udWxsPT09YT9udWxsOmEuc3RhdGVOb2RlO3JldHVybiBhfSxoeWRyYXRlOmZ1bmN0aW9uKGEsYixjKXtRaShiKT92b2lkIDA6eChcIjIwMFwiKTtyZXR1cm4gU2kobnVsbCxhLGIsITAsYyl9LHJlbmRlcjpmdW5jdGlvbihhLGIsYyl7UWkoYik/dm9pZCAwOngoXCIyMDBcIik7cmV0dXJuIFNpKG51bGwsYSxiLCExLGMpfSx1bnN0YWJsZV9yZW5kZXJTdWJ0cmVlSW50b0NvbnRhaW5lcjpmdW5jdGlvbihhLGIsYyxkKXtRaShjKT92b2lkIDA6eChcIjIwMFwiKTtudWxsPT1hfHx2b2lkIDA9PT1hLl9yZWFjdEludGVybmFsRmliZXI/XG54KFwiMzhcIik6dm9pZCAwO3JldHVybiBTaShhLGIsYywhMSxkKX0sdW5tb3VudENvbXBvbmVudEF0Tm9kZTpmdW5jdGlvbihhKXtRaShhKT92b2lkIDA6eChcIjQwXCIpO3JldHVybiBhLl9yZWFjdFJvb3RDb250YWluZXI/KEhpKGZ1bmN0aW9uKCl7U2kobnVsbCxudWxsLGEsITEsZnVuY3Rpb24oKXthLl9yZWFjdFJvb3RDb250YWluZXI9bnVsbH0pfSksITApOiExfSx1bnN0YWJsZV9jcmVhdGVQb3J0YWw6ZnVuY3Rpb24oKXtyZXR1cm4gVGkuYXBwbHkodm9pZCAwLGFyZ3VtZW50cyl9LHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzOkdpLHVuc3RhYmxlX2ludGVyYWN0aXZlVXBkYXRlczpJaSxmbHVzaFN5bmM6ZnVuY3Rpb24oYSxiKXtXP3goXCIxODdcIik6dm9pZCAwO3ZhciBjPVg7WD0hMDt0cnl7cmV0dXJuIGtpKGEsYil9ZmluYWxseXtYPWMsWWgoMTA3Mzc0MTgyMywhMSl9fSx1bnN0YWJsZV9jcmVhdGVSb290OlVpLHVuc3RhYmxlX2ZsdXNoQ29udHJvbGxlZDpmdW5jdGlvbihhKXt2YXIgYj1cblg7WD0hMDt0cnl7a2koYSl9ZmluYWxseXsoWD1iKXx8V3x8WWgoMTA3Mzc0MTgyMywhMSl9fSxfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDp7RXZlbnRzOltJYSxKYSxLYSxCYS5pbmplY3RFdmVudFBsdWdpbnNCeU5hbWUscGEsUWEsZnVuY3Rpb24oYSl7eWEoYSxQYSl9LEViLEZiLERkLERhXX19O2Z1bmN0aW9uIFVpKGEsYil7UWkoYSk/dm9pZCAwOngoXCIyOTlcIixcInVuc3RhYmxlX2NyZWF0ZVJvb3RcIik7cmV0dXJuIG5ldyBQaShhLCEwLG51bGwhPWImJiEwPT09Yi5oeWRyYXRlKX1cbihmdW5jdGlvbihhKXt2YXIgYj1hLmZpbmRGaWJlckJ5SG9zdEluc3RhbmNlO3JldHVybiBUZShuKHt9LGEse292ZXJyaWRlUHJvcHM6bnVsbCxjdXJyZW50RGlzcGF0Y2hlclJlZjpUYi5SZWFjdEN1cnJlbnREaXNwYXRjaGVyLGZpbmRIb3N0SW5zdGFuY2VCeUZpYmVyOmZ1bmN0aW9uKGEpe2E9aGQoYSk7cmV0dXJuIG51bGw9PT1hP251bGw6YS5zdGF0ZU5vZGV9LGZpbmRGaWJlckJ5SG9zdEluc3RhbmNlOmZ1bmN0aW9uKGEpe3JldHVybiBiP2IoYSk6bnVsbH19KSl9KSh7ZmluZEZpYmVyQnlIb3N0SW5zdGFuY2U6SGEsYnVuZGxlVHlwZTowLHZlcnNpb246XCIxNi44LjZcIixyZW5kZXJlclBhY2thZ2VOYW1lOlwicmVhY3QtZG9tXCJ9KTt2YXIgV2k9e2RlZmF1bHQ6Vml9LFhpPVdpJiZWaXx8V2k7bW9kdWxlLmV4cG9ydHM9WGkuZGVmYXVsdHx8WGk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvc2NoZWR1bGVyLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3NjaGVkdWxlci5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYwLjEzLjZcbiAqIHNjaGVkdWxlci5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgZD1udWxsLGU9ITEsZz0zLGs9LTEsbD0tMSxtPSExLG49ITE7ZnVuY3Rpb24gcCgpe2lmKCFtKXt2YXIgYT1kLmV4cGlyYXRpb25UaW1lO24/cSgpOm49ITA7cih0LGEpfX1cbmZ1bmN0aW9uIHUoKXt2YXIgYT1kLGI9ZC5uZXh0O2lmKGQ9PT1iKWQ9bnVsbDtlbHNle3ZhciBjPWQucHJldmlvdXM7ZD1jLm5leHQ9YjtiLnByZXZpb3VzPWN9YS5uZXh0PWEucHJldmlvdXM9bnVsbDtjPWEuY2FsbGJhY2s7Yj1hLmV4cGlyYXRpb25UaW1lO2E9YS5wcmlvcml0eUxldmVsO3ZhciBmPWcsUT1sO2c9YTtsPWI7dHJ5e3ZhciBoPWMoKX1maW5hbGx5e2c9ZixsPVF9aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGgpaWYoaD17Y2FsbGJhY2s6aCxwcmlvcml0eUxldmVsOmEsZXhwaXJhdGlvblRpbWU6YixuZXh0Om51bGwscHJldmlvdXM6bnVsbH0sbnVsbD09PWQpZD1oLm5leHQ9aC5wcmV2aW91cz1oO2Vsc2V7Yz1udWxsO2E9ZDtkb3tpZihhLmV4cGlyYXRpb25UaW1lPj1iKXtjPWE7YnJlYWt9YT1hLm5leHR9d2hpbGUoYSE9PWQpO251bGw9PT1jP2M9ZDpjPT09ZCYmKGQ9aCxwKCkpO2I9Yy5wcmV2aW91cztiLm5leHQ9Yy5wcmV2aW91cz1oO2gubmV4dD1jO2gucHJldmlvdXM9XG5ifX1mdW5jdGlvbiB2KCl7aWYoLTE9PT1rJiZudWxsIT09ZCYmMT09PWQucHJpb3JpdHlMZXZlbCl7bT0hMDt0cnl7ZG8gdSgpO3doaWxlKG51bGwhPT1kJiYxPT09ZC5wcmlvcml0eUxldmVsKX1maW5hbGx5e209ITEsbnVsbCE9PWQ/cCgpOm49ITF9fX1mdW5jdGlvbiB0KGEpe209ITA7dmFyIGI9ZTtlPWE7dHJ5e2lmKGEpZm9yKDtudWxsIT09ZDspe3ZhciBjPWV4cG9ydHMudW5zdGFibGVfbm93KCk7aWYoZC5leHBpcmF0aW9uVGltZTw9Yyl7ZG8gdSgpO3doaWxlKG51bGwhPT1kJiZkLmV4cGlyYXRpb25UaW1lPD1jKX1lbHNlIGJyZWFrfWVsc2UgaWYobnVsbCE9PWQpe2RvIHUoKTt3aGlsZShudWxsIT09ZCYmIXcoKSl9fWZpbmFsbHl7bT0hMSxlPWIsbnVsbCE9PWQ/cCgpOm49ITEsdigpfX1cbnZhciB4PURhdGUseT1cImZ1bmN0aW9uXCI9PT10eXBlb2Ygc2V0VGltZW91dD9zZXRUaW1lb3V0OnZvaWQgMCx6PVwiZnVuY3Rpb25cIj09PXR5cGVvZiBjbGVhclRpbWVvdXQ/Y2xlYXJUaW1lb3V0OnZvaWQgMCxBPVwiZnVuY3Rpb25cIj09PXR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWU/cmVxdWVzdEFuaW1hdGlvbkZyYW1lOnZvaWQgMCxCPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBjYW5jZWxBbmltYXRpb25GcmFtZT9jYW5jZWxBbmltYXRpb25GcmFtZTp2b2lkIDAsQyxEO2Z1bmN0aW9uIEUoYSl7Qz1BKGZ1bmN0aW9uKGIpe3ooRCk7YShiKX0pO0Q9eShmdW5jdGlvbigpe0IoQyk7YShleHBvcnRzLnVuc3RhYmxlX25vdygpKX0sMTAwKX1cbmlmKFwib2JqZWN0XCI9PT10eXBlb2YgcGVyZm9ybWFuY2UmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBwZXJmb3JtYW5jZS5ub3cpe3ZhciBGPXBlcmZvcm1hbmNlO2V4cG9ydHMudW5zdGFibGVfbm93PWZ1bmN0aW9uKCl7cmV0dXJuIEYubm93KCl9fWVsc2UgZXhwb3J0cy51bnN0YWJsZV9ub3c9ZnVuY3Rpb24oKXtyZXR1cm4geC5ub3coKX07dmFyIHIscSx3LEc9bnVsbDtcInVuZGVmaW5lZFwiIT09dHlwZW9mIHdpbmRvdz9HPXdpbmRvdzpcInVuZGVmaW5lZFwiIT09dHlwZW9mIGdsb2JhbCYmKEc9Z2xvYmFsKTtcbmlmKEcmJkcuX3NjaGVkTW9jayl7dmFyIEg9Ry5fc2NoZWRNb2NrO3I9SFswXTtxPUhbMV07dz1IWzJdO2V4cG9ydHMudW5zdGFibGVfbm93PUhbM119ZWxzZSBpZihcInVuZGVmaW5lZFwiPT09dHlwZW9mIHdpbmRvd3x8XCJmdW5jdGlvblwiIT09dHlwZW9mIE1lc3NhZ2VDaGFubmVsKXt2YXIgST1udWxsLEo9ZnVuY3Rpb24oYSl7aWYobnVsbCE9PUkpdHJ5e0koYSl9ZmluYWxseXtJPW51bGx9fTtyPWZ1bmN0aW9uKGEpe251bGwhPT1JP3NldFRpbWVvdXQociwwLGEpOihJPWEsc2V0VGltZW91dChKLDAsITEpKX07cT1mdW5jdGlvbigpe0k9bnVsbH07dz1mdW5jdGlvbigpe3JldHVybiExfX1lbHNle1widW5kZWZpbmVkXCIhPT10eXBlb2YgY29uc29sZSYmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBBJiZjb25zb2xlLmVycm9yKFwiVGhpcyBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUuIE1ha2Ugc3VyZSB0aGF0IHlvdSBsb2FkIGEgcG9seWZpbGwgaW4gb2xkZXIgYnJvd3NlcnMuIGh0dHBzOi8vZmIubWUvcmVhY3QtcG9seWZpbGxzXCIpLFxuXCJmdW5jdGlvblwiIT09dHlwZW9mIEImJmNvbnNvbGUuZXJyb3IoXCJUaGlzIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IGNhbmNlbEFuaW1hdGlvbkZyYW1lLiBNYWtlIHN1cmUgdGhhdCB5b3UgbG9hZCBhIHBvbHlmaWxsIGluIG9sZGVyIGJyb3dzZXJzLiBodHRwczovL2ZiLm1lL3JlYWN0LXBvbHlmaWxsc1wiKSk7dmFyIEs9bnVsbCxMPSExLE09LTEsTj0hMSxPPSExLFA9MCxSPTMzLFM9MzM7dz1mdW5jdGlvbigpe3JldHVybiBQPD1leHBvcnRzLnVuc3RhYmxlX25vdygpfTt2YXIgVD1uZXcgTWVzc2FnZUNoYW5uZWwsVT1ULnBvcnQyO1QucG9ydDEub25tZXNzYWdlPWZ1bmN0aW9uKCl7TD0hMTt2YXIgYT1LLGI9TTtLPW51bGw7TT0tMTt2YXIgYz1leHBvcnRzLnVuc3RhYmxlX25vdygpLGY9ITE7aWYoMD49UC1jKWlmKC0xIT09YiYmYjw9YylmPSEwO2Vsc2V7Tnx8KE49ITAsRShWKSk7Sz1hO009YjtyZXR1cm59aWYobnVsbCE9PWEpe089ITA7dHJ5e2EoZil9ZmluYWxseXtPPSExfX19O1xudmFyIFY9ZnVuY3Rpb24oYSl7aWYobnVsbCE9PUspe0UoVik7dmFyIGI9YS1QK1M7YjxTJiZSPFM/KDg+YiYmKGI9OCksUz1iPFI/UjpiKTpSPWI7UD1hK1M7THx8KEw9ITAsVS5wb3N0TWVzc2FnZSh2b2lkIDApKX1lbHNlIE49ITF9O3I9ZnVuY3Rpb24oYSxiKXtLPWE7TT1iO098fDA+Yj9VLnBvc3RNZXNzYWdlKHZvaWQgMCk6Tnx8KE49ITAsRShWKSl9O3E9ZnVuY3Rpb24oKXtLPW51bGw7TD0hMTtNPS0xfX1leHBvcnRzLnVuc3RhYmxlX0ltbWVkaWF0ZVByaW9yaXR5PTE7ZXhwb3J0cy51bnN0YWJsZV9Vc2VyQmxvY2tpbmdQcmlvcml0eT0yO2V4cG9ydHMudW5zdGFibGVfTm9ybWFsUHJpb3JpdHk9MztleHBvcnRzLnVuc3RhYmxlX0lkbGVQcmlvcml0eT01O2V4cG9ydHMudW5zdGFibGVfTG93UHJpb3JpdHk9NDtcbmV4cG9ydHMudW5zdGFibGVfcnVuV2l0aFByaW9yaXR5PWZ1bmN0aW9uKGEsYil7c3dpdGNoKGEpe2Nhc2UgMTpjYXNlIDI6Y2FzZSAzOmNhc2UgNDpjYXNlIDU6YnJlYWs7ZGVmYXVsdDphPTN9dmFyIGM9ZyxmPWs7Zz1hO2s9ZXhwb3J0cy51bnN0YWJsZV9ub3coKTt0cnl7cmV0dXJuIGIoKX1maW5hbGx5e2c9YyxrPWYsdigpfX07ZXhwb3J0cy51bnN0YWJsZV9uZXh0PWZ1bmN0aW9uKGEpe3N3aXRjaChnKXtjYXNlIDE6Y2FzZSAyOmNhc2UgMzp2YXIgYj0zO2JyZWFrO2RlZmF1bHQ6Yj1nfXZhciBjPWcsZj1rO2c9YjtrPWV4cG9ydHMudW5zdGFibGVfbm93KCk7dHJ5e3JldHVybiBhKCl9ZmluYWxseXtnPWMsaz1mLHYoKX19O1xuZXhwb3J0cy51bnN0YWJsZV9zY2hlZHVsZUNhbGxiYWNrPWZ1bmN0aW9uKGEsYil7dmFyIGM9LTEhPT1rP2s6ZXhwb3J0cy51bnN0YWJsZV9ub3coKTtpZihcIm9iamVjdFwiPT09dHlwZW9mIGImJm51bGwhPT1iJiZcIm51bWJlclwiPT09dHlwZW9mIGIudGltZW91dCliPWMrYi50aW1lb3V0O2Vsc2Ugc3dpdGNoKGcpe2Nhc2UgMTpiPWMrLTE7YnJlYWs7Y2FzZSAyOmI9YysyNTA7YnJlYWs7Y2FzZSA1OmI9YysxMDczNzQxODIzO2JyZWFrO2Nhc2UgNDpiPWMrMUU0O2JyZWFrO2RlZmF1bHQ6Yj1jKzVFM31hPXtjYWxsYmFjazphLHByaW9yaXR5TGV2ZWw6ZyxleHBpcmF0aW9uVGltZTpiLG5leHQ6bnVsbCxwcmV2aW91czpudWxsfTtpZihudWxsPT09ZClkPWEubmV4dD1hLnByZXZpb3VzPWEscCgpO2Vsc2V7Yz1udWxsO3ZhciBmPWQ7ZG97aWYoZi5leHBpcmF0aW9uVGltZT5iKXtjPWY7YnJlYWt9Zj1mLm5leHR9d2hpbGUoZiE9PWQpO251bGw9PT1jP2M9ZDpjPT09ZCYmKGQ9YSxwKCkpO1xuYj1jLnByZXZpb3VzO2IubmV4dD1jLnByZXZpb3VzPWE7YS5uZXh0PWM7YS5wcmV2aW91cz1ifXJldHVybiBhfTtleHBvcnRzLnVuc3RhYmxlX2NhbmNlbENhbGxiYWNrPWZ1bmN0aW9uKGEpe3ZhciBiPWEubmV4dDtpZihudWxsIT09Yil7aWYoYj09PWEpZD1udWxsO2Vsc2V7YT09PWQmJihkPWIpO3ZhciBjPWEucHJldmlvdXM7Yy5uZXh0PWI7Yi5wcmV2aW91cz1jfWEubmV4dD1hLnByZXZpb3VzPW51bGx9fTtleHBvcnRzLnVuc3RhYmxlX3dyYXBDYWxsYmFjaz1mdW5jdGlvbihhKXt2YXIgYj1nO3JldHVybiBmdW5jdGlvbigpe3ZhciBjPWcsZj1rO2c9YjtrPWV4cG9ydHMudW5zdGFibGVfbm93KCk7dHJ5e3JldHVybiBhLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1maW5hbGx5e2c9YyxrPWYsdigpfX19O2V4cG9ydHMudW5zdGFibGVfZ2V0Q3VycmVudFByaW9yaXR5TGV2ZWw9ZnVuY3Rpb24oKXtyZXR1cm4gZ307XG5leHBvcnRzLnVuc3RhYmxlX3Nob3VsZFlpZWxkPWZ1bmN0aW9uKCl7cmV0dXJuIWUmJihudWxsIT09ZCYmZC5leHBpcmF0aW9uVGltZTxsfHx3KCkpfTtleHBvcnRzLnVuc3RhYmxlX2NvbnRpbnVlRXhlY3V0aW9uPWZ1bmN0aW9uKCl7bnVsbCE9PWQmJnAoKX07ZXhwb3J0cy51bnN0YWJsZV9wYXVzZUV4ZWN1dGlvbj1mdW5jdGlvbigpe307ZXhwb3J0cy51bnN0YWJsZV9nZXRGaXJzdENhbGxiYWNrTm9kZT1mdW5jdGlvbigpe3JldHVybiBkfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuXG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge31cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb25XaXRoUmVzZXQoKSB7fVxuZW1wdHlGdW5jdGlvbldpdGhSZXNldC5yZXNldFdhcm5pbmdDYWNoZSA9IGVtcHR5RnVuY3Rpb247XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIHNoaW0ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICBpZiAoc2VjcmV0ID09PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgLy8gSXQgaXMgc3RpbGwgc2FmZSB3aGVuIGNhbGxlZCBmcm9tIFJlYWN0LlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKFxuICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgJ1VzZSBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKSB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgKTtcbiAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB0aHJvdyBlcnI7XG4gIH07XG4gIHNoaW0uaXNSZXF1aXJlZCA9IHNoaW07XG4gIGZ1bmN0aW9uIGdldFNoaW0oKSB7XG4gICAgcmV0dXJuIHNoaW07XG4gIH07XG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogc2hpbSxcbiAgICBib29sOiBzaGltLFxuICAgIGZ1bmM6IHNoaW0sXG4gICAgbnVtYmVyOiBzaGltLFxuICAgIG9iamVjdDogc2hpbSxcbiAgICBzdHJpbmc6IHNoaW0sXG4gICAgc3ltYm9sOiBzaGltLFxuXG4gICAgYW55OiBzaGltLFxuICAgIGFycmF5T2Y6IGdldFNoaW0sXG4gICAgZWxlbWVudDogc2hpbSxcbiAgICBlbGVtZW50VHlwZTogc2hpbSxcbiAgICBpbnN0YW5jZU9mOiBnZXRTaGltLFxuICAgIG5vZGU6IHNoaW0sXG4gICAgb2JqZWN0T2Y6IGdldFNoaW0sXG4gICAgb25lT2Y6IGdldFNoaW0sXG4gICAgb25lT2ZUeXBlOiBnZXRTaGltLFxuICAgIHNoYXBlOiBnZXRTaGltLFxuICAgIGV4YWN0OiBnZXRTaGltLFxuXG4gICAgY2hlY2tQcm9wVHlwZXM6IGVtcHR5RnVuY3Rpb25XaXRoUmVzZXQsXG4gICAgcmVzZXRXYXJuaW5nQ2FjaGU6IGVtcHR5RnVuY3Rpb25cbiAgfTtcblxuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjguNlxuICogcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7XG52YXIgYj1cImZ1bmN0aW9uXCI9PT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yLGM9Yj9TeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKTo2MDEwMyxkPWI/U3ltYm9sLmZvcihcInJlYWN0LnBvcnRhbFwiKTo2MDEwNixlPWI/U3ltYm9sLmZvcihcInJlYWN0LmZyYWdtZW50XCIpOjYwMTA3LGY9Yj9TeW1ib2wuZm9yKFwicmVhY3Quc3RyaWN0X21vZGVcIik6NjAxMDgsZz1iP1N5bWJvbC5mb3IoXCJyZWFjdC5wcm9maWxlclwiKTo2MDExNCxoPWI/U3ltYm9sLmZvcihcInJlYWN0LnByb3ZpZGVyXCIpOjYwMTA5LGs9Yj9TeW1ib2wuZm9yKFwicmVhY3QuY29udGV4dFwiKTo2MDExMCxsPWI/U3ltYm9sLmZvcihcInJlYWN0LmFzeW5jX21vZGVcIik6NjAxMTEsbT1iP1N5bWJvbC5mb3IoXCJyZWFjdC5jb25jdXJyZW50X21vZGVcIik6NjAxMTEsbj1iP1N5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKTo2MDExMixwPWI/U3ltYm9sLmZvcihcInJlYWN0LnN1c3BlbnNlXCIpOjYwMTEzLHE9Yj9TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKTpcbjYwMTE1LHI9Yj9TeW1ib2wuZm9yKFwicmVhY3QubGF6eVwiKTo2MDExNjtmdW5jdGlvbiB0KGEpe2lmKFwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEpe3ZhciB1PWEuJCR0eXBlb2Y7c3dpdGNoKHUpe2Nhc2UgYzpzd2l0Y2goYT1hLnR5cGUsYSl7Y2FzZSBsOmNhc2UgbTpjYXNlIGU6Y2FzZSBnOmNhc2UgZjpjYXNlIHA6cmV0dXJuIGE7ZGVmYXVsdDpzd2l0Y2goYT1hJiZhLiQkdHlwZW9mLGEpe2Nhc2UgazpjYXNlIG46Y2FzZSBoOnJldHVybiBhO2RlZmF1bHQ6cmV0dXJuIHV9fWNhc2UgcjpjYXNlIHE6Y2FzZSBkOnJldHVybiB1fX19ZnVuY3Rpb24gdihhKXtyZXR1cm4gdChhKT09PW19ZXhwb3J0cy50eXBlT2Y9dDtleHBvcnRzLkFzeW5jTW9kZT1sO2V4cG9ydHMuQ29uY3VycmVudE1vZGU9bTtleHBvcnRzLkNvbnRleHRDb25zdW1lcj1rO2V4cG9ydHMuQ29udGV4dFByb3ZpZGVyPWg7ZXhwb3J0cy5FbGVtZW50PWM7ZXhwb3J0cy5Gb3J3YXJkUmVmPW47XG5leHBvcnRzLkZyYWdtZW50PWU7ZXhwb3J0cy5MYXp5PXI7ZXhwb3J0cy5NZW1vPXE7ZXhwb3J0cy5Qb3J0YWw9ZDtleHBvcnRzLlByb2ZpbGVyPWc7ZXhwb3J0cy5TdHJpY3RNb2RlPWY7ZXhwb3J0cy5TdXNwZW5zZT1wO2V4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlPWZ1bmN0aW9uKGEpe3JldHVyblwic3RyaW5nXCI9PT10eXBlb2YgYXx8XCJmdW5jdGlvblwiPT09dHlwZW9mIGF8fGE9PT1lfHxhPT09bXx8YT09PWd8fGE9PT1mfHxhPT09cHx8XCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSYmKGEuJCR0eXBlb2Y9PT1yfHxhLiQkdHlwZW9mPT09cXx8YS4kJHR5cGVvZj09PWh8fGEuJCR0eXBlb2Y9PT1rfHxhLiQkdHlwZW9mPT09bil9O2V4cG9ydHMuaXNBc3luY01vZGU9ZnVuY3Rpb24oYSl7cmV0dXJuIHYoYSl8fHQoYSk9PT1sfTtleHBvcnRzLmlzQ29uY3VycmVudE1vZGU9djtleHBvcnRzLmlzQ29udGV4dENvbnN1bWVyPWZ1bmN0aW9uKGEpe3JldHVybiB0KGEpPT09a307XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyPWZ1bmN0aW9uKGEpe3JldHVybiB0KGEpPT09aH07ZXhwb3J0cy5pc0VsZW1lbnQ9ZnVuY3Rpb24oYSl7cmV0dXJuXCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSYmYS4kJHR5cGVvZj09PWN9O2V4cG9ydHMuaXNGb3J3YXJkUmVmPWZ1bmN0aW9uKGEpe3JldHVybiB0KGEpPT09bn07ZXhwb3J0cy5pc0ZyYWdtZW50PWZ1bmN0aW9uKGEpe3JldHVybiB0KGEpPT09ZX07ZXhwb3J0cy5pc0xhenk9ZnVuY3Rpb24oYSl7cmV0dXJuIHQoYSk9PT1yfTtleHBvcnRzLmlzTWVtbz1mdW5jdGlvbihhKXtyZXR1cm4gdChhKT09PXF9O2V4cG9ydHMuaXNQb3J0YWw9ZnVuY3Rpb24oYSl7cmV0dXJuIHQoYSk9PT1kfTtleHBvcnRzLmlzUHJvZmlsZXI9ZnVuY3Rpb24oYSl7cmV0dXJuIHQoYSk9PT1nfTtleHBvcnRzLmlzU3RyaWN0TW9kZT1mdW5jdGlvbihhKXtyZXR1cm4gdChhKT09PWZ9O1xuZXhwb3J0cy5pc1N1c3BlbnNlPWZ1bmN0aW9uKGEpe3JldHVybiB0KGEpPT09cH07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsTW9kdWxlKSB7XG5cdGlmICghb3JpZ2luYWxNb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0dmFyIG1vZHVsZSA9IE9iamVjdC5jcmVhdGUob3JpZ2luYWxNb2R1bGUpO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImV4cG9ydHNcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7XG4gIHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzO1xuICBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufSIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5leHBvcnQgdmFyIHN1YnNjcmlwdGlvblNoYXBlID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgdHJ5U3Vic2NyaWJlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB0cnlVbnN1YnNjcmliZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgbm90aWZ5TmVzdGVkU3ViczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgaXNTdWJzY3JpYmVkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59KTtcbmV4cG9ydCB2YXIgc3RvcmVTaGFwZSA9IFByb3BUeXBlcy5zaGFwZSh7XG4gIHN1YnNjcmliZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZGlzcGF0Y2g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGdldFN0YXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59KTsiLCIvKipcbiAqIFByaW50cyBhIHdhcm5pbmcgaW4gdGhlIGNvbnNvbGUgaWYgaXQgZXhpc3RzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIFRoZSB3YXJuaW5nIG1lc3NhZ2UuXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2FybmluZyhtZXNzYWdlKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY29uc29sZS5lcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gIH1cbiAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG5cblxuICB0cnkge1xuICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgaWYgeW91IGVuYWJsZVxuICAgIC8vIFwiYnJlYWsgb24gYWxsIGV4Y2VwdGlvbnNcIiBpbiB5b3VyIGNvbnNvbGUsXG4gICAgLy8gaXQgd291bGQgcGF1c2UgdGhlIGV4ZWN1dGlvbiBhdCB0aGlzIGxpbmUuXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWVtcHR5ICovXG4gIH0gY2F0Y2ggKGUpIHt9XG4gIC8qIGVzbGludC1lbmFibGUgbm8tZW1wdHkgKi9cblxufSIsImltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZVwiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBzdG9yZVNoYXBlLCBzdWJzY3JpcHRpb25TaGFwZSB9IGZyb20gJy4uL3V0aWxzL1Byb3BUeXBlcyc7XG5pbXBvcnQgd2FybmluZyBmcm9tICcuLi91dGlscy93YXJuaW5nJztcbnZhciBkaWRXYXJuQWJvdXRSZWNlaXZpbmdTdG9yZSA9IGZhbHNlO1xuXG5mdW5jdGlvbiB3YXJuQWJvdXRSZWNlaXZpbmdTdG9yZSgpIHtcbiAgaWYgKGRpZFdhcm5BYm91dFJlY2VpdmluZ1N0b3JlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZGlkV2FybkFib3V0UmVjZWl2aW5nU3RvcmUgPSB0cnVlO1xuICB3YXJuaW5nKCc8UHJvdmlkZXI+IGRvZXMgbm90IHN1cHBvcnQgY2hhbmdpbmcgYHN0b3JlYCBvbiB0aGUgZmx5LiAnICsgJ0l0IGlzIG1vc3QgbGlrZWx5IHRoYXQgeW91IHNlZSB0aGlzIGVycm9yIGJlY2F1c2UgeW91IHVwZGF0ZWQgdG8gJyArICdSZWR1eCAyLnggYW5kIFJlYWN0IFJlZHV4IDIueCB3aGljaCBubyBsb25nZXIgaG90IHJlbG9hZCByZWR1Y2VycyAnICsgJ2F1dG9tYXRpY2FsbHkuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vcmVkdXhqcy9yZWFjdC1yZWR1eC9yZWxlYXNlcy8nICsgJ3RhZy92Mi4wLjAgZm9yIHRoZSBtaWdyYXRpb24gaW5zdHJ1Y3Rpb25zLicpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvdmlkZXIoc3RvcmVLZXkpIHtcbiAgdmFyIF9Qcm92aWRlciRjaGlsZENvbnRleDtcblxuICBpZiAoc3RvcmVLZXkgPT09IHZvaWQgMCkge1xuICAgIHN0b3JlS2V5ID0gJ3N0b3JlJztcbiAgfVxuXG4gIHZhciBzdWJzY3JpcHRpb25LZXkgPSBzdG9yZUtleSArIFwiU3Vic2NyaXB0aW9uXCI7XG5cbiAgdmFyIFByb3ZpZGVyID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgIF9pbmhlcml0c0xvb3NlKFByb3ZpZGVyLCBfQ29tcG9uZW50KTtcblxuICAgIHZhciBfcHJvdG8gPSBQcm92aWRlci5wcm90b3R5cGU7XG5cbiAgICBfcHJvdG8uZ2V0Q2hpbGRDb250ZXh0ID0gZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgICAgdmFyIF9yZWY7XG5cbiAgICAgIHJldHVybiBfcmVmID0ge30sIF9yZWZbc3RvcmVLZXldID0gdGhpc1tzdG9yZUtleV0sIF9yZWZbc3Vic2NyaXB0aW9uS2V5XSA9IG51bGwsIF9yZWY7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIFByb3ZpZGVyKHByb3BzLCBjb250ZXh0KSB7XG4gICAgICB2YXIgX3RoaXM7XG5cbiAgICAgIF90aGlzID0gX0NvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KSB8fCB0aGlzO1xuICAgICAgX3RoaXNbc3RvcmVLZXldID0gcHJvcHMuc3RvcmU7XG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiBDaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgIH07XG5cbiAgICByZXR1cm4gUHJvdmlkZXI7XG4gIH0oQ29tcG9uZW50KTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIFByb3ZpZGVyLnByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gKG5leHRQcm9wcykge1xuICAgICAgaWYgKHRoaXNbc3RvcmVLZXldICE9PSBuZXh0UHJvcHMuc3RvcmUpIHtcbiAgICAgICAgd2FybkFib3V0UmVjZWl2aW5nU3RvcmUoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgUHJvdmlkZXIucHJvcFR5cGVzID0ge1xuICAgIHN0b3JlOiBzdG9yZVNoYXBlLmlzUmVxdWlyZWQsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5lbGVtZW50LmlzUmVxdWlyZWRcbiAgfTtcbiAgUHJvdmlkZXIuY2hpbGRDb250ZXh0VHlwZXMgPSAoX1Byb3ZpZGVyJGNoaWxkQ29udGV4ID0ge30sIF9Qcm92aWRlciRjaGlsZENvbnRleFtzdG9yZUtleV0gPSBzdG9yZVNoYXBlLmlzUmVxdWlyZWQsIF9Qcm92aWRlciRjaGlsZENvbnRleFtzdWJzY3JpcHRpb25LZXldID0gc3Vic2NyaXB0aW9uU2hhcGUsIF9Qcm92aWRlciRjaGlsZENvbnRleCk7XG4gIHJldHVybiBQcm92aWRlcjtcbn1cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVByb3ZpZGVyKCk7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsIi8vIGVuY2Fwc3VsYXRlcyB0aGUgc3Vic2NyaXB0aW9uIGxvZ2ljIGZvciBjb25uZWN0aW5nIGEgY29tcG9uZW50IHRvIHRoZSByZWR1eCBzdG9yZSwgYXNcbi8vIHdlbGwgYXMgbmVzdGluZyBzdWJzY3JpcHRpb25zIG9mIGRlc2NlbmRhbnQgY29tcG9uZW50cywgc28gdGhhdCB3ZSBjYW4gZW5zdXJlIHRoZVxuLy8gYW5jZXN0b3IgY29tcG9uZW50cyByZS1yZW5kZXIgYmVmb3JlIGRlc2NlbmRhbnRzXG52YXIgQ0xFQVJFRCA9IG51bGw7XG52YXIgbnVsbExpc3RlbmVycyA9IHtcbiAgbm90aWZ5OiBmdW5jdGlvbiBub3RpZnkoKSB7fVxufTtcblxuZnVuY3Rpb24gY3JlYXRlTGlzdGVuZXJDb2xsZWN0aW9uKCkge1xuICAvLyB0aGUgY3VycmVudC9uZXh0IHBhdHRlcm4gaXMgY29waWVkIGZyb20gcmVkdXgncyBjcmVhdGVTdG9yZSBjb2RlLlxuICAvLyBUT0RPOiByZWZhY3RvcitleHBvc2UgdGhhdCBjb2RlIHRvIGJlIHJldXNhYmxlIGhlcmU/XG4gIHZhciBjdXJyZW50ID0gW107XG4gIHZhciBuZXh0ID0gW107XG4gIHJldHVybiB7XG4gICAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgbmV4dCA9IENMRUFSRUQ7XG4gICAgICBjdXJyZW50ID0gQ0xFQVJFRDtcbiAgICB9LFxuICAgIG5vdGlmeTogZnVuY3Rpb24gbm90aWZ5KCkge1xuICAgICAgdmFyIGxpc3RlbmVycyA9IGN1cnJlbnQgPSBuZXh0O1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsaXN0ZW5lcnNbaV0oKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfSxcbiAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uIHN1YnNjcmliZShsaXN0ZW5lcikge1xuICAgICAgdmFyIGlzU3Vic2NyaWJlZCA9IHRydWU7XG4gICAgICBpZiAobmV4dCA9PT0gY3VycmVudCkgbmV4dCA9IGN1cnJlbnQuc2xpY2UoKTtcbiAgICAgIG5leHQucHVzaChsaXN0ZW5lcik7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gdW5zdWJzY3JpYmUoKSB7XG4gICAgICAgIGlmICghaXNTdWJzY3JpYmVkIHx8IGN1cnJlbnQgPT09IENMRUFSRUQpIHJldHVybjtcbiAgICAgICAgaXNTdWJzY3JpYmVkID0gZmFsc2U7XG4gICAgICAgIGlmIChuZXh0ID09PSBjdXJyZW50KSBuZXh0ID0gY3VycmVudC5zbGljZSgpO1xuICAgICAgICBuZXh0LnNwbGljZShuZXh0LmluZGV4T2YobGlzdGVuZXIpLCAxKTtcbiAgICAgIH07XG4gICAgfVxuICB9O1xufVxuXG52YXIgU3Vic2NyaXB0aW9uID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU3Vic2NyaXB0aW9uKHN0b3JlLCBwYXJlbnRTdWIsIG9uU3RhdGVDaGFuZ2UpIHtcbiAgICB0aGlzLnN0b3JlID0gc3RvcmU7XG4gICAgdGhpcy5wYXJlbnRTdWIgPSBwYXJlbnRTdWI7XG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlID0gb25TdGF0ZUNoYW5nZTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlID0gbnVsbDtcbiAgICB0aGlzLmxpc3RlbmVycyA9IG51bGxMaXN0ZW5lcnM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gU3Vic2NyaXB0aW9uLnByb3RvdHlwZTtcblxuICBfcHJvdG8uYWRkTmVzdGVkU3ViID0gZnVuY3Rpb24gYWRkTmVzdGVkU3ViKGxpc3RlbmVyKSB7XG4gICAgdGhpcy50cnlTdWJzY3JpYmUoKTtcbiAgICByZXR1cm4gdGhpcy5saXN0ZW5lcnMuc3Vic2NyaWJlKGxpc3RlbmVyKTtcbiAgfTtcblxuICBfcHJvdG8ubm90aWZ5TmVzdGVkU3VicyA9IGZ1bmN0aW9uIG5vdGlmeU5lc3RlZFN1YnMoKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMubm90aWZ5KCk7XG4gIH07XG5cbiAgX3Byb3RvLmlzU3Vic2NyaWJlZCA9IGZ1bmN0aW9uIGlzU3Vic2NyaWJlZCgpIHtcbiAgICByZXR1cm4gQm9vbGVhbih0aGlzLnVuc3Vic2NyaWJlKTtcbiAgfTtcblxuICBfcHJvdG8udHJ5U3Vic2NyaWJlID0gZnVuY3Rpb24gdHJ5U3Vic2NyaWJlKCkge1xuICAgIGlmICghdGhpcy51bnN1YnNjcmliZSkge1xuICAgICAgdGhpcy51bnN1YnNjcmliZSA9IHRoaXMucGFyZW50U3ViID8gdGhpcy5wYXJlbnRTdWIuYWRkTmVzdGVkU3ViKHRoaXMub25TdGF0ZUNoYW5nZSkgOiB0aGlzLnN0b3JlLnN1YnNjcmliZSh0aGlzLm9uU3RhdGVDaGFuZ2UpO1xuICAgICAgdGhpcy5saXN0ZW5lcnMgPSBjcmVhdGVMaXN0ZW5lckNvbGxlY3Rpb24oKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnRyeVVuc3Vic2NyaWJlID0gZnVuY3Rpb24gdHJ5VW5zdWJzY3JpYmUoKSB7XG4gICAgaWYgKHRoaXMudW5zdWJzY3JpYmUpIHtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUgPSBudWxsO1xuICAgICAgdGhpcy5saXN0ZW5lcnMuY2xlYXIoKTtcbiAgICAgIHRoaXMubGlzdGVuZXJzID0gbnVsbExpc3RlbmVycztcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFN1YnNjcmlwdGlvbjtcbn0oKTtcblxuZXhwb3J0IHsgU3Vic2NyaXB0aW9uIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2VcIjtcbmltcG9ydCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIjtcbmltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5pbXBvcnQgaG9pc3RTdGF0aWNzIGZyb20gJ2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzJztcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSAnaW52YXJpYW50JztcbmltcG9ydCB7IENvbXBvbmVudCwgY3JlYXRlRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9IGZyb20gJ3JlYWN0LWlzJztcbmltcG9ydCBTdWJzY3JpcHRpb24gZnJvbSAnLi4vdXRpbHMvU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IHN0b3JlU2hhcGUsIHN1YnNjcmlwdGlvblNoYXBlIH0gZnJvbSAnLi4vdXRpbHMvUHJvcFR5cGVzJztcbnZhciBob3RSZWxvYWRpbmdWZXJzaW9uID0gMDtcbnZhciBkdW1teVN0YXRlID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5mdW5jdGlvbiBtYWtlU2VsZWN0b3JTdGF0ZWZ1bChzb3VyY2VTZWxlY3Rvciwgc3RvcmUpIHtcbiAgLy8gd3JhcCB0aGUgc2VsZWN0b3IgaW4gYW4gb2JqZWN0IHRoYXQgdHJhY2tzIGl0cyByZXN1bHRzIGJldHdlZW4gcnVucy5cbiAgdmFyIHNlbGVjdG9yID0ge1xuICAgIHJ1bjogZnVuY3Rpb24gcnVuQ29tcG9uZW50U2VsZWN0b3IocHJvcHMpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBuZXh0UHJvcHMgPSBzb3VyY2VTZWxlY3RvcihzdG9yZS5nZXRTdGF0ZSgpLCBwcm9wcyk7XG5cbiAgICAgICAgaWYgKG5leHRQcm9wcyAhPT0gc2VsZWN0b3IucHJvcHMgfHwgc2VsZWN0b3IuZXJyb3IpIHtcbiAgICAgICAgICBzZWxlY3Rvci5zaG91bGRDb21wb25lbnRVcGRhdGUgPSB0cnVlO1xuICAgICAgICAgIHNlbGVjdG9yLnByb3BzID0gbmV4dFByb3BzO1xuICAgICAgICAgIHNlbGVjdG9yLmVycm9yID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgc2VsZWN0b3Iuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgc2VsZWN0b3IuZXJyb3IgPSBlcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHJldHVybiBzZWxlY3Rvcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29ubmVjdEFkdmFuY2VkKFxuLypcbiAgc2VsZWN0b3JGYWN0b3J5IGlzIGEgZnVuYyB0aGF0IGlzIHJlc3BvbnNpYmxlIGZvciByZXR1cm5pbmcgdGhlIHNlbGVjdG9yIGZ1bmN0aW9uIHVzZWQgdG9cbiAgY29tcHV0ZSBuZXcgcHJvcHMgZnJvbSBzdGF0ZSwgcHJvcHMsIGFuZCBkaXNwYXRjaC4gRm9yIGV4YW1wbGU6XG4gICAgIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3RBZHZhbmNlZCgoZGlzcGF0Y2gsIG9wdGlvbnMpID0+IChzdGF0ZSwgcHJvcHMpID0+ICh7XG4gICAgICB0aGluZzogc3RhdGUudGhpbmdzW3Byb3BzLnRoaW5nSWRdLFxuICAgICAgc2F2ZVRoaW5nOiBmaWVsZHMgPT4gZGlzcGF0Y2goYWN0aW9uQ3JlYXRvcnMuc2F2ZVRoaW5nKHByb3BzLnRoaW5nSWQsIGZpZWxkcykpLFxuICAgIH0pKShZb3VyQ29tcG9uZW50KVxuICAgQWNjZXNzIHRvIGRpc3BhdGNoIGlzIHByb3ZpZGVkIHRvIHRoZSBmYWN0b3J5IHNvIHNlbGVjdG9yRmFjdG9yaWVzIGNhbiBiaW5kIGFjdGlvbkNyZWF0b3JzXG4gIG91dHNpZGUgb2YgdGhlaXIgc2VsZWN0b3IgYXMgYW4gb3B0aW1pemF0aW9uLiBPcHRpb25zIHBhc3NlZCB0byBjb25uZWN0QWR2YW5jZWQgYXJlIHBhc3NlZCB0b1xuICB0aGUgc2VsZWN0b3JGYWN0b3J5LCBhbG9uZyB3aXRoIGRpc3BsYXlOYW1lIGFuZCBXcmFwcGVkQ29tcG9uZW50LCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LlxuICAgTm90ZSB0aGF0IHNlbGVjdG9yRmFjdG9yeSBpcyByZXNwb25zaWJsZSBmb3IgYWxsIGNhY2hpbmcvbWVtb2l6YXRpb24gb2YgaW5ib3VuZCBhbmQgb3V0Ym91bmRcbiAgcHJvcHMuIERvIG5vdCB1c2UgY29ubmVjdEFkdmFuY2VkIGRpcmVjdGx5IHdpdGhvdXQgbWVtb2l6aW5nIHJlc3VsdHMgYmV0d2VlbiBjYWxscyB0byB5b3VyXG4gIHNlbGVjdG9yLCBvdGhlcndpc2UgdGhlIENvbm5lY3QgY29tcG9uZW50IHdpbGwgcmUtcmVuZGVyIG9uIGV2ZXJ5IHN0YXRlIG9yIHByb3BzIGNoYW5nZS5cbiovXG5zZWxlY3RvckZhY3RvcnksIC8vIG9wdGlvbnMgb2JqZWN0OlxuX3JlZikge1xuICB2YXIgX2NvbnRleHRUeXBlcywgX2NoaWxkQ29udGV4dFR5cGVzO1xuXG4gIGlmIChfcmVmID09PSB2b2lkIDApIHtcbiAgICBfcmVmID0ge307XG4gIH1cblxuICB2YXIgX3JlZjIgPSBfcmVmLFxuICAgICAgX3JlZjIkZ2V0RGlzcGxheU5hbWUgPSBfcmVmMi5nZXREaXNwbGF5TmFtZSxcbiAgICAgIGdldERpc3BsYXlOYW1lID0gX3JlZjIkZ2V0RGlzcGxheU5hbWUgPT09IHZvaWQgMCA/IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIFwiQ29ubmVjdEFkdmFuY2VkKFwiICsgbmFtZSArIFwiKVwiO1xuICB9IDogX3JlZjIkZ2V0RGlzcGxheU5hbWUsXG4gICAgICBfcmVmMiRtZXRob2ROYW1lID0gX3JlZjIubWV0aG9kTmFtZSxcbiAgICAgIG1ldGhvZE5hbWUgPSBfcmVmMiRtZXRob2ROYW1lID09PSB2b2lkIDAgPyAnY29ubmVjdEFkdmFuY2VkJyA6IF9yZWYyJG1ldGhvZE5hbWUsXG4gICAgICBfcmVmMiRyZW5kZXJDb3VudFByb3AgPSBfcmVmMi5yZW5kZXJDb3VudFByb3AsXG4gICAgICByZW5kZXJDb3VudFByb3AgPSBfcmVmMiRyZW5kZXJDb3VudFByb3AgPT09IHZvaWQgMCA/IHVuZGVmaW5lZCA6IF9yZWYyJHJlbmRlckNvdW50UHJvcCxcbiAgICAgIF9yZWYyJHNob3VsZEhhbmRsZVN0YSA9IF9yZWYyLnNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcyxcbiAgICAgIHNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcyA9IF9yZWYyJHNob3VsZEhhbmRsZVN0YSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9yZWYyJHNob3VsZEhhbmRsZVN0YSxcbiAgICAgIF9yZWYyJHN0b3JlS2V5ID0gX3JlZjIuc3RvcmVLZXksXG4gICAgICBzdG9yZUtleSA9IF9yZWYyJHN0b3JlS2V5ID09PSB2b2lkIDAgPyAnc3RvcmUnIDogX3JlZjIkc3RvcmVLZXksXG4gICAgICBfcmVmMiR3aXRoUmVmID0gX3JlZjIud2l0aFJlZixcbiAgICAgIHdpdGhSZWYgPSBfcmVmMiR3aXRoUmVmID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYyJHdpdGhSZWYsXG4gICAgICBjb25uZWN0T3B0aW9ucyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYyLCBbXCJnZXREaXNwbGF5TmFtZVwiLCBcIm1ldGhvZE5hbWVcIiwgXCJyZW5kZXJDb3VudFByb3BcIiwgXCJzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXNcIiwgXCJzdG9yZUtleVwiLCBcIndpdGhSZWZcIl0pO1xuXG4gIHZhciBzdWJzY3JpcHRpb25LZXkgPSBzdG9yZUtleSArICdTdWJzY3JpcHRpb24nO1xuICB2YXIgdmVyc2lvbiA9IGhvdFJlbG9hZGluZ1ZlcnNpb24rKztcbiAgdmFyIGNvbnRleHRUeXBlcyA9IChfY29udGV4dFR5cGVzID0ge30sIF9jb250ZXh0VHlwZXNbc3RvcmVLZXldID0gc3RvcmVTaGFwZSwgX2NvbnRleHRUeXBlc1tzdWJzY3JpcHRpb25LZXldID0gc3Vic2NyaXB0aW9uU2hhcGUsIF9jb250ZXh0VHlwZXMpO1xuICB2YXIgY2hpbGRDb250ZXh0VHlwZXMgPSAoX2NoaWxkQ29udGV4dFR5cGVzID0ge30sIF9jaGlsZENvbnRleHRUeXBlc1tzdWJzY3JpcHRpb25LZXldID0gc3Vic2NyaXB0aW9uU2hhcGUsIF9jaGlsZENvbnRleHRUeXBlcyk7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwV2l0aENvbm5lY3QoV3JhcHBlZENvbXBvbmVudCkge1xuICAgIGludmFyaWFudChpc1ZhbGlkRWxlbWVudFR5cGUoV3JhcHBlZENvbXBvbmVudCksIFwiWW91IG11c3QgcGFzcyBhIGNvbXBvbmVudCB0byB0aGUgZnVuY3Rpb24gcmV0dXJuZWQgYnkgXCIgKyAobWV0aG9kTmFtZSArIFwiLiBJbnN0ZWFkIHJlY2VpdmVkIFwiICsgSlNPTi5zdHJpbmdpZnkoV3JhcHBlZENvbXBvbmVudCkpKTtcbiAgICB2YXIgd3JhcHBlZENvbXBvbmVudE5hbWUgPSBXcmFwcGVkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IFdyYXBwZWRDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50JztcbiAgICB2YXIgZGlzcGxheU5hbWUgPSBnZXREaXNwbGF5TmFtZSh3cmFwcGVkQ29tcG9uZW50TmFtZSk7XG5cbiAgICB2YXIgc2VsZWN0b3JGYWN0b3J5T3B0aW9ucyA9IF9leHRlbmRzKHt9LCBjb25uZWN0T3B0aW9ucywge1xuICAgICAgZ2V0RGlzcGxheU5hbWU6IGdldERpc3BsYXlOYW1lLFxuICAgICAgbWV0aG9kTmFtZTogbWV0aG9kTmFtZSxcbiAgICAgIHJlbmRlckNvdW50UHJvcDogcmVuZGVyQ291bnRQcm9wLFxuICAgICAgc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzOiBzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMsXG4gICAgICBzdG9yZUtleTogc3RvcmVLZXksXG4gICAgICB3aXRoUmVmOiB3aXRoUmVmLFxuICAgICAgZGlzcGxheU5hbWU6IGRpc3BsYXlOYW1lLFxuICAgICAgd3JhcHBlZENvbXBvbmVudE5hbWU6IHdyYXBwZWRDb21wb25lbnROYW1lLFxuICAgICAgV3JhcHBlZENvbXBvbmVudDogV3JhcHBlZENvbXBvbmVudCAvLyBUT0RPIEFjdHVhbGx5IGZpeCBvdXIgdXNlIG9mIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHNcblxuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tZGVwcmVjYXRlZCAqL1xuXG4gICAgfSk7XG5cbiAgICB2YXIgQ29ubmVjdCA9XG4gICAgLyojX19QVVJFX18qL1xuICAgIGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgICBfaW5oZXJpdHNMb29zZShDb25uZWN0LCBfQ29tcG9uZW50KTtcblxuICAgICAgZnVuY3Rpb24gQ29ubmVjdChwcm9wcywgY29udGV4dCkge1xuICAgICAgICB2YXIgX3RoaXM7XG5cbiAgICAgICAgX3RoaXMgPSBfQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnZlcnNpb24gPSB2ZXJzaW9uO1xuICAgICAgICBfdGhpcy5zdGF0ZSA9IHt9O1xuICAgICAgICBfdGhpcy5yZW5kZXJDb3VudCA9IDA7XG4gICAgICAgIF90aGlzLnN0b3JlID0gcHJvcHNbc3RvcmVLZXldIHx8IGNvbnRleHRbc3RvcmVLZXldO1xuICAgICAgICBfdGhpcy5wcm9wc01vZGUgPSBCb29sZWFuKHByb3BzW3N0b3JlS2V5XSk7XG4gICAgICAgIF90aGlzLnNldFdyYXBwZWRJbnN0YW5jZSA9IF90aGlzLnNldFdyYXBwZWRJbnN0YW5jZS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpKTtcbiAgICAgICAgaW52YXJpYW50KF90aGlzLnN0b3JlLCBcIkNvdWxkIG5vdCBmaW5kIFxcXCJcIiArIHN0b3JlS2V5ICsgXCJcXFwiIGluIGVpdGhlciB0aGUgY29udGV4dCBvciBwcm9wcyBvZiBcIiArIChcIlxcXCJcIiArIGRpc3BsYXlOYW1lICsgXCJcXFwiLiBFaXRoZXIgd3JhcCB0aGUgcm9vdCBjb21wb25lbnQgaW4gYSA8UHJvdmlkZXI+LCBcIikgKyAoXCJvciBleHBsaWNpdGx5IHBhc3MgXFxcIlwiICsgc3RvcmVLZXkgKyBcIlxcXCIgYXMgYSBwcm9wIHRvIFxcXCJcIiArIGRpc3BsYXlOYW1lICsgXCJcXFwiLlwiKSk7XG5cbiAgICAgICAgX3RoaXMuaW5pdFNlbGVjdG9yKCk7XG5cbiAgICAgICAgX3RoaXMuaW5pdFN1YnNjcmlwdGlvbigpO1xuXG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICAgIH1cblxuICAgICAgdmFyIF9wcm90byA9IENvbm5lY3QucHJvdG90eXBlO1xuXG4gICAgICBfcHJvdG8uZ2V0Q2hpbGRDb250ZXh0ID0gZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgICAgICB2YXIgX3JlZjM7XG5cbiAgICAgICAgLy8gSWYgdGhpcyBjb21wb25lbnQgcmVjZWl2ZWQgc3RvcmUgZnJvbSBwcm9wcywgaXRzIHN1YnNjcmlwdGlvbiBzaG91bGQgYmUgdHJhbnNwYXJlbnRcbiAgICAgICAgLy8gdG8gYW55IGRlc2NlbmRhbnRzIHJlY2VpdmluZyBzdG9yZStzdWJzY3JpcHRpb24gZnJvbSBjb250ZXh0OyBpdCBwYXNzZXMgYWxvbmdcbiAgICAgICAgLy8gc3Vic2NyaXB0aW9uIHBhc3NlZCB0byBpdC4gT3RoZXJ3aXNlLCBpdCBzaGFkb3dzIHRoZSBwYXJlbnQgc3Vic2NyaXB0aW9uLCB3aGljaCBhbGxvd3NcbiAgICAgICAgLy8gQ29ubmVjdCB0byBjb250cm9sIG9yZGVyaW5nIG9mIG5vdGlmaWNhdGlvbnMgdG8gZmxvdyB0b3AtZG93bi5cbiAgICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IHRoaXMucHJvcHNNb2RlID8gbnVsbCA6IHRoaXMuc3Vic2NyaXB0aW9uO1xuICAgICAgICByZXR1cm4gX3JlZjMgPSB7fSwgX3JlZjNbc3Vic2NyaXB0aW9uS2V5XSA9IHN1YnNjcmlwdGlvbiB8fCB0aGlzLmNvbnRleHRbc3Vic2NyaXB0aW9uS2V5XSwgX3JlZjM7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKCFzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMpIHJldHVybjsgLy8gY29tcG9uZW50V2lsbE1vdW50IGZpcmVzIGR1cmluZyBzZXJ2ZXIgc2lkZSByZW5kZXJpbmcsIGJ1dCBjb21wb25lbnREaWRNb3VudCBhbmRcbiAgICAgICAgLy8gY29tcG9uZW50V2lsbFVubW91bnQgZG8gbm90LiBCZWNhdXNlIG9mIHRoaXMsIHRyeVN1YnNjcmliZSBoYXBwZW5zIGR1cmluZyAuLi5kaWRNb3VudC5cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB1bnN1YnNjcmlwdGlvbiB3b3VsZCBuZXZlciB0YWtlIHBsYWNlIGR1cmluZyBTU1IsIGNhdXNpbmcgYSBtZW1vcnkgbGVhay5cbiAgICAgICAgLy8gVG8gaGFuZGxlIHRoZSBjYXNlIHdoZXJlIGEgY2hpbGQgY29tcG9uZW50IG1heSBoYXZlIHRyaWdnZXJlZCBhIHN0YXRlIGNoYW5nZSBieVxuICAgICAgICAvLyBkaXNwYXRjaGluZyBhbiBhY3Rpb24gaW4gaXRzIGNvbXBvbmVudFdpbGxNb3VudCwgd2UgaGF2ZSB0byByZS1ydW4gdGhlIHNlbGVjdCBhbmQgbWF5YmVcbiAgICAgICAgLy8gcmUtcmVuZGVyLlxuXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnRyeVN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLnNlbGVjdG9yLnJ1bih0aGlzLnByb3BzKTtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0b3Iuc2hvdWxkQ29tcG9uZW50VXBkYXRlKSB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0b3IucnVuKG5leHRQcm9wcyk7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3Rvci5zaG91bGRDb21wb25lbnRVcGRhdGU7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB0aGlzLnN1YnNjcmlwdGlvbi50cnlVbnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMubm90aWZ5TmVzdGVkU3VicyA9IG5vb3A7XG4gICAgICAgIHRoaXMuc3RvcmUgPSBudWxsO1xuICAgICAgICB0aGlzLnNlbGVjdG9yLnJ1biA9IG5vb3A7XG4gICAgICAgIHRoaXMuc2VsZWN0b3Iuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZmFsc2U7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uZ2V0V3JhcHBlZEluc3RhbmNlID0gZnVuY3Rpb24gZ2V0V3JhcHBlZEluc3RhbmNlKCkge1xuICAgICAgICBpbnZhcmlhbnQod2l0aFJlZiwgXCJUbyBhY2Nlc3MgdGhlIHdyYXBwZWQgaW5zdGFuY2UsIHlvdSBuZWVkIHRvIHNwZWNpZnkgXCIgKyAoXCJ7IHdpdGhSZWY6IHRydWUgfSBpbiB0aGUgb3B0aW9ucyBhcmd1bWVudCBvZiB0aGUgXCIgKyBtZXRob2ROYW1lICsgXCIoKSBjYWxsLlwiKSk7XG4gICAgICAgIHJldHVybiB0aGlzLndyYXBwZWRJbnN0YW5jZTtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5zZXRXcmFwcGVkSW5zdGFuY2UgPSBmdW5jdGlvbiBzZXRXcmFwcGVkSW5zdGFuY2UocmVmKSB7XG4gICAgICAgIHRoaXMud3JhcHBlZEluc3RhbmNlID0gcmVmO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLmluaXRTZWxlY3RvciA9IGZ1bmN0aW9uIGluaXRTZWxlY3RvcigpIHtcbiAgICAgICAgdmFyIHNvdXJjZVNlbGVjdG9yID0gc2VsZWN0b3JGYWN0b3J5KHRoaXMuc3RvcmUuZGlzcGF0Y2gsIHNlbGVjdG9yRmFjdG9yeU9wdGlvbnMpO1xuICAgICAgICB0aGlzLnNlbGVjdG9yID0gbWFrZVNlbGVjdG9yU3RhdGVmdWwoc291cmNlU2VsZWN0b3IsIHRoaXMuc3RvcmUpO1xuICAgICAgICB0aGlzLnNlbGVjdG9yLnJ1bih0aGlzLnByb3BzKTtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5pbml0U3Vic2NyaXB0aW9uID0gZnVuY3Rpb24gaW5pdFN1YnNjcmlwdGlvbigpIHtcbiAgICAgICAgaWYgKCFzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMpIHJldHVybjsgLy8gcGFyZW50U3ViJ3Mgc291cmNlIHNob3VsZCBtYXRjaCB3aGVyZSBzdG9yZSBjYW1lIGZyb206IHByb3BzIHZzLiBjb250ZXh0LiBBIGNvbXBvbmVudFxuICAgICAgICAvLyBjb25uZWN0ZWQgdG8gdGhlIHN0b3JlIHZpYSBwcm9wcyBzaG91bGRuJ3QgdXNlIHN1YnNjcmlwdGlvbiBmcm9tIGNvbnRleHQsIG9yIHZpY2UgdmVyc2EuXG5cbiAgICAgICAgdmFyIHBhcmVudFN1YiA9ICh0aGlzLnByb3BzTW9kZSA/IHRoaXMucHJvcHMgOiB0aGlzLmNvbnRleHQpW3N1YnNjcmlwdGlvbktleV07XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbih0aGlzLnN0b3JlLCBwYXJlbnRTdWIsIHRoaXMub25TdGF0ZUNoYW5nZS5iaW5kKHRoaXMpKTsgLy8gYG5vdGlmeU5lc3RlZFN1YnNgIGlzIGR1cGxpY2F0ZWQgdG8gaGFuZGxlIHRoZSBjYXNlIHdoZXJlIHRoZSBjb21wb25lbnQgaXMgdW5tb3VudGVkIGluXG4gICAgICAgIC8vIHRoZSBtaWRkbGUgb2YgdGhlIG5vdGlmaWNhdGlvbiBsb29wLCB3aGVyZSBgdGhpcy5zdWJzY3JpcHRpb25gIHdpbGwgdGhlbiBiZSBudWxsLiBBblxuICAgICAgICAvLyBleHRyYSBudWxsIGNoZWNrIGV2ZXJ5IGNoYW5nZSBjYW4gYmUgYXZvaWRlZCBieSBjb3B5aW5nIHRoZSBtZXRob2Qgb250byBgdGhpc2AgYW5kIHRoZW5cbiAgICAgICAgLy8gcmVwbGFjaW5nIGl0IHdpdGggYSBuby1vcCBvbiB1bm1vdW50LiBUaGlzIGNhbiBwcm9iYWJseSBiZSBhdm9pZGVkIGlmIFN1YnNjcmlwdGlvbidzXG4gICAgICAgIC8vIGxpc3RlbmVycyBsb2dpYyBpcyBjaGFuZ2VkIHRvIG5vdCBjYWxsIGxpc3RlbmVycyB0aGF0IGhhdmUgYmVlbiB1bnN1YnNjcmliZWQgaW4gdGhlXG4gICAgICAgIC8vIG1pZGRsZSBvZiB0aGUgbm90aWZpY2F0aW9uIGxvb3AuXG5cbiAgICAgICAgdGhpcy5ub3RpZnlOZXN0ZWRTdWJzID0gdGhpcy5zdWJzY3JpcHRpb24ubm90aWZ5TmVzdGVkU3Vicy5iaW5kKHRoaXMuc3Vic2NyaXB0aW9uKTtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5vblN0YXRlQ2hhbmdlID0gZnVuY3Rpb24gb25TdGF0ZUNoYW5nZSgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rvci5ydW4odGhpcy5wcm9wcyk7XG5cbiAgICAgICAgaWYgKCF0aGlzLnNlbGVjdG9yLnNob3VsZENvbXBvbmVudFVwZGF0ZSkge1xuICAgICAgICAgIHRoaXMubm90aWZ5TmVzdGVkU3VicygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY29tcG9uZW50RGlkVXBkYXRlID0gdGhpcy5ub3RpZnlOZXN0ZWRTdWJzT25Db21wb25lbnREaWRVcGRhdGU7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZShkdW1teVN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3Byb3RvLm5vdGlmeU5lc3RlZFN1YnNPbkNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIG5vdGlmeU5lc3RlZFN1YnNPbkNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgLy8gYGNvbXBvbmVudERpZFVwZGF0ZWAgaXMgY29uZGl0aW9uYWxseSBpbXBsZW1lbnRlZCB3aGVuIGBvblN0YXRlQ2hhbmdlYCBkZXRlcm1pbmVzIGl0XG4gICAgICAgIC8vIG5lZWRzIHRvIG5vdGlmeSBuZXN0ZWQgc3Vicy4gT25jZSBjYWxsZWQsIGl0IHVuaW1wbGVtZW50cyBpdHNlbGYgdW50aWwgZnVydGhlciBzdGF0ZVxuICAgICAgICAvLyBjaGFuZ2VzIG9jY3VyLiBEb2luZyBpdCB0aGlzIHdheSB2cyBoYXZpbmcgYSBwZXJtYW5lbnQgYGNvbXBvbmVudERpZFVwZGF0ZWAgdGhhdCBkb2VzXG4gICAgICAgIC8vIGEgYm9vbGVhbiBjaGVjayBldmVyeSB0aW1lIGF2b2lkcyBhbiBleHRyYSBtZXRob2QgY2FsbCBtb3N0IG9mIHRoZSB0aW1lLCByZXN1bHRpbmdcbiAgICAgICAgLy8gaW4gc29tZSBwZXJmIGJvb3N0LlxuICAgICAgICB0aGlzLmNvbXBvbmVudERpZFVwZGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5ub3RpZnlOZXN0ZWRTdWJzKCk7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uaXNTdWJzY3JpYmVkID0gZnVuY3Rpb24gaXNTdWJzY3JpYmVkKCkge1xuICAgICAgICByZXR1cm4gQm9vbGVhbih0aGlzLnN1YnNjcmlwdGlvbikgJiYgdGhpcy5zdWJzY3JpcHRpb24uaXNTdWJzY3JpYmVkKCk7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uYWRkRXh0cmFQcm9wcyA9IGZ1bmN0aW9uIGFkZEV4dHJhUHJvcHMocHJvcHMpIHtcbiAgICAgICAgaWYgKCF3aXRoUmVmICYmICFyZW5kZXJDb3VudFByb3AgJiYgISh0aGlzLnByb3BzTW9kZSAmJiB0aGlzLnN1YnNjcmlwdGlvbikpIHJldHVybiBwcm9wczsgLy8gbWFrZSBhIHNoYWxsb3cgY29weSBzbyB0aGF0IGZpZWxkcyBhZGRlZCBkb24ndCBsZWFrIHRvIHRoZSBvcmlnaW5hbCBzZWxlY3Rvci5cbiAgICAgICAgLy8gdGhpcyBpcyBlc3BlY2lhbGx5IGltcG9ydGFudCBmb3IgJ3JlZicgc2luY2UgdGhhdCdzIGEgcmVmZXJlbmNlIGJhY2sgdG8gdGhlIGNvbXBvbmVudFxuICAgICAgICAvLyBpbnN0YW5jZS4gYSBzaW5nbGV0b24gbWVtb2l6ZWQgc2VsZWN0b3Igd291bGQgdGhlbiBiZSBob2xkaW5nIGEgcmVmZXJlbmNlIHRvIHRoZVxuICAgICAgICAvLyBpbnN0YW5jZSwgcHJldmVudGluZyB0aGUgaW5zdGFuY2UgZnJvbSBiZWluZyBnYXJiYWdlIGNvbGxlY3RlZCwgYW5kIHRoYXQgd291bGQgYmUgYmFkXG5cbiAgICAgICAgdmFyIHdpdGhFeHRyYXMgPSBfZXh0ZW5kcyh7fSwgcHJvcHMpO1xuXG4gICAgICAgIGlmICh3aXRoUmVmKSB3aXRoRXh0cmFzLnJlZiA9IHRoaXMuc2V0V3JhcHBlZEluc3RhbmNlO1xuICAgICAgICBpZiAocmVuZGVyQ291bnRQcm9wKSB3aXRoRXh0cmFzW3JlbmRlckNvdW50UHJvcF0gPSB0aGlzLnJlbmRlckNvdW50Kys7XG4gICAgICAgIGlmICh0aGlzLnByb3BzTW9kZSAmJiB0aGlzLnN1YnNjcmlwdGlvbikgd2l0aEV4dHJhc1tzdWJzY3JpcHRpb25LZXldID0gdGhpcy5zdWJzY3JpcHRpb247XG4gICAgICAgIHJldHVybiB3aXRoRXh0cmFzO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIHNlbGVjdG9yID0gdGhpcy5zZWxlY3RvcjtcbiAgICAgICAgc2VsZWN0b3Iuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHNlbGVjdG9yLmVycm9yKSB7XG4gICAgICAgICAgdGhyb3cgc2VsZWN0b3IuZXJyb3I7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoV3JhcHBlZENvbXBvbmVudCwgdGhpcy5hZGRFeHRyYVByb3BzKHNlbGVjdG9yLnByb3BzKSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBDb25uZWN0O1xuICAgIH0oQ29tcG9uZW50KTtcbiAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0L25vLWRlcHJlY2F0ZWQgKi9cblxuXG4gICAgQ29ubmVjdC5XcmFwcGVkQ29tcG9uZW50ID0gV3JhcHBlZENvbXBvbmVudDtcbiAgICBDb25uZWN0LmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XG4gICAgQ29ubmVjdC5jaGlsZENvbnRleHRUeXBlcyA9IGNoaWxkQ29udGV4dFR5cGVzO1xuICAgIENvbm5lY3QuY29udGV4dFR5cGVzID0gY29udGV4dFR5cGVzO1xuICAgIENvbm5lY3QucHJvcFR5cGVzID0gY29udGV4dFR5cGVzO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIENvbm5lY3QucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVXBkYXRlKCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAvLyBXZSBhcmUgaG90IHJlbG9hZGluZyFcbiAgICAgICAgaWYgKHRoaXMudmVyc2lvbiAhPT0gdmVyc2lvbikge1xuICAgICAgICAgIHRoaXMudmVyc2lvbiA9IHZlcnNpb247XG4gICAgICAgICAgdGhpcy5pbml0U2VsZWN0b3IoKTsgLy8gSWYgYW55IGNvbm5lY3RlZCBkZXNjZW5kYW50cyBkb24ndCBob3QgcmVsb2FkIChhbmQgcmVzdWJzY3JpYmUgaW4gdGhlIHByb2Nlc3MpLCB0aGVpclxuICAgICAgICAgIC8vIGxpc3RlbmVycyB3aWxsIGJlIGxvc3Qgd2hlbiB3ZSB1bnN1YnNjcmliZS4gVW5mb3J0dW5hdGVseSwgYnkgY29weWluZyBvdmVyIGFsbFxuICAgICAgICAgIC8vIGxpc3RlbmVycywgdGhpcyBkb2VzIG1lYW4gdGhhdCB0aGUgb2xkIHZlcnNpb25zIG9mIGNvbm5lY3RlZCBkZXNjZW5kYW50cyB3aWxsIHN0aWxsIGJlXG4gICAgICAgICAgLy8gbm90aWZpZWQgb2Ygc3RhdGUgY2hhbmdlczsgaG93ZXZlciwgdGhlaXIgb25TdGF0ZUNoYW5nZSBmdW5jdGlvbiBpcyBhIG5vLW9wIHNvIHRoaXNcbiAgICAgICAgICAvLyBpc24ndCBhIGh1Z2UgZGVhbC5cblxuICAgICAgICAgIHZhciBvbGRMaXN0ZW5lcnMgPSBbXTtcblxuICAgICAgICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgb2xkTGlzdGVuZXJzID0gdGhpcy5zdWJzY3JpcHRpb24ubGlzdGVuZXJzLmdldCgpO1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24udHJ5VW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLmluaXRTdWJzY3JpcHRpb24oKTtcblxuICAgICAgICAgIGlmIChzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMpIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnRyeVN1YnNjcmliZSgpO1xuICAgICAgICAgICAgb2xkTGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdGhpczIuc3Vic2NyaXB0aW9uLmxpc3RlbmVycy5zdWJzY3JpYmUobGlzdGVuZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBob2lzdFN0YXRpY3MoQ29ubmVjdCwgV3JhcHBlZENvbXBvbmVudCk7XG4gIH07XG59IiwidmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbmZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgaWYgKHggPT09IHkpIHtcbiAgICByZXR1cm4geCAhPT0gMCB8fCB5ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNoYWxsb3dFcXVhbChvYmpBLCBvYmpCKSB7XG4gIGlmIChpcyhvYmpBLCBvYmpCKSkgcmV0dXJuIHRydWU7XG5cbiAgaWYgKHR5cGVvZiBvYmpBICE9PSAnb2JqZWN0JyB8fCBvYmpBID09PSBudWxsIHx8IHR5cGVvZiBvYmpCICE9PSAnb2JqZWN0JyB8fCBvYmpCID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGtleXNBID0gT2JqZWN0LmtleXMob2JqQSk7XG4gIHZhciBrZXlzQiA9IE9iamVjdC5rZXlzKG9iakIpO1xuICBpZiAoa2V5c0EubGVuZ3RoICE9PSBrZXlzQi5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXNBLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFoYXNPd24uY2FsbChvYmpCLCBrZXlzQVtpXSkgfHwgIWlzKG9iakFba2V5c0FbaV1dLCBvYmpCW2tleXNBW2ldXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn0iLCJpbXBvcnQgJCRvYnNlcnZhYmxlIGZyb20gJ3N5bWJvbC1vYnNlcnZhYmxlJztcblxuLyoqXG4gKiBUaGVzZSBhcmUgcHJpdmF0ZSBhY3Rpb24gdHlwZXMgcmVzZXJ2ZWQgYnkgUmVkdXguXG4gKiBGb3IgYW55IHVua25vd24gYWN0aW9ucywgeW91IG11c3QgcmV0dXJuIHRoZSBjdXJyZW50IHN0YXRlLlxuICogSWYgdGhlIGN1cnJlbnQgc3RhdGUgaXMgdW5kZWZpbmVkLCB5b3UgbXVzdCByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUuXG4gKiBEbyBub3QgcmVmZXJlbmNlIHRoZXNlIGFjdGlvbiB0eXBlcyBkaXJlY3RseSBpbiB5b3VyIGNvZGUuXG4gKi9cbnZhciByYW5kb21TdHJpbmcgPSBmdW5jdGlvbiByYW5kb21TdHJpbmcoKSB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNykuc3BsaXQoJycpLmpvaW4oJy4nKTtcbn07XG5cbnZhciBBY3Rpb25UeXBlcyA9IHtcbiAgSU5JVDogXCJAQHJlZHV4L0lOSVRcIiArIHJhbmRvbVN0cmluZygpLFxuICBSRVBMQUNFOiBcIkBAcmVkdXgvUkVQTEFDRVwiICsgcmFuZG9tU3RyaW5nKCksXG4gIFBST0JFX1VOS05PV05fQUNUSU9OOiBmdW5jdGlvbiBQUk9CRV9VTktOT1dOX0FDVElPTigpIHtcbiAgICByZXR1cm4gXCJAQHJlZHV4L1BST0JFX1VOS05PV05fQUNUSU9OXCIgKyByYW5kb21TdHJpbmcoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBAcGFyYW0ge2FueX0gb2JqIFRoZSBvYmplY3QgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBhcmd1bWVudCBhcHBlYXJzIHRvIGJlIGEgcGxhaW4gb2JqZWN0LlxuICovXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHwgb2JqID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gIHZhciBwcm90byA9IG9iajtcblxuICB3aGlsZSAoT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvKSAhPT0gbnVsbCkge1xuICAgIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvKTtcbiAgfVxuXG4gIHJldHVybiBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKSA9PT0gcHJvdG87XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIFJlZHV4IHN0b3JlIHRoYXQgaG9sZHMgdGhlIHN0YXRlIHRyZWUuXG4gKiBUaGUgb25seSB3YXkgdG8gY2hhbmdlIHRoZSBkYXRhIGluIHRoZSBzdG9yZSBpcyB0byBjYWxsIGBkaXNwYXRjaCgpYCBvbiBpdC5cbiAqXG4gKiBUaGVyZSBzaG91bGQgb25seSBiZSBhIHNpbmdsZSBzdG9yZSBpbiB5b3VyIGFwcC4gVG8gc3BlY2lmeSBob3cgZGlmZmVyZW50XG4gKiBwYXJ0cyBvZiB0aGUgc3RhdGUgdHJlZSByZXNwb25kIHRvIGFjdGlvbnMsIHlvdSBtYXkgY29tYmluZSBzZXZlcmFsIHJlZHVjZXJzXG4gKiBpbnRvIGEgc2luZ2xlIHJlZHVjZXIgZnVuY3Rpb24gYnkgdXNpbmcgYGNvbWJpbmVSZWR1Y2Vyc2AuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVkdWNlciBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgbmV4dCBzdGF0ZSB0cmVlLCBnaXZlblxuICogdGhlIGN1cnJlbnQgc3RhdGUgdHJlZSBhbmQgdGhlIGFjdGlvbiB0byBoYW5kbGUuXG4gKlxuICogQHBhcmFtIHthbnl9IFtwcmVsb2FkZWRTdGF0ZV0gVGhlIGluaXRpYWwgc3RhdGUuIFlvdSBtYXkgb3B0aW9uYWxseSBzcGVjaWZ5IGl0XG4gKiB0byBoeWRyYXRlIHRoZSBzdGF0ZSBmcm9tIHRoZSBzZXJ2ZXIgaW4gdW5pdmVyc2FsIGFwcHMsIG9yIHRvIHJlc3RvcmUgYVxuICogcHJldmlvdXNseSBzZXJpYWxpemVkIHVzZXIgc2Vzc2lvbi5cbiAqIElmIHlvdSB1c2UgYGNvbWJpbmVSZWR1Y2Vyc2AgdG8gcHJvZHVjZSB0aGUgcm9vdCByZWR1Y2VyIGZ1bmN0aW9uLCB0aGlzIG11c3QgYmVcbiAqIGFuIG9iamVjdCB3aXRoIHRoZSBzYW1lIHNoYXBlIGFzIGBjb21iaW5lUmVkdWNlcnNgIGtleXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2VuaGFuY2VyXSBUaGUgc3RvcmUgZW5oYW5jZXIuIFlvdSBtYXkgb3B0aW9uYWxseSBzcGVjaWZ5IGl0XG4gKiB0byBlbmhhbmNlIHRoZSBzdG9yZSB3aXRoIHRoaXJkLXBhcnR5IGNhcGFiaWxpdGllcyBzdWNoIGFzIG1pZGRsZXdhcmUsXG4gKiB0aW1lIHRyYXZlbCwgcGVyc2lzdGVuY2UsIGV0Yy4gVGhlIG9ubHkgc3RvcmUgZW5oYW5jZXIgdGhhdCBzaGlwcyB3aXRoIFJlZHV4XG4gKiBpcyBgYXBwbHlNaWRkbGV3YXJlKClgLlxuICpcbiAqIEByZXR1cm5zIHtTdG9yZX0gQSBSZWR1eCBzdG9yZSB0aGF0IGxldHMgeW91IHJlYWQgdGhlIHN0YXRlLCBkaXNwYXRjaCBhY3Rpb25zXG4gKiBhbmQgc3Vic2NyaWJlIHRvIGNoYW5nZXMuXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlU3RvcmUocmVkdWNlciwgcHJlbG9hZGVkU3RhdGUsIGVuaGFuY2VyKSB7XG4gIHZhciBfcmVmMjtcblxuICBpZiAodHlwZW9mIHByZWxvYWRlZFN0YXRlID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBlbmhhbmNlciA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgZW5oYW5jZXIgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGFyZ3VtZW50c1szXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignSXQgbG9va3MgbGlrZSB5b3UgYXJlIHBhc3Npbmcgc2V2ZXJhbCBzdG9yZSBlbmhhbmNlcnMgdG8gJyArICdjcmVhdGVTdG9yZSgpLiBUaGlzIGlzIG5vdCBzdXBwb3J0ZWQuIEluc3RlYWQsIGNvbXBvc2UgdGhlbSAnICsgJ3RvZ2V0aGVyIHRvIGEgc2luZ2xlIGZ1bmN0aW9uJyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHByZWxvYWRlZFN0YXRlID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBlbmhhbmNlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBlbmhhbmNlciA9IHByZWxvYWRlZFN0YXRlO1xuICAgIHByZWxvYWRlZFN0YXRlID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBlbmhhbmNlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIGVuaGFuY2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHRoZSBlbmhhbmNlciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIHJldHVybiBlbmhhbmNlcihjcmVhdGVTdG9yZSkocmVkdWNlciwgcHJlbG9hZGVkU3RhdGUpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiByZWR1Y2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgcmVkdWNlciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgdmFyIGN1cnJlbnRSZWR1Y2VyID0gcmVkdWNlcjtcbiAgdmFyIGN1cnJlbnRTdGF0ZSA9IHByZWxvYWRlZFN0YXRlO1xuICB2YXIgY3VycmVudExpc3RlbmVycyA9IFtdO1xuICB2YXIgbmV4dExpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnM7XG4gIHZhciBpc0Rpc3BhdGNoaW5nID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpIHtcbiAgICBpZiAobmV4dExpc3RlbmVycyA9PT0gY3VycmVudExpc3RlbmVycykge1xuICAgICAgbmV4dExpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnMuc2xpY2UoKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFJlYWRzIHRoZSBzdGF0ZSB0cmVlIG1hbmFnZWQgYnkgdGhlIHN0b3JlLlxuICAgKlxuICAgKiBAcmV0dXJucyB7YW55fSBUaGUgY3VycmVudCBzdGF0ZSB0cmVlIG9mIHlvdXIgYXBwbGljYXRpb24uXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gZ2V0U3RhdGUoKSB7XG4gICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG1heSBub3QgY2FsbCBzdG9yZS5nZXRTdGF0ZSgpIHdoaWxlIHRoZSByZWR1Y2VyIGlzIGV4ZWN1dGluZy4gJyArICdUaGUgcmVkdWNlciBoYXMgYWxyZWFkeSByZWNlaXZlZCB0aGUgc3RhdGUgYXMgYW4gYXJndW1lbnQuICcgKyAnUGFzcyBpdCBkb3duIGZyb20gdGhlIHRvcCByZWR1Y2VyIGluc3RlYWQgb2YgcmVhZGluZyBpdCBmcm9tIHRoZSBzdG9yZS4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3VycmVudFN0YXRlO1xuICB9XG4gIC8qKlxuICAgKiBBZGRzIGEgY2hhbmdlIGxpc3RlbmVyLiBJdCB3aWxsIGJlIGNhbGxlZCBhbnkgdGltZSBhbiBhY3Rpb24gaXMgZGlzcGF0Y2hlZCxcbiAgICogYW5kIHNvbWUgcGFydCBvZiB0aGUgc3RhdGUgdHJlZSBtYXkgcG90ZW50aWFsbHkgaGF2ZSBjaGFuZ2VkLiBZb3UgbWF5IHRoZW5cbiAgICogY2FsbCBgZ2V0U3RhdGUoKWAgdG8gcmVhZCB0aGUgY3VycmVudCBzdGF0ZSB0cmVlIGluc2lkZSB0aGUgY2FsbGJhY2suXG4gICAqXG4gICAqIFlvdSBtYXkgY2FsbCBgZGlzcGF0Y2goKWAgZnJvbSBhIGNoYW5nZSBsaXN0ZW5lciwgd2l0aCB0aGUgZm9sbG93aW5nXG4gICAqIGNhdmVhdHM6XG4gICAqXG4gICAqIDEuIFRoZSBzdWJzY3JpcHRpb25zIGFyZSBzbmFwc2hvdHRlZCBqdXN0IGJlZm9yZSBldmVyeSBgZGlzcGF0Y2goKWAgY2FsbC5cbiAgICogSWYgeW91IHN1YnNjcmliZSBvciB1bnN1YnNjcmliZSB3aGlsZSB0aGUgbGlzdGVuZXJzIGFyZSBiZWluZyBpbnZva2VkLCB0aGlzXG4gICAqIHdpbGwgbm90IGhhdmUgYW55IGVmZmVjdCBvbiB0aGUgYGRpc3BhdGNoKClgIHRoYXQgaXMgY3VycmVudGx5IGluIHByb2dyZXNzLlxuICAgKiBIb3dldmVyLCB0aGUgbmV4dCBgZGlzcGF0Y2goKWAgY2FsbCwgd2hldGhlciBuZXN0ZWQgb3Igbm90LCB3aWxsIHVzZSBhIG1vcmVcbiAgICogcmVjZW50IHNuYXBzaG90IG9mIHRoZSBzdWJzY3JpcHRpb24gbGlzdC5cbiAgICpcbiAgICogMi4gVGhlIGxpc3RlbmVyIHNob3VsZCBub3QgZXhwZWN0IHRvIHNlZSBhbGwgc3RhdGUgY2hhbmdlcywgYXMgdGhlIHN0YXRlXG4gICAqIG1pZ2h0IGhhdmUgYmVlbiB1cGRhdGVkIG11bHRpcGxlIHRpbWVzIGR1cmluZyBhIG5lc3RlZCBgZGlzcGF0Y2goKWAgYmVmb3JlXG4gICAqIHRoZSBsaXN0ZW5lciBpcyBjYWxsZWQuIEl0IGlzLCBob3dldmVyLCBndWFyYW50ZWVkIHRoYXQgYWxsIHN1YnNjcmliZXJzXG4gICAqIHJlZ2lzdGVyZWQgYmVmb3JlIHRoZSBgZGlzcGF0Y2goKWAgc3RhcnRlZCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSBsYXRlc3RcbiAgICogc3RhdGUgYnkgdGhlIHRpbWUgaXQgZXhpdHMuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIEEgY2FsbGJhY2sgdG8gYmUgaW52b2tlZCBvbiBldmVyeSBkaXNwYXRjaC5cbiAgICogQHJldHVybnMge0Z1bmN0aW9ufSBBIGZ1bmN0aW9uIHRvIHJlbW92ZSB0aGlzIGNoYW5nZSBsaXN0ZW5lci5cbiAgICovXG5cblxuICBmdW5jdGlvbiBzdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHRoZSBsaXN0ZW5lciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIGlmIChpc0Rpc3BhdGNoaW5nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtYXkgbm90IGNhbGwgc3RvcmUuc3Vic2NyaWJlKCkgd2hpbGUgdGhlIHJlZHVjZXIgaXMgZXhlY3V0aW5nLiAnICsgJ0lmIHlvdSB3b3VsZCBsaWtlIHRvIGJlIG5vdGlmaWVkIGFmdGVyIHRoZSBzdG9yZSBoYXMgYmVlbiB1cGRhdGVkLCBzdWJzY3JpYmUgZnJvbSBhICcgKyAnY29tcG9uZW50IGFuZCBpbnZva2Ugc3RvcmUuZ2V0U3RhdGUoKSBpbiB0aGUgY2FsbGJhY2sgdG8gYWNjZXNzIHRoZSBsYXRlc3Qgc3RhdGUuICcgKyAnU2VlIGh0dHBzOi8vcmVkdXguanMub3JnL2FwaS1yZWZlcmVuY2Uvc3RvcmUjc3Vic2NyaWJlKGxpc3RlbmVyKSBmb3IgbW9yZSBkZXRhaWxzLicpO1xuICAgIH1cblxuICAgIHZhciBpc1N1YnNjcmliZWQgPSB0cnVlO1xuICAgIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKTtcbiAgICBuZXh0TGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgIHJldHVybiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgIGlmICghaXNTdWJzY3JpYmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbWF5IG5vdCB1bnN1YnNjcmliZSBmcm9tIGEgc3RvcmUgbGlzdGVuZXIgd2hpbGUgdGhlIHJlZHVjZXIgaXMgZXhlY3V0aW5nLiAnICsgJ1NlZSBodHRwczovL3JlZHV4LmpzLm9yZy9hcGktcmVmZXJlbmNlL3N0b3JlI3N1YnNjcmliZShsaXN0ZW5lcikgZm9yIG1vcmUgZGV0YWlscy4nKTtcbiAgICAgIH1cblxuICAgICAgaXNTdWJzY3JpYmVkID0gZmFsc2U7XG4gICAgICBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCk7XG4gICAgICB2YXIgaW5kZXggPSBuZXh0TGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpO1xuICAgICAgbmV4dExpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIERpc3BhdGNoZXMgYW4gYWN0aW9uLiBJdCBpcyB0aGUgb25seSB3YXkgdG8gdHJpZ2dlciBhIHN0YXRlIGNoYW5nZS5cbiAgICpcbiAgICogVGhlIGByZWR1Y2VyYCBmdW5jdGlvbiwgdXNlZCB0byBjcmVhdGUgdGhlIHN0b3JlLCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZVxuICAgKiBjdXJyZW50IHN0YXRlIHRyZWUgYW5kIHRoZSBnaXZlbiBgYWN0aW9uYC4gSXRzIHJldHVybiB2YWx1ZSB3aWxsXG4gICAqIGJlIGNvbnNpZGVyZWQgdGhlICoqbmV4dCoqIHN0YXRlIG9mIHRoZSB0cmVlLCBhbmQgdGhlIGNoYW5nZSBsaXN0ZW5lcnNcbiAgICogd2lsbCBiZSBub3RpZmllZC5cbiAgICpcbiAgICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb25seSBzdXBwb3J0cyBwbGFpbiBvYmplY3QgYWN0aW9ucy4gSWYgeW91IHdhbnQgdG9cbiAgICogZGlzcGF0Y2ggYSBQcm9taXNlLCBhbiBPYnNlcnZhYmxlLCBhIHRodW5rLCBvciBzb21ldGhpbmcgZWxzZSwgeW91IG5lZWQgdG9cbiAgICogd3JhcCB5b3VyIHN0b3JlIGNyZWF0aW5nIGZ1bmN0aW9uIGludG8gdGhlIGNvcnJlc3BvbmRpbmcgbWlkZGxld2FyZS4gRm9yXG4gICAqIGV4YW1wbGUsIHNlZSB0aGUgZG9jdW1lbnRhdGlvbiBmb3IgdGhlIGByZWR1eC10aHVua2AgcGFja2FnZS4gRXZlbiB0aGVcbiAgICogbWlkZGxld2FyZSB3aWxsIGV2ZW50dWFsbHkgZGlzcGF0Y2ggcGxhaW4gb2JqZWN0IGFjdGlvbnMgdXNpbmcgdGhpcyBtZXRob2QuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gQSBwbGFpbiBvYmplY3QgcmVwcmVzZW50aW5nIOKAnHdoYXQgY2hhbmdlZOKAnS4gSXQgaXNcbiAgICogYSBnb29kIGlkZWEgdG8ga2VlcCBhY3Rpb25zIHNlcmlhbGl6YWJsZSBzbyB5b3UgY2FuIHJlY29yZCBhbmQgcmVwbGF5IHVzZXJcbiAgICogc2Vzc2lvbnMsIG9yIHVzZSB0aGUgdGltZSB0cmF2ZWxsaW5nIGByZWR1eC1kZXZ0b29sc2AuIEFuIGFjdGlvbiBtdXN0IGhhdmVcbiAgICogYSBgdHlwZWAgcHJvcGVydHkgd2hpY2ggbWF5IG5vdCBiZSBgdW5kZWZpbmVkYC4gSXQgaXMgYSBnb29kIGlkZWEgdG8gdXNlXG4gICAqIHN0cmluZyBjb25zdGFudHMgZm9yIGFjdGlvbiB0eXBlcy5cbiAgICpcbiAgICogQHJldHVybnMge09iamVjdH0gRm9yIGNvbnZlbmllbmNlLCB0aGUgc2FtZSBhY3Rpb24gb2JqZWN0IHlvdSBkaXNwYXRjaGVkLlxuICAgKlxuICAgKiBOb3RlIHRoYXQsIGlmIHlvdSB1c2UgYSBjdXN0b20gbWlkZGxld2FyZSwgaXQgbWF5IHdyYXAgYGRpc3BhdGNoKClgIHRvXG4gICAqIHJldHVybiBzb21ldGhpbmcgZWxzZSAoZm9yIGV4YW1wbGUsIGEgUHJvbWlzZSB5b3UgY2FuIGF3YWl0KS5cbiAgICovXG5cblxuICBmdW5jdGlvbiBkaXNwYXRjaChhY3Rpb24pIHtcbiAgICBpZiAoIWlzUGxhaW5PYmplY3QoYWN0aW9uKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBY3Rpb25zIG11c3QgYmUgcGxhaW4gb2JqZWN0cy4gJyArICdVc2UgY3VzdG9tIG1pZGRsZXdhcmUgZm9yIGFzeW5jIGFjdGlvbnMuJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBhY3Rpb24udHlwZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQWN0aW9ucyBtYXkgbm90IGhhdmUgYW4gdW5kZWZpbmVkIFwidHlwZVwiIHByb3BlcnR5LiAnICsgJ0hhdmUgeW91IG1pc3NwZWxsZWQgYSBjb25zdGFudD8nKTtcbiAgICB9XG5cbiAgICBpZiAoaXNEaXNwYXRjaGluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWR1Y2VycyBtYXkgbm90IGRpc3BhdGNoIGFjdGlvbnMuJyk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGlzRGlzcGF0Y2hpbmcgPSB0cnVlO1xuICAgICAgY3VycmVudFN0YXRlID0gY3VycmVudFJlZHVjZXIoY3VycmVudFN0YXRlLCBhY3Rpb24pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpc0Rpc3BhdGNoaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGxpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnMgPSBuZXh0TGlzdGVuZXJzO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBsaXN0ZW5lciA9IGxpc3RlbmVyc1tpXTtcbiAgICAgIGxpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjdGlvbjtcbiAgfVxuICAvKipcbiAgICogUmVwbGFjZXMgdGhlIHJlZHVjZXIgY3VycmVudGx5IHVzZWQgYnkgdGhlIHN0b3JlIHRvIGNhbGN1bGF0ZSB0aGUgc3RhdGUuXG4gICAqXG4gICAqIFlvdSBtaWdodCBuZWVkIHRoaXMgaWYgeW91ciBhcHAgaW1wbGVtZW50cyBjb2RlIHNwbGl0dGluZyBhbmQgeW91IHdhbnQgdG9cbiAgICogbG9hZCBzb21lIG9mIHRoZSByZWR1Y2VycyBkeW5hbWljYWxseS4gWW91IG1pZ2h0IGFsc28gbmVlZCB0aGlzIGlmIHlvdVxuICAgKiBpbXBsZW1lbnQgYSBob3QgcmVsb2FkaW5nIG1lY2hhbmlzbSBmb3IgUmVkdXguXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IG5leHRSZWR1Y2VyIFRoZSByZWR1Y2VyIGZvciB0aGUgc3RvcmUgdG8gdXNlIGluc3RlYWQuXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHJlcGxhY2VSZWR1Y2VyKG5leHRSZWR1Y2VyKSB7XG4gICAgaWYgKHR5cGVvZiBuZXh0UmVkdWNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgbmV4dFJlZHVjZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICBjdXJyZW50UmVkdWNlciA9IG5leHRSZWR1Y2VyO1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEFjdGlvblR5cGVzLlJFUExBQ0VcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogSW50ZXJvcGVyYWJpbGl0eSBwb2ludCBmb3Igb2JzZXJ2YWJsZS9yZWFjdGl2ZSBsaWJyYXJpZXMuXG4gICAqIEByZXR1cm5zIHtvYnNlcnZhYmxlfSBBIG1pbmltYWwgb2JzZXJ2YWJsZSBvZiBzdGF0ZSBjaGFuZ2VzLlxuICAgKiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIHRoZSBvYnNlcnZhYmxlIHByb3Bvc2FsOlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1vYnNlcnZhYmxlXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gb2JzZXJ2YWJsZSgpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBvdXRlclN1YnNjcmliZSA9IHN1YnNjcmliZTtcbiAgICByZXR1cm4gX3JlZiA9IHtcbiAgICAgIC8qKlxuICAgICAgICogVGhlIG1pbmltYWwgb2JzZXJ2YWJsZSBzdWJzY3JpcHRpb24gbWV0aG9kLlxuICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9ic2VydmVyIEFueSBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCBhcyBhbiBvYnNlcnZlci5cbiAgICAgICAqIFRoZSBvYnNlcnZlciBvYmplY3Qgc2hvdWxkIGhhdmUgYSBgbmV4dGAgbWV0aG9kLlxuICAgICAgICogQHJldHVybnMge3N1YnNjcmlwdGlvbn0gQW4gb2JqZWN0IHdpdGggYW4gYHVuc3Vic2NyaWJlYCBtZXRob2QgdGhhdCBjYW5cbiAgICAgICAqIGJlIHVzZWQgdG8gdW5zdWJzY3JpYmUgdGhlIG9ic2VydmFibGUgZnJvbSB0aGUgc3RvcmUsIGFuZCBwcmV2ZW50IGZ1cnRoZXJcbiAgICAgICAqIGVtaXNzaW9uIG9mIHZhbHVlcyBmcm9tIHRoZSBvYnNlcnZhYmxlLlxuICAgICAgICovXG4gICAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uIHN1YnNjcmliZShvYnNlcnZlcikge1xuICAgICAgICBpZiAodHlwZW9mIG9ic2VydmVyICE9PSAnb2JqZWN0JyB8fCBvYnNlcnZlciA9PT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIHRoZSBvYnNlcnZlciB0byBiZSBhbiBvYmplY3QuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBvYnNlcnZlU3RhdGUoKSB7XG4gICAgICAgICAgaWYgKG9ic2VydmVyLm5leHQpIHtcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQoZ2V0U3RhdGUoKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgb2JzZXJ2ZVN0YXRlKCk7XG4gICAgICAgIHZhciB1bnN1YnNjcmliZSA9IG91dGVyU3Vic2NyaWJlKG9ic2VydmVTdGF0ZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdW5zdWJzY3JpYmU6IHVuc3Vic2NyaWJlXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSwgX3JlZlskJG9ic2VydmFibGVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSwgX3JlZjtcbiAgfSAvLyBXaGVuIGEgc3RvcmUgaXMgY3JlYXRlZCwgYW4gXCJJTklUXCIgYWN0aW9uIGlzIGRpc3BhdGNoZWQgc28gdGhhdCBldmVyeVxuICAvLyByZWR1Y2VyIHJldHVybnMgdGhlaXIgaW5pdGlhbCBzdGF0ZS4gVGhpcyBlZmZlY3RpdmVseSBwb3B1bGF0ZXNcbiAgLy8gdGhlIGluaXRpYWwgc3RhdGUgdHJlZS5cblxuXG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5JTklUXG4gIH0pO1xuICByZXR1cm4gX3JlZjIgPSB7XG4gICAgZGlzcGF0Y2g6IGRpc3BhdGNoLFxuICAgIHN1YnNjcmliZTogc3Vic2NyaWJlLFxuICAgIGdldFN0YXRlOiBnZXRTdGF0ZSxcbiAgICByZXBsYWNlUmVkdWNlcjogcmVwbGFjZVJlZHVjZXJcbiAgfSwgX3JlZjJbJCRvYnNlcnZhYmxlXSA9IG9ic2VydmFibGUsIF9yZWYyO1xufVxuXG4vKipcbiAqIFByaW50cyBhIHdhcm5pbmcgaW4gdGhlIGNvbnNvbGUgaWYgaXQgZXhpc3RzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIFRoZSB3YXJuaW5nIG1lc3NhZ2UuXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gd2FybmluZyhtZXNzYWdlKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY29uc29sZS5lcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gIH1cbiAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG5cblxuICB0cnkge1xuICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgaWYgeW91IGVuYWJsZVxuICAgIC8vIFwiYnJlYWsgb24gYWxsIGV4Y2VwdGlvbnNcIiBpbiB5b3VyIGNvbnNvbGUsXG4gICAgLy8gaXQgd291bGQgcGF1c2UgdGhlIGV4ZWN1dGlvbiBhdCB0aGlzIGxpbmUuXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICB9IGNhdGNoIChlKSB7fSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWVtcHR5XG5cbn1cblxuZnVuY3Rpb24gZ2V0VW5kZWZpbmVkU3RhdGVFcnJvck1lc3NhZ2Uoa2V5LCBhY3Rpb24pIHtcbiAgdmFyIGFjdGlvblR5cGUgPSBhY3Rpb24gJiYgYWN0aW9uLnR5cGU7XG4gIHZhciBhY3Rpb25EZXNjcmlwdGlvbiA9IGFjdGlvblR5cGUgJiYgXCJhY3Rpb24gXFxcIlwiICsgU3RyaW5nKGFjdGlvblR5cGUpICsgXCJcXFwiXCIgfHwgJ2FuIGFjdGlvbic7XG4gIHJldHVybiBcIkdpdmVuIFwiICsgYWN0aW9uRGVzY3JpcHRpb24gKyBcIiwgcmVkdWNlciBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgcmV0dXJuZWQgdW5kZWZpbmVkLiBcIiArIFwiVG8gaWdub3JlIGFuIGFjdGlvbiwgeW91IG11c3QgZXhwbGljaXRseSByZXR1cm4gdGhlIHByZXZpb3VzIHN0YXRlLiBcIiArIFwiSWYgeW91IHdhbnQgdGhpcyByZWR1Y2VyIHRvIGhvbGQgbm8gdmFsdWUsIHlvdSBjYW4gcmV0dXJuIG51bGwgaW5zdGVhZCBvZiB1bmRlZmluZWQuXCI7XG59XG5cbmZ1bmN0aW9uIGdldFVuZXhwZWN0ZWRTdGF0ZVNoYXBlV2FybmluZ01lc3NhZ2UoaW5wdXRTdGF0ZSwgcmVkdWNlcnMsIGFjdGlvbiwgdW5leHBlY3RlZEtleUNhY2hlKSB7XG4gIHZhciByZWR1Y2VyS2V5cyA9IE9iamVjdC5rZXlzKHJlZHVjZXJzKTtcbiAgdmFyIGFyZ3VtZW50TmFtZSA9IGFjdGlvbiAmJiBhY3Rpb24udHlwZSA9PT0gQWN0aW9uVHlwZXMuSU5JVCA/ICdwcmVsb2FkZWRTdGF0ZSBhcmd1bWVudCBwYXNzZWQgdG8gY3JlYXRlU3RvcmUnIDogJ3ByZXZpb3VzIHN0YXRlIHJlY2VpdmVkIGJ5IHRoZSByZWR1Y2VyJztcblxuICBpZiAocmVkdWNlcktleXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuICdTdG9yZSBkb2VzIG5vdCBoYXZlIGEgdmFsaWQgcmVkdWNlci4gTWFrZSBzdXJlIHRoZSBhcmd1bWVudCBwYXNzZWQgJyArICd0byBjb21iaW5lUmVkdWNlcnMgaXMgYW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgcmVkdWNlcnMuJztcbiAgfVxuXG4gIGlmICghaXNQbGFpbk9iamVjdChpbnB1dFN0YXRlKSkge1xuICAgIHJldHVybiBcIlRoZSBcIiArIGFyZ3VtZW50TmFtZSArIFwiIGhhcyB1bmV4cGVjdGVkIHR5cGUgb2YgXFxcIlwiICsge30udG9TdHJpbmcuY2FsbChpbnB1dFN0YXRlKS5tYXRjaCgvXFxzKFthLXp8QS1aXSspLylbMV0gKyBcIlxcXCIuIEV4cGVjdGVkIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcgXCIgKyAoXCJrZXlzOiBcXFwiXCIgKyByZWR1Y2VyS2V5cy5qb2luKCdcIiwgXCInKSArIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHZhciB1bmV4cGVjdGVkS2V5cyA9IE9iamVjdC5rZXlzKGlucHV0U3RhdGUpLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuICFyZWR1Y2Vycy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmICF1bmV4cGVjdGVkS2V5Q2FjaGVba2V5XTtcbiAgfSk7XG4gIHVuZXhwZWN0ZWRLZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHVuZXhwZWN0ZWRLZXlDYWNoZVtrZXldID0gdHJ1ZTtcbiAgfSk7XG4gIGlmIChhY3Rpb24gJiYgYWN0aW9uLnR5cGUgPT09IEFjdGlvblR5cGVzLlJFUExBQ0UpIHJldHVybjtcblxuICBpZiAodW5leHBlY3RlZEtleXMubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBcIlVuZXhwZWN0ZWQgXCIgKyAodW5leHBlY3RlZEtleXMubGVuZ3RoID4gMSA/ICdrZXlzJyA6ICdrZXknKSArIFwiIFwiICsgKFwiXFxcIlwiICsgdW5leHBlY3RlZEtleXMuam9pbignXCIsIFwiJykgKyBcIlxcXCIgZm91bmQgaW4gXCIgKyBhcmd1bWVudE5hbWUgKyBcIi4gXCIpICsgXCJFeHBlY3RlZCB0byBmaW5kIG9uZSBvZiB0aGUga25vd24gcmVkdWNlciBrZXlzIGluc3RlYWQ6IFwiICsgKFwiXFxcIlwiICsgcmVkdWNlcktleXMuam9pbignXCIsIFwiJykgKyBcIlxcXCIuIFVuZXhwZWN0ZWQga2V5cyB3aWxsIGJlIGlnbm9yZWQuXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2VydFJlZHVjZXJTaGFwZShyZWR1Y2Vycykge1xuICBPYmplY3Qua2V5cyhyZWR1Y2VycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIHJlZHVjZXIgPSByZWR1Y2Vyc1trZXldO1xuICAgIHZhciBpbml0aWFsU3RhdGUgPSByZWR1Y2VyKHVuZGVmaW5lZCwge1xuICAgICAgdHlwZTogQWN0aW9uVHlwZXMuSU5JVFxuICAgIH0pO1xuXG4gICAgaWYgKHR5cGVvZiBpbml0aWFsU3RhdGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZWR1Y2VyIFxcXCJcIiArIGtleSArIFwiXFxcIiByZXR1cm5lZCB1bmRlZmluZWQgZHVyaW5nIGluaXRpYWxpemF0aW9uLiBcIiArIFwiSWYgdGhlIHN0YXRlIHBhc3NlZCB0byB0aGUgcmVkdWNlciBpcyB1bmRlZmluZWQsIHlvdSBtdXN0IFwiICsgXCJleHBsaWNpdGx5IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZS4gVGhlIGluaXRpYWwgc3RhdGUgbWF5IFwiICsgXCJub3QgYmUgdW5kZWZpbmVkLiBJZiB5b3UgZG9uJ3Qgd2FudCB0byBzZXQgYSB2YWx1ZSBmb3IgdGhpcyByZWR1Y2VyLCBcIiArIFwieW91IGNhbiB1c2UgbnVsbCBpbnN0ZWFkIG9mIHVuZGVmaW5lZC5cIik7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiByZWR1Y2VyKHVuZGVmaW5lZCwge1xuICAgICAgdHlwZTogQWN0aW9uVHlwZXMuUFJPQkVfVU5LTk9XTl9BQ1RJT04oKVxuICAgIH0pID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVkdWNlciBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgcmV0dXJuZWQgdW5kZWZpbmVkIHdoZW4gcHJvYmVkIHdpdGggYSByYW5kb20gdHlwZS4gXCIgKyAoXCJEb24ndCB0cnkgdG8gaGFuZGxlIFwiICsgQWN0aW9uVHlwZXMuSU5JVCArIFwiIG9yIG90aGVyIGFjdGlvbnMgaW4gXFxcInJlZHV4LypcXFwiIFwiKSArIFwibmFtZXNwYWNlLiBUaGV5IGFyZSBjb25zaWRlcmVkIHByaXZhdGUuIEluc3RlYWQsIHlvdSBtdXN0IHJldHVybiB0aGUgXCIgKyBcImN1cnJlbnQgc3RhdGUgZm9yIGFueSB1bmtub3duIGFjdGlvbnMsIHVubGVzcyBpdCBpcyB1bmRlZmluZWQsIFwiICsgXCJpbiB3aGljaCBjYXNlIHlvdSBtdXN0IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZSwgcmVnYXJkbGVzcyBvZiB0aGUgXCIgKyBcImFjdGlvbiB0eXBlLiBUaGUgaW5pdGlhbCBzdGF0ZSBtYXkgbm90IGJlIHVuZGVmaW5lZCwgYnV0IGNhbiBiZSBudWxsLlwiKTtcbiAgICB9XG4gIH0pO1xufVxuLyoqXG4gKiBUdXJucyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBkaWZmZXJlbnQgcmVkdWNlciBmdW5jdGlvbnMsIGludG8gYSBzaW5nbGVcbiAqIHJlZHVjZXIgZnVuY3Rpb24uIEl0IHdpbGwgY2FsbCBldmVyeSBjaGlsZCByZWR1Y2VyLCBhbmQgZ2F0aGVyIHRoZWlyIHJlc3VsdHNcbiAqIGludG8gYSBzaW5nbGUgc3RhdGUgb2JqZWN0LCB3aG9zZSBrZXlzIGNvcnJlc3BvbmQgdG8gdGhlIGtleXMgb2YgdGhlIHBhc3NlZFxuICogcmVkdWNlciBmdW5jdGlvbnMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHJlZHVjZXJzIEFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgY29ycmVzcG9uZCB0byBkaWZmZXJlbnRcbiAqIHJlZHVjZXIgZnVuY3Rpb25zIHRoYXQgbmVlZCB0byBiZSBjb21iaW5lZCBpbnRvIG9uZS4gT25lIGhhbmR5IHdheSB0byBvYnRhaW5cbiAqIGl0IGlzIHRvIHVzZSBFUzYgYGltcG9ydCAqIGFzIHJlZHVjZXJzYCBzeW50YXguIFRoZSByZWR1Y2VycyBtYXkgbmV2ZXIgcmV0dXJuXG4gKiB1bmRlZmluZWQgZm9yIGFueSBhY3Rpb24uIEluc3RlYWQsIHRoZXkgc2hvdWxkIHJldHVybiB0aGVpciBpbml0aWFsIHN0YXRlXG4gKiBpZiB0aGUgc3RhdGUgcGFzc2VkIHRvIHRoZW0gd2FzIHVuZGVmaW5lZCwgYW5kIHRoZSBjdXJyZW50IHN0YXRlIGZvciBhbnlcbiAqIHVucmVjb2duaXplZCBhY3Rpb24uXG4gKlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIHJlZHVjZXIgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGV2ZXJ5IHJlZHVjZXIgaW5zaWRlIHRoZVxuICogcGFzc2VkIG9iamVjdCwgYW5kIGJ1aWxkcyBhIHN0YXRlIG9iamVjdCB3aXRoIHRoZSBzYW1lIHNoYXBlLlxuICovXG5cblxuZnVuY3Rpb24gY29tYmluZVJlZHVjZXJzKHJlZHVjZXJzKSB7XG4gIHZhciByZWR1Y2VyS2V5cyA9IE9iamVjdC5rZXlzKHJlZHVjZXJzKTtcbiAgdmFyIGZpbmFsUmVkdWNlcnMgPSB7fTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHJlZHVjZXJLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IHJlZHVjZXJLZXlzW2ldO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2YgcmVkdWNlcnNba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgd2FybmluZyhcIk5vIHJlZHVjZXIgcHJvdmlkZWQgZm9yIGtleSBcXFwiXCIgKyBrZXkgKyBcIlxcXCJcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiByZWR1Y2Vyc1trZXldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBmaW5hbFJlZHVjZXJzW2tleV0gPSByZWR1Y2Vyc1trZXldO1xuICAgIH1cbiAgfVxuXG4gIHZhciBmaW5hbFJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMoZmluYWxSZWR1Y2Vycyk7XG4gIHZhciB1bmV4cGVjdGVkS2V5Q2FjaGU7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB1bmV4cGVjdGVkS2V5Q2FjaGUgPSB7fTtcbiAgfVxuXG4gIHZhciBzaGFwZUFzc2VydGlvbkVycm9yO1xuXG4gIHRyeSB7XG4gICAgYXNzZXJ0UmVkdWNlclNoYXBlKGZpbmFsUmVkdWNlcnMpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgc2hhcGVBc3NlcnRpb25FcnJvciA9IGU7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gY29tYmluYXRpb24oc3RhdGUsIGFjdGlvbikge1xuICAgIGlmIChzdGF0ZSA9PT0gdm9pZCAwKSB7XG4gICAgICBzdGF0ZSA9IHt9O1xuICAgIH1cblxuICAgIGlmIChzaGFwZUFzc2VydGlvbkVycm9yKSB7XG4gICAgICB0aHJvdyBzaGFwZUFzc2VydGlvbkVycm9yO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgd2FybmluZ01lc3NhZ2UgPSBnZXRVbmV4cGVjdGVkU3RhdGVTaGFwZVdhcm5pbmdNZXNzYWdlKHN0YXRlLCBmaW5hbFJlZHVjZXJzLCBhY3Rpb24sIHVuZXhwZWN0ZWRLZXlDYWNoZSk7XG5cbiAgICAgIGlmICh3YXJuaW5nTWVzc2FnZSkge1xuICAgICAgICB3YXJuaW5nKHdhcm5pbmdNZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgaGFzQ2hhbmdlZCA9IGZhbHNlO1xuICAgIHZhciBuZXh0U3RhdGUgPSB7fTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBmaW5hbFJlZHVjZXJLZXlzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9rZXkgPSBmaW5hbFJlZHVjZXJLZXlzW19pXTtcbiAgICAgIHZhciByZWR1Y2VyID0gZmluYWxSZWR1Y2Vyc1tfa2V5XTtcbiAgICAgIHZhciBwcmV2aW91c1N0YXRlRm9yS2V5ID0gc3RhdGVbX2tleV07XG4gICAgICB2YXIgbmV4dFN0YXRlRm9yS2V5ID0gcmVkdWNlcihwcmV2aW91c1N0YXRlRm9yS2V5LCBhY3Rpb24pO1xuXG4gICAgICBpZiAodHlwZW9mIG5leHRTdGF0ZUZvcktleSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IGdldFVuZGVmaW5lZFN0YXRlRXJyb3JNZXNzYWdlKF9rZXksIGFjdGlvbik7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvck1lc3NhZ2UpO1xuICAgICAgfVxuXG4gICAgICBuZXh0U3RhdGVbX2tleV0gPSBuZXh0U3RhdGVGb3JLZXk7XG4gICAgICBoYXNDaGFuZ2VkID0gaGFzQ2hhbmdlZCB8fCBuZXh0U3RhdGVGb3JLZXkgIT09IHByZXZpb3VzU3RhdGVGb3JLZXk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhhc0NoYW5nZWQgPyBuZXh0U3RhdGUgOiBzdGF0ZTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYmluZEFjdGlvbkNyZWF0b3IoYWN0aW9uQ3JlYXRvciwgZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZGlzcGF0Y2goYWN0aW9uQ3JlYXRvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfTtcbn1cbi8qKlxuICogVHVybnMgYW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgYWN0aW9uIGNyZWF0b3JzLCBpbnRvIGFuIG9iamVjdCB3aXRoIHRoZVxuICogc2FtZSBrZXlzLCBidXQgd2l0aCBldmVyeSBmdW5jdGlvbiB3cmFwcGVkIGludG8gYSBgZGlzcGF0Y2hgIGNhbGwgc28gdGhleVxuICogbWF5IGJlIGludm9rZWQgZGlyZWN0bHkuIFRoaXMgaXMganVzdCBhIGNvbnZlbmllbmNlIG1ldGhvZCwgYXMgeW91IGNhbiBjYWxsXG4gKiBgc3RvcmUuZGlzcGF0Y2goTXlBY3Rpb25DcmVhdG9ycy5kb1NvbWV0aGluZygpKWAgeW91cnNlbGYganVzdCBmaW5lLlxuICpcbiAqIEZvciBjb252ZW5pZW5jZSwgeW91IGNhbiBhbHNvIHBhc3MgYSBzaW5nbGUgZnVuY3Rpb24gYXMgdGhlIGZpcnN0IGFyZ3VtZW50LFxuICogYW5kIGdldCBhIGZ1bmN0aW9uIGluIHJldHVybi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufE9iamVjdH0gYWN0aW9uQ3JlYXRvcnMgQW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgYWN0aW9uXG4gKiBjcmVhdG9yIGZ1bmN0aW9ucy4gT25lIGhhbmR5IHdheSB0byBvYnRhaW4gaXQgaXMgdG8gdXNlIEVTNiBgaW1wb3J0ICogYXNgXG4gKiBzeW50YXguIFlvdSBtYXkgYWxzbyBwYXNzIGEgc2luZ2xlIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGRpc3BhdGNoIFRoZSBgZGlzcGF0Y2hgIGZ1bmN0aW9uIGF2YWlsYWJsZSBvbiB5b3VyIFJlZHV4XG4gKiBzdG9yZS5cbiAqXG4gKiBAcmV0dXJucyB7RnVuY3Rpb258T2JqZWN0fSBUaGUgb2JqZWN0IG1pbWlja2luZyB0aGUgb3JpZ2luYWwgb2JqZWN0LCBidXQgd2l0aFxuICogZXZlcnkgYWN0aW9uIGNyZWF0b3Igd3JhcHBlZCBpbnRvIHRoZSBgZGlzcGF0Y2hgIGNhbGwuIElmIHlvdSBwYXNzZWQgYVxuICogZnVuY3Rpb24gYXMgYGFjdGlvbkNyZWF0b3JzYCwgdGhlIHJldHVybiB2YWx1ZSB3aWxsIGFsc28gYmUgYSBzaW5nbGVcbiAqIGZ1bmN0aW9uLlxuICovXG5cblxuZnVuY3Rpb24gYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCkge1xuICBpZiAodHlwZW9mIGFjdGlvbkNyZWF0b3JzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCk7XG4gIH1cblxuICBpZiAodHlwZW9mIGFjdGlvbkNyZWF0b3JzICE9PSAnb2JqZWN0JyB8fCBhY3Rpb25DcmVhdG9ycyA9PT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcImJpbmRBY3Rpb25DcmVhdG9ycyBleHBlY3RlZCBhbiBvYmplY3Qgb3IgYSBmdW5jdGlvbiwgaW5zdGVhZCByZWNlaXZlZCBcIiArIChhY3Rpb25DcmVhdG9ycyA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBhY3Rpb25DcmVhdG9ycykgKyBcIi4gXCIgKyBcIkRpZCB5b3Ugd3JpdGUgXFxcImltcG9ydCBBY3Rpb25DcmVhdG9ycyBmcm9tXFxcIiBpbnN0ZWFkIG9mIFxcXCJpbXBvcnQgKiBhcyBBY3Rpb25DcmVhdG9ycyBmcm9tXFxcIj9cIik7XG4gIH1cblxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGFjdGlvbkNyZWF0b3JzKTtcbiAgdmFyIGJvdW5kQWN0aW9uQ3JlYXRvcnMgPSB7fTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICB2YXIgYWN0aW9uQ3JlYXRvciA9IGFjdGlvbkNyZWF0b3JzW2tleV07XG5cbiAgICBpZiAodHlwZW9mIGFjdGlvbkNyZWF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGJvdW5kQWN0aW9uQ3JlYXRvcnNba2V5XSA9IGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3IsIGRpc3BhdGNoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYm91bmRBY3Rpb25DcmVhdG9ycztcbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG4gICAgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuXG4gICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgfSkpO1xuICAgIH1cblxuICAgIG93bktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbi8qKlxuICogQ29tcG9zZXMgc2luZ2xlLWFyZ3VtZW50IGZ1bmN0aW9ucyBmcm9tIHJpZ2h0IHRvIGxlZnQuIFRoZSByaWdodG1vc3RcbiAqIGZ1bmN0aW9uIGNhbiB0YWtlIG11bHRpcGxlIGFyZ3VtZW50cyBhcyBpdCBwcm92aWRlcyB0aGUgc2lnbmF0dXJlIGZvclxuICogdGhlIHJlc3VsdGluZyBjb21wb3NpdGUgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHsuLi5GdW5jdGlvbn0gZnVuY3MgVGhlIGZ1bmN0aW9ucyB0byBjb21wb3NlLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIGZ1bmN0aW9uIG9idGFpbmVkIGJ5IGNvbXBvc2luZyB0aGUgYXJndW1lbnQgZnVuY3Rpb25zXG4gKiBmcm9tIHJpZ2h0IHRvIGxlZnQuIEZvciBleGFtcGxlLCBjb21wb3NlKGYsIGcsIGgpIGlzIGlkZW50aWNhbCB0byBkb2luZ1xuICogKC4uLmFyZ3MpID0+IGYoZyhoKC4uLmFyZ3MpKSkuXG4gKi9cbmZ1bmN0aW9uIGNvbXBvc2UoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBmdW5jcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBmdW5jc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmIChmdW5jcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGFyZykge1xuICAgICAgcmV0dXJuIGFyZztcbiAgICB9O1xuICB9XG5cbiAgaWYgKGZ1bmNzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBmdW5jc1swXTtcbiAgfVxuXG4gIHJldHVybiBmdW5jcy5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGEoYi5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cykpO1xuICAgIH07XG4gIH0pO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBzdG9yZSBlbmhhbmNlciB0aGF0IGFwcGxpZXMgbWlkZGxld2FyZSB0byB0aGUgZGlzcGF0Y2ggbWV0aG9kXG4gKiBvZiB0aGUgUmVkdXggc3RvcmUuIFRoaXMgaXMgaGFuZHkgZm9yIGEgdmFyaWV0eSBvZiB0YXNrcywgc3VjaCBhcyBleHByZXNzaW5nXG4gKiBhc3luY2hyb25vdXMgYWN0aW9ucyBpbiBhIGNvbmNpc2UgbWFubmVyLCBvciBsb2dnaW5nIGV2ZXJ5IGFjdGlvbiBwYXlsb2FkLlxuICpcbiAqIFNlZSBgcmVkdXgtdGh1bmtgIHBhY2thZ2UgYXMgYW4gZXhhbXBsZSBvZiB0aGUgUmVkdXggbWlkZGxld2FyZS5cbiAqXG4gKiBCZWNhdXNlIG1pZGRsZXdhcmUgaXMgcG90ZW50aWFsbHkgYXN5bmNocm9ub3VzLCB0aGlzIHNob3VsZCBiZSB0aGUgZmlyc3RcbiAqIHN0b3JlIGVuaGFuY2VyIGluIHRoZSBjb21wb3NpdGlvbiBjaGFpbi5cbiAqXG4gKiBOb3RlIHRoYXQgZWFjaCBtaWRkbGV3YXJlIHdpbGwgYmUgZ2l2ZW4gdGhlIGBkaXNwYXRjaGAgYW5kIGBnZXRTdGF0ZWAgZnVuY3Rpb25zXG4gKiBhcyBuYW1lZCBhcmd1bWVudHMuXG4gKlxuICogQHBhcmFtIHsuLi5GdW5jdGlvbn0gbWlkZGxld2FyZXMgVGhlIG1pZGRsZXdhcmUgY2hhaW4gdG8gYmUgYXBwbGllZC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBzdG9yZSBlbmhhbmNlciBhcHBseWluZyB0aGUgbWlkZGxld2FyZS5cbiAqL1xuXG5mdW5jdGlvbiBhcHBseU1pZGRsZXdhcmUoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBtaWRkbGV3YXJlcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBtaWRkbGV3YXJlc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoY3JlYXRlU3RvcmUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHN0b3JlID0gY3JlYXRlU3RvcmUuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xuXG4gICAgICB2YXIgX2Rpc3BhdGNoID0gZnVuY3Rpb24gZGlzcGF0Y2goKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRpc3BhdGNoaW5nIHdoaWxlIGNvbnN0cnVjdGluZyB5b3VyIG1pZGRsZXdhcmUgaXMgbm90IGFsbG93ZWQuIFwiICsgXCJPdGhlciBtaWRkbGV3YXJlIHdvdWxkIG5vdCBiZSBhcHBsaWVkIHRvIHRoaXMgZGlzcGF0Y2guXCIpO1xuICAgICAgfTtcblxuICAgICAgdmFyIG1pZGRsZXdhcmVBUEkgPSB7XG4gICAgICAgIGdldFN0YXRlOiBzdG9yZS5nZXRTdGF0ZSxcbiAgICAgICAgZGlzcGF0Y2g6IGZ1bmN0aW9uIGRpc3BhdGNoKCkge1xuICAgICAgICAgIHJldHVybiBfZGlzcGF0Y2guYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgdmFyIGNoYWluID0gbWlkZGxld2FyZXMubWFwKGZ1bmN0aW9uIChtaWRkbGV3YXJlKSB7XG4gICAgICAgIHJldHVybiBtaWRkbGV3YXJlKG1pZGRsZXdhcmVBUEkpO1xuICAgICAgfSk7XG4gICAgICBfZGlzcGF0Y2ggPSBjb21wb3NlLmFwcGx5KHZvaWQgMCwgY2hhaW4pKHN0b3JlLmRpc3BhdGNoKTtcbiAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKHt9LCBzdG9yZSwge1xuICAgICAgICBkaXNwYXRjaDogX2Rpc3BhdGNoXG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xufVxuXG4vKlxuICogVGhpcyBpcyBhIGR1bW15IGZ1bmN0aW9uIHRvIGNoZWNrIGlmIHRoZSBmdW5jdGlvbiBuYW1lIGhhcyBiZWVuIGFsdGVyZWQgYnkgbWluaWZpY2F0aW9uLlxuICogSWYgdGhlIGZ1bmN0aW9uIGhhcyBiZWVuIG1pbmlmaWVkIGFuZCBOT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nLCB3YXJuIHRoZSB1c2VyLlxuICovXG5cbmZ1bmN0aW9uIGlzQ3J1c2hlZCgpIHt9XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBpc0NydXNoZWQubmFtZSA9PT0gJ3N0cmluZycgJiYgaXNDcnVzaGVkLm5hbWUgIT09ICdpc0NydXNoZWQnKSB7XG4gIHdhcm5pbmcoJ1lvdSBhcmUgY3VycmVudGx5IHVzaW5nIG1pbmlmaWVkIGNvZGUgb3V0c2lkZSBvZiBOT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIuICcgKyAnVGhpcyBtZWFucyB0aGF0IHlvdSBhcmUgcnVubmluZyBhIHNsb3dlciBkZXZlbG9wbWVudCBidWlsZCBvZiBSZWR1eC4gJyArICdZb3UgY2FuIHVzZSBsb29zZS1lbnZpZnkgKGh0dHBzOi8vZ2l0aHViLmNvbS96ZXJ0b3NoL2xvb3NlLWVudmlmeSkgZm9yIGJyb3dzZXJpZnkgJyArICdvciBzZXR0aW5nIG1vZGUgdG8gcHJvZHVjdGlvbiBpbiB3ZWJwYWNrIChodHRwczovL3dlYnBhY2suanMub3JnL2NvbmNlcHRzL21vZGUvKSAnICsgJ3RvIGVuc3VyZSB5b3UgaGF2ZSB0aGUgY29ycmVjdCBjb2RlIGZvciB5b3VyIHByb2R1Y3Rpb24gYnVpbGQuJyk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMsIGJpbmRBY3Rpb25DcmVhdG9ycywgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBBY3Rpb25UeXBlcyBhcyBfX0RPX05PVF9VU0VfX0FjdGlvblR5cGVzIH07XG4iLCIvKipcclxuICogQHBhcmFtIHthbnl9IG9iaiBUaGUgb2JqZWN0IHRvIGluc3BlY3QuXHJcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBhcmd1bWVudCBhcHBlYXJzIHRvIGJlIGEgcGxhaW4gb2JqZWN0LlxyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qob2JqKSB7XG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyB8fCBvYmogPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgdmFyIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaik7XG4gIGlmIChwcm90byA9PT0gbnVsbCkgcmV0dXJuIHRydWU7XG4gIHZhciBiYXNlUHJvdG8gPSBwcm90bztcblxuICB3aGlsZSAoT2JqZWN0LmdldFByb3RvdHlwZU9mKGJhc2VQcm90bykgIT09IG51bGwpIHtcbiAgICBiYXNlUHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYmFzZVByb3RvKTtcbiAgfVxuXG4gIHJldHVybiBwcm90byA9PT0gYmFzZVByb3RvO1xufSIsImltcG9ydCBpc1BsYWluT2JqZWN0IGZyb20gJy4vaXNQbGFpbk9iamVjdCc7XG5pbXBvcnQgd2FybmluZyBmcm9tICcuL3dhcm5pbmcnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5UGxhaW5PYmplY3QodmFsdWUsIGRpc3BsYXlOYW1lLCBtZXRob2ROYW1lKSB7XG4gIGlmICghaXNQbGFpbk9iamVjdCh2YWx1ZSkpIHtcbiAgICB3YXJuaW5nKG1ldGhvZE5hbWUgKyBcIigpIGluIFwiICsgZGlzcGxheU5hbWUgKyBcIiBtdXN0IHJldHVybiBhIHBsYWluIG9iamVjdC4gSW5zdGVhZCByZWNlaXZlZCBcIiArIHZhbHVlICsgXCIuXCIpO1xuICB9XG59IiwiaW1wb3J0IHZlcmlmeVBsYWluT2JqZWN0IGZyb20gJy4uL3V0aWxzL3ZlcmlmeVBsYWluT2JqZWN0JztcbmV4cG9ydCBmdW5jdGlvbiB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50KGdldENvbnN0YW50KSB7XG4gIHJldHVybiBmdW5jdGlvbiBpbml0Q29uc3RhbnRTZWxlY3RvcihkaXNwYXRjaCwgb3B0aW9ucykge1xuICAgIHZhciBjb25zdGFudCA9IGdldENvbnN0YW50KGRpc3BhdGNoLCBvcHRpb25zKTtcblxuICAgIGZ1bmN0aW9uIGNvbnN0YW50U2VsZWN0b3IoKSB7XG4gICAgICByZXR1cm4gY29uc3RhbnQ7XG4gICAgfVxuXG4gICAgY29uc3RhbnRTZWxlY3Rvci5kZXBlbmRzT25Pd25Qcm9wcyA9IGZhbHNlO1xuICAgIHJldHVybiBjb25zdGFudFNlbGVjdG9yO1xuICB9O1xufSAvLyBkZXBlbmRzT25Pd25Qcm9wcyBpcyB1c2VkIGJ5IGNyZWF0ZU1hcFRvUHJvcHNQcm94eSB0byBkZXRlcm1pbmUgd2hldGhlciB0byBwYXNzIHByb3BzIGFzIGFyZ3Ncbi8vIHRvIHRoZSBtYXBUb1Byb3BzIGZ1bmN0aW9uIGJlaW5nIHdyYXBwZWQuIEl0IGlzIGFsc28gdXNlZCBieSBtYWtlUHVyZVByb3BzU2VsZWN0b3IgdG8gZGV0ZXJtaW5lXG4vLyB3aGV0aGVyIG1hcFRvUHJvcHMgbmVlZHMgdG8gYmUgaW52b2tlZCB3aGVuIHByb3BzIGhhdmUgY2hhbmdlZC5cbi8vIFxuLy8gQSBsZW5ndGggb2Ygb25lIHNpZ25hbHMgdGhhdCBtYXBUb1Byb3BzIGRvZXMgbm90IGRlcGVuZCBvbiBwcm9wcyBmcm9tIHRoZSBwYXJlbnQgY29tcG9uZW50LlxuLy8gQSBsZW5ndGggb2YgemVybyBpcyBhc3N1bWVkIHRvIG1lYW4gbWFwVG9Qcm9wcyBpcyBnZXR0aW5nIGFyZ3MgdmlhIGFyZ3VtZW50cyBvciAuLi5hcmdzIGFuZFxuLy8gdGhlcmVmb3JlIG5vdCByZXBvcnRpbmcgaXRzIGxlbmd0aCBhY2N1cmF0ZWx5Li5cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlcGVuZHNPbk93blByb3BzKG1hcFRvUHJvcHMpIHtcbiAgcmV0dXJuIG1hcFRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMgIT09IG51bGwgJiYgbWFwVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcyAhPT0gdW5kZWZpbmVkID8gQm9vbGVhbihtYXBUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzKSA6IG1hcFRvUHJvcHMubGVuZ3RoICE9PSAxO1xufSAvLyBVc2VkIGJ5IHdoZW5NYXBTdGF0ZVRvUHJvcHNJc0Z1bmN0aW9uIGFuZCB3aGVuTWFwRGlzcGF0Y2hUb1Byb3BzSXNGdW5jdGlvbixcbi8vIHRoaXMgZnVuY3Rpb24gd3JhcHMgbWFwVG9Qcm9wcyBpbiBhIHByb3h5IGZ1bmN0aW9uIHdoaWNoIGRvZXMgc2V2ZXJhbCB0aGluZ3M6XG4vLyBcbi8vICAqIERldGVjdHMgd2hldGhlciB0aGUgbWFwVG9Qcm9wcyBmdW5jdGlvbiBiZWluZyBjYWxsZWQgZGVwZW5kcyBvbiBwcm9wcywgd2hpY2hcbi8vICAgIGlzIHVzZWQgYnkgc2VsZWN0b3JGYWN0b3J5IHRvIGRlY2lkZSBpZiBpdCBzaG91bGQgcmVpbnZva2Ugb24gcHJvcHMgY2hhbmdlcy5cbi8vICAgIFxuLy8gICogT24gZmlyc3QgY2FsbCwgaGFuZGxlcyBtYXBUb1Byb3BzIGlmIHJldHVybnMgYW5vdGhlciBmdW5jdGlvbiwgYW5kIHRyZWF0cyB0aGF0XG4vLyAgICBuZXcgZnVuY3Rpb24gYXMgdGhlIHRydWUgbWFwVG9Qcm9wcyBmb3Igc3Vic2VxdWVudCBjYWxscy5cbi8vICAgIFxuLy8gICogT24gZmlyc3QgY2FsbCwgdmVyaWZpZXMgdGhlIGZpcnN0IHJlc3VsdCBpcyBhIHBsYWluIG9iamVjdCwgaW4gb3JkZXIgdG8gd2FyblxuLy8gICAgdGhlIGRldmVsb3BlciB0aGF0IHRoZWlyIG1hcFRvUHJvcHMgZnVuY3Rpb24gaXMgbm90IHJldHVybmluZyBhIHZhbGlkIHJlc3VsdC5cbi8vICAgIFxuXG5leHBvcnQgZnVuY3Rpb24gd3JhcE1hcFRvUHJvcHNGdW5jKG1hcFRvUHJvcHMsIG1ldGhvZE5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGluaXRQcm94eVNlbGVjdG9yKGRpc3BhdGNoLCBfcmVmKSB7XG4gICAgdmFyIGRpc3BsYXlOYW1lID0gX3JlZi5kaXNwbGF5TmFtZTtcblxuICAgIHZhciBwcm94eSA9IGZ1bmN0aW9uIG1hcFRvUHJvcHNQcm94eShzdGF0ZU9yRGlzcGF0Y2gsIG93blByb3BzKSB7XG4gICAgICByZXR1cm4gcHJveHkuZGVwZW5kc09uT3duUHJvcHMgPyBwcm94eS5tYXBUb1Byb3BzKHN0YXRlT3JEaXNwYXRjaCwgb3duUHJvcHMpIDogcHJveHkubWFwVG9Qcm9wcyhzdGF0ZU9yRGlzcGF0Y2gpO1xuICAgIH07IC8vIGFsbG93IGRldGVjdEZhY3RvcnlBbmRWZXJpZnkgdG8gZ2V0IG93blByb3BzXG5cblxuICAgIHByb3h5LmRlcGVuZHNPbk93blByb3BzID0gdHJ1ZTtcblxuICAgIHByb3h5Lm1hcFRvUHJvcHMgPSBmdW5jdGlvbiBkZXRlY3RGYWN0b3J5QW5kVmVyaWZ5KHN0YXRlT3JEaXNwYXRjaCwgb3duUHJvcHMpIHtcbiAgICAgIHByb3h5Lm1hcFRvUHJvcHMgPSBtYXBUb1Byb3BzO1xuICAgICAgcHJveHkuZGVwZW5kc09uT3duUHJvcHMgPSBnZXREZXBlbmRzT25Pd25Qcm9wcyhtYXBUb1Byb3BzKTtcbiAgICAgIHZhciBwcm9wcyA9IHByb3h5KHN0YXRlT3JEaXNwYXRjaCwgb3duUHJvcHMpO1xuXG4gICAgICBpZiAodHlwZW9mIHByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByb3h5Lm1hcFRvUHJvcHMgPSBwcm9wcztcbiAgICAgICAgcHJveHkuZGVwZW5kc09uT3duUHJvcHMgPSBnZXREZXBlbmRzT25Pd25Qcm9wcyhwcm9wcyk7XG4gICAgICAgIHByb3BzID0gcHJveHkoc3RhdGVPckRpc3BhdGNoLCBvd25Qcm9wcyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB2ZXJpZnlQbGFpbk9iamVjdChwcm9wcywgZGlzcGxheU5hbWUsIG1ldGhvZE5hbWUpO1xuICAgICAgcmV0dXJuIHByb3BzO1xuICAgIH07XG5cbiAgICByZXR1cm4gcHJveHk7XG4gIH07XG59IiwiaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgd3JhcE1hcFRvUHJvcHNDb25zdGFudCwgd3JhcE1hcFRvUHJvcHNGdW5jIH0gZnJvbSAnLi93cmFwTWFwVG9Qcm9wcyc7XG5leHBvcnQgZnVuY3Rpb24gd2hlbk1hcERpc3BhdGNoVG9Qcm9wc0lzRnVuY3Rpb24obWFwRGlzcGF0Y2hUb1Byb3BzKSB7XG4gIHJldHVybiB0eXBlb2YgbWFwRGlzcGF0Y2hUb1Byb3BzID09PSAnZnVuY3Rpb24nID8gd3JhcE1hcFRvUHJvcHNGdW5jKG1hcERpc3BhdGNoVG9Qcm9wcywgJ21hcERpc3BhdGNoVG9Qcm9wcycpIDogdW5kZWZpbmVkO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHdoZW5NYXBEaXNwYXRjaFRvUHJvcHNJc01pc3NpbmcobWFwRGlzcGF0Y2hUb1Byb3BzKSB7XG4gIHJldHVybiAhbWFwRGlzcGF0Y2hUb1Byb3BzID8gd3JhcE1hcFRvUHJvcHNDb25zdGFudChmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGlzcGF0Y2g6IGRpc3BhdGNoXG4gICAgfTtcbiAgfSkgOiB1bmRlZmluZWQ7XG59XG5leHBvcnQgZnVuY3Rpb24gd2hlbk1hcERpc3BhdGNoVG9Qcm9wc0lzT2JqZWN0KG1hcERpc3BhdGNoVG9Qcm9wcykge1xuICByZXR1cm4gbWFwRGlzcGF0Y2hUb1Byb3BzICYmIHR5cGVvZiBtYXBEaXNwYXRjaFRvUHJvcHMgPT09ICdvYmplY3QnID8gd3JhcE1hcFRvUHJvcHNDb25zdGFudChmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcbiAgICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKG1hcERpc3BhdGNoVG9Qcm9wcywgZGlzcGF0Y2gpO1xuICB9KSA6IHVuZGVmaW5lZDtcbn1cbmV4cG9ydCBkZWZhdWx0IFt3aGVuTWFwRGlzcGF0Y2hUb1Byb3BzSXNGdW5jdGlvbiwgd2hlbk1hcERpc3BhdGNoVG9Qcm9wc0lzTWlzc2luZywgd2hlbk1hcERpc3BhdGNoVG9Qcm9wc0lzT2JqZWN0XTsiLCJpbXBvcnQgeyB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50LCB3cmFwTWFwVG9Qcm9wc0Z1bmMgfSBmcm9tICcuL3dyYXBNYXBUb1Byb3BzJztcbmV4cG9ydCBmdW5jdGlvbiB3aGVuTWFwU3RhdGVUb1Byb3BzSXNGdW5jdGlvbihtYXBTdGF0ZVRvUHJvcHMpIHtcbiAgcmV0dXJuIHR5cGVvZiBtYXBTdGF0ZVRvUHJvcHMgPT09ICdmdW5jdGlvbicgPyB3cmFwTWFwVG9Qcm9wc0Z1bmMobWFwU3RhdGVUb1Byb3BzLCAnbWFwU3RhdGVUb1Byb3BzJykgOiB1bmRlZmluZWQ7XG59XG5leHBvcnQgZnVuY3Rpb24gd2hlbk1hcFN0YXRlVG9Qcm9wc0lzTWlzc2luZyhtYXBTdGF0ZVRvUHJvcHMpIHtcbiAgcmV0dXJuICFtYXBTdGF0ZVRvUHJvcHMgPyB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge307XG4gIH0pIDogdW5kZWZpbmVkO1xufVxuZXhwb3J0IGRlZmF1bHQgW3doZW5NYXBTdGF0ZVRvUHJvcHNJc0Z1bmN0aW9uLCB3aGVuTWFwU3RhdGVUb1Byb3BzSXNNaXNzaW5nXTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCB2ZXJpZnlQbGFpbk9iamVjdCBmcm9tICcuLi91dGlscy92ZXJpZnlQbGFpbk9iamVjdCc7XG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdE1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpIHtcbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBvd25Qcm9wcywgc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcyk7XG59XG5leHBvcnQgZnVuY3Rpb24gd3JhcE1lcmdlUHJvcHNGdW5jKG1lcmdlUHJvcHMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGluaXRNZXJnZVByb3BzUHJveHkoZGlzcGF0Y2gsIF9yZWYpIHtcbiAgICB2YXIgZGlzcGxheU5hbWUgPSBfcmVmLmRpc3BsYXlOYW1lLFxuICAgICAgICBwdXJlID0gX3JlZi5wdXJlLFxuICAgICAgICBhcmVNZXJnZWRQcm9wc0VxdWFsID0gX3JlZi5hcmVNZXJnZWRQcm9wc0VxdWFsO1xuICAgIHZhciBoYXNSdW5PbmNlID0gZmFsc2U7XG4gICAgdmFyIG1lcmdlZFByb3BzO1xuICAgIHJldHVybiBmdW5jdGlvbiBtZXJnZVByb3BzUHJveHkoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpIHtcbiAgICAgIHZhciBuZXh0TWVyZ2VkUHJvcHMgPSBtZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKTtcblxuICAgICAgaWYgKGhhc1J1bk9uY2UpIHtcbiAgICAgICAgaWYgKCFwdXJlIHx8ICFhcmVNZXJnZWRQcm9wc0VxdWFsKG5leHRNZXJnZWRQcm9wcywgbWVyZ2VkUHJvcHMpKSBtZXJnZWRQcm9wcyA9IG5leHRNZXJnZWRQcm9wcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhhc1J1bk9uY2UgPSB0cnVlO1xuICAgICAgICBtZXJnZWRQcm9wcyA9IG5leHRNZXJnZWRQcm9wcztcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHZlcmlmeVBsYWluT2JqZWN0KG1lcmdlZFByb3BzLCBkaXNwbGF5TmFtZSwgJ21lcmdlUHJvcHMnKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICAgIH07XG4gIH07XG59XG5leHBvcnQgZnVuY3Rpb24gd2hlbk1lcmdlUHJvcHNJc0Z1bmN0aW9uKG1lcmdlUHJvcHMpIHtcbiAgcmV0dXJuIHR5cGVvZiBtZXJnZVByb3BzID09PSAnZnVuY3Rpb24nID8gd3JhcE1lcmdlUHJvcHNGdW5jKG1lcmdlUHJvcHMpIDogdW5kZWZpbmVkO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHdoZW5NZXJnZVByb3BzSXNPbWl0dGVkKG1lcmdlUHJvcHMpIHtcbiAgcmV0dXJuICFtZXJnZVByb3BzID8gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBkZWZhdWx0TWVyZ2VQcm9wcztcbiAgfSA6IHVuZGVmaW5lZDtcbn1cbmV4cG9ydCBkZWZhdWx0IFt3aGVuTWVyZ2VQcm9wc0lzRnVuY3Rpb24sIHdoZW5NZXJnZVByb3BzSXNPbWl0dGVkXTsiLCJpbXBvcnQgd2FybmluZyBmcm9tICcuLi91dGlscy93YXJuaW5nJztcblxuZnVuY3Rpb24gdmVyaWZ5KHNlbGVjdG9yLCBtZXRob2ROYW1lLCBkaXNwbGF5TmFtZSkge1xuICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVW5leHBlY3RlZCB2YWx1ZSBmb3IgXCIgKyBtZXRob2ROYW1lICsgXCIgaW4gXCIgKyBkaXNwbGF5TmFtZSArIFwiLlwiKTtcbiAgfSBlbHNlIGlmIChtZXRob2ROYW1lID09PSAnbWFwU3RhdGVUb1Byb3BzJyB8fCBtZXRob2ROYW1lID09PSAnbWFwRGlzcGF0Y2hUb1Byb3BzJykge1xuICAgIGlmICghc2VsZWN0b3IuaGFzT3duUHJvcGVydHkoJ2RlcGVuZHNPbk93blByb3BzJykpIHtcbiAgICAgIHdhcm5pbmcoXCJUaGUgc2VsZWN0b3IgZm9yIFwiICsgbWV0aG9kTmFtZSArIFwiIG9mIFwiICsgZGlzcGxheU5hbWUgKyBcIiBkaWQgbm90IHNwZWNpZnkgYSB2YWx1ZSBmb3IgZGVwZW5kc09uT3duUHJvcHMuXCIpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlTdWJzZWxlY3RvcnMobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHZlcmlmeShtYXBTdGF0ZVRvUHJvcHMsICdtYXBTdGF0ZVRvUHJvcHMnLCBkaXNwbGF5TmFtZSk7XG4gIHZlcmlmeShtYXBEaXNwYXRjaFRvUHJvcHMsICdtYXBEaXNwYXRjaFRvUHJvcHMnLCBkaXNwbGF5TmFtZSk7XG4gIHZlcmlmeShtZXJnZVByb3BzLCAnbWVyZ2VQcm9wcycsIGRpc3BsYXlOYW1lKTtcbn0iLCJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmltcG9ydCB2ZXJpZnlTdWJzZWxlY3RvcnMgZnJvbSAnLi92ZXJpZnlTdWJzZWxlY3RvcnMnO1xuZXhwb3J0IGZ1bmN0aW9uIGltcHVyZUZpbmFsUHJvcHNTZWxlY3RvckZhY3RvcnkobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMsIGRpc3BhdGNoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBpbXB1cmVGaW5hbFByb3BzU2VsZWN0b3Ioc3RhdGUsIG93blByb3BzKSB7XG4gICAgcmV0dXJuIG1lcmdlUHJvcHMobWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcyksIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3duUHJvcHMpLCBvd25Qcm9wcyk7XG4gIH07XG59XG5leHBvcnQgZnVuY3Rpb24gcHVyZUZpbmFsUHJvcHNTZWxlY3RvckZhY3RvcnkobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMsIGRpc3BhdGNoLCBfcmVmKSB7XG4gIHZhciBhcmVTdGF0ZXNFcXVhbCA9IF9yZWYuYXJlU3RhdGVzRXF1YWwsXG4gICAgICBhcmVPd25Qcm9wc0VxdWFsID0gX3JlZi5hcmVPd25Qcm9wc0VxdWFsLFxuICAgICAgYXJlU3RhdGVQcm9wc0VxdWFsID0gX3JlZi5hcmVTdGF0ZVByb3BzRXF1YWw7XG4gIHZhciBoYXNSdW5BdExlYXN0T25jZSA9IGZhbHNlO1xuICB2YXIgc3RhdGU7XG4gIHZhciBvd25Qcm9wcztcbiAgdmFyIHN0YXRlUHJvcHM7XG4gIHZhciBkaXNwYXRjaFByb3BzO1xuICB2YXIgbWVyZ2VkUHJvcHM7XG5cbiAgZnVuY3Rpb24gaGFuZGxlRmlyc3RDYWxsKGZpcnN0U3RhdGUsIGZpcnN0T3duUHJvcHMpIHtcbiAgICBzdGF0ZSA9IGZpcnN0U3RhdGU7XG4gICAgb3duUHJvcHMgPSBmaXJzdE93blByb3BzO1xuICAgIHN0YXRlUHJvcHMgPSBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKTtcbiAgICBkaXNwYXRjaFByb3BzID0gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoLCBvd25Qcm9wcyk7XG4gICAgbWVyZ2VkUHJvcHMgPSBtZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKTtcbiAgICBoYXNSdW5BdExlYXN0T25jZSA9IHRydWU7XG4gICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTmV3UHJvcHNBbmROZXdTdGF0ZSgpIHtcbiAgICBzdGF0ZVByb3BzID0gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcyk7XG4gICAgaWYgKG1hcERpc3BhdGNoVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcykgZGlzcGF0Y2hQcm9wcyA9IG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3duUHJvcHMpO1xuICAgIG1lcmdlZFByb3BzID0gbWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcyk7XG4gICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTmV3UHJvcHMoKSB7XG4gICAgaWYgKG1hcFN0YXRlVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcykgc3RhdGVQcm9wcyA9IG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpO1xuICAgIGlmIChtYXBEaXNwYXRjaFRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMpIGRpc3BhdGNoUHJvcHMgPSBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsIG93blByb3BzKTtcbiAgICBtZXJnZWRQcm9wcyA9IG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpO1xuICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU5ld1N0YXRlKCkge1xuICAgIHZhciBuZXh0U3RhdGVQcm9wcyA9IG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpO1xuICAgIHZhciBzdGF0ZVByb3BzQ2hhbmdlZCA9ICFhcmVTdGF0ZVByb3BzRXF1YWwobmV4dFN0YXRlUHJvcHMsIHN0YXRlUHJvcHMpO1xuICAgIHN0YXRlUHJvcHMgPSBuZXh0U3RhdGVQcm9wcztcbiAgICBpZiAoc3RhdGVQcm9wc0NoYW5nZWQpIG1lcmdlZFByb3BzID0gbWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcyk7XG4gICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlU3Vic2VxdWVudENhbGxzKG5leHRTdGF0ZSwgbmV4dE93blByb3BzKSB7XG4gICAgdmFyIHByb3BzQ2hhbmdlZCA9ICFhcmVPd25Qcm9wc0VxdWFsKG5leHRPd25Qcm9wcywgb3duUHJvcHMpO1xuICAgIHZhciBzdGF0ZUNoYW5nZWQgPSAhYXJlU3RhdGVzRXF1YWwobmV4dFN0YXRlLCBzdGF0ZSk7XG4gICAgc3RhdGUgPSBuZXh0U3RhdGU7XG4gICAgb3duUHJvcHMgPSBuZXh0T3duUHJvcHM7XG4gICAgaWYgKHByb3BzQ2hhbmdlZCAmJiBzdGF0ZUNoYW5nZWQpIHJldHVybiBoYW5kbGVOZXdQcm9wc0FuZE5ld1N0YXRlKCk7XG4gICAgaWYgKHByb3BzQ2hhbmdlZCkgcmV0dXJuIGhhbmRsZU5ld1Byb3BzKCk7XG4gICAgaWYgKHN0YXRlQ2hhbmdlZCkgcmV0dXJuIGhhbmRsZU5ld1N0YXRlKCk7XG4gICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHB1cmVGaW5hbFByb3BzU2VsZWN0b3IobmV4dFN0YXRlLCBuZXh0T3duUHJvcHMpIHtcbiAgICByZXR1cm4gaGFzUnVuQXRMZWFzdE9uY2UgPyBoYW5kbGVTdWJzZXF1ZW50Q2FsbHMobmV4dFN0YXRlLCBuZXh0T3duUHJvcHMpIDogaGFuZGxlRmlyc3RDYWxsKG5leHRTdGF0ZSwgbmV4dE93blByb3BzKTtcbiAgfTtcbn0gLy8gVE9ETzogQWRkIG1vcmUgY29tbWVudHNcbi8vIElmIHB1cmUgaXMgdHJ1ZSwgdGhlIHNlbGVjdG9yIHJldHVybmVkIGJ5IHNlbGVjdG9yRmFjdG9yeSB3aWxsIG1lbW9pemUgaXRzIHJlc3VsdHMsXG4vLyBhbGxvd2luZyBjb25uZWN0QWR2YW5jZWQncyBzaG91bGRDb21wb25lbnRVcGRhdGUgdG8gcmV0dXJuIGZhbHNlIGlmIGZpbmFsXG4vLyBwcm9wcyBoYXZlIG5vdCBjaGFuZ2VkLiBJZiBmYWxzZSwgdGhlIHNlbGVjdG9yIHdpbGwgYWx3YXlzIHJldHVybiBhIG5ld1xuLy8gb2JqZWN0IGFuZCBzaG91bGRDb21wb25lbnRVcGRhdGUgd2lsbCBhbHdheXMgcmV0dXJuIHRydWUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbmFsUHJvcHNTZWxlY3RvckZhY3RvcnkoZGlzcGF0Y2gsIF9yZWYyKSB7XG4gIHZhciBpbml0TWFwU3RhdGVUb1Byb3BzID0gX3JlZjIuaW5pdE1hcFN0YXRlVG9Qcm9wcyxcbiAgICAgIGluaXRNYXBEaXNwYXRjaFRvUHJvcHMgPSBfcmVmMi5pbml0TWFwRGlzcGF0Y2hUb1Byb3BzLFxuICAgICAgaW5pdE1lcmdlUHJvcHMgPSBfcmVmMi5pbml0TWVyZ2VQcm9wcyxcbiAgICAgIG9wdGlvbnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmMiwgW1wiaW5pdE1hcFN0YXRlVG9Qcm9wc1wiLCBcImluaXRNYXBEaXNwYXRjaFRvUHJvcHNcIiwgXCJpbml0TWVyZ2VQcm9wc1wiXSk7XG5cbiAgdmFyIG1hcFN0YXRlVG9Qcm9wcyA9IGluaXRNYXBTdGF0ZVRvUHJvcHMoZGlzcGF0Y2gsIG9wdGlvbnMpO1xuICB2YXIgbWFwRGlzcGF0Y2hUb1Byb3BzID0gaW5pdE1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3B0aW9ucyk7XG4gIHZhciBtZXJnZVByb3BzID0gaW5pdE1lcmdlUHJvcHMoZGlzcGF0Y2gsIG9wdGlvbnMpO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdmVyaWZ5U3Vic2VsZWN0b3JzKG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzLCBvcHRpb25zLmRpc3BsYXlOYW1lKTtcbiAgfVxuXG4gIHZhciBzZWxlY3RvckZhY3RvcnkgPSBvcHRpb25zLnB1cmUgPyBwdXJlRmluYWxQcm9wc1NlbGVjdG9yRmFjdG9yeSA6IGltcHVyZUZpbmFsUHJvcHNTZWxlY3RvckZhY3Rvcnk7XG4gIHJldHVybiBzZWxlY3RvckZhY3RvcnkobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMsIGRpc3BhdGNoLCBvcHRpb25zKTtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuaW1wb3J0IGNvbm5lY3RBZHZhbmNlZCBmcm9tICcuLi9jb21wb25lbnRzL2Nvbm5lY3RBZHZhbmNlZCc7XG5pbXBvcnQgc2hhbGxvd0VxdWFsIGZyb20gJy4uL3V0aWxzL3NoYWxsb3dFcXVhbCc7XG5pbXBvcnQgZGVmYXVsdE1hcERpc3BhdGNoVG9Qcm9wc0ZhY3RvcmllcyBmcm9tICcuL21hcERpc3BhdGNoVG9Qcm9wcyc7XG5pbXBvcnQgZGVmYXVsdE1hcFN0YXRlVG9Qcm9wc0ZhY3RvcmllcyBmcm9tICcuL21hcFN0YXRlVG9Qcm9wcyc7XG5pbXBvcnQgZGVmYXVsdE1lcmdlUHJvcHNGYWN0b3JpZXMgZnJvbSAnLi9tZXJnZVByb3BzJztcbmltcG9ydCBkZWZhdWx0U2VsZWN0b3JGYWN0b3J5IGZyb20gJy4vc2VsZWN0b3JGYWN0b3J5Jztcbi8qXG4gIGNvbm5lY3QgaXMgYSBmYWNhZGUgb3ZlciBjb25uZWN0QWR2YW5jZWQuIEl0IHR1cm5zIGl0cyBhcmdzIGludG8gYSBjb21wYXRpYmxlXG4gIHNlbGVjdG9yRmFjdG9yeSwgd2hpY2ggaGFzIHRoZSBzaWduYXR1cmU6XG5cbiAgICAoZGlzcGF0Y2gsIG9wdGlvbnMpID0+IChuZXh0U3RhdGUsIG5leHRPd25Qcm9wcykgPT4gbmV4dEZpbmFsUHJvcHNcbiAgXG4gIGNvbm5lY3QgcGFzc2VzIGl0cyBhcmdzIHRvIGNvbm5lY3RBZHZhbmNlZCBhcyBvcHRpb25zLCB3aGljaCB3aWxsIGluIHR1cm4gcGFzcyB0aGVtIHRvXG4gIHNlbGVjdG9yRmFjdG9yeSBlYWNoIHRpbWUgYSBDb25uZWN0IGNvbXBvbmVudCBpbnN0YW5jZSBpcyBpbnN0YW50aWF0ZWQgb3IgaG90IHJlbG9hZGVkLlxuXG4gIHNlbGVjdG9yRmFjdG9yeSByZXR1cm5zIGEgZmluYWwgcHJvcHMgc2VsZWN0b3IgZnJvbSBpdHMgbWFwU3RhdGVUb1Byb3BzLFxuICBtYXBTdGF0ZVRvUHJvcHNGYWN0b3JpZXMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzRmFjdG9yaWVzLCBtZXJnZVByb3BzLFxuICBtZXJnZVByb3BzRmFjdG9yaWVzLCBhbmQgcHVyZSBhcmdzLlxuXG4gIFRoZSByZXN1bHRpbmcgZmluYWwgcHJvcHMgc2VsZWN0b3IgaXMgY2FsbGVkIGJ5IHRoZSBDb25uZWN0IGNvbXBvbmVudCBpbnN0YW5jZSB3aGVuZXZlclxuICBpdCByZWNlaXZlcyBuZXcgcHJvcHMgb3Igc3RvcmUgc3RhdGUuXG4gKi9cblxuZnVuY3Rpb24gbWF0Y2goYXJnLCBmYWN0b3JpZXMsIG5hbWUpIHtcbiAgZm9yICh2YXIgaSA9IGZhY3Rvcmllcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHZhciByZXN1bHQgPSBmYWN0b3JpZXNbaV0oYXJnKTtcbiAgICBpZiAocmVzdWx0KSByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCwgb3B0aW9ucykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgb2YgdHlwZSBcIiArIHR5cGVvZiBhcmcgKyBcIiBmb3IgXCIgKyBuYW1lICsgXCIgYXJndW1lbnQgd2hlbiBjb25uZWN0aW5nIGNvbXBvbmVudCBcIiArIG9wdGlvbnMud3JhcHBlZENvbXBvbmVudE5hbWUgKyBcIi5cIik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHN0cmljdEVxdWFsKGEsIGIpIHtcbiAgcmV0dXJuIGEgPT09IGI7XG59IC8vIGNyZWF0ZUNvbm5lY3Qgd2l0aCBkZWZhdWx0IGFyZ3MgYnVpbGRzIHRoZSAnb2ZmaWNpYWwnIGNvbm5lY3QgYmVoYXZpb3IuIENhbGxpbmcgaXQgd2l0aFxuLy8gZGlmZmVyZW50IG9wdGlvbnMgb3BlbnMgdXAgc29tZSB0ZXN0aW5nIGFuZCBleHRlbnNpYmlsaXR5IHNjZW5hcmlvc1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb25uZWN0KF90ZW1wKSB7XG4gIHZhciBfcmVmID0gX3RlbXAgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAsXG4gICAgICBfcmVmJGNvbm5lY3RIT0MgPSBfcmVmLmNvbm5lY3RIT0MsXG4gICAgICBjb25uZWN0SE9DID0gX3JlZiRjb25uZWN0SE9DID09PSB2b2lkIDAgPyBjb25uZWN0QWR2YW5jZWQgOiBfcmVmJGNvbm5lY3RIT0MsXG4gICAgICBfcmVmJG1hcFN0YXRlVG9Qcm9wc0YgPSBfcmVmLm1hcFN0YXRlVG9Qcm9wc0ZhY3RvcmllcyxcbiAgICAgIG1hcFN0YXRlVG9Qcm9wc0ZhY3RvcmllcyA9IF9yZWYkbWFwU3RhdGVUb1Byb3BzRiA9PT0gdm9pZCAwID8gZGVmYXVsdE1hcFN0YXRlVG9Qcm9wc0ZhY3RvcmllcyA6IF9yZWYkbWFwU3RhdGVUb1Byb3BzRixcbiAgICAgIF9yZWYkbWFwRGlzcGF0Y2hUb1BybyA9IF9yZWYubWFwRGlzcGF0Y2hUb1Byb3BzRmFjdG9yaWVzLFxuICAgICAgbWFwRGlzcGF0Y2hUb1Byb3BzRmFjdG9yaWVzID0gX3JlZiRtYXBEaXNwYXRjaFRvUHJvID09PSB2b2lkIDAgPyBkZWZhdWx0TWFwRGlzcGF0Y2hUb1Byb3BzRmFjdG9yaWVzIDogX3JlZiRtYXBEaXNwYXRjaFRvUHJvLFxuICAgICAgX3JlZiRtZXJnZVByb3BzRmFjdG9yID0gX3JlZi5tZXJnZVByb3BzRmFjdG9yaWVzLFxuICAgICAgbWVyZ2VQcm9wc0ZhY3RvcmllcyA9IF9yZWYkbWVyZ2VQcm9wc0ZhY3RvciA9PT0gdm9pZCAwID8gZGVmYXVsdE1lcmdlUHJvcHNGYWN0b3JpZXMgOiBfcmVmJG1lcmdlUHJvcHNGYWN0b3IsXG4gICAgICBfcmVmJHNlbGVjdG9yRmFjdG9yeSA9IF9yZWYuc2VsZWN0b3JGYWN0b3J5LFxuICAgICAgc2VsZWN0b3JGYWN0b3J5ID0gX3JlZiRzZWxlY3RvckZhY3RvcnkgPT09IHZvaWQgMCA/IGRlZmF1bHRTZWxlY3RvckZhY3RvcnkgOiBfcmVmJHNlbGVjdG9yRmFjdG9yeTtcblxuICByZXR1cm4gZnVuY3Rpb24gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWVyZ2VQcm9wcywgX3JlZjIpIHtcbiAgICBpZiAoX3JlZjIgPT09IHZvaWQgMCkge1xuICAgICAgX3JlZjIgPSB7fTtcbiAgICB9XG5cbiAgICB2YXIgX3JlZjMgPSBfcmVmMixcbiAgICAgICAgX3JlZjMkcHVyZSA9IF9yZWYzLnB1cmUsXG4gICAgICAgIHB1cmUgPSBfcmVmMyRwdXJlID09PSB2b2lkIDAgPyB0cnVlIDogX3JlZjMkcHVyZSxcbiAgICAgICAgX3JlZjMkYXJlU3RhdGVzRXF1YWwgPSBfcmVmMy5hcmVTdGF0ZXNFcXVhbCxcbiAgICAgICAgYXJlU3RhdGVzRXF1YWwgPSBfcmVmMyRhcmVTdGF0ZXNFcXVhbCA9PT0gdm9pZCAwID8gc3RyaWN0RXF1YWwgOiBfcmVmMyRhcmVTdGF0ZXNFcXVhbCxcbiAgICAgICAgX3JlZjMkYXJlT3duUHJvcHNFcXVhID0gX3JlZjMuYXJlT3duUHJvcHNFcXVhbCxcbiAgICAgICAgYXJlT3duUHJvcHNFcXVhbCA9IF9yZWYzJGFyZU93blByb3BzRXF1YSA9PT0gdm9pZCAwID8gc2hhbGxvd0VxdWFsIDogX3JlZjMkYXJlT3duUHJvcHNFcXVhLFxuICAgICAgICBfcmVmMyRhcmVTdGF0ZVByb3BzRXEgPSBfcmVmMy5hcmVTdGF0ZVByb3BzRXF1YWwsXG4gICAgICAgIGFyZVN0YXRlUHJvcHNFcXVhbCA9IF9yZWYzJGFyZVN0YXRlUHJvcHNFcSA9PT0gdm9pZCAwID8gc2hhbGxvd0VxdWFsIDogX3JlZjMkYXJlU3RhdGVQcm9wc0VxLFxuICAgICAgICBfcmVmMyRhcmVNZXJnZWRQcm9wc0UgPSBfcmVmMy5hcmVNZXJnZWRQcm9wc0VxdWFsLFxuICAgICAgICBhcmVNZXJnZWRQcm9wc0VxdWFsID0gX3JlZjMkYXJlTWVyZ2VkUHJvcHNFID09PSB2b2lkIDAgPyBzaGFsbG93RXF1YWwgOiBfcmVmMyRhcmVNZXJnZWRQcm9wc0UsXG4gICAgICAgIGV4dHJhT3B0aW9ucyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYzLCBbXCJwdXJlXCIsIFwiYXJlU3RhdGVzRXF1YWxcIiwgXCJhcmVPd25Qcm9wc0VxdWFsXCIsIFwiYXJlU3RhdGVQcm9wc0VxdWFsXCIsIFwiYXJlTWVyZ2VkUHJvcHNFcXVhbFwiXSk7XG5cbiAgICB2YXIgaW5pdE1hcFN0YXRlVG9Qcm9wcyA9IG1hdGNoKG1hcFN0YXRlVG9Qcm9wcywgbWFwU3RhdGVUb1Byb3BzRmFjdG9yaWVzLCAnbWFwU3RhdGVUb1Byb3BzJyk7XG4gICAgdmFyIGluaXRNYXBEaXNwYXRjaFRvUHJvcHMgPSBtYXRjaChtYXBEaXNwYXRjaFRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wc0ZhY3RvcmllcywgJ21hcERpc3BhdGNoVG9Qcm9wcycpO1xuICAgIHZhciBpbml0TWVyZ2VQcm9wcyA9IG1hdGNoKG1lcmdlUHJvcHMsIG1lcmdlUHJvcHNGYWN0b3JpZXMsICdtZXJnZVByb3BzJyk7XG4gICAgcmV0dXJuIGNvbm5lY3RIT0Moc2VsZWN0b3JGYWN0b3J5LCBfZXh0ZW5kcyh7XG4gICAgICAvLyB1c2VkIGluIGVycm9yIG1lc3NhZ2VzXG4gICAgICBtZXRob2ROYW1lOiAnY29ubmVjdCcsXG4gICAgICAvLyB1c2VkIHRvIGNvbXB1dGUgQ29ubmVjdCdzIGRpc3BsYXlOYW1lIGZyb20gdGhlIHdyYXBwZWQgY29tcG9uZW50J3MgZGlzcGxheU5hbWUuXG4gICAgICBnZXREaXNwbGF5TmFtZTogZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUobmFtZSkge1xuICAgICAgICByZXR1cm4gXCJDb25uZWN0KFwiICsgbmFtZSArIFwiKVwiO1xuICAgICAgfSxcbiAgICAgIC8vIGlmIG1hcFN0YXRlVG9Qcm9wcyBpcyBmYWxzeSwgdGhlIENvbm5lY3QgY29tcG9uZW50IGRvZXNuJ3Qgc3Vic2NyaWJlIHRvIHN0b3JlIHN0YXRlIGNoYW5nZXNcbiAgICAgIHNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlczogQm9vbGVhbihtYXBTdGF0ZVRvUHJvcHMpLFxuICAgICAgLy8gcGFzc2VkIHRocm91Z2ggdG8gc2VsZWN0b3JGYWN0b3J5XG4gICAgICBpbml0TWFwU3RhdGVUb1Byb3BzOiBpbml0TWFwU3RhdGVUb1Byb3BzLFxuICAgICAgaW5pdE1hcERpc3BhdGNoVG9Qcm9wczogaW5pdE1hcERpc3BhdGNoVG9Qcm9wcyxcbiAgICAgIGluaXRNZXJnZVByb3BzOiBpbml0TWVyZ2VQcm9wcyxcbiAgICAgIHB1cmU6IHB1cmUsXG4gICAgICBhcmVTdGF0ZXNFcXVhbDogYXJlU3RhdGVzRXF1YWwsXG4gICAgICBhcmVPd25Qcm9wc0VxdWFsOiBhcmVPd25Qcm9wc0VxdWFsLFxuICAgICAgYXJlU3RhdGVQcm9wc0VxdWFsOiBhcmVTdGF0ZVByb3BzRXF1YWwsXG4gICAgICBhcmVNZXJnZWRQcm9wc0VxdWFsOiBhcmVNZXJnZWRQcm9wc0VxdWFsXG4gICAgfSwgZXh0cmFPcHRpb25zKSk7XG4gIH07XG59XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb25uZWN0KCk7IiwiaW1wb3J0IFByb3ZpZGVyLCB7IGNyZWF0ZVByb3ZpZGVyIH0gZnJvbSAnLi9jb21wb25lbnRzL1Byb3ZpZGVyJztcbmltcG9ydCBjb25uZWN0QWR2YW5jZWQgZnJvbSAnLi9jb21wb25lbnRzL2Nvbm5lY3RBZHZhbmNlZCc7XG5pbXBvcnQgY29ubmVjdCBmcm9tICcuL2Nvbm5lY3QvY29ubmVjdCc7XG5leHBvcnQgeyBQcm92aWRlciwgY3JlYXRlUHJvdmlkZXIsIGNvbm5lY3RBZHZhbmNlZCwgY29ubmVjdCB9OyIsImZ1bmN0aW9uIGNyZWF0ZVRodW5rTWlkZGxld2FyZShleHRyYUFyZ3VtZW50KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBkaXNwYXRjaCA9IF9yZWYuZGlzcGF0Y2gsXG4gICAgICAgIGdldFN0YXRlID0gX3JlZi5nZXRTdGF0ZTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG5leHQpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYWN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmV0dXJuIGFjdGlvbihkaXNwYXRjaCwgZ2V0U3RhdGUsIGV4dHJhQXJndW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5leHQoYWN0aW9uKTtcbiAgICAgIH07XG4gICAgfTtcbiAgfTtcbn1cblxudmFyIHRodW5rID0gY3JlYXRlVGh1bmtNaWRkbGV3YXJlKCk7XG50aHVuay53aXRoRXh0cmFBcmd1bWVudCA9IGNyZWF0ZVRodW5rTWlkZGxld2FyZTtcblxuZXhwb3J0IGRlZmF1bHQgdGh1bms7IiwiaW1wb3J0IHsgR3JpZCwgR3JpZFZhbHVlLCBHYW1lRGlmZmljdWx0eSB9IGZyb20gXCIuLi9tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkamFjZW50VG9TYWZlU3BvdCh4OiBudW1iZXIsIHk6IG51bWJlciwgc2FmZVg6IG51bWJlciwgc2FmZVk6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgZm9yIChsZXQgaSA9IHNhZmVYIC0gMTsgaSA8IHNhZmVYICsgMjsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IHNhZmVZIC0gMTsgaiA8IHNhZmVZICsgMjsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmICh4ID09IGkgJiYgeSA9PSBqKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENlbGwoZ3JpZDogR3JpZCwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBHcmlkVmFsdWUge1xyXG4gICAgaWYgKGlzSW5HcmlkKGdyaWQsIHgsIHkpKSB7XHJcbiAgICAgICAgcmV0dXJuIGdyaWQuY2VsbHNbeF1beV07XHJcbiAgICB9XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYCgke3h9LCAke3l9KSBpcyBub3QgYSB2YWxpZCBjb29yZGluYXRlIGluIHRoZSBncmlkYCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRNaW5lKGdyaWQ6IEdyaWQsIHg6IG51bWJlciwgeTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoaXNJbkdyaWQoZ3JpZCwgeCwgeSkgJiYgIWdyaWQuY2VsbHNbeF1beV0uaXNNaW5lKCkpIHtcclxuICAgICAgICBncmlkLmNlbGxzW3hdW3ldLnNldE1pbmUoKTtcclxuICAgICAgICBncmlkID0gaW5jcmVtZW50VmFsdWVzQXJvdW5kTWluZShncmlkLCB4LCB5KTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluY3JlbWVudFZhbHVlc0Fyb3VuZE1pbmUoZ3JpZDogR3JpZCwgbWluZVg6IG51bWJlciwgbWluZVk6IG51bWJlcik6IEdyaWQge1xyXG4gICAgZm9yIChsZXQgaSA9IG1pbmVYIC0gMTsgaSA8IG1pbmVYICsgMjsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IG1pbmVZIC0gMTsgaiA8IG1pbmVZICsgMjsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmIChpc0luR3JpZChncmlkLCBpLCBqKSkge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC5jZWxsc1tpXVtqXS5pbmNyZW1lbnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBncmlkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNJbkdyaWQoZ3JpZDogR3JpZCwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoeCA+PSAwICYmIHggPCBncmlkLmNvbHVtbnMpICYmICh5ID49IDAgJiYgeSA8IGdyaWQucm93cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvcGVuQWRqYWNlbnRDZWxscyhncmlkOiBHcmlkLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IEdyaWQge1xyXG4gICAgZm9yIChsZXQgaSA9IHggLSAxOyBpIDwgeCArIDI7IGkrKykge1xyXG4gICAgICAgIGZvciAobGV0IGogPSB5IC0gMTsgaiA8IHkgKyAyOyBqKyspIHtcclxuICAgICAgICAgICAgb3BlbkNlbGwoZ3JpZCwgaSwgaik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGdyaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvcGVuQ2VsbChncmlkOiBHcmlkLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IEdyaWQge1xyXG4gICAgaWYgKGlzSW5HcmlkKGdyaWQsIHgsIHkpKSB7XHJcbiAgICAgICAgY29uc3QgY2VsbCA9IGdyaWQuY2VsbHNbeF1beV07XHJcbiAgICAgICAgaWYgKCFjZWxsLm9wZW4pIHtcclxuICAgICAgICAgICAgY2VsbC5vcGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgZ3JpZC5vcGVuZWRDZWxscysrO1xyXG4gICAgICAgICAgICBpZiAoY2VsbC5pc01pbmUoKSkge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC5vcGVuTWluZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2VsbC5oYXNOb0FkamFjZW50TWluZSgpKSB7XHJcbiAgICAgICAgICAgICAgICBncmlkID0gb3BlbkFkamFjZW50Q2VsbHMoZ3JpZCwgeCwgeSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZ3JpZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZsYWdDZWxsKGdyaWQ6IEdyaWQsIHg6IG51bWJlciwgeTogbnVtYmVyKTogR3JpZCB7XHJcbiAgICBpZiAoaXNJbkdyaWQoZ3JpZCwgeCwgeSkpIHtcclxuICAgICAgICBjb25zdCBjZWxsID0gZ3JpZC5jZWxsc1t4XVt5XTtcclxuICAgICAgICAoY2VsbC5mbGFnKSA/IGdyaWQubnVtRmxhZ3MtLSA6IGdyaWQubnVtRmxhZ3MrKztcclxuICAgICAgICBjZWxsLmZsYWcgPSAhY2VsbC5mbGFnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGdyaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnYW1lV29uKGdyaWQ6IEdyaWQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBncmlkLm9wZW5lZENlbGxzID09IG51bUNlbGxzKGdyaWQpIC0gZ3JpZC5udW1NaW5lcztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG51bUNlbGxzKGdyaWQ6IEdyaWQpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIGdyaWQucm93cyAqIGdyaWQuY29sdW1ucztcclxufVxyXG5cclxuLyoqIFJldHVybnMgdGhlIG51bWJlciBvZiByb3dzLCBudW1iZXIgb2YgY29sdW1ucywgYW5kIG51bWJlciBvZiBtaW5lcyBpbiBhIGxpc3QgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdyaWRTaXplKGRpZmZpY3VsdHk6IEdhbWVEaWZmaWN1bHR5KTogbnVtYmVyW10ge1xyXG4gICAgc3dpdGNoIChkaWZmaWN1bHR5KSB7XHJcbiAgICAgICAgY2FzZSBcIkJlZ2lubmVyXCI6IHJldHVybiBbOSwgOSwgMTBdO1xyXG4gICAgICAgIGNhc2UgXCJJbnRlcm1lZGlhdGVcIjogcmV0dXJuIFsxNiwgMTYsIDQwXTtcclxuICAgICAgICBjYXNlIFwiRXhwZXJ0XCI6IHJldHVybiBbMTYsIDMwLCA5OV07XHJcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIFs5LCA5LCAxMF07XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSAnLi9ncmlkSGVscGVyJztcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuaW1wb3J0IHsgR3JpZCwgU3RvcmUgfSBmcm9tICcuLi9tb2RlbCc7XHJcbmltcG9ydCB7IEdyaWRCdXR0b24gfSBmcm9tICcuLyc7XHJcbmltcG9ydCB7IGdldENlbGwgfSBmcm9tICcuLi91dGlscyc7XHJcblxyXG5pbnRlcmZhY2UgR3JpZENvbXBvbmVudFByb3BzIHtcclxuICAgIGdhbWVPdmVyOiBib29sZWFuO1xyXG4gICAgd2luOiBib29sZWFuXHJcbn1cclxuXHJcbmludGVyZmFjZSBHcmlkQ29tcG9uZW50U3RhdGVQcm9wcyB7XHJcbiAgICBncmlkOiBHcmlkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBHcmlkQ29tcG9uZW50Vmlldyhwcm9wczogR3JpZENvbXBvbmVudFByb3BzICYgR3JpZENvbXBvbmVudFN0YXRlUHJvcHMpIHtcclxuICAgIGNvbnN0IGdyaWQgPSBwcm9wcy5ncmlkO1xyXG4gICAgY29uc3QgZ3JpZEJ1dHRvbnM6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuICAgIGZvciAobGV0IHJvdyA9IGdyaWQucm93cyAtIDE7IDAgPD0gcm93OyByb3ctLSkge1xyXG4gICAgICAgIGNvbnN0IHJvd0J1dHRvbnM6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCBncmlkLmNvbHVtbnM7IGNvbHVtbisrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBnZXRDZWxsKGdyaWQsIGNvbHVtbiwgcm93KTtcclxuICAgICAgICAgICAgcm93QnV0dG9ucy5wdXNoKDxHcmlkQnV0dG9uIGtleT17YCR7cm93fSwgJHtjb2x1bW59YH0gZ3JpZFZhbHVlPXtjZWxsfSBvcGVuPXtjZWxsLm9wZW59IGZsYWc9e2NlbGwuZmxhZ30gZGlzYWJsZWQ9e3Byb3BzLmdhbWVPdmVyIHx8IHByb3BzLndpbn0gLz4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBncmlkQnV0dG9ucy5wdXNoKDxkaXYga2V5PXtyb3d9IGNsYXNzTmFtZT1cImJ1dHRvbnMgaGFzLWFkZG9ucyBpcy1tYXJnaW5sZXNzIGlzLWNlbnRlcmVkXCI+e3Jvd0J1dHRvbnN9PC9kaXY+KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiPlxyXG4gICAgICAgICAgICAgICAge2dyaWRCdXR0b25zfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZTogU3RvcmUpOiBHcmlkQ29tcG9uZW50U3RhdGVQcm9wcyB7XHJcbiAgICByZXR1cm4geyBncmlkOiBzdGF0ZS5ncmlkIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHcmlkQ29tcG9uZW50ID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEdyaWRDb21wb25lbnRWaWV3KTtcclxuIiwiZXhwb3J0IGNvbnN0IENIQU5HRV9ESUZGSUNVTFRZID0gJ0NIQU5HRV9ESUZGSUNVTFRZJztcclxuZXhwb3J0IGNvbnN0IEZJUlNUX0NMSUNLID0gJ0ZJUlNUX0NMSUNLJztcclxuZXhwb3J0IGNvbnN0IEZMQUdfQ0VMTCA9ICdGTEFHX0NFTEwnO1xyXG5leHBvcnQgY29uc3QgR0FNRV9TRVRVUCA9ICdHQU1FX1NFVFVQJztcclxuZXhwb3J0IGNvbnN0IEdSSURfU0VUVVAgPSAnR1JJRF9TRVRVUCc7XHJcbmV4cG9ydCBjb25zdCBHUklEX1NFVFVQX1dJVEhfU0FGRV9TUE9UID0gJ0dSSURfU0VUVVBfV0lUSF9TQUZFX1NQT1QnO1xyXG5leHBvcnQgY29uc3QgT1BFTl9BREpBQ0VOVF9DRUxMUyA9ICdPUEVOX0FESkFDRU5UX0NFTExTJztcclxuZXhwb3J0IGNvbnN0IE9QRU5fQ0VMTCA9ICdPUEVOX0NFTEwnO1xyXG4iLCJpbXBvcnQgeyBHYW1lRGlmZmljdWx0eSB9IGZyb20gJy4vLi4vbW9kZWwvZ2FtZVN0YXRlJztcclxuaW1wb3J0ICogYXMgQWN0aW9uVHlwZXMgZnJvbSAnLi9hY3Rpb25UeXBlcyc7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIEFjdGlvbnMge1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZURpZmZpY3VsdHkoZGlmZmljdWx0eTogR2FtZURpZmZpY3VsdHkpOiB7IHR5cGU6IHN0cmluZywgcGF5bG9hZDogR2FtZURpZmZpY3VsdHkgfSB7XHJcbiAgICAgICAgcmV0dXJuIHsgdHlwZTogQWN0aW9uVHlwZXMuQ0hBTkdFX0RJRkZJQ1VMVFksIHBheWxvYWQ6IGRpZmZpY3VsdHkgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBmaXJzdENsaWNrKCk6IHsgdHlwZTogc3RyaW5nLCBwYXlsb2FkOiBhbnkgfSB7XHJcbiAgICAgICAgcmV0dXJuIHsgdHlwZTogQWN0aW9uVHlwZXMuRklSU1RfQ0xJQ0ssIHBheWxvYWQ6IG51bGwgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBnYW1lU2V0dXAoZGlmZmljdWx0eTogR2FtZURpZmZpY3VsdHkpOiB7IHR5cGU6IHN0cmluZywgcGF5bG9hZDogR2FtZURpZmZpY3VsdHkgfSB7XHJcbiAgICAgICAgcmV0dXJuIHsgdHlwZTogQWN0aW9uVHlwZXMuR0FNRV9TRVRVUCwgcGF5bG9hZDogZGlmZmljdWx0eSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBncmlkU2V0dXAoZ3JpZFNpemU6IG51bWJlcltdKTogeyB0eXBlOiBzdHJpbmcsIHBheWxvYWQ6IG51bWJlcltdIH0ge1xyXG4gICAgICAgIHJldHVybiB7IHR5cGU6IEFjdGlvblR5cGVzLkdSSURfU0VUVVAsIHBheWxvYWQ6IGdyaWRTaXplIH07XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGdyaWRTZXR1cFdpdGhTYWZlU3BvdChncmlkU2l6ZTogbnVtYmVyW10sIHg6IG51bWJlciwgeTogbnVtYmVyKTogeyB0eXBlOiBzdHJpbmcsIHBheWxvYWQ6IHsgZ3JpZFNpemU6IG51bWJlcltdLCB4OiBudW1iZXIsIHk6IG51bWJlciB9IH0ge1xyXG4gICAgICAgIHJldHVybiB7IHR5cGU6IEFjdGlvblR5cGVzLkdSSURfU0VUVVBfV0lUSF9TQUZFX1NQT1QsIHBheWxvYWQ6IHsgZ3JpZFNpemUsIHgsIHkgfSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBvcGVuQWRqYWNlbnRDZWxscyh4OiBudW1iZXIsIHk6IG51bWJlcik6IHsgdHlwZTogc3RyaW5nLCBwYXlsb2FkOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0gfSB7XHJcbiAgICAgICAgcmV0dXJuIHsgdHlwZTogQWN0aW9uVHlwZXMuT1BFTl9BREpBQ0VOVF9DRUxMUywgcGF5bG9hZDogeyB4LCB5IH0gfTtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gb3BlbkNlbGwoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB7IHR5cGU6IHN0cmluZywgcGF5bG9hZDogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9IH0ge1xyXG4gICAgICAgIHJldHVybiB7IHR5cGU6IEFjdGlvblR5cGVzLk9QRU5fQ0VMTCwgcGF5bG9hZDogeyB4LCB5IH0gfTtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gZmxhZ0NlbGwoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB7IHR5cGU6IHN0cmluZywgcGF5bG9hZDogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9IH0ge1xyXG4gICAgICAgIHJldHVybiB7IHR5cGU6IEFjdGlvblR5cGVzLkZMQUdfQ0VMTCwgcGF5bG9hZDogeyB4LCB5IH0gfTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgeyBBY3Rpb25zIH0gZnJvbSAnLi9hY3Rpb25zJztcclxuZXhwb3J0ICogZnJvbSAnLi9hY3Rpb25UeXBlcyc7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgRGlzcGF0Y2ggfSBmcm9tICcuLi8uLi9ub2RlX21vZHVsZXMvcmVkdXgnO1xyXG5pbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucyc7XHJcbmltcG9ydCB7IEdhbWVTdGF0ZSwgR3JpZFZhbHVlLCBTdG9yZSB9IGZyb20gJy4uL21vZGVsJztcclxuaW1wb3J0IHsgZ3JpZFNpemUgfSBmcm9tICcuLi91dGlscyc7XHJcblxyXG5pbnRlcmZhY2UgR3JpZEJ1dHRvblByb3BzIHtcclxuICAgIGdyaWRWYWx1ZTogR3JpZFZhbHVlO1xyXG4gICAgb3BlbjogYm9vbGVhbjtcclxuICAgIGZsYWc6IGJvb2xlYW47XHJcbiAgICBkaXNhYmxlZDogYm9vbGVhbjtcclxufVxyXG5cclxuaW50ZXJmYWNlIEdyaWRCdXR0b25TdGF0ZVByb3BzIHtcclxuICAgIGdhbWVTdGF0ZTogR2FtZVN0YXRlO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgR3JpZEJ1dHRvbkRpc3BhdGNoUHJvcHMge1xyXG4gICAgZ3JpZFNldHVwOiAoZ3JpZFNpemU6IG51bWJlcltdLCB4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gYW55O1xyXG4gICAgZmlyc3RDbGljazogKCkgPT4gYW55O1xyXG4gICAgZmxhZ0NlbGw6ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gYW55O1xyXG4gICAgb3BlbkFkamFjZW50Q2VsbHM6ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gYW55O1xyXG4gICAgb3BlbkNlbGw6ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gYW55O1xyXG59XHJcblxyXG5mdW5jdGlvbiBHcmlkQnV0dG9uQ29tcG9uZW50KHByb3BzOiBHcmlkQnV0dG9uUHJvcHMgJiBHcmlkQnV0dG9uU3RhdGVQcm9wcyAmIEdyaWRCdXR0b25EaXNwYXRjaFByb3BzKSB7XHJcbiAgICBjb25zdCBjZWxsID0gcHJvcHMuZ3JpZFZhbHVlO1xyXG4gICAgaWYgKHByb3BzLm9wZW4pIHtcclxuICAgICAgICBsZXQgaWNvbjogSlNYLkVsZW1lbnQ7XHJcbiAgICAgICAgaWYgKGNlbGwuaXNNaW5lKCkpIHtcclxuICAgICAgICAgICAgaWNvbiA9IDxzcGFuIGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1ib21iIGZhLWxnXCI+PC9pPlxyXG4gICAgICAgICAgICA8L3NwYW4+O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNlbGxUZXh0ID0gY2VsbC52YWx1ZSA9PSAwID8gXCJcIiA6IGNlbGwudmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGNlbGxDb2xvdXIgPSBnZXRDZWxsVGV4dENvbG91cihjZWxsVGV4dClcclxuICAgICAgICAgICAgaWNvbiA9IDxzcGFuIGNsYXNzTmFtZT17YGljb24gJHtjZWxsQ29sb3VyfSBoYXMtdGV4dC13ZWlnaHQtYm9sZGB9PlxyXG4gICAgICAgICAgICAgICAge2NlbGxUZXh0fVxyXG4gICAgICAgICAgICA8L3NwYW4+O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJidXR0b24gaXMtc21hbGwgaXMtbWFyZ2lubGVzcyBpcy1zdGF0aWNcIj5cclxuICAgICAgICAgICAge2ljb259XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBmbGFnQ2VsbCA9IChwcm9wcy5kaXNhYmxlZCkgPyBkaXNhYmxlQ29udGV4dE1lbnUgOiAoZTogYW55KSA9PiBvblJpZ2h0Q2xpY2tIYW5kbGVyKGUsIHByb3BzLmdyaWRWYWx1ZSwgcHJvcHMuZmxhZ0NlbGwpO1xyXG4gICAgICAgIGlmIChwcm9wcy5mbGFnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1zbWFsbCBpcy1tYXJnaW5sZXNzXCIgZGlzYWJsZWQ9e3Byb3BzLmRpc2FibGVkfVxyXG4gICAgICAgICAgICAgICAgb25Db250ZXh0TWVudT17ZmxhZ0NlbGx9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1mbGFnIGZhLWxnIGhhcy10ZXh0LXJlZFwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1zbWFsbCBpcy1vdXRsaW5lZCBpcy1tYXJnaW5sZXNzXCIgZGlzYWJsZWQ9e3Byb3BzLmRpc2FibGVkfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DbGlja0hhbmRsZXIocHJvcHMpfSBvbkNvbnRleHRNZW51PXtmbGFnQ2VsbH0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uXCIgLz5cclxuICAgICAgICAgICAgPC9idXR0b24+O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gb25DbGlja0hhbmRsZXIocHJvcHM6IEdyaWRCdXR0b25Qcm9wcyAmIEdyaWRCdXR0b25TdGF0ZVByb3BzICYgR3JpZEJ1dHRvbkRpc3BhdGNoUHJvcHMpIHtcclxuICAgIGNvbnN0IHggPSBwcm9wcy5ncmlkVmFsdWUueDtcclxuICAgIGNvbnN0IHkgPSBwcm9wcy5ncmlkVmFsdWUueVxyXG4gICAgaWYgKHByb3BzLmdhbWVTdGF0ZS5maXJzdENsaWNrKSB7XHJcbiAgICAgICAgLy8gY3JlYXRlIGdyaWQsIHNldCBmaXJzdENsaWNrIHRvIGZhbHNlXHJcbiAgICAgICAgcHJvcHMuZ3JpZFNldHVwKGdyaWRTaXplKHByb3BzLmdhbWVTdGF0ZS5kaWZmaWN1bHR5KSwgeCwgeSk7XHJcbiAgICAgICAgcHJvcHMuZmlyc3RDbGljaygpO1xyXG4gICAgfVxyXG4gICAgcHJvcHMub3BlbkNlbGwoeCwgeSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uUmlnaHRDbGlja0hhbmRsZXIoZTogYW55LCBncmlkVmFsdWU6IEdyaWRWYWx1ZSwgZmxhZ0NlbGw6ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gYW55KSB7XHJcbiAgICBkaXNhYmxlQ29udGV4dE1lbnUoZSk7XHJcbiAgICBmbGFnQ2VsbChncmlkVmFsdWUueCwgZ3JpZFZhbHVlLnkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNhYmxlQ29udGV4dE1lbnUoZTogYW55KSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENlbGxUZXh0Q29sb3VyKGNlbGxUZXh0OiBudW1iZXIgfCBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgc3dpdGNoIChjZWxsVGV4dCkge1xyXG4gICAgICAgIGNhc2UgMTogcmV0dXJuIFwiaGFzLXRleHQtYmx1ZVwiXHJcbiAgICAgICAgY2FzZSAyOiByZXR1cm4gXCJoYXMtdGV4dC1ncmVlblwiXHJcbiAgICAgICAgY2FzZSAzOiByZXR1cm4gXCJoYXMtdGV4dC1yZWRcIlxyXG4gICAgICAgIGNhc2UgNDogcmV0dXJuIFwiaGFzLXRleHQtcHVycGxlXCJcclxuICAgICAgICBjYXNlIDU6IHJldHVybiBcImhhcy10ZXh0LW9yYW5nZVwiXHJcbiAgICAgICAgY2FzZSA2OiByZXR1cm4gXCJoYXMtdGV4dC1jeWFuXCJcclxuICAgICAgICBjYXNlIDc6IHJldHVybiBcImhhcy10ZXh0LXllbGxvd1wiXHJcbiAgICAgICAgY2FzZSA4OiByZXR1cm4gXCJoYXMtdGV4dC1ncmV5XCJcclxuICAgICAgICBkZWZhdWx0OiByZXR1cm4gXCJoYXMtdGV4dC1kYXJrXCJcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlOiBTdG9yZSk6IEdyaWRCdXR0b25TdGF0ZVByb3BzIHtcclxuICAgIHJldHVybiB7IGdhbWVTdGF0ZTogc3RhdGUuZ2FtZVN0YXRlIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaDogRGlzcGF0Y2gpOiBHcmlkQnV0dG9uRGlzcGF0Y2hQcm9wcyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdyaWRTZXR1cDogKGdyaWRTaXplOiBudW1iZXJbXSwgeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IGRpc3BhdGNoKEFjdGlvbnMuZ3JpZFNldHVwV2l0aFNhZmVTcG90KGdyaWRTaXplLCB4LCB5KSksXHJcbiAgICAgICAgZmlyc3RDbGljazogKCkgPT4gZGlzcGF0Y2goQWN0aW9ucy5maXJzdENsaWNrKCkpLFxyXG4gICAgICAgIGZsYWdDZWxsOiAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IGRpc3BhdGNoKEFjdGlvbnMuZmxhZ0NlbGwoeCwgeSkpLFxyXG4gICAgICAgIG9wZW5BZGphY2VudENlbGxzOiAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IGRpc3BhdGNoKEFjdGlvbnMub3BlbkFkamFjZW50Q2VsbHMoeCwgeSkpLFxyXG4gICAgICAgIG9wZW5DZWxsOiAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IGRpc3BhdGNoKEFjdGlvbnMub3BlbkNlbGwoeCwgeSkpLFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR3JpZEJ1dHRvbiA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEdyaWRCdXR0b25Db21wb25lbnQpO1xyXG4iLCJleHBvcnQgZW51bSBHYW1lRGlmZmljdWx0eSB7XHJcbiAgICBCZWdpbm5lciA9IFwiQmVnaW5uZXJcIixcclxuICAgIEludGVybWVkaWF0ZSA9IFwiSW50ZXJtZWRpYXRlXCIsXHJcbiAgICBFeHBlcnQgPSBcIkV4cGVydFwiXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b0dhbWVEaWZmaWN1bHR5KGRpZmZpY3VsdHk6IHN0cmluZyk6IEdhbWVEaWZmaWN1bHR5IHtcclxuICAgIHN3aXRjaCAoZGlmZmljdWx0eSkge1xyXG4gICAgICAgIGNhc2UgXCJCZWdpbm5lclwiOiByZXR1cm4gR2FtZURpZmZpY3VsdHkuQmVnaW5uZXI7XHJcbiAgICAgICAgY2FzZSBcIkludGVybWVkaWF0ZVwiOiByZXR1cm4gR2FtZURpZmZpY3VsdHkuSW50ZXJtZWRpYXRlO1xyXG4gICAgICAgIGNhc2UgXCJFeHBlcnRcIjogcmV0dXJuIEdhbWVEaWZmaWN1bHR5LkV4cGVydDtcclxuICAgICAgICBkZWZhdWx0OiByZXR1cm4gR2FtZURpZmZpY3VsdHkuQmVnaW5uZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lU3RhdGUge1xyXG4gICAgZmlyc3RDbGljazogYm9vbGVhbjtcclxuICAgIGRpZmZpY3VsdHk6IEdhbWVEaWZmaWN1bHR5O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGRpZmZpY3VsdHk6IEdhbWVEaWZmaWN1bHR5ID0gR2FtZURpZmZpY3VsdHkuQmVnaW5uZXIpIHtcclxuICAgICAgICB0aGlzLmZpcnN0Q2xpY2sgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZGlmZmljdWx0eSA9IGRpZmZpY3VsdHk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgR3JpZFZhbHVlIH0gZnJvbSBcIi5cIjtcclxuaW1wb3J0IHsgc2V0TWluZSwgYWRqYWNlbnRUb1NhZmVTcG90IH0gZnJvbSBcIi4uL3V0aWxzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR3JpZCB7XHJcblxyXG4gICAgLy8gY29sdW1ucyA9IG1heCB4LXZhbHVlLCByb3dzID0gbWF4IHktdmFsdWVcclxuICAgIHJvd3M6IG51bWJlcjtcclxuICAgIGNvbHVtbnM6IG51bWJlcjtcclxuICAgIG51bU1pbmVzOiBudW1iZXI7XHJcbiAgICBjZWxsczogR3JpZFZhbHVlW11bXTtcclxuICAgIG9wZW5NaW5lOiBib29sZWFuO1xyXG4gICAgb3BlbmVkQ2VsbHM6IG51bWJlcjtcclxuICAgIG51bUZsYWdzOiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqIEBwYXJhbSByb3dzIHRvdGFsIG51bWJlciBvZiByb3dzIGluIGdyaWRcclxuICAgICAqIEBwYXJhbSBjb2x1bW5zIHRvdGFsIG51bWJlciBvZiBjb2x1bW5zIGluIGdyaWRcclxuICAgICAqIEBwYXJhbSBudW1NaW5lcyB0b3RhbCBudW1iZXIgb2YgbWluZXMgaW4gZ3JpZFxyXG4gICAgICogQHBhcmFtIHNhZmVYIGNlbGxzIGFkamFjZW50IHRvIChzYWZlWCwgc2FmZVkpIHNob3VsZCBub3QgY29udGFpbiBhIG1pbmVcclxuICAgICAqIEBwYXJhbSBzYWZlWVxyXG4gICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHJvd3M6IG51bWJlciwgY29sdW1uczogbnVtYmVyLCBudW1NaW5lczogbnVtYmVyLCBzYWZlWCA9IC0xMCwgc2FmZVkgPSAtMTApIHtcclxuICAgICAgICB0aGlzLnJvd3MgPSByb3dzO1xyXG4gICAgICAgIHRoaXMuY29sdW1ucyA9IGNvbHVtbnM7XHJcbiAgICAgICAgdGhpcy5udW1NaW5lcyA9IG51bU1pbmVzO1xyXG4gICAgICAgIHRoaXMub3Blbk1pbmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9wZW5lZENlbGxzID0gMDtcclxuICAgICAgICB0aGlzLm51bUZsYWdzID0gMDtcclxuXHJcbiAgICAgICAgLy8gaW5pdGlhbGl6ZSBncmlkXHJcbiAgICAgICAgdGhpcy5jZWxscyA9IG5ldyBBcnJheShjb2x1bW5zKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHVtbnM7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmNlbGxzW2ldID0gbmV3IEFycmF5KHJvd3MpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJvd3M7IGorKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jZWxsc1tpXVtqXSA9IG5ldyBHcmlkVmFsdWUoaSwgaik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNldCBtaW5lc1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtTWluZXM7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgeDogbnVtYmVyO1xyXG4gICAgICAgICAgICBsZXQgeTogbnVtYmVyO1xyXG4gICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICB4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKGNvbHVtbnMgLSAxKSk7XHJcbiAgICAgICAgICAgICAgICB5ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKHJvd3MgLSAxKSk7XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKGFkamFjZW50VG9TYWZlU3BvdCh4LCB5LCBzYWZlWCwgc2FmZVkpIHx8ICFzZXRNaW5lKHRoaXMsIHgsIHkpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIEdyaWRWYWx1ZSB7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcbiAgICB2YWx1ZTogbnVtYmVyO1xyXG4gICAgbWluZTogYm9vbGVhbjtcclxuICAgIG9wZW46IGJvb2xlYW47XHJcbiAgICBmbGFnOiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSAwO1xyXG4gICAgICAgIHRoaXMubWluZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZmxhZyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGluY3JlbWVudCgpIHtcclxuICAgICAgICB0aGlzLnZhbHVlKys7XHJcbiAgICB9XHJcblxyXG4gICAgaXNNaW5lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1pbmU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TWluZSgpIHtcclxuICAgICAgICB0aGlzLm1pbmUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGhhc05vQWRqYWNlbnRNaW5lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlID09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaXNGbGFnKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZsYWc7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgR3JpZCwgR2FtZVN0YXRlIH0gZnJvbSBcIi5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdG9yZSB7XHJcbiAgICBnYW1lU3RhdGU6IEdhbWVTdGF0ZTtcclxuICAgIGdyaWQ6IEdyaWQ7XHJcbn1cclxuIiwiZXhwb3J0IHsgR2FtZURpZmZpY3VsdHksIEdhbWVTdGF0ZSwgdG9HYW1lRGlmZmljdWx0eSB9IGZyb20gJy4vZ2FtZVN0YXRlJztcclxuZXhwb3J0IHsgR3JpZCB9IGZyb20gJy4vZ3JpZCc7XHJcbmV4cG9ydCB7IEdyaWRWYWx1ZSB9IGZyb20gJy4vZ3JpZFZhbHVlJztcclxuZXhwb3J0IHsgU3RvcmUgfSBmcm9tICcuL3N0b3JlJztcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBHYW1lRGlmZmljdWx0eSwgR2FtZVN0YXRlLCBHcmlkLCBTdG9yZSB9IGZyb20gJy4uL21vZGVsJztcclxuaW1wb3J0IHsgZ2FtZVdvbiwgZ3JpZFNpemUsIG51bUNlbGxzIH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBHcmlkQ29tcG9uZW50LCBPcHRpb25zTWVudSB9IGZyb20gJy4vJztcclxuaW1wb3J0ICcuL21pbmVzd2VlcGVyLnNjc3MnO1xyXG5cclxuXHJcbmludGVyZmFjZSBNaW5lc3dlZXBlclN0YXRlUHJvcHMge1xyXG4gICAgZ2FtZVN0YXRlOiBHYW1lU3RhdGU7XHJcbiAgICBncmlkOiBHcmlkO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgTWluZXN3ZWVwZXJEaXNwYXRjaFByb3BzIHtcclxuICAgIGdhbWVTZXR1cDogKGRpZmZpY3VsdHk/OiBHYW1lRGlmZmljdWx0eSkgPT4gYW55O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTWluZXN3ZWVwZXJWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PE1pbmVzd2VlcGVyU3RhdGVQcm9wcyAmIE1pbmVzd2VlcGVyRGlzcGF0Y2hQcm9wcywgYW55PiB7XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5nYW1lU2V0dXAoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgZ3JpZCA9IHRoaXMucHJvcHMuZ3JpZDtcclxuICAgICAgICBjb25zdCBnYW1lT3ZlciA9IGdyaWQub3Blbk1pbmU7XHJcbiAgICAgICAgY29uc3Qgd2luID0gZ2FtZVdvbihncmlkKTtcclxuICAgICAgICBjb25zdCB0b3RhbFNhZmVDZWxscyA9IG51bUNlbGxzKGdyaWQpIC0gZ3JpZC5udW1NaW5lcztcclxuICAgICAgICBsZXQgcHJvZ2Vzc0NvbG91ckNsYXNzID0gXCJcIjtcclxuICAgICAgICBpZiAoZ2FtZU92ZXIpIHtcclxuICAgICAgICAgICAgcHJvZ2Vzc0NvbG91ckNsYXNzID0gXCJpcy1kYW5nZXJcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHdpbikge1xyXG4gICAgICAgICAgICBwcm9nZXNzQ29sb3VyQ2xhc3MgPSBcImlzLXN1Y2Nlc3NcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2xiYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1wcmltYXJ5XCIgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5nYW1lU2V0dXAodGhpcy5wcm9wcy5nYW1lU3RhdGUuZGlmZmljdWx0eSl9Pk5ldyBHYW1lPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb25zTWVudSBkaWZmaWN1bHR5PXt0aGlzLnByb3BzLmdhbWVTdGF0ZS5kaWZmaWN1bHR5fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbmUtY291bnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1ib21iIGZhLWxnXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2AgJHtncmlkLm51bU1pbmVzIC0gZ3JpZC5udW1GbGFnc31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cHJvZ3Jlc3MgY2xhc3NOYW1lPXtgcHJvZ3Jlc3MgaXMtc21hbGwgcHJvZ3Jlc3MtbGF5b3V0ICR7cHJvZ2Vzc0NvbG91ckNsYXNzfWB9IHZhbHVlPXtncmlkLm9wZW5lZENlbGxzfSBtYXg9e3RvdGFsU2FmZUNlbGxzfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8R3JpZENvbXBvbmVudCBnYW1lT3Zlcj17Z2FtZU92ZXJ9IHdpbj17d2lufSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGU6IFN0b3JlKTogTWluZXN3ZWVwZXJTdGF0ZVByb3BzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2FtZVN0YXRlOiBzdGF0ZS5nYW1lU3RhdGUsXHJcbiAgICAgICAgZ3JpZDogc3RhdGUuZ3JpZFxyXG4gICAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoOiBEaXNwYXRjaCk6IE1pbmVzd2VlcGVyRGlzcGF0Y2hQcm9wcyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdhbWVTZXR1cDogKGRpZmZpY3VsdHk6IEdhbWVEaWZmaWN1bHR5ID0gR2FtZURpZmZpY3VsdHkuQmVnaW5uZXIpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goQWN0aW9ucy5nYW1lU2V0dXAoZGlmZmljdWx0eSkpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaChBY3Rpb25zLmdyaWRTZXR1cChncmlkU2l6ZShkaWZmaWN1bHR5KSkpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTWluZXN3ZWVwZXIgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShNaW5lc3dlZXBlclZpZXcpO1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IERpc3BhdGNoIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucyc7XHJcbmltcG9ydCB7IEdhbWVEaWZmaWN1bHR5LCB0b0dhbWVEaWZmaWN1bHR5IH0gZnJvbSAnLi4vbW9kZWwnO1xyXG5cclxuaW50ZXJmYWNlIE9wdGlvbnNNZW51UHJvcHMge1xyXG4gICAgZGlmZmljdWx0eTogR2FtZURpZmZpY3VsdHk7XHJcbn1cclxuXHJcbmludGVyZmFjZSBPcHRpb25zTWVudURpc3BhdGNoUHJvcHMge1xyXG4gICAgY2hhbmdlRGlmZmljdWx0eTogKGRpZmZpY3VsdHk6IEdhbWVEaWZmaWN1bHR5KSA9PiBhbnk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE9wdGlvbnNNZW51Q29tcG9uZW50KHByb3BzOiBPcHRpb25zTWVudVByb3BzICYgT3B0aW9uc01lbnVEaXNwYXRjaFByb3BzKTogSlNYLkVsZW1lbnQge1xyXG4gICAgY29uc3QgZHJvcGRvd25JdGVtcyA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBkaWZmaWN1bHR5IGluIEdhbWVEaWZmaWN1bHR5KSB7XHJcbiAgICAgICAgZHJvcGRvd25JdGVtcy5wdXNoKFxyXG4gICAgICAgICAgICA8YSBrZXk9e2RpZmZpY3VsdHl9IGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5jaGFuZ2VEaWZmaWN1bHR5KHRvR2FtZURpZmZpY3VsdHkoZGlmZmljdWx0eSkpfT5cclxuICAgICAgICAgICAgICAgIHtkaWZmaWN1bHR5fVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24gaXMtaG92ZXJhYmxlXCIgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLXRyaWdnZXJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIGRyb3Bkb3duLWJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV2ZWxcIiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxldmVsLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5kaWZmaWN1bHR5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxldmVsLXJpZ2h0IGlzLXNtYWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtZG93blwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCIgaWQ9XCJkcm9wZG93bi1tZW51XCIgcm9sZT1cIm1lbnVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtkcm9wZG93bkl0ZW1zfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2g6IERpc3BhdGNoKTogT3B0aW9uc01lbnVEaXNwYXRjaFByb3BzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY2hhbmdlRGlmZmljdWx0eTogKGRpZmZpY3VsdHk6IEdhbWVEaWZmaWN1bHR5KSA9PiBkaXNwYXRjaChBY3Rpb25zLmNoYW5nZURpZmZpY3VsdHkoZGlmZmljdWx0eSkpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBPcHRpb25zTWVudSA9IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShPcHRpb25zTWVudUNvbXBvbmVudCk7XHJcbiIsImV4cG9ydCB7IEdyaWRDb21wb25lbnQgfSBmcm9tIFwiLi9ncmlkQ29tcG9uZW50XCI7XHJcbmV4cG9ydCB7IEdyaWRCdXR0b24gfSBmcm9tIFwiLi9ncmlkQnV0dG9uXCI7XHJcbmV4cG9ydCB7IE1pbmVzd2VlcGVyIH0gZnJvbSBcIi4vbWluZXN3ZWVwZXJcIjtcclxuZXhwb3J0IHsgT3B0aW9uc01lbnUgfSBmcm9tIFwiLi9vcHRpb25zTWVudVwiO1xyXG4iLCJpbXBvcnQgeyBDSEFOR0VfRElGRklDVUxUWSwgR0FNRV9TRVRVUCwgRklSU1RfQ0xJQ0sgfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBHYW1lU3RhdGUgfSBmcm9tIFwiLi4vbW9kZWxcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnYW1lU3RhdGVSZWR1Y2VyKHN0YXRlOiBHYW1lU3RhdGUsIGFjdGlvbjogeyB0eXBlOiBTdHJpbmcsIHBheWxvYWQ6IGFueSB9KTogR2FtZVN0YXRlIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEdBTUVfU0VUVVA6XHJcbiAgICAgICAgICAgIGNvbnN0IGRpZmZpY3VsdHkgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBHYW1lU3RhdGUoZGlmZmljdWx0eSk7XHJcbiAgICAgICAgY2FzZSBDSEFOR0VfRElGRklDVUxUWTpcclxuICAgICAgICAgICAgbGV0IG5ld0dhbWVTdGF0ZSA9IHsgLi4uc3RhdGUgfTtcclxuICAgICAgICAgICAgbmV3R2FtZVN0YXRlLmRpZmZpY3VsdHkgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgcmV0dXJuIG5ld0dhbWVTdGF0ZTtcclxuICAgICAgICBjYXNlIEZJUlNUX0NMSUNLOlxyXG4gICAgICAgICAgICBuZXdHYW1lU3RhdGUgPSB7IC4uLnN0YXRlIH07XHJcbiAgICAgICAgICAgIG5ld0dhbWVTdGF0ZS5maXJzdENsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXdHYW1lU3RhdGU7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIChzdGF0ZSkgPyBzdGF0ZSA6IG5ldyBHYW1lU3RhdGUoKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBGTEFHX0NFTEwsIEdSSURfU0VUVVBfV0lUSF9TQUZFX1NQT1QgfSBmcm9tICcuLy4uL2FjdGlvbnMvYWN0aW9uVHlwZXMnO1xyXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSBcIi4uL21vZGVsXCI7XHJcbmltcG9ydCB7IEdSSURfU0VUVVAsIE9QRU5fQURKQUNFTlRfQ0VMTFMsIE9QRU5fQ0VMTCB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IG9wZW5BZGphY2VudENlbGxzLCBvcGVuQ2VsbCwgZmxhZ0NlbGwgfSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBncmlkUmVkdWNlcihzdGF0ZTogR3JpZCwgYWN0aW9uOiB7IHR5cGU6IFN0cmluZywgcGF5bG9hZDogYW55IH0pOiBHcmlkIHtcclxuICAgIGxldCBuZXdTdGF0ZTogR3JpZDtcclxuICAgIGxldCB4OiBudW1iZXI7XHJcbiAgICBsZXQgeTogbnVtYmVyO1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgR1JJRF9TRVRVUDpcclxuICAgICAgICAgICAgbGV0IFtudW1Sb3dzLCBudW1Db2x1bW5zLCBudW1NaW5lc10gPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBHcmlkKG51bVJvd3MsIG51bUNvbHVtbnMsIG51bU1pbmVzKTtcclxuICAgICAgICBjYXNlIEdSSURfU0VUVVBfV0lUSF9TQUZFX1NQT1Q6XHJcbiAgICAgICAgICAgIFtudW1Sb3dzLCBudW1Db2x1bW5zLCBudW1NaW5lc10gPSBhY3Rpb24ucGF5bG9hZC5ncmlkU2l6ZTtcclxuICAgICAgICAgICAgeCA9IGFjdGlvbi5wYXlsb2FkLng7XHJcbiAgICAgICAgICAgIHkgPSBhY3Rpb24ucGF5bG9hZC55O1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEdyaWQobnVtUm93cywgbnVtQ29sdW1ucywgbnVtTWluZXMsIHgsIHkpO1xyXG4gICAgICAgIGNhc2UgT1BFTl9BREpBQ0VOVF9DRUxMUzpcclxuICAgICAgICAgICAgbmV3U3RhdGUgPSB7IC4uLnN0YXRlIH07XHJcbiAgICAgICAgICAgIHggPSBhY3Rpb24ucGF5bG9hZC54O1xyXG4gICAgICAgICAgICB5ID0gYWN0aW9uLnBheWxvYWQueTtcclxuICAgICAgICAgICAgcmV0dXJuIG9wZW5BZGphY2VudENlbGxzKG5ld1N0YXRlLCB4LCB5KTtcclxuICAgICAgICBjYXNlIE9QRU5fQ0VMTDpcclxuICAgICAgICAgICAgbmV3U3RhdGUgPSB7IC4uLnN0YXRlIH07XHJcbiAgICAgICAgICAgIHggPSBhY3Rpb24ucGF5bG9hZC54O1xyXG4gICAgICAgICAgICB5ID0gYWN0aW9uLnBheWxvYWQueTtcclxuICAgICAgICAgICAgcmV0dXJuIG9wZW5DZWxsKG5ld1N0YXRlLCB4LCB5KTtcclxuICAgICAgICBjYXNlIEZMQUdfQ0VMTDpcclxuICAgICAgICAgICAgbmV3U3RhdGUgPSB7IC4uLnN0YXRlIH07XHJcbiAgICAgICAgICAgIHggPSBhY3Rpb24ucGF5bG9hZC54O1xyXG4gICAgICAgICAgICB5ID0gYWN0aW9uLnBheWxvYWQueTtcclxuICAgICAgICAgICAgcmV0dXJuIGZsYWdDZWxsKG5ld1N0YXRlLCB4LCB5KTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gKHN0YXRlKSA/IHN0YXRlIDogbmV3IEdyaWQoMSwgMSwgMCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBnYW1lU3RhdGVSZWR1Y2VyLCBncmlkUmVkdWNlciB9IGZyb20gJy4vJztcclxuXHJcbmV4cG9ydCBjb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBnYW1lU3RhdGU6IGdhbWVTdGF0ZVJlZHVjZXIsXHJcbiAgICBncmlkOiBncmlkUmVkdWNlclxyXG59KTtcclxuIiwiZXhwb3J0IHsgZ2FtZVN0YXRlUmVkdWNlciB9IGZyb20gJy4vZ2FtZVN0YXRlUmVkdWNlcic7XHJcbmV4cG9ydCB7IGdyaWRSZWR1Y2VyIH0gZnJvbSAnLi9ncmlkUmVkdWNlcic7XHJcbmV4cG9ydCB7IHJvb3RSZWR1Y2VyIH0gZnJvbSAnLi9yb290UmVkdWNlcic7XHJcbiIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcclxuXHJcbmltcG9ydCB7IE1pbmVzd2VlcGVyIH0gZnJvbSAnLi9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgcm9vdFJlZHVjZXIgfSBmcm9tICcuL3JlZHVjZXJzJztcclxuaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcclxuXHJcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGFwcGx5TWlkZGxld2FyZSh0aHVuaykpO1xyXG5cclxucmVuZGVyKFxyXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9ID5cclxuICAgIDxNaW5lc3dlZXBlciAvPlxyXG4gIDwvUHJvdmlkZXI+LFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSxcclxuKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==