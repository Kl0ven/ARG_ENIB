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
	let ledSequence = [ [ 83, 6 ],
	[ 48, 72 ],
	[ 78, 83 ],
	[],
	[ 36 ],
	[ 81 ],
	[],
	[ 19, 11 ],
	[ 27, 74, 70, 31 ],
	[ 42, 16, 25 ],
	[ 35, 61 ],
	[],
	[ 45, 21, 6 ],
	[ 75, 40, 83, 14 ],
	[ 0, 19 ],
	[ 36 ],
	[ 63, 14 ],
	[ 76 ],
	[ 24, 47 ],
	[ 37, 52 ],
	[],
	[ 44, 62, 97, 20 ],
	[ 79, 51, 68 ],
	[ 99 ],
	[ 41 ],
	[ 4, 28, 45 ],
	[ 66 ],
	[ 26, 98 ],
	[ 44, 25, 48 ],
	[],
	[ 12 ],
	[ 29, 42, 26 ],
	[ 72 ] ];

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
