/* eslint no-unused-vars: "off" */
/* global $:true alert:true */

function blinkLedRecursive (led, sequence, index) {
	let ledDelay = 1000;
	if (led.style.display === '') {
		led.style.display = 'none';
		if (index >= sequence.length) {
			index = 0;
			ledDelay = 5000;
		}
	} else {
		led.style.display = '';
		if (sequence[index++] < 50) ledDelay = 500;
	}
	setTimeout(blinkLedRecursive.bind(null, led, sequence, index), ledDelay);
}

$(document).ready(function () {
	// alert('custom js');
	let greenLed1 = document.getElementById('green-led-1');
	greenLed1.style.display = 'none';

	let greenLed1SequenceString = '60|10|17|28|60|87|54|98|23|12|90|98|67|54|57|76|14|35|87|2|99|6';
	let greenLed1Sequence = greenLed1SequenceString.split('|');

	blinkLedRecursive(greenLed1, greenLed1Sequence, 0);

	let greenLed2 = document.getElementById('green-led-2');
	greenLed2.style.display = 'none';

	let greenLed2SequenceString = '76|65|98|67|11|13';
	let greenLed2Sequence = greenLed2SequenceString.split('|');

	blinkLedRecursive(greenLed2, greenLed2Sequence, 0);
});
