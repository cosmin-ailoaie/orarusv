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
          <label class="switch">
            <input type="checkbox" checked />
            <span class="slider round"></span>
          </label>
          <b-nav-item :to="ROUTES.HOME.path" exact>
            Studenți
          </b-nav-item>
          <b-nav-item :to="ROUTES.HOME.path" exact>
            Săli
          </b-nav-item>
          <b-nav-item :to="ROUTES.HOME.path" exact>
            Facultăți
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
<style lang="scss">
li.nav-item {
  &:hover {
    color: blue;
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
  background-color: #ccc;
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
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
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
</style>
