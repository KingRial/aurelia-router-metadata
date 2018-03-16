"use strict";
// tslint:disable
Object.defineProperty(exports, "__esModule", { value: true });
/* DO NOT edit this file unless you know what you are doing.
 * A little change here can  *blow up* the entire parser!
 */
var Token;
(function (Token) {
    Token[Token["Type"] = 255] = "Type";
    /* Precedence for binary operators (always positive) */
    Token[Token["PrecStart"] = 8] = "PrecStart";
    Token[Token["Precedence"] = 3840] = "Precedence";
    /* Attribute names */
    Token[Token["Keyword"] = 4096] = "Keyword";
    Token[Token["Reserved"] = 12288] = "Reserved";
    Token[Token["FutureReserved"] = 20480] = "FutureReserved";
    Token[Token["Contextual"] = 69632] = "Contextual";
    Token[Token["IsExpressionStart"] = 131072] = "IsExpressionStart";
    Token[Token["IsAssignOp"] = 262144] = "IsAssignOp";
    Token[Token["IsBinaryOp"] = 655360] = "IsBinaryOp";
    Token[Token["IsUnaryOp"] = 1179648] = "IsUnaryOp";
    Token[Token["IsUpdateOp"] = 2228224] = "IsUpdateOp";
    Token[Token["IsLogical"] = 4194304] = "IsLogical";
    Token[Token["IsEvalArguments"] = 8388608] = "IsEvalArguments";
    Token[Token["IsIdentifier"] = 16777216] = "IsIdentifier";
    Token[Token["IsAsync"] = 33554432] = "IsAsync";
    Token[Token["IsGenerator"] = 67108864] = "IsGenerator";
    Token[Token["IsAwait"] = 134217728] = "IsAwait";
    Token[Token["IsYield"] = 268435456] = "IsYield";
    Token[Token["IsBindingPattern"] = 536870912] = "IsBindingPattern";
    Token[Token["IsShorthand"] = 1073741824] = "IsShorthand";
    /* Node types */
    Token[Token["EndOfSource"] = 0] = "EndOfSource";
    /* Constants/Bindings */
    Token[Token["Identifier"] = 16908289] = "Identifier";
    Token[Token["NumericLiteral"] = 131074] = "NumericLiteral";
    Token[Token["StringLiteral"] = 131075] = "StringLiteral";
    Token[Token["RegularExpression"] = 131076] = "RegularExpression";
    Token[Token["FalseKeyword"] = 143365] = "FalseKeyword";
    Token[Token["TrueKeyword"] = 143366] = "TrueKeyword";
    Token[Token["NullKeyword"] = 143367] = "NullKeyword";
    /* Template nodes */
    Token[Token["TemplateCont"] = 131080] = "TemplateCont";
    Token[Token["TemplateTail"] = 131081] = "TemplateTail";
    /* Punctuators */
    Token[Token["Arrow"] = 10] = "Arrow";
    Token[Token["LeftParen"] = 1073872907] = "LeftParen";
    Token[Token["LeftBrace"] = 537001996] = "LeftBrace";
    Token[Token["Period"] = 13] = "Period";
    Token[Token["Ellipsis"] = 14] = "Ellipsis";
    Token[Token["RightBrace"] = 1073741839] = "RightBrace";
    Token[Token["RightParen"] = 16] = "RightParen";
    Token[Token["Semicolon"] = 17] = "Semicolon";
    Token[Token["Comma"] = 1073741842] = "Comma";
    Token[Token["LeftBracket"] = 537002003] = "LeftBracket";
    Token[Token["RightBracket"] = 20] = "RightBracket";
    Token[Token["Colon"] = 1073741845] = "Colon";
    Token[Token["QuestionMark"] = 22] = "QuestionMark";
    Token[Token["SingleQuote"] = 23] = "SingleQuote";
    Token[Token["DoubleQuote"] = 24] = "DoubleQuote";
    Token[Token["JSXClose"] = 25] = "JSXClose";
    Token[Token["JSXAutoClose"] = 26] = "JSXAutoClose";
    /* Update operators */
    Token[Token["Increment"] = 2228251] = "Increment";
    Token[Token["Decrement"] = 2228252] = "Decrement";
    /* Assign operators */
    Token[Token["Assign"] = 1074003997] = "Assign";
    Token[Token["ShiftLeftAssign"] = 262174] = "ShiftLeftAssign";
    Token[Token["ShiftRightAssign"] = 262175] = "ShiftRightAssign";
    Token[Token["LogicalShiftRightAssign"] = 262176] = "LogicalShiftRightAssign";
    Token[Token["ExponentiateAssign"] = 262177] = "ExponentiateAssign";
    Token[Token["AddAssign"] = 262178] = "AddAssign";
    Token[Token["SubtractAssign"] = 262179] = "SubtractAssign";
    Token[Token["MultiplyAssign"] = 262180] = "MultiplyAssign";
    Token[Token["DivideAssign"] = 393253] = "DivideAssign";
    Token[Token["ModuloAssign"] = 262182] = "ModuloAssign";
    Token[Token["BitwiseXorAssign"] = 262183] = "BitwiseXorAssign";
    Token[Token["BitwiseOrAssign"] = 262184] = "BitwiseOrAssign";
    Token[Token["BitwiseAndAssign"] = 262185] = "BitwiseAndAssign";
    /* Unary/binary operators */
    Token[Token["TypeofKeyword"] = 1191978] = "TypeofKeyword";
    Token[Token["DeleteKeyword"] = 1191979] = "DeleteKeyword";
    Token[Token["VoidKeyword"] = 1191980] = "VoidKeyword";
    Token[Token["Negate"] = 1179693] = "Negate";
    Token[Token["Complement"] = 1179694] = "Complement";
    Token[Token["Add"] = 1706287] = "Add";
    Token[Token["Subtract"] = 1706288] = "Subtract";
    Token[Token["InKeyword"] = 669489] = "InKeyword";
    Token[Token["InstanceofKeyword"] = 669490] = "InstanceofKeyword";
    Token[Token["Multiply"] = 67766835] = "Multiply";
    Token[Token["Modulo"] = 657972] = "Modulo";
    Token[Token["Divide"] = 657973] = "Divide";
    Token[Token["Exponentiate"] = 658230] = "Exponentiate";
    Token[Token["LogicalAnd"] = 4850231] = "LogicalAnd";
    Token[Token["LogicalOr"] = 4849976] = "LogicalOr";
    Token[Token["StrictEqual"] = 656953] = "StrictEqual";
    Token[Token["StrictNotEqual"] = 656954] = "StrictNotEqual";
    Token[Token["LooseEqual"] = 656955] = "LooseEqual";
    Token[Token["LooseNotEqual"] = 656956] = "LooseNotEqual";
    Token[Token["LessThanOrEqual"] = 657213] = "LessThanOrEqual";
    Token[Token["GreaterThanOrEqual"] = 657214] = "GreaterThanOrEqual";
    Token[Token["LessThan"] = 657215] = "LessThan";
    Token[Token["GreaterThan"] = 657216] = "GreaterThan";
    Token[Token["ShiftLeft"] = 657473] = "ShiftLeft";
    Token[Token["ShiftRight"] = 657474] = "ShiftRight";
    Token[Token["LogicalShiftRight"] = 657475] = "LogicalShiftRight";
    Token[Token["BitwiseAnd"] = 656708] = "BitwiseAnd";
    Token[Token["BitwiseOr"] = 656197] = "BitwiseOr";
    Token[Token["BitwiseXor"] = 656454] = "BitwiseXor";
    /* Variable declaration kinds */
    Token[Token["VarKeyword"] = 143431] = "VarKeyword";
    Token[Token["LetKeyword"] = 151624] = "LetKeyword";
    Token[Token["ConstKeyword"] = 143433] = "ConstKeyword";
    /* Other reserved words */
    Token[Token["BreakKeyword"] = 12362] = "BreakKeyword";
    Token[Token["CaseKeyword"] = 12363] = "CaseKeyword";
    Token[Token["CatchKeyword"] = 12364] = "CatchKeyword";
    Token[Token["ClassKeyword"] = 143437] = "ClassKeyword";
    Token[Token["ContinueKeyword"] = 12366] = "ContinueKeyword";
    Token[Token["DebuggerKeyword"] = 12367] = "DebuggerKeyword";
    Token[Token["DefaultKeyword"] = 12368] = "DefaultKeyword";
    Token[Token["DoKeyword"] = 12369] = "DoKeyword";
    Token[Token["ElseKeyword"] = 12370] = "ElseKeyword";
    Token[Token["ExportKeyword"] = 12371] = "ExportKeyword";
    Token[Token["EnumKeyword"] = 12372] = "EnumKeyword";
    Token[Token["ExtendsKeyword"] = 12373] = "ExtendsKeyword";
    Token[Token["FinallyKeyword"] = 12374] = "FinallyKeyword";
    Token[Token["ForKeyword"] = 12375] = "ForKeyword";
    Token[Token["FunctionKeyword"] = 143448] = "FunctionKeyword";
    Token[Token["IfKeyword"] = 12377] = "IfKeyword";
    Token[Token["ImportKeyword"] = 143450] = "ImportKeyword";
    Token[Token["NewKeyword"] = 143451] = "NewKeyword";
    Token[Token["ReturnKeyword"] = 12380] = "ReturnKeyword";
    Token[Token["SuperKeyword"] = 143453] = "SuperKeyword";
    Token[Token["SwitchKeyword"] = 143454] = "SwitchKeyword";
    Token[Token["ThisKeyword"] = 12383] = "ThisKeyword";
    Token[Token["ThrowKeyword"] = 12384] = "ThrowKeyword";
    Token[Token["TryKeyword"] = 12385] = "TryKeyword";
    Token[Token["WhileKeyword"] = 12386] = "WhileKeyword";
    Token[Token["WithKeyword"] = 12387] = "WithKeyword";
    /* Strict mode reserved words */
    Token[Token["ImplementsKeyword"] = 20580] = "ImplementsKeyword";
    Token[Token["InterfaceKeyword"] = 20581] = "InterfaceKeyword";
    Token[Token["PackageKeyword"] = 20582] = "PackageKeyword";
    Token[Token["PrivateKeyword"] = 20583] = "PrivateKeyword";
    Token[Token["ProtectedKeyword"] = 20584] = "ProtectedKeyword";
    Token[Token["PublicKeyword"] = 20585] = "PublicKeyword";
    Token[Token["StaticKeyword"] = 20586] = "StaticKeyword";
    Token[Token["YieldKeyword"] = 268587115] = "YieldKeyword";
    /* Contextual keywords */
    Token[Token["AsKeyword"] = 69740] = "AsKeyword";
    Token[Token["AsyncKeyword"] = 33624173] = "AsyncKeyword";
    Token[Token["AwaitKeyword"] = 134418542] = "AwaitKeyword";
    Token[Token["ConstructorKeyword"] = 69743] = "ConstructorKeyword";
    Token[Token["GetKeyword"] = 69744] = "GetKeyword";
    Token[Token["SetKeyword"] = 69745] = "SetKeyword";
    Token[Token["FromKeyword"] = 69746] = "FromKeyword";
    Token[Token["OfKeyword"] = 69747] = "OfKeyword";
    /* V8 */
    Token[Token["Arguments"] = 25297012] = "Arguments";
    Token[Token["Eval"] = 25297013] = "Eval";
    /* State 3 proposals */
    Token[Token["Hash"] = 118] = "Hash";
    Token[Token["At"] = 119] = "At";
    Token[Token["BigInt"] = 120] = "BigInt";
    /* Flow / TypeScript */
    Token[Token["DeclareKeyword"] = 16777337] = "DeclareKeyword";
    Token[Token["TypeKeyword"] = 16777338] = "TypeKeyword";
    Token[Token["OpaqueKeyword"] = 16777339] = "OpaqueKeyword";
    Token[Token["LeftBraceBar"] = 1148] = "LeftBraceBar";
    Token[Token["RightBraceBar"] = 1149] = "RightBraceBar";
    Token[Token["MixinsKeyword"] = 16777342] = "MixinsKeyword";
    Token[Token["ChecksKeyword"] = 16777343] = "ChecksKeyword";
    Token[Token["ModuleKeyword"] = 16777344] = "ModuleKeyword";
    Token[Token["ExportsKeyword"] = 16777345] = "ExportsKeyword";
    /* TypeScript */
    Token[Token["KeyOfKeyword"] = 16777345] = "KeyOfKeyword";
    Token[Token["IsKeyword"] = 16777346] = "IsKeyword";
    Token[Token["ReadOnlyKeyword"] = 16777347] = "ReadOnlyKeyword";
    /* JSX */
    Token[Token["JSXText"] = 132] = "JSXText";
})(Token = exports.Token || (exports.Token = {}));
// Note: this *must* be kept in sync with the enum's order.
//
// It exploits the enum value ordering, and it's necessarily a complete and
// utter hack.
//
// All to lower it to a single monomorphic array access.
const KeywordDescTable = [
    'end of source',
    /* Constants/Bindings */
    'identifier', 'number', 'string', 'regular expression',
    'false', 'true', 'null',
    /* Template nodes */
    'template continuation', 'template end',
    /* Punctuators */
    '=>', '(', '{', '.', '...', '}', ')', ';', ',', '[', ']', ':', '?', '\'', '"', '</', '/>',
    /* Update operators */
    '++', '--',
    /* Assign operators */
    '=', '<<=', '>>=', '>>>=', '**=', '+=', '-=', '*=', '/=', '%=', '^=', '|=',
    '&=',
    /* Unary/binary operators */
    'typeof', 'delete', 'void', '!', '~', '+', '-', 'in', 'instanceof', '*', '%', '/', '**', '&&',
    '||', '===', '!==', '==', '!=', '<=', '>=', '<', '>', '<<', '>>', '>>>', '&', '|', '^',
    /* Variable declaration kinds */
    'var', 'let', 'const',
    /* Other reserved words */
    'break', 'case', 'catch', 'class', 'continue', 'debugger', 'default', 'do', 'else', 'export',
    'enum', 'extends', 'finally', 'for', 'function', 'if', 'import', 'new', 'return', 'super', 'switch',
    'this', 'throw', 'try', 'while', 'with',
    /* Strict mode reserved words */
    'implements', 'interface', 'package', 'private', 'protected', 'public', 'static', 'yield',
    /* Contextual keywords */
    'as', 'async', 'await', 'constructor', 'get', 'set', 'from', 'of',
    /* Special */
    'arguments', 'eval',
    /* Stage 3 */
    '#', '@', 'BigInt',
    /* TypeScript / Flow */
    'declare', 'type', 'opaque', '{|', '|}', 'mixins', 'checks', 'module', 'exports',
    /* TypeScript */
    'keyof', 'is', 'readonly',
    /* JSX */
    'JSXText'
];
/**
 * The conversion function between token and its string description/representation.
 */
