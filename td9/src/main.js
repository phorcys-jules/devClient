 
import { createApp } from 'vue'
import App from './App.vue'

import * as VueRouter from 'vue-router'

import HomePage from './components/Homepage.vue'
import Tasks from './components/Tasks.vue'
import User from './components/User.vue'
import NotFound from './components/Notfound.vue'
import Map from './components/Carte.vue'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/tasks', component: Tasks },
        { path: '/user/:id', component: User },
        { path: '/carte', component: Map },
        { path: '/:catchAll(.*)', component: NotFound },
    ]
})

createApp(App).use(router).mount('#app')