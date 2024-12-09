<template>
  <div>
    <h2>Formulario de Registro</h2>
    <Form :validation-schema="schema" @submit="onSubmit">
      <div class="form">
        <label for="nombre">Nombre: </label>
        <Field type="text" name="nombre" id ="nombre" placeholder="Ingrese su Nombre"/>
        <ErrorMessage name="nombre" />
      </div>
      <div class="form">
        <label for="Correo">Correo: </label>
        <Field type="email"  name="email" id ="correo" placeholder="Ingrese su Email"/>
        <ErrorMessage name="email" />
      </div>
      <div  class="form">
      <button type="submit">Registrarse</button>
      </div>
    </Form>
  </div>

</template>

<script setup>

import{ Form, Field, ErrorMessage } from 'vee-validate'
 import{schema} from '../schemas/validationSchema'

const onSubmit = () => {
   console.log("Se ha enviado el formulario:")}

</script>

<style>
.form {
  margin-bottom: 10px;
  }
</style>
