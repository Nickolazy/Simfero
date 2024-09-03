<template>
  <div class="container-menu-item">
    <button class="menu-item-margin">
      <SaleBlock v-if="menuItem.sale > 0" 
        class="sales-item-sale"
        :sale="menuItem"/>

      <div class="menu-item-block">
        <div class="menu-item-img-block">
          <img class="menu-item-img-block-position" :src="menuItem.img" alt="Menu Position Photo">
          <ul class="menu-item-img-block-list">
            <li class="menu-item-img-block-item">
              <img src="@/assets/svg/icons/icon-cost.svg" alt="Cost Icon">
              {{ menuItem.cost }}
            </li>
            <li class="menu-item-img-block-item">
              <img src="@/assets/svg/icons/icon-clock.svg" alt="Cook Time Icon">
              {{ menuItem.cookTime }} мин
            </li>
          </ul>
        </div>
        <div class="menu-item-text-block">
          <p class="menu-item-text-block-title">
            {{ menuItem.name }}
          </p>
          {{ splitedComposition }}
        </div>
        <button v-if="amount === 0" @click="addItem" class="menu-item-button-add menu-item-buttons">
          Добавить
        </button>
        <div v-else class="menu-item-buttons-amount">
          <button @click="removeItem" class="menu-item-button menu-item-buttons">
            <img src="@/assets/svg/minus.svg" alt="Minus">
          </button>
          <span>{{ amount }}</span>
          <button @click="addItem" class="menu-item-button menu-item-buttons">
            <img src="@/assets/svg/plus.svg" alt="Plus">
          </button>
        </div>
      </div>
    </button>
  </div>
</template>

<script setup lang="ts">
  import SaleBlock from './Sales/SaleBlock.vue';
  import { defineProps, computed, ref } from 'vue';
  import { useDataStore } from '@/store/MenuStore';

  interface MenuItem {
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

  const dataStore = useDataStore();
  const amount = computed(() => {
    const basketItem = dataStore.basket.find(item => item.id === menuItem.id);
    return basketItem ? basketItem.amount : 0;
  });

  const props = defineProps<{
    menuItem: MenuItem;
  }>();
  const menuItem = props.menuItem;

  const splitedComposition = computed(() => {
    const ingredients = props.menuItem.composition.split(',').map(ingredient => ingredient.trim());
    return ingredients.slice(0, 2).join(', ') + (ingredients.length > 2 ? '...' : '');
  });

  const addItem = () => {
    dataStore.addToBasket({
      id: menuItem.id,
      name: menuItem.name,
      amount: 1,
      price: menuItem.cost
    });
  }

  const removeItem = () => {
    dataStore.removeFromBasket(menuItem.id);
  }


</script>

<style scoped>

</style>
