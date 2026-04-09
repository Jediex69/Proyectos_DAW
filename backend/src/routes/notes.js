// Importar Router de Express
const { Router } = require('express');
const router = Router();
// Importar los controladores de notas
const {getNotes, createNotes, updateNotes, deleteNotes, getNotes2} = require('../controllers/notes_controllers');

/**
 * Rutas base para las notas (/api/notes)
 */
router.route('/')
    // GET: Obtener todas las notas
    .get(getNotes)
    // POST: Crear una nueva nota
    .post(createNotes)

/**
 * Rutas con parámetro ID (/api/notes/:id)
 */
router.route('/:id')
    // PUT: Actualizar una nota por ID
    .put(updateNotes)
    // DELETE: Eliminar una nota por ID
    .delete(deleteNotes)
    // GET: Obtener una nota específica por ID
    .get(getNotes2)

// Exportar el router
module.exports = router;
