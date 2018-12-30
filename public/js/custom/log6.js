/* eslint no-unused-vars: "off" */
/* global $:true alert:true ctx:true canvas:true canvas1:true canvas2:true canvas3:true output:true  */
let ctx1, ctx2, ctx3;

function drawGradient () {
	let grd = ctx.createLinearGradient(0, 0, canvas.width, 0);
	grd.addColorStop(0, 'rgba(255, 0, 0, 1)');
	grd.addColorStop(0.2, 'rgba(255, 255, 0, 1)');
	grd.addColorStop(0.4, 'rgba(0, 255, 0, 1)');
	grd.addColorStop(0.6, 'rgba(0, 255, 255, 1)');
	grd.addColorStop(0.8, 'rgba(0, 0, 255, 1)');
	grd.addColorStop(1, 'rgba(255, 0, 255, 1)');
	ctx.rect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = grd;
	ctx.fill();
}

function drawSlidersStripes () {
	let x1 = document.getElementById('firstSlider').value;
	drawStripe(x1);
	let x2 = document.getElementById('secondSlider').value;
	drawStripe(x2);
}

function drawStripe (x) {
	ctx.fillStyle = 'rgba(0,0,0,0.50)';
	ctx.fillRect(x - 2, 0, 2, canvas.height);
}

function onSliderChange () {
	drawGradient();
	drawSlidersStripes();
	getBlend();
}

function getBlend () {
	let firstSliderPosition = document.getElementById('firstSlider').value;
	let secondSliderPosition = document.getElementById('secondSlider').value;

	ctx1.fillStyle = rainbow(firstSliderPosition);
	ctx2.fillStyle = rainbow(secondSliderPosition);
	ctx1.fillRect(0, 0, canvas1.width, canvas1.height);
	ctx2.fillRect(0, 0, canvas2.width, canvas2.height);

	let firstSliderHSV = firstSliderPosition / 500.0 * 0.85;
	let secondSliderHSV = secondSliderPosition / 500.0 * 0.85;
	let firstData = HSVtoRGB(firstSliderHSV, 1.0, 1.0);
	let secondData = HSVtoRGB(secondSliderHSV, 1.0, 1.0);
	// console.log(firstData, secondData);
	let blendData = [Math.round(Math.min((firstData.r + secondData.r) / 2, 255)), Math.round(Math.min((firstData.g + secondData.g) / 2, 255)), Math.round(Math.min((firstData.b + secondData.b) / 2, 255))];
	ctx3.fillStyle = 'rgb(' + blendData[0] + ',' + blendData[1] + ',' + blendData[2] + ')';
	ctx3.fillRect(0, 0, canvas3.width, canvas3.height);
	output.value = '#' + toHex(blendData[0]) + toHex(blendData[1]) + toHex(blendData[2]);
}

function HSVtoRGB (h, s, v) {
	let r, g, b, i, f, p, q, t;
	if (arguments.length === 1) {
		s = h.s; v = h.v; h = h.h;
	}
	i = Math.floor(h * 6);
	f = h * 6 - i;
	p = v * (1 - s);
	q = v * (1 - f * s);
	t = v * (1 - (1 - f) * s);
	switch (i % 6) {
		case 0: r = v; g = t; b = p; break;
		case 1: r = q; g = v; b = p; break;
		case 2: r = p; g = v; b = t; break;
		case 3: r = p; g = q; b = v; break;
		case 4: r = t; g = p; b = v; break;
		case 5: r = v; g = p; b = q; break;
	}
	return {
		r: Math.round(r * 255),
		g: Math.round(g * 255),
		b: Math.round(b * 255)
	};
}

function toHex (d) {
	let h = d.toString(16);
	if (h.length < 2) {
		h = '0' + h;
	}
	return h;
}

function rainbow (p) {
	var rgb = HSVtoRGB(p / 500.0 * 0.85, 1.0, 1.0);
	return 'rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ')';
}

$(document).ready(function () {
	// alert('custom js');
	let canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');
	let canvas1 = document.getElementById('canvas1');
	ctx1 = canvas1.getContext('2d');
	let canvas2 = document.getElementById('canvas2');
	ctx2 = canvas2.getContext('2d');
	let canvas3 = document.getElementById('canvas3');
	ctx3 = canvas3.getContext('2d');

	let output = document.getElementById('output');

	onSliderChange();
});
