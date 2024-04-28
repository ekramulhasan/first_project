<template>

<h2>{{ title }}</h2>

<div class="">

<button @click="$emit('increaseBy',1)">+</button>
<p>{{ count }}</p>
<button @click="$emit('decreaseBy',1)">-</button>

</div>
<br>

</template>

<script setup>
import { ref} from 'vue';

const props = defineProps(['title','count']);


</script>