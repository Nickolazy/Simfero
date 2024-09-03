<template>
  <div v-if="helloOpened">
    <Hello @close="closeHello" />
  </div>
  <div v-else>
    <Header />
    <main class="main">
      <Categories />
      <Sales />
      <BusinessLunch />
      <Recomendations />
    </main>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue';

  import Hello from './Hello.vue'
  import Header from './Header.vue';
  import Categories from './Categories/Categories.vue';
  import Sales from './Sales/Sales.vue';
  import BusinessLunch from './BusinessLunch/BusinessLunch.vue';
  import Recomendations from './Recomendations.vue';

  const helloOpened = ref(false);

  onMounted(() => {
    const helloOpenedState = sessionStorage.getItem('helloOpened');
    const isBackNavigation = history.state && history.state.fromBack;

    if (helloOpenedState === null && !isBackNavigation) {
      helloOpened.value = true;
    } else {
      helloOpened.value = JSON.parse(helloOpenedState || 'false');
    }

    history.replaceState({ fromBack: false }, '');
  });

  function closeHello() {
    helloOpened.value = false;
    sessionStorage.setItem('helloOpened', JSON.stringify(helloOpened.value));
  }

  window.addEventListener('popstate', () => {
    history.replaceState({ fromBack: true }, '');
  });
</script>

<style scoped>
  
</style>
