class Polygon {
  constructor(arrayOfInt) {
    this.arrayOfInt = arrayOfInt;

  }

  get countSides() {
    return this.arrayOfInt.length
  }

  get perimeter() {
    return this.arrayOfInt.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  }

}

class Triangle extends Polygon {

  get isValid() {
    if(this.arrayOfInt.length > 3) return;
    let [side1, side2, side3] = this.arrayOfInt
    return (side1 + side2 > side3) && (side1 + side2 > side3) && (side2 + side3 > side1)
  }

}

class Square extends Polygon {

  get isValid() {
    if(this.arrayOfInt.length > 4) return;
    let [side1, side2, side3, side4] = this.arrayOfInt
    return (side1 === side2) && (side1 === side3) && (side1 === side4)
  }

  get area() {
    if(this.arrayOfInt.length > 4) return;
    let [side1, side2, side3, side4] = this.arrayOfInt
    return side1 * side1
  }

}