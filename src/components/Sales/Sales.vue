<template>
  <section>
    <div class="container sales-main-container">
      <div class="main-title sales-main">
        <h1> 
          Акционные товары
        </h1>
        <button @click="goToAll" class="main-button"> 
          Смотреть все
        </button>
      </div>
      <div class="sales-scroll-container">
        <button class="scroll-button left" @click="scrollLeft">
          <img src="@/assets/svg/scrollLeft.svg" alt="ScrollLeft">
        </button>
        <div class="sales-main-items" ref="scrollContainer">
          <SalesitemMain 
            v-for="sale in sales" 
            :key="sale.id"
            :sale="sale"
            :menuItem="sale"
          />
        </div>
        <button class="scroll-button right" @click="scrollRight">
          <img src="@/assets/svg/scrollRight.svg" alt="ScrollRight">
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SalesitemMain from './SalesitemMain.vue';
import { ref } from 'vue';
import { useDataStore } from '@/store/MenuStore';
import { useRouter } from 'vue-router';

const dataStore = useDataStore();
const menu = dataStore.menu;
const router = useRouter();

interface SalesItem {
  id: number,
  name: string;
  composition: string;
  description: string;
  category: string;
  weight: number;
  cookTime: number;
  mark: number;
  sale: number;
  cost: number;
  img: string;
}

const parseSales = (sales: SalesItem[]) => sales.filter(item => item.sale > 0);
const sales = parseSales(menu);

const scrollContainer = ref<HTMLElement | null>(null);

const scrollLeft = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({
      left: -600,
      behavior: 'smooth'
    });
  }
};

const scrollRight = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({
      left: 600,
      behavior: 'smooth'
    });
  }
};

const goToAll = () => {
  router.push({ name: 'sales'});
}

</script>

<style scoped>

</style>
