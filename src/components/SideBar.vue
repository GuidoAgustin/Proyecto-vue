<template>
<div class="sidebar">
  <h2>Bienvenido</h2>
  <h3>Nombre: {{ nombre }} </h3>
  <h3>Email: {{ email }}</h3>
  <ul>
  <li><RouterLink to="/MiContador">Contador</RouterLink></li>
  <li><RouterLink to="/ListaDeTareas">Lista de tareas</RouterLink></li>
  <li><RouterLink to="/Registrar">Registrarse</RouterLink></li>
  </ul>
</div>

</template>

<script setup>
import { userRegistrarStore } from '@/Modules/Registro/stores/registrarStore';
import {ref, watch} from 'vue'
const registrarStore = userRegistrarStore()
const nombre = ref(registrarStore.nombre.value)
const email = ref(registrarStore.email.value)

watch(() => registrarStore.nombre, (newValue) => {
  nombre.value = newValue
})
watch(() => registrarStore.email, (newValue) => {
  email.value = newValue
})

</script>

<style>
.sidebar
 {
  position: fixed;
  top: 0;
  left: 0;
  width: 200px; /* ajusta el ancho según sea necesario */
  height: 100vh; /* ajusta el alto según sea necesario */
  padding: 10px;
  background-color: #f0f0f0; /* ajusta el color de fondo según sea necesario */
}

</style>
