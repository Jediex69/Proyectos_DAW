// Importar las funciones necesarias de Mongoose
const {Schema, model} = require('mongoose');

// Definir el esquema de la colección User
const userSchema = new Schema({
    // Nombre de usuario (requerido)
    username: {
        type: String,
        required: true
    }    
}, {
    // Agregar automáticamente campos createdAt y updatedAt
    timestamps: true
})

// Crear y exportar el modelo User usando el esquema
module.exports = model('User', userSchema);