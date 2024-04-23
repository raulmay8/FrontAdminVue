import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../components/Dashboard.vue';
import CardCenotes from '@/components/content/CardCenotes.vue';
import MiReserva from '@/components/content/MiReserva.vue';
import DatosUsuario from '@/components/content/DatosUsuario.vue';
import DatosReserva from '@/components/content/DatosReserva.vue';
import BuscarReserva from '@/components/content/BuscarReserva.vue';

const routes = [
      {
        path: '/',
        name: 'dashboard',
        component: Dashboard
      },
      {
        path: '/:id', 
        name: 'detalle', 
        component: CardCenotes 
      },
      {
        path: '/reserva', 
        name: 'reserva', 
        component: MiReserva 
      },
      {
        path: '/datosUsuario', 
        name: 'datosUsuario', 
        component: DatosUsuario 
      },
      {
        path: '/datosReserva', 
        name: 'datosReserva', 
        component: DatosReserva 
      },
      {
        path: '/busquedaReserva', 
        name: 'busquedaReserva', 
        component: BuscarReserva 
      },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
