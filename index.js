// Your code here

class Polygon {
  constructor(arr){
    this.arr = arr
  }
  get countSides(){
    return parseInt(`${this.arr.length}`)
  }
  get perimeter(){
    let perimeter = this.arr.reduce((acc,av)=> acc +av);
    return perimeter;
  }
}

class Triangle extends Polygon{
get isValid(){
   this.first= this.arr[0]
  this.second = this.arr[1]
  this.third = this.arr[2]

   this.first_second = this.first + this.second
  this.first_third = this.first + this.third
  this.second_third = this.second + this.third
  if (this.first_second > this.third && this.first_third >this.second && this.second_third >this.first  )
       {return true}
    else
       {return false}
}
}


class Square extends Polygon {
  get isValid(){

  if (this.countSides === 4){
    if(this.arr[0] == this.arr[1] && this.arr[2]==this.arr[3]) {
      return true
    }
    else{
      return false
    }
  }


  }

get area() {
  if (this.countSides===4){
    return this.arr[0] *this.arr[0]
  }
}
}
