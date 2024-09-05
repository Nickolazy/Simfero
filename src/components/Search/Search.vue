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

      <div v-if="searchQuery.length && filteredItems.length" class="search-results">
        <SearchItem 
          v-for="menuItem in filteredItems"
          :key="menuItem.id"
          :menuItem="menuItem"/>
      </div>

      <div v-if="searchQuery.length && !filteredItems.length" class="no-results">
        Ничего не найдено
      </div>

      <div v-else-if="!searchQuery.length" class="recommended-items">
        <p>
          Рекомендуем товары
        </p>
        <SearchItem 
            v-for="menuItem in recommendedItems"
            :key="menuItem.id"
            :menuItem="menuItem"/>
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

  // Фильтрация товаров, которые начинаются с введенного запроса
  const filteredItems = computed(() => {
    return menuItems.filter(item =>
      item.name.toLowerCase().startsWith(searchQuery.value.toLowerCase())
    );
  });

  // Функция для обработки поиска
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
