<template>
  <section>
    <div class="container-day-menu">
      <div>
        <img src="" alt="">
      </div>
    </div>
  </section>
</template>
  
<script setup lang="ts">
  import { defineProps } from 'vue';

  const props = defineProps<{
    chosenDay: string;
  }>();

  const chosenDay = props.chosenDay;
</script>
  
<style scoped>
      
</style>