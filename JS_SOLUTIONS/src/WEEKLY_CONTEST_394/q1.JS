/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function (word) {
  if (word.length < 3) return false;
  let containsVowel = false,
    containsConsonant = false;
  let vowels = new Set();
  vowels.add("a");
  vowels.add("e");
  vowels.add("i");
  vowels.add("o");
  vowels.add("u");
  vowels.add("A");
  vowels.add("E");
  vowels.add("I");
  vowels.add("O");
  vowels.add("U");
  let number = new Set();
  number.add("0");
  number.add("1");
  number.add("2");
  number.add("3");
  number.add("4");
  number.add("5");
  number.add("6");
  number.add("7");
  number.add("8");
  number.add("9");

  let consonants = new Set();
  for (let i = 0; i < 26; i++) {
    let newChar = String.fromCharCode(i + 97);
    if (!vowels.has(newChar)) {
      consonants.add(newChar);
    }
  }
  for (let i = 0; i < 26; i++) {
    let newChar = String.fromCharCode(i + 65);
    if (!vowels.has(newChar)) {
      consonants.add(newChar);
    }
  }
  //traverse the list
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (consonants.has(char)) {
      containsConsonant = true;
    } else if (vowels.has(char)) {
      containsVowel = true;
    } else if (number.has(char)) {
      continue;
    } else {
      return false;
    }
  }
  return containsConsonant && containsVowel;
};

let word = "a3$e";
console.log(isValid(word));
