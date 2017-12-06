# Aromanize-js
*Notice: This project is currently under development.*

Japanese &amp; Korean transliteration tool for JavaScript

Aromanize extends the functionality of JavaScript's String class for transliterating between Hangul (한글), Hiragana (ひらがな), Katakana (カタカナ), to Latin (ローマ字/로마자) script.

## Usage

### HTML

Include `aromanize.js` into your HTML page. All is set!

```
<script type="text/javascript" src="aromanize.js"></script>
<script type="text/javascript">

	// Converts to Latin script
	"안녕하세요?".romanize(); // annyeonghaseyo?

	// Converts to Hangul
	"annyeonghaseyo?".toHangul(); // 안녕하세요?

	// Converts to Hiragana
	"ラーメン".toHiragana(); // らあめん

	// Converts to Katakana
	"らあめん".toKatakana(); // ラーメン

	// Alternative way to romanize
	Aromanize.romanize("안녕하세요?"); // annyeonghaseyo?

</script>
```

### Node.js

This module can be installed via npm:

```
$ npm install aromanize --save
```

```
require("aromanize");

// Converts to Latin script
"안녕하세요?".romanize(); // annyeonghaseyo?

// Converts to Hangul
"annyeonghaseyo?".toHangul(); // 안녕하세요?

// Converts to Hiragana
"ラーメン".toHiragana(); // らあめん

// Converts to Katakana
"らあめん".toKatakana(); // ラーメン

// Alternative way to romanize
Aromanize.romanize("안녕하세요?"); // annyeonghaseyo?
```

### Command Line

CLI is available when installed via npm:

```
$ npm install aromanize -g
$ aromanize --romanize "안녕하세요?"

Usage:
  aromanize [script] [options] <input>
  
Example:
  aromanize -r "안녕하세요?"
  
Script:
  -r, --romanize    Converts to Latin script
  -h, --hangul      Converts to Hangul
  -i, --hiragana    Converts to Hiragana
  -k, --katakana    Converts to Katakana
  
  When script is not provided, it will default to romanize
  
Options:
      --rule=RULE         Transliteration/transcription rule
  -p, --ignore-phonology  Ignore phonological changes
  	
```

## License

Aromanize-js is released under the MIT License.<br />
&copy; 2017 Fajar Chandra
