<template>
  <div class="home">
    <h1>Peliculas</h1>
    <b-container>
    <b-row>
    <b-col v-for="item in returnFilmsView"   cols="6" md="4">
      <Tarjeta
      :item="item"
      ></Tarjeta>
    </b-col>   
  </b-row>
</b-container>
<b-button to="/Agregar" variant="primary" class="mb-3">Agregar</b-button>
</div>
</template>

<script>
import Tarjeta from '../components/Tarjeta'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'films',
  components: {
    Tarjeta
  },
  computed: {
    ...mapGetters(['returnFilmsView',])
  },
  methods: {
    ...mapActions(['getFilms']),
  },
  mounted() {
    this.getFilms();
  }
}
</script>