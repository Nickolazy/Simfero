<template>
  <section class="category-items-side-section">
    <HeaderSide 
    @close = 'handleClose'
    :nameOfSection="nameOfSection"/>
    <div class="container">
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
  import HeaderSide from '../HeaderSide.vue';
  import ItemMenu from '../ItemMenu.vue';
  import { useRouter } from 'vue-router';
  import { useDataStore } from '@/store/MenuStore';
  import { defineProps, computed } from 'vue';

  const dataStore = useDataStore();
  const menuItems = dataStore.menu;
  const router = useRouter();

  const props = defineProps<{
    categoryPath: string;
    categoryName: string;
  }>();

  // const filteredMenuItems = computed(() => {
  //   return menuItems.filter(item => item.category === props.categoryName);
  // });

  
  const nameOfSection = props.categoryName;
  const handleClose = () => {
    router.back();
  };
</script>
  
<style scoped>
      
</style>
  