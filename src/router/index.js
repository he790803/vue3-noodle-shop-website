import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import IndexView from '../views/IndexView.vue';

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexView,
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/HomeView.vue'),
          meta: {
            enterClass: '',
            leaveClass: 'animate__animated animate__fadeOutLeft',
          },
        },
        {
          path: '/shop',
          component: () => import('../views/ShopView.vue'),
          meta: {
            enterClass: 'animate__animated animate__fadeInLeft',
            leaveClass: 'animate__animated animate__fadeOutLeft',
          },
          children: [
            {
              path: '',
              name: 'shop',
              component: () => import('../components/Products.vue'),
              meta: {
                enterClass: 'animate__animated animate__fadeInLeft',
                leaveClass: 'animate__animated animate__fadeOutLeft',
              },
            },
            {
              path: ':id',
              name: 'productInformation',
              component: () => import('../components/CardInformation.vue'),
              meta: {
                enterClass: 'animate__animated animate__fadeInLeft',
                leaveClass: 'animate__animated animate__fadeOutLeft',
              },
            },
          ],
        },
        {
          path: '/shopping-car',
          component: () => import('../views/ShoppingCar.vue'),
          meta: {
            enterClass: 'animate__animated animate__fadeInLeft',
            leaveClass: 'animate__animated animate__fadeOutLeft',
          },
        },
        {
          path: '/complete',
          component: () => import('../components/CompletePage.vue'),
          meta: {
            enterClass: 'animate__animated animate__fadeInLeft',
            leaveClass: 'animate__animated animate__fadeOutLeft',
          },
        },
        {
          path: '/about',
          name: 'about',
          meta: {
            enterClass: 'animate__animated animate__fadeInLeft',
            leaveClass: 'animate__animated animate__fadeOutLeft',
          },
          component: () => import('../views/AboutView.vue'),
        },
      ],
    },
  ],
});

export default router;
