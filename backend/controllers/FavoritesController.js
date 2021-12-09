const connection = require('../config/conexion.js');



function getFavoriteFilms(req, res) {
    if(connection){
        let sql = `select favs.id,films.name,Director,type,year,gens.name as Genre from film as films 
        INNER JOIN favorites as favs ON favs.idFild = films.id left join Genre gens ON films.idGenre = gens.id`;
        connection.query(sql, (err, Films) => {
            if(err){
                res.send(err)
            } else {
                res.json(Films);
            }
        })
    }
}

function addFavorite(req, res){
    if(connection){
        const favorite = req.body;
        let sql = 'INSERT INTO favorites set ?';
        connection.query(sql, [favorite], (err, rows) => {
            if(err) {
                res.json(err)
            } else {
                res.json({error: false, data: rows, mensaje: "Favorite agregado con exito"})
            }
        })
    }
}

function deleteFavorite(req,res){
    if(connection){
        const favorite = req.params.id;
        let sql = `DELETE FROM favorites WHERE id=${favorite}`
        connection.query(sql,(err)=>{
            if(err){
                res.json(err)
            }else{
                res.json({error:false,mensaje:"el film fue borrado de favorites con exito"})
            }
        })
    }
}



module.exports = {
    getFavoriteFilms,
    addFavorite,
    deleteFavorite
}