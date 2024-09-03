<template>
	<button class="sales-item-container">
    <div>
      <div class="sales-item-sale">
        <SaleBlock :sale="props.sale"/>
      </div>
      <div class="sales-item-box">
        <img :src="props.sale.img" alt="MenuItem">
        <p>
          {{ props.sale.name }}
        </p>
      </div>
    </div>
	</button>
</template>
  
<script setup lang="ts">
  import SaleBlock from './SaleBlock.vue';
  import { defineProps } from 'vue';

  interface SalesItem {
    id: number,
    name: string,
    sale: number,
    img: string;
  }

  const props = defineProps<{
    sale: SalesItem;
  }>();
</script>
  
<style scoped>
	  
</style>
