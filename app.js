const express = require("express");

const app = express();

const userRoutes = require("./routes/user.routes");
/* Telling the app to use the routes defined in the user.routes.js file. */
app.use(userRoutes);

app.listen(3000, () => {
    console.log("Servidor en el puerto 3000");
});
