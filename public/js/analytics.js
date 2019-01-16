/* global $:true  confirm:true */
/* eslint no-unused-vars: "off" */
$('document').ready(() => {
	$('.date').each(function (i) {
		// e[i].first_time_visited.toLocaleDateString('fr-FR') + ' ' + e[i].first_time_visited.toLocaleTimeString('fr-FR', { hour12: false })
		let date = new Date($(this).text());
		let dateString = date.toLocaleDateString('fr-FR') + ' ' + date.toLocaleTimeString('fr-FR', { hour12: false });
		$(this).text(dateString);
	});
	let refreshRate = 1000;
	setInterval(update, refreshRate, refreshRate);
});

function update (elapse) {
	$('.updateTime').each(function (i) {
		let text = getDate(+$(this).attr('id'));
		$(this).text(text);
		let remaining = parseInt($(this).attr('id')) - elapse;
		if (remaining >= 0) {
			$(this).attr('id', remaining);
		} else {
			$(this).text('Done');
			$(this).removeClass('updateTime');
		}
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

function fetchData (item) {
	$.ajax({
		url: './E349C2FE2560FBBD0EC052DDF37F91BC0C26C3B209FBC9D2FE62C818BD4BFABD6372EE5253A17F91FE834D0F5B50663F2650F71EB45EF3FB14B7EE9F88B117BD',
		type: 'POST',
		cache: false,
		data: JSON.stringify({id: item}),
		contentType: 'application/json',
		success: function (mes) {
			if (mes.status) {
				$('#exampleModalLabel').text(mes.name);
				if (mes.type === 'geo') {
					$('#geo_type_form').show();
					$('#flag_type_form').hide();
					$('#latA').val(mes.latA);
					$('#longA').val(mes.longA);
					$('#latB').val(mes.latB);
					$('#longB').val(mes.longB);
					$('#flag').val('');
				} else if (mes.type === 'flag') {
					$('#geo_type_form').hide();
					$('#flag_type_form').show();
					$('#flag').val(mes.flag);
					$('#latA').val('');
					$('#longA').val('');
					$('#latB').val('');
					$('#longB').val('');
				} else {
					$('#geo_type_form').hide();
					$('#flag_type_form').hide();
					$('#latA').val('');
					$('#longA').val('');
					$('#latB').val('');
					$('#longB').val('');
					$('#flag').val('');
				}
				$('#id').val(mes.id);
				$('#type').val(mes.type);
				$('#enigma_text').val(mes.enigma_text);
				$('#url').val(mes.url);
				$('#delay_to_hint').val(mes.delay_to_hint);
				$('#hint').val(mes.hint);
				$('#exampleModal').modal();
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

function saveData () {
	var txt;
	var r = confirm('Es tu sur de toi !');
	if (r === true) {
		let data = {};
		$('.form-control').each(function () {
			data[$(this).attr('id')] = $(this).val();
		});
		$.ajax({
			url: './B107665992B5EF53639F8127FD4D9FE3B85A21C5C82479952CF8868D6B3075E8B2BCA21B04B41561F3918E6AD5F69CCCF10A6857740840E7848A17E0EC9AC222',
			type: 'POST',
			cache: false,
			data: JSON.stringify(data),
			contentType: 'application/json',
			success: function (mes) {
				if (mes.status) {
					$('#logmes').append('<div class="alert alert-success alert-dismissible fade show" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>Sucess</strong> Changes saved</div>');
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

	$('#exampleModal').modal('hide');
}