function tokenDesc(token) {
    return KeywordDescTable[token & 255 /* Type */];
}
exports.tokenDesc = tokenDesc;
// Used `Object.create(null)` to avoid potential `Object.prototype`
// interference.
const DescKeywordTable = Object.create(null, {
    as: { value: 69740 /* AsKeyword */ },
    async: { value: 33624173 /* AsyncKeyword */ },
    await: { value: 134418542 /* AwaitKeyword */ },
    break: { value: 12362 /* BreakKeyword */ },
    case: { value: 12363 /* CaseKeyword */ },
    catch: { value: 12364 /* CatchKeyword */ },
    class: { value: 143437 /* ClassKeyword */ },
    const: { value: 143433 /* ConstKeyword */ },
    constructor: { value: 69743 /* ConstructorKeyword */ },
    continue: { value: 12366 /* ContinueKeyword */ },
    debugger: { value: 12367 /* DebuggerKeyword */ },
    default: { value: 12368 /* DefaultKeyword */ },
    delete: { value: 1191979 /* DeleteKeyword */ },
    do: { value: 12369 /* DoKeyword */ },
    else: { value: 12370 /* ElseKeyword */ },
    export: { value: 12371 /* ExportKeyword */ },
    enum: { value: 12372 /* EnumKeyword */ },
    extends: { value: 12373 /* ExtendsKeyword */ },
    false: { value: 143365 /* FalseKeyword */ },
    finally: { value: 12374 /* FinallyKeyword */ },
    for: { value: 12375 /* ForKeyword */ },
    from: { value: 69746 /* FromKeyword */ },
    function: { value: 143448 /* FunctionKeyword */ },
    get: { value: 69744 /* GetKeyword */ },
    if: { value: 12377 /* IfKeyword */ },
    implements: { value: 20580 /* ImplementsKeyword */ },
    import: { value: 143450 /* ImportKeyword */ },
    in: { value: 669489 /* InKeyword */ },
    instanceof: { value: 669490 /* InstanceofKeyword */ },
    interface: { value: 20581 /* InterfaceKeyword */ },
    let: { value: 151624 /* LetKeyword */ },
    new: { value: 143451 /* NewKeyword */ },
    null: { value: 143367 /* NullKeyword */ },
    of: { value: 69747 /* OfKeyword */ },
    package: { value: 20582 /* PackageKeyword */ },
    private: { value: 20583 /* PrivateKeyword */ },
    protected: { value: 20584 /* ProtectedKeyword */ },
    public: { value: 20585 /* PublicKeyword */ },
    return: { value: 12380 /* ReturnKeyword */ },
    set: { value: 69745 /* SetKeyword */ },
    static: { value: 20586 /* StaticKeyword */ },
    super: { value: 143453 /* SuperKeyword */ },
    switch: { value: 143454 /* SwitchKeyword */ },
    this: { value: 12383 /* ThisKeyword */ },
    throw: { value: 12384 /* ThrowKeyword */ },
    true: { value: 143366 /* TrueKeyword */ },
    try: { value: 12385 /* TryKeyword */ },
    typeof: { value: 1191978 /* TypeofKeyword */ },
    var: { value: 143431 /* VarKeyword */ },
    void: { value: 1191980 /* VoidKeyword */ },
    while: { value: 12386 /* WhileKeyword */ },
    with: { value: 12387 /* WithKeyword */ },
    yield: { value: 268587115 /* YieldKeyword */ },
    eval: { value: 25297013 /* Eval */ },
    arguments: { value: 25297012 /* Arguments */ },
    declare: { value: 16777337 /* DeclareKeyword */ },
    type: { value: 16777338 /* TypeKeyword */ },
    opaque: { value: 16777339 /* OpaqueKeyword */ },
    mixins: { value: 16777342 /* MixinsKeyword */ },
    checks: { value: 16777343 /* ChecksKeyword */ },
    module: { value: 16777344 /* ModuleKeyword */ },
    exports: { value: 16777345 /* ExportsKeyword */ },
    keyof: { value: 16777345 /* KeyOfKeyword */ },
    is: { value: 16777346 /* IsKeyword */ },
    readonly: { value: 16777347 /* ReadOnlyKeyword */ }
});
function descKeyword(value) {
    return (DescKeywordTable[value] | 0);
}
exports.descKeyword = descKeyword;
//# sourceMappingURL=token.js.map