<template>
  <div>
      <h1>Agregar pelicula</h1>
       <b-form  @submit.prevent="guardarPelicula">
            <Input 
                v-model="Film.name"
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
            <h6>Generos</h6>
             <b-form-select v-model="selectedGenre" :options="returnGenreForAdd" @change="onChangeGenre(selectedGenre)" class="mb-7">
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
import Input from '../components/Input'
import { mapActions,mapGetters } from 'vuex'
export default {
    name: 'Agregar',
    components: {
        Input
    },
    data() {
        return {
            Film: {
                Director: '',
                name: '',
                idGenre: 0,
                year:'',
                Description:'',
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
        ...mapActions(['getGenre','createFilm']),
        guardarPelicula(){
                this.createFilm({
                    params: this.Film,
                })
                  this.$router.push({
                name: 'films',
             })
        },
         onChangeGenre(event){
             console.log(event)
                this.Film.idGenre=event;
    },
          onChangeType(event){
              console.log(event)
                this.Film.type=event.toString();
    },
    },
    computed: {
     ...mapGetters(['returnGenreForAdd',]),
    },
     mounted() {
    this.getGenre();
  }
}
</script>

<style>
</style>