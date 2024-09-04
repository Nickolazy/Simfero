<template>
	<section v-if="menuItem">
    <div class="container-card">
      <div class="icons-card">
        <button @click="handleClose" class="button-card-back">
          <img class="icons-card-back" src="@/assets/svg/icons/icon-back-card.svg" alt="Back">
        </button>
        <div>
          <button @click="openStore" class="button-card-store">
            <img class="icons-card-store" src="@/assets/svg/icons/icon-store-black.svg" alt="Store">
          </button>
          <img v-if="isBasketFull" 
            class="header-store-rect rect-card"
            src="@/assets/svg/rect.svg">
        </div>
      </div>
      <div class="container-img-card">
        <img :src="menuItem.img" alt="Image">
      </div>
      <div class="container-description-card">
        <div class="container-description-card-flex">
          <div class="description-flex-width">
            <p class="description-category">
              {{ menuItem.category }}
            </p>
            <h1 class="description-title">
              {{ menuItem.name }}
            </h1>
            <div class="composition-container">
              <p>
                {{ menuItem.composition }}
              </p>
            </div>
            <ul class="icons-description-list">
              <div class="description-list">
                <li class="description-list-item">
                  <img class="description-list-item-weight" src="@/assets/svg/icons/icon-weight.svg" alt="Weight">
                  {{ menuItem.weight }} г
                </li>
                <li class="description-list-item">
                  <img class="description-list-item-time" src="@/assets/svg/icons/icon-time.svg" alt="Cook Time">
                  {{ menuItem.cookTime }} мин
                </li>
              </div>
              <li class="description-list-item-mark">
                <p>
                  {{ menuItem.mark }}
                </p>
              </li>
            </ul>
            <p class="description-product-card">
              <div v-html="formatedDescription">
              </div>
            </p>
            <div class="description-card-last">
              <div class="description-card-cost">
                <img src="@/assets/svg/icons/icon-cost-store.svg" alt="Price">
                {{ menuItem.cost }} руб.
              </div>
              <button v-if="!isBasketHaveItem" @click="addItem" class="item-button-add-card">
                Добавить
              </button>
              <div v-else class="menu-item-buttons-amount amount-card">
                <button @click="removeItem" class="menu-item-button menu-item-buttons">
                  <img src="@/assets/svg/minus.svg" alt="Minus">
                </button>
                <span>{{ amount }}</span>
                <button @click="addItem" class="menu-item-button menu-item-buttons">
                  <img src="@/assets/svg/plus.svg" alt="Plus">
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
<script setup lang="ts">
  import { useRouter } from 'vue-router';
  import { defineProps, computed } from 'vue';
  import { useDataStore } from '@/store/MenuStore';
  
  const datastore = useDataStore();

  const router = useRouter();

  const props = defineProps<{
    productName: string,
    productId: string
  }>();

  const productId = Number(props.productId);
  const menuItem = datastore.menu.find(item => item.id === productId);

  const handleClose = () => {
    router.back();
  };

  const openStore = () => {
    router.push({ name: 'store' });
  }

  const formatedDescription = computed(() => {
    return menuItem?.description
      .replace(/\n/g, '<br><br>');
  });

  const addItem = () => {
    if(menuItem) {
      datastore.addToBasket({
        id: menuItem.id,
        name: menuItem.name,
        composition: menuItem.composition,
        amount: 1,
        price: menuItem.cost,
        img: menuItem.img
      });
    } else {
      alert("Error: cannot add to basket");
    }
  }

  const removeItem = () => {
    if(menuItem) {
      datastore.removeFromBasket(menuItem.id);
    }
  }

  const amount = computed(() => {
    let basketItem;
    if(menuItem) {
      basketItem = datastore.basket.find(item => item.id === menuItem.id);
    }
    return basketItem ? basketItem.amount : 0;
  });

  const isBasketHaveItem = computed(() => {
    return datastore.basket.some(item => item.id === productId);
  });

  const isBasketFull = computed(() => {
    return datastore.basket[0];
  });
</script>

<style scoped>
	  
</style>
