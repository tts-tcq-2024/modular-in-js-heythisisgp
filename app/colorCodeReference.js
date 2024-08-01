// Import required components
const { MajorColorNames, MinorColorNames } = require('./colorCoder');
const { getColorFromPairNumber } = require('./colorPair');

// Function to print color code reference
function printColorCodeReference() {
    const totalPairs = MajorColorNames.length * MinorColorNames.length;
    for (let pairNumber = 1; pairNumber <= totalPairs; pairNumber++) {
        const colorPair = getColorFromPairNumber(pairNumber);
        console.log(`${pairNumber}: ${colorPair.toString()}`);
    }
}

// Export the function
module.exports = {
    printColorCodeReference
};
