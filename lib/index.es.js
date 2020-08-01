import React__default, { forwardRef, useMemo, useRef, useEffect, createElement, Fragment as Fragment$1, useState, Children, useCallback, PureComponent, cloneElement, useImperativeHandle, useLayoutEffect } from 'react';
import { useTheme, ThemeProvider } from 'emotion-theming';
import { render, createPortal } from 'react-dom';
import { withEmotionCache, ThemeContext, jsx, keyframes, Global } from '@emotion/core';
import crypto from 'crypto';

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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

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

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/**
 * Welcome to @reach/visually-hidden!
 *
 * Provides text for screen readers that is visually hidden.
 * It is the logical opposite of the `aria-hidden` attribute.
 *
 * @see https://snook.ca/archives/html_and_css/hiding-content-for-accessibility
 * @see https://a11yproject.com/posts/how-to-hide-content/
 * @see Docs     https://reacttraining.com/reach-ui/visually-hidden
 * @see Source   https://github.com/reach/reach-ui/tree/main/packages/visually-hidden
 */
/**
 * VisuallyHidden
 *
 * Provides text for screen readers that is visually hidden.
 * It is the logical opposite of the `aria-hidden` attribute.
 */

var VisuallyHidden = /*#__PURE__*/forwardRef(function VisuallyHidden(props, ref) {
  return React__default.createElement("span", Object.assign({
    ref: ref,
    style: {
      border: 0,
      clip: "rect(0 0 0 0)",
      height: "1px",
      margin: "-1px",
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      width: "1px",
      // https://medium.com/@jessebeach/beware-smushed-off-screen-accessible-text-5952a4c2cbfe
      whiteSpace: "nowrap",
      wordWrap: "normal"
    }
  }, props));
});

if (process.env.NODE_ENV !== "production") {
  VisuallyHidden.displayName = "VisuallyHidden";
}

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
  var printWarning = function printWarning(format, args) {
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
      printWarning.apply(null, [format].concat(args));
    }
  };
}

var warning_1 = warning;

/* eslint-disable no-restricted-globals, eqeqeq  */
/**
 * React currently throws a warning when using useLayoutEffect on the server.
 * To get around it, we can conditionally useEffect on the server (no-op) and
 * useLayoutEffect in the browser. We occasionally need useLayoutEffect to
 * ensure we don't get a render flash for certain operations, but we may also
 * need affected components to render on the server. One example is when setting
 * a component's descendants to retrieve their index values.
 *
 * Important to note that using this hook as an escape hatch will break the
 * eslint dependency warnings unless you rename the import to `useLayoutEffect`.
 * Use sparingly only when the effect won't effect the rendered HTML to avoid
 * any server/client mismatch.
 *
 * If a useLayoutEffect is needed and the result would create a mismatch, it's
 * likely that the component in question shouldn't be rendered on the server at
 * all, so a better approach would be to lazily render those in a parent
 * component after client-side hydration.
 *
 * TODO: We are calling useLayoutEffect in a couple of places that will likely
 * cause some issues for SSR users, whether the warning shows or not. Audit and
 * fix these.
 *
 * https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
 * https://github.com/reduxjs/react-redux/blob/master/src/utils/useIsomorphicLayoutEffect.js
 *
 * @param effect
 * @param deps
 */

var useIsomorphicLayoutEffect = /*#__PURE__*/canUseDOM() ? React__default.useLayoutEffect : React__default.useEffect;
var checkedPkgs = {};
/**
 * When in dev mode, checks that styles for a given @reach package are loaded.
 *
 * @param packageName Name of the package to check.
 * @example checkStyles("dialog") will check for styles for @reach/dialog
 */
// @ts-ignore

var checkStyles = noop;

if (process.env.NODE_ENV !== "production") {
  // In CJS files, process.env.NODE_ENV is stripped from our build, but we need
  // it to prevent style checks from clogging up user logs while testing.
  // This is a workaround until we can tweak the build a bit to accommodate.
  var _ref = typeof process !== "undefined" ? process : {
    env: {
      NODE_ENV: "development"
    }
  },
      env = _ref.env;

  checkStyles = function checkStyles(packageName) {
    // only check once per package
    if (checkedPkgs[packageName]) return;
    checkedPkgs[packageName] = true;

    if (env.NODE_ENV !== "test" && parseInt(window.getComputedStyle(document.body).getPropertyValue("--reach-" + packageName), 10) !== 1) {
      console.warn("@reach/" + packageName + " styles not found. If you are using a bundler like webpack or parcel include this in the entry file of your app before any of your own styles:\n\n    import \"@reach/" + packageName + "/styles.css\";\n\n  Otherwise you'll need to include them some other way:\n\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"node_modules/@reach/" + packageName + "/styles.css\" />\n\n  For more information visit https://ui.reach.tech/styling.\n  ");
    }
  };
}
/**
 * Passes or assigns an arbitrary value to a ref function or object.
 *
 * @param ref
 * @param value
 */

function assignRef(ref, value) {
  if (ref == null) return;

  if (isFunction(ref)) {
    ref(value);
  } else {
    try {
      ref.current = value;
    } catch (error) {
      throw new Error("Cannot assign value \"" + value + "\" to ref \"" + ref + "\"");
    }
  }
}
function canUseDOM() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
/**
 * This is a hack for sure. The thing is, getting a component to intelligently
 * infer props based on a component or JSX string passed into an `as` prop is
 * kind of a huge pain. Getting it to work and satisfy the constraints of
 * `forwardRef` seems dang near impossible. To avoid needing to do this awkward
 * type song-and-dance every time we want to forward a ref into a component
 * that accepts an `as` prop, we abstract all of that mess to this function for
 * the time time being.
 */

function forwardRefWithAs(render) {
  return React__default.forwardRef(render);
}
/**
 * Get the size of the working document minus the scrollbar offset.
 *
 * @param element
 */

function getDocumentDimensions(element) {
  if (!canUseDOM()) return {
    width: 0,
    height: 0
  };
  var doc = element ? getOwnerDocument(element) : document;
  var win = element ? getOwnerWindow(element) : window;
  return {
    width: doc.documentElement.clientWidth || win.innerWidth,
    height: doc.documentElement.clientHeight || win.innerHeight
  };
}
/**
 * Get an element's owner document. Useful when components are used in iframes
 * or other environments like dev tools.
 *
 * @param element
 */

function getOwnerDocument(element) {
  return element && element.ownerDocument ? element.ownerDocument : canUseDOM() ? document : null;
}
function getOwnerWindow(element) {
  var doc = element ? getOwnerDocument(element) : null;
  return doc ? doc.defaultView || window : null;
}
/**
 * Checks whether or not a value is a function.
 *
 * @param value
 */

function isFunction(value) {
  return !!(value && {}.toString.call(value) == "[object Function]");
}
/**
 * Checks whether or not a value is a string.
 *
 * @param value
 */

function isString(value) {
  return typeof value === "string";
}
/**
 * Joins strings to format IDs for compound components.
 *
 * @param args
 */

function makeId() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return args.filter(function (val) {
    return val != null;
  }).join("--");
}
/**
 * No-op function.
 */

function noop() {}

if (process.env.NODE_ENV !== "production") ;

if (process.env.NODE_ENV !== "production") ;
/**
 * Passes or assigns a value to multiple refs (typically a DOM node). Useful for
 * dealing with components that need an explicit ref for DOM calculations but
 * also forwards refs assigned by an app.
 *
 * @param refs Refs to fork
 */

function useForkedRef() {
  for (var _len4 = arguments.length, refs = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    refs[_key4] = arguments[_key4];
  }

  return useMemo(function () {
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
  }, [].concat(refs));
}
/**
 * Returns the previous value of a reference after a component update.
 *
 * @param value
 */

function usePrevious(value) {
  var ref = useRef(null);
  useEffect(function () {
    ref.current = value;
  }, [value]);
  return ref.current;
}

if (process.env.NODE_ENV !== "production") ;
/**
 * Wraps a lib-defined event handler and a user-defined event handler, returning
 * a single handler that allows a user to prevent lib-defined handlers from
 * firing.
 *
 * @param theirHandler User-supplied event handler
 * @param ourHandler Library-supplied event handler
 */

function wrapEvent(theirHandler, ourHandler) {
  return function (event) {
    theirHandler && theirHandler(event);

    if (!event.defaultPrevented) {
      return ourHandler(event);
    }
  };
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

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
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

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
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

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
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
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
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});
var reactIs_development_1 = reactIs_development.AsyncMode;
var reactIs_development_2 = reactIs_development.ConcurrentMode;
var reactIs_development_3 = reactIs_development.ContextConsumer;
var reactIs_development_4 = reactIs_development.ContextProvider;
var reactIs_development_5 = reactIs_development.Element;
var reactIs_development_6 = reactIs_development.ForwardRef;
var reactIs_development_7 = reactIs_development.Fragment;
var reactIs_development_8 = reactIs_development.Lazy;
var reactIs_development_9 = reactIs_development.Memo;
var reactIs_development_10 = reactIs_development.Portal;
var reactIs_development_11 = reactIs_development.Profiler;
var reactIs_development_12 = reactIs_development.StrictMode;
var reactIs_development_13 = reactIs_development.Suspense;
var reactIs_development_14 = reactIs_development.isAsyncMode;
var reactIs_development_15 = reactIs_development.isConcurrentMode;
var reactIs_development_16 = reactIs_development.isContextConsumer;
var reactIs_development_17 = reactIs_development.isContextProvider;
var reactIs_development_18 = reactIs_development.isElement;
var reactIs_development_19 = reactIs_development.isForwardRef;
var reactIs_development_20 = reactIs_development.isFragment;
var reactIs_development_21 = reactIs_development.isLazy;
var reactIs_development_22 = reactIs_development.isMemo;
var reactIs_development_23 = reactIs_development.isPortal;
var reactIs_development_24 = reactIs_development.isProfiler;
var reactIs_development_25 = reactIs_development.isStrictMode;
var reactIs_development_26 = reactIs_development.isSuspense;
var reactIs_development_27 = reactIs_development.isValidElementType;
var reactIs_development_28 = reactIs_development.typeOf;

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

var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

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
          printWarning$1(
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

          printWarning$1(
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
var printWarning$2 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$2 = function(text) {
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
            printWarning$2(
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
          printWarning$2(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$2('Invalid argument supplied to oneOf, expected an array.');
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
      process.env.NODE_ENV !== 'production' ? printWarning$2('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$2(
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

function _objectWithoutPropertiesLoose$1(source, excluded) {
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

/*
 * Singleton state is fine because you don't server render
 * an alert (SRs don't read them on first load anyway)
 */

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
var renderTimer; ////////////////////////////////////////////////////////////////////////////////

/**
 * Alert
 *
 * Screen-reader-friendly alert messages. In many apps developers add "alert"
 * messages when network events or other things happen. Users with assistive
 * technologies may not know about the message unless you develop for it.
 *
 * @see Docs https://reacttraining.com/reach-ui/alert
 */

var Alert = /*#__PURE__*/forwardRef(function Alert(_ref, forwardedRef) {
  var children = _ref.children,
      _ref$type = _ref.type,
      regionType = _ref$type === void 0 ? "polite" : _ref$type,
      props = _objectWithoutPropertiesLoose$1(_ref, ["children", "type"]);

  var ownRef = useRef(null);
  var ref = useForkedRef(forwardedRef, ownRef);
  var child = useMemo(function () {
    return React__default.createElement("div", Object.assign({}, props, {
      ref: ref,
      "data-reach-alert": true
    }), children);
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [children, props]);
  useMirrorEffects(regionType, child, ownRef);
  return child;
});

if (process.env.NODE_ENV !== "production") {
  Alert.displayName = "Alert";
  Alert.propTypes = {
    children: propTypes.node,
    type: /*#__PURE__*/propTypes.oneOf(["assertive", "polite"])
  };
}

function createMirror(type, doc) {
  var key = ++keys[type];

  var mount = function mount(element) {
    if (liveRegions[type]) {
      elements[type][key] = element;
      renderAlerts();
    } else {
      var node = doc.createElement("div");
      node.setAttribute("data-reach-live-" + type, "true");
      liveRegions[type] = node;
      doc.body.appendChild(liveRegions[type]);
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

function renderAlerts() {
  if (renderTimer != null) {
    window.clearTimeout(renderTimer);
  }

  renderTimer = window.setTimeout(function () {
    Object.keys(elements).forEach(function (elementType) {
      var regionType = elementType;
      var container = liveRegions[regionType];

      if (container) {
        render(React__default.createElement(VisuallyHidden, null, React__default.createElement("div", {
          // The status role is a type of live region and a container whose
          // content is advisory information for the user that is not
          // important enough to justify an alert, and is often presented as
          // a status bar. When the role is added to an element, the browser
          // will send out an accessible status event to assistive
          // technology products which can then notify the user about it.
          // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_status_role
          role: regionType === "assertive" ? "alert" : "status",
          "aria-live": regionType
        }, Object.keys(elements[regionType]).map(function (key) {
          return React__default.cloneElement(elements[regionType][key], {
            key: key,
            ref: null
          });
        }))), liveRegions[regionType]);
      }
    });
  }, 500);
}

function useMirrorEffects(regionType, element, ref) {
  var prevType = usePrevious(regionType);
  var mirror = useRef(null);
  var mounted = useRef(false);
  useEffect(function () {
    var ownerDocument = getOwnerDocument(ref.current) || document;

    if (!mounted.current) {
      mounted.current = true;
      mirror.current = createMirror(regionType, ownerDocument);
      mirror.current.mount(element);
    } else if (prevType !== regionType) {
      mirror.current && mirror.current.unmount();
      mirror.current = createMirror(regionType, ownerDocument);
      mirror.current.mount(element);
    } else {
      mirror.current && mirror.current.update(element);
    }
  }, [element, regionType, prevType, ref]);
  useEffect(function () {
    return function () {
      mirror.current && mirror.current.unmount();
    };
  }, []);
}

function _defineProperty$1(obj, key, value) {
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

var defineProperty = _defineProperty$1;

function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

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
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
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

  var name = murmur2(styles) + identifierName;

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

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
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


    var Styled = withEmotionCache(function (props, context, ref) {
      return createElement(ThemeContext.Consumer, null, function (theme) {
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

        var ele = createElement(finalTag, newProps);

        if (!isBrowser$1 && rules !== undefined) {
          var _ref;

          var serializedNames = serialized.name;
          var next = serialized.next;

          while (next !== undefined) {
            serializedNames += ' ' + next.name;
            next = next.next;
          }

          return createElement(Fragment$1, null, createElement("style", (_ref = {}, _ref["data-emotion-" + context.key] = serializedNames, _ref.dangerouslySetInnerHTML = {
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

var config$5 = {
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
  }
};
config$5.borderTopWidth = {
  property: 'borderTopWidth',
  scale: 'borderWidths'
};
config$5.borderTopColor = {
  property: 'borderTopColor',
  scale: 'colors'
};
config$5.borderTopStyle = {
  property: 'borderTopStyle',
  scale: 'borderStyles'
};
config$5.borderTopLeftRadius = {
  property: 'borderTopLeftRadius',
  scale: 'radii'
};
config$5.borderTopRightRadius = {
  property: 'borderTopRightRadius',
  scale: 'radii'
};
config$5.borderBottomWidth = {
  property: 'borderBottomWidth',
  scale: 'borderWidths'
};
config$5.borderBottomColor = {
  property: 'borderBottomColor',
  scale: 'colors'
};
config$5.borderBottomStyle = {
  property: 'borderBottomStyle',
  scale: 'borderStyles'
};
config$5.borderBottomLeftRadius = {
  property: 'borderBottomLeftRadius',
  scale: 'radii'
};
config$5.borderBottomRightRadius = {
  property: 'borderBottomRightRadius',
  scale: 'radii'
};
config$5.borderLeftWidth = {
  property: 'borderLeftWidth',
  scale: 'borderWidths'
};
config$5.borderLeftColor = {
  property: 'borderLeftColor',
  scale: 'colors'
};
config$5.borderLeftStyle = {
  property: 'borderLeftStyle',
  scale: 'borderStyles'
};
config$5.borderRightWidth = {
  property: 'borderRightWidth',
  scale: 'borderWidths'
};
config$5.borderRightColor = {
  property: 'borderRightColor',
  scale: 'colors'
};
config$5.borderRightStyle = {
  property: 'borderRightStyle',
  scale: 'borderStyles'
};
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

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

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
var scales = {
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
  borderTopStyle: 'borderStyles',
  borderBottomWidth: 'borderWidths',
  borderBottomColor: 'colors',
  borderBottomStyle: 'borderStyles',
  borderLeftWidth: 'borderWidths',
  borderLeftColor: 'colors',
  borderLeftStyle: 'borderStyles',
  borderRightWidth: 'borderWidths',
  borderRightColor: 'colors',
  borderRightStyle: 'borderStyles',
  outlineColor: 'colors',
  boxShadow: 'shadows',
  textShadow: 'shadows',
  zIndex: 'zIndices',
  width: 'sizes',
  minWidth: 'sizes',
  maxWidth: 'sizes',
  height: 'sizes',
  minHeight: 'sizes',
  maxHeight: 'sizes',
  flexBasis: 'sizes',
  size: 'sizes',
  // svg
  fill: 'colors',
  stroke: 'colors'
};

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

  return _extends$1({}, acc, (_extends2 = {}, _extends2[curr] = positiveOrNegative, _extends2));
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

        if (!media) {
          next[key] = value[i];
          continue;
        }

        next[media] = next[media] || {};
        if (value[i] == null) continue;
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

    var theme = _extends$1({}, defaultTheme, {}, props.theme || props);

    var result = {};
    var obj = typeof args === 'function' ? args(theme) : args;
    var styles = responsive(obj)(theme);

    for (var key in styles) {
      var x = styles[key];
      var val = typeof x === 'function' ? x(theme) : x;

      if (key === 'variant') {
        var variant = css(get$1(theme, val))(theme);
        result = _extends$1({}, result, {}, variant);
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

/**
 * System Props
 *
 * Here we organize and export styled-system style props
 * into categories that make sense to us.
 */
var COMMON = compose(display, space, color);
var BORDER = compose(border, shadow);
var LAYOUT = compose(width, height, minWidth, minHeight, maxWidth, maxHeight, verticalAlign, overflow, overflowX, overflowY);
var TYPOGRAPHY = typography;
var POSITION = position;
var FLEX = flexbox;
var GRID = grid;

var Box = /*#__PURE__*/createStyled("div", {
  shouldForwardProp: shouldForwardProp,
  target: "e188wkxo0",
  label: "Box"
})(compose(COMMON, BORDER, TYPOGRAPHY, LAYOUT, POSITION, FLEX, GRID), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJveC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQlkiLCJmaWxlIjoiQm94LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDwn5OmIChCb3gpXG4gKlxuICog8J+TpiBzZXJ2ZXMgYXMgdGhlIGZvdW5kYXRpb25hbCBidWlsZGluZyBibG9jayBmb3IgYWxtb3N0IGV2ZXJ5IG90aGVyIGNvbXBvbmVudC5cbiAqIFdlIGluamVjdCBhIG51bWJlciBvZiBzdHlsZSBwcm9wcyBmcm9tIHN0eWxlZC1zeXN0ZW0gaW50byBhIGRpdiBhbGxvd2luZyB1cyB0b1xuICogcXVpY2tseSBhbmQgZWFzaWx5IG1hbmlwdWxhdGUgQ1NTIHByb3BlcnRpZXMgd2l0aG91dCB3cml0aW5nIENTUyBjbGFzc2VzIGZvclxuICogZXZlcnkgZGVmaW5pdGlvbi5cbiAqXG4gKiBUaGlzIGFwcHJvYWNoIGFsc28gZ2l2ZXMgdXMgZWFzeSBhY2Nlc3MgdG8gb3VyIFRoZW1lIHdoaWNoIG9mZmVycyB1cyB0aGUgYWJpbGl0eVxuICogdG8gY29uc2lzdGVudGx5IHJlZmVyZW5jZSBzcGFjaW5nLCBmb250cywgY29sb3JzLCBicmVha3BvaW50cywgYW5kIG90aGVyIGZlYXR1cmVzXG4gKiB3aXRoIGxlc3MgbWFyayB1cC5cbiAqXG4gKiBUaGUg8J+TpiBtZXRob2QgaGFzIGJlZW4gcG9wdWxhcml6ZWQgYnkgbWFqb3IgY29tcGFuaWVzIHN1Y2ggYXMgVWJlciBhbmQgU2VnbWVudCxcbiAqIGFuZCBmb2xsb3dzIHNvbWUgb2YgdGhlIHNhbWUgbWV0aG9kb2xvZ2llcyB0aGF0IGNhbiBiZSBmb3VuZCBpbiBBcHBsZSdzIFN3aWZ0XG4gKiBjb2RpbmcgbGFuZ3VhZ2UgYW5kIG90aGVycy5cbiAqL1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCBzaG91bGRGb3J3YXJkUHJvcCBmcm9tIFwiQHN0eWxlZC1zeXN0ZW0vc2hvdWxkLWZvcndhcmQtcHJvcFwiO1xuaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gXCJzdHlsZWQtc3lzdGVtXCI7XG5cbmltcG9ydCB7XG4gIENPTU1PTixcbiAgQk9SREVSLFxuICBUWVBPR1JBUEhZLFxuICBMQVlPVVQsXG4gIFBPU0lUSU9OLFxuICBGTEVYLFxuICBHUklELFxufSBmcm9tIFwiLi4vLi4vc3lzdGVtUHJvcHNcIjtcblxuY29uc3QgQm94ID0gc3R5bGVkKFwiZGl2XCIsIHsgc2hvdWxkRm9yd2FyZFByb3AgfSkoXG4gIGNvbXBvc2UoQ09NTU9OLCBCT1JERVIsIFRZUE9HUkFQSFksIExBWU9VVCwgUE9TSVRJT04sIEZMRVgsIEdSSUQpXG4pO1xuXG5Cb3guZGVmYXVsdFByb3BzID0ge1xuICBcImRhdGEtZnJlc2NvLWlkXCI6IFwi8J+TplwiLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQm94O1xuIl19 */");

Box.defaultProps = {
  "data-fresco-id": "📦"
};

function css$1() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return serializeStyles(args);
}

var Icon = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? "label.0" : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$symbol = _ref.symbol,
      symbol = _ref$symbol === void 0 ? "" : _ref$symbol,
      rest = _objectWithoutProperties(_ref, ["color", "size", "symbol"]);

  return jsx(Box, _extends({
    "data-fresco-id": "icon",
    ref: ref,
    as: "span",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: size + "px",
    height: size + "px",
    fontSize: size + "px",
    color: color
  }, rest), jsx(Box, {
    as: "i",
    className: "".concat("ri-" + symbol),
    css: /*#__PURE__*/css$1({
      lineHeight: size + "px"
    }, ";label:Icon;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkljb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJVIiwiZmlsZSI6Ikljb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiLi4vLi4vYm94XCI7XG5cbmNvbnN0IEljb24gPSBmb3J3YXJkUmVmKFxuICAoeyBjb2xvciA9IFwibGFiZWwuMFwiLCBzaXplID0gMjQsIHN5bWJvbCA9IFwiXCIsIC4uLnJlc3QgfSwgcmVmKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3hcbiAgICAgICAgZGF0YS1mcmVzY28taWQ9XCJpY29uXCJcbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgIGFzPVwic3BhblwiXG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgd2lkdGg9e3NpemUgKyBcInB4XCJ9XG4gICAgICAgIGhlaWdodD17c2l6ZSArIFwicHhcIn1cbiAgICAgICAgZm9udFNpemU9e3NpemUgKyBcInB4XCJ9XG4gICAgICAgIGNvbG9yPXtjb2xvcn1cbiAgICAgICAgey4uLnJlc3R9XG4gICAgICA+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBhcz1cImlcIlxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7XCJyaS1cIiArIHN5bWJvbH1gfVxuICAgICAgICAgIGNzcz17eyBsaW5lSGVpZ2h0OiBzaXplICsgXCJweFwiIH19XG4gICAgICAgIC8+XG4gICAgICA8L0JveD5cbiAgICApO1xuICB9XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBJY29uO1xuIl19 */"))
  }));
});

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    stroke-dashoffset: 600;\n  }\n  100% {\n    stroke-dashoffset: 0;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    transform: rotate(0);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var loadingKeyframes = keyframes(_templateObject());
var loadingCircleKeyframes = keyframes(_templateObject2());

var Spinner = function Spinner(_ref) {
  var color = _ref.color,
      size = _ref.size,
      rest = _objectWithoutProperties(_ref, ["color", "size"]);

  return jsx(Box, _extends({
    "data-component-id": "spinner",
    width: size,
    height: size,
    lineHeight: 0
  }, rest), jsx(Box, {
    "data-component-id": "spinner.svg",
    as: "svg",
    x: "0px",
    y: "0px",
    viewBox: "0 0 150 150",
    css: /*#__PURE__*/css$1({
      animation: "".concat(loadingKeyframes, " 2s linear infinite")
    }, ";label:Spinner;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNwaW5uZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUNNIiwiZmlsZSI6IlNwaW5uZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFNwaW5uZXJcbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBrZXlmcmFtZXMgfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiO1xuXG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiLi4vLi4vYm94XCI7XG5cbmNvbnN0IGxvYWRpbmdLZXlmcmFtZXMgPSBrZXlmcmFtZXNgXG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG5gO1xuXG5jb25zdCBsb2FkaW5nQ2lyY2xlS2V5ZnJhbWVzID0ga2V5ZnJhbWVzYFxuICAwJSB7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDYwMDtcbiAgfVxuICAxMDAlIHtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgfVxuYDtcblxuY29uc3QgU3Bpbm5lciA9ICh7IGNvbG9yLCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPEJveFxuICAgIGRhdGEtY29tcG9uZW50LWlkPVwic3Bpbm5lclwiXG4gICAgd2lkdGg9e3NpemV9XG4gICAgaGVpZ2h0PXtzaXplfVxuICAgIGxpbmVIZWlnaHQ9ezB9XG4gICAgey4uLnJlc3R9XG4gID5cbiAgICA8Qm94XG4gICAgICBkYXRhLWNvbXBvbmVudC1pZD1cInNwaW5uZXIuc3ZnXCJcbiAgICAgIGFzPVwic3ZnXCJcbiAgICAgIHg9XCIwcHhcIlxuICAgICAgeT1cIjBweFwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDE1MCAxNTBcIlxuICAgICAgY3NzPXt7IGFuaW1hdGlvbjogYCR7bG9hZGluZ0tleWZyYW1lc30gMnMgbGluZWFyIGluZmluaXRlYCB9fVxuICAgID5cbiAgICAgIDxCb3hcbiAgICAgICAgZGF0YS1jb21wb25lbnQtaWQ9XCJzcGlubmVyLmNpcmNsZVwiXG4gICAgICAgIGFzPVwiY2lyY2xlXCJcbiAgICAgICAgY3g9XCI3NVwiXG4gICAgICAgIGN5PVwiNzVcIlxuICAgICAgICByPVwiNjBcIlxuICAgICAgICBjb2xvcj17Y29sb3J9XG4gICAgICAgIGNzcz17e1xuICAgICAgICAgIHN0cm9rZURhc2hvZmZzZXQ6IDYwMCxcbiAgICAgICAgICBzdHJva2VEYXNoYXJyYXk6IDMwMCxcbiAgICAgICAgICBzdHJva2VXaWR0aDogMTIsXG4gICAgICAgICAgc3Ryb2tlTWl0ZXJsaW1pdDogMTAsXG4gICAgICAgICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgICAgICAgIGFuaW1hdGlvbjogYCR7bG9hZGluZ0NpcmNsZUtleWZyYW1lc30gMS42cyBjdWJpYy1iZXppZXIoMC40LCAwLjE1LCAwLjYsIDAuODUpIGluZmluaXRlYCxcbiAgICAgICAgICBzdHJva2U6IFwiY3VycmVudENvbG9yXCIsXG4gICAgICAgICAgZmlsbDogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L0JveD5cbiAgPC9Cb3g+XG4pO1xuXG5TcGlubmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgY29sb3I6IFwiZmlsbC4wXCIsXG4gIHNpemU6IDQwLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3Bpbm5lcjtcbiJdfQ== */"))
  }, jsx(Box, {
    "data-component-id": "spinner.circle",
    as: "circle",
    cx: "75",
    cy: "75",
    r: "60",
    color: color,
    css: /*#__PURE__*/css$1({
      strokeDashoffset: 600,
      strokeDasharray: 300,
      strokeWidth: 12,
      strokeMiterlimit: 10,
      strokeLinecap: "round",
      animation: "".concat(loadingCircleKeyframes, " 1.6s cubic-bezier(0.4, 0.15, 0.6, 0.85) infinite"),
      stroke: "currentColor",
      fill: "transparent"
    }, ";label:Spinner;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNwaW5uZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0RRIiwiZmlsZSI6IlNwaW5uZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFNwaW5uZXJcbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBrZXlmcmFtZXMgfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiO1xuXG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiLi4vLi4vYm94XCI7XG5cbmNvbnN0IGxvYWRpbmdLZXlmcmFtZXMgPSBrZXlmcmFtZXNgXG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG5gO1xuXG5jb25zdCBsb2FkaW5nQ2lyY2xlS2V5ZnJhbWVzID0ga2V5ZnJhbWVzYFxuICAwJSB7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDYwMDtcbiAgfVxuICAxMDAlIHtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgfVxuYDtcblxuY29uc3QgU3Bpbm5lciA9ICh7IGNvbG9yLCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPEJveFxuICAgIGRhdGEtY29tcG9uZW50LWlkPVwic3Bpbm5lclwiXG4gICAgd2lkdGg9e3NpemV9XG4gICAgaGVpZ2h0PXtzaXplfVxuICAgIGxpbmVIZWlnaHQ9ezB9XG4gICAgey4uLnJlc3R9XG4gID5cbiAgICA8Qm94XG4gICAgICBkYXRhLWNvbXBvbmVudC1pZD1cInNwaW5uZXIuc3ZnXCJcbiAgICAgIGFzPVwic3ZnXCJcbiAgICAgIHg9XCIwcHhcIlxuICAgICAgeT1cIjBweFwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDE1MCAxNTBcIlxuICAgICAgY3NzPXt7IGFuaW1hdGlvbjogYCR7bG9hZGluZ0tleWZyYW1lc30gMnMgbGluZWFyIGluZmluaXRlYCB9fVxuICAgID5cbiAgICAgIDxCb3hcbiAgICAgICAgZGF0YS1jb21wb25lbnQtaWQ9XCJzcGlubmVyLmNpcmNsZVwiXG4gICAgICAgIGFzPVwiY2lyY2xlXCJcbiAgICAgICAgY3g9XCI3NVwiXG4gICAgICAgIGN5PVwiNzVcIlxuICAgICAgICByPVwiNjBcIlxuICAgICAgICBjb2xvcj17Y29sb3J9XG4gICAgICAgIGNzcz17e1xuICAgICAgICAgIHN0cm9rZURhc2hvZmZzZXQ6IDYwMCxcbiAgICAgICAgICBzdHJva2VEYXNoYXJyYXk6IDMwMCxcbiAgICAgICAgICBzdHJva2VXaWR0aDogMTIsXG4gICAgICAgICAgc3Ryb2tlTWl0ZXJsaW1pdDogMTAsXG4gICAgICAgICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgICAgICAgIGFuaW1hdGlvbjogYCR7bG9hZGluZ0NpcmNsZUtleWZyYW1lc30gMS42cyBjdWJpYy1iZXppZXIoMC40LCAwLjE1LCAwLjYsIDAuODUpIGluZmluaXRlYCxcbiAgICAgICAgICBzdHJva2U6IFwiY3VycmVudENvbG9yXCIsXG4gICAgICAgICAgZmlsbDogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L0JveD5cbiAgPC9Cb3g+XG4pO1xuXG5TcGlubmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgY29sb3I6IFwiZmlsbC4wXCIsXG4gIHNpemU6IDQwLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3Bpbm5lcjtcbiJdfQ== */"))
  })));
};

Spinner.defaultProps = {
  color: "fill.0",
  size: 40
};

var StyledElement = /*#__PURE__*/createStyled("span", {
  shouldForwardProp: shouldForwardProp,
  target: "e1jkbip00",
  label: "StyledElement"
})(variant({
  prop: "size",
  scale: "headings"
}), compose(COMMON, BORDER, TYPOGRAPHY, LAYOUT, POSITION, FLEX, GRID), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhlYWRpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JzQiIsImZpbGUiOiJIZWFkaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHNob3VsZEZvcndhcmRQcm9wIGZyb20gXCJAc3R5bGVkLXN5c3RlbS9zaG91bGQtZm9yd2FyZC1wcm9wXCI7XG5pbXBvcnQgeyBjb21wb3NlLCB2YXJpYW50IH0gZnJvbSBcInN0eWxlZC1zeXN0ZW1cIjtcblxuaW1wb3J0IHsgQm94IH0gZnJvbSBcIi4uLy4uL2JveFwiO1xuaW1wb3J0IHtcbiAgQ09NTU9OLFxuICBCT1JERVIsXG4gIFRZUE9HUkFQSFksXG4gIExBWU9VVCxcbiAgUE9TSVRJT04sXG4gIEZMRVgsXG4gIEdSSUQsXG59IGZyb20gXCIuLi8uLi9zeXN0ZW1Qcm9wc1wiO1xuXG5jb25zdCBTdHlsZWRFbGVtZW50ID0gc3R5bGVkKFwic3BhblwiLCB7IHNob3VsZEZvcndhcmRQcm9wIH0pKFxuICB2YXJpYW50KHtcbiAgICBwcm9wOiBcInNpemVcIixcbiAgICBzY2FsZTogXCJoZWFkaW5nc1wiLFxuICB9KSxcbiAgY29tcG9zZShDT01NT04sIEJPUkRFUiwgVFlQT0dSQVBIWSwgTEFZT1VULCBQT1NJVElPTiwgRkxFWCwgR1JJRClcbik7XG5cbmNvbnN0IEhlYWRpbmcgPSBmb3J3YXJkUmVmKFxuICAoeyBjaGlsZHJlbiwgZWxsaXBzaXMsIGNsYW1wLCBzaXplLCAuLi5yZXN0IH0sIHJlZikgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8U3R5bGVkRWxlbWVudFxuICAgICAgICBkYXRhLWZyZXNjby1pZD17YHR5cG9ncmFwaHkuaGVhZGluZy4ke3NpemV9YH1cbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgIHNpemU9e3NpemV9XG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgPlxuICAgICAgICA8Qm94XG4gICAgICAgICAgZGF0YS1mcmVzY28taWQ9e2B0eXBvZ3JhcGh5LmhlYWRpbmcuJHtzaXplfS5jb250ZW50YH1cbiAgICAgICAgICBhcz1cInNwYW5cIlxuICAgICAgICAgIGNoaWxkcmVuPXtjaGlsZHJlbn1cbiAgICAgICAgICBjc3M9e1tcbiAgICAgICAgICAgIGNsYW1wID4gMCAmJiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiLXdlYmtpdC1ib3hcIixcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICAgIHRleHRPdmVyZmxvdzogXCJlbGxpcHNpc1wiLFxuICAgICAgICAgICAgICBXZWJraXRCb3hPcmllbnQ6IFwidmVydGljYWxcIixcbiAgICAgICAgICAgICAgTW96Qm94T3JpZW50OiBcInZlcnRpY2FsXCIsXG4gICAgICAgICAgICAgIFdlYmtpdExpbmVDbGFtcDogY2xhbXAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZWxsaXBzaXMgJiYge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICAgICAgICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICB0ZXh0T3ZlcmZsb3c6IFwiZWxsaXBzaXNcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXX1cbiAgICAgICAgLz5cbiAgICAgIDwvU3R5bGVkRWxlbWVudD5cbiAgICApO1xuICB9XG4pO1xuXG5IZWFkaW5nLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzcGxheTogXCJibG9ja1wiLFxuICBzaXplOiA3MDAsXG4gIGNvbG9yOiBcImxhYmVsLjBcIixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRpbmc7XG4iXX0= */");

var Heading = forwardRef(function (_ref, ref) {
  var children = _ref.children,
      ellipsis = _ref.ellipsis,
      clamp = _ref.clamp,
      size = _ref.size,
      rest = _objectWithoutProperties(_ref, ["children", "ellipsis", "clamp", "size"]);

  return jsx(StyledElement, _extends({
    "data-fresco-id": "typography.heading.".concat(size),
    ref: ref,
    size: size
  }, rest), jsx(Box, {
    "data-fresco-id": "typography.heading.".concat(size, ".content"),
    as: "span",
    children: children,
    css: /*#__PURE__*/css$1([clamp > 0 && {
      display: "-webkit-box",
      overflow: "hidden",
      textOverflow: "ellipsis",
      WebkitBoxOrient: "vertical",
      MozBoxOrient: "vertical",
      WebkitLineClamp: clamp
    }, ellipsis && {
      display: "block",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }], ";label:Heading;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhlYWRpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNVIiwiZmlsZSI6IkhlYWRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgc2hvdWxkRm9yd2FyZFByb3AgZnJvbSBcIkBzdHlsZWQtc3lzdGVtL3Nob3VsZC1mb3J3YXJkLXByb3BcIjtcbmltcG9ydCB7IGNvbXBvc2UsIHZhcmlhbnQgfSBmcm9tIFwic3R5bGVkLXN5c3RlbVwiO1xuXG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiLi4vLi4vYm94XCI7XG5pbXBvcnQge1xuICBDT01NT04sXG4gIEJPUkRFUixcbiAgVFlQT0dSQVBIWSxcbiAgTEFZT1VULFxuICBQT1NJVElPTixcbiAgRkxFWCxcbiAgR1JJRCxcbn0gZnJvbSBcIi4uLy4uL3N5c3RlbVByb3BzXCI7XG5cbmNvbnN0IFN0eWxlZEVsZW1lbnQgPSBzdHlsZWQoXCJzcGFuXCIsIHsgc2hvdWxkRm9yd2FyZFByb3AgfSkoXG4gIHZhcmlhbnQoe1xuICAgIHByb3A6IFwic2l6ZVwiLFxuICAgIHNjYWxlOiBcImhlYWRpbmdzXCIsXG4gIH0pLFxuICBjb21wb3NlKENPTU1PTiwgQk9SREVSLCBUWVBPR1JBUEhZLCBMQVlPVVQsIFBPU0lUSU9OLCBGTEVYLCBHUklEKVxuKTtcblxuY29uc3QgSGVhZGluZyA9IGZvcndhcmRSZWYoXG4gICh7IGNoaWxkcmVuLCBlbGxpcHNpcywgY2xhbXAsIHNpemUsIC4uLnJlc3QgfSwgcmVmKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHlsZWRFbGVtZW50XG4gICAgICAgIGRhdGEtZnJlc2NvLWlkPXtgdHlwb2dyYXBoeS5oZWFkaW5nLiR7c2l6ZX1gfVxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgey4uLnJlc3R9XG4gICAgICA+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBkYXRhLWZyZXNjby1pZD17YHR5cG9ncmFwaHkuaGVhZGluZy4ke3NpemV9LmNvbnRlbnRgfVxuICAgICAgICAgIGFzPVwic3BhblwiXG4gICAgICAgICAgY2hpbGRyZW49e2NoaWxkcmVufVxuICAgICAgICAgIGNzcz17W1xuICAgICAgICAgICAgY2xhbXAgPiAwICYmIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogXCItd2Via2l0LWJveFwiLFxuICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgICAgICAgdGV4dE92ZXJmbG93OiBcImVsbGlwc2lzXCIsXG4gICAgICAgICAgICAgIFdlYmtpdEJveE9yaWVudDogXCJ2ZXJ0aWNhbFwiLFxuICAgICAgICAgICAgICBNb3pCb3hPcmllbnQ6IFwidmVydGljYWxcIixcbiAgICAgICAgICAgICAgV2Via2l0TGluZUNsYW1wOiBjbGFtcCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbGxpcHNpcyAmJiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgICAgICAgICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICAgIHRleHRPdmVyZmxvdzogXCJlbGxpcHNpc1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdfVxuICAgICAgICAvPlxuICAgICAgPC9TdHlsZWRFbGVtZW50PlxuICAgICk7XG4gIH1cbik7XG5cbkhlYWRpbmcuZGVmYXVsdFByb3BzID0ge1xuICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gIHNpemU6IDcwMCxcbiAgY29sb3I6IFwibGFiZWwuMFwiLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGluZztcbiJdfQ== */"))
  }));
});
Heading.defaultProps = {
  display: "block",
  size: 700,
  color: "label.0"
};

var StyledElement$1 = /*#__PURE__*/createStyled("span", {
  shouldForwardProp: shouldForwardProp,
  target: "e1fo6qcx0",
  label: "StyledElement"
})(variant({
  prop: "size",
  scale: "paragraph"
}), compose(COMMON, BORDER, TYPOGRAPHY, LAYOUT, POSITION, FLEX, GRID), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBhcmFncmFwaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQnNCIiwiZmlsZSI6IlBhcmFncmFwaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCBzaG91bGRGb3J3YXJkUHJvcCBmcm9tIFwiQHN0eWxlZC1zeXN0ZW0vc2hvdWxkLWZvcndhcmQtcHJvcFwiO1xuaW1wb3J0IHsgY29tcG9zZSwgdmFyaWFudCB9IGZyb20gXCJzdHlsZWQtc3lzdGVtXCI7XG5cbmltcG9ydCB7IEJveCB9IGZyb20gXCIuLi8uLi9ib3hcIjtcbmltcG9ydCB7XG4gIENPTU1PTixcbiAgQk9SREVSLFxuICBUWVBPR1JBUEhZLFxuICBMQVlPVVQsXG4gIFBPU0lUSU9OLFxuICBGTEVYLFxuICBHUklELFxufSBmcm9tIFwiLi4vLi4vc3lzdGVtUHJvcHNcIjtcblxuY29uc3QgU3R5bGVkRWxlbWVudCA9IHN0eWxlZChcInNwYW5cIiwgeyBzaG91bGRGb3J3YXJkUHJvcCB9KShcbiAgdmFyaWFudCh7XG4gICAgcHJvcDogXCJzaXplXCIsXG4gICAgc2NhbGU6IFwicGFyYWdyYXBoXCIsXG4gIH0pLFxuICBjb21wb3NlKENPTU1PTiwgQk9SREVSLCBUWVBPR1JBUEhZLCBMQVlPVVQsIFBPU0lUSU9OLCBGTEVYLCBHUklEKVxuKTtcblxuY29uc3QgUGFyYWdyYXBoID0gZm9yd2FyZFJlZihcbiAgKHsgY2hpbGRyZW4sIGVsbGlwc2lzLCBjbGFtcCwgc2l6ZSwgLi4ucmVzdCB9LCByZWYpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPFN0eWxlZEVsZW1lbnRcbiAgICAgICAgZGF0YS1mcmVzY28taWQ9e2B0eXBvZ3JhcGh5LnBhcmFncmFwaC4ke3NpemV9YH1cbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgIHNpemU9e3NpemV9XG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgPlxuICAgICAgICA8Qm94XG4gICAgICAgICAgZGF0YS1mcmVzY28taWQ9e2B0eXBvZ3JhcGh5LnBhcmFncmFwaC4ke3NpemV9LmNvbnRlbnRgfVxuICAgICAgICAgIGFzPVwic3BhblwiXG4gICAgICAgICAgY2hpbGRyZW49e2NoaWxkcmVufVxuICAgICAgICAgIGNzcz17W1xuICAgICAgICAgICAgY2xhbXAgPiAwICYmIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogXCItd2Via2l0LWJveFwiLFxuICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgICAgICAgdGV4dE92ZXJmbG93OiBcImVsbGlwc2lzXCIsXG4gICAgICAgICAgICAgIFdlYmtpdEJveE9yaWVudDogXCJ2ZXJ0aWNhbFwiLFxuICAgICAgICAgICAgICBNb3pCb3hPcmllbnQ6IFwidmVydGljYWxcIixcbiAgICAgICAgICAgICAgV2Via2l0TGluZUNsYW1wOiBjbGFtcCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbGxpcHNpcyAmJiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgICAgICAgICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICAgIHRleHRPdmVyZmxvdzogXCJlbGxpcHNpc1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdfVxuICAgICAgICAvPlxuICAgICAgPC9TdHlsZWRFbGVtZW50PlxuICAgICk7XG4gIH1cbik7XG5cblBhcmFncmFwaC5kZWZhdWx0UHJvcHMgPSB7XG4gIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgc2l6ZTogNTAwLFxuICBjb2xvcjogXCJsYWJlbC4wXCIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYXJhZ3JhcGg7XG4iXX0= */");

var Paragraph = forwardRef(function (_ref, ref) {
  var children = _ref.children,
      ellipsis = _ref.ellipsis,
      clamp = _ref.clamp,
      size = _ref.size,
      rest = _objectWithoutProperties(_ref, ["children", "ellipsis", "clamp", "size"]);

  return jsx(StyledElement$1, _extends({
    "data-fresco-id": "typography.paragraph.".concat(size),
    ref: ref,
    size: size
  }, rest), jsx(Box, {
    "data-fresco-id": "typography.paragraph.".concat(size, ".content"),
    as: "span",
    children: children,
    css: /*#__PURE__*/css$1([clamp > 0 && {
      display: "-webkit-box",
      overflow: "hidden",
      textOverflow: "ellipsis",
      WebkitBoxOrient: "vertical",
      MozBoxOrient: "vertical",
      WebkitLineClamp: clamp
    }, ellipsis && {
      display: "block",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }], ";label:Paragraph;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBhcmFncmFwaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ1UiLCJmaWxlIjoiUGFyYWdyYXBoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHNob3VsZEZvcndhcmRQcm9wIGZyb20gXCJAc3R5bGVkLXN5c3RlbS9zaG91bGQtZm9yd2FyZC1wcm9wXCI7XG5pbXBvcnQgeyBjb21wb3NlLCB2YXJpYW50IH0gZnJvbSBcInN0eWxlZC1zeXN0ZW1cIjtcblxuaW1wb3J0IHsgQm94IH0gZnJvbSBcIi4uLy4uL2JveFwiO1xuaW1wb3J0IHtcbiAgQ09NTU9OLFxuICBCT1JERVIsXG4gIFRZUE9HUkFQSFksXG4gIExBWU9VVCxcbiAgUE9TSVRJT04sXG4gIEZMRVgsXG4gIEdSSUQsXG59IGZyb20gXCIuLi8uLi9zeXN0ZW1Qcm9wc1wiO1xuXG5jb25zdCBTdHlsZWRFbGVtZW50ID0gc3R5bGVkKFwic3BhblwiLCB7IHNob3VsZEZvcndhcmRQcm9wIH0pKFxuICB2YXJpYW50KHtcbiAgICBwcm9wOiBcInNpemVcIixcbiAgICBzY2FsZTogXCJwYXJhZ3JhcGhcIixcbiAgfSksXG4gIGNvbXBvc2UoQ09NTU9OLCBCT1JERVIsIFRZUE9HUkFQSFksIExBWU9VVCwgUE9TSVRJT04sIEZMRVgsIEdSSUQpXG4pO1xuXG5jb25zdCBQYXJhZ3JhcGggPSBmb3J3YXJkUmVmKFxuICAoeyBjaGlsZHJlbiwgZWxsaXBzaXMsIGNsYW1wLCBzaXplLCAuLi5yZXN0IH0sIHJlZikgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8U3R5bGVkRWxlbWVudFxuICAgICAgICBkYXRhLWZyZXNjby1pZD17YHR5cG9ncmFwaHkucGFyYWdyYXBoLiR7c2l6ZX1gfVxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgey4uLnJlc3R9XG4gICAgICA+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBkYXRhLWZyZXNjby1pZD17YHR5cG9ncmFwaHkucGFyYWdyYXBoLiR7c2l6ZX0uY29udGVudGB9XG4gICAgICAgICAgYXM9XCJzcGFuXCJcbiAgICAgICAgICBjaGlsZHJlbj17Y2hpbGRyZW59XG4gICAgICAgICAgY3NzPXtbXG4gICAgICAgICAgICBjbGFtcCA+IDAgJiYge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBcIi13ZWJraXQtYm94XCIsXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICB0ZXh0T3ZlcmZsb3c6IFwiZWxsaXBzaXNcIixcbiAgICAgICAgICAgICAgV2Via2l0Qm94T3JpZW50OiBcInZlcnRpY2FsXCIsXG4gICAgICAgICAgICAgIE1vekJveE9yaWVudDogXCJ2ZXJ0aWNhbFwiLFxuICAgICAgICAgICAgICBXZWJraXRMaW5lQ2xhbXA6IGNsYW1wLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVsbGlwc2lzICYmIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLFxuICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgICAgICAgdGV4dE92ZXJmbG93OiBcImVsbGlwc2lzXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF19XG4gICAgICAgIC8+XG4gICAgICA8L1N0eWxlZEVsZW1lbnQ+XG4gICAgKTtcbiAgfVxuKTtcblxuUGFyYWdyYXBoLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzcGxheTogXCJibG9ja1wiLFxuICBzaXplOiA1MDAsXG4gIGNvbG9yOiBcImxhYmVsLjBcIixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhcmFncmFwaDtcbiJdfQ== */"))
  }));
});
Paragraph.defaultProps = {
  display: "block",
  size: 500,
  color: "label.0"
};

var StyledElement$2 = /*#__PURE__*/createStyled("span", {
  shouldForwardProp: shouldForwardProp,
  target: "edy1mjt0",
  label: "StyledElement"
})(variant({
  prop: "size",
  scale: "text"
}), compose(COMMON, BORDER, TYPOGRAPHY, LAYOUT, POSITION, FLEX, GRID), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRleHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JzQiIsImZpbGUiOiJUZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHNob3VsZEZvcndhcmRQcm9wIGZyb20gXCJAc3R5bGVkLXN5c3RlbS9zaG91bGQtZm9yd2FyZC1wcm9wXCI7XG5pbXBvcnQgeyBjb21wb3NlLCB2YXJpYW50IH0gZnJvbSBcInN0eWxlZC1zeXN0ZW1cIjtcblxuaW1wb3J0IHsgQm94IH0gZnJvbSBcIi4uLy4uL2JveFwiO1xuaW1wb3J0IHtcbiAgQ09NTU9OLFxuICBCT1JERVIsXG4gIFRZUE9HUkFQSFksXG4gIExBWU9VVCxcbiAgUE9TSVRJT04sXG4gIEZMRVgsXG4gIEdSSUQsXG59IGZyb20gXCIuLi8uLi9zeXN0ZW1Qcm9wc1wiO1xuXG5jb25zdCBTdHlsZWRFbGVtZW50ID0gc3R5bGVkKFwic3BhblwiLCB7IHNob3VsZEZvcndhcmRQcm9wIH0pKFxuICB2YXJpYW50KHtcbiAgICBwcm9wOiBcInNpemVcIixcbiAgICBzY2FsZTogXCJ0ZXh0XCIsXG4gIH0pLFxuICBjb21wb3NlKENPTU1PTiwgQk9SREVSLCBUWVBPR1JBUEhZLCBMQVlPVVQsIFBPU0lUSU9OLCBGTEVYLCBHUklEKVxuKTtcblxuY29uc3QgVGV4dCA9IGZvcndhcmRSZWYoKHsgY2hpbGRyZW4sIGVsbGlwc2lzLCBjbGFtcCwgc2l6ZSwgLi4ucmVzdCB9LCByZWYpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkRWxlbWVudFxuICAgICAgZGF0YS1mcmVzY28taWQ9e2B0eXBvZ3JhcGh5LnRleHQuJHtzaXplfWB9XG4gICAgICByZWY9e3JlZn1cbiAgICAgIHNpemU9e3NpemV9XG4gICAgICB7Li4ucmVzdH1cbiAgICA+XG4gICAgICA8Qm94XG4gICAgICAgIGRhdGEtZnJlc2NvLWlkPXtgdHlwb2dyYXBoeS50ZXh0LiR7c2l6ZX0uY29udGVudGB9XG4gICAgICAgIGFzPVwic3BhblwiXG4gICAgICAgIGNoaWxkcmVuPXtjaGlsZHJlbn1cbiAgICAgICAgY3NzPXtbXG4gICAgICAgICAgY2xhbXAgPiAwICYmIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiLXdlYmtpdC1ib3hcIixcbiAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICAgICAgdGV4dE92ZXJmbG93OiBcImVsbGlwc2lzXCIsXG4gICAgICAgICAgICBXZWJraXRCb3hPcmllbnQ6IFwidmVydGljYWxcIixcbiAgICAgICAgICAgIE1vekJveE9yaWVudDogXCJ2ZXJ0aWNhbFwiLFxuICAgICAgICAgICAgV2Via2l0TGluZUNsYW1wOiBjbGFtcCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVsbGlwc2lzICYmIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgICAgICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG4gICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgICAgIHRleHRPdmVyZmxvdzogXCJlbGxpcHNpc1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgIF19XG4gICAgICAvPlxuICAgIDwvU3R5bGVkRWxlbWVudD5cbiAgKTtcbn0pO1xuXG5UZXh0LmRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzcGxheTogXCJibG9ja1wiLFxuICBzaXplOiA1MDAsXG4gIGNvbG9yOiBcImxhYmVsLjBcIixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRleHQ7XG4iXX0= */");

var Text = forwardRef(function (_ref, ref) {
  var children = _ref.children,
      ellipsis = _ref.ellipsis,
      clamp = _ref.clamp,
      size = _ref.size,
      rest = _objectWithoutProperties(_ref, ["children", "ellipsis", "clamp", "size"]);

  return jsx(StyledElement$2, _extends({
    "data-fresco-id": "typography.text.".concat(size),
    ref: ref,
    size: size
  }, rest), jsx(Box, {
    "data-fresco-id": "typography.text.".concat(size, ".content"),
    as: "span",
    children: children,
    css: /*#__PURE__*/css$1([clamp > 0 && {
      display: "-webkit-box",
      overflow: "hidden",
      textOverflow: "ellipsis",
      WebkitBoxOrient: "vertical",
      MozBoxOrient: "vertical",
      WebkitLineClamp: clamp
    }, ellipsis && {
      display: "block",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }], ";label:Text;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRleHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0NRIiwiZmlsZSI6IlRleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgc2hvdWxkRm9yd2FyZFByb3AgZnJvbSBcIkBzdHlsZWQtc3lzdGVtL3Nob3VsZC1mb3J3YXJkLXByb3BcIjtcbmltcG9ydCB7IGNvbXBvc2UsIHZhcmlhbnQgfSBmcm9tIFwic3R5bGVkLXN5c3RlbVwiO1xuXG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiLi4vLi4vYm94XCI7XG5pbXBvcnQge1xuICBDT01NT04sXG4gIEJPUkRFUixcbiAgVFlQT0dSQVBIWSxcbiAgTEFZT1VULFxuICBQT1NJVElPTixcbiAgRkxFWCxcbiAgR1JJRCxcbn0gZnJvbSBcIi4uLy4uL3N5c3RlbVByb3BzXCI7XG5cbmNvbnN0IFN0eWxlZEVsZW1lbnQgPSBzdHlsZWQoXCJzcGFuXCIsIHsgc2hvdWxkRm9yd2FyZFByb3AgfSkoXG4gIHZhcmlhbnQoe1xuICAgIHByb3A6IFwic2l6ZVwiLFxuICAgIHNjYWxlOiBcInRleHRcIixcbiAgfSksXG4gIGNvbXBvc2UoQ09NTU9OLCBCT1JERVIsIFRZUE9HUkFQSFksIExBWU9VVCwgUE9TSVRJT04sIEZMRVgsIEdSSUQpXG4pO1xuXG5jb25zdCBUZXh0ID0gZm9yd2FyZFJlZigoeyBjaGlsZHJlbiwgZWxsaXBzaXMsIGNsYW1wLCBzaXplLCAuLi5yZXN0IH0sIHJlZikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxTdHlsZWRFbGVtZW50XG4gICAgICBkYXRhLWZyZXNjby1pZD17YHR5cG9ncmFwaHkudGV4dC4ke3NpemV9YH1cbiAgICAgIHJlZj17cmVmfVxuICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgIHsuLi5yZXN0fVxuICAgID5cbiAgICAgIDxCb3hcbiAgICAgICAgZGF0YS1mcmVzY28taWQ9e2B0eXBvZ3JhcGh5LnRleHQuJHtzaXplfS5jb250ZW50YH1cbiAgICAgICAgYXM9XCJzcGFuXCJcbiAgICAgICAgY2hpbGRyZW49e2NoaWxkcmVufVxuICAgICAgICBjc3M9e1tcbiAgICAgICAgICBjbGFtcCA+IDAgJiYge1xuICAgICAgICAgICAgZGlzcGxheTogXCItd2Via2l0LWJveFwiLFxuICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICB0ZXh0T3ZlcmZsb3c6IFwiZWxsaXBzaXNcIixcbiAgICAgICAgICAgIFdlYmtpdEJveE9yaWVudDogXCJ2ZXJ0aWNhbFwiLFxuICAgICAgICAgICAgTW96Qm94T3JpZW50OiBcInZlcnRpY2FsXCIsXG4gICAgICAgICAgICBXZWJraXRMaW5lQ2xhbXA6IGNsYW1wLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZWxsaXBzaXMgJiYge1xuICAgICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgICAgICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcbiAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICAgICAgdGV4dE92ZXJmbG93OiBcImVsbGlwc2lzXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXX1cbiAgICAgIC8+XG4gICAgPC9TdHlsZWRFbGVtZW50PlxuICApO1xufSk7XG5cblRleHQuZGVmYXVsdFByb3BzID0ge1xuICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gIHNpemU6IDUwMCxcbiAgY29sb3I6IFwibGFiZWwuMFwiLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dDtcbiJdfQ== */"))
  }));
});
Text.defaultProps = {
  display: "block",
  size: 500,
  color: "label.0"
};

function _extends$2() {
  _extends$2 = Object.assign || function (target) {
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

  return _extends$2.apply(this, arguments);
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

function _isNativeReflectConstruct() {
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
  if (_isNativeReflectConstruct()) {
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
  "72": "Passed invalid base value %s to %s(), please pass a value like \"12px\" or 12.\n\n",
  "73": "Please provide a valid CSS variable.\n\n",
  "74": "CSS variable not found.\n"
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


var PolishedError = /*#__PURE__*/function (_Error) {
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
}( /*#__PURE__*/_wrapNativeSuper(Error));

/**
 * CSS to hide content visually but remain accessible to screen readers.
 * from [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate/blob/9a176f57af1cfe8ec70300da4621fb9b07e5fa31/src/css/main.css#L121)
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...hideVisually(),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${hideVisually()};
 * `
 *
 * // CSS as JS Output
 *
 * 'div': {
 *   'border': '0',
 *   'clip': 'rect(0 0 0 0)',
 *   'height': '1px',
 *   'margin': '-1px',
 *   'overflow': 'hidden',
 *   'padding': '0',
 *   'position': 'absolute',
 *   'whiteSpace': 'nowrap',
 *   'width': '1px',
 * }
 */
function hideVisually() {
  return {
    border: '0',
    clip: 'rect(0 0 0 0)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: '0',
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: '1px'
  };
}

/**
 * CSS to normalize abnormalities across browsers (normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css)
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *    ...normalize(),
 * }
 *
 * // styled-components usage
 * const GlobalStyle = createGlobalStyle`${normalize()}`
 *
 * // CSS as JS Output
 *
 * html {
 *   lineHeight: 1.15,
 *   textSizeAdjust: 100%,
 * } ...
 */
function normalize() {
  var _ref;

  return [(_ref = {
    html: {
      lineHeight: '1.15',
      textSizeAdjust: '100%'
    },
    body: {
      margin: '0'
    },
    main: {
      display: 'block'
    },
    h1: {
      fontSize: '2em',
      margin: '0.67em 0'
    },
    hr: {
      boxSizing: 'content-box',
      height: '0',
      overflow: 'visible'
    },
    pre: {
      fontFamily: 'monospace, monospace',
      fontSize: '1em'
    },
    a: {
      backgroundColor: 'transparent'
    },
    'abbr[title]': {
      borderBottom: 'none',
      textDecoration: 'underline'
    }
  }, _ref["b,\n    strong"] = {
    fontWeight: 'bolder'
  }, _ref["code,\n    kbd,\n    samp"] = {
    fontFamily: 'monospace, monospace',
    fontSize: '1em'
  }, _ref.small = {
    fontSize: '80%'
  }, _ref["sub,\n    sup"] = {
    fontSize: '75%',
    lineHeight: '0',
    position: 'relative',
    verticalAlign: 'baseline'
  }, _ref.sub = {
    bottom: '-0.25em'
  }, _ref.sup = {
    top: '-0.5em'
  }, _ref.img = {
    borderStyle: 'none'
  }, _ref["button,\n    input,\n    optgroup,\n    select,\n    textarea"] = {
    fontFamily: 'inherit',
    fontSize: '100%',
    lineHeight: '1.15',
    margin: '0'
  }, _ref["button,\n    input"] = {
    overflow: 'visible'
  }, _ref["button,\n    select"] = {
    textTransform: 'none'
  }, _ref["button,\n    html [type=\"button\"],\n    [type=\"reset\"],\n    [type=\"submit\"]"] = {
    WebkitAppearance: 'button'
  }, _ref["button::-moz-focus-inner,\n    [type=\"button\"]::-moz-focus-inner,\n    [type=\"reset\"]::-moz-focus-inner,\n    [type=\"submit\"]::-moz-focus-inner"] = {
    borderStyle: 'none',
    padding: '0'
  }, _ref["button:-moz-focusring,\n    [type=\"button\"]:-moz-focusring,\n    [type=\"reset\"]:-moz-focusring,\n    [type=\"submit\"]:-moz-focusring"] = {
    outline: '1px dotted ButtonText'
  }, _ref.fieldset = {
    padding: '0.35em 0.625em 0.75em'
  }, _ref.legend = {
    boxSizing: 'border-box',
    color: 'inherit',
    display: 'table',
    maxWidth: '100%',
    padding: '0',
    whiteSpace: 'normal'
  }, _ref.progress = {
    verticalAlign: 'baseline'
  }, _ref.textarea = {
    overflow: 'auto'
  }, _ref["[type=\"checkbox\"],\n    [type=\"radio\"]"] = {
    boxSizing: 'border-box',
    padding: '0'
  }, _ref["[type=\"number\"]::-webkit-inner-spin-button,\n    [type=\"number\"]::-webkit-outer-spin-button"] = {
    height: 'auto'
  }, _ref['[type="search"]'] = {
    WebkitAppearance: 'textfield',
    outlineOffset: '-2px'
  }, _ref['[type="search"]::-webkit-search-decoration'] = {
    WebkitAppearance: 'none'
  }, _ref['::-webkit-file-upload-button'] = {
    WebkitAppearance: 'button',
    font: 'inherit'
  }, _ref.details = {
    display: 'block'
  }, _ref.summary = {
    display: 'list-item'
  }, _ref.template = {
    display: 'none'
  }, _ref['[hidden]'] = {
    display: 'none'
  }, _ref), {
    'abbr[title]': {
      textDecoration: 'underline dotted'
    }
  }];
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

/**
 * Returns a string value for the color. The returned result is the smallest possible hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgb(255, 205, 100),
 *   background: rgb({ red: 255, green: 205, blue: 100 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgb(255, 205, 100)};
 *   background: ${rgb({ red: 255, green: 205, blue: 100 })};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#ffcd64";
 *   background: "#ffcd64";
 * }
 */
function rgb(value, green, blue) {
  if (typeof value === 'number' && typeof green === 'number' && typeof blue === 'number') {
    return reduceHexValue("#" + numberToHex(value) + numberToHex(green) + numberToHex(blue));
  } else if (typeof value === 'object' && green === undefined && blue === undefined) {
    return reduceHexValue("#" + numberToHex(value.red) + numberToHex(value.green) + numberToHex(value.blue));
  }

  throw new PolishedError(6);
}

/**
 * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
 *
 * Can also be used to fade a color by passing a hex value or named CSS color along with an alpha value.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgba(255, 205, 100, 0.7),
 *   background: rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 }),
 *   background: rgba(255, 205, 100, 1),
 *   background: rgba('#ffffff', 0.4),
 *   background: rgba('black', 0.7),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgba(255, 205, 100, 0.7)};
 *   background: ${rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 })};
 *   background: ${rgba(255, 205, 100, 1)};
 *   background: ${rgba('#ffffff', 0.4)};
 *   background: ${rgba('black', 0.7)};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(255,205,100,0.7)";
 *   background: "rgba(255,205,100,0.7)";
 *   background: "#ffcd64";
 *   background: "rgba(255,255,255,0.4)";
 *   background: "rgba(0,0,0,0.7)";
 * }
 */
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

function buttonStyles(appearance, intent, theme) {
  var intents = {
    default: {
      base: theme.colors.label[0],
      contrast: theme.colors.background[0]
    },
    primary: {
      base: theme.colors.tint.blue,
      contrast: theme.colors.fixed.white
    },
    success: {
      base: theme.colors.tint.green,
      contrast: theme.colors.fixed.white
    },
    warning: {
      base: theme.colors.tint.orange,
      contrast: theme.colors.fixed.white
    },
    danger: {
      base: theme.colors.tint.red,
      contrast: theme.colors.fixed.white
    }
  };

  switch (appearance) {
    case "primary":
      if (intent === "default") return {
        color: theme.colors.label[0],
        backgroundColor: theme.colors.groupedBackground[1],
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 0 1px 0 rgba(0, 0, 0, 0.1)",
        transition: "background-color 200ms ease-out",
        '&.isHovering, &:focus, &:focus-within, &[aria-expanded="true"]': {
          backgroundColor: theme.colors.groupedBackground[0]
        }
      };else return {
        color: intents[intent].contrast,
        backgroundColor: intents[intent].base,
        transition: "background-color 200ms ease-out",
        '&.isHovering, &:focus, &:focus-within, &[aria-expanded="true"]': {
          backgroundColor: rgba(intents[intent].base, 3 / 4)
        }
      };

    case "minimal":
      return {
        color: intents[intent].base,
        backgroundColor: "transparent",
        transition: "background-color 200ms ease-out",
        '&.isHovering, &:focus, &:focus-within, &[aria-expanded="true"]': {
          backgroundColor: theme.colors.fill[2]
        }
      };

    case "subtle":
      return {
        color: intents[intent].base,
        backgroundColor: theme.colors.fill[3],
        transition: "background-color 200ms ease-out",
        '&.isHovering, &:focus, &:focus-within, &[aria-expanded="true"]': {
          backgroundColor: theme.colors.fill[1]
        }
      };

    default:
      return {
        color: intents[intent].base,
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: theme.colors.fill[1],
        transition: "background-color 200ms ease-out",
        '&.isHovering, &:focus, &:focus-within, &[aria-expanded="true"]': {
          backgroundColor: theme.colors.fill[0]
        }
      };
  }
}

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref2 = process.env.NODE_ENV === "production" ? {
  name: "1onzmaz-Button",
  styles: "transform:translate(-50%, -50%);;label:Button;"
} : {
  name: "1onzmaz-Button",
  styles: "transform:translate(-50%, -50%);;label:Button;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzSFkiLCJmaWxlIjoiQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBCdXR0b25cbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSBcImVtb3Rpb24tdGhlbWluZ1wiO1xuXG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiLi4vLi4vYm94XCI7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSBcIi4uLy4uL2ljb25cIjtcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tIFwiLi4vLi4vc3Bpbm5lclwiO1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gXCIuLi8uLi90eXBvZ3JhcGh5XCI7XG5cbmltcG9ydCBidXR0b25TdHlsZXMgZnJvbSBcIi4vdXRpbHMvYnV0dG9uU3R5bGVzXCI7XG5cbmNvbnN0IEJ1dHRvbiA9IGZvcndhcmRSZWYoXG4gIChcbiAgICB7XG4gICAgICBhcyA9IFwiYnV0dG9uXCIsXG4gICAgICBhcHBlYXJhbmNlID0gXCJkZWZhdWx0XCIsXG4gICAgICBpbnRlbnQgPSBcImRlZmF1bHRcIixcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgaGVpZ2h0ID0gNDAsXG4gICAgICBpY29uQmVmb3JlLFxuICAgICAgaWNvbkFmdGVyLFxuICAgICAgbG9hZGluZyxcbiAgICAgIHJvdW5kLFxuICAgICAgdGhlbWUsXG4gICAgICAuLi5yZXN0XG4gICAgfSxcbiAgICByZWZcbiAgKSA9PiB7XG4gICAgY29uc3QgW2lzSG92ZXJpbmcsIHNldElzSG92ZXJpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgZ2V0VGV4dFNpemVGb3JDb250cm9sSGVpZ2h0ID0gKGhlaWdodCkgPT4ge1xuICAgICAgaWYgKGhlaWdodCA8PSAyNCkgcmV0dXJuIDMwMDtcbiAgICAgIGlmIChoZWlnaHQgPD0gMjgpIHJldHVybiAzMDA7XG4gICAgICBpZiAoaGVpZ2h0IDw9IDMyKSByZXR1cm4gNDAwO1xuICAgICAgaWYgKGhlaWdodCA8PSAzNikgcmV0dXJuIDQwMDtcbiAgICAgIGlmIChoZWlnaHQgPD0gNDApIHJldHVybiA0MDA7XG4gICAgICByZXR1cm4gNTAwO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRJY29uU2l6ZUZvckJ1dHRvbiA9IChoZWlnaHQpID0+IHtcbiAgICAgIGlmIChoZWlnaHQgPD0gMjgpIHJldHVybiAxMjtcbiAgICAgIGlmIChoZWlnaHQgPD0gMzIpIHJldHVybiAxMjtcbiAgICAgIGlmIChoZWlnaHQgPD0gNDApIHJldHVybiAxNjtcbiAgICAgIGlmIChoZWlnaHQgPD0gNDgpIHJldHVybiAxODtcbiAgICAgIHJldHVybiAyMDtcbiAgICB9O1xuXG4gICAgY29uc3QgSUNPTl9TSVpFID0gZ2V0SWNvblNpemVGb3JCdXR0b24oaGVpZ2h0KTtcbiAgICBjb25zdCBQQURESU5HID0gTWF0aC5yb3VuZChoZWlnaHQgLyAzKSArIFwicHhcIjtcbiAgICBjb25zdCBURVhUX1NJWkUgPSBnZXRUZXh0U2l6ZUZvckNvbnRyb2xIZWlnaHQoaGVpZ2h0KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94XG4gICAgICAgIGRhdGEtZnJlc2NvLWlkPVwiYnV0dG9uXCJcbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgIGFzPXthc31cbiAgICAgICAgY2xhc3NOYW1lPXtpc0hvdmVyaW5nID09PSB0cnVlID8gXCJpc0hvdmVyaW5nXCIgOiB1bmRlZmluZWR9XG4gICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgICAgICBkaXNwbGF5PVwiaW5saW5lLWZsZXhcIlxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICBmbGV4V3JhcD1cIm5vd3JhcFwiXG4gICAgICAgIGhlaWdodD17aGVpZ2h0ICsgXCJweFwifVxuICAgICAgICBweD17UEFERElOR31cbiAgICAgICAgYm9yZGVyUmFkaXVzPXtyb3VuZCA/IFwicm91bmRcIiA6IFwiY29ybmVycy4yXCJ9XG4gICAgICAgIG92ZXJmbG93PVwiaGlkZGVuXCJcbiAgICAgICAgLy8gbGluZUhlaWdodD17aGVpZ2h0ICsgXCJweFwifVxuICAgICAgICBjc3M9e3tcbiAgICAgICAgICAuLi5idXR0b25TdHlsZXMoYXBwZWFyYW5jZSwgaW50ZW50LCB0aGVtZSA/IHRoZW1lIDogdXNlVGhlbWUoKSksXG4gICAgICAgICAgdXNlclNlbGVjdDogXCJub25lXCIsXG4gICAgICAgICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcbiAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgICAgIFwiJjpmb2N1c1wiOiB7IG91dGxpbmU6IDAgfSxcbiAgICAgICAgICBcIiY6ZGlzYWJsZWRcIjogeyBvcGFjaXR5OiAwLjUsIHBvaW50ZXJFdmVudHM6IFwibm9uZVwiIH0sXG4gICAgICAgIH19XG4gICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SXNIb3ZlcmluZyh0cnVlKX1cbiAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRJc0hvdmVyaW5nKGZhbHNlKX1cbiAgICAgICAgey4uLnJlc3R9XG4gICAgICA+XG4gICAgICAgIHtpY29uQmVmb3JlICYmIChcbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBkYXRhLWZyZXNjby1pZD1cImJ1dHRvbi5pY29uQmVmb3JlXCJcbiAgICAgICAgICAgIGFzPVwic3BhblwiXG4gICAgICAgICAgICBwcj1cInNwYWNpbmcuMlwiXG4gICAgICAgICAgICBzdHlsZT17eyBvcGFjaXR5OiBsb2FkaW5nICYmIDAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SWNvbiBzeW1ib2w9e2ljb25CZWZvcmV9IHNpemU9e0lDT05fU0laRX0gY29sb3I9XCJjdXJyZW50Q29sb3JcIiAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApfVxuICAgICAgICA8VGV4dFxuICAgICAgICAgIGRhdGEtZnJlc2NvLWlkPVwiYnV0dG9uLmNvbnRlbnRcIlxuICAgICAgICAgIGFzPVwic3BhblwiXG4gICAgICAgICAgc2l6ZT17VEVYVF9TSVpFfVxuICAgICAgICAgIGZvbnRXZWlnaHQ9ezYwMH1cbiAgICAgICAgICBjb2xvcj1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgc3R5bGU9e3sgb3BhY2l0eTogbG9hZGluZyAmJiAwIH19XG4gICAgICAgID5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAge2ljb25BZnRlciAmJiAoXG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgZGF0YS1mcmVzY28taWQ9XCJidXR0b24uaWNvbkFmdGVyXCJcbiAgICAgICAgICAgIGFzPVwic3BhblwiXG4gICAgICAgICAgICBwbD1cInNwYWNpbmcuMlwiXG4gICAgICAgICAgICBzdHlsZT17eyBvcGFjaXR5OiBsb2FkaW5nICYmIDAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SWNvbiBzeW1ib2w9e2ljb25BZnRlcn0gc2l6ZT17SUNPTl9TSVpFfSBjb2xvcj1cImN1cnJlbnRDb2xvclwiIC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICl9XG4gICAgICAgIHtsb2FkaW5nICYmIChcbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBkYXRhLWZyZXNjby1pZD1cImJ1dHRvbi5zcGlubmVyXCJcbiAgICAgICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgICAgICAgdG9wPVwiNTAlXCJcbiAgICAgICAgICAgIGxlZnQ9XCI1MCVcIlxuICAgICAgICAgICAgY3NzPXt7IHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxTcGlubmVyIHNpemU9e2hlaWdodCAvIDJ9IGNvbG9yPVwiY3VycmVudENvbG9yXCIgLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKX1cbiAgICAgIDwvQm94PlxuICAgICk7XG4gIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var Button = forwardRef(function (_ref, ref) {
  var _ref$as = _ref.as,
      as = _ref$as === void 0 ? "button" : _ref$as,
      _ref$appearance = _ref.appearance,
      appearance = _ref$appearance === void 0 ? "default" : _ref$appearance,
      _ref$intent = _ref.intent,
      intent = _ref$intent === void 0 ? "default" : _ref$intent,
      children = _ref.children,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 40 : _ref$height,
      iconBefore = _ref.iconBefore,
      iconAfter = _ref.iconAfter,
      loading = _ref.loading,
      round = _ref.round,
      theme = _ref.theme,
      rest = _objectWithoutProperties(_ref, ["as", "appearance", "intent", "children", "height", "iconBefore", "iconAfter", "loading", "round", "theme"]);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isHovering = _useState2[0],
      setIsHovering = _useState2[1];

  var getTextSizeForControlHeight = function getTextSizeForControlHeight(height) {
    if (height <= 24) return 300;
    if (height <= 28) return 300;
    if (height <= 32) return 400;
    if (height <= 36) return 400;
    if (height <= 40) return 400;
    return 500;
  };

  var getIconSizeForButton = function getIconSizeForButton(height) {
    if (height <= 28) return 12;
    if (height <= 32) return 12;
    if (height <= 40) return 16;
    if (height <= 48) return 18;
    return 20;
  };

  var ICON_SIZE = getIconSizeForButton(height);
  var PADDING = Math.round(height / 3) + "px";
  var TEXT_SIZE = getTextSizeForControlHeight(height);
  return jsx(Box, _extends({
    "data-fresco-id": "button",
    ref: ref,
    as: as,
    className: isHovering === true ? "isHovering" : undefined,
    position: "relative",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "nowrap",
    height: height + "px",
    px: PADDING,
    borderRadius: round ? "round" : "corners.2",
    overflow: "hidden" // lineHeight={height + "px"}
    ,
    css: /*#__PURE__*/css$1(_objectSpread2({}, buttonStyles(appearance, intent, theme ? theme : useTheme()), {
      userSelect: "none",
      whiteSpace: "nowrap",
      cursor: "pointer",
      "&:focus": {
        outline: 0
      },
      "&:disabled": {
        opacity: 0.5,
        pointerEvents: "none"
      }
    }), ";label:Button;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRVEiLCJmaWxlIjoiQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBCdXR0b25cbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSBcImVtb3Rpb24tdGhlbWluZ1wiO1xuXG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiLi4vLi4vYm94XCI7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSBcIi4uLy4uL2ljb25cIjtcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tIFwiLi4vLi4vc3Bpbm5lclwiO1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gXCIuLi8uLi90eXBvZ3JhcGh5XCI7XG5cbmltcG9ydCBidXR0b25TdHlsZXMgZnJvbSBcIi4vdXRpbHMvYnV0dG9uU3R5bGVzXCI7XG5cbmNvbnN0IEJ1dHRvbiA9IGZvcndhcmRSZWYoXG4gIChcbiAgICB7XG4gICAgICBhcyA9IFwiYnV0dG9uXCIsXG4gICAgICBhcHBlYXJhbmNlID0gXCJkZWZhdWx0XCIsXG4gICAgICBpbnRlbnQgPSBcImRlZmF1bHRcIixcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgaGVpZ2h0ID0gNDAsXG4gICAgICBpY29uQmVmb3JlLFxuICAgICAgaWNvbkFmdGVyLFxuICAgICAgbG9hZGluZyxcbiAgICAgIHJvdW5kLFxuICAgICAgdGhlbWUsXG4gICAgICAuLi5yZXN0XG4gICAgfSxcbiAgICByZWZcbiAgKSA9PiB7XG4gICAgY29uc3QgW2lzSG92ZXJpbmcsIHNldElzSG92ZXJpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgZ2V0VGV4dFNpemVGb3JDb250cm9sSGVpZ2h0ID0gKGhlaWdodCkgPT4ge1xuICAgICAgaWYgKGhlaWdodCA8PSAyNCkgcmV0dXJuIDMwMDtcbiAgICAgIGlmIChoZWlnaHQgPD0gMjgpIHJldHVybiAzMDA7XG4gICAgICBpZiAoaGVpZ2h0IDw9IDMyKSByZXR1cm4gNDAwO1xuICAgICAgaWYgKGhlaWdodCA8PSAzNikgcmV0dXJuIDQwMDtcbiAgICAgIGlmIChoZWlnaHQgPD0gNDApIHJldHVybiA0MDA7XG4gICAgICByZXR1cm4gNTAwO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRJY29uU2l6ZUZvckJ1dHRvbiA9IChoZWlnaHQpID0+IHtcbiAgICAgIGlmIChoZWlnaHQgPD0gMjgpIHJldHVybiAxMjtcbiAgICAgIGlmIChoZWlnaHQgPD0gMzIpIHJldHVybiAxMjtcbiAgICAgIGlmIChoZWlnaHQgPD0gNDApIHJldHVybiAxNjtcbiAgICAgIGlmIChoZWlnaHQgPD0gNDgpIHJldHVybiAxODtcbiAgICAgIHJldHVybiAyMDtcbiAgICB9O1xuXG4gICAgY29uc3QgSUNPTl9TSVpFID0gZ2V0SWNvblNpemVGb3JCdXR0b24oaGVpZ2h0KTtcbiAgICBjb25zdCBQQURESU5HID0gTWF0aC5yb3VuZChoZWlnaHQgLyAzKSArIFwicHhcIjtcbiAgICBjb25zdCBURVhUX1NJWkUgPSBnZXRUZXh0U2l6ZUZvckNvbnRyb2xIZWlnaHQoaGVpZ2h0KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94XG4gICAgICAgIGRhdGEtZnJlc2NvLWlkPVwiYnV0dG9uXCJcbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgIGFzPXthc31cbiAgICAgICAgY2xhc3NOYW1lPXtpc0hvdmVyaW5nID09PSB0cnVlID8gXCJpc0hvdmVyaW5nXCIgOiB1bmRlZmluZWR9XG4gICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgICAgICBkaXNwbGF5PVwiaW5saW5lLWZsZXhcIlxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICBmbGV4V3JhcD1cIm5vd3JhcFwiXG4gICAgICAgIGhlaWdodD17aGVpZ2h0ICsgXCJweFwifVxuICAgICAgICBweD17UEFERElOR31cbiAgICAgICAgYm9yZGVyUmFkaXVzPXtyb3VuZCA/IFwicm91bmRcIiA6IFwiY29ybmVycy4yXCJ9XG4gICAgICAgIG92ZXJmbG93PVwiaGlkZGVuXCJcbiAgICAgICAgLy8gbGluZUhlaWdodD17aGVpZ2h0ICsgXCJweFwifVxuICAgICAgICBjc3M9e3tcbiAgICAgICAgICAuLi5idXR0b25TdHlsZXMoYXBwZWFyYW5jZSwgaW50ZW50LCB0aGVtZSA/IHRoZW1lIDogdXNlVGhlbWUoKSksXG4gICAgICAgICAgdXNlclNlbGVjdDogXCJub25lXCIsXG4gICAgICAgICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcbiAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgICAgIFwiJjpmb2N1c1wiOiB7IG91dGxpbmU6IDAgfSxcbiAgICAgICAgICBcIiY6ZGlzYWJsZWRcIjogeyBvcGFjaXR5OiAwLjUsIHBvaW50ZXJFdmVudHM6IFwibm9uZVwiIH0sXG4gICAgICAgIH19XG4gICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SXNIb3ZlcmluZyh0cnVlKX1cbiAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRJc0hvdmVyaW5nKGZhbHNlKX1cbiAgICAgICAgey4uLnJlc3R9XG4gICAgICA+XG4gICAgICAgIHtpY29uQmVmb3JlICYmIChcbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBkYXRhLWZyZXNjby1pZD1cImJ1dHRvbi5pY29uQmVmb3JlXCJcbiAgICAgICAgICAgIGFzPVwic3BhblwiXG4gICAgICAgICAgICBwcj1cInNwYWNpbmcuMlwiXG4gICAgICAgICAgICBzdHlsZT17eyBvcGFjaXR5OiBsb2FkaW5nICYmIDAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SWNvbiBzeW1ib2w9e2ljb25CZWZvcmV9IHNpemU9e0lDT05fU0laRX0gY29sb3I9XCJjdXJyZW50Q29sb3JcIiAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApfVxuICAgICAgICA8VGV4dFxuICAgICAgICAgIGRhdGEtZnJlc2NvLWlkPVwiYnV0dG9uLmNvbnRlbnRcIlxuICAgICAgICAgIGFzPVwic3BhblwiXG4gICAgICAgICAgc2l6ZT17VEVYVF9TSVpFfVxuICAgICAgICAgIGZvbnRXZWlnaHQ9ezYwMH1cbiAgICAgICAgICBjb2xvcj1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgc3R5bGU9e3sgb3BhY2l0eTogbG9hZGluZyAmJiAwIH19XG4gICAgICAgID5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAge2ljb25BZnRlciAmJiAoXG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgZGF0YS1mcmVzY28taWQ9XCJidXR0b24uaWNvbkFmdGVyXCJcbiAgICAgICAgICAgIGFzPVwic3BhblwiXG4gICAgICAgICAgICBwbD1cInNwYWNpbmcuMlwiXG4gICAgICAgICAgICBzdHlsZT17eyBvcGFjaXR5OiBsb2FkaW5nICYmIDAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SWNvbiBzeW1ib2w9e2ljb25BZnRlcn0gc2l6ZT17SUNPTl9TSVpFfSBjb2xvcj1cImN1cnJlbnRDb2xvclwiIC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICl9XG4gICAgICAgIHtsb2FkaW5nICYmIChcbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBkYXRhLWZyZXNjby1pZD1cImJ1dHRvbi5zcGlubmVyXCJcbiAgICAgICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgICAgICAgdG9wPVwiNTAlXCJcbiAgICAgICAgICAgIGxlZnQ9XCI1MCVcIlxuICAgICAgICAgICAgY3NzPXt7IHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxTcGlubmVyIHNpemU9e2hlaWdodCAvIDJ9IGNvbG9yPVwiY3VycmVudENvbG9yXCIgLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKX1cbiAgICAgIDwvQm94PlxuICAgICk7XG4gIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiJdfQ== */")),
    onMouseEnter: function onMouseEnter() {
      return setIsHovering(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setIsHovering(false);
    }
  }, rest), iconBefore && jsx(Box, {
    "data-fresco-id": "button.iconBefore",
    as: "span",
    pr: "spacing.2",
    style: {
      opacity: loading && 0
    }
  }, jsx(Icon, {
    symbol: iconBefore,
    size: ICON_SIZE,
    color: "currentColor"
  })), jsx(Text, {
    "data-fresco-id": "button.content",
    as: "span",
    size: TEXT_SIZE,
    fontWeight: 600,
    color: "currentColor",
    style: {
      opacity: loading && 0
    }
  }, children), iconAfter && jsx(Box, {
    "data-fresco-id": "button.iconAfter",
    as: "span",
    pl: "spacing.2",
    style: {
      opacity: loading && 0
    }
  }, jsx(Icon, {
    symbol: iconAfter,
    size: ICON_SIZE,
    color: "currentColor"
  })), loading && jsx(Box, {
    "data-fresco-id": "button.spinner",
    position: "absolute",
    top: "50%",
    left: "50%",
    css: _ref2
  }, jsx(Spinner, {
    size: height / 2,
    color: "currentColor"
  })));
});

function _EMOTION_STRINGIFIED_CSS_ERROR__$1() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref2$1 = process.env.NODE_ENV === "production" ? {
  name: "c45bg5-IconButton",
  styles: "transform:translate(-50%, -50%);;label:IconButton;"
} : {
  name: "c45bg5-IconButton",
  styles: "transform:translate(-50%, -50%);;label:IconButton;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkljb25CdXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUZZIiwiZmlsZSI6Ikljb25CdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEljb24gQnV0dG9uXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gXCJlbW90aW9uLXRoZW1pbmdcIjtcblxuaW1wb3J0IHsgQm94IH0gZnJvbSBcIi4uLy4uL2JveFwiO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gXCIuLi8uLi9pY29uXCI7XG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSBcIi4uLy4uL3NwaW5uZXJcIjtcblxuaW1wb3J0IGJ1dHRvblN0eWxlcyBmcm9tIFwiLi91dGlscy9idXR0b25TdHlsZXNcIjtcblxuY29uc3QgSWNvbkJ1dHRvbiA9IGZvcndhcmRSZWYoXG4gIChcbiAgICB7XG4gICAgICBhcyA9IFwiYnV0dG9uXCIsXG4gICAgICBhcHBlYXJhbmNlID0gXCJkZWZhdWx0XCIsXG4gICAgICBpbnRlbnQgPSBcImRlZmF1bHRcIixcbiAgICAgIGhlaWdodCA9IDQwLFxuICAgICAgbG9hZGluZyxcbiAgICAgIHN5bWJvbCxcbiAgICAgIHJvdW5kLFxuICAgICAgdGhlbWUsXG4gICAgICAuLi5yZXN0XG4gICAgfSxcbiAgICByZWZcbiAgKSA9PiB7XG4gICAgY29uc3QgW2lzSG92ZXJpbmcsIHNldElzSG92ZXJpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgZ2V0SWNvblNpemVGb3JCdXR0b24gPSAoaGVpZ2h0KSA9PiB7XG4gICAgICBpZiAoaGVpZ2h0IDw9IDI0KSByZXR1cm4gMTY7XG4gICAgICBpZiAoaGVpZ2h0IDw9IDI4KSByZXR1cm4gMTg7XG4gICAgICBpZiAoaGVpZ2h0IDw9IDMyKSByZXR1cm4gMjA7XG4gICAgICBpZiAoaGVpZ2h0IDw9IDQwKSByZXR1cm4gMjQ7XG4gICAgICBpZiAoaGVpZ2h0IDw9IDQ4KSByZXR1cm4gMjQ7XG4gICAgICByZXR1cm4gMjQ7XG4gICAgfTtcblxuICAgIGNvbnN0IElDT05fU0laRSA9IGdldEljb25TaXplRm9yQnV0dG9uKGhlaWdodCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveFxuICAgICAgICBkYXRhLWZyZXNjby1pZD1cImljb25CdXR0b25cIlxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgYXM9e2FzfVxuICAgICAgICBjbGFzc05hbWU9e2lzSG92ZXJpbmcgPT09IHRydWUgPyBcImlzSG92ZXJpbmdcIiA6IHVuZGVmaW5lZH1cbiAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgICAgIGRpc3BsYXk9XCJpbmxpbmUtZmxleFwiXG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgIGZsZXhXcmFwPVwibm93cmFwXCJcbiAgICAgICAgd2lkdGg9e2hlaWdodCArIFwicHhcIn1cbiAgICAgICAgaGVpZ2h0PXtoZWlnaHQgKyBcInB4XCJ9XG4gICAgICAgIGJvcmRlclJhZGl1cz17cm91bmQgPyBcInJvdW5kXCIgOiBcImNvcm5lcnMuMlwifVxuICAgICAgICBvdmVyZmxvdz1cImhpZGRlblwiXG4gICAgICAgIGZvbnRXZWlnaHQ9ezUwMH1cbiAgICAgICAgY3NzPXt7XG4gICAgICAgICAgLi4uYnV0dG9uU3R5bGVzKGFwcGVhcmFuY2UsIGludGVudCwgdGhlbWUgPyB0aGVtZSA6IHVzZVRoZW1lKCkpLFxuICAgICAgICAgIHVzZXJTZWxlY3Q6IFwibm9uZVwiLFxuICAgICAgICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG4gICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgICBcIiY6Zm9jdXNcIjogeyBvdXRsaW5lOiAwIH0sXG4gICAgICAgICAgXCImOmRpc2FibGVkXCI6IHsgb3BhY2l0eTogMC41LCBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIiB9LFxuICAgICAgICB9fVxuICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldElzSG92ZXJpbmcodHJ1ZSl9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SXNIb3ZlcmluZyhmYWxzZSl9XG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgPlxuICAgICAgICA8SWNvblxuICAgICAgICAgIHN5bWJvbD17c3ltYm9sfVxuICAgICAgICAgIHNpemU9e0lDT05fU0laRX1cbiAgICAgICAgICBjb2xvcj1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgc3R5bGU9e3sgb3BhY2l0eTogbG9hZGluZyAmJiAwIH19XG4gICAgICAgIC8+XG4gICAgICAgIHtsb2FkaW5nICYmIChcbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBkYXRhLWZyZXNjby1pZD1cImJ1dHRvbi5zcGlubmVyXCJcbiAgICAgICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgICAgICAgdG9wPVwiNTAlXCJcbiAgICAgICAgICAgIGxlZnQ9XCI1MCVcIlxuICAgICAgICAgICAgY3NzPXt7IHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxTcGlubmVyIHNpemU9e2hlaWdodCAvIDJ9IGNvbG9yPVwiY3VycmVudENvbG9yXCIgLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKX1cbiAgICAgIDwvQm94PlxuICAgICk7XG4gIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEljb25CdXR0b247XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$1
};

var IconButton = forwardRef(function (_ref, ref) {
  var _ref$as = _ref.as,
      as = _ref$as === void 0 ? "button" : _ref$as,
      _ref$appearance = _ref.appearance,
      appearance = _ref$appearance === void 0 ? "default" : _ref$appearance,
      _ref$intent = _ref.intent,
      intent = _ref$intent === void 0 ? "default" : _ref$intent,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 40 : _ref$height,
      loading = _ref.loading,
      symbol = _ref.symbol,
      round = _ref.round,
      theme = _ref.theme,
      rest = _objectWithoutProperties(_ref, ["as", "appearance", "intent", "height", "loading", "symbol", "round", "theme"]);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isHovering = _useState2[0],
      setIsHovering = _useState2[1];

  var getIconSizeForButton = function getIconSizeForButton(height) {
    if (height <= 24) return 16;
    if (height <= 28) return 18;
    if (height <= 32) return 20;
    if (height <= 40) return 24;
    if (height <= 48) return 24;
    return 24;
  };

  var ICON_SIZE = getIconSizeForButton(height);
  return jsx(Box, _extends({
    "data-fresco-id": "iconButton",
    ref: ref,
    as: as,
    className: isHovering === true ? "isHovering" : undefined,
    position: "relative",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "nowrap",
    width: height + "px",
    height: height + "px",
    borderRadius: round ? "round" : "corners.2",
    overflow: "hidden",
    fontWeight: 500,
    css: /*#__PURE__*/css$1(_objectSpread2({}, buttonStyles(appearance, intent, theme ? theme : useTheme()), {
      userSelect: "none",
      whiteSpace: "nowrap",
      cursor: "pointer",
      "&:focus": {
        outline: 0
      },
      "&:disabled": {
        opacity: 0.5,
        pointerEvents: "none"
      }
    }), ";label:IconButton;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkljb25CdXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeURRIiwiZmlsZSI6Ikljb25CdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEljb24gQnV0dG9uXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gXCJlbW90aW9uLXRoZW1pbmdcIjtcblxuaW1wb3J0IHsgQm94IH0gZnJvbSBcIi4uLy4uL2JveFwiO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gXCIuLi8uLi9pY29uXCI7XG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSBcIi4uLy4uL3NwaW5uZXJcIjtcblxuaW1wb3J0IGJ1dHRvblN0eWxlcyBmcm9tIFwiLi91dGlscy9idXR0b25TdHlsZXNcIjtcblxuY29uc3QgSWNvbkJ1dHRvbiA9IGZvcndhcmRSZWYoXG4gIChcbiAgICB7XG4gICAgICBhcyA9IFwiYnV0dG9uXCIsXG4gICAgICBhcHBlYXJhbmNlID0gXCJkZWZhdWx0XCIsXG4gICAgICBpbnRlbnQgPSBcImRlZmF1bHRcIixcbiAgICAgIGhlaWdodCA9IDQwLFxuICAgICAgbG9hZGluZyxcbiAgICAgIHN5bWJvbCxcbiAgICAgIHJvdW5kLFxuICAgICAgdGhlbWUsXG4gICAgICAuLi5yZXN0XG4gICAgfSxcbiAgICByZWZcbiAgKSA9PiB7XG4gICAgY29uc3QgW2lzSG92ZXJpbmcsIHNldElzSG92ZXJpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgZ2V0SWNvblNpemVGb3JCdXR0b24gPSAoaGVpZ2h0KSA9PiB7XG4gICAgICBpZiAoaGVpZ2h0IDw9IDI0KSByZXR1cm4gMTY7XG4gICAgICBpZiAoaGVpZ2h0IDw9IDI4KSByZXR1cm4gMTg7XG4gICAgICBpZiAoaGVpZ2h0IDw9IDMyKSByZXR1cm4gMjA7XG4gICAgICBpZiAoaGVpZ2h0IDw9IDQwKSByZXR1cm4gMjQ7XG4gICAgICBpZiAoaGVpZ2h0IDw9IDQ4KSByZXR1cm4gMjQ7XG4gICAgICByZXR1cm4gMjQ7XG4gICAgfTtcblxuICAgIGNvbnN0IElDT05fU0laRSA9IGdldEljb25TaXplRm9yQnV0dG9uKGhlaWdodCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveFxuICAgICAgICBkYXRhLWZyZXNjby1pZD1cImljb25CdXR0b25cIlxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgYXM9e2FzfVxuICAgICAgICBjbGFzc05hbWU9e2lzSG92ZXJpbmcgPT09IHRydWUgPyBcImlzSG92ZXJpbmdcIiA6IHVuZGVmaW5lZH1cbiAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgICAgIGRpc3BsYXk9XCJpbmxpbmUtZmxleFwiXG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgIGZsZXhXcmFwPVwibm93cmFwXCJcbiAgICAgICAgd2lkdGg9e2hlaWdodCArIFwicHhcIn1cbiAgICAgICAgaGVpZ2h0PXtoZWlnaHQgKyBcInB4XCJ9XG4gICAgICAgIGJvcmRlclJhZGl1cz17cm91bmQgPyBcInJvdW5kXCIgOiBcImNvcm5lcnMuMlwifVxuICAgICAgICBvdmVyZmxvdz1cImhpZGRlblwiXG4gICAgICAgIGZvbnRXZWlnaHQ9ezUwMH1cbiAgICAgICAgY3NzPXt7XG4gICAgICAgICAgLi4uYnV0dG9uU3R5bGVzKGFwcGVhcmFuY2UsIGludGVudCwgdGhlbWUgPyB0aGVtZSA6IHVzZVRoZW1lKCkpLFxuICAgICAgICAgIHVzZXJTZWxlY3Q6IFwibm9uZVwiLFxuICAgICAgICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG4gICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgICBcIiY6Zm9jdXNcIjogeyBvdXRsaW5lOiAwIH0sXG4gICAgICAgICAgXCImOmRpc2FibGVkXCI6IHsgb3BhY2l0eTogMC41LCBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIiB9LFxuICAgICAgICB9fVxuICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldElzSG92ZXJpbmcodHJ1ZSl9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SXNIb3ZlcmluZyhmYWxzZSl9XG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgPlxuICAgICAgICA8SWNvblxuICAgICAgICAgIHN5bWJvbD17c3ltYm9sfVxuICAgICAgICAgIHNpemU9e0lDT05fU0laRX1cbiAgICAgICAgICBjb2xvcj1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgc3R5bGU9e3sgb3BhY2l0eTogbG9hZGluZyAmJiAwIH19XG4gICAgICAgIC8+XG4gICAgICAgIHtsb2FkaW5nICYmIChcbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBkYXRhLWZyZXNjby1pZD1cImJ1dHRvbi5zcGlubmVyXCJcbiAgICAgICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgICAgICAgdG9wPVwiNTAlXCJcbiAgICAgICAgICAgIGxlZnQ9XCI1MCVcIlxuICAgICAgICAgICAgY3NzPXt7IHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxTcGlubmVyIHNpemU9e2hlaWdodCAvIDJ9IGNvbG9yPVwiY3VycmVudENvbG9yXCIgLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKX1cbiAgICAgIDwvQm94PlxuICAgICk7XG4gIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEljb25CdXR0b247XG4iXX0= */")),
    onMouseEnter: function onMouseEnter() {
      return setIsHovering(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setIsHovering(false);
    }
  }, rest), jsx(Icon, {
    symbol: symbol,
    size: ICON_SIZE,
    color: "currentColor",
    style: {
      opacity: loading && 0
    }
  }), loading && jsx(Box, {
    "data-fresco-id": "button.spinner",
    position: "absolute",
    top: "50%",
    left: "50%",
    css: _ref2$1
  }, jsx(Spinner, {
    size: height / 2,
    color: "currentColor"
  })));
});

function _EMOTION_STRINGIFIED_CSS_ERROR__$2() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref2$2 = process.env.NODE_ENV === "production" ? {
  name: "1ag6srl-HorizontalDivider",
  styles: "transform:translateY(-50%);;label:HorizontalDivider;"
} : {
  name: "1ag6srl-HorizontalDivider",
  styles: "transform:translateY(-50%);;label:HorizontalDivider;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkRpdmlkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJRIiwiZmlsZSI6IkRpdmlkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IEJveCB9IGZyb20gXCIuLi8uLi9ib3hcIjtcblxuZnVuY3Rpb24gSG9yaXpvbnRhbERpdmlkZXIoeyB3aWR0aCwgY29sb3IgfSkge1xuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIGRhdGEtZnJlc2NvLWlkPVwiaG9yaXpvbnRhbERpdmlkZXJcIlxuICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgICB3aWR0aD17d2lkdGggPyB3aWR0aCA6IFwiMTAwJVwifVxuICAgID5cbiAgICAgIDxCb3hcbiAgICAgICAgZGF0YS1mcmVzY28taWQ9XCJob3Jpem9udGFsRGl2aWRlci5saW5lXCJcbiAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXG4gICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgIGhlaWdodD1cIjFweFwiXG4gICAgICAgIGJnPXtjb2xvciA/IGNvbG9yIDogXCJzZXBhcmF0b3JcIn1cbiAgICAgICAgY3NzPXt7IHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKC01MCUpXCIgfX1cbiAgICAgIC8+XG4gICAgPC9Cb3g+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFZlcnRpY2FsRGl2aWRlcih7IGhlaWdodCwgY29sb3IgfSkge1xuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIGRhdGEtZnJlc2NvLWlkPVwidmVydGljYWxEaXZpZGVyXCJcbiAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgICAgaGVpZ2h0PXtoZWlnaHQgPyBoZWlnaHQgOiBcIjEwMCVcIn1cbiAgICA+XG4gICAgICA8Qm94XG4gICAgICAgIGRhdGEtZnJlc2NvLWlkPVwidmVydGljYWxEaXZpZGVyLmxpbmVcIlxuICAgICAgICBwb3NpdGlvbj1cImFic29sdXRlXCJcbiAgICAgICAgd2lkdGg9XCIxcHhcIlxuICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgYmc9e2NvbG9yID8gY29sb3IgOiBcInNlcGFyYXRvclwifVxuICAgICAgICBjc3M9e3sgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoLTUwJSlcIiB9fVxuICAgICAgLz5cbiAgICA8L0JveD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gRGl2aWRlcih7IGhvcml6b250YWwsIHZlcnRpY2FsLCB3aWR0aCwgaGVpZ2h0LCBjb2xvciB9KSB7XG4gIGlmIChob3Jpem9udGFsKSByZXR1cm4gPEhvcml6b250YWxEaXZpZGVyIHdpZHRoPXt3aWR0aH0gY29sb3I9e2NvbG9yfSAvPjtcbiAgZWxzZSBpZiAodmVydGljYWwpIHJldHVybiA8VmVydGljYWxEaXZpZGVyIGhlaWdodD17aGVpZ2h0fSBjb2xvcj17Y29sb3J9IC8+O1xuICBlbHNlIHJldHVybiA8SG9yaXpvbnRhbERpdmlkZXIgd2lkdGg9e3dpZHRofSBjb2xvcj17Y29sb3J9IC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBEaXZpZGVyO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$2
};

function HorizontalDivider(_ref) {
  var width = _ref.width,
      color = _ref.color;
  return jsx(Box, {
    "data-fresco-id": "horizontalDivider",
    position: "relative",
    width: width ? width : "100%"
  }, jsx(Box, {
    "data-fresco-id": "horizontalDivider.line",
    position: "absolute",
    width: "100%",
    height: "1px",
    bg: color ? color : "separator",
    css: _ref2$2
  }));
}

var _ref4 = process.env.NODE_ENV === "production" ? {
  name: "19pvufj-VerticalDivider",
  styles: "transform:translateX(-50%);;label:VerticalDivider;"
} : {
  name: "19pvufj-VerticalDivider",
  styles: "transform:translateX(-50%);;label:VerticalDivider;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkRpdmlkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0NRIiwiZmlsZSI6IkRpdmlkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IEJveCB9IGZyb20gXCIuLi8uLi9ib3hcIjtcblxuZnVuY3Rpb24gSG9yaXpvbnRhbERpdmlkZXIoeyB3aWR0aCwgY29sb3IgfSkge1xuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIGRhdGEtZnJlc2NvLWlkPVwiaG9yaXpvbnRhbERpdmlkZXJcIlxuICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgICB3aWR0aD17d2lkdGggPyB3aWR0aCA6IFwiMTAwJVwifVxuICAgID5cbiAgICAgIDxCb3hcbiAgICAgICAgZGF0YS1mcmVzY28taWQ9XCJob3Jpem9udGFsRGl2aWRlci5saW5lXCJcbiAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXG4gICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgIGhlaWdodD1cIjFweFwiXG4gICAgICAgIGJnPXtjb2xvciA/IGNvbG9yIDogXCJzZXBhcmF0b3JcIn1cbiAgICAgICAgY3NzPXt7IHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKC01MCUpXCIgfX1cbiAgICAgIC8+XG4gICAgPC9Cb3g+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFZlcnRpY2FsRGl2aWRlcih7IGhlaWdodCwgY29sb3IgfSkge1xuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIGRhdGEtZnJlc2NvLWlkPVwidmVydGljYWxEaXZpZGVyXCJcbiAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgICAgaGVpZ2h0PXtoZWlnaHQgPyBoZWlnaHQgOiBcIjEwMCVcIn1cbiAgICA+XG4gICAgICA8Qm94XG4gICAgICAgIGRhdGEtZnJlc2NvLWlkPVwidmVydGljYWxEaXZpZGVyLmxpbmVcIlxuICAgICAgICBwb3NpdGlvbj1cImFic29sdXRlXCJcbiAgICAgICAgd2lkdGg9XCIxcHhcIlxuICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgYmc9e2NvbG9yID8gY29sb3IgOiBcInNlcGFyYXRvclwifVxuICAgICAgICBjc3M9e3sgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoLTUwJSlcIiB9fVxuICAgICAgLz5cbiAgICA8L0JveD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gRGl2aWRlcih7IGhvcml6b250YWwsIHZlcnRpY2FsLCB3aWR0aCwgaGVpZ2h0LCBjb2xvciB9KSB7XG4gIGlmIChob3Jpem9udGFsKSByZXR1cm4gPEhvcml6b250YWxEaXZpZGVyIHdpZHRoPXt3aWR0aH0gY29sb3I9e2NvbG9yfSAvPjtcbiAgZWxzZSBpZiAodmVydGljYWwpIHJldHVybiA8VmVydGljYWxEaXZpZGVyIGhlaWdodD17aGVpZ2h0fSBjb2xvcj17Y29sb3J9IC8+O1xuICBlbHNlIHJldHVybiA8SG9yaXpvbnRhbERpdmlkZXIgd2lkdGg9e3dpZHRofSBjb2xvcj17Y29sb3J9IC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBEaXZpZGVyO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$2
};

function VerticalDivider(_ref3) {
  var height = _ref3.height,
      color = _ref3.color;
  return jsx(Box, {
    "data-fresco-id": "verticalDivider",
    position: "relative",
    height: height ? height : "100%"
  }, jsx(Box, {
    "data-fresco-id": "verticalDivider.line",
    position: "absolute",
    width: "1px",
    height: "100%",
    bg: color ? color : "separator",
    css: _ref4
  }));
}

function Divider(_ref5) {
  var horizontal = _ref5.horizontal,
      vertical = _ref5.vertical,
      width = _ref5.width,
      height = _ref5.height,
      color = _ref5.color;
  if (horizontal) return jsx(HorizontalDivider, {
    width: width,
    color: color
  });else if (vertical) return jsx(VerticalDivider, {
    height: height,
    color: color
  });else return jsx(HorizontalDivider, {
    width: width,
    color: color
  });
}

function _EMOTION_STRINGIFIED_CSS_ERROR__$3() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

function flexAlign(x) {
  if (x === "start") return "flex-start";
  if (x === "center") return "center";
  if (x === "end") return "flex-end";
  return undefined;
}

var _ref2$3 = process.env.NODE_ENV === "production" ? {
  name: "1vstzkd",
  styles: ":last-of-type{padding-right:0;}"
} : {
  name: "1vstzkd",
  styles: ":last-of-type{padding-right:0;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhTdGFjay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRFUiLCJmaWxlIjoiSFN0YWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBIU3RhY2tcbiAqXG4gKiBIU3RhY2sgYWxsb3dzIHVzIHRvIGhvcml6b250YWxseSBzdGFjayBlbGVtZW50cyBieSBhIHZhbHVlXG4gKiBkZWZpbmUgYnkgdGhlIHNwYWNlIHByb3AuIEl0IGFjY2VwdHMgbW9zdCB1bml0cyBhbmQgdmFsdWVzXG4gKiBhcyB3ZWxsIGFzIHNwYWNpbmcgcHJvcGVydGllcyBpbiB0aGUgVGhlbWUuXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IEJveCB9IGZyb20gXCIuLi8uLi9ib3hcIjtcbmltcG9ydCB7IERpdmlkZXIgfSBmcm9tIFwiLi4vLi4vZGl2aWRlclwiO1xuXG5mdW5jdGlvbiBmbGV4QWxpZ24oeCkge1xuICBpZiAoeCA9PT0gXCJzdGFydFwiKSByZXR1cm4gXCJmbGV4LXN0YXJ0XCI7XG4gIGlmICh4ID09PSBcImNlbnRlclwiKSByZXR1cm4gXCJjZW50ZXJcIjtcbiAgaWYgKHggPT09IFwiZW5kXCIpIHJldHVybiBcImZsZXgtZW5kXCI7XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIEhTdGFjayh7XG4gIGFsaWduLFxuICBhcyA9IFwiZGl2XCIsXG4gIGNoaWxkcmVuLFxuICBkaXZpZGVycyA9IGZhbHNlLFxuICBkaXZpZGVyQ29sb3IsXG4gIHNwYWNlID0gMCxcbn0pIHtcbiAgY29uc3Qgc3RhY2tJdGVtcyA9IENoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pO1xuXG4gIGNvbnN0IGlzTGlzdCA9IGFzID09PSBcIm9sXCIgfHwgYXMgPT09IFwidWxcIjtcbiAgY29uc3Qgc3RhY2tJdGVtQ29tcG9uZW50ID0gaXNMaXN0ID8gXCJsaVwiIDogXCJkaXZcIjtcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIGRhdGEtZnJlc2NvLWlkPVwic3RhY2tzLmhTdGFja1wiXG4gICAgICBhcz17YXN9XG4gICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICBqdXN0aWZ5Q29udGVudD1cImZsZXgtc3RhcnRcIlxuICAgICAgYWxpZ25JdGVtcz17ZmxleEFsaWduKGFsaWduKX1cbiAgICAgIG09ezB9XG4gICAgICBwPXswfVxuICAgICAgY3NzPXtpc0xpc3QgJiYgeyBsaXN0U3R5bGU6IFwibm9uZVwiIH19XG4gICAgPlxuICAgICAge3N0YWNrSXRlbXMubWFwKChjaGlsZCwgaW5kZXgpID0+IChcbiAgICAgICAgPEJveFxuICAgICAgICAgIGRhdGEtZnJlc2NvLWlkPVwic3RhY2tzLmhTdGFjay5jaGlsZFwiXG4gICAgICAgICAgYXM9e3N0YWNrSXRlbUNvbXBvbmVudH1cbiAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgbWluV2lkdGg9ezB9XG4gICAgICAgICAgcHI9e2RpdmlkZXJzID8gdW5kZWZpbmVkIDogc3BhY2V9XG4gICAgICAgICAgY3NzPXt7IFwiOmxhc3Qtb2YtdHlwZVwiOiB7IHBhZGRpbmdSaWdodDogMCB9IH19XG4gICAgICAgICAga2V5PXtcImNoaWxkXCIgKyBpbmRleH1cbiAgICAgICAgPlxuICAgICAgICAgIHtkaXZpZGVycyAmJiBpbmRleCA+IDAgPyAoXG4gICAgICAgICAgICA8Qm94IGRhdGEtZnJlc2NvLWlkPVwic3RhY2tzLmhTdGFjay5jaGlsZC5kaXZpZGVyXCIgcHg9e3NwYWNlfT5cbiAgICAgICAgICAgICAgPERpdmlkZXIgY29sb3I9e2RpdmlkZXJDb2xvcn0gdmVydGljYWwgLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIHtjaGlsZH1cbiAgICAgICAgPC9Cb3g+XG4gICAgICApKX1cbiAgICA8L0JveD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSFN0YWNrO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$3
};

function HStack(_ref) {
  var align = _ref.align,
      _ref$as = _ref.as,
      as = _ref$as === void 0 ? "div" : _ref$as,
      children = _ref.children,
      _ref$dividers = _ref.dividers,
      dividers = _ref$dividers === void 0 ? false : _ref$dividers,
      dividerColor = _ref.dividerColor,
      _ref$space = _ref.space,
      space = _ref$space === void 0 ? 0 : _ref$space;
  var stackItems = Children.toArray(children);
  var isList = as === "ol" || as === "ul";
  var stackItemComponent = isList ? "li" : "div";
  return jsx(Box, {
    "data-fresco-id": "stacks.hStack",
    as: as,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: flexAlign(align),
    m: 0,
    p: 0,
    css: isList && {
      listStyle: "none"
    }
  }, stackItems.map(function (child, index) {
    return jsx(Box, {
      "data-fresco-id": "stacks.hStack.child",
      as: stackItemComponent,
      display: "flex",
      minWidth: 0,
      pr: dividers ? undefined : space,
      css: _ref2$3,
      key: "child" + index
    }, dividers && index > 0 ? jsx(Box, {
      "data-fresco-id": "stacks.hStack.child.divider",
      px: space
    }, jsx(Divider, {
      color: dividerColor,
      vertical: true
    })) : null, child);
  }));
}

function _EMOTION_STRINGIFIED_CSS_ERROR__$4() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

function flexAlign$1(x) {
  if (x === "start") return null;
  if (x === "center") return "center";
  if (x === "end") return "flex-end";
  return undefined;
}

var _ref2$4 = process.env.NODE_ENV === "production" ? {
  name: "18c7k4u",
  styles: ":last-of-type{padding-bottom:0;}"
} : {
  name: "18c7k4u",
  styles: ":last-of-type{padding-bottom:0;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlZTdGFjay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRFUiLCJmaWxlIjoiVlN0YWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBWU3RhY2tcbiAqXG4gKiBWU3RhY2sgYWxsb3dzIHVzIHRvIHZlcnRpY2FsbHkgc3RhY2sgZWxlbWVudHMgYnkgYSB2YWx1ZVxuICogZGVmaW5lIGJ5IHRoZSBzcGFjZSBwcm9wLiBJdCBhY2NlcHRzIG1vc3QgdW5pdHMgYW5kIHZhbHVlc1xuICogYXMgd2VsbCBhcyBzcGFjaW5nIHByb3BlcnRpZXMgaW4gdGhlIFRoZW1lLlxuICovXG5cbmltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiLi4vLi4vYm94XCI7XG5pbXBvcnQgeyBEaXZpZGVyIH0gZnJvbSBcIi4uLy4uL2RpdmlkZXJcIjtcblxuZnVuY3Rpb24gZmxleEFsaWduKHgpIHtcbiAgaWYgKHggPT09IFwic3RhcnRcIikgcmV0dXJuIG51bGw7XG4gIGlmICh4ID09PSBcImNlbnRlclwiKSByZXR1cm4gXCJjZW50ZXJcIjtcbiAgaWYgKHggPT09IFwiZW5kXCIpIHJldHVybiBcImZsZXgtZW5kXCI7XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIFZTdGFjayh7XG4gIGFsaWduID0gXCJzdGFydFwiLFxuICBhcyA9IFwiZGl2XCIsXG4gIGNoaWxkcmVuLFxuICBkaXZpZGVycyA9IGZhbHNlLFxuICBkaXZpZGVyQ29sb3IsXG4gIHNwYWNlID0gMCxcbn0pIHtcbiAgY29uc3Qgc3RhY2tJdGVtcyA9IENoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pO1xuXG4gIGNvbnN0IGlzTGlzdCA9IGFzID09PSBcIm9sXCIgfHwgYXMgPT09IFwidWxcIjtcbiAgY29uc3Qgc3RhY2tJdGVtQ29tcG9uZW50ID0gaXNMaXN0ID8gXCJsaVwiIDogXCJkaXZcIjtcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIGRhdGEtZnJlc2NvLWlkPVwic3RhY2tzLnZTdGFja1wiXG4gICAgICBhcz17YXN9XG4gICAgICBkaXNwbGF5PXthbGlnbiAhPT0gXCJzdGFydFwiICYmIFwiZmxleFwifVxuICAgICAgZmxleERpcmVjdGlvbj17YWxpZ24gIT09IFwic3RhcnRcIiAmJiBcImNvbHVtblwifVxuICAgICAgYWxpZ25JdGVtcz17ZmxleEFsaWduKGFsaWduKX1cbiAgICAgIG09ezB9XG4gICAgICBwPXswfVxuICAgICAgY3NzPXtpc0xpc3QgJiYgeyBsaXN0U3R5bGU6IFwibm9uZVwiIH19XG4gICAgPlxuICAgICAge3N0YWNrSXRlbXMubWFwKChjaGlsZCwgaW5kZXgpID0+IChcbiAgICAgICAgPEJveFxuICAgICAgICAgIGRhdGEtZnJlc2NvLWlkPVwic3RhY2tzLnZTdGFjay5jaGlsZFwiXG4gICAgICAgICAgYXM9e3N0YWNrSXRlbUNvbXBvbmVudH1cbiAgICAgICAgICBtaW5XaWR0aD17MH1cbiAgICAgICAgICBwYj17ZGl2aWRlcnMgPyB1bmRlZmluZWQgOiBzcGFjZX1cbiAgICAgICAgICBjc3M9e3sgXCI6bGFzdC1vZi10eXBlXCI6IHsgcGFkZGluZ0JvdHRvbTogMCB9IH19XG4gICAgICAgICAga2V5PXtcImNoaWxkXCIgKyBpbmRleH1cbiAgICAgICAgPlxuICAgICAgICAgIHtkaXZpZGVycyAmJiBpbmRleCA+IDAgPyAoXG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIGRhdGEtZnJlc2NvLWlkPVwic3RhY2tzLnZTdGFjay5jaGlsZC5kaXZpZGVyXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgcHk9e3NwYWNlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8RGl2aWRlciBjb2xvcj17ZGl2aWRlckNvbG9yfSBob3Jpem9udGFsIC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICB7Y2hpbGR9XG4gICAgICAgIDwvQm94PlxuICAgICAgKSl9XG4gICAgPC9Cb3g+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZTdGFjaztcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$4
};

function VStack(_ref) {
  var _ref$align = _ref.align,
      align = _ref$align === void 0 ? "start" : _ref$align,
      _ref$as = _ref.as,
      as = _ref$as === void 0 ? "div" : _ref$as,
      children = _ref.children,
      _ref$dividers = _ref.dividers,
      dividers = _ref$dividers === void 0 ? false : _ref$dividers,
      dividerColor = _ref.dividerColor,
      _ref$space = _ref.space,
      space = _ref$space === void 0 ? 0 : _ref$space;
  var stackItems = Children.toArray(children);
  var isList = as === "ol" || as === "ul";
  var stackItemComponent = isList ? "li" : "div";
  return jsx(Box, {
    "data-fresco-id": "stacks.vStack",
    as: as,
    display: align !== "start" && "flex",
    flexDirection: align !== "start" && "column",
    alignItems: flexAlign$1(align),
    m: 0,
    p: 0,
    css: isList && {
      listStyle: "none"
    }
  }, stackItems.map(function (child, index) {
    return jsx(Box, {
      "data-fresco-id": "stacks.vStack.child",
      as: stackItemComponent,
      minWidth: 0,
      pb: dividers ? undefined : space,
      css: _ref2$4,
      key: "child" + index
    }, dividers && index > 0 ? jsx(Box, {
      "data-fresco-id": "stacks.vStack.child.divider",
      width: "100%",
      py: space
    }, jsx(Divider, {
      color: dividerColor,
      horizontal: true
    })) : null, child);
  }));
}

function Alert$1(_ref) {
  var close = _ref.close,
      caption = _ref.caption,
      intent = _ref.intent,
      title = _ref.title,
      rest = _objectWithoutProperties(_ref, ["close", "caption", "intent", "title"]);

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1]; // When props update, force toast to re-open, even if closed


  useEffect(function () {
    if (rest) {
      setOpen(true);
    }
  }, [caption]);
  var THEME = useTheme();
  var intents = {
    default: {
      color: THEME.colors.label[1],
      icon: "information-line"
    },
    primary: {
      color: THEME.colors.tint.blue,
      icon: "information-line"
    },
    success: {
      color: THEME.colors.tint.green,
      icon: "checkbox-circle-line"
    },
    warning: {
      color: THEME.colors.tint.orange,
      icon: "alert-line"
    },
    danger: {
      color: THEME.colors.tint.red,
      icon: "error-warning-line"
    }
  };
  return jsx(React__default.Fragment, null, open && jsx(Box, _extends({
    "data-fresco-id": "alerts.alert",
    as: Alert,
    role: "alert",
    position: "relative",
    display: "inline-flex",
    alignItems: "flex-start",
    width: 192,
    pl: "spacing.5",
    pr: "spacing.8",
    borderWidth: 1,
    borderColor: "fill.0",
    borderRadius: "corners.1",
    bg: "background.2",
    overflow: "hidden",
    boxShadow: "elevations.0"
  }, rest), jsx(Box, {
    "data-fresco-id": "alerts.alert.highlight",
    position: "absolute",
    top: 0,
    left: 0,
    width: 4,
    height: "100%",
    bg: intents[intent].color
  }), intents[intent].icon && jsx(Box, {
    "data-fresco-id": "alerts.alert.icon",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 32,
    pr: "spacing.3"
  }, jsx(Icon, {
    symbol: intents[intent].icon,
    size: 18,
    color: intents[intent].color
  })), jsx(Box, {
    "data-fresco-id": "alerts.alert.content",
    flex: 1,
    minHeight: 38,
    py: "9px"
  }, jsx(Box, {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    flex: 1
  }, jsx(VStack, {
    space: "spacing.3"
  }, title && jsx(Heading, {
    as: "span",
    size: 500,
    mr: caption && "spacing.2"
  }, title), caption && jsx(Text, {
    as: "span",
    size: 400,
    color: "label.1"
  }, caption)))), jsx(Box, {
    "data-fresco-id": "alerts.alert.button",
    position: "absolute",
    top: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 32,
    height: 32
  }, jsx(IconButton, {
    theme: THEME,
    symbol: "close-fill",
    intent: "default",
    appearance: "minimal",
    height: 24,
    onClick: function onClick() {
      setOpen(false);
    }
  }))));
}

Alert$1.defaultProps = {
  intent: "default"
};

/**
 * Welcome to @reach/portal!
 *
 * Creates and appends a DOM node to the end of `document.body` and renders a
 * React tree into it. Useful for rendering a natural React element hierarchy
 * with a different DOM hierarchy to prevent parent styles from clipping or
 * hiding content (for popovers, dropdowns, and modals).
 *
 * @see Docs   https://reacttraining.com/reach-ui/portal
 * @see Source https://github.com/reach/reach-ui/tree/main/packages/portal
 * @see React  https://reactjs.org/docs/portals.html
 */
/**
 * Portal
 *
 * @see Docs https://reacttraining.com/reach-ui/portal#portal
 */

var Portal$1 = function Portal(_ref) {
  var children = _ref.children,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? "reach-portal" : _ref$type;
  var mountNode = useRef(null);
  var portalNode = useRef(null);

  var _useState = useState(),
      forceUpdate = _useState[1];

  useIsomorphicLayoutEffect(function () {
    // This ref may be null when a hot-loader replaces components on the page
    if (!mountNode.current) return; // It's possible that the content of the portal has, itself, been portaled.
    // In that case, it's important to append to the correct document element.

    var ownerDocument = mountNode.current.ownerDocument;
    portalNode.current = ownerDocument === null || ownerDocument === void 0 ? void 0 : ownerDocument.createElement(type);
    ownerDocument.body.appendChild(portalNode.current);
    forceUpdate({});
    return function () {
      if (portalNode.current && portalNode.current.ownerDocument) {
        portalNode.current.ownerDocument.body.removeChild(portalNode.current);
      }
    };
  }, [type]);
  return portalNode.current ? createPortal(children, portalNode.current) : React__default.createElement("span", {
    ref: mountNode
  });
};

if (process.env.NODE_ENV !== "production") {
  Portal$1.displayName = "Portal";
}

function _EMOTION_STRINGIFIED_CSS_ERROR__$5() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var calculatePosition = function calculatePosition(position) {
  if (!position || position === "top") {
    return {
      top: "spacing.3",
      left: 0
    };
  }

  if (position === "bottom") {
    return {
      bottom: "spacing.3",
      left: 0
    };
  }
};

var _ref2$5 = process.env.NODE_ENV === "production" ? {
  name: "lu9jwh-ToastAlert",
  styles: "pointer-events:none;;label:ToastAlert;"
} : {
  name: "lu9jwh-ToastAlert",
  styles: "pointer-events:none;;label:ToastAlert;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRvYXN0QWxlcnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMENZIiwiZmlsZSI6IlRvYXN0QWxlcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBvcnRhbCBmcm9tIFwiQHJlYWNoL3BvcnRhbFwiO1xuXG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiLi4vLi4vYm94XCI7XG5cbmltcG9ydCBBbGVydCBmcm9tIFwiLi9BbGVydFwiO1xuXG5jb25zdCBjYWxjdWxhdGVQb3NpdGlvbiA9IChwb3NpdGlvbikgPT4ge1xuICBpZiAoIXBvc2l0aW9uIHx8IHBvc2l0aW9uID09PSBcInRvcFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogXCJzcGFjaW5nLjNcIixcbiAgICAgIGxlZnQ6IDAsXG4gICAgfTtcbiAgfVxuICBpZiAocG9zaXRpb24gPT09IFwiYm90dG9tXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYm90dG9tOiBcInNwYWNpbmcuM1wiLFxuICAgICAgbGVmdDogMCxcbiAgICB9O1xuICB9XG59O1xuXG5mdW5jdGlvbiBUb2FzdEFsZXJ0KHsgcG9zaXRpb24sIC4uLnJlc3QgfSkge1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAvLyBXaGVuIHByb3BzIHVwZGF0ZSwgZm9yY2UgdG9hc3QgdG8gcmUtb3BlbiwgZXZlbiBpZiBjbG9zZWRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocmVzdCkge1xuICAgICAgc2V0T3Blbih0cnVlKTtcbiAgICB9XG4gIH0sIFtyZXN0XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge29wZW4gJiYgKFxuICAgICAgICA8UG9ydGFsPlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIGRhdGEtZnJlc2NvLWlkPVwiYWxlcnRzLnRvYXN0QWxlcnRcIlxuICAgICAgICAgICAgcG9zaXRpb249XCJmaXhlZFwiXG4gICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgcHg9XCJzcGFjaW5nLjNcIlxuICAgICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgIGNzcz17eyBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIiB9fVxuICAgICAgICAgICAgey4uLmNhbGN1bGF0ZVBvc2l0aW9uKHBvc2l0aW9uKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIGRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIlxuICAgICAgICAgICAgICBtYXhXaWR0aD17NDIwfVxuICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJpbml0aWFsXCJcbiAgICAgICAgICAgICAgY3NzPXt7IHBvaW50ZXJFdmVudHM6IFwiYWxsXCIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEFsZXJ0XG4gICAgICAgICAgICAgICAgYm94U2hhZG93PVwiZWxldmF0aW9ucy40XCJcbiAgICAgICAgICAgICAgICBjbG9zZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2V0T3BlbihmYWxzZSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L1BvcnRhbD5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvYXN0QWxlcnQ7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$5
};

var _ref3 = process.env.NODE_ENV === "production" ? {
  name: "1t5kxhr-ToastAlert",
  styles: "pointer-events:all;;label:ToastAlert;"
} : {
  name: "1t5kxhr-ToastAlert",
  styles: "pointer-events:all;;label:ToastAlert;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRvYXN0QWxlcnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaURjIiwiZmlsZSI6IlRvYXN0QWxlcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBvcnRhbCBmcm9tIFwiQHJlYWNoL3BvcnRhbFwiO1xuXG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiLi4vLi4vYm94XCI7XG5cbmltcG9ydCBBbGVydCBmcm9tIFwiLi9BbGVydFwiO1xuXG5jb25zdCBjYWxjdWxhdGVQb3NpdGlvbiA9IChwb3NpdGlvbikgPT4ge1xuICBpZiAoIXBvc2l0aW9uIHx8IHBvc2l0aW9uID09PSBcInRvcFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogXCJzcGFjaW5nLjNcIixcbiAgICAgIGxlZnQ6IDAsXG4gICAgfTtcbiAgfVxuICBpZiAocG9zaXRpb24gPT09IFwiYm90dG9tXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYm90dG9tOiBcInNwYWNpbmcuM1wiLFxuICAgICAgbGVmdDogMCxcbiAgICB9O1xuICB9XG59O1xuXG5mdW5jdGlvbiBUb2FzdEFsZXJ0KHsgcG9zaXRpb24sIC4uLnJlc3QgfSkge1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAvLyBXaGVuIHByb3BzIHVwZGF0ZSwgZm9yY2UgdG9hc3QgdG8gcmUtb3BlbiwgZXZlbiBpZiBjbG9zZWRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocmVzdCkge1xuICAgICAgc2V0T3Blbih0cnVlKTtcbiAgICB9XG4gIH0sIFtyZXN0XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge29wZW4gJiYgKFxuICAgICAgICA8UG9ydGFsPlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIGRhdGEtZnJlc2NvLWlkPVwiYWxlcnRzLnRvYXN0QWxlcnRcIlxuICAgICAgICAgICAgcG9zaXRpb249XCJmaXhlZFwiXG4gICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgcHg9XCJzcGFjaW5nLjNcIlxuICAgICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgIGNzcz17eyBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIiB9fVxuICAgICAgICAgICAgey4uLmNhbGN1bGF0ZVBvc2l0aW9uKHBvc2l0aW9uKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIGRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIlxuICAgICAgICAgICAgICBtYXhXaWR0aD17NDIwfVxuICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJpbml0aWFsXCJcbiAgICAgICAgICAgICAgY3NzPXt7IHBvaW50ZXJFdmVudHM6IFwiYWxsXCIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEFsZXJ0XG4gICAgICAgICAgICAgICAgYm94U2hhZG93PVwiZWxldmF0aW9ucy40XCJcbiAgICAgICAgICAgICAgICBjbG9zZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2V0T3BlbihmYWxzZSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L1BvcnRhbD5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvYXN0QWxlcnQ7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$5
};

function ToastAlert(_ref) {
  var position = _ref.position,
      rest = _objectWithoutProperties(_ref, ["position"]);

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1]; // When props update, force toast to re-open, even if closed


  useEffect(function () {
    if (rest) {
      setOpen(true);
    }
  }, [rest]);
  return jsx(React__default.Fragment, null, open && jsx(Portal$1, null, jsx(Box, _extends({
    "data-fresco-id": "alerts.toastAlert",
    position: "fixed",
    width: "100%",
    px: "spacing.3",
    textAlign: "center",
    css: _ref2$5
  }, calculatePosition(position)), jsx(Box, {
    display: "inline-block",
    maxWidth: 420,
    textAlign: "initial",
    css: _ref3
  }, jsx(Alert$1, _extends({
    boxShadow: "elevations.4",
    close: function close() {
      setOpen(false);
    }
  }, rest))))));
}

var StyledBox = /*#__PURE__*/createStyled(Box, {
  target: "et9fsg10",
  label: "StyledBox"
})(system({
  ratio: {
    property: "paddingBottom",
    transform: function transform(n) {
      var padding = n.split(":");
      return padding[1] / padding[0] * 100 + "%";
    }
  }
}), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFzcGVjdFJhdGlvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Ca0IiLCJmaWxlIjoiQXNwZWN0UmF0aW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEFzcGVjdFJhdGlvXG4gKlxuICogVGFrZXMgdGhlIHByb3BlcnR5IGByYXRpb2AgYW5kIHNwbGl0cyBpdCBpbnRvIGFuIGFycmF5XG4gKiB3aGljaCB0aGVuIGhhcyBpdHMgdmFsdWVzIGRpdmlkZWQgYnkgZWFjaCBvdGhlciBhbmRcbiAqIG11bHRpcGxpZWQgYnkgMTAwJS4gVGhpcyByZXN1bHRzIGluIGEgY29tcG9uZW50IHdoZXJlXG4gKiBjaGlsZCBlbGVtZW50cyBhcmUgY29uZmluZWQgdG8gc3BhY2UuXG4gKlxuICogVGhpcyBpcyBnb29kIGZvciBpbWFnZXMgYW5kIHZpZGVvIGVsZW1lbnRzLlxuICpcbiAqIEFzc2lnbmluZyBgb3ZlcmZsb3c6IGhpZGRlbmAgdG8gdGhlIGNvbXBvbmVudCB3aWxsIGhpZGVcbiAqIGFueXRoaW5nIHRoYXQgbWlnaHQgYmUgbGFyZ2VyIHRoYW4gdGhlIGFzcGVjdCByYXRpby5cbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgeyBzeXN0ZW0gfSBmcm9tIFwic3R5bGVkLXN5c3RlbVwiO1xuXG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiLi4vLi4vYm94XCI7XG5cbmNvbnN0IFN0eWxlZEJveCA9IHN0eWxlZChCb3gpKFxuICBzeXN0ZW0oe1xuICAgIHJhdGlvOiB7XG4gICAgICBwcm9wZXJ0eTogXCJwYWRkaW5nQm90dG9tXCIsXG4gICAgICB0cmFuc2Zvcm06IChuKSA9PiB7XG4gICAgICAgIGxldCBwYWRkaW5nID0gbi5zcGxpdChcIjpcIik7XG4gICAgICAgIHJldHVybiAocGFkZGluZ1sxXSAvIHBhZGRpbmdbMF0pICogMTAwICsgXCIlXCI7XG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG4pO1xuXG5jb25zdCBBc3BlY3RSYXRpbyA9IGZvcndhcmRSZWYoKHsgY2hpbGRyZW4sIHJhdGlvLCAuLi5yZXN0IH0sIHJlZikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxTdHlsZWRCb3hcbiAgICAgIGRhdGEtZnJlc2NvLWlkPVwiYXNwZWN0UmF0aW9cIlxuICAgICAgcmVmPXtyZWZ9XG4gICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICByYXRpbz17cmF0aW99XG4gICAgICB7Li4ucmVzdH1cbiAgICA+XG4gICAgICA8Qm94XG4gICAgICAgIGRhdGEtZnJlc2NvLWlkPVwiYXNwZWN0UmF0aW8uc2V0U2l6ZVwiXG4gICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgICB0b3A9ezB9XG4gICAgICAgIGxlZnQ9ezB9XG4gICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0JveD5cbiAgICA8L1N0eWxlZEJveD5cbiAgKTtcbn0pO1xuXG5Bc3BlY3RSYXRpby5kZWZhdWx0UHJvcHMgPSB7XG4gIHJhdGlvOiBcIjE2OjlcIixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFzcGVjdFJhdGlvO1xuIl19 */");

var AspectRatio = forwardRef(function (_ref, ref) {
  var children = _ref.children,
      ratio = _ref.ratio,
      rest = _objectWithoutProperties(_ref, ["children", "ratio"]);

  return jsx(StyledBox, _extends({
    "data-fresco-id": "aspectRatio",
    ref: ref,
    position: "relative",
    width: "100%",
    ratio: ratio
  }, rest), jsx(Box, {
    "data-fresco-id": "aspectRatio.setSize",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%"
  }, children));
});
AspectRatio.defaultProps = {
  ratio: "16:9"
};

var base83 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
var digitCharacters = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "#",
    "$",
    "%",
    "*",
    "+",
    ",",
    "-",
    ".",
    ":",
    ";",
    "=",
    "?",
    "@",
    "[",
    "]",
    "^",
    "_",
    "{",
    "|",
    "}",
    "~"
];
exports.decode83 = function (str) {
    var value = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str[i];
        var digit = digitCharacters.indexOf(c);
        value = value * 83 + digit;
    }
    return value;
};
exports.encode83 = function (n, length) {
    var result = "";
    for (var i = 1; i <= length; i++) {
        var digit = (Math.floor(n) / Math.pow(83, length - i)) % 83;
        result += digitCharacters[Math.floor(digit)];
    }
    return result;
};

});

unwrapExports(base83);
var base83_1 = base83.decode83;
var base83_2 = base83.encode83;

var utils = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.sRGBToLinear = function (value) {
    var v = value / 255;
    if (v <= 0.04045) {
        return v / 12.92;
    }
    else {
        return Math.pow((v + 0.055) / 1.055, 2.4);
    }
};
exports.linearTosRGB = function (value) {
    var v = Math.max(0, Math.min(1, value));
    if (v <= 0.0031308) {
        return Math.round(v * 12.92 * 255 + 0.5);
    }
    else {
        return Math.round((1.055 * Math.pow(v, 1 / 2.4) - 0.055) * 255 + 0.5);
    }
};
exports.sign = function (n) { return (n < 0 ? -1 : 1); };
exports.signPow = function (val, exp) {
    return exports.sign(val) * Math.pow(Math.abs(val), exp);
};

});

unwrapExports(utils);
var utils_1 = utils.sRGBToLinear;
var utils_2 = utils.linearTosRGB;
var utils_3 = utils.sign;
var utils_4 = utils.signPow;

var error = createCommonjsModule(function (module, exports) {
var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
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
Object.defineProperty(exports, "__esModule", { value: true });
var ValidationError = /** @class */ (function (_super) {
    __extends(ValidationError, _super);
    function ValidationError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "ValidationError";
        _this.message = message;
        return _this;
    }
    return ValidationError;
}(Error));
exports.ValidationError = ValidationError;

});

unwrapExports(error);
var error_1 = error.ValidationError;

var decode_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });



/**
 * Returns an error message if invalid or undefined if valid
 * @param blurhash
 */
var validateBlurhash = function (blurhash) {
    if (!blurhash || blurhash.length < 6) {
        throw new error.ValidationError("The blurhash string must be at least 6 characters");
    }
    var sizeFlag = base83.decode83(blurhash[0]);
    var numY = Math.floor(sizeFlag / 9) + 1;
    var numX = (sizeFlag % 9) + 1;
    if (blurhash.length !== 4 + 2 * numX * numY) {
        throw new error.ValidationError("blurhash length mismatch: length is " + blurhash.length + " but it should be " + (4 + 2 * numX * numY));
    }
};
exports.isBlurhashValid = function (blurhash) {
    try {
        validateBlurhash(blurhash);
    }
    catch (error) {
        return { result: false, errorReason: error.message };
    }
    return { result: true };
};
var decodeDC = function (value) {
    var intR = value >> 16;
    var intG = (value >> 8) & 255;
    var intB = value & 255;
    return [utils.sRGBToLinear(intR), utils.sRGBToLinear(intG), utils.sRGBToLinear(intB)];
};
var decodeAC = function (value, maximumValue) {
    var quantR = Math.floor(value / (19 * 19));
    var quantG = Math.floor(value / 19) % 19;
    var quantB = value % 19;
    var rgb = [
        utils.signPow((quantR - 9) / 9, 2.0) * maximumValue,
        utils.signPow((quantG - 9) / 9, 2.0) * maximumValue,
        utils.signPow((quantB - 9) / 9, 2.0) * maximumValue
    ];
    return rgb;
};
var decode = function (blurhash, width, height, punch) {
    validateBlurhash(blurhash);
    punch = punch | 1;
    var sizeFlag = base83.decode83(blurhash[0]);
    var numY = Math.floor(sizeFlag / 9) + 1;
    var numX = (sizeFlag % 9) + 1;
    var quantisedMaximumValue = base83.decode83(blurhash[1]);
    var maximumValue = (quantisedMaximumValue + 1) / 166;
    var colors = new Array(numX * numY);
    for (var i = 0; i < colors.length; i++) {
        if (i === 0) {
            var value = base83.decode83(blurhash.substring(2, 6));
            colors[i] = decodeDC(value);
        }
        else {
            var value = base83.decode83(blurhash.substring(4 + i * 2, 6 + i * 2));
            colors[i] = decodeAC(value, maximumValue * punch);
        }
    }
    var bytesPerRow = width * 4;
    var pixels = new Uint8ClampedArray(bytesPerRow * height);
    for (var y = 0; y < height; y++) {
        for (var x = 0; x < width; x++) {
            var r = 0;
            var g = 0;
            var b = 0;
            for (var j = 0; j < numY; j++) {
                for (var i = 0; i < numX; i++) {
                    var basis = Math.cos((Math.PI * x * i) / width) *
                        Math.cos((Math.PI * y * j) / height);
                    var color = colors[i + j * numX];
                    r += color[0] * basis;
                    g += color[1] * basis;
                    b += color[2] * basis;
                }
            }
            var intR = utils.linearTosRGB(r);
            var intG = utils.linearTosRGB(g);
            var intB = utils.linearTosRGB(b);
            pixels[4 * x + 0 + y * bytesPerRow] = intR;
            pixels[4 * x + 1 + y * bytesPerRow] = intG;
            pixels[4 * x + 2 + y * bytesPerRow] = intB;
            pixels[4 * x + 3 + y * bytesPerRow] = 255; // alpha
        }
    }
    return pixels;
};
exports.default = decode;

});

unwrapExports(decode_1);
var decode_2 = decode_1.isBlurhashValid;

var encode_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });



var bytesPerPixel = 4;
var multiplyBasisFunction = function (pixels, width, height, basisFunction) {
    var r = 0;
    var g = 0;
    var b = 0;
    var bytesPerRow = width * bytesPerPixel;
    for (var x = 0; x < width; x++) {
        for (var y = 0; y < height; y++) {
            var basis = basisFunction(x, y);
            r +=
                basis * utils.sRGBToLinear(pixels[bytesPerPixel * x + 0 + y * bytesPerRow]);
            g +=
                basis * utils.sRGBToLinear(pixels[bytesPerPixel * x + 1 + y * bytesPerRow]);
            b +=
                basis * utils.sRGBToLinear(pixels[bytesPerPixel * x + 2 + y * bytesPerRow]);
        }
    }
    var scale = 1 / (width * height);
    return [r * scale, g * scale, b * scale];
};
var encodeDC = function (value) {
    var roundedR = utils.linearTosRGB(value[0]);
    var roundedG = utils.linearTosRGB(value[1]);
    var roundedB = utils.linearTosRGB(value[2]);
    return (roundedR << 16) + (roundedG << 8) + roundedB;
};
var encodeAC = function (value, maximumValue) {
    var quantR = Math.floor(Math.max(0, Math.min(18, Math.floor(utils.signPow(value[0] / maximumValue, 0.5) * 9 + 9.5))));
    var quantG = Math.floor(Math.max(0, Math.min(18, Math.floor(utils.signPow(value[1] / maximumValue, 0.5) * 9 + 9.5))));
    var quantB = Math.floor(Math.max(0, Math.min(18, Math.floor(utils.signPow(value[2] / maximumValue, 0.5) * 9 + 9.5))));
    return quantR * 19 * 19 + quantG * 19 + quantB;
};
var encode = function (pixels, width, height, componentX, componentY) {
    if (componentX < 1 || componentX > 9 || componentY < 1 || componentY > 9) {
        throw new error.ValidationError("BlurHash must have between 1 and 9 components");
    }
    if (width * height * 4 !== pixels.length) {
        throw new error.ValidationError("Width and height must match the pixels array");
    }
    var factors = [];
    var _loop_1 = function (y) {
        var _loop_2 = function (x) {
            var normalisation = x == 0 && y == 0 ? 1 : 2;
            var factor = multiplyBasisFunction(pixels, width, height, function (i, j) {
                return normalisation *
                    Math.cos((Math.PI * x * i) / width) *
                    Math.cos((Math.PI * y * j) / height);
            });
            factors.push(factor);
        };
        for (var x = 0; x < componentX; x++) {
            _loop_2(x);
        }
    };
    for (var y = 0; y < componentY; y++) {
        _loop_1(y);
    }
    var dc = factors[0];
    var ac = factors.slice(1);
    var hash = "";
    var sizeFlag = componentX - 1 + (componentY - 1) * 9;
    hash += base83.encode83(sizeFlag, 1);
    var maximumValue;
    if (ac.length > 0) {
        var actualMaximumValue = Math.max.apply(Math, ac.map(function (val) { return Math.max.apply(Math, val); }));
        var quantisedMaximumValue = Math.floor(Math.max(0, Math.min(82, Math.floor(actualMaximumValue * 166 - 0.5))));
        maximumValue = (quantisedMaximumValue + 1) / 166;
        hash += base83.encode83(quantisedMaximumValue, 1);
    }
    else {
        maximumValue = 1;
        hash += base83.encode83(0, 1);
    }
    hash += base83.encode83(encodeDC(dc), 4);
    ac.forEach(function (factor) {
        hash += base83.encode83(encodeAC(factor, maximumValue), 2);
    });
    return hash;
};
exports.default = encode;

});

unwrapExports(encode_1);

var dist = createCommonjsModule(function (module, exports) {
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });

exports.decode = decode_1.default;
exports.isBlurhashValid = decode_1.isBlurhashValid;

exports.encode = encode_1.default;
__export(error);

});

unwrapExports(dist);
var dist_1 = dist.decode;
var dist_2 = dist.isBlurhashValid;
var dist_3 = dist.encode;

function BlurHash(_ref) {
  var hash = _ref.hash,
      aspectRatio = _ref.aspectRatio,
      rest = _objectWithoutProperties(_ref, ["hash", "aspectRatio"]);

  var blurRef = useRef(null);
  useEffect(function () {
    if (hash && blurRef) {
      var pixels = dist_1(hash, 32, 32);
      var ctx = blurRef.current.getContext("2d");
      var imageData = ctx.createImageData(32, 32);
      imageData.data.set(pixels);
      ctx.putImageData(imageData, 0, 0);
    }
  }, [blurRef]);

  if (hash) {
    return jsx(React__default.Fragment, null, jsx("canvas", _extends({
      "data-fresco-id": "blurHash",
      ref: blurRef,
      width: 32,
      height: 32,
      css: /*#__PURE__*/css$1({
        position: "absolute",
        top: "50%",
        left: "50%",
        width: aspectRatio >= 1 ? "100%" : 100 * aspectRatio + "%",
        height: aspectRatio >= 1 ? 100 / aspectRatio + "%" : "100%",
        transform: "translate(-50%, -50%)"
      }, ";label:BlurHash;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJsdXJIYXNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCVSIsImZpbGUiOiJCbHVySGFzaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZGVjb2RlIH0gZnJvbSBcImJsdXJoYXNoXCI7XG5cbmZ1bmN0aW9uIEJsdXJIYXNoKHsgaGFzaCwgYXNwZWN0UmF0aW8sIC4uLnJlc3QgfSkge1xuICBjb25zdCBibHVyUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGhhc2ggJiYgYmx1clJlZikge1xuICAgICAgY29uc3QgcGl4ZWxzID0gZGVjb2RlKGhhc2gsIDMyLCAzMik7XG4gICAgICBjb25zdCBjdHggPSBibHVyUmVmLmN1cnJlbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgY29uc3QgaW1hZ2VEYXRhID0gY3R4LmNyZWF0ZUltYWdlRGF0YSgzMiwgMzIpO1xuICAgICAgaW1hZ2VEYXRhLmRhdGEuc2V0KHBpeGVscyk7XG4gICAgICBjdHgucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwgMCwgMCk7XG4gICAgfVxuICB9LCBbYmx1clJlZl0pO1xuXG4gIGlmIChoYXNoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxjYW52YXNcbiAgICAgICAgICBkYXRhLWZyZXNjby1pZD1cImJsdXJIYXNoXCJcbiAgICAgICAgICByZWY9e2JsdXJSZWZ9XG4gICAgICAgICAgd2lkdGg9ezMyfVxuICAgICAgICAgIGhlaWdodD17MzJ9XG4gICAgICAgICAgY3NzPXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgdG9wOiBcIjUwJVwiLFxuICAgICAgICAgICAgbGVmdDogXCI1MCVcIixcbiAgICAgICAgICAgIHdpZHRoOiBhc3BlY3RSYXRpbyA+PSAxID8gXCIxMDAlXCIgOiAxMDAgKiBhc3BlY3RSYXRpbyArIFwiJVwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBhc3BlY3RSYXRpbyA+PSAxID8gMTAwIC8gYXNwZWN0UmF0aW8gKyBcIiVcIiA6IFwiMTAwJVwiLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgtNTAlLCAtNTAlKVwiLFxuICAgICAgICAgIH19XG4gICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgIC8+XG4gICAgICA8Lz5cbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJsdXJIYXNoO1xuIl19 */"))
    }, rest)));
  } else {
    return null;
  }
}

function _EMOTION_STRINGIFIED_CSS_ERROR__$6() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

function getInitials(name) {
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "?";
  if (!name || typeof name !== "string") return fallback;
  return name.replace(/\s+/, " ").split(" ") // Repeated spaces results in empty strings
  .slice(0, 2).map(function (v) {
    return v && v[0].toUpperCase();
  }) // Watch out for empty strings
  .join("");
}

var _ref2$6 = process.env.NODE_ENV === "production" ? {
  name: "4c44fe-Avatar",
  styles: "user-select:none;pointer-events:none;;label:Avatar;"
} : {
  name: "4c44fe-Avatar",
  styles: "user-select:none;pointer-events:none;;label:Avatar;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkF2YXRhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrR1kiLCJmaWxlIjoiQXZhdGFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY3NzIGZyb20gXCJAc3R5bGVkLXN5c3RlbS9jc3NcIjtcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSBcImVtb3Rpb24tdGhlbWluZ1wiO1xuaW1wb3J0IHsgcmdiYSB9IGZyb20gXCJwb2xpc2hlZFwiO1xuXG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiLi4vLi4vYm94XCI7XG5pbXBvcnQgeyBCbHVySGFzaCB9IGZyb20gXCIuLi8uLi9ibHVySGFzaFwiO1xuXG5mdW5jdGlvbiBnZXRJbml0aWFscyhuYW1lLCBmYWxsYmFjayA9IFwiP1wiKSB7XG4gIGlmICghbmFtZSB8fCB0eXBlb2YgbmFtZSAhPT0gXCJzdHJpbmdcIikgcmV0dXJuIGZhbGxiYWNrO1xuICByZXR1cm4gbmFtZVxuICAgIC5yZXBsYWNlKC9cXHMrLywgXCIgXCIpXG4gICAgLnNwbGl0KFwiIFwiKSAvLyBSZXBlYXRlZCBzcGFjZXMgcmVzdWx0cyBpbiBlbXB0eSBzdHJpbmdzXG4gICAgLnNsaWNlKDAsIDIpXG4gICAgLm1hcCgodikgPT4gdiAmJiB2WzBdLnRvVXBwZXJDYXNlKCkpIC8vIFdhdGNoIG91dCBmb3IgZW1wdHkgc3RyaW5nc1xuICAgIC5qb2luKFwiXCIpO1xufVxuXG5mdW5jdGlvbiBBdmF0YXIoe1xuICBzaXplLFxuICBibHVySGFzaCxcbiAgaW1hZ2UsXG4gIG5hbWUsXG4gIGJvcmRlclJhZGl1cyA9IFwicm91bmRcIixcbiAgY29sb3IgPSBcImxhYmVsLjFcIixcbiAgYmcgPSBcImdyYXkuNFwiLFxuICAuLi5yZXN0XG59KSB7XG4gIGNvbnN0IFtvcGFjaXR5LCBzZXRPcGFjaXR5XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBUSEVNRSA9IHVzZVRoZW1lKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBkYXRhLWZyZXNjby1pZD1cImF2YXRhclwiXG4gICAgICBhcmlhLWxhYmVsPXtuYW1lfVxuICAgICAgd2lkdGg9e3NpemUgKyBcInB4XCJ9XG4gICAgICBib3JkZXJSYWRpdXM9e2JvcmRlclJhZGl1c31cbiAgICAgIG92ZXJmbG93PVwiaGlkZGVuXCJcbiAgICAgIHsuLi5yZXN0fVxuICAgID5cbiAgICAgIDxCb3ggcG9zaXRpb249XCJyZWxhdGl2ZVwiIHBiPVwiMTAwJVwiIGJnPXtiZ30+XG4gICAgICAgIHtibHVySGFzaCAmJiAoXG4gICAgICAgICAgPEJsdXJIYXNoXG4gICAgICAgICAgICBoYXNoPXtibHVySGFzaH1cbiAgICAgICAgICAgIHN0eWxlPXt7IG9wYWNpdHk6IG9wYWNpdHkgPT09IDEgPyAwIDogMSB9fVxuICAgICAgICAgICAgY3NzPXtjc3Moe1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcIm9wYWNpdHkgMzAwbXMgZWFzZS1pblwiLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAge2ltYWdlICYmIChcbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBhcz1cImltZ1wiXG4gICAgICAgICAgICBzcmM9e2ltYWdlfVxuICAgICAgICAgICAgZGF0YS1mcmVzY28taWQ9XCJhdmF0YXIuaW1hZ2VcIlxuICAgICAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXG4gICAgICAgICAgICB0b3A9ezB9XG4gICAgICAgICAgICBsZWZ0PXswfVxuICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgICAgY3NzPXtjc3Moe1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJvcGFjaXR5IDMwMG1zIGVhc2UtaW5cIixcbiAgICAgICAgICAgICAgXCImOjphZnRlclwiOiB7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCInJ1wiLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXMsXG4gICAgICAgICAgICAgICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDJweCAwICR7cmdiYShcbiAgICAgICAgICAgICAgICAgIFRIRU1FLmNvbG9ycy5sYWJlbFswXSxcbiAgICAgICAgICAgICAgICAgIDAuMjVcbiAgICAgICAgICAgICAgICApfWAsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIG9uTG9hZD17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRPcGFjaXR5KDEpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHN0eWxlPXt7IG9wYWNpdHkgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7IWltYWdlICYmICFibHVySGFzaCAmJiBuYW1lICYmIChcbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBkYXRhLWZyZXNjby1pZD1cImF2YXRhci5pbml0aWFsc1wiXG4gICAgICAgICAgICBjaGlsZHJlbj17Z2V0SW5pdGlhbHMobmFtZSl9XG4gICAgICAgICAgICBhcz1cInNwYW5cIlxuICAgICAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXG4gICAgICAgICAgICB0b3A9ezB9XG4gICAgICAgICAgICBsZWZ0PXswfVxuICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgIGZvbnRTaXplPXtNYXRoLnJvdW5kKHNpemUgLyAyLjUpICsgXCJweFwifVxuICAgICAgICAgICAgZm9udFdlaWdodD17NjAwfVxuICAgICAgICAgICAgbGluZUhlaWdodD17c2l6ZSArIFwicHhcIn1cbiAgICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICBjb2xvcj17Y29sb3J9XG4gICAgICAgICAgICBjc3M9e3sgdXNlclNlbGVjdDogXCJub25lXCIsIHBvaW50ZXJFdmVudHM6IFwibm9uZVwiIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgey8qIFNoYWRvdyBSaW5nICovfVxuICAgICAgICB7aW1hZ2UgJiYgKFxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIGRhdGEtZnJlc2NvLWlkPVwiYXZhdGFyLnJpbmdcIlxuICAgICAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXG4gICAgICAgICAgICB0b3A9ezB9XG4gICAgICAgICAgICBsZWZ0PXswfVxuICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgICAgY3NzPXtjc3Moe1xuICAgICAgICAgICAgICBcIiY6OmFmdGVyXCI6IHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIicnXCIsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1cyxcbiAgICAgICAgICAgICAgICBib3hTaGFkb3c6IGBpbnNldCAwIDAgMnB4IDAgJHtyZ2JhKFxuICAgICAgICAgICAgICAgICAgVEhFTUUuY29sb3JzLmxhYmVsWzBdLFxuICAgICAgICAgICAgICAgICAgMC4yNVxuICAgICAgICAgICAgICAgICl9YCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXZhdGFyO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$6
};

function Avatar(_ref) {
  var size = _ref.size,
      blurHash = _ref.blurHash,
      image = _ref.image,
      name = _ref.name,
      _ref$borderRadius = _ref.borderRadius,
      borderRadius = _ref$borderRadius === void 0 ? "round" : _ref$borderRadius,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "label.1" : _ref$color,
      _ref$bg = _ref.bg,
      bg = _ref$bg === void 0 ? "gray.4" : _ref$bg,
      rest = _objectWithoutProperties(_ref, ["size", "blurHash", "image", "name", "borderRadius", "color", "bg"]);

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      opacity = _useState2[0],
      setOpacity = _useState2[1];

  var THEME = useTheme();
  return jsx(Box, _extends({
    "data-fresco-id": "avatar",
    "aria-label": name,
    width: size + "px",
    borderRadius: borderRadius,
    overflow: "hidden"
  }, rest), jsx(Box, {
    position: "relative",
    pb: "100%",
    bg: bg
  }, blurHash && jsx(BlurHash, {
    hash: blurHash,
    style: {
      opacity: opacity === 1 ? 0 : 1
    },
    css: css({
      transition: "opacity 300ms ease-in"
    })
  }), image && jsx(Box, {
    as: "img",
    src: image,
    "data-fresco-id": "avatar.image",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    css: css({
      opacity: 0,
      objectFit: "cover",
      transition: "opacity 300ms ease-in",
      "&::after": {
        content: "''",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: borderRadius,
        boxShadow: "inset 0 0 2px 0 ".concat(rgba(THEME.colors.label[0], 0.25))
      }
    }),
    onLoad: function onLoad() {
      setOpacity(1);
    },
    style: {
      opacity: opacity
    }
  }), !image && !blurHash && name && jsx(Box, {
    "data-fresco-id": "avatar.initials",
    children: getInitials(name),
    as: "span",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    fontSize: Math.round(size / 2.5) + "px",
    fontWeight: 600,
    lineHeight: size + "px",
    textAlign: "center",
    color: color,
    css: _ref2$6
  }), image && jsx(Box, {
    "data-fresco-id": "avatar.ring",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    css: css({
      "&::after": {
        content: "''",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: borderRadius,
        boxShadow: "inset 0 0 2px 0 ".concat(rgba(THEME.colors.label[0], 0.25))
      }
    })
  })));
}

var Flex = forwardRef(function (_ref, ref) {
  var props = Object.assign({}, _ref);
  return jsx(Box, _extends({
    "data-fresco-id": "\uD83D\uDCAA",
    ref: ref,
    display: "flex"
  }, props));
});

function AvatarGroup(_ref) {
  var _ref$avatars = _ref.avatars,
      avatars = _ref$avatars === void 0 ? [] : _ref$avatars,
      size = _ref.size,
      _ref$max = _ref.max,
      max = _ref$max === void 0 ? 3 : _ref$max,
      _ref$overlap = _ref.overlap,
      overlap = _ref$overlap === void 0 ? 16 : _ref$overlap,
      border = _ref.border;
  var THEME = useTheme();

  function containerWidth() {
    if (avatars.length < max) return avatars.length * size - (avatars.length - 1) * overlap + "px";
    if (avatars.length === max) return max * size - (max - 1) * overlap + "px";
    if (avatars.length > max) return (max + 1) * size - max * overlap + "px";
  }

  if (avatars.length > 0) return jsx(Box, {
    "data-fresco-id": "avatarGroup",
    position: "relative",
    zIndex: 0,
    width: containerWidth(),
    height: size + "px",
    css: css({
      "> *:not(:last-of-type)": {
        boxShadow: border ? border : "0 0 0 2px ".concat(THEME.colors.background[0])
      }
    })
  }, avatars.slice(0, max).map(function (_ref2, i) {
    var avatar = Object.assign({}, _ref2);
    return jsx(Box, {
      "data-fresco-id": "avatarGroup.item",
      position: "absolute",
      top: 0,
      left: i * (size - overlap),
      zIndex: max - i,
      width: size,
      height: size,
      borderRadius: "round",
      key: "avatar" + i
    }, jsx(Avatar, _extends({
      size: size
    }, avatar)));
  }), avatars.length > max && jsx(Box, {
    "data-fresco-id": "avatarGroup.more",
    position: "absolute",
    top: 0,
    right: 0,
    width: size,
    height: size,
    borderRadius: "round"
  }, jsx(Avatar, {
    size: size,
    blurHash: avatars[max + 1] && avatars[max + 1].blurHash,
    image: avatars[max + 1] && avatars[max + 1].image
  }), jsx(Flex, {
    position: "absolute",
    top: 0,
    right: 0,
    width: size,
    height: size,
    borderRadius: "round",
    bg: "fill.3"
  }, jsx(Icon, {
    symbol: "more-fill",
    size: 16,
    m: "auto",
    color: "label.1"
  }))));else return null;
}

var Card = forwardRef(function (_ref, ref) {
  var props = Object.assign({}, _ref);
  return jsx(Box, _extends({
    "data-fresco-id": "card",
    ref: ref
  }, props));
});

const rnds8 = new Uint8Array(16);
function rng() {
  return crypto.randomFillSync(rnds8);
}

var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

function validate(uuid) {
  return typeof uuid === 'string' && REGEX.test(uuid);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  const uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

function v4(options, buf, offset) {
  options = options || {};
  const rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return stringify(rnds);
}

function _EMOTION_STRINGIFIED_CSS_ERROR__$7() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var getControlSizeForTextSize = function getControlSizeForTextSize(size) {
  if (size <= 300) return 16;
  if (size <= 400) return 16;
  if (size <= 500) return 16;
  if (size <= 600) return 20;
  return 20;
};

var getTextOffsetForTextSize = function getTextOffsetForTextSize(size) {
  if (size <= 300) return 4;
  if (size <= 400) return 3;
  if (size <= 500) return 2;
  return 2;
};

var _ref2$7 = process.env.NODE_ENV === "production" ? {
  name: "14xntah-Checkbox",
  styles: "user-select:none;cursor:pointer;;label:Checkbox;"
} : {
  name: "14xntah-Checkbox",
  styles: "user-select:none;cursor:pointer;;label:Checkbox;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNoZWNrYm94LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDTSIsImZpbGUiOiJDaGVja2JveC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSBcImVtb3Rpb24tdGhlbWluZ1wiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcbmltcG9ydCBjc3MgZnJvbSBcIkBzdHlsZWQtc3lzdGVtL2Nzc1wiO1xuaW1wb3J0IHsgaGlkZVZpc3VhbGx5LCByZ2JhIH0gZnJvbSBcInBvbGlzaGVkXCI7XG5cbmltcG9ydCB7IEJveCB9IGZyb20gXCIuLi8uLi9ib3hcIjtcbmltcG9ydCB7IFRleHQgfSBmcm9tIFwiLi4vLi4vdHlwb2dyYXBoeVwiO1xuXG5jb25zdCBnZXRDb250cm9sU2l6ZUZvclRleHRTaXplID0gKHNpemUpID0+IHtcbiAgaWYgKHNpemUgPD0gMzAwKSByZXR1cm4gMTY7XG4gIGlmIChzaXplIDw9IDQwMCkgcmV0dXJuIDE2O1xuICBpZiAoc2l6ZSA8PSA1MDApIHJldHVybiAxNjtcbiAgaWYgKHNpemUgPD0gNjAwKSByZXR1cm4gMjA7XG4gIHJldHVybiAyMDtcbn07XG5cbmNvbnN0IGdldFRleHRPZmZzZXRGb3JUZXh0U2l6ZSA9IChzaXplKSA9PiB7XG4gIGlmIChzaXplIDw9IDMwMCkgcmV0dXJuIDQ7XG4gIGlmIChzaXplIDw9IDQwMCkgcmV0dXJuIDM7XG4gIGlmIChzaXplIDw9IDUwMCkgcmV0dXJuIDI7XG4gIHJldHVybiAyO1xufTtcblxuY29uc3QgQ2hlY2tib3ggPSAoeyBiZywgY2hpbGRyZW4sIGluZGV0ZXJtaW5hdGUsIHNpemUsIC4uLnJlc3QgfSkgPT4ge1xuICBjb25zdCBUSEVNRSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IFVJRCA9IHV1aWR2NCgpO1xuICBjb25zdCBDUyA9IGdldENvbnRyb2xTaXplRm9yVGV4dFNpemUoc2l6ZSk7XG4gIGNvbnN0IFRFWFRfT0ZGU0VUID0gZ2V0VGV4dE9mZnNldEZvclRleHRTaXplKHNpemUpICsgXCJweFwiO1xuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgZGF0YS1mcmVzY28taWQ9XCJjaGVja2JveFwiXG4gICAgICByb2xlPVwiY2hlY2tib3hcIlxuICAgICAgYXM9XCJsYWJlbFwiXG4gICAgICBodG1sRm9yPXtVSUR9XG4gICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgIGRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIlxuICAgICAgaGVpZ2h0PXtDU31cbiAgICAgIHBsPXtgY2FsYygke0NTICsgXCJweFwifSArIDRweClgfVxuICAgICAgdmVydGljYWxBbGlnbj1cInRvcFwiXG4gICAgICBjc3M9e3sgdXNlclNlbGVjdDogXCJub25lXCIsIGN1cnNvcjogXCJwb2ludGVyXCIgfX1cbiAgICA+XG4gICAgICA8Qm94XG4gICAgICAgIGRhdGEtZnJlc2NvLWlkPVwiY2hlY2tib3guaGlkZGVuSW5wdXRcIlxuICAgICAgICBhcz1cImlucHV0XCJcbiAgICAgICAgaWQ9e1VJRH1cbiAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgcmVmPXsoZWwpID0+IGVsICYmIChlbC5pbmRldGVybWluYXRlID0gaW5kZXRlcm1pbmF0ZSl9XG4gICAgICAgIGNzcz17Y3NzKHtcbiAgICAgICAgICAuLi5oaWRlVmlzdWFsbHkoKSxcbiAgICAgICAgICBcIisgZGl2XCI6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTpcbiAgICAgICAgICAgICAgXCJ1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpZFhSbUxUZ2lQejROQ2p3aExTMGdSMlZ1WlhKaGRHOXlPaUJCWkc5aVpTQkpiR3gxYzNSeVlYUnZjaUF4Tnk0eExqQXNJRk5XUnlCRmVIQnZjblFnVUd4MVp5MUpiaUF1SUZOV1J5QldaWEp6YVc5dU9pQTJMakF3SUVKMWFXeGtJREFwSUNBdExUNE5DandoUkU5RFZGbFFSU0J6ZG1jZ1VGVkNURWxESUNJdEx5OVhNME12TDBSVVJDQlRWa2NnTVM0eEx5OUZUaUlnSW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTDBkeVlYQm9hV056TDFOV1J5OHhMakV2UkZSRUwzTjJaekV4TG1SMFpDSStEUW84YzNabklIWmxjbk5wYjI0OUlqRXVNU0lnYVdROUlreGhlV1Z5WHpFaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpSUhnOUlqQndlQ0lnZVQwaU1IQjRJZzBLQ1NCMmFXVjNRbTk0UFNJd0lEQWdPQ0E0SWlCbGJtRmliR1V0WW1GamEyZHliM1Z1WkQwaWJtVjNJREFnTUNBNElEZ2lJSGh0YkRwemNHRmpaVDBpY0hKbGMyVnlkbVVpUGcwS1BIQmhkR2dnWm1sc2JEMGlJMFpHUmtaR1JpSWdaRDBpVFRZdU5Dd3hURFV1Tnl3eExqZE1NaTQ1TERRdU5Vd3lMakVzTXk0M1RERXVOQ3d6VERBc05DNDBiREF1Tnl3d0xqZHNNUzQxTERFdU5Xd3dMamNzTUM0M2JEQXVOeTB3TGpkc015NDFMVE11Tld3d0xqY3RNQzQzVERZdU5Dd3hURFl1TkN3eGVpSU5DZ2t2UGcwS1BDOXpkbWMrRFFvPSlcIixcbiAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcIjUwJSA1MCVcIixcbiAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCI1MCUgNTAlXCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxuICAgICAgICAgICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDAgMXB4ICR7cmdiYShcbiAgICAgICAgICAgICAgVEhFTUUuY29sb3JzLmZpbGxbMF0sXG4gICAgICAgICAgICAgIDAuMlxuICAgICAgICAgICAgKX0sIDAgMCAxcHggJHtyZ2JhKFRIRU1FLmNvbG9ycy5maWxsWzBdLCAwLjEpfSwgMCAxcHggMnB4ICR7cmdiYShcbiAgICAgICAgICAgICAgVEhFTUUuY29sb3JzLmZpbGxbMF0sXG4gICAgICAgICAgICAgIDAuMVxuICAgICAgICAgICAgKX1gLFxuICAgICAgICAgICAgdXNlclNlbGVjdDogXCJub25lXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIjpjaGVja2VkICsgZGl2XCI6IHtcbiAgICAgICAgICAgIGJnOiBcInRpbnQuYmx1ZVwiLFxuICAgICAgICAgICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDAgMXB4ICR7cmdiYShcbiAgICAgICAgICAgICAgVEhFTUUuY29sb3JzLmZpbGxbMF0sXG4gICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICl9LCAwIDAgMXB4ICR7cmdiYShUSEVNRS5jb2xvcnMuZmlsbFswXSwgMC4xKX0sIDAgMXB4IDJweCAke3JnYmEoXG4gICAgICAgICAgICAgIFRIRU1FLmNvbG9ycy5maWxsWzBdLFxuICAgICAgICAgICAgICAwLjFcbiAgICAgICAgICAgICl9YCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiOmluZGV0ZXJtaW5hdGUgKyBkaXZcIjoge1xuICAgICAgICAgICAgYmc6IFwidGludC5ibHVlXCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6XG4gICAgICAgICAgICAgIFwidXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWRYUm1MVGdpUHo0TkNqd2hMUzBnUjJWdVpYSmhkRzl5T2lCQlpHOWlaU0JKYkd4MWMzUnlZWFJ2Y2lBeE55NHhMakFzSUZOV1J5QkZlSEJ2Y25RZ1VHeDFaeTFKYmlBdUlGTldSeUJXWlhKemFXOXVPaUEyTGpBd0lFSjFhV3hrSURBcElDQXRMVDROQ2p3aFJFOURWRmxRUlNCemRtY2dVRlZDVEVsRElDSXRMeTlYTTBNdkwwUlVSQ0JUVmtjZ01TNHhMeTlGVGlJZ0ltaDBkSEE2THk5M2QzY3Vkek11YjNKbkwwZHlZWEJvYVdOekwxTldSeTh4TGpFdlJGUkVMM04yWnpFeExtUjBaQ0krRFFvOGMzWm5JSFpsY25OcGIyNDlJakV1TVNJZ2FXUTlJa3hoZVdWeVh6RWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaUlIZzlJakJ3ZUNJZ2VUMGlNSEI0SWcwS0NTQjNhV1IwYUQwaU9IQjRJaUJvWldsbmFIUTlJamh3ZUNJZ2RtbGxkMEp2ZUQwaU1DQXdJRGdnT0NJZ1pXNWhZbXhsTFdKaFkydG5jbTkxYm1ROUltNWxkeUF3SURBZ09DQTRJaUI0Yld3NmMzQmhZMlU5SW5CeVpYTmxjblpsSWo0TkNqeHdZWFJvSUdacGJHdzlJaU5HUmtaR1JrWWlJR1E5SWswd0xETjJNbWc0VmpOSU1Ib2lMejROQ2p3dmMzWm5QZzBLKVwiLFxuICAgICAgICAgICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDAgMXB4ICR7cmdiYShcbiAgICAgICAgICAgICAgVEhFTUUuY29sb3JzLmZpbGxbMF0sXG4gICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICl9LCAwIDAgMXB4ICR7cmdiYShUSEVNRS5jb2xvcnMuZmlsbFswXSwgMC4xKX0sIDAgMXB4IDJweCAke3JnYmEoXG4gICAgICAgICAgICAgIFRIRU1FLmNvbG9ycy5maWxsWzBdLFxuICAgICAgICAgICAgICAwLjFcbiAgICAgICAgICAgICl9YCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiOmFjdGl2ZSArIGRpdlwiOiB7XG4gICAgICAgICAgICBiZzogXCJ0aW50LmJsdWVcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiOmZvY3VzICsgZGl2XCI6IHtcbiAgICAgICAgICAgIGJveFNoYWRvdzogYGluc2V0IDAgMCAwIDFweCAke1xuICAgICAgICAgICAgICBUSEVNRS5jb2xvcnMudGludC5ibHVlXG4gICAgICAgICAgICB9LCAwIDAgMXB4ICR7cmdiYShUSEVNRS5jb2xvcnMuZmlsbFswXSwgMC4xKX0sIDAgMXB4IDJweCAke3JnYmEoXG4gICAgICAgICAgICAgIFRIRU1FLmNvbG9ycy5maWxsWzBdLFxuICAgICAgICAgICAgICAwLjFcbiAgICAgICAgICAgICl9YCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KX1cbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAvPlxuICAgICAgPEJveFxuICAgICAgICBkYXRhLWZyZXNjby1pZD1cImNoZWNrYm94LmNvbnRyb2xcIlxuICAgICAgICBwb3NpdGlvbj1cImFic29sdXRlXCJcbiAgICAgICAgbGVmdD17MH1cbiAgICAgICAgZGlzcGxheT1cImJsb2NrXCJcbiAgICAgICAgd2lkdGg9e0NTfVxuICAgICAgICBoZWlnaHQ9e0NTfVxuICAgICAgICBib3JkZXJSYWRpdXM9XCIycHhcIlxuICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgYmc9e2JnfVxuICAgICAgLz5cbiAgICAgIDxCb3ggcHQ9e1RFWFRfT0ZGU0VUfT5cbiAgICAgICAgPFRleHQgZGF0YS1mcmVzY28taWQ9XCJjaGVja2JveC50ZXh0XCIgc2l6ZT17c2l6ZX0+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbkNoZWNrYm94LmRlZmF1bHRQcm9wcyA9IHtcbiAgYmc6IFwid2hpdGVcIixcbiAgc2l6ZTogNDAwLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tib3g7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$7
};

var Checkbox = function Checkbox(_ref) {
  var bg = _ref.bg,
      children = _ref.children,
      indeterminate = _ref.indeterminate,
      size = _ref.size,
      rest = _objectWithoutProperties(_ref, ["bg", "children", "indeterminate", "size"]);

  var THEME = useTheme();
  var UID = v4();
  var CS = getControlSizeForTextSize(size);
  var TEXT_OFFSET = getTextOffsetForTextSize(size) + "px";
  return jsx(Box, {
    "data-fresco-id": "checkbox",
    role: "checkbox",
    as: "label",
    htmlFor: UID,
    position: "relative",
    display: "inline-block",
    height: CS,
    pl: "calc(".concat(CS + "px", " + 4px)"),
    verticalAlign: "top",
    css: _ref2$7
  }, jsx(Box, _extends({
    "data-fresco-id": "checkbox.hiddenInput",
    as: "input",
    id: UID,
    type: "checkbox",
    ref: function ref(el) {
      return el && (el.indeterminate = indeterminate);
    },
    css: css(_objectSpread2({}, hideVisually(), {
      "+ div": {
        backgroundImage: "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgOCA4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA4IDgiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTYuNCwxTDUuNywxLjdMMi45LDQuNUwyLjEsMy43TDEuNCwzTDAsNC40bDAuNywwLjdsMS41LDEuNWwwLjcsMC43bDAuNy0wLjdsMy41LTMuNWwwLjctMC43TDYuNCwxTDYuNCwxeiINCgkvPg0KPC9zdmc+DQo=)",
        backgroundSize: "50% 50%",
        backgroundPosition: "50% 50%",
        backgroundRepeat: "no-repeat",
        boxShadow: "inset 0 0 0 1px ".concat(rgba(THEME.colors.fill[0], 0.2), ", 0 0 1px ").concat(rgba(THEME.colors.fill[0], 0.1), ", 0 1px 2px ").concat(rgba(THEME.colors.fill[0], 0.1)),
        userSelect: "none"
      },
      ":checked + div": {
        bg: "tint.blue",
        boxShadow: "inset 0 0 0 1px ".concat(rgba(THEME.colors.fill[0], 0), ", 0 0 1px ").concat(rgba(THEME.colors.fill[0], 0.1), ", 0 1px 2px ").concat(rgba(THEME.colors.fill[0], 0.1))
      },
      ":indeterminate + div": {
        bg: "tint.blue",
        backgroundImage: "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iOHB4IiBoZWlnaHQ9IjhweCIgdmlld0JveD0iMCAwIDggOCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgOCA4IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0wLDN2Mmg4VjNIMHoiLz4NCjwvc3ZnPg0K)",
        boxShadow: "inset 0 0 0 1px ".concat(rgba(THEME.colors.fill[0], 0), ", 0 0 1px ").concat(rgba(THEME.colors.fill[0], 0.1), ", 0 1px 2px ").concat(rgba(THEME.colors.fill[0], 0.1))
      },
      ":active + div": {
        bg: "tint.blue"
      },
      ":focus + div": {
        boxShadow: "inset 0 0 0 1px ".concat(THEME.colors.tint.blue, ", 0 0 1px ").concat(rgba(THEME.colors.fill[0], 0.1), ", 0 1px 2px ").concat(rgba(THEME.colors.fill[0], 0.1))
      }
    }))
  }, rest)), jsx(Box, {
    "data-fresco-id": "checkbox.control",
    position: "absolute",
    left: 0,
    display: "block",
    width: CS,
    height: CS,
    borderRadius: "2px",
    color: "white",
    bg: bg
  }), jsx(Box, {
    pt: TEXT_OFFSET
  }, jsx(Text, {
    "data-fresco-id": "checkbox.text",
    size: size
  }, children)));
};

Checkbox.defaultProps = {
  bg: "white",
  size: 400
};

var lodash_merge = createCommonjsModule(function (module, exports) {
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

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

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeMax = Math.max,
    nativeNow = Date.now;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

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
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack);
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
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

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

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
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = merge;
});

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue$1(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol$1 = root.Symbol,
    splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map$1 = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty$1.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty$1.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map$1 || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction$1(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue$1(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize$1(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize$1(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize$1.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize$1.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction$1(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

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
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get$2(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

var lodash_get = get$2;

var breakpoints = ["320px", "672px", "1024px", "1312px", "1584px"];
/** Aliases */

breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xlg = breakpoints[3];
breakpoints.max = breakpoints[4];

var colors = {
  label: [rgba(0, 0, 0, 1), rgba(60, 60, 67, 0.6), rgba(60, 60, 67, 0.3), rgba(60, 60, 67, 0.18)],
  fill: [rgba(120, 120, 128, 0.2), rgba(120, 120, 128, 0.16), rgba(118, 118, 128, 0.12), rgba(116, 116, 128, 0.08)],
  placeholderText: rgba(60, 60, 67, 0.3),
  background: [rgba(255, 255, 255, 1), rgba(242, 242, 247, 1), rgba(255, 255, 255, 1)],
  groupedBackground: [rgba(242, 242, 247, 1), rgba(255, 255, 255, 1), rgba(242, 242, 247, 1)],
  separator: rgba(60, 60, 67, 0.29),
  opaqueSeparator: rgba(198, 198, 200, 1),
  link: rgba(0, 122, 255, 1),
  darkText: rgba(0, 0, 0, 1),
  lightText: rgba(255, 255, 255, 0.6),
  tint: {
    red: "#FF3B30",
    orange: "#FF9500",
    yellow: "#FFCC00",
    green: "#34C759",
    teal: "#5AC8FA",
    blue: "#007AFF",
    indigo: "#5856D6",
    purple: "#AF52DE",
    pink: "#FF2D55"
  },
  gray: [rgba(142, 142, 147, 1), rgba(174, 174, 178, 1), rgba(199, 199, 204, 1), rgba(209, 209, 214, 1), rgba(229, 229, 234, 1), rgba(242, 242, 247, 1)],
  clear: rgba(0, 0, 0, 0),
  fixed: {
    black: rgba(0, 0, 0, 1),
    blue: rgba(0, 0, 255, 1),
    brown: rgba(153, 102, 51, 1),
    cyan: rgba(0, 255, 255, 1),
    darkGray: rgba(85, 85, 85, 1),
    gray: rgba(127, 127, 127, 1),
    green: rgba(0, 255, 0, 1),
    lightGray: rgba(170, 170, 170, 1),
    magenta: rgba(255, 0, 255, 1),
    orange: rgba(255, 127, 0, 1),
    purple: rgba(127, 0, 127, 1),
    red: rgba(255, 0, 0, 1),
    white: rgba(255, 255, 255, 1),
    yellow: rgba(255, 255, 0, 1)
  },
  modes: {
    dark: {
      label: [rgba(255, 255, 255, 1), rgba(235, 235, 245, 0.6), rgba(235, 235, 245, 0.3), rgba(235, 235, 245, 0.18)],
      fill: [rgba(120, 120, 128, 0.36), rgba(120, 120, 128, 0.32), rgba(118, 118, 128, 0.24), rgba(118, 118, 128, 0.18)],
      placeholderText: rgba(235, 235, 245, 0.3),
      background: [rgba(0, 0, 0, 1), rgba(28, 28, 30, 1), rgba(44, 44, 46, 1)],
      groupedBackground: [rgba(0, 0, 0, 1), rgba(28, 28, 30, 1), rgba(44, 44, 46, 1)],
      separator: rgba(84, 84, 88, 0.6),
      opaqueSeparator: rgba(56, 56, 58, 1),
      link: rgba(9, 132, 255, 1),
      darkText: rgba(0, 0, 0, 1),
      lightText: rgba(255, 255, 255, 0.6),
      tint: {
        red: "#FF453A",
        orange: "#FF9F0A",
        yellow: "#FFD60A",
        green: "#32D74B",
        teal: "#64D2FF",
        blue: "#0A84FF",
        indigo: "#5E5CE6",
        purple: "#BF5AF2",
        pink: "#FF375F"
      },
      gray: [rgba(142, 142, 147, 1), rgba(99, 99, 102, 1), rgba(72, 72, 74, 1), rgba(58, 58, 60, 1), rgba(44, 44, 46, 1), rgba(28, 28, 30, 1)],
      clear: rgba(0, 0, 0, 0),
      fixed: {
        black: rgba(0, 0, 0, 1),
        blue: rgba(0, 0, 255, 1),
        brown: rgba(153, 102, 51, 1),
        cyan: rgba(0, 255, 255, 1),
        darkGray: rgba(85, 85, 85, 1),
        gray: rgba(127, 127, 127, 1),
        green: rgba(0, 255, 0, 1),
        lightGray: rgba(170, 170, 170, 1),
        magenta: rgba(255, 0, 255, 1),
        orange: rgba(255, 127, 0, 1),
        purple: rgba(127, 0, 127, 1),
        red: rgba(255, 0, 0, 1),
        white: rgba(255, 255, 255, 1),
        yellow: rgba(255, 255, 0, 1)
      }
    }
  }
};

/** We have two spacing scales for different use cases */
var space$1 = [0, 2, 4, 8, 12, 16, 20, 24, 32, 40, 48];
/* **************
 * Linear sizing
 * *************/

/**
 * SPACING
 * space.spacing is reserved for component specific use cases that demand more precision
 */

space$1.spacing = space$1;
/**
 * LAYOUT
 * space.layout is meant to be used for laying out components and composing pages.
 */

space$1.layout = [0, 16, 24, 32, 48, 64, 80, 96, 128, 160];
/* **************
 * T-Shirt sizing
 * *************/

space$1.none = 0;
space$1.xxs = 4;
space$1.xs = 8;
space$1.sm = 12;
space$1.md = 20;
space$1.lg = 32;
space$1.xl = 48;
space$1.xxl = 96;

var corners = [0, "3px", "6px", "9px", "12px", "16px"];
var round = 9999;
var radii = {
  corners: corners,
  round: round
};

var fonts = {
  sans: "\"Inter\", system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
  mono: "SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace"
};

function round$1(method, number, precision) {
	if (typeof number !== 'number') {
		throw new TypeError('Expected value to be a number');
	}

	if (precision === Infinity) {
		return number;
	}

	if (!Number.isInteger(precision)) {
		throw new TypeError('Expected precision to be an integer');
	}

	const isRoundingAndNegative = method === 'round' && number < 0;
	if (isRoundingAndNegative) {
		number = Math.abs(number);
	}

	let exponent;
	[number, exponent] = `${number}e`.split('e');
	let result = Math[method](`${number}e${Number(exponent) + precision}`);

	[number, exponent] = `${result}e`.split('e');
	result = Number(`${number}e${Number(exponent) - precision}`);

	if (isRoundingAndNegative) {
		result = -result;
	}

	return result;
}

var roundTo = round$1.bind(null, 'round');
var up = round$1.bind(null, 'ceil');
var down = round$1.bind(null, 'floor');
roundTo.up = up;
roundTo.down = down;

const preventCollapse = 0.05;

function capsize(options) {
  if ('leading' in options && 'lineGap' in options) {
    throw new Error('Only a single line height style can be provided. Please pass either `lineGap` OR `leading`.');
  }

  if ('capHeight' in options && 'fontSize' in options) {
    throw new Error('Please pass either `capHeight` OR `fontSize`, not both.');
  }

  const {
    fontMetrics
  } = options;
  const capHeightScale = fontMetrics.capHeight / fontMetrics.unitsPerEm;
  let specifiedFontSize;
  let specifiedCapHeight;

  if ('capHeight' in options) {
    specifiedFontSize = options.capHeight / capHeightScale;
    specifiedCapHeight = options.capHeight;
  } else if ('fontSize' in options) {
    specifiedFontSize = options.fontSize;
    specifiedCapHeight = options.fontSize * capHeightScale;
  } else {
    throw new Error('Please pass either `capHeight` OR `fontSize`.');
  }

  let specifiedLineHeight;

  if ('lineGap' in options) {
    specifiedLineHeight = specifiedCapHeight + options.lineGap;
  } else if ('leading' in options) {
    specifiedLineHeight = options.leading;
  }

  return createCss({
    lineHeight: specifiedLineHeight,
    fontSize: specifiedFontSize,
    fontMetrics
  });
}

/*
   Rounding all values to a precision of `4` based on discovering that browser
   implementations of layout units fall between 1/60th and 1/64th of a pixel.

   Reference: https://trac.webkit.org/wiki/LayoutUnit
   (above wiki also mentions Mozilla - https://trac.webkit.org/wiki/LayoutUnit#Notes)
*/
const PRECISION = 4;

function createCss({
  lineHeight,
  fontSize,
  fontMetrics
}) {
  const toScale = value => value / fontSize;

  const absoluteDescent = Math.abs(fontMetrics.descent);
  const capHeightScale = fontMetrics.capHeight / fontMetrics.unitsPerEm;
  const descentScale = absoluteDescent / fontMetrics.unitsPerEm;
  const ascentScale = fontMetrics.ascent / fontMetrics.unitsPerEm;
  const lineGapScale = fontMetrics.lineGap / fontMetrics.unitsPerEm;
  const contentArea = fontMetrics.ascent + fontMetrics.lineGap + absoluteDescent;
  const lineHeightScale = contentArea / fontMetrics.unitsPerEm;
  const lineHeightNormal = lineHeightScale * fontSize;
  const specifiedLineHeightOffset = lineHeight ? (lineHeightNormal - lineHeight) / 2 : 0;

  const leadingTrim = value => value - toScale(specifiedLineHeightOffset) + toScale(preventCollapse);

  return {
    fontSize: `${roundTo(fontSize, PRECISION)}px`,
    lineHeight: lineHeight ? `${roundTo(lineHeight, PRECISION)}px` : 'normal',
    padding: `${preventCollapse}px 0`,
    '::before': {
      content: "''",
      marginTop: `${roundTo(leadingTrim(ascentScale - capHeightScale + lineGapScale / 2) * -1, PRECISION)}em`,
      display: 'block',
      height: 0
    },
    '::after': {
      content: "''",
      marginBottom: `${roundTo(leadingTrim(descentScale + lineGapScale / 2) * -1, PRECISION)}em`,
      display: 'block',
      height: 0
    }
  };
}

var _objectSpread2$1, _objectSpread3, _objectSpread4, _objectSpread5;
var fontMetrics = {
  capHeight: 2048,
  ascent: 2728,
  descent: -680,
  lineGap: 0,
  unitsPerEm: 2816
};
var headings = {
  "900": _objectSpread2({
    fontWeight: 600,
    letterSpacing: "-0.03em"
  }, capsize({
    fontMetrics: fontMetrics,
    capHeight: 24,
    lineGap: 10
  }), (_objectSpread2$1 = {}, _defineProperty(_objectSpread2$1, "@media screen and (min-width: ".concat(breakpoints.md, ")"), _objectSpread2({}, capsize({
    fontMetrics: fontMetrics,
    capHeight: 32,
    lineGap: 12
  }))), _defineProperty(_objectSpread2$1, "@media screen and (min-width: ".concat(breakpoints.lg, ")"), _objectSpread2({}, capsize({
    fontMetrics: fontMetrics,
    capHeight: 40,
    lineGap: 12
  }))), _objectSpread2$1)),
  "800": _objectSpread2({
    fontWeight: 600,
    letterSpacing: "-0.03em"
  }, capsize({
    fontMetrics: fontMetrics,
    capHeight: 20,
    lineGap: 10
  }), (_objectSpread3 = {}, _defineProperty(_objectSpread3, "@media screen and (min-width: ".concat(breakpoints.md, ")"), _objectSpread2({}, capsize({
    fontMetrics: fontMetrics,
    capHeight: 24,
    lineGap: 12
  }))), _defineProperty(_objectSpread3, "@media screen and (min-width: ".concat(breakpoints.lg, ")"), _objectSpread2({}, capsize({
    fontMetrics: fontMetrics,
    capHeight: 32,
    lineGap: 12
  }))), _objectSpread3)),
  "700": _objectSpread2({
    fontWeight: 600,
    letterSpacing: "-0.03em"
  }, capsize({
    fontMetrics: fontMetrics,
    capHeight: 18,
    lineGap: 8
  }), (_objectSpread4 = {}, _defineProperty(_objectSpread4, "@media screen and (min-width: ".concat(breakpoints.md, ")"), _objectSpread2({}, capsize({
    fontMetrics: fontMetrics,
    capHeight: 20,
    lineGap: 10
  }))), _defineProperty(_objectSpread4, "@media screen and (min-width: ".concat(breakpoints.lg, ")"), _objectSpread2({}, capsize({
    fontMetrics: fontMetrics,
    capHeight: 24,
    lineGap: 10
  }))), _objectSpread4)),
  "600": _objectSpread2({
    fontWeight: 600,
    letterSpacing: "-0.015em"
  }, capsize({
    fontMetrics: fontMetrics,
    capHeight: 14,
    lineGap: 8
  }), (_objectSpread5 = {}, _defineProperty(_objectSpread5, "@media screen and (min-width: ".concat(breakpoints.md, ")"), _objectSpread2({}, capsize({
    fontMetrics: fontMetrics,
    capHeight: 16,
    lineGap: 8
  }))), _defineProperty(_objectSpread5, "@media screen and (min-width: ".concat(breakpoints.lg, ")"), _objectSpread2({}, capsize({
    fontMetrics: fontMetrics,
    capHeight: 18,
    lineGap: 8
  }))), _objectSpread5)),
  "500": _objectSpread2({
    fontWeight: 600,
    letterSpacing: "-0.015em"
  }, capsize({
    fontMetrics: fontMetrics,
    capHeight: 12,
    lineGap: 6
  })),
  "400": _objectSpread2({
    fontWeight: 600,
    letterSpacing: "-0.015em"
  }, capsize({
    fontMetrics: fontMetrics,
    capHeight: 10,
    lineGap: 6
  })),
  "300": _objectSpread2({
    fontWeight: 600,
    letterSpacing: "-0.015em"
  }, capsize({
    fontMetrics: fontMetrics,
    capHeight: 8,
    lineGap: 4
  })),
  "100": _objectSpread2({
    fontWeight: 600,
    letterSpacing: "0.02em",
    textTransform: "uppercase"
  }, capsize({
    fontMetrics: fontMetrics,
    capHeight: 8,
    lineGap: 4
  }))
};

var fontMetrics$1 = {
  capHeight: 2048,
  ascent: 2728,
  descent: -680,
  lineGap: 0,
  unitsPerEm: 2816
};
var text = {
  "600": _objectSpread2({
    fontWeight: 400,
    letterSpacing: "-0.015em"
  }, capsize({
    fontMetrics: fontMetrics$1,
    capHeight: 14,
    lineGap: 8
  }), _defineProperty({}, "@media screen and (min-width: ".concat(breakpoints.md, ")"), _objectSpread2({}, capsize({
    fontMetrics: fontMetrics$1,
    capHeight: 16,
    lineGap: 8
  })))),
  "500": _objectSpread2({
    fontWeight: 400,
    letterSpacing: "-0.015em"
  }, capsize({
    fontMetrics: fontMetrics$1,
    capHeight: 12,
    lineGap: 8
  })),
  "400": _objectSpread2({
    fontWeight: 400,
    letterSpacing: "-0.015em"
  }, capsize({
    fontMetrics: fontMetrics$1,
    capHeight: 10,
    lineGap: 8
  })),
  "300": _objectSpread2({
    fontWeight: 400,
    letterSpacing: "-0.015em"
  }, capsize({
    fontMetrics: fontMetrics$1,
    capHeight: 8,
    lineGap: 8
  }))
};

var fontMetrics$2 = {
  capHeight: 2048,
  ascent: 2728,
  descent: -680,
  lineGap: 0,
  unitsPerEm: 2816
};
var paragraph = {
  "600": _objectSpread2({
    fontWeight: 400,
    letterSpacing: "-0.015em"
  }, capsize({
    fontMetrics: fontMetrics$2,
    capHeight: 14,
    lineGap: 10
  }), _defineProperty({}, "@media screen and (min-width: ".concat(breakpoints.md, ")"), _objectSpread2({}, capsize({
    fontMetrics: fontMetrics$2,
    capHeight: 16,
    lineGap: 12
  })))),
  "500": _objectSpread2({
    fontWeight: 400,
    letterSpacing: "-0.015em"
  }, capsize({
    fontMetrics: fontMetrics$2,
    capHeight: 12,
    lineGap: 10
  })),
  "400": _objectSpread2({
    fontWeight: 400,
    letterSpacing: "-0.015em"
  }, capsize({
    fontMetrics: fontMetrics$2,
    capHeight: 10,
    lineGap: 10
  })),
  "300": _objectSpread2({
    fontWeight: 400,
    letterSpacing: "-0.015em"
  }, capsize({
    fontMetrics: fontMetrics$2,
    capHeight: 8,
    lineGap: 10
  }))
};

var elevations = ["none",
/**
 * https://brumm.af/shadows
 * Layers: 3
 * Final transparency: 0.07
 * Final vertical distance: 4px
 * Final blur strength: 24px
 */
"\n    0 0.3px 1.6px rgba(0, 0, 0, 0.028),\n    0 0.9px 5.4px rgba(0, 0, 0, 0.042),\n    0 4px 24px rgba(0, 0, 0, 0.07)\n  ",
/**
 * https://brumm.af/shadows
 * Layers: 4
 * Final transparency: 0.07
 * Final vertical distance: 12px
 * Final blur strength: 32px
 */
"\n    0 0.5px 1.4px rgba(0, 0, 0, 0.024),\n    0 1.5px 4px rgba(0, 0, 0, 0.035),\n    0 3.6px 9.6px rgba(0, 0, 0, 0.046),\n    0 12px 32px rgba(0, 0, 0, 0.07)\n  ",
/**
 * https://brumm.af/shadows
 * Layers: 5
 * Final transparency: 0.07
 * Final vertical distance: 24px
 * Final blur strength: 48px
 */
"\n    0 0.8px 1.6px rgba(0, 0, 0, 0.022),\n    0 2.1px 4.2px rgba(0, 0, 0, 0.031),\n    0 4.3px 8.5px rgba(0, 0, 0, 0.039),\n    0 8.8px 17.5px rgba(0, 0, 0, 0.048),\n    0 24px 48px rgba(0, 0, 0, 0.07)\n  ",
/**
 * https://brumm.af/shadows
 * Layers: 6
 * Final transparency: 0.07
 * Final vertical distance: 32px
 * Final blur strength: 64px
 */
"\n    0 0.9px 1.8px rgba(0, 0, 0, 0.02),\n    0 2.1px 4.3px rgba(0, 0, 0, 0.028),\n    0 4px 8px rgba(0, 0, 0, 0.035),\n    0 7.1px 14.3px rgba(0, 0, 0, 0.042),\n    0 13.4px 26.7px rgba(0, 0, 0, 0.05),\n    0 32px 64px rgba(0, 0, 0, 0.07)\n  "];
var shadows = {
  elevations: elevations
};

/**
 * Theme
 *
 * Here we define the Theme that is used throughout the site.
 * Each file refers to a specific area of concern in the site
 * and brand specifications and comes directly from the design
 * files as often as possible.
 *
 * Theme properties can be absorbed by most components when
 * referring to breakpoints, colors, typographic elements, and
 * wherever layout spacing is used.
 */
var Theme = {
  breakpoints: breakpoints,
  colors: colors,
  fonts: fonts,
  headings: headings,
  paragraph: paragraph,
  radii: radii,
  shadows: shadows,
  space: space$1,
  text: text
};

var ColorMode = function ColorMode(_ref) {
  var children = _ref.children,
      mode = _ref.mode;
  return jsx(ThemeProvider, {
    theme: lodash_merge({}, Theme, {
      colors: lodash_get(Theme.colors.modes, mode, Theme.colors)
    })
  }, children);
};

var StyledBox$1 = /*#__PURE__*/createStyled(Box, {
  target: "e49gzzr0",
  label: "StyledBox"
})(system({
  gutterX: {
    properties: ["paddingRight", "paddingLeft"],
    scale: "space",
    transform: function transform(n, scale) {
      var value = get(scale, n);

      if (!value) {
        value = n;
      }

      if (typeof n === "string") {
        if (n.indexOf("px") !== -1) {
          var number = parseInt(n.replace("px", ""));
          return number / 2 + "px";
        } else {
          return value / 2 + "px";
        }
      } else {
        return value / 2 + "px";
      }
    }
  },
  gutterY: {
    properties: ["paddingTop", "paddingBottom"],
    scale: "space",
    transform: function transform(n, scale) {
      var value = get(scale, n);

      if (!value) {
        value = n;
      }

      if (typeof n === "string") {
        if (n.indexOf("px") !== -1) {
          var number = parseInt(n.replace("px", ""));
          return number / 2 + "px";
        } else {
          return value / 2 + "px";
        }
      } else {
        return value / 2 + "px";
      }
    }
  }
}), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbHVtbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQmtCIiwiZmlsZSI6IkNvbHVtbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29sdW1uXG4gKlxuICogV2UgdXNlIHRoZSBDb2x1bW4gY29tcG9uZW50IGRpcmVjdGx5IGluc2lkZSBhbmQgb25seSBpbnNpZGUgb2YgdGhlXG4gKiBDb2x1bW5zIGNvbXBvbmVudC4gVGhpcyBnaXZlcyB1cyBjb250cm9sIG92ZXIgc2V0dGluZyBjb2x1bW4gd2lkdGhcbiAqIGFuZCBhbGxvd3MgdXMgdG8gcGFzcyBkb3duIHNwYWNpbmcgcHJvcGVydGllcyBmcm9tIENvbHVtbnMgdG8gZWFjaFxuICogaW5kaXZpZHVhbCBDb2x1bW4uXG4gKlxuICogV2hlbiB3ZSB1c2UgYSBDb2x1bW4gaW4gYW5vdGhlciBjb21wb25lbnQsIHdlIG11c3QgcGFzcyBhbGwgcHJvcHNcbiAqIGludG8gdGhlIENvbHVtbiBzbyB0aGF0IHRoZSBwcm9wcyBmcm9tIENvbHVtbnMgYXJlIGFic29yYmVkXG4gKiBwcm9wZXJseS4gVXNlIGEgc3ByZWFkIG9wZXJhdG9yIGxpa2Ugey4uLnByb3BzfSB0byBkbyB0aGlzLlxuICovXG5cbmltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7IHN5c3RlbSwgZ2V0IH0gZnJvbSBcInN0eWxlZC1zeXN0ZW1cIjtcblxuaW1wb3J0IHsgQm94IH0gZnJvbSBcIi4uLy4uL2JveFwiO1xuXG5jb25zdCBTdHlsZWRCb3ggPSBzdHlsZWQoQm94KShcbiAgc3lzdGVtKHtcbiAgICBndXR0ZXJYOiB7XG4gICAgICBwcm9wZXJ0aWVzOiBbXCJwYWRkaW5nUmlnaHRcIiwgXCJwYWRkaW5nTGVmdFwiXSxcbiAgICAgIHNjYWxlOiBcInNwYWNlXCIsXG4gICAgICB0cmFuc2Zvcm06IChuLCBzY2FsZSkgPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSBnZXQoc2NhbGUsIG4pO1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgdmFsdWUgPSBuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgIGlmIChuLmluZGV4T2YoXCJweFwiKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGxldCBudW1iZXIgPSBwYXJzZUludChuLnJlcGxhY2UoXCJweFwiLCBcIlwiKSk7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyIC8gMiArIFwicHhcIjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlIC8gMiArIFwicHhcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlIC8gMiArIFwicHhcIjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9LFxuICAgIGd1dHRlclk6IHtcbiAgICAgIHByb3BlcnRpZXM6IFtcInBhZGRpbmdUb3BcIiwgXCJwYWRkaW5nQm90dG9tXCJdLFxuICAgICAgc2NhbGU6IFwic3BhY2VcIixcbiAgICAgIHRyYW5zZm9ybTogKG4sIHNjYWxlKSA9PiB7XG4gICAgICAgIGxldCB2YWx1ZSA9IGdldChzY2FsZSwgbik7XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICB2YWx1ZSA9IG47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgaWYgKG4uaW5kZXhPZihcInB4XCIpICE9PSAtMSkge1xuICAgICAgICAgICAgbGV0IG51bWJlciA9IHBhcnNlSW50KG4ucmVwbGFjZShcInB4XCIsIFwiXCIpKTtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXIgLyAyICsgXCJweFwiO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgLyAyICsgXCJweFwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWUgLyAyICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG4pO1xuXG5jb25zdCBDb2x1bW4gPSBmb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgY2hpbGRyZW4sXG4gICAgICBjb2x1bW5Db21wb25lbnQsXG4gICAgICBkaXNwbGF5LFxuICAgICAgb3JkZXIsXG4gICAgICBzcGFjZSA9IDAsXG4gICAgICBzcGFjZVgsXG4gICAgICBzcGFjZVksXG4gICAgICB3aWR0aCxcbiAgICB9LFxuICAgIHJlZlxuICApID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPFN0eWxlZEJveFxuICAgICAgICBkYXRhLWZyZXNjby1pZD1cImNvbHVtblwiXG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICBhcz17Y29sdW1uQ29tcG9uZW50fVxuICAgICAgICBkaXNwbGF5PXtkaXNwbGF5fVxuICAgICAgICBmbGV4PXshd2lkdGggJiYgMX1cbiAgICAgICAgZmxleFNocmluaz17d2lkdGggPT09IFwiY29udGVudFwiICYmIDB9XG4gICAgICAgIG9yZGVyPXtvcmRlcn1cbiAgICAgICAgd2lkdGg9e3dpZHRoICE9PSBcImNvbnRlbnRcIiA/IHdpZHRoIDogbnVsbH1cbiAgICAgICAgbWluV2lkdGg9ezB9XG4gICAgICAgIGd1dHRlclg9e3NwYWNlWCA/IHNwYWNlWCA6IHNwYWNlfVxuICAgICAgICBndXR0ZXJZPXtzcGFjZVkgPyBzcGFjZVkgOiBzcGFjZX1cbiAgICAgID5cbiAgICAgICAgPEJveCBkYXRhLWZyZXNjby1pZD1cImNvbHVtbi5pbm5lclwiIG1pbldpZHRoPXswfSBoZWlnaHQ9XCIxMDAlXCI+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0JveD5cbiAgICAgIDwvU3R5bGVkQm94PlxuICAgICk7XG4gIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IENvbHVtbjtcbiJdfQ== */");

var Column = forwardRef(function (_ref, ref) {
  var children = _ref.children,
      columnComponent = _ref.columnComponent,
      display = _ref.display,
      order = _ref.order,
      _ref$space = _ref.space,
      space = _ref$space === void 0 ? 0 : _ref$space,
      spaceX = _ref.spaceX,
      spaceY = _ref.spaceY,
      width = _ref.width;
  return jsx(StyledBox$1, {
    "data-fresco-id": "column",
    ref: ref,
    as: columnComponent,
    display: display,
    flex: !width && 1,
    flexShrink: width === "content" && 0,
    order: order,
    width: width !== "content" ? width : null,
    minWidth: 0,
    gutterX: spaceX ? spaceX : space,
    gutterY: spaceY ? spaceY : space
  }, jsx(Box, {
    "data-fresco-id": "column.inner",
    minWidth: 0,
    height: "100%"
  }, children));
});

function flexAlign$2(position) {
  if (position === "start") return "flex-start";
  if (position === "center") return "center";
  if (position === "end") return "flex-end";
  if (position === "between") return "space-between";
  if (position === "evenly") return "space-evenly";
  return undefined;
}

var StyledBox$2 = /*#__PURE__*/createStyled(Box, {
  target: "e1ns77w50",
  label: "StyledBox"
})(
/**
 * These system specifications absorb values defined in the Theme
 * and converts them to whole numbers. It's also set up whole
 * numbers or pixel values.
 *
 * Refer to https://styled-system.com/api#system to learn more
 * about how the system utility works and its implementation.
 *
 * If more information is required we recommend referring to the
 * source code for styled-system where its author uses system to
 * create most of the style props that we actually use.
 */
system({
  negativeMarginX: {
    properties: ["marginRight", "marginLeft"],
    scale: "space",
    // Refer the space scale in Theme
    transform: function transform(n, scale) {
      var value = get(scale, n);

      if (!value) {
        value = n;
      }

      if (typeof n === "string") {
        if (n.indexOf("px") !== -1) {
          var number = parseInt(n.replace("px", ""));
          return "-" + number / 2 + "px";
        } else {
          return "-" + value / 2 + "px";
        }
      } else {
        return "-" + value / 2 + "px";
      }
    }
  },
  negativeMarginY: {
    properties: ["marginTop", "marginBottom"],
    scale: "space",
    // Refer the space scale in Theme
    transform: function transform(n, scale) {
      var value = get(scale, n);

      if (!value) {
        value = n;
      }

      if (typeof n === "string") {
        if (n.indexOf("px") !== -1) {
          var number = parseInt(n.replace("px", ""));
          return "-" + number / 2 + "px";
        } else {
          return "-" + value / 2 + "px";
        }
      } else {
        return "-" + value / 2 + "px";
      }
    }
  }
}), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbHVtbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJrQiIsImZpbGUiOiJDb2x1bW5zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb2x1bW5zXG4gKlxuICogQ29sdW1ucyBpcyB0aGUgZGlyZWN0IHBhcmVudCBvZiBDb2x1bW4gYW5kIGRlZmluZXMgdGhlXG4gKiBzcGFjaW5nIGJldHdlZW4gZWFjaCBDb2x1bW4uXG4gKlxuICogQ29sdW1ucyBjYW4gYWNjZXB0IGJvdGggVGhlbWUgcHJvcGVydGllcyBhcyB3ZWxsIGFzXG4gKiB2YWx1ZXMgYXMgd2hvbGUgbnVtYmVycyBvciBwaXhlbHMuXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHsgc3lzdGVtLCBnZXQgfSBmcm9tIFwic3R5bGVkLXN5c3RlbVwiO1xuXG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiLi4vLi4vYm94XCI7XG5cbmZ1bmN0aW9uIGZsZXhBbGlnbihwb3NpdGlvbikge1xuICBpZiAocG9zaXRpb24gPT09IFwic3RhcnRcIikgcmV0dXJuIFwiZmxleC1zdGFydFwiO1xuICBpZiAocG9zaXRpb24gPT09IFwiY2VudGVyXCIpIHJldHVybiBcImNlbnRlclwiO1xuICBpZiAocG9zaXRpb24gPT09IFwiZW5kXCIpIHJldHVybiBcImZsZXgtZW5kXCI7XG4gIGlmIChwb3NpdGlvbiA9PT0gXCJiZXR3ZWVuXCIpIHJldHVybiBcInNwYWNlLWJldHdlZW5cIjtcbiAgaWYgKHBvc2l0aW9uID09PSBcImV2ZW5seVwiKSByZXR1cm4gXCJzcGFjZS1ldmVubHlcIjtcbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuY29uc3QgU3R5bGVkQm94ID0gc3R5bGVkKEJveCkoXG4gIC8qKlxuICAgKiBUaGVzZSBzeXN0ZW0gc3BlY2lmaWNhdGlvbnMgYWJzb3JiIHZhbHVlcyBkZWZpbmVkIGluIHRoZSBUaGVtZVxuICAgKiBhbmQgY29udmVydHMgdGhlbSB0byB3aG9sZSBudW1iZXJzLiBJdCdzIGFsc28gc2V0IHVwIHdob2xlXG4gICAqIG51bWJlcnMgb3IgcGl4ZWwgdmFsdWVzLlxuICAgKlxuICAgKiBSZWZlciB0byBodHRwczovL3N0eWxlZC1zeXN0ZW0uY29tL2FwaSNzeXN0ZW0gdG8gbGVhcm4gbW9yZVxuICAgKiBhYm91dCBob3cgdGhlIHN5c3RlbSB1dGlsaXR5IHdvcmtzIGFuZCBpdHMgaW1wbGVtZW50YXRpb24uXG4gICAqXG4gICAqIElmIG1vcmUgaW5mb3JtYXRpb24gaXMgcmVxdWlyZWQgd2UgcmVjb21tZW5kIHJlZmVycmluZyB0byB0aGVcbiAgICogc291cmNlIGNvZGUgZm9yIHN0eWxlZC1zeXN0ZW0gd2hlcmUgaXRzIGF1dGhvciB1c2VzIHN5c3RlbSB0b1xuICAgKiBjcmVhdGUgbW9zdCBvZiB0aGUgc3R5bGUgcHJvcHMgdGhhdCB3ZSBhY3R1YWxseSB1c2UuXG4gICAqL1xuICBzeXN0ZW0oe1xuICAgIG5lZ2F0aXZlTWFyZ2luWDoge1xuICAgICAgcHJvcGVydGllczogW1wibWFyZ2luUmlnaHRcIiwgXCJtYXJnaW5MZWZ0XCJdLFxuICAgICAgc2NhbGU6IFwic3BhY2VcIiwgLy8gUmVmZXIgdGhlIHNwYWNlIHNjYWxlIGluIFRoZW1lXG4gICAgICB0cmFuc2Zvcm06IChuLCBzY2FsZSkgPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSBnZXQoc2NhbGUsIG4pO1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgdmFsdWUgPSBuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgIGlmIChuLmluZGV4T2YoXCJweFwiKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGxldCBudW1iZXIgPSBwYXJzZUludChuLnJlcGxhY2UoXCJweFwiLCBcIlwiKSk7XG4gICAgICAgICAgICByZXR1cm4gXCItXCIgKyBudW1iZXIgLyAyICsgXCJweFwiO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXCItXCIgKyB2YWx1ZSAvIDIgKyBcInB4XCI7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBcIi1cIiArIHZhbHVlIC8gMiArIFwicHhcIjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9LFxuICAgIG5lZ2F0aXZlTWFyZ2luWToge1xuICAgICAgcHJvcGVydGllczogW1wibWFyZ2luVG9wXCIsIFwibWFyZ2luQm90dG9tXCJdLFxuICAgICAgc2NhbGU6IFwic3BhY2VcIiwgLy8gUmVmZXIgdGhlIHNwYWNlIHNjYWxlIGluIFRoZW1lXG4gICAgICB0cmFuc2Zvcm06IChuLCBzY2FsZSkgPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSBnZXQoc2NhbGUsIG4pO1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgdmFsdWUgPSBuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgIGlmIChuLmluZGV4T2YoXCJweFwiKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGxldCBudW1iZXIgPSBwYXJzZUludChuLnJlcGxhY2UoXCJweFwiLCBcIlwiKSk7XG4gICAgICAgICAgICByZXR1cm4gXCItXCIgKyBudW1iZXIgLyAyICsgXCJweFwiO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXCItXCIgKyB2YWx1ZSAvIDIgKyBcInB4XCI7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBcIi1cIiArIHZhbHVlIC8gMiArIFwicHhcIjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9LFxuICB9KVxuKTtcblxuY29uc3QgQ29sdW1ucyA9IGZvcndhcmRSZWYoXG4gIChcbiAgICB7IGFsaWduWCwgYWxpZ25ZLCBhcyA9IFwiZGl2XCIsIGNoaWxkcmVuLCBzcGFjZSA9IDAsIHNwYWNlWCwgc3BhY2VZIH0sXG4gICAgcmVmXG4gICkgPT4ge1xuICAgIC8qKlxuICAgICAqIFNldHRpbmcgdGhlIFwiYXNcIiBwcm9wIHRvIFwib2xcIiBvciBcInVsXCIgd2lsbCB0dXJuIHRoZSBDb2x1bW5zXG4gICAgICogY29tcG9uZW50IGludG8gYSBvbCBvciB1bCBlbGVtZW50IGFuZCBhbGwgQ29sdW1uIGNoaWxkcmVuXG4gICAgICogaW50byBsaSBpdGVtcy5cbiAgICAgKi9cbiAgICBjb25zdCBpc0xpc3QgPSBhcyA9PT0gXCJvbFwiIHx8IGFzID09PSBcInVsXCI7XG4gICAgY29uc3QgY29sdW1uQ29tcG9uZW50ID0gaXNMaXN0ID8gXCJsaVwiIDogXCJkaXZcIjtcblxuICAgIC8vIFBhc3MgcHJvcGVydGllcyBkb3duIHRvIGNoaWxkcmVuXG4gICAgY29uc3QgY2hpbGRyZW5XaXRoUHJvcHMgPSBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZCkgPT4ge1xuICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgICBjb2x1bW5Db21wb25lbnQ6IGNvbHVtbkNvbXBvbmVudCxcbiAgICAgICAgICBzcGFjZTogc3BhY2UsXG4gICAgICAgICAgc3BhY2VYOiBzcGFjZVgsXG4gICAgICAgICAgc3BhY2VZOiBzcGFjZVksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHlsZWRCb3hcbiAgICAgICAgZGF0YS1mcmVzY28taWQ9XCJjb2x1bW5zXCJcbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgIGFzPXthc31cbiAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICBmbGV4V3JhcD1cIndyYXBcIlxuICAgICAgICBqdXN0aWZ5Q29udGVudD17ZmxleEFsaWduKGFsaWduWCl9XG4gICAgICAgIGFsaWduSXRlbXM9e2ZsZXhBbGlnbihhbGlnblkpfVxuICAgICAgICBuZWdhdGl2ZU1hcmdpblg9e3NwYWNlWCA/IHNwYWNlWCA6IHNwYWNlfVxuICAgICAgICBuZWdhdGl2ZU1hcmdpblk9e3NwYWNlWSA/IHNwYWNlWSA6IHNwYWNlfVxuICAgICAgICBwPXswfVxuICAgICAgICBjc3M9e2lzTGlzdCAmJiB7IGxpc3RTdHlsZTogXCJub25lXCIgfX1cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVuV2l0aFByb3BzfVxuICAgICAgPC9TdHlsZWRCb3g+XG4gICAgKTtcbiAgfVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ29sdW1ucztcbiJdfQ== */");

var Columns = forwardRef(function (_ref, ref) {
  var alignX = _ref.alignX,
      alignY = _ref.alignY,
      _ref$as = _ref.as,
      as = _ref$as === void 0 ? "div" : _ref$as,
      children = _ref.children,
      _ref$space = _ref.space,
      space = _ref$space === void 0 ? 0 : _ref$space,
      spaceX = _ref.spaceX,
      spaceY = _ref.spaceY;

  /**
   * Setting the "as" prop to "ol" or "ul" will turn the Columns
   * component into a ol or ul element and all Column children
   * into li items.
   */
  var isList = as === "ol" || as === "ul";
  var columnComponent = isList ? "li" : "div"; // Pass properties down to children

  var childrenWithProps = React__default.Children.map(children, function (child) {
    if (child) {
      return React__default.cloneElement(child, {
        columnComponent: columnComponent,
        space: space,
        spaceX: spaceX,
        spaceY: spaceY
      });
    }
  });
  return jsx(StyledBox$2, {
    "data-fresco-id": "columns",
    ref: ref,
    as: as,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: flexAlign$2(alignX),
    alignItems: flexAlign$2(alignY),
    negativeMarginX: spaceX ? spaceX : space,
    negativeMarginY: spaceY ? spaceY : space,
    p: 0,
    css: isList && {
      listStyle: "none"
    }
  }, childrenWithProps);
});

function ContentBlock(_ref) {
  var _ref$maxWidth = _ref.maxWidth,
      maxWidth = _ref$maxWidth === void 0 ? 1400 : _ref$maxWidth,
      rest = _objectWithoutProperties(_ref, ["maxWidth"]);

  return jsx(Box, _extends({
    "data-fresco-id": "contentBlock",
    width: "100%",
    maxWidth: maxWidth,
    mx: "auto"
  }, rest));
}

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

/**
 * Assigns a value for a given ref, no matter of the ref format
 * @param {RefObject} ref - a callback function or ref object
 * @param value - a new value
 *
 * @see https://github.com/theKashey/use-callback-ref#assignref
 * @example
 * const refObject = useRef();
 * const refFn = (ref) => {....}
 *
 * assignRef(refObject, "refValue");
 * assignRef(refFn, "refValue");
 */
function assignRef$1(ref, value) {
    if (typeof ref === 'function') {
        ref(value);
    }
    else if (ref) {
        ref.current = value;
    }
    return ref;
}

/**
 * creates a MutableRef with ref change callback
 * @param initialValue - initial ref value
 * @param {Function} callback - a callback to run when value changes
 *
 * @example
 * const ref = useCallbackRef(0, (newValue, oldValue) => console.log(oldValue, '->', newValue);
 * ref.current = 1;
 * // prints 0 -> 1
 *
 * @see https://reactjs.org/docs/hooks-reference.html#useref
 * @see https://github.com/theKashey/use-callback-ref#usecallbackref---to-replace-reactuseref
 * @returns {MutableRefObject}
 */
function useCallbackRef(initialValue, callback) {
    var ref = useState(function () { return ({
        // value
        value: initialValue,
        // last callback
        callback: callback,
        // "memoized" public interface
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
    // update callback
    ref.callback = callback;
    return ref.facade;
}

/**
 * Merges two or more refs together providing a single interface to set their value
 * @param {RefObject|Ref} refs
 * @returns {MutableRefObject} - a new ref, which translates all changes to {refs}
 *
 * @see {@link mergeRefs} a version without buit-in memoization
 * @see https://github.com/theKashey/use-callback-ref#usemergerefs
 * @example
 * const Component = React.forwardRef((props, ref) => {
 *   const ownRef = useRef();
 *   const domRef = useMergeRefs([ref, ownRef]); // 👈 merge together
 *   return <div ref={domRef}>...</div>
 * }
 */
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
  return /*#__PURE__*/createElement(Fragment$1, null, /*#__PURE__*/createElement("div", {
    key: "guard-first",
    "data-focus-guard": true,
    "data-focus-auto-guard": true,
    style: hiddenGuard
  }), children, children && /*#__PURE__*/createElement("div", {
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
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
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
    return createElement(Target, __assign({}, rest));
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
var FocusLock = /*#__PURE__*/forwardRef(function (props, parentRef) {
  var _extends2;

  var _React$useState = useState(),
      realObserved = _React$useState[0],
      setObserved = _React$useState[1];

  var observed = useRef();
  var isActive = useRef(false);
  var originalFocusedElement = useRef(null);
  var children = props.children,
      disabled = props.disabled,
      noFocusGuards = props.noFocusGuards,
      persistentFocus = props.persistentFocus,
      crossFrame = props.crossFrame,
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

  var _React$useState2 = useState({}),
      id = _React$useState2[0]; // SIDE EFFECT CALLBACKS


  var onActivation = useCallback(function () {
    originalFocusedElement.current = originalFocusedElement.current || document && document.activeElement;

    if (observed.current && onActivationCallback) {
      onActivationCallback(observed.current);
    }

    isActive.current = true;
  }, [onActivationCallback]);
  var onDeactivation = useCallback(function () {
    isActive.current = false;

    if (onDeactivationCallback) {
      onDeactivationCallback(observed.current);
    }
  }, [onDeactivationCallback]);
  var returnFocus = useCallback(function (allowDefer) {
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

  var onFocus = useCallback(function (event) {
    if (isActive.current) {
      mediumFocus.useMedium(event);
    }
  }, []);
  var onBlur = mediumBlur.useMedium; // REF PROPAGATION
  // not using real refs due to race conditions

  var setObserveNode = useCallback(function (newObserved) {
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

    useEffect(function () {
      if (!observed.current) {
        // eslint-disable-next-line no-console
        console.error('FocusLock: could not obtain ref to internal node');
      }
    }, []);
  }

  var lockProps = _extends$2((_extends2 = {}, _extends2[FOCUS_DISABLED] = disabled && 'disabled', _extends2[FOCUS_GROUP] = group, _extends2), containerProps);

  var hasLeadingGuards = noFocusGuards !== true;
  var hasTailingGuards = hasLeadingGuards && noFocusGuards !== 'tail';
  var mergedRef = useMergeRefs([parentRef, setObserveNode]);
  return /*#__PURE__*/createElement(Fragment$1, null, hasLeadingGuards && [/*#__PURE__*/createElement("div", {
    key: "guard-first",
    "data-focus-guard": true,
    tabIndex: disabled ? -1 : 0,
    style: hiddenGuard
  }),
  /*#__PURE__*/
  // nearest focus guard
  createElement("div", {
    key: "guard-nearest",
    "data-focus-guard": true,
    tabIndex: disabled ? -1 : 1,
    style: hiddenGuard
  }) // first tabbed element guard
  ], !disabled && /*#__PURE__*/createElement(SideCar, {
    id: id,
    sideCar: mediumSidecar,
    observed: realObserved,
    disabled: disabled,
    persistentFocus: persistentFocus,
    crossFrame: crossFrame,
    autoFocus: autoFocus,
    whiteList: whiteList,
    shards: shards,
    onActivation: onActivation,
    onDeactivation: onDeactivation,
    returnFocus: returnFocus
  }), /*#__PURE__*/createElement(Container, _extends$2({
    ref: mergedRef
  }, lockProps, {
    className: className,
    onBlur: onBlur,
    onFocus: onFocus
  }), children), hasTailingGuards && /*#__PURE__*/createElement("div", {
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
  crossFrame: propTypes_2,
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
  crossFrame: true,
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
    }(PureComponent);

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
  return !node || node === document || node.nodeType === Node.DOCUMENT_NODE || !isElementHidden(window.getComputedStyle(node, null)) && isVisible(node.parentNode && node.parentNode.nodeType === node.DOCUMENT_FRAGMENT_NODE ? node.parentNode.host : node.parentNode);
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

/**
 * actually anything focusable
 */
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

var correctNode = function correctNode(node, nodes) {
  if (isRadio(node) && node.name) {
    return findSelectedRadio(node, nodes);
  }
  return node;
};

var correctNodes = function correctNodes(nodes) {
  // IE11 has no Set constructor
  var resultSet = new Set();
  nodes.forEach(function (node) {
    return resultSet.add(correctNode(node, nodes));
  });
  // using filter to support IE11
  return nodes.filter(function (node) {
    return resultSet.has(node);
  });
};

var pickFirstFocus = function pickFirstFocus(nodes) {
  if (nodes[0] && nodes.length > 1) {
    return correctNode(nodes[0], nodes);
  }
  return nodes[0];
};

var pickFocusable = function pickFocusable(nodes, index) {
  if (nodes.length > 1) {
    return nodes.indexOf(correctNode(nodes[index], nodes));
  }
  return index;
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
  return node && node.dataset && node.dataset.focusGuard;
};
var notAGuard = function notAGuard(node) {
  return !isGuard(node);
};

var NEW_FOCUS = 'NEW_FOCUS';

var newFocus = function newFocus(innerNodes, outerNodes, activeElement, lastNode) {
  var cnt = innerNodes.length;
  var firstFocus = innerNodes[0];
  var lastFocus = innerNodes[cnt - 1];
  var isOnGuard = isGuard(activeElement);

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

  var correctedNodes = correctNodes(outerNodes);
  var correctedIndexDiff = correctedNodes.indexOf(activeElement) - correctedNodes.indexOf(lastNode || activeIndex);

  var returnFirstNode = pickFocusable(innerNodes, 0);
  var returnLastNode = pickFocusable(innerNodes, cnt - 1);

  // new focus
  if (activeIndex === -1 || lastNodeInside === -1) {
    return NEW_FOCUS;
  }
  // old focus
  if (!indexDiff && lastNodeInside >= 0) {
    return lastNodeInside;
  }
  // first element
  if (activeIndex <= firstNodeIndex && isOnGuard && Math.abs(indexDiff) > 1) {
    return returnLastNode;
  }
  // last element
  if (activeIndex >= lastNodeIndex && isOnGuard && Math.abs(indexDiff) > 1) {
    return returnFirstNode;
  }
  // jump out, but not on the guard
  if (indexDiff && Math.abs(correctedIndexDiff) > 1) {
    return lastNodeInside;
  }
  // focus above lock
  if (activeIndex <= firstNodeIndex) {
    return returnLastNode;
  }
  // focus below lock
  if (activeIndex > lastNodeIndex) {
    return returnFirstNode;
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

  var anyFocusable = getAllTabbableNodes(entries);
  var innerElements = getTabbableNodes(entries).filter(function (_ref4) {
    var node = _ref4.node;
    return notAGuard(node);
  });

  if (!innerElements[0]) {
    innerElements = anyFocusable;
    if (!innerElements[0]) {
      return undefined;
    }
  }

  var outerNodes = getAllTabbableNodes([commonParent]).map(function (_ref5) {
    var node = _ref5.node;
    return node;
  });
  var orderedInnerElements = reorderNodes(outerNodes, innerElements);
  var innerNodes = orderedInnerElements.map(function (_ref6) {
    var node = _ref6.node;
    return node;
  });

  var newId = newFocus(innerNodes, outerNodes, activeElement, lastNode);

  if (newId === "NEW_FOCUS") {
    var autoFocusable = anyFocusable.map(function (_ref7) {
      var node = _ref7.node;
      return node;
    }).filter(findAutoFocused(allParentAutofocusables(entries)));

    return {
      node: autoFocusable && autoFocusable.length ? pickFirstFocus(autoFocusable) : pickFirstFocus(innerNodes)
    };
  }

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

var focusWasOutside = function focusWasOutside(crossFrameOption) {
  if (crossFrameOption) {
    // with cross frame return true for any value
    return Boolean(focusWasOutsideWindow);
  } // in other case return only of focus went a while aho


  return focusWasOutsideWindow === 'meanwhile';
};

var activateTrap = function activateTrap() {
  var result = false;

  if (lastActiveTrap) {
    var _lastActiveTrap = lastActiveTrap,
        observed = _lastActiveTrap.observed,
        persistentFocus = _lastActiveTrap.persistentFocus,
        autoFocus = _lastActiveTrap.autoFocus,
        shards = _lastActiveTrap.shards,
        crossFrame = _lastActiveTrap.crossFrame;
    var workingNode = observed || lastPortaledElement && lastPortaledElement.portaledElement;
    var activeElement = document && document.activeElement;

    if (workingNode) {
      var workingArea = [workingNode].concat(shards.map(extractRef).filter(Boolean));

      if (!activeElement || focusWhitelisted(activeElement)) {
        if (persistentFocus || focusWasOutside(crossFrame) || !isFreeFocus() || !lastActiveFocus && autoFocus) {
          if (workingNode && !(focusInside(workingArea) || focusIsPortaledPair(activeElement))) {
            if (document && !lastActiveFocus && activeElement && !autoFocus) {
              // Check if blur() exists, which is missing on certain elements on IE
              if (activeElement.blur) {
                activeElement.blur();
              }

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
        var focusedIndex = allNodes.map(function (_ref) {
          var node = _ref.node;
          return node;
        }).indexOf(newActiveElement);

        if (focusedIndex > -1) {
          // remove old focus
          allNodes.filter(function (_ref2) {
            var guard = _ref2.guard,
                node = _ref2.node;
            return guard && node.dataset.focusAutoGuard;
          }).forEach(function (_ref3) {
            var node = _ref3.node;
            return node.removeAttribute('tabIndex');
          });
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
  return /*#__PURE__*/createElement("div", {
    onBlur: onBlur,
    onFocus: onFocus
  }, children);
};

FocusTrap.propTypes = process.env.NODE_ENV !== "production" ? {
  children: propTypes.node.isRequired
} : {};

var onWindowBlur = function onWindowBlur() {
  focusWasOutsideWindow = 'just'; // using setTimeout to set  this variable after React/sidecar reaction

  setTimeout(function () {
    focusWasOutsideWindow = 'meanwhile';
  }, 0);
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

var FocusLockCombination = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/createElement(FocusLock, _extends$2({
    sideCar: FocusTrap$1,
    ref: ref
  }, props));
});

var _ref$1 = FocusLock.propTypes || {},
    sideCar = _ref$1.sideCar,
    propTypes$1 = _objectWithoutPropertiesLoose$2(_ref$1, ["sideCar"]);

FocusLockCombination.propTypes = propTypes$1;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign$1 = function() {
    __assign$1 = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign$1.apply(this, arguments);
};

function __rest$1(s, e) {
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

var zeroRightClassName = 'right-scroll-bar-position';
var fullWidthClassName = 'width-before-scroll-bar';
var noScrollbarsClassName = 'with-scroll-bars-hidden';

var effectCar = createSidecarMedium();

var nothing = function () {
    return;
};
var RemoveScroll = forwardRef(function (props, parentRef) {
    var ref = useRef(null);
    var _a = useState({
        onScrollCapture: nothing,
        onWheelCapture: nothing,
        onTouchMoveCapture: nothing
    }), callbacks = _a[0], setCallbacks = _a[1];
    var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, rest = __rest$1(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom"]);
    var SideCar = sideCar;
    var containerProps = __assign$1({ ref: useMergeRefs([
            ref,
            parentRef
        ]) }, rest, callbacks);
    return (createElement(Fragment$1, null,
        enabled && (createElement(SideCar, { sideCar: effectCar, removeScrollBar: removeScrollBar, shards: shards, noIsolation: noIsolation, inert: inert, setCallbacks: setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref })),
        forwardProps ? (cloneElement(Children.only(children), containerProps)) : (createElement("div", __assign$1({}, containerProps, { className: className }), children))));
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

var getNonce = function () {
    if (typeof __webpack_nonce__ !== 'undefined') {
        return __webpack_nonce__;
    }
    return undefined;
};

function makeStyleTag() {
    if (!document)
        return null;
    var tag = document.createElement('style');
    tag.type = 'text/css';
    var nonce = getNonce();
    if (nonce) {
        tag.setAttribute('nonce', nonce);
    }
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
        useEffect(function () {
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
    var _a = useState(getGapWidth(props.gapMode)), gap = _a[0], setGap = _a[1];
    useEffect(function () {
        setGap(getGapWidth(props.gapMode));
    }, [props.gapMode]);
    var noRelative = props.noRelative, noImportant = props.noImportant, _b = props.gapMode, gapMode = _b === void 0 ? 'margin' : _b;
    return createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : '') });
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
    var shouldPreventQueue = useRef([]);
    var touchStartRef = useRef([0, 0]);
    var activeAxis = useRef();
    var id = useState(idCounter++)[0];
    var Style = useState(function () { return styleSingleton(); })[0];
    var lastProps = useRef(props);
    useEffect(function () {
        lastProps.current = props;
    }, [props]);
    useEffect(function () {
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
    var shouldCancelEvent = useCallback(function (event, parent) {
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
    var shouldPrevent = useCallback(function (_event) {
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
    var shouldCancel = useCallback(function (name, delta, target, should) {
        var event = { name: name, delta: delta, target: target, should: should };
        shouldPreventQueue.current.push(event);
        setTimeout(function () {
            shouldPreventQueue.current = shouldPreventQueue.current.filter(function (e) { return e !== event; });
        }, 1);
    }, []);
    var scrollTouchStart = useCallback(function (event) {
        touchStartRef.current = getTouchXY(event);
        activeAxis.current = undefined;
    }, []);
    var scrollWheel = useCallback(function (event) {
        shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    var scrollTouchMove = useCallback(function (event) {
        shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    useEffect(function () {
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
    return (createElement(Fragment$1, null,
        inert ? createElement(Style, { styles: generateStyle(id) }) : null,
        removeScrollBar ? createElement(RemoveScrollBar, { gapMode: "margin" }) : null));
}

var SideCar$1 = exportSidecar(effectCar, RemoveScrollSideCar);

var ReactRemoveScroll = forwardRef(function (props, ref) { return (createElement(RemoveScroll, __assign$1({}, props, { ref: ref, sideCar: SideCar$1 }))); });
ReactRemoveScroll.classNames = RemoveScroll.classNames;

function _extends$3() {
  _extends$3 = Object.assign || function (target) {
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

  return _extends$3.apply(this, arguments);
}

function _objectWithoutPropertiesLoose$3(source, excluded) {
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

var overlayPropTypes = {
  allowPinchZoom: propTypes.bool,
  dangerouslyBypassFocusLock: propTypes.bool,
  dangerouslyBypassScrollLock: propTypes.bool,
  // TODO:
  initialFocusRef: function initialFocusRef() {
    return null;
  },
  onDismiss: propTypes.func
}; ////////////////////////////////////////////////////////////////////////////////

/**
 * DialogOverlay
 *
 * Low-level component if you need more control over the styles or rendering of
 * the dialog overlay.
 *
 * Note: You must render a `DialogContent` inside.
 *
 * @see Docs https://reacttraining.com/reach-ui/dialog#dialogoverlay
 */

var DialogOverlay = /*#__PURE__*/forwardRef(function DialogOverlay(_ref, forwardedRef) {
  var _ref$isOpen = _ref.isOpen,
      isOpen = _ref$isOpen === void 0 ? true : _ref$isOpen,
      props = _objectWithoutPropertiesLoose$3(_ref, ["isOpen"]);

  useEffect(function () {
    return checkStyles("dialog");
  }, []); // We want to ignore the immediate focus of a tooltip so it doesn't pop
  // up again when the menu closes, only pops up when focus returns again
  // to the tooltip (like native OS tooltips).

  useEffect(function () {
    if (isOpen) {
      // @ts-ignore
      window.__REACH_DISABLE_TOOLTIPS = true;
    } else {
      window.requestAnimationFrame(function () {
        // Wait a frame so that this doesn't fire before tooltip does
        // @ts-ignore
        window.__REACH_DISABLE_TOOLTIPS = false;
      });
    }
  }, [isOpen]);
  return isOpen ? React__default.createElement(Portal$1, {
    "data-reach-dialog-wrapper": ""
  }, React__default.createElement(DialogInner, Object.assign({
    ref: forwardedRef
  }, props))) : null;
});

if (process.env.NODE_ENV !== "production") {
  DialogOverlay.displayName = "DialogOverlay";
  DialogOverlay.propTypes = /*#__PURE__*/_extends$3({}, overlayPropTypes, {
    isOpen: propTypes.bool
  });
} ////////////////////////////////////////////////////////////////////////////////

/**
 * DialogInner
 */


var DialogInner = /*#__PURE__*/forwardRef(function DialogInner(_ref2, forwardedRef) {
  var allowPinchZoom = _ref2.allowPinchZoom,
      _ref2$dangerouslyBypa = _ref2.dangerouslyBypassFocusLock,
      dangerouslyBypassFocusLock = _ref2$dangerouslyBypa === void 0 ? false : _ref2$dangerouslyBypa,
      _ref2$dangerouslyBypa2 = _ref2.dangerouslyBypassScrollLock,
      dangerouslyBypassScrollLock = _ref2$dangerouslyBypa2 === void 0 ? false : _ref2$dangerouslyBypa2,
      initialFocusRef = _ref2.initialFocusRef,
      onClick = _ref2.onClick,
      _ref2$onDismiss = _ref2.onDismiss,
      onDismiss = _ref2$onDismiss === void 0 ? noop : _ref2$onDismiss,
      onKeyDown = _ref2.onKeyDown,
      onMouseDown = _ref2.onMouseDown,
      _ref2$unstable_lockFo = _ref2.unstable_lockFocusAcrossFrames,
      unstable_lockFocusAcrossFrames = _ref2$unstable_lockFo === void 0 ? true : _ref2$unstable_lockFo,
      props = _objectWithoutPropertiesLoose$3(_ref2, ["allowPinchZoom", "dangerouslyBypassFocusLock", "dangerouslyBypassScrollLock", "initialFocusRef", "onClick", "onDismiss", "onKeyDown", "onMouseDown", "unstable_lockFocusAcrossFrames"]);

  var mouseDownTarget = useRef(null);
  var overlayNode = useRef(null);
  var ref = useForkedRef(overlayNode, forwardedRef);
  var activateFocusLock = useCallback(function () {
    if (initialFocusRef && initialFocusRef.current) {
      initialFocusRef.current.focus();
    }
  }, [initialFocusRef]);

  function handleClick(event) {
    if (mouseDownTarget.current === event.target) {
      event.stopPropagation();
      onDismiss(event);
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Escape") {
      event.stopPropagation();
      onDismiss(event);
    }
  }

  function handleMouseDown(event) {
    mouseDownTarget.current = event.target;
  }

  useEffect(function () {
    return overlayNode.current ? createAriaHider(overlayNode.current) : void null;
  }, []);
  return React__default.createElement(FocusLockCombination, {
    autoFocus: true,
    returnFocus: true,
    onActivation: activateFocusLock,
    disabled: dangerouslyBypassFocusLock,
    crossFrame: unstable_lockFocusAcrossFrames
  }, React__default.createElement(ReactRemoveScroll, {
    allowPinchZoom: allowPinchZoom,
    enabled: !dangerouslyBypassScrollLock
  }, React__default.createElement("div", Object.assign({}, props, {
    ref: ref,
    "data-reach-dialog-overlay": "",

    /*
     * We can ignore the `no-static-element-interactions` warning here
     * because our overlay is only designed to capture any outside
     * clicks, not to serve as a clickable element itself.
     */
    onClick: wrapEvent(onClick, handleClick),
    onKeyDown: wrapEvent(onKeyDown, handleKeyDown),
    onMouseDown: wrapEvent(onMouseDown, handleMouseDown)
  }))));
});

if (process.env.NODE_ENV !== "production") {
  DialogOverlay.displayName = "DialogOverlay";
  DialogOverlay.propTypes = /*#__PURE__*/_extends$3({}, overlayPropTypes);
} ////////////////////////////////////////////////////////////////////////////////

/**
 * DialogContent
 *
 * Low-level component if you need more control over the styles or rendering of
 * the dialog content.
 *
 * Note: Must be a child of `DialogOverlay`.
 *
 * Note: You only need to use this when you are also styling `DialogOverlay`,
 * otherwise you can use the high-level `Dialog` component and pass the props
 * to it. Any props passed to `Dialog` component (besides `isOpen` and
 * `onDismiss`) will be spread onto `DialogContent`.
 *
 * @see Docs https://reacttraining.com/reach-ui/dialog#dialogcontent
 */


var DialogContent = /*#__PURE__*/forwardRef(function DialogContent(_ref3, forwardedRef) {
  var onClick = _ref3.onClick,
      onKeyDown = _ref3.onKeyDown,
      props = _objectWithoutPropertiesLoose$3(_ref3, ["onClick", "onKeyDown"]);

  return React__default.createElement("div", Object.assign({
    "aria-modal": "true",
    role: "dialog",
    tabIndex: -1
  }, props, {
    ref: forwardedRef,
    "data-reach-dialog-content": "",
    onClick: wrapEvent(onClick, function (event) {
      event.stopPropagation();
    })
  }));
});

if (process.env.NODE_ENV !== "production") {
  DialogContent.displayName = "DialogContent";
  DialogContent.propTypes = {
    "aria-label": ariaLabelType,
    "aria-labelledby": ariaLabelType
  };
} ////////////////////////////////////////////////////////////////////////////////

/**
 * Dialog
 *
 * High-level component to render a modal dialog window over the top of the page
 * (or another dialog).
 *
 * @see Docs https://reacttraining.com/reach-ui/dialog#dialog
 */


var Dialog = /*#__PURE__*/forwardRef(function Dialog(_ref4, forwardedRef) {
  var _ref4$allowPinchZoom = _ref4.allowPinchZoom,
      allowPinchZoom = _ref4$allowPinchZoom === void 0 ? false : _ref4$allowPinchZoom,
      initialFocusRef = _ref4.initialFocusRef,
      isOpen = _ref4.isOpen,
      _ref4$onDismiss = _ref4.onDismiss,
      onDismiss = _ref4$onDismiss === void 0 ? noop : _ref4$onDismiss,
      props = _objectWithoutPropertiesLoose$3(_ref4, ["allowPinchZoom", "initialFocusRef", "isOpen", "onDismiss"]);

  return React__default.createElement(DialogOverlay, {
    allowPinchZoom: allowPinchZoom,
    initialFocusRef: initialFocusRef,
    isOpen: isOpen,
    onDismiss: onDismiss
  }, React__default.createElement(DialogContent, Object.assign({
    ref: forwardedRef
  }, props)));
});

if (process.env.NODE_ENV !== "production") {
  Dialog.displayName = "Dialog";
  Dialog.propTypes = {
    isOpen: propTypes.bool,
    onDismiss: propTypes.func,
    "aria-label": ariaLabelType,
    "aria-labelledby": ariaLabelType
  };
}

function createAriaHider(dialogNode) {
  var originalValues = [];
  var rootNodes = [];
  var ownerDocument = getOwnerDocument(dialogNode) || document;

  if (!dialogNode) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("A ref has not yet been attached to a dialog node when attempting to call `createAriaHider`.");
    }

    return noop;
  }

  Array.prototype.forEach.call(ownerDocument.querySelectorAll("body > *"), function (node) {
    var _dialogNode$parentNod, _dialogNode$parentNod2;

    var portalNode = (_dialogNode$parentNod = dialogNode.parentNode) === null || _dialogNode$parentNod === void 0 ? void 0 : (_dialogNode$parentNod2 = _dialogNode$parentNod.parentNode) === null || _dialogNode$parentNod2 === void 0 ? void 0 : _dialogNode$parentNod2.parentNode;

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

function ariaLabelType(props, propName, compName, location, propFullName) {
  var details = "\nSee https://www.w3.org/TR/wai-aria/#aria-label for details.";

  if (!props["aria-label"] && !props["aria-labelledby"]) {
    return new Error("A <" + compName + "> must have either an `aria-label` or `aria-labelledby` prop.\n      " + details);
  }

  if (props["aria-label"] && props["aria-labelledby"]) {
    return new Error("You provided both `aria-label` and `aria-labelledby` props to a <" + compName + ">. If the a label for this component is visible on the screen, that label's component should be given a unique ID prop, and that ID should be passed as the `aria-labelledby` prop into <" + compName + ">. If the label cannot be determined programmatically from the content of the element, an alternative label should be provided as the `aria-label` prop, which will be used as an `aria-label` on the HTML tag." + details);
  } else if (props[propName] != null && !isString(props[propName])) {
    return new Error("Invalid prop `" + propName + "` supplied to `" + compName + "`. Expected `string`, received `" + (Array.isArray(propFullName) ? "array" : typeof propFullName) + "`.");
  }

  return null;
}

const is = {
  arr: Array.isArray,
  obj: a => Object.prototype.toString.call(a) === '[object Object]',
  fun: a => typeof a === 'function',
  str: a => typeof a === 'string',
  num: a => typeof a === 'number',
  und: a => a === void 0,
  nul: a => a === null,
  set: a => a instanceof Set,
  map: a => a instanceof Map,

  equ(a, b) {
    if (typeof a !== typeof b) return false;
    if (is.str(a) || is.num(a)) return a === b;
    if (is.obj(a) && is.obj(b) && Object.keys(a).length + Object.keys(b).length === 0) return true;
    let i;

    for (i in a) if (!(i in b)) return false;

    for (i in b) if (a[i] !== b[i]) return false;

    return is.und(i) ? a === b : true;
  }

};
function merge$1(target, lowercase) {
  if (lowercase === void 0) {
    lowercase = true;
  }

  return object => (is.arr(object) ? object : Object.keys(object)).reduce((acc, element) => {
    const key = lowercase ? element[0].toLowerCase() + element.substring(1) : element;
    acc[key] = target(key);
    return acc;
  }, target);
}
function useForceUpdate() {
  const _useState = useState(false),
        f = _useState[1];

  const forceUpdate = useCallback(() => f(v => !v), []);
  return forceUpdate;
}
function withDefault(value, defaultValue) {
  return is.und(value) || is.nul(value) ? defaultValue : value;
}
function toArray$1(a) {
  return !is.und(a) ? is.arr(a) ? a : [a] : [];
}
function callProp(obj) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return is.fun(obj) ? obj(...args) : obj;
}

function getForwardProps(props) {
  const to = props.to,
        from = props.from,
        config = props.config,
        onStart = props.onStart,
        onRest = props.onRest,
        onFrame = props.onFrame,
        children = props.children,
        reset = props.reset,
        reverse = props.reverse,
        force = props.force,
        immediate = props.immediate,
        delay = props.delay,
        attach = props.attach,
        destroyed = props.destroyed,
        interpolateTo = props.interpolateTo,
        ref = props.ref,
        lazy = props.lazy,
        forward = _objectWithoutPropertiesLoose$2(props, ["to", "from", "config", "onStart", "onRest", "onFrame", "children", "reset", "reverse", "force", "immediate", "delay", "attach", "destroyed", "interpolateTo", "ref", "lazy"]);

  return forward;
}

function interpolateTo(props) {
  const forward = getForwardProps(props);
  if (is.und(forward)) return _extends$2({
    to: forward
  }, props);
  const rest = Object.keys(props).reduce((a, k) => !is.und(forward[k]) ? a : _extends$2({}, a, {
    [k]: props[k]
  }), {});
  return _extends$2({
    to: forward
  }, rest);
}
function handleRef(ref, forward) {
  if (forward) {
    // If it's a function, assume it's a ref callback
    if (is.fun(forward)) forward(ref);else if (is.obj(forward)) {
      forward.current = ref;
    }
  }

  return ref;
}

class Animated {
  constructor() {
    this.payload = void 0;
    this.children = [];
  }

  getAnimatedValue() {
    return this.getValue();
  }

  getPayload() {
    return this.payload || this;
  }

  attach() {}

  detach() {}

  getChildren() {
    return this.children;
  }

  addChild(child) {
    if (this.children.length === 0) this.attach();
    this.children.push(child);
  }

  removeChild(child) {
    const index = this.children.indexOf(child);
    this.children.splice(index, 1);
    if (this.children.length === 0) this.detach();
  }

}
class AnimatedArray extends Animated {
  constructor() {
    super(...arguments);
    this.payload = [];

    this.attach = () => this.payload.forEach(p => p instanceof Animated && p.addChild(this));

    this.detach = () => this.payload.forEach(p => p instanceof Animated && p.removeChild(this));
  }

}
class AnimatedObject extends Animated {
  constructor() {
    super(...arguments);
    this.payload = {};

    this.attach = () => Object.values(this.payload).forEach(s => s instanceof Animated && s.addChild(this));

    this.detach = () => Object.values(this.payload).forEach(s => s instanceof Animated && s.removeChild(this));
  }

  getValue(animated) {
    if (animated === void 0) {
      animated = false;
    }

    const payload = {};

    for (const key in this.payload) {
      const value = this.payload[key];
      if (animated && !(value instanceof Animated)) continue;
      payload[key] = value instanceof Animated ? value[animated ? 'getAnimatedValue' : 'getValue']() : value;
    }

    return payload;
  }

  getAnimatedValue() {
    return this.getValue(true);
  }

}

let applyAnimatedValues;
function injectApplyAnimatedValues(fn, transform) {
  applyAnimatedValues = {
    fn,
    transform
  };
}
let colorNames;
function injectColorNames(names) {
  colorNames = names;
}
let requestFrame = cb => typeof window !== 'undefined' ? window.requestAnimationFrame(cb) : -1;
let interpolation;
function injectStringInterpolator(fn) {
  interpolation = fn;
}
let now = () => Date.now();
let animatedApi = node => node.current;
let createAnimatedStyle;
function injectCreateAnimatedStyle(factory) {
  createAnimatedStyle = factory;
}

/**
 * Wraps the `style` property with `AnimatedStyle`.
 */

class AnimatedProps extends AnimatedObject {
  constructor(props, callback) {
    super();
    this.update = void 0;
    this.payload = !props.style ? props : _extends$2({}, props, {
      style: createAnimatedStyle(props.style)
    });
    this.update = callback;
    this.attach();
  }

}

const isFunctionComponent = val => is.fun(val) && !(val.prototype instanceof React__default.Component);

const createAnimatedComponent = Component => {
  const AnimatedComponent = forwardRef((props, ref) => {
    const forceUpdate = useForceUpdate();
    const mounted = useRef(true);
    const propsAnimated = useRef(null);
    const node = useRef(null);
    const attachProps = useCallback(props => {
      const oldPropsAnimated = propsAnimated.current;

      const callback = () => {
        let didUpdate = false;

        if (node.current) {
          didUpdate = applyAnimatedValues.fn(node.current, propsAnimated.current.getAnimatedValue());
        }

        if (!node.current || didUpdate === false) {
          // If no referenced node has been found, or the update target didn't have a
          // native-responder, then forceUpdate the animation ...
          forceUpdate();
        }
      };

      propsAnimated.current = new AnimatedProps(props, callback);
      oldPropsAnimated && oldPropsAnimated.detach();
    }, []);
    useEffect(() => () => {
      mounted.current = false;
      propsAnimated.current && propsAnimated.current.detach();
    }, []);
    useImperativeHandle(ref, () => animatedApi(node));
    attachProps(props);

    const _getValue = propsAnimated.current.getValue(),
          scrollTop = _getValue.scrollTop,
          scrollLeft = _getValue.scrollLeft,
          animatedProps = _objectWithoutPropertiesLoose$2(_getValue, ["scrollTop", "scrollLeft"]); // Functions cannot have refs, see:
    // See: https://github.com/react-spring/react-spring/issues/569


    const refFn = isFunctionComponent(Component) ? undefined : childRef => node.current = handleRef(childRef, ref);
    return React__default.createElement(Component, _extends$2({}, animatedProps, {
      ref: refFn
    }));
  });
  return AnimatedComponent;
};

let active = false;
const controllers = new Set();

const update = () => {
  if (!active) return false;
  let time = now();

  for (let controller of controllers) {
    let isActive = false;

    for (let configIdx = 0; configIdx < controller.configs.length; configIdx++) {
      let config = controller.configs[configIdx];
      let endOfAnimation, lastTime;

      for (let valIdx = 0; valIdx < config.animatedValues.length; valIdx++) {
        let animation = config.animatedValues[valIdx]; // If an animation is done, skip, until all of them conclude

        if (animation.done) continue;
        let from = config.fromValues[valIdx];
        let to = config.toValues[valIdx];
        let position = animation.lastPosition;
        let isAnimated = to instanceof Animated;
        let velocity = Array.isArray(config.initialVelocity) ? config.initialVelocity[valIdx] : config.initialVelocity;
        if (isAnimated) to = to.getValue(); // Conclude animation if it's either immediate, or from-values match end-state

        if (config.immediate) {
          animation.setValue(to);
          animation.done = true;
          continue;
        } // Break animation when string values are involved


        if (typeof from === 'string' || typeof to === 'string') {
          animation.setValue(to);
          animation.done = true;
          continue;
        }

        if (config.duration !== void 0) {
          /** Duration easing */
          position = from + config.easing((time - animation.startTime) / config.duration) * (to - from);
          endOfAnimation = time >= animation.startTime + config.duration;
        } else if (config.decay) {
          /** Decay easing */
          position = from + velocity / (1 - 0.998) * (1 - Math.exp(-(1 - 0.998) * (time - animation.startTime)));
          endOfAnimation = Math.abs(animation.lastPosition - position) < 0.1;
          if (endOfAnimation) to = position;
        } else {
          /** Spring easing */
          lastTime = animation.lastTime !== void 0 ? animation.lastTime : time;
          velocity = animation.lastVelocity !== void 0 ? animation.lastVelocity : config.initialVelocity; // If we lost a lot of frames just jump to the end.

          if (time > lastTime + 64) lastTime = time; // http://gafferongames.com/game-physics/fix-your-timestep/

          let numSteps = Math.floor(time - lastTime);

          for (let i = 0; i < numSteps; ++i) {
            let force = -config.tension * (position - to);
            let damping = -config.friction * velocity;
            let acceleration = (force + damping) / config.mass;
            velocity = velocity + acceleration * 1 / 1000;
            position = position + velocity * 1 / 1000;
          } // Conditions for stopping the spring animation


          let isOvershooting = config.clamp && config.tension !== 0 ? from < to ? position > to : position < to : false;
          let isVelocity = Math.abs(velocity) <= config.precision;
          let isDisplacement = config.tension !== 0 ? Math.abs(to - position) <= config.precision : true;
          endOfAnimation = isOvershooting || isVelocity && isDisplacement;
          animation.lastVelocity = velocity;
          animation.lastTime = time;
        } // Trails aren't done until their parents conclude


        if (isAnimated && !config.toValues[valIdx].done) endOfAnimation = false;

        if (endOfAnimation) {
          // Ensure that we end up with a round value
          if (animation.value !== to) position = to;
          animation.done = true;
        } else isActive = true;

        animation.setValue(position);
        animation.lastPosition = position;
      } // Keep track of updated values only when necessary


      if (controller.props.onFrame) controller.values[config.name] = config.interpolation.getValue();
    } // Update callbacks in the end of the frame


    if (controller.props.onFrame) controller.props.onFrame(controller.values); // Either call onEnd or next frame

    if (!isActive) {
      controllers.delete(controller);
      controller.stop(true);
    }
  } // Loop over as long as there are controllers ...


  if (controllers.size) {
    requestFrame(update);
  } else {
    active = false;
  }

  return active;
};

const start = controller => {
  if (!controllers.has(controller)) controllers.add(controller);

  if (!active) {
    active = true;
    requestFrame(update);
  }
};

const stop = controller => {
  if (controllers.has(controller)) controllers.delete(controller);
};

function createInterpolator(range, output, extrapolate) {
  if (typeof range === 'function') {
    return range;
  }

  if (Array.isArray(range)) {
    return createInterpolator({
      range,
      output: output,
      extrapolate
    });
  }

  if (interpolation && typeof range.output[0] === 'string') {
    return interpolation(range);
  }

  const config = range;
  const outputRange = config.output;
  const inputRange = config.range || [0, 1];
  const extrapolateLeft = config.extrapolateLeft || config.extrapolate || 'extend';
  const extrapolateRight = config.extrapolateRight || config.extrapolate || 'extend';

  const easing = config.easing || (t => t);

  return input => {
    const range = findRange(input, inputRange);
    return interpolate(input, inputRange[range], inputRange[range + 1], outputRange[range], outputRange[range + 1], easing, extrapolateLeft, extrapolateRight, config.map);
  };
}

function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map) {
  let result = map ? map(input) : input; // Extrapolate

  if (result < inputMin) {
    if (extrapolateLeft === 'identity') return result;else if (extrapolateLeft === 'clamp') result = inputMin;
  }

  if (result > inputMax) {
    if (extrapolateRight === 'identity') return result;else if (extrapolateRight === 'clamp') result = inputMax;
  }

  if (outputMin === outputMax) return outputMin;
  if (inputMin === inputMax) return input <= inputMin ? outputMin : outputMax; // Input Range

  if (inputMin === -Infinity) result = -result;else if (inputMax === Infinity) result = result - inputMin;else result = (result - inputMin) / (inputMax - inputMin); // Easing

  result = easing(result); // Output Range

  if (outputMin === -Infinity) result = -result;else if (outputMax === Infinity) result = result + outputMin;else result = result * (outputMax - outputMin) + outputMin;
  return result;
}

function findRange(input, inputRange) {
  for (var i = 1; i < inputRange.length - 1; ++i) if (inputRange[i] >= input) break;

  return i - 1;
}

class AnimatedInterpolation extends AnimatedArray {
  constructor(parents, range, output, extrapolate) {
    super();
    this.calc = void 0;
    this.payload = parents instanceof AnimatedArray && !(parents instanceof AnimatedInterpolation) ? parents.getPayload() : Array.isArray(parents) ? parents : [parents];
    this.calc = createInterpolator(range, output, extrapolate);
  }

  getValue() {
    return this.calc(...this.payload.map(value => value.getValue()));
  }

  updateConfig(range, output, extrapolate) {
    this.calc = createInterpolator(range, output, extrapolate);
  }

  interpolate(range, output, extrapolate) {
    return new AnimatedInterpolation(this, range, output, extrapolate);
  }

}

const config$8 = {
  default: {
    tension: 170,
    friction: 26
  },
  gentle: {
    tension: 120,
    friction: 14
  },
  wobbly: {
    tension: 180,
    friction: 12
  },
  stiff: {
    tension: 210,
    friction: 20
  },
  slow: {
    tension: 280,
    friction: 60
  },
  molasses: {
    tension: 280,
    friction: 120
  }
};

/** API
 *  useChain(references, timeSteps, timeFrame)
 */

function useChain(refs, timeSteps, timeFrame) {
  if (timeFrame === void 0) {
    timeFrame = 1000;
  }

  const previous = useRef();
  useEffect(() => {
    if (is.equ(refs, previous.current)) refs.forEach((_ref) => {
      let current = _ref.current;
      return current && current.start();
    });else if (timeSteps) {
      refs.forEach((_ref2, index) => {
        let current = _ref2.current;

        if (current) {
          const ctrls = current.controllers;

          if (ctrls.length) {
            const t = timeFrame * timeSteps[index];
            ctrls.forEach(ctrl => {
              ctrl.queue = ctrl.queue.map(e => _extends$2({}, e, {
                delay: e.delay + t
              }));
              ctrl.start();
            });
          }
        }
      });
    } else refs.reduce((q, _ref3, rI) => {
      let current = _ref3.current;
      return q = q.then(() => current.start());
    }, Promise.resolve());
    previous.current = refs;
  });
}

/**
 * Animated works by building a directed acyclic graph of dependencies
 * transparently when you render your Animated components.
 *
 *               new Animated.Value(0)
 *     .interpolate()        .interpolate()    new Animated.Value(1)
 *         opacity               translateY      scale
 *          style                         transform
 *         View#234                         style
 *                                         View#123
 *
 * A) Top Down phase
 * When an AnimatedValue is updated, we recursively go down through this
 * graph in order to find leaf nodes: the views that we flag as needing
 * an update.
 *
 * B) Bottom Up phase
 * When a view is flagged as needing an update, we recursively go back up
 * in order to build the new value that it needs. The reason why we need
 * this two-phases process is to deal with composite props such as
 * transform which can receive values from multiple parents.
 */
function addAnimatedStyles(node, styles) {
  if ('update' in node) {
    styles.add(node);
  } else {
    node.getChildren().forEach(child => addAnimatedStyles(child, styles));
  }
}

class AnimatedValue extends Animated {
  constructor(_value) {
    var _this;

    super();
    _this = this;
    this.animatedStyles = new Set();
    this.value = void 0;
    this.startPosition = void 0;
    this.lastPosition = void 0;
    this.lastVelocity = void 0;
    this.startTime = void 0;
    this.lastTime = void 0;
    this.done = false;

    this.setValue = function (value, flush) {
      if (flush === void 0) {
        flush = true;
      }

      _this.value = value;
      if (flush) _this.flush();
    };

    this.value = _value;
    this.startPosition = _value;
    this.lastPosition = _value;
  }

  flush() {
    if (this.animatedStyles.size === 0) {
      addAnimatedStyles(this, this.animatedStyles);
    }

    this.animatedStyles.forEach(animatedStyle => animatedStyle.update());
  }

  clearStyles() {
    this.animatedStyles.clear();
  }

  getValue() {
    return this.value;
  }

  interpolate(range, output, extrapolate) {
    return new AnimatedInterpolation(this, range, output, extrapolate);
  }

}

class AnimatedValueArray extends AnimatedArray {
  constructor(values) {
    super();
    this.payload = values.map(n => new AnimatedValue(n));
  }

  setValue(value, flush) {
    if (flush === void 0) {
      flush = true;
    }

    if (Array.isArray(value)) {
      if (value.length === this.payload.length) {
        value.forEach((v, i) => this.payload[i].setValue(v, flush));
      }
    } else {
      this.payload.forEach(p => p.setValue(value, flush));
    }
  }

  getValue() {
    return this.payload.map(v => v.getValue());
  }

  interpolate(range, output) {
    return new AnimatedInterpolation(this, range, output);
  }

}

let G = 0;

class Controller {
  constructor() {
    this.id = void 0;
    this.idle = true;
    this.hasChanged = false;
    this.guid = 0;
    this.local = 0;
    this.props = {};
    this.merged = {};
    this.animations = {};
    this.interpolations = {};
    this.values = {};
    this.configs = [];
    this.listeners = [];
    this.queue = [];
    this.localQueue = void 0;

    this.getValues = () => this.interpolations;

    this.id = G++;
  }
  /** update(props)
   *  This function filters input props and creates an array of tasks which are executed in .start()
   *  Each task is allowed to carry a delay, which means it can execute asnychroneously */


  update(args) {
    //this._id = n + this.id
    if (!args) return this; // Extract delay and the to-prop from props

    const _ref = interpolateTo(args),
          _ref$delay = _ref.delay,
          delay = _ref$delay === void 0 ? 0 : _ref$delay,
          to = _ref.to,
          props = _objectWithoutPropertiesLoose$2(_ref, ["delay", "to"]);

    if (is.arr(to) || is.fun(to)) {
      // If config is either a function or an array queue it up as is
      this.queue.push(_extends$2({}, props, {
        delay,
        to
      }));
    } else if (to) {
      // Otherwise go through each key since it could be delayed individually
      let ops = {};
      Object.entries(to).forEach((_ref2) => {
        let k = _ref2[0],
            v = _ref2[1];

        // Fetch delay and create an entry, consisting of the to-props, the delay, and basic props
        const entry = _extends$2({
          to: {
            [k]: v
          },
          delay: callProp(delay, k)
        }, props);

        const previous = ops[entry.delay] && ops[entry.delay].to;
        ops[entry.delay] = _extends$2({}, ops[entry.delay], entry, {
          to: _extends$2({}, previous, entry.to)
        });
      });
      this.queue = Object.values(ops);
    } // Sort queue, so that async calls go last


    this.queue = this.queue.sort((a, b) => a.delay - b.delay); // Diff the reduced props immediately (they'll contain the from-prop and some config)

    this.diff(props);
    return this;
  }
  /** start(onEnd)
   *  This function either executes a queue, if present, or starts the frameloop, which animates */


  start(onEnd) {
    // If a queue is present we must excecute it
    if (this.queue.length) {
      this.idle = false; // Updates can interrupt trailing queues, in that case we just merge values

      if (this.localQueue) {
        this.localQueue.forEach((_ref3) => {
          let _ref3$from = _ref3.from,
              from = _ref3$from === void 0 ? {} : _ref3$from,
              _ref3$to = _ref3.to,
              to = _ref3$to === void 0 ? {} : _ref3$to;
          if (is.obj(from)) this.merged = _extends$2({}, from, this.merged);
          if (is.obj(to)) this.merged = _extends$2({}, this.merged, to);
        });
      } // The guid helps us tracking frames, a new queue over an old one means an override
      // We discard async calls in that caseÍ


      const local = this.local = ++this.guid;
      const queue = this.localQueue = this.queue;
      this.queue = []; // Go through each entry and execute it

      queue.forEach((_ref4, index) => {
        let delay = _ref4.delay,
            props = _objectWithoutPropertiesLoose$2(_ref4, ["delay"]);

        const cb = finished => {
          if (index === queue.length - 1 && local === this.guid && finished) {
            this.idle = true;
            if (this.props.onRest) this.props.onRest(this.merged);
          }

          if (onEnd) onEnd();
        }; // Entries can be delayed, ansyc or immediate


        let async = is.arr(props.to) || is.fun(props.to);

        if (delay) {
          setTimeout(() => {
            if (local === this.guid) {
              if (async) this.runAsync(props, cb);else this.diff(props).start(cb);
            }
          }, delay);
        } else if (async) this.runAsync(props, cb);else this.diff(props).start(cb);
      });
    } // Otherwise we kick of the frameloop
    else {
        if (is.fun(onEnd)) this.listeners.push(onEnd);
        if (this.props.onStart) this.props.onStart();
        start(this);
      }

    return this;
  }

  stop(finished) {
    this.listeners.forEach(onEnd => onEnd(finished));
    this.listeners = [];
    return this;
  }
  /** Pause sets onEnd listeners free, but also removes the controller from the frameloop */


  pause(finished) {
    this.stop(true);
    if (finished) stop(this);
    return this;
  }

  runAsync(_ref5, onEnd) {
    var _this = this;

    let delay = _ref5.delay,
        props = _objectWithoutPropertiesLoose$2(_ref5, ["delay"]);

    const local = this.local; // If "to" is either a function or an array it will be processed async, therefor "to" should be empty right now
    // If the view relies on certain values "from" has to be present

    let queue = Promise.resolve(undefined);

    if (is.arr(props.to)) {
      for (let i = 0; i < props.to.length; i++) {
        const index = i;

        const fresh = _extends$2({}, props, interpolateTo(props.to[index]));

        if (is.arr(fresh.config)) fresh.config = fresh.config[index];
        queue = queue.then(() => {
          //this.stop()
          if (local === this.guid) return new Promise(r => this.diff(fresh).start(r));
        });
      }
    } else if (is.fun(props.to)) {
      let index = 0;
      let last;
      queue = queue.then(() => props.to( // next(props)
      p => {
        const fresh = _extends$2({}, props, interpolateTo(p));

        if (is.arr(fresh.config)) fresh.config = fresh.config[index];
        index++; //this.stop()

        if (local === this.guid) return last = new Promise(r => this.diff(fresh).start(r));
        return;
      }, // cancel()
      function (finished) {
        if (finished === void 0) {
          finished = true;
        }

        return _this.stop(finished);
      }).then(() => last));
    }

    queue.then(onEnd);
  }

  diff(props) {
    this.props = _extends$2({}, this.props, props);
    let _this$props = this.props,
        _this$props$from = _this$props.from,
        from = _this$props$from === void 0 ? {} : _this$props$from,
        _this$props$to = _this$props.to,
        to = _this$props$to === void 0 ? {} : _this$props$to,
        _this$props$config = _this$props.config,
        config = _this$props$config === void 0 ? {} : _this$props$config,
        reverse = _this$props.reverse,
        attach = _this$props.attach,
        reset = _this$props.reset,
        immediate = _this$props.immediate; // Reverse values when requested

    if (reverse) {
      var _ref6 = [to, from];
      from = _ref6[0];
      to = _ref6[1];
    } // This will collect all props that were ever set, reset merged props when necessary


    this.merged = _extends$2({}, from, this.merged, to);
    this.hasChanged = false; // Attachment handling, trailed springs can "attach" themselves to a previous spring

    let target = attach && attach(this); // Reduces input { name: value } pairs into animated values

    this.animations = Object.entries(this.merged).reduce((acc, _ref7) => {
      let name = _ref7[0],
          value = _ref7[1];
      // Issue cached entries, except on reset
      let entry = acc[name] || {}; // Figure out what the value is supposed to be

      const isNumber = is.num(value);
      const isString = is.str(value) && !value.startsWith('#') && !/\d/.test(value) && !colorNames[value];
      const isArray = is.arr(value);
      const isInterpolation = !isNumber && !isArray && !isString;
      let fromValue = !is.und(from[name]) ? from[name] : value;
      let toValue = isNumber || isArray ? value : isString ? value : 1;
      let toConfig = callProp(config, name);
      if (target) toValue = target.animations[name].parent;
      let parent = entry.parent,
          interpolation$$1 = entry.interpolation,
          toValues = toArray$1(target ? toValue.getPayload() : toValue),
          animatedValues;
      let newValue = value;
      if (isInterpolation) newValue = interpolation({
        range: [0, 1],
        output: [value, value]
      })(1);
      let currentValue = interpolation$$1 && interpolation$$1.getValue(); // Change detection flags

      const isFirst = is.und(parent);
      const isActive = !isFirst && entry.animatedValues.some(v => !v.done);
      const currentValueDiffersFromGoal = !is.equ(newValue, currentValue);
      const hasNewGoal = !is.equ(newValue, entry.previous);
      const hasNewConfig = !is.equ(toConfig, entry.config); // Change animation props when props indicate a new goal (new value differs from previous one)
      // and current values differ from it. Config changes trigger a new update as well (though probably shouldn't?)

      if (reset || hasNewGoal && currentValueDiffersFromGoal || hasNewConfig) {
        // Convert regular values into animated values, ALWAYS re-use if possible
        if (isNumber || isString) parent = interpolation$$1 = entry.parent || new AnimatedValue(fromValue);else if (isArray) parent = interpolation$$1 = entry.parent || new AnimatedValueArray(fromValue);else if (isInterpolation) {
          let prev = entry.interpolation && entry.interpolation.calc(entry.parent.value);
          prev = prev !== void 0 && !reset ? prev : fromValue;

          if (entry.parent) {
            parent = entry.parent;
            parent.setValue(0, false);
          } else parent = new AnimatedValue(0);

          const range = {
            output: [prev, value]
          };

          if (entry.interpolation) {
            interpolation$$1 = entry.interpolation;
            entry.interpolation.updateConfig(range);
          } else interpolation$$1 = parent.interpolate(range);
        }
        toValues = toArray$1(target ? toValue.getPayload() : toValue);
        animatedValues = toArray$1(parent.getPayload());
        if (reset && !isInterpolation) parent.setValue(fromValue, false);
        this.hasChanged = true; // Reset animated values

        animatedValues.forEach(value => {
          value.startPosition = value.value;
          value.lastPosition = value.value;
          value.lastVelocity = isActive ? value.lastVelocity : undefined;
          value.lastTime = isActive ? value.lastTime : undefined;
          value.startTime = now();
          value.done = false;
          value.animatedStyles.clear();
        }); // Set immediate values

        if (callProp(immediate, name)) {
          parent.setValue(isInterpolation ? toValue : value, false);
        }

        return _extends$2({}, acc, {
          [name]: _extends$2({}, entry, {
            name,
            parent,
            interpolation: interpolation$$1,
            animatedValues,
            toValues,
            previous: newValue,
            config: toConfig,
            fromValues: toArray$1(parent.getValue()),
            immediate: callProp(immediate, name),
            initialVelocity: withDefault(toConfig.velocity, 0),
            clamp: withDefault(toConfig.clamp, false),
            precision: withDefault(toConfig.precision, 0.01),
            tension: withDefault(toConfig.tension, 170),
            friction: withDefault(toConfig.friction, 26),
            mass: withDefault(toConfig.mass, 1),
            duration: toConfig.duration,
            easing: withDefault(toConfig.easing, t => t),
            decay: toConfig.decay
          })
        });
      } else {
        if (!currentValueDiffersFromGoal) {
          // So ... the current target value (newValue) appears to be different from the previous value,
          // which normally constitutes an update, but the actual value (currentValue) matches the target!
          // In order to resolve this without causing an animation update we silently flag the animation as done,
          // which it technically is. Interpolations also needs a config update with their target set to 1.
          if (isInterpolation) {
            parent.setValue(1, false);
            interpolation$$1.updateConfig({
              output: [newValue, newValue]
            });
          }

          parent.done = true;
          this.hasChanged = true;
          return _extends$2({}, acc, {
            [name]: _extends$2({}, acc[name], {
              previous: newValue
            })
          });
        }

        return acc;
      }
    }, this.animations);

    if (this.hasChanged) {
      // Make animations available to frameloop
      this.configs = Object.values(this.animations);
      this.values = {};
      this.interpolations = {};

      for (let key in this.animations) {
        this.interpolations[key] = this.animations[key].interpolation;
        this.values[key] = this.animations[key].interpolation.getValue();
      }
    }

    return this;
  }

  destroy() {
    this.stop();
    this.props = {};
    this.merged = {};
    this.animations = {};
    this.interpolations = {};
    this.values = {};
    this.configs = [];
    this.local = 0;
  }

}

/** API
 * const transitions = useTransition(items, itemKeys, { ... })
 * const [transitions, update] = useTransition(items, itemKeys, () => ({ ... }))
 */

let guid = 0;
const ENTER = 'enter';
const LEAVE = 'leave';
const UPDATE = 'update';

const mapKeys = (items, keys) => (typeof keys === 'function' ? items.map(keys) : toArray$1(keys)).map(String);

const get$3 = props => {
  let items = props.items,
      _props$keys = props.keys,
      keys = _props$keys === void 0 ? item => item : _props$keys,
      rest = _objectWithoutPropertiesLoose$2(props, ["items", "keys"]);

  items = toArray$1(items !== void 0 ? items : null);
  return _extends$2({
    items,
    keys: mapKeys(items, keys)
  }, rest);
};

function useTransition(input, keyTransform, config) {
  const props = _extends$2({
    items: input,
    keys: keyTransform || (i => i)
  }, config);

  const _get = get$3(props),
        _get$lazy = _get.lazy,
        lazy = _get$lazy === void 0 ? false : _get$lazy,
        _get$unique = _get.unique,
        _get$reset = _get.reset,
        reset = _get$reset === void 0 ? false : _get$reset,
        enter = _get.enter,
        leave = _get.leave,
        update = _get.update,
        onDestroyed = _get.onDestroyed,
        keys = _get.keys,
        items = _get.items,
        onFrame = _get.onFrame,
        _onRest = _get.onRest,
        onStart = _get.onStart,
        ref = _get.ref,
        extra = _objectWithoutPropertiesLoose$2(_get, ["lazy", "unique", "reset", "enter", "leave", "update", "onDestroyed", "keys", "items", "onFrame", "onRest", "onStart", "ref"]);

  const forceUpdate = useForceUpdate();
  const mounted = useRef(false);
  const state = useRef({
    mounted: false,
    first: true,
    deleted: [],
    current: {},
    transitions: [],
    prevProps: {},
    paused: !!props.ref,
    instances: !mounted.current && new Map(),
    forceUpdate
  });
  useImperativeHandle(props.ref, () => ({
    start: () => Promise.all(Array.from(state.current.instances).map((_ref) => {
      let c = _ref[1];
      return new Promise(r => c.start(r));
    })),
    stop: finished => Array.from(state.current.instances).forEach((_ref2) => {
      let c = _ref2[1];
      return c.stop(finished);
    }),

    get controllers() {
      return Array.from(state.current.instances).map((_ref3) => {
        let c = _ref3[1];
        return c;
      });
    }

  })); // Update state

  state.current = diffItems(state.current, props);

  if (state.current.changed) {
    // Update state
    state.current.transitions.forEach(transition => {
      const slot = transition.slot,
            from = transition.from,
            to = transition.to,
            config = transition.config,
            trail = transition.trail,
            key = transition.key,
            item = transition.item;
      if (!state.current.instances.has(key)) state.current.instances.set(key, new Controller()); // update the map object

      const ctrl = state.current.instances.get(key);

      const newProps = _extends$2({}, extra, {
        to,
        from,
        config,
        ref,
        onRest: values => {
          if (state.current.mounted) {
            if (transition.destroyed) {
              // If no ref is given delete destroyed items immediately
              if (!ref && !lazy) cleanUp(state, key);
              if (onDestroyed) onDestroyed(item);
            } // A transition comes to rest once all its springs conclude


            const curInstances = Array.from(state.current.instances);
            const active = curInstances.some((_ref4) => {
              let c = _ref4[1];
              return !c.idle;
            });
            if (!active && (ref || lazy) && state.current.deleted.length > 0) cleanUp(state);
            if (_onRest) _onRest(item, slot, values);
          }
        },
        onStart: onStart && (() => onStart(item, slot)),
        onFrame: onFrame && (values => onFrame(item, slot, values)),
        delay: trail,
        reset: reset && slot === ENTER // Update controller

      });

      ctrl.update(newProps);
      if (!state.current.paused) ctrl.start();
    });
  }

  useEffect(() => {
    state.current.mounted = mounted.current = true;
    return () => {
      state.current.mounted = mounted.current = false;
      Array.from(state.current.instances).map((_ref5) => {
        let c = _ref5[1];
        return c.destroy();
      });
      state.current.instances.clear();
    };
  }, []);
  return state.current.transitions.map((_ref6) => {
    let item = _ref6.item,
        slot = _ref6.slot,
        key = _ref6.key;
    return {
      item,
      key,
      state: slot,
      props: state.current.instances.get(key).getValues()
    };
  });
}

function cleanUp(state, filterKey) {
  const deleted = state.current.deleted;

  for (let _ref7 of deleted) {
    let key = _ref7.key;

    const filter = t => t.key !== key;

    if (is.und(filterKey) || filterKey === key) {
      state.current.instances.delete(key);
      state.current.transitions = state.current.transitions.filter(filter);
      state.current.deleted = state.current.deleted.filter(filter);
    }
  }

  state.current.forceUpdate();
}

function diffItems(_ref8, props) {
  let first = _ref8.first,
      prevProps = _ref8.prevProps,
      state = _objectWithoutPropertiesLoose$2(_ref8, ["first", "prevProps"]);

  let _get2 = get$3(props),
      items = _get2.items,
      keys = _get2.keys,
      initial = _get2.initial,
      from = _get2.from,
      enter = _get2.enter,
      leave = _get2.leave,
      update = _get2.update,
      _get2$trail = _get2.trail,
      trail = _get2$trail === void 0 ? 0 : _get2$trail,
      unique = _get2.unique,
      config = _get2.config,
      _get2$order = _get2.order,
      order = _get2$order === void 0 ? [ENTER, LEAVE, UPDATE] : _get2$order;

  let _get3 = get$3(prevProps),
      _keys = _get3.keys,
      _items = _get3.items;

  let current = _extends$2({}, state.current);

  let deleted = [...state.deleted]; // Compare next keys with current keys

  let currentKeys = Object.keys(current);
  let currentSet = new Set(currentKeys);
  let nextSet = new Set(keys);
  let added = keys.filter(item => !currentSet.has(item));
  let removed = state.transitions.filter(item => !item.destroyed && !nextSet.has(item.originalKey)).map(i => i.originalKey);
  let updated = keys.filter(item => currentSet.has(item));
  let delay = -trail;

  while (order.length) {
    const changeType = order.shift();

    switch (changeType) {
      case ENTER:
        {
          added.forEach((key, index) => {
            // In unique mode, remove fading out transitions if their key comes in again
            if (unique && deleted.find(d => d.originalKey === key)) deleted = deleted.filter(t => t.originalKey !== key);
            const keyIndex = keys.indexOf(key);
            const item = items[keyIndex];
            const slot = first && initial !== void 0 ? 'initial' : ENTER;
            current[key] = {
              slot,
              originalKey: key,
              key: unique ? String(key) : guid++,
              item,
              trail: delay = delay + trail,
              config: callProp(config, item, slot),
              from: callProp(first ? initial !== void 0 ? initial || {} : from : from, item),
              to: callProp(enter, item)
            };
          });
          break;
        }

      case LEAVE:
        {
          removed.forEach(key => {
            const keyIndex = _keys.indexOf(key);

            const item = _items[keyIndex];
            const slot = LEAVE;
            deleted.unshift(_extends$2({}, current[key], {
              slot,
              destroyed: true,
              left: _keys[Math.max(0, keyIndex - 1)],
              right: _keys[Math.min(_keys.length, keyIndex + 1)],
              trail: delay = delay + trail,
              config: callProp(config, item, slot),
              to: callProp(leave, item)
            }));
            delete current[key];
          });
          break;
        }

      case UPDATE:
        {
          updated.forEach(key => {
            const keyIndex = keys.indexOf(key);
            const item = items[keyIndex];
            const slot = UPDATE;
            current[key] = _extends$2({}, current[key], {
              item,
              slot,
              trail: delay = delay + trail,
              config: callProp(config, item, slot),
              to: callProp(update, item)
            });
          });
          break;
        }
    }
  }

  let out = keys.map(key => current[key]); // This tries to restore order for deleted items by finding their last known siblings
  // only using the left sibling to keep order placement consistent for all deleted items

  deleted.forEach((_ref9) => {
    let left = _ref9.left,
        right = _ref9.right,
        item = _objectWithoutPropertiesLoose$2(_ref9, ["left", "right"]);

    let pos; // Was it the element on the left, if yes, move there ...

    if ((pos = out.findIndex(t => t.originalKey === left)) !== -1) pos += 1; // And if nothing else helps, move it to the start ¯\_(ツ)_/¯

    pos = Math.max(0, pos);
    out = [...out.slice(0, pos), item, ...out.slice(pos)];
  });
  return _extends$2({}, state, {
    changed: added.length || removed.length || updated.length,
    first: first && added.length === 0,
    transitions: out,
    current,
    deleted,
    prevProps: props
  });
}

class AnimatedStyle extends AnimatedObject {
  constructor(style) {
    if (style === void 0) {
      style = {};
    }

    super();

    if (style.transform && !(style.transform instanceof Animated)) {
      style = applyAnimatedValues.transform(style);
    }

    this.payload = style;
  }

}

// http://www.w3.org/TR/css3-color/#svg-color
const colors$1 = {
  transparent: 0x00000000,
  aliceblue: 0xf0f8ffff,
  antiquewhite: 0xfaebd7ff,
  aqua: 0x00ffffff,
  aquamarine: 0x7fffd4ff,
  azure: 0xf0ffffff,
  beige: 0xf5f5dcff,
  bisque: 0xffe4c4ff,
  black: 0x000000ff,
  blanchedalmond: 0xffebcdff,
  blue: 0x0000ffff,
  blueviolet: 0x8a2be2ff,
  brown: 0xa52a2aff,
  burlywood: 0xdeb887ff,
  burntsienna: 0xea7e5dff,
  cadetblue: 0x5f9ea0ff,
  chartreuse: 0x7fff00ff,
  chocolate: 0xd2691eff,
  coral: 0xff7f50ff,
  cornflowerblue: 0x6495edff,
  cornsilk: 0xfff8dcff,
  crimson: 0xdc143cff,
  cyan: 0x00ffffff,
  darkblue: 0x00008bff,
  darkcyan: 0x008b8bff,
  darkgoldenrod: 0xb8860bff,
  darkgray: 0xa9a9a9ff,
  darkgreen: 0x006400ff,
  darkgrey: 0xa9a9a9ff,
  darkkhaki: 0xbdb76bff,
  darkmagenta: 0x8b008bff,
  darkolivegreen: 0x556b2fff,
  darkorange: 0xff8c00ff,
  darkorchid: 0x9932ccff,
  darkred: 0x8b0000ff,
  darksalmon: 0xe9967aff,
  darkseagreen: 0x8fbc8fff,
  darkslateblue: 0x483d8bff,
  darkslategray: 0x2f4f4fff,
  darkslategrey: 0x2f4f4fff,
  darkturquoise: 0x00ced1ff,
  darkviolet: 0x9400d3ff,
  deeppink: 0xff1493ff,
  deepskyblue: 0x00bfffff,
  dimgray: 0x696969ff,
  dimgrey: 0x696969ff,
  dodgerblue: 0x1e90ffff,
  firebrick: 0xb22222ff,
  floralwhite: 0xfffaf0ff,
  forestgreen: 0x228b22ff,
  fuchsia: 0xff00ffff,
  gainsboro: 0xdcdcdcff,
  ghostwhite: 0xf8f8ffff,
  gold: 0xffd700ff,
  goldenrod: 0xdaa520ff,
  gray: 0x808080ff,
  green: 0x008000ff,
  greenyellow: 0xadff2fff,
  grey: 0x808080ff,
  honeydew: 0xf0fff0ff,
  hotpink: 0xff69b4ff,
  indianred: 0xcd5c5cff,
  indigo: 0x4b0082ff,
  ivory: 0xfffff0ff,
  khaki: 0xf0e68cff,
  lavender: 0xe6e6faff,
  lavenderblush: 0xfff0f5ff,
  lawngreen: 0x7cfc00ff,
  lemonchiffon: 0xfffacdff,
  lightblue: 0xadd8e6ff,
  lightcoral: 0xf08080ff,
  lightcyan: 0xe0ffffff,
  lightgoldenrodyellow: 0xfafad2ff,
  lightgray: 0xd3d3d3ff,
  lightgreen: 0x90ee90ff,
  lightgrey: 0xd3d3d3ff,
  lightpink: 0xffb6c1ff,
  lightsalmon: 0xffa07aff,
  lightseagreen: 0x20b2aaff,
  lightskyblue: 0x87cefaff,
  lightslategray: 0x778899ff,
  lightslategrey: 0x778899ff,
  lightsteelblue: 0xb0c4deff,
  lightyellow: 0xffffe0ff,
  lime: 0x00ff00ff,
  limegreen: 0x32cd32ff,
  linen: 0xfaf0e6ff,
  magenta: 0xff00ffff,
  maroon: 0x800000ff,
  mediumaquamarine: 0x66cdaaff,
  mediumblue: 0x0000cdff,
  mediumorchid: 0xba55d3ff,
  mediumpurple: 0x9370dbff,
  mediumseagreen: 0x3cb371ff,
  mediumslateblue: 0x7b68eeff,
  mediumspringgreen: 0x00fa9aff,
  mediumturquoise: 0x48d1ccff,
  mediumvioletred: 0xc71585ff,
  midnightblue: 0x191970ff,
  mintcream: 0xf5fffaff,
  mistyrose: 0xffe4e1ff,
  moccasin: 0xffe4b5ff,
  navajowhite: 0xffdeadff,
  navy: 0x000080ff,
  oldlace: 0xfdf5e6ff,
  olive: 0x808000ff,
  olivedrab: 0x6b8e23ff,
  orange: 0xffa500ff,
  orangered: 0xff4500ff,
  orchid: 0xda70d6ff,
  palegoldenrod: 0xeee8aaff,
  palegreen: 0x98fb98ff,
  paleturquoise: 0xafeeeeff,
  palevioletred: 0xdb7093ff,
  papayawhip: 0xffefd5ff,
  peachpuff: 0xffdab9ff,
  peru: 0xcd853fff,
  pink: 0xffc0cbff,
  plum: 0xdda0ddff,
  powderblue: 0xb0e0e6ff,
  purple: 0x800080ff,
  rebeccapurple: 0x663399ff,
  red: 0xff0000ff,
  rosybrown: 0xbc8f8fff,
  royalblue: 0x4169e1ff,
  saddlebrown: 0x8b4513ff,
  salmon: 0xfa8072ff,
  sandybrown: 0xf4a460ff,
  seagreen: 0x2e8b57ff,
  seashell: 0xfff5eeff,
  sienna: 0xa0522dff,
  silver: 0xc0c0c0ff,
  skyblue: 0x87ceebff,
  slateblue: 0x6a5acdff,
  slategray: 0x708090ff,
  slategrey: 0x708090ff,
  snow: 0xfffafaff,
  springgreen: 0x00ff7fff,
  steelblue: 0x4682b4ff,
  tan: 0xd2b48cff,
  teal: 0x008080ff,
  thistle: 0xd8bfd8ff,
  tomato: 0xff6347ff,
  turquoise: 0x40e0d0ff,
  violet: 0xee82eeff,
  wheat: 0xf5deb3ff,
  white: 0xffffffff,
  whitesmoke: 0xf5f5f5ff,
  yellow: 0xffff00ff,
  yellowgreen: 0x9acd32ff
};

// const INTEGER = '[-+]?\\d+';
const NUMBER = '[-+]?\\d*\\.?\\d+';
const PERCENTAGE = NUMBER + '%';

function call() {
  for (var _len = arguments.length, parts = new Array(_len), _key = 0; _key < _len; _key++) {
    parts[_key] = arguments[_key];
  }

  return '\\(\\s*(' + parts.join(')\\s*,\\s*(') + ')\\s*\\)';
}

const rgb$1 = new RegExp('rgb' + call(NUMBER, NUMBER, NUMBER));
const rgba$1 = new RegExp('rgba' + call(NUMBER, NUMBER, NUMBER, NUMBER));
const hsl = new RegExp('hsl' + call(NUMBER, PERCENTAGE, PERCENTAGE));
const hsla = new RegExp('hsla' + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER));
const hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex6 = /^#([0-9a-fA-F]{6})$/;
const hex8 = /^#([0-9a-fA-F]{8})$/;

/*
https://github.com/react-community/normalize-css-color

BSD 3-Clause License

Copyright (c) 2016, React Community
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* Neither the name of the copyright holder nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
function normalizeColor(color) {
  let match;

  if (typeof color === 'number') {
    return color >>> 0 === color && color >= 0 && color <= 0xffffffff ? color : null;
  } // Ordered based on occurrences on Facebook codebase


  if (match = hex6.exec(color)) return parseInt(match[1] + 'ff', 16) >>> 0;
  if (colors$1.hasOwnProperty(color)) return colors$1[color];

  if (match = rgb$1.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    0x000000ff) >>> // a
    0;
  }

  if (match = rgba$1.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    parse1(match[4])) >>> // a
    0;
  }

  if (match = hex3.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    'ff', // a
    16) >>> 0;
  } // https://drafts.csswg.org/css-color-4/#hex-notation


  if (match = hex8.exec(color)) return parseInt(match[1], 16) >>> 0;

  if (match = hex4.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    match[4] + match[4], // a
    16) >>> 0;
  }

  if (match = hsl.exec(color)) {
    return (hslToRgb$1(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | 0x000000ff) >>> // a
    0;
  }

  if (match = hsla.exec(color)) {
    return (hslToRgb$1(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | parse1(match[4])) >>> // a
    0;
  }

  return null;
}

function hue2rgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

function hslToRgb$1(h, s, l) {
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const r = hue2rgb(p, q, h + 1 / 3);
  const g = hue2rgb(p, q, h);
  const b = hue2rgb(p, q, h - 1 / 3);
  return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
}

function parse255(str) {
  const int = parseInt(str, 10);
  if (int < 0) return 0;
  if (int > 255) return 255;
  return int;
}

function parse360(str) {
  const int = parseFloat(str);
  return (int % 360 + 360) % 360 / 360;
}

function parse1(str) {
  const num = parseFloat(str);
  if (num < 0) return 0;
  if (num > 1) return 255;
  return Math.round(num * 255);
}

function parsePercentage(str) {
  // parseFloat conveniently ignores the final %
  const int = parseFloat(str);
  if (int < 0) return 0;
  if (int > 100) return 1;
  return int / 100;
}

function colorToRgba(input) {
  let int32Color = normalizeColor(input);
  if (int32Color === null) return input;
  int32Color = int32Color || 0;
  let r = (int32Color & 0xff000000) >>> 24;
  let g = (int32Color & 0x00ff0000) >>> 16;
  let b = (int32Color & 0x0000ff00) >>> 8;
  let a = (int32Color & 0x000000ff) / 255;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
} // Problem: https://github.com/animatedjs/animated/pull/102
// Solution: https://stackoverflow.com/questions/638565/parsing-scientific-notation-sensibly/658662


const stringShapeRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g; // Covers rgb, rgba, hsl, hsla
// Taken from https://gist.github.com/olmokramer/82ccce673f86db7cda5e

const colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi; // Covers color names (transparent, blue, etc.)

const colorNamesRegex = new RegExp(`(${Object.keys(colors$1).join('|')})`, 'g');
/**
 * Supports string shapes by extracting numbers so new values can be computed,
 * and recombines those values into new strings of the same shape.  Supports
 * things like:
 *
 *   rgba(123, 42, 99, 0.36)           // colors
 *   -45deg                            // values with units
 *   0 2px 2px 0px rgba(0, 0, 0, 0.12) // box shadows
 */

const createStringInterpolator = config => {
  // Replace colors with rgba
  const outputRange = config.output.map(rangeValue => rangeValue.replace(colorRegex, colorToRgba)).map(rangeValue => rangeValue.replace(colorNamesRegex, colorToRgba));
  const outputRanges = outputRange[0].match(stringShapeRegex).map(() => []);
  outputRange.forEach(value => {
    value.match(stringShapeRegex).forEach((number, i) => outputRanges[i].push(+number));
  });
  const interpolations = outputRange[0].match(stringShapeRegex).map((_value, i) => createInterpolator(_extends$2({}, config, {
    output: outputRanges[i]
  })));
  return input => {
    let i = 0;
    return outputRange[0] // 'rgba(0, 100, 200, 0)'
    // ->
    // 'rgba(${interpolations[0](input)}, ${interpolations[1](input)}, ...'
    .replace(stringShapeRegex, () => interpolations[i++](input)) // rgba requires that the r,g,b are integers.... so we want to round them, but we *dont* want to
    // round the opacity (4th column).
    .replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, (_, p1, p2, p3, p4) => `rgba(${Math.round(p1)}, ${Math.round(p2)}, ${Math.round(p3)}, ${p4})`);
  };
};

let isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};

const prefixKey = (prefix, key) => prefix + key.charAt(0).toUpperCase() + key.substring(1);

const prefixes = ['Webkit', 'Ms', 'Moz', 'O'];
isUnitlessNumber = Object.keys(isUnitlessNumber).reduce((acc, prop) => {
  prefixes.forEach(prefix => acc[prefixKey(prefix, prop)] = acc[prop]);
  return acc;
}, isUnitlessNumber);

function dangerousStyleValue(name, value, isCustomProperty) {
  if (value == null || typeof value === 'boolean' || value === '') return '';
  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers

  return ('' + value).trim();
}

const attributeCache = {};
injectCreateAnimatedStyle(style => new AnimatedStyle(style));
injectStringInterpolator(createStringInterpolator);
injectColorNames(colors$1);
injectApplyAnimatedValues((instance, props) => {
  if (instance.nodeType && instance.setAttribute !== undefined) {
    const style = props.style,
          children = props.children,
          scrollTop = props.scrollTop,
          scrollLeft = props.scrollLeft,
          attributes = _objectWithoutPropertiesLoose$2(props, ["style", "children", "scrollTop", "scrollLeft"]);

    const filter = instance.nodeName === 'filter' || instance.parentNode && instance.parentNode.nodeName === 'filter';
    if (scrollTop !== void 0) instance.scrollTop = scrollTop;
    if (scrollLeft !== void 0) instance.scrollLeft = scrollLeft; // Set textContent, if children is an animatable value

    if (children !== void 0) instance.textContent = children; // Set styles ...

    for (let styleName in style) {
      if (!style.hasOwnProperty(styleName)) continue;
      var isCustomProperty = styleName.indexOf('--') === 0;
      var styleValue = dangerousStyleValue(styleName, style[styleName], isCustomProperty);
      if (styleName === 'float') styleName = 'cssFloat';
      if (isCustomProperty) instance.style.setProperty(styleName, styleValue);else instance.style[styleName] = styleValue;
    } // Set attributes ...


    for (let name in attributes) {
      // Attributes are written in dash case
      const dashCase = filter ? name : attributeCache[name] || (attributeCache[name] = name.replace(/([A-Z])/g, n => '-' + n.toLowerCase()));
      if (typeof instance.getAttribute(dashCase) !== 'undefined') instance.setAttribute(dashCase, attributes[name]);
    }

    return;
  } else return false;
}, style => style);

const domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];
// Extend animated with all the available THREE elements
const apply = merge$1(createAnimatedComponent, false);
const extendedAnimated = apply(domElements);

function _EMOTION_STRINGIFIED_CSS_ERROR__$8() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
var AnimatedDialogOverlay = extendedAnimated(DialogOverlay);
var AnimatedDialogContent = extendedAnimated(DialogContent);
var overlayStyles = css({
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 9998,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  p: "layout.1",
  bg: rgba("#000", 0.6)
});

var contentStyles = function contentStyles(_ref) {
  var maxWidth = _ref.maxWidth;
  return css({
    display: "block",
    width: "100%",
    maxWidth: maxWidth,
    p: 0,
    borderRadius: "corners.3",
    overflow: "hidden",
    bg: "background.2",
    boxShadow: "elevations.4",
    "&:focus": {
      outline: 0
    }
  });
};

var _ref5 = process.env.NODE_ENV === "production" ? {
  name: "9y6172",
  styles: "user-select:none;"
} : {
  name: "9y6172",
  styles: "user-select:none;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkRpYWxvZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRzBCIiwiZmlsZSI6IkRpYWxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlLCBjbG9uZUVsZW1lbnQsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIFJlYWNoIGZyb20gXCJAcmVhY2gvZGlhbG9nXCI7XG5pbXBvcnQgeyBhbmltYXRlZCwgY29uZmlnLCB1c2VDaGFpbiwgdXNlVHJhbnNpdGlvbiB9IGZyb20gXCJyZWFjdC1zcHJpbmdcIjtcbmltcG9ydCBjc3MgZnJvbSBcIkBzdHlsZWQtc3lzdGVtL2Nzc1wiO1xuaW1wb3J0IHsgcmdiYSB9IGZyb20gXCJwb2xpc2hlZFwiO1xuXG5pbXBvcnQgeyBJY29uQnV0dG9uIH0gZnJvbSBcIi4uLy4uL2J1dHRvbnNcIjtcbmltcG9ydCB7IEZsZXggfSBmcm9tIFwiLi4vLi4vZmxleFwiO1xuaW1wb3J0IHsgSGVhZGluZyB9IGZyb20gXCIuLi8uLi90eXBvZ3JhcGh5XCI7XG5cbi8vIE1ha2UgUmVhY2ggVUkgY29tcG9uZW50cyBhbmltYXRhYmxlIHdpdGggcmVhY3Qtc3ByaW5nXG5jb25zdCBBbmltYXRlZERpYWxvZ092ZXJsYXkgPSBhbmltYXRlZChSZWFjaC5EaWFsb2dPdmVybGF5KTtcbmNvbnN0IEFuaW1hdGVkRGlhbG9nQ29udGVudCA9IGFuaW1hdGVkKFJlYWNoLkRpYWxvZ0NvbnRlbnQpO1xuXG5jb25zdCBvdmVybGF5U3R5bGVzID0gY3NzKHtcbiAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgdG9wOiAwLFxuICBsZWZ0OiAwLFxuICB6SW5kZXg6IDk5OTgsXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxuICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgd2lkdGg6IFwiMTAwJVwiLFxuICBoZWlnaHQ6IFwiMTAwJVwiLFxuICBwOiBcImxheW91dC4xXCIsXG4gIGJnOiByZ2JhKFwiIzAwMFwiLCAwLjYpLFxufSk7XG5cbmNvbnN0IGNvbnRlbnRTdHlsZXMgPSAoeyBtYXhXaWR0aCB9KSA9PlxuICBjc3Moe1xuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgbWF4V2lkdGg6IG1heFdpZHRoLFxuICAgIHA6IDAsXG4gICAgYm9yZGVyUmFkaXVzOiBcImNvcm5lcnMuM1wiLFxuICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgIGJnOiBcImJhY2tncm91bmQuMlwiLFxuICAgIGJveFNoYWRvdzogXCJlbGV2YXRpb25zLjRcIixcbiAgICBcIiY6Zm9jdXNcIjogeyBvdXRsaW5lOiAwIH0sXG4gIH0pO1xuXG5mdW5jdGlvbiBEaWFsb2coeyBhcywgY2hpbGRyZW4sIGRpYWxvZywgLi4ucmVzdCB9KSB7XG4gIGNvbnN0IFtzaG93RGlhbG9nLCBzZXRTaG93RGlhbG9nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgb3BlbiA9ICgpID0+IHNldFNob3dEaWFsb2codHJ1ZSk7XG4gIGNvbnN0IGNsb3NlID0gKCkgPT4gc2V0U2hvd0RpYWxvZyhmYWxzZSk7XG5cbiAgY29uc3Qgb3ZlcmxheVJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBvdmVybGF5VHJhbnNpdGlvbnMgPSB1c2VUcmFuc2l0aW9uKHNob3dEaWFsb2csIG51bGwsIHtcbiAgICByZWY6IG92ZXJsYXlSZWYsXG4gICAgZnJvbTogeyBvcGFjaXR5OiAwIH0sXG4gICAgZW50ZXI6IHsgb3BhY2l0eTogMSB9LFxuICAgIGxlYXZlOiB7IG9wYWNpdHk6IDAgfSxcbiAgICBjb25maWc6IGNvbmZpZy5zdGlmZixcbiAgfSk7XG5cbiAgY29uc3QgY29udGVudFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBjb250ZW50VHJhbnNpdGlvbnMgPSB1c2VUcmFuc2l0aW9uKHNob3dEaWFsb2csIG51bGwsIHtcbiAgICByZWY6IGNvbnRlbnRSZWYsXG4gICAgZnJvbTogeyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgtMTZweClcIiB9LFxuICAgIGVudGVyOiB7IG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKDBweClcIiB9LFxuICAgIGxlYXZlOiB7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKC0zMnB4KVwiIH0sXG4gICAgY29uZmlnOiBjb25maWcuc3RpZmYsXG4gIH0pO1xuXG4gIHVzZUNoYWluKHNob3dEaWFsb2cgPyBbb3ZlcmxheVJlZiwgY29udGVudFJlZl0gOiBbY29udGVudFJlZiwgb3ZlcmxheVJlZl0sIFtcbiAgICAwLFxuICAgIHNob3dEaWFsb2cgPyAwLjEgOiAwLFxuICBdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7Y3JlYXRlRWxlbWVudChcbiAgICAgICAgYXMsXG4gICAgICAgIHsgXCJkYXRhLWZyZXNjby1pZFwiOiBcImRpYWxvZy5idXR0b25cIiwgb25DbGljazogb3BlbiwgLi4ucmVzdCB9LFxuICAgICAgICBjaGlsZHJlblxuICAgICAgKX1cbiAgICAgIHtvdmVybGF5VHJhbnNpdGlvbnMubWFwKFxuICAgICAgICAoeyBpdGVtLCBrZXksIHByb3BzOiBzdHlsZXMgfSkgPT5cbiAgICAgICAgICBpdGVtICYmIChcbiAgICAgICAgICAgIDxBbmltYXRlZERpYWxvZ092ZXJsYXlcbiAgICAgICAgICAgICAgb25EaXNtaXNzPXtjbG9zZX1cbiAgICAgICAgICAgICAgY3NzPXtvdmVybGF5U3R5bGVzfVxuICAgICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlc31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2NvbnRlbnRUcmFuc2l0aW9ucy5tYXAoXG4gICAgICAgICAgICAgICAgKHsgaXRlbSwga2V5LCBwcm9wczogc3R5bGVzIH0pID0+XG4gICAgICAgICAgICAgICAgICBpdGVtICYmIChcbiAgICAgICAgICAgICAgICAgICAgPEFuaW1hdGVkRGlhbG9nQ29udGVudFxuICAgICAgICAgICAgICAgICAgICAgIGNzcz17Y29udGVudFN0eWxlcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogZGlhbG9nLm1heFdpZHRoID8gZGlhbG9nLm1heFdpZHRoIDogNTEyLFxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXN9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7ZGlhbG9nLm5hbWUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHB5PVwic3BhY2luZy40XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHI9XCJzcGFjaW5nLjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJCb3R0b21XaWR0aD17MX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzPXt7IHVzZXJTZWxlY3Q6IFwibm9uZVwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW49e2RpYWxvZy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17NTAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHg9XCJsYXlvdXQuMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sPVwiY2xvc2UtbGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZW50PVwiZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwZWFyYW5jZT1cIm1pbmltYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MzJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWw9XCJhdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbG9zZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIHtjbG9uZUVsZW1lbnQoZGlhbG9nLmNoaWxkcmVuLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93RGlhbG9nOiBzaG93RGlhbG9nLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3Blbjogb3BlbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlOiBjbG9zZSxcbiAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC9BbmltYXRlZERpYWxvZ0NvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0FuaW1hdGVkRGlhbG9nT3ZlcmxheT5cbiAgICAgICAgICApXG4gICAgICApfVxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEaWFsb2c7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$8
};

function Dialog$1(_ref2) {
  var as = _ref2.as,
      children = _ref2.children,
      dialog = _ref2.dialog,
      rest = _objectWithoutProperties(_ref2, ["as", "children", "dialog"]);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showDialog = _useState2[0],
      setShowDialog = _useState2[1];

  var open = function open() {
    return setShowDialog(true);
  };

  var close = function close() {
    return setShowDialog(false);
  };

  var overlayRef = useRef();
  var overlayTransitions = useTransition(showDialog, null, {
    ref: overlayRef,
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    },
    config: config$8.stiff
  });
  var contentRef = useRef();
  var contentTransitions = useTransition(showDialog, null, {
    ref: contentRef,
    from: {
      opacity: 0,
      transform: "translateY(-16px)"
    },
    enter: {
      opacity: 1,
      transform: "translateY(0px)"
    },
    leave: {
      opacity: 0,
      transform: "translateY(-32px)"
    },
    config: config$8.stiff
  });
  useChain(showDialog ? [overlayRef, contentRef] : [contentRef, overlayRef], [0, showDialog ? 0.1 : 0]);
  return jsx(React__default.Fragment, null, createElement(as, _objectSpread2({
    "data-fresco-id": "dialog.button",
    onClick: open
  }, rest), children), overlayTransitions.map(function (_ref3) {
    var item = _ref3.item,
        key = _ref3.key,
        styles = _ref3.props;
    return item && jsx(AnimatedDialogOverlay, {
      onDismiss: close,
      css: overlayStyles,
      key: key,
      style: styles
    }, contentTransitions.map(function (_ref4) {
      var item = _ref4.item,
          key = _ref4.key,
          styles = _ref4.props;
      return item && jsx(AnimatedDialogContent, {
        css: contentStyles({
          maxWidth: dialog.maxWidth ? dialog.maxWidth : 512
        }),
        key: key,
        style: styles
      }, dialog.name && jsx(Flex, {
        alignItems: "center",
        width: "100%",
        py: "spacing.4",
        pr: "spacing.4",
        borderBottomWidth: 1,
        css: _ref5
      }, jsx(Heading, {
        children: dialog.name,
        as: "span",
        size: 500,
        flex: 1,
        px: "layout.2"
      }), jsx(IconButton, {
        symbol: "close-line",
        intent: "default",
        appearance: "minimal",
        height: 32,
        ml: "auto",
        onClick: close
      })), cloneElement(dialog.children, {
        showDialog: showDialog,
        open: open,
        close: close
      }));
    }));
  }));
}

var GlobalStyles = function GlobalStyles() {
  return jsx(Global, {
    styles: css(_objectSpread2({}, normalize(), {
      /**
       * 1. Set the default font family to be set via the Theme.js.
       * 2. Use a default "normal" line-height so the user isn't forced
       *    to override it to ensure consistency even when using the
       *    default theme.
       */
      html: {
        fontFamily: "sans",
        // 1
        lineHeight: 1.5,
        // 2
        textRendering: "optimizelegibility",
        textSizeAdjust: "none",
        color: "label.0",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        WebkitTapHighlightColor: "transparent"
      },

      /**
       * 1. Prevent padding and border from affecting element width.
       *
       *    We used to set this in the html element and inherit from
       *    the parent element for everything else. This caused issues
       *    in shadow-dom-enhanced elements like <details> where the content
       *    is wrapped by a div with box-sizing set to `content-box`.
       *
       *    https://github.com/mozdevs/cssremedy/issues/4
       *
       *
       * 2. Allow adding a border to an element by just adding a border-width.
       *
       *    By default, the way the browser specifies that an element should have no
       *    border is by setting it's border-style to `none` in the user-agent
       *    stylesheet.
       *
       *    In order to easily add borders to elements by just setting the `border-width`
       *    property, we change the default border-style for all elements to `solid`, and
       *    use border-width to hide them instead. This way we only need to set the
       *    `border-width` property instead of the entire `border` shorthand, making our
       *    border definitions much more straightforward to compose.
       */
      "*,*::before,*::after": {
        boxSizing: "border-box",
        // 1
        borderWidth: 0,
        // 2
        borderStyle: "solid",
        // 2
        borderColor: "separator" // 2

      },
      "::-moz-focus-inner, ::-moz-focus-inner": {
        padding: 0,
        border: 0
      },
      body: {
        m: 0,
        overflowX: "hidden",
        overflowY: "scroll",
        overscrollBehavior: "none",
        bg: "background.0"
      },

      /**
       * Removes the default spacing and border for appropriate elements.
       */
      "blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre": {
        m: 0
      },
      "h1,h2,h3,h4,h5,h6": {
        fontSize: "inherit",
        fontWeight: "inherit"
      },

      /**
       * Reset links to optimize for opt-in styling instead of opt-out.
       */
      a: {
        textDecoration: "inherit",
        color: "inherit"
      },
      "ol,ul": {
        listStyle: "none",
        m: 0,
        p: 0
      },
      table: {
        borderCollapse: "collapse"
      },

      /*
       * Ensure horizontal rules are visible by default
       */
      hr: {
        borderTopWidth: "1px"
      },

      /**
       * Undo the `border-style: none` reset that Normalize applies to images so that
       * our `border-{width}` utilities have the expected effect.
       *
       * The Normalize reset is unnecessary for us since we default the border-width
       * to 0 on all elements.
       */
      img: {
        borderStyle: "solid"
      },

      /**
       * Reset form element properties that are easy to forget to
       * style explicitly so you don't inadvertently introduce
       * styles that deviate from your design system. These styles
       * supplement a partial reset that is already applied by
       * normalize.css.
       */
      "button,input,optgroup,select,textarea": {
        p: 0,
        fontFamily: "inherit",
        lineHeight: "inherit",
        color: "inherit",
        appearance: "none"
      },
      textarea: {
        resize: "vertical"
      },
      button: {
        backgroundColor: "transparent",
        backgroundImage: "none",
        m: 0,
        p: 0,

        /**
         * Work around a Firefox/IE bug where the transparent `button` background
         * results in a loss of the default `button` focus styles.
         */
        "&:focus": {
          outline: "1px dotted"
        }
      },
      "button,[role='button']": {
        cursor: "pointer"
      },
      fieldset: {
        m: 0,
        p: 0
      },

      /**
       * Use the configured 'mono' font family for elements that
       * are expected to be rendered with a monospace font.
       */
      "pre,code,kbd,samp": {
        fontFamily: "mono"
      },

      /**
       * Make replaced elements `display: block` by default as that's
       * the behavior you want almost all of the time. Inspired by
       * CSS Remedy, with `svg` added as well.
       *
       * https://github.com/mozdevs/cssremedy/issues/14
       */
      "img,svg,video,canvas,audio,iframe,embed,object": {
        display: "block",
        verticalAlign: "middle"
      },

      /**
       * Constrain images and videos to the parent width and preserve
       * their instrinsic aspect ratio.
       *
       * https://github.com/mozdevs/cssremedy/issues/14
       */
      "img,video": {
        maxWidth: "100%",
        height: "auto"
      }
    }))
  });
};

function flexAlign$3(x) {
  if (x === "start") return "flex-start";
  if (x === "center") return "center";
  if (x === "end") return "flex-end";
  return undefined;
}

var StyledBox$3 = /*#__PURE__*/createStyled(Box, {
  target: "eo3hqta0",
  label: "StyledBox"
})(
/**
 * These system specifications absorb values defined in the Theme
 * and converts them to whole numbers. It's also set up whole
 * numbers or pixel values.
 *
 * Refer to https://styled-system.com/api#system to learn more
 * about how the system utility works and its implementation.
 *
 * If more information is required we recommend referring to the
 * source code for styled-system where its author uses system to
 * create most of the style props that we actually use.
 */
system({
  negativeMarginX: {
    property: "marginLeft",
    scale: "space",
    // Refer the space scale in Theme
    transform: function transform(n, scale) {
      var value = get(scale, n);

      if (!value) {
        value = n;
      }

      if (typeof n === "string") {
        if (n.indexOf("px") !== -1) {
          var number = parseInt(n.replace("px", ""));
          return "-" + number + "px";
        } else {
          return "-" + value + "px";
        }
      } else {
        return "-" + value + "px";
      }
    }
  },
  negativeMarginY: {
    property: "marginTop",
    scale: "space",
    // Refer the space scale in Theme
    transform: function transform(n, scale) {
      var value = get(scale, n);

      if (!value) {
        value = n;
      }

      if (typeof n === "string") {
        if (n.indexOf("px") !== -1) {
          var number = parseInt(n.replace("px", ""));
          return "-" + number + "px";
        } else {
          return "-" + value + "px";
        }
      } else {
        return "-" + value + "px";
      }
    }
  }
}), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklubGluZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQmtCIiwiZmlsZSI6IklubGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogSW5saW5lXG4gKlxuICogSWYgeW914oCZZCBsaWtlIHRvIHJlbmRlciBhIHNldCBvZiBjb21wb25lbnRzIGluXG4gKiBhIHJvdyB3aXRoIGVxdWFsIHNwYWNpbmcgYXJvdW5kIHRoZW0sIHdyYXBwaW5nXG4gKiBvbnRvIG11bHRpcGxlIGxpbmVzIHdoZW4gbmVjZXNzYXJ5LCB3ZSBwcm92aWRlXG4gKiBhbiDigJhJbmxpbmXigJkgY29tcG9uZW50LlxuICovXG5cbmltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgeyBzeXN0ZW0sIGdldCB9IGZyb20gXCJzdHlsZWQtc3lzdGVtXCI7XG5cbmltcG9ydCB7IEJveCB9IGZyb20gXCIuLi8uLi9ib3hcIjtcblxuZnVuY3Rpb24gZmxleEFsaWduKHgpIHtcbiAgaWYgKHggPT09IFwic3RhcnRcIikgcmV0dXJuIFwiZmxleC1zdGFydFwiO1xuICBpZiAoeCA9PT0gXCJjZW50ZXJcIikgcmV0dXJuIFwiY2VudGVyXCI7XG4gIGlmICh4ID09PSBcImVuZFwiKSByZXR1cm4gXCJmbGV4LWVuZFwiO1xuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5jb25zdCBTdHlsZWRCb3ggPSBzdHlsZWQoQm94KShcbiAgLyoqXG4gICAqIFRoZXNlIHN5c3RlbSBzcGVjaWZpY2F0aW9ucyBhYnNvcmIgdmFsdWVzIGRlZmluZWQgaW4gdGhlIFRoZW1lXG4gICAqIGFuZCBjb252ZXJ0cyB0aGVtIHRvIHdob2xlIG51bWJlcnMuIEl0J3MgYWxzbyBzZXQgdXAgd2hvbGVcbiAgICogbnVtYmVycyBvciBwaXhlbCB2YWx1ZXMuXG4gICAqXG4gICAqIFJlZmVyIHRvIGh0dHBzOi8vc3R5bGVkLXN5c3RlbS5jb20vYXBpI3N5c3RlbSB0byBsZWFybiBtb3JlXG4gICAqIGFib3V0IGhvdyB0aGUgc3lzdGVtIHV0aWxpdHkgd29ya3MgYW5kIGl0cyBpbXBsZW1lbnRhdGlvbi5cbiAgICpcbiAgICogSWYgbW9yZSBpbmZvcm1hdGlvbiBpcyByZXF1aXJlZCB3ZSByZWNvbW1lbmQgcmVmZXJyaW5nIHRvIHRoZVxuICAgKiBzb3VyY2UgY29kZSBmb3Igc3R5bGVkLXN5c3RlbSB3aGVyZSBpdHMgYXV0aG9yIHVzZXMgc3lzdGVtIHRvXG4gICAqIGNyZWF0ZSBtb3N0IG9mIHRoZSBzdHlsZSBwcm9wcyB0aGF0IHdlIGFjdHVhbGx5IHVzZS5cbiAgICovXG4gIHN5c3RlbSh7XG4gICAgbmVnYXRpdmVNYXJnaW5YOiB7XG4gICAgICBwcm9wZXJ0eTogXCJtYXJnaW5MZWZ0XCIsXG4gICAgICBzY2FsZTogXCJzcGFjZVwiLCAvLyBSZWZlciB0aGUgc3BhY2Ugc2NhbGUgaW4gVGhlbWVcbiAgICAgIHRyYW5zZm9ybTogKG4sIHNjYWxlKSA9PiB7XG4gICAgICAgIGxldCB2YWx1ZSA9IGdldChzY2FsZSwgbik7XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICB2YWx1ZSA9IG47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgaWYgKG4uaW5kZXhPZihcInB4XCIpICE9PSAtMSkge1xuICAgICAgICAgICAgbGV0IG51bWJlciA9IHBhcnNlSW50KG4ucmVwbGFjZShcInB4XCIsIFwiXCIpKTtcbiAgICAgICAgICAgIHJldHVybiBcIi1cIiArIG51bWJlciArIFwicHhcIjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFwiLVwiICsgdmFsdWUgKyBcInB4XCI7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBcIi1cIiArIHZhbHVlICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0sXG4gICAgbmVnYXRpdmVNYXJnaW5ZOiB7XG4gICAgICBwcm9wZXJ0eTogXCJtYXJnaW5Ub3BcIixcbiAgICAgIHNjYWxlOiBcInNwYWNlXCIsIC8vIFJlZmVyIHRoZSBzcGFjZSBzY2FsZSBpbiBUaGVtZVxuICAgICAgdHJhbnNmb3JtOiAobiwgc2NhbGUpID0+IHtcbiAgICAgICAgbGV0IHZhbHVlID0gZ2V0KHNjYWxlLCBuKTtcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgIHZhbHVlID0gbjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIG4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICBpZiAobi5pbmRleE9mKFwicHhcIikgIT09IC0xKSB7XG4gICAgICAgICAgICBsZXQgbnVtYmVyID0gcGFyc2VJbnQobi5yZXBsYWNlKFwicHhcIiwgXCJcIikpO1xuICAgICAgICAgICAgcmV0dXJuIFwiLVwiICsgbnVtYmVyICsgXCJweFwiO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXCItXCIgKyB2YWx1ZSArIFwicHhcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFwiLVwiICsgdmFsdWUgKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbik7XG5cbmNvbnN0IElubmVyU3R5bGVkQm94ID0gc3R5bGVkKEJveCkoXG4gIC8qKiBXb3JrcyBsaWtlIHRoZSBjb21wb25lbnQgYWJvdmUgYnV0IGZvciBwYWRkaW5nICovXG4gIHN5c3RlbSh7XG4gICAgZ3V0dGVyWDoge1xuICAgICAgcHJvcGVydHk6IFwicGFkZGluZ0xlZnRcIixcbiAgICAgIHNjYWxlOiBcInNwYWNlXCIsXG4gICAgICB0cmFuc2Zvcm06IChuLCBzY2FsZSkgPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSBnZXQoc2NhbGUsIG4pO1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgdmFsdWUgPSBuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgIGlmIChuLmluZGV4T2YoXCJweFwiKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGxldCBudW1iZXIgPSBwYXJzZUludChuLnJlcGxhY2UoXCJweFwiLCBcIlwiKSk7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyICsgXCJweFwiO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgKyBcInB4XCI7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB2YWx1ZSArIFwicHhcIjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9LFxuICAgIGd1dHRlclk6IHtcbiAgICAgIHByb3BlcnR5OiBcInBhZGRpbmdUb3BcIixcbiAgICAgIHNjYWxlOiBcInNwYWNlXCIsXG4gICAgICB0cmFuc2Zvcm06IChuLCBzY2FsZSkgPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSBnZXQoc2NhbGUsIG4pO1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgdmFsdWUgPSBuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgIGlmIChuLmluZGV4T2YoXCJweFwiKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGxldCBudW1iZXIgPSBwYXJzZUludChuLnJlcGxhY2UoXCJweFwiLCBcIlwiKSk7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyICsgXCJweFwiO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgKyBcInB4XCI7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB2YWx1ZSArIFwicHhcIjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9LFxuICB9KVxuKTtcblxuZnVuY3Rpb24gSW5saW5lKHtcbiAgYWxpZ24gPSBcInN0YXJ0XCIsXG4gIGFzID0gXCJkaXZcIixcbiAgY2hpbGRyZW4sXG4gIHNwYWNlID0gMCxcbiAgc3BhY2VYLFxuICBzcGFjZVksXG59KSB7XG4gIGNvbnN0IGlzTGlzdCA9IGFzID09PSBcIm9sXCIgfHwgYXMgPT09IFwidWxcIjtcbiAgY29uc3Qgc3RhY2tJdGVtQ29tcG9uZW50ID0gaXNMaXN0ID8gXCJsaVwiIDogXCJkaXZcIjtcblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWRCb3hcbiAgICAgIGRhdGEtZnJlc2NvLWlkPVwiaW5saW5lXCJcbiAgICAgIGFzPXthc31cbiAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgIGZsZXhXcmFwPVwid3JhcFwiXG4gICAgICBqdXN0aWZ5Q29udGVudD17ZmxleEFsaWduKGFsaWduKX1cbiAgICAgIG5lZ2F0aXZlTWFyZ2luWD17c3BhY2VYID8gc3BhY2VYIDogc3BhY2V9XG4gICAgICBuZWdhdGl2ZU1hcmdpblk9e3NwYWNlWSA/IHNwYWNlWSA6IHNwYWNlfVxuICAgICAgY3NzPXtpc0xpc3QgJiYgeyBsaXN0U3R5bGU6IFwibm9uZVwiIH19XG4gICAgPlxuICAgICAge0NoaWxkcmVuLm1hcChjaGlsZHJlbiwgKGNoaWxkKSA9PlxuICAgICAgICBjaGlsZCAhPT0gbnVsbCAmJiBjaGlsZCAhPT0gdW5kZWZpbmVkID8gKFxuICAgICAgICAgIDxJbm5lclN0eWxlZEJveFxuICAgICAgICAgICAgZGF0YS1mcmVzY28taWQ9XCJpbmxpbmUuY2hpbGRcIlxuICAgICAgICAgICAgYXM9e3N0YWNrSXRlbUNvbXBvbmVudH1cbiAgICAgICAgICAgIG1pbldpZHRoPXswfVxuICAgICAgICAgICAgZ3V0dGVyWD17c3BhY2VYID8gc3BhY2VYIDogc3BhY2V9XG4gICAgICAgICAgICBndXR0ZXJZPXtzcGFjZVkgPyBzcGFjZVkgOiBzcGFjZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y2hpbGR9XG4gICAgICAgICAgPC9Jbm5lclN0eWxlZEJveD5cbiAgICAgICAgKSA6IG51bGxcbiAgICAgICl9XG4gICAgPC9TdHlsZWRCb3g+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IElubGluZTtcbiJdfQ== */");

var InnerStyledBox = /*#__PURE__*/createStyled(Box, {
  target: "eo3hqta1",
  label: "InnerStyledBox"
})(
/** Works like the component above but for padding */
system({
  gutterX: {
    property: "paddingLeft",
    scale: "space",
    transform: function transform(n, scale) {
      var value = get(scale, n);

      if (!value) {
        value = n;
      }

      if (typeof n === "string") {
        if (n.indexOf("px") !== -1) {
          var number = parseInt(n.replace("px", ""));
          return number + "px";
        } else {
          return value + "px";
        }
      } else {
        return value + "px";
      }
    }
  },
  gutterY: {
    property: "paddingTop",
    scale: "space",
    transform: function transform(n, scale) {
      var value = get(scale, n);

      if (!value) {
        value = n;
      }

      if (typeof n === "string") {
        if (n.indexOf("px") !== -1) {
          var number = parseInt(n.replace("px", ""));
          return number + "px";
        } else {
          return value + "px";
        }
      } else {
        return value + "px";
      }
    }
  }
}), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklubGluZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRXVCIiwiZmlsZSI6IklubGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogSW5saW5lXG4gKlxuICogSWYgeW914oCZZCBsaWtlIHRvIHJlbmRlciBhIHNldCBvZiBjb21wb25lbnRzIGluXG4gKiBhIHJvdyB3aXRoIGVxdWFsIHNwYWNpbmcgYXJvdW5kIHRoZW0sIHdyYXBwaW5nXG4gKiBvbnRvIG11bHRpcGxlIGxpbmVzIHdoZW4gbmVjZXNzYXJ5LCB3ZSBwcm92aWRlXG4gKiBhbiDigJhJbmxpbmXigJkgY29tcG9uZW50LlxuICovXG5cbmltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgeyBzeXN0ZW0sIGdldCB9IGZyb20gXCJzdHlsZWQtc3lzdGVtXCI7XG5cbmltcG9ydCB7IEJveCB9IGZyb20gXCIuLi8uLi9ib3hcIjtcblxuZnVuY3Rpb24gZmxleEFsaWduKHgpIHtcbiAgaWYgKHggPT09IFwic3RhcnRcIikgcmV0dXJuIFwiZmxleC1zdGFydFwiO1xuICBpZiAoeCA9PT0gXCJjZW50ZXJcIikgcmV0dXJuIFwiY2VudGVyXCI7XG4gIGlmICh4ID09PSBcImVuZFwiKSByZXR1cm4gXCJmbGV4LWVuZFwiO1xuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5jb25zdCBTdHlsZWRCb3ggPSBzdHlsZWQoQm94KShcbiAgLyoqXG4gICAqIFRoZXNlIHN5c3RlbSBzcGVjaWZpY2F0aW9ucyBhYnNvcmIgdmFsdWVzIGRlZmluZWQgaW4gdGhlIFRoZW1lXG4gICAqIGFuZCBjb252ZXJ0cyB0aGVtIHRvIHdob2xlIG51bWJlcnMuIEl0J3MgYWxzbyBzZXQgdXAgd2hvbGVcbiAgICogbnVtYmVycyBvciBwaXhlbCB2YWx1ZXMuXG4gICAqXG4gICAqIFJlZmVyIHRvIGh0dHBzOi8vc3R5bGVkLXN5c3RlbS5jb20vYXBpI3N5c3RlbSB0byBsZWFybiBtb3JlXG4gICAqIGFib3V0IGhvdyB0aGUgc3lzdGVtIHV0aWxpdHkgd29ya3MgYW5kIGl0cyBpbXBsZW1lbnRhdGlvbi5cbiAgICpcbiAgICogSWYgbW9yZSBpbmZvcm1hdGlvbiBpcyByZXF1aXJlZCB3ZSByZWNvbW1lbmQgcmVmZXJyaW5nIHRvIHRoZVxuICAgKiBzb3VyY2UgY29kZSBmb3Igc3R5bGVkLXN5c3RlbSB3aGVyZSBpdHMgYXV0aG9yIHVzZXMgc3lzdGVtIHRvXG4gICAqIGNyZWF0ZSBtb3N0IG9mIHRoZSBzdHlsZSBwcm9wcyB0aGF0IHdlIGFjdHVhbGx5IHVzZS5cbiAgICovXG4gIHN5c3RlbSh7XG4gICAgbmVnYXRpdmVNYXJnaW5YOiB7XG4gICAgICBwcm9wZXJ0eTogXCJtYXJnaW5MZWZ0XCIsXG4gICAgICBzY2FsZTogXCJzcGFjZVwiLCAvLyBSZWZlciB0aGUgc3BhY2Ugc2NhbGUgaW4gVGhlbWVcbiAgICAgIHRyYW5zZm9ybTogKG4sIHNjYWxlKSA9PiB7XG4gICAgICAgIGxldCB2YWx1ZSA9IGdldChzY2FsZSwgbik7XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICB2YWx1ZSA9IG47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgaWYgKG4uaW5kZXhPZihcInB4XCIpICE9PSAtMSkge1xuICAgICAgICAgICAgbGV0IG51bWJlciA9IHBhcnNlSW50KG4ucmVwbGFjZShcInB4XCIsIFwiXCIpKTtcbiAgICAgICAgICAgIHJldHVybiBcIi1cIiArIG51bWJlciArIFwicHhcIjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFwiLVwiICsgdmFsdWUgKyBcInB4XCI7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBcIi1cIiArIHZhbHVlICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0sXG4gICAgbmVnYXRpdmVNYXJnaW5ZOiB7XG4gICAgICBwcm9wZXJ0eTogXCJtYXJnaW5Ub3BcIixcbiAgICAgIHNjYWxlOiBcInNwYWNlXCIsIC8vIFJlZmVyIHRoZSBzcGFjZSBzY2FsZSBpbiBUaGVtZVxuICAgICAgdHJhbnNmb3JtOiAobiwgc2NhbGUpID0+IHtcbiAgICAgICAgbGV0IHZhbHVlID0gZ2V0KHNjYWxlLCBuKTtcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgIHZhbHVlID0gbjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIG4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICBpZiAobi5pbmRleE9mKFwicHhcIikgIT09IC0xKSB7XG4gICAgICAgICAgICBsZXQgbnVtYmVyID0gcGFyc2VJbnQobi5yZXBsYWNlKFwicHhcIiwgXCJcIikpO1xuICAgICAgICAgICAgcmV0dXJuIFwiLVwiICsgbnVtYmVyICsgXCJweFwiO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXCItXCIgKyB2YWx1ZSArIFwicHhcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFwiLVwiICsgdmFsdWUgKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbik7XG5cbmNvbnN0IElubmVyU3R5bGVkQm94ID0gc3R5bGVkKEJveCkoXG4gIC8qKiBXb3JrcyBsaWtlIHRoZSBjb21wb25lbnQgYWJvdmUgYnV0IGZvciBwYWRkaW5nICovXG4gIHN5c3RlbSh7XG4gICAgZ3V0dGVyWDoge1xuICAgICAgcHJvcGVydHk6IFwicGFkZGluZ0xlZnRcIixcbiAgICAgIHNjYWxlOiBcInNwYWNlXCIsXG4gICAgICB0cmFuc2Zvcm06IChuLCBzY2FsZSkgPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSBnZXQoc2NhbGUsIG4pO1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgdmFsdWUgPSBuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgIGlmIChuLmluZGV4T2YoXCJweFwiKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGxldCBudW1iZXIgPSBwYXJzZUludChuLnJlcGxhY2UoXCJweFwiLCBcIlwiKSk7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyICsgXCJweFwiO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgKyBcInB4XCI7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB2YWx1ZSArIFwicHhcIjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9LFxuICAgIGd1dHRlclk6IHtcbiAgICAgIHByb3BlcnR5OiBcInBhZGRpbmdUb3BcIixcbiAgICAgIHNjYWxlOiBcInNwYWNlXCIsXG4gICAgICB0cmFuc2Zvcm06IChuLCBzY2FsZSkgPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSBnZXQoc2NhbGUsIG4pO1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgdmFsdWUgPSBuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgIGlmIChuLmluZGV4T2YoXCJweFwiKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGxldCBudW1iZXIgPSBwYXJzZUludChuLnJlcGxhY2UoXCJweFwiLCBcIlwiKSk7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyICsgXCJweFwiO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgKyBcInB4XCI7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB2YWx1ZSArIFwicHhcIjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9LFxuICB9KVxuKTtcblxuZnVuY3Rpb24gSW5saW5lKHtcbiAgYWxpZ24gPSBcInN0YXJ0XCIsXG4gIGFzID0gXCJkaXZcIixcbiAgY2hpbGRyZW4sXG4gIHNwYWNlID0gMCxcbiAgc3BhY2VYLFxuICBzcGFjZVksXG59KSB7XG4gIGNvbnN0IGlzTGlzdCA9IGFzID09PSBcIm9sXCIgfHwgYXMgPT09IFwidWxcIjtcbiAgY29uc3Qgc3RhY2tJdGVtQ29tcG9uZW50ID0gaXNMaXN0ID8gXCJsaVwiIDogXCJkaXZcIjtcblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWRCb3hcbiAgICAgIGRhdGEtZnJlc2NvLWlkPVwiaW5saW5lXCJcbiAgICAgIGFzPXthc31cbiAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgIGZsZXhXcmFwPVwid3JhcFwiXG4gICAgICBqdXN0aWZ5Q29udGVudD17ZmxleEFsaWduKGFsaWduKX1cbiAgICAgIG5lZ2F0aXZlTWFyZ2luWD17c3BhY2VYID8gc3BhY2VYIDogc3BhY2V9XG4gICAgICBuZWdhdGl2ZU1hcmdpblk9e3NwYWNlWSA/IHNwYWNlWSA6IHNwYWNlfVxuICAgICAgY3NzPXtpc0xpc3QgJiYgeyBsaXN0U3R5bGU6IFwibm9uZVwiIH19XG4gICAgPlxuICAgICAge0NoaWxkcmVuLm1hcChjaGlsZHJlbiwgKGNoaWxkKSA9PlxuICAgICAgICBjaGlsZCAhPT0gbnVsbCAmJiBjaGlsZCAhPT0gdW5kZWZpbmVkID8gKFxuICAgICAgICAgIDxJbm5lclN0eWxlZEJveFxuICAgICAgICAgICAgZGF0YS1mcmVzY28taWQ9XCJpbmxpbmUuY2hpbGRcIlxuICAgICAgICAgICAgYXM9e3N0YWNrSXRlbUNvbXBvbmVudH1cbiAgICAgICAgICAgIG1pbldpZHRoPXswfVxuICAgICAgICAgICAgZ3V0dGVyWD17c3BhY2VYID8gc3BhY2VYIDogc3BhY2V9XG4gICAgICAgICAgICBndXR0ZXJZPXtzcGFjZVkgPyBzcGFjZVkgOiBzcGFjZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y2hpbGR9XG4gICAgICAgICAgPC9Jbm5lclN0eWxlZEJveD5cbiAgICAgICAgKSA6IG51bGxcbiAgICAgICl9XG4gICAgPC9TdHlsZWRCb3g+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IElubGluZTtcbiJdfQ== */");

function Inline(_ref) {
  var _ref$align = _ref.align,
      align = _ref$align === void 0 ? "start" : _ref$align,
      _ref$as = _ref.as,
      as = _ref$as === void 0 ? "div" : _ref$as,
      children = _ref.children,
      _ref$space = _ref.space,
      space = _ref$space === void 0 ? 0 : _ref$space,
      spaceX = _ref.spaceX,
      spaceY = _ref.spaceY;
  var isList = as === "ol" || as === "ul";
  var stackItemComponent = isList ? "li" : "div";
  return jsx(StyledBox$3, {
    "data-fresco-id": "inline",
    as: as,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: flexAlign$3(align),
    negativeMarginX: spaceX ? spaceX : space,
    negativeMarginY: spaceY ? spaceY : space,
    css: isList && {
      listStyle: "none"
    }
  }, Children.map(children, function (child) {
    return child !== null && child !== undefined ? jsx(InnerStyledBox, {
      "data-fresco-id": "inline.child",
      as: stackItemComponent,
      minWidth: 0,
      gutterX: spaceX ? spaceX : space,
      gutterY: spaceY ? spaceY : space
    }, child) : null;
  }));
}

function _EMOTION_STRINGIFIED_CSS_ERROR__$9() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var getControlSizeForTextSize$1 = function getControlSizeForTextSize(size) {
  if (size <= 300) return 16;
  if (size <= 400) return 16;
  if (size <= 500) return 16;
  if (size <= 600) return 20;
  return 20;
};

var getTextOffsetForTextSize$1 = function getTextOffsetForTextSize(size) {
  if (size <= 300) return 4;
  if (size <= 400) return 3;
  if (size <= 500) return 2;
  return 2;
};

var _ref2$8 = process.env.NODE_ENV === "production" ? {
  name: "1jo2288-Radio",
  styles: "user-select:none;cursor:pointer;;label:Radio;"
} : {
  name: "1jo2288-Radio",
  styles: "user-select:none;cursor:pointer;;label:Radio;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJhZGlvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDTSIsImZpbGUiOiJSYWRpby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSBcImVtb3Rpb24tdGhlbWluZ1wiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcbmltcG9ydCBjc3MgZnJvbSBcIkBzdHlsZWQtc3lzdGVtL2Nzc1wiO1xuaW1wb3J0IHsgaGlkZVZpc3VhbGx5LCByZ2JhIH0gZnJvbSBcInBvbGlzaGVkXCI7XG5cbmltcG9ydCB7IEJveCB9IGZyb20gXCIuLi8uLi9ib3hcIjtcbmltcG9ydCB7IFRleHQgfSBmcm9tIFwiLi4vLi4vdHlwb2dyYXBoeVwiO1xuXG5jb25zdCBnZXRDb250cm9sU2l6ZUZvclRleHRTaXplID0gKHNpemUpID0+IHtcbiAgaWYgKHNpemUgPD0gMzAwKSByZXR1cm4gMTY7XG4gIGlmIChzaXplIDw9IDQwMCkgcmV0dXJuIDE2O1xuICBpZiAoc2l6ZSA8PSA1MDApIHJldHVybiAxNjtcbiAgaWYgKHNpemUgPD0gNjAwKSByZXR1cm4gMjA7XG4gIHJldHVybiAyMDtcbn07XG5cbmNvbnN0IGdldFRleHRPZmZzZXRGb3JUZXh0U2l6ZSA9IChzaXplKSA9PiB7XG4gIGlmIChzaXplIDw9IDMwMCkgcmV0dXJuIDQ7XG4gIGlmIChzaXplIDw9IDQwMCkgcmV0dXJuIDM7XG4gIGlmIChzaXplIDw9IDUwMCkgcmV0dXJuIDI7XG4gIHJldHVybiAyO1xufTtcblxuY29uc3QgUmFkaW8gPSAoeyBiZywgY2hpbGRyZW4sIGluZGV0ZXJtaW5hdGUsIHNpemUsIC4uLnJlc3QgfSkgPT4ge1xuICBjb25zdCBUSEVNRSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IFVJRCA9IHV1aWR2NCgpO1xuICBjb25zdCBDUyA9IGdldENvbnRyb2xTaXplRm9yVGV4dFNpemUoc2l6ZSk7XG4gIGNvbnN0IFRFWFRfT0ZGU0VUID0gZ2V0VGV4dE9mZnNldEZvclRleHRTaXplKHNpemUpICsgXCJweFwiO1xuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgZGF0YS1mcmVzY28taWQ9XCJyYWRpb1wiXG4gICAgICByb2xlPVwicmFkaW9cIlxuICAgICAgYXM9XCJsYWJlbFwiXG4gICAgICBodG1sRm9yPXtVSUR9XG4gICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgIGRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIlxuICAgICAgaGVpZ2h0PXtDU31cbiAgICAgIHBsPXtgY2FsYygke0NTICsgXCJweFwifSArIDRweClgfVxuICAgICAgdmVydGljYWxBbGlnbj1cInRvcFwiXG4gICAgICBjc3M9e3sgdXNlclNlbGVjdDogXCJub25lXCIsIGN1cnNvcjogXCJwb2ludGVyXCIgfX1cbiAgICA+XG4gICAgICA8Qm94XG4gICAgICAgIGRhdGEtZnJlc2NvLWlkPVwicmFkaW8uaGlkZGVuSW5wdXRcIlxuICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgYXM9XCJpbnB1dFwiXG4gICAgICAgIGlkPXtVSUR9XG4gICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgIHJlZj17KGVsKSA9PiBlbCAmJiAoZWwuaW5kZXRlcm1pbmF0ZSA9IGluZGV0ZXJtaW5hdGUpfVxuICAgICAgICBjc3M9e2Nzcyh7XG4gICAgICAgICAgLi4uaGlkZVZpc3VhbGx5KCksXG4gICAgICAgICAgXCIrIGRpdlwiOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6XG4gICAgICAgICAgICAgIFwidXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWRYUm1MVGdpUHo0TkNqd2hMUzBnUjJWdVpYSmhkRzl5T2lCQlpHOWlaU0JKYkd4MWMzUnlZWFJ2Y2lBeE55NHhMakFzSUZOV1J5QkZlSEJ2Y25RZ1VHeDFaeTFKYmlBdUlGTldSeUJXWlhKemFXOXVPaUEyTGpBd0lFSjFhV3hrSURBcElDQXRMVDROQ2p3aFJFOURWRmxRUlNCemRtY2dVRlZDVEVsRElDSXRMeTlYTTBNdkwwUlVSQ0JUVmtjZ01TNHhMeTlGVGlJZ0ltaDBkSEE2THk5M2QzY3Vkek11YjNKbkwwZHlZWEJvYVdOekwxTldSeTh4TGpFdlJGUkVMM04yWnpFeExtUjBaQ0krRFFvOGMzWm5JSFpsY25OcGIyNDlJakV1TVNJZ2FXUTlJa3hoZVdWeVh6RWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaUlIZzlJakJ3ZUNJZ2VUMGlNSEI0SWcwS0NTQjJhV1YzUW05NFBTSXdJREFnT0NBNElpQmxibUZpYkdVdFltRmphMmR5YjNWdVpEMGlibVYzSURBZ01DQTRJRGdpSUhodGJEcHpjR0ZqWlQwaWNISmxjMlZ5ZG1VaVBnMEtQSEJoZEdnZ1ptbHNiRDBpSTBaR1JrWkdSaUlnWkQwaVRUUXNNVU15TGpNc01Td3hMREl1TXl3eExEUnpNUzR6TERNc015d3pjek10TVM0ekxETXRNMU0xTGpjc01TdzBMREY2SWk4K0RRbzhMM04yWno0TkNnPT0pXCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCI1MCUgNTAlXCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiNTAlIDUwJVwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcbiAgICAgICAgICAgIGJveFNoYWRvdzogYGluc2V0IDAgMCAwIDFweCAke3JnYmEoXG4gICAgICAgICAgICAgIFRIRU1FLmNvbG9ycy5maWxsWzBdLFxuICAgICAgICAgICAgICAwLjJcbiAgICAgICAgICAgICl9LCAwIDAgMXB4ICR7cmdiYShUSEVNRS5jb2xvcnMuZmlsbFswXSwgMC4xKX0sIDAgMXB4IDJweCAke3JnYmEoXG4gICAgICAgICAgICAgIFRIRU1FLmNvbG9ycy5maWxsWzBdLFxuICAgICAgICAgICAgICAwLjFcbiAgICAgICAgICAgICl9YCxcbiAgICAgICAgICAgIHVzZXJTZWxlY3Q6IFwibm9uZVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCI6Y2hlY2tlZCArIGRpdlwiOiB7XG4gICAgICAgICAgICBiZzogXCJ0aW50LmJsdWVcIixcbiAgICAgICAgICAgIGJveFNoYWRvdzogYGluc2V0IDAgMCAwIDFweCAke3JnYmEoXG4gICAgICAgICAgICAgIFRIRU1FLmNvbG9ycy5maWxsWzBdLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICApfSwgMCAwIDFweCAke3JnYmEoVEhFTUUuY29sb3JzLmZpbGxbMF0sIDAuMSl9LCAwIDFweCAycHggJHtyZ2JhKFxuICAgICAgICAgICAgICBUSEVNRS5jb2xvcnMuZmlsbFswXSxcbiAgICAgICAgICAgICAgMC4xXG4gICAgICAgICAgICApfWAsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIjphY3RpdmUgKyBkaXZcIjoge1xuICAgICAgICAgICAgYmc6IFwidGludC5ibHVlXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIjpmb2N1cyArIGRpdlwiOiB7XG4gICAgICAgICAgICBib3hTaGFkb3c6IGBpbnNldCAwIDAgMCAxcHggJHtUSEVNRS5jb2xvcnMuZmlsbFswXX0sIDAgMCAxcHggJHtyZ2JhKFxuICAgICAgICAgICAgICBUSEVNRS5jb2xvcnMuZmlsbFswXSxcbiAgICAgICAgICAgICAgMC4xXG4gICAgICAgICAgICApfSwgMCAxcHggMnB4ICR7cmdiYShUSEVNRS5jb2xvcnMuZmlsbFswXSwgMC4xKX1gLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pfVxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgIC8+XG4gICAgICA8Qm94XG4gICAgICAgIGRhdGEtZnJlc2NvLWlkPVwicmFkaW8uY29udHJvbFwiXG4gICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgICBsZWZ0PXswfVxuICAgICAgICBkaXNwbGF5PVwiYmxvY2tcIlxuICAgICAgICB3aWR0aD17Q1N9XG4gICAgICAgIGhlaWdodD17Q1N9XG4gICAgICAgIGJvcmRlclJhZGl1cz17OTk5OX1cbiAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgIGJnPXtiZ31cbiAgICAgIC8+XG4gICAgICA8Qm94IHB0PXtURVhUX09GRlNFVH0+XG4gICAgICAgIDxUZXh0IGRhdGEtZnJlc2NvLWlkPVwicmFkaW8udGV4dFwiIHNpemU9e3NpemV9PlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5SYWRpby5kZWZhdWx0UHJvcHMgPSB7XG4gIGJnOiBcIndoaXRlXCIsXG4gIHNpemU6IDQwMCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGlvO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$9
};

var Radio = function Radio(_ref) {
  var bg = _ref.bg,
      children = _ref.children,
      indeterminate = _ref.indeterminate,
      size = _ref.size,
      rest = _objectWithoutProperties(_ref, ["bg", "children", "indeterminate", "size"]);

  var THEME = useTheme();
  var UID = v4();
  var CS = getControlSizeForTextSize$1(size);
  var TEXT_OFFSET = getTextOffsetForTextSize$1(size) + "px";
  return jsx(Box, {
    "data-fresco-id": "radio",
    role: "radio",
    as: "label",
    htmlFor: UID,
    position: "relative",
    display: "inline-block",
    height: CS,
    pl: "calc(".concat(CS + "px", " + 4px)"),
    verticalAlign: "top",
    css: _ref2$8
  }, jsx(Box, _extends({
    "data-fresco-id": "radio.hiddenInput",
    role: "presentation",
    as: "input",
    id: UID,
    type: "radio",
    ref: function ref(el) {
      return el && (el.indeterminate = indeterminate);
    },
    css: css(_objectSpread2({}, hideVisually(), {
      "+ div": {
        backgroundImage: "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgOCA4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA4IDgiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQsMUMyLjMsMSwxLDIuMywxLDRzMS4zLDMsMywzczMtMS4zLDMtM1M1LjcsMSw0LDF6Ii8+DQo8L3N2Zz4NCg==)",
        backgroundSize: "50% 50%",
        backgroundPosition: "50% 50%",
        backgroundRepeat: "no-repeat",
        boxShadow: "inset 0 0 0 1px ".concat(rgba(THEME.colors.fill[0], 0.2), ", 0 0 1px ").concat(rgba(THEME.colors.fill[0], 0.1), ", 0 1px 2px ").concat(rgba(THEME.colors.fill[0], 0.1)),
        userSelect: "none"
      },
      ":checked + div": {
        bg: "tint.blue",
        boxShadow: "inset 0 0 0 1px ".concat(rgba(THEME.colors.fill[0], 0), ", 0 0 1px ").concat(rgba(THEME.colors.fill[0], 0.1), ", 0 1px 2px ").concat(rgba(THEME.colors.fill[0], 0.1))
      },
      ":active + div": {
        bg: "tint.blue"
      },
      ":focus + div": {
        boxShadow: "inset 0 0 0 1px ".concat(THEME.colors.fill[0], ", 0 0 1px ").concat(rgba(THEME.colors.fill[0], 0.1), ", 0 1px 2px ").concat(rgba(THEME.colors.fill[0], 0.1))
      }
    }))
  }, rest)), jsx(Box, {
    "data-fresco-id": "radio.control",
    position: "absolute",
    left: 0,
    display: "block",
    width: CS,
    height: CS,
    borderRadius: 9999,
    color: "white",
    bg: bg
  }), jsx(Box, {
    pt: TEXT_OFFSET
  }, jsx(Text, {
    "data-fresco-id": "radio.text",
    size: size
  }, children)));
};

Radio.defaultProps = {
  bg: "white",
  size: 400
};

var ValidationMessage = function ValidationMessage(_ref) {
  var validationMessage = _ref.validationMessage;

  if (validationMessage) {
    return jsx(Box, {
      m: "spacing.2"
    }, jsx(Text, {
      color: "tint.red",
      fontWeight: 800,
      size: 400
    }, "\u21B3 ", validationMessage));
  } else {
    return null;
  }
};

var RadioGroup = function RadioGroup(_ref) {
  var options = _ref.options,
      stack = _ref.stack,
      validationMessage = _ref.validationMessage;
  var uid = v4();
  return jsx(React__default.Fragment, null, jsx(Box, {
    "data-fresco-id": "radioGroup",
    overflow: "hidden"
  }, jsx(Box, {
    "data-fresco-id": "radioGroup.list",
    role: "radiogroup",
    as: "ul",
    display: "flex",
    flexDirection: stack && "column",
    flexWrap: "wrap",
    p: 0,
    css: /*#__PURE__*/css$1({
      margin: stack ? "-2px" : "-2px -4px",
      listStyle: "none",
      "> *": {
        padding: stack ? "2px" : "2px 4px"
      }
    }, ";label:RadioGroup;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJhZGlvR3JvdXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JVIiwiZmlsZSI6IlJhZGlvR3JvdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuXG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiLi4vLi4vYm94XCI7XG5pbXBvcnQgeyBWYWxpZGF0aW9uTWVzc2FnZSB9IGZyb20gXCIuLi8uLi92YWxpZGF0aW9uTWVzc2FnZVwiO1xuXG5pbXBvcnQgUmFkaW8gZnJvbSBcIi4vUmFkaW9cIjtcblxuY29uc3QgUmFkaW9Hcm91cCA9ICh7IG9wdGlvbnMsIHN0YWNrLCB2YWxpZGF0aW9uTWVzc2FnZSB9KSA9PiB7XG4gIGNvbnN0IHVpZCA9IHV1aWR2NCgpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCb3ggZGF0YS1mcmVzY28taWQ9XCJyYWRpb0dyb3VwXCIgb3ZlcmZsb3c9XCJoaWRkZW5cIj5cbiAgICAgICAgPEJveFxuICAgICAgICAgIGRhdGEtZnJlc2NvLWlkPVwicmFkaW9Hcm91cC5saXN0XCJcbiAgICAgICAgICByb2xlPVwicmFkaW9ncm91cFwiXG4gICAgICAgICAgYXM9XCJ1bFwiXG4gICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgIGZsZXhEaXJlY3Rpb249e3N0YWNrICYmIFwiY29sdW1uXCJ9XG4gICAgICAgICAgZmxleFdyYXA9XCJ3cmFwXCJcbiAgICAgICAgICBwPXswfVxuICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgbWFyZ2luOiBzdGFjayA/IFwiLTJweFwiIDogXCItMnB4IC00cHhcIixcbiAgICAgICAgICAgIGxpc3RTdHlsZTogXCJub25lXCIsXG4gICAgICAgICAgICBcIj4gKlwiOiB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IHN0YWNrID8gXCIycHhcIiA6IFwiMnB4IDRweFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge29wdGlvbnMubWFwKChvcHRpb24sIGkpID0+IChcbiAgICAgICAgICAgIDxCb3ggZGF0YS1mcmVzY28taWQ9XCJyYWRpb0dyb3VwLml0ZW1cIiBhcz1cImxpXCIga2V5PXtpfT5cbiAgICAgICAgICAgICAgPFJhZGlvIG5hbWU9e3VpZH0gdmFsdWU9e29wdGlvbi52YWx1ZX0+XG4gICAgICAgICAgICAgICAge29wdGlvbi5sYWJlbH1cbiAgICAgICAgICAgICAgPC9SYWRpbz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgICAgPFZhbGlkYXRpb25NZXNzYWdlIHZhbGlkYXRpb25NZXNzYWdlPXt2YWxpZGF0aW9uTWVzc2FnZX0gLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cblJhZGlvR3JvdXAuZGVmYXVsdFByb3BzID0ge1xuICBvcHRpb25zOiBbXG4gICAge1xuICAgICAgbGFiZWw6IFwiT3B0aW9uIDFcIixcbiAgICAgIHZhbHVlOiAxLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiT3B0aW9uIDJcIixcbiAgICAgIHZhbHVlOiAyLFxuICAgIH0sXG4gIF0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSYWRpb0dyb3VwO1xuIl19 */"))
  }, options.map(function (option, i) {
    return jsx(Box, {
      "data-fresco-id": "radioGroup.item",
      as: "li",
      key: i
    }, jsx(Radio, {
      name: uid,
      value: option.value
    }, option.label));
  }))), jsx(ValidationMessage, {
    validationMessage: validationMessage
  }));
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

function _EMOTION_STRINGIFIED_CSS_ERROR__$a() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var getTextSizeForControlHeight = function getTextSizeForControlHeight(height) {
  if (height <= 24) return 14;
  if (height <= 28) return 14;
  if (height <= 32) return 16;
  if (height <= 36) return 16;
  if (height <= 40) return 16;
  return 16;
};

var getIconSizeForButton = function getIconSizeForButton(height) {
  if (height <= 28) return 16;
  if (height <= 32) return 16;
  if (height <= 40) return 16;
  if (height <= 48) return 18;
  return 20;
};

var _ref2$9 = process.env.NODE_ENV === "production" ? {
  name: "bl6m15-Select",
  styles: "pointer-events:none;transform:translateY(-50%);;label:Select;"
} : {
  name: "bl6m15-Select",
  styles: "pointer-events:none;transform:translateY(-50%);;label:Select;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlbGVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnSFUiLCJmaWxlIjoiU2VsZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY3NzIGZyb20gXCJAc3R5bGVkLXN5c3RlbS9jc3NcIjtcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSBcImVtb3Rpb24tdGhlbWluZ1wiO1xuXG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiLi4vLi4vYm94XCI7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSBcIi4uLy4uL2ljb25cIjtcbmltcG9ydCB7IFZhbGlkYXRpb25NZXNzYWdlIH0gZnJvbSBcIi4uLy4uL3ZhbGlkYXRpb25NZXNzYWdlXCI7XG5cbmNvbnN0IGdldFRleHRTaXplRm9yQ29udHJvbEhlaWdodCA9IChoZWlnaHQpID0+IHtcbiAgaWYgKGhlaWdodCA8PSAyNCkgcmV0dXJuIDE0O1xuICBpZiAoaGVpZ2h0IDw9IDI4KSByZXR1cm4gMTQ7XG4gIGlmIChoZWlnaHQgPD0gMzIpIHJldHVybiAxNjtcbiAgaWYgKGhlaWdodCA8PSAzNikgcmV0dXJuIDE2O1xuICBpZiAoaGVpZ2h0IDw9IDQwKSByZXR1cm4gMTY7XG4gIHJldHVybiAxNjtcbn07XG5cbmNvbnN0IGdldEljb25TaXplRm9yQnV0dG9uID0gKGhlaWdodCkgPT4ge1xuICBpZiAoaGVpZ2h0IDw9IDI4KSByZXR1cm4gMTY7XG4gIGlmIChoZWlnaHQgPD0gMzIpIHJldHVybiAxNjtcbiAgaWYgKGhlaWdodCA8PSA0MCkgcmV0dXJuIDE2O1xuICBpZiAoaGVpZ2h0IDw9IDQ4KSByZXR1cm4gMTg7XG4gIHJldHVybiAyMDtcbn07XG5cbmNvbnN0IFNlbGVjdCA9ICh7XG4gIGNoaWxkcmVuLFxuICBoZWlnaHQsXG4gIGlkLFxuICByb3VuZCxcbiAgdmFsaWRhdGlvbk1lc3NhZ2UsXG4gIHZhbHVlLFxuICBvbkNoYW5nZSxcbiAgLi4ucmVzdFxufSkgPT4ge1xuICBjb25zdCBbaXNIb3ZlcmluZywgc2V0SXNIb3ZlcmluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFRIRU1FID0gdXNlVGhlbWUoKTtcblxuICBjb25zdCBpcyA9IGdldEljb25TaXplRm9yQnV0dG9uKGhlaWdodCk7XG4gIGNvbnN0IHRzID0gZ2V0VGV4dFNpemVGb3JDb250cm9sSGVpZ2h0KGhlaWdodCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEJveFxuICAgICAgICBkYXRhLWZyZXNjby1pZD1cInNlbGVjdFwiXG4gICAgICAgIGNsYXNzTmFtZT17aXNIb3ZlcmluZyA9PT0gdHJ1ZSA/IFwiaXNIb3ZlcmluZ1wiIDogdW5kZWZpbmVkfVxuICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgZGlzcGxheT1cImlubGluZS1mbGV4XCJcbiAgICAgICAgYm9yZGVyUmFkaXVzPXtyb3VuZCA/IFwicm91bmRcIiA6IFwiY29ybmVycy4xXCJ9XG4gICAgICAgIGNzcz17Y3NzKHtcbiAgICAgICAgICBcIiY6Zm9jdXMtd2l0aGluXCI6IHtcbiAgICAgICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCJ0aW50LmJsdWVcIixcbiAgICAgICAgICAgICAgb3V0bGluZTogMCxcbiAgICAgICAgICAgICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDAgMnB4ICR7VEhFTUUuY29sb3JzLmZpbGxbMF19YCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIiYuaXNIb3ZlcmluZ1wiOiB7XG4gICAgICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiZmlsbC4zXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgICAgIFwiJjpmb2N1cywgJjpmb2N1cy13aXRoaW5cIjoge1xuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcInRpbnQuYmx1ZVwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KX1cbiAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRJc0hvdmVyaW5nKHRydWUpfVxuICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldElzSG92ZXJpbmcoZmFsc2UpfVxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgID5cbiAgICAgICAgPEJveFxuICAgICAgICAgIGRhdGEtZnJlc2NvLWlkPVwic2VsZWN0LmNvbnRyb2xcIlxuICAgICAgICAgIGFzPVwic2VsZWN0XCJcbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICBtPXswfVxuICAgICAgICAgIHBsPXtNYXRoLnJvdW5kKGhlaWdodCAvIDQpICsgXCJweFwifVxuICAgICAgICAgIHByPXtNYXRoLnJvdW5kKGhlaWdodCAvIDEuNSkgKyBcInB4XCJ9XG4gICAgICAgICAgcHk9ezB9XG4gICAgICAgICAgYm9yZGVyV2lkdGg9ezF9XG4gICAgICAgICAgYm9yZGVyQ29sb3I9XCJmaWxsLjBcIlxuICAgICAgICAgIGJvcmRlclJhZGl1cz17cm91bmQgPyBcInJvdW5kXCIgOiBcImNvcm5lcnMuMlwifVxuICAgICAgICAgIGZvbnRTaXplPXt0c31cbiAgICAgICAgICBmb250V2VpZ2h0PXs0MDB9XG4gICAgICAgICAgbGluZUhlaWdodD17aGVpZ2h0IC0gMiArIFwicHhcIn1cbiAgICAgICAgICBjb2xvcj1cImxhYmVsLjBcIlxuICAgICAgICAgIGJnPVwiYmFja2dyb3VuZC4wXCJcbiAgICAgICAgICBib3hTaGFkb3c9XCJlbGV2YXRpb25zLjFcIlxuICAgICAgICAgIGNzcz17Y3NzKHtcbiAgICAgICAgICAgIHVzZXJTZWxlY3Q6IFwibm9uZVwiLFxuICAgICAgICAgICAgYXBwZWFyYW5jZTogXCJub25lXCIsXG4gICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgICAgICAgXCImOmZvY3VzXCI6IHtcbiAgICAgICAgICAgICAgb3V0bGluZTogMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSl9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxJY29uXG4gICAgICAgICAgZGF0YS1mcmVzY28taWQ9XCJzZWxlY3QuaWNvblwiXG4gICAgICAgICAgc3ltYm9sPVwiYXJyb3ctZG93bi1zLWZpbGxcIlxuICAgICAgICAgIHNpemU9e2lzfVxuICAgICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgICAgIHRvcD1cIjUwJVwiXG4gICAgICAgICAgcmlnaHQ9e01hdGgucm91bmQoKGhlaWdodCAvIDEuNSAtIGlzIC8gMikgLyAzKSArIFwicHhcIn1cbiAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgcG9pbnRlckV2ZW50czogXCJub25lXCIsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgtNTAlKVwiLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L0JveD5cbiAgICAgIDxWYWxpZGF0aW9uTWVzc2FnZSB2YWxpZGF0aW9uTWVzc2FnZT17dmFsaWRhdGlvbk1lc3NhZ2V9IC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5TZWxlY3QuZGVmYXVsdFByb3BzID0ge1xuICBoZWlnaHQ6IDQwLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0O1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$a
};

var Select = function Select(_ref) {
  var children = _ref.children,
      height = _ref.height,
      id = _ref.id,
      round = _ref.round,
      validationMessage = _ref.validationMessage,
      value = _ref.value,
      onChange = _ref.onChange,
      rest = _objectWithoutProperties(_ref, ["children", "height", "id", "round", "validationMessage", "value", "onChange"]);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isHovering = _useState2[0],
      setIsHovering = _useState2[1];

  var THEME = useTheme();
  var is = getIconSizeForButton(height);
  var ts = getTextSizeForControlHeight(height);
  return jsx(React__default.Fragment, null, jsx(Box, _extends({
    "data-fresco-id": "select",
    className: isHovering === true ? "isHovering" : undefined,
    position: "relative",
    display: "inline-flex",
    borderRadius: round ? "round" : "corners.1",
    css: css({
      "&:focus-within": {
        select: {
          borderColor: "tint.blue",
          outline: 0,
          boxShadow: "inset 0 0 0 2px ".concat(THEME.colors.fill[0])
        }
      },
      "&.isHovering": _defineProperty({
        select: {
          borderColor: "fill.3"
        }
      }, "select", {
        "&:focus, &:focus-within": {
          borderColor: "tint.blue"
        }
      })
    }),
    onMouseEnter: function onMouseEnter() {
      return setIsHovering(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setIsHovering(false);
    }
  }, rest), jsx(Box, {
    "data-fresco-id": "select.control",
    as: "select",
    id: id,
    width: "100%",
    height: height,
    m: 0,
    pl: Math.round(height / 4) + "px",
    pr: Math.round(height / 1.5) + "px",
    py: 0,
    borderWidth: 1,
    borderColor: "fill.0",
    borderRadius: round ? "round" : "corners.2",
    fontSize: ts,
    fontWeight: 400,
    lineHeight: height - 2 + "px",
    color: "label.0",
    bg: "background.0",
    boxShadow: "elevations.1",
    css: css({
      userSelect: "none",
      appearance: "none",
      cursor: "pointer",
      "&:focus": {
        outline: 0
      }
    }),
    value: value,
    onChange: onChange
  }, children), jsx(Icon, {
    "data-fresco-id": "select.icon",
    symbol: "arrow-down-s-fill",
    size: is,
    position: "absolute",
    top: "50%",
    right: Math.round((height / 1.5 - is / 2) / 3) + "px",
    color: "inherit",
    css: _ref2$9
  })), jsx(ValidationMessage, {
    validationMessage: validationMessage
  }));
};

Select.defaultProps = {
  height: 40
};

var StyledBox$4 = /*#__PURE__*/createStyled(Box, {
  target: "e1wb21cw0",
  label: "StyledBox"
})(system({
  spaceX: {
    property: "width",
    scale: "space"
  },
  spaceY: {
    property: "height",
    scale: "space"
  }
}), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNwYWNlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVa0IiLCJmaWxlIjoiU3BhY2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTcGFjZXJcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgeyBzeXN0ZW0gfSBmcm9tIFwic3R5bGVkLXN5c3RlbVwiO1xuXG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiLi4vLi4vYm94XCI7XG5cbmNvbnN0IFN0eWxlZEJveCA9IHN0eWxlZChCb3gpKFxuICBzeXN0ZW0oe1xuICAgIHNwYWNlWDoge1xuICAgICAgcHJvcGVydHk6IFwid2lkdGhcIixcbiAgICAgIHNjYWxlOiBcInNwYWNlXCIsXG4gICAgfSxcbiAgICBzcGFjZVk6IHtcbiAgICAgIHByb3BlcnR5OiBcImhlaWdodFwiLFxuICAgICAgc2NhbGU6IFwic3BhY2VcIixcbiAgICB9LFxuICB9KVxuKTtcblxuY29uc3QgU3BhY2VyID0gZm9yd2FyZFJlZigoeyBzcGFjZSA9IDAsIHNwYWNlWCwgc3BhY2VZLCAuLi5wcm9wcyB9LCByZWYpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkQm94XG4gICAgICBkYXRhLWZyZXNjby1pZD1cInNwYWNlclwiXG4gICAgICByZWY9e3JlZn1cbiAgICAgIHNwYWNlWD17c3BhY2VYID8gc3BhY2VYIDogc3BhY2V9XG4gICAgICBzcGFjZVk9e3NwYWNlWSA/IHNwYWNlWSA6IHNwYWNlfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgU3BhY2VyO1xuIl19 */");

var Spacer = forwardRef(function (_ref, ref) {
  var _ref$space = _ref.space,
      space = _ref$space === void 0 ? 0 : _ref$space,
      spaceX = _ref.spaceX,
      spaceY = _ref.spaceY,
      props = _objectWithoutProperties(_ref, ["space", "spaceX", "spaceY"]);

  return jsx(StyledBox$4, _extends({
    "data-fresco-id": "spacer",
    ref: ref,
    spaceX: spaceX ? spaceX : space,
    spaceY: spaceY ? spaceY : space
  }, props));
});

var index$1 = typeof document !== 'undefined' ? useLayoutEffect : useEffect;

var useLatest = function useLatest(value) {
  var ref = useRef(value);
  index$1(function () {
    ref.current = value;
  });
  return ref;
};

var updateRef = function updateRef(ref, value) {
  if (typeof ref === 'function') {
    ref(value);
    return;
  }
  ref.current = value;
};

var useComposedRef = function useComposedRef(libRef, userRef) {
  var prevUserRef = useRef();
  return useCallback(function (instance) {
    libRef.current = instance;

    if (prevUserRef.current) {
      updateRef(prevUserRef.current, null);
    }

    prevUserRef.current = userRef;

    if (!userRef) {
      return;
    }

    updateRef(userRef, instance);
  }, [userRef]);
};

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

var forceHiddenStyles = function forceHiddenStyles(node) {
  Object.keys(HIDDEN_TEXTAREA_STYLE).forEach(function (key) {
    node.style.setProperty(key, HIDDEN_TEXTAREA_STYLE[key], 'important');
  });
};

//   export type CalculatedNodeHeights = [height: number, rowHeight: number];
// https://github.com/microsoft/TypeScript/issues/28259

var hiddenTextarea = null;

var getHeight = function getHeight(node, sizingData) {
  var height = node.scrollHeight;

  if (sizingData.sizingStyle.boxSizing === 'border-box') {
    // border-box: add border, since height = content + padding + border
    return height + sizingData.borderSize;
  } // remove padding, since height = content


  return height - sizingData.paddingSize;
};

function calculateNodeHeight(sizingData, value, minRows, maxRows) {
  if (minRows === void 0) {
    minRows = 1;
  }

  if (maxRows === void 0) {
    maxRows = Infinity;
  }

  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement('textarea');
    hiddenTextarea.setAttribute('tab-index', '-1');
    hiddenTextarea.setAttribute('aria-hidden', 'true');
    forceHiddenStyles(hiddenTextarea);
  }

  if (hiddenTextarea.parentNode === null) {
    document.body.appendChild(hiddenTextarea);
  }

  var paddingSize = sizingData.paddingSize,
      borderSize = sizingData.borderSize,
      sizingStyle = sizingData.sizingStyle;
  var boxSizing = sizingStyle.boxSizing;
  Object.keys(sizingStyle).forEach(function (_key) {
    var key = _key;
    hiddenTextarea.style[key] = sizingStyle[key];
  });
  forceHiddenStyles(hiddenTextarea);
  hiddenTextarea.value = value;
  var height = getHeight(hiddenTextarea, sizingData); // measure height of a textarea with a single row

  hiddenTextarea.value = 'x';
  var rowHeight = hiddenTextarea.scrollHeight - paddingSize;
  var minHeight = rowHeight * minRows;

  if (boxSizing === 'border-box') {
    minHeight = minHeight + paddingSize + borderSize;
  }

  height = Math.max(minHeight, height);
  var maxHeight = rowHeight * maxRows;

  if (boxSizing === 'border-box') {
    maxHeight = maxHeight + paddingSize + borderSize;
  }

  height = Math.min(maxHeight, height);
  return [height, rowHeight];
}

var noop$1 = function noop() {};
var pick = function pick(props, obj) {
  return props.reduce(function (acc, prop) {
    acc[prop] = obj[prop];
    return acc;
  }, {});
};

var SIZING_STYLE = ['borderBottomWidth', 'borderLeftWidth', 'borderRightWidth', 'borderTopWidth', 'boxSizing', 'fontFamily', 'fontSize', 'fontStyle', 'fontWeight', 'letterSpacing', 'lineHeight', 'paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop', // non-standard
'tabSize', 'textIndent', // non-standard
'textRendering', 'textTransform', 'width'];
var isIE = typeof document !== 'undefined' ? !!document.documentElement.currentStyle : false;

var getSizingData = function getSizingData(node) {
  var style = window.getComputedStyle(node);

  if (style === null) {
    return null;
  }

  var sizingStyle = pick(SIZING_STYLE, style);
  var boxSizing = sizingStyle.boxSizing; // probably node is detached from DOM, can't read computed dimensions

  if (boxSizing === '') {
    return null;
  } // IE (Edge has already correct behaviour) returns content width as computed width
  // so we need to add manually padding and border widths


  if (isIE && boxSizing === 'border-box') {
    sizingStyle.width = parseFloat(sizingStyle.width) + parseFloat(sizingStyle.borderRightWidth) + parseFloat(sizingStyle.borderLeftWidth) + parseFloat(sizingStyle.paddingRight) + parseFloat(sizingStyle.paddingLeft) + 'px';
  }

  var paddingSize = parseFloat(sizingStyle.paddingBottom) + parseFloat(sizingStyle.paddingTop);
  var borderSize = parseFloat(sizingStyle.borderBottomWidth) + parseFloat(sizingStyle.borderTopWidth);
  return {
    sizingStyle: sizingStyle,
    paddingSize: paddingSize,
    borderSize: borderSize
  };
};

var useWindowResizeListener = function useWindowResizeListener(listener) {
  var latestListener = useLatest(listener);
  useEffect(function () {
    var handler = function handler(event) {
      latestListener.current(event);
    };

    window.addEventListener('resize', handler);
    return function () {
      window.removeEventListener('resize', handler);
    };
  }, []);
};

var TextareaAutosize = function TextareaAutosize(_ref, userRef) {
  var cacheMeasurements = _ref.cacheMeasurements,
      maxRows = _ref.maxRows,
      minRows = _ref.minRows,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? noop$1 : _ref$onChange,
      _ref$onHeightChange = _ref.onHeightChange,
      onHeightChange = _ref$onHeightChange === void 0 ? noop$1 : _ref$onHeightChange,
      props = _objectWithoutPropertiesLoose$2(_ref, ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"]);

  if (process.env.NODE_ENV !== 'production' && props.style) {
    if ('maxHeight' in props.style) {
      throw new Error('Using `style.maxHeight` for <TextareaAutosize/> is not supported. Please use `maxRows`.');
    }

    if ('minHeight' in props.style) {
      throw new Error('Using `style.minHeight` for <TextareaAutosize/> is not supported. Please use `minRows`.');
    }
  }

  var isControlled = props.value !== undefined;
  var libRef = useRef(null);
  var ref = useComposedRef(libRef, userRef);
  var heightRef = useRef(0);
  var measurementsCacheRef = useRef();

  var resizeTextarea = function resizeTextarea() {
    var node = libRef.current;
    var nodeSizingData = cacheMeasurements && measurementsCacheRef.current ? measurementsCacheRef.current : getSizingData(node);

    if (!nodeSizingData) {
      return;
    }

    measurementsCacheRef.current = nodeSizingData;

    var _calculateNodeHeight = calculateNodeHeight(nodeSizingData, node.value || node.placeholder || 'x', minRows, maxRows),
        height = _calculateNodeHeight[0],
        rowHeight = _calculateNodeHeight[1];

    if (heightRef.current !== height) {
      heightRef.current = height;
      node.style.setProperty('height', height + "px", 'important');
      onHeightChange(height, {
        rowHeight: rowHeight
      });
    }
  };

  var handleChange = function handleChange(event) {
    if (!isControlled) {
      resizeTextarea();
    }

    onChange(event);
  };

  if (typeof document !== 'undefined') {
    useLayoutEffect(resizeTextarea);
  }

  useWindowResizeListener(resizeTextarea);
  return (/*#__PURE__*/createElement("textarea", _extends$2({}, props, {
      onChange: handleChange,
      ref: ref
    }))
  );
};

var index$2 = /* #__PURE__ */forwardRef(TextareaAutosize);

function Textarea(_ref) {
  var id = _ref.id,
      type = _ref.type,
      maxRows = _ref.maxRows,
      minRows = _ref.minRows,
      placeholder = _ref.placeholder,
      validationMessage = _ref.validationMessage,
      rest = _objectWithoutProperties(_ref, ["id", "type", "maxRows", "minRows", "placeholder", "validationMessage"]);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isHovering = _useState2[0],
      setIsHovering = _useState2[1];

  var THEME = useTheme();
  return jsx(React__default.Fragment, null, jsx(index$2, _extends({
    "data-fresco-id": "textarea",
    className: isHovering === true ? "isHovering" : undefined,
    maxRows: maxRows,
    minRows: minRows,
    id: id,
    placeholder: placeholder,
    css: css({
      width: "100%",
      minHeight: 40 + "px",
      px: "spacing.4",
      py: "9px",
      borderWidth: 1,
      borderColor: "fill.0",
      borderRadius: "corners.2",
      overflow: "hidden",
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 24 + "px",
      color: "label.0",
      bg: "background.0",
      transition: "border-color 200ms ease-out, background-color 200ms ease-out, color 200ms ease-out",
      "&:focus": {
        borderColor: "tint.blue",
        outline: 0,
        boxShadow: "inset 0 0 0 2px ".concat(THEME.colors.fill[0])
      },
      "&.isHovering": {
        borderColor: "fill.3",
        "&:focus": {
          borderColor: "tint.blue"
        }
      },
      "::placeholder": {
        color: "placeholderText",
        opacity: 1
      }
    }),
    onMouseEnter: function onMouseEnter() {
      return setIsHovering(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setIsHovering(false);
    }
  }, rest)), jsx(ValidationMessage, {
    validationMessage: validationMessage
  }));
}

function TextInput(_ref) {
  var id = _ref.id,
      type = _ref.type,
      placeholder = _ref.placeholder,
      validationMessage = _ref.validationMessage,
      rest = _objectWithoutProperties(_ref, ["id", "type", "placeholder", "validationMessage"]);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isHovering = _useState2[0],
      setIsHovering = _useState2[1];

  var THEME = useTheme();
  return jsx(React__default.Fragment, null, jsx(Box, _extends({
    "data-fresco-id": "textInput",
    className: isHovering === true ? "isHovering" : undefined,
    as: "input",
    id: id,
    type: type,
    placeholder: placeholder,
    width: "100%",
    height: 40,
    px: "spacing.4",
    py: 0,
    borderWidth: 1,
    borderColor: "fill.0",
    borderRadius: "corners.2",
    overflow: "hidden",
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 20 + "px",
    color: "label.0",
    bg: "background.0",
    css: css({
      transition: "border-color 200ms ease-out, background-color 200ms ease-out, color 200ms ease-out",
      "&:focus": {
        borderColor: "tint.blue",
        outline: 0,
        boxShadow: "inset 0 0 0 2px ".concat(THEME.colors.fill[0])
      },
      "&.isHovering": {
        borderColor: "fill.3",
        "&:focus": {
          borderColor: "tint.blue"
        }
      },
      "::placeholder": {
        color: "placeholderText",
        opacity: 1
      }
    }),
    onMouseEnter: function onMouseEnter() {
      return setIsHovering(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setIsHovering(false);
    }
  }, rest)), jsx(ValidationMessage, {
    validationMessage: validationMessage
  }));
}

var TextLink = forwardRef(function (_ref, ref) {
  var props = Object.assign({}, _ref);
  return jsx(Box, _extends({
    "data-fresco-id": "textLink",
    ref: ref,
    as: "span",
    color: "link"
  }, props));
});

function _EMOTION_STRINGIFIED_CSS_ERROR__$b() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref2$a = process.env.NODE_ENV === "production" ? {
  name: "1w5g35d-Toggle",
  styles: "user-select:none;cursor:pointer;;label:Toggle;"
} : {
  name: "1w5g35d-Toggle",
  styles: "user-select:none;cursor:pointer;;label:Toggle;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRvZ2dsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRE0iLCJmaWxlIjoiVG9nZ2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNzcyBmcm9tIFwiQHN0eWxlZC1zeXN0ZW0vY3NzXCI7XG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gXCJlbW90aW9uLXRoZW1pbmdcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5cbmltcG9ydCB7IEJveCB9IGZyb20gXCIuLi8uLi9ib3hcIjtcbmltcG9ydCB7IFRleHQgfSBmcm9tIFwiLi4vLi4vdHlwb2dyYXBoeVwiO1xuXG5jb25zdCBUb2dnbGUgPSAoeyBjaGlsZHJlbiwgc2l6ZSwgd2lkdGgsIHNtYWxsLCAuLi5yZXN0IH0pID0+IHtcbiAgY29uc3QgVUlEID0gdXVpZHY0KCk7XG5cbiAgY29uc3QgVEhFTUUgPSB1c2VUaGVtZSgpO1xuXG4gIGNvbnN0IGdldFRleHRPZmZzZXRGb3JUZXh0U2l6ZSA9IChzaXplKSA9PiB7XG4gICAgaWYgKHNpemUgPD0gMzAwKSByZXR1cm4gODtcbiAgICBpZiAoc2l6ZSA8PSA0MDApIHJldHVybiA3O1xuICAgIGlmIChzaXplIDw9IDUwMCkgcmV0dXJuIDY7XG4gICAgcmV0dXJuIDI7XG4gIH07XG4gIGxldCBURVhUX09GRlNFVCA9IGdldFRleHRPZmZzZXRGb3JUZXh0U2l6ZShzaXplKSArIFwicHhcIjtcblxuICBjb25zdCBnZXRDb250cm9sT2Zmc2V0Rm9yVGV4dFNpemUgPSAoc2l6ZSkgPT4ge1xuICAgIGlmIChzaXplIDw9IDMwMCkgcmV0dXJuIDA7XG4gICAgaWYgKHNpemUgPD0gNDAwKSByZXR1cm4gMDtcbiAgICBpZiAoc2l6ZSA8PSA1MDApIHJldHVybiAwO1xuICAgIGlmIChzaXplIDw9IDYwMCkgcmV0dXJuIDI7XG4gICAgcmV0dXJuIDI7XG4gIH07XG4gIGxldCBDT05UUk9MX09GRlNFVCA9IGdldENvbnRyb2xPZmZzZXRGb3JUZXh0U2l6ZShzaXplKSArIFwicHhcIjtcblxuICBsZXQgQ09OVFJPTF9XSURUSCA9IDQwO1xuICBsZXQgQ09OVFJPTF9IRUlHSFQgPSAyNDtcblxuICBpZiAoc21hbGwpIHtcbiAgICBDT05UUk9MX1dJRFRIID0gMzI7XG4gICAgQ09OVFJPTF9IRUlHSFQgPSAyMDtcbiAgICBURVhUX09GRlNFVCA9IDUgKyBcInB4XCI7XG4gIH0gZWxzZSB7XG4gICAgQ09OVFJPTF9PRkZTRVQgPSAwO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBkYXRhLWZyZXNjby1pZD1cInRvZ2dsZVwiXG4gICAgICBhcz1cImxhYmVsXCJcbiAgICAgIGh0bWxGb3I9e1VJRH1cbiAgICAgIGRpc3BsYXk9XCJpbmxpbmUtZmxleFwiXG4gICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgY3NzPXt7IHVzZXJTZWxlY3Q6IFwibm9uZVwiLCBjdXJzb3I6IFwicG9pbnRlclwiIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVuICYmIChcbiAgICAgICAgPEJveCBkYXRhLWZyZXNjby1pZD1cInRvZ2dsZS5sYWJlbFwiIGZsZXg9ezF9IHB0PXtURVhUX09GRlNFVH0+XG4gICAgICAgICAgPFRleHQgc2l6ZT17c2l6ZX0+e2NoaWxkcmVufTwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICApfVxuICAgICAgPEJveFxuICAgICAgICBkYXRhLWZyZXNjby1pZD1cInRvZ2dsZS5jb250cm9sXCJcbiAgICAgICAgYXM9XCJpbnB1dFwiXG4gICAgICAgIGlkPXtVSUR9XG4gICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgICAgICBkaXNwbGF5PVwiaW5saW5lLWJsb2NrXCJcbiAgICAgICAgd2lkdGg9e0NPTlRST0xfV0lEVEh9XG4gICAgICAgIGhlaWdodD17Q09OVFJPTF9IRUlHSFR9XG4gICAgICAgIG09ezB9XG4gICAgICAgIG10PXtDT05UUk9MX09GRlNFVH1cbiAgICAgICAgbWw9e2NoaWxkcmVuICYmIFwic3BhY2luZy4zXCJ9XG4gICAgICAgIGJvcmRlcj17MH1cbiAgICAgICAgYm9yZGVyUmFkaXVzPXs5OTk5fVxuICAgICAgICBiZz1cImZpbGwuMFwiXG4gICAgICAgIGJveFNoYWRvdz1cIjAgNnB4IDE2cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSlcIlxuICAgICAgICBjc3M9e2Nzcyh7XG4gICAgICAgICAgV2Via2l0QXBwZWFyYW5jZTogXCJub25lXCIsXG4gICAgICAgICAgTW96QXBwZWFyYW5jZTogXCJub25lXCIsXG4gICAgICAgICAgYXBwZWFyYW5jZTogXCJub25lXCIsXG4gICAgICAgICAgV2Via2l0VGFwSGlnaGxpZ2h0Q29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgICAgIHRyYW5zaXRpb246IFwiYWxsIC4ycyBlYXNlXCIsXG4gICAgICAgICAgXCI6OmFmdGVyXCI6IHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiJydcIixcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICB0b3A6IFwiMnB4XCIsXG4gICAgICAgICAgICBsZWZ0OiBcIjJweFwiLFxuICAgICAgICAgICAgd2lkdGg6IENPTlRST0xfSEVJR0hUIC0gNCArIFwicHhcIixcbiAgICAgICAgICAgIGhlaWdodDogQ09OVFJPTF9IRUlHSFQgLSA0ICsgXCJweFwiLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICAgICAgICAgICAgYmc6IFwiYmFja2dyb3VuZC4wXCIsXG4gICAgICAgICAgICBib3hTaGFkb3c6IFwiMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKVwiLFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJhbGwgMjAwbXMgY3ViaWMtYmV6aWVyKC41LC4xLC43NSwxLjM1KVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCImOmNoZWNrZWRcIjoge1xuICAgICAgICAgICAgYmc6IFwidGludC5ncmVlblwiLFxuICAgICAgICAgICAgXCI6OmFmdGVyXCI6IHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOlxuICAgICAgICAgICAgICAgIFwidHJhbnNsYXRlWChcIiArIChDT05UUk9MX1dJRFRIIC0gQ09OVFJPTF9IRUlHSFQpICsgXCJweClcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIiY6Zm9jdXNcIjoge1xuICAgICAgICAgICAgb3V0bGluZTogMCxcbiAgICAgICAgICAgIGJveFNoYWRvdzogYCR7VEhFTUUuY29sb3JzLmZpbGxbMV19IDBweCAwcHggMHB4IDNweGAsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSl9XG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgLz5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cblRvZ2dsZS5kZWZhdWx0UHJvcHMgPSB7XG4gIHNpemU6IDQwMCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZ2dsZTtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$b
};

var Toggle = function Toggle(_ref) {
  var children = _ref.children,
      size = _ref.size,
      width = _ref.width,
      small = _ref.small,
      rest = _objectWithoutProperties(_ref, ["children", "size", "width", "small"]);

  var UID = v4();
  var THEME = useTheme();

  var getTextOffsetForTextSize = function getTextOffsetForTextSize(size) {
    if (size <= 300) return 8;
    if (size <= 400) return 7;
    if (size <= 500) return 6;
    return 2;
  };

  var TEXT_OFFSET = getTextOffsetForTextSize(size) + "px";

  var getControlOffsetForTextSize = function getControlOffsetForTextSize(size) {
    if (size <= 300) return 0;
    if (size <= 400) return 0;
    if (size <= 500) return 0;
    if (size <= 600) return 2;
    return 2;
  };

  var CONTROL_OFFSET = getControlOffsetForTextSize(size) + "px";
  var CONTROL_WIDTH = 40;
  var CONTROL_HEIGHT = 24;

  if (small) {
    CONTROL_WIDTH = 32;
    CONTROL_HEIGHT = 20;
    TEXT_OFFSET = 5 + "px";
  } else {
    CONTROL_OFFSET = 0;
  }

  return jsx(Box, {
    "data-fresco-id": "toggle",
    as: "label",
    htmlFor: UID,
    display: "inline-flex",
    justifyContent: "space-between",
    width: width,
    css: _ref2$a
  }, children && jsx(Box, {
    "data-fresco-id": "toggle.label",
    flex: 1,
    pt: TEXT_OFFSET
  }, jsx(Text, {
    size: size
  }, children)), jsx(Box, _extends({
    "data-fresco-id": "toggle.control",
    as: "input",
    id: UID,
    type: "checkbox",
    position: "relative",
    display: "inline-block",
    width: CONTROL_WIDTH,
    height: CONTROL_HEIGHT,
    m: 0,
    mt: CONTROL_OFFSET,
    ml: children && "spacing.3",
    border: 0,
    borderRadius: 9999,
    bg: "fill.0",
    boxShadow: "0 6px 16px -3px rgba(0, 0, 0, 0.1)",
    css: css({
      WebkitAppearance: "none",
      MozAppearance: "none",
      appearance: "none",
      WebkitTapHighlightColor: "transparent",
      cursor: "pointer",
      transition: "all .2s ease",
      "::after": {
        content: "''",
        position: "absolute",
        top: "2px",
        left: "2px",
        width: CONTROL_HEIGHT - 4 + "px",
        height: CONTROL_HEIGHT - 4 + "px",
        borderRadius: "50%",
        bg: "background.0",
        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
        transition: "all 200ms cubic-bezier(.5,.1,.75,1.35)"
      },
      "&:checked": {
        bg: "tint.green",
        "::after": {
          transform: "translateX(" + (CONTROL_WIDTH - CONTROL_HEIGHT) + "px)"
        }
      },
      "&:focus": {
        outline: 0,
        boxShadow: "".concat(THEME.colors.fill[1], " 0px 0px 0px 3px")
      }
    })
  }, rest)));
};

Toggle.defaultProps = {
  size: 400
};

/*
 * Welcome to @reach/auto-id!

 * Let's see if we can make sense of why this hook exists and its
 * implementation.
 *
 * Some background:
 *   1. Accessibiliy APIs rely heavily on element IDs
 *   2. Requiring developers to put IDs on every element in Reach UI is both
 *      cumbersome and error-prone
 *   3. With a component model, we can generate IDs for them!
 *
 * Solution 1: Generate random IDs.
 *
 * This works great as long as you don't server render your app. When React (in
 * the client) tries to reuse the markup from the server, the IDs won't match
 * and React will then recreate the entire DOM tree.
 *
 * Solution 2: Increment an integer
 *
 * This sounds great. Since we're rendering the exact same tree on the server
 * and client, we can increment a counter and get a deterministic result between
 * client and server. Also, JS integers can go up to nine-quadrillion. I'm
 * pretty sure the tab will be closed before an app never needs
 * 10 quadrillion IDs!
 *
 * Problem solved, right?
 *
 * Ah, but there's a catch! React's concurrent rendering makes this approach
 * non-deterministic. While the client and server will end up with the same
 * elements in the end, depending on suspense boundaries (and possibly some user
 * input during the initial render) the incrementing integers won't always match
 * up.
 *
 * Solution 3: Don't use IDs at all on the server; patch after first render.
 *
 * What we've done here is solution 2 with some tricks. With this approach, the
 * ID returned is an empty string on the first render. This way the server and
 * client have the same markup no matter how wild the concurrent rendering may
 * have gotten.
 *
 * After the render, we patch up the components with an incremented ID. This
 * causes a double render on any components with `useId`. Shouldn't be a problem
 * since the components using this hook should be small, and we're only updating
 * the ID attribute on the DOM, nothing big is happening.
 *
 * It doesn't have to be an incremented number, though--we could do generate
 * random strings instead, but incrementing a number is probably the cheapest
 * thing we can do.
 *
 * Additionally, we only do this patchup on the very first client render ever.
 * Any calls to `useId` that happen dynamically in the client will be
 * populated immediately with a value. So, we only get the double render after
 * server hydration and never again, SO BACK OFF ALRIGHT?
 */
var serverHandoffComplete = false;
var id = 0;

var genId = function genId() {
  return ++id;
};
/**
 * useId
 *
 * Autogenerate IDs to facilitate WAI-ARIA and server rendering.
 *
 * Note: The returned ID will initially be `null` and will update after a
 * component mounts. Users may need to supply their own ID if they need
 * consistent values for SSR.
 *
 * @see Docs https://reacttraining.com/reach-ui/auto-id
 */


var useId = function useId(idFromProps) {
  /*
   * If this instance isn't part of the initial render, we don't have to do the
   * double render/patch-up dance. We can just generate the ID and return it.
   */
  var initialId = idFromProps || (serverHandoffComplete ? genId() : null);

  var _useState = useState(initialId),
      id = _useState[0],
      setId = _useState[1];

  useIsomorphicLayoutEffect(function () {
    if (id === null) {
      /*
       * Patch the ID after render. We do this in `useLayoutEffect` to avoid any
       * rendering flicker, though it'll make the first render slower (unlikely
       * to matter, but you're welcome to measure your app and let us know if
       * it's a problem).
       */
      setId(genId());
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
  useEffect(function () {
    if (serverHandoffComplete === false) {
      /*
       * Flag all future uses of `useId` to skip the update dance. This is in
       * `useEffect` because it goes after `useLayoutEffect`, ensuring we don't
       * accidentally bail out of the patch-up dance prematurely.
       */
      serverHandoffComplete = true;
    }
  }, []);
  return id != null ? String(id) : undefined;
};

var props$1 = ["bottom", "height", "left", "right", "top", "width"];

var rectChanged = function rectChanged(a, b) {
  if (a === void 0) {
    a = {};
  }

  if (b === void 0) {
    b = {};
  }

  return props$1.some(function (prop) {
    return a[prop] !== b[prop];
  });
};

var observedNodes = /*#__PURE__*/new Map();
var rafId;

var run = function run() {
  var changedStates = [];
  observedNodes.forEach(function (state, node) {
    var newRect = node.getBoundingClientRect();

    if (rectChanged(newRect, state.rect)) {
      state.rect = newRect;
      changedStates.push(state);
    }
  });
  changedStates.forEach(function (state) {
    state.callbacks.forEach(function (cb) {
      return cb(state.rect);
    });
  });
  rafId = window.requestAnimationFrame(run);
};

function observeRect(node, cb) {
  return {
    observe: function observe() {
      var wasEmpty = observedNodes.size === 0;

      if (observedNodes.has(node)) {
        observedNodes.get(node).callbacks.push(cb);
      } else {
        observedNodes.set(node, {
          rect: undefined,
          hasRectChanged: false,
          callbacks: [cb]
        });
      }

      if (wasEmpty) run();
    },
    unobserve: function unobserve() {
      var state = observedNodes.get(node);

      if (state) {
        // Remove the callback
        var index = state.callbacks.indexOf(cb);
        if (index >= 0) state.callbacks.splice(index, 1); // Remove the node reference

        if (!state.callbacks.length) observedNodes["delete"](node); // Stop the loop

        if (!observedNodes.size) cancelAnimationFrame(rafId);
      }
    }
  };
}

/**
 * Welcome to @reach/rect!
 *
 * Measures DOM elements (aka. bounding client rect).
 *
 * @see getBoundingClientRect https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
 * @see Docs                  https://reacttraining.com/reach-ui/rect
 * @see Source                https://github.com/reach/reach-ui/tree/main/packages/rect
 */

/**
 * Rect
 *
 * @param props
 */

var Rect = function Rect(_ref) {
  var onChange = _ref.onChange,
      _ref$observe = _ref.observe,
      observe = _ref$observe === void 0 ? true : _ref$observe,
      children = _ref.children;
  var ref = useRef(null);
  var rect = useRect(ref, observe, onChange);
  return children({
    ref: ref,
    rect: rect
  });
};

if (process.env.NODE_ENV !== "production") {
  Rect.displayName = "Rect";
  Rect.propTypes = {
    children: propTypes.func.isRequired,
    observe: propTypes.bool,
    onChange: propTypes.func
  };
} ////////////////////////////////////////////////////////////////////////////////

/**
 * useRect
 *
 * @param nodeRef
 * @param observe
 * @param onChange
 */


function useRect(nodeRef, observe, onChange) {
  if (observe === void 0) {
    observe = true;
  }

  var _useState = useState(nodeRef.current),
      element = _useState[0],
      setElement = _useState[1];

  var initialRectIsSet = useRef(false);
  var initialRefIsSet = useRef(false);

  var _useState2 = useState(null),
      rect = _useState2[0],
      setRect = _useState2[1];

  var onChangeRef = useRef();
  useIsomorphicLayoutEffect(function () {
    onChangeRef.current = onChange;

    if (nodeRef.current !== element) {
      setElement(nodeRef.current);
    }
  });
  useIsomorphicLayoutEffect(function () {
    if (element && !initialRectIsSet.current) {
      initialRectIsSet.current = true;
      setRect(element.getBoundingClientRect());
    }
  }, [element]);
  useIsomorphicLayoutEffect(function () {
    var observer;
    var elem = element; // State initializes before refs are placed, meaning the element state will
    // be undefined on the first render. We still want the rect on the first
    // render, so initially we'll use the nodeRef that was passed instead of
    // state for our measurements.

    if (!initialRefIsSet.current) {
      initialRefIsSet.current = true;
      elem = nodeRef.current;
    }

    if (!elem) {
      if (process.env.NODE_ENV !== "production") {
        console.warn("You need to place the ref");
      }

      return cleanup;
    }

    observer = observeRect(elem, function (rect) {
      onChangeRef.current && onChangeRef.current(rect);
      setRect(rect);
    });
    observe && observer.observe();
    return cleanup;

    function cleanup() {
      observer && observer.unobserve();
    }
  }, [observe, element]);
  return rect;
}

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

function _objectWithoutPropertiesLoose$4(source, excluded) {
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

var _on, _on2, _on3, _on4, _on5, _states;
var MOUSE_REST_TIMEOUT = 100;
var LEAVE_TIMEOUT = 500; ////////////////////////////////////////////////////////////////////////////////
// States
// Nothing goin' on

var IDLE = "IDLE"; // We're considering showing the tooltip, but we're gonna wait a sec

var FOCUSED = "FOCUSED"; // It's on!

var VISIBLE = "VISIBLE"; // Focus has left, but we want to keep it visible for a sec

var LEAVING_VISIBLE = "LEAVING_VISIBLE"; // The user clicked the tool, so we want to hide the thing, we can't just use
// IDLE because we need to ignore mousemove, etc.

var DISMISSED = "DISMISSED"; ////////////////////////////////////////////////////////////////////////////////
// Events

var BLUR = "BLUR";
var FOCUS = "FOCUS";
var GLOBAL_MOUSE_MOVE = "GLOBAL_MOUSE_MOVE";
var MOUSE_DOWN = "MOUSE_DOWN";
var MOUSE_ENTER = "MOUSE_ENTER";
var MOUSE_LEAVE = "MOUSE_LEAVE";
var MOUSE_MOVE = "MOUSE_MOVE";
var REST = "REST";
var SELECT_WITH_KEYBOARD = "SELECT_WITH_KEYBOARD";
var TIME_COMPLETE = "TIME_COMPLETE";
var chart = {
  initial: IDLE,
  states: (_states = {}, _states[IDLE] = {
    enter: clearContextId,
    on: (_on = {}, _on[MOUSE_ENTER] = FOCUSED, _on[FOCUS] = VISIBLE, _on)
  }, _states[FOCUSED] = {
    enter: startRestTimer,
    leave: clearRestTimer,
    on: (_on2 = {}, _on2[MOUSE_MOVE] = FOCUSED, _on2[MOUSE_LEAVE] = IDLE, _on2[MOUSE_DOWN] = DISMISSED, _on2[BLUR] = IDLE, _on2[REST] = VISIBLE, _on2)
  }, _states[VISIBLE] = {
    on: (_on3 = {}, _on3[FOCUS] = FOCUSED, _on3[MOUSE_ENTER] = FOCUSED, _on3[MOUSE_LEAVE] = LEAVING_VISIBLE, _on3[BLUR] = LEAVING_VISIBLE, _on3[MOUSE_DOWN] = DISMISSED, _on3[SELECT_WITH_KEYBOARD] = DISMISSED, _on3[GLOBAL_MOUSE_MOVE] = LEAVING_VISIBLE, _on3)
  }, _states[LEAVING_VISIBLE] = {
    enter: startLeavingVisibleTimer,
    leave: function leave() {
      clearLeavingVisibleTimer();
      clearContextId();
    },
    on: (_on4 = {}, _on4[MOUSE_ENTER] = VISIBLE, _on4[FOCUS] = VISIBLE, _on4[TIME_COMPLETE] = IDLE, _on4)
  }, _states[DISMISSED] = {
    leave: function leave() {
      // allows us to come on back later w/o entering something else first
      context.id = null;
    },
    on: (_on5 = {}, _on5[MOUSE_LEAVE] = IDLE, _on5[BLUR] = IDLE, _on5)
  }, _states)
};
/*
 * Chart context allows us to persist some data around, in Tooltip all we use
 * is the id of the current tooltip being interacted with.
 */

var context = {
  id: null
};
var state = chart.initial; ////////////////////////////////////////////////////////////////////////////////
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
  window.clearTimeout(restTimeout);
  restTimeout = window.setTimeout(function () {
    return transition(REST);
  }, MOUSE_REST_TIMEOUT);
}

function clearRestTimer() {
  window.clearTimeout(restTimeout);
} // Manages the delay to hide the tooltip after rest leaves.


var leavingVisibleTimer;

function startLeavingVisibleTimer() {
  window.clearTimeout(leavingVisibleTimer);
  leavingVisibleTimer = window.setTimeout(function () {
    return transition(TIME_COMPLETE);
  }, LEAVE_TIMEOUT);
}

function clearLeavingVisibleTimer() {
  window.clearTimeout(leavingVisibleTimer);
} // allows us to come on back later w/o entering something else first after the
// user leaves or dismisses


function clearContextId() {
  context.id = null;
} ////////////////////////////////////////////////////////////////////////////////

/**
 * useTooltip
 *
 * @param params
 */


function useTooltip(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      idProp = _ref.id,
      onMouseEnter = _ref.onMouseEnter,
      onMouseMove = _ref.onMouseMove,
      onMouseLeave = _ref.onMouseLeave,
      onFocus = _ref.onFocus,
      onBlur = _ref.onBlur,
      onKeyDown = _ref.onKeyDown,
      onMouseDown = _ref.onMouseDown,
      forwardedRef = _ref.ref,
      DEBUG_STYLE = _ref.DEBUG_STYLE;

  var id = String(useId(idProp));

  var _useState = useState(DEBUG_STYLE ? true : id === null ? false : context.id === id && state === VISIBLE),
      isVisible = _useState[0],
      setIsVisible = _useState[1]; // hopefully they always pass a ref if they ever pass one


  var ownRef = useRef(null);
  var ref = useForkedRef(forwardedRef, ownRef); // TODO: Fix in utils

  var triggerRect = useRect(ownRef, isVisible);
  useEffect(function () {
    return subscribe(function () {
      if (context.id === id && (state === VISIBLE || state === LEAVING_VISIBLE)) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, [id]);
  useEffect(function () {
    return checkStyles("tooltip");
  }, []);
  useEffect(function () {
    var ownerDocument = getOwnerDocument(ownRef.current) || document;

    function listener(event) {
      if ((event.key === "Escape" || event.key === "Esc") && state === VISIBLE) {
        transition(SELECT_WITH_KEYBOARD);
      }
    }

    ownerDocument.addEventListener("keydown", listener);
    return function () {
      return ownerDocument.removeEventListener("keydown", listener);
    };
  }, []);

  function handleMouseEnter() {
    transition(MOUSE_ENTER, {
      id: id
    });
  }

  function handleMouseMove() {
    transition(MOUSE_MOVE, {
      id: id
    });
  }

  function handleFocus() {
    // @ts-ignore
    if (window.__REACH_DISABLE_TOOLTIPS) {
      return;
    }

    transition(FOCUS, {
      id: id
    });
  }

  function handleMouseLeave() {
    transition(MOUSE_LEAVE);
  }

  function handleBlur() {
    // Allow quick click from one tool to another
    if (context.id !== id) return;
    transition(BLUR);
  }

  function handleMouseDown() {
    // Allow quick click from one tool to another
    if (context.id !== id) return;
    transition(MOUSE_DOWN);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      transition(SELECT_WITH_KEYBOARD);
    }
  }

  var trigger = {
    // The element that triggers the tooltip references the tooltip element with
    // `aria-describedby`.
    // https://www.w3.org/TR/wai-aria-practices-1.2/#tooltip
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

/**
 * Tooltip
 *
 * @see Docs https://reacttraining.com/reach-ui/tooltip#tooltip
 */

var Tooltip = /*#__PURE__*/forwardRefWithAs(function (_ref2, forwardedRef) {
  var children = _ref2.children,
      label = _ref2.label,
      DEPRECATED_ariaLabel = _ref2.ariaLabel,
      id = _ref2.id,
      DEBUG_STYLE = _ref2.DEBUG_STYLE,
      props = _objectWithoutPropertiesLoose$4(_ref2, ["children", "label", "ariaLabel", "id", "DEBUG_STYLE"]);

  var child = Children.only(children);
  process.env.NODE_ENV !== "production" ? warning_1(!DEPRECATED_ariaLabel, "The `ariaLabel prop is deprecated and will be removed from @reach/tooltip in a future version. Please use `aria-label` instead.") : void 0; // We need to pass some properties from the child into useTooltip
  // to make sure users can maintain control over the trigger's ref and events

  var _useTooltip = useTooltip({
    id: id,
    onMouseEnter: child.props.onMouseEnter,
    onMouseMove: child.props.onMouseMove,
    onMouseLeave: child.props.onMouseLeave,
    onFocus: child.props.onFocus,
    onBlur: child.props.onBlur,
    onKeyDown: child.props.onKeyDown,
    onMouseDown: child.props.onMouseDown,
    ref: child.ref,
    DEBUG_STYLE: DEBUG_STYLE
  }),
      trigger = _useTooltip[0],
      tooltip = _useTooltip[1];

  return React__default.createElement(Fragment$1, null, cloneElement(child, trigger), React__default.createElement(TooltipPopup, Object.assign({
    ref: forwardedRef,
    label: label,
    "aria-label": DEPRECATED_ariaLabel
  }, tooltip, props)));
});

if (process.env.NODE_ENV !== "production") {
  Tooltip.displayName = "Tooltip";
  Tooltip.propTypes = {
    children: propTypes.node.isRequired,
    label: propTypes.node.isRequired,
    ariaLabel: propTypes.string
  };
}

/**
 * TooltipPopup
 *
 * @see Docs https://reacttraining.com/reach-ui/tooltip#tooltippopup
 */

var TooltipPopup = /*#__PURE__*/forwardRefWithAs(function TooltipPopup(_ref3, forwardRef) {
  var label = _ref3.label,
      DEPRECATED_ariaLabel = _ref3.ariaLabel,
      isVisible = _ref3.isVisible,
      id = _ref3.id,
      props = _objectWithoutPropertiesLoose$4(_ref3, ["label", "ariaLabel", "isVisible", "id"]);

  return isVisible ? React__default.createElement(Portal$1, null, React__default.createElement(TooltipContent, Object.assign({
    ref: forwardRef,
    label: label,
    "aria-label": DEPRECATED_ariaLabel,
    isVisible: isVisible
  }, props, {
    id: makeId("tooltip", String(id))
  }))) : null;
});

if (process.env.NODE_ENV !== "production") {
  TooltipPopup.displayName = "TooltipPopup";
  TooltipPopup.propTypes = {
    label: propTypes.node.isRequired,
    ariaLabel: propTypes.string,
    position: propTypes.func
  };
}
/**
 * TooltipContent
 *
 * We need a separate component so that useRect works inside the portal.
 *
 * @see Docs https://reacttraining.com/reach-ui/tooltip#tooltipcontent
 */


var TooltipContent = /*#__PURE__*/forwardRefWithAs(function TooltipContent(_ref4, forwardedRef) {
  var ariaLabel = _ref4.ariaLabel,
      realAriaLabel = _ref4["aria-label"],
      _ref4$as = _ref4.as,
      Comp = _ref4$as === void 0 ? "div" : _ref4$as,
      id = _ref4.id,
      isVisible = _ref4.isVisible,
      label = _ref4.label,
      _ref4$position = _ref4.position,
      position = _ref4$position === void 0 ? positionDefault : _ref4$position,
      style = _ref4.style,
      triggerRect = _ref4.triggerRect,
      props = _objectWithoutPropertiesLoose$4(_ref4, ["ariaLabel", "aria-label", "as", "id", "isVisible", "label", "position", "style", "triggerRect"]);

  // The element that serves as the tooltip container has role tooltip.
  // https://www.w3.org/TR/wai-aria-practices-1.2/#tooltip
  // When an app passes an `aria-label`, we actually want to implement
  // `role="tooltip"` on a visually hidden element inside of the trigger.
  // In these cases we want the screen reader user to know both the content in
  // the tooltip, but also the content in the badge. For screen reader users,
  // the only content announced to them is whatever is in the tooltip.
  var hasAriaLabel = (realAriaLabel || ariaLabel) != null;
  var ownRef = useRef(null);
  var ref = useForkedRef(forwardedRef, ownRef);
  var tooltipRect = useRect(ownRef, isVisible);
  return React__default.createElement(Fragment$1, null, React__default.createElement(Comp, Object.assign({
    role: hasAriaLabel ? undefined : "tooltip"
  }, props, {
    ref: ref,
    "data-reach-tooltip": "",
    id: hasAriaLabel ? undefined : id,
    style: _extends$4({}, style, getStyles$1(position, triggerRect, tooltipRect))
  }), label), hasAriaLabel && React__default.createElement(VisuallyHidden, {
    role: "tooltip",
    id: id
  }, realAriaLabel || ariaLabel));
});

if (process.env.NODE_ENV !== "production") {
  TooltipContent.displayName = "TooltipContent";
  TooltipContent.propTypes = {};
} ////////////////////////////////////////////////////////////////////////////////
// feels awkward when it's perfectly aligned w/ the trigger


var OFFSET = 8;

function getStyles$1(position, triggerRect, tooltipRect) {
  var haventMeasuredTooltipYet = !tooltipRect;

  if (haventMeasuredTooltipYet) {
    return {
      visibility: "hidden"
    };
  }

  return position(triggerRect, tooltipRect);
}

var positionDefault = function positionDefault(triggerRect, tooltipRect) {
  var _getDocumentDimension = getDocumentDimensions(),
      windowWidth = _getDocumentDimension.width,
      windowHeight = _getDocumentDimension.height;

  if (!triggerRect || !tooltipRect) {
    return {};
  }

  var collisions = {
    top: triggerRect.top - tooltipRect.height < 0,
    right: windowWidth < triggerRect.left + tooltipRect.width,
    bottom: windowHeight < triggerRect.bottom + tooltipRect.height + OFFSET,
    left: triggerRect.left - tooltipRect.width < 0
  };
  var directionRight = collisions.right && !collisions.left;
  var directionUp = collisions.bottom && !collisions.top;
  return {
    left: directionRight ? triggerRect.right - tooltipRect.width + window.pageXOffset + "px" : triggerRect.left + window.pageXOffset + "px",
    top: directionUp ? triggerRect.top - OFFSET - tooltipRect.height + window.pageYOffset + "px" : triggerRect.top + OFFSET + triggerRect.height + window.pageYOffset + "px"
  };
}; ////////////////////////////////////////////////////////////////////////////////

/**
 * Finds the next state from the current state + action. If the chart doesn't
 * describe that transition, it will throw.
 *
 * It also manages lifecycles of the machine, (enter/leave hooks on the state
 * chart)
 *
 * @param event
 * @param payload
 */


var transition = function transition(event, payload) {
  var stateDef = chart.states[state];
  var nextState = stateDef && stateDef.on && stateDef.on[event]; // Really useful for debugging
  // console.log({ event, state, nextState, contextId: context.id });
  // !nextState && console.log('no transition taken')

  if (!nextState) {
    return;
  }

  if (stateDef && stateDef.leave) {
    stateDef.leave();
  }

  if (payload) {
    context = payload;
  }

  var nextDef = chart.states[nextState];

  if (nextDef && nextDef.enter) {
    nextDef.enter();
  }

  state = nextState;
  notify();
};

function Tooltip$1(_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["children"]);

  return jsx(Tooltip, _extends({
    "data-component-id": "tooltip",
    css: css({
      "&[data-reach-tooltip]": {
        display: "inline-block",
        px: "spacing.3",
        py: "spacing.3",
        borderWidth: 0,
        borderRadius: "corners.2",
        fontSize: 13,
        fontWeight: 500,
        lineHeight: 1,
        color: "background.0",
        bg: "label.0",
        boxShadow: "elevations.4"
      }
    })
  }, rest), children);
}

function Wrapper(_ref) {
  var as = _ref.as,
      bg = _ref.bg,
      children = _ref.children,
      maxWidth = _ref.maxWidth,
      pb = _ref.pb,
      pt = _ref.pt,
      _ref$px = _ref.px,
      px = _ref$px === void 0 ? {
    _: "layout.1",
    md: "layout.3",
    lg: "layout.4",
    xlg: "layout.5"
  } : _ref$px,
      overflow = _ref.overflow,
      rest = _objectWithoutProperties(_ref, ["as", "bg", "children", "maxWidth", "pb", "pt", "px", "overflow"]);

  return jsx(Box, _extends({
    "data-fresco-id": "wrapper",
    as: as,
    px: px,
    pt: pt,
    pb: pb,
    overflow: overflow,
    bg: bg
  }, rest), jsx(ContentBlock, {
    maxWidth: maxWidth
  }, children));
}

export { Alert$1 as Alert, AspectRatio, Avatar, AvatarGroup, BORDER, BlurHash, Box, Button, COMMON, Card, Checkbox, ColorMode, Column, Columns, ContentBlock, Dialog$1 as Dialog, Divider, FLEX, Flex, GRID, GlobalStyles, HStack, Heading, Icon, IconButton, Inline, LAYOUT, POSITION, Paragraph, Radio, RadioGroup, Select, Spacer, Spinner, TYPOGRAPHY, Text, TextInput, TextLink, Textarea, Theme, ToastAlert, Toggle, Tooltip$1 as Tooltip, VStack, ValidationMessage, Wrapper };
