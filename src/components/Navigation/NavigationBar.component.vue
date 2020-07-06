<template>
  <div class="navbar-usv">
    <b-navbar toggleable="true">
      <b-navbar-brand class="logo" :title="APP.TITLE">
        <router-link :to="ROUTES.HOME.path">
          <img
            v-if="DARK_THEME"
            src="../../assets/images/logo_c-y-t2.png"
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
            <label class="switch">
              <input
                type="checkbox"
                :checked="DARK_THEME"
                @change="switchMode()"
              />
              <span class="slider round"></span>
            </label>
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
  }
  private switchMode() {
    this.$store.dispatch(SWITCH_THEME_ACTION, {
      dark: this.nightMode = !this.nightMode,
    });
  }
}
</script>
<style lang="scss">
li.nav-item {
  &:hover {
    color: var(--color-c1-blue);
  }
}
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fcc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: '';
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: var(--color-c1-blue);
}

input:focus + .slider {
  box-shadow: 0 0 1px var(--color-c1-blue);
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
.navbar {
  background-color: var(--color-nav-bg);
  background-image: none;
}
</style>
