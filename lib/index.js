'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var emotionTheming = require('emotion-theming');
var reactDom = require('react-dom');
var core = require('@emotion/core');
var crypto = _interopDefault(require('crypto'));

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

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }
var style = {
  display: "block",
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  width: "1px",
  margin: "-1px",
  padding: 0,
  overflow: "hidden",
  position: "absolute"
};

function VisuallyHidden(props) {
  return React__default.createElement("span", _extends$1({
    style: style
  }, props));
}

var checkedPkgs = {};

var checkStyles = function checkStyles() {};

if (process.env.NODE_ENV !== "production") {
  checkStyles = function checkStyles(pkg) {
    // only check once per package
    if (checkedPkgs[pkg]) return;
    checkedPkgs[pkg] = true;

    if (parseInt(window.getComputedStyle(document.body).getPropertyValue("--reach-" + pkg), 10) !== 1) {
      console.warn("@reach/" + pkg + " styles not found. If you are using a bundler like webpack or parcel include this in the entry file of your app before any of your own styles:\n\n    import \"@reach/" + pkg + "/styles.css\";\n\n  Otherwise you'll need to include them some other way:\n\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"node_modules/@reach/" + pkg + "/styles.css\" />\n\n  For more information visit https://ui.reach.tech/styling.\n  ");
    }
  };
}
function assignRef(ref, value) {
  if (ref == null) return;

  if (typeof ref === "function") {
    ref(value);
  } else {
    try {
      ref.current = value;
    } catch (error) {
      throw new Error("Cannot assign value \"" + value + "\" to ref \"" + ref + "\"");
    }
  }
}
function makeId(id, index) {
  return id + "--" + index;
}
function useForkedRef() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }

  return React.useMemo(function () {
    if (refs.every(function (ref) {
      return ref == null;
    })) {
      return null;
    }

    return function (node) {
      refs.forEach(function (ref) {
        assignRef(ref, node);
      });
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refs);
}
function usePrevious(value) {
  var ref = React.useRef();
  React.useEffect(function () {
    ref.current = value;
  }, [value]);
  return ref.current;
}
function useUpdateEffect(effect, deps) {
  var mounted = React.useRef(false);
  React.useEffect(function () {
    if (mounted.current) {
      effect();
    } else {
      mounted.current = true;
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, deps);
}
function wrapEvent(theirHandler, ourHandler) {
  return function (event) {
    theirHandler && theirHandler(event);

    if (!event.defaultPrevented) {
      return ourHandler(event);
    }
  };
}

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var reactIs_production_min = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports,"__esModule",{value:!0});
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):
60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.fundamental"):60117,w=b?Symbol.for("react.responder"):60118,x=b?Symbol.for("react.scope"):60119;function y(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case h:return a;default:return u}}case t:case r:case d:return u}}}function z(a){return y(a)===m}
exports.typeOf=y;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;
exports.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===v||a.$$typeof===w||a.$$typeof===x)};exports.isAsyncMode=function(a){return z(a)||y(a)===l};exports.isConcurrentMode=z;exports.isContextConsumer=function(a){return y(a)===k};exports.isContextProvider=function(a){return y(a)===h};
exports.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return y(a)===n};exports.isFragment=function(a){return y(a)===e};exports.isLazy=function(a){return y(a)===t};exports.isMemo=function(a){return y(a)===r};exports.isPortal=function(a){return y(a)===d};exports.isProfiler=function(a){return y(a)===g};exports.isStrictMode=function(a){return y(a)===f};exports.isSuspense=function(a){return y(a)===p};
});

unwrapExports(reactIs_production_min);
var reactIs_production_min_1 = reactIs_production_min.typeOf;
var reactIs_production_min_2 = reactIs_production_min.AsyncMode;
var reactIs_production_min_3 = reactIs_production_min.ConcurrentMode;
var reactIs_production_min_4 = reactIs_production_min.ContextConsumer;
var reactIs_production_min_5 = reactIs_production_min.ContextProvider;
var reactIs_production_min_6 = reactIs_production_min.Element;
var reactIs_production_min_7 = reactIs_production_min.ForwardRef;
var reactIs_production_min_8 = reactIs_production_min.Fragment;
var reactIs_production_min_9 = reactIs_production_min.Lazy;
var reactIs_production_min_10 = reactIs_production_min.Memo;
var reactIs_production_min_11 = reactIs_production_min.Portal;
var reactIs_production_min_12 = reactIs_production_min.Profiler;
var reactIs_production_min_13 = reactIs_production_min.StrictMode;
var reactIs_production_min_14 = reactIs_production_min.Suspense;
var reactIs_production_min_15 = reactIs_production_min.isValidElementType;
var reactIs_production_min_16 = reactIs_production_min.isAsyncMode;
var reactIs_production_min_17 = reactIs_production_min.isConcurrentMode;
var reactIs_production_min_18 = reactIs_production_min.isContextConsumer;
var reactIs_production_min_19 = reactIs_production_min.isContextProvider;
var reactIs_production_min_20 = reactIs_production_min.isElement;
var reactIs_production_min_21 = reactIs_production_min.isForwardRef;
var reactIs_production_min_22 = reactIs_production_min.isFragment;
var reactIs_production_min_23 = reactIs_production_min.isLazy;
var reactIs_production_min_24 = reactIs_production_min.isMemo;
var reactIs_production_min_25 = reactIs_production_min.isPortal;
var reactIs_production_min_26 = reactIs_production_min.isProfiler;
var reactIs_production_min_27 = reactIs_production_min.isStrictMode;
var reactIs_production_min_28 = reactIs_production_min.isSuspense;

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */
var lowPriorityWarningWithoutStack = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });

    if (typeof console !== 'undefined') {
      console.warn(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarningWithoutStack = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(void 0, [format].concat(args));
    }
  };
}

var lowPriorityWarningWithoutStack$1 = lowPriorityWarningWithoutStack;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarningWithoutStack$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}
});

unwrapExports(reactIs_development);
var reactIs_development_1 = reactIs_development.typeOf;
var reactIs_development_2 = reactIs_development.AsyncMode;
var reactIs_development_3 = reactIs_development.ConcurrentMode;
var reactIs_development_4 = reactIs_development.ContextConsumer;
var reactIs_development_5 = reactIs_development.ContextProvider;
var reactIs_development_6 = reactIs_development.Element;
var reactIs_development_7 = reactIs_development.ForwardRef;
var reactIs_development_8 = reactIs_development.Fragment;
var reactIs_development_9 = reactIs_development.Lazy;
var reactIs_development_10 = reactIs_development.Memo;
var reactIs_development_11 = reactIs_development.Portal;
var reactIs_development_12 = reactIs_development.Profiler;
var reactIs_development_13 = reactIs_development.StrictMode;
var reactIs_development_14 = reactIs_development.Suspense;
var reactIs_development_15 = reactIs_development.isValidElementType;
var reactIs_development_16 = reactIs_development.isAsyncMode;
var reactIs_development_17 = reactIs_development.isConcurrentMode;
var reactIs_development_18 = reactIs_development.isContextConsumer;
var reactIs_development_19 = reactIs_development.isContextProvider;
var reactIs_development_20 = reactIs_development.isElement;
var reactIs_development_21 = reactIs_development.isForwardRef;
var reactIs_development_22 = reactIs_development.isFragment;
var reactIs_development_23 = reactIs_development.isLazy;
var reactIs_development_24 = reactIs_development.isMemo;
var reactIs_development_25 = reactIs_development.isPortal;
var reactIs_development_26 = reactIs_development.isProfiler;
var reactIs_development_27 = reactIs_development.isStrictMode;
var reactIs_development_28 = reactIs_development.isSuspense;

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

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

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
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

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
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
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
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

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});
var propTypes_1 = propTypes.array;
var propTypes_2 = propTypes.bool;
var propTypes_3 = propTypes.func;
var propTypes_4 = propTypes.number;
var propTypes_5 = propTypes.object;
var propTypes_6 = propTypes.string;
var propTypes_7 = propTypes.symbol;
var propTypes_8 = propTypes.any;
var propTypes_9 = propTypes.arrayOf;
var propTypes_10 = propTypes.element;
var propTypes_11 = propTypes.elementType;
var propTypes_12 = propTypes.instanceOf;
var propTypes_13 = propTypes.node;
var propTypes_14 = propTypes.objectOf;
var propTypes_15 = propTypes.oneOf;
var propTypes_16 = propTypes.oneOfType;
var propTypes_17 = propTypes.shape;
var propTypes_18 = propTypes.exact;

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
// an alert (SRs don't read them on first load anyway)

var keys = {
  polite: -1,
  assertive: -1
};
var elements = {
  polite: {},
  assertive: {}
};
var liveRegions = {
  polite: null,
  assertive: null
};
var Alert = React.forwardRef(function Alert(_ref, forwardedRef) {
  var children = _ref.children,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? "polite" : _ref$type,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "type"]);

  var ownRef = React.useRef(null);
  var ref = forwardedRef || ownRef;
  var child = React.useMemo(function () {
    return React__default.createElement("div", _extends$2({}, props, {
      ref: ref,
      "data-reach-alert": true
    }), children);
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [children, props]);
  useMirrorEffects(type, child);
  return child;
});

if (process.env.NODE_ENV !== "production") {
  Alert.propTypes = {
    children: propTypes_13,
    type: propTypes_6
  };
}

var renderTimer = null;

function renderAlerts() {
  clearTimeout(renderTimer);
  renderTimer = setTimeout(function () {
    Object.keys(elements).forEach(function (type) {
      var container = liveRegions[type];

      if (container) {
        reactDom.render(React__default.createElement(VisuallyHidden, null, React__default.createElement("div", {
          role: type === "assertive" ? "alert" : "status",
          "aria-live": type
        }, Object.keys(elements[type]).map(function (key) {
          return React__default.cloneElement(elements[type][key], {
            key: key,
            ref: null
          });
        }))), liveRegions[type]);
      }
    });
  }, 500);
}

function useMirrorEffects(type, element) {
  var prevType = usePrevious(type);
  var mirror = React.useRef(null);
  var mounted = React.useRef(false);
  React.useEffect(function () {
    if (!mounted.current) {
      mounted.current = true;
      mirror.current = createMirror(type);
      mirror.current.mount(element);
    } else if (!prevType !== type) {
      mirror.current.unmount();
      mirror.current = createMirror(type);
      mirror.current.mount(element);
    } else {
      mirror.current.update(element, prevType, type);
    }
  }, [element, type, prevType]);
  React.useEffect(function () {
    return function () {
      mirror.current && mirror.current.unmount();
    };
  }, []);
}

function createMirror(type) {
  var key = ++keys[type];

  var mount = function mount(element) {
    if (liveRegions[type]) {
      elements[type][key] = element;
      renderAlerts();
    } else {
      var _node = document.createElement("div");

      _node.setAttribute("data-reach-live-" + type, "true");

      liveRegions[type] = _node;
      document.body.appendChild(liveRegions[type]);
      mount(element);
    }
  };

  var update = function update(element) {
    elements[type][key] = element;
    renderAlerts();
  };

  var unmount = function unmount() {
    delete elements[type][key];
    renderAlerts();
  };

  return {
    mount: mount,
    update: update,
    unmount: unmount
  };
}

// Material Design Icons v4.5.95
var mdiAlert = "M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z";
var mdiAlertCircle = "M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z";
var mdiCheckCircle = "M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z";
var mdiClose = "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";
var mdiContentCopy = "M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z";
var mdiInformation = "M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z";

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

var defineProperty = _defineProperty;

function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = memoize(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

var isBrowser = typeof document !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className]);
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }

  if (cache.inserted[serialized.name] === undefined) {
    var stylesForSSR = '';
    var current = serialized;

    do {
      var maybeStyles = cache.insert("." + className, current, cache.sheet, true);

      if (!isBrowser && maybeStyles !== undefined) {
        stylesForSSR += maybeStyles;
      }

      current = current.next;
    } while (current !== undefined);

    if (!isBrowser && stylesForSSR.length !== 0) {
      return stylesForSSR;
    }
  }
};

/* eslint-disable */
// murmurhash2 via https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
function murmurhash2_32_gc(str) {
  var l = str.length,
      h = l ^ l,
      i = 0,
      k;

  while (l >= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    k ^= k >>> 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;
    l -= 4;
    ++i;
  }

  switch (l) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  }

  h ^= h >>> 13;
  h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  h ^= h >>> 15;
  return (h >>> 0).toString(36);
}

var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = memoize(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (process.env.NODE_ENV !== 'production') {
  var contentValuePattern = /(attr|calc|counters?|url)\(/;
  var contentValues = ['normal', 'none', 'counter', 'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;
  var msPattern = /^-ms-/;
  var hyphenPattern = /-(.)/g;
  var hyphenatedCache = {};

  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        console.error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }

    var processed = oldProcessStyleValue(key, value);

    if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function (str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }

    return processed;
  };
}

var shouldWarnAboutInterpolatingClassNameFromCss = true;

function handleInterpolation(mergedProps, registered, interpolation, couldBeSelectorInterpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if (process.env.NODE_ENV !== 'production' && interpolation.toString() === 'NO_COMPONENT_SELECTOR') {
      throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
    }

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if (process.env.NODE_ENV !== 'production' && interpolation.map !== undefined) {
            styles += interpolation.map;
          }

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result, couldBeSelectorInterpolation);
        } else if (process.env.NODE_ENV !== 'production') {
          console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }

        break;
      }

    case 'string':
      if (process.env.NODE_ENV !== 'production') {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function (match, p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
          return "${" + fakeVarName + "}";
        });

        if (matched.length) {
          console.error('`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\n' + 'Instead of doing this:\n\n' + [].concat(matched, ["`" + replaced + "`"]).join('\n') + '\n\nYou should wrap it with `css` like this:\n\n' + ("css`" + replaced + "`"));
        }
      }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];

  if (process.env.NODE_ENV !== 'production' && couldBeSelectorInterpolation && shouldWarnAboutInterpolatingClassNameFromCss && cached !== undefined) {
    console.error('Interpolating a className from css`` is not recommended and will cause problems with composition.\n' + 'Interpolating a className from css`` will be completely unsupported in a future major version of Emotion');
    shouldWarnAboutInterpolatingClassNameFromCss = false;
  }

  return cached !== undefined && !couldBeSelectorInterpolation ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i], false);
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && process.env.NODE_ENV !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value, false);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if (process.env.NODE_ENV !== 'production' && _key === 'undefined') {
                  console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                }

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
var sourceMapPattern;

if (process.env.NODE_ENV !== 'production') {
  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//;
} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings, false);
  } else {
    if (process.env.NODE_ENV !== 'production' && strings[0] === undefined) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i], styles.charCodeAt(styles.length - 1) === 46);

    if (stringMode) {
      if (process.env.NODE_ENV !== 'production' && strings[i] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }

      styles += strings[i];
    }
  }

  var sourceMap;

  if (process.env.NODE_ENV !== 'production') {
    styles = styles.replace(sourceMapPattern, function (match) {
      sourceMap = match;
      return '';
    });
  } // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = murmurhash2_32_gc(styles) + identifierName;

  if (process.env.NODE_ENV !== 'production') {
    // $FlowFixMe SerializedStyles type doesn't have toString property (and we don't want to add it)
    return {
      name: name,
      styles: styles,
      map: sourceMap,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
  }

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};

var testOmitPropsOnStringTag = index;

var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
  return key !== 'theme' && key !== 'innerRef';
};

var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
  return typeof tag === 'string' && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var ILLEGAL_ESCAPE_SEQUENCE_ERROR$1 = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var isBrowser$1 = typeof document !== 'undefined';

var createStyled = function createStyled(tag, options) {
  if (process.env.NODE_ENV !== 'production') {
    if (tag === undefined) {
      throw new Error('You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it.');
    }
  }

  var identifierName;
  var shouldForwardProp;
  var targetClassName;

  if (options !== undefined) {
    identifierName = options.label;
    targetClassName = options.target;
    shouldForwardProp = tag.__emotion_forwardProp && options.shouldForwardProp ? function (propName) {
      return tag.__emotion_forwardProp(propName) && // $FlowFixMe
      options.shouldForwardProp(propName);
    } : options.shouldForwardProp;
  }

  var isReal = tag.__emotion_real === tag;
  var baseTag = isReal && tag.__emotion_base || tag;

  if (typeof shouldForwardProp !== 'function' && isReal) {
    shouldForwardProp = tag.__emotion_forwardProp;
  }

  var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp('as');
  return function () {
    var args = arguments;
    var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];

    if (identifierName !== undefined) {
      styles.push("label:" + identifierName + ";");
    }

    if (args[0] == null || args[0].raw === undefined) {
      styles.push.apply(styles, args);
    } else {
      if (process.env.NODE_ENV !== 'production' && args[0][0] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR$1);
      }

      styles.push(args[0][0]);
      var len = args.length;
      var i = 1;

      for (; i < len; i++) {
        if (process.env.NODE_ENV !== 'production' && args[0][i] === undefined) {
          console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR$1);
        }

        styles.push(args[i], args[0][i]);
      }
    } // $FlowFixMe: we need to cast StatelessFunctionalComponent to our PrivateStyledComponent class


    var Styled = core.withEmotionCache(function (props, context, ref) {
      return React.createElement(core.ThemeContext.Consumer, null, function (theme) {
        var finalTag = shouldUseAs && props.as || baseTag;
        var className = '';
        var classInterpolations = [];
        var mergedProps = props;

        if (props.theme == null) {
          mergedProps = {};

          for (var key in props) {
            mergedProps[key] = props[key];
          }

          mergedProps.theme = theme;
        }

        if (typeof props.className === 'string') {
          className = getRegisteredStyles(context.registered, classInterpolations, props.className);
        } else if (props.className != null) {
          className = props.className + " ";
        }

        var serialized = serializeStyles(styles.concat(classInterpolations), context.registered, mergedProps);
        var rules = insertStyles(context, serialized, typeof finalTag === 'string');
        className += context.key + "-" + serialized.name;

        if (targetClassName !== undefined) {
          className += " " + targetClassName;
        }

        var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(finalTag) : defaultShouldForwardProp;
        var newProps = {};

        for (var _key in props) {
          if (shouldUseAs && _key === 'as') continue;

          if ( // $FlowFixMe
          finalShouldForwardProp(_key)) {
            newProps[_key] = props[_key];
          }
        }

        newProps.className = className;
        newProps.ref = ref || props.innerRef;

        if (process.env.NODE_ENV !== 'production' && props.innerRef) {
          console.error('`innerRef` is deprecated and will be removed in a future major version of Emotion, please use the `ref` prop instead' + (identifierName === undefined ? '' : " in the usage of `" + identifierName + "`"));
        }

        var ele = React.createElement(finalTag, newProps);

        if (!isBrowser$1 && rules !== undefined) {
          var _ref;

          var serializedNames = serialized.name;
          var next = serialized.next;

          while (next !== undefined) {
            serializedNames += ' ' + next.name;
            next = next.next;
          }

          return React.createElement(React.Fragment, null, React.createElement("style", (_ref = {}, _ref["data-emotion-" + context.key] = serializedNames, _ref.dangerouslySetInnerHTML = {
            __html: rules
          }, _ref.nonce = context.sheet.nonce, _ref)), ele);
        }

        return ele;
      });
    });
    Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles;
    Styled.__emotion_forwardProp = shouldForwardProp;
    Object.defineProperty(Styled, 'toString', {
      value: function value() {
        if (targetClassName === undefined && process.env.NODE_ENV !== 'production') {
          return 'NO_COMPONENT_SELECTOR';
        } // $FlowFixMe: coerce undefined to string


        return "." + targetClassName;
      }
    });

    Styled.withComponent = function (nextTag, nextOptions) {
      return createStyled(nextTag, nextOptions !== undefined ? _objectSpread({}, options || {}, {}, nextOptions) : options).apply(void 0, styles);
    };

    return Styled;
  };
};

var merge = function merge(a, b) {
  var result = objectAssign({}, a, b);

  for (var key in a) {
    var _assign;

    if (!a[key] || typeof b[key] !== 'object') continue;
    objectAssign(result, (_assign = {}, _assign[key] = objectAssign(a[key], b[key]), _assign));
  }

  return result;
}; // sort object-value responsive styles

var sort = function sort(obj) {
  var next = {};
  Object.keys(obj).sort(function (a, b) {
    return a.localeCompare(b, undefined, {
      numeric: true,
      sensitivity: 'base'
    });
  }).forEach(function (key) {
    next[key] = obj[key];
  });
  return next;
};

var defaults = {
  breakpoints: [40, 52, 64].map(function (n) {
    return n + 'em';
  })
};

var createMediaQuery = function createMediaQuery(n) {
  return "@media screen and (min-width: " + n + ")";
};

var getValue = function getValue(n, scale) {
  return get(scale, n, n);
};

var get = function get(obj, key, def, p, undef) {
  key = key && key.split ? key.split('.') : [key];

  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef;
  }

  return obj === undef ? def : obj;
};
var createParser = function createParser(config) {
  var cache = {};

  var parse = function parse(props) {
    var styles = {};
    var shouldSort = false;
    var isCacheDisabled = props.theme && props.theme.disableStyledSystemCache;

    for (var key in props) {
      if (!config[key]) continue;
      var sx = config[key];
      var raw = props[key];
      var scale = get(props.theme, sx.scale, sx.defaults);

      if (typeof raw === 'object') {
        cache.breakpoints = !isCacheDisabled && cache.breakpoints || get(props.theme, 'breakpoints', defaults.breakpoints);

        if (Array.isArray(raw)) {
          cache.media = !isCacheDisabled && cache.media || [null].concat(cache.breakpoints.map(createMediaQuery));
          styles = merge(styles, parseResponsiveStyle(cache.media, sx, scale, raw, props));
          continue;
        }

        if (raw !== null) {
          styles = merge(styles, parseResponsiveObject(cache.breakpoints, sx, scale, raw, props));
          shouldSort = true;
        }

        continue;
      }

      objectAssign(styles, sx(raw, scale, props));
    } // sort object-based responsive styles


    if (shouldSort) {
      styles = sort(styles);
    }

    return styles;
  };

  parse.config = config;
  parse.propNames = Object.keys(config);
  parse.cache = cache;
  var keys = Object.keys(config).filter(function (k) {
    return k !== 'config';
  });

  if (keys.length > 1) {
    keys.forEach(function (key) {
      var _createParser;

      parse[key] = createParser((_createParser = {}, _createParser[key] = config[key], _createParser));
    });
  }

  return parse;
};

var parseResponsiveStyle = function parseResponsiveStyle(mediaQueries, sx, scale, raw, _props) {
  var styles = {};
  raw.slice(0, mediaQueries.length).forEach(function (value, i) {
    var media = mediaQueries[i];
    var style = sx(value, scale, _props);

    if (!media) {
      objectAssign(styles, style);
    } else {
      var _assign2;

      objectAssign(styles, (_assign2 = {}, _assign2[media] = objectAssign({}, styles[media], style), _assign2));
    }
  });
  return styles;
};

var parseResponsiveObject = function parseResponsiveObject(breakpoints, sx, scale, raw, _props) {
  var styles = {};

  for (var key in raw) {
    var breakpoint = breakpoints[key];
    var value = raw[key];
    var style = sx(value, scale, _props);

    if (!breakpoint) {
      objectAssign(styles, style);
    } else {
      var _assign3;

      var media = createMediaQuery(breakpoint);
      objectAssign(styles, (_assign3 = {}, _assign3[media] = objectAssign({}, styles[media], style), _assign3));
    }
  }

  return styles;
};

var createStyleFunction = function createStyleFunction(_ref) {
  var properties = _ref.properties,
      property = _ref.property,
      scale = _ref.scale,
      _ref$transform = _ref.transform,
      transform = _ref$transform === void 0 ? getValue : _ref$transform,
      defaultScale = _ref.defaultScale;
  properties = properties || [property];

  var sx = function sx(value, scale, _props) {
    var result = {};
    var n = transform(value, scale, _props);
    if (n === null) return;
    properties.forEach(function (prop) {
      result[prop] = n;
    });
    return result;
  };

  sx.scale = scale;
  sx.defaults = defaultScale;
  return sx;
}; // new v5 API

var system = function system(args) {
  if (args === void 0) {
    args = {};
  }

  var config = {};
  Object.keys(args).forEach(function (key) {
    var conf = args[key];

    if (conf === true) {
      // shortcut definition
      config[key] = createStyleFunction({
        property: key,
        scale: key
      });
      return;
    }

    if (typeof conf === 'function') {
      config[key] = conf;
      return;
    }

    config[key] = createStyleFunction(conf);
  });
  var parser = createParser(config);
  return parser;
};
var compose = function compose() {
  var config = {};

  for (var _len = arguments.length, parsers = new Array(_len), _key = 0; _key < _len; _key++) {
    parsers[_key] = arguments[_key];
  }

  parsers.forEach(function (parser) {
    if (!parser || !parser.config) return;
    objectAssign(config, parser.config);
  });
  var parser = createParser(config);
  return parser;
};

var isNumber = function isNumber(n) {
  return typeof n === 'number' && !isNaN(n);
};

var getWidth = function getWidth(n, scale) {
  return get(scale, n, !isNumber(n) || n > 1 ? n : n * 100 + '%');
};

var config = {
  width: {
    property: 'width',
    scale: 'sizes',
    transform: getWidth
  },
  height: {
    property: 'height',
    scale: 'sizes'
  },
  minWidth: {
    property: 'minWidth',
    scale: 'sizes'
  },
  minHeight: {
    property: 'minHeight',
    scale: 'sizes'
  },
  maxWidth: {
    property: 'maxWidth',
    scale: 'sizes'
  },
  maxHeight: {
    property: 'maxHeight',
    scale: 'sizes'
  },
  size: {
    properties: ['width', 'height'],
    scale: 'sizes'
  },
  overflow: true,
  overflowX: true,
  overflowY: true,
  display: true,
  verticalAlign: true
};
var layout = system(config);

var config$1 = {
  color: {
    property: 'color',
    scale: 'colors'
  },
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'colors'
  },
  opacity: true
};
config$1.bg = config$1.backgroundColor;
var color = system(config$1);

var defaults$1 = {
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
};
var config$2 = {
  fontFamily: {
    property: 'fontFamily',
    scale: 'fonts'
  },
  fontSize: {
    property: 'fontSize',
    scale: 'fontSizes',
    defaultScale: defaults$1.fontSizes
  },
  fontWeight: {
    property: 'fontWeight',
    scale: 'fontWeights'
  },
  lineHeight: {
    property: 'lineHeight',
    scale: 'lineHeights'
  },
  letterSpacing: {
    property: 'letterSpacing',
    scale: 'letterSpacings'
  },
  textAlign: true,
  fontStyle: true
};
var typography = system(config$2);

var config$3 = {
  alignItems: true,
  alignContent: true,
  justifyItems: true,
  justifyContent: true,
  flexWrap: true,
  flexDirection: true,
  // item
  flex: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: true,
  justifySelf: true,
  alignSelf: true,
  order: true
};
var flexbox = system(config$3);

var defaults$2 = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
};
var config$4 = {
  gridGap: {
    property: 'gridGap',
    scale: 'space',
    defaultScale: defaults$2.space
  },
  gridColumnGap: {
    property: 'gridColumnGap',
    scale: 'space',
    defaultScale: defaults$2.space
  },
  gridRowGap: {
    property: 'gridRowGap',
    scale: 'space',
    defaultScale: defaults$2.space
  },
  gridColumn: true,
  gridRow: true,
  gridAutoFlow: true,
  gridAutoColumns: true,
  gridAutoRows: true,
  gridTemplateColumns: true,
  gridTemplateRows: true,
  gridTemplateAreas: true,
  gridArea: true
};
var grid = system(config$4);

var _config;
var config$5 = (_config = {
  border: {
    property: 'border',
    scale: 'borders'
  },
  borderWidth: {
    property: 'borderWidth',
    scale: 'borderWidths'
  },
  borderStyle: {
    property: 'borderStyle',
    scale: 'borderStyles'
  },
  borderColor: {
    property: 'borderColor',
    scale: 'colors'
  },
  borderRadius: {
    property: 'borderRadius',
    scale: 'radii'
  },
  borderTop: {
    property: 'borderTop',
    scale: 'borders'
  },
  borderTopLeftRadius: {
    property: 'borderTopLeftRadius',
    scale: 'radii'
  },
  borderTopRightRadius: {
    property: 'borderTopRightRadius',
    scale: 'radii'
  },
  borderRight: {
    property: 'borderRight',
    scale: 'borders'
  },
  borderBottom: {
    property: 'borderBottom',
    scale: 'borders'
  },
  borderBottomLeftRadius: {
    property: 'borderBottomLeftRadius',
    scale: 'radii'
  },
  borderBottomRightRadius: {
    property: 'borderBottomRightRadius',
    scale: 'radii'
  },
  borderLeft: {
    property: 'borderLeft',
    scale: 'borders'
  },
  borderX: {
    properties: ['borderLeft', 'borderRight'],
    scale: 'borders'
  },
  borderY: {
    properties: ['borderTop', 'borderBottom'],
    scale: 'borders'
  },
  borderTopWidth: {
    property: 'borderTopWidth',
    scale: 'borderWidths'
  },
  borderTopColor: {
    property: 'borderTopColor',
    scale: 'colors'
  },
  borderTopStyle: {
    property: 'borderTopStyle',
    scale: 'borderStyles'
  }
}, _config["borderTopLeftRadius"] = {
  property: 'borderTopLeftRadius',
  scale: 'radii'
}, _config["borderTopRightRadius"] = {
  property: 'borderTopRightRadius',
  scale: 'radii'
}, _config.borderBottomWidth = {
  property: 'borderBottomWidth',
  scale: 'borderWidths'
}, _config.borderBottomColor = {
  property: 'borderBottomColor',
  scale: 'colors'
}, _config.borderBottomStyle = {
  property: 'borderBottomStyle',
  scale: 'borderStyles'
}, _config["borderBottomLeftRadius"] = {
  property: 'borderBottomLeftRadius',
  scale: 'radii'
}, _config["borderBottomRightRadius"] = {
  property: 'borderBottomRightRadius',
  scale: 'radii'
}, _config.borderLeftWidth = {
  property: 'borderLeftWidth',
  scale: 'borderWidths'
}, _config.borderLeftColor = {
  property: 'borderLeftColor',
  scale: 'colors'
}, _config.borderLeftStyle = {
  property: 'borderLeftStyle',
  scale: 'borderStyles'
}, _config.borderRightWidth = {
  property: 'borderRightWidth',
  scale: 'borderWidths'
}, _config.borderRightColor = {
  property: 'borderRightColor',
  scale: 'colors'
}, _config.borderRightStyle = {
  property: 'borderRightStyle',
  scale: 'borderStyles'
}, _config);
var border = system(config$5);

var config$6 = {
  background: true,
  backgroundImage: true,
  backgroundSize: true,
  backgroundPosition: true,
  backgroundRepeat: true
};
config$6.bgImage = config$6.backgroundImage;
config$6.bgSize = config$6.backgroundSize;
config$6.bgPosition = config$6.backgroundPosition;
config$6.bgRepeat = config$6.backgroundRepeat;
var background = system(config$6);

var defaults$3 = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
};
var config$7 = {
  position: true,
  zIndex: {
    property: 'zIndex',
    scale: 'zIndices'
  },
  top: {
    property: 'top',
    scale: 'space',
    defaultScale: defaults$3.space
  },
  right: {
    property: 'right',
    scale: 'space',
    defaultScale: defaults$3.space
  },
  bottom: {
    property: 'bottom',
    scale: 'space',
    defaultScale: defaults$3.space
  },
  left: {
    property: 'left',
    scale: 'space',
    defaultScale: defaults$3.space
  }
};
var position = system(config$7);

var defaults$4 = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
};

var isNumber$1 = function isNumber(n) {
  return typeof n === 'number' && !isNaN(n);
};

var getMargin = function getMargin(n, scale) {
  if (!isNumber$1(n)) {
    return get(scale, n, n);
  }

  var isNegative = n < 0;
  var absolute = Math.abs(n);
  var value = get(scale, absolute, absolute);

  if (!isNumber$1(value)) {
    return isNegative ? '-' + value : value;
  }

  return value * (isNegative ? -1 : 1);
};

var configs = {};
configs.margin = {
  margin: {
    property: 'margin',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$4.space
  },
  marginTop: {
    property: 'marginTop',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$4.space
  },
  marginRight: {
    property: 'marginRight',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$4.space
  },
  marginBottom: {
    property: 'marginBottom',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$4.space
  },
  marginLeft: {
    property: 'marginLeft',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$4.space
  },
  marginX: {
    properties: ['marginLeft', 'marginRight'],
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$4.space
  },
  marginY: {
    properties: ['marginTop', 'marginBottom'],
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$4.space
  }
};
configs.margin.m = configs.margin.margin;
configs.margin.mt = configs.margin.marginTop;
configs.margin.mr = configs.margin.marginRight;
configs.margin.mb = configs.margin.marginBottom;
configs.margin.ml = configs.margin.marginLeft;
configs.margin.mx = configs.margin.marginX;
configs.margin.my = configs.margin.marginY;
configs.padding = {
  padding: {
    property: 'padding',
    scale: 'space',
    defaultScale: defaults$4.space
  },
  paddingTop: {
    property: 'paddingTop',
    scale: 'space',
    defaultScale: defaults$4.space
  },
  paddingRight: {
    property: 'paddingRight',
    scale: 'space',
    defaultScale: defaults$4.space
  },
  paddingBottom: {
    property: 'paddingBottom',
    scale: 'space',
    defaultScale: defaults$4.space
  },
  paddingLeft: {
    property: 'paddingLeft',
    scale: 'space',
    defaultScale: defaults$4.space
  },
  paddingX: {
    properties: ['paddingLeft', 'paddingRight'],
    scale: 'space',
    defaultScale: defaults$4.space
  },
  paddingY: {
    properties: ['paddingTop', 'paddingBottom'],
    scale: 'space',
    defaultScale: defaults$4.space
  }
};
configs.padding.p = configs.padding.padding;
configs.padding.pt = configs.padding.paddingTop;
configs.padding.pr = configs.padding.paddingRight;
configs.padding.pb = configs.padding.paddingBottom;
configs.padding.pl = configs.padding.paddingLeft;
configs.padding.px = configs.padding.paddingX;
configs.padding.py = configs.padding.paddingY;
var margin = system(configs.margin);
var padding = system(configs.padding);
var space = compose(margin, padding);

var shadow = system({
  boxShadow: {
    property: 'boxShadow',
    scale: 'shadows'
  },
  textShadow: {
    property: 'textShadow',
    scale: 'shadows'
  }
});

var _scales;

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

// based on https://github.com/developit/dlv
var get$1 = function get(obj, key, def, p, undef) {
  key = key && key.split ? key.split('.') : [key];

  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef;
  }

  return obj === undef ? def : obj;
};
var defaultBreakpoints = [40, 52, 64].map(function (n) {
  return n + 'em';
});
var defaultTheme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
};
var aliases = {
  bg: 'backgroundColor',
  m: 'margin',
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mx: 'marginX',
  my: 'marginY',
  p: 'padding',
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  px: 'paddingX',
  py: 'paddingY'
};
var multiples = {
  marginX: ['marginLeft', 'marginRight'],
  marginY: ['marginTop', 'marginBottom'],
  paddingX: ['paddingLeft', 'paddingRight'],
  paddingY: ['paddingTop', 'paddingBottom'],
  size: ['width', 'height']
};
var scales = (_scales = {
  color: 'colors',
  backgroundColor: 'colors',
  borderColor: 'colors',
  margin: 'space',
  marginTop: 'space',
  marginRight: 'space',
  marginBottom: 'space',
  marginLeft: 'space',
  marginX: 'space',
  marginY: 'space',
  padding: 'space',
  paddingTop: 'space',
  paddingRight: 'space',
  paddingBottom: 'space',
  paddingLeft: 'space',
  paddingX: 'space',
  paddingY: 'space',
  top: 'space',
  right: 'space',
  bottom: 'space',
  left: 'space',
  gridGap: 'space',
  gridColumnGap: 'space',
  gridRowGap: 'space',
  gap: 'space',
  columnGap: 'space',
  rowGap: 'space',
  fontFamily: 'fonts',
  fontSize: 'fontSizes',
  fontWeight: 'fontWeights',
  lineHeight: 'lineHeights',
  letterSpacing: 'letterSpacings',
  border: 'borders',
  borderTop: 'borders',
  borderRight: 'borders',
  borderBottom: 'borders',
  borderLeft: 'borders',
  borderWidth: 'borderWidths',
  borderStyle: 'borderStyles',
  borderRadius: 'radii',
  borderTopRightRadius: 'radii',
  borderTopLeftRadius: 'radii',
  borderBottomRightRadius: 'radii',
  borderBottomLeftRadius: 'radii',
  borderTopWidth: 'borderWidths',
  borderTopColor: 'colors',
  borderTopStyle: 'borderStyles'
}, _scales["borderTopLeftRadius"] = 'radii', _scales["borderTopRightRadius"] = 'radii', _scales.borderBottomWidth = 'borderWidths', _scales.borderBottomColor = 'colors', _scales.borderBottomStyle = 'borderStyles', _scales["borderBottomLeftRadius"] = 'radii', _scales["borderBottomRightRadius"] = 'radii', _scales.borderLeftWidth = 'borderWidths', _scales.borderLeftColor = 'colors', _scales.borderLeftStyle = 'borderStyles', _scales.borderRightWidth = 'borderWidths', _scales.borderRightColor = 'colors', _scales.borderRightStyle = 'borderStyles', _scales.boxShadow = 'shadows', _scales.textShadow = 'shadows', _scales.zIndex = 'zIndices', _scales.width = 'sizes', _scales.minWidth = 'sizes', _scales.maxWidth = 'sizes', _scales.height = 'sizes', _scales.minHeight = 'sizes', _scales.maxHeight = 'sizes', _scales.flexBasis = 'sizes', _scales.size = 'sizes', _scales.fill = 'colors', _scales.stroke = 'colors', _scales);

var positiveOrNegative = function positiveOrNegative(scale, value) {
  if (typeof value !== 'number' || value >= 0) {
    return get$1(scale, value, value);
  }

  var absolute = Math.abs(value);
  var n = get$1(scale, absolute, absolute);
  if (typeof n === 'string') return '-' + n;
  return n * -1;
};

