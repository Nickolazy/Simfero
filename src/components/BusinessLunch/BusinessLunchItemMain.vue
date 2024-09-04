<template>
  <button @click="openDay" class="businessLunch-item-container">
    <img :src="props.day.img" alt="DayOfWeek">
    {{ props.day.dayOfWeek }}
  </button>
</template>
  
<script setup lang="ts">
  import { defineProps } from 'vue';
  import { useRouter } from 'vue-router';

  interface DayOfWeek {
    dayOfWeek: string,
    img: string;
  }

  const props = defineProps<{
    day: DayOfWeek;
  }>();
  const router = useRouter();

  const openDay = () => {
    router.push({ name: 'businessLunch', params: { day : props.day.dayOfWeek }})
  }
</script>
  
<style scoped>
      
</style>