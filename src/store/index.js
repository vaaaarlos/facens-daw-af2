import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [
      { title: 'Home', icon: 'mdi-home', to: '/' },
      { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/dashboard' },
      { title: 'Image', icon: 'mdi-image', to: '/image' },
      { title: 'About', icon: 'mdi-help-box', to: '/about' },
    ],

    products: [
      {
        id: 1,
        name: 'Batatas',
        price: 100,
        count: 1,
      },
      {
        id: 2,
        name: 'Leite',
        price: 200,
        count: 1,
      },
      {
        id: 3,
        name: 'Doces',
        price: 300,
        count: 1,
      },
      {
        id: 4,
        name: 'Queijo',
        price: 400,
        count: 1,
      },
      {
        id: 5,
        name: 'Manteiga',
        price: 500,
        count: 1,
      },
      {
        id: 6,
        name: 'Repolho',
        price: 600,
        count: 1,
      },
      {
        id: 7,
        name: 'Laranja',
        price: 700,
        count: 1,
      },
      {
        id: 8,
        name: 'Cenoura',
        price: 800,
        count: 1,
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
