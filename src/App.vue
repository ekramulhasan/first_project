<template>

<h1>{{ title }}</h1>

<input type="text" ref="input">
 
</template>

<script setup>
import { onBeforeMount,ref,onMounted } from 'vue';

let title = ref('new item avaiable');
const input = ref(null);

onMounted(() => {
  input.value.focus()
  console.log(input.value);
});

</script>