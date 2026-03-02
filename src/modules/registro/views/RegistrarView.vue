<template>
  <div>
    <h2>Formulario de registro</h2>
    <Form :validation-schema="schema" @submit="onSubmit">
      <div class="form">
        <label for="nombre">Nombre</label>
        <Field v-model="nombre" name="nombre" type="text" id="nombre" placeholder="ingrese su nombre" />
        <ErrorMessage name="nombre" class="error" />
      </div>
      <div class="form">
        <label for="email">Email</label>
        <Field v-model="email" name="email" type="email" id="email" placeholder="ingrese su email" />
        <ErrorMessage name="email" class="error" />
      </div>
      <button type="submit">Registrarse</button>  
    </Form>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import { schema } from '../schemas/validationSchemas';
import { useRegistrarStore } from '../stores/registrarstore';
import { ref } from 'vue';

const registrarStore = useRegistrarStore();
const nombre = ref('');
const email = ref('');

const onSubmit = (values) => {
  registrarStore.guardarRegistro(nombre.value, email.value);
  console.log('Se ha enviado el formulario', values);
}
</script>

<style scoped>
.form {
  margin-bottom: 10px;
}
.error {
  color: red;
  display: block;
  font-size: 0.8em;
}
</style>