var transforms = ['margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'top', 'bottom', 'left', 'right'].reduce(function (acc, curr) {
  var _extends2;

  return _extends$3({}, acc, (_extends2 = {}, _extends2[curr] = positiveOrNegative, _extends2));
}, {});
var responsive = function responsive(styles) {
  return function (theme) {
    var next = {};
    var breakpoints = get$1(theme, 'breakpoints', defaultBreakpoints);
    var mediaQueries = [null].concat(breakpoints.map(function (n) {
      return "@media screen and (min-width: " + n + ")";
    }));

    for (var key in styles) {
      var value = typeof styles[key] === 'function' ? styles[key](theme) : styles[key];
      if (value == null) continue;

      if (!Array.isArray(value)) {
        next[key] = value;
        continue;
      }

      for (var i = 0; i < value.slice(0, mediaQueries.length).length; i++) {
        var media = mediaQueries[i];
        if (value[i] == null) continue;

        if (!media) {
          next[key] = value[i];
          continue;
        }

        next[media] = next[media] || {};
        next[media][key] = value[i];
      }
    }

    return next;
  };
};
var css = function css(args) {
  return function (props) {
    if (props === void 0) {
      props = {};
    }

    var theme = _extends$3({}, defaultTheme, {}, props.theme || props);

    var result = {};
    var obj = typeof args === 'function' ? args(theme) : args;
    var styles = responsive(obj)(theme);

    for (var key in styles) {
      var x = styles[key];
      var val = typeof x === 'function' ? x(theme) : x;

      if (key === 'variant') {
        var variant = css(get$1(theme, val))(theme);
        result = _extends$3({}, result, {}, variant);
        continue;
      }

      if (val && typeof val === 'object') {
        result[key] = css(val)(theme);
        continue;
      }

      var prop = get$1(aliases, key, key);
      var scaleName = get$1(scales, prop);
      var scale = get$1(theme, scaleName, get$1(theme, prop, {}));
      var transform = get$1(transforms, prop, get$1);
      var value = transform(scale, val, val);

      if (multiples[prop]) {
        var dirs = multiples[prop];

        for (var i = 0; i < dirs.length; i++) {
          result[dirs[i]] = value;
        }
      } else {
        result[prop] = value;
      }
    }

    return result;
  };
};

var variant = function variant(_ref) {
  var _config;

  var scale = _ref.scale,
      _ref$prop = _ref.prop,
      prop = _ref$prop === void 0 ? 'variant' : _ref$prop,
      _ref$variants = _ref.variants,
      variants = _ref$variants === void 0 ? {} : _ref$variants,
      key = _ref.key;
  var sx;

  if (Object.keys(variants).length) {
    sx = function sx(value, scale, props) {
      return css(get(scale, value, null))(props.theme);
    };
  } else {
    sx = function sx(value, scale) {
      return get(scale, value, null);
    };
  }

  sx.scale = scale || key;
  sx.defaults = variants;
  var config = (_config = {}, _config[prop] = sx, _config);
  var parser = createParser(config);
  return parser;
};
var buttonStyle = variant({
  key: 'buttons'
});
var textStyle = variant({
  key: 'textStyles',
  prop: 'textStyle'
});
var colorStyle = variant({
  key: 'colorStyles',
  prop: 'colors'
});

var width = layout.width,
    height = layout.height,
    minWidth = layout.minWidth,
    minHeight = layout.minHeight,
    maxWidth = layout.maxWidth,
    maxHeight = layout.maxHeight,
    verticalAlign = layout.verticalAlign,
    display = layout.display,
    overflow = layout.overflow,
    overflowX = layout.overflowX,
    overflowY = layout.overflowY;

var all = compose(space, typography, color, layout, flexbox, border, background, position, grid, shadow, buttonStyle, textStyle, colorStyle);
var props = all.propNames;
var createShouldForwardProp = function createShouldForwardProp(props) {
  var regex = new RegExp("^(" + props.join('|') + ")$");
  return memoize(function (prop) {
    return index(prop) && !regex.test(prop);
  });
};
var shouldForwardProp = createShouldForwardProp(props);

const COMMON = compose(display, space, color);
const BORDER = compose(border, shadow);
const LAYOUT = compose(width, height, minWidth, minHeight, maxWidth, maxHeight, verticalAlign, overflow, overflowX, overflowY);
const TYPOGRAPHY = typography;
const POSITION = position;
const FLEX = flexbox;
const GRID = grid;

const Box =
/*#__PURE__*/
createStyled("div", {
  shouldForwardProp,
  target: "ed73l3l0",
  label: "Box"
})(compose(COMMON, BORDER, TYPOGRAPHY, LAYOUT, POSITION, FLEX, GRID), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJveC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjWSIsImZpbGUiOiJCb3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCBzaG91bGRGb3J3YXJkUHJvcCBmcm9tIFwiQHN0eWxlZC1zeXN0ZW0vc2hvdWxkLWZvcndhcmQtcHJvcFwiO1xuaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gXCJzdHlsZWQtc3lzdGVtXCI7XG5cbmltcG9ydCB7XG4gIENPTU1PTixcbiAgQk9SREVSLFxuICBUWVBPR1JBUEhZLFxuICBMQVlPVVQsXG4gIFBPU0lUSU9OLFxuICBGTEVYLFxuICBHUklEXG59IGZyb20gXCIuLi8uLi9zeXN0ZW1Qcm9wc1wiO1xuXG5jb25zdCBCb3ggPSBzdHlsZWQoXCJkaXZcIiwgeyBzaG91bGRGb3J3YXJkUHJvcCB9KShcbiAgY29tcG9zZShcbiAgICBDT01NT04sXG4gICAgQk9SREVSLFxuICAgIFRZUE9HUkFQSFksXG4gICAgTEFZT1VULFxuICAgIFBPU0lUSU9OLFxuICAgIEZMRVgsXG4gICAgR1JJRFxuICApXG4pO1xuXG5Cb3guZGVmYXVsdFByb3BzID0ge1xuICBcImRhdGEtcGxheWdyb3VuZC1pZFwiOiBcImJveFwiXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCb3g7XG4iXX0= */");

Box.defaultProps = {
  "data-playground-id": "box"
};

function css$1() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return serializeStyles(args);
}

var Icon = createCommonjsModule(function (module) {
module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n});},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t){e.exports=propTypes;},function(e,t){e.exports=React__default;},function(e,t,r){r.r(t);var n=r(1),o=r(0),l=function(){return (l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},i=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&(r[n[o]]=e[n[o]]);}return r},a=0,s=n.forwardRef(function(e,t){var r=e.title,o=void 0===r?null:r,s=e.description,c=void 0===s?null:s,u=e.size,p=void 0===u?null:u,f=e.color,d=void 0===f?null:f,y=e.horizontal,v=void 0===y?null:y,b=e.vertical,m=void 0===b?null:b,h=e.rotate,g=void 0===h?null:h,O=e.spin,w=void 0===O?null:O,z=e.style,j=void 0===z?{}:z,E=e.children,P=i(e,["title","description","size","color","horizontal","vertical","rotate","spin","style","children"]);a++;var S,x=null!==w&&w,_=n.Children.map(E,function(e){var t=e;!0!==x&&(x=!0===(null===w?t.props.spin:w));var r=t.props.size;"number"==typeof p&&"number"==typeof t.props.size&&(r=t.props.size/p);var o={size:r,color:null===d?t.props.color:d,horizontal:null===v?t.props.horizontal:v,vertical:null===m?t.props.vertical:m,rotate:null===g?t.props.rotate:g,spin:null===w?t.props.spin:w,inStack:!0};return n.cloneElement(t,o)});null!==p&&(j.width="string"==typeof p?p:1.5*p+"rem");var k,T="stack_labelledby_"+a,q="stack_describedby_"+a;if(o)S=c?T+" "+q:T;else if(k="presentation",c)throw new Error("title attribute required when description is set");return n.createElement("svg",l({ref:t,viewBox:"0 0 24 24",style:j,role:k,"aria-labelledby":S},P),o&&n.createElement("title",{id:T},o),c&&n.createElement("desc",{id:q},c),x&&n.createElement("style",null,"@keyframes spin { to { transform: rotate(360deg) } }","@keyframes spin-inverse { to { transform: rotate(-360deg) } }"),_)});s.displayName="Stack",s.propTypes={size:o.oneOfType([o.number,o.string]),color:o.string,horizontal:o.bool,vertical:o.bool,rotate:o.number,spin:o.oneOfType([o.bool,o.number]),children:o.oneOfType([o.arrayOf(o.node),o.node]).isRequired,className:o.string,style:o.object},s.defaultProps={size:null,color:null,horizontal:null,vertical:null,rotate:null,spin:null};var c=s;r.d(t,"Icon",function(){return d}),r.d(t,"Stack",function(){return c});var u=function(){return (u=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},p=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&(r[n[o]]=e[n[o]]);}return r},f=0,d=n.forwardRef(function(e,t){var r=e.path,o=e.title,l=void 0===o?null:o,i=e.description,a=void 0===i?null:i,s=e.size,c=void 0===s?null:s,d=e.color,y=void 0===d?null:d,v=e.horizontal,b=void 0!==v&&v,m=e.vertical,h=void 0!==m&&m,g=e.rotate,O=void 0===g?0:g,w=e.spin,z=void 0!==w&&w,j=e.style,E=void 0===j?{}:j,P=e.inStack,S=void 0!==P&&P,x=p(e,["path","title","description","size","color","horizontal","vertical","rotate","spin","style","inStack"]);f++;var _={},k=[];null!==c&&(S?k.push("scale("+c+")"):(E.width="string"==typeof c?c:1.5*c+"rem",E.height=E.width)),b&&k.push("scaleX(-1)"),h&&k.push("scaleY(-1)"),0!==O&&k.push("rotate("+O+"deg)"),null!==y&&(_.fill=y);var T=n.createElement("path",u({d:r,style:_},S?x:{})),q=T;k.length>0&&(E.transform=k.join(" "),E.transformOrigin="center",S&&(q=n.createElement("g",{style:E},T,n.createElement("rect",{width:"24",height:"24",fill:"transparent"}))));var M,N=q,R=!0===z||"number"!=typeof z?2:z,B=!S&&(b||h);if(R<0&&(B=!B),z&&(N=n.createElement("g",{style:{animation:"spin"+(B?"-inverse":"")+" linear "+Math.abs(R)+"s infinite",transformOrigin:"center"}},q,!(b||h||0!==O)&&n.createElement("rect",{width:"24",height:"24",fill:"transparent"}))),S)return N;var I,C="icon_labelledby_"+f,X="icon_describedby_"+f;if(l)M=a?C+" "+X:C;else if(I="presentation",a)throw new Error("title attribute required when description is set");return n.createElement("svg",u({ref:t,viewBox:"0 0 24 24",style:E,role:I,"aria-labelledby":M},x),l&&n.createElement("title",{id:C},l),a&&n.createElement("desc",{id:X},a),!S&&z&&(B?n.createElement("style",null,"@keyframes spin-inverse { to { transform: rotate(-360deg) } }"):n.createElement("style",null,"@keyframes spin { to { transform: rotate(360deg) } }")),N)});d.displayName="Icon",d.propTypes={path:o.string.isRequired,size:o.oneOfType([o.number,o.string]),color:o.string,horizontal:o.bool,vertical:o.bool,rotate:o.number,spin:o.oneOfType([o.bool,o.number]),style:o.object,inStack:o.bool,className:o.string},d.defaultProps={size:null,color:null,horizontal:!1,vertical:!1,rotate:0,spin:!1};t.default=d;}]);

});

unwrapExports(Icon);
var Icon_1 = Icon.Icon;

const Icon$1 = ({
  color,
  label,
  size,
  symbol,
  ...rest
}) => core.jsx(Box, _extends({
  "data-playground-id": "icon",
  width: size,
  height: size,
  color: color
}, rest), core.jsx(VisuallyHidden, null, label), core.jsx(Icon_1, {
  path: symbol,
  size: null,
  css:
  /*#__PURE__*/
  css$1({
    width: size,
    height: size,
    verticalAlign: 'top',
    color: 'inherit',
    fill: 'currentColor'
  }, ";label:Icon;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkljb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JNIiwiZmlsZSI6Ikljb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFZpc3VhbGx5SGlkZGVuIGZyb20gJ0ByZWFjaC92aXN1YWxseS1oaWRkZW4nO1xuaW1wb3J0ICogYXMgTWF0ZXJpYWxJY29uIGZyb20gJ0BtZGkvcmVhY3QnO1xuXG5pbXBvcnQgeyBCb3ggfSBmcm9tICcuLi8uLi9ib3gnO1xuXG5jb25zdCBJY29uID0gKHsgY29sb3IsIGxhYmVsLCBzaXplLCBzeW1ib2wsIC4uLnJlc3QgfSkgPT4gKFxuICA8Qm94XG4gICAgZGF0YS1wbGF5Z3JvdW5kLWlkPVwiaWNvblwiXG4gICAgd2lkdGg9e3NpemV9XG4gICAgaGVpZ2h0PXtzaXplfVxuICAgIGNvbG9yPXtjb2xvcn1cbiAgICB7Li4ucmVzdH1cbiAgPlxuICAgIDxWaXN1YWxseUhpZGRlbj57bGFiZWx9PC9WaXN1YWxseUhpZGRlbj5cbiAgICA8TWF0ZXJpYWxJY29uLkljb25cbiAgICAgIHBhdGg9e3N5bWJvbH1cbiAgICAgIHNpemU9e251bGx9XG4gICAgICBjc3M9e3tcbiAgICAgICAgd2lkdGg6IHNpemUsXG4gICAgICAgIGhlaWdodDogc2l6ZSxcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICAgIGNvbG9yOiAnaW5oZXJpdCcsXG4gICAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAgICAgfX1cbiAgICAvPlxuICA8L0JveD5cbik7XG5cbkljb24uZGVmYXVsdFByb3BzID0ge1xuICBjb2xvcjogJ2JsYWNrJyxcbiAgc2l6ZTogMjQsXG4gIHN5bWJvbDogJycsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJY29uO1xuIl19 */"))
}));

Icon$1.defaultProps = {
  color: 'black',
  size: 24,
  symbol: ''
};

const Heading =
/*#__PURE__*/
createStyled('h2', {
  shouldForwardProp,
  target: "e1dlewvr0",
  label: "Heading"
})(variant({
  prop: 'size',
  scale: 'headings'
}), compose(COMMON, BORDER, TYPOGRAPHY, LAYOUT, POSITION, FLEX, GRID), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhlYWRpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY2dCIiwiZmlsZSI6IkhlYWRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgc2hvdWxkRm9yd2FyZFByb3AgZnJvbSAnQHN0eWxlZC1zeXN0ZW0vc2hvdWxkLWZvcndhcmQtcHJvcCc7XG5pbXBvcnQgeyBjb21wb3NlLCB2YXJpYW50IH0gZnJvbSAnc3R5bGVkLXN5c3RlbSc7XG5cbmltcG9ydCB7XG4gIENPTU1PTixcbiAgQk9SREVSLFxuICBUWVBPR1JBUEhZLFxuICBMQVlPVVQsXG4gIFBPU0lUSU9OLFxuICBGTEVYLFxuICBHUklELFxufSBmcm9tICcuLi8uLi9zeXN0ZW1Qcm9wcyc7XG5cbmNvbnN0IEhlYWRpbmcgPSBzdHlsZWQoJ2gyJywgeyBzaG91bGRGb3J3YXJkUHJvcCB9KShcbiAgdmFyaWFudCh7XG4gICAgcHJvcDogJ3NpemUnLFxuICAgIHNjYWxlOiAnaGVhZGluZ3MnLFxuICB9KSxcbiAgY29tcG9zZShcbiAgICBDT01NT04sXG4gICAgQk9SREVSLFxuICAgIFRZUE9HUkFQSFksXG4gICAgTEFZT1VULFxuICAgIFBPU0lUSU9OLFxuICAgIEZMRVgsXG4gICAgR1JJRFxuICApXG4pO1xuXG5IZWFkaW5nLmRlZmF1bHRQcm9wcyA9IHtcbiAgJ2RhdGEtcGxheWdyb3VuZC1pZCc6ICd0eXBvZ3JhcGh5LmhlYWRpbmcnLFxuICBtdDogMCxcbiAgbWI6IDAsXG4gIHNpemU6IDUwMCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRpbmc7XG4iXX0= */");

Heading.defaultProps = {
  'data-playground-id': 'typography.heading',
  mt: 0,
  mb: 0,
  size: 500
};

const Paragraph =
/*#__PURE__*/
createStyled('p', {
  shouldForwardProp,
  target: "eixy1pb0",
  label: "Paragraph"
})(variant({
  prop: 'size',
  scale: 'paragraph'
}), compose(COMMON, BORDER, TYPOGRAPHY, LAYOUT, POSITION, FLEX, GRID), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBhcmFncmFwaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFja0IiLCJmaWxlIjoiUGFyYWdyYXBoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHNob3VsZEZvcndhcmRQcm9wIGZyb20gJ0BzdHlsZWQtc3lzdGVtL3Nob3VsZC1mb3J3YXJkLXByb3AnO1xuaW1wb3J0IHsgY29tcG9zZSwgdmFyaWFudCB9IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xuXG5pbXBvcnQge1xuICBDT01NT04sXG4gIEJPUkRFUixcbiAgVFlQT0dSQVBIWSxcbiAgTEFZT1VULFxuICBQT1NJVElPTixcbiAgRkxFWCxcbiAgR1JJRCxcbn0gZnJvbSAnLi4vLi4vc3lzdGVtUHJvcHMnO1xuXG5jb25zdCBQYXJhZ3JhcGggPSBzdHlsZWQoJ3AnLCB7IHNob3VsZEZvcndhcmRQcm9wIH0pKFxuICB2YXJpYW50KHtcbiAgICBwcm9wOiAnc2l6ZScsXG4gICAgc2NhbGU6ICdwYXJhZ3JhcGgnLFxuICB9KSxcbiAgY29tcG9zZShcbiAgICBDT01NT04sXG4gICAgQk9SREVSLFxuICAgIFRZUE9HUkFQSFksXG4gICAgTEFZT1VULFxuICAgIFBPU0lUSU9OLFxuICAgIEZMRVgsXG4gICAgR1JJRFxuICApXG4pO1xuXG5QYXJhZ3JhcGguZGVmYXVsdFByb3BzID0ge1xuICAnZGF0YS1wbGF5Z3JvdW5kLWlkJzogJ3R5cG9ncmFwaHkucGFyYWdyYXBoJyxcbiAgbXQ6IDAsXG4gIG1iOiAwLFxuICBzaXplOiA0MDAsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYXJhZ3JhcGg7XG4iXX0= */");

Paragraph.defaultProps = {
  'data-playground-id': 'typography.paragraph',
  mt: 0,
  mb: 0,
  size: 400
};

const Text =
/*#__PURE__*/
createStyled('span', {
  shouldForwardProp,
  target: "epe06yx0",
  label: "Text"
})(variant({
  prop: 'size',
  scale: 'text'
}), compose(COMMON, BORDER, TYPOGRAPHY, LAYOUT, POSITION, FLEX, GRID), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRleHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY2EiLCJmaWxlIjoiVGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCBzaG91bGRGb3J3YXJkUHJvcCBmcm9tICdAc3R5bGVkLXN5c3RlbS9zaG91bGQtZm9yd2FyZC1wcm9wJztcbmltcG9ydCB7IGNvbXBvc2UsIHZhcmlhbnQgfSBmcm9tICdzdHlsZWQtc3lzdGVtJztcblxuaW1wb3J0IHtcbiAgQ09NTU9OLFxuICBCT1JERVIsXG4gIFRZUE9HUkFQSFksXG4gIExBWU9VVCxcbiAgUE9TSVRJT04sXG4gIEZMRVgsXG4gIEdSSUQsXG59IGZyb20gJy4uLy4uL3N5c3RlbVByb3BzJztcblxuY29uc3QgVGV4dCA9IHN0eWxlZCgnc3BhbicsIHsgc2hvdWxkRm9yd2FyZFByb3AgfSkoXG4gIHZhcmlhbnQoe1xuICAgIHByb3A6ICdzaXplJyxcbiAgICBzY2FsZTogJ3RleHQnLFxuICB9KSxcbiAgY29tcG9zZShcbiAgICBDT01NT04sXG4gICAgQk9SREVSLFxuICAgIFRZUE9HUkFQSFksXG4gICAgTEFZT1VULFxuICAgIFBPU0lUSU9OLFxuICAgIEZMRVgsXG4gICAgR1JJRFxuICApXG4pO1xuXG5UZXh0LmRlZmF1bHRQcm9wcyA9IHtcbiAgJ2RhdGEtcGxheWdyb3VuZC1pZCc6ICd0eXBvZ3JhcGh5LnRleHQnLFxuICBtdDogMCxcbiAgbWI6IDAsXG4gIHNpemU6IDQwMCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRleHQ7XG4iXX0= */");

Text.defaultProps = {
  'data-playground-id': 'typography.text',
  mt: 0,
  mb: 0,
  size: 400
};

function _extends$4() {
  _extends$4 = Object.assign || function (target) {
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

  return _extends$4.apply(this, arguments);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

// based on https://github.com/styled-components/styled-components/blob/fcf6f3804c57a14dd7984dfab7bc06ee2edca044/src/utils/error.js

/**
 * Parse errors.md and turn it into a simple hash of code: message
 * @private
 */
var ERRORS = {
  "1": "Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).\n\n",
  "2": "Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).\n\n",
  "3": "Passed an incorrect argument to a color function, please pass a string representation of a color.\n\n",
  "4": "Couldn't generate valid rgb string from %s, it returned %s.\n\n",
  "5": "Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.\n\n",
  "6": "Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).\n\n",
  "7": "Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).\n\n",
  "8": "Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.\n\n",
  "9": "Please provide a number of steps to the modularScale helper.\n\n",
  "10": "Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",
  "11": "Invalid value passed as base to modularScale, expected number or em string but got \"%s\"\n\n",
  "12": "Expected a string ending in \"px\" or a number passed as the first argument to %s(), got \"%s\" instead.\n\n",
  "13": "Expected a string ending in \"px\" or a number passed as the second argument to %s(), got \"%s\" instead.\n\n",
  "14": "Passed invalid pixel value (\"%s\") to %s(), please pass a value like \"12px\" or 12.\n\n",
  "15": "Passed invalid base value (\"%s\") to %s(), please pass a value like \"12px\" or 12.\n\n",
  "16": "You must provide a template to this method.\n\n",
  "17": "You passed an unsupported selector state to this method.\n\n",
  "18": "minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",
  "19": "fromSize and toSize must be provided as stringified numbers with the same units.\n\n",
  "20": "expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",
  "21": "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  "22": "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  "23": "fontFace expects a name of a font-family.\n\n",
  "24": "fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",
  "25": "fontFace expects localFonts to be an array.\n\n",
  "26": "fontFace expects fileFormats to be an array.\n\n",
  "27": "radialGradient requries at least 2 color-stops to properly render.\n\n",
  "28": "Please supply a filename to retinaImage() as the first argument.\n\n",
  "29": "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
  "30": "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  "31": "The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation\n\n",
  "32": "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')\n\n",
  "33": "The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation\n\n",
  "34": "borderRadius expects a radius value as a string or number as the second argument.\n\n",
  "35": "borderRadius expects one of \"top\", \"bottom\", \"left\" or \"right\" as the first argument.\n\n",
  "36": "Property must be a string value.\n\n",
  "37": "Syntax Error at %s.\n\n",
  "38": "Formula contains a function that needs parentheses at %s.\n\n",
  "39": "Formula is missing closing parenthesis at %s.\n\n",
  "40": "Formula has too many closing parentheses at %s.\n\n",
  "41": "All values in a formula must have the same unit or be unitless.\n\n",
  "42": "Please provide a number of steps to the modularScale helper.\n\n",
  "43": "Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",
  "44": "Invalid value passed as base to modularScale, expected number or em/rem string but got %s.\n\n",
  "45": "Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.\n\n",
  "46": "Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.\n\n",
  "47": "minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",
  "48": "fromSize and toSize must be provided as stringified numbers with the same units.\n\n",
  "49": "Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",
  "50": "Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.\n\n",
  "51": "Expects the first argument object to have the properties prop, fromSize, and toSize.\n\n",
  "52": "fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",
  "53": "fontFace expects localFonts to be an array.\n\n",
  "54": "fontFace expects fileFormats to be an array.\n\n",
  "55": "fontFace expects a name of a font-family.\n\n",
  "56": "linearGradient requries at least 2 color-stops to properly render.\n\n",
  "57": "radialGradient requries at least 2 color-stops to properly render.\n\n",
  "58": "Please supply a filename to retinaImage() as the first argument.\n\n",
  "59": "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
  "60": "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  "61": "Property must be a string value.\n\n",
  "62": "borderRadius expects a radius value as a string or number as the second argument.\n\n",
  "63": "borderRadius expects one of \"top\", \"bottom\", \"left\" or \"right\" as the first argument.\n\n",
  "64": "The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.\n\n",
  "65": "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').\n\n",
  "66": "The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.\n\n",
  "67": "You must provide a template to this method.\n\n",
  "68": "You passed an unsupported selector state to this method.\n\n",
  "69": "Expected a string ending in \"px\" or a number passed as the first argument to %s(), got %s instead.\n\n",
  "70": "Expected a string ending in \"px\" or a number passed as the second argument to %s(), got %s instead.\n\n",
  "71": "Passed invalid pixel value %s to %s(), please pass a value like \"12px\" or 12.\n\n",
  "72": "Passed invalid base value %s to %s(), please pass a value like \"12px\" or 12.\n"
};
/**
 * super basic version of sprintf
 * @private
 */

function format() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var a = args[0];
  var b = [];
  var c;

  for (c = 1; c < args.length; c += 1) {
    b.push(args[c]);
  }

  b.forEach(function (d) {
    a = a.replace(/%[a-z]/, d);
  });
  return a;
}
/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 * @private
 */


var PolishedError =
/*#__PURE__*/
function (_Error) {
  _inheritsLoose(PolishedError, _Error);

  function PolishedError(code) {
    var _this;

    if (process.env.NODE_ENV === 'production') {
      _this = _Error.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/master/src/internalHelpers/errors.md#" + code + " for more information.") || this;
    } else {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      _this = _Error.call(this, format.apply(void 0, [ERRORS[code]].concat(args))) || this;
    }

    return _assertThisInitialized(_this);
  }

  return PolishedError;
}(
/*#__PURE__*/
_wrapNativeSuper(Error));

function hideVisually() {
  return {
    border: '0',
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: '0',
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: '1px'
  };
}

function colorToInt(color) {
  return Math.round(color * 255);
}

function convertToInt(red, green, blue) {
  return colorToInt(red) + "," + colorToInt(green) + "," + colorToInt(blue);
}

function hslToRgb(hue, saturation, lightness, convert) {
  if (convert === void 0) {
    convert = convertToInt;
  }

  if (saturation === 0) {
    // achromatic
    return convert(lightness, lightness, lightness);
  } // formulae from https://en.wikipedia.org/wiki/HSL_and_HSV


  var huePrime = (hue % 360 + 360) % 360 / 60;
  var chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  var secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
  var red = 0;
  var green = 0;
  var blue = 0;

  if (huePrime >= 0 && huePrime < 1) {
    red = chroma;
    green = secondComponent;
  } else if (huePrime >= 1 && huePrime < 2) {
    red = secondComponent;
    green = chroma;
  } else if (huePrime >= 2 && huePrime < 3) {
    green = chroma;
    blue = secondComponent;
  } else if (huePrime >= 3 && huePrime < 4) {
    green = secondComponent;
    blue = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    red = secondComponent;
    blue = chroma;
  } else if (huePrime >= 5 && huePrime < 6) {
    red = chroma;
    blue = secondComponent;
  }

  var lightnessModification = lightness - chroma / 2;
  var finalRed = red + lightnessModification;
  var finalGreen = green + lightnessModification;
  var finalBlue = blue + lightnessModification;
  return convert(finalRed, finalGreen, finalBlue);
}

var namedColorMap = {
  aliceblue: 'f0f8ff',
  antiquewhite: 'faebd7',
  aqua: '00ffff',
  aquamarine: '7fffd4',
  azure: 'f0ffff',
  beige: 'f5f5dc',
  bisque: 'ffe4c4',
  black: '000',
  blanchedalmond: 'ffebcd',
  blue: '0000ff',
  blueviolet: '8a2be2',
  brown: 'a52a2a',
  burlywood: 'deb887',
  cadetblue: '5f9ea0',
  chartreuse: '7fff00',
  chocolate: 'd2691e',
  coral: 'ff7f50',
  cornflowerblue: '6495ed',
  cornsilk: 'fff8dc',
  crimson: 'dc143c',
  cyan: '00ffff',
  darkblue: '00008b',
  darkcyan: '008b8b',
  darkgoldenrod: 'b8860b',
  darkgray: 'a9a9a9',
  darkgreen: '006400',
  darkgrey: 'a9a9a9',
  darkkhaki: 'bdb76b',
  darkmagenta: '8b008b',
  darkolivegreen: '556b2f',
  darkorange: 'ff8c00',
  darkorchid: '9932cc',
  darkred: '8b0000',
  darksalmon: 'e9967a',
  darkseagreen: '8fbc8f',
  darkslateblue: '483d8b',
  darkslategray: '2f4f4f',
  darkslategrey: '2f4f4f',
  darkturquoise: '00ced1',
  darkviolet: '9400d3',
  deeppink: 'ff1493',
  deepskyblue: '00bfff',
  dimgray: '696969',
  dimgrey: '696969',
  dodgerblue: '1e90ff',
  firebrick: 'b22222',
  floralwhite: 'fffaf0',
  forestgreen: '228b22',
  fuchsia: 'ff00ff',
  gainsboro: 'dcdcdc',
  ghostwhite: 'f8f8ff',
  gold: 'ffd700',
  goldenrod: 'daa520',
  gray: '808080',
  green: '008000',
  greenyellow: 'adff2f',
  grey: '808080',
  honeydew: 'f0fff0',
  hotpink: 'ff69b4',
  indianred: 'cd5c5c',
  indigo: '4b0082',
  ivory: 'fffff0',
  khaki: 'f0e68c',
  lavender: 'e6e6fa',
  lavenderblush: 'fff0f5',
  lawngreen: '7cfc00',
  lemonchiffon: 'fffacd',
  lightblue: 'add8e6',
  lightcoral: 'f08080',
  lightcyan: 'e0ffff',
  lightgoldenrodyellow: 'fafad2',
  lightgray: 'd3d3d3',
  lightgreen: '90ee90',
  lightgrey: 'd3d3d3',
  lightpink: 'ffb6c1',
  lightsalmon: 'ffa07a',
  lightseagreen: '20b2aa',
  lightskyblue: '87cefa',
  lightslategray: '789',
  lightslategrey: '789',
  lightsteelblue: 'b0c4de',
  lightyellow: 'ffffe0',
  lime: '0f0',
  limegreen: '32cd32',
  linen: 'faf0e6',
  magenta: 'f0f',
  maroon: '800000',
  mediumaquamarine: '66cdaa',
  mediumblue: '0000cd',
  mediumorchid: 'ba55d3',
  mediumpurple: '9370db',
  mediumseagreen: '3cb371',
  mediumslateblue: '7b68ee',
  mediumspringgreen: '00fa9a',
  mediumturquoise: '48d1cc',
  mediumvioletred: 'c71585',
  midnightblue: '191970',
  mintcream: 'f5fffa',
  mistyrose: 'ffe4e1',
  moccasin: 'ffe4b5',
  navajowhite: 'ffdead',
  navy: '000080',
  oldlace: 'fdf5e6',
  olive: '808000',
  olivedrab: '6b8e23',
  orange: 'ffa500',
  orangered: 'ff4500',
  orchid: 'da70d6',
  palegoldenrod: 'eee8aa',
  palegreen: '98fb98',
  paleturquoise: 'afeeee',
  palevioletred: 'db7093',
  papayawhip: 'ffefd5',
  peachpuff: 'ffdab9',
  peru: 'cd853f',
  pink: 'ffc0cb',
  plum: 'dda0dd',
  powderblue: 'b0e0e6',
  purple: '800080',
  rebeccapurple: '639',
  red: 'f00',
  rosybrown: 'bc8f8f',
  royalblue: '4169e1',
  saddlebrown: '8b4513',
  salmon: 'fa8072',
  sandybrown: 'f4a460',
  seagreen: '2e8b57',
  seashell: 'fff5ee',
  sienna: 'a0522d',
  silver: 'c0c0c0',
  skyblue: '87ceeb',
  slateblue: '6a5acd',
  slategray: '708090',
  slategrey: '708090',
  snow: 'fffafa',
  springgreen: '00ff7f',
  steelblue: '4682b4',
  tan: 'd2b48c',
  teal: '008080',
  thistle: 'd8bfd8',
  tomato: 'ff6347',
  turquoise: '40e0d0',
  violet: 'ee82ee',
  wheat: 'f5deb3',
  white: 'fff',
  whitesmoke: 'f5f5f5',
  yellow: 'ff0',
  yellowgreen: '9acd32'
};
/**
 * Checks if a string is a CSS named color and returns its equivalent hex value, otherwise returns the original color.
 * @private
 */

function nameToHex(color) {
  if (typeof color !== 'string') return color;
  var normalizedColorName = color.toLowerCase();
  return namedColorMap[normalizedColorName] ? "#" + namedColorMap[normalizedColorName] : color;
}

var hexRegex = /^#[a-fA-F0-9]{6}$/;
var hexRgbaRegex = /^#[a-fA-F0-9]{8}$/;
var reducedHexRegex = /^#[a-fA-F0-9]{3}$/;
var reducedRgbaHexRegex = /^#[a-fA-F0-9]{4}$/;
var rgbRegex = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i;
var rgbaRegex = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;
var hslRegex = /^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i;
var hslaRegex = /^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;
/**
 * Returns an RgbColor or RgbaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a RgbColor or RgbaColor object back to a string.
 *
 * @example
 * // Assigns `{ red: 255, green: 0, blue: 0 }` to color1
 * const color1 = parseToRgb('rgb(255, 0, 0)');
 * // Assigns `{ red: 92, green: 102, blue: 112, alpha: 0.75 }` to color2
 * const color2 = parseToRgb('hsla(210, 10%, 40%, 0.75)');
 */

function parseToRgb(color) {
  if (typeof color !== 'string') {
    throw new PolishedError(3);
  }

  var normalizedColor = nameToHex(color);

  if (normalizedColor.match(hexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16)
    };
  }

  if (normalizedColor.match(hexRgbaRegex)) {
    var alpha = parseFloat((parseInt("" + normalizedColor[7] + normalizedColor[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16),
      alpha: alpha
    };
  }

  if (normalizedColor.match(reducedHexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16)
    };
  }

  if (normalizedColor.match(reducedRgbaHexRegex)) {
    var _alpha = parseFloat((parseInt("" + normalizedColor[4] + normalizedColor[4], 16) / 255).toFixed(2));

    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16),
      alpha: _alpha
    };
  }

  var rgbMatched = rgbRegex.exec(normalizedColor);

  if (rgbMatched) {
    return {
      red: parseInt("" + rgbMatched[1], 10),
      green: parseInt("" + rgbMatched[2], 10),
      blue: parseInt("" + rgbMatched[3], 10)
    };
  }

  var rgbaMatched = rgbaRegex.exec(normalizedColor);

  if (rgbaMatched) {
    return {
      red: parseInt("" + rgbaMatched[1], 10),
      green: parseInt("" + rgbaMatched[2], 10),
      blue: parseInt("" + rgbaMatched[3], 10),
      alpha: parseFloat("" + rgbaMatched[4])
    };
  }

  var hslMatched = hslRegex.exec(normalizedColor);

  if (hslMatched) {
    var hue = parseInt("" + hslMatched[1], 10);
    var saturation = parseInt("" + hslMatched[2], 10) / 100;
    var lightness = parseInt("" + hslMatched[3], 10) / 100;
    var rgbColorString = "rgb(" + hslToRgb(hue, saturation, lightness) + ")";
    var hslRgbMatched = rgbRegex.exec(rgbColorString);

    if (!hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, rgbColorString);
    }

    return {
      red: parseInt("" + hslRgbMatched[1], 10),
      green: parseInt("" + hslRgbMatched[2], 10),
      blue: parseInt("" + hslRgbMatched[3], 10)
    };
  }

  var hslaMatched = hslaRegex.exec(normalizedColor);

  if (hslaMatched) {
    var _hue = parseInt("" + hslaMatched[1], 10);

    var _saturation = parseInt("" + hslaMatched[2], 10) / 100;

    var _lightness = parseInt("" + hslaMatched[3], 10) / 100;

    var _rgbColorString = "rgb(" + hslToRgb(_hue, _saturation, _lightness) + ")";

    var _hslRgbMatched = rgbRegex.exec(_rgbColorString);

    if (!_hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, _rgbColorString);
    }

    return {
      red: parseInt("" + _hslRgbMatched[1], 10),
      green: parseInt("" + _hslRgbMatched[2], 10),
      blue: parseInt("" + _hslRgbMatched[3], 10),
      alpha: parseFloat("" + hslaMatched[4])
    };
  }

  throw new PolishedError(5);
}

/**
 * Reduces hex values if possible e.g. #ff8866 to #f86
 * @private
 */
var reduceHexValue = function reduceHexValue(value) {
  if (value.length === 7 && value[1] === value[2] && value[3] === value[4] && value[5] === value[6]) {
    return "#" + value[1] + value[3] + value[5];
  }

  return value;
};

