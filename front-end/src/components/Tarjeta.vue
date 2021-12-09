<template>

    <b-card
    :title="item.name"
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-sub-title class="mb-2">Director</b-card-sub-title>
    <b-card-title title-tag="h6">{{item.Director}}</b-card-title>
    <b-card-sub-title class="mb-2">Genre</b-card-sub-title>
     <b-card-title  title-tag="h6">{{item.Genre}}</b-card-title>
         <b-icon icon="eye" v-on:click="onDetail(item)" ></b-icon>
     <div v-if="item.favorite === 1">
        <b-icon icon="heart-fill" v-on:click="favorites(item.id,'remove')" ></b-icon>
     </div>
     <div v-else v-on:click="favorites(item.id,'add')">
        <b-icon icon="heart" ></b-icon>
    </div>
    <b-icon v-if="item.favorite === 0" icon="trash-fill" v-on:click="deleteFilm(item.id)" ></b-icon>
    <b-icon icon="pencil" v-on:click="onEdit(item)" ></b-icon>
  </b-card>
  
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'Tarjeta',
    props:{item:{type:Object}},
     methods: {
             ...mapActions(['addToFavorites','removeFromFavorites','deleteFilmRequest']),
            favorites: function(event,action){
              switch(action){
                  case"remove":
                  this.removeFromFavorites(event)
                  window.location.reload()
                  break;
                  case "add":
                  this.addToFavorites({idFild:event})
                   window.location.reload()
                  break;
              }
            },
            deleteFilm:function(event){
                    this.deleteFilmRequest(event);
                    window.location.reload()

            },
        onEdit(item){
         this.$router.push({
        name: 'Editar',
        params: {
          id: item.id
        }
      })
    },
    onDetail(item){
       this.$router.push({
        name: 'Detalle',
        params: {
          id: item.id
        }
      })
    }
        }
}
</script>

<style>
.container{
    margin:50px;
}
</style>