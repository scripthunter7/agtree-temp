/*
 * AGTree v1.0.1 (build date: Fri, 23 Jun 2023 15:20:07 GMT)
 * (c) 2023 AdGuard Software Ltd.
 * Released under the MIT license
 * https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/agtree#readme
 */
import { MediaQueryListPlain, SelectorListPlain, DeclarationListPlain, FunctionNodePlain, CssNode, CssNodePlain, SelectorList, DeclarationList, MediaQueryList, MediaQuery, Selector, AttributeSelector, PseudoClassSelectorPlain } from '@adguard/ecss-tree';
import * as ecssTree from '@adguard/ecss-tree';
export { ecssTree as ECSSTree };

/**
 * @file Possible adblock syntaxes are listed here.
 */
/**
 * Possible adblock syntaxes (supported by this library)
 */
declare enum AdblockSyntax {
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
    Common = "Common",
    /**
     * Adblock Plus syntax.
     *
     * @example
     * - `example.org#$#abort-on-property-read alert` is an Adblock Plus syntax, since it is not used by any other
     * adblockers directly (probably supported by some on-the-fly conversion, but this is not the native syntax).
     * @see {@link https://adblockplus.org/}
     */
    Abp = "AdblockPlus",
    /**
     * uBlock Origin syntax.
     *
     * @example
     * - `example.com##+js(set, atob, noopFunc)` is an uBlock Origin syntax, since it is not used by any other
     * adblockers directly (probably supported by some on-the-fly conversion, but this is not the native syntax).
     * @see {@link https://github.com/gorhill/uBlock}
     */
    Ubo = "UblockOrigin",
    /**
     * AdGuard syntax.
     *
     * @example
     * - `example.org#%#//scriptlet("abort-on-property-read", "alert")` is an AdGuard syntax, since it is not used
     * by any other adblockers directly (probably supported by some on-the-fly conversion, but this is not the native
     * syntax).
     * @see {@link https://adguard.com/}
     */
    Adg = "AdGuard"
}

declare const ADG_SCRIPTLET_MASK = "//scriptlet";
declare const UBO_SCRIPTLET_MASK = "js";
declare const MODIFIERS_SEPARATOR = ",";
declare const MODIFIER_EXCEPTION_MARKER = "~";
declare const MODIFIER_ASSIGN_OPERATOR = "=";
declare const DOMAIN_EXCEPTION_MARKER = "~";
/**
 * Classic domain separator.
 *
 * @example
 * ```adblock
 * ! Domains are separated by ",":
 * example.com,~example.org##.ads
 * ```
 */
declare const CLASSIC_DOMAIN_SEPARATOR = ",";
/**
 * Modifier domain separator.
 *
 * @example
 * ```adblock
 * ! Domains are separated by "|":
 * ads.js^$script,domains=example.com|~example.org
 * ```
 */
declare const MODIFIER_DOMAIN_SEPARATOR = "|";
declare const HINT_MARKER = "!+";
declare const NETWORK_RULE_EXCEPTION_MARKER = "@@";
declare const NETWORK_RULE_SEPARATOR = "$";
declare const AGLINT_COMMAND_PREFIX = "aglint";
declare const PREPROCESSOR_MARKER = "!#";
declare const SAFARI_CB_AFFINITY = "safari_cb_affinity";
declare const IF = "if";
declare const INCLUDE = "include";

/**
 * Represents possible logical expression operators.
 */
type AnyOperator = '&&' | '||' | '!';
/**
 * Represents possible new line types.
 */
type NewLine = 'crlf' | 'lf' | 'cr';
/**
 * Represents any kind of logical expression node.
 */
type AnyExpressionNode = ExpressionVariableNode | ExpressionOperatorNode | ExpressionParenthesisNode;
/**
 * Represents any kind of adblock rule.
 */
type AnyRule = EmptyRule | AnyCommentRule | AnyCosmeticRule | NetworkRule | InvalidRule;
/**
 * Represents any comment-like adblock rule.
 */
type AnyCommentRule = AgentCommentRule | CommentRule | ConfigCommentRule | HintCommentRule | MetadataCommentRule | PreProcessorCommentRule;
/**
 * Represents any cosmetic adblock rule.
 */
type AnyCosmeticRule = CssInjectionRule | ElementHidingRule | ScriptletInjectionRule | HtmlFilteringRule | JsInjectionRule;
/**
 * Represents the different comment markers that can be used in an adblock rule.
 *
 * @example
 * - If the rule is `! This is just a comment`, then the marker will be `!`.
 * - If the rule is `# This is just a comment`, then the marker will be `#`.
 */
declare enum CommentMarker {
    /**
     * Regular comment marker. It is supported by all ad blockers.
     */
    Regular = "!",
    /**
     * Hashmark comment marker. It is supported by uBlock Origin and AdGuard,
     * and also used in hosts files.
     */
    Hashmark = "#"
}
/**
 * Represents the main categories that an adblock rule can belong to.
 * Of course, these include additional subcategories.
 */
declare enum RuleCategory {
    /**
     * Empty "rules" that are only containing whitespaces. These rules are handled just for convenience.
     */
    Empty = "Empty",
    /**
     * Syntactically invalid rules (tolerant mode only).
     */
    Invalid = "Invalid",
    /**
     * Comment rules, such as comment rules, metadata rules, preprocessor rules, etc.
     */
    Comment = "Comment",
    /**
     * Cosmetic rules, such as element hiding rules, CSS rules, scriptlet rules, HTML rules, and JS rules.
     */
    Cosmetic = "Cosmetic",
    /**
     * Network rules, such as basic network rules, header remover network rules, redirect network rules,
     * response header filtering rules, etc.
     */
    Network = "Network"
}
/**
 * Represents possible comment types.
 */
declare enum CommentRuleType {
    AgentCommentRule = "AgentCommentRule",
    CommentRule = "CommentRule",
    ConfigCommentRule = "ConfigCommentRule",
    HintCommentRule = "HintCommentRule",
    MetadataCommentRule = "MetadataCommentRule",
    PreProcessorCommentRule = "PreProcessorCommentRule"
}
/**
 * Represents possible cosmetic rule types.
 */
declare enum CosmeticRuleType {
    ElementHidingRule = "ElementHidingRule",
    CssInjectionRule = "CssInjectionRule",
    ScriptletInjectionRule = "ScriptletInjectionRule",
    HtmlFilteringRule = "HtmlFilteringRule",
    JsInjectionRule = "JsInjectionRule"
}
/**
 * Represents possible cosmetic rule separators.
 */
