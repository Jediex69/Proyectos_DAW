// Importar Router de Express
const {Router} = require('express');
const router = Router();
// Importar los controladores de usuarios
const {getUsers, createUser, deleteUser} = require('../controllers/users_controllers');

/**
 * Rutas base para los usuarios (/api/users)
 */
router.route('/')
    // GET: Obtener todos los usuarios
    .get(getUsers)
    // POST: Crear un nuevo usuario
    .post(createUser)

/**
 * Rutas con parámetro ID (/api/users/:id)
 */
router.route('/:id')   
    // DELETE: Eliminar un usuario por ID
    .delete(deleteUser)

// Exportar el router
module.exports = router;