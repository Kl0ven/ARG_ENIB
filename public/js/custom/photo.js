/* global $:true   */

$('document').ready(() => {
    // Get the modal
    var modal = $('#wdicfphotomodal');

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = $('#wdicfphoto');
    var modalImg = $('#wdicfphoto1');
    img.click(function () {
        modal.show();
        modalImg.attr('src', this.src);
    });

    // Get the <span> element that closes the modal
    var span = $($('.wdicfclose')[0]);

    // When the user clicks on <span> (x), close the modal
    span.click(function () {
        modal.hide();
    });
    $(document).mouseup(function (e) {
        let container = $('#wdicfphoto1');
        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            modal.hide();
        }
    });
});
