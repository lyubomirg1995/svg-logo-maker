const {Shape, Triangle, Circle, Square} = require('./shapes')

describe('Shape',() => {
    it('display color of the shape', () => {
        const shape = new Shape()
        shape.setColor('blue');
        expect(shape.color).toEqual('blue')
    })
})

describe('Triangle',() => {
    it('should display a blue triangle', () => {
        const shape = new Triangle();
        shape.setColor('red')
        const expected = `<polygon points= "0,200 300,200 150,0" style="fill:red"/>`;
        expect(shape.render()).toEqual(expected)
    });
});

describe('Circle', () => {
    it('should display a green circle', () => {
        const shape = new Circle();
        shape.setColor('green');
        const expected = `circle cx= "150" cy= "100" r="80" style="fill:green"/>`
        expect(shape.render()).toEqual(expected)
    })
});

describe('Square', () => {
    it('should display a orange square', () => {
        const shape = new Square();
        shape.setColor('yellow');
        const expected = `rect x="50" y="40" width="200" height="120" style="fill:yellow"/>`
        expect(shape.render()).toEqual(expected)
    });
});

