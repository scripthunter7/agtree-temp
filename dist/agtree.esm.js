function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _wrapRegExp() { _wrapRegExp = function _wrapRegExp(re, groups) { return new BabelRegExp(re, void 0, groups); }; var _super = RegExp.prototype, _groups = new WeakMap(); function BabelRegExp(re, flags, groups) { var _this = new RegExp(re, flags); return _groups.set(_this, groups || _groups.get(re)), _setPrototypeOf(_this, BabelRegExp.prototype); } function buildGroups(result, re) { var g = _groups.get(re); return Object.keys(g).reduce(function (groups, name) { var i = g[name]; if ("number" == typeof i) groups[name] = result[i];else { for (var k = 0; void 0 === result[i[k]] && k + 1 < i.length;) k++; groups[name] = result[i[k]]; } return groups; }, Object.create(null)); } return _inherits(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function (str) { var result = _super.exec.call(this, str); if (result) { result.groups = buildGroups(result, this); var indices = result.indices; indices && (indices.groups = buildGroups(indices, this)); } return result; }, BabelRegExp.prototype[Symbol.replace] = function (str, substitution) { if ("string" == typeof substitution) { var groups = _groups.get(this); return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) { var group = groups[name]; return "$" + (Array.isArray(group) ? group.join("$") : group); })); } if ("function" == typeof substitution) { var _this = this; return _super[Symbol.replace].call(this, str, function () { var args = arguments; return "object" != _typeof(args[args.length - 1]) && (args = [].slice.call(args)).push(buildGroups(args, _this)), substitution.apply(this, args); }); } return _super[Symbol.replace].call(this, str, substitution); }, _wrapRegExp.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/*
 * AGTree v1.0.1 (build date: Thu, 03 Aug 2023 16:36:54 GMT)
 * (c) 2023 AdGuard Software Ltd.
 * Released under the MIT license
 * https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/agtree#readme
 */
import valid from 'semver/functions/valid.js';
import coerce from 'semver/functions/coerce.js';
import JSON5 from 'json5';
import { walk, parse as _parse, toPlainObject, find, generate as _generate, fromPlainObject, List } from '@adguard/ecss-tree';
import * as ecssTree from '@adguard/ecss-tree';
export { ecssTree as ECSSTree };
import cloneDeep from 'clone-deep';
import { parse as parse$1 } from 'tldts';

/**
 * @file Possible adblock syntaxes are listed here.
 */
/**
 * Possible adblock syntaxes (supported by this library)
 */
var AdblockSyntax;
(function (AdblockSyntax) {
  /**
   * Common syntax, which is supported by more than one adblocker (or by all adblockers).
   *
   * We typically use this syntax when we cannot determine the concrete syntax of the rule,
   * because the syntax is used by more than one adblocker natively.
   *
   * @example
   * - `||example.org^$important` is a common syntax, since it is used by all adblockers natively, and
   * we cannot determine at parsing level whether `important` is a valid option or not, and if it is valid,
   * then which adblocker supports it.
   */
  AdblockSyntax["Common"] = "Common";
  /**
   * Adblock Plus syntax.
   *
   * @example
   * - `example.org#$#abort-on-property-read alert` is an Adblock Plus syntax, since it is not used by any other
   * adblockers directly (probably supported by some on-the-fly conversion, but this is not the native syntax).
   * @see {@link https://adblockplus.org/}
   */
  AdblockSyntax["Abp"] = "AdblockPlus";
  /**
   * uBlock Origin syntax.
   *
   * @example
   * - `example.com##+js(set, atob, noopFunc)` is an uBlock Origin syntax, since it is not used by any other
   * adblockers directly (probably supported by some on-the-fly conversion, but this is not the native syntax).
   * @see {@link https://github.com/gorhill/uBlock}
   */
  AdblockSyntax["Ubo"] = "UblockOrigin";
  /**
   * AdGuard syntax.
   *
   * @example
   * - `example.org#%#//scriptlet("abort-on-property-read", "alert")` is an AdGuard syntax, since it is not used
   * by any other adblockers directly (probably supported by some on-the-fly conversion, but this is not the native
   * syntax).
   * @see {@link https://adguard.com/}
   */
  AdblockSyntax["Adg"] = "AdGuard";
})(AdblockSyntax || (AdblockSyntax = {}));

/**
 * @file Constant values used by all parts of the library
 */
// General
var EMPTY = '';
var SPACE = ' ';
var TAB = '\t';
var COLON = ':';
var COMMA = ',';
var DOT = '.';
var SEMICOLON = ';';
var AMPERSAND = '&';
var ASTERISK = '*';
var AT_SIGN = '@';
var DOLLAR_SIGN = '$';
var EQUALS = '=';
var EXCLAMATION_MARK = '!';
var HASHMARK = '#';
var PIPE = '|';
var UNDERSCORE = '_';
// Escape characters
var BACKSLASH = '\\';
var ESCAPE_CHARACTER = BACKSLASH;
// Newlines
var CR = '\r';
var FF = '\f';
var LF = '\n';
var CRLF = CR + LF;
// Brackets
var OPEN_PARENTHESIS = '(';
var CLOSE_PARENTHESIS = ')';
var OPEN_SQUARE_BRACKET = '[';
var CLOSE_SQUARE_BRACKET = ']';
var OPEN_CURLY_BRACKET = '{';
var CLOSE_CURLY_BRACKET = '}';
// Letters
var SMALL_LETTER_A = 'a';
var SMALL_LETTER_Z = 'z';
// Capital letters
var CAPITAL_LETTER_A = 'A';
var CAPITAL_LETTER_Z = 'Z';
// Numbers as strings
var NUMBER_0 = '0';
var NUMBER_9 = '9';
var ADG_SCRIPTLET_MASK = '//scriptlet';
var UBO_SCRIPTLET_MASK = 'js';
// Modifiers are separated by ",". For example: "script,domain=example.com"
var MODIFIERS_SEPARATOR = ',';
var MODIFIER_EXCEPTION_MARKER = '~';
var MODIFIER_ASSIGN_OPERATOR = '=';
var DOMAIN_EXCEPTION_MARKER = '~';
/**
 * Classic domain separator.
 *
 * @example
 * ```adblock
 * ! Domains are separated by ",":
 * example.com,~example.org##.ads
 * ```
 */
var CLASSIC_DOMAIN_SEPARATOR = ',';
/**
 * Modifier domain separator.
 *
 * @example
 * ```adblock
 * ! Domains are separated by "|":
 * ads.js^$script,domains=example.com|~example.org
 * ```
 */
var MODIFIER_DOMAIN_SEPARATOR = '|';
var DOMAIN_LIST_TYPE = 'DomainList';
var CSS_IMPORTANT = '!important';
var HINT_MARKER = '!+';
var HINT_MARKER_LEN = HINT_MARKER.length;
var NETWORK_RULE_EXCEPTION_MARKER = '@@';
var NETWORK_RULE_EXCEPTION_MARKER_LEN = NETWORK_RULE_EXCEPTION_MARKER.length;
var NETWORK_RULE_SEPARATOR = '$';
var AGLINT_COMMAND_PREFIX = 'aglint';
var AGLINT_CONFIG_COMMENT_MARKER = '--';
var PREPROCESSOR_MARKER = '!#';
var PREPROCESSOR_MARKER_LEN = PREPROCESSOR_MARKER.length;
var PREPROCESSOR_SEPARATOR = ' ';
var SAFARI_CB_AFFINITY = 'safari_cb_affinity';
var IF = 'if';
var INCLUDE = 'include';

/**
 * @file Utility functions for location and location range management.
 */
/**
 * Shifts the specified location by the specified offset.
 *
 * @param loc Location to shift
 * @param offset Offset to shift by
 * @returns Location shifted by the specified offset
 */
function shiftLoc(loc, offset) {
  return {
    offset: loc.offset + offset,
    line: loc.line,
    column: loc.column + offset
  };
}
/**
 * Calculates a location range from the specified base location and offsets.
 *
 * Since every adblock rule is a single line, the start and end locations
 * of the range will have the same line, no need to calculate it here.
 *
 * @param loc Base location
 * @param startOffset Start offset
 * @param endOffset End offset
 * @returns Calculated location range
 */
function locRange(loc, startOffset, endOffset) {
  return {
    start: shiftLoc(loc, startOffset),
    end: shiftLoc(loc, endOffset)
  };
}

/**
 * @file Utility functions for string manipulation.
 */
var SINGLE_QUOTE_MARKER = "'";
var DOUBLE_QUOTE_MARKER = '"';
var REGEX_MARKER = '/';
var StringUtils = /*#__PURE__*/function () {
  function StringUtils() {
    _classCallCheck(this, StringUtils);
  }
  _createClass(StringUtils, null, [{
    key: "findNextUnescapedCharacter",
    value:
    /**
     * Finds the first occurrence of a character that:
     * - isn't preceded by an escape character
     *
     * @param pattern - Source pattern
     * @param searchedCharacter - Searched character
     * @param start - Start index
     * @param escapeCharacter - Escape character, \ by default
     * @returns Index or -1 if the character not found
     */
    function findNextUnescapedCharacter(pattern, searchedCharacter) {
      var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var escapeCharacter = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ESCAPE_CHARACTER;
      for (var i = start; i < pattern.length; i += 1) {
        // The searched character cannot be preceded by an escape
        if (pattern[i] === searchedCharacter && pattern[i - 1] !== escapeCharacter) {
          return i;
        }
      }
      return -1;
    }
    /**
     * Finds the last occurrence of a character that:
     * - isn't preceded by an escape character
     *
     * @param pattern - Source pattern
     * @param searchedCharacter - Searched character
     * @param escapeCharacter - Escape character, \ by default
     * @returns Index or -1 if the character not found
     */
  }, {
    key: "findLastUnescapedCharacter",
    value: function findLastUnescapedCharacter(pattern, searchedCharacter) {
      var escapeCharacter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ESCAPE_CHARACTER;
      for (var i = pattern.length - 1; i >= 0; i -= 1) {
        // The searched character cannot be preceded by an escape
        if (pattern[i] === searchedCharacter && pattern[i - 1] !== escapeCharacter) {
          return i;
        }
      }
      return -1;
    }
    /**
     * Finds the next occurrence of a character that:
     * - isn't preceded by an escape character
     * - isn't followed by the specified character
     *
     * @param pattern - Source pattern
     * @param start - Start index
     * @param searchedCharacter - Searched character
     * @param notFollowedBy - Searched character not followed by this character
     * @param escapeCharacter - Escape character, \ by default
     * @returns Index or -1 if the character not found
     */
  }, {
    key: "findNextUnescapedCharacterThatNotFollowedBy",
    value: function findNextUnescapedCharacterThatNotFollowedBy(pattern, start, searchedCharacter, notFollowedBy) {
      var escapeCharacter = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : ESCAPE_CHARACTER;
      for (var i = start; i < pattern.length; i += 1) {
        // The searched character cannot be preceded by an escape
        if (pattern[i] === searchedCharacter && pattern[i + 1] !== notFollowedBy && pattern[i - 1] !== escapeCharacter) {
          return i;
        }
      }
      return -1;
    }
    /**
     * Finds the last occurrence of a character that:
     * - isn't preceded by an escape character
     * - isn't followed by the specified character
     *
     * @param pattern - Source pattern
     * @param searchedCharacter - Searched character
     * @param notFollowedBy - Searched character not followed by this character
     * @param escapeCharacter - Escape character, \ by default
     * @returns Index or -1 if the character not found
     */
  }, {
    key: "findLastUnescapedCharacterThatNotFollowedBy",
    value: function findLastUnescapedCharacterThatNotFollowedBy(pattern, searchedCharacter, notFollowedBy) {
      var escapeCharacter = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ESCAPE_CHARACTER;
      for (var i = pattern.length - 1; i >= 0; i -= 1) {
        // The searched character cannot be preceded by an escape
        if (pattern[i] === searchedCharacter && pattern[i + 1] !== notFollowedBy && pattern[i - 1] !== escapeCharacter) {
          return i;
        }
      }
      return -1;
    }
    /**
     * Finds the next occurrence of a character that:
     * - isn't part of any string literal ('literal' or "literal")
     * - isn't part of any RegExp expression (/regexp/)
     *
     * @param pattern - Source pattern
     * @param searchedCharacter - Searched character
     * @param start - Start index
     * @returns Index or -1 if the character not found
     */
  }, {
    key: "findUnescapedNonStringNonRegexChar",
    value: function findUnescapedNonStringNonRegexChar(pattern, searchedCharacter) {
      var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var open = null;
      for (var i = start; i < pattern.length; i += 1) {
        if ((pattern[i] === SINGLE_QUOTE_MARKER || pattern[i] === DOUBLE_QUOTE_MARKER || pattern[i] === REGEX_MARKER) && pattern[i - 1] !== ESCAPE_CHARACTER) {
          if (open === pattern[i]) {
            open = null;
          } else if (open === null) {
            open = pattern[i];
          }
        } else if (open === null && pattern[i] === searchedCharacter && pattern[i - 1] !== ESCAPE_CHARACTER) {
          return i;
        }
      }
      return -1;
    }
    /**
     * Finds the next occurrence of a character that:
     * - isn't part of any string literal ('literal' or "literal")
     * - isn't preceded by an escape character
     *
     * @param pattern - Source pattern
     * @param searchedCharacter - Searched character
     * @param start - Start index
     * @param escapeCharacter - Escape character, \ by default
     * @returns Index or -1 if the character not found
     */
  }, {
    key: "findNextUnquotedUnescapedCharacter",
    value: function findNextUnquotedUnescapedCharacter(pattern, searchedCharacter) {
      var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var escapeCharacter = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ESCAPE_CHARACTER;
      var openQuote = null;
      for (var i = start; i < pattern.length; i += 1) {
        // Unescaped ' or "
        if ((pattern[i] === SINGLE_QUOTE_MARKER || pattern[i] === DOUBLE_QUOTE_MARKER) && pattern[i - 1] !== escapeCharacter) {
          if (!openQuote) openQuote = pattern[i];else if (openQuote === pattern[i]) openQuote = null;
        } else if (pattern[i] === searchedCharacter && pattern[i - 1] !== escapeCharacter) {
          // Unescaped character
          if (!openQuote) {
            return i;
          }
        }
      }
      return -1;
    }
    /**
     * Finds the next occurrence of a character that:
     * - isn't "bracketed"
     * - isn't preceded by an escape character
     *
     * @param pattern - Source pattern
     * @param searchedCharacter - Searched character
     * @param start - Start index
     * @param escapeCharacter - Escape character, \ by default
     * @param openBracket - Open bracket, ( by default
     * @param closeBracket - Close bracket, ( by default
     * @throws If the opening and closing brackets are the same
     * @returns Index or -1 if the character not found
     */
  }, {
    key: "findNextNotBracketedUnescapedCharacter",
    value: function findNextNotBracketedUnescapedCharacter(pattern, searchedCharacter) {
      var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var escapeCharacter = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ESCAPE_CHARACTER;
      var openBracket = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '(';
      var closeBracket = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : ')';
      if (openBracket === closeBracket) {
        throw new Error('Open and close bracket cannot be the same');
      }
      var depth = 0;
      for (var i = start; i < pattern.length; i += 1) {
        if (pattern[i] === openBracket) {
          depth += 1;
        } else if (pattern[i] === closeBracket) {
          depth -= 1;
        } else if (depth < 1 && pattern[i] === searchedCharacter && pattern[i - 1] !== escapeCharacter) {
          return i;
        }
      }
      return -1;
    }
    /**
     * Splits the source pattern along characters that:
     * - isn't part of any string literal ('literal' or "literal")
     * - isn't preceded by an escape character
     *
     * @param pattern - Source pattern
     * @param delimeterCharacter - Delimeter character
     * @returns Splitted string
     */
  }, {
    key: "splitStringByUnquotedUnescapedCharacter",
    value: function splitStringByUnquotedUnescapedCharacter(pattern, delimeterCharacter) {
      var parts = [];
      var delimeterIndex = -1;
      do {
        var prevDelimeterIndex = delimeterIndex;
        delimeterIndex = StringUtils.findNextUnquotedUnescapedCharacter(pattern, delimeterCharacter, delimeterIndex + 1);
        if (delimeterIndex !== -1) {
          parts.push(pattern.substring(prevDelimeterIndex + 1, delimeterIndex));
        } else {
          parts.push(pattern.substring(prevDelimeterIndex + 1, pattern.length));
        }
      } while (delimeterIndex !== -1);
      return parts;
    }
    /**
     * Splits the source pattern along characters that:
     * - isn't part of any string literal ('literal' or "literal")
     * - isn't part of any RegExp expression (/regexp/)
     * - isn't preceded by an escape character
     *
     * @param pattern - Source pattern
     * @param delimeterCharacter - Delimeter character
     * @returns Splitted string
     */
  }, {
    key: "splitStringByUnescapedNonStringNonRegexChar",
    value: function splitStringByUnescapedNonStringNonRegexChar(pattern, delimeterCharacter) {
      var parts = [];
      var delimeterIndex = -1;
      do {
        var prevDelimeterIndex = delimeterIndex;
        delimeterIndex = StringUtils.findUnescapedNonStringNonRegexChar(pattern, delimeterCharacter, delimeterIndex + 1);
        if (delimeterIndex !== -1) {
          parts.push(pattern.substring(prevDelimeterIndex + 1, delimeterIndex));
        } else {
          parts.push(pattern.substring(prevDelimeterIndex + 1, pattern.length));
        }
      } while (delimeterIndex !== -1);
      return parts;
    }
    /**
     * Splits the source pattern along characters that:
     * - isn't preceded by an escape character
     *
     * @param pattern - Source pattern
     * @param delimeterCharacter - Delimeter character
     * @returns Splitted string
     */
  }, {
    key: "splitStringByUnescapedCharacter",
    value: function splitStringByUnescapedCharacter(pattern, delimeterCharacter) {
      var parts = [];
      var delimeterIndex = -1;
      do {
        var prevDelimeterIndex = delimeterIndex;
        delimeterIndex = StringUtils.findNextUnescapedCharacter(pattern, delimeterCharacter, delimeterIndex + 1);
        if (delimeterIndex !== -1) {
          parts.push(pattern.substring(prevDelimeterIndex + 1, delimeterIndex));
        } else {
          parts.push(pattern.substring(prevDelimeterIndex + 1, pattern.length));
        }
      } while (delimeterIndex !== -1);
      return parts;
    }
    /**
     * Determines whether the given character is a space or tab character.
     *
     * @param char - The character to check.
     * @returns true if the given character is a space or tab character, false otherwise.
     */
  }, {
    key: "isWhitespace",
    value: function isWhitespace(_char) {
      return _char === SPACE || _char === TAB;
    }
    /**
     * Checks if the given character is a digit.
     *
     * @param char The character to check.
     * @returns `true` if the given character is a digit, `false` otherwise.
     */
  }, {
    key: "isDigit",
    value: function isDigit(_char2) {
      return _char2 >= NUMBER_0 && _char2 <= NUMBER_9;
    }
    /**
     * Checks if the given character is a small letter.
     *
     * @param char The character to check.
     * @returns `true` if the given character is a small letter, `false` otherwise.
     */
  }, {
    key: "isSmallLetter",
    value: function isSmallLetter(_char3) {
      return _char3 >= SMALL_LETTER_A && _char3 <= SMALL_LETTER_Z;
    }
    /**
     * Checks if the given character is a capital letter.
     *
     * @param char The character to check.
     * @returns `true` if the given character is a capital letter, `false` otherwise.
     */
  }, {
    key: "isCapitalLetter",
    value: function isCapitalLetter(_char4) {
      return _char4 >= CAPITAL_LETTER_A && _char4 <= CAPITAL_LETTER_Z;
    }
    /**
     * Checks if the given character is a letter (small or capital).
     *
     * @param char The character to check.
     * @returns `true` if the given character is a letter, `false` otherwise.
     */
  }, {
    key: "isLetter",
    value: function isLetter(_char5) {
      return StringUtils.isSmallLetter(_char5) || StringUtils.isCapitalLetter(_char5);
    }
    /**
     * Checks if the given character is a letter or a digit.
     *
     * @param char Character to check
     * @returns `true` if the given character is a letter or a digit, `false` otherwise.
     */
  }, {
    key: "isAlphaNumeric",
    value: function isAlphaNumeric(_char6) {
      return StringUtils.isLetter(_char6) || StringUtils.isDigit(_char6);
    }
    /**
     * Searches for the first non-whitespace character in the source pattern.
     *
     * @param pattern - Source pattern
     * @param start - Start index
     * @returns Index or -1 if the character not found
     */
  }, {
    key: "findFirstNonWhitespaceCharacter",
    value: function findFirstNonWhitespaceCharacter(pattern) {
      var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      for (var i = start; i < pattern.length; i += 1) {
        if (!StringUtils.isWhitespace(pattern[i])) {
          return i;
        }
      }
      return -1;
    }
    /**
     * Searches for the last non-whitespace character in the source pattern.
     *
     * @param pattern - Source pattern
     * @returns Index or -1 if the character not found
     */
  }, {
    key: "findLastNonWhitespaceCharacter",
    value: function findLastNonWhitespaceCharacter(pattern) {
      for (var i = pattern.length - 1; i >= 0; i -= 1) {
        if (!StringUtils.isWhitespace(pattern[i])) {
          return i;
        }
      }
      return -1;
    }
    /**
     * Finds the next whitespace character in the pattern.
     *
     * @param pattern Pattern to search in
     * @param start Start index
     * @returns Index of the next whitespace character or the length of the pattern if not found
     */
  }, {
    key: "findNextWhitespaceCharacter",
    value: function findNextWhitespaceCharacter(pattern) {
      var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      for (var i = start; i < pattern.length; i += 1) {
        if (StringUtils.isWhitespace(pattern[i])) {
          return i;
        }
      }
      return pattern.length;
    }
    /**
     * Checks whether a string is a RegExp pattern.
     *
     * @param pattern - Pattern to check
     * @returns `true` if the string is a RegExp pattern, `false` otherwise
     */
  }, {
    key: "isRegexPattern",
    value: function isRegexPattern(pattern) {
      var trimmedPattern = pattern.trim();
      var lastIndex = trimmedPattern.length - 1;
      if (trimmedPattern.length > 2 && trimmedPattern[0] === REGEX_MARKER) {
        var last = StringUtils.findNextUnescapedCharacter(trimmedPattern, REGEX_MARKER, 1);
        return last === lastIndex;
      }
      return false;
    }
    /**
     * Escapes a specified character in the string.
     *
     * @param pattern - Input string
     * @param character - Character to escape
     * @param escapeCharacter - Escape character (optional)
     * @returns Escaped string
     */
  }, {
    key: "escapeCharacter",
    value: function escapeCharacter(pattern, character) {
      var _escapeCharacter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ESCAPE_CHARACTER;
      var result = EMPTY;
      for (var i = 0; i < pattern.length; i += 1) {
        if (pattern[i] === character && pattern[i - 1] !== _escapeCharacter) {
          result += _escapeCharacter;
        }
        result += pattern[i];
      }
      return result;
    }
    /**
     * Searches for the next non-whitespace character in the source pattern.
     *
     * @param pattern Pattern to search
     * @param start Start index
     * @returns Index of the next non-whitespace character or the length of the pattern
     */
  }, {
    key: "skipWS",
    value: function skipWS(pattern) {
      var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var i = start;
      while (i < pattern.length && StringUtils.isWhitespace(pattern[i])) {
        i += 1;
      }
      return Math.min(i, pattern.length);
    }
    /**
     * Searches for the previous non-whitespace character in the source pattern.
     *
     * @param pattern Pattern to search
     * @param start Start index
     * @returns Index of the previous non-whitespace character or -1
     */
  }, {
    key: "skipWSBack",
    value: function skipWSBack(pattern) {
      var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : pattern.length - 1;
      var i = start;
      while (i >= 0 && StringUtils.isWhitespace(pattern[i])) {
        i -= 1;
      }
      return Math.max(i, -1);
    }
    /**
     * Checks if the given character is a new line character.
     *
     * @param char Character to check
     * @returns `true` if the given character is a new line character, `false` otherwise.
     */
  }, {
    key: "isEOL",
    value: function isEOL(_char7) {
      return _char7 === CR || _char7 === LF || _char7 === FF;
    }
    /**
     * Splits a string along newline characters.
     *
     * @param input - Input string
     * @returns Splitted string
     */
  }, {
    key: "splitStringByNewLines",
    value: function splitStringByNewLines(input) {
      return input.split(/\r?\n/);
    }
    /**
     * Splits a string by new lines and stores the new line type for each line
     *
     * @param input The input string to be split
     * @returns An array of tuples, where each tuple contains a line of the input string and its
     * corresponding new line type ("lf", "crlf", or "cr")
     */
  }, {
    key: "splitStringByNewLinesEx",
    value: function splitStringByNewLinesEx(input) {
      // Array to store the tuples of line and new line type
      var result = [];
      var currentLine = EMPTY;
      var newLineType = null;
      // Iterate over each character in the input string
      for (var i = 0; i < input.length; i += 1) {
        var _char8 = input[i];
        if (_char8 === CR) {
          if (input[i + 1] === LF) {
            newLineType = 'crlf';
            i += 1;
          } else {
            newLineType = 'cr';
          }
          result.push([currentLine, newLineType]);
          currentLine = EMPTY;
          newLineType = null;
        } else if (_char8 === LF) {
          newLineType = 'lf';
          result.push([currentLine, newLineType]);
          currentLine = EMPTY;
          newLineType = null;
        } else {
          currentLine += _char8;
        }
      }
      if (result.length === 0 || currentLine !== EMPTY) {
        result.push([currentLine, newLineType]);
      }
      return result;
    }
    /**
     * Merges an array of tuples (line, newLineType) into a single string
     *
     * @param input The array of tuples to be merged
     * @returns A single string containing the lines and new line characters from the input array
     */
  }, {
    key: "mergeStringByNewLines",
    value: function mergeStringByNewLines(input) {
      var result = EMPTY;
      // Iterate over each tuple in the input array
      for (var i = 0; i < input.length; i += 1) {
        var _input$i = _slicedToArray(input[i], 2),
          line = _input$i[0],
          newLineType = _input$i[1];
        // Add the line to the result string
        result += line;
        // Add the appropriate new line character based on the newLineType
        if (newLineType !== null) {
          if (newLineType === 'crlf') {
            result += CRLF;
          } else if (newLineType === 'cr') {
            result += CR;
          } else {
            result += LF;
          }
        }
      }
      return result;
    }
    /**
     * Helper method to parse a raw string as a number
     *
     * @param raw Raw string to parse
     * @returns Parsed number
     * @throws If the raw string can't be parsed as a number
     */
  }, {
    key: "parseNumber",
    value: function parseNumber(raw) {
      var result = parseInt(raw, 10);
      if (Number.isNaN(result)) {
        throw new Error('Expected a number');
      }
      return result;
    }
    /**
     * Checks if the given value is a string.
     *
     * @param value Value to check
     * @returns `true` if the value is a string, `false` otherwise
     */
  }, {
    key: "isString",
    value: function isString(value) {
      return typeof value === 'string';
    }
  }]);
  return StringUtils;
}();
/**
 * Default location for AST nodes.
 */
var defaultLocation = {
  offset: 0,
  line: 1,
  column: 1
};
/**
 * Represents the different comment markers that can be used in an adblock rule.
 *
 * @example
 * - If the rule is `! This is just a comment`, then the marker will be `!`.
 * - If the rule is `# This is just a comment`, then the marker will be `#`.
 */
var CommentMarker;
(function (CommentMarker) {
  /**
   * Regular comment marker. It is supported by all ad blockers.
   */
  CommentMarker["Regular"] = "!";
  /**
   * Hashmark comment marker. It is supported by uBlock Origin and AdGuard,
   * and also used in hosts files.
   */
  CommentMarker["Hashmark"] = "#";
})(CommentMarker || (CommentMarker = {}));
/**
 * Represents the main categories that an adblock rule can belong to.
 * Of course, these include additional subcategories.
 */
var RuleCategory;
(function (RuleCategory) {
  /**
   * Empty "rules" that are only containing whitespaces. These rules are handled just for convenience.
   */
  RuleCategory["Empty"] = "Empty";
  /**
   * Syntactically invalid rules (tolerant mode only).
   */
  RuleCategory["Invalid"] = "Invalid";
  /**
   * Comment rules, such as comment rules, metadata rules, preprocessor rules, etc.
   */
  RuleCategory["Comment"] = "Comment";
  /**
   * Cosmetic rules, such as element hiding rules, CSS rules, scriptlet rules, HTML rules, and JS rules.
   */
  RuleCategory["Cosmetic"] = "Cosmetic";
  /**
   * Network rules, such as basic network rules, header remover network rules, redirect network rules,
   * response header filtering rules, etc.
   */
  RuleCategory["Network"] = "Network";
})(RuleCategory || (RuleCategory = {}));
/**
 * Represents possible comment types.
 */
var CommentRuleType;
(function (CommentRuleType) {
  CommentRuleType["AgentCommentRule"] = "AgentCommentRule";
  CommentRuleType["CommentRule"] = "CommentRule";
  CommentRuleType["ConfigCommentRule"] = "ConfigCommentRule";
  CommentRuleType["HintCommentRule"] = "HintCommentRule";
  CommentRuleType["MetadataCommentRule"] = "MetadataCommentRule";
  CommentRuleType["PreProcessorCommentRule"] = "PreProcessorCommentRule";
})(CommentRuleType || (CommentRuleType = {}));
/**
 * Represents possible cosmetic rule types.
 */
var CosmeticRuleType;
(function (CosmeticRuleType) {
  CosmeticRuleType["ElementHidingRule"] = "ElementHidingRule";
  CosmeticRuleType["CssInjectionRule"] = "CssInjectionRule";
  CosmeticRuleType["ScriptletInjectionRule"] = "ScriptletInjectionRule";
  CosmeticRuleType["HtmlFilteringRule"] = "HtmlFilteringRule";
  CosmeticRuleType["JsInjectionRule"] = "JsInjectionRule";
})(CosmeticRuleType || (CosmeticRuleType = {}));
/**
 * Represents possible cosmetic rule separators.
 */
var CosmeticRuleSeparator;
(function (CosmeticRuleSeparator) {
  /**
   * @see {@link https://help.eyeo.com/adblockplus/how-to-write-filters#elemhide_basic}
   */
  CosmeticRuleSeparator["ElementHiding"] = "##";
  /**
   * @see {@link https://help.eyeo.com/adblockplus/how-to-write-filters#elemhide_basic}
   */
  CosmeticRuleSeparator["ElementHidingException"] = "#@#";
  /**
   * @see {@link https://help.eyeo.com/adblockplus/how-to-write-filters#elemhide_basic}
   */
  CosmeticRuleSeparator["ExtendedElementHiding"] = "#?#";
  /**
   * @see {@link https://help.eyeo.com/adblockplus/how-to-write-filters#elemhide_basic}
   */
  CosmeticRuleSeparator["ExtendedElementHidingException"] = "#@?#";
  /**
   * @see {@link https://help.eyeo.com/adblockplus/how-to-write-filters#elemhide_basic}
   */
  CosmeticRuleSeparator["AbpSnippet"] = "#$#";
  /**
   * @see {@link https://help.eyeo.com/adblockplus/how-to-write-filters#elemhide_basic}
   */
  CosmeticRuleSeparator["AbpSnippetException"] = "#@$#";
  /**
   * @see {@link https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#cosmetic-css-rules}
   */
  CosmeticRuleSeparator["AdgCssInjection"] = "#$#";
  /**
   * @see {@link https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#cosmetic-css-rules}
   */
  CosmeticRuleSeparator["AdgCssInjectionException"] = "#@$#";
  /**
   * @see {@link https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#cosmetic-css-rules}
   */
  CosmeticRuleSeparator["AdgExtendedCssInjection"] = "#$?#";
  /**
   * @see {@link https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#cosmetic-css-rules}
   */
  CosmeticRuleSeparator["AdgExtendedCssInjectionException"] = "#@$?#";
  /**
   * @see {@link https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#scriptlets}
   */
  CosmeticRuleSeparator["AdgJsInjection"] = "#%#";
  /**
   * @see {@link https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#scriptlets}
   */
  CosmeticRuleSeparator["AdgJsInjectionException"] = "#@%#";
  /**
   * @see {@link https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#html-filtering-rules}
   */
  CosmeticRuleSeparator["AdgHtmlFiltering"] = "$$";
  /**
   * @see {@link https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#html-filtering-rules}
   */
  CosmeticRuleSeparator["AdgHtmlFilteringException"] = "$@$";
  /**
   * @see {@link https://github.com/gorhill/uBlock/wiki/Static-filter-syntax#scriptlet-injection}
   */
  CosmeticRuleSeparator["UboScriptletInjection"] = "##+";
  /**
   * @see {@link https://github.com/gorhill/uBlock/wiki/Static-filter-syntax#scriptlet-injection}
   */
  CosmeticRuleSeparator["UboScriptletInjectionException"] = "#@#+";
  /**
   * @see {@link https://github.com/gorhill/uBlock/wiki/Static-filter-syntax#html-filters}
   */
  CosmeticRuleSeparator["UboHtmlFiltering"] = "##^";
  /**
   * @see {@link https://github.com/gorhill/uBlock/wiki/Static-filter-syntax#html-filters}
   */
  CosmeticRuleSeparator["UboHtmlFilteringException"] = "#@#^";
})(CosmeticRuleSeparator || (CosmeticRuleSeparator = {}));

/**
 * Customized syntax error class for Adblock Filter Parser,
 * which contains the location range of the error.
 */
var AdblockSyntaxError = /*#__PURE__*/function (_SyntaxError) {
  _inherits(AdblockSyntaxError, _SyntaxError);
  var _super = _createSuper(AdblockSyntaxError);
  /**
   * Constructs a new `AdblockSyntaxError` instance.
   *
   * @param message Error message
   * @param loc Location range of the error
   */
  function AdblockSyntaxError(message, loc) {
    var _this;
    _classCallCheck(this, AdblockSyntaxError);
    _this = _super.call(this, message);
    /**
     * Location range of the error.
     */
    _defineProperty(_assertThisInitialized(_this), "loc", void 0);
    _this.name = 'AdblockSyntaxError';
    _this.loc = loc;
    return _this;
  }
  return _createClass(AdblockSyntaxError);
}( /*#__PURE__*/_wrapNativeSuper(SyntaxError));
/**
 * `AgentParser` is responsible for parsing single adblock agent elements.
 *
 * @example
 * If the adblock agent rule is
 * ```adblock
 * [Adblock Plus 2.0; AdGuard]
 * ```
 * then the adblock agents are `Adblock Plus 2.0` and `AdGuard`, and this
 * class is responsible for parsing them. The rule itself is parsed by
 * `AgentCommentRuleParser`, which uses this class to parse single agents.
 */
