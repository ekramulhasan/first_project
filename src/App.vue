<template>

  <label>give a number</label>
  <br>
  <input type="number" v-model="count">
  <br>
  <br>
  <label for="">give a text</label>
  <br>
  <input type="text" v-model="person.person_name">
 
  <h1>My name is {{ person.person_name }}</h1>
  <h2>My soon name is {{ person.person_age }}</h2>
  <button @click="decrement">+</button>
  <h3>{{ count }}</h3>
  <button @click="increment">-</button>

</template>

<!-- option api -->
<!-- <script>
export default {

  data() {
    return {
      myName: "Ekramul Hasan Shawon",
      mySoon: "Raiyan Ahmed Sanjar",
      count: 0
    }
  },

}
</script> -->

<!-- composition api -->
<!-- <script>

export default{

  setup() {

    let count = 0;
    const myName = "Ekramul Hasan Shawon";
    const mySoon = "Raiyan Ahmed Sanjar";

    return {count,myName,mySoon}
  }
}

</script> -->

<!-- second way it's easy -->
<!-- <script setup>

    import { ref } from 'vue';

    let count = ref(0);
    const myName = ref("Ekramul Hasan Shawon");
    const mySoon = ref("Raiyan Ahmed Sanjar");
    
</script> -->

<script setup>

import { reactive,ref } from 'vue';

let count = ref(0);
count.value = 10;

let person = reactive({

  person_name: "Ekramul",
  person_age: 30,
  person_address: "mirpur-2"

});

person.person_name = "Ekramul Hasan";

function increment() { 
  count.value++;
 }
 
 function decrement() { 
  count.value--;
 }

</script>