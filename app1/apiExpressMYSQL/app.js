const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
//const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3050;

//crear servidor
const app = express();
//habilitar cors
app.use(cors());
app.options('*', cors());
//uso formato json
app.use(express.json()) 

//Conexion con MySQL
let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'database'
});
 

//rutas
//obtener todas las compras
app.get('/', (req, res) => {
    const sql = 'SELECT * FROM buys';
    connection.query(sql,(error, results)=> {
        if (error) throw error;
        if(results.length > 0){
            res.json(results);
        }else{
            res.send('La tabla esta vacia!')
        }
    })
});
//crear una nueva venta
app.post('/newbuy', (req, res) => {
    const sql = 'INSERT INTO buys SET ?';
    const buyObject = {
        cod_prod: req.body.cod_prod,
        nom_prod: req.body.nom_prod,
        cost_prod: req.body.cost_prod,
    }
    connection.query(sql, buyObject, error =>{
        if (error) throw error;
        res.send("Nueva compra realizada!")
    })
    
});


//conexion de la base de datos
connection.connect(error=> {
    if(error) throw error;
    console.log("Conexion a la base de datos exitosa!")
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});




