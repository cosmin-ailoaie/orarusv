<template>
  <div id="app">
    <div>
      <NavigationBarComponent />
      <transition name="router-anim" enter-active-class="animated backInRight" leave-active-class="animated backOutLeft"
      <b-container>
        <router-view />
      </b-container>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
// * vue
import { Component, Vue } from 'vue-property-decorator';

// * components
import NavigationBarComponent from '@/components/Navigation/NavigationBar.component.vue';

// * content
import { ROUTES } from '@/constants';

// * components setup
@Component({
  components: { NavigationBarComponent },
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
