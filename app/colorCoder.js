const MajorColorNames = ["WHITE", "RED", "BLACK", "YELLOW", "VIOLET"];
const MinorColorNames = ["BLUE", "ORANGE", "GREEN", "BROWN", "SLATE"];

class ColorPair {
  constructor(majorColor, minorColor) {
    this.majorColor = majorColor;
    this.minorColor = minorColor;
  }

  toString() {
    return `MajorColor:${this.majorColor},MinorColr:${this.minorColor}`;   

  }
}

module.exports = {
  MajorColorNames,
  MinorColorNames,
  ColorPair,
};
