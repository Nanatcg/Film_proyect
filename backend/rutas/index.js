const express = require('express');
const routes = express.Router();

const genreController = require('../controllers/GenreController');
const FilmController = require('../controllers/FilmController');
const FavoritesController = require('../controllers/FavoritesController');


routes.delete('/genres/:id',genreController.deleteGenre);
routes.post('/genres',genreController.createGenre);
routes.get('/genres',genreController.getGenre);




routes.post('/films', FilmController.createFilm);
routes.get('/films',FilmController.getFilms)
routes.get('/films/:id',FilmController.getFilm);
routes.put('/films/:id',FilmController.editFilm);
routes.delete('/films/:id',FilmController.deleteFilm)


routes.get('/favorites',FavoritesController.getFavoriteFilms)
routes.post('/favorites',FavoritesController.addFavorite)
routes.delete('/favorites/:id',FavoritesController.deleteFavorite)





module.exports = routes;