<template>
  <div class="navbar-usv">
    <b-navbar toggleable="true">
      <b-navbar-brand class="logo" :title="APP.TITLE">
        <router-link :to="ROUTES.HOME.path">
          <img
            v-if="DARK_THEME"
            src="../../assets/images/sigla_USV_alt_mobile.png"
            alt="Logo USV"
            class="logo"
          />
          <img v-else src="../../assets/images/logo.png" alt="logo" class="" />
        </router-link>
      </b-navbar-brand>
      <!-- <b-navbar-toggle target="nav-collapse"></b-navbar-toggle> -->
      <b-navbar-toggle target="nav-collapse">
        <template>
          <i class="fas fa-bars fa-lg"></i>
        </template>
      </b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <hr class="hrColor" />
        <b-navbar-nav class="ml-auto">
          <b-nav-text>
            <div class="nightMode">
              <input
                type="checkbox"
                class="checkbox"
                id="chk"
                :checked="DARK_THEME"
                @change="switchMode()"
              />
              <label class="label" for="chk">
                <i class="fas fa-moon"></i>
                <i class="fas fa-sun"></i>
                <div class="ball"></div>
              </label>
            </div>
          </b-nav-text>
          <b-nav-item :to="ROUTES.HOME.path" exact>
            Prima pagină
          </b-nav-item>
          <b-nav-item :to="ROUTES.FAVORITES.path" exact>
            Favorite
          </b-nav-item>
          <b-nav-item :to="ROUTES.FACULTIES.path" exact>
            Facultăți
          </b-nav-item>
          <b-nav-item :to="ROUTES.TEACHERS.path" exact>
            Profesori
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
import { DARK_THEME } from '@/store/modules/main/getters';
import { SWITCH_THEME_ACTION } from '@/store/modules/main/actions';
// component setup
@Component({ computed: mapGetters({ DARK_THEME }) })
export default class NavigationBarComponent extends Vue {
  // private
  private readonly APP: {} = APP;
  private readonly ROUTES: {} = ROUTES;
  private nightMode = false;
  constructor() {
    super();
    const storage = localStorage.getItem('NightMode') || 'null';
    if (storage === 'null') {
      this.$store.dispatch(SWITCH_THEME_ACTION, { dark: this.nightMode });
    } else {
      this.nightMode = JSON.parse(storage);
      this.$store.dispatch(SWITCH_THEME_ACTION, {
        dark: this.nightMode,
      });
    }
  }
  private switchMode() {
    this.$store.dispatch(SWITCH_THEME_ACTION, {
      dark: this.nightMode = !this.nightMode,
    });
  }
}
</script>
<style lang="scss"></style>
