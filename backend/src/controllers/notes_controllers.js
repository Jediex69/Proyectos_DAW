// Objeto controlador para las notas
const notesCtrl = {};
// Importar el modelo de datos para Note
const Note = require('../models/Note');

/**
 * Obtener todas las notas de la base de datos
 * GET /api/notes
 */
notesCtrl.getNotes = async (req, res) => {
    try {
        // Buscar todas las notas en la colección y poblar el autor
        const notes = await Note.find().populate('autor');
        // Enviar las notas como respuesta JSON
        res.json(notes);
    } catch (error) {
        console.error('Error getNotes:', error);
        res.status(500).json({message: 'Error al obtener notas', error: error.message});
    }
}

/**
 * Crear una nueva nota
 * POST /api/notes
 * Body: {titulo, contenido, autor, date}
 */
notesCtrl.createNotes = async (req, res) =>{
    try {
        // Desestructurar los datos del cuerpo de la solicitud
        const {titulo, contenido, autor, date} = req.body;

        // Validar campos mínimos
        if (!titulo || !contenido || !autor) {
            return res.status(400).json({message: 'titulo, contenido y autor son requeridos'});
        }

        // Crear una nueva instancia de nota
        const newNote = new Note({
            titulo,
            contenido,
            date,
            autor
        });

        await newNote.save();
        // Enviar respuesta confirmando la creación
        res.status(201).json({message: 'Nota guardada'});
    } catch (error) {
        console.error('Error createNotes:', error);
        // Mongoose CastError cuando autor no es ObjectId válido
        if (error.name === 'CastError') {
            return res.status(400).json({message: 'autor debe ser un ObjectId válido'});
        }
        res.status(500).json({message: 'Error al guardar nota', error: error.message});
    }
}

/**
 * Actualizar una nota existente
 * PUT /api/notes/:id
 */
notesCtrl.updateNotes = async (req, res) => {
    try {
        const {titulo, contenido, autor} = req.body;

        // Validar campos mínimos
        if (!titulo || !contenido || !autor) {
            return res.status(400).json({message: 'titulo, contenido y autor son requeridos'});
        }

        const result = await Note.findOneAndUpdate({_id: req.params.id}, {
            titulo,
            autor,
            contenido
        }, { new: true });

        if (!result) {
            return res.status(404).json({message: 'Nota no encontrada'});
        }

        res.json({message: 'Nota actualizada', note: result});
    } catch (error) {
        console.error('Error updateNotes:', error);
        // Mongoose CastError cuando autor o id no es ObjectId válido
        if (error.name === 'CastError') {
            return res.status(400).json({message: 'autor o id debe ser un ObjectId válido'});
        }
        res.status(500).json({message: 'Error al actualizar nota', error: error.message});
    }
}

/**
 * Eliminar una nota
 * DELETE /api/notes/:id
 */
notesCtrl.deleteNotes = async (req, res) => {
    try {
        const result = await Note.findByIdAndDelete(req.params.id);
        
        if (!result) {
            return res.status(404).json({message: 'Nota no encontrada'});
        }
        
        res.json({message: 'Nota eliminada'});
    } catch (error) {
        console.error('Error deleteNotes:', error);
        if (error.name === 'CastError') {
            return res.status(400).json({message: 'ID de nota inválido'});
        }
        res.status(500).json({message: 'Error al eliminar nota', error: error.message});
    }
}

/**
 * Obtener una nota específica por ID
 * GET /api/notes/:id
 */
notesCtrl.getNotes2 = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id).populate('autor');
        
        if (!note) {
            return res.status(404).json({message: 'Nota no encontrada'});
        }
        
        res.json(note);
    } catch (error) {
        console.error('Error getNotes2:', error);
        if (error.name === 'CastError') {
            return res.status(400).json({message: 'ID de nota inválido'});
        }
        res.status(500).json({message: 'Error al obtener nota', error: error.message});
    }
}

// Exportar el objeto controlador
module.exports = notesCtrl;