/* global $:true  confirm:true */
/* eslint no-unused-vars: "off" */
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

function resestAntiCheatId () {
	var txt;
	var r = confirm('Es tu sur de toi !');
	if (r === true) {
		$.ajax({
			url: './CDDB32DBE1A524A9501D5446B29523B16CCA8D9B0700749B5C645AB63C0C0112E93CA8FC50D5EE35045D7896ED9595B0F2A23033077D375A12214CFF15FDBB38',
			type: 'POST',
			cache: false,
			contentType: 'application/json',
			success: function (mes) {
				console.log(mes);
				if (mes.status) {
					$('#logmes').append('<div class="alert alert-success alert-dismissible fade show" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>Sucess</strong> Id older than 6 hours have been deleted.</div>');
				} else {
					$('#logmes').append('<div class="alert alert-danger alert-dismissible fade show" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>Failure</strong> Server return wrong status.</div>');
				}
				$('#count').text(mes.count);
			},
			error: function (e) {
				$('#logmes').append('<div class="alert alert-danger alert-dismissible fade show" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>Failure</strong> Server not responding.</div>');
			}
		});
	}
}
