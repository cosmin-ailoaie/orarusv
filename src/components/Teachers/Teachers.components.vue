<template>
  <div class="teachersList container">
    <Loader :is-loading="LOADING_STATUS" />
    <div>
      <b-row class="mt-4" align-h="center">
        <b-col cols="6" xl="3" lg="3" md="4" sm="4">
          <router-link :to="ROUTES.HOME.path">
            <div class="fakeButton">
              Inapoi
            </div>
          </router-link>
        </b-col>
        <b-col cols="6" xl="3" lg="3" md="4" sm="4">
          <router-link :to="ROUTES.HOME.path">
            <div class="fakeButton">
              Acasa
            </div>
          </router-link>
        </b-col>
      </b-row>
      <b-input-group size="sm mt-3">
        <b-form-input
          v-model="filter"
          type="search"
          id="filterInput"
          placeholder="Cauta un profesor"
        ></b-form-input>
        <b-input-group-prepend>
          <span class="input-group-text"
            ><i class="fas fa-search search-icon"></i
          ></span>
        </b-input-group-prepend>
      </b-input-group>
      <b-row v-if="TEACHERS[0]" align-h="center">
        <b-col cols="10" class="teachers mt-3">
          <!-- <div class="teachers mt-3"> -->
          <ul>
            <li
              v-for="teacher in TEACHERS.filter(teacher =>
                teacher.name
                  .toLowerCase()
                  .includes(filter.trim().toLowerCase()),
              )"
              :key="teacher.id"
              :id="teacher.id"
              @click="selectTeacher(teacher.id, teacher.name)"
            >
              {{ teacher.name }}
            </li>
          </ul>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script lang="ts">
// vue
import { Component, Vue, Watch } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

import { TEACHERS, LOADING_STATUS } from '@/store/modules/main/getters';
import Loader from '@/common/Loader.component.vue';
import {
  GET_TEACHERS_ACTION,
  SELECT_TEACHER_ACTION,
} from '@/store/modules/main/actions';
import { ROUTES } from '@/constants';

// component setup
@Component({
  components: { Loader },
  computed: mapGetters({ TEACHERS, LOADING_STATUS }),
})
export default class TeachersComponent extends Vue {
  // private
  private readonly ROUTES: {} = ROUTES;
  private filter: string = '';
  constructor() {
    super();
  }
  private async created() {
    if (this.$store.getters[TEACHERS].length === 0) {
      this.$store.dispatch(GET_TEACHERS_ACTION);
    }
  }
  get letters() {
    const letters: any = [];
    for (let i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++) {
      letters.push(String.fromCharCode(i));
    }
    return letters;
  }
  private async selectTeacher(id: number, name: string) {
    this.$store.dispatch(SELECT_TEACHER_ACTION, { name });
    this.$router.push(ROUTES.SCHEDULE.schedule(id, 'prof'));
  }
  private selectedLetter(letter: any) {
    const teachers = this.$store.getters[TEACHERS];
    const id = teachers.find((t: any) => t.lastName[0] === letter).id;
    const element: HTMLElement =
      document.getElementById(id) || HTMLElement.prototype;
    console.log(element);

    element.scrollIntoView();
  }
}
</script>
<style lang="scss">
@import '@/assets/scss/_teachers.scss';
</style>
