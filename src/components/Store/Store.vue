<template>
	<section>
    <HeaderStore 
    @close = 'handleClose'
    :nameOfSection="nameOfSection"/>
    <div class="container container-store">
      <div class="all-price-store">
        <div class="all-price-store-cost">
          <p>
            Всего:
          </p>
          <img src="@/assets/svg/icons/icon-cost-store.svg" alt="Price">
          <p>
            {{ totalAmount }} руб.
          </p>
        </div>
        <div class="all-price-store-button-flex">
          <button class="all-price-store-button">
            Заказать
          </button>
          <p>
            Пригласить официанта
          </p>
        </div>
      </div>
      <div v-if="isBasketFull" class="all-price-store-list">
        <StoreItem 
          v-for="menuItem in storeItems"
          :key="menuItem.id"
          :menuItem="menuItem"/>
      </div>
    </div>
  </section>
</template>
  
<script setup lang="ts">
  import HeaderStore from './HeaderStore.vue';
  import StoreItem from './StoreItem.vue';
  import { useRouter } from 'vue-router';
  import { useDataStore } from '@/store/MenuStore';
  import { computed } from 'vue';

  const dataStore = useDataStore();
  const router = useRouter();
  const nameOfSection = 'Мой заказ';

  const handleClose = () => {
    router.back();
  };

  const isBasketFull = computed(() => {
    return dataStore.basket[0];
  });

  const storeItems = dataStore.parseBasketItems();
  const totalAmount = computed(() => {
    return dataStore.calculateTotal();
  })

</script>
  
<style scoped>
	  
</style>