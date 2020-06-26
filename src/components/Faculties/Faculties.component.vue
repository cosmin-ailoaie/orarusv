<template>
  <div class="mt-5 facultiesList">
    <transition name="router-anim" mode="out-in">
      <ul v-if="facultyId === 0 && semiGroupId === 0" class="mijloc">
        <router-link :to="ROUTES.HOME.path">
          <!-- <li> -->
          <i class="fas fa-arrow-left"></i>
          <!-- </li> -->
        </router-link>

        <li v-for="faculty in FACULTIES" :key="faculty.id" class="my-2 ">
          <div class="facultyItem" @click="toFaculty(faculty.id)">
            {{ isMobile ? faculty.shortName : faculty.name }}
          </div>
        </li>
        <li>
          Departamentul de Specialitate cu Profil Psihopedagogic:
        </li>
        <li>
          <a href="http://www.dppd.usv.ro/dppd2/pdf/2018/Niv%20I%20postuniv.pdf"
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
    </transition>
    <transition name="router-anim" mode="out-in">
      <ul v-if="facultyId > 0 && semiGroupId === 0">
        <li @click="facultyId = 0">
          <i class="fas fa-arrow-left"></i>
        </li>
        <li
          v-for="group in SEMIGROUPS.filter(
            group => group.facultyId === facultyId,
          )"
          :key="group.id"
          class="my-2 "
          @click="goToSchedule(group.id)"
        >
          <div class="facultyItem">
            {{
              `${group.specialityShortName}  ${group.groupNumber}${group.subGroupLetter}`
            }}
          </div>
        </li>
      </ul>
    </transition>
    <transition name="router-anim" mode="out-in">
      <ul v-if="semiGroupId > 0">
        <li @click="semiGroupId = 0">
          <i class="fas fa-arrow-left"></i>
        </li>
        <li
          v-for="group in SEMIGROUPS.filter(
            group => group.facultyId === facultyId,
          )"
          :key="group.id"
          class="my-2 "
          @click="semiGroupId = group.id"
        >
          <div class="facultyItem">
            {{
              `${group.specialityShortName}  ${group.groupNumber}${group.subGroupLetter}`
            }}
          </div>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script lang="ts">
// vue
import { Component, Vue, Watch } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import { FACULTIES, SEMIGROUPS } from '@/store/modules/main/getters';
import {
  GET_FACULTIES_ACTION,
  GET_SEMIGROUPS_ACTION,
} from '@/store/modules/main/actions';
import { ROUTES } from '@/constants/routes';

// component setup
@Component({ computed: mapGetters({ FACULTIES, SEMIGROUPS }) })
export default class FacultiesComponent extends Vue {
  // private
  private readonly ROUTES: {} = ROUTES;
  private isMobile: boolean = false;
  private facultyId: number = 0;
  private semiGroupId: number = 0;
  constructor() {
    super();
  }
  private async created() {
    this.isMobile = window.innerWidth <= 768 ? true : false;
    if (this.$store.getters[FACULTIES].length === 0) {
      this.$store.dispatch(GET_FACULTIES_ACTION);
    }
    if (this.$store.getters[FACULTIES].length === 0) {
      this.$store.dispatch(GET_SEMIGROUPS_ACTION);
    }
  }
  private mounted() {
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth <= 768 ? true : false;
    });
  }
  private toFaculty(id: number) {
    this.facultyId = id;
  }
  private goToSchedule(id: number) {
    this.$router.push(ROUTES.SCHEDULE.schedule(id, 'grupa'));
  }
}
</script>
<style lang="scss">
@import '@/assets/scss/_faculties.scss';
.facultiesList {
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  // justify-self: start;
}
ul {
  // width: 100%;
  position: relative;
  list-style: none;
  // overflow-x: hidden;
  // overflow-y: scroll;
  li {
    // text-align: justify;
    padding: 2px 0px;
    // margin: 5px;
    // margin: auto;

    text-align: center;
    // width: 100%;
    transition: transform 0.2s;
    @media (max-width: 768px) {
      background-color: white;
    }
    font-size: 1.2rem;
    color: black;
    border-radius: 10px;
    &:hover {
      transform: scale(1.05);
      z-index: 100;
      background: $color-c1-blue;
      color: white;
      box-shadow: 0 5px 25px rgba(#000, $alpha: 0.1);
    }
  }
}
</style>
