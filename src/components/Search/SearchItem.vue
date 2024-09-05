<template>
  <div v-if="menuItem" class="basket">
    <img v-if="menuItem.id !== dataStore.basket[0]?.id" class="basket-rect" src="@/assets/svg/store-rect.svg" />
    <div @click="goToProductCard" class="basket-side">
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
      </div>
    </div>
  </div>
  <div v-else>
    <p>Товар не найден</p>
  </div>
</template>

<script setup lang="ts">
  import { defineProps, computed } from 'vue';
  import { useDataStore } from '@/store/MenuStore';
  import { useRouter } from 'vue-router';

  interface MenuItem {
    id: number;
    name: string;
    composition: string;
    img: string;
  }

  const props = defineProps<{
    menuItem: MenuItem | null;
  }>();

  const dataStore = useDataStore();
  const router = useRouter();

  const splitedComposition = computed(() => {
    if (props.menuItem) {
      const ingredients = props.menuItem.composition.split(',').map(ingredient => ingredient.trim());
      return ingredients.slice(0, 4).join(', ') + (ingredients.length > 4 ? '...' : '');
    }
    return '';
  });

  const goToProductCard = () => {
    if(props.menuItem) {
      router.push({
        name: 'product-page', 
        params: { 
          productName: props.menuItem.name,
        },
        query: {
          productId: props.menuItem.id.toString()
        }
      });
    }
  }
</script>

<style scoped>

</style>
