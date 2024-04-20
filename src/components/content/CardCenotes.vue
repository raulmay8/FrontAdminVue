<template>
    <Layout>
        <div class="max-w-screen-xl mx-auto p-4 bg-gray-700 mt-24 rounded-2xl">
            <div class="max-w-screen-xl mx-auto p-4 ">
                <p class="text-center text-3xl font-bold mt-8 text-white">{{ cenote && cenote.data.nameCenote }}</p>
                <p class="text-center text-3xl font-bold text-white">{{ cenote && cenote.data.significado }}</p>
            </div>
            <div class="flex flex-col md:flex-row mt-4">
                <img class="h-80 md:w-1/2 rounded-lg object-cover" :src="cenote && cenote.data.url" :alt="cenote && cenote.data.nameCenote">
                <div class="md:w-1/2 md:pl-4 mt-4 md:mt-0 text-white">
                    <p class="text-l">{{ cenote && cenote.data.descripcion }}</p>
                    <p class="text-lg mt-4 ">Articulos Incluidos:</p>
                    <p class="text-lg ">Chaleco <br> Transporte</p>
                    <p class="text-lg mt-4 ">${{ cenote && cenote.data.precio }}</p>
                    <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600" @click="agregar">Agregar</button>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script setup lang="ts">
import Layout from '@/layout/Layout.vue';
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getCenoteById, guardarCenoteLocalStorage } from '@/service/CenoteServices';

const router = useRouter();
const route = useRoute();
const idP = Number(route.params.id);
const cenote = ref<any>(null);

onMounted(async () => {
  try {
    cenote.value = await getCenoteById(idP); 
  } catch (error) {
    console.error('Error al obtener el cenote:', error);
  }
});

// Función para manejar el evento de agregar
const agregar = () => {
  if (cenote.value) {
    // Guardar el cenote en localStorage
    guardarCenoteLocalStorage(cenote.value);
    // Redireccionar a otra página o ejecutar alguna otra lógica necesaria
    // Por ejemplo, redireccionar a la página de reserva
    router.push('/');
  }
};
</script>
