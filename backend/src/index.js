// Cargar variables de entorno desde el archivo .env
require('dotenv').config();

// Importar la configuración de Express desde app.js
const app = require('./app');

// Importar la conexión a MongoDB desde database.js
require('./database');

// Función principal asíncrona para iniciar el servidor
async function main(){
    // Iniciar el servidor en el puerto configurado
    await app.listen(app.get('port'));
    // Mostrar en consola el puerto en el que está escuchando
    console.log('Servidor en el puerto', app.get('port')); 
}

// Ejecutar la función main
main();
