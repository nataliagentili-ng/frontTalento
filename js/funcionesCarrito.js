import { obtenerCarrito, guardarCarrito, vaciarCarritoStorage } from "./storage.js";
import { actualizarContadorCarrito,mostrarMensaje } from "./ui.js";

export const agregarAlCarrito = (producto) => {
    const carrito = obtenerCarrito();
    carrito.push(producto);
    // Guardar el carrito actualizado en el almacenamiento local
    guardarCarrito(carrito);
    actualizarContadorCarrito(carrito);
    mostrarMensaje("Producto agregado al carrito");
}
export const eliminarDelCarrito = (productoId) => {
    const carrito = obtenerCarrito();
    carrito.splice(productoId, 1);
    // Guardar el carrito actualizado en el almacenamiento local
    guardarCarrito(carrito);
    actualizarContadorCarrito(carrito);
    mostrarMensaje("Producto eliminado del carrito");
}
export const vaciarCarrito = () => {
    const confirmacion = confirm("¿Estás seguro de que deseas vaciar el carrito?");
    if (confirmacion) {
        vaciarCarritoStorage();
        actualizarContadorCarrito([]);
        mostrarMensaje("Carrito vaciado");
        return true;
    }else{
        mostrarMensaje("Operación cancelada");
    }
    
}