var AgentParser = /*#__PURE__*/function () {
  function AgentParser() {
    _classCallCheck(this, AgentParser);
  }
  _createClass(AgentParser, null, [{
    key: "isValidVersion",
    value:
    /**
     * Checks if the string is a valid version.
     *
     * @param str String to check
     * @returns `true` if the string is a valid version, `false` otherwise
     */
    function isValidVersion(str) {
      return valid(coerce(str)) !== null;
    }
    /**
     * Parses a raw rule as an adblock agent comment.
     *
     * @param raw Raw rule
     * @param loc Base location
     * @returns Agent rule AST
     * @throws {AdblockSyntaxError} If the raw rule cannot be parsed as an adblock agent
     */
  }, {
    key: "parse",
    value: function parse(raw) {
      var loc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultLocation;
      var offset = 0;
      // Save name start position
      var nameStartIndex = offset;
      var nameEndIndex = offset;
      // Prepare variables for name and version
      var name = null;
      var version = null;
      // Get agent parts by splitting it by spaces. The last part may be a version.
      // Example: "Adblock Plus 2.0"
      while (offset < raw.length) {
        // Skip whitespace before the part
        offset = StringUtils.skipWS(raw, offset);
        var partEnd = StringUtils.findNextWhitespaceCharacter(raw, offset);
        var part = raw.substring(offset, partEnd);
        if (AgentParser.isValidVersion(part)) {
          // Multiple versions aren't allowed
          if (version !== null) {
            throw new AdblockSyntaxError('Duplicated versions are not allowed', locRange(loc, offset, partEnd));
          }
          // Save name
          name = {
            type: 'Value',
            loc: locRange(loc, nameStartIndex, nameEndIndex),
            value: raw.substring(nameStartIndex, nameEndIndex)
          };
          // Save version
          version = {
            type: 'Value',
            loc: locRange(loc, offset, partEnd),
            value: part
          };
        } else {
          nameEndIndex = partEnd;
        }
        // Skip whitespace after the part
        offset = StringUtils.skipWS(raw, partEnd);
      }
      // If we didn't find a version, the whole string is the name
      if (name === null) {
        name = {
          type: 'Value',
          loc: locRange(loc, nameStartIndex, nameEndIndex),
          value: raw.substring(nameStartIndex, nameEndIndex)
        };
      }
      // Agent name cannot be empty
      if (name.value.length === 0) {
        throw new AdblockSyntaxError('Agent name cannot be empty', locRange(loc, 0, raw.length));
      }
      return {
        type: 'Agent',
        loc: locRange(loc, 0, raw.length),
        adblock: name,
        version: version
      };
    }
    /**
     * Converts an adblock agent AST to a string.
     *
     * @param ast Agent AST
     * @returns Raw string
     */
  }, {
    key: "generate",
    value: function generate(ast) {
      var result = EMPTY;
      // Agent adblock name
      result += ast.adblock.value;
      // Agent adblock version (if present)
      if (ast.version !== null) {
        // Add a space between the name and the version
        result += SPACE;
        result += ast.version.value;
      }
      return result;
    }
  }]);
  return AgentParser;
}();
/**
 * @file Cosmetic rule separator finder and categorizer
 */
/**
 * Utility class for cosmetic rule separators.
 */
var CosmeticRuleSeparatorUtils = /*#__PURE__*/function () {
  function CosmeticRuleSeparatorUtils() {
    _classCallCheck(this, CosmeticRuleSeparatorUtils);
  }
  _createClass(CosmeticRuleSeparatorUtils, null, [{
    key: "isException",
    value:
    /**
     * Checks whether the specified separator is an exception.
     *
     * @param separator Separator to check
     * @returns `true` if the separator is an exception, `false` otherwise
     */
    function isException(separator) {
      // Simply check the second character
      return separator[1] === AT_SIGN;
    }
    /**
     * Checks whether the specified separator is marks an Extended CSS cosmetic rule.
     *
     * @param separator Separator to check
     * @returns `true` if the separator is marks an Extended CSS cosmetic rule, `false` otherwise
     */
  }, {
    key: "isExtendedCssMarker",
    value: function isExtendedCssMarker(separator) {
      return separator === CosmeticRuleSeparator.ExtendedElementHiding || separator === CosmeticRuleSeparator.ExtendedElementHidingException || separator === CosmeticRuleSeparator.AdgExtendedCssInjection || separator === CosmeticRuleSeparator.AdgExtendedCssInjectionException;
    }
    /**
     * Looks for the cosmetic rule separator in the rule. This is a simplified version that
     * masks the recursive function.
     *
     * @param rule Raw rule
     * @returns Separator result or null if no separator was found
     */
  }, {
    key: "find",
    value: function find(rule) {
      /**
       * Helper function to create results of the `find` method.
       *
       * @param start Start position
       * @param separator Separator type
       * @returns Cosmetic rule separator node
       */
      // eslint-disable-next-line max-len
      function createResult(start, separator) {
        return {
          separator: separator,
          start: start,
          end: start + separator.length
        };
      }
      for (var i = 0; i < rule.length; i += 1) {
        if (rule[i] === '#') {
          if (rule[i + 1] === '#') {
            if (rule[i + 2] === '+') {
              // ##+
              return createResult(i, CosmeticRuleSeparator.UboScriptletInjection);
            }
            if (rule[i + 2] === '^') {
              // ##^
              return createResult(i, CosmeticRuleSeparator.UboHtmlFiltering);
            }
            if (rule[i - 1] !== SPACE) {
              // ##
              return createResult(i, CosmeticRuleSeparator.ElementHiding);
            }
          }
          if (rule[i + 1] === '?' && rule[i + 2] === '#') {
            // #?#
            return createResult(i, CosmeticRuleSeparator.ExtendedElementHiding);
          }
          if (rule[i + 1] === '%' && rule[i + 2] === '#') {
            // #%#
            return createResult(i, CosmeticRuleSeparator.AdgJsInjection);
          }
          if (rule[i + 1] === '$') {
            if (rule[i + 2] === '#') {
              // #$#
              return createResult(i, CosmeticRuleSeparator.AdgCssInjection);
            }
            if (rule[i + 2] === '?' && rule[i + 3] === '#') {
              // #$?#
              return createResult(i, CosmeticRuleSeparator.AdgExtendedCssInjection);
            }
          }
          // Exceptions
          if (rule[i + 1] === '@') {
            if (rule[i + 2] === '#') {
              if (rule[i + 3] === '+') {
                // #@#+
                return createResult(i, CosmeticRuleSeparator.UboScriptletInjectionException);
              }
              if (rule[i + 3] === '^') {
                // #@#^
                return createResult(i, CosmeticRuleSeparator.UboHtmlFilteringException);
              }
              if (rule[i - 1] !== SPACE) {
                // #@#
                return createResult(i, CosmeticRuleSeparator.ElementHidingException);
              }
            }
            if (rule[i + 2] === '?' && rule[i + 3] === '#') {
              // #@?#
              return createResult(i, CosmeticRuleSeparator.ExtendedElementHidingException);
            }
            if (rule[i + 2] === '%' && rule[i + 3] === '#') {
              // #@%#
              return createResult(i, CosmeticRuleSeparator.AdgJsInjectionException);
            }
            if (rule[i + 2] === '$') {
              if (rule[i + 3] === '#') {
                // #@$#
                return createResult(i, CosmeticRuleSeparator.AdgCssInjectionException);
              }
              if (rule[i + 3] === '?' && rule[i + 4] === '#') {
                // #@$?#
                return createResult(i, CosmeticRuleSeparator.AdgExtendedCssInjectionException);
              }
            }
          }
        }
        if (rule[i] === '$') {
          if (rule[i + 1] === '$') {
            // $$
            return createResult(i, CosmeticRuleSeparator.AdgHtmlFiltering);
          }
          if (rule[i + 1] === '@' && rule[i + 2] === '$') {
            // $@$
            return createResult(i, CosmeticRuleSeparator.AdgHtmlFilteringException);
          }
        }
      }
      return null;
    }
  }]);
  return CosmeticRuleSeparatorUtils;
}();
/**
 * `AgentParser` is responsible for parsing an Adblock agent rules.
 * Adblock agent comment marks that the filter list is supposed to
 * be used by the specified ad blockers.
 *
 * @example
 *  - ```adblock
 *    [AdGuard]
 *    ```
 *  - ```adblock
 *    [Adblock Plus 2.0]
 *    ```
 *  - ```adblock
 *    [uBlock Origin]
 *    ```
 *  - ```adblock
 *    [uBlock Origin 1.45.3]
 *    ```
 *  - ```adblock
 *    [Adblock Plus 2.0; AdGuard]
 *    ```
 */
var AgentCommentRuleParser = /*#__PURE__*/function () {
  function AgentCommentRuleParser() {
    _classCallCheck(this, AgentCommentRuleParser);
  }
  _createClass(AgentCommentRuleParser, null, [{
    key: "isAgentRule",
    value:
    /**
     * Checks if the raw rule is an adblock agent comment.
     *
     * @param raw Raw rule
     * @returns `true` if the rule is an adblock agent, `false` otherwise
     */
    function isAgentRule(raw) {
      var rawTrimmed = raw.trim();
      if (rawTrimmed.startsWith(OPEN_SQUARE_BRACKET) && rawTrimmed.endsWith(CLOSE_SQUARE_BRACKET)) {
        // Avoid this case: [$adg-modifier]##[class^="adg-"]
        return CosmeticRuleSeparatorUtils.find(rawTrimmed) === null;
      }
      return false;
    }
    /**
     * Parses a raw rule as an adblock agent comment.
     *
     * @param raw Raw rule
     * @param loc Base location
     * @returns Agent rule AST or null (if the raw rule cannot be parsed as an adblock agent comment)
     */
  }, {
    key: "parse",
    value: function parse(raw) {
      var loc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultLocation;
      // Ignore non-agent rules
      if (!AgentCommentRuleParser.isAgentRule(raw)) {
        return null;
      }
      var offset = 0;
      // Skip whitespace characters before the rule
      offset = StringUtils.skipWS(raw, offset);
      // Skip opening bracket
      offset += 1;
      var closingBracketIndex = raw.lastIndexOf(CLOSE_SQUARE_BRACKET);
      // Initialize the agent list
      var agents = [];
      while (offset < closingBracketIndex) {
        // Skip whitespace characters before the agent
        offset = StringUtils.skipWS(raw, offset);
        // Find the separator or the closing bracket
        var separatorIndex = raw.indexOf(SEMICOLON, offset);
        if (separatorIndex === -1) {
          separatorIndex = closingBracketIndex;
        }
        // Find the last non-whitespace character of the agent
        var agentEndIndex = StringUtils.findLastNonWhitespaceCharacter(raw.substring(offset, separatorIndex)) + offset + 1;
        var agent = AgentParser.parse(raw.substring(offset, agentEndIndex), shiftLoc(loc, offset));
        // Collect the agent
        agents.push(agent);
        // Set the offset to the next agent or the end of the rule
        offset = separatorIndex + 1;
      }
      if (agents.length === 0) {
        throw new AdblockSyntaxError('Empty agent list', locRange(loc, 0, raw.length));
      }
      return {
        type: CommentRuleType.AgentCommentRule,
        loc: locRange(loc, 0, raw.length),
        raws: {
          text: raw
        },
        syntax: AdblockSyntax.Common,
        category: RuleCategory.Comment,
        children: agents
      };
    }
    /**
     * Converts an adblock agent AST to a string.
     *
     * @param ast Agent rule AST
     * @returns Raw string
     */
  }, {
    key: "generate",
    value: function generate(ast) {
      var result = OPEN_SQUARE_BRACKET;
      result += ast.children.map(AgentParser.generate).join(SEMICOLON + SPACE);
      result += CLOSE_SQUARE_BRACKET;
      return result;
    }
  }]);
  return AgentCommentRuleParser;
}();
var ParameterListParser = /*#__PURE__*/function () {
  function ParameterListParser() {
    _classCallCheck(this, ParameterListParser);
  }
  _createClass(ParameterListParser, null, [{
    key: "parse",
    value:
    /**
     * Parses a raw parameter list.
     *
     * @param raw Raw parameter list
     * @param separator Separator character (default: comma)
     * @param loc Base location
     * @returns Parameter list AST
     */
    function parse(raw) {
      var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : COMMA;
      var loc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultLocation;
      // Prepare the parameter list node
      var params = {
        type: 'ParameterList',
        loc: locRange(loc, 0, raw.length),
        children: []
      };
      var offset = 0;
      // Skip leading whitespace (if any)
      offset = StringUtils.skipWS(raw, offset);
      // Parse parameters: skip whitespace before and after each parameter, and
      // split parameters by the separator character.
      while (offset < raw.length) {
        // Skip whitespace before parameter
        offset = StringUtils.skipWS(raw, offset);
        // Get parameter start position
        var paramStart = offset;
        // Get next unescaped separator position
        var nextSeparator = StringUtils.findUnescapedNonStringNonRegexChar(raw, separator, offset);
        // Get parameter end position
        var paramEnd = nextSeparator !== -1 ? StringUtils.skipWSBack(raw, nextSeparator - 1) : StringUtils.skipWSBack(raw);
        // Add parameter to the list
        params.children.push({
          type: 'Parameter',
          loc: locRange(loc, paramStart, paramEnd + 1),
          value: raw.substring(paramStart, paramEnd + 1)
        });
        // Set offset to the next separator position + 1
        offset = nextSeparator !== -1 ? nextSeparator + 1 : raw.length;
      }
      return params;
    }
    /**
     * Converts a parameter list AST to a string.
     *
     * @param params Parameter list AST
     * @param separator Separator character (default: comma)
     * @returns String representation of the parameter list
     */
  }, {
    key: "generate",
    value: function generate(params) {
      var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : COMMA;
      // Join parameters with the separator character and a space
      return params.children.map(function (param) {
        return param.value;
      }).join(
      // If the separator is a space, do not add an extra space
      separator === SPACE ? separator : separator + SPACE);
    }
  }]);
  return ParameterListParser;
}();
/**
 * @file AGLint configuration comments. Inspired by ESLint inline configuration comments.
 * @see {@link https://eslint.org/docs/latest/user-guide/configuring/rules#using-configuration-comments}
 */
/**
 * `ConfigCommentParser` is responsible for parsing inline AGLint configuration rules.
 * Generally, the idea is inspired by ESLint inline configuration comments.
 *
 * @see {@link https://eslint.org/docs/latest/user-guide/configuring/rules#using-configuration-comments}
 */
var ConfigCommentRuleParser = /*#__PURE__*/function () {
  function ConfigCommentRuleParser() {
    _classCallCheck(this, ConfigCommentRuleParser);
  }
  _createClass(ConfigCommentRuleParser, null, [{
    key: "isConfigComment",
    value:
    /**
     * Checks if the raw rule is an inline configuration comment rule.
     *
     * @param raw Raw rule
     * @returns `true` if the rule is an inline configuration comment rule, otherwise `false`.
     */
    function isConfigComment(raw) {
      var trimmed = raw.trim();
      if (trimmed[0] === CommentMarker.Regular || trimmed[0] === CommentMarker.Hashmark) {
        // Skip comment marker and trim comment text (it is necessary because of "!     something")
        var text = raw.slice(1).trim();
        // The code below is "not pretty", but it runs fast, which is necessary, since it will run on EVERY comment
        // The essence of the indicator is that the control comment always starts with the "aglint" prefix
        return (text[0] === 'a' || text[0] === 'A') && (text[1] === 'g' || text[1] === 'G') && (text[2] === 'l' || text[2] === 'L') && (text[3] === 'i' || text[3] === 'I') && (text[4] === 'n' || text[4] === 'N') && (text[5] === 't' || text[5] === 'T');
      }
      return false;
    }
    /**
     * Parses a raw rule as an inline configuration comment.
     *
     * @param raw Raw rule
     * @param loc Base location
     * @returns
     * Inline configuration comment AST or null (if the raw rule cannot be parsed as configuration comment)
     */
  }, {
    key: "parse",
    value: function parse(raw) {
      var loc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultLocation;
      if (!ConfigCommentRuleParser.isConfigComment(raw)) {
        return null;
      }
      var offset = 0;
      // Skip leading whitespace (if any)
      offset = StringUtils.skipWS(raw, offset);
      // Get comment marker
      var marker = {
        type: 'Value',
        loc: locRange(loc, offset, offset + 1),
        value: raw[offset] === CommentMarker.Hashmark ? CommentMarker.Hashmark : CommentMarker.Regular
      };
      // Skip marker
      offset += 1;
      // Skip whitespace (if any)
      offset = StringUtils.skipWS(raw, offset);
      // Save the command start position
      var commandStart = offset;
      // Get comment text, for example: "aglint-disable-next-line"
      offset = StringUtils.findNextWhitespaceCharacter(raw, offset);
      var command = {
        type: 'Value',
        loc: locRange(loc, commandStart, offset),
        value: raw.substring(commandStart, offset)
      };
      // Skip whitespace after command
      offset = StringUtils.skipWS(raw, offset);
      // Get comment (if any)
      var commentStart = raw.indexOf(AGLINT_CONFIG_COMMENT_MARKER, offset);
      var commentEnd = commentStart !== -1 ? StringUtils.skipWSBack(raw) + 1 : -1;
      var comment;
      // Check if there is a comment
      if (commentStart !== -1) {
        comment = {
          type: 'Value',
          loc: locRange(loc, commentStart, commentEnd),
          value: raw.substring(commentStart, commentEnd)
        };
      }
      // Get parameter
      var paramsStart = offset;
      var paramsEnd = commentStart !== -1 ? StringUtils.skipWSBack(raw, commentStart - 1) + 1 : StringUtils.skipWSBack(raw) + 1;
      var params;
      // ! aglint config
      if (command.value === AGLINT_COMMAND_PREFIX) {
        params = {
          type: 'Value',
          loc: locRange(loc, paramsStart, paramsEnd),
          // It is necessary to use JSON5.parse instead of JSON.parse
          // because JSON5 allows unquoted keys.
          // But don't forget to add { } to the beginning and end of the string,
          // otherwise JSON5 will not be able to parse it.
          // TODO: Better solution? ESLint uses "levn" package for parsing these comments.
          value: JSON5.parse("{".concat(raw.substring(paramsStart, paramsEnd), "}"))
        };
        // Throw error for empty config
        if (Object.keys(params.value).length === 0) {
          throw new Error('Empty AGLint config');
        }
      } else if (paramsStart < paramsEnd) {
        params = ParameterListParser.parse(raw.substring(paramsStart, paramsEnd), COMMA, shiftLoc(loc, paramsStart));
      }
      return {
        type: CommentRuleType.ConfigCommentRule,
        loc: locRange(loc, 0, raw.length),
        raws: {
          text: raw
        },
        category: RuleCategory.Comment,
        syntax: AdblockSyntax.Common,
        marker: marker,
        command: command,
        params: params,
        comment: comment
      };
    }
    /**
     * Converts an inline configuration comment AST to a string.
     *
     * @param ast Inline configuration comment AST
     * @returns Raw string
     */
  }, {
    key: "generate",
    value: function generate(ast) {
      var result = EMPTY;
      result += ast.marker.value;
      result += SPACE;
      result += ast.command.value;
      if (ast.params) {
        result += SPACE;
        if (ast.params.type === 'ParameterList') {
          result += ParameterListParser.generate(ast.params, COMMA);
        } else {
          // Trim JSON boundaries
          result += JSON.stringify(ast.params.value).slice(1, -1).trim();
        }
      }
      // Add comment within the config comment
      if (ast.comment) {
        result += SPACE;
        result += ast.comment.value;
      }
      return result;
    }
  }]);
  return ConfigCommentRuleParser;
}();
/**
 * @file AdGuard Hints
 * @see {@link https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#hints}
 */
/**
 * `HintParser` is responsible for parsing AdGuard hints.
 *
 * @example
 * If the hint rule is
 * ```adblock
 * !+ NOT_OPTIMIZED PLATFORM(windows)
 * ```
 * then the hints are `NOT_OPTIMIZED` and `PLATFORM(windows)`, and this
 * class is responsible for parsing them. The rule itself is parsed by
 * the `HintRuleParser`, which uses this class to parse single hints.
 */
var HintParser = /*#__PURE__*/function () {
  function HintParser() {
    _classCallCheck(this, HintParser);
  }
  _createClass(HintParser, null, [{
    key: "parse",
    value:
    /**
     * Parses a raw rule as a hint.
     *
     * @param raw Raw rule
     * @param loc Base location
     * @returns Hint rule AST or null
     * @throws If the syntax is invalid
     */
    function parse(raw) {
      var loc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultLocation;
      var offset = 0;
      // Skip whitespace characters before the hint
      offset = StringUtils.skipWS(raw);
      // Hint should start with the hint name in every case
      // Save the start offset of the hint name
      var nameStartIndex = offset;
      // Parse the hint name
      for (; offset < raw.length; offset += 1) {
        var _char9 = raw[offset];
        // Abort consuming the hint name if we encounter a whitespace character
        // or an opening parenthesis, which means 'HIT_NAME(' case
        if (_char9 === OPEN_PARENTHESIS || _char9 === SPACE) {
          break;
        }
        // Hint name should only contain letters, digits, and underscores
        if (!StringUtils.isAlphaNumeric(_char9) && _char9 !== UNDERSCORE) {
          // eslint-disable-next-line max-len
          throw new AdblockSyntaxError("Invalid character \"".concat(_char9, "\" in hint name: \"").concat(_char9, "\""), locRange(loc, nameStartIndex, offset));
        }
      }
      // Save the end offset of the hint name
      var nameEndIndex = offset;
      // Save the hint name token
      var name = raw.substring(nameStartIndex, nameEndIndex);
      // Hint name cannot be empty
      if (name === EMPTY) {
        throw new AdblockSyntaxError('Empty hint name', locRange(loc, 0, nameEndIndex));
      }
      // Now we have two case:
      //  1. We have HINT_NAME and should return it
      //  2. We have HINT_NAME(PARAMS) and should continue parsing
      // Skip whitespace characters after the hint name
      offset = StringUtils.skipWS(raw, offset);
      // Throw error for 'HINT_NAME (' case
      if (offset > nameEndIndex && raw[offset] === OPEN_PARENTHESIS) {
        throw new AdblockSyntaxError(
        // eslint-disable-next-line max-len
        'Unexpected whitespace(s) between hint name and opening parenthesis', locRange(loc, nameEndIndex, offset));
      }
      // Create the hint name node (we can reuse it in the 'HINT_NAME' case, if needed)
      var nameNode = {
        type: 'Value',
        loc: locRange(loc, nameStartIndex, nameEndIndex),
        value: name
      };
      // Just return the hint name if we have 'HINT_NAME' case (no params)
      if (raw[offset] !== OPEN_PARENTHESIS) {
        return {
          type: 'Hint',
          loc: locRange(loc, 0, offset),
          name: nameNode
        };
      }
      // Skip the opening parenthesis
      offset += 1;
      // Find closing parenthesis
      var closeParenthesisIndex = raw.lastIndexOf(CLOSE_PARENTHESIS);
      // Throw error if we don't have closing parenthesis
      if (closeParenthesisIndex === -1) {
        throw new AdblockSyntaxError("Missing closing parenthesis for hint \"".concat(name, "\""), locRange(loc, nameStartIndex, raw.length));
      }
      // Save the start and end index of the params
      var paramsStartIndex = offset;
      var paramsEndIndex = closeParenthesisIndex;
      // Parse the params
      var params = ParameterListParser.parse(raw.substring(paramsStartIndex, paramsEndIndex), COMMA, shiftLoc(loc, paramsStartIndex));
      offset = closeParenthesisIndex + 1;
      // Skip whitespace characters after the closing parenthesis
      offset = StringUtils.skipWS(raw, offset);
      // Throw error if we don't reach the end of the input
      if (offset !== raw.length) {
        throw new AdblockSyntaxError( // eslint-disable-next-line max-len
        "Unexpected input after closing parenthesis for hint \"".concat(name, "\": \"").concat(raw.substring(closeParenthesisIndex + 1, offset + 1), "\""), locRange(loc, closeParenthesisIndex + 1, offset + 1));
      }
      // Return the HINT_NAME(PARAMS) case AST
      return {
        type: 'Hint',
        loc: locRange(loc, 0, offset),
        name: nameNode,
        params: params
      };
    }
    /**
     * Converts a single hint AST to a string.
     *
     * @param hint Hint AST
     * @returns Hint string
     */
  }, {
    key: "generate",
    value: function generate(hint) {
      var result = EMPTY;
      result += hint.name.value;
      if (hint.params && hint.params.children.length > 0) {
        result += OPEN_PARENTHESIS;
        result += ParameterListParser.generate(hint.params, COMMA);
        result += CLOSE_PARENTHESIS;
      }
      return result;
    }
  }]);
  return HintParser;
}();
/**
 * `HintRuleParser` is responsible for parsing AdGuard hint rules.
 *
 * @example
 * The following hint rule
 * ```adblock
 * !+ NOT_OPTIMIZED PLATFORM(windows)
 * ```
 * contains two hints: `NOT_OPTIMIZED` and `PLATFORM`.
 * @see {@link https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#hints}
 */
var HintCommentRuleParser = /*#__PURE__*/function () {
  function HintCommentRuleParser() {
    _classCallCheck(this, HintCommentRuleParser);
  }
  _createClass(HintCommentRuleParser, null, [{
    key: "isHintRule",
    value:
    /**
     * Checks if the raw rule is a hint rule.
     *
     * @param raw Raw rule
     * @returns `true` if the rule is a hint rule, `false` otherwise
     */
    function isHintRule(raw) {
      return raw.trim().startsWith(HINT_MARKER);
    }
    /**
     * Parses a raw rule as a hint comment.
     *
     * @param raw Raw rule
     * @param loc Base location
     * @returns Hint AST or null (if the raw rule cannot be parsed as a hint comment)
     * @throws If the input matches the HINT pattern but syntactically invalid
     * @see {@link https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#hints-1}
     */
  }, {
    key: "parse",
    value: function parse(raw) {
      var loc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultLocation;
      // Ignore non-hint rules
      if (!HintCommentRuleParser.isHintRule(raw)) {
        return null;
      }
      var offset = 0;
      // Skip whitespace characters before the rule
      offset = StringUtils.skipWS(raw);
      // Skip hint marker
      offset += HINT_MARKER_LEN;
      var hints = [];
      // Collect hints. Each hint is a string, optionally followed by a parameter list,
      // enclosed in parentheses. One rule can contain multiple hints.
      while (offset < raw.length) {
        // Split rule into raw hints (e.g. 'HINT_NAME' or 'HINT_NAME(PARAMS)')
        // Hints are separated by whitespace characters, but we should ignore
        // whitespace characters inside the parameter list
        // Ignore whitespace characters before the hint
        offset = StringUtils.skipWS(raw, offset);
        // Save the start index of the hint
        var hintStartIndex = offset;
        // Find the end of the hint
        var hintEndIndex = offset;
        var balance = 0;
        while (hintEndIndex < raw.length) {
          if (raw[hintEndIndex] === OPEN_PARENTHESIS && raw[hintEndIndex - 1] !== BACKSLASH) {
            balance += 1;
            // Throw error for nesting
            if (balance > 1) {
              throw new AdblockSyntaxError('Invalid hint: nested parentheses are not allowed', locRange(loc, hintStartIndex, hintEndIndex));
            }
          } else if (raw[hintEndIndex] === CLOSE_PARENTHESIS && raw[hintEndIndex - 1] !== BACKSLASH) {
            balance -= 1;
          } else if (StringUtils.isWhitespace(raw[hintEndIndex]) && balance === 0) {
            break;
          }
          hintEndIndex += 1;
        }
        offset = hintEndIndex;
        // Skip whitespace characters after the hint
        offset = StringUtils.skipWS(raw, offset);
        // Parse the hint
        var hint = HintParser.parse(raw.substring(hintStartIndex, hintEndIndex), shiftLoc(loc, hintStartIndex));
        hints.push(hint);
      }
      // Throw error if no hints were found
      if (hints.length === 0) {
        throw new AdblockSyntaxError('Empty hint rule', locRange(loc, 0, offset));
      }
      return {
        type: CommentRuleType.HintCommentRule,
        loc: locRange(loc, 0, offset),
        raws: {
          text: raw
        },
        category: RuleCategory.Comment,
        syntax: AdblockSyntax.Adg,
        children: hints
      };
    }
    /**
     * Converts a hint rule AST to a raw string.
     *
     * @param ast Hint rule AST
     * @returns Raw string
     */
  }, {
    key: "generate",
    value: function generate(ast) {
      var result = HINT_MARKER + SPACE;
      result += ast.children.map(HintParser.generate).join(SPACE);
      return result;
    }
  }]);
  return HintCommentRuleParser;
}();
/**
 * Known metadata headers
 */
var METADATA_HEADERS = ['Checksum', 'Description', 'Expires', 'Homepage', 'Last Modified', 'Last modified', 'Licence', 'License', 'TimeUpdated', 'Version', 'Title'];

/**
 * @file Metadata comments
 */
/**
 * `MetadataParser` is responsible for parsing metadata comments.
 * Metadata comments are special comments that specify some properties of the list.
 *
 * @example
 * For example, in the case of
 * ```adblock
 * ! Title: My List
 * ```
 * the name of the header is `Title`, and the value is `My List`, which means that
 * the list title is `My List`, and it can be used in the adblocker UI.
 * @see {@link https://help.eyeo.com/adblockplus/how-to-write-filters#special-comments}
 */
var MetadataCommentRuleParser = /*#__PURE__*/function () {
  function MetadataCommentRuleParser() {
    _classCallCheck(this, MetadataCommentRuleParser);
  }
  _createClass(MetadataCommentRuleParser, null, [{
    key: "parse",
    value:
    /**
     * Parses a raw rule as a metadata comment.
     *
     * @param raw Raw rule
     * @param loc Base location
     * @returns Metadata comment AST or null (if the raw rule cannot be parsed as a metadata comment)
     */
    function parse(raw) {
      var loc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultLocation;
      // Fast check to avoid unnecessary work
      if (raw.indexOf(COLON) === -1) {
        return null;
      }
      var offset = 0;
      // Skip leading spaces before the comment marker
      offset = StringUtils.skipWS(raw, offset);
      // Check if the rule starts with a comment marker (first non-space sequence)
      if (raw[offset] !== CommentMarker.Regular && raw[offset] !== CommentMarker.Hashmark) {
        return null;
      }
      // Consume the comment marker
      var marker = {
        type: 'Value',
        loc: locRange(loc, offset, offset + 1),
        value: raw[offset] === CommentMarker.Hashmark ? CommentMarker.Hashmark : CommentMarker.Regular
      };
      offset += 1;
      // Skip spaces
      offset = StringUtils.skipWS(raw, offset);
      // Save header start position
      var headerStart = offset;
      // Check if the comment text starts with a known header
      var text = raw.slice(offset);
      for (var i = 0; i < METADATA_HEADERS.length; i += 1) {
        // Check if the comment text starts with the header (case-insensitive)
        if (text.toLocaleLowerCase().startsWith(METADATA_HEADERS[i].toLocaleLowerCase())) {
          // Skip the header
          offset += METADATA_HEADERS[i].length;
          // Save header
          var header = {
            type: 'Value',
            loc: locRange(loc, headerStart, offset),
            value: raw.slice(headerStart, offset)
          };
          // Skip spaces after the header
          offset = StringUtils.skipWS(raw, offset);
          // Check if the rule contains a separator after the header
          if (raw[offset] !== COLON) {
            return null;
          }
          // Skip the separator
          offset += 1;
          // Skip spaces after the separator
          offset = StringUtils.skipWS(raw, offset);
          // Save the value start position
          var valueStart = offset;
          // Check if the rule contains a value
          if (offset >= raw.length) {
            return null;
          }
          var valueEnd = StringUtils.skipWSBack(raw, raw.length - 1) + 1;
          // Save the value
          var value = {
            type: 'Value',
            loc: locRange(loc, valueStart, valueEnd),
            value: raw.substring(valueStart, valueEnd)
          };
          return {
            type: CommentRuleType.MetadataCommentRule,
            loc: locRange(loc, 0, raw.length),
            raws: {
              text: raw
            },
            category: RuleCategory.Comment,
            syntax: AdblockSyntax.Common,
            marker: marker,
            header: header,
            value: value
          };
        }
      }
      return null;
    }
    /**
     * Converts a metadata comment AST to a string.
     *
     * @param ast - Metadata comment AST
     * @returns Raw string
     */
  }, {
    key: "generate",
    value: function generate(ast) {
      var result = EMPTY;
      result += ast.marker.value;
      result += SPACE;
      result += ast.header.value;
      result += COLON;
      result += SPACE;
      result += ast.value.value;
      return result;
    }
  }]);
  return MetadataCommentRuleParser;
}();
var OPERATOR_PRECEDENCE = {
  '!': 3,
  '&&': 2,
  '||': 1
};
/**
 * `LogicalExpressionParser` is responsible for parsing logical expressions.
 *
 * @example
 * From the following rule:
 * ```adblock
 * !#if (adguard_ext_android_cb || adguard_ext_safari)
 * ```
 * this parser will parse the expression `(adguard_ext_android_cb || adguard_ext_safari)`.
 */
