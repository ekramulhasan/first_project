<template>

<h1>{{ title }}</h1>


 
</template>

<script setup>
import { onBeforeMount,ref,onMounted } from 'vue';

let title = ref('new item avaiable');

onBeforeMount(() => {
  title.value = 'learn vue js';
  console.log('hello world');
});

onMounted(() => {

  title.value = 'new value';
  console.log('mounted');
});

</script>