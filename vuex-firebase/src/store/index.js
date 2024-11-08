import { createStore } from 'vuex';
import { getFirestore, collection, addDoc, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import firebaseApp from '../firebaseconfig';

export default createStore({
  state: {
    usuarios: []
  },
  mutations: {
    setUsuarios(state, usuarios) {
      state.usuarios = usuarios;
    }
  },
  actions: {
    async obtenerUsuarios(context) {
      const db = getFirestore(firebaseApp);
      const usuariosRef = collection(db, "usuarios");
      try {
        onSnapshot(usuariosRef, (snapshot) => {
          const usuarios = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }));
          context.commit("setUsuarios", usuarios);
        });
      } catch (error) {
        console.error("Error al obtener usuarios:", error);
      }
    },
    
    async agregarUsuario(_context, nuevoUsuario) {
      if (nuevoUsuario.nombre.trim() === "" || nuevoUsuario.email.trim() === "") return;
      const db = getFirestore(firebaseApp);
      const usuariosRef = collection(db, "usuarios");
      try {
        await addDoc(usuariosRef, {
          nombre: nuevoUsuario.nombre,
          email: nuevoUsuario.email
        });
      } catch (error) {
        console.error("Error al agregar usuario:", error);
      }
    },

    async borrarUsuario(_context, id) {
      const db = getFirestore(firebaseApp);
      const usuarioRef = doc(db, "usuarios", id);
      try {
        await deleteDoc(usuarioRef);
      } catch (error) {
        console.error("Error al borrar usuario:", error);
      }
    }
  }
});
