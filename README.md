# Aromanize-js

Korean transliteration tool for JavaScript

Aromanize extends the functionality of JavaScript's String class for romanizing Hangul (한글) to Latin (로마자/Romaja) script.

## Usage

### HTML

Include `aromanize.js` into your HTML page. All is set!

```
<script type="text/javascript" src="aromanize.js"></script>
<script type="text/javascript">

	// Converts to Latin script
	"안녕하세요?".romanize(); // annyeonghaseyo?

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

// Alternative way to romanize
Aromanize.romanize("안녕하세요?"); // annyeonghaseyo?
```

### Command Line

CLI is available when installed via npm:

```
$ npm install aromanize -g
$ aromanize

Usage:
  aromanize [script] [options] <input>

Example:
  aromanize -r "안녕하세요?"

Script:
  -r, --romanize    Converts to Latin script.

Options:
      --help        Display this help message.
		
```

## License

Aromanize-js is released under the MIT License.<br />
&copy; 2017 Fajar Chandra
