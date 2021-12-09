<template>
  <div>
      <h1>Editar pelicula</h1>
       <b-form @submit.prevent="editarPelicula">
       <Input 
                v-model="Film.name"
                disabled
                label="Name "
                placeholder="Ingrese el Nombre de la pelicula"
                id="name"
                class="mb-2"
                :error="erroresValidacion"
                mensajeError="El nombre es obligatorio"
           />
            <Input 
                v-model="Film.Director"
                label="Director"
                disabled
                placeholder="Ingrese nombre de el director de la pelicula"
                id="Director"
                class="mb-2"
                :error="erroresValidacion"
                mensajeError="El director es obligatorio"
           />
              <Input 
                v-model="Film.Description"
                label="Descripcion del film"
                placeholder="Ingrese una descripcion para el film"
                id="telefono"
                :maxlength="10"
           />
            <Input 
                v-model="Film.year"
                label="Año de publicacion"
                placeholder="Ingrese el año de publicacion de libro"
                id="telefono"
                :maxlength="10"
           />
             <Input 
                v-model="Film.Score"
                label="Score"
                placeholder="Ingrese puntuacion del film"
                id="telefono"
                :maxlength="10"
           />
             <Input 
                v-model="Film.Review"
                label="Review"
                placeholder="Ingrese reseña del film"
                id="telefono"
                :maxlength="10"
           />
            <h6>Generos</h6>
             <b-form-select disabled v-model="selectedGenre" :options="returnGenreForAdd" @change="onChangeGenre(selectedGenre)" class="mb-7">
           </b-form-select>
            <h6>tipos</h6>
            <b-form-select v-model="selectedType" :options="tipos" @change="onChangeType(selectedType)" class="mb-7">
           </b-form-select>
           <b-button variant="primary" type="submit" class="mt-3">
               Guardar
            </b-button>
       </b-form>
  </div>
</template>

<script>
import Vue from 'vue'
import Input from '../components/Input'
import { mapActions,mapGetters } from 'vuex'
export default {
    name: 'Agregar',
    components: {
        Input
    },
    data() {
        return{
            Film: {
                Director: '',
                name: '',
                idGenre: 0,
                year:'',
                Description:'',
                Score:"",
                Review:"",
                type:"",
            },
            tipos:[{value:null,text:"Selecione un tipo"},
            {value:1,text:"movie"},
            {value:2,text:"serie"},
            {value:3,text:"documental"},
            {value:4,text:"anime"}],
            selectedGenre:null,
            selectedType:null

        }
    },
    methods: {
        ...mapActions(['getGenre','getFilm','updateFilm']),
        editarPelicula(){
                const{Description,type,Review,year,Score,id} = this.Film
                 let updatedFilm ={
                     description:Description,
                     type,
                     review:Review,
                     year,
                     score:Score
                 }
                this.updateFilm({
                    params: {id,updatedFilm}
                })
                   this.$router.push({
                name: 'films',
             })
        },
         onChangeGenre(event){
                this.Film.idGenre=event;
    },
          onChangeType(event){
                this.Film.type=event.toString();
    },
    },
    computed: {
     ...mapGetters(['returnGenreForAdd']),
    },
      created(){
      this.getGenre()
      this.getFilm({
        id: this.$route.params.id,
        onComplete: (response) => {
            console.log("response in complete",response.data[0])
            Vue.set(this, 'Film', response.data[0])
            Vue.set(this,'selectedGenre',response.data[0].idGenre)
            Vue.set(this,'selectedType',response.data[0].type)

        }
      })
    }
}
</script>

<style>
</style>