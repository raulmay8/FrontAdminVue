<script setup lang="ts">

</script>
<template>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div class="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <div class="hidden md:block">
          <ul class="font-medium flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <li>
              <router-link to="/" class="block py-2 px-3 text-white bg-blue-700 rounded hover:bg-blue-600 md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">
                  Cenotes
              </router-link>
            </li>
            <li>
              <router-link to="/busquedaReserva" class="block py-2 px-3 text-white bg-blue-700 rounded hover:bg-blue-600 md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">
                  Mi Reserva
              </router-link>
            </li>
            <li>
              <router-link to="/reserva" class="block py-2 px-3 text-white bg-blue-700 rounded hover:bg-blue-600 md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">
                  Mis cenotes
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>