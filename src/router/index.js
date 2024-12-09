import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: HomeView,
//     },

{
  path: '/MiContador',
  name: 'contador',
  component: () => import('../Modules/contador/components/MiContador.vue'),
},
{
  path: '/ListaDeTareas',
  name: 'listaDeTareas',
  component: () => import('../Modules/listaDeTareas/components/ListaDeTareas.vue'),
},
{
  path: '/Registrar',
  name: 'Registrar',
  component: () => import('../Modules/Registro/views/RegistrarView.vue'),
},
   ],
})

export default router
