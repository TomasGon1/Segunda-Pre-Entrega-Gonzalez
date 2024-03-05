const express = require("express");
const app = express();
const PUERTO = 8080;
const exphbs = require("express-handlebars");
require("./database.js");

const routerP = require("./routes/products.router.js");
const routerC = require("./routes/carts.router.js");
const routerV = require("./routes/views.router.js");

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./src/public"));

//Handlebars
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

//Uso de rutas
app.use("/api/products", routerP);
app.use("/api/carts", routerC);
app.use("/", routerV);

app.listen(PUERTO, () => {
  console.log(`Escuchando en el puerto: ${PUERTO}`);
});
