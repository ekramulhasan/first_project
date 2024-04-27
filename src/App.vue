<template>

<h1>{{ title }}</h1>

<Counter />
 
</template>

<script setup>
import { ref } from 'vue';
import Counter from './components/Counter.vue';

let title = ref('new item avaiable');

</script>

