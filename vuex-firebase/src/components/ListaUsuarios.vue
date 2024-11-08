<script>
export default {
  methods: {
    borrarUsuario(id) {
      this.$store.dispatch("borrarUsuario", id);
    }
  },
};
</script>

<template>
  <div id="lista">
    <h1>Lista de Usuarios</h1>
    <ul class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-center"
        v-for="usuario in $store.state.usuarios" :key="usuario.id">
        Nombre: {{ usuario.nombre }} - Email: {{ usuario.email }}
        <button @click="borrarUsuario(usuario.id)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>

#lista{
  max-width: 600px;
  margin: 0 auto;
}

h1{
  text-align: center;
  margin-bottom: 1rem;
}

button {
  margin-left: 10px;
  padding: 10px;
  background-color:  #f1360e;
  color: #fff;
  border: none;
  border-radius: 10px;
}
button:hover {
  background-color:  #741d0b;
}
</style>
