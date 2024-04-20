<script setup lang="ts">
import Layout from '@/layout/Layout.vue';
import { useRouter } from 'vue-router';
import { eliminarCenoteLocalStorage } from '@/service/CenoteServices';

// Función para obtener la información del cenote seleccionado del localStorage
const obtenerCenoteLocalStorage = () => {
  const cenotesSeleccionados = localStorage.getItem('cenotesSeleccionados');
  console.log(cenotesSeleccionados);
  return cenotesSeleccionados ? JSON.parse(cenotesSeleccionados)[0] : null;
};

const cenoteSeleccionado = obtenerCenoteLocalStorage();

// Obtener el enrutador
const router = useRouter();

const quitarCenote = () => {
  const cenoteId = cenoteSeleccionado?.data.id;
  if (cenoteId) {
    eliminarCenoteLocalStorage(cenoteId);
    router.push('/');
  }
};
const continuar = () => {
  // Aquí redireccionamos al usuario a la ruta datosUsuario
  router.push({ name: 'datosUsuario' });
};
</script>

<template>
    <Layout>
        <div class="max-w-screen-xl mx-auto p-4 bg-gray-700 mt-24 rounded-2xl">
            <div class="max-w-screen-2xl text-white m-2 text-2xl flex flex-col md:flex-row items-center justify-center">
                
                <div class="w-1/2">
                    <img :src="cenoteSeleccionado && cenoteSeleccionado.data.url" :alt="cenoteSeleccionado && cenoteSeleccionado.data.nameCenote" class="h-80 md:w-1/2 rounded-lg object-cover">
                </div>
                <div class="w-1/2">
                    <p class="mt-4">{{ cenoteSeleccionado && cenoteSeleccionado.data.nameCenote }}</p>
                    <p class="mt-4">Chalecos y transportación incluidos</p>
                    <p class="mt-4">Precio: ${{ cenoteSeleccionado && cenoteSeleccionado.data.precio }}</p>
                    <p class="mt-4">Se paga al llegar, solo efectivo</p>
                </div>
                <div class="flex justify-center">
                    <button @click="quitarCenote" class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 mx-4">Quitar</button>
                    <button @click="continuar" class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mx-4">Continuar</button>
                </div>
            </div>
            <!-- Botones "Quitar" y "Continuar" debajo de la información -->
        </div>
    </Layout>
</template>
