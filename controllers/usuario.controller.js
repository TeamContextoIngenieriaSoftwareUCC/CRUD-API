const { User } = require("../models/user.model");

/**
 * It's a function that gets all the users from the database and returns them in a JSON format.
 * @param req - The request object.
 * @param res - The response object.
 */
const getUsers = async (req, res) => {
    try {
        const users = new User({});
        const {data, error} = await users.get();
        if (!data) throw new Error(error);
        res.status(200).json({data});
    } catch ({message}) {
        const codeStatus = parseInt(message) || 400;
        res.status(codeStatus).json({msg: "Algo salio mal"});
    }
};

/**
 * This function takes the request and response objects as parameters, and then it tries to create a
 * new user with the data from the request body, and then it sends a response with a message.
 * @param req - The request object.
 * @param res - The response object.
 */
const postUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        
        const users = new User({name, email, password});
        const {data, error} = await users.post();
        if (!data) throw new Error(error);

        res.status(201).json({msg: "Registrado con exito"});
    } catch ({message}) {
        console.error(message);
        res.status(400).json({msg: "Algo salio mal"});
    }
};

/**
 * It receives a request and a response, it tries to update an user with the data received in the
 * request body, if it fails it throws an error, if it succeeds it sends a response with the message
 * @param req - The request object.
 * @param res - The response object.
 */
const putUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        
        const user = new User({name, email, password});
        const {msg, error} = await user.put();
        if (!msg) throw new Error(error);

        res.status(201).json({msg});
    } catch ({message}) {
        const codeStatus = parseInt(message) || 400;
        res.status(codeStatus).json({msg: "Algo salio mal"});
    }
}; 

/**
 * It takes the email and password from the request body, creates a new user object, and then calls the
 * delete method on that object
 * @param req - request
 * @param res - The response object.
 */
const deleteUser = async (req, res) => {
    try{
        const {email, password} = req.body;
    
        const user = new User({email, password});
        const {msg, error} = await user.delete();
        if (!msg) throw new Error(error);
        
        res.status(200).json({msg});
    }catch({message}){
        const codeStatus = parseInt(message) || 400;
        res.status(codeStatus).json({msg: "Algo salio mal"});
    }
}; 

module.exports = {getUsers,postUser,putUser, deleteUser};