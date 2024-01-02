import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from "@/views/Login.vue";
import Dashboard from "@/views/Dashboard.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/dashboards',
            name: 'dashboards',
            component: Dashboard
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
})

export default router
