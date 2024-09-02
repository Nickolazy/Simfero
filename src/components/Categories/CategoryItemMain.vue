<template>
   <div class="category-item">
    <button class="category-item-button">
      <img :src="category.icon" alt="Category Icon" />
      <p class="category-item-name">{{ category.name }}</p>
    </button>
  </div>
</template>
  
<script setup lang="ts">
  import { defineProps } from 'vue';

  interface Category {
    name: string;
    icon: string;
    img: string;
  }

  const props = defineProps<{
    category: Category;
  }>();
</script>
  
<style scoped>
      
</style>
