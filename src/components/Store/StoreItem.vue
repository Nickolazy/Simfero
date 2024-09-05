<template>
	<div v-if="menuItem.amount > 0" class="basket">
    <img v-if="menuItem.id !== dataStore.basket[0].id" class="basket-rect" src="@/assets/svg/store-rect.svg">
    <div class="basket-side">
      <div class="basket-side-img">
        <img class="" :src="menuItem.img" alt="Menu Position Photo">
      </div>
      <div>
        <div class="basket-side-text">
          <p class="basket-side-title">
            {{ menuItem.name }}
          </p>
          <p class="basket-side-composition">
            {{ splitedComposition }}
        </p>
        </div>
        <div class="basket-side-information">
          <div class="basket-side-price">
            <img src="@/assets/svg/icons/icon-cost-store.svg" alt="Price">
            <p>
              {{ menuItem.price / menuItem.amount }}
            </p>
          </div>
          <div class="basket-side-amount">
            <button @click="removeItem" class="menu-item-button menu-item-buttons">
              <img src="@/assets/svg/minus.svg" alt="Minus">
            </button>
            <span>{{ menuItem.amount }}</span>
            <button @click="addItem" class="menu-item-button menu-item-buttons">
              <img src="@/assets/svg/plus.svg" alt="Plus">
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
  import { defineProps, computed, onMounted } from 'vue';
  import { useDataStore } from '@/store/MenuStore';

  interface MenuItem {
    id: number,
    name: string;
    composition: string;
    amount: number,
    price: number;

    img: string;
  }

  const props = defineProps<{
    menuItem: MenuItem;
    
  }>();

  const dataStore = useDataStore();
  const menuItem = props.menuItem;

  const splitedComposition = computed(() => {
    const ingredients = props.menuItem.composition.split(',').map(ingredient => ingredient.trim());
    return ingredients.slice(0, 4).join(', ') + (ingredients.length > 2 ? '...' : '');
  });

  const addItem = () => {
    dataStore.addToBasket({
      id: menuItem.id,
      name: menuItem.name,
      composition: menuItem.composition,
      amount: 1,
      price: menuItem.price / menuItem.amount,
      img: menuItem.img
    });
  }

  const removeItem = () => {
    dataStore.removeFromBasket(menuItem.id);
  }

</script>
  
<style scoped>

</style>
