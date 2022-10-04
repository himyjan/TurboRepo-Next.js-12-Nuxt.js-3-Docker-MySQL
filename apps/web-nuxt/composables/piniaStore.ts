import { defineStore } from 'pinia';

export const myStore = defineStore({
  id: 'my-store',
  state: () => {
    return {
      isReady: false,
    };
  },
});

// Composing Stores
export const myStore2 = defineStore('my-store2', () => {
  return {
    isReady: false,
  };
});
