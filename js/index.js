import { agregarAlCarrito } from "./funcionesCarrito.js";
import{obtenerCarrito} from "./storage.js";
import {actualizarContadorCarrito} from "./ui.js";

const renderizarProductos = () => {
    const contenedorTarjetas = document.getElementById("contenedor-tarjetas");
   
    fetch('./data/productos.json')
        .then(response => response.json())
        .then(data => {
        
            data.forEach((producto) => {
            const tarjeta = document.createElement("article");
            tarjeta.classList.add("tarjeta");

            const nombre = document.createElement("h3");
            nombre.textContent = producto.nombre;

            const imagen = document.createElement("img");
            imagen.src = `./${producto.foto}`;
            imagen.classList.add("imagen-producto");
            imagen.alt = `Imagen de ${producto.nombre}`;

            const detalle = document.createElement("p");
            detalle.textContent = producto.detalle;
            
            const precio = document.createElement("p");
            precio.classList.add("precio");
            precio.textContent = `$${producto.precio}`;

            const botonAgregar = document.createElement("button");
            botonAgregar.classList.add("boton-agregar");
            botonAgregar.textContent = "Agregar al carrito";

            botonAgregar.addEventListener("click", () => {
                agregarAlCarrito(producto);
            });
            contenedorTarjetas.appendChild(tarjeta);
            tarjeta.appendChild(nombre);
            tarjeta.appendChild(imagen);
            tarjeta.appendChild(detalle);
            tarjeta.appendChild(precio);
            tarjeta.appendChild(botonAgregar);
        });
    })
        .catch(error => console.error("Error al cargar los productos:", error));
};
//este evento espera que se termine de cargar el DOM para ejecutar la función renderizarProductos y actualizar el contador del carrito
document.addEventListener("DOMContentLoaded", () => {
    const carrito = obtenerCarrito();
    actualizarContadorCarrito(carrito);
    renderizarProductos();
});
        

