<template>
  <section class="categories">
    <div class="container categories-main-container">
      <div class="main-title">
        <h1> 
          Категории
        </h1>
        <button @click="goToAll" class="main-button"> 
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
  
<script setup lang="ts">
  import CategoryItemMain from './CategoryItemMain.vue';
  import { useDataStore } from '@/store/MenuStore';
  import { useRouter } from 'vue-router';

  const dataStore = useDataStore();
  const categories = dataStore.categories;
  const router = useRouter();

  const goToAll = () => {
    router.push({ name: 'categories'});
  }
  
</script>
  
<style scoped>
      
</style>
  