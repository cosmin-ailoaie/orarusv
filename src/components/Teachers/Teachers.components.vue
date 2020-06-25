<template>
  <div class="teachersList">
    <b-row class="mt-4">
      <b-col>
        <div class="fakeButton">
          Inapoi
        </div>
      </b-col>
      <b-col>
        <div class="fakeButton">
          Acasa
        </div>
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
    <b-row>
      <b-col xs="10" sm="10" md="9" lg="11">
        <div class="teachers mt-3">
          <ul class="">
            <li
              v-for="teacher in TEACHERS.filter(teacher =>
                teacher.name
                  .toLowerCase()
                  .includes(filter.trim().toLowerCase()),
              )"
              :key="teacher.id"
              :id="teacher.id"
              @click="selectTeacher(teacher.id)"
            >
              {{ teacher.lastName }} {{ teacher.firstName }}
            </li>
          </ul>
        </div>
      </b-col>
      <b-col xs="1" sm="1" md="3" lg="1">
        <!-- <section> -->
        <ul class="alpha-letters-list">
          <li
            v-for="(letter, index) in letters"
            :key="index"
            @click="selectedLetter(letter)"
            class="contains"
          >
            <span>{{ letter }}</span>
            <i></i>
          </li>
        </ul>
        <!-- </section> -->
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
// vue
import { Component, Vue, Watch } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

import { TEACHERS } from '@/store/modules/main/getters';

import {
  GET_TEACHERS_ACTION,
  SELECT_TEACHER_ACTION,
} from '@/store/modules/main/actions';
import { ROUTES } from '@/constants';

// component setup
@Component({ computed: mapGetters({ TEACHERS }) })
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
  private async selectTeacher(id: number) {
    this.$router.push(ROUTES.SCHEDULE.schedule(id, 'prof'));
  }
  private selectedLetter(letter: any) {
    const teachers = this.$store.getters[TEACHERS];
    const id = teachers.find((t: any) => t.lastName[0] === letter).id;
    const element = document.getElementById(id);
    console.log(element);

    element.scrollIntoView();
  }
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/_teachers.scss';
</style>
