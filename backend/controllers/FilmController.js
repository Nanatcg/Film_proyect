const { json } = require('body-parser');
const connection = require('../config/conexion.js');

function getFilms(req, res) {
    if(connection){
        let sql = `select films.id,films.name,Director,type,year, gens.name as Genre, 
        CASE
                WHEN favs.idFild IS NULL THEN 0
                ELSE 1
                END as favorite
    from Film films
    inner join Genre gens ON gens.id = films.idGenre
    left join Favorites favs ON films.id = favs.idFild`;
        connection.query(sql, (err, Films) => {
            if(err){
                res.send(err)
            } else {
                res.json(Films);
            }
        })
    }
}

function getFilm(req,res) {
    if(connection){
        const id = req.params.id
        let sql =`select films.*, gens.name as Genre, 
        CASE
                WHEN favs.idFild IS NULL THEN 0
                ELSE 1
                END as favorite
    from Film films
    inner join Genre gens ON gens.id = films.idGenre
    left join Favorites favs ON films.id = favs.idFild where ${id} = films.id`
        connection.query(sql, (err, Film) => {
            if(err){
                res.send(err)
            } else {
                res.json(Film)
            }
        })
    }
}



function createFilm(req, res){
    if(connection){
        const Film = req.body;
        if(!Film.director || !Film.name || !Film.year){
            return res.status(400).send({error: true, mensaje: "El titulo y el autor y el año no deben estar vacios"})
        }
        if(Film.name.length >80) {
            return res.status(400).send({error: true, mensaje: "el nombre no debe exeder de 80 caracteres."})
        }
        if(Film.director.length > 60){
            return res.status(400).send({error: true, mensaje: "el director no debe exeder de 60 caracteres."})

        }
        if(Film.year.length != 4){
            return res.status(400).send({error: true, mensaje: "el año no debe ser de 4 caracteres."})

        }
    
        let sql = 'INSERT INTO Film set ?';
        connection.query(sql, [Film], (err, rows) => {
            if(err) {
                res.json(err)
            } else {
                res.json({error: false, data: rows, mensaje: "Film creado con éxito"})
            }
        })
    }
}

function deleteFilm(req,res){
    if(connection){
        const film = req.params.id;
        let sql = `DELETE FROM film WHERE id=${film}`
        connection.query(sql,(err)=>{
            if(err){
                res.json(err)
            }else{
                res.json({error:false,mensaje:"el film fue borrado con exito"})
            }
        })
    }
}

function editFilm(req,res){
    if(connection){
        const film = req.body;
        const id = req.params.id;
        const{type,description,year,review,score} = film;
        let sql = `UPDATE Film SET description = '${description}', type = '${type}', year = '${year}', review = '${review}', score = '${score}' WHERE id =${id}`

        if(!film.type || !film.year){
            return res.status(400).send({error: true, mensaje: "los campos type y year no deben estar vacios"})
        }
        if(film.type.length >1) {
            return res.status(400).send({error: true, mensaje: "el typo de pelicula no debe exeder a 1 caracter."})
        }
        if(film.year.length != 4){
            return res.status(400).send({error: true, mensaje: "el año no debe ser de 4 caracteres."})
        }
        connection.query(sql, (err, film) => {
            if(!err){
                res.json({erro:false,data:film,mensaje:"el film fue modificado con exito"});
            } else {
                res.send(err)

            }
        })
    }
}



module.exports = {
    getFilms,
    createFilm,
    deleteFilm,
    editFilm,
    getFilm
}