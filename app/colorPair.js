const majorColorMap = new Map(MajorColorNames.map((color, index) => [color, index]));
const minorColorMap = new Map(MinorColorNames.map((color, index) => [color, index]));

function getPairNumberFromColor(pair) {
    const majorIndex = majorColorMap.get(pair.majorColor);
    const minorIndex = minorColorMap.get(pair.minorColor);

    if (majorIndex === undefined || minorIndex === undefined) {
        throw `Unknown Colors:${pair.toString()}`;
    }

    return (majorIndex * MinorColorNames.length) + (minorIndex + 1);
}
