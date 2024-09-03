<template>
  <div class="sale">
    {{ props.sale.sale }} % скидка
  </div>
</template>

<script setup lang="ts">
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
