/**
    Codewars link:
    https://www.codewars.com/kata/546f922b54af40e1e90001da

    Replace With Alphabet Position

    Encodes every character with its base 26 alphabet presentation  
 */



function convertCharToBase26(char) {
  return char - 64;
}

function isAlpha(char) {
  return char >= 65 && char <= 90 || char >= 97 && char <= 122;
}

function parseText(text) {
  let newStr = '';
  [...text.toUpperCase()].forEach(a => {
    if(isAlpha(a.charCodeAt(0))) {
      newStr += a;
    }
  });
  return newStr;
}

const alphabetPosition = (text) => {
  let str = parseText(text);
  let cipheredText = '';
  [...str].forEach((char, i) => {
    cipheredText += convertCharToBase26(char.charCodeAt(0));
    cipheredText += i < str.length - 1 ? ' ' : '';
  });
  return cipheredText;
}