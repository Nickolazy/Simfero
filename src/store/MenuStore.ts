import { defineStore } from 'pinia';

// Categories
import iconFastFood from '@/assets/img/categories/icons-main/Горячие закуски.png'
import imgFastFood from '@/assets/img/categories/categories-all/Фаст фуд.png'

import iconBreakfast from '@/assets/img/categories/icons-main/Холодные закуски.png'
import imgBreakfast from '@/assets/img/categories/categories-all/На завтрак.png'

import iconDinner from '@/assets/img/categories/icons-main/Сендвичи.png'
import imgDinner from '@/assets/img/categories/categories-all/Обеды.png'

import iconBakery from '@/assets/img/categories/icons-main/Бизнес ланч.png'
import imgBakery from '@/assets/img/categories/categories-all/Выпечка.png'

import imgBurgers1 from '@/assets/img/categories/categories-all/Бургеры.png'
import imgBurgers2 from '@/assets/img/categories/categories-all/Бургеры1.png'

// Business Lunch
import imgMonday from '@/assets/img/businessLunch/Понедельник.png'
import imgTuesday from '@/assets/img/businessLunch/Вторник.png'

// Menu
import imgLeroi from '@/assets/img/menu/Лерой.png';
import imgLeroiBig from '@/assets/img/menu/Лерой Большой.png';

interface BasketItem {
  id: number;
  name: string;
  composition: string;
  amount: number;
  price: number;
  img: string;
}

export const useDataStore = defineStore('data', {
  state: () => ({
    categories: [
      {
        name: 'Фаст фуд',
        icon: iconFastFood,
        img: imgFastFood,
        path: 'fast-food'
      },
      {
        name: 'На завтрак',
        icon: iconBreakfast,
        img: imgBreakfast,
        path: 'breakfast'
      },
      {
        name: 'Обеды',
        icon: iconDinner,
        img: imgDinner,
        path: 'dinner',
      },
      {
        name: 'Выпечка',
        icon: iconBakery,
        img: imgBakery,
        path: 'bakery'
      },
      {
        name: 'Бургеры',
        icon: iconFastFood,
        img: imgBurgers1,
        path: 'burgers-one'
      },
      {
        name: 'Бургеры',
        icon: iconFastFood,
        img: imgBurgers2,
        path: 'burgers-two'
      },
      {
        name: 'Обеды',
        icon: iconDinner,
        img: imgDinner,
        path: 'dinner'
      },
      {
        name: 'Выпечка',
        icon: iconBakery,
        img: imgBakery,
        path: 'bakery'
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
        name: 'Лерой',
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
        name: 'Лерой Большой',
        composition: 'Булка, микс салата, бекон, соус тар тар, микс салата, бекон, соус тар тар',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat \nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        category: 'Фаст фуд',
        weight: 300,
        cookTime: 25,
        mark: 4.5,
        sale: 5,
        cost: 850,

        img: imgLeroiBig,
        
      },
      { 
        id: 3,
        name: 'Лерой',
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
        name: 'Лерой Большой',
        composition: 'Булка, микс салата, бекон, соус тар тар, микс салата, бекон, соус тар тар',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat \nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        category: 'Фаст фуд',
        weight: 300,
        cookTime: 25,
        mark: 4.5,
        sale: 25,
        cost: 850,

        img: imgLeroiBig,
        
      },
      { 
        id: 5,
        name: 'Лерой',
        composition: 'Булка, микс салата, бекон, соус тар тар, микс салата, бекон, соус тар тар',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat \nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        category: 'Фаст фуд',
        weight: 300,
        cookTime: 25,
        mark: 4.5,
        sale: 99,
        cost: 850,

        img: imgLeroi,
        
      },
      { 
        id: 6,
        name: 'Лерой Большой',
        composition: 'Булка, микс салата, бекон, соус тар тар, микс салата, бекон, соус тар тар',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat \nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        category: 'Фаст фуд',
        weight: 300,
        cookTime: 25,
        mark: 4.5,
        sale: 0,
        cost: 850,

        img: imgLeroiBig,
        
      },
      { 
        id: 7,
        name: 'Лерой',
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
        id: 8,
        name: 'Лерой Большой',
        composition: 'Булка, микс салата, бекон, соус тар тар, микс салата, бекон, соус тар тар',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat \nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        category: 'Фаст фуд',
        weight: 300,
        cookTime: 25,
        mark: 4.5,
        sale: 60,
        cost: 850,

        img: imgLeroiBig,
        
      },
      { 
        id: 9,
        name: 'Лерой Большой',
        composition: 'Булка, микс салата, бекон, соус тар тар, микс салата, бекон, соус тар тар',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat \nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        category: 'Фаст фуд',
        weight: 300,
        cookTime: 25,
        mark: 4.5,
        sale: 0,
        cost: 850,

        img: imgLeroiBig,
        
      },
      { 
        id: 10,
        name: 'Лерой',
        composition: 'Булка, микс салата, бекон, соус тар тар, микс салата, бекон, соус тар тар',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat \nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        category: 'Фаст фуд',
        weight: 300,
        cookTime: 25,
        mark: 4.5,
        sale: 45,
        cost: 850,

        img: imgLeroi,
        
      }
    ],

    basket: [] as BasketItem[],
  }),
  actions: {
    addToBasket(newItem: BasketItem) {
      const existingItem = this.basket.find(item => item.id === newItem.id);

      if (existingItem) {
        existingItem.amount++;
        existingItem.price += newItem.price / newItem.amount;
      } else {
        this.basket.push({
          ...newItem,
          amount: 1
        });
      }
    },

    removeFromBasket(id: number) {
      const existingItem = this.basket.find(item => item.id === id);

      if (existingItem) {
        existingItem.amount--;

        if (existingItem.amount === 0) {
          this.basket = this.basket.filter(item => item.id !== id);
        } else {
          existingItem.price -= existingItem.price / (existingItem.amount + 1);
        }
      }
    },

    clearBasket() {
      this.basket = [] as BasketItem[];
    },

    parseBasketItems() {
      return this.basket;
    },

    calculateTotal() {
      return this.basket.reduce((total, item) => total + item.price, 0);
    }
  },
});
