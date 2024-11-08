<script>
export default {
  data() {
    return {
      nuevoUsuario: {
        nombre: '',
        email: ''
      }
    };
  },
  methods: {
    agregarUsuario() {
      this.$store.dispatch("agregarUsuario", this.nuevoUsuario);
      this.nuevoUsuario = { nombre: '', email: '' };
    }
  }
};
</script>

<template>
  <div>
    <h1>Registro de Usuarios</h1>
    <form @submit.prevent="agregarUsuario"> 
      <div>
        <label for="nombre">Nombre:</label>
        <input v-model="nuevoUsuario.nombre" type="text" placeholder="Nombre" id="nombre"/>
      </div>
      <div>
        <label for="email">Email:</label>
        <input v-model="nuevoUsuario.email" type="email" placeholder="Email" id="email"/>
      </div>
      <button type="submit">Agregar</button>
    </form>
  </div>
</template>

<style scoped>
form, h1 {
  max-width: 400px;
  margin: 0 auto;
}

h1{
  text-align: center;
  margin-bottom: 1rem;

}
input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
}

button {
  width: 20%;
  padding: 10px;
  background-color: #79a563;
  color: #fff;
  border: none;
  border-radius: 10px;
  margin-bottom: 1rem;
}

button:hover {
  background-color: #bdd7af;
}
</style>
