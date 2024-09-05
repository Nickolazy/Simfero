<template>
  <section class="search-title">
    <div class="container side-container">
      <div class="side-title-flex">
        <div class="side-title">
          <h1>
            {{ props.nameOfSection }}
          </h1>
        </div>
        <div class="store-header-side-store">
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
  import { defineProps } from 'vue';

  const props = defineProps<{
    nameOfSection: string;
  }>();

  const emit = defineEmits<{
    (e: 'close'): void;
  }>();

  const handleClose = () => {
    emit('close');
  };
</script>

<style scoped>

</style>
