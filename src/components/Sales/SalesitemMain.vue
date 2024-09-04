<template>
	<button @click="goToProductCard" class="sales-item-container">
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
  import { useRouter } from 'vue-router';
  import { useDataStore } from '@/store/MenuStore';

  interface SalesItem {
    id: number,
    name: string,
    sale: number,
    img: string;
  }

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
    sale: SalesItem;
    menuItem: MenuItem;
  }>();

  const dataStore = useDataStore();
  const router = useRouter();
  
  const goToProductCard = () => {
    router.push({
      name: 'product-page', 
      params: { 
        productName: props.menuItem.name,
      },
      query: {
        productId: props.menuItem.id.toString()
      }
    });
  }

</script>
  
<style scoped>
	  
</style>
