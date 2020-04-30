/* eslint no-unused-vars: "off" */
/* global $:true alert:true */

function blinkLedRecursive (led, sequence, index) {
	let ledDelay = 700;
	if ($(led).is(':visible')) {
		$(led).hide();
		if (index >= sequence.length) {
			index = 0;
			ledDelay = 5000;
		}
	} else {
		$(led).show();
		if (sequence[index++] < 50) ledDelay = 250;
	}
	setTimeout(blinkLedRecursive.bind(null, led, sequence, index), ledDelay);
}

$(document).ready(function () {
	let color = ['green', 'orange', 'red', 'purple', 'blue'];
	let ledSequence = [ [ 0, 27, 5 ],
	[ 21 ],
	[ 99, 29, 18 ],
	[ 5, 19, 89 ],
	[ 67, 12 ],
	[ 62, 0, 5 ],
	[ 84, 44 ],
	[ 13 ],
	[ 48, 27, 24 ],
	[ 46, 1, 13 ],
	[ 40, 65, 41, 36 ],
	[ 18, 79, 53, 11 ] ];

	for (let i = 0; i < ledSequence.length; i++) {
		var randColor = color[Math.floor(Math.random() * color.length)];
		$('#fill').append(`<div class="arg-led-container"><div class="arg-led-border arg-dark-` + randColor + `"><div id="green-led-` + i + `" class="arg-led arg-` + randColor + `"></div></div></div>`);
		setTimeout(() => {
			$('#green-led-' + i).hide();
			if (ledSequence[i].length !== 0) {
				blinkLedRecursive($('#green-led-' + i), ledSequence[i], 0);
			}
		}, 100);
	}
});
