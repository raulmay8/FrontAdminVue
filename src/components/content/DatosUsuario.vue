<script setup lang="ts">
import Layout from '@/layout/Layout.vue';
import { enviarDatosCliente } from '@/service/ClienteServices';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
// Datos del formulario
const formData = ref({
  nameCliente: '',
  apellidoCliente: '',
  correoCliente: '',
  telefono: '',
  fechaLlegada: '',
  horaLlegada: '',
  personas: 0,
  notas: ''
});

// Función para enviar los datos del formulario
const enviarFormulario = async () => {
  try {
    // Llama a la función enviarDatosCliente con los datos del formulario
    await enviarDatosCliente(formData.value);
    formData.value = {
      nameCliente: '',
      apellidoCliente: '',
      correoCliente: '',
      telefono: '',
      fechaLlegada: '',
      horaLlegada: '',
      personas: 0,
      notas: ''
    };
    router.push({ name: 'datosReserva' });
    console.log('Datos enviados correctamente', formData);
  } catch (error) {
    console.error('Error al enviar los datos:', error);
  }
};
</script>

<template>
  <Layout>
    <div class="max-w-screen-sm mx-auto p-4 bg-gray-700 mt-24 rounded-2xl">
      <div class="rounded-lg shadow-lg bg-gray-800 border-gray-700 p-4">
        <form class="p-4 mt-2" @submit.prevent="enviarFormulario">
          <!-- Campos del formulario -->
          <div class="mb-4 p-2">
            <input v-model="formData.nameCliente" placeholder="Nombre" class="bg-gray-700 text-white px-4 py-2 rounded-lg w-full">
          </div>
          <div class="mb-4 p-2">
            <input v-model="formData.apellidoCliente" placeholder="Apellido" class="bg-gray-700 text-white px-4 py-2 rounded-lg w-full">
          </div>
          <div class="mb-4 p-2">
            <input v-model="formData.correoCliente" placeholder="Correo electrónico" type="email" class="bg-gray-700 text-white px-4 py-2 rounded-lg w-full">
          </div>
          <div class="mb-4 p-2">
            <input v-model="formData.telefono" placeholder="Teléfono" type="tel" class="bg-gray-700 text-white px-4 py-2 rounded-lg w-full">
          </div>
          <div class="mb-4 p-2">
            <input v-model="formData.fechaLlegada" type="date" class="bg-gray-700 text-white px-4 py-2 rounded-lg w-full">
          </div>
          <div class="mb-4 p-2">
            <input v-model="formData.horaLlegada" type="time" class="bg-gray-700 text-white px-4 py-2 rounded-lg w-full">
          </div>
          <div class="mb-4 p-2">
            <input v-model.number="formData.personas" type="number" placeholder="Número de personas" class="bg-gray-700 text-white px-4 py-2 rounded-lg w-full">
          </div>
          <div class="mb-4 p-2">
            <textarea v-model="formData.notas" placeholder="Notas" class="bg-gray-700 text-white px-4 py-2 rounded-lg w-full"></textarea>
          </div>

          <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mx-4" type="submit">Enviar</button>
        </form>
        </div>
    </div>
  </Layout>
</template>
