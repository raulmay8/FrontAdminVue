<script setup lang="ts">
import Layout from '../../layout/Layout.vue'
import { ref } from 'vue'
import { getReservaByToken } from '../../service/ReservaServices'

const token = ref('');
const reserva = ref<any>(null);

const buscarReserva = async () => {
  try {
    if (token.value) {
      reserva.value = await getReservaByToken(token.value);
      console.log(reserva.value.data)
    }
  } catch (error) {
    console.error('Error al buscar la reserva:', error);
  }
}
</script>

<template>
  <Layout>
    <div class="max-w-screen-md mx-auto p-4 bg-gray-700 mt-24 rounded-2xl">
        <form class="p-4 mt-2 text-white">
            <div class="mb-4 p-2">
                <input v-model="token" type="search" placeholder="Buscar reserva" class="bg-gray-700 text-white px-4 py-2 rounded-lg w-full">
            </div>
            <button @click.prevent="buscarReserva" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Buscar
            </button>
        </form>
      <div class="max-w-screen-2xl text-white m-2 text-2xl flex flex-col md:flex-row items-center justify-center">
        <div v-if="reserva" class="max-w-screen-xl mx-auto p-4 bg-gray-700 rounded-2xl">
            <div class="m-2 p-2">
                <p class="text-3xl font-bold text-white">Detalles de la Reserva</p>
            </div>
                <p class="text-center text-xl mt-8 text-white">Nombre Cenote: {{ reserva.data.cenote.nameCenote   }}</p>
                <p class="text-center text-xl mt-8 text-white">Significado Cenote: {{ reserva.data.cenote.significado   }}</p>
                <p class="text-center text-xl mt-8 text-white">Cliente: {{ reserva.data.cliente.nameCliente }}</p>   
                <p class="text-center text-xl mt-8 text-white">Apellido: {{ reserva.data.cliente.apellidoCliente }}</p>   
                <p class="text-center text-xl mt-8 text-white">Correo: {{ reserva.data.cliente.correoCliente }}</p>   
                <p class="text-center text-xl mt-8 text-white">Telefono: {{ reserva.data.cliente.telefono }}</p>   
                <p class="text-center text-xl mt-8 text-white">Personas: {{ reserva.data.cliente.personas }}</p>   
                <p class="text-center text-xl mt-8 text-white">Notas del cliente: {{ reserva.data.cliente.notas }}</p>   
                <p class="text-center text-xl mt-8 text-white">Precio total: {{ reserva.data.precioTotal }}</p>   
        </div>
      </div>
    </div>
  </Layout>
</template>
