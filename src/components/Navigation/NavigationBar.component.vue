<template>
  <div class="navbar-usv">
    <b-navbar toggleable="true">
      <b-navbar-brand class="logo" :title="APP.TITLE">
        <router-link :to="ROUTES.HOME.path">
          <img src="../../assets/images/logo.png" alt="" class="logo" />
        </router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <hr />
        <b-navbar-nav class="ml-auto">
          <b-nav-item :to="ROUTES.HOME.path" exact>
            Studenti
          </b-nav-item>
          <b-nav-item :to="ROUTES.HOME.path" exact>
            Sali
          </b-nav-item>
          <b-nav-item :to="ROUTES.HOME.path" exact>
            Facultati
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script lang="ts">
// vue
import { Component, Vue, Watch } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import { APP, ROUTES } from '@/constants';

// component setup
@Component({ computed: mapGetters({}) })
export default class NavigationBarComponent extends Vue {
  // private
  private readonly APP: {} = APP;
  private readonly ROUTES: {} = ROUTES;

  constructor() {
    super();
  }
}
</script>
<style lang="scss"></style>
