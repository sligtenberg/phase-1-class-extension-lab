// Your code here

class Polygon {
    constructor(sides) {
        this.sides = sides
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce((accumulator, value) => accumulator + value, 0)
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides !== 3) return false
        if (this.sides[0] >= this.sides[1] + this.sides[2]) return false
        if (this.sides[1] >= this.sides[2] + this.sides[0]) return false
        if (this.sides[2] >= this.sides[0] + this.sides[1]) return false
        return true
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.countSides !== 4) return false
        let returnValue = true
        this.sides.forEach(side => {
            if (side !== (this.perimeter / 4)) returnValue = false
        })
        return returnValue
    }

    get area() {
        return this.sides[0] * this.sides[0]
    }
}

const square = new Square([1, 2, 2, 2])

console.log(square.countSides)
console.log(square.perimeter)
console.log(square.isValid)