class Shape {
    constructor() {
        this.color = ''
    }

    setColor(color) {
        this.color = color
    }
}
//returns dimension of each shape
class Triangle extends Shape {
    render() {
        return `<polygon points= "0,200 300,200 150,0" style="fill:${this.color}"/>`
    }
}

class Circle extends Shape { 
    render() {
        return `<circle cx= "150" cy= "100" r="80" style="fill:${this.color}"/>`
    }
}

class Square extends Shape {
    render() {
        return `<rect x="50" y="40" width="200" height="120" style="fill:${this.color}"/>`
    }
}

module.exports = {Shape, Triangle, Circle, Square} // setup for exporting code logic to other .js files