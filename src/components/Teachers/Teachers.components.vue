<template>
  <div class="teachersList">
    <b-row sm="12" md="6">
      <b-col>
        <ul class="teachers">
          <li v-for="(key, value) in Object.entries(TEACHERS)" :key="value.id">
            <div v-for="test in key" :key="test.id">
              <div v-for="t in test" :key="t.id" @click="selectTeacher(t.id)">
                {{ t.lastName }} {{ t.firstName }}
              </div>
            </div>
          </li>
        </ul>
        <section>
          <div
            v-for="(letter, index) in letters"
            :key="index"
            @click="selectedLetter = letter"
            class="alpha-letters-list contains"
          >
            <span>{{ letter }}</span>
            <i></i>
          </div>
        </section>
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

// component setup
@Component({ computed: mapGetters({ TEACHERS }) })
export default class TeachersComponent extends Vue {
  // private
  // private readonly APP: {} = APP;
  private selectedLetter = 'A';
  constructor() {
    super();
  }
  private async created() {
    if (this.$store.getters[TEACHERS].length === 0) {
      this.$store.dispatch(GET_TEACHERS_ACTION);
    }
  }
  get letters() {
    let letters: any = [];
    for (let i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++) {
      letters.push(String.fromCharCode(i));
      if (i === 'S'.charCodeAt(0)) {
        letters.push(String.fromCharCode('Ș'.charCodeAt(0)));
      }
      if (i === 'T'.charCodeAt(0)) {
        letters.push(String.fromCharCode('Ț'.charCodeAt(0)));
      }
    }
    return letters;
  }
  private async selectTeacher(id: number) {
    this.$store.dispatch(SELECT_TEACHER_ACTION, { id });
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
      div {
        div {
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
      }
      color: white;
    }
  }
  section .alpha-letters-list.contains {
    opacity: 1;
    cursor: pointer;
    pointer-events: all;
    color: #7db622;
  }
  section .alpha-letters-list {
    position: absolute;
    top: 0px;
    right: 15px;
    text-transform: uppercase;
    transition-duration: 0.3s;
    display: table;
    width: 50px;
    padding: 1px 0;
    text-align: center;
    font-size: 13px;
    font-weight: 700;
    box-sizing: border-box;
    pointer-events: none;
    opacity: 0.3;
  }
}
</style>
