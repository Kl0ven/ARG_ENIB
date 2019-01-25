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
	setInterval(refreshACI, 10000);
});

function refreshACI () {
	$.ajax({
		url: './F704F7C577D67AC8BFDF3EC16343365CB41AB3059DB8A2922C27D89AA2B079A350EDC8BB53D3388222F262290826EE02E99F58E865E232AA5BF3A23A0B2FC3F8',
		type: 'POST',
		cache: false,
		contentType: 'application/json',
		success: function (mes) {
			console.log(mes);
			$('#pendingN').text(mes.pending);
			$('#sessionN').text(mes.session);
		},
		error: function (e) {
			log('Failure', 'Server not responding.', 'danger');
		}
	});
}

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
				log('Failure', 'Server return wrong status.', 'danger');
			}
			$('#count').text(mes.count);
		},
		error: function (e) {
			log('Failure', 'Server not responding.', 'danger');
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
					log('Sucess', 'Changes saved', 'success');
				} else {
					log('Failure', 'Server return wrong status.', 'danger');
				}
				$('#count').text(mes.count);
			},
			error: function (e) {
				log('Failure', 'Server not responding.', 'danger');
			}
		});
	}

	$('#exampleModal').modal('hide');
}

function log (prefix, message, type) {
	let id = ID();
	$('#logmes').prepend('<div id="' + id + '" class="alert alert-' + type + ' alert-dismissible fade show" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>' + prefix + '</strong>  ' + message + '</div>');
	setTimeout(() => { $('#' + id).fadeOut(100, () => { $('#' + id).remove(); }); }, 10000);
}

var ID = function () {
	// Math.random should be unique because of its seeding algorithm.
	// Convert it to base 36 (numbers + letters), and grab the first 9 characters
	// after the decimal.
	return '_' + Math.random().toString(36).substr(2, 9);
};
