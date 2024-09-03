<template>
  <section class="category-items-side-section">
    <HeaderSide 
    @close = 'handleClose'
    :nameOfSection="nameOfSection"/>
    <div class="container">
      <div class="category-items-side-flex">
        <CategoryItem 
        v-for="category in categories" 
        :key="category.name" 
        :category="category" />
      </div>
    </div>
  </section>
</template>
  
<script setup lang="ts">
  import HeaderSide from '../HeaderSide.vue';
  import CategoryItem from './CategoryItem.vue';
  import { useRouter } from 'vue-router';
  import { useDataStore } from '@/store/MenuStore';

  const dataStore = useDataStore();
  const categories = dataStore.categories;
  const router = useRouter();

  const nameOfSection = 'Категории';
  const handleClose = () => {
    router.back();
  };
  
</script>
  
<style scoped>

</style>
  