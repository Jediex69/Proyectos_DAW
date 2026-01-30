const express = require('express');
const app = express();
const PORT = 3000;

//Middleware para que Express entienda JSON
app.use(express.json());

// Importamos los datos iniciales del archivo datos.js
const librosIniciales = require('./datos');

// Inicializamos nuestra "base de datos" con los libros importados
let libros = [...librosIniciales];

//-- RUTAS --

// 1. Obtener todos los libros (GET)
app.get('/libros', (req, req_res) => {
    req_res.status(200).json(libros);
});

// 2. Agregar un nuevo libro (POST) con validación
app.post('/libros', (req, req_res) => {
    const { titulo, autor } = req.body;

    // Validación: Si no hay título o autor, devolver error 400
    if (!titulo || !autor) {
        return req_res.status(400).json(
            { error: "Faltan datos",
              mensaje: "El título y el autor son obligatorios."
            });
    }
    
    const nuevoLibro = {
        id: libros.length + 1,
        titulo: titulo,
        autor: autor
    };

    libros.push(nuevoLibro);
    req_res.status(201).json(nuevoLibro);
});

// 3. Actualizar un libro (PUT)
app.put('/libros/:id', (req, req_res) => {
    const id = parseInt(req.params.id);
    const libroIndex = libros.findIndex(l => l.id === id);

    if (libroIndex !== -1) {
        libros[libroIndex] = { id, ...req.body };
        req_res.json(libros[libroIndex]);
    } else {
        req_res.status(404).json({ mensaje: "Libro no encontrado" });
    }
});

// 4. Eliminar un libro (DELETE)
app.delete('/libros/:id', (req, req_res) => {
    const id = parseInt(req.params.id);
    libros = libros.filter(l => l.id !== id);
    req_res.status(204).send();
});

// 5. Buscar libros por autor (GET con Query Params)
// Ejemplo de uso: http://localhost:3000/libros/buscar?autor=Orwell
app.get('/libros/buscar', (req, res) => {
    const autorBusqueda = req.query.autor;

    if (!autorBusqueda) {
        return res.status(400).json({ mensaje: "Debes proporcionar un autor para buscar." });
    }

    // Filtramos los libros cuyo autor contenga el texto buscado (ignorando mayúsculas/minúsculas)
    const resultados = libros.filter(l => 
        l.autor.toLowerCase().includes(autorBusqueda.toLowerCase())
    );

    if (resultados.length > 0) {
        res.json(resultados);
    } else {
        res.status(404).json({ mensaje: `No se encontraron libros del autor: ${autorBusqueda}` });
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});



