<template>

<h1>{{ counterStore.title }}</h1>


<Counter  title="counter name" :count="counterStore.count" @increase-by="increment" @decrease-by="(n) => counterStore.count -= n"> 


</Counter>

 
</template>

<script setup>

import { provide, ref } from 'vue';
import Counter from '../components/Counter.vue';
import {useCounterStore} from '../store/counter';

const counterStore = useCounterStore();

provide('msg','i am shawon');

let increment = (n) => counterStore.count += n;

</script>

