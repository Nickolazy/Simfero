<template>
  <section>
    <HeaderSide 
      @close="handleClose"
      :nameOfSection="nameOfSection" />
    <div class="container">
      <div class="businessLunch-menu">
        <div
          v-for="(day, index) in daysOfWeek"
          :key="index"
          :class="['businessLunch-menu-day', { 'menu-chosen-day': day === chosenDay }]"
          @click="selectDay(day)">
          {{ day }}
          <div v-if="day === chosenDay" class="underline"></div>
      </div>
      </div>
      <div class="businessLunch-container">
        <BusinessLunchDay 
          :chosenDay="chosenDay"/>
      </div>
    </div>
  </section>
</template>

  
<script setup lang="ts">
  import HeaderSide from '../HeaderSide.vue';
  import BusinessLunchDay from './BusinessLunchDay.vue';
  import router from '@/router';
  import { ref } from 'vue';
  import { useDataStore } from '@/store/MenuStore';

  const nameOfSection = 'Бизнес ланч';
  const handleClose = () => {
    router.back();
  };

  const dataStore = useDataStore();
  const businessLunch = dataStore.businessLunch;
  const daysOfWeek = businessLunch.map(item => item.dayOfWeek);
  const chosenDay = ref(daysOfWeek[0]);

  const selectDay = (day: string) => {
    chosenDay.value = day;

    console.log(chosenDay);
  };
</script>
  
<style scoped>
  
</style>
  