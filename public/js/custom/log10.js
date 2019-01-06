/* global $:true */

$('document').ready(() => {
	let input = $('#flag');
	input.attr('size', 19);
	input.attr('maxlength', 19);
	input.attr('placeholder', 'XXXX-XXXX-XXXX-XXXX');
	let chunkSize = 4;
	$('#flag').on('input', function (event) {
		let backspace = event.originalEvent.inputType === 'deleteContentBackward';
		let text = $(this).val();
		text = text.replace(/[\W\s._-]+/g, '');
		let start = 0;
		let chunks = [];
		for (var i = 1; i < text.length; i++) {
			if (i % chunkSize === 0) {
				chunks.push(text.substring(start, i));
				start = i;
			}
		}
		if (start !== text.length) {
			chunks.push(text.substring(start, text.length));
		}
		if ((text.length === 4 || text.length === 8 || text.length === 12) && !backspace) {
			console.log('trig');
			chunks.push('');
		}
		$(this).val(chunks.join('-'));
	});
});