function numberToHex(value) {
  var hex = value.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function rgb(value, green, blue) {
  if (typeof value === 'number' && typeof green === 'number' && typeof blue === 'number') {
    return reduceHexValue("#" + numberToHex(value) + numberToHex(green) + numberToHex(blue));
  } else if (typeof value === 'object' && green === undefined && blue === undefined) {
    return reduceHexValue("#" + numberToHex(value.red) + numberToHex(value.green) + numberToHex(value.blue));
  }

  throw new PolishedError(6);
}

function rgba(firstValue, secondValue, thirdValue, fourthValue) {
  if (typeof firstValue === 'string' && typeof secondValue === 'number') {
    var rgbValue = parseToRgb(firstValue);
    return "rgba(" + rgbValue.red + "," + rgbValue.green + "," + rgbValue.blue + "," + secondValue + ")";
  } else if (typeof firstValue === 'number' && typeof secondValue === 'number' && typeof thirdValue === 'number' && typeof fourthValue === 'number') {
    return fourthValue >= 1 ? rgb(firstValue, secondValue, thirdValue) : "rgba(" + firstValue + "," + secondValue + "," + thirdValue + "," + fourthValue + ")";
  } else if (typeof firstValue === 'object' && secondValue === undefined && thirdValue === undefined && fourthValue === undefined) {
    return firstValue.alpha >= 1 ? rgb(firstValue.red, firstValue.green, firstValue.blue) : "rgba(" + firstValue.red + "," + firstValue.green + "," + firstValue.blue + "," + firstValue.alpha + ")";
  }

  throw new PolishedError(7);
}

function buttonStyles(appearance, intent) {
  const theme = emotionTheming.useTheme();
  const intents = {
    default: {
      base: theme.colors.gray[9],
      heavy: theme.colors.gray[9],
      light: theme.colors.gray[0],
      contrast: '#fff'
    },
    primary: {
      base: theme.colors.indigo[4],
      heavy: theme.colors.indigo[6],
      light: theme.colors.indigo[0],
      contrast: '#fff'
    },
    success: {
      base: theme.colors.teal[5],
      heavy: theme.colors.teal[7],
      light: theme.colors.teal[0],
      contrast: '#fff'
    },
    warning: {
      base: theme.colors.yellow[5],
      heavy: theme.colors.yellow[6],
      light: theme.colors.yellow[0],
      contrast: '#fff'
    },
    danger: {
      base: theme.colors.red[5],
      heavy: theme.colors.red[7],
      light: theme.colors.red[0],
      contrast: '#fff'
    }
  };

  switch (appearance) {
    case 'primary':
      return {
        color: intents[intent].contrast,
        backgroundColor: intents[intent].base,
        boxShadow: theme.shadows.elevations[1]
      };

    case 'minimal':
      return {
        color: intents[intent].heavy,
        backgroundColor: 'transparent'
      };

    default:
      return {
        color: intents[intent].heavy,
        backgroundColor: intents[intent].light,
        boxShadow: theme.shadows.elevations[1]
      };
  }
}

const getBorderRadiusForControlHeight = height => {
  if (height <= 40) return '3px';
  return '5px';
};

const getTextSizeForControlHeight = height => {
  if (height <= 24) return 300;
  if (height <= 28) return 300;
  if (height <= 32) return 300;
  if (height <= 36) return 400;
  if (height <= 40) return 400;
  return 500;
};

const getIconSizeForButton = height => {
  if (height <= 28) return 12;
  if (height <= 32) return 12;
  if (height <= 40) return 16;
  if (height <= 48) return 18;
  return 20;
};

const Button = ({
  appearance,
  children,
  height,
  iconAfter,
  iconBefore,
  intent,
  ...rest
}) => {
  const br = getBorderRadiusForControlHeight(height);
  const is = getIconSizeForButton(height);
  const p = Math.round(height / 2);
  const ts = getTextSizeForControlHeight(height);
  return core.jsx(Text, _extends({
    "data-playground-id": "buttons.button",
    size: ts,
    position: "relative",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "nowrap",
    height: height,
    m: 0,
    px: p,
    py: 0,
    border: 0,
    borderRadius: br,
    fontWeight: 600,
    lineHeight: height + 'px',
    overflow: "hidden",
    css:
    /*#__PURE__*/
    css$1({ ...buttonStyles(appearance, intent),
      userSelect: 'none',
      appearance: 'none',
      cursor: 'pointer',
      ':focus': {
        outline: '1px dotted currentColor',
        outlineOffset: '-4px'
      }
    }, ";label:Button;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RE0iLCJmaWxlIjoiQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgSWNvbiB9IGZyb20gJy4uLy4uL2ljb24nO1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknO1xuXG5pbXBvcnQgYnV0dG9uU3R5bGVzIGZyb20gJy4vYnV0dG9uU3R5bGVzJztcblxuY29uc3QgZ2V0Qm9yZGVyUmFkaXVzRm9yQ29udHJvbEhlaWdodCA9IGhlaWdodCA9PiB7XG4gIGlmIChoZWlnaHQgPD0gNDApIHJldHVybiAnM3B4JztcbiAgcmV0dXJuICc1cHgnO1xufTtcblxuY29uc3QgZ2V0VGV4dFNpemVGb3JDb250cm9sSGVpZ2h0ID0gaGVpZ2h0ID0+IHtcbiAgaWYgKGhlaWdodCA8PSAyNCkgcmV0dXJuIDMwMDtcbiAgaWYgKGhlaWdodCA8PSAyOCkgcmV0dXJuIDMwMDtcbiAgaWYgKGhlaWdodCA8PSAzMikgcmV0dXJuIDMwMDtcbiAgaWYgKGhlaWdodCA8PSAzNikgcmV0dXJuIDQwMDtcbiAgaWYgKGhlaWdodCA8PSA0MCkgcmV0dXJuIDQwMDtcbiAgcmV0dXJuIDUwMDtcbn07XG5cbmNvbnN0IGdldEljb25TaXplRm9yQnV0dG9uID0gaGVpZ2h0ID0+IHtcbiAgaWYgKGhlaWdodCA8PSAyOCkgcmV0dXJuIDEyO1xuICBpZiAoaGVpZ2h0IDw9IDMyKSByZXR1cm4gMTI7XG4gIGlmIChoZWlnaHQgPD0gNDApIHJldHVybiAxNjtcbiAgaWYgKGhlaWdodCA8PSA0OCkgcmV0dXJuIDE4O1xuICByZXR1cm4gMjA7XG59O1xuXG5jb25zdCBCdXR0b24gPSAoe1xuICBhcHBlYXJhbmNlLFxuICBjaGlsZHJlbixcbiAgaGVpZ2h0LFxuICBpY29uQWZ0ZXIsXG4gIGljb25CZWZvcmUsXG4gIGludGVudCxcbiAgLi4ucmVzdFxufSkgPT4ge1xuICBjb25zdCBiciA9IGdldEJvcmRlclJhZGl1c0ZvckNvbnRyb2xIZWlnaHQoaGVpZ2h0KTtcbiAgY29uc3QgaXMgPSBnZXRJY29uU2l6ZUZvckJ1dHRvbihoZWlnaHQpO1xuICBjb25zdCBwID0gTWF0aC5yb3VuZChoZWlnaHQgLyAyKTtcbiAgY29uc3QgdHMgPSBnZXRUZXh0U2l6ZUZvckNvbnRyb2xIZWlnaHQoaGVpZ2h0KTtcblxuICByZXR1cm4gKFxuICAgIDxUZXh0XG4gICAgICBkYXRhLXBsYXlncm91bmQtaWQ9XCJidXR0b25zLmJ1dHRvblwiXG4gICAgICBzaXplPXt0c31cbiAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgICAgZGlzcGxheT1cImlubGluZS1mbGV4XCJcbiAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgZmxleFdyYXA9XCJub3dyYXBcIlxuICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICBtPXswfVxuICAgICAgcHg9e3B9XG4gICAgICBweT17MH1cbiAgICAgIGJvcmRlcj17MH1cbiAgICAgIGJvcmRlclJhZGl1cz17YnJ9XG4gICAgICBmb250V2VpZ2h0PXs2MDB9XG4gICAgICBsaW5lSGVpZ2h0PXtoZWlnaHQgKyAncHgnfVxuICAgICAgb3ZlcmZsb3c9XCJoaWRkZW5cIlxuICAgICAgY3NzPXt7XG4gICAgICAgIC4uLmJ1dHRvblN0eWxlcyhhcHBlYXJhbmNlLCBpbnRlbnQpLFxuICAgICAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgICAgIGFwcGVhcmFuY2U6ICdub25lJyxcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgICc6Zm9jdXMnOiB7XG4gICAgICAgICAgb3V0bGluZTogJzFweCBkb3R0ZWQgY3VycmVudENvbG9yJyxcbiAgICAgICAgICBvdXRsaW5lT2Zmc2V0OiAnLTRweCcsXG4gICAgICAgIH0sXG4gICAgICB9fVxuICAgICAgey4uLnJlc3R9XG4gICAgPlxuICAgICAge2ljb25CZWZvcmUgJiYgKFxuICAgICAgICA8SWNvblxuICAgICAgICAgIGRhdGEtcGxheWdyb3VuZC1pZD1cImJ1dHRvbnMuYnV0dG9uLmljb25CZWZvcmVcIlxuICAgICAgICAgIGFzPVwic3BhblwiXG4gICAgICAgICAgc3ltYm9sPXtpY29uQmVmb3JlfVxuICAgICAgICAgIHNpemU9e2lzfVxuICAgICAgICAgIG1yPXtNYXRoLnJvdW5kKGlzICogMC4zKSArICdweCd9XG4gICAgICAgICAgbWw9eyctJyArIE1hdGgucm91bmQoaXMgKiAwLjMpICsgJ3B4J31cbiAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIHtpY29uQWZ0ZXIgJiYgKFxuICAgICAgICA8SWNvblxuICAgICAgICAgIGRhdGEtcGxheWdyb3VuZC1pZD1cImJ1dHRvbnMuYnV0dG9uLmljb25BZnRlclwiXG4gICAgICAgICAgYXM9XCJzcGFuXCJcbiAgICAgICAgICBzeW1ib2w9e2ljb25BZnRlcn1cbiAgICAgICAgICBzaXplPXtpc31cbiAgICAgICAgICBtcj17Jy0nICsgTWF0aC5yb3VuZChpcyAqIDAuMykgKyAncHgnfVxuICAgICAgICAgIG1sPXtNYXRoLnJvdW5kKGlzICogMC4zKSArICdweCd9XG4gICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9UZXh0PlxuICApO1xufTtcblxuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgYXBwZWFyYW5jZTogJ2RlZmF1bHQnLFxuICBhczogJ2J1dHRvbicsXG4gIGhlaWdodDogNDAsXG4gIGludGVudDogJ2RlZmF1bHQnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIl19 */"))
  }, rest), iconBefore && core.jsx(Icon$1, {
    "data-playground-id": "buttons.button.iconBefore",
    as: "span",
    symbol: iconBefore,
    size: is,
    mr: Math.round(is * 0.3) + 'px',
    ml: '-' + Math.round(is * 0.3) + 'px',
    color: "inherit"
  }), children, iconAfter && core.jsx(Icon$1, {
    "data-playground-id": "buttons.button.iconAfter",
    as: "span",
    symbol: iconAfter,
    size: is,
    mr: '-' + Math.round(is * 0.3) + 'px',
    ml: Math.round(is * 0.3) + 'px',
    color: "inherit"
  }));
};

Button.defaultProps = {
  appearance: 'default',
  as: 'button',
  height: 40,
  intent: 'default'
};

const getIconSizeForButton$1 = height => {
  if (height <= 28) return 14;
  if (height <= 32) return 16;
  if (height <= 40) return 20;
  if (height <= 48) return 24;
  return 24;
};

const IconButton = ({
  height,
  icon,
  label,
  ...rest
}) => {
  const is = getIconSizeForButton$1(height);
  return core.jsx(Button, _extends({
    "data-playground-id": "buttons.iconButton",
    width: height,
    height: height,
    px: 0
  }, rest), core.jsx(Icon$1, {
    "data-playground-id": "buttons.iconButton.icon",
    as: "span",
    symbol: icon,
    label: label,
    size: is,
    color: "inherit"
  }));
};

IconButton.defaultProps = {
  appearance: 'default',
  borderRadius: '50%',
  height: 40,
  icon: mdiCheckCircle,
  intent: 'default'
};

const Alert$1 = ({
  button,
  children,
  intent,
  title,
  ...rest
}) => {
  const theme = emotionTheming.useTheme();
  const intents = {
    default: {
      color: theme.colors.gray[5],
      icon: mdiInformation
    },
    primary: {
      color: theme.colors.blue[6],
      icon: mdiInformation
    },
    success: {
      color: theme.colors.teal[6],
      icon: mdiCheckCircle
    },
    warning: {
      color: theme.colors.yellow[5],
      icon: mdiAlert
    },
    danger: {
      color: theme.colors.red[5],
      icon: mdiAlertCircle
    }
  };
  return core.jsx(Box, _extends({
    "data-playground-id": "alert",
    as: Alert,
    role: "alert",
    position: "relative",
    display: "inline-flex",
    alignItems: "flex-start",
    pl: "spacing.5",
    pr: "spacing.8",
    borderRadius: "4px",
    bg: "white",
    overflow: "hidden",
    boxShadow: "elevations.1"
  }, rest), core.jsx(Box, {
    "data-playground-id": "alert.highlight",
    position: "absolute",
    top: 0,
    left: 0,
    width: "4px",
    height: "100%",
    bg: intents[intent].color
  }), intents[intent].icon && core.jsx(Box, {
    "data-playground-id": "alert.icon",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    pr: "spacing.3"
  }, core.jsx(Icon$1, {
    symbol: intents[intent].icon,
    size: 20,
    color: intents[intent].color
  })), core.jsx(Box, {
    "data-playground-id": "alert.content",
    flex: 1,
    minHeight: 40,
    py: "10px"
  }, core.jsx(Box, {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    flex: 1
  }, title && core.jsx(Heading, {
    as: "h4",
    size: 400,
    mr: children && 'spacing.2'
  }, title), children && core.jsx(Paragraph, {
    as: "p",
    size: 400,
    color: "gray.8"
  }, children)), button && core.jsx(Box, {
    mt: "8px"
  }, core.jsx(Button, _extends({
    height: 32
  }, button)))), core.jsx(Box, {
    "data-playground-id": "alert.button",
    position: "absolute",
    top: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40
  }, core.jsx(IconButton, {
    icon: mdiClose,
    appearance: "minimal",
    intent: "default",
    height: 32
  })));
};

Alert$1.defaultProps = {
  intent: 'default'
};

function _assertThisInitialized$1(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose$1(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var cleanProps = function cleanProps(props) {
  var initialState = props.initialState,
      getInitialState = props.getInitialState,
      refs = props.refs,
      getRefs = props.getRefs,
      didMount = props.didMount,
      didUpdate = props.didUpdate,
      willUnmount = props.willUnmount,
      getSnapshotBeforeUpdate = props.getSnapshotBeforeUpdate,
      shouldUpdate = props.shouldUpdate,
      render = props.render,
      rest = _objectWithoutPropertiesLoose$1(props, ["initialState", "getInitialState", "refs", "getRefs", "didMount", "didUpdate", "willUnmount", "getSnapshotBeforeUpdate", "shouldUpdate", "render"]);

  return rest;
};

var Component =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose$1(Component, _React$Component);

  function Component() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _defineProperty$1(_assertThisInitialized$1(_this), "state", _this.props.initialState || _this.props.getInitialState(_this.props));

    _defineProperty$1(_assertThisInitialized$1(_this), "_refs", _this.props.refs || _this.props.getRefs(_this.getArgs()));

    _defineProperty$1(_assertThisInitialized$1(_this), "_setState", function () {
      var _this2;

      return (_this2 = _this).setState.apply(_this2, arguments);
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "_forceUpdate", function () {
      var _this3;

      return (_this3 = _this).forceUpdate.apply(_this3, arguments);
    });

    return _this;
  }

  var _proto = Component.prototype;

  _proto.getArgs = function getArgs() {
    var state = this.state,
        props = this.props,
        setState = this._setState,
        forceUpdate = this._forceUpdate,
        refs = this._refs;
    return {
      state: state,
      props: cleanProps(props),
      refs: refs,
      setState: setState,
      forceUpdate: forceUpdate
    };
  };

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.didMount) this.props.didMount(this.getArgs());
  };

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    if (this.props.shouldUpdate) return this.props.shouldUpdate({
      props: this.props,
      state: this.state,
      nextProps: cleanProps(nextProps),
      nextState: nextState
    });else return true;
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.props.willUnmount) this.props.willUnmount({
      state: this.state,
      props: cleanProps(this.props),
      refs: this._refs
    });
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.didUpdate) this.props.didUpdate(Object.assign(this.getArgs(), {
      prevProps: cleanProps(prevProps),
      prevState: prevState
    }), snapshot);
  };

  _proto.getSnapshotBeforeUpdate = function getSnapshotBeforeUpdate(prevProps, prevState) {
    if (this.props.getSnapshotBeforeUpdate) {
      return this.props.getSnapshotBeforeUpdate(Object.assign(this.getArgs(), {
        prevProps: cleanProps(prevProps),
        prevState: prevState
      }));
    } else {
      return null;
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        render = _this$props.render;
    return render ? render(this.getArgs()) : typeof children === "function" ? children(this.getArgs()) : children || null;
  };

  return Component;
}(React__default.Component);

_defineProperty$1(Component, "defaultProps", {
  getInitialState: function getInitialState() {},
  getRefs: function getRefs() {
    return {};
  }
});

if (process.env.NODE_ENV !== "production") {
  Component.propTypes = {
    initialState: propTypes_5,
    getInitialState: propTypes_3,
    refs: propTypes_5,
    getRefs: propTypes_3,
    didMount: propTypes_3,
    didUpdate: propTypes_3,
    willUnmount: propTypes_3,
    getSnapshotBeforeUpdate: propTypes_3,
    shouldUpdate: propTypes_3,
    render: propTypes_3,
    children: propTypes_16([propTypes_3, propTypes_13])
  };
}

var Portal = function Portal(_ref) {
  var children = _ref.children,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? "reach-portal" : _ref$type;
  return React__default.createElement(Component, {
    getRefs: function getRefs() {
      return {
        mountNode: null,
        portalNode: null
      };
    },
    didMount: function didMount(_ref2) {
      var refs = _ref2.refs,
          forceUpdate = _ref2.forceUpdate;
      // It's possible that the content we are portal has, itself, been portaled.
      // In that case, it's important to append to the correct document element.
      var ownerDocument = refs.mountNode.ownerDocument;
      refs.portalNode = ownerDocument.createElement(type);
      ownerDocument.body.appendChild(refs.portalNode);
      forceUpdate();
    },
    willUnmount: function willUnmount(_ref3) {
      var portalNode = _ref3.refs.portalNode;
      portalNode.ownerDocument.body.removeChild(portalNode);
    },
    render: function render(_ref4) {
      var refs = _ref4.refs;
      var portalNode = refs.portalNode;

      if (!portalNode) {
        return React__default.createElement("div", {
          ref: function ref(div) {
            return refs.mountNode = div;
          }
        });
      } else {
        return reactDom.createPortal(children, portalNode);
      }
    }
  });
};

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref = process.env.NODE_ENV === "production" ? {
  name: "lu9jwh-ToastAlert",
  styles: "pointer-events:none;;label:ToastAlert;"
} : {
  name: "lu9jwh-ToastAlert",
  styles: "pointer-events:none;;label:ToastAlert;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRvYXN0QWxlcnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJNIiwiZmlsZSI6IlRvYXN0QWxlcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBvcnRhbCBmcm9tICdAcmVhY2gvcG9ydGFsJztcblxuaW1wb3J0IHsgQm94IH0gZnJvbSAnLi4vLi4vYm94JztcblxuaW1wb3J0IEFsZXJ0IGZyb20gJy4vQWxlcnQnO1xuXG5jb25zdCBUb2FzdEFsZXJ0ID0gKHsgLi4ucmVzdCB9KSA9PiAoXG4gIDxQb3J0YWw+XG4gICAgPEJveFxuICAgICAgZGF0YS1wbGF5Z3JvdW5kLWlkPVwidG9hc3RBbGVydFwiXG4gICAgICBwb3NpdGlvbj1cImZpeGVkXCJcbiAgICAgIHRvcD1cInNwYWNpbmcuM1wiXG4gICAgICBsZWZ0PXswfVxuICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgIHB4PVwic3BhY2luZy4zXCJcbiAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICBjc3M9e3sgcG9pbnRlckV2ZW50czogJ25vbmUnIH19XG4gICAgPlxuICAgICAgPEJveFxuICAgICAgICBkaXNwbGF5PVwiaW5saW5lLWJsb2NrXCJcbiAgICAgICAgbWF4V2lkdGg9ezQyMH1cbiAgICAgICAgdGV4dEFsaWduPVwiaW5pdGlhbFwiXG4gICAgICAgIGNzcz17eyBwb2ludGVyRXZlbnRzOiAnYWxsJyB9fVxuICAgICAgPlxuICAgICAgICA8QWxlcnQgYm94U2hhZG93PVwiZWxldmF0aW9ucy40XCIgey4uLnJlc3R9IC8+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgPC9Qb3J0YWw+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBUb2FzdEFsZXJ0O1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref2 = process.env.NODE_ENV === "production" ? {
  name: "1t5kxhr-ToastAlert",
  styles: "pointer-events:all;;label:ToastAlert;"
} : {
  name: "1t5kxhr-ToastAlert",
  styles: "pointer-events:all;;label:ToastAlert;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRvYXN0QWxlcnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJRIiwiZmlsZSI6IlRvYXN0QWxlcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBvcnRhbCBmcm9tICdAcmVhY2gvcG9ydGFsJztcblxuaW1wb3J0IHsgQm94IH0gZnJvbSAnLi4vLi4vYm94JztcblxuaW1wb3J0IEFsZXJ0IGZyb20gJy4vQWxlcnQnO1xuXG5jb25zdCBUb2FzdEFsZXJ0ID0gKHsgLi4ucmVzdCB9KSA9PiAoXG4gIDxQb3J0YWw+XG4gICAgPEJveFxuICAgICAgZGF0YS1wbGF5Z3JvdW5kLWlkPVwidG9hc3RBbGVydFwiXG4gICAgICBwb3NpdGlvbj1cImZpeGVkXCJcbiAgICAgIHRvcD1cInNwYWNpbmcuM1wiXG4gICAgICBsZWZ0PXswfVxuICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgIHB4PVwic3BhY2luZy4zXCJcbiAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICBjc3M9e3sgcG9pbnRlckV2ZW50czogJ25vbmUnIH19XG4gICAgPlxuICAgICAgPEJveFxuICAgICAgICBkaXNwbGF5PVwiaW5saW5lLWJsb2NrXCJcbiAgICAgICAgbWF4V2lkdGg9ezQyMH1cbiAgICAgICAgdGV4dEFsaWduPVwiaW5pdGlhbFwiXG4gICAgICAgIGNzcz17eyBwb2ludGVyRXZlbnRzOiAnYWxsJyB9fVxuICAgICAgPlxuICAgICAgICA8QWxlcnQgYm94U2hhZG93PVwiZWxldmF0aW9ucy40XCIgey4uLnJlc3R9IC8+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgPC9Qb3J0YWw+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBUb2FzdEFsZXJ0O1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

const ToastAlert = ({ ...rest
}) => core.jsx(Portal, null, core.jsx(Box, {
  "data-playground-id": "toastAlert",
  position: "fixed",
  top: "spacing.3",
  left: 0,
  width: "100%",
  px: "spacing.3",
  textAlign: "center",
  css: _ref
}, core.jsx(Box, {
  display: "inline-block",
  maxWidth: 420,
  textAlign: "initial",
  css: _ref2
}, core.jsx(Alert$1, _extends({
  boxShadow: "elevations.4"
}, rest)))));

const AspectRatio = ({
  children,
  ratio,
  ...rest
}) => {
  const padding = ratio.split(':');
  return core.jsx(Box, _extends({
    "data-playground-id": "aspectRatio",
    position: "relative",
    width: "100%",
    pb: padding[1] / padding[0] * 100 + '%'
  }, rest), core.jsx(Box, {
    "data-playground-id": "aspectRatio.setSize",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%"
  }, children));
};

AspectRatio.defaultProps = {
  ratio: '16:9'
};

function _EMOTION_STRINGIFIED_CSS_ERROR__$1() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

function getInitials(name, fallback = '?') {
  if (!name || typeof name !== 'string') return fallback;
  return name.replace(/\s+/, ' ').split(' ') // Repeated spaces results in empty strings
  .slice(0, 2).map(v => v && v[0].toUpperCase()) // Watch out for empty strings
  .join('');
}

const getTextSizeForAvatarSize = size => {
  if (size <= 24) return 300;
  if (size <= 28) return 300;
  if (size <= 32) return 300;
  if (size <= 36) return 400;
  if (size <= 40) return 500;
  return 600;
};

var _ref$1 = process.env.NODE_ENV === "production" ? {
  name: "1ksmugz-Avatar",
  styles: "object-fit:cover;object-position:center;;label:Avatar;"
} : {
  name: "1ksmugz-Avatar",
  styles: "object-fit:cover;object-position:center;;label:Avatar;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkF2YXRhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Q1UiLCJmaWxlIjoiQXZhdGFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQm94IH0gZnJvbSAnLi4vLi4vYm94JztcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5JztcblxuZnVuY3Rpb24gZ2V0SW5pdGlhbHMobmFtZSwgZmFsbGJhY2sgPSAnPycpIHtcbiAgaWYgKCFuYW1lIHx8IHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykgcmV0dXJuIGZhbGxiYWNrO1xuICByZXR1cm4gbmFtZVxuICAgIC5yZXBsYWNlKC9cXHMrLywgJyAnKVxuICAgIC5zcGxpdCgnICcpIC8vIFJlcGVhdGVkIHNwYWNlcyByZXN1bHRzIGluIGVtcHR5IHN0cmluZ3NcbiAgICAuc2xpY2UoMCwgMilcbiAgICAubWFwKHYgPT4gdiAmJiB2WzBdLnRvVXBwZXJDYXNlKCkpIC8vIFdhdGNoIG91dCBmb3IgZW1wdHkgc3RyaW5nc1xuICAgIC5qb2luKCcnKTtcbn1cblxuY29uc3QgZ2V0VGV4dFNpemVGb3JBdmF0YXJTaXplID0gc2l6ZSA9PiB7XG4gIGlmIChzaXplIDw9IDI0KSByZXR1cm4gMzAwO1xuICBpZiAoc2l6ZSA8PSAyOCkgcmV0dXJuIDMwMDtcbiAgaWYgKHNpemUgPD0gMzIpIHJldHVybiAzMDA7XG4gIGlmIChzaXplIDw9IDM2KSByZXR1cm4gNDAwO1xuICBpZiAoc2l6ZSA8PSA0MCkgcmV0dXJuIDUwMDtcbiAgcmV0dXJuIDYwMDtcbn07XG5cbmNvbnN0IEF2YXRhciA9ICh7IGJnLCBib3JkZXJSYWRpdXMsIGNvbG9yLCBpbWFnZSwgbmFtZSwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxCb3ggZGF0YS1wbGF5Z3JvdW5kLWlkPVwiYXZhdGFyXCIgdGl0bGU9e25hbWUgJiYgbmFtZX0gd2lkdGg9e3NpemV9IHsuLi5yZXN0fT5cbiAgICA8Qm94XG4gICAgICBkYXRhLXBsYXlncm91bmQtaWQ9XCJhdmF0YXIuc2V0U2l6ZVwiXG4gICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgIHBiPVwiMTAwJVwiXG4gICAgICBib3JkZXJSYWRpdXM9e2JvcmRlclJhZGl1c31cbiAgICAgIGJnPXtiZ31cbiAgICAgIG92ZXJmbG93PVwiaGlkZGVuXCJcbiAgICA+XG4gICAgICB7aW1hZ2UgJiYgKFxuICAgICAgICA8Qm94XG4gICAgICAgICAgZGF0YS1wbGF5Z3JvdW5kLWlkPVwiYXZhdGFyLmltYWdlXCJcbiAgICAgICAgICBhcz1cImltZ1wiXG4gICAgICAgICAgc3JjPXtpbWFnZX1cbiAgICAgICAgICBwb3NpdGlvbj1cImFic29sdXRlXCJcbiAgICAgICAgICB0b3A9ezB9XG4gICAgICAgICAgbGVmdD17MH1cbiAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInLFxuICAgICAgICAgICAgb2JqZWN0UG9zaXRpb246ICdjZW50ZXInLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAgeyFpbWFnZSAmJiBuYW1lICYmIChcbiAgICAgICAgPFRleHRcbiAgICAgICAgICBkYXRhLXBsYXlncm91bmQtaWQ9XCJhdmF0YXIuaW5pdGlhbHNcIlxuICAgICAgICAgIGNoaWxkcmVuPXtnZXRJbml0aWFscyhuYW1lKX1cbiAgICAgICAgICBzaXplPXtnZXRUZXh0U2l6ZUZvckF2YXRhclNpemUoc2l6ZSl9XG4gICAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXG4gICAgICAgICAgdG9wPVwiNTAlXCJcbiAgICAgICAgICBsZWZ0PVwiNTAlXCJcbiAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgIGNvbG9yPXtjb2xvcn1cbiAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9Cb3g+XG4gIDwvQm94PlxuKTtcblxuQXZhdGFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgYmc6ICdncmF5LjQnLFxuICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICBjb2xvcjogJ2dyYXkuOCcsXG4gIHNpemU6IDQwLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQXZhdGFyO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$1
};

var _ref2$1 = process.env.NODE_ENV === "production" ? {
  name: "18ima0o-Avatar",
  styles: "transform:translate(-50%, -50%);;label:Avatar;"
} : {
  name: "18ima0o-Avatar",
  styles: "transform:translate(-50%, -50%);;label:Avatar;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkF2YXRhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RFUiLCJmaWxlIjoiQXZhdGFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQm94IH0gZnJvbSAnLi4vLi4vYm94JztcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5JztcblxuZnVuY3Rpb24gZ2V0SW5pdGlhbHMobmFtZSwgZmFsbGJhY2sgPSAnPycpIHtcbiAgaWYgKCFuYW1lIHx8IHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykgcmV0dXJuIGZhbGxiYWNrO1xuICByZXR1cm4gbmFtZVxuICAgIC5yZXBsYWNlKC9cXHMrLywgJyAnKVxuICAgIC5zcGxpdCgnICcpIC8vIFJlcGVhdGVkIHNwYWNlcyByZXN1bHRzIGluIGVtcHR5IHN0cmluZ3NcbiAgICAuc2xpY2UoMCwgMilcbiAgICAubWFwKHYgPT4gdiAmJiB2WzBdLnRvVXBwZXJDYXNlKCkpIC8vIFdhdGNoIG91dCBmb3IgZW1wdHkgc3RyaW5nc1xuICAgIC5qb2luKCcnKTtcbn1cblxuY29uc3QgZ2V0VGV4dFNpemVGb3JBdmF0YXJTaXplID0gc2l6ZSA9PiB7XG4gIGlmIChzaXplIDw9IDI0KSByZXR1cm4gMzAwO1xuICBpZiAoc2l6ZSA8PSAyOCkgcmV0dXJuIDMwMDtcbiAgaWYgKHNpemUgPD0gMzIpIHJldHVybiAzMDA7XG4gIGlmIChzaXplIDw9IDM2KSByZXR1cm4gNDAwO1xuICBpZiAoc2l6ZSA8PSA0MCkgcmV0dXJuIDUwMDtcbiAgcmV0dXJuIDYwMDtcbn07XG5cbmNvbnN0IEF2YXRhciA9ICh7IGJnLCBib3JkZXJSYWRpdXMsIGNvbG9yLCBpbWFnZSwgbmFtZSwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxCb3ggZGF0YS1wbGF5Z3JvdW5kLWlkPVwiYXZhdGFyXCIgdGl0bGU9e25hbWUgJiYgbmFtZX0gd2lkdGg9e3NpemV9IHsuLi5yZXN0fT5cbiAgICA8Qm94XG4gICAgICBkYXRhLXBsYXlncm91bmQtaWQ9XCJhdmF0YXIuc2V0U2l6ZVwiXG4gICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgIHBiPVwiMTAwJVwiXG4gICAgICBib3JkZXJSYWRpdXM9e2JvcmRlclJhZGl1c31cbiAgICAgIGJnPXtiZ31cbiAgICAgIG92ZXJmbG93PVwiaGlkZGVuXCJcbiAgICA+XG4gICAgICB7aW1hZ2UgJiYgKFxuICAgICAgICA8Qm94XG4gICAgICAgICAgZGF0YS1wbGF5Z3JvdW5kLWlkPVwiYXZhdGFyLmltYWdlXCJcbiAgICAgICAgICBhcz1cImltZ1wiXG4gICAgICAgICAgc3JjPXtpbWFnZX1cbiAgICAgICAgICBwb3NpdGlvbj1cImFic29sdXRlXCJcbiAgICAgICAgICB0b3A9ezB9XG4gICAgICAgICAgbGVmdD17MH1cbiAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInLFxuICAgICAgICAgICAgb2JqZWN0UG9zaXRpb246ICdjZW50ZXInLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAgeyFpbWFnZSAmJiBuYW1lICYmIChcbiAgICAgICAgPFRleHRcbiAgICAgICAgICBkYXRhLXBsYXlncm91bmQtaWQ9XCJhdmF0YXIuaW5pdGlhbHNcIlxuICAgICAgICAgIGNoaWxkcmVuPXtnZXRJbml0aWFscyhuYW1lKX1cbiAgICAgICAgICBzaXplPXtnZXRUZXh0U2l6ZUZvckF2YXRhclNpemUoc2l6ZSl9XG4gICAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXG4gICAgICAgICAgdG9wPVwiNTAlXCJcbiAgICAgICAgICBsZWZ0PVwiNTAlXCJcbiAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgIGNvbG9yPXtjb2xvcn1cbiAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9Cb3g+XG4gIDwvQm94PlxuKTtcblxuQXZhdGFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgYmc6ICdncmF5LjQnLFxuICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICBjb2xvcjogJ2dyYXkuOCcsXG4gIHNpemU6IDQwLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQXZhdGFyO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$1
};

const Avatar = ({
  bg,
  borderRadius,
  color,
  image,
  name,
  size,
  ...rest
}) => core.jsx(Box, _extends({
  "data-playground-id": "avatar",
  title: name && name,
  width: size
}, rest), core.jsx(Box, {
  "data-playground-id": "avatar.setSize",
  position: "relative",
  pb: "100%",
  borderRadius: borderRadius,
  bg: bg,
  overflow: "hidden"
}, image && core.jsx(Box, {
  "data-playground-id": "avatar.image",
  as: "img",
  src: image,
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  css: _ref$1
}), !image && name && core.jsx(Text, {
  "data-playground-id": "avatar.initials",
  children: getInitials(name),
  size: getTextSizeForAvatarSize(size),
  position: "absolute",
  top: "50%",
  left: "50%",
  textAlign: "center",
  color: color,
  css: _ref2$1
})));

Avatar.defaultProps = {
  bg: 'gray.4',
  borderRadius: '50%',
  color: 'gray.8',
  size: 40
};

function badgeStyles(appearance, intent) {
  const theme = emotionTheming.useTheme();
  const intents = {
    default: {
      base: theme.colors.gray[9],
      heavy: theme.colors.gray[9],
      light: theme.colors.gray[1],
      contrast: '#fff'
    },
    primary: {
      base: theme.colors.indigo[4],
      heavy: theme.colors.indigo[6],
      light: theme.colors.indigo[0],
      contrast: '#fff'
    },
    success: {
      base: theme.colors.teal[5],
      heavy: theme.colors.teal[7],
      light: theme.colors.teal[0],
      contrast: '#fff'
    },
    warning: {
      base: theme.colors.yellow[5],
      heavy: theme.colors.yellow[6],
      light: theme.colors.yellow[0],
      contrast: '#fff'
    },
    danger: {
      base: theme.colors.red[5],
      heavy: theme.colors.red[7],
      light: theme.colors.red[0],
      contrast: '#fff'
    }
  };

  switch (appearance) {
    case 'solid':
      return {
        color: intents[intent].contrast,
        backgroundColor: intents[intent].base
      };

    case 'subtle':
      return {
        color: intents[intent].heavy,
        backgroundColor: intents[intent].light
      };

    default:
      return {
        color: intents[intent].heavy,
        backgroundColor: intents[intent].light
      };
  }
}

const Badge = ({
  appearance,
  children,
  intent,
  ...rest
}) => core.jsx(Text, _extends({
  "data-playground-id": "badge",
  as: "div",
  display: "inline-block",
  px: "spacing.2",
  py: "spacinng.1",
  borderRadius: "2px",
  fontWeight: 600,
  letterSpacing: "0.054em",
  textAlign: "center",
  css:
  /*#__PURE__*/
  css$1({
    textTransform: 'uppercase',
    textDecoration: 'none',
    ...badgeStyles(appearance, intent)
  }, ";label:Badge;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJhZGdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCSSIsImZpbGUiOiJCYWRnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSc7XG5cbmltcG9ydCBiYWRnZVN0eWxlcyBmcm9tICcuL2JhZGdlU3R5bGVzJztcblxuY29uc3QgQmFkZ2UgPSAoeyBhcHBlYXJhbmNlLCBjaGlsZHJlbiwgaW50ZW50LCAuLi5yZXN0IH0pID0+IChcbiAgPFRleHRcbiAgICBkYXRhLXBsYXlncm91bmQtaWQ9XCJiYWRnZVwiXG4gICAgYXM9XCJkaXZcIlxuICAgIGRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIlxuICAgIHB4PVwic3BhY2luZy4yXCJcbiAgICBweT1cInNwYWNpbm5nLjFcIlxuICAgIGJvcmRlclJhZGl1cz1cIjJweFwiXG4gICAgZm9udFdlaWdodD17NjAwfVxuICAgIGxldHRlclNwYWNpbmc9XCIwLjA1NGVtXCJcbiAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgIGNzcz17e1xuICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgLi4uYmFkZ2VTdHlsZXMoYXBwZWFyYW5jZSwgaW50ZW50KSxcbiAgICB9fVxuICAgIHsuLi5yZXN0fVxuICA+XG4gICAge2NoaWxkcmVufVxuICA8L1RleHQ+XG4pO1xuXG5CYWRnZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGFwcGVhcmFuY2U6ICdzdWJ0bGUnLFxuICBpbnRlbnQ6ICdkZWZhdWx0JyxcbiAgc2l6ZTogMzAwLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFkZ2U7XG4iXX0= */"))
}, rest), children);

Badge.defaultProps = {
  appearance: 'subtle',
  intent: 'default',
  size: 300
};

// Unique ID creation requires a high quality random # generator.  In node.js
// this is pretty straight-forward - we use the crypto API.



var rng = function nodeRNG() {
  return crypto.randomBytes(16);
};

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

var bytesToUuid_1 = bytesToUuid;

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid_1(rnds);
}

var v4_1 = v4;

function _EMOTION_STRINGIFIED_CSS_ERROR__$2() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

const getControlSizeForTextSize = size => {
  if (size <= 300) return 16;
  if (size <= 400) return 20;
  if (size <= 500) return 20;
  if (size <= 600) return 24;
  return 24;
};

