/* global $:true  */

$('document').ready(() => {
	let refreshRate = 1000;
	setInterval(update, refreshRate, refreshRate);
});

function update (elapse) {
	$('.updateTime').each(function (i) {
		let text = getDate(+$(this).attr('id'));
		$(this).text(text);
		$(this).attr('id', parseInt($(this).attr('id')) - elapse);
	});
}

function getDate (msec) {
	let day = Math.floor(msec / (24 * 3600 * 1000));
	let hours = Math.floor((msec % (24 * 3600 * 1000)) / (3600 * 1000));
	let minute = Math.floor((msec % (3600 * 1000)) / (60 * 1000));
	let sec = Math.floor((msec % (60 * 1000)) / (1000));
	let dayString = day !== 0 ? day + 'j ' : '';
	let hoursString = hours !== 0 ? hours + 'h ' : '';
	let minuteString = minute !== 0 ? minute + 'm ' : '';
	let secString = sec !== 0 ? sec + 's ' : '';
	return dayString + hoursString + minuteString + secString;
};
