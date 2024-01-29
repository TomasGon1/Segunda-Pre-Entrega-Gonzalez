const express = require("express");
const app = express();
const PUERTO = 8080;
const routerP = require("./routes/products.router.js");
const routerC = require("./routes/carts.router.js");

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Uso de rutas
app.use("/api/products", routerP);
app.use("/api/carts", routerC);

app.listen(PUERTO);
