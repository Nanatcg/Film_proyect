const mysql = require('mysql');


const conexion = mysql.createConnection( {
    "host": "localhost",
    "port": 3306,
    "user": "root",
    "password": "",
    "database": "film_proyect"
}
);

conexion.connect((error) => {
    if(error){
        console.log("Ha ocurrido un error", error);
    } else {
        console.log("Base de datos conectada");
    }
})

module.exports = conexion;