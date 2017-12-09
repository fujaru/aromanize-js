// Test script for node.js
var Aromanize = require('../aromanize');

if(typeof String.prototype.romanize == 'function') {
	console.log("String extension is supported!");
}
else {
	console.log('\x1b[33m%s\x1b[0m', "Notice: String extension is not supported!");
}

console.log("\n\x1b[1m%s\x1b[0m\nA > %s\nあ > %s\nア > %s", "안녕하세요?", Aromanize.romanize("안녕하세요?"), Aromanize.toHiragana("안녕하세요?"), Aromanize.toKatakana("안녕하세요?"));
console.log("\n\x1b[1m%s\x1b[0m\nA > %s\nア > %s\n가 > %s", "こんにちは", Aromanize.romanize("こんにちは"), Aromanize.toKatakana("こんにちは"), Aromanize.toHangul("こんにちは"));
console.log("\n\x1b[1m%s\x1b[0m\nA > %s\nあ > %s\n가 > %s", "コンニチハ", Aromanize.romanize("コンニチハ"), Aromanize.toHiragana("コンニチハ"), Aromanize.toHangul("コンニチハ"));
console.log("\n\x1b[1m%s\x1b[0m\n가 > %s", "Annyeonghaseyo?", Aromanize.toHangul("Annyeonghaseyo?"));
console.log("\n\x1b[1m%s\x1b[0m\nあ > %s\nア > %s", "Konbanwa.", Aromanize.toHiragana("Konbanwa."), Aromanize.toKatakana("Konbanwa."));
console.log("\n\x1b[1m%s\x1b[0m\n> %s", "감사하다는 일번어로 ありがとうございます라는 말합니다.", Aromanize.romanize("감사하다는 일번어로 ありがとうございます라는 말합니다."));

