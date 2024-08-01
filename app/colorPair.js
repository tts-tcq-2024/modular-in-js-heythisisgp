// Import necessary components from color_codes.js
const { MajorColorNames, MinorColorNames, ColorPair } = require('./color_codes');

// Function to get color from pair number
function getColorFromPairNumber(pairNumber) {
    const minorSize = MajorColorNames.length;
    const majorIndex = Math.floor((pairNumber - 1) / minorSize);
    const minorIndex = (pairNumber - 1) % minorSize;
    return new ColorPair(MajorColorNames[majorIndex], MinorColorNames[minorIndex]);
}

// Function to get pair number from color
function getPairNumberFromColor(colorPair) {
    const majorIndex = MajorColorNames.indexOf(colorPair.majorColor);
    const minorIndex = MinorColorNames.indexOf(colorPair.minorColor);
    return majorIndex * MinorColorNames.length + minorIndex + 1;
}

// Export the functions
module.exports = {
    getColorFromPairNumber,
    getPairNumberFromColor
};
