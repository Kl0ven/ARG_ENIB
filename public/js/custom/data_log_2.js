/* eslint no-unused-vars: "off" */
/* global $:true alert:true */

function blinkLedRecursive (led, sequence, index) {
	let ledDelay = 500;
	if (led.style.display === '') {
		led.style.display = 'none';
		if (index >= sequence.length) {
			index = 0;
			ledDelay = 5000;
		}
	} else {
		led.style.display = '';
		if (sequence[index++] < 50) ledDelay = 250;
	}
	setTimeout(blinkLedRecursive.bind(null, led, sequence, index), ledDelay);
}

$(document).ready(function () {
	// alert('custom js');
	let greenLed1 = document.getElementById('green-led-1');
	greenLed1.style.display = 'none';

	// string are not uglyfied
	let greenLed1Sequence = [60, 10, 17, 28, 60, 87, 54, 98, 23, 12, 90, 98, 67, 54, 57, 76, 14, 35, 87, 2, 99, 6];

	blinkLedRecursive(greenLed1, greenLed1Sequence, 0);

	let greenLed2 = document.getElementById('green-led-2');
	greenLed2.style.display = 'none';

	let greenLed2Sequence = [76, 65, 98, 67, 11, 13];

	blinkLedRecursive(greenLed2, greenLed2Sequence, 0);
});
