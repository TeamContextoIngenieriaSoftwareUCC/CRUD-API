const { Router } = require("express");
const { getUsers } = require("../controllers/usuario.controller");
const { postUser } = require("../controllers/usuario.controller");
const { putUser } = require("../controllers/usuario.controller");
const { deleteUser } = require("../controllers/usuario.controller");

const userRoutes = Router();

/* Creating a route for each of the four HTTP methods. */
userRoutes.get('/users', getUsers);
userRoutes.post('/user', postUser);
userRoutes.put('/user', putUser);
userRoutes.delete('/user', deleteUser); 

module.exports = userRoutes;