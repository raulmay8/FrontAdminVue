<script setup lang="ts">
import Layout from '@/layout/Layout.vue';
import { almacenarReserva } from '@/service/ReservaServices';
import { ref } from 'vue';

const mensajeExito = ref<string>('');
// Función para obtener los datos del localStorage
const obtenerDatosLocalStorage = () => {
  const cliente = localStorage.getItem('cliente');
  const cenotesSeleccionados = localStorage.getItem('cenotesSeleccionados');
  console.log(cliente, cenotesSeleccionados)
  return {
    cliente: cliente ? JSON.parse(cliente) : null,
    cenotesSeleccionados: cenotesSeleccionados ? JSON.parse(cenotesSeleccionados) : null
  };
};

// Llama a la función para obtener los datos
const { cliente, cenotesSeleccionados } = obtenerDatosLocalStorage();

const guardarReserva = async () => {
  try {
    if (cliente && cenotesSeleccionados) {
      const reservaData = {
        clienteId: cliente.data.data.id,
        cenoteId: cenotesSeleccionados[0].data.id, // Suponiendo que solo hay un cenote seleccionado
        precioTotal: 300 // Precio total de la reserva
      };
      await almacenarReserva(reservaData);
      console.log(cliente, cenotesSeleccionados, reservaData)
      mensajeExito.value = '¡Reserva almacenada correctamente!';
    } else {
      mensajeExito.value = 'Error: no se encontraron datos en el localStorage';
    }
  } catch (error) {
    console.error('Error al guardar la reserva:');
    mensajeExito.value = 'Error al guardar la reserva';
  }
};

</script>

<template>
  <Layout>
    <div class="max-w-screen-sm mx-auto p-4 bg-gray-700 mt-24 rounded-2xl">
      <div class="rounded-lg shadow-lg bg-gray-800 border-gray-700 p-4">
        <form class="p-4 mt-2 text-white">
          <div>
            <p class="m-2 p-2">Nombre: {{ cliente ? cliente.data.data.nameCliente : '' }}</p>
            <p class="m-2 p-2">Apellido: {{ cliente ? cliente.data.data.apellidoCliente : '' }}</p>
            <p class="m-2 p-2">Correo electrónico: {{ cliente ? cliente.data.data.correoCliente : '' }}</p>
            <p class="m-2 p-2">Teléfono: {{ cliente ? cliente.data.data.telefono : '' }}</p>
            <p class="m-2 p-2">Fecha de llegada: {{ cliente ? cliente.data.data.fechaLlegada : '' }}</p>
            <p class="m-2 p-2">Hora de llegada: {{ cliente ? cliente.data.data.horaLlegada : '' }}</p>
            <p class="m-2 p-2">Número de personas: {{ cliente ? cliente.data.data.personas : '' }}</p>
            <p class="m-2 p-2">Notas: {{ cliente ? cliente.data.data.notas : '' }}</p>
          </div>

          <div>
            <p class="m-2 p-2">Cenotes Seleccionados:</p>
            <ul>
              <li class="m-2 p-2" v-for="cenote in cenotesSeleccionados" :key="cenote.data.id">
                {{ cenote.data.nameCenote }}
              </li>
            </ul>
          </div>

          <!-- Botones -->
          <div class="flex justify-center mt-4">
            <button @click="guardarReserva" class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Guardar Reserva</button>
          </div>
          <div v-if="mensajeExito" class="mt-4 text-green-500">{{ mensajeExito }}</div>
       
        </form>
      </div>
    </div>
  </Layout>
</template>
