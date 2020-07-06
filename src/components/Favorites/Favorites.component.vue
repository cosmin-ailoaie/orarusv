<template>
  <div class="mt-5">
    <b-row class="justify-content-md-center">
      <b-col
        cols="6"
        sm="6"
        lg="3"
        md="3"
        xl="3"
        class="mb-xl-5 mb-lg-5 mb-md-3 mb-sm-2 mb-2"
        @click="$router.go(-1)"
      >
        <div class="fakeButton">
          Înapoi
        </div>
      </b-col>
      <b-col
        cols="6"
        sm="6"
        lg="3"
        md="3"
        xl="3"
        class="mb-xl-5 mb-lg-5 mb-md-3 mb-sm-2 mb-2"
        @click="favorites"
      >
        <div class="fakeButton">
          Resetează
        </div>
      </b-col>
    </b-row>
    <h2 class="mb-3 favList">Lista orarelor favorite:</h2>
    <div v-if="favorites.length > 0">
      <ul>
        <li v-for="fav in favorites" :key="fav.id" class="my-2">
          <div
            class="fakeButton"
            @click="goToSchedule(fav.id, fav.mode, fav.name)"
          >
            {{ fav.name }}
          </div>
        </li>
      </ul>
    </div>
    <div v-else class="mt-5">
      <h4>Nu ai ales niciun orar favorit <i class="far fa-sad-tear"></i> .</h4>
    </div>
  </div>
</template>

<script lang="ts">
// vue
import { Component, Vue, Watch } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import { APP, ROUTES } from '@/constants';
import Loader from '@/common/Loader.component.vue';
import {
  SELECT_TEACHER_ACTION,
  SELECT_SEMIGROUP_ACTION,
} from '@/store/modules/main/actions';

// component setup
@Component({ components: { Loader }, computed: mapGetters({}) })
export default class FavoritesComponent extends Vue {
  // private
  private readonly APP: {} = APP;
  private readonly ROUTES: {} = ROUTES;

  constructor() {
    super();
  }

  private get favorites() {
    return JSON.parse(localStorage.getItem('Favorites') || '[]');
  }
  private set favorites(reset: any) {
    console.log('in setter');

    localStorage.setItem('Favorites', reset);
  }

  private goToSchedule(id: number, mode: string, name: string) {
    switch (mode) {
      case 'prof': {
        this.$store.dispatch(SELECT_TEACHER_ACTION, { name });
        break;
      }
      case 'grupa': {
        this.$store.dispatch(SELECT_SEMIGROUP_ACTION, { name });
        break;
      }
      default:
        break;
    }
    this.$router.push(ROUTES.SCHEDULE.schedule(id, mode));
  }
  private reset() {
    localStorage.removeItem('Favorites');
  }
}
</script>
<style lang="scss">
.favList {
  color: black;
  font-weight: bold;
  font-size: 1.6rem;
}
</style>
