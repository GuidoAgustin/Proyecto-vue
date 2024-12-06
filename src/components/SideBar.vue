<template>
<div class="sidebar">
  <h2>Barra lateral</h2>
  <ul>
  <li><RouterLink to="/MiContador">Contador</RouterLink></li>
  <li><RouterLink to="/ListaDeTareas">Lista de tareas</RouterLink></li>
  </ul>
</div>

</template>

<script setup>

</script>

<style>
.sidebar {
  width: 200px;
  background-color: aliceblue;
  padding: 20px;
}

</style>
