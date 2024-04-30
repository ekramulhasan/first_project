<template>
    <h1>this is about page</h1>
    <button @click="goHome">go to home page</button>

    <ul>
        <li v-for="service in serviceStore.services" :key="service.id">
            <router-link :to="{name:'single-service',params:{id: service.name}}">
                {{ service.name }}
            </router-link>
        </li>
    </ul>

    <h2>{{ counterStore.title }}</h2>
    <p>{{ serviceStore.ourService }}</p>
</template>

<script setup>

import { ref } from 'vue';
import { useRouter} from 'vue-router';
import { useCounterStore } from '../store/counter';
import { useServiceStore } from '../store/service';

const router = useRouter();
const counterStore = useCounterStore();
const serviceStore = useServiceStore();


const goHome = () => {

    router.push({ name: 'home' });
};

</script>