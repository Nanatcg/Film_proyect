<template>
   <div>
    <b-table 
        striped 
        bordered
        :items="items"
        :fields="campos"
        :busy="busy"
    >
    </b-table>
  </div>
</template>

<script>
export default {
    name: 'Table',
    props: {
        items: Array,
        campos: Array,
        busy: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style>
</style>