declare enum CosmeticRuleSeparator {
    /**
     * @see {@link https://help.eyeo.com/adblockplus/how-to-write-filters#elemhide_basic}
     */
    ElementHiding = "##",
    /**
     * @see {@link https://help.eyeo.com/adblockplus/how-to-write-filters#elemhide_basic}
     */
    ElementHidingException = "#@#",
    /**
     * @see {@link https://help.eyeo.com/adblockplus/how-to-write-filters#elemhide_basic}
     */
    ExtendedElementHiding = "#?#",
    /**
     * @see {@link https://help.eyeo.com/adblockplus/how-to-write-filters#elemhide_basic}
     */
    ExtendedElementHidingException = "#@?#",
    /**
     * @see {@link https://help.eyeo.com/adblockplus/how-to-write-filters#elemhide_basic}
     */
    AbpSnippet = "#$#",
    /**
     * @see {@link https://help.eyeo.com/adblockplus/how-to-write-filters#elemhide_basic}
     */
    AbpSnippetException = "#@$#",
    /**
     * @see {@link https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#cosmetic-css-rules}
     */
    AdgCssInjection = "#$#",
    /**
     * @see {@link https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#cosmetic-css-rules}
     */
    AdgCssInjectionException = "#@$#",
    /**
     * @see {@link https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#cosmetic-css-rules}
     */
    AdgExtendedCssInjection = "#$?#",
    /**
     * @see {@link https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#cosmetic-css-rules}
     */
    AdgExtendedCssInjectionException = "#@$?#",
    /**
     * @see {@link https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#scriptlets}
     */
    AdgJsInjection = "#%#",
    /**
     * @see {@link https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#scriptlets}
     */
    AdgJsInjectionException = "#@%#",
    /**
     * @see {@link https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#html-filtering-rules}
     */
    AdgHtmlFiltering = "$$",
    /**
     * @see {@link https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#html-filtering-rules}
     */
    AdgHtmlFilteringException = "$@$",
    /**
     * @see {@link https://github.com/gorhill/uBlock/wiki/Static-filter-syntax#scriptlet-injection}
     */
    UboScriptletInjection = "##+",
    /**
     * @see {@link https://github.com/gorhill/uBlock/wiki/Static-filter-syntax#scriptlet-injection}
     */
    UboScriptletInjectionException = "#@#+",
    /**
     * @see {@link https://github.com/gorhill/uBlock/wiki/Static-filter-syntax#html-filters}
     */
    UboHtmlFiltering = "##^",
    /**
     * @see {@link https://github.com/gorhill/uBlock/wiki/Static-filter-syntax#html-filters}
     */
    UboHtmlFilteringException = "#@#^"
}
/**
 * Represents a basic node in the AST.
 */
interface Node {
    /**
     * The type of the node. Every node should have a type.
     */
    type: string;
    /**
     * Every node should support a loc property, which refers to the location of the node in the source code.
     */
    loc?: LocationRange;
    /**
     * Optionally the raw representation of the node in the source code.
     */
    raw?: string;
}
/**
 * Represents a location range in the source code.
 */
interface LocationRange {
    /**
     * The start location of the node.
     */
    start: Location;
    /**
     * The end location of the node.
     */
    end: Location;
}
/**
 * Represents a location in the source code.
 */
interface Location {
    /**
     * Zero-based index of the first character of the parsed source region.
     */
    offset: number;
    /**
     * One-based line index of the first character of the parsed source region.
     */
    line: number;
    /**
     * One-based column index of the first character of the parsed source region.
     */
    column: number;
}
/**
 * Represents a basic value node in the AST.
 */
interface Value<T = string> extends Node {
    type: 'Value';
    /**
     * Value of the node.
     */
    value: T;
}
/**
 * Represents a basic parameter node in the AST.
 */
interface Parameter extends Node {
    type: 'Parameter';
    /**
     * Value of the node.
     */
    value: string;
}
/**
 * Represents a list of parameters.
 */
interface ParameterList extends Node {
    type: 'ParameterList';
    /**
     * List of values
     */
    children: Parameter[];
}
/**
 * Represents a logical expression variable node in the AST.
 */
interface ExpressionVariableNode extends Node {
    type: 'Variable';
    name: string;
}
/**
 * Represents a logical expression operator node in the AST.
 */
interface ExpressionOperatorNode extends Node {
    type: 'Operator';
    operator: AnyOperator;
    left: AnyExpressionNode;
    right?: AnyExpressionNode;
}
/**
 * Represents a logical expression parenthesis node in the AST.
 */
interface ExpressionParenthesisNode extends Node {
    type: 'Parenthesis';
    expression: AnyExpressionNode;
}
/**
 * Represents a filter list (list of rules).
 */
interface FilterList extends Node {
    type: 'FilterList';
    /**
     * List of rules
     */
    children: AnyRule[];
}
/**
 * Represents a basic adblock rule. Every adblock rule should extend this interface.
 * We don't use this interface directly, so we don't specify the `type` property.
 */
interface RuleBase extends Node {
    /**
     * Syntax of the adblock rule. If we are not able to determine the syntax of the rule,
     * we should use `AdblockSyntax.Common` as the value.
     */
    syntax: AdblockSyntax;
    /**
     * Category of the adblock rule
     */
    category: RuleCategory;
    /**
     * Raw data of the rule
     */
    raws?: {
        /**
         * Original rule text
         */
        text?: string;
        /**
         * Newline character used in the rule (if any)
         */
        nl?: NewLine;
    };
}
/**
 * Represents an invalid rule (used by tolerant mode).
 */
interface InvalidRule extends RuleBase {
    type: 'InvalidRule';
    /**
     * Category of the adblock rule
     */
    category: RuleCategory.Invalid;
    /**
     * Raw rule text
     */
    raw: string;
    /**
     * Error details
     */
    error: {
        /**
         * Error name
         */
        name: string;
        /**
         * Error message
         */
        message: string;
        /**
         * Error location (if any)
         */
        loc?: LocationRange;
    };
}
/**
 * Represents an "empty rule" (practically an empty line)
 */
interface EmptyRule extends RuleBase {
    /**
     * Type of the adblock rule (should be always present)
     */
    type: 'EmptyRule';
    /**
     * Category of the adblock rule
     */
    category: RuleCategory.Empty;
}
/**
 * Represents the basic comment rule interface.
 */
interface CommentBase extends RuleBase {
    category: RuleCategory.Comment;
    type: CommentRuleType;
}
/**
 * Represents a simple comment.
 *
 * @example
 * Example rules:
 *   - ```adblock
 *     ! This is just a comment
 *     ```
 *   - ```adblock
 *     # This is just a comment
 *     ```
 */
interface CommentRule extends CommentBase {
    type: CommentRuleType.CommentRule;
    /**
     * Comment marker.
     *
     * @example
     * - If the rule is `! This is just a comment`, then the marker will be `!`.
     * - If the rule is `# This is just a comment`, then the marker will be `#`.
     */
    marker: Value<CommentMarker>;
    /**
     * Comment text.
     *
     * @example
     * If the rule is `! This is just a comment`, then the text will be `This is just a comment`.
     */
    text: Value;
}
/**
 * Represents a metadata comment rule. This is a special comment that specifies
 * the name and value of the metadata header.
 *
 * @example
 * For example, in the case of
 * ```adblock
 * ! Title: My List
 * ```
 * the name of the header is `Title`, and the value is `My List`.
 */
