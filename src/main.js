import { createApp } from 'vue';
import {createRouter,createWebHashHistory} from 'vue-router'
import Home from "./pages/home.vue"
import App from './App.vue';
import './app.css';


const routes = [
    {path:'/',component:Home}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
createApp(App).use(router).mount('#app');
