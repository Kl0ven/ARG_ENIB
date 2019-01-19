/* global ConfettiGenerator:true   */

var confettiSettings = { target: 'my-canvas', rotate: true, max: 50, props: ['square', { 'type': 'svg', 'src': 'images/250px.svg' }], colors: [[0, 229, 11]] };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();
