import { createApp } from 'vue'
import App from './App.vue'
import componentsUI from '@/components/UI'
import store from './store'

const app = createApp(App)

for (let index = 0; index < componentsUI.length; index++) {
    app.component(componentsUI[index].name, componentsUI[index]);
}

app.use(store).mount('#app')
