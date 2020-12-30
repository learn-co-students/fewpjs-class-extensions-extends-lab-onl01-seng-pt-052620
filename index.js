class Polygon{
    constructor(sides){
        this.sides = sides  
    }

    get countSides(){
        return this.sides.length 
    }

    get perimeter(){
       let total = this.sides.reduce((a, b) => {return a + b}, 0)
       return total 
        // return (this[side1] + this[side2] + this[side3]) 
    }
}

class Triangle extends Polygon{
    get isValid(){
        if(((this.sides[0] + this.sides[1]) > this.sides[2]) && (this.sides[0] < (this.sides[1] + this.sides[2])) && (this.sides[1] < (this.sides[0] + this.sides[2]))){
            return true
        } else { 
            return false 
        } 
    }
}

class Square extends Polygon{
    get isValid(){
        let check = !!this.sides.reduce(function(a, b){return (a === b) ? a : NaN;})
        return check
    }
    //     }
    //     if(this.sides[0] === this.sides[1] === this.sides[2] === this.sides[3]){
    //         return true
    //     } else {
    //         return false 
    //     }
    // }
    get area(){
        const sum = this.sides[0] * this.sides[0]
        return sum 
    }
}