interface MetadataCommentRule extends CommentBase {
    type: CommentRuleType.MetadataCommentRule;
    /**
     * Comment marker.
     */
    marker: Value<CommentMarker>;
    /**
     * Metadata header name.
     */
    header: Value;
    /**
     * Metadata header value (always should present).
     */
    value: Value;
}
/**
 * Represents an inline linter configuration comment.
 *
 * @example
 * For example, if the comment is
 * ```adblock
 * ! aglint-disable some-rule another-rule
 * ```
 * then the command is `aglint-disable` and its params is `["some-rule", "another-rule"]`.
 */
interface ConfigCommentRule extends CommentBase {
    category: RuleCategory.Comment;
    type: CommentRuleType.ConfigCommentRule;
    /**
     * The marker for the comment. It can be `!` or `#`. It is always the first non-whitespace character in the comment.
     */
    marker: Value<CommentMarker>;
    /**
     * The command for the comment. It is always begins with the `aglint` prefix.
     *
     * @example
     * ```adblock
     * ! aglint-disable-next-line
     * ```
     */
    command: Value;
    /**
     * Params for the command. Can be a rule configuration object or a list of rule names.
     *
     * @example
     * For the following comment:
     * ```adblock
     * ! aglint-disable some-rule another-rule
     * ```
     * the params would be `["some-rule", "another-rule"]`.
     */
    params?: Value<object> | ParameterList;
    /**
     * Config comment text. The idea is generally the same as in ESLint.
     *
     * @example
     * You can use the following syntax to specify a comment for a config comment:
     * `! aglint-enable -- this is the comment`
     */
    comment?: Value;
}
/**
 * Represents a preprocessor comment.
 *
 * @example
 * For example, if the comment is
 * ```adblock
 * !#if (adguard)
 * ```
 * then the directive's name is `if` and its value is `(adguard)`.
 *
 * In such a case, the parameters must be submitted for further parsing and validation, as this parser only handles
 * the general syntax.
 */
interface PreProcessorCommentRule extends CommentBase {
    category: RuleCategory.Comment;
    type: CommentRuleType.PreProcessorCommentRule;
    /**
     * Name of the directive
     */
    name: Value;
    /**
     * Params (optional)
     */
    params?: Value | ParameterList | AnyExpressionNode;
}
/**
 * Represents an adblock agent.
 */
interface Agent extends Node {
    type: 'Agent';
    /**
     * Adblock name.
     */
    adblock: Value;
    /**
     * Adblock version (if specified).
     */
    version: Value | null;
}
/**
 * Represents an agent comment rule.
 *
 * @example
 * - ```adblock
 *   [Adblock Plus 2.0]
 *   ```
 * - ```adblock
 *   [uBlock Origin 1.16.4; AdGuard 1.0]
 *   ```
 */
interface AgentCommentRule extends RuleBase {
    category: RuleCategory.Comment;
    type: CommentRuleType.AgentCommentRule;
    /**
     * Agent list.
     */
    children: Agent[];
}
/**
 * Represents a hint.
 *
 * @example
 * ```adblock
 * !+ PLATFORM(windows, mac)
 * ```
 * the name would be `PLATFORM` and the params would be `["windows", "mac"]`.
 */
interface Hint extends Node {
    type: 'Hint';
    /**
     * Hint name.
     *
     * @example
     * For `PLATFORM(windows, mac)` the name would be `PLATFORM`.
     */
    name: Value;
    /**
     * Hint parameters.
     *
     * @example
     * For `PLATFORM(windows, mac)` the params would be `["windows", "mac"]`.
     */
    params?: ParameterList;
}
/**
 * Represents a hint comment rule.
 *
 * There can be several hints in a hint rule.
 *
 * @example
 * If the rule is
 * ```adblock
 * !+ NOT_OPTIMIZED PLATFORM(windows)
 * ```
 * then there are two hint members: `NOT_OPTIMIZED` and `PLATFORM`.
 */
interface HintCommentRule extends RuleBase {
    category: RuleCategory.Comment;
    type: CommentRuleType.HintCommentRule;
    /**
     * Currently only AdGuard supports hints.
     */
    syntax: AdblockSyntax.Adg;
    /**
     * List of hints.
     */
    children: Hint[];
}
/**
 * Represents a modifier list.
 *
 * @example
 * If the rule is
 * ```adblock
 * some-rule$script,domain=example.com
 * ```
 * then the list of modifiers will be `script,domain=example.com`.
 */
interface ModifierList extends Node {
    type: 'ModifierList';
    /**
     * List of modifiers.
     */
    children: Modifier[];
}
/**
 * Represents a modifier.
 *
 * @example
 * If the modifier is `third-party`, the value of the modifier property
 * will be `third-party`, but the value will remain undefined.
 *
 * But if the modifier is `domain=example.com`, then the modifier property will be
 * `domain` and the value property will be `example.com`.
 */
interface Modifier extends Node {
    /**
     * Modifier name
     */
    modifier: Value;
    /**
     * Is this modifier an exception? For example, `~third-party` is an exception
     */
    exception?: boolean;
    /**
     * Modifier value (optional)
     */
    value?: Value;
}
/**
 * Represents the separator used in a domain list.
 *
 * @example
 * "," for the classic domain list, and "|" for the "domain" modifier parameter
 */
type DomainListSeparator = typeof CLASSIC_DOMAIN_SEPARATOR | typeof MODIFIER_DOMAIN_SEPARATOR;
/**
 * Represents a list of domains
 *
 * @example
 * `example.com,~example.net`.
 */
interface DomainList extends Node {
    /**
     * Type of the node. Basically, the idea is that each main AST part should have a type
     */
    type: 'DomainList';
    /**
     * Separator used in the domain list.
     */
    separator: DomainListSeparator;
    /**
     * List of domains
     */
    children: Domain[];
}
/**
 * Represents an element of the domain list (a domain).
 */
interface Domain extends Node {
    type: 'Domain';
    /**
     * Domain name
     */
    value: string;
    /**
     * If the domain is an exception.
     *
     * @example
     * `~example.com` is an exception, but `example.com` is not. `~` is the exception marker here.
     */
    exception: boolean;
}
/**
 * Represents a CSS injection body.
 */
interface CssInjectionRuleBody extends Node {
    type: 'CssInjectionRuleBody';
    /**
     * Media query list (if any)
     */
    mediaQueryList?: MediaQueryListPlain;
    /**
     * Selector list
     */
    selectorList: SelectorListPlain;
    /**
     * Declaration block / remove flag
     */
    declarationList?: DeclarationListPlain;
    /**
     * Remove flag
     */
    remove?: boolean;
}
/**
 * Represents an element hiding rule body. There can even be several selectors in a rule,
 * but the best practice is to place the selectors in separate rules.
 */
interface ElementHidingRuleBody extends Node {
    type: 'ElementHidingRuleBody';
    /**
     * Element hiding rule selector(s).
     */
    selectorList: SelectorListPlain;
}
/**
 * Represents a scriptlet injection rule body.
 */
interface ScriptletInjectionRuleBody extends Node {
    type: 'ScriptletInjectionRuleBody';
    /**
     * List of scriptlets (list of parameter lists).
     */
    children: ParameterList[];
}
/**
 * Represents an HTML filtering rule body.
 */
