import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Service from "../views/Service.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import SingleService from "../views/SingleService.vue";

const routes = [

    { path: '/',name:'home', component: Home },
    { path: '/service', name:'service', component: Service },
    { path: '/service/:id', name:'single-service', component: SingleService },
    { path: '/about-us',name:'about', component: About },
    { path: '/contact',name:'contact', component: Contact },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;