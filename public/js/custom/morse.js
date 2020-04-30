/* eslint no-unused-vars: "off" */
/* global $:true alert:true */

function blinkLedRecursive (led, sequence, index) {
    let ledDelay = 700;
    if ($(led).is(':visible')) {
        $(led).hide();
        if (index >= sequence.length) {
            index = 0;
            ledDelay = 5000;
        }
    } else {
        $(led).show();
        if (sequence[index++] < 50) ledDelay = 250;
    }
    setTimeout(blinkLedRecursive.bind(null, led, sequence, index), ledDelay);
}

$(document).ready(function () {
    const color = ['green', 'orange', 'red', 'purple', 'blue'];
    const ledSequence = [
        [49, 12, 49],
        [21, 50],
        [89, 5, 24, 1],
        [61, 97, 80],
        [94],
        [13],
        [69, 60, 11, 44],
        [48, 72, 46, 43],
        [31],
        [58, 30],
        [84, 65, 52],
        [17, 72, 22, 22],
        [29, 5],
        [79, 69],
        [4, 22],
        [96]
    ];

    for (let i = 0; i < ledSequence.length; i++) {
        const randColor = color[Math.floor(Math.random() * color.length)];
        // eslint-disable-next-line max-len
        $('#fill').append(`<div class="arg-led-container"><div class="arg-led-border arg-dark-` + randColor + `"><div id="green-led-` + i + `" class="arg-led arg-` + randColor + `"></div></div></div>`);
        setTimeout(() => {
            $('#green-led-' + i).hide();
            if (ledSequence[i].length !== 0) {
                blinkLedRecursive($('#green-led-' + i), ledSequence[i], 0);
            }
        }, 100);
    }
});
