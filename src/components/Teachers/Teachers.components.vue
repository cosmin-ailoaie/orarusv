<template>
  <div class="teachersList">
    <ul class="teachers">
      <li
        v-for="teacher in TEACHERS"
        :key="teacher.id"
        @click="selectTeacher(teacher.id)"
      >
        {{ teacher.id }} {{ teacher.lastName }} {{ teacher.firstName }}
      </li>
    </ul>
    <section>
      <div class="alpha-letters-list">
        <div
          v-for="(letter, index) in letters"
          :key="index"
          @click="selectedLetter = letter"
          class="contains"
        >
          <span>{{ letter }}</span>
          <i></i>
        </div>
      </div>
    </section>
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
      // if (i === 'S'.charCodeAt(0)) {
      //   letters.push(String.fromCharCode('Ș'.charCodeAt(0)));
      // }
      // if (i === 'T'.charCodeAt(0)) {
      //   letters.push(String.fromCharCode('Ț'.charCodeAt(0)));
      // }
    }
    return letters;
  }
  private async selectTeacher(id: number) {
    this.$router.push(ROUTES.SCHEDULE.schedule(id, 'prof'));
  }
}
</script>
<style scoped lang="scss">
.teachersList {
  position: relative;
  border: 2px solid black;
  height: 700px;
  overflow: scroll;
  overflow-x: hidden;
  .teachers {
    li {
      &:hover {
        font-weight: bold;
        color: blue;
      }
      &:nth-child(odd) {
        background-color: grey;
      }
      &:nth-child(even) {
        background-color: lightgrey;
      }
    }
    color: white;
  }
  section > .alpha-letters-list {
    color: black;
    position: absolute;
    top: 0px;
    right: 20px;
  }
}
</style>
