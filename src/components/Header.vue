<template>
	<header class="header">
    <div class="container container-header-flex">
      <div class="header-logo">
        <img src="@/assets/svg/logo-header.svg" alt="Logo">
      </div>

      <ul class="header-list">
        <li class="header-item">
          <button @click="openSearch" class="button-header">
            <img src="@/assets/svg/icons/icon-search.svg" alt="Search">
          </button>
        </li>
        <li class="header-item">
          <button @click="openStore" class="button-header">
            <img 
              src="@/assets/svg/icons/icon-store.svg" 
              alt="Store">
          </button>
          <img v-if="isBasketFull" 
              class="header-store-rect"
              src="@/assets/svg/rect.svg">
        </li>
      </ul>
    </div>
	</header>
</template>
  
<script setup lang="ts">
  import { useDataStore } from '@/store/MenuStore';
  import { computed } from 'vue';
  import { useRouter } from 'vue-router';

  const dataStore = useDataStore();
  const router = useRouter(); 

  const isBasketFull = computed(() => {
    return dataStore.basket[0];
  });

  const openStore = () => {
    router.push({ name: 'store' });
  }

  const openSearch = () => {
    router.push({ name: 'search' });
  }
</script>
  
<style scoped>

</style>