interface HtmlFilteringRuleBody extends Node {
    type: 'HtmlFilteringRuleBody';
    /**
     * HTML rule selector(s).
     */
    body: SelectorListPlain | FunctionNodePlain;
}
/**
 * A generic representation of a cosmetic rule.
 *
 * Regarding the categories, there is only a difference in the body,
 * all other properties can be defined at this level.
 */
interface CosmeticRule extends RuleBase {
    category: RuleCategory.Cosmetic;
    type: CosmeticRuleType;
    /**
     * List of modifiers (optional)
     */
    modifiers?: ModifierList;
    /**
     * List of domains.
     */
    domains: DomainList;
    /**
     * Separator between pattern and body. For example, in the following rule:
     * ```adblock
     * example.com##.ads
     * ```
     * then the separator is `##`.
     */
    separator: Value;
    /**
     * If the rule is an exception. For example, in the following rule:
     * ```adblock
     * example.com#@#.ads
     * ```
     * then the rule is an exception and @ is the exception marker.
     */
    exception: boolean;
    /**
     * Body of the rule. It can be a CSS rule, an element hiding rule, a scriptlet rule, etc.
     */
    body: unknown;
}
/**
 * Representation of an element hiding rule.
 *
 * Example rules:
 * - ```adblock
 *   example.com##.ads
 *   ```
 * - ```adblock
 *   example.com#@#.ads
 *   ```
 * - ```adblock
 *   example.com#?#.ads:has(> .something)
 *   ```
 * - ```adblock
 *   example.com#@?#.ads:has(> .something)
 *   ```
 */
interface ElementHidingRule extends CosmeticRule {
    type: CosmeticRuleType.ElementHidingRule;
    body: ElementHidingRuleBody;
}
/**
 * Representation of a CSS injection rule.
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
 */
interface CssInjectionRule extends CosmeticRule {
    type: CosmeticRuleType.CssInjectionRule;
    body: CssInjectionRuleBody;
}
/**
 * Representation of a scriptlet injection rule.
 *
 * Example rules (AdGuard):
 *  - ```adblock
 *    example.com#%#//scriptlet('scriptlet-name', 'arg0', 'arg1')
 *    ```
 *  - ```adblock
 *    example.com#@%#//scriptlet('scriptlet-name', 'arg0', 'arg1')
 *    ```
 *
 * Example rules (uBlock Origin):
 *  - ```adblock
 *    example.com##+js(scriptlet-name, arg0, arg1)
 *    ```
 *  - ```adblock
 *    example.com#@#+js(scriptlet-name, arg0, arg1)
 *    ```
 *
 * Example rules (Adblock Plus):
 *  - ```adblock
 *    example.com#$#scriptlet-name arg0 arg1
 *    ```
 *  - ```adblock
 *    example.com#@$#scriptlet-name arg0 arg1
 *    ```
 *  - ```adblock
 *    example.com#$#scriptlet0 arg00 arg01; scriptlet1 arg10 arg11
 *    ```
 */
interface ScriptletInjectionRule extends CosmeticRule {
    type: CosmeticRuleType.ScriptletInjectionRule;
    body: ScriptletInjectionRuleBody;
}
/**
 * Representation of a HTML filtering rule.
 *
 * Example rules (AdGuard):
 *  - ```adblock
 *    example.com$$script[tag-content="detect"]
 *    ```
 *  - ```adblock
 *    example.com$@$script[tag-content="detect"]
 *    ```
 *
 * Example rules (uBlock Origin):
 *  - ```adblock
 *    example.com##^script:has-text(detect)
 *    ```
 *  - ```adblock
 *    example.com#@#^script:has-text(detect)
 *    ```
 */
interface HtmlFilteringRule extends CosmeticRule {
    type: CosmeticRuleType.HtmlFilteringRule;
    body: HtmlFilteringRuleBody;
}
/**
 * Representation of a JS injection rule.
 *
 * Example rules (AdGuard):
 *  - ```adblock
 *    example.com#%#let a = 2;
 *    ```
 *  - ```adblock
 *    example.com#@%#let a = 2;
 *    ```
 */
interface JsInjectionRule extends CosmeticRule {
    type: CosmeticRuleType.JsInjectionRule;
    body: Value;
}
/**
 * Represents the common properties of network rules
 */
interface NetworkRule extends RuleBase {
    category: RuleCategory.Network;
    type: 'NetworkRule';
    syntax: AdblockSyntax;
    /**
     * If the rule is an exception rule. If the rule begins with `@@`, it means that it is an exception rule.
     *
     * @example
     * The following rule is an exception rule:
     * ```adblock
     * @@||example.org^
     * ```
     * since it begins with `@@`, which is the exception marker.
     *
     * But the following rule is not an exception rule:
     * ```adblock
     * ||example.org^
     * ```
     * since it does not begins with `@@`.
     */
    exception: boolean;
    /**
     * The rule pattern.
     *
     * @example
     * - Let's say we have the following rule:
     *   ```adblock
     *   ||example.org^
     *   ```
     *   then the pattern of this rule is `||example.org^`.
     * - But let's say we have the following rule:
     *   ```adblock
     *   ||example.org^$third-party,script
     *   ```
     *   then the pattern of this rule is also `||example.org^`.
     */
    pattern: Value;
    /**
     * The rule modifiers.
     *
     * @example
     * - Let's say we have the following rule:
     *   ```adblock
     *   ||example.org^$third-party
     *   ```
     *   then the modifiers of this rule are `["third-party"]`.
     */
    modifiers?: ModifierList;
}

/**
 * `RuleParser` is responsible for parsing the rules.
 *
 * It automatically determines the category and syntax of the rule, so you can pass any kind of rule to it.
 */
declare class RuleParser {
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
    static parse(raw: string, tolerant?: boolean, loc?: Location): AnyRule;
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
    static generate(ast: AnyRule): string;
}

/**
 * @file Customized syntax error class for Adblock Filter Parser.
 */

/**
 * Customized syntax error class for Adblock Filter Parser,
 * which contains the location range of the error.
 */
