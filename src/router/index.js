import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WatchView from '../views/WatchView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/watch/:id',
            name: 'watch',
            component: WatchView
        },
        {
            path: '/movie/:id',
            name: '',
            component: () => import('../views/MovieView.vue')
        },
        {
            path: '/login',
            name: '',
            component: () => import('../views/LoginView.vue')
        },
        {
            path: '/logout',
            name: '',
            component: () => import('../views/LogoutView.vue')
        },
        {
            path: '/register',
            name: '',
            component: () => import('../views/RegisterView.vue')
        }
    ]
})

export default router
