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
  component: () => import('../components/MiContador.vue'),
},
{
  path: '/ListaDeTareas',
  name: 'listaDeTareas',
  component: () => import('../components/ListaDeTareas.vue'),
},
   ],
})

export default router