var _ref$2 = process.env.NODE_ENV === "production" ? {
  name: "14xntah-Checkbox",
  styles: "user-select:none;cursor:pointer;;label:Checkbox;"
} : {
  name: "14xntah-Checkbox",
  styles: "user-select:none;cursor:pointer;;label:Checkbox;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNoZWNrYm94LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDTSIsImZpbGUiOiJDaGVja2JveC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSBcImVtb3Rpb24tdGhlbWluZ1wiO1xuaW1wb3J0IHV1aWR2NCBmcm9tIFwidXVpZC92NFwiO1xuaW1wb3J0IGNzcyBmcm9tIFwiQHN0eWxlZC1zeXN0ZW0vY3NzXCI7XG5pbXBvcnQgeyBoaWRlVmlzdWFsbHksIHJnYmEgfSBmcm9tIFwicG9saXNoZWRcIjtcblxuaW1wb3J0IHsgQm94IH0gZnJvbSBcIi4uLy4uL2JveFwiO1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gXCIuLi8uLi90eXBvZ3JhcGh5XCI7XG5cbmNvbnN0IGdldENvbnRyb2xTaXplRm9yVGV4dFNpemUgPSBzaXplID0+IHtcbiAgaWYgKHNpemUgPD0gMzAwKSByZXR1cm4gMTY7XG4gIGlmIChzaXplIDw9IDQwMCkgcmV0dXJuIDIwO1xuICBpZiAoc2l6ZSA8PSA1MDApIHJldHVybiAyMDtcbiAgaWYgKHNpemUgPD0gNjAwKSByZXR1cm4gMjQ7XG4gIHJldHVybiAyNDtcbn07XG5cbmNvbnN0IENoZWNrYm94ID0gKHsgYmcsIGNoaWxkcmVuLCBpbmRldGVybWluYXRlLCBzaXplLCAuLi5yZXN0IH0pID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCB1aWQgPSB1dWlkdjQoKTtcbiAgY29uc3QgY3MgPSBnZXRDb250cm9sU2l6ZUZvclRleHRTaXplKHNpemUpIC0gNDtcblxuICByZXR1cm4gKFxuICAgIDxUZXh0XG4gICAgICBkYXRhLXBsYXlncm91bmQtaWQ9XCJjaGVja2JveFwiXG4gICAgICByb2xlPVwiY2hlY2tib3hcIlxuICAgICAgYXM9XCJsYWJlbFwiXG4gICAgICBodG1sRm9yPXt1aWR9XG4gICAgICBzaXplPXtzaXplfVxuICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgICBkaXNwbGF5PVwiaW5saW5lLWJsb2NrXCJcbiAgICAgIHBsPXtgY2FsYygke2NzICsgXCJweFwifSArIDRweClgfVxuICAgICAgY3NzPXt7IHVzZXJTZWxlY3Q6IFwibm9uZVwiLCBjdXJzb3I6IFwicG9pbnRlclwiIH19XG4gICAgPlxuICAgICAgPEJveFxuICAgICAgICBkYXRhLXBsYXlncm91bmQtaWQ9XCJjaGVja2JveC5oaWRkZW5JbnB1dFwiXG4gICAgICAgIGFzPVwiaW5wdXRcIlxuICAgICAgICBpZD17dWlkfVxuICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICByZWY9e2VsID0+IGVsICYmIChlbC5pbmRldGVybWluYXRlID0gaW5kZXRlcm1pbmF0ZSl9XG4gICAgICAgIGNzcz17Y3NzKHtcbiAgICAgICAgICAuLi5oaWRlVmlzdWFsbHkoKSxcbiAgICAgICAgICBcIisgZGl2XCI6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTpcbiAgICAgICAgICAgICAgXCJ1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpZFhSbUxUZ2lQejROQ2p3aExTMGdSMlZ1WlhKaGRHOXlPaUJCWkc5aVpTQkpiR3gxYzNSeVlYUnZjaUF4Tnk0eExqQXNJRk5XUnlCRmVIQnZjblFnVUd4MVp5MUpiaUF1SUZOV1J5QldaWEp6YVc5dU9pQTJMakF3SUVKMWFXeGtJREFwSUNBdExUNE5DandoUkU5RFZGbFFSU0J6ZG1jZ1VGVkNURWxESUNJdEx5OVhNME12TDBSVVJDQlRWa2NnTVM0eEx5OUZUaUlnSW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTDBkeVlYQm9hV056TDFOV1J5OHhMakV2UkZSRUwzTjJaekV4TG1SMFpDSStEUW84YzNabklIWmxjbk5wYjI0OUlqRXVNU0lnYVdROUlreGhlV1Z5WHpFaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpSUhnOUlqQndlQ0lnZVQwaU1IQjRJZzBLQ1NCMmFXVjNRbTk0UFNJd0lEQWdPQ0E0SWlCbGJtRmliR1V0WW1GamEyZHliM1Z1WkQwaWJtVjNJREFnTUNBNElEZ2lJSGh0YkRwemNHRmpaVDBpY0hKbGMyVnlkbVVpUGcwS1BIQmhkR2dnWm1sc2JEMGlJMFpHUmtaR1JpSWdaRDBpVFRZdU5Dd3hURFV1Tnl3eExqZE1NaTQ1TERRdU5Vd3lMakVzTXk0M1RERXVOQ3d6VERBc05DNDBiREF1Tnl3d0xqZHNNUzQxTERFdU5Xd3dMamNzTUM0M2JEQXVOeTB3TGpkc015NDFMVE11Tld3d0xqY3RNQzQzVERZdU5Dd3hURFl1TkN3eGVpSU5DZ2t2UGcwS1BDOXpkbWMrRFFvPSlcIixcbiAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcIjUwJSA1MCVcIixcbiAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCI1MCUgNTAlXCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxuICAgICAgICAgICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDAgMXB4ICR7cmdiYShcbiAgICAgICAgICAgICAgdGhlbWUuY29sb3JzLmdyYXlbOV0sXG4gICAgICAgICAgICAgIDAuMlxuICAgICAgICAgICAgKX0sIDAgMCAxcHggJHtyZ2JhKHRoZW1lLmNvbG9ycy5ncmF5WzRdLCAwLjEpfSwgMCAxcHggMnB4ICR7cmdiYShcbiAgICAgICAgICAgICAgdGhlbWUuY29sb3JzLmdyYXlbNF0sXG4gICAgICAgICAgICAgIDAuMVxuICAgICAgICAgICAgKX1gLFxuICAgICAgICAgICAgdXNlclNlbGVjdDogXCJub25lXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiOmNoZWNrZWQgKyBkaXZcIjoge1xuICAgICAgICAgICAgYmc6IFwiYmx1ZS41XCIsXG4gICAgICAgICAgICBib3hTaGFkb3c6IGBpbnNldCAwIDAgMCAxcHggJHtyZ2JhKFxuICAgICAgICAgICAgICB0aGVtZS5jb2xvcnMuZ3JheVs5XSxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgKX0sIDAgMCAxcHggJHtyZ2JhKHRoZW1lLmNvbG9ycy5ncmF5WzRdLCAwLjEpfSwgMCAxcHggMnB4ICR7cmdiYShcbiAgICAgICAgICAgICAgdGhlbWUuY29sb3JzLmdyYXlbNF0sXG4gICAgICAgICAgICAgIDAuMVxuICAgICAgICAgICAgKX1gXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIjppbmRldGVybWluYXRlICsgZGl2XCI6IHtcbiAgICAgICAgICAgIGJnOiBcImJsdWUuNVwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOlxuICAgICAgICAgICAgICBcInVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlkWFJtTFRnaVB6NE5DandoTFMwZ1IyVnVaWEpoZEc5eU9pQkJaRzlpWlNCSmJHeDFjM1J5WVhSdmNpQXhOeTR4TGpBc0lGTldSeUJGZUhCdmNuUWdVR3gxWnkxSmJpQXVJRk5XUnlCV1pYSnphVzl1T2lBMkxqQXdJRUoxYVd4a0lEQXBJQ0F0TFQ0TkNqd2hSRTlEVkZsUVJTQnpkbWNnVUZWQ1RFbERJQ0l0THk5WE0wTXZMMFJVUkNCVFZrY2dNUzR4THk5RlRpSWdJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MMGR5WVhCb2FXTnpMMU5XUnk4eExqRXZSRlJFTDNOMlp6RXhMbVIwWkNJK0RRbzhjM1puSUhabGNuTnBiMjQ5SWpFdU1TSWdhV1E5SWt4aGVXVnlYekVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZUcxc2JuTTZlR3hwYm1zOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2ZUd4cGJtc2lJSGc5SWpCd2VDSWdlVDBpTUhCNElnMEtDU0IzYVdSMGFEMGlPSEI0SWlCb1pXbG5hSFE5SWpod2VDSWdkbWxsZDBKdmVEMGlNQ0F3SURnZ09DSWdaVzVoWW14bExXSmhZMnRuY205MWJtUTlJbTVsZHlBd0lEQWdPQ0E0SWlCNGJXdzZjM0JoWTJVOUluQnlaWE5sY25abElqNE5Danh3WVhSb0lHWnBiR3c5SWlOR1JrWkdSa1lpSUdROUlrMHdMRE4yTW1nNFZqTklNSG9pTHo0TkNqd3ZjM1puUGcwSylcIixcbiAgICAgICAgICAgIGJveFNoYWRvdzogYGluc2V0IDAgMCAwIDFweCAke3JnYmEoXG4gICAgICAgICAgICAgIHRoZW1lLmNvbG9ycy5ncmF5WzldLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICApfSwgMCAwIDFweCAke3JnYmEodGhlbWUuY29sb3JzLmdyYXlbNF0sIDAuMSl9LCAwIDFweCAycHggJHtyZ2JhKFxuICAgICAgICAgICAgICB0aGVtZS5jb2xvcnMuZ3JheVs0XSxcbiAgICAgICAgICAgICAgMC4xXG4gICAgICAgICAgICApfWBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiOmFjdGl2ZSArIGRpdlwiOiB7XG4gICAgICAgICAgICBiZzogXCJibHVlLjFcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCI6Zm9jdXMgKyBkaXZcIjoge1xuICAgICAgICAgICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDAgMXB4ICR7dGhlbWUuY29sb3JzLmJsdWVbNF19LCAwIDAgMXB4ICR7cmdiYShcbiAgICAgICAgICAgICAgdGhlbWUuY29sb3JzLmdyYXlbNF0sXG4gICAgICAgICAgICAgIDAuMVxuICAgICAgICAgICAgKX0sIDAgMXB4IDJweCAke3JnYmEodGhlbWUuY29sb3JzLmdyYXlbNF0sIDAuMSl9YFxuICAgICAgICAgIH1cbiAgICAgICAgfSl9XG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgLz5cbiAgICAgIDxCb3hcbiAgICAgICAgZGF0YS1wbGF5Z3JvdW5kLWlkPVwiY2hlY2tib3guY29udHJvbFwiXG4gICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgICB0b3A9XCJzcGFjaW5nLjFcIlxuICAgICAgICBsZWZ0PXswfVxuICAgICAgICBkaXNwbGF5PVwiYmxvY2tcIlxuICAgICAgICB3aWR0aD17Y3N9XG4gICAgICAgIGhlaWdodD17Y3N9XG4gICAgICAgIGJvcmRlclJhZGl1cz1cIjJweFwiXG4gICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICBiZz17Ymd9XG4gICAgICAvPlxuICAgICAgPEJveCBkYXRhLXBsYXlncm91bmQtaWQ9XCJjaGVja2JveC50ZXh0XCIgYXM9XCJzcGFuXCI+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvQm94PlxuICAgIDwvVGV4dD5cbiAgKTtcbn07XG5cbkNoZWNrYm94LmRlZmF1bHRQcm9wcyA9IHtcbiAgYmc6IFwid2hpdGVcIixcbiAgc2l6ZTogNDAwXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveDtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$2
};

const Checkbox = ({
  bg,
  children,
  indeterminate,
  size,
  ...rest
}) => {
  const theme = emotionTheming.useTheme();
  const uid = v4_1();
  const cs = getControlSizeForTextSize(size) - 4;
  return core.jsx(Text, {
    "data-playground-id": "checkbox",
    role: "checkbox",
    as: "label",
    htmlFor: uid,
    size: size,
    position: "relative",
    display: "inline-block",
    pl: `calc(${cs + "px"} + 4px)`,
    css: _ref$2
  }, core.jsx(Box, _extends({
    "data-playground-id": "checkbox.hiddenInput",
    as: "input",
    id: uid,
    type: "checkbox",
    ref: el => el && (el.indeterminate = indeterminate),
    css: css({ ...hideVisually(),
      "+ div": {
        backgroundImage: "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgOCA4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA4IDgiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTYuNCwxTDUuNywxLjdMMi45LDQuNUwyLjEsMy43TDEuNCwzTDAsNC40bDAuNywwLjdsMS41LDEuNWwwLjcsMC43bDAuNy0wLjdsMy41LTMuNWwwLjctMC43TDYuNCwxTDYuNCwxeiINCgkvPg0KPC9zdmc+DQo=)",
        backgroundSize: "50% 50%",
        backgroundPosition: "50% 50%",
        backgroundRepeat: "no-repeat",
        boxShadow: `inset 0 0 0 1px ${rgba(theme.colors.gray[9], 0.2)}, 0 0 1px ${rgba(theme.colors.gray[4], 0.1)}, 0 1px 2px ${rgba(theme.colors.gray[4], 0.1)}`,
        userSelect: "none"
      },
      ":checked + div": {
        bg: "blue.5",
        boxShadow: `inset 0 0 0 1px ${rgba(theme.colors.gray[9], 0)}, 0 0 1px ${rgba(theme.colors.gray[4], 0.1)}, 0 1px 2px ${rgba(theme.colors.gray[4], 0.1)}`
      },
      ":indeterminate + div": {
        bg: "blue.5",
        backgroundImage: "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iOHB4IiBoZWlnaHQ9IjhweCIgdmlld0JveD0iMCAwIDggOCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgOCA4IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0wLDN2Mmg4VjNIMHoiLz4NCjwvc3ZnPg0K)",
        boxShadow: `inset 0 0 0 1px ${rgba(theme.colors.gray[9], 0)}, 0 0 1px ${rgba(theme.colors.gray[4], 0.1)}, 0 1px 2px ${rgba(theme.colors.gray[4], 0.1)}`
      },
      ":active + div": {
        bg: "blue.1"
      },
      ":focus + div": {
        boxShadow: `inset 0 0 0 1px ${theme.colors.blue[4]}, 0 0 1px ${rgba(theme.colors.gray[4], 0.1)}, 0 1px 2px ${rgba(theme.colors.gray[4], 0.1)}`
      }
    })
  }, rest)), core.jsx(Box, {
    "data-playground-id": "checkbox.control",
    position: "absolute",
    top: "spacing.1",
    left: 0,
    display: "block",
    width: cs,
    height: cs,
    borderRadius: "2px",
    color: "white",
    bg: bg
  }), core.jsx(Box, {
    "data-playground-id": "checkbox.text",
    as: "span"
  }, children));
};

Checkbox.defaultProps = {
  bg: "white",
  size: 400
};

var toggleSelection = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};

var defaultMessage = "Copy to clipboard: #{key}, Enter";

function format$1(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug,
    message,
    reselectPrevious,
    range,
    selection,
    mark,
    success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = toggleSelection();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement("span");
    mark.textContent = text;
    // reset user styles for span element
    mark.style.all = "unset";
    // prevents scrolling to the end of the page
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = "pre";
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        e.clipboardData.clearData();
        e.clipboardData.setData(options.format, text);
      }
    });

    document.body.appendChild(mark);

    range.selectNodeContents(mark);
    selection.addRange(range);

    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      success = true;
    } catch (err) {
      debug && console.error("unable to copy using clipboardData: ", err);
      debug && console.error("falling back to prompt");
      message = format$1("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

var copyToClipboard = copy;

var Component$1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CopyToClipboard = void 0;

var _react = _interopRequireDefault(React__default);

var _copyToClipboard = _interopRequireDefault(copyToClipboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CopyToClipboard =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(CopyToClipboard, _React$PureComponent);

  function CopyToClipboard() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CopyToClipboard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CopyToClipboard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onClick", function (event) {
      var _this$props = _this.props,
          text = _this$props.text,
          onCopy = _this$props.onCopy,
          children = _this$props.children,
          options = _this$props.options;

      var elem = _react["default"].Children.only(children);

      var result = (0, _copyToClipboard["default"])(text, options);

      if (onCopy) {
        onCopy(text, result);
      } // Bypass onClick if it was present


      if (elem && elem.props && typeof elem.props.onClick === 'function') {
        elem.props.onClick(event);
      }
    });

    return _this;
  }

  _createClass(CopyToClipboard, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          _text = _this$props2.text,
          _onCopy = _this$props2.onCopy,
          _options = _this$props2.options,
          children = _this$props2.children,
          props = _objectWithoutProperties(_this$props2, ["text", "onCopy", "options", "children"]);

      var elem = _react["default"].Children.only(children);

      return _react["default"].cloneElement(elem, _objectSpread({}, props, {
        onClick: this.onClick
      }));
    }
  }]);

  return CopyToClipboard;
}(_react["default"].PureComponent);

exports.CopyToClipboard = CopyToClipboard;

_defineProperty(CopyToClipboard, "defaultProps", {
  onCopy: undefined,
  options: undefined
});
});

unwrapExports(Component$1);
var Component_1 = Component$1.CopyToClipboard;

var CopyToClipboard = Component$1.CopyToClipboard;

CopyToClipboard.CopyToClipboard = CopyToClipboard;
var lib = CopyToClipboard;
var lib_1 = lib.CopyToClipboard;

function _EMOTION_STRINGIFIED_CSS_ERROR__$3() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
const height$1 = 32;

var _ref$3 = process.env.NODE_ENV === "production" ? {
  name: "njhouy-CodeSnippet",
  styles: "white-space:nowrap;;label:CodeSnippet;"
} : {
  name: "njhouy-CodeSnippet",
  styles: "white-space:nowrap;;label:CodeSnippet;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvZGVTbmlwcGV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDNEIiLCJmaWxlIjoiQ29kZVNuaXBwZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29weVRvQ2xpcGJvYXJkIH0gZnJvbSAncmVhY3QtY29weS10by1jbGlwYm9hcmQnO1xuaW1wb3J0IHsgbWRpQ29udGVudENvcHkgfSBmcm9tICdAbWRpL2pzJztcblxuaW1wb3J0IHsgQm94IH0gZnJvbSAnLi4vLi4vYm94JztcbmltcG9ydCB7IEljb25CdXR0b24gfSBmcm9tICcuLi8uLi9idXR0b25zJztcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5JztcblxuY29uc3QgaGVpZ2h0ID0gMzI7XG5cbmNvbnN0IENvZGVTbmlwcGV0ID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8Qm94XG4gICAgZGF0YS1wbGF5Z3JvdW5kLWlkPVwiY29kZVNuaXBwZXRcIlxuICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICBib3JkZXJSYWRpdXM9XCIzcHhcIlxuICAgIGJnPVwiZ3JheS4xXCJcbiAgPlxuICAgIDxCb3hcbiAgICAgIGRhdGEtcGxheWdyb3VuZC1pZD1cImNvZGVTbmlwcGV0LmNvbnRhaW5lclwiXG4gICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgIGZsZXg9ezF9XG4gICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgIG92ZXJmbG93WD1cImF1dG9cIlxuICAgID5cbiAgICAgIDxUZXh0XG4gICAgICAgIGRhdGEtcGxheWdyb3VuZC1pZD1cImNvZGVTbmlwcGV0LmNvZGVcIlxuICAgICAgICBhcz1cImNvZGVcIlxuICAgICAgICBzaXplPXszMDB9XG4gICAgICAgIHB4PVwic3BhY2luZy40XCJcbiAgICAgICAgZm9udEZhbWlseT1cIm1vbm9cIlxuICAgICAgICBjb2xvcj1cImJsYWNrXCJcbiAgICAgID5cbiAgICAgICAgPEJveCBhcz1cInByZVwiIG09ezB9IGNzcz17eyB3aGl0ZVNwYWNlOiAnbm93cmFwJyB9fT5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9UZXh0PlxuICAgIDwvQm94PlxuXG4gICAgPEJveFxuICAgICAgZGF0YS1wbGF5Z3JvdW5kLWlkPVwiY29kZVNuaXBwZXQuZ3JhZGllbnRcIlxuICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXG4gICAgICB0b3A9ezB9XG4gICAgICByaWdodD17aGVpZ2h0fVxuICAgICAgd2lkdGg9XCIzMnB4XCJcbiAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgY29sb3I9XCJncmF5LjFcIlxuICAgICAgY3NzPXt7XG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgdHJhbnNwYXJlbnQsIGN1cnJlbnRDb2xvciknLFxuICAgICAgfX1cbiAgICAvPlxuXG4gICAgPENvcHlUb0NsaXBib2FyZCB0ZXh0PXtjaGlsZHJlbn0+XG4gICAgICA8SWNvbkJ1dHRvblxuICAgICAgICBkYXRhLXBsYXlncm91bmQtaWQ9XCJjb2RlU25pcHBldC5jb3B5VG9DbGlwYm9hcmRcIlxuICAgICAgICBsYWJlbD1cIkNvcHkgdG8gY2xpcGJvYXJkXCJcbiAgICAgICAgaWNvbj17bWRpQ29udGVudENvcHl9XG4gICAgICAgIGludGVudD1cImRlZmF1bHRcIlxuICAgICAgICBhcHBlYXJhbmNlPVwibWluaW1hbFwiXG4gICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgLz5cbiAgICA8L0NvcHlUb0NsaXBib2FyZD5cbiAgPC9Cb3g+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBDb2RlU25pcHBldDtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$3
};

var _ref2$2 = process.env.NODE_ENV === "production" ? {
  name: "12k5vni-CodeSnippet",
  styles: "background-image:linear-gradient(to right, transparent, currentColor);;label:CodeSnippet;"
} : {
  name: "12k5vni-CodeSnippet",
  styles: "background-image:linear-gradient(to right, transparent, currentColor);;label:CodeSnippet;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvZGVTbmlwcGV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdETSIsImZpbGUiOiJDb2RlU25pcHBldC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb3B5VG9DbGlwYm9hcmQgfSBmcm9tICdyZWFjdC1jb3B5LXRvLWNsaXBib2FyZCc7XG5pbXBvcnQgeyBtZGlDb250ZW50Q29weSB9IGZyb20gJ0BtZGkvanMnO1xuXG5pbXBvcnQgeyBCb3ggfSBmcm9tICcuLi8uLi9ib3gnO1xuaW1wb3J0IHsgSWNvbkJ1dHRvbiB9IGZyb20gJy4uLy4uL2J1dHRvbnMnO1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknO1xuXG5jb25zdCBoZWlnaHQgPSAzMjtcblxuY29uc3QgQ29kZVNuaXBwZXQgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxCb3hcbiAgICBkYXRhLXBsYXlncm91bmQtaWQ9XCJjb2RlU25pcHBldFwiXG4gICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgZGlzcGxheT1cImZsZXhcIlxuICAgIGJvcmRlclJhZGl1cz1cIjNweFwiXG4gICAgYmc9XCJncmF5LjFcIlxuICA+XG4gICAgPEJveFxuICAgICAgZGF0YS1wbGF5Z3JvdW5kLWlkPVwiY29kZVNuaXBwZXQuY29udGFpbmVyXCJcbiAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgZmxleD17MX1cbiAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgb3ZlcmZsb3dYPVwiYXV0b1wiXG4gICAgPlxuICAgICAgPFRleHRcbiAgICAgICAgZGF0YS1wbGF5Z3JvdW5kLWlkPVwiY29kZVNuaXBwZXQuY29kZVwiXG4gICAgICAgIGFzPVwiY29kZVwiXG4gICAgICAgIHNpemU9ezMwMH1cbiAgICAgICAgcHg9XCJzcGFjaW5nLjRcIlxuICAgICAgICBmb250RmFtaWx5PVwibW9ub1wiXG4gICAgICAgIGNvbG9yPVwiYmxhY2tcIlxuICAgICAgPlxuICAgICAgICA8Qm94IGFzPVwicHJlXCIgbT17MH0gY3NzPXt7IHdoaXRlU3BhY2U6ICdub3dyYXAnIH19PlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L1RleHQ+XG4gICAgPC9Cb3g+XG5cbiAgICA8Qm94XG4gICAgICBkYXRhLXBsYXlncm91bmQtaWQ9XCJjb2RlU25pcHBldC5ncmFkaWVudFwiXG4gICAgICBwb3NpdGlvbj1cImFic29sdXRlXCJcbiAgICAgIHRvcD17MH1cbiAgICAgIHJpZ2h0PXtoZWlnaHR9XG4gICAgICB3aWR0aD1cIjMycHhcIlxuICAgICAgaGVpZ2h0PVwiMTAwJVwiXG4gICAgICBjb2xvcj1cImdyYXkuMVwiXG4gICAgICBjc3M9e3tcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiAnbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB0cmFuc3BhcmVudCwgY3VycmVudENvbG9yKScsXG4gICAgICB9fVxuICAgIC8+XG5cbiAgICA8Q29weVRvQ2xpcGJvYXJkIHRleHQ9e2NoaWxkcmVufT5cbiAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgIGRhdGEtcGxheWdyb3VuZC1pZD1cImNvZGVTbmlwcGV0LmNvcHlUb0NsaXBib2FyZFwiXG4gICAgICAgIGxhYmVsPVwiQ29weSB0byBjbGlwYm9hcmRcIlxuICAgICAgICBpY29uPXttZGlDb250ZW50Q29weX1cbiAgICAgICAgaW50ZW50PVwiZGVmYXVsdFwiXG4gICAgICAgIGFwcGVhcmFuY2U9XCJtaW5pbWFsXCJcbiAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAvPlxuICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICA8L0JveD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IENvZGVTbmlwcGV0O1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$3
};

const CodeSnippet = ({
  children
}) => core.jsx(Box, {
  "data-playground-id": "codeSnippet",
  position: "relative",
  display: "flex",
  borderRadius: "3px",
  bg: "gray.1"
}, core.jsx(Box, {
  "data-playground-id": "codeSnippet.container",
  display: "flex",
  alignItems: "center",
  flex: 1,
  height: height$1,
  overflowX: "auto"
}, core.jsx(Text, {
  "data-playground-id": "codeSnippet.code",
  as: "code",
  size: 300,
  px: "spacing.4",
  fontFamily: "mono",
  color: "black"
}, core.jsx(Box, {
  as: "pre",
  m: 0,
  css: _ref$3
}, children))), core.jsx(Box, {
  "data-playground-id": "codeSnippet.gradient",
  position: "absolute",
  top: 0,
  right: height$1,
  width: "32px",
  height: "100%",
  color: "gray.1",
  css: _ref2$2
}), core.jsx(lib_1, {
  text: children
}, core.jsx(IconButton, {
  "data-playground-id": "codeSnippet.copyToClipboard",
  label: "Copy to clipboard",
  icon: mdiContentCopy,
  intent: "default",
  appearance: "minimal",
  height: height$1
})));

const InlineCodeSnippet = ({
  children
}) => core.jsx(Box, {
  "data-playground-id": "inlineCodeSnippet",
  as: "button",
  position: "relative",
  display: "inline",
  m: 0,
  p: 0,
  border: "2px solid",
  borderColor: "gray.1",
  borderRadius: "3px",
  fontFamily: "mono",
  fontSize: "0.875em",
  verticalAlign: "baseline",
  color: "black",
  bg: "gray.1"
}, core.jsx(Box, {
  "data-playground-id": "inlineCodeSnippet.code",
  as: "code",
  px: "spacing.2"
}, children));

const MultiLineCodeSnippet = ({
  children
}) => core.jsx(Box, {
  "data-playground-id": "multiLineCodeSnippet",
  position: "relative",
  borderRadius: "3px",
  bg: "gray.1"
}, core.jsx(Box, {
  "data-playground-id": "multiLineCodeSnippet.container",
  flex: 1,
  p: "spacing.4",
  overflow: "auto"
}, core.jsx(Text, {
  "data-playground-id": "multiLineCodeSnippet.code",
  as: "code",
  size: 300,
  fontFamily: "mono",
  color: "black"
}, core.jsx(Box, {
  as: "pre",
  m: 0
}, children))), core.jsx(lib_1, {
  text: children
}, core.jsx(IconButton, {
  "data-playground-id": "multiLineCodeSnippet.copyToClipboard",
  label: "Copy to clipboard",
  icon: mdiContentCopy,
  intent: "default",
  appearance: "minimal",
  position: "absolute",
  top: 0,
  right: 0,
  height: 32
})));

