# 📚 API REST de Biblioteca Digital

Esta es una API REST sencilla construida con \*\*Node.js\*\* y \*\*Express\*\*. Permite gestionar un catálogo de libros mediante operaciones CRUD básicas.

## 🛠️ Tecnologías utilizadas

- **Node.js**: Entorno de ejecución.
- **Express**: Framework para el manejo de rutas y servidor.
- **JavaScript**: Lenguaje de programación.

## 🚀 Instalación y Uso

1. **Clonar el repositorio:**

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

**GET /libros:** Obtiene todos los libros.
**POST /libros:** Agrega un libro (requiere JSON con titulo y autor).
**PUT /libros/:id:** Actualiza un libro por ID.
**DELETE /libros/:id:** Elimina un libro por ID.



