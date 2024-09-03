<template>
   <div class="category-item">
    <button @click="openCategoryPage" class="category-item-button">
      <img :src="category.icon" alt="Category Icon" />
      <p class="category-item-name">{{ category.name }}</p>
    </button>
  </div>
</template>
  
<script setup lang="ts">
  import { defineProps } from 'vue';
  import { useRouter } from 'vue-router';

  interface Category {
    name: string;
    icon: string;
    img: string;
    path: string;
  }

  const props = defineProps<{
    category: Category;
  }>();

  const router = useRouter();

  const openCategoryPage = () => {
    router.push({ 
      name: 'category-page', 
      params: { 
        categoryPath: props.category.path
      },
      query: {
        categoryName: props.category.name
      }
    });
  }
</script>
  
<style scoped>
      
</style>