declare class AdblockSyntaxError extends SyntaxError {
    /**
     * Location range of the error.
     */
    loc: LocationRange;
    /**
     * Constructs a new `AdblockSyntaxError` instance.
     *
     * @param message Error message
     * @param loc Location range of the error
     */
    constructor(message: string, loc: LocationRange);
}

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
declare class AgentCommentRuleParser {
    /**
     * Checks if the raw rule is an adblock agent comment.
     *
     * @param raw Raw rule
     * @returns `true` if the rule is an adblock agent, `false` otherwise
     */
    static isAgentRule(raw: string): boolean;
    /**
     * Parses a raw rule as an adblock agent comment.
     *
     * @param raw Raw rule
     * @param loc Base location
     * @returns Agent rule AST or null (if the raw rule cannot be parsed as an adblock agent comment)
     */
    static parse(raw: string, loc?: Location): AgentCommentRule | null;
    /**
     * Converts an adblock agent AST to a string.
     *
     * @param ast Agent rule AST
     * @returns Raw string
     */
    static generate(ast: AgentCommentRule): string;
}

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
declare class AgentParser {
    /**
     * Checks if the string is a valid version.
     *
     * @param str String to check
     * @returns `true` if the string is a valid version, `false` otherwise
     */
    private static isValidVersion;
    /**
     * Parses a raw rule as an adblock agent comment.
     *
     * @param raw Raw rule
     * @param loc Base location
     * @returns Agent rule AST
     * @throws {AdblockSyntaxError} If the raw rule cannot be parsed as an adblock agent
     */
    static parse(raw: string, loc?: Location): Agent;
    /**
     * Converts an adblock agent AST to a string.
     *
     * @param ast Agent AST
     * @returns Raw string
     */
    static generate(ast: Agent): string;
}

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
declare class CommentRuleParser {
    /**
     * Checks whether a rule is a regular comment. Regular comments are the ones that start with
     * an exclamation mark (`!`).
     *
     * @param raw Raw rule
     * @returns `true` if the rule is a regular comment, `false` otherwise
     */
    static isRegularComment(raw: string): boolean;
    /**
     * Checks whether a rule is a comment.
     *
     * @param raw Raw rule
     * @returns `true` if the rule is a comment, `false` otherwise
     */
    static isCommentRule(raw: string): boolean;
    /**
     * Parses a raw rule as comment.
     *
     * @param raw Raw rule
     * @param loc Base location
     * @returns Comment AST or null (if the raw rule cannot be parsed as comment)
     */
    static parse(raw: string, loc?: Location): AnyCommentRule | null;
    /**
     * Converts a comment AST to a string.
     *
     * @param ast Comment AST
     * @returns Raw string
     */
    static generate(ast: AnyCommentRule): string;
}

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
declare class ConfigCommentRuleParser {
    /**
     * Checks if the raw rule is an inline configuration comment rule.
     *
     * @param raw Raw rule
     * @returns `true` if the rule is an inline configuration comment rule, otherwise `false`.
     */
    static isConfigComment(raw: string): boolean;
    /**
     * Parses a raw rule as an inline configuration comment.
     *
     * @param raw Raw rule
     * @param loc Base location
     * @returns
     * Inline configuration comment AST or null (if the raw rule cannot be parsed as configuration comment)
     */
    static parse(raw: string, loc?: Location): ConfigCommentRule | null;
    /**
     * Converts an inline configuration comment AST to a string.
     *
     * @param ast Inline configuration comment AST
     * @returns Raw string
     */
    static generate(ast: ConfigCommentRule): string;
}

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
declare class CosmeticRuleParser {
    /**
     * Determines whether a rule is a cosmetic rule. The rule is considered cosmetic if it
     * contains a cosmetic rule separator.
     *
     * @param raw Raw rule
     * @returns `true` if the rule is a cosmetic rule, `false` otherwise
     */
    static isCosmeticRule(raw: string): boolean;
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
    static parse(raw: string, loc?: Location): AnyCosmeticRule | null;
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
    static generatePattern(ast: AnyCosmeticRule): string;
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
    static generateBody(ast: AnyCosmeticRule): string;
    /**
     * Converts a cosmetic rule AST into a string.
     *
     * @param ast Cosmetic rule AST
     * @returns Raw string
     */
    static generate(ast: AnyCosmeticRule): string;
}

/**
 * `DomainListParser` is responsible for parsing a domain list.
 *
 * @example
 * - If the rule is `example.com,~example.net##.ads`, the domain list is `example.com,~example.net`.
 * - If the rule is `ads.js^$script,domains=example.com|~example.org`, the domain list is `example.com|~example.org`.
 * This parser is responsible for parsing these domain lists.
 * @see {@link https://help.eyeo.com/adblockplus/how-to-write-filters#elemhide_domains}
 */
declare class DomainListParser {
    /**
     * Parses a domain list, eg. `example.com,example.org,~example.org`
     *
     * @param raw Raw domain list
     * @param separator Separator character
     * @param loc Location of the domain list
     * @returns Domain list AST
     * @throws If the domain list is syntactically invalid
     */
    static parse(raw: string, separator?: DomainListSeparator, loc?: Location): DomainList;
    /**
     * Converts a domain list AST to a string.
     *
     * @param ast Domain list AST
     * @returns Raw string
     */
    static generate(ast: DomainList): string;
}

/**
 * `FilterListParser` is responsible for parsing a whole adblock filter list (list of rules).
 * It is a wrapper around `RuleParser` which parses each line separately.
 */
declare class FilterListParser {
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
    static parse(raw: string, tolerant?: boolean): FilterList;
    /**
     * Serializes a whole adblock filter list (list of rules).
     *
     * @param ast AST to generate
     * @param preferRaw If `true`, then the parser will use `raws.text` property of each rule
     * if it is available. Default is `false`.
     * @returns Serialized filter list
     */
    static generate(ast: FilterList, preferRaw?: boolean): string;
}

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
declare class HintCommentRuleParser {
    /**
     * Checks if the raw rule is a hint rule.
     *
     * @param raw Raw rule
     * @returns `true` if the rule is a hint rule, `false` otherwise
     */
    static isHintRule(raw: string): boolean;
    /**
     * Parses a raw rule as a hint comment.
     *
     * @param raw Raw rule
     * @param loc Base location
     * @returns Hint AST or null (if the raw rule cannot be parsed as a hint comment)
     * @throws If the input matches the HINT pattern but syntactically invalid
     * @see {@link https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#hints-1}
     */
    static parse(raw: string, loc?: Location): HintCommentRule | null;
    /**
     * Converts a hint rule AST to a raw string.
     *
     * @param ast Hint rule AST
     * @returns Raw string
     */
    static generate(ast: HintCommentRule): string;
}

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
declare class HintParser {
    /**
     * Parses a raw rule as a hint.
     *
     * @param raw Raw rule
     * @param loc Base location
     * @returns Hint rule AST or null
     * @throws If the syntax is invalid
     */
    static parse(raw: string, loc?: Location): Hint;
    /**
     * Converts a single hint AST to a string.
     *
     * @param hint Hint AST
     * @returns Hint string
     */
    static generate(hint: Hint): string;
}

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
declare class LogicalExpressionParser {
    /**
     * Split the expression into tokens.
     *
     * @param raw Source code of the expression
     * @param loc Location of the expression
     * @returns Token list
     * @throws {AdblockSyntaxError} If the expression is invalid
     */
    private static tokenize;
    /**
     * Parses a logical expression.
     *
     * @param raw Source code of the expression
     * @param loc Location of the expression
     * @returns Parsed expression
     * @throws {AdblockSyntaxError} If the expression is invalid
     */
    static parse(raw: string, loc?: Location): AnyExpressionNode;
    /**
     * Generates a string representation of the logical expression (serialization).
     *
     * @param ast Expression node
     * @returns String representation of the logical expression
     */
    static generate(ast: AnyExpressionNode): string;
}

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
declare class MetadataCommentRuleParser {
    /**
     * Parses a raw rule as a metadata comment.
     *
     * @param raw Raw rule
     * @param loc Base location
     * @returns Metadata comment AST or null (if the raw rule cannot be parsed as a metadata comment)
     */
    static parse(raw: string, loc?: Location): MetadataCommentRule | null;
    /**
     * Converts a metadata comment AST to a string.
     *
     * @param ast - Metadata comment AST
     * @returns Raw string
     */
    static generate(ast: MetadataCommentRule): string;
}

