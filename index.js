class Polygon {
    constructor(integers) {
        this.sides = integers
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        return this.sides.reduce((a, b) => a + b, 0);
    }
}

class Triangle extends Polygon {
    get isValid(){
        let nums = this.sides;
        if (nums[0] + nums[1] > nums[2] && nums[0] + nums[2] > nums[1] && nums[1] + nums[2] > nums[0]) {
            return true
        }
        else {
            return false
        }
    }
}

class Square extends Polygon {
    get isValid() {
        let nums = this.sides;
        if (nums[0] === nums[1] && nums[1] === nums[2] && nums[2] === nums[3]) {
            return true;
        } else {
            return false;
        }
    }

    get area() {
        let nums = this.sides;
        return nums[0] * nums[1];
    }
}