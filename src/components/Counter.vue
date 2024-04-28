<template>

<h3>{{ message }}</h3>
<h2>{{ title }}</h2>

<div class="">

<button @click="$emit('increaseBy',1)">+</button>
<p>{{ count }}</p>
<button @click="$emit('decreaseBy',1)">-</button>

</div>
<br>

</template>

<script setup>
import { inject, ref} from 'vue';

const props = defineProps(['title','count']);
defineEmits(['increaseBy','decreaseBy']);

const message = inject('msg');


</script>