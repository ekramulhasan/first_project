<template>

<h1>{{ title }}</h1>

<input type="text" ref="input">
<br>
<br>

<div class="card">

  <button @click="modal = true">show modal</button>

 <Teleport to="body">

  <div v-if="modal" >
  <p>hello world, this this modal here</p>
  <button @click="modal = false">hide modal</button>
  </div>

 </Teleport>

</div>


 
</template>

<script setup>
import { onBeforeMount,ref,onMounted } from 'vue';

let title = ref('new item avaiable');
const input = ref(null);

let modal = ref(false);

onMounted(() => {
  input.value.focus()
  console.log(input.value);
});



</script>