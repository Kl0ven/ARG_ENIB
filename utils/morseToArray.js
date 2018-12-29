const letters = [ ' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ];
const morseLetters = [ '\xa0\xa0\xa0\xa0', '. _', '_ . . .', '_ . _ .', '_ . .', '.', '. . _ .', '_ _ .', '. . . .', '. .', '. _ _ _', '_ . _', '. _ . .', '_ _', '_ .', '_ _ _', '. _ _ .', '_ _ . _', '. _ .', '. . .', '_', '. . _', '. . . _', '. _ _', '_ . . _', '_ . _ _', '_ _ . .', '. _ _ _ _', '. . _ _ _', '. . . _ _', '. . . . _', '. . . . .', '_ . . . .', '_ _ . . .', '_ _ _ . .', '_ _ _ _ .', '_ _ _ _ _' ];

var textToChange = 'test';

var newText = '';
for (var i = 0; i < textToChange.length; i++) {
	for (var j = 0; j < 37; j++) {
		if (textToChange[i].toLowerCase() === letters[j]) {
			newText += morseLetters[j];
			newText += '\xa0\xa0\xa0';
			break;
		}
	}
}
console.log(newText);
var morse = newText.replace(/\s+/g, '').split('');
var result = [];

for (var y = 0; y < morse.length; y++) {
	if (morse[y] === '.') {
		result.push(Math.floor(Math.random() * 50));
	} else {
		result.push(Math.floor(Math.random() * 50) + 50);
	}
}
console.log(result);
