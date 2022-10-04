const { Router } = require("express");
const { getUser } = require("../controllers/usuario.controller");
const { postUser } = require("../controllers/usuario.controller");
const { putUser } = require("../controllers/usuario.controller");
const { deleteUser } = require("../controllers/usuario.controller");

const userRoutes = Router();

userRoutes.get('/user', getUser);
userRoutes.post('/user', postUser);
userRoutes.put('/user', putUser);
userRoutes.delete('/user', deleteUser); 
//rutas de post, put y delete agregados

/* NOTA: url es lo que va despues de localhost:3000 */
module.exports = userRoutes;