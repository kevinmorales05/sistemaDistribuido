const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
require('dotenv').config() //para trabajar con variables de entorno
const dbConfig = require('./config/db.config')

const PORT = process.env.NODE_DOCKER_PORT || 3050; //puerto nodejs

//crear servidor
const app = express();
//habilitar cors
app.use(cors());
app.options("*", cors());
//uso formato json
app.use(express.json());

//Conexion con MySQL
let connection = mysql.createConnection({
  host: dbConfig.HOST || "localhost",
  port: dbConfig.port || "3306",
  user: dbConfig.USER || "root",
  password: dbConfig.PASSWORD || "",
  database: dbConfig.DB || "database",
});

//rutas
//obtener todas las compras
app.get("/", (req, res) => {
  const sql = "SELECT * FROM buys";
  connection.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(results);
    } else {
      res.send("La tabla esta vacia!");
    }
  });
});
//crear una nueva venta
app.post("/newbuy", (req, res) => {
  const sql = "INSERT INTO buys SET ?";
  const buyObject = {
    cod_prod: req.body.cod_prod,
    nom_prod: req.body.nom_prod,
    cost_prod: req.body.cost_prod,
  };
  connection.query(sql, buyObject, (error) => {
    if (error) throw error;
    res.send("Nueva compra realizada!");
  });
});

//conexion de la base de datos
connection.connect((error) => {
  if (error) throw error;
  console.log("Conexion a la base de datos exitosa!");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
