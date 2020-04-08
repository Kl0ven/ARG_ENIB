/* global $:true   */

$('document').ready(() => {
	var equation = '';
	$('.sortable').sortable({
		start: function (event, ui) {
		},
		stop: function (event, ui) {
			equation = '';
			$('#equation li').each(function (i) {
				equation += $(this).text();
				$('#evalequation').val(equation);
			});
		},
		change: function (event, ui) {
		},
		connectWith: '.sortable'
	}).disableSelection();
});
