<template>
  <div class="container-menu-item">
    <SaleBlock v-if="menuItem.sale > 0" 
      class="sales-item-sale"
      :sale="menuItem"/>

    <div class="menu-item-block">
      <img :src="menuItem.img" alt="Menu Position Photo">
    </div>
  </div>
</template>

<script setup lang="ts">
  import SaleBlock from './Sales/SaleBlock.vue';
  import { defineProps } from 'vue';

  interface MenuItem {
    id: number,
    name: string;
    composition: string;
    description: string;
    category: string;
    weight: number;
    cookTime: number;
    mark: number;
    sale: number;
    cost: number;
    img: string;
  }

  const props = defineProps<{
    menuItem: MenuItem;
  }>();

  const menuItem = props.menuItem;
</script>

<style scoped>

</style>
