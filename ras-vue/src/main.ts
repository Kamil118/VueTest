import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import FrontPage from './FrontPage.vue'
import router from './router'

const app = createApp(FrontPage)

app.use(createPinia())
app.use(router)

import { useUserStore } from './stores/user'

export default {
    setup() {
        const userStore = useUserStore()
        return { userStore }
    }
}

app.mount('#app')
