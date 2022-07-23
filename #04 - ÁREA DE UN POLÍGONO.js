/*
 * Reto #4
 * ÁREA DE UN POLÍGONO
 * Fecha publicación enunciado: 24/01/22
 * Fecha publicación resolución: 31/01/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea UNA ÚNICA FUNCIÓN (importante que sólo sea una) que sea capaz de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 *
 */

/*let polygon = (
    { type: 'triangle', base: 10.0, height: 5.0 },
    { type: 'rectangle', length: 5.0, width: 7.0 },
    { type: 'square', side: 4.0 }
);
*/

class Triangle {
    constructor(base, height) {
        this.base = base;
        this.height = height;
    }
    // getter
    get area() {
        return this.calcArea();
    }
    // método
    calcArea() {
        return (this.base * this.height) / 2;
    }
}

let triangle = new Triangle(10, 5);
console.log(triangle.area);

class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
    // getter
    get area() {
        return this.calcArea();
    }
    // método
    calcArea() {
        return this.length * this.width;
    }
}

let rectangle = new Rectangle(5, 7)
console.log(rectangle.area);

class Square {
    constructor(side) {
        this.side = side;
    }
    // getter
    get area() {
        return this.calcArea();
    }
    // método
    calcArea() {
        return this.side * this.side;
    }
}

let square = new Square(4);
console.log(square.area);