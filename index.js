class Polygon {
    constructor(sides) {
        this.sides = sides
    }
    get countSides() {
        return this.sides.length
    }

    get perimeter() {

    }
}

class Triangle extends Polygon {

}

class Square extends Polygon {
    
}