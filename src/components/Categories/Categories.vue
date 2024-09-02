<template>
  <section class="categories">
    <div class="container categories-main-container">
      <div class="main-title">
        <h1> 
          Категории
        </h1>
        <button class="main-button"> 
          Смотреть все
        </button>
      </div>
      <div class="categories-main-items">
        <CategoryItemMain 
          v-for="category in categories" 
          :key="category.name" 
          :category="category" 
        />
      </div>
    </div>
  </section>
</template>
  
<script setup>
  import CategoryItemMain from './CategoryItemMain.vue';
  import { useDataStore } from '@/store/MenuStore';

  const dataStore = useDataStore();
  const categories = dataStore.categories;
  
</script>
  
<style scoped>
      
</style>
  