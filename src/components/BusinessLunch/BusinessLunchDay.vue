<template>
  <section>
    <div class="container-day-menu">
      <div class="day-menu-image">
        <img :src="dayInfo?.img" alt="Image">
      </div>
      <div class="recomendations-main-items lunch-items">
        <ItemMenu class="" v-for="item in menuItems"
          :key="item.id" 
          :menuItem="item"/>
      </div>
    </div>
  </section>
</template>
  
<script setup lang="ts">
  import { defineProps, computed } from 'vue';
  import { useDataStore } from '@/store/MenuStore';
  import { useRouter } from 'vue-router';
  import ItemMenu from '../ItemsOfMenu/ItemMenu.vue';

  const props = defineProps<{
    chosenDay: string;
  }>();

  const dataStore = useDataStore();
  const businessLunch = dataStore.businessLunch;
  const menuItems = dataStore.menu;
  const router = useRouter();

  const dayInfo = computed(() => 
    businessLunch.find(item => item.dayOfWeek === props.chosenDay)
  );

  console.log(dayInfo);
</script>
  
<style scoped>
  
</style>