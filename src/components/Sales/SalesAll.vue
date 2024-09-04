<template>
  <section>
    <HeaderSide 
    @close = 'handleClose'
    :nameOfSection="nameOfSection"/>
    <div class="container">
      <div class="sales-items-side-flex">
        <itemMenu
        v-for="menuItem in filteredMenuItems" 
        :key="menuItem.id" 
        :menuItem="menuItem" />
      </div>
    </div>
  </section>
</template>
  
<script setup lang="ts">
  import HeaderSide from '../HeaderSide.vue';
  import itemMenu from '../ItemsOfMenu/ItemMenu.vue';
  import { computed } from 'vue';
  import { useRouter } from 'vue-router';
  import { useDataStore } from '@/store/MenuStore';

  const dataStore = useDataStore();
  const menuItems = dataStore.menu;
  const router = useRouter();

  const filteredMenuItems = computed(() => {
    return menuItems.filter(item => item.sale > 0);
  });

  const nameOfSection = 'Акционные товары';
  const handleClose = () => {
    router.back();
  };
  
</script>
  
<style scoped>

</style>
  