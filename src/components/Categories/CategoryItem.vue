<template>
  <button @click="openCategoryPage" class="category-item-side-button">
    <img :src="category.img" alt="Image">
    <p>
      {{ category.name }}
    </p>
  </button>
</template>
  
<script setup lang="ts">
  import { defineProps } from 'vue';
  import { useRouter  } from 'vue-router';

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
  