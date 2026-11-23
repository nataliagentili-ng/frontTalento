import {obtenerCarrito} from "./storage.js";
import {actualizarContadorCarrito} from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
    const carrito = obtenerCarrito();
    actualizarContadorCarrito(carrito);
});