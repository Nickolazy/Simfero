<template>
  <div v-if="helloOpened">
    <Hello @close="closeHello" />
  </div>
  <div v-else>
    <Header />
    <main class="main">
      <Categories />
      <Sales />
    </main>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  import Hello from './Hello.vue'
  import Header from './Header.vue';
  import Categories from './Categories/Categories.vue';
  import Sales from './Sales/Sales.vue';

  const helloOpened = ref(true);

  function closeHello() {
    helloOpened.value = false;
  }
</script>

<style scoped>
  
</style>
