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
			console.log(mes);
			// Success message
			$('#success').html("<div class='alert alert-success'>");
			$('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
			.append('</button>');
			$('#success > .alert-success')
			.append('<strong>Your message has been sent. </strong>');
			$('#success > .alert-success')
			.append('</div>');
			// clear all fields
			$('#contactForm').trigger('reset');
		},
		error: function (e) {
			// Fail message
			$('#success').html("<div class='alert alert-danger'>");
			$('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
			.append('</button>');
			$('#success > .alert-danger').append($('<strong>').text('Sorry , it seems that the server is not responding. Please try again later!'));
			$('#success > .alert-danger').append('</div>');
			// clear all fields
			$('#contactForm').trigger('reset');
		},
		complete: function () {
			setTimeout(function () {
				$this.prop('disabled', false); // Re-enable submit button when AJAX call is complete
			}, 1000);
		}
	});
}
