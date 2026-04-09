const mongoose = require('mongoose');

// Mostramos la URI de MongoDB usada (por ejemplo, para debug en dev).
console.log(process.env.MONGODB_URI);

// La URI de conexión se obtiene de la variable de entorno MONGODB_URI.
// Esto permite cambiar la base de datos sin modificar el código fuente.
const URI = process.env.MONGODB_URI;

// Conectamos a MongoDB usando Mongoose.
mongoose.connect(URI);

// Usamos la conexión global de mongoose para escuchar eventos.
const connection = mongoose.connection;

// Cuando la conexión se abra por primera vez, mostramos un mensaje en consola.
connection.once('open', () => {
    console.log('DB está conectada');
});