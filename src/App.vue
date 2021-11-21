<template>
  <v-app>
    <v-main>
      <app-header />

      <v-card style="height: calc(100vh - 198px);">
        <app-drawer />
        <router-view />
      </v-card>

      <app-footer />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Navdrawer from '@/components/Navdrawer.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    'app-header': Navbar,
    'app-drawer': Navdrawer,
    'app-footer': Footer,
  },

  data: () => ({
    //
  }),
};
</script>