function _objectWithoutPropertiesLoose$2(source, excluded) {
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

var FOCUS_GROUP = 'data-focus-lock';
var FOCUS_DISABLED = 'data-focus-lock-disabled';
var FOCUS_ALLOW = 'data-no-focus-lock';
var FOCUS_AUTO = 'data-autofocus-inside';

function assignRef$1(ref, value) {
    if (typeof ref === 'function') {
        ref(value);
    }
    else if (ref != null) {
        ref.current = value;
    }
    return ref;
}

function useCallbackRef(initialValue, callback) {
    var ref = React.useState(function () { return ({
        value: initialValue,
        callback: callback,
        facade: {
            get current() {
                return ref.value;
            },
            set current(value) {
                var last = ref.value;
                if (last !== value) {
                    ref.value = value;
                    ref.callback(value, last);
                }
            }
        }
    }); })[0];
    ref.callback = callback;
    return ref.facade;
}

function useMergeRefs(refs, defaultValue) {
    return useCallbackRef(defaultValue, function (newValue) {
        return refs.forEach(function (ref) { return assignRef$1(ref, newValue); });
    });
}

var hiddenGuard = {
  width: '1px',
  height: '0px',
  padding: 0,
  overflow: 'hidden',
  position: 'fixed',
  top: '1px',
  left: '1px'
};

var InFocusGuard = function InFocusGuard(_ref) {
  var children = _ref.children;
  return React__default.createElement(React__default.Fragment, null, React__default.createElement("div", {
    key: "guard-first",
    "data-focus-guard": true,
    "data-focus-auto-guard": true,
    style: hiddenGuard
  }), children, children && React__default.createElement("div", {
    key: "guard-last",
    "data-focus-guard": true,
    "data-focus-auto-guard": true,
    style: hiddenGuard
  }));
};

InFocusGuard.propTypes = process.env.NODE_ENV !== "production" ? {
  children: propTypes.node
} : {};
InFocusGuard.defaultProps = {
  children: null
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function ItoI(a) {
    return a;
}
function innerCreateMedium(defaults, middleware) {
    if (middleware === void 0) { middleware = ItoI; }
    var buffer = [];
    var assigned = false;
    var medium = {
        read: function () {
            if (assigned) {
                throw new Error('Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.');
            }
            if (buffer.length) {
                return buffer[buffer.length - 1];
            }
            return defaults;
        },
        useMedium: function (data) {
            var item = middleware(data, assigned);
            buffer.push(item);
            return function () {
                buffer = buffer.filter(function (x) { return x !== item; });
            };
        },
        assignSyncMedium: function (cb) {
            assigned = true;
            while (buffer.length) {
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
            }
            buffer = {
                push: function (x) { return cb(x); },
                filter: function () { return buffer; },
            };
        },
        assignMedium: function (cb) {
            assigned = true;
            var pendingQueue = [];
            if (buffer.length) {
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
                pendingQueue = buffer;
            }
            var executeQueue = function () {
                var cbs = pendingQueue;
                pendingQueue = [];
                cbs.forEach(cb);
            };
            var cycle = function () { return Promise.resolve().then(executeQueue); };
            cycle();
            buffer = {
                push: function (x) {
                    pendingQueue.push(x);
                    cycle();
                },
                filter: function (filter) {
                    pendingQueue = pendingQueue.filter(filter);
                    return buffer;
                },
            };
        },
    };
    return medium;
}
function createMedium(defaults, middleware) {
    if (middleware === void 0) { middleware = ItoI; }
    return innerCreateMedium(defaults, middleware);
}
function createSidecarMedium(options) {
    if (options === void 0) { options = {}; }
    var medium = innerCreateMedium(null);
    medium.options = __assign({ async: true, ssr: false }, options);
    return medium;
}

var SideCar = function (_a) {
    var sideCar = _a.sideCar, rest = __rest(_a, ["sideCar"]);
    if (!sideCar) {
        throw new Error('Sidecar: please provide `sideCar` property to import the right car');
    }
    var Target = sideCar.read();
    if (!Target) {
        throw new Error('Sidecar medium not found');
    }
    return React.createElement(Target, __assign({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
    medium.useMedium(exported);
    return SideCar;
}

var mediumFocus = createMedium({}, function (_ref) {
  var target = _ref.target,
      currentTarget = _ref.currentTarget;
  return {
    target: target,
    currentTarget: currentTarget
  };
});
var mediumBlur = createMedium();
var mediumEffect = createMedium();
var mediumSidecar = createSidecarMedium({
  async: true
});

var emptyArray = [];
var FocusLock = React__default.forwardRef(function (props, parentRef) {
  var _extends2;

  var _useState = React.useState(),
      realObserved = _useState[0],
      setObserved = _useState[1];

  var observed = React.useRef();
  var isActive = React.useRef(false);
  var originalFocusedElement = React.useRef(null);
  var children = props.children,
      disabled = props.disabled,
      noFocusGuards = props.noFocusGuards,
      persistentFocus = props.persistentFocus,
      autoFocus = props.autoFocus,
      allowTextSelection = props.allowTextSelection,
      group = props.group,
      className = props.className,
      whiteList = props.whiteList,
      _props$shards = props.shards,
      shards = _props$shards === void 0 ? emptyArray : _props$shards,
      _props$as = props.as,
      Container = _props$as === void 0 ? 'div' : _props$as,
      _props$lockProps = props.lockProps,
      containerProps = _props$lockProps === void 0 ? {} : _props$lockProps,
      SideCar = props.sideCar,
      shouldReturnFocus = props.returnFocus,
      onActivationCallback = props.onActivation,
      onDeactivationCallback = props.onDeactivation;

  var _useState2 = React.useState({}),
      id = _useState2[0]; // SIDE EFFECT CALLBACKS


  var onActivation = React.useCallback(function () {
    originalFocusedElement.current = originalFocusedElement.current || document && document.activeElement;

    if (observed.current && onActivationCallback) {
      onActivationCallback(observed.current);
    }

    isActive.current = true;
  }, [onActivationCallback]);
  var onDeactivation = React.useCallback(function () {
    isActive.current = false;

    if (onDeactivationCallback) {
      onDeactivationCallback(observed.current);
    }
  }, [onDeactivationCallback]);
  var returnFocus = React.useCallback(function (allowDefer) {
    var current = originalFocusedElement.current;

    if (Boolean(shouldReturnFocus) && current && current.focus) {
      var focusOptions = typeof shouldReturnFocus === 'object' ? shouldReturnFocus : undefined;
      originalFocusedElement.current = null;

      if (allowDefer) {
        // React might return focus after update
        // it's safer to defer the action
        Promise.resolve().then(function () {
          return current.focus(focusOptions);
        });
      } else {
        current.focus(focusOptions);
      }
    }
  }, [shouldReturnFocus]); // MEDIUM CALLBACKS

  var onFocus = React.useCallback(function (event) {
    if (isActive.current) {
      mediumFocus.useMedium(event);
    }
  }, []);
  var onBlur = mediumBlur.useMedium; // REF PROPAGATION
  // not using real refs due to race conditions

  var setObserveNode = React.useCallback(function (newObserved) {
    if (observed.current !== newObserved) {
      observed.current = newObserved;
      setObserved(newObserved);
    }
  }, []);

  if (process.env.NODE_ENV !== 'production') {
    if (typeof allowTextSelection !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn('React-Focus-Lock: allowTextSelection is deprecated and enabled by default');
    }

    React__default.useEffect(function () {
      if (!observed.current) {
        // eslint-disable-next-line no-console
        console.error('FocusLock: could not obtain ref to internal node');
      }
    }, []);
  }

  var lockProps = _extends$4((_extends2 = {}, _extends2[FOCUS_DISABLED] = disabled && 'disabled', _extends2[FOCUS_GROUP] = group, _extends2), containerProps);

  var hasLeadingGuards = noFocusGuards !== true;
  var hasTailingGuards = hasLeadingGuards && noFocusGuards !== 'tail';
  var mergedRef = useMergeRefs([parentRef, setObserveNode]);
  return React__default.createElement(React__default.Fragment, null, hasLeadingGuards && [React__default.createElement("div", {
    key: "guard-first",
    "data-focus-guard": true,
    tabIndex: disabled ? -1 : 0,
    style: hiddenGuard
  }), // nearest focus guard
  React__default.createElement("div", {
    key: "guard-nearest",
    "data-focus-guard": true,
    tabIndex: disabled ? -1 : 1,
    style: hiddenGuard
  })], !disabled && React__default.createElement(SideCar, {
    id: id,
    sideCar: mediumSidecar,
    observed: realObserved,
    disabled: disabled,
    persistentFocus: persistentFocus,
    autoFocus: autoFocus,
    whiteList: whiteList,
    shards: shards,
    onActivation: onActivation,
    onDeactivation: onDeactivation,
    returnFocus: returnFocus
  }), React__default.createElement(Container, _extends$4({
    ref: mergedRef
  }, lockProps, {
    className: className,
    onBlur: onBlur,
    onFocus: onFocus
  }), children), hasTailingGuards && React__default.createElement("div", {
    "data-focus-guard": true,
    tabIndex: disabled ? -1 : 0,
    style: hiddenGuard
  }));
});
FocusLock.propTypes = process.env.NODE_ENV !== "production" ? {
  children: propTypes_13,
  disabled: propTypes_2,
  returnFocus: propTypes_16([propTypes_2, propTypes_5]),
  noFocusGuards: propTypes_2,
  allowTextSelection: propTypes_2,
  autoFocus: propTypes_2,
  persistentFocus: propTypes_2,
  group: propTypes_6,
  className: propTypes_6,
  whiteList: propTypes_3,
  shards: propTypes_9(propTypes_8),
  as: propTypes_16([propTypes_6, propTypes_3, propTypes_5]),
  lockProps: propTypes_5,
  onActivation: propTypes_3,
  onDeactivation: propTypes_3,
  sideCar: propTypes_8.isRequired
} : {};
FocusLock.defaultProps = {
  children: undefined,
  disabled: false,
  returnFocus: false,
  noFocusGuards: false,
  autoFocus: true,
  persistentFocus: false,
  allowTextSelection: undefined,
  group: undefined,
  className: undefined,
  whiteList: undefined,
  shards: undefined,
  as: 'div',
  lockProps: {},
  onActivation: undefined,
  onDeactivation: undefined
};

function _defineProperty$2(obj, key, value) {
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

function withSideEffect(reducePropsToState, handleStateChangeOnClient) {
  if (process.env.NODE_ENV !== "production") {
    if (typeof reducePropsToState !== 'function') {
      throw new Error('Expected reducePropsToState to be a function.');
    }

    if (typeof handleStateChangeOnClient !== 'function') {
      throw new Error('Expected handleStateChangeOnClient to be a function.');
    }
  }

  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  return function wrap(WrappedComponent) {
    if (process.env.NODE_ENV !== "production") {
      if (typeof WrappedComponent !== 'function') {
        throw new Error('Expected WrappedComponent to be a React component.');
      }
    }

    var mountedInstances = [];
    var state;

    function emitChange() {
      state = reducePropsToState(mountedInstances.map(function (instance) {
        return instance.props;
      }));
      handleStateChangeOnClient(state);
    }

    var SideEffect =
    /*#__PURE__*/
    function (_PureComponent) {
      _inheritsLoose(SideEffect, _PureComponent);

      function SideEffect() {
        return _PureComponent.apply(this, arguments) || this;
      }

      // Try to use displayName of wrapped component
      SideEffect.peek = function peek() {
        return state;
      };

      var _proto = SideEffect.prototype;

      _proto.componentDidMount = function componentDidMount() {
        mountedInstances.push(this);
        emitChange();
      };

      _proto.componentDidUpdate = function componentDidUpdate() {
        emitChange();
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        var index = mountedInstances.indexOf(this);
        mountedInstances.splice(index, 1);
        emitChange();
      };

      _proto.render = function render() {
        return React__default.createElement(WrappedComponent, this.props);
      };

      return SideEffect;
    }(React.PureComponent);

    _defineProperty$2(SideEffect, "displayName", "SideEffect(" + getDisplayName(WrappedComponent) + ")");

    return SideEffect;
  };
}

var toArray = function toArray(a) {
  var ret = Array(a.length);
  for (var i = 0; i < a.length; ++i) {
    ret[i] = a[i];
  }
  return ret;
};

var arrayFind = function arrayFind(array, search) {
  return array.filter(function (a) {
    return a === search;
  })[0];
};

var asArray = function asArray(a) {
  return Array.isArray(a) ? a : [a];
};

var tabSort = function tabSort(a, b) {
  var tabDiff = a.tabIndex - b.tabIndex;
  var indexDiff = a.index - b.index;

  if (tabDiff) {
    if (!a.tabIndex) return 1;
    if (!b.tabIndex) return -1;
  }

  return tabDiff || indexDiff;
};

var orderByTabIndex = function orderByTabIndex(nodes, filterNegative, keepGuards) {
  return toArray(nodes).map(function (node, index) {
    return {
      node: node,
      index: index,
      tabIndex: keepGuards && node.tabIndex === -1 ? (node.dataset || {}).focusGuard ? 0 : -1 : node.tabIndex
    };
  }).filter(function (data) {
    return !filterNegative || data.tabIndex >= 0;
  }).sort(tabSort);
};

var tabbables = ['button:enabled:not([readonly])', 'select:enabled:not([readonly])', 'textarea:enabled:not([readonly])', 'input:enabled:not([readonly])', 'a[href]', 'area[href]', 'iframe', 'object', 'embed', '[tabindex]', '[contenteditable]', '[autofocus]'];

var queryTabbables = tabbables.join(',');
var queryGuardTabbables = queryTabbables + ', [data-focus-guard]';

var getFocusables = function getFocusables(parents, withGuards) {
  return parents.reduce(function (acc, parent) {
    return acc.concat(
    // add all tabbables inside
    toArray(parent.querySelectorAll(withGuards ? queryGuardTabbables : queryTabbables)),
    // add if node is tabble itself
    parent.parentNode ? toArray(parent.parentNode.querySelectorAll(tabbables.join(','))).filter(function (node) {
      return node === parent;
    }) : []);
  }, []);
};

var getParentAutofocusables = function getParentAutofocusables(parent) {
  var parentFocus = parent.querySelectorAll('[' + FOCUS_AUTO + ']');
  return toArray(parentFocus).map(function (node) {
    return getFocusables([node]);
  }).reduce(function (acc, nodes) {
    return acc.concat(nodes);
  }, []);
};

var isElementHidden = function isElementHidden(computedStyle) {
  if (!computedStyle || !computedStyle.getPropertyValue) {
    return false;
  }
  return computedStyle.getPropertyValue('display') === 'none' || computedStyle.getPropertyValue('visibility') === 'hidden';
};

var isVisible = function isVisible(node) {
  return !node || node === document || node.nodeType === Node.DOCUMENT_NODE || !isElementHidden(window.getComputedStyle(node, null)) && isVisible(node.parentNode);
};

var notHiddenInput = function notHiddenInput(node) {
  return !((node.tagName === 'INPUT' || node.tagName === 'BUTTON') && (node.type === 'hidden' || node.disabled));
};

var getParents = function getParents(node) {
  var parents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  parents.push(node);
  if (node.parentNode) {
    getParents(node.parentNode, parents);
  }
  return parents;
};

var getCommonParent = function getCommonParent(nodea, nodeb) {
  var parentsA = getParents(nodea);
  var parentsB = getParents(nodeb);

  for (var i = 0; i < parentsA.length; i += 1) {
    var currentParent = parentsA[i];
    if (parentsB.indexOf(currentParent) >= 0) {
      return currentParent;
    }
  }
  return false;
};

var filterFocusable = function filterFocusable(nodes) {
  return toArray(nodes).filter(function (node) {
    return isVisible(node);
  }).filter(function (node) {
    return notHiddenInput(node);
  });
};

var getTabbableNodes = function getTabbableNodes(topNodes, withGuards) {
  return orderByTabIndex(filterFocusable(getFocusables(topNodes, withGuards)), true, withGuards);
};

var getAllTabbableNodes = function getAllTabbableNodes(topNodes) {
  return orderByTabIndex(filterFocusable(getFocusables(topNodes)), false);
};

var parentAutofocusables = function parentAutofocusables(topNode) {
  return filterFocusable(getParentAutofocusables(topNode));
};

var isRadio = function isRadio(node) {
  return node.tagName === 'INPUT' && node.type === 'radio';
};

var findSelectedRadio = function findSelectedRadio(node, nodes) {
  return nodes.filter(isRadio).filter(function (el) {
    return el.name === node.name;
  }).filter(function (el) {
    return el.checked;
  })[0] || node;
};

var pickFirstFocus = function pickFirstFocus(nodes) {
  if (nodes[0] && nodes.length > 1) {
    if (isRadio(nodes[0]) && nodes[0].name) {
      return findSelectedRadio(nodes[0], nodes);
    }
  }
  return nodes[0];
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var filterNested = function filterNested(nodes) {
  var l = nodes.length;
  for (var i = 0; i < l; i += 1) {
    var _loop = function _loop(j) {
      if (i !== j) {
        if (nodes[i].contains(nodes[j])) {
          return {
            v: filterNested(nodes.filter(function (x) {
              return x !== nodes[j];
            }))
          };
        }
      }
    };

    for (var j = 0; j < l; j += 1) {
      var _ret = _loop(j);

      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
    }
  }
  return nodes;
};

var getTopParent = function getTopParent(node) {
  return node.parentNode ? getTopParent(node.parentNode) : node;
};

var getAllAffectedNodes = function getAllAffectedNodes(node) {
  var nodes = asArray(node);
  return nodes.filter(Boolean).reduce(function (acc, currentNode) {
    var group = currentNode.getAttribute(FOCUS_GROUP);
    acc.push.apply(acc, group ? filterNested(toArray(getTopParent(currentNode).querySelectorAll('[' + FOCUS_GROUP + '="' + group + '"]:not([' + FOCUS_DISABLED + '="disabled"])'))) : [currentNode]);
    return acc;
  }, []);
};

var findAutoFocused = function findAutoFocused(autoFocusables) {
  return function (node) {
    return !!node.autofocus || node.dataset && !!node.dataset.autofocus || autoFocusables.indexOf(node) >= 0;
  };
};

var isGuard = function isGuard(node) {
  return node.dataset && node.dataset.focusGuard;
};
var notAGuard = function notAGuard(node) {
  return !isGuard(node);
};

var newFocus = function newFocus(innerNodes, outerNodes, activeElement, lastNode, autoFocused) {
  var cnt = innerNodes.length;
  var firstFocus = innerNodes[0];
  var lastFocus = innerNodes[cnt - 1];

  // focus is inside
  if (innerNodes.indexOf(activeElement) >= 0) {
    return undefined;
  }

  var activeIndex = outerNodes.indexOf(activeElement);
  var lastIndex = outerNodes.indexOf(lastNode || activeIndex);
  var lastNodeInside = innerNodes.indexOf(lastNode);
  var indexDiff = activeIndex - lastIndex;
  var firstNodeIndex = outerNodes.indexOf(firstFocus);
  var lastNodeIndex = outerNodes.indexOf(lastFocus);

  // new focus
  if (activeIndex === -1 || lastNodeInside === -1) {
    return innerNodes.indexOf(autoFocused.length ? pickFirstFocus(autoFocused) : pickFirstFocus(innerNodes));
  }
  // old focus
  if (!indexDiff && lastNodeInside >= 0) {
    return lastNodeInside;
  }
  // first element
  if (activeIndex <= firstNodeIndex && isGuard(activeElement) && Math.abs(indexDiff) > 1) {
    return 0;
  }
  // jump out
  if (indexDiff && Math.abs(indexDiff) > 1) {
    return lastNodeInside;
  }
  // focus above lock
  if (activeIndex <= firstNodeIndex) {
    return cnt - 1;
  }
  // focus below lock
  if (activeIndex > lastNodeIndex) {
    return 0;
  }
  // index is inside tab order, but outside Lock
  if (indexDiff) {
    if (Math.abs(indexDiff) > 1) {
      return lastNodeInside;
    }
    return (cnt + lastNodeInside + indexDiff) % cnt;
  }
  // do nothing
  return undefined;
};

var getTopCommonParent = function getTopCommonParent(baseActiveElement, leftEntry, rightEntries) {
  var activeElements = asArray(baseActiveElement);
  var leftEntries = asArray(leftEntry);
  var activeElement = activeElements[0];
  var topCommon = null;
  leftEntries.filter(Boolean).forEach(function (entry) {
    topCommon = getCommonParent(topCommon || entry, entry) || topCommon;
    rightEntries.filter(Boolean).forEach(function (subEntry) {
      var common = getCommonParent(activeElement, subEntry);
      if (common) {
        if (!topCommon || common.contains(topCommon)) {
          topCommon = common;
        } else {
          topCommon = getCommonParent(common, topCommon);
        }
      }
    });
  });
  return topCommon;
};

var allParentAutofocusables = function allParentAutofocusables(entries) {
  return entries.reduce(function (acc, node) {
    return acc.concat(parentAutofocusables(node));
  }, []);
};

var reorderNodes = function reorderNodes(srcNodes, dstNodes) {
  var remap = new Map();
  // no Set(dstNodes) for IE11 :(
  dstNodes.forEach(function (entity) {
    return remap.set(entity.node, entity);
  });
  // remap to dstNodes
  return srcNodes.map(function (node) {
    return remap.get(node);
  }).filter(Boolean);
};

var getFocusabledIn = function getFocusabledIn(topNode) {
  var entries = getAllAffectedNodes(topNode).filter(notAGuard);
  var commonParent = getTopCommonParent(topNode, topNode, entries);
  var outerNodes = getTabbableNodes([commonParent], true);
  var innerElements = getTabbableNodes(entries).filter(function (_ref) {
    var node = _ref.node;
    return notAGuard(node);
  }).map(function (_ref2) {
    var node = _ref2.node;
    return node;
  });

  return outerNodes.map(function (_ref3) {
    var node = _ref3.node,
        index = _ref3.index;
    return {
      node: node,
      index: index,
      lockItem: innerElements.indexOf(node) >= 0,
      guard: isGuard(node)
    };
  });
};

var getFocusMerge = function getFocusMerge(topNode, lastNode) {
  var activeElement = document && document.activeElement;
  var entries = getAllAffectedNodes(topNode).filter(notAGuard);

  var commonParent = getTopCommonParent(activeElement || topNode, topNode, entries);

  var innerElements = getTabbableNodes(entries).filter(function (_ref4) {
    var node = _ref4.node;
    return notAGuard(node);
  });

  if (!innerElements[0]) {
    innerElements = getAllTabbableNodes(entries).filter(function (_ref5) {
      var node = _ref5.node;
      return notAGuard(node);
    });
    if (!innerElements[0]) {
      return undefined;
    }
  }

  var outerNodes = getTabbableNodes([commonParent]).map(function (_ref6) {
    var node = _ref6.node;
    return node;
  });
  var orderedInnerElements = reorderNodes(outerNodes, innerElements);
  var innerNodes = orderedInnerElements.map(function (_ref7) {
    var node = _ref7.node;
    return node;
  });

  var newId = newFocus(innerNodes, outerNodes, activeElement, lastNode, innerNodes.filter(findAutoFocused(allParentAutofocusables(entries))));

  if (newId === undefined) {
    return newId;
  }
  return orderedInnerElements[newId];
};

var focusInFrame = function focusInFrame(frame) {
  return frame === document.activeElement;
};

var focusInsideIframe = function focusInsideIframe(topNode) {
  return !!arrayFind(toArray(topNode.querySelectorAll('iframe')), focusInFrame);
};

var focusInside = function focusInside(topNode) {
  var activeElement = document && document.activeElement;

  if (!activeElement || activeElement.dataset && activeElement.dataset.focusGuard) {
    return false;
  }
  return getAllAffectedNodes(topNode).reduce(function (result, node) {
    return result || node.contains(activeElement) || focusInsideIframe(node);
  }, false);
};

var focusIsHidden = function focusIsHidden() {
  return document && toArray(document.querySelectorAll('[' + FOCUS_ALLOW + ']')).some(function (node) {
    return node.contains(document.activeElement);
  });
};

var focusOn = function focusOn(target) {
  target.focus();
  if (target.contentWindow) {
    target.contentWindow.focus();
  }
};

var guardCount = 0;
var lockDisabled = false;

var setFocus = (function (topNode, lastNode) {
  var focusable = getFocusMerge(topNode, lastNode);

  if (lockDisabled) {
    return;
  }

  if (focusable) {
    if (guardCount > 2) {
      // eslint-disable-next-line no-console
      console.error('FocusLock: focus-fighting detected. Only one focus management system could be active. ' + 'See https://github.com/theKashey/focus-lock/#focus-fighting');
      lockDisabled = true;
      setTimeout(function () {
        lockDisabled = false;
      }, 1);
      return;
    }
    guardCount++;
    focusOn(focusable.node);
    guardCount--;
  }
});

function deferAction(action) {
  // Hidding setImmediate from Webpack to avoid inserting polyfill
  var _window = window,
      setImmediate = _window.setImmediate;

  if (typeof setImmediate !== 'undefined') {
    setImmediate(action);
  } else {
    setTimeout(action, 1);
  }
}

var focusOnBody = function focusOnBody() {
  return document && document.activeElement === document.body;
};

var isFreeFocus = function isFreeFocus() {
  return focusOnBody() || focusIsHidden();
};

var lastActiveTrap = null;
var lastActiveFocus = null;
var lastPortaledElement = null;
var focusWasOutsideWindow = false;

var defaultWhitelist = function defaultWhitelist() {
  return true;
};

var focusWhitelisted = function focusWhitelisted(activeElement) {
  return (lastActiveTrap.whiteList || defaultWhitelist)(activeElement);
};

var recordPortal = function recordPortal(observerNode, portaledElement) {
  lastPortaledElement = {
    observerNode: observerNode,
    portaledElement: portaledElement
  };
};

var focusIsPortaledPair = function focusIsPortaledPair(element) {
  return lastPortaledElement && lastPortaledElement.portaledElement === element;
};

function autoGuard(startIndex, end, step, allNodes) {
  var lastGuard = null;
  var i = startIndex;

  do {
    var item = allNodes[i];

    if (item.guard) {
      if (item.node.dataset.focusAutoGuard) {
        lastGuard = item;
      }
    } else if (item.lockItem) {
      if (i !== startIndex) {
        // we will tab to the next element
        return;
      }

      lastGuard = null;
    } else {
      break;
    }
  } while ((i += step) !== end);

  if (lastGuard) {
    lastGuard.node.tabIndex = 0;
  }
}

var extractRef = function extractRef(ref) {
  return ref && 'current' in ref ? ref.current : ref;
};

var activateTrap = function activateTrap() {
  var result = false;

  if (lastActiveTrap) {
    var _lastActiveTrap = lastActiveTrap,
        observed = _lastActiveTrap.observed,
        persistentFocus = _lastActiveTrap.persistentFocus,
        autoFocus = _lastActiveTrap.autoFocus,
        shards = _lastActiveTrap.shards;
    var workingNode = observed || lastPortaledElement && lastPortaledElement.portaledElement;
    var activeElement = document && document.activeElement;

    if (workingNode) {
      var workingArea = [workingNode].concat(shards.map(extractRef).filter(Boolean));

      if (!activeElement || focusWhitelisted(activeElement)) {
        if (persistentFocus || focusWasOutsideWindow || !isFreeFocus() || !lastActiveFocus && autoFocus) {
          if (workingNode && !(focusInside(workingArea) || focusIsPortaledPair(activeElement))) {
            if (document && !lastActiveFocus && activeElement && !autoFocus) {
              activeElement.blur();
              document.body.focus();
            } else {
              result = setFocus(workingArea, lastActiveFocus);
              lastPortaledElement = {};
            }
          }

          focusWasOutsideWindow = false;
          lastActiveFocus = document && document.activeElement;
        }
      }

      if (document) {
        var newActiveElement = document && document.activeElement;
        var allNodes = getFocusabledIn(workingArea);
        var focusedItem = allNodes.find(function (_ref) {
          var node = _ref.node;
          return node === newActiveElement;
        });

        if (focusedItem) {
          // remove old focus
          allNodes.filter(function (_ref2) {
            var guard = _ref2.guard,
                node = _ref2.node;
            return guard && node.dataset.focusAutoGuard;
          }).forEach(function (_ref3) {
            var node = _ref3.node;
            return node.removeAttribute('tabIndex');
          });
          var focusedIndex = allNodes.indexOf(focusedItem);
          autoGuard(focusedIndex, allNodes.length, +1, allNodes);
          autoGuard(focusedIndex, -1, -1, allNodes);
        }
      }
    }
  }

  return result;
};

var onTrap = function onTrap(event) {
  if (activateTrap() && event) {
    // prevent scroll jump
    event.stopPropagation();
    event.preventDefault();
  }
};

var onBlur = function onBlur() {
  return deferAction(activateTrap);
};

var onFocus = function onFocus(event) {
  // detect portal
  var source = event.target;
  var currentNode = event.currentTarget;

  if (!currentNode.contains(source)) {
    recordPortal(currentNode, source);
  }
};

var FocusWatcher = function FocusWatcher() {
  return null;
};

var FocusTrap = function FocusTrap(_ref4) {
  var children = _ref4.children;
  return React__default.createElement("div", {
    onBlur: onBlur,
    onFocus: onFocus
  }, children);
};

FocusTrap.propTypes = process.env.NODE_ENV !== "production" ? {
  children: propTypes.node.isRequired
} : {};

var onWindowBlur = function onWindowBlur() {
  focusWasOutsideWindow = true;
};

var attachHandler = function attachHandler() {
  document.addEventListener('focusin', onTrap, true);
  document.addEventListener('focusout', onBlur);
  window.addEventListener('blur', onWindowBlur);
};

var detachHandler = function detachHandler() {
  document.removeEventListener('focusin', onTrap, true);
  document.removeEventListener('focusout', onBlur);
  window.removeEventListener('blur', onWindowBlur);
};

function reducePropsToState(propsList) {
  return propsList.filter(function (_ref5) {
    var disabled = _ref5.disabled;
    return !disabled;
  });
}

function handleStateChangeOnClient(traps) {
  var trap = traps.slice(-1)[0];

  if (trap && !lastActiveTrap) {
    attachHandler();
  }

  var lastTrap = lastActiveTrap;
  var sameTrap = lastTrap && trap && trap.id === lastTrap.id;
  lastActiveTrap = trap;

  if (lastTrap && !sameTrap) {
    lastTrap.onDeactivation(); // return focus only of last trap was removed

    if (!traps.filter(function (_ref6) {
      var id = _ref6.id;
      return id === lastTrap.id;
    }).length) {
      // allow defer is no other trap is awaiting restore
      lastTrap.returnFocus(!trap);
    }
  }

  if (trap) {
    lastActiveFocus = null;

    if (!sameTrap || lastTrap.observed !== trap.observed) {
      trap.onActivation();
    }

    activateTrap();
    deferAction(activateTrap);
  } else {
    detachHandler();
    lastActiveFocus = null;
  }
} // bind medium


mediumFocus.assignSyncMedium(onFocus);
mediumBlur.assignMedium(onBlur);
mediumEffect.assignMedium(function (cb) {
  return cb({
    moveFocusInside: setFocus,
    focusInside: focusInside
  });
});
var FocusTrap$1 = withSideEffect(reducePropsToState, handleStateChangeOnClient)(FocusWatcher);

/* that would be a BREAKING CHANGE!
// delaying sidecar execution till the first usage
const RequireSideCar = (props) => {
  // eslint-disable-next-line global-require
  const SideCar = require('./Trap').default;
  return <SideCar {...props} />;
};
*/

var FocusLockCombination = React__default.forwardRef(function (props, ref) {
  return React__default.createElement(FocusLock, _extends$4({
    sideCar: FocusTrap$1,
    ref: ref
  }, props));
});

var _ref$4 = FocusLock.propTypes || {},
    sideCar = _ref$4.sideCar,
    propTypes$1 = _objectWithoutPropertiesLoose$2(_ref$4, ["sideCar"]);

FocusLockCombination.propTypes = propTypes$1;

var zeroRightClassName = 'right-scroll-bar-position';
var fullWidthClassName = 'width-before-scroll-bar';
var noScrollbarsClassName = 'with-scroll-bars-hidden';

var effectCar = createSidecarMedium();

var nothing = function () {
    return;
};
var RemoveScroll = React.forwardRef(function (props, parentRef) {
    var ref = React.useRef(null);
    var _a = React.useState({
        onScrollCapture: nothing,
        onWheelCapture: nothing,
        onTouchMoveCapture: nothing
    }), callbacks = _a[0], setCallbacks = _a[1];
    var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, rest = __rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom"]);
    var SideCar = sideCar;
    var containerProps = __assign({ ref: useMergeRefs([
            ref,
            parentRef
        ]) }, rest, callbacks);
    return (React.createElement(React.Fragment, null,
        enabled && (React.createElement(SideCar, { sideCar: effectCar, removeScrollBar: removeScrollBar, shards: shards, noIsolation: noIsolation, inert: inert, setCallbacks: setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref })),
        forwardProps ? (React.cloneElement(React.Children.only(children), containerProps)) : (React.createElement("div", __assign({}, containerProps, { className: className }), children))));
});
RemoveScroll.defaultProps = {
    enabled: true,
    removeScrollBar: true,
    inert: false
};
RemoveScroll.classNames = {
    fullWidth: fullWidthClassName,
    zeroRight: zeroRightClassName
};

function makeStyleTag() {
    if (!document)
        return null;
    var tag = document.createElement('style');
    tag.type = 'text/css';
    return tag;
}
function injectStyles(tag, css) {
    if (tag.styleSheet) {
        tag.styleSheet.cssText = css;
    }
    else {
        tag.appendChild(document.createTextNode(css));
    }
}
function insertStyleTag(tag) {
    var head = document.head || document.getElementsByTagName('head')[0];
    head.appendChild(tag);
}
var stylesheetSingleton = function () {
    var counter = 0;
    var stylesheet = null;
    return {
        add: function (style) {
            if (counter == 0) {
                if (stylesheet = makeStyleTag()) {
                    injectStyles(stylesheet, style);
                    insertStyleTag(stylesheet);
                }
            }
            counter++;
        },
        remove: function () {
            counter--;
            if (!counter && stylesheet) {
                stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
                stylesheet = null;
            }
        }
    };
};

var styleHookSingleton = function () {
    var sheet = stylesheetSingleton();
    return function (styles) {
        React.useEffect(function () {
            sheet.add(styles);
            return function () {
                sheet.remove();
            };
        }, []);
    };
};

var styleSingleton = function () {
    var useStyle = styleHookSingleton();
    var Sheet = function (_a) {
        var styles = _a.styles;
        useStyle(styles);
        return null;
    };
    return Sheet;
};

var zeroGap = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0,
};
var parse = function (x) { return parseInt(x || '', 10) || 0; };
var getOffset = function (gapMode) {
    var cs = window.getComputedStyle(document.body);
    var left = cs[gapMode === 'padding' ? 'paddingLeft' : 'marginLeft'];
    var top = cs[gapMode === 'padding' ? 'paddingTop' : 'marginTop'];
    var right = cs[gapMode === 'padding' ? 'paddingRight' : 'marginRight'];
    return [
        parse(left),
        parse(top),
        parse(right),
    ];
};
var getGapWidth = function (gapMode) {
    if (gapMode === void 0) { gapMode = 'margin'; }
    if (typeof window === 'undefined') {
        return zeroGap;
    }
    var offsets = getOffset(gapMode);
    var documentWidth = document.documentElement.clientWidth;
    var windowWidth = window.innerWidth;
    return {
        left: offsets[0],
        top: offsets[1],
        right: offsets[2],
        gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0]),
    };
};

var Style = styleSingleton();
var getStyles = function (_a, allowRelative, gapMode, important) {
    var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
    if (gapMode === void 0) { gapMode = 'margin'; }
    return "\n  ." + noScrollbarsClassName + " {\n   overflow: hidden " + important + ";\n   padding-right: " + gap + "px " + important + ";\n  }\n  body {\n    overflow: hidden " + important + ";\n    " + [
        allowRelative && "position: relative " + important + ";",
        gapMode === 'margin' && "\n    padding-left: " + left + "px;\n    padding-top: " + top + "px;\n    padding-right: " + right + "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: " + gap + "px " + important + ";\n    ",
        gapMode === 'padding' && "padding-right: " + gap + "px " + important + ";",
    ].filter(Boolean).join('') + "\n  }\n  \n  ." + zeroRightClassName + " {\n    right: " + gap + "px " + important + ";\n  }\n  \n  ." + fullWidthClassName + " {\n    margin-right: " + gap + "px " + important + ";\n  }\n  \n  ." + zeroRightClassName + " ." + zeroRightClassName + " {\n    right: 0 " + important + ";\n  }\n  \n  ." + fullWidthClassName + " ." + fullWidthClassName + " {\n    margin-right: 0 " + important + ";\n  }\n";
};
var RemoveScrollBar = function (props) {
    var _a = React.useState(getGapWidth(props.gapMode)), gap = _a[0], setGap = _a[1];
    React.useEffect(function () {
        setGap(getGapWidth(props.gapMode));
    }, [props.gapMode]);
    var noRelative = props.noRelative, noImportant = props.noImportant, _b = props.gapMode, gapMode = _b === void 0 ? 'margin' : _b;
    return React.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : '') });
};

var elementCouldBeVScrolled = function (node) {
    var styles = window.getComputedStyle(node);
    return (styles.overflowY !== 'hidden' && // not-not-scrollable
        !(styles.overflowY === styles.overflowX && styles.overflowY === 'visible') // scrollable
    );
};
var elementCouldBeHScrolled = function (node) {
    var styles = window.getComputedStyle(node);
    return (styles.overflowX !== 'hidden' && // not-not-scrollable
        !(styles.overflowY === styles.overflowX && styles.overflowX === 'visible') // scrollable
    );
};
var locationCouldBeScrolled = function (axis, node) {
    var current = node;
    do {
        var isScrollable = elementCouldBeScrolled(axis, current);
        if (isScrollable) {
            var _a = getScrollVariables(axis, current), s = _a[1], d = _a[2];
            if (s > d) {
                return true;
            }
        }
        current = current.parentNode;
    } while (current && current !== document.body);
    return false;
};
var getVScrollVariables = function (_a) {
    var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
    return [scrollTop, scrollHeight, clientHeight];
};
var getHScrollVariables = function (_a) {
    var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
    return [scrollLeft, scrollWidth, clientWidth];
};
var elementCouldBeScrolled = function (axis, node) {
    return axis === 'v' ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function (axis, node) {
    return axis === 'v' ? getVScrollVariables(node) : getHScrollVariables(node);
};
var handleScroll = function (axis, endTarget, event, sourceDelta, noOverscroll) {
    var delta = sourceDelta;
    // find scrollable target
    var target = event.target;
    var targetInLock = endTarget.contains(target);
    var shouldCancelScroll = false;
    var isDeltaPositive = delta > 0;
    var availableScroll = 0;
    var availableScrollTop = 0;
    do {
        var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
        var elementScroll = scroll_1 - capacity - position;
        if (position || elementScroll) {
            if (elementCouldBeScrolled(axis, target)) {
                availableScroll += elementScroll;
                availableScrollTop += position;
            }
        }
        target = target.parentNode;
    } while (
    // portaled content
    (!targetInLock && target !== document.body) ||
        // self content
        (targetInLock && (endTarget.contains(target) || endTarget === target)));
    if (isDeltaPositive &&
        ((noOverscroll && availableScroll === 0) ||
            (!noOverscroll && delta > availableScroll))) {
        shouldCancelScroll = true;
    }
    else if (!isDeltaPositive &&
        ((noOverscroll && availableScrollTop === 0) ||
            (!noOverscroll && -delta > availableScrollTop))) {
        shouldCancelScroll = true;
    }
    return shouldCancelScroll;
};

var passiveSupported = false;
if (typeof window !== 'undefined') {
    try {
        var options = Object.defineProperty({}, 'passive', {
            get: function () {
                passiveSupported = true;
                return true;
            }
        });
        window.addEventListener('test', options, options);
        window.removeEventListener('test', options, options);
    }
    catch (err) {
        passiveSupported = false;
    }
}
var nonPassive = passiveSupported ? { passive: false } : false;

var getTouchXY = function (event) {
    return 'changedTouches' in event
        ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY]
        : [0, 0];
};
var getDeltaXY = function (event) { return [event.deltaX, event.deltaY]; };
var extractRef$1 = function (ref) {
    return ref && 'current' in ref ? ref.current : ref;
};
var deltaCompare = function (x, y) {
    return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function (id) { return "\n  .block-interactivity-" + id + " {pointer-events: none;}\n  .allow-interactivity-" + id + " {pointer-events: all;}\n"; };
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
    var shouldPreventQueue = React.useRef([]);
    var touchStartRef = React.useRef([0, 0]);
    var activeAxis = React.useRef();
    var id = React.useState(idCounter++)[0];
    var Style = React.useState(function () { return styleSingleton(); })[0];
    var lastProps = React.useRef(props);
    React.useEffect(function () {
        lastProps.current = props;
    }, [props]);
    React.useEffect(function () {
        if (props.inert) {
            document.body.classList.add("block-interactivity-" + id);
            var allow_1 = [
                props.lockRef.current
            ].concat((props.shards || []).map(extractRef$1)).filter(Boolean);
            allow_1.forEach(function (el) { return el.classList.add("allow-interactivity-" + id); });
            return function () {
                document.body.classList.remove("block-interactivity-" + id);
                allow_1.forEach(function (el) {
                    return el.classList.remove("allow-interactivity-" + id);
                });
            };
        }
        return;
    }, [props.inert, props.lockRef.current, props.shards]);
    var shouldCancelEvent = React.useCallback(function (event, parent) {
        if ('touches' in event && event.touches.length === 2) {
            return !lastProps.current.allowPinchZoom;
        }
        var touch = getTouchXY(event);
        var touchStart = touchStartRef.current;
        var deltaX = 'deltaX' in event ? event.deltaX : touchStart[0] - touch[0];
        var deltaY = 'deltaY' in event ? event.deltaY : touchStart[1] - touch[1];
        var currentAxis;
        var target = event.target;
        var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? 'h' : 'v';
        var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
        if (!canBeScrolledInMainDirection) {
            return true;
        }
        if (canBeScrolledInMainDirection) {
            currentAxis = moveDirection;
        }
        else {
            currentAxis = moveDirection === 'v' ? 'h' : 'v';
            canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
            // other axis might be not scrollable
        }
        if (!canBeScrolledInMainDirection) {
            return false;
        }
        if (!activeAxis.current &&
            'changedTouches' in event &&
            (deltaX || deltaY)) {
            activeAxis.current = currentAxis;
        }
        if (!currentAxis) {
            return true;
        }
        var cancelingAxis = activeAxis.current || currentAxis;
        return handleScroll(cancelingAxis, parent, event, cancelingAxis == 'h' ? deltaX : deltaY, true);
    }, []);
    var shouldPrevent = React.useCallback(function (_event) {
        var event = _event;
        if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) {
            // not the last active
            return;
        }
        var delta = 'deltaY' in event ? getDeltaXY(event) : getTouchXY(event);
        var sourceEvent = shouldPreventQueue.current.filter(function (e) {
            return e.name === event.type &&
                e.target === event.target &&
                deltaCompare(e.delta, delta);
        })[0];
        // self event, and should be canceled
        if (sourceEvent && sourceEvent.should) {
            event.preventDefault();
            return;
        }
        // outside or shard event
        if (!sourceEvent) {
            var shardNodes = (lastProps.current.shards || [])
                .map(extractRef$1)
                .filter(Boolean)
                .filter(function (node) { return node.contains(event.target); });
            var shouldStop = shardNodes.length > 0
                ? shouldCancelEvent(event, shardNodes[0])
                : !lastProps.current.noIsolation;
            if (shouldStop) {
                event.preventDefault();
            }
        }
    }, []);
    var shouldCancel = React.useCallback(function (name, delta, target, should) {
        var event = { name: name, delta: delta, target: target, should: should };
        shouldPreventQueue.current.push(event);
        setTimeout(function () {
            shouldPreventQueue.current = shouldPreventQueue.current.filter(function (e) { return e !== event; });
        }, 1);
    }, []);
    var scrollTouchStart = React.useCallback(function (event) {
        touchStartRef.current = getTouchXY(event);
        activeAxis.current = undefined;
    }, []);
    var scrollWheel = React.useCallback(function (event) {
        shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    var scrollTouchMove = React.useCallback(function (event) {
        shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    React.useEffect(function () {
        lockStack.push(Style);
        props.setCallbacks({
            onScrollCapture: scrollWheel,
            onWheelCapture: scrollWheel,
            onTouchMoveCapture: scrollTouchMove
        });
        document.addEventListener('wheel', shouldPrevent, nonPassive);
        document.addEventListener('touchmove', shouldPrevent, nonPassive);
        document.addEventListener('touchstart', scrollTouchStart, nonPassive);
        return function () {
            lockStack = lockStack.filter(function (inst) { return inst !== Style; });
            document.removeEventListener('wheel', shouldPrevent, nonPassive);
            document.removeEventListener('touchmove', shouldPrevent, nonPassive);
            document.removeEventListener('touchstart', scrollTouchStart, nonPassive);
        };
    }, []);
    var removeScrollBar = props.removeScrollBar, inert = props.inert;
    return (React.createElement(React.Fragment, null,
        inert ? React.createElement(Style, { styles: generateStyle(id) }) : null,
        removeScrollBar ? React.createElement(RemoveScrollBar, { gapMode: "margin" }) : null));
}

var SideCar$1 = exportSidecar(effectCar, RemoveScrollSideCar);

var ReactRemoveScroll = React.forwardRef(function (props, ref) { return (React.createElement(RemoveScroll, __assign({}, props, { ref: ref, sideCar: SideCar$1 }))); });
ReactRemoveScroll.classNames = RemoveScroll.classNames;

function _extends$5() { _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }

function _objectWithoutPropertiesLoose$3(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var noop = function noop() {}; ////////////////////////////////////////////////////////////////////////////////


var DialogOverlay = React__default.forwardRef(function DialogOverlay(_ref, forwardedRef) {
  var _ref$isOpen = _ref.isOpen,
      isOpen = _ref$isOpen === void 0 ? true : _ref$isOpen,
      props = _objectWithoutPropertiesLoose$3(_ref, ["isOpen"]);

  var ownRef = React__default.useRef(null);
  var ref = forwardedRef || ownRef;
  React__default.useEffect(function () {
    checkStyles("dialog");
  }, []);
  return isOpen ? React__default.createElement(Portal, {
    "data-reach-dialog-wrapper": true
  }, React__default.createElement(DialogInner, _extends$5({
    ref: ref
  }, props))) : null;
});

if (process.env.NODE_ENV !== "production") {
  DialogOverlay.propTypes = {
    initialFocusRef: function initialFocusRef() {}
  };
  DialogOverlay.displayName = "DialogOverlay";
} ////////////////////////////////////////////////////////////////////////////////


var DialogInner = React__default.forwardRef(function DialogInner(_ref2, forwardedRef) {
  var allowPinchZoom = _ref2.allowPinchZoom,
      initialFocusRef = _ref2.initialFocusRef,
      onClick = _ref2.onClick,
      _ref2$onDismiss = _ref2.onDismiss,
      onDismiss = _ref2$onDismiss === void 0 ? noop : _ref2$onDismiss,
      onMouseDown = _ref2.onMouseDown,
      onKeyDown = _ref2.onKeyDown,
      props = _objectWithoutPropertiesLoose$3(_ref2, ["allowPinchZoom", "initialFocusRef", "onClick", "onDismiss", "onMouseDown", "onKeyDown"]);

  var mouseDownTarget = React__default.useRef(null);
  var overlayNode = React__default.useRef(null);
  var ref = useForkedRef(overlayNode, forwardedRef);
  React__default.useEffect(function () {
    return createAriaHider(overlayNode.current);
  }, []);
  return React__default.createElement(FocusLockCombination, {
    autoFocus: true,
    returnFocus: true,
    onActivation: function onActivation() {
      if (initialFocusRef && initialFocusRef.current) {
        initialFocusRef.current.focus();
      }
    }
  }, React__default.createElement(ReactRemoveScroll, {
    allowPinchZoom: allowPinchZoom
  }, React__default.createElement("div", _extends$5({
    "data-reach-dialog-overlay": true,
    onClick: wrapEvent(onClick, function (event) {
      if (mouseDownTarget.current === event.target) {
        event.stopPropagation();
        onDismiss(event);
      }
    }),
    onMouseDown: wrapEvent(onMouseDown, function (event) {
      mouseDownTarget.current = event.target;
    }),
    onKeyDown: wrapEvent(onKeyDown, function (event) {
      if (event.key === "Escape") {
        event.stopPropagation();
        onDismiss(event);
      }
    }),
    ref: ref
  }, props))));
});

if (process.env.NODE_ENV !== "production") {
  DialogOverlay.displayName = "DialogOverlay";
} ////////////////////////////////////////////////////////////////////////////////


var DialogContent = React__default.forwardRef(function DialogContent(_ref3, forwardedRef) {
  var onClick = _ref3.onClick,
      onKeyDown = _ref3.onKeyDown,
      props = _objectWithoutPropertiesLoose$3(_ref3, ["onClick", "onKeyDown"]);

  return React__default.createElement("div", _extends$5({
    role: "dialog",
    "aria-modal": "true",
    "data-reach-dialog-content": true,
    tabIndex: "-1",
    onClick: wrapEvent(onClick, function (event) {
      event.stopPropagation();
    }),
    ref: forwardedRef
  }, props));
});

if (process.env.NODE_ENV !== "production") {
  DialogContent.propTypes = {
    "aria-label": ariaLabelType,
    "aria-labelledby": ariaLabelType
  };
  DialogContent.displayName = "DialogContent";
} ////////////////////////////////////////////////////////////////////////////////


var Dialog = React__default.forwardRef(function Dialog(_ref4, forwardedRef) {
  var isOpen = _ref4.isOpen,
      _ref4$onDismiss = _ref4.onDismiss,
      onDismiss = _ref4$onDismiss === void 0 ? noop : _ref4$onDismiss,
      initialFocusRef = _ref4.initialFocusRef,
      props = _objectWithoutPropertiesLoose$3(_ref4, ["isOpen", "onDismiss", "initialFocusRef"]);

  var ownRef = React__default.useRef(null);
  var ref = forwardedRef || ownRef;
  return React__default.createElement(DialogOverlay, {
    isOpen: isOpen,
    onDismiss: onDismiss,
    initialFocusRef: initialFocusRef
  }, React__default.createElement(DialogContent, _extends$5({
    ref: ref
  }, props)));
});

if (process.env.NODE_ENV !== "production") {
  Dialog.propTypes = {
    isOpen: propTypes_2,
    onDismiss: propTypes_3,
    "aria-label": ariaLabelType,
    "aria-labelledby": ariaLabelType
  };
  Dialog.displayName = "Dialog";
}

function createAriaHider(dialogNode) {
  var originalValues = [];
  var rootNodes = [];

  if (!dialogNode) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("A ref has not yet been attached to a dialog node when attempting to call `createAriaHider`.");
    }

    return noop;
  }

  Array.prototype.forEach.call(document.querySelectorAll("body > *"), function (node) {
    var portalNode = dialogNode.parentNode.parentNode.parentNode;

    if (node === portalNode) {
      return;
    }

    var attr = node.getAttribute("aria-hidden");
    var alreadyHidden = attr !== null && attr !== "false";

    if (alreadyHidden) {
      return;
    }

    originalValues.push(attr);
    rootNodes.push(node);
    node.setAttribute("aria-hidden", "true");
  });
  return function () {
    rootNodes.forEach(function (node, index) {
      var originalValue = originalValues[index];

      if (originalValue === null) {
        node.removeAttribute("aria-hidden");
      } else {
        node.setAttribute("aria-hidden", originalValue);
      }
    });
  };
}

function ariaLabelType(props, name, compName) {
  var details = "\nSee https://www.w3.org/TR/wai-aria/#aria-label for details.";

  if (!props["aria-label"] && !props["aria-labelledby"]) {
    return new Error("A <" + compName + "> must have either an `aria-label` or `aria-labelledby` prop.\n      " + details);
  }

  if (props["aria-label"] && props["aria-labelledby"]) {
    return new Error("You provided both `aria-label` and `aria-labelledby` props to a <" + compName + ">. If the a label for this component is visible on the screen, that label's component should be given a unique ID prop, and that ID should be passed as the `aria-labelledby` prop into <" + compName + ">. If the label cannot be determined programmatically from the content of the element, an alternative label should be provided as the `aria-label` prop, which will be used as an `aria-label` on the HTML tag." + details);
  }

  for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    rest[_key - 3] = arguments[_key];
  }

  return propTypes_6.apply(void 0, [name, props, compName].concat(rest));
}

const Dialog$1 = ({ ...rest
}) => {
  const theme = emotionTheming.useTheme();
  const [showDialog, setShowDialog] = React__default.useState(false);

  const open = () => setShowDialog(true);

  const close = () => setShowDialog(false);

  return core.jsx(React__default.Fragment, null, core.jsx("button", {
    onClick: open
  }, "Show Dialog"), core.jsx(DialogOverlay, _extends({
    css: css({
      position: 'fixed',
      top: 0,
      left: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: ['flex-end', 'center'],
      width: '100%',
      height: '100%',
      p: 'spacing.3',
      bg: rgba(theme.colors.black, 0.5)
    }),
    isOpen: showDialog,
    onDismiss: close
  }, rest), core.jsx(DialogContent, {
    css: css({
      display: 'inline-block',
      p: 'spacing.6',
      borderRadius: '24px',
      bg: 'white',
      boxShadow: 'elevations.4'
    })
  }, core.jsx("p", null, "The overlay styles are a white fade instead of the default black fade."), core.jsx("button", {
    onClick: close
  }, "Very nice."))));
};

const GlobalStyles = () => core.jsx(core.Global, {
  styles: css({
    '*': {
      boxSizing: 'border-box'
    },
    body: {
      m: 0,
      fontFamily: 'ui',
      color: 'black'
    },
    table: {
      borderCollapse: 'collapse'
    }
  })
});

function _EMOTION_STRINGIFIED_CSS_ERROR__$4() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

const getBorderRadiusForControlHeight$1 = height => {
  if (height <= 40) return '3px';
  return '5px';
};

const getTextSizeForControlHeight$1 = height => {
  if (height <= 32) return 500;
  if (height <= 40) return 500;
  if (height <= 48) return 600;
  return 600;
};

const getIconSizeForButton$2 = height => {
  if (height <= 32) return 16;
  if (height <= 40) return 20;
  if (height <= 48) return 24;
  return 24;
};

var _ref$5 = process.env.NODE_ENV === "production" ? {
  name: "zdk1av-Input",
  styles: "user-select:none;pointer-events:none;;label:Input;"
} : {
  name: "zdk1av-Input",
  styles: "user-select:none;pointer-events:none;;label:Input;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklucHV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTREVSIsImZpbGUiOiJJbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ2Vtb3Rpb24tdGhlbWluZyc7XG5pbXBvcnQgY3NzIGZyb20gJ0BzdHlsZWQtc3lzdGVtL2Nzcyc7XG5pbXBvcnQgeyByZ2JhIH0gZnJvbSAncG9saXNoZWQnO1xuXG5pbXBvcnQgeyBCb3ggfSBmcm9tICcuLi8uLi9ib3gnO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJy4uLy4uL2ljb24nO1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknO1xuXG5jb25zdCBnZXRCb3JkZXJSYWRpdXNGb3JDb250cm9sSGVpZ2h0ID0gaGVpZ2h0ID0+IHtcbiAgaWYgKGhlaWdodCA8PSA0MCkgcmV0dXJuICczcHgnO1xuICByZXR1cm4gJzVweCc7XG59O1xuXG5jb25zdCBnZXRUZXh0U2l6ZUZvckNvbnRyb2xIZWlnaHQgPSBoZWlnaHQgPT4ge1xuICBpZiAoaGVpZ2h0IDw9IDMyKSByZXR1cm4gNTAwO1xuICBpZiAoaGVpZ2h0IDw9IDQwKSByZXR1cm4gNTAwO1xuICBpZiAoaGVpZ2h0IDw9IDQ4KSByZXR1cm4gNjAwO1xuICByZXR1cm4gNjAwO1xufTtcblxuY29uc3QgZ2V0SWNvblNpemVGb3JCdXR0b24gPSBoZWlnaHQgPT4ge1xuICBpZiAoaGVpZ2h0IDw9IDMyKSByZXR1cm4gMTY7XG4gIGlmIChoZWlnaHQgPD0gNDApIHJldHVybiAyMDtcbiAgaWYgKGhlaWdodCA8PSA0OCkgcmV0dXJuIDI0O1xuICByZXR1cm4gMjQ7XG59O1xuXG5jb25zdCBJbnB1dCA9ICh7IGJnLCBoZWlnaHQsIGljb25BZnRlciwgaWNvbkJlZm9yZSwgLi4ucmVzdCB9KSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgYnIgPSBnZXRCb3JkZXJSYWRpdXNGb3JDb250cm9sSGVpZ2h0KGhlaWdodCk7XG4gIGNvbnN0IGlzID0gZ2V0SWNvblNpemVGb3JCdXR0b24oaGVpZ2h0KTtcbiAgY29uc3QgcCA9IE1hdGgucm91bmQoaGVpZ2h0IC8gNCk7XG4gIGNvbnN0IHRzID0gZ2V0VGV4dFNpemVGb3JDb250cm9sSGVpZ2h0KGhlaWdodCk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBkYXRhLXBsYXlncm91bmQtaWQ9XCJpbnB1dFwiXG4gICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgIGJvcmRlclJhZGl1cz17YnJ9XG4gICAgICBiZz17Ymd9XG4gICAgICBvdmVyZmxvdz1cImhpZGRlblwiXG4gICAgICBib3hTaGFkb3c9e2BcbiAgICAgICAgJHtyZ2JhKHRoZW1lLmNvbG9ycy5ncmF5WzldLCAwLjEpfSBcbiAgICAgICAgMCAwIDAgMXB4IGluc2V0LCBcbiAgICAgICAgJHtyZ2JhKHRoZW1lLmNvbG9ycy5ncmF5WzldLCAwLjEpfVxuICAgICAgICAwIDFweCAycHggaW5zZXRcbiAgICBgfVxuICAgID5cbiAgICAgIHtpY29uQmVmb3JlICYmIChcbiAgICAgICAgPEJveFxuICAgICAgICAgIGRhdGEtcGxheWdyb3VuZC1pZD1cImlucHV0Lmljb25CZWZvcmVcIlxuICAgICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgICAgIHRvcD17MH1cbiAgICAgICAgICBsZWZ0PXswfVxuICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgd2lkdGg9e2hlaWdodH1cbiAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICBjc3M9e3sgdXNlclNlbGVjdDogJ25vbmUnLCBwb2ludGVyRXZlbnRzOiAnbm9uZScgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxJY29uIHN5bWJvbD17aWNvbkJlZm9yZX0gc2l6ZT17aXN9IGNvbG9yPVwiZ3JheS40XCIgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICApfVxuICAgICAgPFRleHRcbiAgICAgICAgZGF0YS1wbGF5Z3JvdW5kLWlkPVwiaW5wdXQuZmllbGRcIlxuICAgICAgICBhcz1cImlucHV0XCJcbiAgICAgICAgc2l6ZT17dHN9XG4gICAgICAgIGRpc3BsYXk9XCJibG9ja1wiXG4gICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICBtPXswfVxuICAgICAgICBwcj17aWNvbkFmdGVyID8gaGVpZ2h0ICsgJ3B4JyA6IHAgKyAncHgnfVxuICAgICAgICBwbD17aWNvbkJlZm9yZSA/IGhlaWdodCArICdweCcgOiBwICsgJ3B4J31cbiAgICAgICAgcHk9XCIxMHB4XCJcbiAgICAgICAgYm9yZGVyPXswfVxuICAgICAgICBjb2xvcj1cImJsYWNrXCJcbiAgICAgICAgYmc9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgIGNzcz17Y3NzKHtcbiAgICAgICAgICAnOjpwbGFjZWhvbGRlcic6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgICAgICAgb3BhY2l0eTogMSAvIDMsXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnOmZvY3VzJzoge1xuICAgICAgICAgICAgb3V0bGluZTogMCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KX1cbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAvPlxuICAgICAge2ljb25BZnRlciAmJiAoXG4gICAgICAgIDxCb3hcbiAgICAgICAgICBkYXRhLXBsYXlncm91bmQtaWQ9XCJpbnB1dC5pY29uQWZ0ZXJcIlxuICAgICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgICAgIHRvcD17MH1cbiAgICAgICAgICByaWdodD17MH1cbiAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgIHdpZHRoPXtoZWlnaHR9XG4gICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgY3NzPXt7IHVzZXJTZWxlY3Q6ICdub25lJywgcG9pbnRlckV2ZW50czogJ25vbmUnIH19XG4gICAgICAgID5cbiAgICAgICAgICA8SWNvbiBzeW1ib2w9e2ljb25BZnRlcn0gc2l6ZT17aXN9IGNvbG9yPVwiZ3JheS40XCIgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICApfVxuICAgIDwvQm94PlxuICApO1xufTtcblxuSW5wdXQuZGVmYXVsdFByb3BzID0ge1xuICBiZzogJ2dyYXkuMCcsXG4gIGhlaWdodDogNDAsXG4gIHR5cGU6ICd0ZXh0Jyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$4
};

var _ref2$3 = process.env.NODE_ENV === "production" ? {
  name: "zdk1av-Input",
  styles: "user-select:none;pointer-events:none;;label:Input;"
} : {
  name: "zdk1av-Input",
  styles: "user-select:none;pointer-events:none;;label:Input;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklucHV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFHVSIsImZpbGUiOiJJbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ2Vtb3Rpb24tdGhlbWluZyc7XG5pbXBvcnQgY3NzIGZyb20gJ0BzdHlsZWQtc3lzdGVtL2Nzcyc7XG5pbXBvcnQgeyByZ2JhIH0gZnJvbSAncG9saXNoZWQnO1xuXG5pbXBvcnQgeyBCb3ggfSBmcm9tICcuLi8uLi9ib3gnO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJy4uLy4uL2ljb24nO1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknO1xuXG5jb25zdCBnZXRCb3JkZXJSYWRpdXNGb3JDb250cm9sSGVpZ2h0ID0gaGVpZ2h0ID0+IHtcbiAgaWYgKGhlaWdodCA8PSA0MCkgcmV0dXJuICczcHgnO1xuICByZXR1cm4gJzVweCc7XG59O1xuXG5jb25zdCBnZXRUZXh0U2l6ZUZvckNvbnRyb2xIZWlnaHQgPSBoZWlnaHQgPT4ge1xuICBpZiAoaGVpZ2h0IDw9IDMyKSByZXR1cm4gNTAwO1xuICBpZiAoaGVpZ2h0IDw9IDQwKSByZXR1cm4gNTAwO1xuICBpZiAoaGVpZ2h0IDw9IDQ4KSByZXR1cm4gNjAwO1xuICByZXR1cm4gNjAwO1xufTtcblxuY29uc3QgZ2V0SWNvblNpemVGb3JCdXR0b24gPSBoZWlnaHQgPT4ge1xuICBpZiAoaGVpZ2h0IDw9IDMyKSByZXR1cm4gMTY7XG4gIGlmIChoZWlnaHQgPD0gNDApIHJldHVybiAyMDtcbiAgaWYgKGhlaWdodCA8PSA0OCkgcmV0dXJuIDI0O1xuICByZXR1cm4gMjQ7XG59O1xuXG5jb25zdCBJbnB1dCA9ICh7IGJnLCBoZWlnaHQsIGljb25BZnRlciwgaWNvbkJlZm9yZSwgLi4ucmVzdCB9KSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgYnIgPSBnZXRCb3JkZXJSYWRpdXNGb3JDb250cm9sSGVpZ2h0KGhlaWdodCk7XG4gIGNvbnN0IGlzID0gZ2V0SWNvblNpemVGb3JCdXR0b24oaGVpZ2h0KTtcbiAgY29uc3QgcCA9IE1hdGgucm91bmQoaGVpZ2h0IC8gNCk7XG4gIGNvbnN0IHRzID0gZ2V0VGV4dFNpemVGb3JDb250cm9sSGVpZ2h0KGhlaWdodCk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBkYXRhLXBsYXlncm91bmQtaWQ9XCJpbnB1dFwiXG4gICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgIGJvcmRlclJhZGl1cz17YnJ9XG4gICAgICBiZz17Ymd9XG4gICAgICBvdmVyZmxvdz1cImhpZGRlblwiXG4gICAgICBib3hTaGFkb3c9e2BcbiAgICAgICAgJHtyZ2JhKHRoZW1lLmNvbG9ycy5ncmF5WzldLCAwLjEpfSBcbiAgICAgICAgMCAwIDAgMXB4IGluc2V0LCBcbiAgICAgICAgJHtyZ2JhKHRoZW1lLmNvbG9ycy5ncmF5WzldLCAwLjEpfVxuICAgICAgICAwIDFweCAycHggaW5zZXRcbiAgICBgfVxuICAgID5cbiAgICAgIHtpY29uQmVmb3JlICYmIChcbiAgICAgICAgPEJveFxuICAgICAgICAgIGRhdGEtcGxheWdyb3VuZC1pZD1cImlucHV0Lmljb25CZWZvcmVcIlxuICAgICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgICAgIHRvcD17MH1cbiAgICAgICAgICBsZWZ0PXswfVxuICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgd2lkdGg9e2hlaWdodH1cbiAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICBjc3M9e3sgdXNlclNlbGVjdDogJ25vbmUnLCBwb2ludGVyRXZlbnRzOiAnbm9uZScgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxJY29uIHN5bWJvbD17aWNvbkJlZm9yZX0gc2l6ZT17aXN9IGNvbG9yPVwiZ3JheS40XCIgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICApfVxuICAgICAgPFRleHRcbiAgICAgICAgZGF0YS1wbGF5Z3JvdW5kLWlkPVwiaW5wdXQuZmllbGRcIlxuICAgICAgICBhcz1cImlucHV0XCJcbiAgICAgICAgc2l6ZT17dHN9XG4gICAgICAgIGRpc3BsYXk9XCJibG9ja1wiXG4gICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICBtPXswfVxuICAgICAgICBwcj17aWNvbkFmdGVyID8gaGVpZ2h0ICsgJ3B4JyA6IHAgKyAncHgnfVxuICAgICAgICBwbD17aWNvbkJlZm9yZSA/IGhlaWdodCArICdweCcgOiBwICsgJ3B4J31cbiAgICAgICAgcHk9XCIxMHB4XCJcbiAgICAgICAgYm9yZGVyPXswfVxuICAgICAgICBjb2xvcj1cImJsYWNrXCJcbiAgICAgICAgYmc9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgIGNzcz17Y3NzKHtcbiAgICAgICAgICAnOjpwbGFjZWhvbGRlcic6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgICAgICAgb3BhY2l0eTogMSAvIDMsXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnOmZvY3VzJzoge1xuICAgICAgICAgICAgb3V0bGluZTogMCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KX1cbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAvPlxuICAgICAge2ljb25BZnRlciAmJiAoXG4gICAgICAgIDxCb3hcbiAgICAgICAgICBkYXRhLXBsYXlncm91bmQtaWQ9XCJpbnB1dC5pY29uQWZ0ZXJcIlxuICAgICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgICAgIHRvcD17MH1cbiAgICAgICAgICByaWdodD17MH1cbiAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgIHdpZHRoPXtoZWlnaHR9XG4gICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgY3NzPXt7IHVzZXJTZWxlY3Q6ICdub25lJywgcG9pbnRlckV2ZW50czogJ25vbmUnIH19XG4gICAgICAgID5cbiAgICAgICAgICA8SWNvbiBzeW1ib2w9e2ljb25BZnRlcn0gc2l6ZT17aXN9IGNvbG9yPVwiZ3JheS40XCIgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICApfVxuICAgIDwvQm94PlxuICApO1xufTtcblxuSW5wdXQuZGVmYXVsdFByb3BzID0ge1xuICBiZzogJ2dyYXkuMCcsXG4gIGhlaWdodDogNDAsXG4gIHR5cGU6ICd0ZXh0Jyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$4
};

const Input = ({
  bg,
  height,
  iconAfter,
  iconBefore,
  ...rest
}) => {
  const theme = emotionTheming.useTheme();
  const br = getBorderRadiusForControlHeight$1(height);
  const is = getIconSizeForButton$2(height);
  const p = Math.round(height / 4);
  const ts = getTextSizeForControlHeight$1(height);
  return core.jsx(Box, {
    "data-playground-id": "input",
    position: "relative",
    borderRadius: br,
    bg: bg,
    overflow: "hidden",
    boxShadow: `
        ${rgba(theme.colors.gray[9], 0.1)} 
        0 0 0 1px inset, 
        ${rgba(theme.colors.gray[9], 0.1)}
        0 1px 2px inset
    `
  }, iconBefore && core.jsx(Box, {
    "data-playground-id": "input.iconBefore",
    position: "absolute",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: height,
    height: height,
    css: _ref$5
  }, core.jsx(Icon$1, {
    symbol: iconBefore,
    size: is,
    color: "gray.4"
  })), core.jsx(Text, _extends({
    "data-playground-id": "input.field",
    as: "input",
    size: ts,
    display: "block",
    width: "100%",
    height: height,
    m: 0,
    pr: iconAfter ? height + 'px' : p + 'px',
    pl: iconBefore ? height + 'px' : p + 'px',
    py: "10px",
    border: 0,
    color: "black",
    bg: "transparent",
    css: css({
      '::placeholder': {
        color: 'black',
        opacity: 1 / 3
      },
      ':focus': {
        outline: 0
      }
    })
  }, rest)), iconAfter && core.jsx(Box, {
    "data-playground-id": "input.iconAfter",
    position: "absolute",
    top: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: height,
    height: height,
    css: _ref2$3
  }, core.jsx(Icon$1, {
    symbol: iconAfter,
    size: is,
    color: "gray.4"
  })));
};

Input.defaultProps = {
  bg: 'gray.0',
  height: 40,
  type: 'text'
};

function _EMOTION_STRINGIFIED_CSS_ERROR__$5() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

const getControlSizeForTextSize$1 = size => {
  if (size <= 300) return 16;
  if (size <= 400) return 20;
  if (size <= 500) return 20;
  if (size <= 600) return 24;
  return 24;
};

var _ref$6 = process.env.NODE_ENV === "production" ? {
  name: "1jo2288-Radio",
  styles: "user-select:none;cursor:pointer;;label:Radio;"
} : {
  name: "1jo2288-Radio",
  styles: "user-select:none;cursor:pointer;;label:Radio;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJhZGlvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDTSIsImZpbGUiOiJSYWRpby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSBcImVtb3Rpb24tdGhlbWluZ1wiO1xuaW1wb3J0IHV1aWR2NCBmcm9tIFwidXVpZC92NFwiO1xuaW1wb3J0IGNzcyBmcm9tIFwiQHN0eWxlZC1zeXN0ZW0vY3NzXCI7XG5pbXBvcnQgeyBoaWRlVmlzdWFsbHksIHJnYmEgfSBmcm9tIFwicG9saXNoZWRcIjtcblxuaW1wb3J0IHsgQm94IH0gZnJvbSBcIi4uLy4uL2JveFwiO1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gXCIuLi8uLi90eXBvZ3JhcGh5XCI7XG5cbmNvbnN0IGdldENvbnRyb2xTaXplRm9yVGV4dFNpemUgPSBzaXplID0+IHtcbiAgaWYgKHNpemUgPD0gMzAwKSByZXR1cm4gMTY7XG4gIGlmIChzaXplIDw9IDQwMCkgcmV0dXJuIDIwO1xuICBpZiAoc2l6ZSA8PSA1MDApIHJldHVybiAyMDtcbiAgaWYgKHNpemUgPD0gNjAwKSByZXR1cm4gMjQ7XG4gIHJldHVybiAyNDtcbn07XG5cbmNvbnN0IFJhZGlvID0gKHsgYmcsIGNoaWxkcmVuLCBpbmRldGVybWluYXRlLCBzaXplLCAuLi5yZXN0IH0pID0+IHtcbiAgY29uc3QgdWlkID0gdXVpZHY0KCk7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgY3MgPSBnZXRDb250cm9sU2l6ZUZvclRleHRTaXplKHNpemUpIC0gNDtcblxuICByZXR1cm4gKFxuICAgIDxUZXh0XG4gICAgICBkYXRhLXBsYXlncm91bmQtaWQ9XCJyYWRpb1wiXG4gICAgICByb2xlPVwicmFkaW9cIlxuICAgICAgYXM9XCJsYWJlbFwiXG4gICAgICBodG1sRm9yPXt1aWR9XG4gICAgICBzaXplPXtzaXplfVxuICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgICBkaXNwbGF5PVwiaW5saW5lLWJsb2NrXCJcbiAgICAgIHBsPXtgY2FsYygke2NzICsgXCJweFwifSArIDRweClgfVxuICAgICAgY3NzPXt7IHVzZXJTZWxlY3Q6IFwibm9uZVwiLCBjdXJzb3I6IFwicG9pbnRlclwiIH19XG4gICAgPlxuICAgICAgPEJveFxuICAgICAgICBkYXRhLXBsYXlncm91bmQtaWQ9XCJyYWRpby5oaWRkZW5JbnB1dFwiXG4gICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICBhcz1cImlucHV0XCJcbiAgICAgICAgaWQ9e3VpZH1cbiAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgcmVmPXtlbCA9PiBlbCAmJiAoZWwuaW5kZXRlcm1pbmF0ZSA9IGluZGV0ZXJtaW5hdGUpfVxuICAgICAgICBjc3M9e2Nzcyh7XG4gICAgICAgICAgLi4uaGlkZVZpc3VhbGx5KCksXG4gICAgICAgICAgXCIrIGRpdlwiOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6XG4gICAgICAgICAgICAgIFwidXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWRYUm1MVGdpUHo0TkNqd2hMUzBnUjJWdVpYSmhkRzl5T2lCQlpHOWlaU0JKYkd4MWMzUnlZWFJ2Y2lBeE55NHhMakFzSUZOV1J5QkZlSEJ2Y25RZ1VHeDFaeTFKYmlBdUlGTldSeUJXWlhKemFXOXVPaUEyTGpBd0lFSjFhV3hrSURBcElDQXRMVDROQ2p3aFJFOURWRmxRUlNCemRtY2dVRlZDVEVsRElDSXRMeTlYTTBNdkwwUlVSQ0JUVmtjZ01TNHhMeTlGVGlJZ0ltaDBkSEE2THk5M2QzY3Vkek11YjNKbkwwZHlZWEJvYVdOekwxTldSeTh4TGpFdlJGUkVMM04yWnpFeExtUjBaQ0krRFFvOGMzWm5JSFpsY25OcGIyNDlJakV1TVNJZ2FXUTlJa3hoZVdWeVh6RWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaUlIZzlJakJ3ZUNJZ2VUMGlNSEI0SWcwS0NTQjJhV1YzUW05NFBTSXdJREFnT0NBNElpQmxibUZpYkdVdFltRmphMmR5YjNWdVpEMGlibVYzSURBZ01DQTRJRGdpSUhodGJEcHpjR0ZqWlQwaWNISmxjMlZ5ZG1VaVBnMEtQSEJoZEdnZ1ptbHNiRDBpSTBaR1JrWkdSaUlnWkQwaVRUUXNNVU15TGpNc01Td3hMREl1TXl3eExEUnpNUzR6TERNc015d3pjek10TVM0ekxETXRNMU0xTGpjc01TdzBMREY2SWk4K0RRbzhMM04yWno0TkNnPT0pXCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCI1MCUgNTAlXCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiNTAlIDUwJVwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcbiAgICAgICAgICAgIGJveFNoYWRvdzogYGluc2V0IDAgMCAwIDFweCAke3JnYmEoXG4gICAgICAgICAgICAgIHRoZW1lLmNvbG9ycy5ncmF5WzldLFxuICAgICAgICAgICAgICAwLjJcbiAgICAgICAgICAgICl9LCAwIDAgMXB4ICR7cmdiYSh0aGVtZS5jb2xvcnMuZ3JheVs0XSwgMC4xKX0sIDAgMXB4IDJweCAke3JnYmEoXG4gICAgICAgICAgICAgIHRoZW1lLmNvbG9ycy5ncmF5WzRdLFxuICAgICAgICAgICAgICAwLjFcbiAgICAgICAgICAgICl9YCxcbiAgICAgICAgICAgIHVzZXJTZWxlY3Q6IFwibm9uZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIjpjaGVja2VkICsgZGl2XCI6IHtcbiAgICAgICAgICAgIGJnOiBcImJsdWUuNVwiLFxuICAgICAgICAgICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDAgMXB4ICR7cmdiYShcbiAgICAgICAgICAgICAgdGhlbWUuY29sb3JzLmdyYXlbOV0sXG4gICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICl9LCAwIDAgMXB4ICR7cmdiYSh0aGVtZS5jb2xvcnMuZ3JheVs0XSwgMC4xKX0sIDAgMXB4IDJweCAke3JnYmEoXG4gICAgICAgICAgICAgIHRoZW1lLmNvbG9ycy5ncmF5WzRdLFxuICAgICAgICAgICAgICAwLjFcbiAgICAgICAgICAgICl9YFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCI6YWN0aXZlICsgZGl2XCI6IHtcbiAgICAgICAgICAgIGJnOiBcImJsdWUuMVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIjpmb2N1cyArIGRpdlwiOiB7XG4gICAgICAgICAgICBib3hTaGFkb3c6IGBpbnNldCAwIDAgMCAxcHggJHt0aGVtZS5jb2xvcnMuYmx1ZVs0XX0sIDAgMCAxcHggJHtyZ2JhKFxuICAgICAgICAgICAgICB0aGVtZS5jb2xvcnMuZ3JheVs0XSxcbiAgICAgICAgICAgICAgMC4xXG4gICAgICAgICAgICApfSwgMCAxcHggMnB4ICR7cmdiYSh0aGVtZS5jb2xvcnMuZ3JheVs0XSwgMC4xKX1gXG4gICAgICAgICAgfVxuICAgICAgICB9KX1cbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAvPlxuICAgICAgPEJveFxuICAgICAgICBkYXRhLXBsYXlncm91bmQtaWQ9XCJyYWRpby5jb250cm9sXCJcbiAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXG4gICAgICAgIHRvcD1cInNwYWNpbmcuMVwiXG4gICAgICAgIGxlZnQ9ezB9XG4gICAgICAgIGRpc3BsYXk9XCJibG9ja1wiXG4gICAgICAgIHdpZHRoPXtjc31cbiAgICAgICAgaGVpZ2h0PXtjc31cbiAgICAgICAgYm9yZGVyUmFkaXVzPXs5OTk5fVxuICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgYmc9e2JnfVxuICAgICAgLz5cbiAgICAgIDxCb3ggZGF0YS1wbGF5Z3JvdW5kLWlkPVwicmFkaW8udGV4dFwiIGFzPVwic3BhblwiPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0JveD5cbiAgICA8L1RleHQ+XG4gICk7XG59O1xuXG5SYWRpby5kZWZhdWx0UHJvcHMgPSB7XG4gIGJnOiBcIndoaXRlXCIsXG4gIHNpemU6IDQwMFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmFkaW87XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$5
};

const Radio = ({
  bg,
  children,
  indeterminate,
  size,
  ...rest
}) => {
  const uid = v4_1();
  const theme = emotionTheming.useTheme();
  const cs = getControlSizeForTextSize$1(size) - 4;
  return core.jsx(Text, {
    "data-playground-id": "radio",
    role: "radio",
    as: "label",
    htmlFor: uid,
    size: size,
    position: "relative",
    display: "inline-block",
    pl: `calc(${cs + "px"} + 4px)`,
    css: _ref$6
  }, core.jsx(Box, _extends({
    "data-playground-id": "radio.hiddenInput",
    role: "presentation",
    as: "input",
    id: uid,
    type: "radio",
    ref: el => el && (el.indeterminate = indeterminate),
    css: css({ ...hideVisually(),
      "+ div": {
        backgroundImage: "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgOCA4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA4IDgiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQsMUMyLjMsMSwxLDIuMywxLDRzMS4zLDMsMywzczMtMS4zLDMtM1M1LjcsMSw0LDF6Ii8+DQo8L3N2Zz4NCg==)",
        backgroundSize: "50% 50%",
        backgroundPosition: "50% 50%",
        backgroundRepeat: "no-repeat",
        boxShadow: `inset 0 0 0 1px ${rgba(theme.colors.gray[9], 0.2)}, 0 0 1px ${rgba(theme.colors.gray[4], 0.1)}, 0 1px 2px ${rgba(theme.colors.gray[4], 0.1)}`,
        userSelect: "none"
      },
      ":checked + div": {
        bg: "blue.5",
        boxShadow: `inset 0 0 0 1px ${rgba(theme.colors.gray[9], 0)}, 0 0 1px ${rgba(theme.colors.gray[4], 0.1)}, 0 1px 2px ${rgba(theme.colors.gray[4], 0.1)}`
      },
      ":active + div": {
        bg: "blue.1"
      },
      ":focus + div": {
        boxShadow: `inset 0 0 0 1px ${theme.colors.blue[4]}, 0 0 1px ${rgba(theme.colors.gray[4], 0.1)}, 0 1px 2px ${rgba(theme.colors.gray[4], 0.1)}`
      }
    })
  }, rest)), core.jsx(Box, {
    "data-playground-id": "radio.control",
    position: "absolute",
    top: "spacing.1",
    left: 0,
    display: "block",
    width: cs,
    height: cs,
    borderRadius: 9999,
    color: "white",
    bg: bg
  }), core.jsx(Box, {
    "data-playground-id": "radio.text",
    as: "span"
  }, children));
};

Radio.defaultProps = {
  bg: "white",
  size: 400
};

const RadioGroup = ({
  options,
  stack
}) => {
  const uid = v4_1();
  return core.jsx(Box, {
    "data-playground-id": "radioGroup",
    overflow: "hidden"
  }, core.jsx(Box, {
    "data-playground-id": "radioGroup.list",
    role: "radiogroup",
    as: "ul",
    display: "flex",
    flexDirection: stack && "column",
    flexWrap: "wrap",
    p: 0,
    css:
    /*#__PURE__*/
    css$1({
      margin: stack ? "-2px" : "-2px -4px",
      listStyle: "none",
      "> *": {
        padding: stack ? "2px" : "2px 4px"
      }
    }, ";label:RadioGroup;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJhZGlvR3JvdXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JRIiwiZmlsZSI6IlJhZGlvR3JvdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXVpZHY0IGZyb20gXCJ1dWlkL3Y0XCI7XG5cbmltcG9ydCB7IEJveCB9IGZyb20gXCIuLi8uLi9ib3hcIjtcblxuaW1wb3J0IFJhZGlvIGZyb20gXCIuL1JhZGlvXCI7XG5cbmNvbnN0IFJhZGlvR3JvdXAgPSAoeyBvcHRpb25zLCBzdGFjayB9KSA9PiB7XG4gIGNvbnN0IHVpZCA9IHV1aWR2NCgpO1xuXG4gIHJldHVybiAoXG4gICAgPEJveCBkYXRhLXBsYXlncm91bmQtaWQ9XCJyYWRpb0dyb3VwXCIgb3ZlcmZsb3c9XCJoaWRkZW5cIj5cbiAgICAgIDxCb3hcbiAgICAgICAgZGF0YS1wbGF5Z3JvdW5kLWlkPVwicmFkaW9Hcm91cC5saXN0XCJcbiAgICAgICAgcm9sZT1cInJhZGlvZ3JvdXBcIlxuICAgICAgICBhcz1cInVsXCJcbiAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICBmbGV4RGlyZWN0aW9uPXtzdGFjayAmJiBcImNvbHVtblwifVxuICAgICAgICBmbGV4V3JhcD1cIndyYXBcIlxuICAgICAgICBwPXswfVxuICAgICAgICBjc3M9e3tcbiAgICAgICAgICBtYXJnaW46IHN0YWNrID8gXCItMnB4XCIgOiBcIi0ycHggLTRweFwiLFxuICAgICAgICAgIGxpc3RTdHlsZTogXCJub25lXCIsXG4gICAgICAgICAgXCI+ICpcIjoge1xuICAgICAgICAgICAgcGFkZGluZzogc3RhY2sgPyBcIjJweFwiIDogXCIycHggNHB4XCJcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uLCBpKSA9PiAoXG4gICAgICAgICAgPEJveCBkYXRhLXBsYXlncm91bmQtaWQ9XCJyYWRpb0dyb3VwLml0ZW1cIiBhcz1cImxpXCIga2V5PXtpfT5cbiAgICAgICAgICAgIDxSYWRpbyBuYW1lPXt1aWR9IHZhbHVlPXtvcHRpb24udmFsdWV9PlxuICAgICAgICAgICAgICB7b3B0aW9uLmxhYmVsfVxuICAgICAgICAgICAgPC9SYWRpbz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKSl9XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cblJhZGlvR3JvdXAuZGVmYXVsdFByb3BzID0ge1xuICBvcHRpb25zOiBbXG4gICAge1xuICAgICAgbGFiZWw6IFwiT3B0aW9uIDFcIixcbiAgICAgIHZhbHVlOiAxXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJPcHRpb24gMlwiLFxuICAgICAgdmFsdWU6IDJcbiAgICB9XG4gIF1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGlvR3JvdXA7XG4iXX0= */"))
  }, options.map((option, i) => core.jsx(Box, {
    "data-playground-id": "radioGroup.item",
    as: "li",
    key: i
  }, core.jsx(Radio, {
    name: uid,
    value: option.value
  }, option.label)))));
};

RadioGroup.defaultProps = {
  options: [{
    label: "Option 1",
    value: 1
  }, {
    label: "Option 2",
    value: 2
  }]
};

const loadingKeyframes = core.keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;
const loadingCircleKeyframes = core.keyframes`
  0% {
    stroke-dashoffset: 600;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

const Spinner = ({
  color,
  size,
  ...rest
}) => core.jsx(Box, _extends({
  "data-playground-id": "spinner",
  width: size,
  height: size,
  lineHeight: 0
}, rest), core.jsx(Box, {
  "data-playground-id": "spinner.svg",
  as: "svg",
  x: "0px",
  y: "0px",
  viewBox: "0 0 150 150",
  css:
  /*#__PURE__*/
  css$1({
    animation: `${loadingKeyframes} 2s linear infinite`
  }, ";label:Spinner;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNwaW5uZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNNIiwiZmlsZSI6IlNwaW5uZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5cbmltcG9ydCB7IEJveCB9IGZyb20gJy4uLy4uL2JveCc7XG5cbmNvbnN0IGxvYWRpbmdLZXlmcmFtZXMgPSBrZXlmcmFtZXNgXG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG5gO1xuXG5jb25zdCBsb2FkaW5nQ2lyY2xlS2V5ZnJhbWVzID0ga2V5ZnJhbWVzYFxuICAwJSB7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDYwMDtcbiAgfVxuICAxMDAlIHtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgfVxuYDtcblxuY29uc3QgU3Bpbm5lciA9ICh7IGNvbG9yLCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPEJveFxuICAgIGRhdGEtcGxheWdyb3VuZC1pZD1cInNwaW5uZXJcIlxuICAgIHdpZHRoPXtzaXplfVxuICAgIGhlaWdodD17c2l6ZX1cbiAgICBsaW5lSGVpZ2h0PXswfVxuICAgIHsuLi5yZXN0fVxuICA+XG4gICAgPEJveFxuICAgICAgZGF0YS1wbGF5Z3JvdW5kLWlkPVwic3Bpbm5lci5zdmdcIlxuICAgICAgYXM9XCJzdmdcIlxuICAgICAgeD1cIjBweFwiXG4gICAgICB5PVwiMHB4XCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMTUwIDE1MFwiXG4gICAgICBjc3M9e3sgYW5pbWF0aW9uOiBgJHtsb2FkaW5nS2V5ZnJhbWVzfSAycyBsaW5lYXIgaW5maW5pdGVgIH19XG4gICAgPlxuICAgICAgPEJveFxuICAgICAgICBkYXRhLXBsYXlncm91bmQtaWQ9XCJzcGlubmVyLmNpcmNsZVwiXG4gICAgICAgIGFzPVwiY2lyY2xlXCJcbiAgICAgICAgY3g9XCI3NVwiXG4gICAgICAgIGN5PVwiNzVcIlxuICAgICAgICByPVwiNjBcIlxuICAgICAgICBjb2xvcj17Y29sb3J9XG4gICAgICAgIGNzcz17e1xuICAgICAgICAgIHN0cm9rZURhc2hvZmZzZXQ6IDYwMCxcbiAgICAgICAgICBzdHJva2VEYXNoYXJyYXk6IDMwMCxcbiAgICAgICAgICBzdHJva2VXaWR0aDogMTIsXG4gICAgICAgICAgc3Ryb2tlTWl0ZXJsaW1pdDogMTAsXG4gICAgICAgICAgc3Ryb2tlTGluZWNhcDogJ3JvdW5kJyxcbiAgICAgICAgICBhbmltYXRpb246IGAke2xvYWRpbmdDaXJjbGVLZXlmcmFtZXN9IDEuNnMgY3ViaWMtYmV6aWVyKDAuNCwgMC4xNSwgMC42LCAwLjg1KSBpbmZpbml0ZWAsXG4gICAgICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgICAgICBmaWxsOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L0JveD5cbiAgPC9Cb3g+XG4pO1xuXG5TcGlubmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgY29sb3I6ICdncmF5LjQnLFxuICBzaXplOiA0MCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNwaW5uZXI7XG4iXX0= */"))
}, core.jsx(Box, {
  "data-playground-id": "spinner.circle",
  as: "circle",
  cx: "75",
  cy: "75",
  r: "60",
  color: color,
  css:
  /*#__PURE__*/
  css$1({
    strokeDashoffset: 600,
    strokeDasharray: 300,
    strokeWidth: 12,
    strokeMiterlimit: 10,
    strokeLinecap: 'round',
    animation: `${loadingCircleKeyframes} 1.6s cubic-bezier(0.4, 0.15, 0.6, 0.85) infinite`,
    stroke: 'currentColor',
    fill: 'transparent'
  }, ";label:Spinner;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNwaW5uZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOENRIiwiZmlsZSI6IlNwaW5uZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5cbmltcG9ydCB7IEJveCB9IGZyb20gJy4uLy4uL2JveCc7XG5cbmNvbnN0IGxvYWRpbmdLZXlmcmFtZXMgPSBrZXlmcmFtZXNgXG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG5gO1xuXG5jb25zdCBsb2FkaW5nQ2lyY2xlS2V5ZnJhbWVzID0ga2V5ZnJhbWVzYFxuICAwJSB7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDYwMDtcbiAgfVxuICAxMDAlIHtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgfVxuYDtcblxuY29uc3QgU3Bpbm5lciA9ICh7IGNvbG9yLCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPEJveFxuICAgIGRhdGEtcGxheWdyb3VuZC1pZD1cInNwaW5uZXJcIlxuICAgIHdpZHRoPXtzaXplfVxuICAgIGhlaWdodD17c2l6ZX1cbiAgICBsaW5lSGVpZ2h0PXswfVxuICAgIHsuLi5yZXN0fVxuICA+XG4gICAgPEJveFxuICAgICAgZGF0YS1wbGF5Z3JvdW5kLWlkPVwic3Bpbm5lci5zdmdcIlxuICAgICAgYXM9XCJzdmdcIlxuICAgICAgeD1cIjBweFwiXG4gICAgICB5PVwiMHB4XCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMTUwIDE1MFwiXG4gICAgICBjc3M9e3sgYW5pbWF0aW9uOiBgJHtsb2FkaW5nS2V5ZnJhbWVzfSAycyBsaW5lYXIgaW5maW5pdGVgIH19XG4gICAgPlxuICAgICAgPEJveFxuICAgICAgICBkYXRhLXBsYXlncm91bmQtaWQ9XCJzcGlubmVyLmNpcmNsZVwiXG4gICAgICAgIGFzPVwiY2lyY2xlXCJcbiAgICAgICAgY3g9XCI3NVwiXG4gICAgICAgIGN5PVwiNzVcIlxuICAgICAgICByPVwiNjBcIlxuICAgICAgICBjb2xvcj17Y29sb3J9XG4gICAgICAgIGNzcz17e1xuICAgICAgICAgIHN0cm9rZURhc2hvZmZzZXQ6IDYwMCxcbiAgICAgICAgICBzdHJva2VEYXNoYXJyYXk6IDMwMCxcbiAgICAgICAgICBzdHJva2VXaWR0aDogMTIsXG4gICAgICAgICAgc3Ryb2tlTWl0ZXJsaW1pdDogMTAsXG4gICAgICAgICAgc3Ryb2tlTGluZWNhcDogJ3JvdW5kJyxcbiAgICAgICAgICBhbmltYXRpb246IGAke2xvYWRpbmdDaXJjbGVLZXlmcmFtZXN9IDEuNnMgY3ViaWMtYmV6aWVyKDAuNCwgMC4xNSwgMC42LCAwLjg1KSBpbmZpbml0ZWAsXG4gICAgICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgICAgICBmaWxsOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L0JveD5cbiAgPC9Cb3g+XG4pO1xuXG5TcGlubmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgY29sb3I6ICdncmF5LjQnLFxuICBzaXplOiA0MCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNwaW5uZXI7XG4iXX0= */"))
})));

Spinner.defaultProps = {
  color: 'gray.4',
  size: 40
};

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = process.env.NODE_ENV !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning$2 = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning$2.apply(null, [format].concat(args));
    }
  };
}

var warning_1 = warning;

// the lifetime of the app before it gets reloaded, I mean ... come on.
// I don't even know what xillion that is.
// /me googles
// Oh duh, quadrillion. Nine quadrillion components. I think we're okay.

var id = 0;

var genId = function genId() {
  return ++id;
};

var useId = function useId() {
  var _useState = React.useState(null),
      id = _useState[0],
      setId = _useState[1];

  React.useEffect(function () {
    return setId(genId());
  }, []);
  return id;
};

function _extends$6() { _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }

function _objectWithoutPropertiesLoose$4(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Tabs = React.forwardRef(function Tabs(_ref, ref) {
  var children = _ref.children,
      _ref$as = _ref.as,
      Comp = _ref$as === void 0 ? "div" : _ref$as,
      onChange = _ref.onChange,
      _ref$index = _ref.index,
      controlledIndex = _ref$index === void 0 ? undefined : _ref$index,
      _ref$readOnly = _ref.readOnly,
      readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
      defaultIndex = _ref.defaultIndex,
      props = _objectWithoutPropertiesLoose$4(_ref, ["children", "as", "onChange", "index", "readOnly", "defaultIndex"]);

  // useRef because you shouldn't switch between controlled/uncontrolled
  var _useRef = React.useRef(controlledIndex != null),
      isControlled = _useRef.current;

  process.env.NODE_ENV !== "production" ? warning_1(!(isControlled && controlledIndex == null), "Tabs is changing from controlled to uncontrolled. Tabs should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled Tabs for the lifetime of the component. Check the `index` prop being passed in.") : void 0;
  process.env.NODE_ENV !== "production" ? warning_1(!(!isControlled && controlledIndex != null), "Tabs is changing from uncontrolled to controlled. Tabs should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled Tabs for the lifetime of the component. Check the `index` prop being passed in.") : void 0;

  var _id = useId(); // we only manage focus if the user caused the update vs.
  // a new controlled index coming in


  var _userInteractedRef = React.useRef(false);

  var _selectedPanelRef = React.useRef(null);

  var _useState = React.useState(defaultIndex || 0),
      selectedIndex = _useState[0],
      setSelectedIndex = _useState[1];

  var clones = React__default.Children.map(children, function (child) {
    // ignore random <div/>s etc.
    if (!child || typeof child.type === "string") return child;
    return React.cloneElement(child, {
      selectedIndex: isControlled ? controlledIndex : selectedIndex,
      _id: _id,
      _userInteractedRef: _userInteractedRef,
      _selectedPanelRef: _selectedPanelRef,
      _onFocusPanel: function _onFocusPanel() {
        return _selectedPanelRef.current && _selectedPanelRef.current.focus();
      },
      _onSelectTab: readOnly ? function () {} : function (index) {
        _userInteractedRef.current = true;
        onChange && onChange(index);

        if (!isControlled) {
          setSelectedIndex(index);
        }
      }
    });
  });
  return React__default.createElement(Comp, _extends$6({
    "data-reach-tabs": "",
    ref: ref
  }, props, {
    children: clones
  }));
});

if (process.env.NODE_ENV !== "production") {
  Tabs.propTypes = {
    children: propTypes_13.isRequired,
    onChange: propTypes_3,
    index: function index(props, name, compName) {
      if (props.index > -1 && props.onChange == null && props.readOnly !== true) {
        return new Error("You provided a `value` prop to `Tabs` without an `onChange` handler. This will render a read-only tabs element. If the tabs should be mutable use `defaultIndex`. Otherwise, set `onChange`.");
      } else {
        for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
          rest[_key - 3] = arguments[_key];
        }

        return propTypes_4.apply(void 0, [name, props, compName].concat(rest));
      }
    },
    defaultIndex: propTypes_4
  };
} ////////////////////////////////////////////////////////////////////////////////


var TabList = React.forwardRef(function TabList(_ref2, ref) {
  var children = _ref2.children,
      _ref2$as = _ref2.as,
      Comp = _ref2$as === void 0 ? "div" : _ref2$as,
      onKeyDown = _ref2.onKeyDown,
      clonedProps = _objectWithoutPropertiesLoose$4(_ref2, ["children", "as", "onKeyDown"]);

  var selectedIndex = clonedProps.selectedIndex,
      _onSelectTab = clonedProps._onSelectTab,
      _userInteractedRef = clonedProps._userInteractedRef,
      _onFocusPanel = clonedProps._onFocusPanel,
      _selectedPanelRef = clonedProps._selectedPanelRef,
      _id = clonedProps._id,
      htmlProps = _objectWithoutPropertiesLoose$4(clonedProps, ["selectedIndex", "_onSelectTab", "_userInteractedRef", "_onFocusPanel", "_selectedPanelRef", "_id"]);

  var clones = React__default.Children.map(children, function (child, index) {
    return React.cloneElement(child, {
      isSelected: index === selectedIndex,
      _id: makeId(_id, index),
      _userInteractedRef: _userInteractedRef,
      _onSelect: function _onSelect() {
        return _onSelectTab(index);
      }
    });
  });
  var handleKeyDown = wrapEvent(onKeyDown, function (event) {
    var enabledIndexes = React__default.Children.map(children, function (child, index) {
      return child.props.disabled === true ? null : index;
    }).filter(function (index) {
      return index != null;
    }); // looks something like: [0, 2, 3, 5]

    var enabledSelectedIndex = enabledIndexes.indexOf(selectedIndex);

    switch (event.key) {
      case "ArrowRight":
        {
          var nextEnabledIndex = (enabledSelectedIndex + 1) % enabledIndexes.length;
          var nextIndex = enabledIndexes[nextEnabledIndex];

          _onSelectTab(nextIndex);

          break;
        }

      case "ArrowLeft":
        {
          var count = enabledIndexes.length;

          var _nextEnabledIndex = (enabledSelectedIndex - 1 + count) % count;

          var _nextIndex = enabledIndexes[_nextEnabledIndex];

          _onSelectTab(_nextIndex);

          break;
        }

      case "ArrowDown":
        {
          // don't scroll down
          event.preventDefault();

          _onFocusPanel();

          break;
        }

      case "Home":
        {
          _onSelectTab(0);

          break;
        }

      case "End":
        {
          _onSelectTab(React__default.Children.count(children) - 1);

          break;
        }
    }
  });
  return React__default.createElement(Comp, _extends$6({
    "data-reach-tab-list": "",
    ref: ref,
    role: "tablist",
    onKeyDown: handleKeyDown,
    children: clones
  }, htmlProps));
});

if (process.env.NODE_ENV !== "production") {
  TabList.propTypes = {
    children: propTypes_13
  };
} ////////////////////////////////////////////////////////////////////////////////


var Tab = React.forwardRef(function Tab(_ref3, forwardedRef) {
  var children = _ref3.children,
      _ref3$as = _ref3.as,
      Comp = _ref3$as === void 0 ? "button" : _ref3$as,
      rest = _objectWithoutPropertiesLoose$4(_ref3, ["children", "as"]);

  var isSelected = rest.isSelected,
      _userInteractedRef = rest._userInteractedRef,
      _onSelect = rest._onSelect,
      _id = rest._id,
      htmlProps = _objectWithoutPropertiesLoose$4(rest, ["isSelected", "_userInteractedRef", "_onSelect", "_id"]);

  var htmlType = Comp === "button" && htmlProps.type == null ? "button" : undefined;
  var ownRef = React.useRef(null);
  var ref = useForkedRef(forwardedRef, ownRef);
  useUpdateEffect(function () {
    if (isSelected && ownRef.current && _userInteractedRef.current) {
      _userInteractedRef.current = false;
      ownRef.current.focus();
    }
  }, [isSelected]);
  return React__default.createElement(Comp, _extends$6({
    "data-reach-tab": "",
    ref: ref,
    role: "tab",
    id: makeId("tab", _id),
    tabIndex: isSelected ? 0 : -1,
    "aria-selected": isSelected,
    "aria-controls": makeId("panel", _id),
    "data-selected": isSelected ? "" : undefined,
    onClick: _onSelect,
    children: children,
    type: htmlType
  }, htmlProps));
});

if (process.env.NODE_ENV !== "production") {
  Tab.propTypes = {
    children: propTypes_13
  };
} ////////////////////////////////////////////////////////////////////////////////


var TabPanels = React.forwardRef(function TabPanels(_ref4, forwardedRef) {
  var children = _ref4.children,
      _ref4$as = _ref4.as,
      Comp = _ref4$as === void 0 ? "div" : _ref4$as,
      rest = _objectWithoutPropertiesLoose$4(_ref4, ["children", "as"]);

  var selectedIndex = rest.selectedIndex,
      _selectedPanelRef = rest._selectedPanelRef,
      _userInteractedRef = rest._userInteractedRef,
      _onFocusPanel = rest._onFocusPanel,
      _onSelectTab = rest._onSelectTab,
      _id = rest._id,
      htmlAttrs = _objectWithoutPropertiesLoose$4(rest, ["selectedIndex", "_selectedPanelRef", "_userInteractedRef", "_onFocusPanel", "_onSelectTab", "_id"]);

  var clones = React__default.Children.map(children, function (child, index) {
    return React.cloneElement(child, {
      isSelected: index === selectedIndex,
      _selectedPanelRef: _selectedPanelRef,
      _id: makeId(_id, index)
    });
  });
  return React__default.createElement(Comp, _extends$6({
    "data-reach-tab-panels": "",
    ref: forwardedRef
  }, htmlAttrs, {
    children: clones
  }));
});

if (process.env.NODE_ENV !== "production") {
  TabPanels.propTypes = {
    children: propTypes_13
  };
} ////////////////////////////////////////////////////////////////////////////////


var TabPanel = React.forwardRef(function TabPanel(_ref5, forwardedRef) {
  var children = _ref5.children,
      _ref5$as = _ref5.as,
      Comp = _ref5$as === void 0 ? "div" : _ref5$as,
      rest = _objectWithoutPropertiesLoose$4(_ref5, ["children", "as"]);

  var isSelected = rest.isSelected,
      _selectedPanelRef = rest._selectedPanelRef,
      _id = rest._id,
      htmlProps = _objectWithoutPropertiesLoose$4(rest, ["isSelected", "_selectedPanelRef", "_id"]);

  var ref = useForkedRef(forwardedRef, isSelected ? _selectedPanelRef : null);
  return React__default.createElement(Comp, _extends$6({
    "data-reach-tab-panel": "",
    ref: ref,
    role: "tabpanel",
    tabIndex: -1,
    "aria-labelledby": makeId("tab", _id),
    hidden: !isSelected,
    id: makeId("panel", _id),
    children: children
  }, htmlProps));
});

if (process.env.NODE_ENV !== "production") {
  TabPanel.propTypes = {
    children: propTypes_13
  };
}

const Tab$1 = ({
  children,
  isSelected,
  ...rest
}) => core.jsx(Tab, _extends({
  "data-playground-id": "tab",
  css: css({
    position: 'relative',
    height: 48,
    m: 0,
    mb: '-1px',
    p: 0,
    border: 0,
    bg: 'transparent',
    appearance: 'none',
    cursor: 'pointer',
    ':not(:first-of-type)': {
      ml: 'spacing.5'
    }
  })
}, rest), core.jsx(Heading, {
  "data-playground-id": "tab.label",
  as: "span",
  size: 400,
  lineHeight: "48px",
  textAlign: "center",
  color: isSelected ? 'gray.9' : 'gray.7'
}, children), core.jsx(Box, {
  "data-playground-id": "tab.highlight",
  as: "span",
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  height: "1px",
  bg: "gray.9",
  opacity: isSelected ? 1 : 0
}));

const Tabs$1 = ({
  data,
  ...rest
}) => {
  return core.jsx(Tabs, _extends({
    "data-playground-id": "tabs"
  }, rest), core.jsx(TabList, {
    "data-playground-id": "tabs.list",
    css: css({
      display: 'flex',
      width: '100%',
      borderBottom: '1px solid',
      borderColor: 'gray.1'
    })
  }, data.map((tab, index) => core.jsx(Tab$1, {
    key: index
  }, tab.label))), core.jsx(TabPanels, {
    "data-playground-id": "tabs.panels"
  }, data.map((tab, index) => core.jsx(TabPanel, {
    "data-playground-id": "tabs.panels.item",
    key: index
  }, tab.content))));
};

var _isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

var isIE =  _isBrowser ? !!document.documentElement.currentStyle : false;
var HIDDEN_TEXTAREA_STYLE = {
  'min-height': '0',
  'max-height': 'none',
  height: '0',
  visibility: 'hidden',
  overflow: 'hidden',
  position: 'absolute',
  'z-index': '-1000',
  top: '0',
  right: '0'
};
var SIZING_STYLE = ['letter-spacing', 'line-height', 'font-family', 'font-weight', 'font-size', 'font-style', 'tab-size', 'text-rendering', 'text-transform', 'width', 'text-indent', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left', 'border-top-width', 'border-right-width', 'border-bottom-width', 'border-left-width', 'box-sizing'];
var computedStyleCache = {};
var hiddenTextarea = ( _isBrowser) && document.createElement('textarea');

var forceHiddenStyles = function forceHiddenStyles(node) {
  Object.keys(HIDDEN_TEXTAREA_STYLE).forEach(function (key) {
    node.style.setProperty(key, HIDDEN_TEXTAREA_STYLE[key], 'important');
  });
};

if ( _isBrowser) {
  hiddenTextarea.setAttribute('tab-index', '-1');
  hiddenTextarea.setAttribute('aria-hidden', 'true');
  forceHiddenStyles(hiddenTextarea);
}

function calculateNodeHeight(uiTextNode, uid, useCache, minRows, maxRows) {
  if (useCache === void 0) {
    useCache = false;
  }

  if (minRows === void 0) {
    minRows = null;
  }

  if (maxRows === void 0) {
    maxRows = null;
  }

  if (hiddenTextarea.parentNode === null) {
    document.body.appendChild(hiddenTextarea);
  } // Copy all CSS properties that have an impact on the height of the content in
  // the textbox


  var nodeStyling = calculateNodeStyling(uiTextNode, uid, useCache);

  if (nodeStyling === null) {
    return null;
  }

  var paddingSize = nodeStyling.paddingSize,
      borderSize = nodeStyling.borderSize,
      boxSizing = nodeStyling.boxSizing,
      sizingStyle = nodeStyling.sizingStyle; // Need to have the overflow attribute to hide the scrollbar otherwise
  // text-lines will not calculated properly as the shadow will technically be
  // narrower for content

  Object.keys(sizingStyle).forEach(function (key) {
    hiddenTextarea.style[key] = sizingStyle[key];
  });
  forceHiddenStyles(hiddenTextarea);
  hiddenTextarea.value = uiTextNode.value || uiTextNode.placeholder || 'x';
  var minHeight = -Infinity;
  var maxHeight = Infinity;
  var height = hiddenTextarea.scrollHeight;

  if (boxSizing === 'border-box') {
    // border-box: add border, since height = content + padding + border
    height = height + borderSize;
  } else if (boxSizing === 'content-box') {
    // remove padding, since height = content
    height = height - paddingSize;
  } // measure height of a textarea with a single row


  hiddenTextarea.value = 'x';
  var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize; // Stores the value's rows count rendered in `hiddenTextarea`,
  // regardless if `maxRows` or `minRows` props are passed

  var valueRowCount = Math.floor(height / singleRowHeight);

  if (minRows !== null) {
    minHeight = singleRowHeight * minRows;

    if (boxSizing === 'border-box') {
      minHeight = minHeight + paddingSize + borderSize;
    }

    height = Math.max(minHeight, height);
  }

  if (maxRows !== null) {
    maxHeight = singleRowHeight * maxRows;

    if (boxSizing === 'border-box') {
      maxHeight = maxHeight + paddingSize + borderSize;
    }

    height = Math.min(maxHeight, height);
  }

  var rowCount = Math.floor(height / singleRowHeight);
  return {
    height: height,
    minHeight: minHeight,
    maxHeight: maxHeight,
    rowCount: rowCount,
    valueRowCount: valueRowCount
  };
}

function calculateNodeStyling(node, uid, useCache) {
  if (useCache === void 0) {
    useCache = false;
  }

  if (useCache && computedStyleCache[uid]) {
    return computedStyleCache[uid];
  }

  var style = window.getComputedStyle(node);

  if (style === null) {
    return null;
  }

  var sizingStyle = SIZING_STYLE.reduce(function (obj, name) {
    obj[name] = style.getPropertyValue(name);
    return obj;
  }, {});
  var boxSizing = sizingStyle['box-sizing']; // probably node is detached from DOM, can't read computed dimensions

  if (boxSizing === '') {
    return null;
  } // IE (Edge has already correct behaviour) returns content width as computed width
  // so we need to add manually padding and border widths


  if (isIE && boxSizing === 'border-box') {
    sizingStyle.width = parseFloat(sizingStyle.width) + parseFloat(style['border-right-width']) + parseFloat(style['border-left-width']) + parseFloat(style['padding-right']) + parseFloat(style['padding-left']) + 'px';
  }

  var paddingSize = parseFloat(sizingStyle['padding-bottom']) + parseFloat(sizingStyle['padding-top']);
  var borderSize = parseFloat(sizingStyle['border-bottom-width']) + parseFloat(sizingStyle['border-top-width']);
  var nodeInfo = {
    sizingStyle: sizingStyle,
    paddingSize: paddingSize,
    borderSize: borderSize,
    boxSizing: boxSizing
  };

  if (useCache) {
    computedStyleCache[uid] = nodeInfo;
  }

  return nodeInfo;
}

var purgeCache = function purgeCache(uid) {
  delete computedStyleCache[uid];
};

var noop$1 = function noop() {};

var uid = 0;

var TextareaAutosize =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(TextareaAutosize, _React$Component);

  function TextareaAutosize(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this._onRef = function (node) {
      _this._ref = node;
      var inputRef = _this.props.inputRef;

      if (typeof inputRef === 'function') {
        inputRef(node);
        return;
      }

      inputRef.current = node;
    };

    _this._onChange = function (event) {
      if (!_this._controlled) {
        _this._resizeComponent();
      }

      _this.props.onChange(event, _assertThisInitialized(_this));
    };

    _this._resizeComponent = function (callback) {
      if (callback === void 0) {
        callback = noop$1;
      }

      if ( !_this._ref) {
        callback();
        return;
      }

      var nodeHeight = calculateNodeHeight(_this._ref, _this._uid, _this.props.useCacheForDOMMeasurements, _this.props.minRows, _this.props.maxRows);

      if (nodeHeight === null) {
        callback();
        return;
      }

      var height = nodeHeight.height,
          minHeight = nodeHeight.minHeight,
          maxHeight = nodeHeight.maxHeight,
          rowCount = nodeHeight.rowCount,
          valueRowCount = nodeHeight.valueRowCount;
      _this.rowCount = rowCount;
      _this.valueRowCount = valueRowCount;

      if (_this.state.height !== height || _this.state.minHeight !== minHeight || _this.state.maxHeight !== maxHeight) {
        _this.setState({
          height: height,
          minHeight: minHeight,
          maxHeight: maxHeight
        }, callback);

        return;
      }

      callback();
    };

    _this.state = {
      height: props.style && props.style.height || 0,
      minHeight: -Infinity,
      maxHeight: Infinity
    };
    _this._uid = uid++;
    _this._controlled = props.value !== undefined;
    _this._resizeLock = false;
    return _this;
  }

  var _proto = TextareaAutosize.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        _inputRef = _this$props.inputRef,
        _maxRows = _this$props.maxRows,
        _minRows = _this$props.minRows,
        _onHeightChange = _this$props.onHeightChange,
        _useCacheForDOMMeasurements = _this$props.useCacheForDOMMeasurements,
        props = _objectWithoutPropertiesLoose$2(_this$props, ["inputRef", "maxRows", "minRows", "onHeightChange", "useCacheForDOMMeasurements"]);

    props.style = _extends$4({}, props.style, {
      height: this.state.height
    });
    var maxHeight = Math.max(props.style.maxHeight || Infinity, this.state.maxHeight);

    if (maxHeight < this.state.height) {
      props.style.overflow = 'hidden';
    }

    return React.createElement("textarea", _extends$4({}, props, {
      onChange: this._onChange,
      ref: this._onRef
    }));
  };

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this._resizeComponent(); // Working around Firefox bug which runs resize listeners even when other JS is running at the same moment
    // causing competing rerenders (due to setState in the listener) in React.
    // More can be found here - facebook/react#6324


    this._resizeListener = function () {
      if (_this2._resizeLock) {
        return;
      }

      _this2._resizeLock = true;

      _this2._resizeComponent(function () {
        _this2._resizeLock = false;
      });
    };

    window.addEventListener('resize', this._resizeListener);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      this._resizeComponent();
    }

    if (this.state.height !== prevState.height) {
      this.props.onHeightChange(this.state.height, this);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('resize', this._resizeListener);
    purgeCache(this._uid);
  };

  return TextareaAutosize;
}(React.Component);

TextareaAutosize.defaultProps = {
  inputRef: noop$1,
  onChange: noop$1,
  onHeightChange: noop$1,
  useCacheForDOMMeasurements: false
};
process.env.NODE_ENV !== "production" ? TextareaAutosize.propTypes = {
  inputRef: propTypes_16([propTypes_3, propTypes_17({
    current: propTypes_8
  })]),
  maxRows: propTypes_4,
  minRows: propTypes_4,
  onChange: propTypes_3,
  onHeightChange: propTypes_3,
  style: propTypes_5,
  useCacheForDOMMeasurements: propTypes_2,
  value: propTypes_6
} : void 0;

const getBorderRadiusForControlHeight$2 = height => {
  if (height <= 40) return '3px';
  return '5px';
};

const getTextSizeForControlHeight$2 = height => {
  if (height <= 32) return 500;
  if (height <= 40) return 500;
  if (height <= 48) return 600;
  return 600;
};

const Textarea = ({
  bg,
  height,
  ...rest
}) => {
  const theme = emotionTheming.useTheme();
  const br = getBorderRadiusForControlHeight$2(height);
  const ts = getTextSizeForControlHeight$2(height);
  const p = Math.round(height / 4);
  return core.jsx(Box, {
    "data-playground-id": "textarea",
    borderRadius: br,
    bg: bg,
    overflow: "hidden",
    boxShadow: `
        ${rgba(theme.colors.gray[9], 0.1)} 
        0 0 0 1px inset, 
        ${rgba(theme.colors.gray[9], 0.1)}
        0 1px 2px inset
    `
  }, core.jsx(Text, _extends({
    "data-playground-id": "textarea.field",
    as: TextareaAutosize,
    size: ts,
    display: "block",
    width: "100%",
    height: height,
    m: 0,
    px: p + 'px',
    py: "10px",
    border: 0,
    color: "black",
    bg: "transparent",
    css: css({
      resize: 'none',
      '::placeholder': {
        color: 'black',
        opacity: 1 / 3
      },
      ':focus': {
        outline: 0
      }
    })
  }, rest)));
};

Textarea.defaultProps = {
  bg: 'gray.0',
  height: 40
};

var colors = {
  base: "#334AC0",
  black: "#3b3e4d",
  gray: ["#f9f9fa", "#ecedf0", "#dfe0e5", "#d0d2da", "#c1c3ce", "#afb2c0", "#9b9fb0", "#83889d", "#666a83", "#3b3e4d"],
  indigo: ["#eaecf8", "#d3d8f1", "#b9c1e9", "#9aa6df", "#7283d3", "#334bc0", "#2d43ac", "#273a95", "#202f7a", "#162054"],
  violet: ["#efebf8", "#ded4f2", "#cbbbea", "#b39ce0", "#9575d4", "#6233c0", "#582dac", "#4c2795", "#3e207a", "#2b1654"],
  fuschia: ["#f6eaf8", "#ecd4f1", "#e1bae9", "#d49be0", "#c373d3", "#a833c0", "#972dad", "#842897", "#6c217c", "#4c1757"],
  pink: ["#f8eaf4", "#f1d4e7", "#e9bada", "#e09bc9", "#d373b3", "#c03391", "#ad2e82", "#972872", "#7c215e", "#581742"],
  red: ["#f8ebed", "#f1d4d9", "#eabbc3", "#e09ca8", "#d47485", "#c0334b", "#ad2d43", "#97283b", "#7c2130", "#571722"],
  orange: ["#f8ede8", "#f0dacf", "#e7c4b3", "#ddab92", "#d18c6a", "#c06233", "#ad582d", "#974d28", "#7c3f21", "#582d17"],
  yellow: ["#f6f3e4", "#eee7c8", "#e4daa8", "#d9cb86", "#cdbb5f", "#c0a833", "#ad972e", "#988528", "#7e6e21", "#5a4f18"],
  lime: ["#f0f6e4", "#e1edc7", "#d0e4a8", "#bdd986", "#a9cd5f", "#91c033", "#83ad2e", "#739828", "#5f7e21", "#445a18"],
  green: ["#e9f7e6", "#d1efcb", "#b7e5ad", "#99db8b", "#76cf64", "#4bc033", "#43ad2e", "#3b9828", "#317e21", "#235a18"],
  teal: ["#e6f7ec", "#ccefd7", "#aee6c1", "#8cdba7", "#65cf88", "#33c062", "#2ead58", "#28984d", "#217e40", "#185a2e"],
  cyan: ["#e6f7f4", "#cbefe8", "#ade5dc", "#8bdbcd", "#63cfbc", "#33c0a8", "#2ead97", "#289885", "#217e6e", "#185a4f"],
  blue: ["#e7f2f7", "#cde4ef", "#b0d4e6", "#8ec2dc", "#66acd0", "#3391c0", "#2e82ad", "#287297", "#215e7d", "#174359"]
};

const borderShadowColor = rgba(colors.gray[7], 0.15); // Used to be colors.neutral['80A'] in v3 and down.

const blurryShadowColor = rgba(colors.gray[5], 0.3); // Used to be colors.neutral['50A'] in v3 and down.

/**
 * Elevation styles are applied as box shadows.
 * Available levels: 0, 1, 2, 3, 4.
 */

var elevations = [`0 0 0 1px inset ${borderShadowColor}`, `0 0 0 1px inset ${borderShadowColor}, 0 2px 4px -2px ${blurryShadowColor}`, `0 0 0 1px inset ${borderShadowColor}, 0 5px 8px -4px ${blurryShadowColor}`, `0 0 0 1px inset ${borderShadowColor}, 0 8px 10px -4px ${blurryShadowColor}`, `0 0 0 1px inset ${borderShadowColor}, 0 16px 24px -8px ${blurryShadowColor}`];

var fonts = {
  display: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  ui: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  mono: `Menlo, "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace`
};