var LogicalExpressionParser = /*#__PURE__*/function () {
  function LogicalExpressionParser() {
    _classCallCheck(this, LogicalExpressionParser);
  }
  _createClass(LogicalExpressionParser, null, [{
    key: "tokenize",
    value:
    /**
     * Split the expression into tokens.
     *
     * @param raw Source code of the expression
     * @param loc Location of the expression
     * @returns Token list
     * @throws {AdblockSyntaxError} If the expression is invalid
     */
    function tokenize(raw) {
      var loc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultLocation;
      var tokens = [];
      var offset = 0;
      while (offset < raw.length) {
        var _char10 = raw[offset];
        if (StringUtils.isWhitespace(_char10)) {
          // Ignore whitespace
          offset += 1;
        } else if (StringUtils.isLetter(_char10)) {
          // Consume variable name
          var name = _char10;
          // Save the start offset of the variable name
          var nameStart = offset;
          // Variable name shouldn't start with a number or underscore,
          // but can contain them
          while (offset + 1 < raw.length && (StringUtils.isAlphaNumeric(raw[offset + 1]) || raw[offset + 1] === UNDERSCORE)) {
            offset += 1;
            name += raw[offset];
          }
          tokens.push({
            type: 'Variable',
            value: name,
            loc: locRange(loc, nameStart, offset + 1)
          });
          offset += 1;
        } else if (_char10 === OPEN_PARENTHESIS || _char10 === CLOSE_PARENTHESIS) {
          // Parenthesis
          tokens.push({
            type: 'Parenthesis',
            value: _char10,
            loc: locRange(loc, offset, offset + 1)
          });
          offset += 1;
        } else if (_char10 === AMPERSAND || _char10 === PIPE) {
          // Parse operator
          if (offset + 1 < raw.length && raw[offset + 1] === _char10) {
            tokens.push({
              type: 'Operator',
              value: _char10 + _char10,
              loc: locRange(loc, offset, offset + 2)
            });
            offset += 2;
          } else {
            throw new AdblockSyntaxError("Unexpected character \"".concat(_char10, "\""), locRange(loc, offset, offset + 1));
          }
        } else if (_char10 === EXCLAMATION_MARK) {
          tokens.push({
            type: 'Operator',
            value: _char10,
            loc: locRange(loc, offset, offset + 1)
          });
          offset += 1;
        } else {
          throw new AdblockSyntaxError("Unexpected character \"".concat(_char10, "\""), locRange(loc, offset, offset + 1));
        }
      }
      return tokens;
    }
    /**
     * Parses a logical expression.
     *
     * @param raw Source code of the expression
     * @param loc Location of the expression
     * @returns Parsed expression
     * @throws {AdblockSyntaxError} If the expression is invalid
     */
  }, {
    key: "parse",
    value: function parse(raw) {
      var loc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultLocation;
      // Tokenize the source (produces an array of tokens)
      var tokens = LogicalExpressionParser.tokenize(raw, loc);
      // Current token index
      var tokenIndex = 0;
      /**
       * Consumes a token of the expected type.
       *
       * @param type Expected token type
       * @returns The consumed token
       */
      function consume(type) {
        var token = tokens[tokenIndex];
        if (!token) {
          throw new AdblockSyntaxError("Expected token of type \"".concat(type, "\", but reached end of input"), locRange(loc, 0, raw.length));
        }
        // We only use this function internally, so we can safely ignore this
        // from the coverage report
        // istanbul ignore next
        if (token.type !== type) {
          throw new AdblockSyntaxError("Expected token of type \"".concat(type, "\", but got \"").concat(token.type, "\""),
          // Token location is always shifted, no need locRange
          {
            start: token.loc.start,
            end: token.loc.end
          });
        }
        tokenIndex += 1;
        return token;
      }
      /**
       * Parses a variable.
       *
       * @returns Variable node
       */
      function parseVariable() {
        var token = consume('Variable');
        return {
          type: 'Variable',
          // Token location is always shifted, no need locRange
          loc: token.loc,
          name: token.value
        };
      }
      /**
       * Parses a binary expression.
       *
       * @param left Left-hand side of the expression
       * @param minPrecedence Minimum precedence of the operator
       * @returns Binary expression node
       */
      function parseBinaryExpression(left) {
        var minPrecedence = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var node = left;
        var operatorToken;
        while (tokens[tokenIndex]) {
          var _node$loc$start, _node$loc, _right$loc$end, _right$loc;
          operatorToken = tokens[tokenIndex];
          if (!operatorToken || operatorToken.type !== 'Operator') {
            break;
          }
          // It is safe to cast here, because we already checked the type
          var operator = operatorToken.value;
          var precedence = OPERATOR_PRECEDENCE[operator];
          if (precedence < minPrecedence) {
            break;
          }
          tokenIndex += 1;
          // eslint-disable-next-line @typescript-eslint/no-use-before-define
          var right = parseExpression(precedence + 1);
          node = {
            type: 'Operator',
            // Token location is always shifted, no need locRange
            loc: {
              start: (_node$loc$start = (_node$loc = node.loc) === null || _node$loc === void 0 ? void 0 : _node$loc.start) !== null && _node$loc$start !== void 0 ? _node$loc$start : operatorToken.loc.start,
              end: (_right$loc$end = (_right$loc = right.loc) === null || _right$loc === void 0 ? void 0 : _right$loc.end) !== null && _right$loc$end !== void 0 ? _right$loc$end : operatorToken.loc.end
            },
            operator: operator,
            left: node,
            right: right
          };
        }
        return node;
      }
      /**
       * Parses a parenthesized expression.
       *
       * @returns Parenthesized expression node
       */
      function parseParenthesizedExpression() {
        consume('Parenthesis');
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        var expression = parseExpression();
        consume('Parenthesis');
        return {
          type: 'Parenthesis',
          loc: expression.loc,
          expression: expression
        };
      }
      /**
       * Parses an expression.
       *
       * @param minPrecedence Minimum precedence of the operator
       * @returns Expression node
       */
      function parseExpression() {
        var minPrecedence = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var node;
        var token = tokens[tokenIndex];
        if (token.type === 'Variable') {
          node = parseVariable();
        } else if (token.type === 'Operator' && token.value === '!') {
          var _expression$loc$end, _expression$loc;
          tokenIndex += 1;
          var _expression = parseExpression(OPERATOR_PRECEDENCE['!']);
          node = {
            type: 'Operator',
            // Token location is always shifted, no need locRange
            loc: {
              start: token.loc.start,
              end: (_expression$loc$end = (_expression$loc = _expression.loc) === null || _expression$loc === void 0 ? void 0 : _expression$loc.end) !== null && _expression$loc$end !== void 0 ? _expression$loc$end : token.loc.end
            },
            operator: '!',
            left: _expression
          };
        } else if (token.type === 'Parenthesis' && token.value === OPEN_PARENTHESIS) {
          node = parseParenthesizedExpression();
        } else {
          throw new AdblockSyntaxError("Unexpected token \"".concat(token.value, "\""),
          // Token location is always shifted, no need locRange
          {
            start: token.loc.start,
            end: token.loc.end
          });
        }
        return parseBinaryExpression(node, minPrecedence);
      }
      var expression = parseExpression();
      if (tokenIndex !== tokens.length) {
        throw new AdblockSyntaxError("Unexpected token \"".concat(tokens[tokenIndex].value, "\""),
        // Token location is always shifted, no need locRange
        {
          start: tokens[tokenIndex].loc.start,
          end: tokens[tokenIndex].loc.end
        });
      }
      return expression;
    }
    /**
     * Generates a string representation of the logical expression (serialization).
     *
     * @param ast Expression node
     * @returns String representation of the logical expression
     */
  }, {
    key: "generate",
    value: function generate(ast) {
      if (ast.type === 'Variable') {
        return ast.name;
      }
      if (ast.type === 'Operator') {
        var left = LogicalExpressionParser.generate(ast.left);
        var right = ast.right ? LogicalExpressionParser.generate(ast.right) : undefined;
        var operator = ast.operator;
        if (operator === '!') {
          return "".concat(operator).concat(left);
        }
        var leftString = operator === '||' ? "".concat(left) : left;
        var rightString = operator === '||' ? "".concat(right) : right;
        return "".concat(leftString, " ").concat(operator, " ").concat(rightString);
      }
      if (ast.type === 'Parenthesis') {
        var expressionString = LogicalExpressionParser.generate(ast.expression);
        return "(".concat(expressionString, ")");
      }
      // Theoretically, this shouldn't happen if the library is used correctly
      throw new Error('Unexpected node type');
    }
  }]);
  return LogicalExpressionParser;
}();
/**
 * Pre-processor directives
 *
 * @see {@link https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#pre-processor-directives}
 * @see {@link https://github.com/gorhill/uBlock/wiki/Static-filter-syntax#pre-parsing-directives}
 */
/**
 * `PreProcessorParser` is responsible for parsing preprocessor rules.
 * Pre-processor comments are special comments that are used to control the behavior of the filter list processor.
 * Please note that this parser only handles general syntax for now, and does not validate the parameters at
 * the parsing stage.
 *
 * @example
 * If your rule is
 * ```adblock
 * !#if (adguard)
 * ```
 * then the directive's name is `if` and its value is `(adguard)`, but the parameter list
 * is not parsed / validated further.
 * @see {@link https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#pre-processor-directives}
 * @see {@link https://github.com/gorhill/uBlock/wiki/Static-filter-syntax#pre-parsing-directives}
 */
var PreProcessorCommentRuleParser = /*#__PURE__*/function () {
  function PreProcessorCommentRuleParser() {
    _classCallCheck(this, PreProcessorCommentRuleParser);
  }
  _createClass(PreProcessorCommentRuleParser, null, [{
    key: "isPreProcessorRule",
    value:
    /**
     * Determines whether the rule is a pre-processor rule.
     *
     * @param raw Raw rule
     * @returns `true` if the rule is a pre-processor rule, `false` otherwise
     */
    function isPreProcessorRule(raw) {
      var trimmed = raw.trim();
      // Avoid this case: !##... (commonly used in AdGuard filters)
      return trimmed.startsWith(PREPROCESSOR_MARKER) && trimmed[PREPROCESSOR_MARKER_LEN] !== HASHMARK;
    }
    /**
     * Parses a raw rule as a pre-processor comment.
     *
     * @param raw Raw rule
     * @param loc Base location
     * @returns
     * Pre-processor comment AST or null (if the raw rule cannot be parsed as a pre-processor comment)
     */
  }, {
    key: "parse",
    value: function parse(raw) {
      var loc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultLocation;
      // Ignore non-pre-processor rules
      if (!PreProcessorCommentRuleParser.isPreProcessorRule(raw)) {
        return null;
      }
      var offset = 0;
      // Ignore whitespace characters before the rule (if any)
      offset = StringUtils.skipWS(raw, offset);
      // Ignore the pre-processor marker
      offset += PREPROCESSOR_MARKER_LEN;
      // Ignore whitespace characters after the pre-processor marker (if any)
      // Note: this is incorrect according to the spec, but we do it for tolerance
      offset = StringUtils.skipWS(raw, offset);
      // Directive name should start at this offset, so we save this offset now
      var nameStart = offset;
      // Consume directive name, so parse the sequence until the first
      // whitespace / opening parenthesis / end of string
      while (offset < raw.length) {
        var ch = raw[offset];
        if (ch === PREPROCESSOR_SEPARATOR || ch === OPEN_PARENTHESIS) {
          break;
        }
        offset += 1;
      }
      // Save name end offset
      var nameEnd = offset;
      // Create name node
      var name = {
        type: 'Value',
        loc: locRange(loc, nameStart, nameEnd),
        value: raw.substring(nameStart, nameEnd)
      };
      // Ignore whitespace characters after the directive name (if any)
      // Note: this may incorrect according to the spec, but we do it for tolerance
      offset = StringUtils.skipWS(raw, offset);
      // If the directive name is "safari_cb_affinity", then we have a special case
      if (name.value === SAFARI_CB_AFFINITY) {
        // Throw error if there are spaces after the directive name
        if (offset > nameEnd) {
          throw new AdblockSyntaxError("Unexpected whitespace after \"".concat(SAFARI_CB_AFFINITY, "\" directive name"), locRange(loc, nameEnd, offset));
        }
        // safari_cb_affinity directive optionally accepts a parameter list
        // So at this point we should check if there are parameters or not
        // (cb_affinity directive followed by an opening parenthesis or if we
        // skip the whitespace we reach the end of the string)
        if (StringUtils.skipWS(raw, offset) !== raw.length) {
          if (raw[offset] !== OPEN_PARENTHESIS) {
            throw new AdblockSyntaxError("Unexpected character '".concat(raw[offset], "' after '").concat(SAFARI_CB_AFFINITY, "' directive name"), locRange(loc, offset, offset + 1));
          }
          // If we have parameters, then we should parse them
          // Note: we don't validate the parameters at this stage
          // Ignore opening parenthesis
          offset += 1;
          // Save parameter list start offset
          var parameterListStart = offset;
          // Check for closing parenthesis
          var closingParenthesesIndex = StringUtils.skipWSBack(raw);
          if (closingParenthesesIndex === -1 || raw[closingParenthesesIndex] !== CLOSE_PARENTHESIS) {
            throw new AdblockSyntaxError("Missing closing parenthesis for '".concat(SAFARI_CB_AFFINITY, "' directive"), locRange(loc, offset, raw.length));
          }
          // Save parameter list end offset
          var parameterListEnd = closingParenthesesIndex;
          // Parse parameters between the opening and closing parentheses
          return {
            type: CommentRuleType.PreProcessorCommentRule,
            loc: locRange(loc, 0, raw.length),
            raws: {
              text: raw
            },
            category: RuleCategory.Comment,
            syntax: AdblockSyntax.Adg,
            name: name,
            // comma separated list of parameters
            params: ParameterListParser.parse(raw.substring(parameterListStart, parameterListEnd), COMMA, shiftLoc(loc, parameterListStart))
          };
        }
      }
      // If we reached the end of the string, then we have a directive without parameters
      // (e.g. "!#safari_cb_affinity" or "!#endif")
      // No need to continue parsing in this case.
      if (offset === raw.length) {
        // Throw error if the directive name is "if" or "include", because these directives
        // should have parameters
        if (name.value === IF || name.value === INCLUDE) {
          throw new AdblockSyntaxError("Directive \"".concat(name.value, "\" requires parameters"), locRange(loc, 0, raw.length));
        }
        return {
          type: CommentRuleType.PreProcessorCommentRule,
          loc: locRange(loc, 0, raw.length),
          raws: {
            text: raw
          },
          category: RuleCategory.Comment,
          syntax: AdblockSyntax.Common,
          name: name
        };
      }
      // Get start and end offsets of the directive parameters
      var paramsStart = offset;
      var paramsEnd = StringUtils.skipWSBack(raw) + 1;
      // Prepare parameters node
      var params;
      // Parse parameters. Handle "if" and "safari_cb_affinity" directives
      // separately.
      if (name.value === IF) {
        params = LogicalExpressionParser.parse(raw.substring(paramsStart, paramsEnd), shiftLoc(loc, paramsStart));
      } else {
        params = {
          type: 'Value',
          loc: locRange(loc, paramsStart, paramsEnd),
          value: raw.substring(paramsStart, paramsEnd)
        };
      }
      return {
        type: CommentRuleType.PreProcessorCommentRule,
        loc: locRange(loc, 0, raw.length),
        raws: {
          text: raw
        },
        category: RuleCategory.Comment,
        syntax: AdblockSyntax.Common,
        name: name,
        params: params
      };
    }
    /**
     * Converts a pre-processor comment AST to a string.
     *
     * @param ast - Pre-processor comment AST
     * @returns Raw string
     */
  }, {
    key: "generate",
    value: function generate(ast) {
      var result = EMPTY;
      result += PREPROCESSOR_MARKER;
      result += ast.name.value;
      if (ast.params) {
        // Space is not allowed after "safari_cb_affinity" directive,
        // so we need to handle it separately.
        if (ast.name.value !== SAFARI_CB_AFFINITY) {
          result += SPACE;
        }
        if (ast.params.type === 'Value') {
          result += ast.params.value;
        } else if (ast.params.type === 'ParameterList') {
          result += OPEN_PARENTHESIS;
          result += ParameterListParser.generate(ast.params);
          result += CLOSE_PARENTHESIS;
        } else {
          result += LogicalExpressionParser.generate(ast.params);
        }
      }
      return result;
    }
  }]);
  return PreProcessorCommentRuleParser;
}();
/**
 * `CommentParser` is responsible for parsing any comment-like adblock rules.
 *
 * @example
 * Example rules:
 *  - Adblock agent rules:
 *      - ```adblock
 *        [AdGuard]
 *        ```
 *      - ```adblock
 *        [Adblock Plus 2.0]
 *        ```
 *      - etc.
 *  - AdGuard hint rules:
 *      - ```adblock
 *        !+ NOT_OPTIMIZED
 *        ```
 *      - ```adblock
 *        !+ NOT_OPTIMIZED PLATFORM(windows)
 *        ```
 *      - etc.
 *  - Pre-processor rules:
 *      - ```adblock
 *        !#if (adguard)
 *        ```
 *      - ```adblock
 *        !#endif
 *        ```
 *      - etc.
 *  - Metadata rules:
 *      - ```adblock
 *        ! Title: My List
 *        ```
 *      - ```adblock
 *        ! Version: 2.0.150
 *        ```
 *      - etc.
 *  - AGLint inline config rules:
 *      - ```adblock
 *        ! aglint-enable some-rule
 *        ```
 *      - ```adblock
 *        ! aglint-disable some-rule
 *        ```
 *      - etc.
 *  - Simple comments:
 *      - Regular version:
 *        ```adblock
 *        ! This is just a comment
 *        ```
 *      - uBlock Origin / "hostlist" version:
 *        ```adblock
 *        # This is just a comment
 *        ```
 *      - etc.
 */
var CommentRuleParser = /*#__PURE__*/function () {
  function CommentRuleParser() {
    _classCallCheck(this, CommentRuleParser);
  }
  _createClass(CommentRuleParser, null, [{
    key: "isRegularComment",
    value:
    /**
     * Checks whether a rule is a regular comment. Regular comments are the ones that start with
     * an exclamation mark (`!`).
     *
     * @param raw Raw rule
     * @returns `true` if the rule is a regular comment, `false` otherwise
     */
    function isRegularComment(raw) {
      // Source may start with a whitespace, so we need to trim it first
      return raw.trim().startsWith(CommentMarker.Regular);
    }
    /**
     * Checks whether a rule is a comment.
     *
     * @param raw Raw rule
     * @returns `true` if the rule is a comment, `false` otherwise
     */
  }, {
    key: "isCommentRule",
    value: function isCommentRule(raw) {
      var trimmed = raw.trim();
      // Regular comments
      if (CommentRuleParser.isRegularComment(trimmed)) {
        return true;
      }
      // Hashmark based comments
      if (trimmed.startsWith(CommentMarker.Hashmark)) {
        var result = CosmeticRuleSeparatorUtils.find(trimmed);
        // No separator
        if (result === null) {
          return true;
        }
        // Separator end index
        var end = result.end;
        // No valid selector
        if (!trimmed[end + 1] || StringUtils.isWhitespace(trimmed[end + 1]) || trimmed[end + 1] === CommentMarker.Hashmark && trimmed[end + 2] === CommentMarker.Hashmark) {
          return true;
        }
      }
      // Adblock agent comment rules
      return AgentCommentRuleParser.isAgentRule(trimmed);
    }
    /**
     * Parses a raw rule as comment.
     *
     * @param raw Raw rule
     * @param loc Base location
     * @returns Comment AST or null (if the raw rule cannot be parsed as comment)
     */
  }, {
    key: "parse",
    value: function parse(raw) {
      var loc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultLocation;
      // Ignore non-comment rules
      if (!CommentRuleParser.isCommentRule(raw)) {
        return null;
      }
      // First, try to parse as non-regular comment
      var nonRegular = AgentCommentRuleParser.parse(raw, loc) || HintCommentRuleParser.parse(raw, loc) || PreProcessorCommentRuleParser.parse(raw, loc) || MetadataCommentRuleParser.parse(raw, loc) || ConfigCommentRuleParser.parse(raw, loc);
      if (nonRegular) {
        return nonRegular;
      }
      // If we are here, it means that the rule is a regular comment
      var offset = 0;
      // Skip leading whitespace (if any)
      offset = StringUtils.skipWS(raw, offset);
      // Get comment marker
      var marker = {
        type: 'Value',
        loc: locRange(loc, offset, offset + 1),
        value: raw[offset] === CommentMarker.Hashmark ? CommentMarker.Hashmark : CommentMarker.Regular
      };
      // Skip marker
      offset += 1;
      // Get comment text
      var text = {
        type: 'Value',
        loc: locRange(loc, offset, raw.length),
        value: raw.slice(offset)
      };
      // Regular comment rule
      return {
        category: RuleCategory.Comment,
        type: CommentRuleType.CommentRule,
        loc: locRange(loc, 0, raw.length),
        raws: {
          text: raw
        },
        // TODO: Change syntax when hashmark is used?
        syntax: AdblockSyntax.Common,
        marker: marker,
        text: text
      };
    }
    /**
     * Converts a comment AST to a string.
     *
     * @param ast Comment AST
     * @returns Raw string
     */
  }, {
    key: "generate",
    value: function generate(ast) {
      var result = EMPTY;
      // Generate based on the rule type
      switch (ast.type) {
        case CommentRuleType.AgentCommentRule:
          return AgentCommentRuleParser.generate(ast);
        case CommentRuleType.HintCommentRule:
          return HintCommentRuleParser.generate(ast);
        case CommentRuleType.PreProcessorCommentRule:
          return PreProcessorCommentRuleParser.generate(ast);
        case CommentRuleType.MetadataCommentRule:
          return MetadataCommentRuleParser.generate(ast);
        case CommentRuleType.ConfigCommentRule:
          return ConfigCommentRuleParser.generate(ast);
        // Regular comment rule
        case CommentRuleType.CommentRule:
          result += ast.marker.value;
          result += ast.text.value;
          return result;
        default:
          throw new Error('Unknown comment rule type');
      }
    }
  }]);
  return CommentRuleParser;
}();
/**
 * `DomainListParser` is responsible for parsing a domain list.
 *
 * @example
 * - If the rule is `example.com,~example.net##.ads`, the domain list is `example.com,~example.net`.
 * - If the rule is `ads.js^$script,domains=example.com|~example.org`, the domain list is `example.com|~example.org`.
 * This parser is responsible for parsing these domain lists.
 * @see {@link https://help.eyeo.com/adblockplus/how-to-write-filters#elemhide_domains}
 */
var DomainListParser = /*#__PURE__*/function () {
  function DomainListParser() {
    _classCallCheck(this, DomainListParser);
  }
  _createClass(DomainListParser, null, [{
    key: "parse",
    value:
    /**
     * Parses a domain list, eg. `example.com,example.org,~example.org`
     *
     * @param raw Raw domain list
     * @param separator Separator character
     * @param loc Location of the domain list
     * @returns Domain list AST
     * @throws If the domain list is syntactically invalid
     */
    function parse(raw) {
      var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CLASSIC_DOMAIN_SEPARATOR;
      var loc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultLocation;
      var result = {
        type: DOMAIN_LIST_TYPE,
        loc: locRange(loc, 0, raw.length),
        separator: separator,
        children: []
      };
      // If the last character is a separator, then the domain list is invalid
      // and no need to continue parsing
      var realEndIndex = StringUtils.skipWSBack(raw);
      if (raw[realEndIndex] === separator) {
        throw new AdblockSyntaxError('Domain list cannot end with a separator', locRange(loc, realEndIndex, realEndIndex + 1));
      }
      var offset = 0;
      // Skip whitespace before the domain list
      offset = StringUtils.skipWS(raw, offset);
      // Split domains by unescaped separators
      while (offset < raw.length) {
        // Skip whitespace before the domain
        offset = StringUtils.skipWS(raw, offset);
        var domainStart = offset;
        // Find the index of the first unescaped separator character
        var separatorStartIndex = StringUtils.findNextUnescapedCharacter(raw, separator, offset);
        var domainEnd = separatorStartIndex === -1 ? StringUtils.skipWSBack(raw) + 1 : StringUtils.skipWSBack(raw, separatorStartIndex - 1) + 1;
        var exception = raw[domainStart] === DOMAIN_EXCEPTION_MARKER;
        // Skip the exception marker
        if (exception) {
          domainStart += 1;
          // Exception marker cannot be followed by another exception marker
          if (raw[domainStart] === DOMAIN_EXCEPTION_MARKER) {
            throw new AdblockSyntaxError('Exception marker cannot be followed by another exception marker', locRange(loc, domainStart, domainStart + 1));
          }
          // Exception marker cannot be followed by a separator
          if (raw[domainStart] === separator) {
            throw new AdblockSyntaxError('Exception marker cannot be followed by a separator', locRange(loc, domainStart, domainStart + 1));
          }
          // Exception marker cannot be followed by whitespace
          if (StringUtils.isWhitespace(raw[domainStart])) {
            throw new AdblockSyntaxError('Exception marker cannot be followed by whitespace', locRange(loc, domainStart, domainStart + 1));
          }
        }
        // Domain can't be empty
        if (domainStart === domainEnd) {
          throw new AdblockSyntaxError('Empty domain specified', locRange(loc, domainStart, raw.length));
        }
        // Add the domain to the result
        result.children.push({
          type: 'Domain',
          loc: locRange(loc, domainStart, domainEnd),
          value: raw.substring(domainStart, domainEnd),
          exception: exception
        });
        // Increment the offset to the next domain (or the end of the string)
        offset = separatorStartIndex === -1 ? raw.length : separatorStartIndex + 1;
      }
      return result;
    }
    /**
     * Converts a domain list AST to a string.
     *
     * @param ast Domain list AST
     * @returns Raw string
     */
  }, {
    key: "generate",
    value: function generate(ast) {
      var result = ast.children.map(function (_ref) {
        var value = _ref.value,
          exception = _ref.exception;
        var subresult = EMPTY;
        if (exception) {
          subresult += DOMAIN_EXCEPTION_MARKER;
        }
        subresult += value.trim();
        return subresult;
      }).join(ast.separator);
      return result;
    }
  }]);
  return DomainListParser;
}();
/**
 * `ModifierParser` is responsible for parsing modifiers.
 *
 * @example
 * `match-case`, `~third-party`, `domain=example.com|~example.org`
 */
var ModifierParser = /*#__PURE__*/function () {
  function ModifierParser() {
    _classCallCheck(this, ModifierParser);
  }
  _createClass(ModifierParser, null, [{
    key: "parse",
    value:
    /**
     * Parses a modifier.
     *
     * @param raw Raw modifier string
     * @param loc Location of the modifier
     *
     * @returns Parsed modifier
     * @throws An error if modifier name or value is empty.
     */
    function parse(raw) {
      var loc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultLocation;
      var offset = 0;
      // Skip leading whitespace
      offset = StringUtils.skipWS(raw, offset);
      // Save the offset of the first character of the modifier (whole modifier)
      var modifierStart = offset;
      // Check if the modifier is an exception
      var exception = false;
      if (raw[offset] === MODIFIER_EXCEPTION_MARKER) {
        offset += MODIFIER_EXCEPTION_MARKER.length;
        exception = true;
      }
      // Skip whitespace after the exception marker (if any)
      offset = StringUtils.skipWS(raw, offset);
      // Save the offset of the first character of the modifier name
      var modifierNameStart = offset;
      // Find assignment operator
      var assignmentIndex = StringUtils.findNextUnescapedCharacter(raw, MODIFIER_ASSIGN_OPERATOR);
      // Find the end of the modifier
      var modifierEnd = Math.max(StringUtils.skipWSBack(raw) + 1, modifierNameStart);
      // Modifier name can't be empty
      if (modifierNameStart === modifierEnd) {
        throw new AdblockSyntaxError('Modifier name can\'t be empty', locRange(loc, 0, raw.length));
      }
      var modifier;
      var value;
      // If there is no assignment operator, the whole modifier is the name
      // without a value
      if (assignmentIndex === -1) {
        modifier = {
          type: 'Value',
          loc: locRange(loc, modifierNameStart, modifierEnd),
          value: raw.slice(modifierNameStart, modifierEnd)
        };
      } else {
        // If there is an assignment operator, first we need to find the
        // end of the modifier name, then we can parse the value
        var modifierNameEnd = StringUtils.skipWSBack(raw, assignmentIndex - 1) + 1;
        modifier = {
          type: 'Value',
          loc: locRange(loc, modifierNameStart, modifierNameEnd),
          value: raw.slice(modifierNameStart, modifierNameEnd)
        };
        // Value can't be empty
        if (assignmentIndex + 1 === modifierEnd) {
          throw new AdblockSyntaxError('Modifier value can\'t be empty', locRange(loc, 0, raw.length));
        }
        // Skip whitespace after the assignment operator
        var valueStart = StringUtils.skipWS(raw, assignmentIndex + MODIFIER_ASSIGN_OPERATOR.length);
        value = {
          type: 'Value',
          loc: locRange(loc, valueStart, modifierEnd),
          value: raw.slice(valueStart, modifierEnd)
        };
      }
      return {
        type: 'Modifier',
        loc: locRange(loc, modifierStart, modifierEnd),
        modifier: modifier,
        value: value,
        exception: exception
      };
    }
    /**
     * Generates a string from a modifier (serializes it).
     *
     * @param modifier Modifier to generate string from
     * @returns String representation of the modifier
     */
  }, {
    key: "generate",
    value: function generate(modifier) {
      var result = EMPTY;
      if (modifier.exception) {
        result += MODIFIER_EXCEPTION_MARKER;
      }
      result += modifier.modifier.value;
      if (modifier.value !== undefined) {
        result += MODIFIER_ASSIGN_OPERATOR;
        result += modifier.value.value;
      }
      return result;
    }
  }]);
  return ModifierParser;
}();
/**
 * `ModifierListParser` is responsible for parsing modifier lists. Please note that the name is not
 * uniform, "modifiers" are also known as "options".
 *
 * @see {@link https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#basic-rules-modifiers}
 * @see {@link https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#non-basic-rules-modifiers}
 * @see {@link https://help.eyeo.com/adblockplus/how-to-write-filters#options}
 */
var ModifierListParser = /*#__PURE__*/function () {
  function ModifierListParser() {
    _classCallCheck(this, ModifierListParser);
  }
  _createClass(ModifierListParser, null, [{
    key: "parse",
    value:
    /**
     * Parses the cosmetic rule modifiers, eg. `third-party,domain=example.com|~example.org`.
     *
     * _Note:_ you should remove `$` separator before passing the raw modifiers to this function,
     *  or it will be parsed in the first modifier.
     *
     * @param raw Raw modifier list
     * @param loc Location of the modifier list
     * @returns Parsed modifiers interface
     */
    function parse(raw) {
      var loc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultLocation;
      var result = {
        type: 'ModifierList',
        loc: locRange(loc, 0, raw.length),
        children: []
      };
      var offset = StringUtils.skipWS(raw);
      var separatorIndex = -1;
      // Split modifiers by unescaped commas
      while (offset < raw.length) {
        // Skip whitespace before the modifier
        offset = StringUtils.skipWS(raw, offset);
        var modifierStart = offset;
        // Find the index of the first unescaped comma
        separatorIndex = StringUtils.findNextUnescapedCharacter(raw, MODIFIERS_SEPARATOR, offset);
        var modifierEnd = separatorIndex === -1 ? raw.length : StringUtils.skipWSBack(raw, separatorIndex - 1) + 1;
        // Parse the modifier
        var modifier = ModifierParser.parse(raw.substring(modifierStart, modifierEnd), shiftLoc(loc, modifierStart));
        result.children.push(modifier);
        // Increment the offset to the next modifier (or the end of the string)
        offset = separatorIndex === -1 ? raw.length : separatorIndex + 1;
      }
      // Check if there are any modifiers after the last separator
      if (separatorIndex !== -1) {
        var _modifierStart = StringUtils.skipWS(raw, separatorIndex + 1);
        result.children.push(ModifierParser.parse(raw.substring(_modifierStart, raw.length), shiftLoc(loc, _modifierStart)));
      }
      return result;
    }
    /**
     * Converts a modifier list AST to a string.
     *
     * @param ast Modifier list AST
     * @returns Raw string
     */
  }, {
    key: "generate",
    value: function generate(ast) {
      var result = ast.children.map(ModifierParser.generate).join(MODIFIERS_SEPARATOR);
      return result;
    }
  }]);
  return ModifierListParser;
}();
/**
 * @file Helper file for CSSTree to provide better compatibility with TypeScript.
 * @see {@link https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/62536}
 */
/**
 * CSSTree node types.
 *
 * @see {@link https://github.com/csstree/csstree/blob/master/docs/ast.md#node-types}
 */
var CssTreeNodeType;
(function (CssTreeNodeType) {
  CssTreeNodeType["AnPlusB"] = "AnPlusB";
  CssTreeNodeType["Atrule"] = "Atrule";
  CssTreeNodeType["AtrulePrelude"] = "AtrulePrelude";
  CssTreeNodeType["AttributeSelector"] = "AttributeSelector";
  CssTreeNodeType["Block"] = "Block";
  CssTreeNodeType["Brackets"] = "Brackets";
  CssTreeNodeType["CDC"] = "CDC";
  CssTreeNodeType["CDO"] = "CDO";
  CssTreeNodeType["ClassSelector"] = "ClassSelector";
  CssTreeNodeType["Combinator"] = "Combinator";
  CssTreeNodeType["Comment"] = "Comment";
  CssTreeNodeType["Declaration"] = "Declaration";
  CssTreeNodeType["DeclarationList"] = "DeclarationList";
  CssTreeNodeType["Dimension"] = "Dimension";
  CssTreeNodeType["Function"] = "Function";
  CssTreeNodeType["Hash"] = "Hash";
  CssTreeNodeType["Identifier"] = "Identifier";
  CssTreeNodeType["IdSelector"] = "IdSelector";
  CssTreeNodeType["MediaFeature"] = "MediaFeature";
  CssTreeNodeType["MediaQuery"] = "MediaQuery";
  CssTreeNodeType["MediaQueryList"] = "MediaQueryList";
  CssTreeNodeType["NestingSelector"] = "NestingSelector";
  CssTreeNodeType["Nth"] = "Nth";
  CssTreeNodeType["Number"] = "Number";
  CssTreeNodeType["Operator"] = "Operator";
  CssTreeNodeType["Parentheses"] = "Parentheses";
  CssTreeNodeType["Percentage"] = "Percentage";
  CssTreeNodeType["PseudoClassSelector"] = "PseudoClassSelector";
  CssTreeNodeType["PseudoElementSelector"] = "PseudoElementSelector";
  CssTreeNodeType["Ratio"] = "Ratio";
  CssTreeNodeType["Raw"] = "Raw";
  CssTreeNodeType["Rule"] = "Rule";
  CssTreeNodeType["Selector"] = "Selector";
  CssTreeNodeType["SelectorList"] = "SelectorList";
  CssTreeNodeType["String"] = "String";
  CssTreeNodeType["StyleSheet"] = "StyleSheet";
  CssTreeNodeType["TypeSelector"] = "TypeSelector";
  CssTreeNodeType["UnicodeRange"] = "UnicodeRange";
  CssTreeNodeType["Url"] = "Url";
  CssTreeNodeType["Value"] = "Value";
  CssTreeNodeType["WhiteSpace"] = "WhiteSpace";
})(CssTreeNodeType || (CssTreeNodeType = {}));
/**
 * Parser context for CSSTree.
 *
 * @see {@link https://github.com/csstree/csstree/blob/master/docs/parsing.md#context}
 */
