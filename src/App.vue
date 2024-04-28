<template>

<h1>{{ title }}</h1>


<Counter v-for="i in 5" title="counter name"> 

  <div class="">
    <p>part-{{ i }}</p>
  </div>

</Counter>

 
</template>

<script setup>
import { ref } from 'vue';
import Counter from './components/Counter.vue';

let title = ref('new item avaiable');

</script>

