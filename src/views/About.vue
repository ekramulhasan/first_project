<template>
    <h1>this is about page</h1>
    <button @click="goHome">go to home page</button>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goHome = () => {

    router.push({name:'home'});
};
</script>