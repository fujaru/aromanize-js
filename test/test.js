// Test script for node.js
var Jamora = require('../jamora');

if(typeof String.prototype.toRomaja != 'function') {
	console.log("String extension is supported!");
}
else {
	console.log('\x1b[33m%s\x1b[0m', "Notice: String extension is not supported!");
}

console.log('\x1b[1m%s\x1b[0m', "\nTransliteration tests...\n");

console.log("\n%s\n> %s\n", "안녕하세요?", Jamora.toRomaja("안녕하세요?"));
console.log("\n%s\n> %s\n", "こんにちは", Jamora.toRomaja("こんにちは"));
console.log("\n%s\n> %s\n", "コンニチハ", Jamora.toRomaja("コンニチハ"));
console.log("\n%s\n> %s\n", "감사하다는 일번어로 ありがとうございます라는 말합니다.", Jamora.toRomaja("감사하다는 일번어로 ありがとうございます라는 말합니다."));

console.log("\n%s\n> %s\n", "Konbanwa", Jamora.toHiragana("Konbanwa"));
console.log("\n%s\n> %s\n", "コンバンハ", Jamora.toHiragana("コンバンハ"));

console.log("\n%s\n> %s\n", "Konbanwa", Jamora.toKatakana("Konbanwa"));
