// Importar dependencias necesarias
const express = require('express');
const cors = require('cors');
const app = express();

// ===== CONFIGURACIÓN DE LA APLICACIÓN =====
// Establecer el puerto del servidor (desde variable de entorno o por defecto 4000)
app.set('port', process.env.PORT || 4000);

// ===== MIDDLEWARE =====
// Habilitar CORS para permitir solicitudes desde diferentes orígenes
app.use(cors());
// Parsear las solicitudes JSON entrantes
app.use(express.json());

// ===== RUTAS =====
// Rutas para manejo de usuarios
app.use('/api/users', require('./routes/users'));
// Rutas para manejo de notas
app.use('/api/notes', require('./routes/notes'));

// Exportar la aplicación Express
module.exports = app;