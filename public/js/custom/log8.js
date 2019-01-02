/* global $:true   */

$('document').ready(() => {
	var equation = '';
	$('.sortable').sortable({
		start: function (event, ui) {
		},
		stop: function (event, ui) {
			console.log('stop');
			equation = '';
			$('#equation li').each(function (i) {
				equation += $(this).text();
				console.log(equation);
				$('#evalequation').val(equation);
			});
		},
		change: function (event, ui) {
		},
		connectWith: '.sortable'
	}).disableSelection();
});
