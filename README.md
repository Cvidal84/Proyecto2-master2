# � Proyecto 2 - E-commerce Web App

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

Este proyecto es una **Single Page Application (SPA)** de comercio electrónico desarrollada como parte del Máster Full Stack / formación en Desarrollo Web. Simula una tienda online completa con funcionalidades de carrito, gestión de productos y diseño moderno.

## 🚀 Funcionalidades Principales

El proyecto implementa conceptos avanzados de React y desarrollo web moderno:

*   **⚡ Navegación Fluida (Routing)**: Uso de `react-router-dom` para navergar entre páginas sin recargar (SPA).
*   **🛒 Carrito de Compras Global**: Implementación de `CartContext` (Context API) para persistir el estado del carrito entre todas las vistas.
*   **🎨 UI/UX Moderna**:
    *   **Splash Screen**: Animación de entrada estilo Netflix al cargar la aplicación.
    *   **Fondos Dinámicos**: Efectos visuales en CSS para la página principal.
    *   **Diseño Responsivo**: Adaptado a móviles y escritorio.
*   **📝 Gestión de Formularios**: Formulario de contacto optimizado con validaciones (usando `react-hook-form` o refs).
*   **🔍 Detalle de Productos**: Vista detallada con efectos de enfoque (dimming background) para resaltar la información del producto.

## 🛠️ Tecnologías Utilizadas

*   **Core**: React 19, Vite.
*   **Librerías**: 
    *   `react-router-dom`: Para el enrutamiento.
    *   `react-hook-form`: Para manejo eficiente de formularios.
*   **Estilos**: CSS3 Vanilla modularizado (CSS modules/component styles).

## 📂 Estructura del Proyecto

El código está organizado para ser escalable y mantenible:

```
src/
├── 📂 components/      # Componentes reutilizables de UI
│   ├── Navbar          # Barra de navegación adaptable
│   ├── ProductCard     # Tarjetas de presentación de productos
│   ├── SearchBar       # Barra de búsqueda
│   └── SplashScreen    # Animación de carga inicial
│
├── 📂 context/         # Gestión de estado global
│   └── CartContext.jsx # Lógica del carrito de compras
│
├── 📂 pages/           # Vistas principales de la aplicación
│   ├── Home            # Landing page con efectos visuales
│   ├── ProductDetail   # Vista individual de productos
│   ├── Cart            # Resumen de compra
│   ├── Checkout        # Simulación de proceso de pago
│   ├── Contact         # Formulario de contacto
│   └── About, 404...   # Páginas informativas y de error
│
└── 📂 data/            # Datos mockeados de productos
```

## ⚙️ Instalación y Ejecución

Para probar el proyecto en tu entorno local:

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/Cvidal84/Proyecto2-master2.git
    cd Proyecto2-master2
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Iniciar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