/**
 * `ModifierListParser` is responsible for parsing modifier lists. Please note that the name is not
 * uniform, "modifiers" are also known as "options".
 *
 * @see {@link https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#basic-rules-modifiers}
 * @see {@link https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#non-basic-rules-modifiers}
 * @see {@link https://help.eyeo.com/adblockplus/how-to-write-filters#options}
 */
declare class ModifierListParser {
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
    static parse(raw: string, loc?: Location): ModifierList;
    /**
     * Converts a modifier list AST to a string.
     *
     * @param ast Modifier list AST
     * @returns Raw string
     */
    static generate(ast: ModifierList): string;
}

/**
 * `ModifierParser` is responsible for parsing modifiers.
 *
 * @example
 * `match-case`, `~third-party`, `domain=example.com|~example.org`
 */
declare class ModifierParser {
    /**
     * Parses a modifier.
     *
     * @param raw Raw modifier string
     * @param loc Location of the modifier
     *
     * @returns Parsed modifier
     * @throws An error if modifier name or value is empty.
     */
    static parse(raw: string, loc?: Location): Modifier;
    /**
     * Generates a string from a modifier (serializes it).
     *
     * @param modifier Modifier to generate string from
     * @returns String representation of the modifier
     */
    static generate(modifier: Modifier): string;
}

/**
 * `NetworkRuleParser` is responsible for parsing network rules.
 *
 * Please note that this will parse all syntactically correct network rules.
 * Modifier compatibility is not checked at the parser level.
 *
 * @see {@link https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#basic-rules}
 * @see {@link https://help.eyeo.com/adblockplus/how-to-write-filters#basic}
 */
declare class NetworkRuleParser {
    /**
     * Parses a network rule (also known as basic rule).
     *
     * @param raw Raw rule
     * @param loc Location of the rule
     * @returns Network rule AST
     */
    static parse(raw: string, loc?: Location): NetworkRule;
    /**
     * Finds the index of the separator character in a network rule.
     *
     * @param rule Network rule to check
     * @returns The index of the separator character, or -1 if there is no separator
     */
    private static findNetworkRuleSeparatorIndex;
    /**
     * Converts a network rule (basic rule) AST to a string.
     *
     * @param ast - Network rule AST
     * @returns Raw string
     */
    static generate(ast: NetworkRule): string;
}

declare class ParameterListParser {
    /**
     * Parses a raw parameter list.
     *
     * @param raw Raw parameter list
     * @param separator Separator character (default: comma)
     * @param loc Base location
     * @returns Parameter list AST
     */
    static parse(raw: string, separator?: string, loc?: Location): ParameterList;
    /**
     * Converts a parameter list AST to a string.
     *
     * @param params Parameter list AST
     * @param separator Separator character (default: comma)
     * @returns String representation of the parameter list
     */
    static generate(params: ParameterList, separator?: string): string;
}

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
declare class PreProcessorCommentRuleParser {
    /**
     * Determines whether the rule is a pre-processor rule.
     *
     * @param raw Raw rule
     * @returns `true` if the rule is a pre-processor rule, `false` otherwise
     */
    static isPreProcessorRule(raw: string): boolean;
    /**
     * Parses a raw rule as a pre-processor comment.
     *
     * @param raw Raw rule
     * @param loc Base location
     * @returns
     * Pre-processor comment AST or null (if the raw rule cannot be parsed as a pre-processor comment)
     */
    static parse(raw: string, loc?: Location): PreProcessorCommentRule | null;
    /**
     * Converts a pre-processor comment AST to a string.
     *
     * @param ast - Pre-processor comment AST
     * @returns Raw string
     */
    static generate(ast: PreProcessorCommentRule): string;
}

/**
 * @file Validator for modifiers.
 */

/**
 * Modifier validator class.
 */
declare class ModifierValidator {
    /**
     * Map of all modifiers data parsed from yaml files.
     */
    private modifiersData;
    /**
     * List of all currently supported modifier names for any adblocker.
     * Deprecated modifiers are not included.
     */
    private supportedModifierNames;
    constructor();
    /**
     * Simply checks whether the modifier exists in any adblocker.
     *
     * @param rawModifier Modifier as string OR already parsed modifier AST node.
     *
     * @returns True if modifier exists, false otherwise.
     * If given modifier is a string and it cannot be parsed as a valid modifier,
     * e.g. 'domain=', false is returned.
     */
    exists: (rawModifier: string | Modifier) => boolean;
}

/**
 * @file Base class for rule converters
 */

/**
 * Basic class for rule converters
 */
declare class RuleConverter {
    /**
     * Convert rule to AdGuard format
     *
     * @param rule Rule to convert, can be a string or an AST
     * @returns Array of converted rules ASTs
     * @throws If the rule is invalid or incompatible
     */
    static convertToAdg(rule: string | AnyRule): AnyRule[];
    /**
     * Convert rule to Adblock Plus format
     *
     * @param rule Rule to convert, can be a string or an AST
     * @returns Array of converted rules ASTs
     * @throws If the rule is invalid or incompatible
     * @todo Currently not implemented in the library and temporary optional
     */
    static convertToAbp(rule: string | AnyRule): AnyRule[];
    /**
     * Convert rule to uBlock Origin format
     *
     * @param rule Rule to convert, can be a string or an AST
     * @returns Array of converted rules ASTs
     * @throws If the rule is invalid or incompatible
     * @todo Currently not implemented in the library and temporary optional
     */
    static convertToUbo(rule: string | AnyRule): AnyRule[];
}

/**
 * @file HTML rule converter
 */

/**
 * HTML rule converter
 */
declare class HtmlRuleConverter extends RuleConverter {
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
    static convertToAdg(rule: string | HtmlFilteringRule): HtmlFilteringRule[];
}

/**
 * @file Cosmetic rule separator finder and categorizer
 */

interface CosmeticRuleSeparatorFinderResult {
    /**
     * Separator type
     */
    separator: CosmeticRuleSeparator;
    /**
     * Separator start position
     */
    start: number;
    /**
     * Separator end position
     */
    end: number;
}
/**
 * Utility class for cosmetic rule separators.
 */
declare class CosmeticRuleSeparatorUtils {
    /**
     * Checks whether the specified separator is an exception.
     *
     * @param separator Separator to check
     * @returns `true` if the separator is an exception, `false` otherwise
     */
    static isException(separator: CosmeticRuleSeparator): boolean;
    /**
     * Checks whether the specified separator is marks an Extended CSS cosmetic rule.
     *
     * @param separator Separator to check
     * @returns `true` if the separator is marks an Extended CSS cosmetic rule, `false` otherwise
     */
    static isExtendedCssMarker(separator: CosmeticRuleSeparator): boolean;
    /**
     * Looks for the cosmetic rule separator in the rule. This is a simplified version that
     * masks the recursive function.
     *
     * @param rule Raw rule
     * @returns Separator result or null if no separator was found
     */
    static find(rule: string): CosmeticRuleSeparatorFinderResult | null;
}