var headings = {
  '900': {
    fontFamily: fonts.display,
    fontSize: '35px',
    fontWeight: 700,
    lineHeight: '40px',
    letterSpacing: '-0.01em',
    marginTop: '52px'
  },
  '800': {
    fontFamily: fonts.display,
    fontSize: '29px',
    fontWeight: 700,
    lineHeight: '32px',
    letterSpacing: '-0.01em',
    marginTop: '40px'
  },
  '700': {
    fontFamily: fonts.display,
    fontSize: '24px',
    fontWeight: 700,
    lineHeight: '28px',
    letterSpacing: '-0.01em',
    marginTop: '40px'
  },
  '600': {
    fontFamily: fonts.display,
    fontSize: '20px',
    fontWeight: 700,
    lineHeight: '24px',
    letterSpacing: '-0.008em',
    marginTop: '28px'
  },
  // Default
  '500': {
    fontFamily: fonts.ui,
    fontSize: '16px',
    fontWeight: 700,
    lineHeight: '20px',
    letterSpacing: '-0.006em',
    marginTop: '24px'
  },
  '400': {
    fontFamily: fonts.ui,
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: '20px',
    letterSpacing: '-0.003em',
    marginTop: '16px'
  },
  '300': {
    fontFamily: fonts.ui,
    fontSize: '12px',
    fontWeight: 600,
    lineHeight: '16px',
    letterSpacing: 0,
    marginTop: '16px'
  },
  '200': {
    fontFamily: fonts.ui,
    fontSize: '11px',
    fontWeight: 600,
    lineHeight: '16px',
    letterSpacing: 0,
    marginTop: '16px'
  },
  '100': {
    fontFamily: fonts.ui,
    fontSize: '11px',
    fontWeight: 600,
    textTransform: 'uppercase',
    lineHeight: '16px',
    letterSpacing: '0.054em',
    marginTop: '16px'
  }
};

