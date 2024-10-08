<template>
  <div id="app">
    <!-- Utilisation du header conditionnel -->
    <AppHeader v-if="$route.path !== '/404'" />
    <router-view />
    <!-- Utilisation de AppFooter -->
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue'; 

export default {
  components: {
    AppHeader,
    AppFooter, 
  },
};
</script>