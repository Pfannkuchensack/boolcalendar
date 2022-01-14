import { createApp } from 'vue/dist/vue.esm-bundler.js'
import { createRouter, createWebHashHistory } from 'vue-router'
import Timeline from 'timeline.vue'
import Calendar from 'calendar.vue'

const routes = [
    { path: "/", component: Calendar },
    { path: "/timeline", component: Timeline },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const app = createApp({})
app.use(router)
app.mount('#app')
