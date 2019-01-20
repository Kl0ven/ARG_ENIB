/* eslint no-unused-vars: "off" */
/* global $:true $this:true */

function sendRep () {
	let data = {};
	$('form#repfrom :input').each(function () {
		data[$(this).attr('id')] = $(this).val();
	});
	data.url = window.location.pathname;

	$this = $('#sendMessageButton');
	$this.prop('disabled', true); // Disable submit button until AJAX call is complete to prevent duplicate messages
	$.ajax({
		url: './verify',
		type: 'POST',
		data: JSON.stringify(data),
		cache: false,
		contentType: 'application/json',
		success: function (mes) {
			if (mes.status) {
				$('#winningModalLabel').text('Félicitations');
				$('#modaltext').html(mes.text);
				let url = window.location.protocol + '//' + window.location.host + '/' + mes.url;
				$('#nextstep').html('<a target="_blank" href="' + url + '" class="watchme">Prochaine étape !</a>');
				$('#idunique').val(mes.id);
				$('#winningModal').modal();
			} else {
				// display wrong status
				$('#success').append("<div class='alert alert-danger'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button><strong>Désolé, mauvaise réponse :(</strong></div>");
				// clear all fields
				// $('#repfrom').trigger('reset');
			}
		},
		error: function (e) {
			// Fail message
			$('#success').append("<div class='alert alert-danger'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button><strong>Sorry , it seems that the server is not responding. Please try again later!</strong></div>");
			// clear all fields
			// $('#repfrom').trigger('reset');
		},
		complete: function () {
			setTimeout(function () {
				$this.prop('disabled', false); // Re-enable submit button when AJAX call is complete
			}, 1000);
		}
	});
}

function sendWinnerName () {
	if (!$('#winnername')[0].checkValidity()) {
		$('#winnersuccess').html("<div class='alert alert-danger'>");
		$('#winnersuccess > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
		.append('</button>');
		$('#winnersuccess > .alert-danger').append($('<strong>').text('Please fill your name'));
		$('#winnersuccess > .alert-danger').append('</div>');
		return;
	}
	let data = {};
	$('#formwinner :input').each(function () {
		data[$(this).attr('id')] = $(this).val();
	});
	data.url = window.location.pathname;
	$this = $('#sendWinnerbtn');
	$this.prop('disabled', true); // Disable submit button until AJAX call is complete to prevent duplicate messages
	$.ajax({
		url: './savewinner',
		type: 'POST',
		data: JSON.stringify(data),
		cache: false,
		contentType: 'application/json',
		success: function (mes) {
			// Fail message
			$('#winnersuccess').html("<div class='alert alert-success'>");
			$('#winnersuccess > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
			.append('</button>');
			$('#winnersuccess > .alert-success').append($('<strong>').text('Ton nom est gravé à jamais !'));
			$('#winnersuccess > .alert-success').append('</div>');
			$('#sendWinnerbtn').hide();
			$('#formwinner').hide();
		},
		error: function (e) {
			// Fail message
			$('#winnersuccess').html("<div class='alert alert-danger'>");
			$('#winnersuccess > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
			.append('</button>');
			$('#winnersuccess > .alert-danger').append($('<strong>').text('Désolé, petit problème de serveur, rééssayez plus tard'));
			$('#winnersuccess > .alert-danger').append('</div>');
		},
		complete: function () {
			setTimeout(function () {
				$this.prop('disabled', false); // Re-enable submit button when AJAX call is complete
			}, 1000);
		}
	});
}