var CssTreeParserContext;
(function (CssTreeParserContext) {
  /**
   * Regular stylesheet, should be suitable in most cases (default)
   */
  CssTreeParserContext["stylesheet"] = "stylesheet";
  /**
   * at-rule (e.g. `@media screen`, `print { ... }`)
   */
  CssTreeParserContext["atrule"] = "atrule";
  /**
   * at-rule prelude (screen, print for example above)
   */
  CssTreeParserContext["atrulePrelude"] = "atrulePrelude";
  /**
   * used to parse comma separated media query list
   */
  CssTreeParserContext["mediaQueryList"] = "mediaQueryList";
  /**
   * used to parse media query
   */
  CssTreeParserContext["mediaQuery"] = "mediaQuery";
  /**
   * rule (e.g. `.foo`, `.bar:hover { color: red; border: 1px solid black; }`)
   */
  CssTreeParserContext["rule"] = "rule";
  /**
   * selector group (`.foo`, `.bar:hover` for rule example)
   */
  CssTreeParserContext["selectorList"] = "selectorList";
  /**
   * selector (`.foo` or `.bar:hover` for rule example)
   */
  CssTreeParserContext["selector"] = "selector";
  /**
   * block with curly braces ({ color: red; border: 1px solid black; } for rule example)
   */
  CssTreeParserContext["block"] = "block";
  /**
   * block content w/o curly braces (`color: red; border: 1px solid black;` for rule example),
   * useful for parsing HTML style attribute value
   */
  CssTreeParserContext["declarationList"] = "declarationList";
  /**
   * declaration (`color: red` or `border: 1px solid black` for rule example)
   */
  CssTreeParserContext["declaration"] = "declaration";
  /**
   * declaration value (`red` or `1px solid black` for rule example)
   */
  CssTreeParserContext["value"] = "value";
})(CssTreeParserContext || (CssTreeParserContext = {}));

/**
 * @file Known CSS elements and attributes.
 * TODO: Implement a compatibility table for Extended CSS
 */
/**
 * Known Extended CSS pseudo-classes. Please, keep this list sorted.
 */
var EXT_CSS_PSEUDO_CLASSES = new Set([
// AdGuard
// https://github.com/AdguardTeam/ExtendedCss
'contains', 'has', 'if-not', 'is', 'matches-attr', 'matches-css', 'matches-property', 'nth-ancestor', 'remove', 'upward', 'xpath',
// uBlock Origin
// https://github.com/gorhill/uBlock/wiki/Static-filter-syntax#procedural-cosmetic-filters
'has-text', 'matches-css-after', 'matches-css-before', 'matches-path', 'min-text-length', 'watch-attr',
// Adblock Plus
// https://help.eyeo.com/adblockplus/how-to-write-filters#elemhide-emulation
'-abp-contains', '-abp-has', '-abp-properties']);
/**
 * Known legacy Extended CSS attributes. These attributes are deprecated and
 * should be replaced with the corresponding pseudo-classes. In a long term,
 * these attributes will be COMPLETELY removed from the Extended CSS syntax.
 *
 * Please, keep this list sorted.
 */
var EXT_CSS_LEGACY_ATTRIBUTES = new Set([
// AdGuard
'-ext-contains', '-ext-has', '-ext-if-not', '-ext-is', '-ext-matches-attr', '-ext-matches-css', '-ext-matches-property', '-ext-nth-ancestor', '-ext-remove', '-ext-upward', '-ext-xpath',
// uBlock Origin
'-ext-has-text', '-ext-matches-css-after', '-ext-matches-css-before', '-ext-matches-path', '-ext-min-text-length', '-ext-watch-attr',
// Adblock Plus
'-ext-abp-contains', '-ext-abp-has', '-ext-abp-properties']);
/**
 * Known CSS functions that aren't allowed in CSS injection rules, because they
 * able to load external resources. Please, keep this list sorted.
 */
var FORBIDDEN_CSS_FUNCTIONS = new Set([
// https://developer.mozilla.org/en-US/docs/Web/CSS/cross-fade
'-webkit-cross-fade', 'cross-fade',
// https://developer.mozilla.org/en-US/docs/Web/CSS/image
'image',
// https://developer.mozilla.org/en-US/docs/Web/CSS/image-set
'-webkit-image-set', 'image-set',
// https://developer.mozilla.org/en-US/docs/Web/CSS/url
'url']);

/**
 * @file Additional / helper functions for ECSSTree / CSSTree.
 */
/**
 * Common CSSTree parsing options.
 */
var commonCssTreeOptions = {
  parseAtrulePrelude: true,
  parseRulePrelude: true,
  parseValue: true,
  parseCustomProperty: true,
  positions: true
};
var URL_FUNCTION = 'url';
/**
 * Additional / helper functions for CSSTree.
 */
var CssTree = /*#__PURE__*/function () {
  function CssTree() {
    _classCallCheck(this, CssTree);
  }
  _createClass(CssTree, null, [{
    key: "shiftNodePosition",
    value:
    /**
     * Shifts location of the CSSTree node. Temporary workaround for CSSTree issue:
     * https://github.com/csstree/csstree/issues/251
     *
     * @param root Root CSSTree node
     * @param loc Location to shift
     * @returns Root CSSTree node with shifted location
     */
    function shiftNodePosition(root) {
      var loc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultLocation;
      walk(root, function (node) {
        if (node.loc) {
          /* eslint-disable no-param-reassign */
          node.loc.start.offset += loc.offset;
          node.loc.start.line += loc.line - 1;
          node.loc.start.column += loc.column - 1;
          node.loc.end.offset += loc.offset;
          node.loc.end.line += loc.line - 1;
          node.loc.end.column += loc.column - 1;
          /* eslint-enable no-param-reassign */
        }
      });

      return root;
    }
    /**
     * Helper function for parsing CSS parts.
     *
     * @param raw Raw CSS input
     * @param context CSSTree context for parsing
     * @param tolerant If `true`, then the parser will not throw an error on parsing fallbacks. Default is `false`
     * @param loc Base location for the parsed node
     * @returns CSSTree node (AST)
     */
  }, {
    key: "parse",
    value: function parse(raw, context) {
      var tolerant = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var loc = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultLocation;
      try {
        // TODO: Workaround for wrong error management: https://github.com/csstree/csstree/issues/251
        return CssTree.shiftNodePosition(_parse(raw, _objectSpread(_objectSpread({
          context: context
        }, commonCssTreeOptions), {}, {
          // https://github.com/csstree/csstree/blob/master/docs/parsing.md#onparseerror
          onParseError: function onParseError(error) {
            // Strict mode
            if (!tolerant) {
              throw new AdblockSyntaxError( // eslint-disable-next-line max-len
              "ECSSTree parsing error: '".concat(error.rawMessage || error.message, "'"), locRange(loc, error.offset, raw.length));
            }
          }
          // TODO: Resolve false positive alert for :xpath('//*[contains(text(),"a")]')
          // Temporarily disabled to avoid false positive alerts
          // We don't need CSS comments
          // onComment: (value: string, commentLoc: CssLocation) => {
          //     throw new AdblockSyntaxError(
          //         'ECSSTree parsing error: \'Unexpected comment\'',
          //         locRange(loc, commentLoc.start.offset, commentLoc.end.offset),
          //     );
          // },
        })), loc);
      } catch (error) {
        if (error instanceof Error) {
          var errorLoc;
          // Get start offset of the error (if available), otherwise use the whole inputs length
          if ('offset' in error && typeof error.offset === 'number') {
            errorLoc = locRange(loc, error.offset, raw.length);
          } else {
            // istanbul ignore next
            errorLoc = locRange(loc, 0, raw.length);
          }
          throw new AdblockSyntaxError("ECSSTree parsing error: '".concat(error.message, "'"), errorLoc);
        }
        // Pass through any other error just in case, but theoretically it should never happen,
        // so it is ok to ignore it from the coverage
        // istanbul ignore next
        throw error;
      }
    }
    /**
     * Helper function for parsing CSS parts.
     *
     * @param raw Raw CSS input
     * @param context CSSTree context
     * @param tolerant If `true`, then the parser will not throw an error on parsing fallbacks. Default is `false`
     * @param loc Base location for the parsed node
     * @returns CSSTree node (AST)
     */
    // istanbul ignore next
    // eslint-disable-next-line max-len
  }, {
    key: "parsePlain",
    value: function parsePlain(raw, context) {
      var tolerant = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var loc = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultLocation;
      return toPlainObject(CssTree.parse(raw, context, tolerant, loc));
    }
    /**
     * Checks if the CSSTree node is an ExtendedCSS node.
     *
     * @param node Node to check
     * @param pseudoClasses List of the names of the pseudo classes to check
     * @param attributeSelectors List of the names of the attribute selectors to check
     * @returns `true` if the node is an ExtendedCSS node, otherwise `false`
     */
  }, {
    key: "isExtendedCssNode",
    value: function isExtendedCssNode(node, pseudoClasses, attributeSelectors) {
      return node.type === CssTreeNodeType.PseudoClassSelector && pseudoClasses.has(node.name) || node.type === CssTreeNodeType.AttributeSelector && attributeSelectors.has(node.name.name);
    }
    /**
     * Walks through the CSSTree node and returns all ExtendedCSS nodes.
     *
     * @param selectorList Selector list (can be a string or a CSSTree node)
     * @param pseudoClasses List of the names of the pseudo classes to check
     * @param attributeSelectors List of the names of the attribute selectors to check
     * @returns Extended CSS nodes (pseudos and attributes)
     * @see {@link https://github.com/csstree/csstree/blob/master/docs/ast.md#selectorlist}
     */
  }, {
    key: "getSelectorExtendedCssNodes",
    value: function getSelectorExtendedCssNodes(selectorList) {
      var pseudoClasses = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : EXT_CSS_PSEUDO_CLASSES;
      var attributeSelectors = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EXT_CSS_LEGACY_ATTRIBUTES;
      // Parse the block if string is passed
      var ast;
      if (StringUtils.isString(selectorList)) {
        ast = CssTree.parse(selectorList, CssTreeParserContext.selectorList);
      } else {
        ast = cloneDeep(selectorList);
      }
      var nodes = [];
      // TODO: CSSTree types should be improved, as a workaround we use `any` here
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      walk(ast, function (node) {
        if (CssTree.isExtendedCssNode(node, pseudoClasses, attributeSelectors)) {
          nodes.push(node);
        }
      });
      return nodes;
    }
    /**
     * Checks if the selector contains any ExtendedCSS nodes. It is a faster alternative to
     * `getSelectorExtendedCssNodes` if you only need to know if the selector contains any ExtendedCSS nodes,
     * because it stops the search on the first ExtendedCSS node instead of going through the whole selector
     * and collecting all ExtendedCSS nodes.
     *
     * @param selectorList Selector list (can be a string or a CSSTree node)
     * @param pseudoClasses List of the names of the pseudo classes to check
     * @param attributeSelectors List of the names of the attribute selectors to check
     * @returns `true` if the selector contains any ExtendedCSS nodes
     * @see {@link https://github.com/csstree/csstree/blob/master/docs/ast.md#selectorlist}
     * @see {@link https://github.com/csstree/csstree/blob/master/docs/traversal.md#findast-fn}
     */
  }, {
    key: "hasAnySelectorExtendedCssNode",
    value: function hasAnySelectorExtendedCssNode(selectorList) {
      var pseudoClasses = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : EXT_CSS_PSEUDO_CLASSES;
      var attributeSelectors = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EXT_CSS_LEGACY_ATTRIBUTES;
      // Parse the block if string is passed
      var ast;
      if (StringUtils.isString(selectorList)) {
        ast = CssTree.parse(selectorList, CssTreeParserContext.selectorList);
      } else {
        ast = cloneDeep(selectorList);
      }
      // TODO: CSSTree types should be improved, as a workaround we use `any` here
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return find(ast, function (node) {
        return CssTree.isExtendedCssNode(node, pseudoClasses, attributeSelectors);
      }) !== null;
    }
    /**
     * Checks if the node is a forbidden function (unsafe resource loading). Typically it is used to check
     * if the node is a `url()` function, which is a security risk when using filter lists from untrusted
     * sources.
     *
     * @param node Node to check
     * @param forbiddenFunctions Set of the names of the functions to check
     * @returns `true` if the node is a forbidden function
     */
  }, {
    key: "isForbiddenFunction",
    value: function isForbiddenFunction(node) {
      var forbiddenFunctions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : FORBIDDEN_CSS_FUNCTIONS;
      return (
        // General case: check if it's a forbidden function
        node.type === CssTreeNodeType.Function && forbiddenFunctions.has(node.name)
        // Special case: CSSTree handles `url()` function in a separate node type,
        // and we also should check if the `url()` are marked as a forbidden function
        || node.type === CssTreeNodeType.Url && forbiddenFunctions.has(URL_FUNCTION)
      );
    }
    /**
     * Gets the list of the forbidden function nodes in the declaration block. Typically it is used to get
     * the list of the functions that can be used to load external resources, which is a security risk
     * when using filter lists from untrusted sources.
     *
     * @param declarationList Declaration list to check (can be a string or a CSSTree node)
     * @param forbiddenFunctions Set of the names of the functions to check
     * @returns List of the forbidden function nodes in the declaration block (can be empty)
     */
  }, {
    key: "getForbiddenFunctionNodes",
    value: function getForbiddenFunctionNodes(declarationList) {
      var forbiddenFunctions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : FORBIDDEN_CSS_FUNCTIONS;
      // Parse the block if string is passed
      var ast;
      if (StringUtils.isString(declarationList)) {
        ast = CssTree.parse(declarationList, CssTreeParserContext.declarationList);
      } else {
        ast = cloneDeep(declarationList);
      }
      var nodes = [];
      // While walking the AST we should skip the nested functions,
      // for example skip url()s in cross-fade(url(), url()), since
      // cross-fade() itself is already a forbidden function
      var inForbiddenFunction = false;
      // TODO: CSSTree types should be improved, as a workaround we use `any` here
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      walk(ast, {
        enter: function enter(node) {
          if (!inForbiddenFunction && CssTree.isForbiddenFunction(node, forbiddenFunctions)) {
            nodes.push(node);
            inForbiddenFunction = true;
          }
        },
        leave: function leave(node) {
          if (inForbiddenFunction && CssTree.isForbiddenFunction(node, forbiddenFunctions)) {
            inForbiddenFunction = false;
          }
        }
      });
      return nodes;
    }
    /**
     * Checks if the declaration block contains any forbidden functions. Typically it is used to check
     * if the declaration block contains any functions that can be used to load external resources,
     * which is a security risk when using filter lists from untrusted sources.
     *
     * @param declarationList Declaration list to check (can be a string or a CSSTree node)
     * @param forbiddenFunctions Set of the names of the functions to check
     * @returns `true` if the declaration block contains any forbidden functions
     * @throws If you pass a string, but it is not a valid CSS
     * @throws If you pass an invalid CSSTree node / AST
     * @see {@link https://github.com/csstree/csstree/blob/master/docs/ast.md#declarationlist}
     * @see {@link https://github.com/AdguardTeam/AdguardBrowserExtension/issues/1196}
     * @see {@link https://github.com/AdguardTeam/AdguardBrowserExtension/issues/1920}
     */
  }, {
    key: "hasAnyForbiddenFunction",
    value: function hasAnyForbiddenFunction(declarationList) {
      var forbiddenFunctions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : FORBIDDEN_CSS_FUNCTIONS;
      // Parse the block if string is passed
      var ast;
      if (StringUtils.isString(declarationList)) {
        ast = CssTree.parse(declarationList, CssTreeParserContext.declarationList);
      } else {
        ast = cloneDeep(declarationList);
      }
      // TODO: CSSTree types should be improved, as a workaround we use `any` here
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return find(ast, function (node) {
        return CssTree.isForbiddenFunction(node, forbiddenFunctions);
      }) !== null;
    }
    /**
     * Generates string representation of the media query list.
     *
     * @param ast Media query list AST
     * @returns String representation of the media query list
     */
  }, {
    key: "generateMediaQueryList",
    value: function generateMediaQueryList(ast) {
      var _this2 = this;
      var result = EMPTY;
      if (!ast.children || ast.children.size === 0) {
        throw new Error('Media query list cannot be empty');
      }
      ast.children.forEach(function (mediaQuery, listItem) {
        if (mediaQuery.type !== CssTreeNodeType.MediaQuery) {
          throw new Error("Unexpected node type: ".concat(mediaQuery.type));
        }
        result += _this2.generateMediaQuery(mediaQuery);
        if (listItem.next !== null) {
          result += COMMA;
          result += SPACE;
        }
      });
      return result;
    }
    /**
     * Generates string representation of the media query.
     *
     * @param ast Media query AST
     * @returns String representation of the media query
     */
  }, {
    key: "generateMediaQuery",
    value: function generateMediaQuery(ast) {
      var result = EMPTY;
      if (!ast.children || ast.children.size === 0) {
        throw new Error('Media query cannot be empty');
      }
      ast.children.forEach(function (node, listItem) {
        if (node.type === CssTreeNodeType.MediaFeature) {
          result += OPEN_PARENTHESIS;
          result += node.name;
          if (node.value !== null) {
            result += COLON;
            result += SPACE;
            // Use default generator for media feature value
            result += _generate(node.value);
          }
          result += CLOSE_PARENTHESIS;
        } else if (node.type === CssTreeNodeType.Identifier) {
          result += node.name;
        } else {
          throw new Error("Unexpected node type: ".concat(node.type));
        }
        if (listItem.next !== null) {
          result += SPACE;
        }
      });
      return result;
    }
    /**
     * Generates string representation of the selector list.
     *
     * @param ast SelectorList AST
     * @returns String representation of the selector list
     */
  }, {
    key: "generateSelectorList",
    value: function generateSelectorList(ast) {
      var _this3 = this;
      var result = EMPTY;
      if (!ast.children || ast.children.size === 0) {
        throw new Error('Selector list cannot be empty');
      }
      ast.children.forEach(function (selector, listItem) {
        if (selector.type !== CssTreeNodeType.Selector) {
          throw new Error("Unexpected node type: ".concat(selector.type));
        }
        result += _this3.generateSelector(selector);
        if (listItem.next !== null) {
          result += COMMA;
          result += SPACE;
        }
      });
      return result;
    }
    /**
     * Selector generation based on CSSTree's AST. This is necessary because CSSTree
     * only adds spaces in some edge cases.
     *
     * @param ast CSS Tree AST
     * @returns CSS selector as string
     */
  }, {
    key: "generateSelector",
    value: function generateSelector(ast) {
      var result = EMPTY;
      var inAttributeSelector = false;
      var depth = 0;
      var selectorListDepth = -1;
      var prevNode = ast;
      walk(ast, {
        enter: function enter(node) {
          depth += 1;
          // Skip attribute selector / selector list children
          if (inAttributeSelector || selectorListDepth > -1) {
            return;
          }
          switch (node.type) {
            // "Trivial" nodes
            case CssTreeNodeType.TypeSelector:
              result += node.name;
              break;
            case CssTreeNodeType.ClassSelector:
              result += DOT;
              result += node.name;
              break;
            case CssTreeNodeType.IdSelector:
              result += HASHMARK;
              result += node.name;
              break;
            case CssTreeNodeType.Identifier:
              result += node.name;
              break;
            case CssTreeNodeType.Raw:
              result += node.value;
              break;
            // "Advanced" nodes
            case CssTreeNodeType.Nth:
              // Default generation enough
              result += _generate(node);
              break;
            // For example :not([id], [name])
            case CssTreeNodeType.SelectorList:
              // eslint-disable-next-line no-case-declarations
              var selectors = [];
              node.children.forEach(function (selector) {
                if (selector.type === CssTreeNodeType.Selector) {
                  selectors.push(CssTree.generateSelector(selector));
                } else if (selector.type === CssTreeNodeType.Raw) {
                  selectors.push(selector.value);
                }
              });
              // Join selector lists
              result += selectors.join(COMMA + SPACE);
              // Skip nodes here
              selectorListDepth = depth;
              break;
            case CssTreeNodeType.Combinator:
              if (node.name === SPACE) {
                result += node.name;
                break;
              }
              // Prevent this case (unnecessary space): has( > .something)
              if (prevNode.type !== CssTreeNodeType.Selector) {
                result += SPACE;
              }
              result += node.name;
              result += SPACE;
              break;
            case CssTreeNodeType.AttributeSelector:
              result += OPEN_SQUARE_BRACKET;
              // Identifier name
              if (node.name) {
                result += node.name.name;
              }
              // Matcher operator, eg =
              if (node.matcher) {
                result += node.matcher;
                // Value can be String, Identifier or null
                if (node.value !== null) {
                  // String node
                  if (node.value.type === CssTreeNodeType.String) {
                    result += _generate(node.value);
                  } else if (node.value.type === CssTreeNodeType.Identifier) {
                    // Identifier node
                    result += node.value.name;
                  }
                }
              }
              // Flags
              if (node.flags) {
                // Space before flags
                result += SPACE;
                result += node.flags;
              }
              result += CLOSE_SQUARE_BRACKET;
              inAttributeSelector = true;
              break;
            case CssTreeNodeType.PseudoElementSelector:
              result += COLON;
              result += COLON;
              result += node.name;
              if (node.children !== null) {
                result += OPEN_PARENTHESIS;
              }
              break;
            case CssTreeNodeType.PseudoClassSelector:
              result += COLON;
              result += node.name;
              if (node.children !== null) {
                result += OPEN_PARENTHESIS;
              }
              break;
          }
          prevNode = node;
        },
        leave: function leave(node) {
          depth -= 1;
          if (node.type === CssTreeNodeType.SelectorList && depth + 1 === selectorListDepth) {
            selectorListDepth = -1;
          }
          if (selectorListDepth > -1) {
            return;
          }
          if (node.type === CssTreeNodeType.AttributeSelector) {
            inAttributeSelector = false;
          }
          if (inAttributeSelector) {
            return;
          }
          switch (node.type) {
            case CssTreeNodeType.PseudoElementSelector:
            case CssTreeNodeType.PseudoClassSelector:
              if (node.children !== null) {
                result += CLOSE_PARENTHESIS;
              }
              break;
          }
        }
      });
      return result.trim();
    }
    /**
     * Block generation based on CSSTree's AST. This is necessary because CSSTree only adds spaces in some edge cases.
     *
     * @param ast CSS Tree AST
     * @returns CSS selector as string
     */
  }, {
    key: "generateDeclarationList",
    value: function generateDeclarationList(ast) {
      var result = EMPTY;
      walk(ast, {
        enter: function enter(node) {
          switch (node.type) {
            case CssTreeNodeType.Declaration:
              {
                result += node.property;
                if (node.value) {
                  result += COLON;
                  result += SPACE;
                  // Fallback to CSSTree's default generate function for the value (enough at this point)
                  result += _generate(node.value);
                }
                if (node.important) {
                  result += SPACE;
                  result += CSS_IMPORTANT;
                }
                break;
              }
          }
        },
        leave: function leave(node) {
          switch (node.type) {
            case CssTreeNodeType.Declaration:
              {
                result += SEMICOLON;
                result += SPACE;
                break;
              }
          }
        }
      });
      return result.trim();
    }
    /**
     * Helper method to assert that the attribute selector has a value
     *
     * @param node Attribute selector node
     */
  }, {
    key: "assertAttributeSelectorHasStringValue",
    value: function assertAttributeSelectorHasStringValue(node) {
      if (!node.value || node.value.type !== CssTreeNodeType.String) {
        throw new Error("Invalid argument '".concat(node.value, "' for '").concat(node.name.name, "', expected a string, but got '").concat(node.value ? node.value.type : 'undefined', "'"));
      }
    }
    /**
     * Helper method to assert that the pseudo-class selector has at least one argument
     *
     * @param node Pseudo-class selector node
     */
  }, {
    key: "assertPseudoClassHasAnyArgument",
    value: function assertPseudoClassHasAnyArgument(node) {
      if (!node.children || node.children.length === 0) {
        throw new Error("Pseudo class '".concat(node.name, "' has no argument"));
      }
    }
    /**
     * Helper method to parse an attribute selector value as a number
     *
     * @param node Attribute selector node
     * @returns Parsed attribute selector value as a number
     * @throws If the attribute selector hasn't a string value or the string value is can't be parsed as a number
     */
  }, {
    key: "parseAttributeSelectorValueAsNumber",
    value: function parseAttributeSelectorValueAsNumber(node) {
      CssTree.assertAttributeSelectorHasStringValue(node);
      return StringUtils.parseNumber(node.value.value);
    }
    /**
     * Helper method to parse a pseudo-class argument as a number
     *
     * @param node Pseudo-class selector node to parse
     * @returns Parsed pseudo-class argument as a number
     */
  }, {
    key: "parsePseudoClassArgumentAsNumber",
    value: function parsePseudoClassArgumentAsNumber(node) {
      // Check if the pseudo-class has at least one child
      CssTree.assertPseudoClassHasAnyArgument(node);
      // Check if the pseudo-class has only one child
      if (node.children.length > 1) {
        throw new Error("Invalid argument '".concat(node.name, "', expected a number, but got multiple arguments"));
      }
      // Check if the pseudo-class argument is a string / number / raw
      var argument = node.children[0];
      if (argument.type !== CssTreeNodeType.String && argument.type !== CssTreeNodeType.Number && argument.type !== CssTreeNodeType.Raw) {
        throw new Error("Invalid argument '".concat(node.name, "', expected a ").concat(CssTreeNodeType.String, " or ").concat(CssTreeNodeType.Number, " or ").concat(CssTreeNodeType.Raw, ", but got '").concat(argument.type, "'"));
      }
      // Parse the argument as a number
      return StringUtils.parseNumber(argument.value);
    }
    /**
     * Helper method to create an attribute selector node
     *
     * @param name Name of the attribute
     * @param value Value of the attribute
     * @param matcher Matcher of the attribute
     * @param flags Flags of the attribute
     * @returns Attribute selector node
     * @see {@link https://github.com/csstree/csstree/blob/master/docs/ast.md#attributeselector}
     */
  }, {
    key: "createAttributeSelectorNode",
    value: function createAttributeSelectorNode(name, value) {
      var matcher = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EQUALS;
      var flags = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      return {
        type: CssTreeNodeType.AttributeSelector,
        name: {
          type: CssTreeNodeType.Identifier,
          name: name
        },
        value: {
          type: CssTreeNodeType.String,
          value: value
        },
        matcher: matcher,
        flags: flags
      };
    }
  }]);
  return CssTree;
}();
/**
 * @file Element hiding rule body parser
 */
/**
 * `ElementHidingBodyParser` is responsible for parsing element hiding rule bodies.
 *
 * It delegates CSS parsing to CSSTree, which is tolerant and therefore able to
 * parse Extended CSS parts as well.
 *
 * Please note that this parser will read ANY selector if it is syntactically correct.
 * Checking whether this selector is actually compatible with a given adblocker is not
 * done at this level.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors}
 * @see {@link https://github.com/AdguardTeam/ExtendedCss}
 * @see {@link https://github.com/gorhill/uBlock/wiki/Procedural-cosmetic-filters#cosmetic-filter-operators}
 * @see {@link https://help.eyeo.com/adblockplus/how-to-write-filters#elemhide-emulation}
 * @see {@link https://github.com/csstree/csstree/tree/master/docs}
 */
var ElementHidingBodyParser = /*#__PURE__*/function () {
  function ElementHidingBodyParser() {
    _classCallCheck(this, ElementHidingBodyParser);
  }
  _createClass(ElementHidingBodyParser, null, [{
    key: "parse",
    value:
    /**
     * Parses a raw cosmetic rule body as an element hiding rule body.
     *
     * @param raw Raw body
     * @param loc Location of the body
     * @returns Element hiding rule body AST
     * @throws If the selector is invalid according to the CSS syntax
     */
    function parse(raw) {
      var loc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultLocation;
      // eslint-disable-next-line max-len
      var selectorList = CssTree.parsePlain(raw, CssTreeParserContext.selectorList, false, loc);
      return {
        type: 'ElementHidingRuleBody',
        loc: locRange(loc, 0, raw.length),
        selectorList: selectorList
      };
    }
    /**
     * Converts an element hiding rule body AST to a string.
     *
     * @param ast Element hiding rule body AST
     * @returns Raw string
     * @throws If the AST is invalid
     */
  }, {
    key: "generate",
    value: function generate(ast) {
      return CssTree.generateSelectorList(fromPlainObject(ast.selectorList));
    }
  }]);
  return ElementHidingBodyParser;
}();
/**
 * @file CSS injection rule body parser
 */
var NONE = 'None';
var MEDIA = 'media';
var TRUE = 'true';
var REMOVE = 'remove';
var STYLE = 'style';
var MATCHES_MEDIA = 'matches-media';
var MEDIA_MARKER = AT_SIGN + MEDIA; // @media
var REMOVE_DECLARATION = REMOVE + COLON + SPACE + TRUE + SEMICOLON; // remove: true;
var SPECIAL_PSEUDO_CLASSES = [MATCHES_MEDIA, STYLE, REMOVE];
/**
 * `selectorList:style(declarations)` or `selectorList:remove()`
 */
// eslint-disable-next-line max-len
var UBO_CSS_INJECTION_PATTERN = /*#__PURE__*/_wrapRegExp(/^(.+)(?:(:style\()(.+)\)|(:remove\(\)))$/, {
  selectors: 1,
  style: 2,
  declarations: 3,
  remove: 4
});
/**
 * `selectorList { declarations }`
 */
var ADG_CSS_INJECTION_PATTERN = /^(?:.+){(?:.+)}$/;
/**
 * `CssInjectionBodyParser` is responsible for parsing a CSS injection body.
 *
 * Please note that not all adblockers support CSS injection in the same way, e.g. uBO does not support media queries.
 *
 * Example rules (AdGuard):
 *  - ```adblock
 *    example.com#$#body { padding-top: 0 !important; }
 *    ```
 *  - ```adblock
 *    example.com#$#@media (min-width: 1024px) { body { padding-top: 0 !important; } }
 *    ```
 *  - ```adblock
 *    example.com#$?#@media (min-width: 1024px) { .something:has(.ads) { padding-top: 0 !important; } }
 *    ```
 *  - ```adblock
 *    example.com#$#.ads { remove: true; }
 *    ```
 *
 * Example rules (uBlock Origin):
 *  - ```adblock
 *    example.com##body:style(padding-top: 0 !important;)
 *    ```
 *  - ```adblock
 *    example.com##.ads:remove()
 *    ```
 *
 * @see {@link https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#cosmetic-css-rules}
 * @see {@link https://github.com/gorhill/uBlock/wiki/Static-filter-syntax#subjectstylearg}
 * @see {@link https://github.com/gorhill/uBlock/wiki/Static-filter-syntax#subjectremove}
 */
