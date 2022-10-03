const express = require("express");

const app = express();

const userRoutes = require("./routes/user.routes");
app.use(userRoutes);

app.listen(3000, () => {
    console.log("Servidor en el puerto 3000");
});
