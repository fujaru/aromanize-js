/**
	Aromanize-js
	@author Fajar Chandra
	@since 2017.12.06
	
	UNICODE TABLE REFERENCES
	Hangul Jamo            0x3131 - 0x
	Hangul Choseong Jaeum  0x1100 - 
	Hangul Jungseong Moeum 0x1161 - 
	Hangul Jongseong Jaeum 0x11A8
	Hangul Eumjeol         0xAC00
 */
var Aromanize = {

/**
 * Converts Hangul to Romaja
 * 
 * Options/Parameters:
 * str       - (String) Source string.
 * rule      - (String) Romanization rule.
 *             Possible values: rr|yale
 * phonology - (boolean) Whether to follow or ignore phonological changes.
 * hyphen    - (String) Hyphenate syllables with specified characters.
 * 
 * Return:
 * (String) Romanized string.
 */
hangulToRomaja: function(str, rule, phonology, hyphen) {
	// Note: giyeok (0x1100) for middle moeum is different than giyeok (0x3131) for standalone moeum
	var jaeum = {
		'ᄀ': 'g', 'ᄁ': 'kk',
		'ᄂ': 'n',
		'ᄃ': 'd', 'ᄄ': 'tt',
		'ᄅ': 'r', 
		'ᄆ': 'm',
		'ᄇ': 'b', 'ᄈ': 'pp',
		'ᄉ': 's', 'ᄊ': 'ss',
		'ᄋ': '',
		'ᄌ': 'j', 'ᄍ': 'jj',
		'ᄎ': 'ch', 
		'ᄏ': 'k', 
		'ᄐ': 't',
		'ᄑ': 'p',
		'ᄒ': 'h'
	};
	
	// Note: ᅡ (0x1161) for middle moeum is different than ㅏ (0x314F) for standalone moeum
	var moeum = {
		'ᅡ': 'a', 'ᅢ': 'ae', 'ᅣ': 'ya', 'ᅤ': 'yae', 
		'ᅥ': 'eo', 'ᅦ': 'e', 'ᅧ': 'yeo', 'ᅨ': 'ye', 
		'ᅩ': 'o', 'ᅪ': 'wa', 'ᅫ': 'wae', 'ᅬ': 'oe', 'ᅭ': 'yo',
		'ᅮ': 'u', 'ᅯ': 'wo', 'ᅰ': 'we', 'ᅱ': 'wi', 'ᅲ': 'yu', 
		'ᅳ': 'eu', 'ᅴ': 'eui', 'ᅵ': 'i'
	};
	
	// Note: ᆨ (0x11A8) for last jaeum (batchim) is different than ᄀ (0x1100) for first jaeum
	// also different than ㄱ (0x3131) for standalone jaeum
	var batchim = {
		'ᆨ': 'k', 'ᆨᄋ': 'g', 'ᆨᄂ': 'ngn', 'ᆨᄅ': 'ngn', 'ᆨᄆ': 'ngm', 'ᆨᄒ': 'kh',
		'ᆩ': 'kk', 'ᆩᄋ': 'kg', 'ᆩᄂ': 'ngn', 'ᆩᄅ': 'ngn', 'ᆩᄆ': 'ngm', 'ᆩᄒ': 'kh',
		'ᆪ': 'k', 'ᆪᄋ': 'ks', 'ᆪᄂ': 'ngn', 'ᆪᄅ': 'ngn', 'ᆪᄆ': 'ngm', 'ᆪᄒ': 'kch', 
		'ᆫ': 'n', 'ᆫᄅ': 'll', 
		'ᆬ': 'n', 'ᆬᄋ': 'nj', 'ᆬᄂ': 'nn', 'ᆬᄅ': 'nn', 'ᆬᄆ': 'nm', 'ᆬㅎ': 'nch',
		'ᆭ': 'n', 'ᆭᄋ': 'nh', 'ᆭᄅ': 'nn', 
		'ᆮ': 't', 'ᆮᄋ': 'd', 'ᆮᄂ': 'nn', 'ᆮᄅ': 'nn', 'ᆮᄆ': 'nm', 'ᆮᄒ': 'th', 
		'ᆯ': 'l', 'ᆯᄋ': 'r', 'ᆯᄂ': 'll', 
		'ᆰ': 'k', 'ᆰᄋ': 'lg', 'ᆰᄂ': 'ngn', 'ᆰᄅ': 'ngn', 'ᆰᄆ': 'ngm', 'ᆰᄒ': 'lkh',
		'ᆱ': 'm', 'ᆱᄋ': 'lm', 'ᆱᄂ': 'mn', 'ᆱᄅ': 'mn', 'ᆱᄆ': 'mm', 'ᆱᄒ': 'lmh', 
		'ᆲ': 'p', 'ᆲᄋ': 'lb', 'ᆲᄂ': 'mn', 'ᆲᄅ': 'mn', 'ᆲᄆ': 'mm', 'ᆲᄒ': 'lph', 
		'ᆳ': 't', 'ᆳᄋ': 'ls', 'ᆳᄂ': 'nn', 'ᆳᄅ': 'nn', 'ᆳᄆ': 'nm', 'ᆳᄒ': 'lsh', 
		'ᆴ': 't', 'ᆴᄋ': 'lt', 'ᆴᄂ': 'nn', 'ᆴᄅ': 'nn', 'ᆴᄆ': 'nm', 'ᆴᄒ': 'lth', 
		'ᆵ': 'p', 'ᆵᄋ': 'lp', 'ᆵᄂ': 'mn', 'ᆵᄅ': 'mn', 'ᆵᄆ': 'mm', 'ᆵᄒ': 'lph', 
		'ᆶ': 'l', 'ᆶᄋ': 'lh', 'ᆶᄂ': 'll', 'ᆶᄅ': 'll', 'ᆶᄆ': 'lm', 'ᆶᄒ': 'lh',
		'ᆷ': 'm', 'ᆷᄅ': 'mn', 
		'ᆸ': 'p', 'ᆸᄋ': 'b', 'ᆸᄂ': 'mn', 'ᆸᄅ': 'mn', 'ᆸᄆ': 'mm', 'ᆸᄒ': 'ph', 
		'ᆹ': 'p', 'ᆹᄋ': 'ps', 'ᆹᄂ': 'mn', 'ᆹᄅ': 'mn', 'ᆹᄆ': 'mm', 'ᆹᄒ': 'psh', 
		'ᆺ': 't', 'ᆺᄋ': 's', 'ᆺᄂ': 'nn', 'ᆺᄅ': 'nn', 'ᆺᄆ': 'nm', 'ᆺᄒ': 'sh', 
		'ᆻ': 't', 'ᆻᄋ': 'ss', 'ᆻᄂ': 'tn', 'ᆻᄅ': 'tn', 'ᆻᄆ': 'nm', 'ᆻᄒ': 'th', 
		'ᆼ': 'ng',
		'ᆽ': 't', 'ᆽᄋ': 'j', 'ᆽᄂ': 'nn', 'ᆽᄅ': 'nn', 'ᆽᄆ': 'nm', 'ᆽᄒ': 'ch', 
		'ᆾ': 't', 'ᆾᄋ': 'ch', 'ᆾᄂ': 'nn', 'ᆾᄅ': 'nn', 'ᆾᄆ': 'nm', 'ᆾᄒ': 'ch', 
		'ᆿ': 'k', 'ᆿᄋ': 'k', 'ᆿᄂ': 'ngn', 'ᆿᄅ': 'ngn', 'ᆿᄆ': 'ngm', 'ᆿᄒ': 'kh', 
		'ᇀ': 't', 'ᇀᄋ': 't', 'ᇀᄂ': 'nn', 'ᇀᄅ': 'nn', 'ᇀᄆ': 'nm', 'ᇀᄒ': 'th', 
		'ᇁ': 'p', 'ᇁᄋ': 'p', 'ᇁᄂ': 'mn', 'ᇁᄅ': 'mn', 'ᇁᄆ': 'mm', 'ᇁᄒ': 'ph', 
		'ᇂ': 't', 'ᇂᄋ': 'h', 'ᇂᄂ': 'nn', 'ᇂᄅ': 'nn', 'ᇂᄆ': 'mm', 'ᇂᄒ': 't'
	};
	var rom = '';
	var curr = null, next;
	var skipJaeum = false; // Indicates jaeum of current iteration to be skipped
	for(var i = 0; i <= str.length; i++) {
		// If next is hangul syllable, separate it into jamo
		// 0xAC00 is the first hangul syllable in unicode table
		// 0x1100 is the first hangul jaeum in unicode table
		// 0x1161 is the first hangul moeum in unicode table
		// 0x11A8 is the first hangul batchim in unicode table
		nextIdx = str.charCodeAt(i) - 0xAC00;
		if(!isNaN(nextIdx) && nextIdx >= 0 && nextIdx <= 11171) {
			next = String.fromCharCode(Math.floor(nextIdx / 588) + 0x1100)
				+ String.fromCharCode(Math.floor(nextIdx % 588 / 28) + 0x1161)
				+ (nextIdx % 28 == 0 ? '' : String.fromCharCode(nextIdx % 28 + 0x11A7)); // Index 0 is reserved for nothing
		}
		else {
			next = str.charAt(i);
		}
		
		// Except for first iteration (curr is null), 
		// Curr and next contains 2 or 3 jamo, or 1 non-hangul letter
		if(curr != null) {
			// Jaeum
			if(!skipJaeum) {
				if(jaeum[curr.charAt(0)] != undefined) {
					rom += jaeum[curr.charAt(0)];
				}
				else {
					rom += curr.charAt(0);
				}
			}
			skipJaeum = false;
			
			// Moeum
			if(curr.length > 1) {
				if(moeum[curr.charAt(1)] != undefined) {
					rom += moeum[curr.charAt(1)];
				}
				else {
					rom += curr.charAt(1);
				}
			}
			
			// Batchim
			if(curr.length > 2) {
				// Changing sound
				if(batchim[curr.charAt(2) + next.charAt(0)] != undefined) {
					rom += batchim[curr.charAt(2) + next.charAt(0)];
					skipJaeum = true;
				}
				// Unchanging sound
				else if(batchim[curr.charAt(2)] != undefined) {
					rom += batchim[curr.charAt(2)];
				}
				else {
					rom += curr.charAt(1);
				}
			}
		}
		
		curr = next;
	}
	return rom;
},

/**
 * Converts Hangul/Hiragana/Katakana to Romaja
 * 
 * Options/Parameters:
 * str       - (String) Source string.
 * filter    - (String|number|boolean) Only transliterate specified scripts.
 *             See hasFilter() for list of possible values.
 * phonology - (boolean) Whether to follow or ignore phonological changes.
 * hyphen    - (String) Hyphenate syllables with specified characters.
 * 
 * Return:
 * (String) Romanized string.
 */
toLatin: function(str, filter, phonology, hyphen) {
	return this.hangulToRomaja.apply(this, arguments);
},

/**
 * Converts Hangul/Hiragana/Katakana to Romaja
 * 
 * This is an alias of toRomaja().
 */
romanize: function() { return this.toLatin.apply(this, arguments); },

/**
 * Converts Romaji/Hangul/Katakana to Hiragana
 */
toHiragana: function(str) {
	return str;
},

/**
 * Converts Romaji/Hangul/Hiragana to Katakana
 */
toKatakana: function(str) {
	return str;
},

/**
 * Converts Romaji/Hiragana/Katakana to Hangul
 */
toHangul: function(str) {
	return str;
}

};

