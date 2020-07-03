<template>
  <div class="mt-5 facultiesList">
    <transition name="router-anim" mode="out-in">
      <ul
        class="TekList"
        v-if="facultyId === 0 && semiGroupId === 0"
        :class="isMobile ? 'isMobile' : ''"
      >
        <router-link :to="ROUTES.HOME.path">
          <!-- <li> -->
          <div class="facultyItem text-primary">
            <i class="fas fa-arrow-left fa-lg"></i>
          </div>
          <!-- </li> -->
        </router-link>

        <li v-for="faculty in FACULTIES" :key="faculty.id" class="my-2">
          <div class="facultyItem" @click="toFaculty(faculty.id)">
            {{ isMobile ? faculty.shortName : faculty.name }}
          </div>
        </li>
        <li class="my-2 dspp">
          <div class="facultyItem">
            {{
              isMobile
                ? 'DSPP:'
                : 'Departamentul de Specialitate cu Profil Psihopedagogic:'
            }}
          </div>
        </li>

        <li class="my-2 post">
          <div class="facultyItem">
            <a
              href="http://www.dppd.usv.ro/dppd2/pdf/2018/Niv%20I%20postuniv.pdf"
              >postuniversitar nivel 1</a
            >
          </div>
        </li>
        <li class="my-2 post">
          <div class="facultyItem">
            <a
              href="http://www.dppd.usv.ro/dppd2/pdf/2018/Niv%20II%20Postuniv.pdf"
              >postuniversitar nivel 2</a
            >
          </div>
        </li>
      </ul>
    </transition>
    <transition name="router-anim" mode="out-in">
      <!-- <ul v-if="facultyId > 0 && semiGroupId === 0">
        <li @click="facultyId = 0">
          <i class="fas fa-arrow-left fa-lg"></i>
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
      </ul> -->
      <div v-if="facultyId > 0 && semiGroupId === 0">
        <ul>
          <li @click="facultyId = 0">
            <div class="facultyItem text-primary">
              <i class="fas fa-arrow-left fa-lg"></i>
            </div>
          </li>
        </ul>
        <b-tabs pills class="semigrupe">
          <b-tab
            class="subGroups mt-3"
            v-for="(subGroup, index) in subGroups(facultyId)"
            :key="index"
            :title="subGroup[0].specialityShortName"
          >
            <div class="subgroup">
              <b-card>
                <ul class="TekList">
                  <li
                    v-for="group in subGroup"
                    :key="group.id"
                    class="my-2 "
                    @click="
                      goToSchedule(
                        group.id,
                        group.year,
                        group.groupNumber,
                        group.subGroupLetter,
                      )
                    "
                  >
                    <div class="facultyItem">
                      {{
                        `Anul ${group.year}: ${group.groupNumber}${group.subGroupLetter}`
                      }}
                    </div>
                  </li>
                </ul>
              </b-card>
            </div>
          </b-tab>
        </b-tabs>
      </div>
    </transition>
    <!-- 
      <ul v-if="semiGroupId > 0">
        <li @click="semiGroupId = 0">
          <i class="fas fa-arrow-left fa-lg"></i>
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
      </ul> -->
  </div>
</template>

<script lang="ts">
// vue
import { Component, Vue, Watch } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import {
  FACULTIES,
  SEMIGROUPS,
  SELECTED_SEMIGROUP,
} from '@/store/modules/main/getters';
import {
  GET_FACULTIES_ACTION,
  GET_SEMIGROUPS_ACTION,
  SELECT_SEMIGROUP_ACTION,
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
  private goToSchedule(
    id: number,
    year: number,
    groupNumber: number,
    subGroupLetter: string,
  ) {
    this.$store.dispatch(SELECT_SEMIGROUP_ACTION, {
      name: `Anul ${year}: ${groupNumber}${subGroupLetter}`,
    });
    this.$router.push(ROUTES.SCHEDULE.schedule(id, 'grupa'));
  }
  private subGroups(facultyId: number) {
    const semigroupsOriginal = this.$store.getters[SEMIGROUPS];
    const semigroups = semigroupsOriginal.filter(
      (group: any) => group.facultyId === facultyId,
    );
    // console.log(semigroups);

    const groupBy = (objectArray: any, ...properties: any) => {
      return [
        ...Object.values(
          objectArray.reduce((accumulator: any, object: any) => {
            const key = JSON.stringify(
              properties.map((x: any) => object[x] || null),
            );

            if (!accumulator[key]) {
              accumulator[key] = [];
            }
            accumulator[key].push(object);
            return accumulator;
          }, {}),
        ),
      ];
    };

    const subGroup = groupBy(semigroups, 'specialityShortName');
    console.log(subGroup);
    return subGroup;
    // return semigroups.map((group:any)=>{

    // })
  }
}
</script>
<style lang="scss">
@import '@/assets/scss/_faculties.scss';
</style>