var text = {
  '600': {
    fontFamily: fonts.display,
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: '24px',
    letterSpacing: '-0.0035em',
    marginTop: 28
  },
  '500': {
    fontFamily: fonts.ui,
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '20px',
    letterSpacing: '-0.0035em',
    marginTop: 16
  },
  // Default
  '400': {
    fontFamily: fonts.ui,
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '20px',
    letterSpacing: '-0.0035em',
    marginTop: 12
  },
  '300': {
    fontFamily: fonts.ui,
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '16px',
    letterSpacing: 0,
    marginTop: 12
  }
};

var paragraph = {
  '600': { ...text['600'],
    lineHeight: '24px'
  },
  '500': { ...text['500'],
    lineHeight: '20px'
  },
  // Default
  '400': { ...text['400'],
    lineHeight: '20px'
  },
  '300': { ...text['300'],
    lineHeight: '16px'
  }
};

const space$1 = [0, 2, 4, 8, 12, 16, 24, 32, 40, 48];
space$1.spacing = space$1;
space$1.layout = [0, 8, 16, 24, 32, 48, 64, 96, 160];
const shadows = {
  elevations
};
var Theme = {
  colors,
  fonts,
  headings,
  paragraph,
  shadows,
  space: space$1,
  text
};

var reactSwitch_min = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports,"__esModule",{value:!0});function _extends(){return (_extends=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);}return t}).apply(this,arguments)}var uncheckedIcon=React__default.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},React__default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),checkedIcon=React__default.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},React__default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function createBackgroundColor(t,i,o,s,n){var e=(t-o)/(i-o);if(0===e)return s;if(1===e)return n;for(var h="#",r=1;r<6;r+=2){var a=parseInt(s.substr(r,2),16),c=parseInt(n.substr(r,2),16),l=Math.round((1-e)*a+e*c).toString(16);1===l.length&&(l="0"+l),h+=l;}return h}function convertShorthandColor(t){if(7===t.length)return t;for(var i="#",o=1;o<4;o+=1)i+=t[o]+t[o];return i}function getBackgroundColor(t,i,o,s,n){return createBackgroundColor(t,i,o,convertShorthandColor(s),convertShorthandColor(n))}function objectWithoutProperties(t,i){var o={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&-1===i.indexOf(s)&&(o[s]=t[s]);return o}var ReactSwitch=function(n){function t(t){n.call(this,t);var i=t.height,o=t.width,s=t.checked;this.t=t.handleDiameter||i-2,this.i=Math.max(o-i,o-(i+this.t)/2),this.o=Math.max(0,(i-this.t)/2),this.state={s:s?this.i:this.o},this.n=0,this.e=0,this.h=this.h.bind(this),this.r=this.r.bind(this),this.a=this.a.bind(this),this.c=this.c.bind(this),this.l=this.l.bind(this),this.u=this.u.bind(this),this.f=this.f.bind(this),this.p=this.p.bind(this),this.b=this.b.bind(this),this.g=this.g.bind(this),this.v=this.v.bind(this),this.w=this.w.bind(this);}return n&&(t.__proto__=n),((t.prototype=Object.create(n&&n.prototype)).constructor=t).prototype.componentDidUpdate=function(t){t.checked!==this.props.checked&&this.setState({s:this.props.checked?this.i:this.o});},t.prototype.k=function(t){this.y.focus(),this.setState({C:t,M:!0,m:Date.now()});},t.prototype.x=function(t){var i=this.state,o=i.C,s=i.s,n=(this.props.checked?this.i:this.o)+t-o;i.R||t===o||this.setState({R:!0});var e=Math.min(this.i,Math.max(this.o,n));e!==s&&this.setState({s:e});},t.prototype.S=function(t){var i=this.state,o=i.s,s=i.R,n=i.m,e=this.props.checked,h=(this.i+this.o)/2,r=Date.now()-n;!s||r<250?this.T(t):e?h<o?this.setState({s:this.i}):this.T(t):o<h?this.setState({s:this.o}):this.T(t),this.setState({R:!1,M:!1}),this.n=Date.now();},t.prototype.h=function(t){t.preventDefault(),"number"==typeof t.button&&0!==t.button||(this.k(t.clientX),window.addEventListener("mousemove",this.r),window.addEventListener("mouseup",this.a));},t.prototype.r=function(t){t.preventDefault(),this.x(t.clientX);},t.prototype.a=function(t){this.S(t),window.removeEventListener("mousemove",this.r),window.removeEventListener("mouseup",this.a);},t.prototype.c=function(t){this.$=null,this.k(t.touches[0].clientX);},t.prototype.l=function(t){this.x(t.touches[0].clientX);},t.prototype.u=function(t){t.preventDefault(),this.S(t);},t.prototype.p=function(t){50<Date.now()-this.n&&(this.T(t),50<Date.now()-this.e&&this.setState({M:!1}));},t.prototype.b=function(){this.e=Date.now();},t.prototype.g=function(){this.setState({M:!0});},t.prototype.v=function(){this.setState({M:!1});},t.prototype.w=function(t){this.y=t;},t.prototype.f=function(t){t.preventDefault(),this.y.focus(),this.T(t),this.setState({M:!1});},t.prototype.T=function(t){var i=this.props;(0, i.onChange)(!i.checked,t,i.id);},t.prototype.render=function(){var t=this.props,i=t.disabled,o=t.className,s=t.offColor,n=t.onColor,e=t.offHandleColor,h=t.onHandleColor,r=t.checkedIcon,a=t.uncheckedIcon,c=t.boxShadow,l=t.activeBoxShadow,u=t.height,d=t.width,f=objectWithoutProperties(t,["disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","boxShadow","activeBoxShadow","height","width","handleDiameter"]),p=this.state,b=p.s,g=p.R,v=p.M,w={position:"relative",display:"inline-block",textAlign:"left",opacity:i?.5:1,direction:"ltr",borderRadius:u/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},k={height:u,width:d,margin:Math.max(0,(this.t-u)/2),position:"relative",background:getBackgroundColor(b,this.i,this.o,s,n),borderRadius:u/2,cursor:i?"default":"pointer",WebkitTransition:g?null:"background 0.25s",MozTransition:g?null:"background 0.25s",transition:g?null:"background 0.25s"},y={height:u,width:Math.min(1.5*u,d-(this.t+u)/2+1),position:"relative",opacity:(b-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:g?null:"opacity 0.25s",MozTransition:g?null:"opacity 0.25s",transition:g?null:"opacity 0.25s"},C={height:u,width:Math.min(1.5*u,d-(this.t+u)/2+1),position:"absolute",opacity:1-(b-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:g?null:"opacity 0.25s",MozTransition:g?null:"opacity 0.25s",transition:g?null:"opacity 0.25s"},M={height:this.t,width:this.t,background:getBackgroundColor(b,this.i,this.o,e,h),display:"inline-block",cursor:i?"default":"pointer",borderRadius:"50%",position:"absolute",transform:"translateX("+b+"px)",top:Math.max(0,(u-this.t)/2),outline:0,boxShadow:v?l:c,border:0,WebkitTransition:g?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:g?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:g?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"};return React__default.createElement("div",{className:o,style:w},React__default.createElement("div",{className:"react-switch-bg",style:k,onClick:i?null:this.f,onMouseDown:function(t){return t.preventDefault()}},r&&React__default.createElement("div",{style:y},r),a&&React__default.createElement("div",{style:C},a)),React__default.createElement("div",{className:"react-switch-handle",style:M,onClick:function(t){return t.preventDefault()},onMouseDown:i?null:this.h,onTouchStart:i?null:this.c,onTouchMove:i?null:this.l,onTouchEnd:i?null:this.u,onTouchCancel:i?null:this.v}),React__default.createElement("input",_extends({},{type:"checkbox",role:"switch",disabled:i,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},f,{ref:this.w,onFocus:this.g,onBlur:this.v,onKeyUp:this.b,onChange:this.p})))},t}(React__default.Component);ReactSwitch.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:uncheckedIcon,checkedIcon:checkedIcon,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56},exports.default=ReactSwitch;
});

unwrapExports(reactSwitch_min);

var reactSwitch_dev = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, '__esModule', { value: true });




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

/*
The MIT License (MIT)

Copyright (c) 2015 instructure-react

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
var uncheckedIcon = React__default.createElement('svg', {
  viewBox: "-2 -5 14 20",
  height: "100%",
  width: "100%",
  style: {
    position: "absolute",
    top: 0
  }
}, React__default.createElement('path', {
  d: "M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",
  fill: "#fff",
  fillRule: "evenodd"
}));
var checkedIcon = React__default.createElement('svg', {
  height: "100%",
  width: "100%",
  viewBox: "-2 -5 17 21",
  style: {
    position: "absolute",
    top: 0
  }
}, React__default.createElement('path', {
  d: "M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",
  fill: "#fff",
  fillRule: "evenodd"
}));

function createBackgroundColor(pos, checkedPos, uncheckedPos, offColor, onColor) {
  var relativePos = (pos - uncheckedPos) / (checkedPos - uncheckedPos);

  if (relativePos === 0) {
    return offColor;
  }

  if (relativePos === 1) {
    return onColor;
  }

  var newColor = "#";

  for (var i = 1; i < 6; i += 2) {
    var offComponent = parseInt(offColor.substr(i, 2), 16);
    var onComponent = parseInt(onColor.substr(i, 2), 16);
    var weightedValue = Math.round((1 - relativePos) * offComponent + relativePos * onComponent);
    var newComponent = weightedValue.toString(16);

    if (newComponent.length === 1) {
      newComponent = "0" + newComponent;
    }

    newColor += newComponent;
  }

  return newColor;
}

function convertShorthandColor(color) {
  if (color.length === 7) {
    return color;
  }

  var sixDigitColor = "#";

  for (var i = 1; i < 4; i += 1) {
    sixDigitColor += color[i] + color[i];
  }

  return sixDigitColor;
}

function getBackgroundColor(pos, checkedPos, uncheckedPos, offColor, onColor) {
  var sixDigitOffColor = convertShorthandColor(offColor);
  var sixDigitOnColor = convertShorthandColor(onColor);
  return createBackgroundColor(pos, checkedPos, uncheckedPos, sixDigitOffColor, sixDigitOnColor);
}

// Make sure color props are strings that start with "#" since other ways to write colors are not supported.
var hexColorPropType = function (props, propName, componentName) {
  var prop = props[propName];

  if (typeof prop !== "string" || prop[0] !== "#" || prop.length !== 4 && prop.length !== 7) {
    return new Error("Invalid prop '" + propName + "' supplied to '" + componentName + "'. '" + propName + "' has to be either a 3-digit or 6-digit hex-color string. Valid examples: '#abc', '#123456'");
  }

  return null;
};

function objectWithoutProperties(obj, exclude) {
  var target = {};

  for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k];

  return target;
}

var ReactSwitch =
/*@__PURE__*/
function (Component) {
  function ReactSwitch(props) {
    Component.call(this, props);
    var height = props.height;
    var width = props.width;
    var handleDiameter = props.handleDiameter;
    var checked = props.checked;
    this.$handleDiameter = handleDiameter || height - 2;
    this.$checkedPos = Math.max(width - height, width - (height + this.$handleDiameter) / 2);
    this.$uncheckedPos = Math.max(0, (height - this.$handleDiameter) / 2);
    this.state = {
      $pos: checked ? this.$checkedPos : this.$uncheckedPos
    };
    this.$lastDragAt = 0;
    this.$lastKeyUpAt = 0;
    this.$onMouseDown = this.$onMouseDown.bind(this);
    this.$onMouseMove = this.$onMouseMove.bind(this);
    this.$onMouseUp = this.$onMouseUp.bind(this);
    this.$onTouchStart = this.$onTouchStart.bind(this);
    this.$onTouchMove = this.$onTouchMove.bind(this);
    this.$onTouchEnd = this.$onTouchEnd.bind(this);
    this.$onClick = this.$onClick.bind(this);
    this.$onInputChange = this.$onInputChange.bind(this);
    this.$onKeyUp = this.$onKeyUp.bind(this);
    this.$setHasOutline = this.$setHasOutline.bind(this);
    this.$unsetHasOutline = this.$unsetHasOutline.bind(this);
    this.$getInputRef = this.$getInputRef.bind(this);
  }

  if (Component) ReactSwitch.__proto__ = Component;
  ReactSwitch.prototype = Object.create(Component && Component.prototype);
  ReactSwitch.prototype.constructor = ReactSwitch;

  ReactSwitch.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.checked === this.props.checked) {
      return;
    }

    var $pos = this.props.checked ? this.$checkedPos : this.$uncheckedPos;
    this.setState({
      $pos: $pos
    });
  };

  ReactSwitch.prototype.$onDragStart = function $onDragStart(clientX) {
    this.$inputRef.focus();
    this.setState({
      $startX: clientX,
      $hasOutline: true,
      $dragStartingTime: Date.now()
    });
  };

  ReactSwitch.prototype.$onDrag = function $onDrag(clientX) {
    var ref = this.state;
    var $startX = ref.$startX;
    var $isDragging = ref.$isDragging;
    var $pos = ref.$pos;
    var ref$1 = this.props;
    var checked = ref$1.checked;
    var startPos = checked ? this.$checkedPos : this.$uncheckedPos;
    var mousePos = startPos + clientX - $startX; // We need this check to fix a windows glitch where onDrag is triggered onMouseDown in some cases

    if (!$isDragging && clientX !== $startX) {
      this.setState({
        $isDragging: true
      });
    }

    var newPos = Math.min(this.$checkedPos, Math.max(this.$uncheckedPos, mousePos)); // Prevent unnecessary rerenders

    if (newPos !== $pos) {
      this.setState({
        $pos: newPos
      });
    }
  };

  ReactSwitch.prototype.$onDragStop = function $onDragStop(event) {
    var ref = this.state;
    var $pos = ref.$pos;
    var $isDragging = ref.$isDragging;
    var $dragStartingTime = ref.$dragStartingTime;
    var ref$1 = this.props;
    var checked = ref$1.checked;
    var halfwayCheckpoint = (this.$checkedPos + this.$uncheckedPos) / 2; // Simulate clicking the handle

    var timeSinceStart = Date.now() - $dragStartingTime;

    if (!$isDragging || timeSinceStart < 250) {
      this.$onChange(event); // Handle dragging from checked position
    } else if (checked) {
      if ($pos > halfwayCheckpoint) {
        this.setState({
          $pos: this.$checkedPos
        });
      } else {
        this.$onChange(event);
      } // Handle dragging from unchecked position

    } else if ($pos < halfwayCheckpoint) {
      this.setState({
        $pos: this.$uncheckedPos
      });
    } else {
      this.$onChange(event);
    }

    this.setState({
      $isDragging: false,
      $hasOutline: false
    });
    this.$lastDragAt = Date.now();
  };

  ReactSwitch.prototype.$onMouseDown = function $onMouseDown(event) {
    event.preventDefault(); // Ignore right click and scroll

    if (typeof event.button === "number" && event.button !== 0) {
      return;
    }

    this.$onDragStart(event.clientX);
    window.addEventListener("mousemove", this.$onMouseMove);
    window.addEventListener("mouseup", this.$onMouseUp);
  };

  ReactSwitch.prototype.$onMouseMove = function $onMouseMove(event) {
    event.preventDefault();
    this.$onDrag(event.clientX);
  };

  ReactSwitch.prototype.$onMouseUp = function $onMouseUp(event) {
    this.$onDragStop(event);
    window.removeEventListener("mousemove", this.$onMouseMove);
    window.removeEventListener("mouseup", this.$onMouseUp);
  };

  ReactSwitch.prototype.$onTouchStart = function $onTouchStart(event) {
    this.$checkedStateFromDragging = null;
    this.$onDragStart(event.touches[0].clientX);
  };

  ReactSwitch.prototype.$onTouchMove = function $onTouchMove(event) {
    this.$onDrag(event.touches[0].clientX);
  };

  ReactSwitch.prototype.$onTouchEnd = function $onTouchEnd(event) {
    event.preventDefault();
    this.$onDragStop(event);
  };

  ReactSwitch.prototype.$onInputChange = function $onInputChange(event) {
    // This condition is unfortunately needed in some browsers where the input's change event might get triggered
    // right after the dragstop event is triggered (occurs when dropping over a label element)
    if (Date.now() - this.$lastDragAt > 50) {
      this.$onChange(event); // Prevent clicking label, but not key activation from setting outline to true - yes, this is absurd

      if (Date.now() - this.$lastKeyUpAt > 50) {
        this.setState({
          $hasOutline: false
        });
      }
    }
  };

  ReactSwitch.prototype.$onKeyUp = function $onKeyUp() {
    this.$lastKeyUpAt = Date.now();
  };

  ReactSwitch.prototype.$setHasOutline = function $setHasOutline() {
    this.setState({
      $hasOutline: true
    });
  };

  ReactSwitch.prototype.$unsetHasOutline = function $unsetHasOutline() {
    this.setState({
      $hasOutline: false
    });
  };

  ReactSwitch.prototype.$getInputRef = function $getInputRef(el) {
    this.$inputRef = el;
  };

  ReactSwitch.prototype.$onClick = function $onClick(event) {
    event.preventDefault();
    this.$inputRef.focus();
    this.$onChange(event);
    this.setState({
      $hasOutline: false
    });
  };

  ReactSwitch.prototype.$onChange = function $onChange(event) {
    var ref = this.props;
    var checked = ref.checked;
    var onChange = ref.onChange;
    var id = ref.id;
    onChange(!checked, event, id);
  };

  ReactSwitch.prototype.render = function render() {
    var ref = this.props;
    var disabled = ref.disabled;
    var className = ref.className;
    var offColor = ref.offColor;
    var onColor = ref.onColor;
    var offHandleColor = ref.offHandleColor;
    var onHandleColor = ref.onHandleColor;
    var checkedIcon$$1 = ref.checkedIcon;
    var uncheckedIcon$$1 = ref.uncheckedIcon;
    var boxShadow = ref.boxShadow;
    var activeBoxShadow = ref.activeBoxShadow;
    var height = ref.height;
    var width = ref.width;
    var handleDiameter = ref.handleDiameter;
    var rest$1 = objectWithoutProperties(ref, ["disabled", "className", "offColor", "onColor", "offHandleColor", "onHandleColor", "checkedIcon", "uncheckedIcon", "boxShadow", "activeBoxShadow", "height", "width", "handleDiameter"]);
    var rest = rest$1;
    var ref$1 = this.state;
    var $pos = ref$1.$pos;
    var $isDragging = ref$1.$isDragging;
    var $hasOutline = ref$1.$hasOutline;
    var rootStyle = {
      position: "relative",
      display: "inline-block",
      textAlign: "left",
      opacity: disabled ? 0.5 : 1,
      direction: "ltr",
      borderRadius: height / 2,
      WebkitTransition: "opacity 0.25s",
      MozTransition: "opacity 0.25s",
      transition: "opacity 0.25s",
      touchAction: "none",
      WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
      WebkitUserSelect: "none",
      MozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none"
    };
    var backgroundStyle = {
      height: height,
      width: width,
      margin: Math.max(0, (this.$handleDiameter - height) / 2),
      position: "relative",
      background: getBackgroundColor($pos, this.$checkedPos, this.$uncheckedPos, offColor, onColor),
      borderRadius: height / 2,
      cursor: disabled ? "default" : "pointer",
      WebkitTransition: $isDragging ? null : "background 0.25s",
      MozTransition: $isDragging ? null : "background 0.25s",
      transition: $isDragging ? null : "background 0.25s"
    };
    var checkedIconStyle = {
      height: height,
      width: Math.min(height * 1.5, width - (this.$handleDiameter + height) / 2 + 1),
      position: "relative",
      opacity: ($pos - this.$uncheckedPos) / (this.$checkedPos - this.$uncheckedPos),
      pointerEvents: "none",
      WebkitTransition: $isDragging ? null : "opacity 0.25s",
      MozTransition: $isDragging ? null : "opacity 0.25s",
      transition: $isDragging ? null : "opacity 0.25s"
    };
    var uncheckedIconStyle = {
      height: height,
      width: Math.min(height * 1.5, width - (this.$handleDiameter + height) / 2 + 1),
      position: "absolute",
      opacity: 1 - ($pos - this.$uncheckedPos) / (this.$checkedPos - this.$uncheckedPos),
      right: 0,
      top: 0,
      pointerEvents: "none",
      WebkitTransition: $isDragging ? null : "opacity 0.25s",
      MozTransition: $isDragging ? null : "opacity 0.25s",
      transition: $isDragging ? null : "opacity 0.25s"
    };
    var handleStyle = {
      height: this.$handleDiameter,
      width: this.$handleDiameter,
      background: getBackgroundColor($pos, this.$checkedPos, this.$uncheckedPos, offHandleColor, onHandleColor),
      display: "inline-block",
      cursor: disabled ? "default" : "pointer",
      borderRadius: "50%",
      position: "absolute",
      transform: "translateX(" + $pos + "px)",
      top: Math.max(0, (height - this.$handleDiameter) / 2),
      outline: 0,
      boxShadow: $hasOutline ? activeBoxShadow : boxShadow,
      border: 0,
      WebkitTransition: $isDragging ? null : "background-color 0.25s, transform 0.25s, box-shadow 0.15s",
      MozTransition: $isDragging ? null : "background-color 0.25s, transform 0.25s, box-shadow 0.15s",
      transition: $isDragging ? null : "background-color 0.25s, transform 0.25s, box-shadow 0.15s"
    };
    var inputStyle = {
      border: 0,
      clip: "rect(0 0 0 0)",
      height: 1,
      margin: -1,
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      width: 1
    };
    return React__default.createElement('div', {
      className: className,
      style: rootStyle
    }, React__default.createElement('div', {
      className: "react-switch-bg",
      style: backgroundStyle,
      onClick: disabled ? null : this.$onClick,
      onMouseDown: function (e) {
        return e.preventDefault();
      }
    }, checkedIcon$$1 && React__default.createElement('div', {
      style: checkedIconStyle
    }, checkedIcon$$1), uncheckedIcon$$1 && React__default.createElement('div', {
      style: uncheckedIconStyle
    }, uncheckedIcon$$1)), React__default.createElement('div', {
      className: "react-switch-handle",
      style: handleStyle,
      onClick: function (e) {
        return e.preventDefault();
      },
      onMouseDown: disabled ? null : this.$onMouseDown,
      onTouchStart: disabled ? null : this.$onTouchStart,
      onTouchMove: disabled ? null : this.$onTouchMove,
      onTouchEnd: disabled ? null : this.$onTouchEnd,
      onTouchCancel: disabled ? null : this.$unsetHasOutline
    }), React__default.createElement('input', _extends({}, {
      type: "checkbox",
      role: "switch",
      disabled: disabled,
      style: inputStyle
    }, rest, {
      ref: this.$getInputRef,
      onFocus: this.$setHasOutline,
      onBlur: this.$unsetHasOutline,
      onKeyUp: this.$onKeyUp,
      onChange: this.$onInputChange
    })));
  };

  return ReactSwitch;
}(React__default.Component);

ReactSwitch.propTypes = {
  checked: propTypes.bool.isRequired,
  onChange: propTypes.func.isRequired,
  disabled: propTypes.bool,
  offColor: hexColorPropType,
  onColor: hexColorPropType,
  offHandleColor: hexColorPropType,
  onHandleColor: hexColorPropType,
  handleDiameter: propTypes.number,
  uncheckedIcon: propTypes.oneOfType([propTypes.bool, propTypes.element]),
  checkedIcon: propTypes.oneOfType([propTypes.bool, propTypes.element]),
  boxShadow: propTypes.string,
  activeBoxShadow: propTypes.string,
  height: propTypes.number,
  width: propTypes.number,
  id: propTypes.string,
  className: propTypes.string
};
ReactSwitch.defaultProps = {
  disabled: false,
  offColor: "#888",
  onColor: "#080",
  offHandleColor: "#fff",
  onHandleColor: "#fff",
  uncheckedIcon: uncheckedIcon,
  checkedIcon: checkedIcon,
  boxShadow: null,
  activeBoxShadow: "0 0 2px 3px #3bf",
  height: 28,
  width: 56
};

exports.default = ReactSwitch;
});