////////////////////////////////////////////////////////////////////////////////
// Wrapper functions for String
////////////////////////////////////////////////////////////////////////////////

if(typeof String.prototype.romanize == 'undefined') {
	String.prototype.romanize = function() {
		var args = Array.prototype.slice.call(arguments);
		args.unshift(this);
		return Aromanize.toLatin.apply(Aromanize, args);
	};
}

////////////////////////////////////////////////////////////////////////////////
// Export module for node.js
////////////////////////////////////////////////////////////////////////////////

if(typeof module != 'undefined') {
	module.exports = Aromanize;
}

////////////////////////////////////////////////////////////////////////////////
// Command line interface
////////////////////////////////////////////////////////////////////////////////

if(typeof process != 'undefined') {
	
	// Capture options
	var script = Aromanize.toLatin;
	var options = {};
	var input = '';
	for(var i = 2; i < process.argv.length; i++) {
		// Script
		switch(process.argv[i]) {
			case '-r':
			case '--romanize':
			case '--latin':
				script = Aromanize.toLatin;
				break;
				
			case '-h':
			case '--hangul':
				script = Aromanize.toHangul;
				break;
				
			case '-i':
			case '--hiragana':
				script = Aromanize.toHiragana;
				break;
				
			case '-k':
			case '--katakana':
				script = Aromanize.toKatakana;
				break;
		}
		
		// Options
		if(process.argv[i][0] == '-') {
			var opt = process.argv[i].split('=');
			options[opt[0]] = opt[1];
		}
		
		// Input
		else {
			input = process.argv[i];
		}
	}
	
	// If no input provided or --help is triggered, show help
	if(input == '' || options['--help'] != undefined) {
		console.log('\n\
Usage:\n\
  aromanize [script] [options] <input>\n\
\n\
Example:\n\
  aromanize -r "안녕하세요?"\n\
\n\
Script:\n\
  -r, --romanize    Converts to Latin script.\n\
\n\
Options:\n\
      --help        Display this help message.\n\
		');
		process.exit(0);
	}
	
	// Execute script
	console.log(script.call(Aromanize, input));
}
