# Aromanize-js

Korean transliteration utility for JavaScript

Aromanize extends the functionality of JavaScript's String class for romanizing Hangul (한글) to Latin (로마자/Romaja) script.

## Usage

### HTML

Include `aromanize.js` into your HTML page. All is set!

```js
<script type="text/javascript" src="aromanize.js"></script>
<script type="text/javascript">

	// Converts to Latin script
	"안녕하세요?".romanize(); // annyeonghaseyo?

	// Alternative way to romanize
	Aromanize.romanize("안녕하세요?"); // annyeonghaseyo?
	
	// Romanize using RR Transliteration rule
	Aromanize.hangulToLatin("잘 먹었습니다.", 'rr-translit'); // jal meog-eoss-seubnida.

</script>
```

If you don't want to extend String class, include `aromanize.js?base` where you can still access all functions through `Aromanize` object.

```js
<script type="text/javascript" src="aromanize.js?base"></script>
<script type="text/javascript">

	// Converts to Latin script
	Aromanize.romanize("안녕하세요?"); // annyeonghaseyo?

</script>
```

### Node.js

This module can be installed via npm:

```sh
$ npm install aromanize --save
```

```js
var Aromanize = require("aromanize");

// Converts to Latin script
"안녕하세요?".romanize(); // annyeonghaseyo?

// Alternative way to romanize
Aromanize.romanize("안녕하세요?"); // annyeonghaseyo?

// Romanize using RR Transliteration rule
Aromanize.hangulToLatin("잘 먹었습니다.", 'rr-translit'); // jal meog-eoss-seubnida.
```

If you don't want to extend String class, use `var Aromanize = require("aromanize/base");` where you can still access all functions through `Aromanize` object.

```js
var Aromanize = require("aromanize/base");

// Converts to Latin script
Aromanize.romanize("안녕하세요?"); // annyeonghaseyo?
```

### Command Line

CLI is available when installed via npm:

```sh
$ npm install aromanize -g
$ aromanize

Usage:
  aromanize [TARGET] [OPTIONS] <input>

Example:
  aromanize -r "안녕하세요?"

TARGET:
  -r, --romanize,   
  -l, --latin       Converts to Latin script.
  -c, --cyrillic    Converts to Cyrillic script.

OPTIONS:
      --rule=RULE   Use specified transliteration rule.
      --help        Display this help message.
      
RULE:
  rr                Revised Romanization Transcription (default for -r)
  rr-translit       Revised Romanization Transliteration
  skats             SKATS Coding
  ebi               Indonesian Transcription
  konsevich         Konsevich (default for -c)
		
```

## Documentation

A complete documentation is available at [GitHub Wiki](https://github.com/fujaru/aromanize-js/wiki)

## License

Aromanize-js is released under the MIT License.<br />
&copy; 2017 Fajar Chandra

## Changelog

* Added Konsevich for Cyrillic transcription.
* Fixed ㄹㄹ syllable pairing (e.g. 떨리다)

#### 0.1.5

* Added an option for hyphenating syllables.
* Added SKATS transliteration and Indonesian transcription rules.
* Updated demo page.

#### 0.1.4

* Added Revised Romanization transliteration rule (rr-translit) for academic application in addition to Revised Romanization transcription rule (rr).
* Added an option to prevent extending String class.

#### 0.1

* First pre-release
