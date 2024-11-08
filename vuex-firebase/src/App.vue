<script>
import Registro from "./components/Registro.vue";
import ListaUsuarios from "./components/ListaUsuarios.vue";

export default {
  components: {
    Registro,
    ListaUsuarios
  },
  mounted() {
    this.$store.dispatch("obtenerUsuarios");
  }
};
</script>

<template>
  <div id="App">
    <Registro/>
    <ListaUsuarios />
  </div>
</template>

<style scoped>
</style>
