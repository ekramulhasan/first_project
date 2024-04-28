<template>

<h2>{{ title }}</h2>
<div class="">
<button @click="count++">+</button>
<p>{{ count }}</p>
<button @click="count--">-</button>
</div>
<br>
</template>

<script setup>
import { ref} from 'vue';

let count = ref(0);
const props = defineProps(['title']);


</script>