// Importar las funciones necesarias de Mongoose
const {Schema, model} = require('mongoose');

// Definir el esquema de la colección Note
const noteSchema = new Schema({
    // Título de la nota
    titulo: String,
    // Contenido de la nota (requerido)
    contenido: {
        type: String,
        required: true
    },
    // Autor de la nota
    autor: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    // Fecha de creación (por defecto es la fecha actual)
    date: {
        type: Date,
        default: Date.now
    }
}, {
    // Agregar automáticamente campos createdAt y updatedAt
    timestamps: true
})

// Crear y exportar el modelo Note usando el esquema
module.exports = model('Note', noteSchema);