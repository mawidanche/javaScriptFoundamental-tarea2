//Crea una clase Vehiculo con propiedades como marca, modelo, año y precio.
export class Vehiculo {
    marca;
    modelo;
    año;
    precio;

    constructor(marca, modelo, año, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.precio = precio;
    }
}