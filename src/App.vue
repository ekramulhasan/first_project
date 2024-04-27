<template>

  <label>give a number</label>
  <br>
  <input type="number" v-model="count">
  <br>
  <br>
  <label for="">give a text</label>
  <br>
  <input type="text" v-model="person.person_name">
 
  <h1 @click="change_name">My name is {{ person.person_name }}</h1>
  <h2>My soon name is {{ person.person_age }}</h2>
  <button @click="increment(1)">+</button>
  <h3>{{ count }}</h3>
  <button @click="decrement(1)">-</button>

  <h2>{{ info }}</h2>


  <div v-html="li_code">

  </div>

  <div>

    <ul>
      <li v-for="(item, index) in todos" :key="item.id">{{ item.todo }}</li>
    </ul>

  </div>

  <div :class="{'bg-primary':isActive,'txt-color':hasError}" class="static">
    <img :src="imgUrl" alt="">

    <p :style="stylePro">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi eius ab eos facilis, natus reprehenderit illo. Distinctio sequi fugit quas voluptas ratione ipsum. Distinctio nesciunt beatae modi provident consectetur!</p>
  </div>

  <br>
  <br>

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

import { computed, reactive,ref } from 'vue';

let count = ref(0);
let imgUrl = ref("https://picsum.photos/200/300");


let isActive = ref(true);
let hasError = ref(false);

const stylePro = reactive({

  color: 'red',
  fontSize: '18px'
})

let person = reactive({

  person_name: "Ekramul",
  person_age: 30,
  person_address: "mirpur-2"

});

const li_code = ref(`
<li>apple</li>
<li>banana</li>
<li>mango</li>
`);

const todos = ref([

  {id:1,todo:"list-1"},
  {id:2,todo:"list-2"},
  {id:3,todo:"list-3"},
  {id:4,todo:"list-4"},

]);

// person.person_name = "Ekramul Hasan";

//es6 js code
const increment = amount => count.value += amount;
const decrement = amount => count.value -= amount;
const change_name = () => person.person_name = "Raiyan Ahmed Sanjar";

const info = computed(() => {

  return 'name: '+person.person_name+' '+', age: '+person.person_age;

});

// function increment() { 
//   count.value++;
//  }
 
//  function decrement() { 
//   count.value--;
//  }

</script>


<style>

.bg-primary{
  background-color: brown;
}
.bg-success{
  background-color: green;
}
.txt-color{
  color: red;
}

.static{
  background-color: green;
  margin: 10px;
  padding: 15px;
}
</style>