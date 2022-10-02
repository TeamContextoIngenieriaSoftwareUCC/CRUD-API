const express = require("express");

const app = express();

app.get('/', (req, res)=> {
    res.status(200).json({"Ping":"Pong"});
});

app.listen(3000, () => {
    console.log("Servidor en el puerto 3000");
});
