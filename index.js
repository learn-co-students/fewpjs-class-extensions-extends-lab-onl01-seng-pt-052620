// Your code here
class Polygon {

    constructor(sides) {
        this.sides = sides;
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        const reducer = (accum, currentValue) => accum + currentValue;

        return this.sides.reduce(reducer)
    }
}

class Triangle extends Polygon {
    
    get isValid() {
        let combo1 = this.sides[0] + this.sides[1];
        let combo2 = this.sides[1] + this.sides[2];
        let combo3 = this.sides[0] + this.sides[2];

        
        if ((combo1 > this.sides[2]) && (combo2 > this.sides[0]) && (combo3 > this.sides[1]))
        {
            return true;
        }
        else
        {
            return false;
        }

    }
}

class Square extends Polygon {

    get isValid() {
        if ((this.sides[0] === this.sides[1]) && (this.sides[1] === this.sides[2]) && (this.sides[2] === this.sides[3]))
        {
            return true;
        }
        else 
        {
            return false;
        }
    }

    get area() {
        return this.sides[0] ** 2;
    }
    
}