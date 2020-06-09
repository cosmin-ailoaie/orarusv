<template>
  <div id="app">
      <NavigationComponent />
      <b-container>
        <router-view />
  </div>
</template>


<script lang="ts">
  // * vue
  import { Component, Vue } from 'vue-property-decorator';

  // * components
  import NavigationComponent from '@/components/Navigation/Navigation.component.vue';

  // * content
  import { ROUTES } from '@/constants';

  // * components setup
  @Component({
    components: { NavigationComponent },
  })
  export default class App extends Vue {
    // * private
    private readonly ROUTES: {} = ROUTES;
    private requiresAuth: boolean = false;

    constructor() {
      super();
    }

    private updated() {
      this.requiresAuth = this.$router.currentRoute.meta.requiresAuth;
    }
  }
</script>

<style lang="scss">
  @import '@/assets/scss/_app.scss';
</style>
