// Variables y constantes
let productos = [];
let carrito = [];
const IVA = 0.21;
const DESCUENTO_CANTIDAD = 5;
const DESCUENTO_PORCENTAJE = 0.10;

// Función para cargar productos desde un archivo JSON
async function cargarProductos() {
    try {
        const response = await fetch('../data/productos.json');
        if (!response.ok) throw new Error('Error al cargar los productos');
        productos = await response.json();
        mostrarProductos();
    } catch (error) {
        console.error('Error al cargar los productos:', error);
    }
}

// Función para mostrar los productos en la página
function mostrarProductos() {
    const listaProductos = document.getElementById('lista-productos');
    listaProductos.innerHTML = '';
    productos.forEach((producto, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${producto.nombre} - $${producto.precio.toFixed(2)}
            <button class="agregar-carrito" data-producto="${index}">Agregar</button>
            <button class="disminuir-carrito" data-producto="${index}">Disminuir</button>
        `;
        listaProductos.appendChild(li);
    });
}

// Función para agregar productos al carrito
function agregarAlCarrito(index) {
    const productoSeleccionado = productos[index];
    const productoEnCarrito = carrito.find(item => item.nombre === productoSeleccionado.nombre);
    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else {
        carrito.push({ ...productoSeleccionado, cantidad: 1 });
    }
    guardarCarrito();
    mostrarCarrito();
}

// Función para disminuir la cantidad de productos en el carrito
function disminuirCantidad(index) {
    const productoSeleccionado = productos[index];
    const productoEnCarrito = carrito.find(item => item.nombre === productoSeleccionado.nombre);
    if (productoEnCarrito) {
        if (productoEnCarrito.cantidad > 1) {
            productoEnCarrito.cantidad--;
        } else {
            carrito = carrito.filter(item => item.nombre !== productoSeleccionado.nombre);
        }
        guardarCarrito();
        mostrarCarrito();
    }
}

// Función para calcular el descuento
function calcularDescuento(total) {
    const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    return cantidadTotal >= DESCUENTO_CANTIDAD ? total * DESCUENTO_PORCENTAJE : 0;
}

// Función para mostrar el carrito
function mostrarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = '';
    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - ${item.cantidad} unidades - $${(item.precio * item.cantidad).toFixed(2)}`;
        listaCarrito.appendChild(li);
    });

    const total = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
    const descuento = calcularDescuento(total);
    const totalConDescuento = total - descuento;
    const totalConIVA = totalConDescuento * (1 + IVA);

    document.getElementById('total').innerHTML = `
        <p>Total sin IVA: $${total.toFixed(2)}</p>
        <p>Descuento más de ${DESCUENTO_CANTIDAD} u (${(DESCUENTO_PORCENTAJE * 100).toFixed(0)}%): $${descuento.toFixed(2)}</p>
        <p>Total con descuento: $${totalConDescuento.toFixed(2)}</p>
        <p>Total con IVA: $${totalConIVA.toFixed(2)}</p>`;
}

// Función para guardar el carrito en localStorage
function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Función para cargar el carrito desde localStorage
function cargarCarrito() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
        mostrarCarrito();
    }
}

// Función para vaciar el carrito
function vaciarCarrito() {
    carrito = [];
    localStorage.removeItem('carrito'); 
    mostrarCarrito();
}

// Función para validar el formulario de compra
function validarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const direccion = document.getElementById('direccion').value;
    const telefono = document.getElementById('telefono').value;

    const nombreValido = /^[A-Za-z\s]+$/.test(nombre);
    const direccionValida = /[A-Za-z]/.test(direccion);
    const telefonoValido = /^\d+$/.test(telefono);

    let esValido = true;

    // Validar nombre
    if (!nombreValido) {
        document.getElementById('nombre').classList.add('is-invalid');
        esValido = false;
    } else {
        document.getElementById('nombre').classList.remove('is-invalid');
    }

    // Validar dirección
    if (!direccionValida) {
        document.getElementById('direccion').classList.add('is-invalid');
        esValido = false;
    } else {
        document.getElementById('direccion').classList.remove('is-invalid');
    }

    // Validar teléfono
    if (!telefonoValido) {
        document.getElementById('telefono').classList.add('is-invalid');
        esValido = false;
    } else {
        document.getElementById('telefono').classList.remove('is-invalid');
    }

    return esValido;
}

// Función para finalizar la compra y mostrar el formulario
function confirmarCompra() {
    const formularioCompra = document.getElementById('formulario-compra');
    if (carrito.length === 0) {
        mostrarCarritoVacio(); 
    } else {
        formularioCompra.classList.remove('d-none');
    }
}

// Función para mostrar un mensaje de agradecimiento con SweetAlert2
function mostrarMensajeDeAgradecimiento() {
    Swal.fire({
        title: '¡Gracias por tu compra!',
        text: '¡Esperamos verte de nuevo pronto!',
        icon: 'success',
        confirmButtonText: 'Aceptar',
        customClass: {
            confirmButton: 'btn btn-primary'
        }
    });
}

// Función para mostrar un mensaje de carrito vacío con SweetAlert2
function mostrarCarritoVacio() {
    Swal.fire({
        title: 'Carrito vacío',
        text: 'No has agregado ningún producto aún.',
        icon: 'warning',
        confirmButtonText: 'Aceptar',
        customClass: {
            confirmButton: 'btn btn-warning'
        }
    });
}

// Lógica del formulario de compra
document.addEventListener('DOMContentLoaded', () => {
    const formularioCompra = document.getElementById('formulario-compra');
    const formulario = document.getElementById('formulario');
    const confirmarCompraBtn = document.getElementById('confirmarCompra');
    const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

    // Mostrar formulario de compra solo si hay productos en el carrito
    function checkCarrito() {
        if (carrito.length > 0) {
            formularioCompra.classList.remove('d-none');
        } else {
            formularioCompra.classList.add('d-none');
        }
    }

    // Validar formulario
    formulario.addEventListener('submit', async function (event) {
        event.preventDefault();
        if (!validarFormulario()) {
            event.stopPropagation();
            formulario.classList.add('was-validated');
        } else {
            try {
                // Simulando una solicitud a un servidor
                await new Promise(resolve => setTimeout(resolve, 1000));
                mostrarMensajeDeAgradecimiento();
                vaciarCarrito();
                formularioCompra.classList.add('d-none');
            } catch (error) {
                console.error('Error al procesar la compra:', error);
            }
        }
    });

    // Manejo de eventos
    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('agregar-carrito')) {
            const index = event.target.getAttribute('data-producto');
            agregarAlCarrito(parseInt(index));
        }

        if (event.target.classList.contains('disminuir-carrito')) {
            const index = event.target.getAttribute('data-producto');
            disminuirCantidad(parseInt(index));
        }

        if (event.target.id === 'vaciar-carrito') {
            vaciarCarrito();
        }

        if (event.target.id === 'confirmarCompra') {
            confirmarCompra();
        }
    });

    // Cargar productos y carrito
    cargarProductos();
    cargarCarrito();
    checkCarrito();
});
