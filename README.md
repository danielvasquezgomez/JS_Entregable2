# Proyecto de Carrito de Compras - Bosque
(Para un correcto funcionamiento es necesario abrir el archivo con **LiveServer**)

Este proyecto es una aplicación web para gestionar un carrito de compras. Utiliza JavaScript, HTML y CSS para permitir a los usuarios agregar y disminuir productos, calcular el total con IVA y descuentos, y finalizar la compra. Incluye integración con SweetAlert2 para mostrar mensajes personalizados.

## Tabla de Contenidos

- [Descripción](#descripción)
- [Características](#características)
- [Tecnologías](#tecnologías)
- [Instalación](#instalación)
- [Uso](#uso)

## Descripción

Este proyecto es una aplicación de comercio electrónico que simula un carrito de compras. Los usuarios pueden agregar productos a su carrito, ajustar las cantidades, y ver el total con IVA y descuentos aplicados. También se proporciona retroalimentación visual y mensajes personalizados.

## Características

1. **Simulación de Carrito de Compras**:
   - Agregar y eliminar productos del carrito.
   - Aumentar o disminuir la cantidad de productos seleccionados.
   - Cálculos automáticos del total de la compra, incluyendo **IVA** y descuentos (10% en compras de 5 o más unidades de un mismo producto).

2. **Validación del Carrito**:
   - **Mensaje dinámico** cuando el carrito está vacío: *"No has agregado ningún producto aún"*, con estilo customizado.
   - Ocultamiento automático del formulario de compra si no hay productos en el carrito.

3. **Persistencia de Datos**:
   - Uso de `localStorage` para almacenar los productos seleccionados, permitiendo que el carrito permanezca accesible incluso al cerrar y volver a abrir la página.

4. **Fetch y JSON**:
   - **Fetch API** para cargar dinámicamente los productos desde un archivo JSON externo, utilizando `async/await` para una integración asíncrona fluida.
   - Manejo de errores con `try/catch` para garantizar que la aplicación siga funcionando sin fallos en caso de problemas con la carga de datos.

5. **Interactividad Mejorada**:
   - Feedback visual inmediato al agregar o disminuir productos.
   - Mensajes personalizados tras finalizar la compra, utilizando librerías externas como **SweetAlert** para mejorar la experiencia del usuario.
   - **Ventana de agradecimiento** personalizada tras finalizar la compra con un diseño acorde al estilo de la página.

6. **Programación Defensiva**:
   - Validación robusta de datos para evitar comportamientos inesperados en el flujo de trabajo.
   - Evitar errores en los cálculos relacionados con el carrito y la validación del formulario.

7. **Estilos Adaptativos (Mobile-first)**:
   - Diseño responsive utilizando la metodología **mobile-first** para asegurar que el carrito funcione correctamente en dispositivos móviles y de escritorio.


## Tecnologías

- **HTML**: Estructura de la página.
- **CSS**: Estilos personalizados con diseño minimalista y moderno.
- **JavaScript**: Lógica del carrito y validaciones.
  - **Fetch API**: Para obtener los productos desde un archivo JSON.
  - **localStorage**: Para guardar el estado del carrito de compras entre sesiones.
  - **DOM Manipulation**: Para la actualización dinámica del carrito de compras y el contenido de la página.
  - **Async/Await y Try/Catch**: Para manejar las operaciones asíncronas de manera más limpia y eficiente.
  - **SweetAlert**: Librería para mostrar mensajes modales personalizados al usuario.

## Instalación

1. Abre el proyecto con un servidor local. Usar [Live Server]

    - Abre Visual Studio Code.
    - Instala la extensión Live Server desde el Marketplace si aún no la tienes.
    - Haz clic derecho en el archivo `index.html` y selecciona "Open with Live Server".
    - Alternativamente, puedes iniciar Live Server desde la barra de estado en la parte inferior derecha de Visual Studio Code.

## Uso

1. **Agregar Productos:** Haz clic en "Agregar" junto a un producto para añadirlo al carrito.
2. **Disminuir Cantidades:** Haz clic en "Disminuir" para reducir la cantidad de un producto en el carrito.
3. **Ver Total:** Consulta el total en la sección de carrito. Los cálculos se actualizan automáticamente.
4. **Finalizar Compra:** Completa el formulario con tu información y haz clic en "Confirmar Compra". Si el carrito está vacío, se mostrará una advertencia.



