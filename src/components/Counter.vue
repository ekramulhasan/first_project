<template>

<slot />
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


</script>