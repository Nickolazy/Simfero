<template>
  <button class="businessLunch-item-container">
    <img :src="props.day.img" alt="DayOfWeek">
    {{ props.day.dayOfWeek }}
  </button>
</template>
  
<script setup lang="ts">
  import { defineProps } from 'vue';

  interface DayOfWeek {
    dayOfWeek: string,
    img: string;
  }

  const props = defineProps<{
    day: DayOfWeek;
  }>();
</script>
  
<style scoped>
      
</style>