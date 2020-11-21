// Your code here

class Polygon {
  constructor(sideLengthsArray) {
    this.sides = sideLengthsArray;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce((acc, val) => acc + val);
  }
}

class Triangle extends Polygon {
  get isValid() {
    const threeSides = this.countSides === 3;
    const sideA = this.sides[0];
    const sideB = this.sides[1];
    const sideC = this.sides[2];
    return threeSides &&
      sideA + sideB > sideC &&
      sideB + sideC > sideA && 
      sideC + sideA > sideB
  }
}

class Square extends Polygon {
  get isValid() {
    const fourSides = this.countSides === 4;
    const fourEqualSides = this.sides.filter(e => e === this.sides[0]).length === 4;
    return fourSides && fourEqualSides;
  }
  get area() {
    return this.sides[0] * this.sides[1];
  }
}