
export const actualizarContadorCarrito = (contador) => {
const contadorCarrito = document.getElementById('contador-carrito');
if (contadorCarrito) {
    contadorCarrito.textContent = contador.length || "";
}

};
export const mostrarMensaje=(mensaje) => {
    alert(mensaje);
};