<template>
  <section class="search-section">
    <HeaderSearch
    @close = 'handleClose'
    :nameOfSection="nameOfSection"/>
    <div class="container container-search">
      <div class="search-button-input-flex">
        <input 
          v-model="searchQuery"
          type="text" 
          placeholder="Поиск товаров..."
          class="search-input" />

        <button @click="searchItems" class="search-button">
          <img src="../../assets/svg/icons/icon-search-black.svg" alt="Search">
        </button>
      </div>

      <div v-if="searchQuery.length && filteredItems.length" class="search-results recommended-items item-search">
        <SearchItem 
          v-for="menuItem in filteredItems"
          :key="menuItem.id"
          :menuItem="menuItem"
          :firstItem="firstItem"/>
      </div>

      <div v-if="searchQuery.length && !filteredItems.length" class="no-results">
        <p>
          Ничего не найдено
        </p>
      </div>

      <div v-else-if="!searchQuery.length" class="recommended-items">
        <p>
          Рекомендуем товары
        </p>
        <SearchItem 
            v-for="menuItem in recommendedItems"
            :key="menuItem.id"
            :menuItem="menuItem"
            :firstItem="firstItem"
            class="item-search"/>
        </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import SearchItem from './SearchItem.vue';
  import HeaderSearch from './HeaderSearch.vue';
  import { ref, computed } from 'vue';
  import { useDataStore } from '@/store/MenuStore';
  import { useRouter } from 'vue-router';

  const dataStore = useDataStore();
  const menuItems = dataStore.menu;
  const router = useRouter();

  const nameOfSection = 'Поиск';
  const handleClose = () => {
    router.back();
  };

  const searchQuery = ref('');
  const recommendedItems = computed(() => menuItems.slice(0, 3));

  const filteredItems = computed(() => {
    return menuItems.filter(item =>
      item.name.toLowerCase().startsWith(searchQuery.value.toLowerCase())
    );
  });

  const firstItem = computed(() => {
    return filteredItems.value.length ? filteredItems.value[0] : null;
  });

  const searchItems = () => {
    if (!searchQuery.value) {
      console.log('Введите что-нибудь для поиска.');
    } else {
      console.log('Поиск:', searchQuery.value);
    }
  };
</script>

<style scoped>
  
</style>
