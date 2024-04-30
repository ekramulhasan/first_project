<template>

<h3>{{ message }}</h3>
<h2>{{ title }}</h2>

<div class="">

<button @click="$emit('increaseBy',1)">+</button>
<p>{{ count }} / {{ counterStore.doubleCount }} </p>
<button @click="$emit('decreaseBy',1)">-</button>

</div>
<br>

</template>

<script setup>
import { inject, ref} from 'vue';
import { useCounterStore } from '../store/counter';

const props = defineProps(['title','count']);
const counterStore = useCounterStore();
defineEmits(['increaseBy','decreaseBy']);

const message = inject('msg');


</script>