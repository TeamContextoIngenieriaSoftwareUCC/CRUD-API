const { Usuario } = require("../models/user.model");

const getUser = (req, res) => {
    const user = new Usuario();
    const users = user.get();
    res.status(200).json({"users":users});
};

 const postUser = (req, res) => {
    const user = new Usuario();
    const users = new Usuario();
    res.status(200).json({"users":users});

};

const putUser = (req, res) => {
    const user = new Usuario();
    const users = new Usuario();
    res.status(200).json({"users":users});
}; 

const deleteUser = (req, res) => {
    const user = new Usuario("",email,"");  
    if (err) throw err;
    console.log('userDel was deleted!');
}; 
//se agregaron las function de get, post, put y delete
module.exports = {getUser,postUser,putUser, deleteUser};