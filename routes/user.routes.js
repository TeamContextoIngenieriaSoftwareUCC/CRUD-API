const { Router } = require("express");
const { getUser } = require("../controllers/usuario.controller");

const userRoutes = Router();

userRoutes.get('/user', getUser);

/* userRoutes.post('/url', postUser);
userRoutes.put('/url', putUser);
userRoutes.delete('/url', deleteUser); */


/* NOTA: url es lo que va despues de localhost:3000 */
module.exports = userRoutes;