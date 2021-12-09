import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    genre: [],
    films:[],
    favorites:[],
  },
  mutations: {
    SET_GENRE(state, genre){
      state.genre = genre
    },
    SET_FAVORITE_FILMS(state,films){
      state.favorites = films;
    },
    SET_FILMS(state,films){
      state.films=films;
    }
  },
  actions: {
    getFavoriteFilms({commit}, params){
      axios.get(`http://localhost:3000/favorites/`, )
      .then((response)=>{
        console.log('looking a favorites resonses',response)
        commit('SET_FAVORITE_FILMS',response.data)
      })
      .catch(onError)
    },
    getFilmsByGenre({commit}, params){
      console.log('looking at params',params)
      axios.get(`http://localhost:3000/genres/${params}`, )
      .then((response)=>{
        console.log('looking a favorites resonses',response.data)
        commit('SET_FAVORITE_FILMS',response.data)
      })
      .catch(onError)
    },
    getAllFilms({commit}, params){
      axios.get(`http://localhost:3000/films/`, )
      .then((response)=>{
        console.log('looking a favorites resonses',response.data)
        commit('SET_FAVORITE_FILMS',response.data)
      })
      .catch(onError)
    },
    getFilms({commit}){
      axios.get('http://localhost:3000/films/').then((response)=>{
        commit('SET_FILMS',response.data)
      })
    },
    addToFavorites({commit},params){
      axios.post('http://localhost:3000/favorites',params).then((response)=>{
      })
    },
    removeFromFavorites({commit},params){
      axios.delete(`http://localhost:3000/favorites/${params}`).then((response)=>{
      })
    },
    deleteFilmRequest({commit},params){
      console.log('deleting film',params)
      axios.delete(`http://localhost:3000/films/${params}`).then((response)=>{
      })
    },
    createFilm({commit},{params}){
      console.log('looking at film before creation',params)
      axios.post(`http://localhost:3000/films/`,params).then((response)=>{
      })
    },
     getFilm({commit},{id,onComplete}){
        axios.get(`http://localhost:3000/films/${id}`).then(onComplete)
    },
    getGenre({commit}){
      commit('SET_LOADING', true)
      axios.get('http://localhost:3000/genres')
      .then(response => {
        commit('SET_GENRE', response.data);
      })
      .finally(() => commit('SET_LOADING', false))
    },
    updateFilm({commit},{params:{id,updatedFilm}}){
      console.log("log before updating",updatedFilm)
      axios.put(`http://localhost:3000/films/${id}`,updatedFilm).then((response)=>{
    
      })
    },

  },
  getters: {
    returnFilmsView: state =>{
      return state.films
    },
    returnFilms: state => {
      return state.favorites;
    },
    returnGenre: state => {
    let genreMap= state.genre.map((genre)=>{
        return{value:genre.id,text:genre.name}
      })
      genreMap.unshift({value:0,text:"todas"})
      return genreMap
    },
    returnGenreForAdd: state =>{
      let genreMap= state.genre.map((genre)=>{
        return{value:genre.id,text:genre.name}
      })
      genreMap.unshift({value:null,text:"Seleccione un genero"})
      return genreMap
    }
  }
})