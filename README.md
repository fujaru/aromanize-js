# jamora-js
Japanese &amp; Korean transliteration tool for JavaScript

Jamora extends the functionality of JavaScript's String class for transliterating between Hangul (한글), Hiragana (ひらがな), Katakana (カタカナ), to Latin script. Hangul transliteration is based on Revised-Romanization (RR) rules.

## Usage Examples
```
"안녕하세요?".toRomaja()
"こんにちは".toRomaja()
"コンニチハ".toRomaja()
"감사하다는 일번어로 ありがとうございます라는 말합니다.".toRomaja()
```
Converts Hangul, Hiragana, Katakana, or combination of them to Romaja.

```
"Konbanwa".toHiragana()
"コンバンハ".toHiragana()
```
Converts Romaji or Katakana to Hiragana.

```
"Konbanwa".toKatakana()
"こんばんは".toHiragana()
```
Converts Romaji or Hiragana to Katakana.

## License

Jamora-js is released under the MIT License.<br />
&copy; 2017 Fajar Chandra
