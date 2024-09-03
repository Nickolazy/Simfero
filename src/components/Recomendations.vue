<template>
  <section class="recomendations-section">
    <div class="container recomendations-main">
      <div class="main-title">
        <h1>
          Рекомендации для вас
        </h1>
      </div>
      <div class="recomendations-main-items">
        <ItemMenu 
          v-for="item in menuItems"
          :key="item.id" 
          :menuItem="item"
          />
      </div>
    </div>
  </section>
</template>
  
<script setup lang="ts">
  import ItemMenu from './ItemMenu.vue';
  import { useDataStore } from '@/store/MenuStore';

  const dataStore = useDataStore();
  const menuItems = dataStore.menu;

</script>
  
<style scoped>
      
</style>