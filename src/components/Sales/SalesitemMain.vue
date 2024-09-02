<template>
	<button class="sales-item-container">
    <div>
      <div class="sales-item-sale">
        {{ props.sale.sale }} % скидка
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
  import { defineProps } from 'vue';

  interface SalesItem {
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