/**
 * @file Helper file for CSSTree to provide better compatibility with TypeScript.
 * @see {@link https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/62536}
 */
/**
 * CSSTree node types.
 *
 * @see {@link https://github.com/csstree/csstree/blob/master/docs/ast.md#node-types}
 */
declare enum CssTreeNodeType {
    AnPlusB = "AnPlusB",
    Atrule = "Atrule",
    AtrulePrelude = "AtrulePrelude",
    AttributeSelector = "AttributeSelector",
    Block = "Block",
    Brackets = "Brackets",
    CDC = "CDC",
    CDO = "CDO",
    ClassSelector = "ClassSelector",
    Combinator = "Combinator",
    Comment = "Comment",
    Declaration = "Declaration",
    DeclarationList = "DeclarationList",
    Dimension = "Dimension",
    Function = "Function",
    Hash = "Hash",
    Identifier = "Identifier",
    IdSelector = "IdSelector",
    MediaFeature = "MediaFeature",
    MediaQuery = "MediaQuery",
    MediaQueryList = "MediaQueryList",
    NestingSelector = "NestingSelector",
    Nth = "Nth",
    Number = "Number",
    Operator = "Operator",
    Parentheses = "Parentheses",
    Percentage = "Percentage",
    PseudoClassSelector = "PseudoClassSelector",
    PseudoElementSelector = "PseudoElementSelector",
    Ratio = "Ratio",
    Raw = "Raw",
    Rule = "Rule",
    Selector = "Selector",
    SelectorList = "SelectorList",
    String = "String",
    StyleSheet = "StyleSheet",
    TypeSelector = "TypeSelector",
    UnicodeRange = "UnicodeRange",
    Url = "Url",
    Value = "Value",
    WhiteSpace = "WhiteSpace"
}
/**
 * Parser context for CSSTree.
 *
 * @see {@link https://github.com/csstree/csstree/blob/master/docs/parsing.md#context}
 */
declare enum CssTreeParserContext {
    /**
     * Regular stylesheet, should be suitable in most cases (default)
     */
    stylesheet = "stylesheet",
    /**
     * at-rule (e.g. `@media screen`, `print { ... }`)
     */
    atrule = "atrule",
    /**
     * at-rule prelude (screen, print for example above)
     */
    atrulePrelude = "atrulePrelude",
    /**
     * used to parse comma separated media query list
     */
    mediaQueryList = "mediaQueryList",
    /**
     * used to parse media query
     */
    mediaQuery = "mediaQuery",
    /**
     * rule (e.g. `.foo`, `.bar:hover { color: red; border: 1px solid black; }`)
     */
    rule = "rule",
    /**
     * selector group (`.foo`, `.bar:hover` for rule example)
     */
    selectorList = "selectorList",
    /**
     * selector (`.foo` or `.bar:hover` for rule example)
     */
    selector = "selector",
    /**
     * block with curly braces ({ color: red; border: 1px solid black; } for rule example)
     */
    block = "block",
    /**
     * block content w/o curly braces (`color: red; border: 1px solid black;` for rule example),
     * useful for parsing HTML style attribute value
     */
    declarationList = "declarationList",
    /**
     * declaration (`color: red` or `border: 1px solid black` for rule example)
     */
    declaration = "declaration",
    /**
     * declaration value (`red` or `1px solid black` for rule example)
     */
    value = "value"
}

/**
 * Additional / helper functions for CSSTree.
 */
declare class CssTree {
    /**
     * Shifts location of the CSSTree node. Temporary workaround for CSSTree issue:
     * https://github.com/csstree/csstree/issues/251
     *
     * @param root Root CSSTree node
     * @param loc Location to shift
     * @returns Root CSSTree node with shifted location
     */
    static shiftNodePosition(root: CssNode, loc?: Location): CssNode;
    /**
     * Helper function for parsing CSS parts.
     *
     * @param raw Raw CSS input
     * @param context CSSTree context for parsing
     * @param tolerant If `true`, then the parser will not throw an error on parsing fallbacks. Default is `false`
     * @param loc Base location for the parsed node
     * @returns CSSTree node (AST)
     */
    static parse(raw: string, context: CssTreeParserContext, tolerant?: boolean, loc?: Location): CssNode;
    /**
     * Helper function for parsing CSS parts.
     *
     * @param raw Raw CSS input
     * @param context CSSTree context
     * @param tolerant If `true`, then the parser will not throw an error on parsing fallbacks. Default is `false`
     * @param loc Base location for the parsed node
     * @returns CSSTree node (AST)
     */
    static parsePlain(raw: string, context: CssTreeParserContext, tolerant?: boolean, loc?: Location): CssNodePlain;
    /**
     * Checks if the CSSTree node is an ExtendedCSS node.
     *
     * @param node Node to check
     * @param pseudoClasses List of the names of the pseudo classes to check
     * @param attributeSelectors List of the names of the attribute selectors to check
     * @returns `true` if the node is an ExtendedCSS node, otherwise `false`
     */
    static isExtendedCssNode(node: CssNode | CssNodePlain, pseudoClasses: Set<string>, attributeSelectors: Set<string>): boolean;
    /**
     * Walks through the CSSTree node and returns all ExtendedCSS nodes.
     *
     * @param selectorList Selector list (can be a string or a CSSTree node)
     * @param pseudoClasses List of the names of the pseudo classes to check
     * @param attributeSelectors List of the names of the attribute selectors to check
     * @returns Extended CSS nodes (pseudos and attributes)
     * @see {@link https://github.com/csstree/csstree/blob/master/docs/ast.md#selectorlist}
     */
    static getSelectorExtendedCssNodes(selectorList: string | SelectorList | SelectorListPlain, pseudoClasses?: Set<string>, attributeSelectors?: Set<string>): CssNode[];
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
    static hasAnySelectorExtendedCssNode(selectorList: string | SelectorList | SelectorListPlain, pseudoClasses?: Set<string>, attributeSelectors?: Set<string>): boolean;
    /**
     * Checks if the node is a forbidden function (unsafe resource loading). Typically it is used to check
     * if the node is a `url()` function, which is a security risk when using filter lists from untrusted
     * sources.
     *
     * @param node Node to check
     * @param forbiddenFunctions Set of the names of the functions to check
     * @returns `true` if the node is a forbidden function
     */
    static isForbiddenFunction(node: CssNode | CssNodePlain, forbiddenFunctions?: Set<string>): boolean;
    /**
     * Gets the list of the forbidden function nodes in the declaration block. Typically it is used to get
     * the list of the functions that can be used to load external resources, which is a security risk
     * when using filter lists from untrusted sources.
     *
     * @param declarationList Declaration list to check (can be a string or a CSSTree node)
     * @param forbiddenFunctions Set of the names of the functions to check
     * @returns List of the forbidden function nodes in the declaration block (can be empty)
     */
    static getForbiddenFunctionNodes(declarationList: string | DeclarationList | DeclarationListPlain, forbiddenFunctions?: Set<string>): CssNode[];
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
    static hasAnyForbiddenFunction(declarationList: string | DeclarationList | DeclarationListPlain, forbiddenFunctions?: Set<string>): boolean;
    /**
     * Generates string representation of the media query list.
     *
     * @param ast Media query list AST
     * @returns String representation of the media query list
     */
    static generateMediaQueryList(ast: MediaQueryList): string;
    /**
     * Generates string representation of the media query.
     *
     * @param ast Media query AST
     * @returns String representation of the media query
     */
    static generateMediaQuery(ast: MediaQuery): string;
    /**
     * Generates string representation of the selector list.
     *
     * @param ast SelectorList AST
     * @returns String representation of the selector list
     */
    static generateSelectorList(ast: SelectorList): string;
    /**
     * Selector generation based on CSSTree's AST. This is necessary because CSSTree
     * only adds spaces in some edge cases.
     *
     * @param ast CSS Tree AST
     * @returns CSS selector as string
     */
    static generateSelector(ast: Selector): string;
    /**
     * Block generation based on CSSTree's AST. This is necessary because CSSTree only adds spaces in some edge cases.
     *
     * @param ast CSS Tree AST
     * @returns CSS selector as string
     */
    static generateDeclarationList(ast: DeclarationList): string;
    /**
     * Helper method to assert that the attribute selector has a value
     *
     * @param node Attribute selector node
     */
    static assertAttributeSelectorHasStringValue(node: AttributeSelector): asserts node is AttributeSelector & {
        value: {
            type: 'String';
        };
    };
    /**
     * Helper method to assert that the pseudo-class selector has at least one argument
     *
     * @param node Pseudo-class selector node
     */
    static assertPseudoClassHasAnyArgument(node: PseudoClassSelectorPlain): asserts node is PseudoClassSelectorPlain & {
        children: CssNodePlain[];
    };
    /**
     * Helper method to parse an attribute selector value as a number
     *
     * @param node Attribute selector node
     * @returns Parsed attribute selector value as a number
     * @throws If the attribute selector hasn't a string value or the string value is can't be parsed as a number
     */
    static parseAttributeSelectorValueAsNumber(node: AttributeSelector): number;
    /**
     * Helper method to parse a pseudo-class argument as a number
     *
     * @param node Pseudo-class selector node to parse
     * @returns Parsed pseudo-class argument as a number
     */
    static parsePseudoClassArgumentAsNumber(node: PseudoClassSelectorPlain): number;
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
    static createAttributeSelectorNode(name: string, value: string, matcher?: string, flags?: string | null): AttributeSelector;
}

