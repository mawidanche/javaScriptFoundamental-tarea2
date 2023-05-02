import { Persona } from './src/model/Persona.js';
import { Producto } from './src/model/Producto.js';
import { Vehiculo } from './src/model/Vehiculo.js';

// Crea un array de objetos Persona
const personas = [
    new Persona("Juan", 30, "masculino"),
    new Persona("María", 25, "femenino"),
    new Persona("Pedro", 40, "masculino"),
    new Persona("Ana", 28, "femenino"),
];
console.log('Array personas: ',personas);
// Filtrar personas por género femenino
const personasFemeninas = personas.filter((persona) => persona.genero === "femenino");
console.log('Array personasFemeninas: ', personasFemeninas);
console.log(personasFemeninas);
// Ordenar personas por edad ascendente
const personasPorEdad = personas.sort((a, b) => a.edad - b.edad);
console.log('Array personasPorEdad: ',personasPorEdad);


//crea un array de objetos Producto
const productos = [
    new Producto('Producto 1', 100, 2, 0.1),
    new Producto('Producto 2', 50, 3),
    new Producto('Producto 3', 75, 1, 0.2),
];
// Calculos de total y descuentos aplicados
let precioTotal = 0;
let precioConDescuentoTotal = 0;
let descuentoTotal = 0;
for (const producto of productos) {
    precioTotal += producto.precioTotal();
    precioConDescuentoTotal += producto.precioConDescuento();
    descuentoTotal += producto.precioTotal() - producto.precioConDescuento();
}
console.log('El precio total de la compra es $'+precioTotal);
console.log('El precio total con descuento aplicado $'+precioConDescuentoTotal);
console.log('Se aplicó un descuento total de $'+descuentoTotal);


//crea un array de objetos Vehiculo
const vehiculos = [
    new Vehiculo('Ford', 'Mustang', 2020, 50000),
    new Vehiculo('Ford', 'Explorer', 2022, 30000),
    new Vehiculo('Toyota', 'Camry', 2021, 35000),
    new Vehiculo('Chevrolet', 'Camaro', 2019, 45000),
    new Vehiculo('Honda', 'Civic', 2020, 30000),
];

// Filtrar por marca
const vehiculosFord = vehiculos.filter((vehiculo) => vehiculo.marca === 'Ford');
console.log('Vehículos Ford:', vehiculosFord);

// Filtrar por modelo
const vehiculosCamaro = vehiculos.filter((vehiculo) => vehiculo.modelo === 'Camaro');
console.log('Vehículos Camaro:', vehiculosCamaro);

// Filtrar por año
const vehiculos2020 = vehiculos.filter((vehiculo) => vehiculo.año === 2020);
console.log('Vehículos 2020:', vehiculos2020);

// Ordenar por precio de menor a mayor
const vehiculosOrdenadosPorPrecio = vehiculos.sort((a, b) => a.precio - b.precio);
console.log('Vehículos ordenados por precio:', vehiculosOrdenadosPorPrecio);



/*
Crea una clase Vehiculo con propiedades como marca, modelo, año y precio.
A continuación, crea un array de objetos Vehiculo y utiliza métodos para filtrar el array por marca, modelo o año y ordenar por precio.

*/