unwrapExports(reactSwitch_dev);

var reactSwitch = createCommonjsModule(function (module) {
if (process.env.NODE_ENV === "production") {
  module.exports = reactSwitch_min;
} else {
  module.exports = reactSwitch_dev;
}
});
var reactSwitch_1 = reactSwitch.Switch;

function _EMOTION_STRINGIFIED_CSS_ERROR__$6() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

const getOffsetForTextSize = size => {
  if (size <= 300) return 4;
  if (size <= 400) return 2;
  if (size <= 500) return 2;
  if (size <= 600) return 0;
  return 0;
};

var _ref$7 = process.env.NODE_ENV === "production" ? {
  name: "1w5g35d-Toggle",
  styles: "user-select:none;cursor:pointer;;label:Toggle;"
} : {
  name: "1w5g35d-Toggle",
  styles: "user-select:none;cursor:pointer;;label:Toggle;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRvZ2dsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2Q00iLCJmaWxlIjoiVG9nZ2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tIFwiZW1vdGlvbi10aGVtaW5nXCI7XG5pbXBvcnQgdXVpZHY0IGZyb20gXCJ1dWlkL3Y0XCI7XG5pbXBvcnQgU3dpdGNoIGZyb20gXCJyZWFjdC1zd2l0Y2hcIjtcblxuaW1wb3J0IHsgQm94IH0gZnJvbSBcIi4uLy4uL2JveFwiO1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gXCIuLi8uLi90eXBvZ3JhcGh5XCI7XG5cbmNvbnN0IGdldE9mZnNldEZvclRleHRTaXplID0gc2l6ZSA9PiB7XG4gIGlmIChzaXplIDw9IDMwMCkgcmV0dXJuIDQ7XG4gIGlmIChzaXplIDw9IDQwMCkgcmV0dXJuIDI7XG4gIGlmIChzaXplIDw9IDUwMCkgcmV0dXJuIDI7XG4gIGlmIChzaXplIDw9IDYwMCkgcmV0dXJuIDA7XG4gIHJldHVybiAwO1xufTtcblxuY29uc3QgVG9nZ2xlID0gKHsgY2hpbGRyZW4sIHNpemUsIHdpZHRoLCAuLi5yZXN0IH0pID0+IHtcbiAgY29uc3QgY29udHJvbFdpZHRoID0gNDA7XG4gIGNvbnN0IGNvbnRyb2xIZWlnaHQgPSAyNDtcblxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IHVpZCA9IHV1aWR2NCgpO1xuICBjb25zdCBwID0gZ2V0T2Zmc2V0Rm9yVGV4dFNpemUoc2l6ZSkgKyBcInB4XCI7XG5cbiAgY29uc3QgY29uZmlnID0ge1xuICAgIG9mZkNvbG9yOiB0aGVtZS5jb2xvcnMuZ3JheVs0XSxcbiAgICBvbkNvbG9yOiB0aGVtZS5jb2xvcnMuZ3JlZW5bNV0sXG4gICAgb2ZmSGFuZGxlQ29sb3I6IFwiI2ZmZlwiLFxuICAgIG9uSGFuZGxlQ29sb3I6IFwiI2ZmZlwiLFxuICAgIGhhbmRsZURpYW1ldGVyOiBjb250cm9sSGVpZ2h0IC0gNCxcbiAgICB1bmNoZWNrZWRJY29uOiBmYWxzZSxcbiAgICBjaGVja2VkSWNvbjogZmFsc2UsXG4gICAgd2lkdGg6IGNvbnRyb2xXaWR0aCxcbiAgICBoZWlnaHQ6IGNvbnRyb2xIZWlnaHRcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxUZXh0XG4gICAgICBkYXRhLXBsYXlncm91bmQtaWQ9XCJ0b2dnbGVcIlxuICAgICAgYXM9XCJsYWJlbFwiXG4gICAgICBodG1sRm9yPXt1aWR9XG4gICAgICBzaXplPXtzaXplfVxuICAgICAgZGlzcGxheT1cImlubGluZS1mbGV4XCJcbiAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBjc3M9e3sgdXNlclNlbGVjdDogXCJub25lXCIsIGN1cnNvcjogXCJwb2ludGVyXCIgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gJiYgKFxuICAgICAgICA8Qm94IGRhdGEtcGxheWdyb3VuZC1pZD1cInRvZ2dsZS5sYWJlbFwiIGZsZXg9ezF9IHB0PXtwfT5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cbiAgICAgIDxCb3hcbiAgICAgICAgZGF0YS1wbGF5Z3JvdW5kLWlkPVwidG9nZ2xlLmNvbnRyb2xcIlxuICAgICAgICB3aWR0aD17Y29udHJvbFdpZHRofVxuICAgICAgICBoZWlnaHQ9e2NvbnRyb2xIZWlnaHR9XG4gICAgICAgIG1sPXtjaGlsZHJlbiAmJiBcInNwYWNpbmcuM1wifVxuICAgICAgPlxuICAgICAgICA8U3dpdGNoIGlkPXt1aWR9IHsuLi5jb25maWd9IHsuLi5yZXN0fSAvPlxuICAgICAgPC9Cb3g+XG4gICAgPC9UZXh0PlxuICApO1xufTtcblxuVG9nZ2xlLmRlZmF1bHRQcm9wcyA9IHtcbiAgc2l6ZTogNDAwXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2dnbGU7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$6
};

const Toggle = ({
  children,
  size,
  width,
  ...rest
}) => {
  const controlWidth = 40;
  const controlHeight = 24;
  const theme = emotionTheming.useTheme();
  const uid = v4_1();
  const p = getOffsetForTextSize(size) + "px";
  const config = {
    offColor: theme.colors.gray[4],
    onColor: theme.colors.green[5],
    offHandleColor: "#fff",
    onHandleColor: "#fff",
    handleDiameter: controlHeight - 4,
    uncheckedIcon: false,
    checkedIcon: false,
    width: controlWidth,
    height: controlHeight
  };
  return core.jsx(Text, {
    "data-playground-id": "toggle",
    as: "label",
    htmlFor: uid,
    size: size,
    display: "inline-flex",
    justifyContent: "space-between",
    width: width,
    css: _ref$7
  }, children && core.jsx(Box, {
    "data-playground-id": "toggle.label",
    flex: 1,
    pt: p
  }, children), core.jsx(Box, {
    "data-playground-id": "toggle.control",
    width: controlWidth,
    height: controlHeight,
    ml: children && "spacing.3"
  }, core.jsx(reactSwitch, _extends({
    id: uid
  }, config, rest))));
};

Toggle.defaultProps = {
  size: 400
};

var t=["width","height","top","right","bottom","left"],n=function(n,e){return void 0===n&&(n={}),void 0===e&&(e={}),t.some(function(t){return n[t]!==e[t]})};function observeRect(t,e){var o,i,r=function(){var u=t.getBoundingClientRect();n(u,o)&&e(o=u),i=requestAnimationFrame(r);};return {observe:r,unobserve:function(){cancelAnimationFrame(i);}}}

if (process.env.NODE_ENV !== "production") ;

function useRect(nodeRef, observe, onChange) {
  if (observe === void 0) {
    observe = true;
  }

  var _useState = React.useState(null),
      rect = _useState[0],
      setRect = _useState[1];

  var observerRef = React.useRef(null);
  React.useLayoutEffect(function () {
    var cleanup = function cleanup() {
      observerRef.current && observerRef.current.unobserve();
    };

    if (!nodeRef.current) {
      console.warn("You need to place the ref");
      return cleanup;
    }

    if (!observerRef.current && nodeRef.current) {
      observerRef.current = observeRect(nodeRef.current, function (rect) {
        onChange && onChange(rect);
        setRect(rect);
      });
    }

    observe && observerRef.current.observe();
    return cleanup; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [observe, onChange]);
  return rect;
}

var _states;

function _extends$7() { _extends$7 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$7.apply(this, arguments); }

function _objectWithoutPropertiesLoose$5(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
// ~The states~
// nothing goin' on

var IDLE = "idle"; // we're considering showing the tooltip, but we're gonna wait a sec

var FOCUSED = "focused"; // IT'S ON

var VISIBLE = "visible"; // Focus has left, but we want to keep it visible for a sec

var LEAVING_VISIBLE = "leavingVisible"; // The user clicked the tool, so we want to hide the thing, we can't just use
// IDLE because we need to ignore mousemove, etc.

var DISMISSED = "dismissed";
var chart = {
  initial: IDLE,
  states: (_states = {}, _states[IDLE] = {
    enter: clearContextId,
    on: {
      mouseenter: FOCUSED,
      focus: VISIBLE
    }
  }, _states[FOCUSED] = {
    enter: startRestTimer,
    leave: clearRestTimer,
    on: {
      mousemove: FOCUSED,
      mouseleave: IDLE,
      mousedown: DISMISSED,
      blur: IDLE,
      rest: VISIBLE
    }
  }, _states[VISIBLE] = {
    on: {
      focus: FOCUSED,
      mouseenter: FOCUSED,
      mouseleave: LEAVING_VISIBLE,
      blur: LEAVING_VISIBLE,
      mousedown: DISMISSED,
      selectWithKeyboard: DISMISSED,
      globalMouseMove: LEAVING_VISIBLE
    }
  }, _states[LEAVING_VISIBLE] = {
    enter: startLeavingVisibleTimer,
    leave: function leave() {
      clearLeavingVisibleTimer();
      clearContextId();
    },
    on: {
      mouseenter: VISIBLE,
      focus: VISIBLE,
      timecomplete: IDLE
    }
  }, _states[DISMISSED] = {
    leave: function leave() {
      // allows us to come on back later w/o entering something else first
      context.id = null;
    },
    on: {
      mouseleave: IDLE,
      blur: IDLE
    }
  }, _states)
}; // chart context allows us to persist some data around, in Tooltip all we use
// is the id of the current tooltip being interacted with.

var context = {
  id: null
};
var state = chart.initial; ////////////////////////////////////////////////////////////////////////////////
// Finds the next state from the current state + action. If the chart doesn't
// describe that transition, it will throw.
//
// It also manages lifecycles of the machine, (enter/leave hooks on the state
// chart)

function transition(action, newContext) {
  var stateDef = chart.states[state];
  var nextState = stateDef.on[action]; // Really useful for debugging
  // console.log({ action, state, nextState, contextId: context.id });

  if (!nextState) {
    throw new Error("Unknown state for action \"" + action + "\" from state \"" + state + "\"");
  }

  if (stateDef.leave) {
    stateDef.leave();
  }

  if (newContext) {
    context = newContext;
  }

  var nextDef = chart.states[nextState];

  if (nextDef.enter) {
    nextDef.enter();
  }

  state = nextState;
  notify();
} ////////////////////////////////////////////////////////////////////////////////
// Subscriptions:
//
// We could require apps to render a <TooltipProvider> around the app and use
// React context to notify Tooltips of changes to our state machine, instead
// we manage subscriptions ourselves and simplify the Tooltip API.
//
// Maybe if default context could take a hook (instead of just a static value)
// that was rendered at the root for us, that'd be cool! But it doesn't.


var subscriptions = [];

function subscribe(fn) {
  subscriptions.push(fn);
  return function () {
    subscriptions.splice(subscriptions.indexOf(fn), 1);
  };
}

function notify() {
  subscriptions.forEach(function (fn) {
    return fn(state, context);
  });
} ////////////////////////////////////////////////////////////////////////////////
// Timeouts:
// Manages when the user "rests" on an element. Keeps the interface from being
// flashing tooltips all the time as the user moves the mouse around the screen.


var restTimeout;

function startRestTimer() {
  clearTimeout(restTimeout);
  restTimeout = setTimeout(function () {
    return transition("rest");
  }, 100);
}

function clearRestTimer() {
  clearTimeout(restTimeout);
} // Manages the delay to hide the tooltip after rest leaves.


var leavingVisibleTimer;

function startLeavingVisibleTimer() {
  clearTimeout(leavingVisibleTimer);
  leavingVisibleTimer = setTimeout(function () {
    return transition("timecomplete");
  }, 500);
}

function clearLeavingVisibleTimer() {
  clearTimeout(leavingVisibleTimer);
} // allows us to come on back later w/o entering something else first after the
// user leaves or dismisses


function clearContextId() {
  context.id = null;
} ////////////////////////////////////////////////////////////////////////////////
// THE HOOK! It's about time we got to the goods!


function useTooltip(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      onMouseEnter = _ref.onMouseEnter,
      onMouseMove = _ref.onMouseMove,
      onMouseLeave = _ref.onMouseLeave,
      onFocus = _ref.onFocus,
      onBlur = _ref.onBlur,
      onKeyDown = _ref.onKeyDown,
      onMouseDown = _ref.onMouseDown,
      forwardedRef = _ref.ref,
      DEBUG_STYLE = _ref.DEBUG_STYLE;

  var id = useId();

  var _useState = React.useState(DEBUG_STYLE ? true : id === null ? false : context.id === id && state === VISIBLE),
      isVisible = _useState[0],
      setIsVisible = _useState[1]; // hopefully they always pass a ref if they ever pass one


  var ownRef = React.useRef();
  var ref = forwardedRef || ownRef;
  var triggerRect = useRect(ref, isVisible);
  React.useEffect(function () {
    return subscribe(function () {
      if (context.id === id && (state === VISIBLE || state === LEAVING_VISIBLE)) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, [id]);
  React.useEffect(function () {
    return checkStyles("tooltip");
  });

  var handleMouseEnter = function handleMouseEnter() {
    switch (state) {
      case IDLE:
      case VISIBLE:
      case LEAVING_VISIBLE:
        {
          transition("mouseenter", {
            id: id
          });
        }
    }
  };

  var handleMouseMove = function handleMouseMove() {
    switch (state) {
      case FOCUSED:
        {
          transition("mousemove", {
            id: id
          });
        }
    }
  };

  var handleFocus = function handleFocus(event) {
    if (window.__REACH_DISABLE_TOOLTIPS) return;

    switch (state) {
      case IDLE:
      case VISIBLE:
      case LEAVING_VISIBLE:
        {
          transition("focus", {
            id: id
          });
        }
    }
  };

  var handleMouseLeave = function handleMouseLeave() {
    switch (state) {
      case FOCUSED:
      case VISIBLE:
      case DISMISSED:
        {
          transition("mouseleave");
        }
    }
  };

  var handleBlur = function handleBlur() {
    // Allow quick click from one tool to another
    if (context.id !== id) return;

    switch (state) {
      case FOCUSED:
      case VISIBLE:
      case DISMISSED:
        {
          transition("blur");
        }
    }
  };

  var handleMouseDown = function handleMouseDown() {
    // Allow quick click from one tool to another
    if (context.id !== id) return;

    switch (state) {
      case FOCUSED:
      case VISIBLE:
        {
          transition("mousedown");
        }
    }
  };

  var handleKeyDown = function handleKeyDown(event) {
    if (event.key === "Enter" || event.key === " " || event.key === "Escape") {
      switch (state) {
        case VISIBLE:
          {
            transition("selectWithKeyboard");
          }
      }
    }
  };

  var trigger = {
    "aria-describedby": isVisible ? makeId("tooltip", id) : undefined,
    "data-reach-tooltip-trigger": "",
    ref: ref,
    onMouseEnter: wrapEvent(onMouseEnter, handleMouseEnter),
    onMouseMove: wrapEvent(onMouseMove, handleMouseMove),
    onFocus: wrapEvent(onFocus, handleFocus),
    onBlur: wrapEvent(onBlur, handleBlur),
    onMouseLeave: wrapEvent(onMouseLeave, handleMouseLeave),
    onKeyDown: wrapEvent(onKeyDown, handleKeyDown),
    onMouseDown: wrapEvent(onMouseDown, handleMouseDown)
  };
  var tooltip = {
    id: id,
    triggerRect: triggerRect,
    isVisible: isVisible
  };
  return [trigger, tooltip, isVisible];
} ////////////////////////////////////////////////////////////////////////////////

function Tooltip(_ref2) {
  var children = _ref2.children,
      label = _ref2.label,
      ariaLabel = _ref2.ariaLabel,
      DEBUG_STYLE = _ref2.DEBUG_STYLE,
      rest = _objectWithoutPropertiesLoose$5(_ref2, ["children", "label", "ariaLabel", "DEBUG_STYLE"]);

  var child = React.Children.only(children); // We need to pass some properties from the child into useTooltip
  // to make sure users can maintain control over the trigger's ref and events

  var _useTooltip = useTooltip({
    DEBUG_STYLE: DEBUG_STYLE,
    onMouseEnter: child.props.onMouseEnter,
    onMouseMove: child.props.onMouseMove,
    onMouseLeave: child.props.onMouseLeave,
    onFocus: child.props.onFocus,
    onBlur: child.props.onBlur,
    onKeyDown: child.props.onKeyDown,
    onMouseDown: child.props.onMouseDown,
    ref: child.ref
  }),
      trigger = _useTooltip[0],
      tooltip = _useTooltip[1];

  return React__default.createElement(React.Fragment, null, React.cloneElement(child, trigger), React__default.createElement(TooltipPopup, _extends$7({
    label: label,
    ariaLabel: ariaLabel
  }, tooltip, rest)));
}

if (process.env.NODE_ENV !== "production") {
  Tooltip.propTypes = {
    children: propTypes_13.isRequired,
    label: propTypes_13.isRequired,
    ariaLabel: propTypes_6
  };
  Tooltip.displayName = "Tooltip";
}

var TooltipPopup = React.forwardRef(function TooltipPopup(_ref3, forwardRef) {
  var label = _ref3.label,
      ariaLabel = _ref3.ariaLabel,
      position = _ref3.position,
      isVisible = _ref3.isVisible,
      id = _ref3.id,
      triggerRect = _ref3.triggerRect,
      rest = _objectWithoutPropertiesLoose$5(_ref3, ["label", "ariaLabel", "position", "isVisible", "id", "triggerRect"]);

  return isVisible ? React__default.createElement(Portal, null, React__default.createElement(TooltipContent, _extends$7({
    label: label,
    ariaLabel: ariaLabel,
    position: position,
    isVisible: isVisible,
    id: makeId("tooltip", id),
    triggerRect: triggerRect,
    ref: forwardRef
  }, rest))) : null;
});

if (process.env.NODE_ENV !== "production") {
  TooltipPopup.propTypes = {
    label: propTypes_13.isRequired,
    ariaLabel: propTypes_6,
    position: propTypes_3
  };
  TooltipPopup.displayName = "TooltipPopup";
} // Need a separate component so that useRect works inside the portal


var TooltipContent = React.forwardRef(function TooltipContent(_ref4, forwardedRef) {
  var label = _ref4.label,
      ariaLabel = _ref4.ariaLabel,
      _ref4$position = _ref4.position,
      position = _ref4$position === void 0 ? positionDefault : _ref4$position,
      isVisible = _ref4.isVisible,
      id = _ref4.id,
      triggerRect = _ref4.triggerRect,
      style = _ref4.style,
      rest = _objectWithoutPropertiesLoose$5(_ref4, ["label", "ariaLabel", "position", "isVisible", "id", "triggerRect", "style"]);

  var useAriaLabel = ariaLabel != null;
  var ownRef = React.useRef(null);
  var ref = useForkedRef(forwardedRef, ownRef);
  var tooltipRect = useRect(ownRef, isVisible);
  return React__default.createElement(React.Fragment, null, React__default.createElement("div", _extends$7({
    "data-reach-tooltip": true,
    role: useAriaLabel ? undefined : "tooltip",
    id: useAriaLabel ? undefined : id,
    children: label,
    style: _extends$7({}, style, {}, getStyles$1(position, triggerRect, tooltipRect)),
    ref: ref
  }, rest)), useAriaLabel && React__default.createElement(VisuallyHidden, {
    role: "tooltip",
    id: id
  }, ariaLabel));
});

if (process.env.NODE_ENV !== "production") {
  TooltipContent.propTypes = {};
  TooltipContent.displayName = "TooltipContent";
} // feels awkward when it's perfectly aligned w/ the trigger


var OFFSET = 8;

var getStyles$1 = function getStyles(position, triggerRect, tooltipRect) {
  var haventMeasuredTooltipYet = !tooltipRect;

  if (haventMeasuredTooltipYet) {
    return {
      visibility: "hidden"
    };
  }

  return position(triggerRect, tooltipRect);
};

var positionDefault = function positionDefault(triggerRect, tooltipRect) {
  var collisions = {
    top: triggerRect.top - tooltipRect.height < 0,
    right: window.innerWidth < triggerRect.left + tooltipRect.width,
    bottom: window.innerHeight < triggerRect.bottom + tooltipRect.height + OFFSET,
    left: triggerRect.left - tooltipRect.width < 0
  };
  var directionRight = collisions.right && !collisions.left;
  var directionUp = collisions.bottom && !collisions.top;
  return {
    left: directionRight ? triggerRect.right - tooltipRect.width + window.pageXOffset + "px" : triggerRect.left + window.pageXOffset + "px",
    top: directionUp ? triggerRect.top - OFFSET - tooltipRect.height + window.pageYOffset + "px" : triggerRect.top + OFFSET + triggerRect.height + window.pageYOffset + "px"
  };
};

const Comp = ({
  children,
  label
}) => core.jsx(Tooltip, {
  label: label
}, children);

exports.Alert = Alert$1;
exports.AspectRatio = AspectRatio;
exports.Avatar = Avatar;
exports.BORDER = BORDER;
exports.Badge = Badge;
exports.Box = Box;
exports.Button = Button;
exports.COMMON = COMMON;
exports.Checkbox = Checkbox;
exports.CodeSnippet = CodeSnippet;
exports.Dialog = Dialog$1;
exports.FLEX = FLEX;
exports.GRID = GRID;
exports.GlobalStyles = GlobalStyles;
exports.Heading = Heading;
exports.Icon = Icon$1;
exports.IconButton = IconButton;
exports.InlineCodeSnippet = InlineCodeSnippet;
exports.Input = Input;
exports.LAYOUT = LAYOUT;
exports.MultiLineCodeSnippet = MultiLineCodeSnippet;
exports.POSITION = POSITION;
exports.Paragraph = Paragraph;
exports.Radio = Radio;
exports.RadioGroup = RadioGroup;
exports.Spinner = Spinner;
exports.TYPOGRAPHY = TYPOGRAPHY;
exports.Tabs = Tabs$1;
exports.Text = Text;
exports.Textarea = Textarea;
exports.Theme = Theme;
exports.ToastAlert = ToastAlert;
exports.Toggle = Toggle;
exports.Tooltip = Comp;