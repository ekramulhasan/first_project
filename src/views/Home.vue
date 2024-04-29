<template>

<h1>{{ title }}</h1>


<Counter  title="counter name" :count="count" @increase-by="increment" @decrease-by="(n) => count -= n"> 


</Counter>

 
</template>

<script setup>
import { provide, ref } from 'vue';
import Counter from '../components/Counter.vue';

let title = ref('new item avaiable');
let count = ref(0);
provide('msg','i am shawon');

let increment = (n) => count.value += n;

</script>

