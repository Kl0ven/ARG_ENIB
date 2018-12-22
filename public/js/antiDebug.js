/* global $:true performance:true  */

$('document').ready(() => {
	setInterval(function () {
		var startTime = performance.now();
		var check;
		var diff;
		for (check = 0; check < 1000; check++) {
			console.log(check);
			console.clear();
		}
		diff = performance.now() - startTime;
		if (diff > 200) {
			eval('debugger');
		}
	}, 500);
});
