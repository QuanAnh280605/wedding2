import { createApp } from 'vue'
import './style.css'
import App from './layouts/App.vue'
import router from './router/router';
import './assets/tailwind.css'

createApp(App).use(router).mount('#app');