const { Usuario } = require("../models/user.model");

const getUser = (req, res) => {
    const user = new Usuario();
    const users = user.get();
    res.status(200).json({"users":users});
};

/* const postUser = (req, res) => {
    
};

const putUser = (req, res) => {
    
}; 

const deleteUser = (req, res) => {
    const user = new Usuario("",email,"");
}; */

module.exports = {getUser,postUser,putUser};