/**
 * @file Utility functions for domain and hostname validation.
 */
declare class DomainUtils {
    /**
     * Check if the input is a valid domain or hostname.
     *
     * @param domain Domain to check
     * @returns `true` if the domain is valid, `false` otherwise
     */
    static isValidDomainOrHostname(domain: string): boolean;
}

/**
 * @file Utility functions for logical expression AST.
 */

/**
 * Variable table. Key is variable name, value is boolean.
 */
type VariableTable = {
    [key: string]: boolean;
};
/**
 * Utility functions for logical expression AST.
 */
declare class LogicalExpressionUtils {
    /**
     * Get all variables in the expression.
     *
     * @param ast Logical expression AST
     * @returns List of variables in the expression (nodes)
     * @example
     * If the expression is `a && b || c`, the returned list will be
     * nodes for `a`, `b`, and `c`.
     */
    static getVariables(ast: AnyExpressionNode): ExpressionVariableNode[];
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
    static evaluate(ast: AnyExpressionNode, table: VariableTable): boolean;
}

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
declare function shiftLoc(loc: Location, offset: number): Location;
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
declare function locRange(loc: Location, startOffset: number, endOffset: number): LocationRange;

/**
 * Known metadata headers
 */
declare const METADATA_HEADERS: string[];

/**
 * @file Known CSS elements and attributes.
 * TODO: Implement a compatibility table for Extended CSS
 */
/**
 * Known Extended CSS pseudo-classes. Please, keep this list sorted.
 */
declare const EXT_CSS_PSEUDO_CLASSES: Set<string>;
/**
 * Known legacy Extended CSS attributes. These attributes are deprecated and
 * should be replaced with the corresponding pseudo-classes. In a long term,
 * these attributes will be COMPLETELY removed from the Extended CSS syntax.
 *
 * Please, keep this list sorted.
 */
declare const EXT_CSS_LEGACY_ATTRIBUTES: Set<string>;
/**
 * Known CSS functions that aren't allowed in CSS injection rules, because they
 * able to load external resources. Please, keep this list sorted.
 */
declare const FORBIDDEN_CSS_FUNCTIONS: Set<string>;

/**
 * @file AGTree version
 */
declare const version: string;

export { ADG_SCRIPTLET_MASK, AGLINT_COMMAND_PREFIX, AdblockSyntax, AdblockSyntaxError, Agent, AgentCommentRule, AgentCommentRuleParser, AgentParser, AnyCommentRule, AnyCosmeticRule, AnyExpressionNode, AnyOperator, AnyRule, CLASSIC_DOMAIN_SEPARATOR, CommentBase, CommentMarker, CommentRule, CommentRuleParser, CommentRuleType, ConfigCommentRule, ConfigCommentRuleParser, CosmeticRule, CosmeticRuleParser, CosmeticRuleSeparator, CosmeticRuleSeparatorFinderResult, CosmeticRuleSeparatorUtils, CosmeticRuleType, CssInjectionRule, CssInjectionRuleBody, CssTree, CssTreeNodeType, CssTreeParserContext, DOMAIN_EXCEPTION_MARKER, Domain, DomainList, DomainListParser, DomainListSeparator, DomainUtils, EXT_CSS_LEGACY_ATTRIBUTES, EXT_CSS_PSEUDO_CLASSES, ElementHidingRule, ElementHidingRuleBody, EmptyRule, ExpressionOperatorNode, ExpressionParenthesisNode, ExpressionVariableNode, FORBIDDEN_CSS_FUNCTIONS, FilterList, FilterListParser, HINT_MARKER, Hint, HintCommentRule, HintCommentRuleParser, HintParser, HtmlFilteringRule, HtmlFilteringRuleBody, HtmlRuleConverter, IF, INCLUDE, JsInjectionRule, Location, LocationRange, LogicalExpressionParser, LogicalExpressionUtils, METADATA_HEADERS, MODIFIERS_SEPARATOR, MODIFIER_ASSIGN_OPERATOR, MODIFIER_DOMAIN_SEPARATOR, MODIFIER_EXCEPTION_MARKER, MetadataCommentRule, MetadataCommentRuleParser, Modifier, ModifierList, ModifierListParser, ModifierParser, ModifierValidator, NETWORK_RULE_EXCEPTION_MARKER, NETWORK_RULE_SEPARATOR, NetworkRule, NetworkRuleParser, Node, PREPROCESSOR_MARKER, Parameter, ParameterList, ParameterListParser, PreProcessorCommentRule, PreProcessorCommentRuleParser, RuleBase, RuleCategory, RuleParser, SAFARI_CB_AFFINITY, ScriptletInjectionRule, ScriptletInjectionRuleBody, UBO_SCRIPTLET_MASK, Value, VariableTable, locRange, shiftLoc, version };
