<template>
  <div class="navigation-wrapper mt-5 page">
    <b-row align-v="center">
      <b-col
        lg="3"
        md="6"
        sm="12"
        xs="12"
        v-for="(button, index) in options"
        :key="index"
        class="my-2"
      >
        <router-link :to="button.path">
          <div class="fakeButton">
            {{ button.name }}
          </div>
        </router-link>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
// vue
import { Component, Vue, Watch } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import { APP, ROUTES } from '@/constants';
// component setup
@Component({ computed: mapGetters({}) })
export default class NavigationComponent extends Vue {
  // private
  // private readonly APP: {} = APP;
  private readonly APP: {} = APP;
  private readonly ROUTES: {} = ROUTES;
  private options = [
    { name: 'FAVORITE', path: '/' },
    { name: 'FACULTATI', path: ROUTES.FACULTIES.path },
    { name: 'PROFESORI', path: ROUTES.TEACHERS.path },
    { name: 'SALI', path: ROUTES.ROOMS.path },
  ];

  constructor() {
    super();
  }
}
</script>
<style lang="scss">
@import '@/assets/scss/_navigation.scss';
</style>
