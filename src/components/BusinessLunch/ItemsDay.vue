<template>
  <div>
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
        <!-- <div class="menu-item-text-block">
          <p class="menu-item-text-block-title">
            {{ menuItem.name }}
          </p>
          {{ splitedComposition }}
        </div>
        <button v-if="amount === 0" @click.stop="addItem" class="menu-item-button-add menu-item-buttons">
          Добавить
        </button>
        <div v-else class="menu-item-buttons-amount">
          <button @click.stop="removeItem" class="menu-item-button menu-item-buttons">
            <img src="@/assets/svg/minus.svg" alt="Minus">
          </button>
          <span>{{ amount }}</span>
          <button @click.stop="addItem" class="menu-item-button menu-item-buttons">
            <img src="@/assets/svg/plus.svg" alt="Plus">
          </button>
        </div> -->
      </div>
  </div>
</template>
  
<script setup lang="ts">
  import { defineProps } from 'vue';
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

  const props = defineProps<{
    menuItem: MenuItem;
  }>();

  const menuItem = props.menuItem;
  const dataStore = useDataStore();
  const menuItems = dataStore.menu;
</script>
  
<style scoped>
      
</style>