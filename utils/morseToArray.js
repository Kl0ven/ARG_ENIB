/* eslint max-len: ["error", { "code": 450 }] */
const letters = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const morseLetters = ['\xa0\xa0\xa0\xa0', '. _', '_ . . .', '_ . _ .', '_ . .', '.', '. . _ .', '_ _ .', '. . . .', '. .', '. _ _ _', '_ . _', '. _ . .', '_ _', '_ .', '_ _ _', '. _ _ .', '_ _ . _', '. _ .', '. . .', '_', '. . _', '. . . _', '. _ _', '_ . . _', '_ . _ _', '_ _ . .', '. _ _ _ _', '. . _ _ _', '. . . _ _', '. . . . _', '. . . . .', '_ . . . .', '_ _ . . .', '_ _ _ . .', '_ _ _ _ .', '_ _ _ _ _'];

const textToChange = 'sabotezlenolimit';

const newText = [];
for (let i = 0; i < textToChange.length; i++) {
    for (let j = 0; j < 37; j++) {
        if (textToChange[i].toLowerCase() === letters[j]) {
            newText.push(morseLetters[j].replace(/\s+/g, '').split(''));
            break;
        }
    }
}
console.log(newText);

const result = [];

for (let y = 0; y < newText.length; y++) {
    const lettre = [];
    for (let z = 0; z < newText[y].length; z++) {
        if (newText[y][z] === '.') {
            lettre.push(Math.floor(Math.random() * 50));
        } else if (newText[y][z] === '_') {
            lettre.push(Math.floor(Math.random() * 50) + 50);
        }
    }
    result.push(lettre);
}
console.log(result);
