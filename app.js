const express = require("express");

const app = express();

/* The above code is creating a server and listening to port 3000. */
app.use(express.json());

const userRoutes = require("./routes/user.routes");
app.use(userRoutes);

app.listen(3000, () => {
    console.log("Servidor en el puerto 3000");
});
