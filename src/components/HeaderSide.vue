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
        <div class="store-header-side">
          <button @click="openStore" class="button-header-side">
            <img 
              src="@/assets/svg/icons/icon-store-black.svg" 
              alt="Store">
          </button>
          <img v-if="isBasketFull" 
            class="header-store-rect-side"
            src="@/assets/svg/rect.svg">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { useDataStore } from '@/store/MenuStore';
  import { computed } from 'vue';
  import { defineProps } from 'vue';
  import { useRouter } from 'vue-router';

  const dataStore = useDataStore(); 
  const router = useRouter();

  const isBasketFull = computed(() => {
    return dataStore.basket[0];
  });

  const props = defineProps<{
    nameOfSection: string;
  }>();

  const emit = defineEmits<{
    (e: 'close'): void;
  }>();

  const handleClose = () => {
    emit('close');
  };

  const openStore = () => {
    router.push({ name: 'store' });
  }
</script>

<style scoped>

</style>
