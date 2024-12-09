<template>
  <h1> Hola Mundo</h1>
 <div class="contador">
   <p class="contador-numero">{{ contador }}</p>
   <button @click="incrementar">incrementar</button>
   <button @click="decrementar">decrementar</button>
 </div>
</template>

<script setup>
import { ref } from 'vue'
const contador = ref(0)
const incrementar = () => {
  contador.value++
}
const decrementar = () => {
  contador.value--
}
</script>

<style scoped>
.contador-numero {
  font-size: 48px;
  font-weight: bold;
  color: greenyellow; /* azul */
  margin-bottom: 20px;
  text-align: left;
}

button {
  background-color: greenyellow; /* verde */
  color: black; /* blanco */
  padding: 10px 20px; /* relleno */
  border: none; /* sin borde */
  border-radius: 1000px; /* esquinas redondas */
  cursor: pointer; /* cursor de mano */
  font-family: 'Courier New', monospace;
}

button:hover {
  background-color: #3e8e41; /* verde oscuro */
}

button:active {
  background-color: #2e6c31; /* verde más oscuro */
}

.decrementar {
  background-color: #c08123; /* naranja */
}

.incrementar {
  background-color: #8bc34a; /* verde claro */
}
</style>
