# 📚 Gestión de Biblioteca Digital (Fullstack API)

Este proyecto es una aplicación web completa desarrollada para el módulo de **DAW**. Combina un servidor **Node.js** con una interfaz interactiva para gestionar un catálogo de libros en tiempo real.

## 🚀 Funcionalidades
- **Visualización dinámica**: Lista de libros cargada mediante Fetch API.
- **Operaciones CRUD**:
  - **Crear**: Formulario para añadir libros a la colección.
  - **Leer**: Consulta de la lista completa y búsqueda por autor.
  - **Eliminar**: Botón de borrado con confirmación.
- **Logger Middleware**: Registro de todas las peticiones en la consola del servidor (método, ruta y hora).
- **Datos iniciales**: El sistema arranca con una base de datos preconfigurada.

## 🛠️ Tecnologías
- **Backend**: Node.js, Express.js.
- **Frontend**: HTML5, CSS3 (Flexbox/Cards), JavaScript Moderno (Async/Await).
- **Herramientas**: Git, VS Code.

## 📦 Instalación y Ejecución en Windows

1. **Clonar el repositorio**:
```bash
git clone https://github.com/Jediex69/Proyectos_DAW/api-biblioteca.git
```

2. **Instalar dependencias: Entra en la carpeta del proyecto y ejecuta:**
```Bash
npm install
```
3. **Iniciar el servidor:**
```Bash
node app.js
```
El servidor estará disponible en http://localhost:3000.

## 📌 Endpoints

- **GET /libros:** Obtiene todos los libros.
- **POST /libros:** Agrega un libro (requiere JSON con titulo y autor).
- **PUT /libros/:id:** Actualiza un libro por ID.
- **DELETE /libros/:id:** Elimina un libro por ID.
