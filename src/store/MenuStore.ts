import { defineStore } from 'pinia';

// Categories
import iconFastFood from '@/assets/img/categories/icons-main/Горячие закуски.png'
import imgFastFood from '@/assets/img/categories/categories-all/Фаст фуд.png'

// Business Lunch
import imgMonday from '@/assets/img/businessLunch/Понедельник.png'
import imgTuesday from '@/assets/img/businessLunch/Вторник.png'

// Menu
import imgLeroi from '@/assets/img/menu/Лерой.png';

interface BasketItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

export const useDataStore = defineStore('data', {
  state: () => ({
    categories: [
      {
        name: 'Фаст фуд',
        icon: iconFastFood,
        img: imgFastFood
      },
      {
        name: 'Фаст фуд',
        icon: iconFastFood,
        img: imgFastFood
      },
      {
        name: 'Фаст фуд',
        icon: iconFastFood,
        img: imgFastFood
      },
      {
        name: 'Фаст фуд',
        icon: iconFastFood,
        img: imgFastFood
      },
      {
        name: 'Фаст фуд',
        icon: iconFastFood,
        img: imgFastFood
      },
      {
        name: 'Фаст фуд',
        icon: iconFastFood,
        img: imgFastFood
      },
      {
        name: 'Фаст фуд',
        icon: iconFastFood,
        img: imgFastFood
      },
      {
        name: 'Фаст фуд',
        icon: iconFastFood,
        img: imgFastFood
      },
      {
        name: 'Фаст фуд',
        icon: iconFastFood,
        img: imgFastFood
      }
    ],

    businessLunch: [
      {
        dayOfWeek: 'Понедельник', 
        img: imgMonday,
      },
      {
        dayOfWeek: 'Вторник', 
        img: imgTuesday,
      },
      {
        dayOfWeek: 'Среда', 
        img: imgMonday,
      },
      {
        dayOfWeek: 'Четверг', 
        img: imgTuesday,
      },
      {
        dayOfWeek: 'Пятница', 
        img: imgMonday,
      }
    ],

    menu: [
      { 
        id: 1,
        name: 'Бургер Лерой',
        composition: 'Булка, микс салата, бекон, соус тар тар, микс салата, бекон, соус тар тар',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat \nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        category: 'Фаст фуд',
        weight: 300,
        cookTime: 25,
        mark: 4.5,
        sale: 20,
        cost: 850,

        img: imgLeroi,
        
      },
      { 
        id: 2,
        name: 'Бургер Лерой',
        composition: 'Булка, микс салата, бекон, соус тар тар, микс салата, бекон, соус тар тар',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat \nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        category: 'Фаст фуд',
        weight: 300,
        cookTime: 25,
        mark: 4.5,
        sale: 15,
        cost: 850,

        img: imgLeroi,
        
      },
      { 
        id: 3,
        name: 'Бургер Лерой',
        composition: 'Булка, микс салата, бекон, соус тар тар, микс салата, бекон, соус тар тар',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat \nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        category: 'Фаст фуд',
        weight: 300,
        cookTime: 25,
        mark: 4.5,
        sale: 0,
        cost: 850,

        img: imgLeroi,
        
      },
      { 
        id: 4,
        name: 'Бургер Лерой',
        composition: 'Булка, микс салата, бекон, соус тар тар, микс салата, бекон, соус тар тар',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat \nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        category: 'Фаст фуд',
        weight: 300,
        cookTime: 25,
        mark: 4.5,
        sale: 45,
        cost: 850,

        img: imgLeroi,
        
      },
      { 
        id: 5,
        name: 'Бургер Лерой',
        composition: 'Булка, микс салата, бекон, соус тар тар, микс салата, бекон, соус тар тар',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat \nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        category: 'Фаст фуд',
        weight: 300,
        cookTime: 25,
        mark: 4.5,
        sale: 20,
        cost: 850,

        img: imgLeroi,
        
      },
      { 
        id: 6,
        name: 'Бургер Лерой',
        composition: 'Булка, микс салата, бекон, соус тар тар, микс салата, бекон, соус тар тар',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat \nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        category: 'Фаст фуд',
        weight: 300,
        cookTime: 25,
        mark: 4.5,
        sale: 99,
        cost: 850,

        img: imgLeroi,
        
      }
    ],

    basket: [] as BasketItem[],
  }),
  actions: {
    addItem(item: BasketItem) {
      this.basket.push(item);
    },
    removeItem(id: number) {
      this.basket = this.basket.filter(item => item.id !== id);
    },
  },
});
