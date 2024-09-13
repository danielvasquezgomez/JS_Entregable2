# Proyecto de Carrito de Compras - Bosque
(Para que funcione es necesario abrir el archivo con LiveServer)

git
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

- **Agregar y Disminuir Productos:** Permite a los usuarios agregar productos al carrito y ajustar la cantidad de los productos existentes.
- **Cálculo de Totales:** Calcula el total sin IVA, el total con descuento, y el total con IVA.
- **Descuento por Cantidad:** Aplica un descuento del 10% cuando se seleccionan 5 o más unidades del mismo producto.
- **Validación de Formulario:** Incluye validaciones para nombre, dirección y teléfono antes de completar la compra.
- **Mensajes Personalizados:** Utiliza SweetAlert2 para mostrar mensajes de agradecimiento y advertencias si el carrito está vacío.

## Tecnologías

- **JavaScript:** Para la lógica de la aplicación.
- **HTML:** Para la estructura del contenido.
- **CSS:** Para el diseño y estilos.
- **SweetAlert2:** Para los mensajes de alerta y confirmación.

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



