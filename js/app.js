// Declaración de variables, constantes y arrays
const productos = [
    { nombre: "Ficus Rubi", precio: 35000 },
    { nombre: "Yuca Triple", precio: 18000 },
    { nombre: "Potus Baby", precio: 12000 },
    { nombre: "Sansevieria", precio: 5000 },
    { nombre: "Peperomia Tricolor", precio: 8000 },
    { nombre: "Strelitzia Mega", precio: 21000 },
    { nombre: "Monstera Deliciosa", precio: 20500 },
    { nombre: "Pilea", precio: 6500 },
    { nombre: "Croton Baby", precio: 10500 }
];

let carrito = [];
const IVA = 0.21;
const DESCUENTO_CANTIDAD = 5; 
const DESCUENTO_PORCENTAJE = 0.10; 

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
    if (productoEnCarrito && productoEnCarrito.cantidad > 1) {
        productoEnCarrito.cantidad--;
    } else if (productoEnCarrito && productoEnCarrito.cantidad === 1) {
        carrito = carrito.filter(item => item.nombre !== productoSeleccionado.nombre);
    }
    guardarCarrito();
    mostrarCarrito();
}

// Función para calcular el descuento
function calcularDescuento(total) {
    const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    if (cantidadTotal >= DESCUENTO_CANTIDAD) {
        return total * DESCUENTO_PORCENTAJE;
    }
    return 0;
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
    <p>Descuento más de 5 u (10%): $${descuento.toFixed(2)}</p>
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
    guardarCarrito();
    mostrarCarrito();
}

// Event Listener para los botones
document.querySelectorAll('.agregar-carrito').forEach(boton => {
    boton.addEventListener('click', (event) => {
        const index = event.target.getAttribute('data-producto');
        agregarAlCarrito(index);
    });
});

document.querySelectorAll('.disminuir-carrito').forEach(boton => {
    boton.addEventListener('click', (event) => {
        const index = event.target.getAttribute('data-producto');
        disminuirCantidad(index);
    });
});

// Event Listener para vaciar el carrito
document.getElementById('vaciar-carrito').addEventListener('click', () => {
    vaciarCarrito();
});

// Función para manejar el clic en el botón "Finalizar compra"
function finalizarCompra() {
    const listaCarrito = document.getElementById('lista-carrito');
    
    if (carrito.length === 0) {
        listaCarrito.innerHTML = 'El carrito está vacío';
    } else {
        vaciarCarrito();
        listaCarrito.innerHTML = 'Gracias por tu compra!';
    }
}

// Event Listener para el botón "Finalizar compra"
document.getElementById('finalizarCompra').addEventListener('click', () => {
    finalizarCompra();
});

// Inicializar la página
cargarCarrito();
mostrarCarrito();