var CssInjectionBodyParser = /*#__PURE__*/function () {
  function CssInjectionBodyParser() {
    _classCallCheck(this, CssInjectionBodyParser);
  }
  _createClass(CssInjectionBodyParser, null, [{
    key: "isUboCssInjection",
    value:
    /**
     * Checks if a selector is a uBlock CSS injection.
     *
     * @param raw Raw selector body
     * @returns `true` if the selector is a uBlock CSS injection, `false` otherwise
     */
    function isUboCssInjection(raw) {
      var trimmed = raw.trim();
      // Since it runs on every element hiding rule, we want to avoid unnecessary regex checks,
      // so we first check if the selector contains either `:style(` or `:remove(`.
      if (trimmed.indexOf(COLON + STYLE + OPEN_PARENTHESIS) !== -1 || trimmed.indexOf(COLON + REMOVE + OPEN_PARENTHESIS) !== -1) {
        return UBO_CSS_INJECTION_PATTERN.test(trimmed);
      }
      return false;
    }
    /**
     * Checks if a selector is an AdGuard CSS injection.
     *
     * @param raw Raw selector body
     * @returns `true` if the selector is an AdGuard CSS injection, `false` otherwise
     */
  }, {
    key: "isAdgCssInjection",
    value: function isAdgCssInjection(raw) {
      return ADG_CSS_INJECTION_PATTERN.test(raw.trim());
    }
    /**
     * Parses a uBlock Origin CSS injection body.
     *
     * @param raw Raw CSS injection body
     * @param loc Location of the body
     * @returns Parsed CSS injection body
     * @throws {AdblockSyntaxError} If the body is invalid or unsupported
     */
  }, {
    key: "parseUboStyleInjection",
    value: function parseUboStyleInjection(raw) {
      var loc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultLocation;
      var selectorList = CssTree.parse(raw, CssTreeParserContext.selectorList, false, loc);
      var plainSelectorList = {
        type: CssTreeNodeType.SelectorList,
        children: []
      };
      var mediaQueryList;
      var declarationList;
      var remove;
      // Check selector list
      if (selectorList.type !== CssTreeNodeType.SelectorList) {
        throw new AdblockSyntaxError( // eslint-disable-next-line max-len
        "Invalid selector list, expected '".concat(CssTreeNodeType.SelectorList, "' but got '").concat(selectorList.type || NONE, "' instead"), locRange(loc, 0, raw.length));
      }
      // Convert selector list to regular array
      var selectors = selectorList.children.toArray();
      // Iterate over selectors
      var _loop = function _loop() {
        // Store current selector (just for convenience)
        var selector = selectors[i];
        // Type guard for the actual selector
        if (selector.type !== CssTreeNodeType.Selector) {
          var _selector$loc$start, _selector$loc, _selector$loc$end, _selector$loc2;
          throw new AdblockSyntaxError( // eslint-disable-next-line max-len
          "Invalid selector, expected '".concat(CssTreeNodeType.Selector, "' but got '").concat(selector.type || NONE, "' instead"), {
            start: (_selector$loc$start = (_selector$loc = selector.loc) === null || _selector$loc === void 0 ? void 0 : _selector$loc.start) !== null && _selector$loc$start !== void 0 ? _selector$loc$start : loc,
            end: (_selector$loc$end = (_selector$loc2 = selector.loc) === null || _selector$loc2 === void 0 ? void 0 : _selector$loc2.end) !== null && _selector$loc$end !== void 0 ? _selector$loc$end : shiftLoc(loc, raw.length)
          });
        }
        // Not the last selector
        if (i !== selectors.length - 1) {
          // Special pseudo-classes (:style, :remove, :matches-media) can only be used in the last selector
          walk(selector, function (node) {
            // eslint-disable-next-line max-len
            if (node.type === CssTreeNodeType.PseudoClassSelector && SPECIAL_PSEUDO_CLASSES.includes(node.name)) {
              var _node$loc$start2, _node$loc2, _node$loc$end, _node$loc3;
              throw new AdblockSyntaxError("Invalid selector, pseudo-class '".concat(node.name, "' can only be used in the last selector"), {
                start: (_node$loc$start2 = (_node$loc2 = node.loc) === null || _node$loc2 === void 0 ? void 0 : _node$loc2.start) !== null && _node$loc$start2 !== void 0 ? _node$loc$start2 : loc,
                end: (_node$loc$end = (_node$loc3 = node.loc) === null || _node$loc3 === void 0 ? void 0 : _node$loc3.end) !== null && _node$loc$end !== void 0 ? _node$loc$end : shiftLoc(loc, raw.length)
              });
            }
          });
          // Add selector to plain selector list
          plainSelectorList.children.push(toPlainObject(selector));
        } else if (i === selectors.length - 1) {
          // Last selector can (should) contain special pseudo-classes
          var regularSelector = {
            type: CssTreeNodeType.Selector,
            children: new List()
          };
          var depth = 0;
          walk(selector, {
            // eslint-disable-next-line @typescript-eslint/no-loop-func
            enter: function enter(node) {
              // Increment depth
              depth += 1;
              if (node.type === CssTreeNodeType.PseudoClassSelector) {
                if (SPECIAL_PSEUDO_CLASSES.includes(node.name)) {
                  // Only allow special pseudo-classes at the top level
                  // Depth look like this:
                  //   1: Selector (root)
                  //   2: Direct child of the root selector (e.g. TypeSelector, PseudoClassSelector, etc.)
                  //      ...
                  if (depth !== 2) {
                    var _node$loc$start3, _node$loc4, _node$loc$end2, _node$loc5;
                    throw new AdblockSyntaxError( // eslint-disable-next-line max-len
                    "Invalid selector, pseudo-class '".concat(node.name, "' can only be used at the top level of the selector"), {
                      start: (_node$loc$start3 = (_node$loc4 = node.loc) === null || _node$loc4 === void 0 ? void 0 : _node$loc4.start) !== null && _node$loc$start3 !== void 0 ? _node$loc$start3 : loc,
                      end: (_node$loc$end2 = (_node$loc5 = node.loc) === null || _node$loc5 === void 0 ? void 0 : _node$loc5.end) !== null && _node$loc$end2 !== void 0 ? _node$loc$end2 : shiftLoc(loc, raw.length)
                    });
                  }
                  // :matches-media(...)
                  if (node.name === MATCHES_MEDIA) {
                    if (mediaQueryList) {
                      var _node$loc$start4, _node$loc6, _node$loc$end3, _node$loc7;
                      throw new AdblockSyntaxError("Duplicated pseudo-class '".concat(node.name, "'"), {
                        start: (_node$loc$start4 = (_node$loc6 = node.loc) === null || _node$loc6 === void 0 ? void 0 : _node$loc6.start) !== null && _node$loc$start4 !== void 0 ? _node$loc$start4 : loc,
                        end: (_node$loc$end3 = (_node$loc7 = node.loc) === null || _node$loc7 === void 0 ? void 0 : _node$loc7.end) !== null && _node$loc$end3 !== void 0 ? _node$loc$end3 : shiftLoc(loc, raw.length)
                      });
                    }
                    // eslint-disable-next-line max-len
                    if (!node.children || !node.children.first || node.children.first.type !== CssTreeNodeType.MediaQueryList) {
                      var _node$loc$start5, _node$loc8, _node$loc$end4, _node$loc9;
                      throw new AdblockSyntaxError( // eslint-disable-next-line max-len
                      "Invalid selector, pseudo-class '".concat(node.name, "' must be parametrized with a media query list"), {
                        start: (_node$loc$start5 = (_node$loc8 = node.loc) === null || _node$loc8 === void 0 ? void 0 : _node$loc8.start) !== null && _node$loc$start5 !== void 0 ? _node$loc$start5 : loc,
                        end: (_node$loc$end4 = (_node$loc9 = node.loc) === null || _node$loc9 === void 0 ? void 0 : _node$loc9.end) !== null && _node$loc$end4 !== void 0 ? _node$loc$end4 : shiftLoc(loc, raw.length)
                      });
                    }
                    // Store media query list, but convert it to a plain object first
                    mediaQueryList = toPlainObject(node.children.first);
                    return;
                  }
                  // :style(...)
                  if (node.name === STYLE) {
                    if (declarationList) {
                      var _node$loc$start6, _node$loc10, _node$loc$end5, _node$loc11;
                      throw new AdblockSyntaxError("Duplicated pseudo-class '".concat(node.name, "'"), {
                        start: (_node$loc$start6 = (_node$loc10 = node.loc) === null || _node$loc10 === void 0 ? void 0 : _node$loc10.start) !== null && _node$loc$start6 !== void 0 ? _node$loc$start6 : loc,
                        end: (_node$loc$end5 = (_node$loc11 = node.loc) === null || _node$loc11 === void 0 ? void 0 : _node$loc11.end) !== null && _node$loc$end5 !== void 0 ? _node$loc$end5 : shiftLoc(loc, raw.length)
                      });
                    }
                    // Remove selected elements or style them, but not both
                    if (remove) {
                      var _node$loc$start7, _node$loc12, _node$loc$end6, _node$loc13;
                      throw new AdblockSyntaxError("'".concat(STYLE, "' and '").concat(REMOVE, "' cannot be used together"), {
                        start: (_node$loc$start7 = (_node$loc12 = node.loc) === null || _node$loc12 === void 0 ? void 0 : _node$loc12.start) !== null && _node$loc$start7 !== void 0 ? _node$loc$start7 : loc,
                        end: (_node$loc$end6 = (_node$loc13 = node.loc) === null || _node$loc13 === void 0 ? void 0 : _node$loc13.end) !== null && _node$loc$end6 !== void 0 ? _node$loc$end6 : shiftLoc(loc, raw.length)
                      });
                    }
                    // eslint-disable-next-line max-len
                    if (!node.children || !node.children.first || node.children.first.type !== CssTreeNodeType.DeclarationList) {
                      var _node$loc$start8, _node$loc14, _node$loc$end7, _node$loc15;
                      throw new AdblockSyntaxError( // eslint-disable-next-line max-len
                      "Invalid selector, pseudo-class '".concat(node.name, "' must be parametrized with a declaration list"), {
                        start: (_node$loc$start8 = (_node$loc14 = node.loc) === null || _node$loc14 === void 0 ? void 0 : _node$loc14.start) !== null && _node$loc$start8 !== void 0 ? _node$loc$start8 : loc,
                        end: (_node$loc$end7 = (_node$loc15 = node.loc) === null || _node$loc15 === void 0 ? void 0 : _node$loc15.end) !== null && _node$loc$end7 !== void 0 ? _node$loc$end7 : shiftLoc(loc, raw.length)
                      });
                    }
                    // Store declaration list, but convert it to plain object first
                    declarationList = toPlainObject(node.children.first);
                    return;
                  }
                  // :remove()
                  if (node.name === REMOVE) {
                    if (remove) {
                      var _node$loc$start9, _node$loc16, _node$loc$end8, _node$loc17;
                      throw new AdblockSyntaxError("Duplicated pseudo-class '".concat(node.name, "'"), {
                        start: (_node$loc$start9 = (_node$loc16 = node.loc) === null || _node$loc16 === void 0 ? void 0 : _node$loc16.start) !== null && _node$loc$start9 !== void 0 ? _node$loc$start9 : loc,
                        end: (_node$loc$end8 = (_node$loc17 = node.loc) === null || _node$loc17 === void 0 ? void 0 : _node$loc17.end) !== null && _node$loc$end8 !== void 0 ? _node$loc$end8 : shiftLoc(loc, raw.length)
                      });
                    }
                    // Remove selected elements or style them, but not both
                    if (declarationList) {
                      var _node$loc$start10, _node$loc18, _node$loc$end9, _node$loc19;
                      throw new AdblockSyntaxError("'".concat(STYLE, "' and '").concat(REMOVE, "' cannot be used together"), {
                        start: (_node$loc$start10 = (_node$loc18 = node.loc) === null || _node$loc18 === void 0 ? void 0 : _node$loc18.start) !== null && _node$loc$start10 !== void 0 ? _node$loc$start10 : loc,
                        end: (_node$loc$end9 = (_node$loc19 = node.loc) === null || _node$loc19 === void 0 ? void 0 : _node$loc19.end) !== null && _node$loc$end9 !== void 0 ? _node$loc$end9 : shiftLoc(loc, raw.length)
                      });
                    }
                    // Set remove flag to true (and don't store anything)
                    remove = true;
                    return;
                  }
                }
              }
              // If the node is a direct child of the selector (depth === 2) and it's not a special
              // pseudo-class, then it's a regular selector element, so add it to the regular selector
              // (We split the selector into two parts: regular selector and special pseudo-classes)
              if (depth === 2) {
                // Regular selector elements can't be used after special pseudo-classes
                if (mediaQueryList || declarationList || remove) {
                  var _node$loc$start11, _node$loc20;
                  throw new AdblockSyntaxError(
                  // eslint-disable-next-line max-len
                  'Invalid selector, regular selector elements can\'t be used after special pseudo-classes', {
                    start: (_node$loc$start11 = (_node$loc20 = node.loc) === null || _node$loc20 === void 0 ? void 0 : _node$loc20.start) !== null && _node$loc$start11 !== void 0 ? _node$loc$start11 : loc,
                    end: shiftLoc(loc, raw.length)
                  });
                }
                regularSelector.children.push(node);
              }
            },
            leave: function leave() {
              // Decrement depth
              depth -= 1;
            }
          });
          // Store the last selector with special pseudo-classes
          plainSelectorList.children.push(toPlainObject(regularSelector));
        }
      };
      for (var i = 0; i < selectors.length; i += 1) {
        _loop();
      }
      // At least one of the following must be present: declaration list, :remove() pseudo-class
      if (!declarationList && !remove) {
        throw new AdblockSyntaxError('No CSS declaration list or :remove() pseudo-class found', locRange(loc, 0, raw.length));
      }
      return {
        type: 'CssInjectionRuleBody',
        loc: locRange(loc, 0, raw.length),
        selectorList: plainSelectorList,
        mediaQueryList: mediaQueryList,
        declarationList: declarationList,
        remove: remove
      };
    }
    /**
     * Parse a CSS injection rule body from a raw string. It determines the syntax
     * automatically.
     *
     * @param raw Raw CSS injection rule body
     * @param loc Location of the body
     * @returns CSS injection rule body AST
     * @throws {AdblockSyntaxError} If the raw string is not a valid CSS injection rule body
     */
  }, {
    key: "parse",
    value: function parse(raw) {
      var loc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultLocation;
      // Parse stylesheet in tolerant mode.
      // "stylesheet" context handles "at-rules" and "rules", but if we only have a single
      // selector, then the strict parser will throw an error, but the tolerant parser will
      // parses it as a raw fragment.
      var stylesheet = CssTree.parse(raw, CssTreeParserContext.stylesheet, true, loc);
      // Check stylesheet
      if (stylesheet.type !== CssTreeNodeType.StyleSheet) {
        var _stylesheet$loc$start, _stylesheet$loc, _stylesheet$loc$end, _stylesheet$loc2;
        throw new AdblockSyntaxError("Invalid stylesheet, expected '".concat(CssTreeNodeType.StyleSheet, "' but got '").concat(stylesheet.type, "' instead"), {
          start: (_stylesheet$loc$start = (_stylesheet$loc = stylesheet.loc) === null || _stylesheet$loc === void 0 ? void 0 : _stylesheet$loc.start) !== null && _stylesheet$loc$start !== void 0 ? _stylesheet$loc$start : loc,
          end: (_stylesheet$loc$end = (_stylesheet$loc2 = stylesheet.loc) === null || _stylesheet$loc2 === void 0 ? void 0 : _stylesheet$loc2.end) !== null && _stylesheet$loc$end !== void 0 ? _stylesheet$loc$end : shiftLoc(loc, raw.length)
        });
      }
      // Stylesheet should contain a single rule
      if (stylesheet.children.size !== 1) {
        var _stylesheet$loc$start2, _stylesheet$loc3, _stylesheet$loc$end2, _stylesheet$loc4;
        throw new AdblockSyntaxError("Invalid stylesheet, expected a single rule but got ".concat(stylesheet.children.size, " instead"), {
          start: (_stylesheet$loc$start2 = (_stylesheet$loc3 = stylesheet.loc) === null || _stylesheet$loc3 === void 0 ? void 0 : _stylesheet$loc3.start) !== null && _stylesheet$loc$start2 !== void 0 ? _stylesheet$loc$start2 : loc,
          end: (_stylesheet$loc$end2 = (_stylesheet$loc4 = stylesheet.loc) === null || _stylesheet$loc4 === void 0 ? void 0 : _stylesheet$loc4.end) !== null && _stylesheet$loc$end2 !== void 0 ? _stylesheet$loc$end2 : shiftLoc(loc, raw.length)
        });
      }
      // At this point there are 3 possible cases:
      //
      // 1. At-rule (ADG):
      //      @media (media query list) { selector list { declaration list } }
      //      @media (media query list) { selector list { remove: true; } }
      //
      // 2. Rule (ADG):
      //      selector list { declaration list }
      //      selector list { remove: true; }
      //
      // 3. Raw:
      //      selector list:style(declaration list)
      //      selector list:remove()
      //      selector list:matches-media(media query list):style(declaration list)
      //      selector list:matches-media(media query list):remove()
      //      invalid input
      //
      var injection = stylesheet.children.first;
      if (!injection) {
        var _stylesheet$loc$start3, _stylesheet$loc5, _stylesheet$loc$end3, _stylesheet$loc6;
        throw new AdblockSyntaxError('Invalid style injection, expected a CSS rule or at-rule, but got nothing', {
          start: (_stylesheet$loc$start3 = (_stylesheet$loc5 = stylesheet.loc) === null || _stylesheet$loc5 === void 0 ? void 0 : _stylesheet$loc5.start) !== null && _stylesheet$loc$start3 !== void 0 ? _stylesheet$loc$start3 : loc,
          end: (_stylesheet$loc$end3 = (_stylesheet$loc6 = stylesheet.loc) === null || _stylesheet$loc6 === void 0 ? void 0 : _stylesheet$loc6.end) !== null && _stylesheet$loc$end3 !== void 0 ? _stylesheet$loc$end3 : shiftLoc(loc, raw.length)
        });
      }
      var mediaQueryList;
      var rule;
      // Try to parse Raw fragment as uBO style injection
      if (injection.type === CssTreeNodeType.Raw) {
        return CssInjectionBodyParser.parseUboStyleInjection(raw, loc);
      }
      // Parse AdGuard style injection
      if (injection.type !== CssTreeNodeType.Rule && injection.type !== CssTreeNodeType.Atrule) {
        var _injection$type, _injection$loc$start, _injection$loc, _injection$loc$end, _injection$loc2;
        throw new AdblockSyntaxError( // eslint-disable-next-line max-len
        "Invalid injection, expected '".concat(CssTreeNodeType.Rule, "' or '").concat(CssTreeNodeType.Atrule, "' but got '").concat((_injection$type = injection.type) !== null && _injection$type !== void 0 ? _injection$type : NONE, "' instead"), {
          start: (_injection$loc$start = (_injection$loc = injection.loc) === null || _injection$loc === void 0 ? void 0 : _injection$loc.start) !== null && _injection$loc$start !== void 0 ? _injection$loc$start : loc,
          end: (_injection$loc$end = (_injection$loc2 = injection.loc) === null || _injection$loc2 === void 0 ? void 0 : _injection$loc2.end) !== null && _injection$loc$end !== void 0 ? _injection$loc$end : shiftLoc(loc, raw.length)
        });
      }
      // At-rule injection (typically used for media queries, but later can be extended easily)
      // TODO: Extend to support other at-rules if needed
      if (injection.type === CssTreeNodeType.Atrule) {
        var atrule = injection;
        // Check at-rule name
        if (atrule.name !== MEDIA) {
          var _atrule$loc$start, _atrule$loc, _atrule$loc$end, _atrule$loc2;
          throw new AdblockSyntaxError("Invalid at-rule name, expected '".concat(MEDIA_MARKER, "' but got '").concat(AT_SIGN).concat(atrule.name, "' instead"), {
            start: (_atrule$loc$start = (_atrule$loc = atrule.loc) === null || _atrule$loc === void 0 ? void 0 : _atrule$loc.start) !== null && _atrule$loc$start !== void 0 ? _atrule$loc$start : loc,
            end: (_atrule$loc$end = (_atrule$loc2 = atrule.loc) === null || _atrule$loc2 === void 0 ? void 0 : _atrule$loc2.end) !== null && _atrule$loc$end !== void 0 ? _atrule$loc$end : shiftLoc(loc, raw.length)
          });
        }
        // Check at-rule prelude
        if (!atrule.prelude || atrule.prelude.type !== CssTreeNodeType.AtrulePrelude) {
          var _atrule$prelude$type, _atrule$prelude, _atrule$loc$start2, _atrule$loc3, _atrule$loc$end2, _atrule$loc4;
          throw new AdblockSyntaxError( // eslint-disable-next-line max-len
          "Invalid at-rule prelude, expected '".concat(CssTreeNodeType.AtrulePrelude, "' but got '").concat((_atrule$prelude$type = (_atrule$prelude = atrule.prelude) === null || _atrule$prelude === void 0 ? void 0 : _atrule$prelude.type) !== null && _atrule$prelude$type !== void 0 ? _atrule$prelude$type : NONE, "' instead"), {
            start: (_atrule$loc$start2 = (_atrule$loc3 = atrule.loc) === null || _atrule$loc3 === void 0 ? void 0 : _atrule$loc3.start) !== null && _atrule$loc$start2 !== void 0 ? _atrule$loc$start2 : loc,
            end: (_atrule$loc$end2 = (_atrule$loc4 = atrule.loc) === null || _atrule$loc4 === void 0 ? void 0 : _atrule$loc4.end) !== null && _atrule$loc$end2 !== void 0 ? _atrule$loc$end2 : shiftLoc(loc, raw.length)
          });
        }
        // At-rule prelude should contain a single media query list
        // eslint-disable-next-line max-len
        if (!atrule.prelude.children.first || atrule.prelude.children.first.type !== CssTreeNodeType.MediaQueryList) {
          var _atrule$prelude$child, _atrule$prelude$child2, _atrule$loc$start3, _atrule$loc5, _atrule$loc$end3, _atrule$loc6;
          throw new AdblockSyntaxError( // eslint-disable-next-line max-len
          "Invalid at-rule prelude, expected a media query list but got '".concat((_atrule$prelude$child = (_atrule$prelude$child2 = atrule.prelude.children.first) === null || _atrule$prelude$child2 === void 0 ? void 0 : _atrule$prelude$child2.type) !== null && _atrule$prelude$child !== void 0 ? _atrule$prelude$child : NONE, "' instead"), {
            start: (_atrule$loc$start3 = (_atrule$loc5 = atrule.loc) === null || _atrule$loc5 === void 0 ? void 0 : _atrule$loc5.start) !== null && _atrule$loc$start3 !== void 0 ? _atrule$loc$start3 : loc,
            end: (_atrule$loc$end3 = (_atrule$loc6 = atrule.loc) === null || _atrule$loc6 === void 0 ? void 0 : _atrule$loc6.end) !== null && _atrule$loc$end3 !== void 0 ? _atrule$loc$end3 : shiftLoc(loc, raw.length)
          });
        }
        // Check at-rule block
        if (!atrule.block || atrule.block.type !== CssTreeNodeType.Block) {
          var _atrule$block$type, _atrule$block, _atrule$loc$start4, _atrule$loc7, _atrule$loc$end4, _atrule$loc8;
          throw new AdblockSyntaxError( // eslint-disable-next-line max-len
          "Invalid at-rule block, expected '".concat(CssTreeNodeType.Block, "' but got '").concat((_atrule$block$type = (_atrule$block = atrule.block) === null || _atrule$block === void 0 ? void 0 : _atrule$block.type) !== null && _atrule$block$type !== void 0 ? _atrule$block$type : NONE, "' instead"), {
            start: (_atrule$loc$start4 = (_atrule$loc7 = atrule.loc) === null || _atrule$loc7 === void 0 ? void 0 : _atrule$loc7.start) !== null && _atrule$loc$start4 !== void 0 ? _atrule$loc$start4 : loc,
            end: (_atrule$loc$end4 = (_atrule$loc8 = atrule.loc) === null || _atrule$loc8 === void 0 ? void 0 : _atrule$loc8.end) !== null && _atrule$loc$end4 !== void 0 ? _atrule$loc$end4 : shiftLoc(loc, raw.length)
          });
        }
        // At-rule block should contain a single rule
        if (!atrule.block.children.first || atrule.block.children.first.type !== CssTreeNodeType.Rule) {
          var _atrule$block$childre, _atrule$block$childre2, _atrule$loc$start5, _atrule$loc9, _atrule$loc$end5, _atrule$loc10;
          throw new AdblockSyntaxError( // eslint-disable-next-line max-len
          "Invalid at-rule block, expected a rule but got '".concat((_atrule$block$childre = (_atrule$block$childre2 = atrule.block.children.first) === null || _atrule$block$childre2 === void 0 ? void 0 : _atrule$block$childre2.type) !== null && _atrule$block$childre !== void 0 ? _atrule$block$childre : NONE, "' instead"), {
            start: (_atrule$loc$start5 = (_atrule$loc9 = atrule.loc) === null || _atrule$loc9 === void 0 ? void 0 : _atrule$loc9.start) !== null && _atrule$loc$start5 !== void 0 ? _atrule$loc$start5 : loc,
            end: (_atrule$loc$end5 = (_atrule$loc10 = atrule.loc) === null || _atrule$loc10 === void 0 ? void 0 : _atrule$loc10.end) !== null && _atrule$loc$end5 !== void 0 ? _atrule$loc$end5 : shiftLoc(loc, raw.length)
          });
        }
        mediaQueryList = atrule.prelude.children.first;
        rule = atrule.block.children.first;
      } else {
        // Otherwise the whole injection is a simple CSS rule (without at-rule)
        rule = injection;
      }
      // Check rule prelude
      if (!rule.prelude || rule.prelude.type !== CssTreeNodeType.SelectorList) {
        var _rule$prelude$type, _rule$prelude, _rule$loc$start, _rule$loc, _rule$loc$end, _rule$loc2;
        throw new AdblockSyntaxError("Invalid rule prelude, expected a selector list but got '".concat((_rule$prelude$type = (_rule$prelude = rule.prelude) === null || _rule$prelude === void 0 ? void 0 : _rule$prelude.type) !== null && _rule$prelude$type !== void 0 ? _rule$prelude$type : NONE, "' instead"), {
          start: (_rule$loc$start = (_rule$loc = rule.loc) === null || _rule$loc === void 0 ? void 0 : _rule$loc.start) !== null && _rule$loc$start !== void 0 ? _rule$loc$start : loc,
          end: (_rule$loc$end = (_rule$loc2 = rule.loc) === null || _rule$loc2 === void 0 ? void 0 : _rule$loc2.end) !== null && _rule$loc$end !== void 0 ? _rule$loc$end : shiftLoc(loc, raw.length)
        });
      }
      // Don't allow :remove() in the selector list at this point, because
      // it doesn't make sense to have it here:
      //  - we parsed 'selector list:remove()' case as uBO-way before, and
      //  - we parse 'selector list { remove: true; }' case as ADG-way
      //    at the end of this function
      walk(rule.prelude, function (node) {
        if (node.type === CssTreeNodeType.PseudoClassSelector) {
          if (node.name === REMOVE) {
            var _node$loc$start12, _node$loc21, _node$loc$end10, _node$loc22;
            throw new AdblockSyntaxError("Invalid selector list, '".concat(REMOVE, "' pseudo-class should be used in the declaration list"), {
              start: (_node$loc$start12 = (_node$loc21 = node.loc) === null || _node$loc21 === void 0 ? void 0 : _node$loc21.start) !== null && _node$loc$start12 !== void 0 ? _node$loc$start12 : loc,
              end: (_node$loc$end10 = (_node$loc22 = node.loc) === null || _node$loc22 === void 0 ? void 0 : _node$loc22.end) !== null && _node$loc$end10 !== void 0 ? _node$loc$end10 : shiftLoc(loc, raw.length)
            });
          }
        }
      });
      // Check rule block
      if (!rule.block || rule.block.type !== CssTreeNodeType.Block) {
        var _rule$block$type, _rule$block, _rule$loc$start$offse, _rule$loc3;
        throw new AdblockSyntaxError("Invalid rule block, expected a block but got '".concat((_rule$block$type = (_rule$block = rule.block) === null || _rule$block === void 0 ? void 0 : _rule$block.type) !== null && _rule$block$type !== void 0 ? _rule$block$type : NONE, "' instead"), locRange(loc, (_rule$loc$start$offse = (_rule$loc3 = rule.loc) === null || _rule$loc3 === void 0 ? void 0 : _rule$loc3.start.offset) !== null && _rule$loc$start$offse !== void 0 ? _rule$loc$start$offse : 0, raw.length));
      }
      // Rule block should contain a Declaration nodes
      rule.block.children.forEach(function (node) {
        if (node.type !== CssTreeNodeType.Declaration) {
          var _node$loc$start13, _node$loc23, _node$loc$end11, _node$loc24;
          throw new AdblockSyntaxError("Invalid rule block, expected a declaration but got '".concat(node.type, "' instead"), {
            start: (_node$loc$start13 = (_node$loc23 = node.loc) === null || _node$loc23 === void 0 ? void 0 : _node$loc23.start) !== null && _node$loc$start13 !== void 0 ? _node$loc$start13 : loc,
            end: (_node$loc$end11 = (_node$loc24 = node.loc) === null || _node$loc24 === void 0 ? void 0 : _node$loc24.end) !== null && _node$loc$end11 !== void 0 ? _node$loc$end11 : shiftLoc(loc, raw.length)
          });
        }
      });
      var declarationList = {
        type: 'DeclarationList',
        loc: rule.block.loc,
        children: []
      };
      var declarationKeys = [];
      var remove = false;
      // Walk through the rule block and collect declarations
      walk(rule.block, {
        enter: function enter(node) {
          if (node.type === CssTreeNodeType.Declaration) {
            declarationList.children.push(toPlainObject(node));
            declarationKeys.push(node.property);
          }
        }
      });
      // Check for "remove" declaration
      if (declarationKeys.includes(REMOVE)) {
        if (declarationKeys.length > 1) {
          var _rule$block$loc$start, _rule$block$loc, _rule$block$loc$end, _rule$block$loc2;
          throw new AdblockSyntaxError("Invalid declaration list, '".concat(REMOVE, "' declaration should be used alone"), {
            start: (_rule$block$loc$start = (_rule$block$loc = rule.block.loc) === null || _rule$block$loc === void 0 ? void 0 : _rule$block$loc.start) !== null && _rule$block$loc$start !== void 0 ? _rule$block$loc$start : loc,
            end: (_rule$block$loc$end = (_rule$block$loc2 = rule.block.loc) === null || _rule$block$loc2 === void 0 ? void 0 : _rule$block$loc2.end) !== null && _rule$block$loc$end !== void 0 ? _rule$block$loc$end : shiftLoc(loc, raw.length)
          });
        }
        remove = true;
      }
      // It is safe to cast plain objects here
      return {
        type: 'CssInjectionRuleBody',
        loc: locRange(loc, 0, raw.length),
        mediaQueryList: mediaQueryList ? toPlainObject(mediaQueryList) : undefined,
        selectorList: toPlainObject(rule.prelude),
        declarationList: remove ? undefined : declarationList,
        remove: remove
      };
    }
    /**
     * Generates a string representation of the CSS injection rule body (serialized).
     *
     * @param ast Raw CSS injection rule body
     * @param syntax Syntax to use (default: AdGuard)
     * @returns String representation of the CSS injection rule body
     * @throws If the body is invalid
     */
  }, {
    key: "generate",
    value: function generate(ast) {
      var syntax = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : AdblockSyntax.Adg;
      var result = EMPTY;
      if (ast.remove && ast.declarationList) {
        throw new Error('Invalid body, both "remove" and "declarationList" are present');
      }
      if (syntax === AdblockSyntax.Adg) {
        if (ast.mediaQueryList) {
          result += MEDIA_MARKER;
          result += SPACE;
          result += CssTree.generateMediaQueryList(fromPlainObject(ast.mediaQueryList));
          result += SPACE;
          result += OPEN_CURLY_BRACKET;
          result += SPACE;
        }
        result += CssTree.generateSelectorList(fromPlainObject(ast.selectorList));
        result += SPACE;
        result += OPEN_CURLY_BRACKET;
        result += SPACE;
        if (ast.remove) {
          result += REMOVE_DECLARATION;
        } else if (ast.declarationList) {
          result += CssTree.generateDeclarationList(fromPlainObject(ast.declarationList));
        } else {
          throw new Error('Invalid body');
        }
        result += SPACE;
        result += CLOSE_CURLY_BRACKET;
        if (ast.mediaQueryList) {
          result += SPACE;
          result += CLOSE_CURLY_BRACKET;
        }
      } else if (syntax === AdblockSyntax.Ubo) {
        // Generate regular selector list
        result += CssTree.generateSelectorList(fromPlainObject(ast.selectorList));
        // Generate media query list, if present (:matches-media(...))
        if (ast.mediaQueryList) {
          result += COLON;
          result += MATCHES_MEDIA;
          result += OPEN_PARENTHESIS;
          result += CssTree.generateMediaQueryList(fromPlainObject(ast.mediaQueryList));
          result += CLOSE_PARENTHESIS;
        }
        // Generate remove or style pseudo-class (:remove() or :style(...))
        if (ast.remove) {
          result += COLON;
          result += REMOVE;
          result += OPEN_PARENTHESIS;
          result += CLOSE_PARENTHESIS;
        } else if (ast.declarationList) {
          result += COLON;
          result += STYLE;
          result += OPEN_PARENTHESIS;
          result += CssTree.generateDeclarationList(fromPlainObject(ast.declarationList));
          result += CLOSE_PARENTHESIS;
        } else {
          throw new Error('Invalid body');
        }
      } else {
        throw new Error("Unsupported syntax: ".concat(syntax));
      }
      return result;
    }
  }]);
  return CssInjectionBodyParser;
}();
/**
 * @file Scriptlet injection rule body parser
 */
/**
 * `ScriptletBodyParser` is responsible for parsing the body of a scriptlet rule.
 *
 * Please note that the parser will parse any scriptlet rule if it is syntactically correct.
 * For example, it will parse this:
 * ```adblock
 * example.com#%#//scriptlet('scriptlet0', 'arg0')
 * ```
 *
 * but it didn't check if the scriptlet `scriptlet0` actually supported by any adblocker.
 *
 * @see {@link https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#scriptlets}
 * @see {@link https://github.com/gorhill/uBlock/wiki/Static-filter-syntax#scriptlet-injection}
 * @see {@link https://help.eyeo.com/adblockplus/snippet-filters-tutorial}
 */
