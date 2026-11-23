import { obtenerCarrito } from "./storage.js";
import { eliminarDelCarrito, vaciarCarrito } from "./funcionesCarrito.js";
import { actualizarContadorCarrito } from "./ui.js";


const renderizarCarrito = () => {
    const carrito = obtenerCarrito();
    actualizarContadorCarrito(carrito);

    const contenedorCarrito = document.getElementById("contenedor-carrito");
    const accionesCarrito = document.getElementById("acciones-carrito");

    contenedorCarrito.innerHTML = "";
    accionesCarrito.innerHTML = "";

    if (!carrito.length) {
        const mensajeVacio = document.createElement("p");
        mensajeVacio.textContent = "El carrito está vacío.";
        contenedorCarrito.appendChild(mensajeVacio);
        return;
    }
    carrito.forEach((producto, index) => {
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("tarjeta");

        const nombre = document.createElement("h3");
        nombre.textContent = producto.nombre;


        const imagen = document.createElement("img");
        imagen.src = `../${producto.foto}`;
        imagen.classList.add("imagen-producto");
        imagen.alt = `Imagen de ${producto.nombre}`;


        const detalle = document.createElement("p");
        detalle.textContent = producto.detalle;


        const precio = document.createElement("p");
        precio.textContent = `$${producto.precio}`;


        const botonEliminar = document.createElement("button");
        botonEliminar.classList.add("boton-agregar");
        botonEliminar.textContent = "Eliminar del carrito";
        
        botonEliminar.addEventListener("click", () => {
            eliminarDelCarrito(index);
            renderizarCarrito();
        });
        contenedorCarrito.appendChild(tarjeta);
        tarjeta.appendChild(nombre);
        tarjeta.appendChild(imagen);
        tarjeta.appendChild(detalle);
        tarjeta.appendChild(precio);
        tarjeta.appendChild(botonEliminar);
    });

    const botonVaciar = document.createElement("button");
    botonVaciar.classList.add("boton-vaciar");
    botonVaciar.textContent = "Vaciar carrito";


    botonVaciar.addEventListener("click", () => {
        vaciarCarrito();
        renderizarCarrito();
    });
    accionesCarrito.appendChild(botonVaciar);
};

document.addEventListener("DOMContentLoaded", () => {
    renderizarCarrito();
});
//este evento espera que se termine de cargar el DOM para ejecutar la función renderizarProductos y actualizar el contador del carrito.