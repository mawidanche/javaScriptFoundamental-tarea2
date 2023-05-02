//Crea una clase Producto con propiedades como nombre, precio, cantidad y descuento.
export class Producto {
    nombre;
    precio;
    cantidad;
    descuento;
    constructor(nombre, precio, cantidad, descuento) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.descuento = descuento || 0; // si no se especifica el descuento, se asume que es 0 se consideran porcentajes de descuento
    }

    //calcular el precio total
    precioTotal() {
        return this.precio * this.cantidad;
    }

    //aplicar descuentos
    precioConDescuento() {
        return this.precioTotal() * (1 - this.descuento);
    }
}