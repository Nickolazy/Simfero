<template>
  <section>
    <div class="container side-container">
      <div class="side-title-flex">
        <div class="side-title">
          <button  @click="handleClose">
            <img src="@/assets/svg/back.svg" alt="Back">
          </button>
          <h1>
            {{ props.nameOfSection }}
          </h1>
        </div>
        <div class="store-header-side-store">
          <button @click="clearStore" class="button-header-side-clear">
            Очистить
          </button>
          <button @click="handleClose" class="button-header-side-store">
            <img 
              src="@/assets/svg/icons/icon-clear.svg" 
              alt="Store">
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { useDataStore } from '@/store/MenuStore';
  import { defineProps } from 'vue';

  const dataStore = useDataStore(); 

  const props = defineProps<{
    nameOfSection: string;
  }>();

  const emit = defineEmits<{
    (e: 'close'): void;
  }>();

  const handleClose = () => {
    emit('close');
  };

  const clearStore = () => {
    return dataStore.clearBasket();
  }
</script>

<style scoped>

</style>
