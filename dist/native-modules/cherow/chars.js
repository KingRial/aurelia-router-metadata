// tslint:disable
/**
 * A list of character constants with much more human-readable names.
 */
export var Chars;
(function (Chars) {
    Chars[Chars["Null"] = 0] = "Null";
    Chars[Chars["LastUnicodeChar"] = 1114111] = "LastUnicodeChar";
    Chars[Chars["MaxAsciiCharacter"] = 127] = "MaxAsciiCharacter";
    Chars[Chars["Backspace"] = 8] = "Backspace";
    Chars[Chars["Tab"] = 9] = "Tab";
    Chars[Chars["LineFeed"] = 10] = "LineFeed";
    Chars[Chars["VerticalTab"] = 11] = "VerticalTab";
    Chars[Chars["FormFeed"] = 12] = "FormFeed";
    Chars[Chars["CarriageReturn"] = 13] = "CarriageReturn";
    Chars[Chars["Space"] = 32] = "Space";
    Chars[Chars["Exclamation"] = 33] = "Exclamation";
    Chars[Chars["DoubleQuote"] = 34] = "DoubleQuote";
    Chars[Chars["Hash"] = 35] = "Hash";
    Chars[Chars["Dollar"] = 36] = "Dollar";
    Chars[Chars["Percent"] = 37] = "Percent";
    Chars[Chars["Ampersand"] = 38] = "Ampersand";
    Chars[Chars["SingleQuote"] = 39] = "SingleQuote";
    Chars[Chars["LeftParen"] = 40] = "LeftParen";
    Chars[Chars["RightParen"] = 41] = "RightParen";
    Chars[Chars["Asterisk"] = 42] = "Asterisk";
    Chars[Chars["Plus"] = 43] = "Plus";
    Chars[Chars["Comma"] = 44] = "Comma";
    Chars[Chars["Hyphen"] = 45] = "Hyphen";
    Chars[Chars["Period"] = 46] = "Period";
    Chars[Chars["Slash"] = 47] = "Slash";
    Chars[Chars["At"] = 64] = "At";
    /* Surrogate pair values */
    Chars[Chars["MinHigh"] = 55296] = "MinHigh";
    Chars[Chars["MaxHigh"] = 56319] = "MaxHigh";
    Chars[Chars["MinLow"] = 56320] = "MinLow";
    Chars[Chars["MaxLow"] = 3583] = "MaxLow";
    /* Numbers */
    Chars[Chars["Zero"] = 48] = "Zero";
    Chars[Chars["One"] = 49] = "One";
    Chars[Chars["Two"] = 50] = "Two";
    Chars[Chars["Three"] = 51] = "Three";
    Chars[Chars["Four"] = 52] = "Four";
    Chars[Chars["Five"] = 53] = "Five";
    Chars[Chars["Six"] = 54] = "Six";
    Chars[Chars["Seven"] = 55] = "Seven";
    Chars[Chars["Eight"] = 56] = "Eight";
    Chars[Chars["Nine"] = 57] = "Nine";
    Chars[Chars["Colon"] = 58] = "Colon";
    Chars[Chars["Semicolon"] = 59] = "Semicolon";
    Chars[Chars["LessThan"] = 60] = "LessThan";
    Chars[Chars["EqualSign"] = 61] = "EqualSign";
    Chars[Chars["GreaterThan"] = 62] = "GreaterThan";
    Chars[Chars["QuestionMark"] = 63] = "QuestionMark";
    Chars[Chars["UpperA"] = 65] = "UpperA";
    Chars[Chars["UpperB"] = 66] = "UpperB";
    Chars[Chars["UpperC"] = 67] = "UpperC";
    Chars[Chars["UpperD"] = 68] = "UpperD";
    Chars[Chars["UpperE"] = 69] = "UpperE";
    Chars[Chars["UpperF"] = 70] = "UpperF";
    Chars[Chars["UpperG"] = 71] = "UpperG";
    Chars[Chars["UpperH"] = 72] = "UpperH";
    Chars[Chars["UpperI"] = 73] = "UpperI";
    Chars[Chars["UpperJ"] = 74] = "UpperJ";
    Chars[Chars["UpperK"] = 75] = "UpperK";
    Chars[Chars["UpperL"] = 76] = "UpperL";
    Chars[Chars["UpperM"] = 77] = "UpperM";
    Chars[Chars["UpperN"] = 78] = "UpperN";
    Chars[Chars["UpperO"] = 79] = "UpperO";
    Chars[Chars["UpperP"] = 80] = "UpperP";
    Chars[Chars["UpperQ"] = 81] = "UpperQ";
    Chars[Chars["UpperR"] = 82] = "UpperR";
    Chars[Chars["UpperS"] = 83] = "UpperS";
    Chars[Chars["UpperT"] = 84] = "UpperT";
    Chars[Chars["UpperU"] = 85] = "UpperU";
    Chars[Chars["UpperV"] = 86] = "UpperV";
    Chars[Chars["UpperW"] = 87] = "UpperW";
    Chars[Chars["UpperX"] = 88] = "UpperX";
    Chars[Chars["UpperY"] = 89] = "UpperY";
    Chars[Chars["UpperZ"] = 90] = "UpperZ";
    Chars[Chars["LeftBracket"] = 91] = "LeftBracket";
    Chars[Chars["Backslash"] = 92] = "Backslash";
    Chars[Chars["RightBracket"] = 93] = "RightBracket";
    Chars[Chars["Caret"] = 94] = "Caret";
    Chars[Chars["Underscore"] = 95] = "Underscore";
    Chars[Chars["Backtick"] = 96] = "Backtick";
    Chars[Chars["LowerA"] = 97] = "LowerA";
    Chars[Chars["LowerB"] = 98] = "LowerB";
    Chars[Chars["LowerC"] = 99] = "LowerC";
    Chars[Chars["LowerD"] = 100] = "LowerD";
    Chars[Chars["LowerE"] = 101] = "LowerE";
    Chars[Chars["LowerF"] = 102] = "LowerF";
    Chars[Chars["LowerG"] = 103] = "LowerG";
    Chars[Chars["LowerH"] = 104] = "LowerH";
    Chars[Chars["LowerI"] = 105] = "LowerI";
    Chars[Chars["LowerJ"] = 106] = "LowerJ";
    Chars[Chars["LowerK"] = 107] = "LowerK";
    Chars[Chars["LowerL"] = 108] = "LowerL";
    Chars[Chars["LowerM"] = 109] = "LowerM";
    Chars[Chars["LowerN"] = 110] = "LowerN";
    Chars[Chars["LowerO"] = 111] = "LowerO";
    Chars[Chars["LowerP"] = 112] = "LowerP";
    Chars[Chars["LowerQ"] = 113] = "LowerQ";
    Chars[Chars["LowerR"] = 114] = "LowerR";
    Chars[Chars["LowerS"] = 115] = "LowerS";
    Chars[Chars["LowerT"] = 116] = "LowerT";
    Chars[Chars["LowerU"] = 117] = "LowerU";
    Chars[Chars["LowerV"] = 118] = "LowerV";
    Chars[Chars["LowerW"] = 119] = "LowerW";
    Chars[Chars["LowerX"] = 120] = "LowerX";
    Chars[Chars["LowerY"] = 121] = "LowerY";
    Chars[Chars["LowerZ"] = 122] = "LowerZ";
    Chars[Chars["LeftBrace"] = 123] = "LeftBrace";
    Chars[Chars["VerticalBar"] = 124] = "VerticalBar";
    Chars[Chars["RightBrace"] = 125] = "RightBrace";
    Chars[Chars["Tilde"] = 126] = "Tilde";
    Chars[Chars["NextLine"] = 133] = "NextLine";
    Chars[Chars["NonBreakingSpace"] = 160] = "NonBreakingSpace";
    Chars[Chars["Ogham"] = 5760] = "Ogham";
    Chars[Chars["EnQuad"] = 8192] = "EnQuad";
    Chars[Chars["EmQuad"] = 8193] = "EmQuad";
    Chars[Chars["EnSpace"] = 8194] = "EnSpace";
    Chars[Chars["EmSpace"] = 8195] = "EmSpace";
    Chars[Chars["ThreePerEmSpace"] = 8196] = "ThreePerEmSpace";
    Chars[Chars["FourPerEmSpace"] = 8197] = "FourPerEmSpace";
    Chars[Chars["SixPerEmSpace"] = 8198] = "SixPerEmSpace";
    Chars[Chars["FigureSpace"] = 8199] = "FigureSpace";
    Chars[Chars["PunctuationSpace"] = 8200] = "PunctuationSpace";
    Chars[Chars["ThinSpace"] = 8201] = "ThinSpace";
    Chars[Chars["HairSpace"] = 8202] = "HairSpace";
    Chars[Chars["ZeroWidthSpace"] = 8203] = "ZeroWidthSpace";
    Chars[Chars["ZeroWidthJoiner"] = 8204] = "ZeroWidthJoiner";
    Chars[Chars["ZeroWidthNonJoiner"] = 8205] = "ZeroWidthNonJoiner";
    Chars[Chars["ZeroWidthNoBreakSpace"] = 65279] = "ZeroWidthNoBreakSpace";
    Chars[Chars["LineSeparator"] = 8232] = "LineSeparator";
    Chars[Chars["ParagraphSeparator"] = 8233] = "ParagraphSeparator";
    Chars[Chars["NarrowNoBreakSpace"] = 8239] = "NarrowNoBreakSpace";
    Chars[Chars["MathematicalSpace"] = 8287] = "MathematicalSpace";
    Chars[Chars["IdeographicSpace"] = 12288] = "IdeographicSpace";
    Chars[Chars["LittleEndian"] = 4094] = "LittleEndian";
    Chars[Chars["ByteOrderMark"] = 65519] = "ByteOrderMark";
    Chars[Chars["LeadSurrogateMin"] = 55296] = "LeadSurrogateMin";
    Chars[Chars["LeadSurrogateMax"] = 56319] = "LeadSurrogateMax";
    Chars[Chars["TrailSurrogateMin"] = 56320] = "TrailSurrogateMin";
    Chars[Chars["TrailSurrogateMax"] = 57343] = "TrailSurrogateMax";
    Chars[Chars["NonBMPMin"] = 65536] = "NonBMPMin";
})(Chars || (Chars = {}));
//# sourceMappingURL=chars.js.map