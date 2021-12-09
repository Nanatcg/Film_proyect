<template>
  <div class="home">
    <h1>Film</h1>
     <b-card
    :title="Film.name"
    :sub-title="Film.year"
  >
     <b-list-group flush>
      <b-list-group-item>Director: {{Film.Director}}</b-list-group-item>
      <b-list-group-item>Genre: {{Film.Genre}}</b-list-group-item>
      <b-list-group-item>Tipo: {{this.tipos[Film.type]}}</b-list-group-item>
      <b-list-group-item>Descripcion: {{Film.Description}}</b-list-group-item>
      <b-list-group-item>Score: {{Film.Score}}</b-list-group-item>
      <b-list-group-item>Review: {{Film.Review}}</b-list-group-item>
    </b-list-group>
  </b-card>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Vue from 'vue'
export default {
  name: 'films',
 data() {
        return {
            Film: {
                Director: '',
                name: '',
                idGenre: 0,
                year:'',
                Description:'',
            },
            tipos:{
                1:'movie',
                2:'serie',
                3:'documental',
                4:'anime'
            }
        }
    },
  computed: {
    ...mapGetters(['returnFilmsView',])
  },
  methods: {
    ...mapActions(['getFilm']),
  },
  mounted() {
 this.getFilm({
        id: this.$route.params.id,
        onComplete: (response) => {
            Vue.set(this, 'Film', response.data[0])
        }
      })  }
}
</script>