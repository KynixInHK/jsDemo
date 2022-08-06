import { createApp, nextTick } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/', component: () => import('./view/index.vue'), name: 'index'
    },
    {
        path: '/content', component: () => import('./view/content.vue'), name: 'content'
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
router.beforeEach((to, from, next) => {
    if(from.name === 'index' || from.name === 'content') {
        next()
    } else if(to.name === 'index') {
        next()
    } else {
        router.push('/')
    }
})
createApp(App).use(router).mount('#app')
