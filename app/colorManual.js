const colorCoder = require('./colorCoder');
const ColorPair = require('./colorPair');

function printColorManual() {
    console.log("25-pair color code manual:");
    for (let i = 1; i <= 25; i++) {
        let pair = colorCoder.getColorFromPairNumber(i);
        console.log(`Pair ${i}: ${pair.majorColor} - ${pair.minorColor}`);
    }
}

module.exports = printColorManual;
