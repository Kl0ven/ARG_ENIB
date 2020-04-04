
function isInRectangle (rLatA, rLonA, rLatB, rLonB, lat, lon) {
    const latMin = Math.min(rLatA, rLatB);
    const latMax = Math.max(rLatA, rLatB);
    const lonMin = Math.min(rLonA, rLonB);
    const lonMax = Math.max(rLonA, rLonB);
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
