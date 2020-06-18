<template>
  <div
    class="mt-5"
    style="display:inline-block;margin:10px auto; width: inherit"
  >
    <ul>
      <li>
        <router-link :to="ROUTES.HOME.path"
          ><i class="fas fa-arrow-left"></i
        ></router-link>
      </li>
      <li v-for="faculty in FACULTIES" :key="faculty.id" class="my-2 text-left">
        <div class="facultyItem" @click="toFaculty(faculty.id)">
          {{ faculty.name }}
        </div>
      </li>
      <li>
        <a href="#">Departamentul de Specialitate cu Profil Psihopedagogic: </a>
        <ul>
          <li>
            <a href="#"></a
            ><a
              href="http://www.dppd.usv.ro/dppd2/pdf/2018/Niv%20I%20postuniv.pdf"
              >postuniversitar nivel 1</a
            >
          </li>
          <li>
            <a
              href="http://www.dppd.usv.ro/dppd2/pdf/2018/Niv%20II%20Postuniv.pdf"
              >postuniversitar nivel 2</a
            >
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
// vue
import { Component, Vue, Watch } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import { FACULTIES } from '@/store/modules/main/getters';
import { GET_FACULTIES_ACTION } from '@/store/modules/main/actions';
import { ROUTES } from '@/constants/routes';

// component setup
@Component({ computed: mapGetters({ FACULTIES }) })
export default class FacultiesComponent extends Vue {
  // private
  private readonly ROUTES: {} = ROUTES;

  constructor() {
    super();
  }
  private async created() {
    if (this.$store.getters[FACULTIES].length === 0) {
      this.$store.dispatch(GET_FACULTIES_ACTION);
    }
  }
}
</script>
<style lang="scss">
@import '@/assets/scss/_faculties.scss';
</style>
