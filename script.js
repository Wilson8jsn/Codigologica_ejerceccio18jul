function Punto(x, y) {
  this.x = x;
  this.y = y;

  this.suma = function(punto) {
    const nuevaX = this.x + punto.x;
    const nuevaY = this.y + punto.y;
    return new Punto(nuevaX, nuevaY);
  };

  this.toString = function() {
    return `(${this.x},${this.y})`;
  };
}

const p1 = new Punto(1, 2);
const p2 = new Punto(2, 3);
const resultado = p1.suma(p2).toString();
console.log(resultado); // Output (3,5)