var ScriptletInjectionBodyParser = /*#__PURE__*/function () {
  function ScriptletInjectionBodyParser() {
    _classCallCheck(this, ScriptletInjectionBodyParser);
  }
  _createClass(ScriptletInjectionBodyParser, null, [{
    key: "parseAdgAndUboScriptletCall",
    value:
    /**
     * Parses a raw ADG/uBO scriptlet call body.
     *
     * @param raw Raw scriptlet call body
     * @param loc Location of the body
     * @returns Scriptlet rule body AST
     * @throws If the body is syntactically incorrect
     * @example
     * ```
     * //scriptlet('scriptlet0', 'arg0')
     * js(scriptlet0, arg0, arg1, arg2)
     * ```
     */
    function parseAdgAndUboScriptletCall(raw) {
      var loc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultLocation;
      var offset = 0;
      // Skip leading spaces
      offset = StringUtils.skipWS(raw, offset);
      // Scriptlet call should start with "js" or "//scriptlet"
      if (raw.startsWith(ADG_SCRIPTLET_MASK, offset)) {
        offset += ADG_SCRIPTLET_MASK.length;
      } else if (raw.startsWith(UBO_SCRIPTLET_MASK, offset)) {
        offset += UBO_SCRIPTLET_MASK.length;
      } else {
        throw new AdblockSyntaxError( // eslint-disable-next-line max-len
        "Invalid AdGuard/uBlock scriptlet call, no scriptlet call mask '".concat(ADG_SCRIPTLET_MASK, "' or '").concat(UBO_SCRIPTLET_MASK, "' found"), locRange(loc, offset, raw.length));
      }
      // Whitespace is not allowed after the mask
      if (raw[offset] === SPACE) {
        throw new AdblockSyntaxError('Invalid AdGuard/uBlock scriptlet call, whitespace is not allowed after the scriptlet call mask', locRange(loc, offset, offset + 1));
      }
      // Parameter list should be wrapped in parentheses
      if (raw[offset] !== OPEN_PARENTHESIS) {
        throw new AdblockSyntaxError( // eslint-disable-next-line max-len
        "Invalid AdGuard/uBlock scriptlet call, no opening parentheses '".concat(OPEN_PARENTHESIS, "' found"), locRange(loc, offset, raw.length));
      }
      // Save the offset of the opening parentheses
      var openingParenthesesIndex = offset;
      // Find closing parentheses
      // eslint-disable-next-line max-len
      var closingParenthesesIndex = StringUtils.findUnescapedNonStringNonRegexChar(raw, CLOSE_PARENTHESIS, openingParenthesesIndex + 1);
      // Closing parentheses should be present
      if (closingParenthesesIndex === -1) {
        throw new AdblockSyntaxError( // eslint-disable-next-line max-len
        "Invalid AdGuard/uBlock scriptlet call, no closing parentheses '".concat(CLOSE_PARENTHESIS, "' found"), locRange(loc, offset, raw.length));
      }
      // Shouldn't have any characters after the closing parentheses
      if (StringUtils.skipWSBack(raw) !== closingParenthesesIndex) {
        throw new AdblockSyntaxError( // eslint-disable-next-line max-len
        "Invalid AdGuard/uBlock scriptlet call, unexpected characters after the closing parentheses '".concat(CLOSE_PARENTHESIS, "'"), locRange(loc, closingParenthesesIndex + 1, raw.length));
      }
      // Parse parameter list
      var params = ParameterListParser.parse(raw.substring(openingParenthesesIndex + 1, closingParenthesesIndex), COMMA, shiftLoc(loc, openingParenthesesIndex + 1));
      // Allow empty scritptlet call: js() or //scriptlet(), but not allow parameters
      // without scriptlet: js(, arg0, arg1) or //scriptlet(, arg0, arg1)
      if (params.children.length > 0 && params.children[0].value.trim() === EMPTY) {
        throw new AdblockSyntaxError(
        // eslint-disable-next-line max-len
        'Invalid AdGuard/uBlock scriptlet call, no scriptlet name specified', locRange(loc, offset, raw.length));
      }
      return {
        type: 'ScriptletInjectionRuleBody',
        loc: locRange(loc, 0, raw.length),
        children: [params]
      };
    }
    /**
     * Parses a raw ABP scriptlet call body.
     *
     * @param raw Raw scriptlet call body
     * @param loc Body location
     * @returns Parsed scriptlet rule body
     * @throws If the body is syntactically incorrect
     * @example
     * ```
     * scriptlet0 arg0 arg1 arg2; scriptlet1 arg0 arg1 arg2
     * ```
     */
  }, {
    key: "parseAbpSnippetCall",
    value: function parseAbpSnippetCall(raw) {
      var loc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultLocation;
      var result = {
        type: 'ScriptletInjectionRuleBody',
        loc: locRange(loc, 0, raw.length),
        children: []
      };
      var offset = 0;
      // Skip leading spaces
      offset = StringUtils.skipWS(raw, offset);
      while (offset < raw.length) {
        offset = StringUtils.skipWS(raw, offset);
        var scriptletCallStart = offset;
        // Find the next semicolon or the end of the string
        var semicolonIndex = StringUtils.findUnescapedNonStringNonRegexChar(raw, SEMICOLON, offset);
        if (semicolonIndex === -1) {
          semicolonIndex = raw.length;
        }
        var scriptletCallEnd = Math.max(StringUtils.skipWSBack(raw, semicolonIndex - 1) + 1, scriptletCallStart);
        var params = ParameterListParser.parse(raw.substring(scriptletCallStart, scriptletCallEnd), SPACE, shiftLoc(loc, scriptletCallStart));
        // Parse the scriptlet call
        result.children.push(params);
        // Skip the semicolon
        offset = semicolonIndex + 1;
      }
      if (result.children.length === 0) {
        throw new AdblockSyntaxError(
        // eslint-disable-next-line max-len
        'Invalid ABP snippet call, no scriptlets specified at all', locRange(loc, 0, raw.length));
      }
      return result;
    }
    /**
     * Parses the specified scriptlet injection rule body into an AST.
     *
     * @param raw Raw rule body
     * @param syntax Preferred syntax to use. If not specified, the syntax will be
     * automatically detected, but it may lead to incorrect parsing results.
     * @param loc Rule body location
     * @returns Parsed rule body
     * @throws If the rule body is syntactically incorrect
     */
  }, {
    key: "parse",
    value: function parse(raw) {
      var syntax = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var loc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultLocation;
      var trimmed = raw.trim();
      if (syntax === null && (trimmed.startsWith(ADG_SCRIPTLET_MASK)
      // We shouldn't parse ABP's json-prune as a uBlock scriptlet call
      || trimmed.startsWith(UBO_SCRIPTLET_MASK) && !trimmed.startsWith('json')) || syntax === AdblockSyntax.Adg || syntax === AdblockSyntax.Ubo) {
        return ScriptletInjectionBodyParser.parseAdgAndUboScriptletCall(trimmed, loc);
      }
      return ScriptletInjectionBodyParser.parseAbpSnippetCall(trimmed, loc);
    }
    /**
     * Generates a string representation of the rule body for the specified syntax.
     *
     * @param ast Scriptlet injection rule body
     * @param syntax Syntax to use
     * @returns String representation of the rule body
     * @throws If the rule body is not supported by the specified syntax
     * @throws If the AST is invalid
     */
  }, {
    key: "generate",
    value: function generate(ast, syntax) {
      var result = EMPTY;
      if (ast.children.length === 0) {
        throw new Error('Invalid AST, no scriptlet calls specified');
      }
      // AdGuard and uBlock doesn't support multiple scriptlet calls in one rule
      if (syntax === AdblockSyntax.Adg || syntax === AdblockSyntax.Ubo) {
        if (ast.children.length > 1) {
          throw new Error('AdGuard and uBlock syntaxes don\'t support multiple scriptlet calls in one rule');
        }
        var scriptletCall = ast.children[0];
        if (scriptletCall.children.length === 0) {
          throw new Error('Scriptlet name is not specified');
        }
        if (syntax === AdblockSyntax.Adg) {
          result += ADG_SCRIPTLET_MASK;
        } else {
          result += UBO_SCRIPTLET_MASK;
        }
        result += OPEN_PARENTHESIS;
        result += ParameterListParser.generate(scriptletCall);
        result += CLOSE_PARENTHESIS;
      } else {
        // First generate a string representation of all scriptlet calls, then join them with semicolons
        var scriptletCalls = [];
        var _iterator = _createForOfIteratorHelper(ast.children),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _scriptletCall = _step.value;
            if (_scriptletCall.children.length === 0) {
              throw new Error('Scriptlet name is not specified');
            }
            scriptletCalls.push(ParameterListParser.generate(_scriptletCall, SPACE));
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        result += scriptletCalls.join(SEMICOLON + SPACE);
      }
      return result;
    }
  }]);
  return ScriptletInjectionBodyParser;
}();
/**
 * @file HTML filtering rule body parser
 */
/**
 * `HtmlBodyParser` is responsible for parsing the body of HTML filtering rules.
 *
 * Please note that this parser will read ANY selector if it is syntactically correct.
 * Checking whether this selector is actually compatible with a given adblocker is not
 * done at this level.
 *
 * @see {@link https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#html-filtering-rules}
 * @see {@link https://github.com/gorhill/uBlock/wiki/Static-filter-syntax#html-filters}
 */
var HtmlFilteringBodyParser = /*#__PURE__*/function () {
  function HtmlFilteringBodyParser() {
    _classCallCheck(this, HtmlFilteringBodyParser);
  }
  _createClass(HtmlFilteringBodyParser, null, [{
    key: "escapeDoubleQuotes",
    value:
    /**
     * Convert "" to \" within strings, because CSSTree does not recognize "".
     *
     * @param selector CSS selector string
     * @returns Escaped CSS selector
     * @see {@link https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#tag-content}
     */
    function escapeDoubleQuotes(selector) {
      var withinString = false;
      var result = EMPTY;
      for (var i = 0; i < selector.length; i += 1) {
        if (!withinString && selector[i] === DOUBLE_QUOTE_MARKER) {
          withinString = true;
          result += selector[i];
        } else if (withinString && selector[i] === DOUBLE_QUOTE_MARKER && selector[i + 1] === DOUBLE_QUOTE_MARKER) {
          result += ESCAPE_CHARACTER + DOUBLE_QUOTE_MARKER;
          i += 1;
        } else if (withinString && selector[i] === DOUBLE_QUOTE_MARKER && selector[i + 1] !== DOUBLE_QUOTE_MARKER) {
          result += DOUBLE_QUOTE_MARKER;
          withinString = false;
        } else {
          result += selector[i];
        }
      }
      return result;
    }
    /**
     * Convert \" to "" within strings.
     *
     * @param selector CSS selector string
     * @returns Unescaped CSS selector
     * @see {@link https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#tag-content}
     */
  }, {
    key: "unescapeDoubleQuotes",
    value: function unescapeDoubleQuotes(selector) {
      var withinString = false;
      var result = EMPTY;
      for (var i = 0; i < selector.length; i += 1) {
        if (selector[i] === DOUBLE_QUOTE_MARKER && selector[i - 1] !== ESCAPE_CHARACTER) {
          withinString = !withinString;
          result += selector[i];
        } else if (withinString && selector[i] === ESCAPE_CHARACTER && selector[i + 1] === DOUBLE_QUOTE_MARKER) {
          result += DOUBLE_QUOTE_MARKER;
        } else {
          result += selector[i];
        }
      }
      return result;
    }
    /**
     * Parses a raw cosmetic rule body as an HTML filtering rule body.
     * Please note that compatibility is not yet checked at this point.
     *
     * @param raw Raw body
     * @param loc Location of the body
     * @throws If the body is not syntactically correct (CSSTree throws)
     * @returns HTML filtering rule body AST
     */
  }, {
    key: "parse",
    value: function parse(raw) {
      var loc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultLocation;
      // Convert "" to \" (this theoretically does not affect the uBlock rules)
      var escapedRawBody = HtmlFilteringBodyParser.escapeDoubleQuotes(raw);
      // eslint-disable-next-line max-len
      var body;
      try {
        // Try to parse the body as a CSS selector list (default)
        body = CssTree.parsePlain(escapedRawBody, CssTreeParserContext.selectorList, false, loc);
      } catch (error) {
        // If the body is not a selector list, it might be a function node: `example.org##^responseheader(name)`
        // We should check this error "strictly", because we don't want to loose other previously detected selector
        // errors (if any).
        if (error instanceof Error && error.message.indexOf('Selector is expected') !== -1) {
          var ast = CssTree.parsePlain(escapedRawBody, CssTreeParserContext.value, false, loc);
          if (ast.type !== 'Value') {
            throw new AdblockSyntaxError("Expected a 'Value' node first child, got '".concat(ast.type, "'"), locRange(loc, 0, raw.length));
          }
          // First child must be a function node
          var func = ast.children[0];
          if (func.type !== 'Function') {
            throw new AdblockSyntaxError("Expected a 'Function' node, got '".concat(func.type, "'"), locRange(loc, 0, raw.length));
          }
          body = func;
        } else {
          throw error;
        }
      }
      return {
        type: 'HtmlFilteringRuleBody',
        loc: locRange(loc, 0, raw.length),
        body: body
      };
    }
    /**
     * Converts an HTML filtering rule body AST to a string.
     *
     * @param ast HTML filtering rule body AST
     * @param syntax Desired syntax of the generated result
     * @returns Raw string
     */
  }, {
    key: "generate",
    value: function generate(ast) {
      var syntax = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : AdblockSyntax.Adg;
      if (syntax === AdblockSyntax.Adg && ast.body.type === 'Function') {
        throw new Error('AdGuard syntax does not support function nodes');
      }
      var result = EMPTY;
      if (ast.body.type === 'SelectorList') {
        result = CssTree.generateSelectorList(fromPlainObject(ast.body));
      } else if (ast.body.type === 'Function') {
        result = _generate(fromPlainObject(ast.body));
      } else {
        throw new Error('Unexpected body type');
      }
      // In the case of AdGuard syntax, the "" case must be handled
      if (syntax === AdblockSyntax.Adg) {
        result = HtmlFilteringBodyParser.unescapeDoubleQuotes(result);
      }
      return result;
    }
  }]);
  return HtmlFilteringBodyParser;
}();
/**
 * `CosmeticRuleParser` is responsible for parsing cosmetic rules.
 *
 * Where possible, it automatically detects the difference between supported syntaxes:
 *  - AdGuard
 *  - uBlock Origin
 *  - Adblock Plus
 *
 * If the syntax is common / cannot be determined, the parser gives `Common` syntax.
 *
 * Please note that syntactically correct rules are parsed even if they are not actually
 * compatible with the given adblocker. This is a completely natural behavior, meaningful
 * checking of compatibility is not done at the parser level.
 */
// TODO: Make raw body parsing optional
var CosmeticRuleParser = /*#__PURE__*/function () {
  function CosmeticRuleParser() {
    _classCallCheck(this, CosmeticRuleParser);
  }
  _createClass(CosmeticRuleParser, null, [{
    key: "isCosmeticRule",
    value:
    /**
     * Determines whether a rule is a cosmetic rule. The rule is considered cosmetic if it
     * contains a cosmetic rule separator.
     *
     * @param raw Raw rule
     * @returns `true` if the rule is a cosmetic rule, `false` otherwise
     */
    function isCosmeticRule(raw) {
      var trimmed = raw.trim();
      if (CommentRuleParser.isCommentRule(trimmed)) {
        return false;
      }
      return CosmeticRuleSeparatorUtils.find(trimmed) !== null;
    }
    /**
     * Parses a cosmetic rule. The structure of the cosmetic rules:
     *  - pattern (AdGuard pattern can have modifiers, other syntaxes don't)
     *  - separator
     *  - body
     *
     * @param raw Raw cosmetic rule
     * @param loc Location of the rule
     * @returns
     * Parsed cosmetic rule AST or null if it failed to parse based on the known cosmetic rules
     * @throws If the input matches the cosmetic rule pattern but syntactically invalid
     */
  }, {
    key: "parse",
    value: function parse(raw) {
      var _separator$loc$start$, _separator$loc, _separator$loc$end$of, _separator$loc2;
      var loc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultLocation;
      // Find separator (every cosmetic rule has one)
      var separatorResult = CosmeticRuleSeparatorUtils.find(raw);
      // If there is no separator, it is not a cosmetic rule
      if (!separatorResult) {
        return null;
      }
      // The syntax is initially common
      var syntax = AdblockSyntax.Common;
      var patternStart = StringUtils.skipWS(raw);
      var patternEnd = StringUtils.skipWSBack(raw, separatorResult.start - 1) + 1;
      var bodyStart = separatorResult.end;
      var bodyEnd = StringUtils.skipWSBack(raw) + 1;
      // Parse pattern
      var rawPattern = raw.substring(patternStart, patternEnd);
      var domainListStart = patternStart;
      var rawDomainList = rawPattern;
      var modifiers;
      // AdGuard modifier list
      if (rawPattern[0] === OPEN_SQUARE_BRACKET) {
        if (rawPattern[1] !== DOLLAR_SIGN) {
          throw new AdblockSyntaxError("Missing $ at the beginning of the AdGuard modifier list in pattern '".concat(rawPattern, "'"), locRange(loc, patternStart, patternEnd));
        }
        // Find the end of the modifier list
        var modifierListEnd = StringUtils.findNextUnescapedCharacter(rawPattern, CLOSE_SQUARE_BRACKET);
        if (modifierListEnd === -1) {
          throw new AdblockSyntaxError("Missing ] at the end of the AdGuard modifier list in pattern '".concat(rawPattern, "'"), locRange(loc, patternStart, patternEnd));
        }
        // Parse modifier list
        modifiers = ModifierListParser.parse(rawPattern.substring(patternStart + 2, modifierListEnd), shiftLoc(loc, patternStart + 2));
        // Domain list is everything after the modifier list
        rawDomainList = rawPattern.substring(modifierListEnd + 1);
        domainListStart = modifierListEnd + 1;
        // Change syntax, since only AdGuard supports this type of modifier list
        syntax = AdblockSyntax.Adg;
      }
      // Parse domain list
      var domains = DomainListParser.parse(rawDomainList, ',', shiftLoc(loc, domainListStart));
      // Parse body
      var rawBody = raw.substring(bodyStart, bodyEnd);
      var body;
      // Separator node
      var separator = {
        type: 'Value',
        loc: locRange(loc, separatorResult.start, separatorResult.end),
        value: separatorResult.separator
      };
      var exception = CosmeticRuleSeparatorUtils.isException(separatorResult.separator);
      switch (separatorResult.separator) {
        // Element hiding rules
        case '##':
        case '#@#':
        case '#?#':
        case '#@?#':
          // Check if the body is a uBO CSS injection. Since element hiding rules
          // are very common, we should check this with a fast check first.
          if (CssInjectionBodyParser.isUboCssInjection(rawBody)) {
            if (syntax === AdblockSyntax.Adg) {
              throw new AdblockSyntaxError('AdGuard modifier list is not supported in uBO CSS injection rules', locRange(loc, patternStart, patternEnd));
            }
            return {
              category: RuleCategory.Cosmetic,
              type: CosmeticRuleType.CssInjectionRule,
              loc: locRange(loc, 0, raw.length),
              raws: {
                text: raw
              },
              syntax: AdblockSyntax.Ubo,
              exception: exception,
              modifiers: modifiers,
              domains: domains,
              separator: separator,
              body: _objectSpread(_objectSpread({}, CssInjectionBodyParser.parse(rawBody, shiftLoc(loc, bodyStart))), {}, {
                raw: rawBody
              })
            };
          }
          return {
            category: RuleCategory.Cosmetic,
            type: CosmeticRuleType.ElementHidingRule,
            loc: locRange(loc, 0, raw.length),
            raws: {
              text: raw
            },
            syntax: syntax,
            exception: exception,
            modifiers: modifiers,
            domains: domains,
            separator: separator,
            body: _objectSpread(_objectSpread({}, ElementHidingBodyParser.parse(rawBody, shiftLoc(loc, bodyStart))), {}, {
              raw: rawBody
            })
          };
        // ADG CSS injection / ABP snippet injection
        case '#$#':
        case '#@$#':
        case '#$?#':
        case '#@$?#':
          // ADG CSS injection
          if (CssInjectionBodyParser.isAdgCssInjection(rawBody)) {
            return {
              category: RuleCategory.Cosmetic,
              type: CosmeticRuleType.CssInjectionRule,
              loc: locRange(loc, 0, raw.length),
              raws: {
                text: raw
              },
              syntax: AdblockSyntax.Adg,
              exception: exception,
              modifiers: modifiers,
              domains: domains,
              separator: separator,
              body: _objectSpread(_objectSpread({}, CssInjectionBodyParser.parse(rawBody, shiftLoc(loc, bodyStart))), {}, {
                raw: rawBody
              })
            };
          }
          // ABP snippet injection
          if (['#$#', '#@$#'].includes(separator.value)) {
            if (syntax === AdblockSyntax.Adg) {
              throw new AdblockSyntaxError('AdGuard modifier list is not supported in ABP snippet injection rules', locRange(loc, patternStart, patternEnd));
            }
            return {
              category: RuleCategory.Cosmetic,
              type: CosmeticRuleType.ScriptletInjectionRule,
              loc: locRange(loc, 0, raw.length),
              raws: {
                text: raw
              },
              syntax: AdblockSyntax.Abp,
              exception: exception,
              modifiers: modifiers,
              domains: domains,
              separator: separator,
              body: _objectSpread(_objectSpread({}, ScriptletInjectionBodyParser.parse(rawBody, AdblockSyntax.Abp, shiftLoc(loc, bodyStart))), {}, {
                raw: rawBody
              })
            };
          }
          // ABP snippet injection is not supported for #$?# and #@$?#
          throw new AdblockSyntaxError("Separator '".concat(separator.value, "' is not supported for scriptlet injection"), locRange(loc, (_separator$loc$start$ = (_separator$loc = separator.loc) === null || _separator$loc === void 0 ? void 0 : _separator$loc.start.offset) !== null && _separator$loc$start$ !== void 0 ? _separator$loc$start$ : 0, (_separator$loc$end$of = (_separator$loc2 = separator.loc) === null || _separator$loc2 === void 0 ? void 0 : _separator$loc2.end.offset) !== null && _separator$loc$end$of !== void 0 ? _separator$loc$end$of : raw.length));
        // uBO scriptlet injection
        case '##+':
        case '#@#+':
          if (syntax === AdblockSyntax.Adg) {
            throw new AdblockSyntaxError('AdGuard modifier list is not supported in uBO scriptlet injection rules', locRange(loc, patternStart, patternEnd));
          }
          // uBO scriptlet injection
          return {
            category: RuleCategory.Cosmetic,
            type: CosmeticRuleType.ScriptletInjectionRule,
            loc: locRange(loc, 0, raw.length),
            raws: {
              text: raw
            },
            syntax: AdblockSyntax.Ubo,
            exception: exception,
            modifiers: modifiers,
            domains: domains,
            separator: separator,
            body: _objectSpread(_objectSpread({}, ScriptletInjectionBodyParser.parse(rawBody, AdblockSyntax.Ubo, shiftLoc(loc, bodyStart))), {}, {
              raw: rawBody
            })
          };
        // ADG JS / scriptlet injection
        case '#%#':
        case '#@%#':
          // ADG scriptlet injection
          if (rawBody.trim().startsWith(ADG_SCRIPTLET_MASK)) {
            // ADG scriptlet injection
            return {
              category: RuleCategory.Cosmetic,
              type: CosmeticRuleType.ScriptletInjectionRule,
              loc: locRange(loc, 0, raw.length),
              raws: {
                text: raw
              },
              syntax: AdblockSyntax.Adg,
              exception: exception,
              modifiers: modifiers,
              domains: domains,
              separator: separator,
              body: _objectSpread(_objectSpread({}, ScriptletInjectionBodyParser.parse(rawBody, AdblockSyntax.Ubo, shiftLoc(loc, bodyStart))), {}, {
                raw: rawBody
              })
            };
          }
          // Don't allow empty body
          if (bodyEnd <= bodyStart) {
            throw new AdblockSyntaxError('Empty body in JS injection rule', locRange(loc, 0, raw.length));
          }
          // ADG JS injection
          return {
            category: RuleCategory.Cosmetic,
            type: CosmeticRuleType.JsInjectionRule,
            loc: locRange(loc, 0, raw.length),
            raws: {
              text: raw
            },
            syntax: AdblockSyntax.Adg,
            exception: exception,
            modifiers: modifiers,
            domains: domains,
            separator: separator,
            body: {
              type: 'Value',
              loc: locRange(loc, bodyStart, bodyEnd),
              value: rawBody,
              raw: rawBody
            }
          };
        // uBO HTML filtering
        case '##^':
        case '#@#^':
          if (syntax === AdblockSyntax.Adg) {
            throw new AdblockSyntaxError('AdGuard modifier list is not supported in uBO HTML filtering rules', locRange(loc, patternStart, patternEnd));
          }
          return {
            category: RuleCategory.Cosmetic,
            type: CosmeticRuleType.HtmlFilteringRule,
            loc: locRange(loc, 0, raw.length),
            raws: {
              text: raw
            },
            syntax: AdblockSyntax.Ubo,
            exception: exception,
            modifiers: modifiers,
            domains: domains,
            separator: separator,
            body: _objectSpread(_objectSpread({}, HtmlFilteringBodyParser.parse(rawBody, shiftLoc(loc, bodyStart))), {}, {
              raw: rawBody
            })
          };
        // ADG HTML filtering
        case '$$':
        case '$@$':
          body = HtmlFilteringBodyParser.parse(rawBody, shiftLoc(loc, bodyStart));
          body.raw = rawBody;
          if (body.body.type === 'Function') {
            throw new AdblockSyntaxError('Functions are not supported in ADG HTML filtering rules', locRange(loc, bodyStart, bodyEnd));
          }
          return {
            category: RuleCategory.Cosmetic,
            type: CosmeticRuleType.HtmlFilteringRule,
            loc: locRange(loc, 0, raw.length),
            raws: {
              text: raw
            },
            syntax: AdblockSyntax.Adg,
            exception: exception,
            modifiers: modifiers,
            domains: domains,
            separator: separator,
            body: body
          };
        default:
          return null;
      }
    }
    /**
     * Generates the rule pattern from the AST.
     *
     * @param ast Cosmetic rule AST
     * @returns Raw rule pattern
     * @example
     * - '##.foo' → ''
     * - 'example.com,example.org##.foo' → 'example.com,example.org'
     * - '[$path=/foo/bar]example.com##.foo' → '[$path=/foo/bar]example.com'
     */
  }, {
    key: "generatePattern",
    value: function generatePattern(ast) {
      var result = EMPTY;
      // AdGuard modifiers (if any)
      if (ast.syntax === AdblockSyntax.Adg && ast.modifiers && ast.modifiers.children.length > 0) {
        result += OPEN_SQUARE_BRACKET;
        result += DOLLAR_SIGN;
        result += ModifierListParser.generate(ast.modifiers);
        result += CLOSE_SQUARE_BRACKET;
      }
      // Domain list (if any)
      result += DomainListParser.generate(ast.domains);
      return result;
    }
    /**
     * Generates the rule body from the AST.
     *
     * @param ast Cosmetic rule AST
     * @returns Raw rule body
     * @example
     * - '##.foo' → '.foo'
     * - 'example.com,example.org##.foo' → '.foo'
     * - 'example.com#%#//scriptlet('foo')' → '//scriptlet('foo')'
     */
  }, {
    key: "generateBody",
    value: function generateBody(ast) {
      var result = EMPTY;
      // Body
      switch (ast.type) {
        case CosmeticRuleType.ElementHidingRule:
          result = ElementHidingBodyParser.generate(ast.body);
          break;
        case CosmeticRuleType.CssInjectionRule:
          result = CssInjectionBodyParser.generate(ast.body, ast.syntax);
          break;
        case CosmeticRuleType.HtmlFilteringRule:
          result = HtmlFilteringBodyParser.generate(ast.body, ast.syntax);
          break;
        case CosmeticRuleType.JsInjectionRule:
          // Native JS code
          result = ast.body.value;
          break;
        case CosmeticRuleType.ScriptletInjectionRule:
          result = ScriptletInjectionBodyParser.generate(ast.body, ast.syntax);
          break;
        default:
          throw new Error('Unknown cosmetic rule type');
      }
      return result;
    }
    /**
     * Converts a cosmetic rule AST into a string.
     *
     * @param ast Cosmetic rule AST
     * @returns Raw string
     */
  }, {
    key: "generate",
    value: function generate(ast) {
      var result = EMPTY;
      // Pattern
      result += CosmeticRuleParser.generatePattern(ast);
      // Separator
      result += ast.separator.value;
      // Body
      result += CosmeticRuleParser.generateBody(ast);
      return result;
    }
  }]);
  return CosmeticRuleParser;
}();
/**
 * `NetworkRuleParser` is responsible for parsing network rules.
 *
 * Please note that this will parse all syntactically correct network rules.
 * Modifier compatibility is not checked at the parser level.
 *
 * @see {@link https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#basic-rules}
 * @see {@link https://help.eyeo.com/adblockplus/how-to-write-filters#basic}
 */
var NetworkRuleParser = /*#__PURE__*/function () {
  function NetworkRuleParser() {
    _classCallCheck(this, NetworkRuleParser);
  }
  _createClass(NetworkRuleParser, null, [{
    key: "parse",
    value:
    /**
     * Parses a network rule (also known as basic rule).
     *
     * @param raw Raw rule
     * @param loc Location of the rule
     * @returns Network rule AST
     */
    function parse(raw) {
      var loc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultLocation;
      var offset = 0;
      // Skip leading whitespace
      offset = StringUtils.skipWS(raw, offset);
      // Handle exception rules
      var exception = false;
      // Rule starts with exception marker, eg @@||example.com,
      // where @@ is the exception marker
      if (raw.startsWith(NETWORK_RULE_EXCEPTION_MARKER, offset)) {
        offset += NETWORK_RULE_EXCEPTION_MARKER_LEN;
        exception = true;
      }
      // Save the start of the pattern
      var patternStart = offset;
      // Find corresponding (last) separator ($) character (if any)
      var separatorIndex = NetworkRuleParser.findNetworkRuleSeparatorIndex(raw);
      // Save the end of the pattern
      var patternEnd = separatorIndex === -1 ? StringUtils.skipWSBack(raw) + 1 : StringUtils.skipWSBack(raw, separatorIndex - 1) + 1;
      // Extract the pattern
      var pattern = {
        type: 'Value',
        loc: locRange(loc, patternStart, patternEnd),
        value: raw.substring(patternStart, patternEnd)
      };
      // Parse modifiers (if any)
      var modifiers;
      // Find start and end index of the modifiers
      var modifiersStart = separatorIndex + 1;
      var modifiersEnd = StringUtils.skipWSBack(raw) + 1;
      if (separatorIndex !== -1) {
        modifiers = ModifierListParser.parse(raw.substring(modifiersStart, modifiersEnd), shiftLoc(loc, modifiersStart));
      }
      // Throw error if there is no pattern and no modifiers
      if (pattern.value.length === 0 && (modifiers === undefined || modifiers.children.length === 0)) {
        throw new AdblockSyntaxError('Network rule must have a pattern or modifiers', locRange(loc, 0, raw.length));
      }
      return {
        type: 'NetworkRule',
        loc: locRange(loc, 0, raw.length),
        raws: {
          text: raw
        },
        category: RuleCategory.Network,
        syntax: AdblockSyntax.Common,
        exception: exception,
        pattern: pattern,
        modifiers: modifiers
      };
    }
    /**
     * Finds the index of the separator character in a network rule.
     *
     * @param rule Network rule to check
     * @returns The index of the separator character, or -1 if there is no separator
     */
  }, {
    key: "findNetworkRuleSeparatorIndex",
    value: function findNetworkRuleSeparatorIndex(rule) {
      // As we are looking for the last separator, we start from the end of the string
      for (var i = rule.length - 1; i >= 0; i -= 1) {
        // If we find a potential separator, we should check
        // - if it's not escaped
        // - if it's not followed by a regex marker, for example: `example.org^$removeparam=/regex$/`
        // eslint-disable-next-line max-len
        if (rule[i] === NETWORK_RULE_SEPARATOR && rule[i + 1] !== REGEX_MARKER && rule[i - 1] !== ESCAPE_CHARACTER) {
          return i;
        }
      }
      return -1;
    }
    /**
     * Converts a network rule (basic rule) AST to a string.
     *
     * @param ast - Network rule AST
     * @returns Raw string
     */
  }, {
    key: "generate",
    value: function generate(ast) {
      var result = EMPTY;
      // If the rule is an exception, add the exception marker: `@@||example.org`
      if (ast.exception) {
        result += NETWORK_RULE_EXCEPTION_MARKER;
      }
      // Add the pattern: `||example.org`
      result += ast.pattern.value;
      // If there are modifiers, add a separator and the modifiers: `||example.org$important`
      if (ast.modifiers && ast.modifiers.children.length > 0) {
        result += NETWORK_RULE_SEPARATOR;
        result += ModifierListParser.generate(ast.modifiers);
      }
      return result;
    }
  }]);
  return NetworkRuleParser;
}();
/**
 * `RuleParser` is responsible for parsing the rules.
 *
 * It automatically determines the category and syntax of the rule, so you can pass any kind of rule to it.
 */
var RuleParser = /*#__PURE__*/function () {
  function RuleParser() {
    _classCallCheck(this, RuleParser);
  }
  _createClass(RuleParser, null, [{
    key: "parse",
    value:
    /**
     * Parse an adblock rule. You can pass any kind of rule to this method, since it will automatically determine
     * the category and syntax. If the rule is syntactically invalid, then an error will be thrown. If the
     * syntax / compatibility cannot be determined clearly, then the value of the `syntax` property will be
     * `Common`.
     *
     * For example, let's have this network rule:
     * ```adblock
     * ||example.org^$important
     * ```
     * The `syntax` property will be `Common`, since the rule is syntactically correct in every adblockers, but we
     * cannot determine at parsing level whether `important` is an existing option or not, nor if it exists, then
     * which adblocker supports it. This is why the `syntax` property is simply `Common` at this point.
     * The concrete COMPATIBILITY of the rule will be determined later, in a different, higher-level layer, called
     * "Compatibility table".
     *
     * But we can determinate the concrete syntax of this rule:
     * ```adblock
     * example.org#%#//scriptlet("scriptlet0", "arg0")
     * ```
     * since it is clearly an AdGuard-specific rule and no other adblockers uses this syntax natively. However, we also
     * cannot determine the COMPATIBILITY of this rule, as it is not clear at this point whether the `scriptlet0`
     * scriptlet is supported by AdGuard or not. This is also the task of the "Compatibility table". Here, we simply
     * mark the rule with the `AdGuard` syntax in this case.
     *
     * @param raw Raw adblock rule
     * @param tolerant If `true`, then the parser will not throw if the rule is syntactically invalid, instead it will
     * return an `InvalidRule` object with the error attached to it. Default is `false`.
     * @param loc Base location of the rule
     * @returns Adblock rule AST
     * @throws If the input matches a pattern but syntactically invalid
     * @example
     * Take a look at the following example:
     * ```js
     * // Parse a network rule
     * const ast1 = RuleParser.parse("||example.org^$important");
     *
     * // Parse another network rule
     * const ast2 = RuleParser.parse("/ads.js^$important,third-party,domain=example.org|~example.com");
     *
     * // Parse a cosmetic rule
     * const ast2 = RuleParser.parse("example.org##.banner");
     *
     * // Parse another cosmetic rule
     * const ast3 = RuleParser.parse("example.org#?#.banner:-abp-has(.ad)");
     *
     * // Parse a comment rule
     * const ast4 = RuleParser.parse("! Comment");
     *
     * // Parse an empty rule
     * const ast5 = RuleParser.parse("");
     *
     * // Parse a comment rule (with metadata)
     * const ast6 = RuleParser.parse("! Title: Example");
     *
     * // Parse a pre-processor rule
     * const ast7 = RuleParser.parse("!#if (adguard)");
     * ```
     */
    function parse(raw) {
      var tolerant = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var loc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultLocation;
      try {
        // Empty lines / rules (handle it just for convenience)
        if (raw.trim().length === 0) {
          return {
            type: 'EmptyRule',
            loc: locRange(loc, 0, raw.length),
            raws: {
              text: raw
            },
            category: RuleCategory.Empty,
            syntax: AdblockSyntax.Common
          };
        }
        // Try to parse the rule with all sub-parsers. If a rule doesn't match
        // the pattern of a parser, then it will return `null`. For example, a
        // network rule will not match the pattern of a comment rule, since it
        // doesn't start with comment marker. But if the rule matches the
        // pattern of a parser, then it will return the AST of the rule, or
        // throw an error if the rule is syntactically invalid.
        return CommentRuleParser.parse(raw, loc) || CosmeticRuleParser.parse(raw, loc) || NetworkRuleParser.parse(raw, loc);
      } catch (error) {
        // If tolerant mode is disabled or the error is not known, then simply
        // re-throw the error
        if (!tolerant || !(error instanceof Error)) {
          throw error;
        }
        // Otherwise, return an invalid rule (tolerant mode)
        var result = {
          type: 'InvalidRule',
          loc: locRange(loc, 0, raw.length),
          raws: {
            text: raw
          },
          category: RuleCategory.Invalid,
          syntax: AdblockSyntax.Common,
          raw: raw,
          error: {
            name: error.name,
            message: error.message
          }
        };
        // If the error is an AdblockSyntaxError, then we can add the
        // location of the error to the result
        if (error instanceof AdblockSyntaxError) {
          result.error.loc = error.loc;
        }
        return result;
      }
    }
    /**
     * Converts a rule AST to a string.
     *
     * @param ast - Adblock rule AST
     * @returns Raw string
     * @example
     * Take a look at the following example:
     * ```js
     * // Parse the rule to the AST
     * const ast = RuleParser.parse("example.org##.banner");
     * // Generate the rule from the AST
     * const raw = RuleParser.generate(ast);
     * // Print the generated rule
     * console.log(raw); // "example.org##.banner"
     * ```
     */
  }, {
    key: "generate",
    value: function generate(ast) {
      switch (ast.category) {
        // Empty lines
        case RuleCategory.Empty:
          return EMPTY;
        // Invalid rules
        case RuleCategory.Invalid:
          return ast.raw;
        // Comment rules
        case RuleCategory.Comment:
          return CommentRuleParser.generate(ast);
        // Cosmetic / non-basic rules
        case RuleCategory.Cosmetic:
          return CosmeticRuleParser.generate(ast);
        // Network / basic rules
        case RuleCategory.Network:
          return NetworkRuleParser.generate(ast);
        default:
          throw new Error('Unknown rule category');
      }
    }
  }]);
  return RuleParser;
}();
/**
 * `FilterListParser` is responsible for parsing a whole adblock filter list (list of rules).
 * It is a wrapper around `RuleParser` which parses each line separately.
 */
