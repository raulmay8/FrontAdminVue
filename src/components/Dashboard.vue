<template>
  <Layout>

    <div class="max-w-screen-xl mx-auto p-4">
      <p class="text-center text-3xl font-bold mt-8 text-gray-700">¡Conoce los cenotes de <br>Homun Yucatan!</p>
    </div>
    <div class="grid grid-cols-3 md:grid-cols-2 gap-4 mr-64 ml-64 mt-20 mb-10">
      <!-- Itera sobre cada cenote y muestra su información -->
      <div v-for="cenote in cenotes" :key="cenote.id" class="flex flex-col items-center justify-center bg-gray-800 rounded-2xl p-4 text-white">
        <img class="h-80 max-w-full rounded-lg" :src="cenote.url" :alt="`Imagen de ${cenote.nameCenote}`">
        <h3 class="mt-2 text-lg font-semibold">{{ cenote.nameCenote }}</h3>
        <p class="mt-1 text-sm">{{ cenote.descripcion }}</p>
        <!-- Al hacer clic en el botón, llama a la función verDetalle con el ID del cenote -->
        <button @click="verDetalle(cenote.id)" class="mt-2 px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600">Ver más <i class="ml-1 fas fa-chevron-right"></i></button>
      </div>
    </div>
  </Layout>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import { getAllCenotes, getCenoteById } from '@/service/CenoteServices';
  import Layout from '@/layout/Layout.vue';
  
  const cenotes = ref([]);
  const router = useRouter();

  const id = router.currentRoute.value.params.id;
  
  onMounted(async () => {
    try {
      // Obtiene todos los cenotes
      cenotes.value = await getAllCenotes();
    } catch (error) {
      console.error('Error al obtener los cenotes:', error);
    }
  });

  const verDetalle = (cenoteId: number) => {
    // Navega a la ruta de detalle del cenote con el ID correspondiente
    router.push({ name: 'detalle', params: { id: cenoteId } });
  };
  </script>
  