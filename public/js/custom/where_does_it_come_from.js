/* global $:true  */

$('document').ready(() => {
	// Get the modal
	var modal = $('#wdicfphotomodal');

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var img = $('#wdicfphoto');
	var modalImg = $('#wdicfphoto1');
	img.click(function () {
		modal.css('display', 'block');
		modalImg.attr('src', this.src);
	});

	// Get the <span> element that closes the modal
	var span = $($('.wdicfclose')[0]);

	// When the user clicks on <span> (x), close the modal
	span.click(function () {
		modal.css('display', 'none');
	});
});
