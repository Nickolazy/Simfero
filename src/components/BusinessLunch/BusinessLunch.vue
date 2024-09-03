<template>
  <section class="businessLunch">
    <div class="container businessLunch-main-container">
      <div class="main-title">
        <h1>
          Бизнес Ланч
        </h1>
        <button class="main-button">
          Смотреть все
        </button>
      </div>
      <div class="businessLunch-main-items">
        <BusinessLunchItemMain
          v-for="day in daysOfWeek" 
          :key="day.dayOfWeek" 
          :day="day" 
        />
      </div>
    </div>
  </section>
</template>
  
<script setup lang="ts">
  import BusinessLunchItemMain from './BusinessLunchItemMain.vue';
  import { useDataStore } from '@/store/MenuStore';

  const dataStore = useDataStore();
  const daysOfWeek = dataStore.businessLunch;

</script>
  
<style scoped>

</style>
      