const User = require("../models/User");

// Objeto controlador para los usuarios
const userCtrl = {};

/**
 * Obtener todos los usuarios
 * GET /api/users
 */
userCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
}

/**
 * Crear un nuevo usuario
 * POST /api/users
 */
userCtrl.createUser = async (req, res) => {
    const {username} = req.body;
    const newUser = new User({username});
    await newUser.save();
    res.json('Usario creado');
}
/**
 * Eliminar un usuario
 * DELETE /api/users/:id
 */
userCtrl.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json('Usuario eliminado');
}
// Exportar el objeto controlador
module.exports = userCtrl;