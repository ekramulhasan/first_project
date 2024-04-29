import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Service from "../views/Service.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";

const routes = [

    { path: '/', component: Home },
    { path: '/service', component: Service },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;