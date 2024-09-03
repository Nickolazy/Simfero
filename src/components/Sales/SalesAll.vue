<template>
  <div>
    <HeaderSide 
    @close = 'handleClose'
    :nameOfSection="nameOfSection"/>
  </div>
</template>
  
<script setup lang="ts">
  import HeaderSide from '../HeaderSide.vue';
  import router from '@/router';

  const nameOfSection = 'Акционные товары';
  const handleClose = () => {
    router.back();
  };
  
</script>
  
<style scoped>

</style>
  