var FilterListParser = /*#__PURE__*/function () {
  function FilterListParser() {
    _classCallCheck(this, FilterListParser);
  }
  _createClass(FilterListParser, null, [{
    key: "parse",
    value:
    /**
     * Parses a whole adblock filter list (list of rules).
     *
     * @param raw Filter list source code (including new lines)
     * @param tolerant If `true`, then the parser will not throw if the rule is syntactically invalid,
     * instead it will return an `InvalidRule` object with the error attached to it. Default is `true`.
     * It is useful for parsing filter lists with invalid rules, because most of the rules are valid,
     * and some invalid rules can't break the whole filter list parsing.
     * @returns AST of the source code (list of rules)
     * @example
     * ```js
     * import { readFileSync } from 'fs';
     * import { FilterListParser } from '@adguard/agtree';
     *
     * // Read filter list content from file
     * const content = readFileSync('your-adblock-filter-list.txt', 'utf-8');
     *
     * // Parse the filter list content, then do something with the AST
     * const ast = FilterListParser.parse(content);
     * ```
     * @throws If one of the rules is syntactically invalid (if `tolerant` is `false`)
     */
    function parse(raw) {
      var tolerant = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      // Actual position in the source code
      var offset = 0;
      // Collect adblock rules here
      var rules = [];
      // Start offset of the current line (initially it's 0)
      var lineStartOffset = offset;
      while (offset < raw.length) {
        // Check if we found a new line
        if (StringUtils.isEOL(raw[offset])) {
          // Rule text
          var text = raw.substring(lineStartOffset, offset);
          // Parse the rule
          var rule = RuleParser.parse(text, tolerant, {
            offset: lineStartOffset,
            line: rules.length + 1,
            column: 1
          });
          // Get newline type (possible values: 'crlf', 'lf', 'cr' or undefined if no newline found)
          var nl = void 0;
          if (raw[offset] === CR) {
            if (raw[offset + 1] === LF) {
              nl = 'crlf';
            } else {
              nl = 'cr';
            }
          } else if (raw[offset] === LF) {
            nl = 'lf';
          }
          // Add newline type to the rule (rule parser already added raws.text)
          if (!rule.raws) {
            rule.raws = {
              text: text,
              nl: nl
            };
          } else {
            rule.raws.nl = nl;
          }
          // Add the rule to the list
          rules.push(rule);
          // Update offset: add 2 if we found CRLF, otherwise add 1
          offset += nl === 'crlf' ? 2 : 1;
          // Update line start offset
          lineStartOffset = offset;
        } else {
          // No new line found, just increase offset
          offset += 1;
        }
      }
      // Parse the last rule (it doesn't end with a new line)
      rules.push(RuleParser.parse(raw.substring(lineStartOffset, offset), tolerant, {
        offset: lineStartOffset,
        line: rules.length + 1,
        column: 1
      }));
      // Return the list of rules (FilterList node)
      return {
        type: 'FilterList',
        loc: {
          // Start location is always the default, since we don't provide
          // "loc" parameter for FilterListParser.parse as it doesn't have
          // any parent
          start: defaultLocation,
          // Calculate end location
          end: {
            offset: raw.length,
            line: rules.length,
            column: raw.length + 1
          }
        },
        children: rules
      };
    }
    /**
     * Serializes a whole adblock filter list (list of rules).
     *
     * @param ast AST to generate
     * @param preferRaw If `true`, then the parser will use `raws.text` property of each rule
     * if it is available. Default is `false`.
     * @returns Serialized filter list
     */
  }, {
    key: "generate",
    value: function generate(ast) {
      var preferRaw = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var result = EMPTY;
      var _iterator2 = _createForOfIteratorHelper(ast.children),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _rule$raws, _rule$raws2;
          var rule = _step2.value;
          if (preferRaw && (_rule$raws = rule.raws) !== null && _rule$raws !== void 0 && _rule$raws.text) {
            result += rule.raws.text;
          } else {
            result += RuleParser.generate(rule);
          }
          switch ((_rule$raws2 = rule.raws) === null || _rule$raws2 === void 0 ? void 0 : _rule$raws2.nl) {
            case 'crlf':
              result += CRLF;
              break;
            case 'cr':
              result += CR;
              break;
            case 'lf':
              result += LF;
              break;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return result;
    }
  }]);
  return FilterListParser;
}();
var data$F = {
  adg_os_any: {
    name: "app",
    assignable: true,
    negatable: false,
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#app-modifier",
    description: "The $app modifier lets you narrow the rule coverage down to a specific application or a list of applications.\nThe modifier's behavior and syntax perfectly match the corresponding basic rules $app modifier."
  }
};
data$F.adg_os_any;
var data$E = {
  adg_os_any: {
    name: "badfilter",
    negatable: false,
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#badfilter-modifier",
    description: "The rules with the $badfilter modifier disable other basic rules to which they refer. It means that\nthe text of the disabled rule should match the text of the $badfilter rule (without the $badfilter modifier)."
  },
  adg_ext_any: {
    name: "badfilter",
    negatable: false,
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#badfilter-modifier",
    description: "The rules with the $badfilter modifier disable other basic rules to which they refer. It means that\nthe text of the disabled rule should match the text of the $badfilter rule (without the $badfilter modifier)."
  },
  adg_cb_ios: {
    name: "badfilter",
    negatable: false,
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#badfilter-modifier",
    description: "The rules with the $badfilter modifier disable other basic rules to which they refer. It means that\nthe text of the disabled rule should match the text of the $badfilter rule (without the $badfilter modifier)."
  },
  adg_cb_safari: {
    name: "badfilter",
    negatable: false,
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#badfilter-modifier",
    description: "The rules with the $badfilter modifier disable other basic rules to which they refer. It means that\nthe text of the disabled rule should match the text of the $badfilter rule (without the $badfilter modifier)."
  },
  ubo_ext_any: {
    name: "badfilter",
    negatable: false,
    docs: "https://github.com/gorhill/uBlock/wiki/Static-filter-syntax#badfilter",
    description: "The rules with the $badfilter modifier disable other basic rules to which they refer. It means that\nthe text of the disabled rule should match the text of the $badfilter rule (without the $badfilter modifier)."
  }
};
data$E.adg_os_any;
data$E.adg_ext_any;
data$E.adg_cb_ios;
data$E.adg_cb_safari;
data$E.ubo_ext_any;
var data$D = {
  ubo_ext_any: {
    name: "cname",
    negatable: false,
    exception_only: true,
    docs: "https://github.com/gorhill/uBlock/wiki/Static-filter-syntax#cname",
    description: "When used in an exception filter,\nit will bypass blocking CNAME uncloaked requests for the current (specified) document."
  }
};
data$D.ubo_ext_any;
var data$C = {
  adg_os_any: {
    name: "content",
    negatable: false,
    exception_only: true,
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#content-modifier",
    description: "Disables HTML filtering and $replace rules on the pages that match the rule."
  }
};
data$C.adg_os_any;
var data$B = {
  adg_os_any: {
    name: "cookie",
    description: "The $cookie modifier completely changes rule behavior.\nInstead of blocking a request, this modifier makes us suppress or modify the Cookie and Set-Cookie headers.",
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#cookie-modifier",
    assignable: true,
    value_format: "^([^;=\\s]*?)((?:;(maxAge=\\d+;?)?|(sameSite=(lax|none|strict);?)?){1,3})(?<!;)$",
    negatable: false
  },
  adg_ext_any: {
    name: "cookie",
    description: "The $cookie modifier completely changes rule behavior.\nInstead of blocking a request, this modifier makes us suppress or modify the Cookie and Set-Cookie headers.",
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#cookie-modifier",
    assignable: true,
    value_format: "^([^;=\\s]*?)((?:;(maxAge=\\d+;?)?|(sameSite=(lax|none|strict);?)?){1,3})(?<!;)$",
    negatable: false
  }
};
data$B.adg_os_any;
data$B.adg_ext_any;
var data$A = {
  adg_os_any: {
    name: "csp",
    description: "This modifier completely changes the rule behavior.\nIf it is applied to a rule, it will not block the matching request.\nThe response headers are going to be modified instead.",
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#csp-modifier",
    assignable: true,
    value_format: "/[^,$]+/",
    conflicts: ["domain", "important", "subdocument", "badfilter"],
    inverse_conflicts: true,
    negatable: false
  },
  adg_ext_any: {
    name: "csp",
    description: "This modifier completely changes the rule behavior.\nIf it is applied to a rule, it will not block the matching request.\nThe response headers are going to be modified instead.",
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#csp-modifier",
    assignable: true,
    value_format: "/[^,$]+/",
    conflicts: ["domain", "important", "subdocument", "badfilter"],
    inverse_conflicts: true,
    negatable: false
  },
  abp_ext_any: {
    name: "csp",
    description: "This modifier completely changes the rule behavior.\nIf it is applied to a rule, it will not block the matching request.\nThe response headers are going to be modified instead.",
    docs: "https://help.adblockplus.org/hc/en-us/articles/360062733293-How-to-write-filters#content-security-policies",
    assignable: true,
    value_format: "/[^,$]+/",
    conflicts: ["domain", "subdocument"],
    inverse_conflicts: true,
    negatable: false
  },
  ubo_ext_any: {
    name: "csp",
    description: "This modifier completely changes the rule behavior.\nIf it is applied to a rule, it will not block the matching request.\nThe response headers are going to be modified instead.",
    docs: "https://github.com/gorhill/uBlock/wiki/Static-filter-syntax#csp",
    assignable: true,
    value_format: "/[^,$]+/",
    conflicts: ["1p", "3p", "domain", "badfilter"],
    inverse_conflicts: true,
    negatable: false
  }
};
data$A.adg_os_any;
data$A.adg_ext_any;
data$A.abp_ext_any;
data$A.ubo_ext_any;
var data$z = {
  adg_os_any: {
    name: "denyallow",
    description: "The $denyallow modifier allows to avoid creating additional rules\nwhen it is needed to disable a certain rule for specific domains.\n$denyallow matches only target domains and not referrer domains.",
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#denyallow-modifier",
    conflicts: ["to"],
    assignable: true,
    value_format: "pipe_separated_domains",
    negatable: false
  },
  adg_ext_any: {
    name: "denyallow",
    description: "The $denyallow modifier allows to avoid creating additional rules\nwhen it is needed to disable a certain rule for specific domains.\n$denyallow matches only target domains and not referrer domains.",
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#denyallow-modifier",
    conflicts: ["to"],
    assignable: true,
    value_format: "pipe_separated_domains"
  },
  adg_cb_ios: {
    name: "denyallow",
    description: "The $denyallow modifier allows to avoid creating additional rules\nwhen it is needed to disable a certain rule for specific domains.\n$denyallow matches only target domains and not referrer domains.",
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#denyallow-modifier",
    conflicts: ["to"],
    assignable: true,
    value_format: "pipe_separated_domains"
  },
  adg_cb_safari: {
    name: "denyallow",
    description: "The $denyallow modifier allows to avoid creating additional rules\nwhen it is needed to disable a certain rule for specific domains.\n$denyallow matches only target domains and not referrer domains.",
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#denyallow-modifier",
    conflicts: ["to"],
    assignable: true,
    value_format: "pipe_separated_domains"
  },
  ubo_ext_any: {
    name: "denyallow",
    description: "The $denyallow modifier allows to avoid creating additional rules\nwhen it is needed to disable a certain rule for specific domains.\n$denyallow matches only target domains and not referrer domains.",
    docs: "https://github.com/gorhill/uBlock/wiki/Static-filter-syntax#denyallow",
    conflicts: ["to"],
    assignable: true,
    value_format: "pipe_separated_domains"
  }
};
data$z.adg_os_any;
data$z.adg_ext_any;
data$z.adg_cb_ios;
data$z.adg_cb_safari;
data$z.ubo_ext_any;
var data$y = {
  adg_os_any: {
    name: "document",
    description: "The rule corresponds to the main frame document requests,\ni.e. HTML documents that are loaded in the browser tab.",
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#document-modifier",
    negatable: false
  },
  adg_ext_any: {
    name: "document",
    description: "The rule corresponds to the main frame document requests,\ni.e. HTML documents that are loaded in the browser tab.",
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#document-modifier",
    negatable: false
  },
  adg_cb_ios: {
    name: "document",
    description: "The rule corresponds to the main frame document requests,\ni.e. HTML documents that are loaded in the browser tab.",
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#document-modifier",
    negatable: false
  },
  adg_cb_safari: {
    name: "document",
    description: "The rule corresponds to the main frame document requests,\ni.e. HTML documents that are loaded in the browser tab.",
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#document-modifier",
    negatable: false
  },
  abp_ext_any: {
    name: "document",
    description: "The rule corresponds to the main frame document requests,\ni.e. HTML documents that are loaded in the browser tab.",
    docs: "https://help.adblockplus.org/hc/en-us/articles/360062733293-How-to-write-filters#allowlist",
    negatable: false
  },
  ubo_ext_any: {
    name: "document",
    description: "The rule corresponds to the main frame document requests,\ni.e. HTML documents that are loaded in the browser tab.",
    docs: "https://github.com/gorhill/uBlock/wiki/Static-filter-syntax#document",
    aliases: ["doc"],
    negatable: false
  }
};
data$y.adg_os_any;
data$y.adg_ext_any;
data$y.adg_cb_ios;
data$y.adg_cb_safari;
data$y.abp_ext_any;
data$y.ubo_ext_any;
var data$x = {
  adg_any: {
    name: "domain",
    aliases: ["from"],
    assignable: true,
    value_format: "pipe_separated_domains",
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#domain-modifier",
    description: "The $domain modifier limits the rule application area to a list of domains and their subdomains."
  },
  abp_any: {
    name: "domain",
    assignable: true,
    value_format: "pipe_separated_domains",
    docs: "https://help.adblockplus.org/hc/en-us/articles/360062733293-How-to-write-filters#domain-restrictions",
    description: "The $domain modifier limits the rule application area to a list of domains and their subdomains."
  },
  ubo_any: {
    name: "domain",
    aliases: ["from"],
    assignable: true,
    value_format: "pipe_separated_domains",
    docs: "https://github.com/gorhill/uBlock/wiki/Static-filter-syntax#from",
    description: "The $domain modifier limits the rule application area to a list of domains and their subdomains."
  }
};
data$x.adg_any;
data$x.abp_any;
data$x.ubo_any;
var data$w = {
  adg_any: {
    name: "elemhide",
    aliases: ["ehide"],
    negatable: false,
    exception_only: true,
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#elemhide-modifier",
    description: "Disables any cosmetic rules on the pages matching the rule."
  },
  abp_any: {
    name: "elemhide",
    aliases: ["ehide"],
    negatable: false,
    exception_only: true,
    docs: "https://help.adblockplus.org/hc/en-us/articles/360062733293-How-to-write-filters#type-options",
    description: "Disables any cosmetic rules on the pages matching the rule."
  },
  ubo_any: {
    name: "elemhide",
    aliases: ["ehide"],
    negatable: false,
    exception_only: true,
    docs: "https://github.com/gorhill/uBlock/wiki/Static-filter-syntax#elemhide-1",
    description: "Disables any cosmetic rules on the pages matching the rule."
  }
};
data$w.adg_any;
data$w.abp_any;
data$w.ubo_any;
var data$v = {
  adg_os_any: {
    name: "extension",
    conflicts: ["domain", "specifichide", "generichide", "elemhide", "genericblock", "urlblock", "jsinject", "content", "xmlhttprequest", "badfilter"],
    inverse_conflicts: true,
    exception_only: true,
    version_added: "0.0.1",
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#extension-modifier",
    description: "Disables all userscripts on the pages matching this rule."
  }
};
data$v.adg_os_any;
var data$u = {
  adg_any: {
    name: "font",
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#font-modifier",
    description: "The rule corresponds to requests for fonts, e.g. .woff filename extension."
  },
  abp_any: {
    name: "font",
    docs: "https://help.adblockplus.org/hc/en-us/articles/360062733293#options",
    description: "The rule corresponds to requests for fonts, e.g. .woff filename extension."
  },
  ubo_any: {
    name: "font",
    docs: "https://help.adblockplus.org/hc/en-us/articles/360062733293#options",
    description: "The rule corresponds to requests for fonts, e.g. .woff filename extension."
  }
};
data$u.adg_any;
data$u.abp_any;
data$u.ubo_any;
var data$t = {
  adg_os_any: {
    name: "genericblock",
    description: "Disables generic basic rules on pages that correspond to exception rule.",
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#genericblock-modifier",
    conflicts: ["domain", "specifichide", "generichide", "elemhide", "extension", "jsinject", "content", "badfilter"],
    inverse_conflicts: true,
    negatable: false,
    exception_only: true
  },
  adg_ext_any: {
    name: "genericblock",
    description: "Disables generic basic rules on pages that correspond to exception rule.",
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#genericblock-modifier",
    conflicts: ["domain", "specifichide", "generichide", "elemhide", "jsinject", "badfilter"],
    inverse_conflicts: true,
    negatable: false,
    exception_only: true
  },
  adg_cb_ios: {
    name: "genericblock",
    description: "Disables generic basic rules on pages that correspond to exception rule.",
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#genericblock-modifier",
    conflicts: ["domain", "specifichide", "generichide", "elemhide", "jsinject", "badfilter"],
    inverse_conflicts: true,
    negatable: false,
    exception_only: true
  },
  adg_cb_safari: {
    name: "genericblock",
    description: "Disables generic basic rules on pages that correspond to exception rule.",
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#genericblock-modifier",
    conflicts: ["domain", "specifichide", "generichide", "elemhide", "jsinject", "badfilter"],
    inverse_conflicts: true,
    negatable: false,
    exception_only: true
  },
  abp_ext_any: {
    name: "genericblock",
    description: "Disables generic basic rules on pages that correspond to exception rule.",
    docs: "https://help.adblockplus.org/hc/en-us/articles/360062733293-How-to-write-filters#type-options",
    negatable: false,
    exception_only: true
  }
};
data$t.adg_os_any;
data$t.adg_ext_any;
data$t.adg_cb_ios;
data$t.adg_cb_safari;
data$t.abp_ext_any;
var data$s = {
  adg_any: {
    name: "generichide",
    aliases: ["ghide"],
    conflicts: ["domain", "genericblock", "urlblock", "extension", "jsinject", "content", "xmlhttprequest", "badfilter"],
    inverse_conflicts: true,
    negatable: false,
    exception_only: true,
    version_added: "0.0.1",
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#generichide-modifier",
    description: "Disables all generic cosmetic rules."
  },
  ubo_any: {
    name: "generichide",
    aliases: ["ghide"],
    conflicts: ["domain", "badfilter"],
    inverse_conflicts: true,
    negatable: false,
    exception_only: true,
    version_added: "0.0.1",
    docs: "https://github.com/gorhill/uBlock/wiki/Static-filter-syntax#generichide",
    description: "Disables all generic cosmetic rules."
  },
  abp_any: {
    name: "generichide",
    conflicts: ["domain"],
    inverse_conflicts: true,
    negatable: false,
    exception_only: true,
    version_added: "0.0.1",
    docs: "https://help.adblockplus.org/hc/en-us/articles/360062733293-How-to-write-filters#type-options",
    description: "Disables all generic cosmetic rules."
  }
};
data$s.adg_any;
data$s.ubo_any;
data$s.abp_any;
var data$r = {
  adg_os_any: {
    name: "header",
    description: "The $header modifier allows matching the HTTP response\nhaving a specific header with (optionally) a specific value.",
    assignable: true,
    value_format: "/^[A-z0-9-]+(:.+|)$/",
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#header-modifier"
  },
  adg_ext_any: {
    name: "header",
    description: "The $header modifier allows matching the HTTP response\nhaving a specific header with (optionally) a specific value.",
    assignable: true,
    value_format: "/^[A-z0-9-]+(:.+|)$/",
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#header-modifier"
  },
  ubo_ext_any: {
    name: "header",
    description: "The $header modifier allows matching the HTTP response\nhaving a specific header with (optionally) a specific value.",
    assignable: true,
    value_format: "/^[A-z0-9-]+(:.+|)$/",
    docs: "https://github.com/gorhill/uBlock/wiki/Static-filter-syntax#header"
  }
};
data$r.adg_os_any;
data$r.adg_ext_any;
data$r.ubo_ext_any;
var data$q = {
  adg_os_any: {
    name: "hls",
    description: "The $hls rules modify the response of a matching request.\nThey are intended as a convenient way to remove segments from HLS playlists (RFC 8216).",
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#hls-modifier",
    version_added: "CoreLibs 1.10",
    conflicts: ["domain", "third-party", "app", "important", "match-case", "xmlhttprequest"],
    inverse_conflicts: true,
    assignable: true,
    negatable: false
  }
};
data$q.adg_os_any;
var data$p = {
  adg_any: {
    name: "image",
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#image-modifier",
    description: "The rule corresponds to images requests."
  },
  abp_any: {
    name: "image",
    docs: "https://help.adblockplus.org/hc/en-us/articles/360062733293#options",
    description: "The rule corresponds to images requests."
  },
  ubo_any: {
    name: "image",
    docs: "https://help.adblockplus.org/hc/en-us/articles/360062733293#options",
    description: "The rule corresponds to images requests."
  }
};
data$p.adg_any;
data$p.abp_any;
data$p.ubo_any;
var data$o = {
  adg_any: {
    name: "important",
    negatable: false,
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#important-modifier",
    description: "The $important modifier applied to a rule increases its priority\nover any other rule without $important modifier. Even over basic exception rules."
  },
  ubo_any: {
    name: "important",
    negatable: false,
    docs: "https://github.com/gorhill/uBlock/wiki/Static-filter-syntax#important",
    description: "The $important modifier applied to a rule increases its priority\nover any other rule without $important modifier. Even over basic exception rules."
  }
};
data$o.adg_any;
data$o.ubo_any;
var data$n = {
  adg_os_any: {
    name: "inline-font",
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#inline-font-modifier",
    description: "The $inline-font modifier is a sort of a shortcut for $csp modifier with specific value.\nE.g. '||example.org^$inline-font' is converting into:\n```\n||example.org^$csp=font-src 'self' 'unsafe-eval' http: https: data: blob: mediastream: filesystem:\n```"
  },
  adg_ext_any: {
    name: "inline-font",
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#inline-font-modifier",
    description: "The $inline-font modifier is a sort of a shortcut for $csp modifier with specific value.\nE.g. '||example.org^$inline-font' is converting into:\n```\n||example.org^$csp=font-src 'self' 'unsafe-eval' http: https: data: blob: mediastream: filesystem:\n```"
  },
  ubo_ext_any: {
    name: "inline-font",
    docs: "https://github.com/gorhill/uBlock/wiki/Static-filter-syntax#inline-font",
    description: "The $inline-font modifier is a sort of a shortcut for $csp modifier with specific value.\nE.g. '||example.org^$inline-font' is converting into:\n```\n||example.org^$csp=font-src 'self' 'unsafe-eval' http: https: data: blob: mediastream: filesystem:\n```"
  }
};
data$n.adg_os_any;
data$n.adg_ext_any;
data$n.ubo_ext_any;
var data$m = {
  adg_os_any: {
    name: "jsinject",
    description: "Forbids adding of javascript code to the page.",
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#jsinject-modifier",
    conflicts: ["domain", "specifichide", "generichide", "elemhide", "genericblock", "urlblock", "extension", "content", "xmlhttprequest", "badfilter"],
    inverse_conflicts: true,
    negatable: false,
    exception_only: true
  },
  adg_ext_any: {
    name: "jsinject",
    description: "Forbids adding of javascript code to the page.",
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#jsinject-modifier",
    conflicts: ["domain", "specifichide", "generichide", "elemhide", "genericblock", "urlblock", "xmlhttprequest", "badfilter"],
    inverse_conflicts: true,
    negatable: false,
    exception_only: true
  },
  adg_cb_ios: {
    name: "jsinject",
    description: "Forbids adding of javascript code to the page.",
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#jsinject-modifier",
    conflicts: ["domain", "specifichide", "generichide", "elemhide", "genericblock", "urlblock", "xmlhttprequest", "badfilter"],
    inverse_conflicts: true,
    negatable: false,
    exception_only: true
  },
  adg_cb_safari: {
    name: "jsinject",
    description: "Forbids adding of javascript code to the page.",
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#jsinject-modifier",
    conflicts: ["domain", "specifichide", "generichide", "elemhide", "genericblock", "urlblock", "xmlhttprequest", "badfilter"],
    inverse_conflicts: true,
    negatable: false,
    exception_only: true
  }
};
data$m.adg_os_any;
data$m.adg_ext_any;
data$m.adg_cb_ios;
data$m.adg_cb_safari;
var data$l = {
  adg_os_any: {
    name: "jsonprune",
    assignable: true,
    negatable: false,
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#jsonprune-modifier",
    description: "$jsonprune rules modify the response to a matching request\nby removing JSON items that match a modified JSONPath expression.\nThey do not modify responses which are not valid JSON documents."
  }
};
data$l.adg_os_any;
var data$k = {
  adg_any: {
    name: "match-case",
    description: "This modifier defines a rule which applies only to addresses that match the case.\nDefault rules are case-insensitive.",
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#match-case-modifier"
  },
  abp_any: {
    name: "match-case",
    description: "This modifier defines a rule which applies only to addresses that match the case.\nDefault rules are case-insensitive.",
    docs: "https://help.adblockplus.org/hc/en-us/articles/360062733293-How-to-write-filters#type-options"
  },
  ubo_any: {
    name: "match-case",
    description: "This modifier defines a rule which applies only to addresses that match the case.\nDefault rules are case-insensitive.",
    docs: "https://github.com/gorhill/uBlock/wiki/Static-filter-syntax#match-case"
  }
};
data$k.adg_any;
data$k.abp_any;
data$k.ubo_any;
var data$j = {
  adg_any: {
    name: "media",
    negatable: true,
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#media-modifier",
    description: "A restriction of third-party and own requests.\nA third-party request is a request from a different domain.\nFor example, a request to example.org, from domain.com is a third-party request."
  },
  abp_any: {
    name: "media",
    negatable: true,
    docs: "https://help.adblockplus.org/hc/en-us/articles/360062733293#options",
    description: "A restriction of third-party and own requests.\nA third-party request is a request from a different domain.\nFor example, a request to example.org, from domain.com is a third-party request."
  },
  ubo_any: {
    name: "media",
    negatable: true,
    docs: "https://help.adblockplus.org/hc/en-us/articles/360062733293#options",
    description: "A restriction of third-party and own requests.\nA third-party request is a request from a different domain.\nFor example, a request to example.org, from domain.com is a third-party request."
  }
};
data$j.adg_any;
data$j.abp_any;
data$j.ubo_any;
var data$i = {
  adg_any: {
    name: "object",
    description: "The rule corresponds to browser plugins resources, e.g. Java or Flash",
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#object-modifier"
  },
  abp_any: {
    name: "object",
    description: "The rule corresponds to browser plugins resources, e.g. Java or Flash.",
    docs: "https://help.adblockplus.org/hc/en-us/articles/360062733293-How-to-write-filters#type-options"
  },
  ubo_any: {
    name: "object",
    description: "The rule corresponds to browser plugins resources, e.g. Java or Flash.",
    docs: "https://help.adblockplus.org/hc/en-us/articles/360062733293-How-to-write-filters#type-options"
  }
};
data$i.adg_any;
data$i.abp_any;
data$i.ubo_any;
var data$h = {
  adg_any: {
    name: "other",
    description: "The rule applies to requests for which the type has not been determined\nor does not match the types listed above.",
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#other-modifier"
  },
  abp_any: {
    name: "other",
    description: "The rule applies to requests for which the type has not been determined\nor does not match the types listed above.",
    docs: "https://help.adblockplus.org/hc/en-us/articles/360062733293-How-to-write-filters#type-options"
  },
  ubo_any: {
    name: "other",
    description: "The rule applies to requests for which the type has not been determined\nor does not match the types listed above.",
    docs: "https://help.adblockplus.org/hc/en-us/articles/360062733293-How-to-write-filters#type-options"
  }
};
data$h.adg_any;
data$h.abp_any;
data$h.ubo_any;
var data$g = {
  adg_any: {
    name: "ping",
    description: "The rule corresponds to requests caused by either navigator.sendBeacon() or the ping attribute on links.",
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#ping-modifier"
  },
  abp_any: {
    name: "ping",
    description: "The rule corresponds to requests caused by either navigator.sendBeacon() or the ping attribute on links.",
    docs: "https://help.adblockplus.org/hc/en-us/articles/360062733293-How-to-write-filters#type-options"
  },
  ubo_any: {
    name: "ping",
    description: "The rule corresponds to requests caused by either navigator.sendBeacon() or the ping attribute on links.",
    docs: "https://help.adblockplus.org/hc/en-us/articles/360062733293-How-to-write-filters#type-options"
  }
};
data$g.adg_any;
data$g.abp_any;
data$g.ubo_any;
var data$f = {
  ubo_ext_any: {
    name: "popunder",
    negatable: false,
    block_only: true,
    docs: "https://github.com/gorhill/uBlock/wiki/Static-filter-syntax#popunder",
    description: "To block \"popunders\" windows/tabs where the original page redirects to an advertisement\nand the desired content loads in the newly created one.\nTo be used in the same manner as the popup filter option, except that it will block popunders."
  }
};
data$f.ubo_ext_any;
var data$e = {
  adg_any: {
    name: "popup",
    description: "Pages opened in a new tab or window.\nNote: Filters will not block pop-ups by default, only if the $popup type option is specified.",
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#popup-modifier"
  },
  abp_any: {
    name: "popup",
    description: "Pages opened in a new tab or window.\nNote: Filters will not block pop-ups by default, only if the $popup type option is specified.",
    docs: "https://help.adblockplus.org/hc/en-us/articles/360062733293-How-to-write-filters#type-options"
  },
  ubo_any: {
    name: "popup",
    description: "Pages opened in a new tab or window.\nNote: Filters will not block pop-ups by default, only if the $popup type option is specified.",
    docs: "https://help.adblockplus.org/hc/en-us/articles/360062733293-How-to-write-filters#type-options"
  }
};
data$e.adg_any;
data$e.abp_any;
data$e.ubo_any;
var data$d = {
  adg_os_any: {
    name: "redirect-rule",
    inverse_conflicts: true,
    conflicts: ["domain", "to", "third-party", "popup", "match-case", "header", "first-party", "document", "image", "stylesheet", "script", "object", "font", "media", "subdocument", "ping", "xmlhttprequest", "websocket", "other", "webrtc", "important", "badfilter", "app"],
    value_format: "(?x)\n  ^(\n    1x1-transparent\\.gif|\n    2x2-transparent\\.png|\n    3x2-transparent\\.png|\n    32x32-transparent\\.png|\n    noopframe|\n    noopcss|\n    noopjs|\n    noopjson|\n    nooptext|\n    empty|\n    noopvmap-1\\.0|\n    noopvast-2\\.0|\n    noopvast-3\\.0|\n    noopvast-4\\.0|\n    noopmp3-0\\.1s|\n    noopmp4-1s|\n    amazon-apstag|\n    ati-smarttag|\n    didomi-loader|\n    fingerprintjs2|\n    fingerprintjs3|\n    gemius|\n    google-analytics-ga|\n    google-analytics|\n    google-ima3|\n    googlesyndication-adsbygoogle|\n    googletagservices-gpt|\n    matomo|\n    metrika-yandex-tag|\n    metrika-yandex-watch|\n    naver-wcslog|\n    noeval|\n    pardot-1\\.0|\n    prebid-ads|\n    prebid|\n    prevent-bab|\n    prevent-bab2|\n    prevent-fab-3\\.2\\.0|\n    prevent-popads-net|\n    scorecardresearch-beacon|\n    set-popads-dummy|\n    click2load\\.html|\n  )?$",
    description: "This is basically an alias to $redirect\nsince it has the same \"redirection\" values and the logic is almost similar.\nThe difference is that $redirect-rule is applied only in the case\nwhen the target request is blocked by a different basic rule.",
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#redirect-rule-modifier"
  },
  adg_ext_any: {
    name: "redirect-rule",
    inverse_conflicts: true,
    conflicts: ["domain", "to", "third-party", "popup", "match-case", "header", "first-party", "document", "image", "stylesheet", "script", "object", "font", "media", "subdocument", "ping", "xmlhttprequest", "websocket", "other", "webrtc", "important", "badfilter"],
    value_format: "(?x)\n  ^(\n    1x1-transparent\\.gif|\n    2x2-transparent\\.png|\n    3x2-transparent\\.png|\n    32x32-transparent\\.png|\n    noopframe|\n    noopcss|\n    noopjs|\n    noopjson|\n    nooptext|\n    empty|\n    noopvmap-1\\.0|\n    noopvast-2\\.0|\n    noopvast-3\\.0|\n    noopvast-4\\.0|\n    noopmp3-0\\.1s|\n    noopmp4-1s|\n    amazon-apstag|\n    ati-smarttag|\n    didomi-loader|\n    fingerprintjs2|\n    fingerprintjs3|\n    gemius|\n    google-analytics-ga|\n    google-analytics|\n    google-ima3|\n    googlesyndication-adsbygoogle|\n    googletagservices-gpt|\n    matomo|\n    metrika-yandex-tag|\n    metrika-yandex-watch|\n    naver-wcslog|\n    noeval|\n    pardot-1\\.0|\n    prebid-ads|\n    prebid|\n    prevent-bab|\n    prevent-bab2|\n    prevent-fab-3\\.2\\.0|\n    prevent-popads-net|\n    scorecardresearch-beacon|\n    set-popads-dummy|\n    click2load\\.html|\n  )?$",
    description: "This is basically an alias to $redirect\nsince it has the same \"redirection\" values and the logic is almost similar.\nThe difference is that $redirect-rule is applied only in the case\nwhen the target request is blocked by a different basic rule.",
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#redirect-rule-modifier"
  },
  ubo_ext_any: {
    name: "redirect-rule",
    inverse_conflicts: true,
    conflicts: ["domain", "to", "third-party", "popup", "match-case", "header", "first-party", "document", "image", "stylesheet", "script", "object", "font", "media", "subdocument", "ping", "xmlhttprequest", "websocket", "other", "webrtc", "important", "badfilter"],
    value_format: "(?x)\n  ^(\n    1x1\\.gif|\n    2x2\\.png|\n    3x2\\.png|\n    32x32\\.png|\n    noop\\.css|\n    noop\\.html|\n    noopframe|\n    noop\\.js|\n    noop\\.txt|\n    noop-0\\.1s\\.mp3|\n    noop-0\\.5s\\.mp3|\n    noop-1s\\.mp4|\n    none|\n    click2load\\.html|\n    addthis_widget\\.js|\n    amazon_ads\\.js|\n    amazon_apstag\\.js|\n    monkeybroker\\.js|\n    doubleclick_instream_ad_status|\n    google-analytics_ga\\.js|\n    google-analytics_analytics\\.js|\n    google-analytics_inpage_linkid\\.js|\n    google-analytics_cx_api\\.js|\n    google-ima\\.js|\n    googletagservices_gpt\\.js|\n    googletagmanager_gtm\\.js|\n    googlesyndication_adsbygoogle\\.js|\n    scorecardresearch_beacon\\.js|\n    outbrain-widget\\.js|\n    hd-main\\.js\n  )\n  (:[0-9]+)?$",
    description: "This is basically an alias to $redirect\nsince it has the same \"redirection\" values and the logic is almost similar.\nThe difference is that $redirect-rule is applied only in the case\nwhen the target request is blocked by a different basic rule.",
    docs: "https://github.com/gorhill/uBlock/wiki/Static-filter-syntax#redirect-rule"
  }
};
data$d.adg_os_any;
data$d.adg_ext_any;
data$d.ubo_ext_any;
var data$c = {
  adg_os_any: {
    name: "removeheader",
    conflicts: ["domain", "third-party", "first-party", "app", "important", "match-case", "document", "image", "stylesheet", "script", "object", "font", "media", "subdocument", "ping", "xmlhttpreqeust", "websocket", "other", "webrtc"],
    value_format: "(?xi)\n  ^\n    # Value may start with \"request:\"\n    (request:)?\n\n    # Forbidden header names\n    (?!\n      (\n        access-control-allow-origin|\n        access-control-allow-credentials|\n        access-control-allow-headers|\n        access-control-allow-methods|\n        access-control-expose-headers|\n        access-control-max-age|\n        access-control-request-headers|\n        access-control-request-method|\n        origin|\n        timing-allow-origin|\n        allow|\n        cross-origin-embedder-policy|\n        cross-origin-opener-policy|\n        cross-origin-resource-policy|\n        content-security-policy|\n        content-security-policy-report-only|\n        expect-ct|\n        feature-policy|\n        origin-isolation|\n        strict-transport-security|\n        upgrade-insecure-requests|\n        x-content-type-options|\n        x-download-options|\n        x-frame-options|\n        x-permitted-cross-domain-policies|\n        x-powered-by|\n        x-xss-protection|\n        public-key-pins|\n        public-key-pins-report-only|\n        sec-websocket-key|\n        sec-websocket-extensions|\n        sec-websocket-accept|\n        sec-websocket-protocol|\n        sec-websocket-version|\n        p3p|\n        sec-fetch-mode|\n        sec-fetch-dest|\n        sec-fetch-site|\n        sec-fetch-user|\n        referrer-policy|\n        content-type|\n        content-length|\n        accept|\n        accept-encoding|\n        host|\n        connection|\n        transfer-encoding|\n        upgrade\n      )\n    $)\n\n    # Any other header name is allowed, if it matches the following regex\n    [A-z0-9-]+\n  $",
    inverse_conflicts: true,
    assignable: true,
    negatable: false,
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#removeheader-modifier",
    description: "Rules with $removeheader modifier are intended to remove headers from HTTP requests and responses."
  },
  adg_ext_any: {
    name: "removeheader",
    conflicts: ["domain", "third-party", "first-party", "app", "important", "match-case", "document", "image", "stylesheet", "script", "object", "font", "media", "subdocument", "ping", "xmlhttpreqeust", "websocket", "other", "webrtc"],
    value_format: "(?xi)\n  ^\n    # Value may start with \"request:\"\n    (request:)?\n\n    # Forbidden header names\n    (?!\n      (\n        access-control-allow-origin|\n        access-control-allow-credentials|\n        access-control-allow-headers|\n        access-control-allow-methods|\n        access-control-expose-headers|\n        access-control-max-age|\n        access-control-request-headers|\n        access-control-request-method|\n        origin|\n        timing-allow-origin|\n        allow|\n        cross-origin-embedder-policy|\n        cross-origin-opener-policy|\n        cross-origin-resource-policy|\n        content-security-policy|\n        content-security-policy-report-only|\n        expect-ct|\n        feature-policy|\n        origin-isolation|\n        strict-transport-security|\n        upgrade-insecure-requests|\n        x-content-type-options|\n        x-download-options|\n        x-frame-options|\n        x-permitted-cross-domain-policies|\n        x-powered-by|\n        x-xss-protection|\n        public-key-pins|\n        public-key-pins-report-only|\n        sec-websocket-key|\n        sec-websocket-extensions|\n        sec-websocket-accept|\n        sec-websocket-protocol|\n        sec-websocket-version|\n        p3p|\n        sec-fetch-mode|\n        sec-fetch-dest|\n        sec-fetch-site|\n        sec-fetch-user|\n        referrer-policy|\n        content-type|\n        content-length|\n        accept|\n        accept-encoding|\n        host|\n        connection|\n        transfer-encoding|\n        upgrade\n      )\n    $)\n\n    # Any other header name is allowed, if it matches the following regex\n    [A-z0-9-]+\n  $",
    inverse_conflicts: true,
    assignable: true,
    negatable: false,
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#removeheader-modifier",
    description: "Rules with $removeheader modifier are intended to remove headers from HTTP requests and responses."
  }
};
data$c.adg_os_any;
data$c.adg_ext_any;
var data$b = {
  adg_any: {
    name: "script",
    assignable: false,
    negatable: true,
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#script-modifier",
    description: "The rule corresponds to script requests, e.g. javascript, vbscript."
  },
  abp_any: {
    name: "script",
    assignable: false,
    negatable: true,
    docs: "https://help.adblockplus.org/hc/en-us/articles/360062733293-How-to-write-filters#type-options",
    description: "The rule corresponds to script requests, e.g. javascript, vbscript."
  },
  ubo_any: {
    name: "script",
    assignable: false,
    negatable: true,
    docs: "https://help.adblockplus.org/hc/en-us/articles/360062733293#options",
    description: "The rule corresponds to script requests, e.g. javascript, vbscript."
  }
};
data$b.adg_any;
data$b.abp_any;
data$b.ubo_any;
var data$a = {
  adg_os_any: {
    name: "stealth",
    description: "Disables the Stealth Mode module for all corresponding pages and requests.",
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#stealth-modifier",
    assignable: true,
    negatable: false,
    exception_only: true
  },
  adg_ext_chrome: {
    name: "stealth",
    description: "Disables the Stealth Mode module for all corresponding pages and requests.",
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#stealth-modifier",
    assignable: true,
    negatable: false,
    exception_only: true
  },
  adg_ext_firefox: {
    name: "stealth",
    description: "Disables the Stealth Mode module for all corresponding pages and requests.",
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#stealth-modifier",
    assignable: true,
    negatable: false,
    exception_only: true
  },
  adg_ext_opera: {
    name: "stealth",
    description: "Disables the Stealth Mode module for all corresponding pages and requests.",
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#stealth-modifier",
    assignable: true,
    negatable: false,
    exception_only: true
  },
  adg_ext_edge: {
    name: "stealth",
    description: "Disables the Stealth Mode module for all corresponding pages and requests.",
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#stealth-modifier",
    assignable: true,
    negatable: false,
    exception_only: true
  }
};
data$a.adg_os_any;
data$a.adg_ext_chrome;
data$a.adg_ext_firefox;
data$a.adg_ext_opera;
data$a.adg_ext_edge;
var data$9 = {
  ubo_any: {
    name: "strict1p",
    description: "This new strict1p option can check for strict partyness.\nFor example, a network request qualifies as 1st-party if both the context and the request share the same hostname.",
    docs: "https://github.com/gorhill/uBlock/wiki/Static-filter-syntax#strict1p"
  }
};
data$9.ubo_any;
var data$8 = {
  ubo_any: {
    name: "strict3p",
    description: "This new strict3p option can check for strict partyness.\nFor example, a network request qualifies as 3rd-party if the context and the request hostnames are different.",
    docs: "https://github.com/gorhill/uBlock/wiki/Static-filter-syntax#strict3p"
  }
};
data$8.ubo_any;
var data$7 = {
  adg_any: {
    name: "stylesheet",
    assignable: false,
    negatable: true,
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#stylesheet-modifier",
    description: "The rule corresponds to CSS files requests."
  },
  abp_any: {
    name: "stylesheet",
    assignable: false,
    negatable: true,
    docs: "https://help.adblockplus.org/hc/en-us/articles/360062733293-How-to-write-filters#type-options",
    description: "The rule corresponds to CSS files requests."
  },
  ubo_any: {
    name: "stylesheet",
    aliases: ["css"],
    assignable: false,
    negatable: true,
    docs: "https://github.com/gorhill/uBlock/wiki/Static-filter-syntax#css",
    description: "The rule corresponds to CSS files requests."
  }
};
data$7.adg_any;
data$7.abp_any;
data$7.ubo_any;
var data$6 = {
  adg_any: {
    name: "subdocument",
    assignable: false,
    negatable: true,
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#subdocument-modifier",
    description: "The rule corresponds to requests for built-in pages — HTML tags frame and iframe."
  },
  abp_any: {
    name: "subdocument",
    assignable: false,
    negatable: true,
    docs: "https://help.adblockplus.org/hc/en-us/articles/360062733293-How-to-write-filters#type-options",
    description: "The rule corresponds to requests for built-in pages — HTML tags frame and iframe."
  },
  ubo_any: {
    name: "subdocument",
    aliases: ["frame"],
    assignable: false,
    negatable: true,
    docs: "https://github.com/gorhill/uBlock/wiki/Static-filter-syntax#frame",
    description: "The rule corresponds to requests for built-in pages — HTML tags frame and iframe."
  }
};
data$6.adg_any;
data$6.abp_any;
data$6.ubo_any;
var data$5 = {
  adg_any: {
    name: "third-party",
    aliases: ["3p"],
    assignable: false,
    negatable: true,
    version_added: "0.0.1",
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#third-party-modifier",
    description: "A restriction of third-party and own requests.\nA third-party request is a request from a different domain.\nFor example, a request to example.org, from domain.com is a third-party request."
  },
  ubo_any: {
    name: "3p",
    aliases: ["third-party"],
    assignable: false,
    negatable: true,
    version_added: "0.0.1",
    docs: "https://github.com/gorhill/uBlock/wiki/Static-filter-syntax#3p",
    description: "A restriction of third-party and own requests.\nA third-party request is a request from a different domain.\nFor example, a request to example.org, from domain.com is a third-party request."
  },
  abp_any: {
    name: "third-party",
    assignable: false,
    negatable: true,
    version_added: "0.0.1",
    docs: "https://help.adblockplus.org/hc/en-us/articles/360062733293#party-requests",
    description: "A restriction of third-party and own requests.\nA third-party request is a request from a different domain.\nFor example, a request to example.org, from domain.com is a third-party request."
  }
};
data$5.adg_any;
data$5.ubo_any;
data$5.abp_any;
var data$4 = {
  ubo_ext_any: {
    name: "to",
    assignable: true,
    negatable: false,
    docs: "https://github.com/gorhill/uBlock/wiki/Static-filter-syntax#to",
    description: "The main motivation of this option is\nto give static network filtering engine an equivalent of DNR's requestDomains and excludedRequestDomains."
  }
};
data$4.ubo_ext_any;
var data$3 = {
  adg_any: {
    name: "urlblock",
    conflicts: ["domain", "specifichide", "generichide", "elemhide", "extension", "jsinject", "content", "badfilter"],
    inverse_conflicts: true,
    negatable: false,
    exception_only: true,
    version_added: "0.0.1",
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#urlblock-modifier",
    description: "Disables blocking of all requests sent from the pages matching the rule."
  }
};
data$3.adg_any;
var data$2 = {
  adg_any: {
    name: "webrtc",
    deprecated: true,
    deprecation_message: "This modifier is deprecated and is no longer supported.\nRules with it are considered as invalid. If you need to suppress WebRTC, consider using\nthe [nowebrtc scriptlet](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#nowebrtc).",
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#webrtc-modifier"
  },
  ubo_any: {
    name: "webrtc",
    deprecated: true,
    deprecation_message: "This modifier is deprecated and is no longer supported.\nIf you need to suppress WebRTC, consider using\nthe [nowebrtc scriptlet](https://github.com/gorhill/uBlock/wiki/Resources-Library#nowebrtcjs-).",
    docs: "https://github.com/gorhill/uBlock/wiki/Static-filter-syntax"
  },
  abp_any: {
    name: "webrtc",
    version_added: "1.13.3",
    docs: "https://help.adblockplus.org/hc/en-us/articles/360062733293-How-to-write-filters#type-options",
    description: "The rule applies only to WebRTC connections."
  }
};
data$2.adg_any;
data$2.ubo_any;
data$2.abp_any;
var data$1 = {
  adg_os_any: {
    name: "websocket",
    description: "The rule applies only to WebSocket connections.",
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#websocket-modifier"
  },
  adg_ext_any: {
    name: "websocket",
    description: "The rule applies only to WebSocket connections.",
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#websocket-modifier"
  },
  adg_cb_ios: {
    name: "websocket",
    description: "The rule applies only to WebSocket connections.",
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#websocket-modifier"
  },
  adg_cb_safari: {
    name: "websocket",
    description: "The rule applies only to WebSocket connections.",
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#websocket-modifier"
  },
  abp_ext_any: {
    name: "websocket",
    description: "The rule applies only to WebSocket connections.",
    docs: "https://help.adblockplus.org/hc/en-us/articles/360062733293-How-to-write-filters#type-options"
  },
  ubo_ext_any: {
    name: "websocket",
    description: "The rule applies only to WebSocket connections.",
    docs: "https://help.adblockplus.org/hc/en-us/articles/360062733293-How-to-write-filters#type-options"
  }
};
data$1.adg_os_any;
data$1.adg_ext_any;
data$1.adg_cb_ios;
data$1.adg_cb_safari;
data$1.abp_ext_any;
data$1.ubo_ext_any;
var data = {
  adg_any: {
    name: "xmlhttprequest",
    aliases: ["xhr"],
    assignable: false,
    negatable: true,
    docs: "https://adguard.com/kb/general/ad-filtering/create-own-filters/#xmlhttprequest-modifier",
    description: "The rule applies only to ajax requests (requests sent via javascript object XMLHttpRequest)."
  },
  abp_any: {
    name: "xmlhttprequest",
    assignable: false,
    negatable: true,
    docs: "https://help.adblockplus.org/hc/en-us/articles/360062733293-How-to-write-filters#type-options",
    description: "The rule applies only to ajax requests (requests sent via javascript object XMLHttpRequest)."
  },
  ubo_any: {
    name: "xhr",
    aliases: ["xmlhttprequest"],
    assignable: false,
    negatable: true,
    docs: "https://github.com/gorhill/uBlock/wiki/Static-filter-syntax#xhr",
    description: "The rule applies only to ajax requests (requests sent via javascript object XMLHttpRequest)."
  }
};
data.adg_any;
data.abp_any;
data.ubo_any;

/**
 * @file Raw compatibility tables data reexport from yaml files.
 *
 * '@ts-nocheck' is used here once instead of adding @ts-ignore for each import.
 */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
var rawModifiersData = {
  app: data$F,
  badfilter: data$E,
  cname: data$D,
  content: data$C,
  cookie: data$B,
  csp: data$A,
  denyallow: data$z,
  document: data$y,
  domain: data$x,
  elemhide: data$w,
  extension: data$v,
  font: data$u,
  genericblock: data$t,
  generichide: data$s,
  header: data$r,
  hls: data$q,
  image: data$p,
  important: data$o,
  inlineFont: data$n,
  jsinject: data$m,
  jsonprune: data$l,
  matchcase: data$k,
  media: data$j,
  object: data$i,
  other: data$h,
  ping: data$g,
  popunder: data$f,
  popup: data$e,
  redirectRule: data$d,
  removeheader: data$c,
  script: data$b,
  stealth: data$a,
  strict1p: data$9,
  strict3p: data$8,
  stylesheet: data$7,
  subdocument: data$6,
  thirdParty: data$5,
  to: data$4,
  urlblock: data$3,
  webrtc: data$2,
  websocket: data$1,
  xmlhttprequest: data
};

/**
 * Checks whether the given value is defined.
 *
 * @param value Value to check.
 *
 * @returns True if the value type is not 'undefined'.
 */
var isUndefined = function isUndefined(value) {
  return typeof value === 'undefined';
};

/**
 * @file Validator for modifiers.
 */
/**
 * Prepares raw modifiers data into a data map.
 *
 * @returns Map of parsed modifiers data.
 */
var getModifiersData = function getModifiersData() {
  var dataMap = new Map();
  Object.keys(rawModifiersData).forEach(function (modifierId) {
    var modifierData = rawModifiersData[modifierId];
    dataMap.set(modifierId, modifierData);
  });
  return dataMap;
};
/**
 * Collects names and aliases for all supported modifiers.
 * Deprecated modifiers are not included.
 *
 * @param dataMap Parsed all modifiers data.
 *
 * @returns Set of supported modifier names (and their aliases).
 */
var getAllSupportedModifierNames = function getAllSupportedModifierNames(dataMap) {
  var names = new Set();
  dataMap.forEach(function (modifierData) {
    Object.keys(modifierData).forEach(function (blockerId) {
      var blockerData = modifierData[blockerId];
      // do not include deprecated modifiers
      if (blockerData.deprecated) {
        return;
      }
      names.add(blockerData.name);
      if (isUndefined(blockerData.aliases)) {
        return;
      }
      blockerData.aliases.forEach(function (alias) {
        return names.add(alias);
      });
    });
  });
  return names;
};
/**
 * Modifier validator class.
 */
var ModifierValidator = /*#__PURE__*/_createClass(function ModifierValidator() {
  var _this4 = this;
  _classCallCheck(this, ModifierValidator);
  /**
   * Map of all modifiers data parsed from yaml files.
   */
  _defineProperty(this, "modifiersData", void 0);
  /**
   * List of all currently supported modifier names for any adblocker.
   * Deprecated modifiers are not included.
   */
  _defineProperty(this, "supportedModifierNames", void 0);
  /**
   * Simply checks whether the modifier exists in any adblocker.
   *
   * @param rawModifier Modifier as string OR already parsed modifier AST node.
   *
   * @returns True if modifier exists, false otherwise.
   * If given modifier is a string and it cannot be parsed as a valid modifier,
   * e.g. 'domain=', false is returned.
   */
  _defineProperty(this, "exists", function (rawModifier) {
    var modifier;
    if (StringUtils.isString(rawModifier)) {
      try {
        modifier = ModifierParser.parse(rawModifier);
      } catch (e) {
        return false;
      }
    } else {
      modifier = rawModifier;
    }
    return _this4.supportedModifierNames.has(modifier.modifier.value);
  });
  // data map based on yaml files
  this.modifiersData = getModifiersData();
  this.supportedModifierNames = getAllSupportedModifierNames(this.modifiersData);
});
/**
 * @file Base class for rule converters
 */
/**
 * Helper function to throw not implemented error
 */
function throwNotImplementedError() {
  throw new Error('Not implemented');
}
/**
 * Basic class for rule converters
 */
var RuleConverter = /*#__PURE__*/function () {
  function RuleConverter() {
    _classCallCheck(this, RuleConverter);
  }
  _createClass(RuleConverter, null, [{
    key: "convertToAdg",
    value:
    /**
     * Convert rule to AdGuard format
     *
     * @param rule Rule to convert, can be a string or an AST
     * @returns Array of converted rules ASTs
     * @throws If the rule is invalid or incompatible
     */
    function convertToAdg(rule) {
      throwNotImplementedError();
    }
    /**
     * Convert rule to Adblock Plus format
     *
     * @param rule Rule to convert, can be a string or an AST
     * @returns Array of converted rules ASTs
     * @throws If the rule is invalid or incompatible
     * @todo Currently not implemented in the library and temporary optional
     */
  }, {
    key: "convertToAbp",
    value: function convertToAbp(rule) {
      throwNotImplementedError();
    }
    /**
     * Convert rule to uBlock Origin format
     *
     * @param rule Rule to convert, can be a string or an AST
     * @returns Array of converted rules ASTs
     * @throws If the rule is invalid or incompatible
     * @todo Currently not implemented in the library and temporary optional
     */
  }, {
    key: "convertToUbo",
    value: function convertToUbo(rule) {
      throwNotImplementedError();
    }
  }]);
  return RuleConverter;
}();
/**
 * @file HTML rule converter
 */
/**
 * From the AdGuard docs:
 * Specifies the maximum length for content of HTML element. If this parameter is
 * set and the content length exceeds the value, a rule does not apply to the element.
 * If this parameter is not specified, the max-length is considered to be 8192 (8 KB).
 * When converting from other formats, we set the max-length to 262144 (256 KB).
 *
 * @see {@link https://adguard.com/kb/general/ad-filtering/create-own-filters/#html-filtering-rules}
 */
var ADGUARD_HTML_DEFAULT_MAX_LENGTH = 8192;
var ADGUARD_HTML_CONVERSION_MAX_LENGTH = ADGUARD_HTML_DEFAULT_MAX_LENGTH * 32;
var NOT_SPECIFIED = -1;
var CONTAINS = 'contains';
var HAS_TEXT = 'has-text';
var MAX_LENGTH = 'max-length';
var MIN_LENGTH = 'min-length';
var MIN_TEXT_LENGTH = 'min-text-length';
var TAG_CONTENT = 'tag-content';
var WILDCARD$1 = 'wildcard';
/**
 * HTML rule converter
 */
// TODO: Implement convertToUbo
var HtmlRuleConverter = /*#__PURE__*/function (_RuleConverter) {
  _inherits(HtmlRuleConverter, _RuleConverter);
  var _super2 = _createSuper(HtmlRuleConverter);
  function HtmlRuleConverter() {
    _classCallCheck(this, HtmlRuleConverter);
    return _super2.apply(this, arguments);
  }
  _createClass(HtmlRuleConverter, null, [{
    key: "convertToAdg",
    value:
    /**
     * Converts a HTML rule to AdGuard syntax, if possible. Also can be used to convert
     * AdGuard rules to AdGuard syntax to validate them.
     *
     * _Note:_ uBlock Origin supports multiple selectors within a single rule, but AdGuard doesn't,
     * so the following rule
     * ```
     * example.com##^div[attr1="value1"][attr2="value2"], script:has-text(value)
     * ```
     * will be converted to multiple AdGuard rules:
     * ```
     * example.com$$div[attr1="value1"][attr2="value2"][max-length="262144"]
     * example.com$$script[tag-content="value"][max-length="262144"]
     * ```
     *
     * @param rule Rule to convert, can be a string or an AST
     * @returns Array of converted rules ASTs
     * @throws If the rule is invalid or incompatible
     */
    function convertToAdg(rule) {
      // Prepare the base rule AST
      var base;
      if (StringUtils.isString(rule)) {
        // This will throw an error if the rule is invalid
        var ast = RuleParser.parse(rule);
        // Rule should be a cosmetic HTML filtering rule
        if (ast.category !== RuleCategory.Cosmetic || ast.type !== CosmeticRuleType.HtmlFilteringRule) {
          throw new Error('Invalid or incompatible rule');
        }
        base = ast;
      } else {
        base = rule;
      }
      // Prepare the conversion result
      var conversionResult = [];
      // Iterate over selector list
      var _iterator3 = _createForOfIteratorHelper(base.body.body.children),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var selector = _step3.value;
          // Check selector, just in case
          if (selector.type !== CssTreeNodeType.Selector) {
            throw new Error("Expected selector, got '".concat(selector.type, "'"));
          }
          // At least one child is required, and first child may be a tag selector
          if (selector.children.length === 0) {
            throw new Error('Invalid selector, no children are present');
          }
          // Prepare bounds
          var minLength = NOT_SPECIFIED;
          var maxLength = NOT_SPECIFIED;
          // Prepare the converted selector
          var convertedSelector = {
            type: CssTreeNodeType.Selector,
            children: []
          };
          for (var i = 0; i < selector.children.length; i += 1) {
            // Current node within the current selector
            var node = selector.children[i];
            switch (node.type) {
              case CssTreeNodeType.TypeSelector:
                // First child in the selector may be a tag selector
                if (i !== 0) {
                  throw new Error('Tag selector should be the first child, if present');
                }
                // Simply store the tag selector
                convertedSelector.children.push(cloneDeep(node));
                break;
              case CssTreeNodeType.AttributeSelector:
                // Check if the attribute selector is a special AdGuard attribute
                switch (node.name.name) {
                  case MIN_LENGTH:
                    minLength = CssTree.parseAttributeSelectorValueAsNumber(node);
                    break;
                  case MAX_LENGTH:
                    maxLength = CssTree.parseAttributeSelectorValueAsNumber(node);
                    break;
                  case TAG_CONTENT:
                  case WILDCARD$1:
                    CssTree.assertAttributeSelectorHasStringValue(node);
                    convertedSelector.children.push(cloneDeep(node));
                    break;
                  default:
                    convertedSelector.children.push(cloneDeep(node));
                }
                break;
              case CssTreeNodeType.PseudoClassSelector:
                CssTree.assertPseudoClassHasAnyArgument(node);
                // eslint-disable-next-line no-case-declarations
                var arg = node.children[0];
                if (arg.type !== CssTreeNodeType.String && arg.type !== CssTreeNodeType.Raw && arg.type !== CssTreeNodeType.Number) {
                  throw new Error("Unsupported argument type '".concat(arg.type, "' for pseudo class '").concat(node.name, "'"));
                }
                // Process the pseudo class based on its name
                switch (node.name) {
                  case HAS_TEXT:
                  case CONTAINS:
                    // Check if the argument is a RegExp
                    if (StringUtils.isRegexPattern(arg.value)) {
                      // TODO: Add some support for RegExp patterns later
                      // Need to find a way to convert some RegExp patterns to glob patterns
                      throw new Error('Conversion of RegExp patterns is not yet supported');
                    }
                    convertedSelector.children.push(CssTree.createAttributeSelectorNode(TAG_CONTENT, arg.value));
                    break;
                  // https://github.com/gorhill/uBlock/wiki/Procedural-cosmetic-filters#subjectmin-text-lengthn
                  case MIN_TEXT_LENGTH:
                    minLength = CssTree.parsePseudoClassArgumentAsNumber(node);
                    break;
                  default:
                    throw new Error("Unsupported pseudo class '".concat(node.name, "'"));
                }
                break;
              default:
                throw new Error("Unsupported node type '".concat(node.type, "'"));
            }
          }
          if (minLength !== NOT_SPECIFIED) {
            convertedSelector.children.push(CssTree.createAttributeSelectorNode(MIN_LENGTH, String(minLength)));
          }
          convertedSelector.children.push(CssTree.createAttributeSelectorNode(MAX_LENGTH, String(maxLength === NOT_SPECIFIED ? ADGUARD_HTML_CONVERSION_MAX_LENGTH : maxLength)));
          // Create the converted rule
          conversionResult.push({
            category: RuleCategory.Cosmetic,
            type: CosmeticRuleType.HtmlFilteringRule,
            syntax: AdblockSyntax.Adg,
            // Convert the separator based on the exception status
            separator: {
              type: 'Value',
              value: base.exception ? '$@$' : '$$'
            },
            // Create the body based on the converted selector
            body: {
              type: 'HtmlFilteringRuleBody',
              body: {
                type: CssTreeNodeType.SelectorList,
                children: [{
                  type: CssTreeNodeType.Selector,
                  children: [convertedSelector]
                }]
              }
            },
            exception: base.exception,
            domains: base.domains
          });
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      return conversionResult;
    }
  }]);
  return HtmlRuleConverter;
}(RuleConverter);
/**
 * @file Utility functions for domain and hostname validation.
 */
var WILDCARD = ASTERISK; // *
var WILDCARD_TLD = DOT + WILDCARD; // .*
var WILDCARD_SUBDOMAIN = WILDCARD + DOT; // *.
var DomainUtils = /*#__PURE__*/function () {
  function DomainUtils() {
    _classCallCheck(this, DomainUtils);
  }
  _createClass(DomainUtils, null, [{
    key: "isValidDomainOrHostname",
    value:
    /**
     * Check if the input is a valid domain or hostname.
     *
     * @param domain Domain to check
     * @returns `true` if the domain is valid, `false` otherwise
     */
    function isValidDomainOrHostname(domain) {
      var domainToCheck = domain;
      // Wildcard-only domain, typically a generic rule
      if (domainToCheck === WILDCARD) {
        return true;
      }
      // https://adguard.com/kb/general/ad-filtering/create-own-filters/#wildcard-for-tld
      if (domainToCheck.endsWith(WILDCARD_TLD)) {
        // Remove the wildcard TLD
        domainToCheck = domainToCheck.substring(0, domainToCheck.length - WILDCARD_TLD.length);
      }
      if (domainToCheck.startsWith(WILDCARD_SUBDOMAIN)) {
        // Remove the wildcard subdomain
        domainToCheck = domainToCheck.substring(WILDCARD_SUBDOMAIN.length);
      }
      // Parse the domain with tldts
      var tldtsResult = parse$1(domainToCheck);
      // Check if the domain is valid
      return domainToCheck === tldtsResult.domain || domainToCheck === tldtsResult.hostname;
    }
  }]);
  return DomainUtils;
}();
/**
 * @file Utility functions for logical expression AST.
 */
/**
 * Utility functions for logical expression AST.
 */
var LogicalExpressionUtils = /*#__PURE__*/function () {
  function LogicalExpressionUtils() {
    _classCallCheck(this, LogicalExpressionUtils);
  }
  _createClass(LogicalExpressionUtils, null, [{
    key: "getVariables",
    value:
    /**
     * Get all variables in the expression.
     *
     * @param ast Logical expression AST
     * @returns List of variables in the expression (nodes)
     * @example
     * If the expression is `a && b || c`, the returned list will be
     * nodes for `a`, `b`, and `c`.
     */
    function getVariables(ast) {
      if (ast.type === 'Variable') {
        return [ast];
      }
      if (ast.type === 'Operator') {
        var leftVars = LogicalExpressionUtils.getVariables(ast.left);
        var rightVars = ast.right ? LogicalExpressionUtils.getVariables(ast.right) : [];
        return [].concat(_toConsumableArray(leftVars), _toConsumableArray(rightVars));
      }
      if (ast.type === 'Parenthesis') {
        return LogicalExpressionUtils.getVariables(ast.expression);
      }
      throw new Error('Unexpected node type');
    }
    /**
     * Evaluate the parsed logical expression. You'll need to provide a
     * variable table.
     *
     * @param ast Logical expression AST
     * @param table Variable table (key: variable name, value: boolean)
     * @returns Evaluation result
     * @example
     * If the expression is `a && b`, and the variable table is
     * `{ a: true, b: false }`, the result will be `false`.
     *
     * Example code:
     * ```js
     * LogicalExpressionUtils.evaluate(
     *     LogicalExpressionParser.parse('a && b'),
     *     { a: true, b: false }
     * );
     * ```
     */
  }, {
    key: "evaluate",
    value: function evaluate(ast, table) {
      if (ast.type === 'Variable') {
        return !!table[ast.name];
      }
      if (ast.type === 'Operator') {
        if (ast.operator === '&&' || ast.operator === '||') {
          if (!ast.right) {
            throw new Error('Unexpected right operand');
          }
          if (ast.operator === '&&') {
            // eslint-disable-next-line max-len
            return LogicalExpressionUtils.evaluate(ast.left, table) && LogicalExpressionUtils.evaluate(ast.right, table);
          }
          if (ast.operator === '||') {
            // eslint-disable-next-line max-len
            return LogicalExpressionUtils.evaluate(ast.left, table) || LogicalExpressionUtils.evaluate(ast.right, table);
          }
        } else if (ast.operator === '!') {
          return !LogicalExpressionUtils.evaluate(ast.left, table);
        }
      } else if (ast.type === 'Parenthesis') {
        return LogicalExpressionUtils.evaluate(ast.expression, table);
      }
      throw new Error("Unexpected AST node type '".concat(ast.type, "'"));
    }
  }]);
  return LogicalExpressionUtils;
}();
var version$1 = "1.0.1";

/**
 * @file AGTree version
 */
// ! Notice:
// Don't export version from package.json directly, because if you run
// `tsc` in the root directory, it will generate `dist/types/src/version.d.ts`
// with wrong relative path to `package.json`. So we need this little "hack"
var version = version$1;
export { ADG_SCRIPTLET_MASK, AGLINT_COMMAND_PREFIX, AdblockSyntax, AdblockSyntaxError, AgentCommentRuleParser, AgentParser, CLASSIC_DOMAIN_SEPARATOR, CommentMarker, CommentRuleParser, CommentRuleType, ConfigCommentRuleParser, CosmeticRuleParser, CosmeticRuleSeparator, CosmeticRuleSeparatorUtils, CosmeticRuleType, CssTree, CssTreeNodeType, CssTreeParserContext, DOMAIN_EXCEPTION_MARKER, DomainListParser, DomainUtils, EXT_CSS_LEGACY_ATTRIBUTES, EXT_CSS_PSEUDO_CLASSES, FORBIDDEN_CSS_FUNCTIONS, FilterListParser, HINT_MARKER, HintCommentRuleParser, HintParser, HtmlRuleConverter, IF, INCLUDE, LogicalExpressionParser, LogicalExpressionUtils, METADATA_HEADERS, MODIFIERS_SEPARATOR, MODIFIER_ASSIGN_OPERATOR, MODIFIER_DOMAIN_SEPARATOR, MODIFIER_EXCEPTION_MARKER, MetadataCommentRuleParser, ModifierListParser, ModifierParser, ModifierValidator, NETWORK_RULE_EXCEPTION_MARKER, NETWORK_RULE_SEPARATOR, NetworkRuleParser, PREPROCESSOR_MARKER, ParameterListParser, PreProcessorCommentRuleParser, RuleCategory, RuleParser, SAFARI_CB_AFFINITY, UBO_SCRIPTLET_MASK, locRange, shiftLoc, version };
