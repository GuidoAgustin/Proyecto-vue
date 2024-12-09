<template>
<div class="sidebar">
  <h2>Barra lateral</h2>
  <ul>
  <li><RouterLink to="/MiContador">Contador</RouterLink></li>
  <li><RouterLink to="/ListaDeTareas">Lista de tareas</RouterLink></li>
  <li><RouterLink to="/Registrar">Registrarse</RouterLink></li>
  </ul>
</div>

</template>

<script setup>

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
