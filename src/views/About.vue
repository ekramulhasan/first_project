<template>
    <h1>this is about page</h1>
    <button @click="goHome">go to home page</button>

    <ul>
        <li v-for="service in services" :key="service.id">
            <router-link :to="{name:'single-service',params:{id: service.name}}">
                {{ service.name }}
            </router-link>
        </li>
    </ul>
</template>

<script setup>

import { ref } from 'vue';
import { useRouter} from 'vue-router';

const router = useRouter();

let services = ref([

    { id: 1, name: 'web application' },
    { id: 2, name: 'app application' },
    { id: 3, name: 'desktop application' },
    { id: 4, name: 'customize application' },
    { id: 5, name: 'digital marketing' },

]);

const goHome = () => {

    router.push({ name: 'home' });
};

</script>