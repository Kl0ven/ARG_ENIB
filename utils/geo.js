
function isInRectangle (rLatA, rLonA, rLatB, rLonB, lat, lon) {
	let latMin = Math.min(rLatA, rLatB);
	let latMax = Math.max(rLatA, rLatB);
	let lonMin = Math.min(rLonA, rLonB);
	let lonMax = Math.max(rLonA, rLonB);
	let good = false;
	if (lat >= latMin && lat <= latMax) {
		if (lon >= lonMin && lon <= lonMax) {
			good = true;
		}
	}
	return good;
}

module.exports = {
	isInRectangle: isInRectangle
};
