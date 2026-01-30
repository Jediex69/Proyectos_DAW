const express = require('express');
const app = express();
const PORT = 3000;

//Middleware para que Express entienda JSON
app.use(express.json());

//Base de datos simulada
let libros = [
    {id: 1, titulo: 'El Quijote', autor: 'Miguel de Cervantes'},
    {id: 2, titulo: 'Cien Años de Soledad', autor: 'Gabriel García Márquez'}
];

//-- RUTAS --

// 1. Obtener todos los libros (GET)
app.get('/libros', (req, req_res) => {
    req_res.status(200).json(libros);
});

// 2. Agregar un nuevo libro (POST)
app.post('/libros', (req, req_res) => {
    const nuevoLibro = {
        id: libros.length + 1,
        titulo: req.body.titulo,
        autor: req.body.autor
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

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});



