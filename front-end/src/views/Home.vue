<template>
  <div class="home">
    <h1>Favorite Films</h1>
    <Table :campos="campos" :items="returnFilms" :busy="getLoading">
    </Table>
     <b-form-select :select-size="4" v-model="selected" :options="returnGenre" @change="onChange(selected)">
           </b-form-select> 
       </b-form>
  </div>
</template>

<script>
import Table from '../components/Table'
import { mapGetters, mapActions } from 'vuex'
import Input from '../components/Input'
export default {
  name: 'Home',
  components: {
    Table
  },
  data() {
    return {
      selected:null,
      campos: [
        { key: 'name', label: 'name' },
        { key: 'Director', label: 'Director'},
        { 
          key: 'type', 
          label: 'type'
          },
        { 
          key: 'Genre', 
          label: 'genero', },
            { 
          key: 'year', 
          label: 'year', }
      ],
    }  
  },  
  computed: {
    ...mapGetters(['returnGenre', 'returnFilms'])
  },
  methods: {
    ...mapActions(['getGenre','getFavoriteFilms','getFilmsByGenre','getAllFilms']),
    onChange(event){
      if(event !== 0){
        this.getFilmsByGenre(event)
      }else{
        this.getAllFilms()
      }
    },
  },
  mounted() {
    this.getGenre();
    this.getFavoriteFilms()
  }
}
</script>

