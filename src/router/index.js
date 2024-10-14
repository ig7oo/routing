import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: "Home",
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: "About", 
      },
    },
    {
      path: '/my',
      name: 'my view',
      component: () => import('../views/MyView.vue'),
    },
    {
      path: "/:catchAll(.*)",
      component: () => import('../views/NoShow.vue'),
      meta: {
        title: "404",
      },
    },
    {
      path: '/users',
      name: 'AnvändarLista',
      component: () => import('../views/UsersView.vue'),
    },
    {
      path: '/users/:id',
      name: 'Användare',
      component: () => import('../views/SingleUserView.vue'),
      props: true,
    },
  ]
});

export default router

router.beforeEach((to) => {
  document.title = to.meta?.title ?? "Default Title";
});