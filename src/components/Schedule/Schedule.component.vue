<template>
  <div class="schedule">
    <table>
      <thead>
        <tr class="day">
          <td></td>
          <td v-for="day in days" :key="day.dID">{{ day.name }}</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="hour in hours" :key="hour.hId">
          <td>{{ hour.name }}</td>
          <td v-for="day in days" :key="day.dId">
            <template v-for="c in Courses(day.dId)">
              <td
                :key="c.id"
                :rowspan="c.courseDuration / 60"
                v-if="
                  c.courseDayNumber === day.dId &&
                    c.courseStartHour === hour.hId
                "
                :style="{ backgroundColor: c.activityColor }"
              >
                {{ c.courseShortName }} {{ c.activityType }}
                {{ c.roomShortName }}
                <div
                  class="tooltiptext"
                  v-if="
                    c.courseDayNumber === day.dId &&
                      c.courseStartHour === hour.hId
                  "
                >
                  <ul>
                    <li>
                      activiate cuprinsa intre {{ c.courseStartHour / 60 }}:<sup
                        >00</sup
                      >
                      si {{ (c.courseStartHour + c.courseDuration) / 60 }}:<sup
                        >00</sup
                      >
                      {{
                        c.courseParity === 'p'
                          ? ', in saptamanile pare'
                          : c.courseParity === 'i'
                          ? ',in saptamanile impare'
                          : ''
                      }}
                    </li>
                    <li>disciplina: {{ c.courseName }}, {{ c.courseType }}</li>
                    <li>
                      sala: {{ c.roomName }} din corpul {{ c.buildingName }}
                    </li>
                  </ul>
                </div>
              </td>
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
// vue
import { Component, Vue, Watch } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

import { SCHEDULE } from '@/store/modules/main/getters';

import { ROUTES } from '@/constants';
import { GET_TEACHER_SCHEDULE_ACTION } from '../../store/modules/main/actions';

// component setup
@Component({ computed: mapGetters({ SCHEDULE }) })
export default class ScheduleComponent extends Vue {
  // private
  private readonly ROUTES: {} = ROUTES;
  private days = [
    {
      dId: 1,
      name: 'Luni',
    },
    {
      dId: 2,
      name: 'Marti',
    },
    {
      dId: 3,
      name: 'Miercuri',
    },
    {
      dId: 4,
      name: 'Joi',
    },
    {
      dId: 5,
      name: 'Vineri',
    },
    {
      dId: 6,
      name: 'Sambata',
    },
    {
      dId: 7,
      name: 'Duminica',
    },
  ];
  private hours = [
    {
      hId: 480,
      name: '8:00-9:00',
    },
    {
      hId: 540,
      name: '9:00-10:00',
    },
    {
      hId: 600,
      name: '10:00-11:00',
    },
    {
      hId: 660,
      name: '11:00-12:00',
    },
    {
      hId: 720,
      name: '12:00-13:00',
    },
    {
      hId: 780,
      name: '13:00-14:00',
    },
    {
      hId: 840,
      name: '14:00-15:00',
    },
    {
      hId: 900,
      name: '15:00-16:00',
    },
    {
      hId: 960,
      name: '16:00-17:00',
    },
    {
      hId: 1020,
      name: '18:00-19:00',
    },
    {
      hId: 1080,
      name: '19:00-20:00',
    },
    {
      hId: 1140,
      name: '20:00-21:00',
    },
    {
      hId: 1200,
      name: '21:00-22:00',
    },
  ];
  private COURSES: any = [];
  constructor() {
    super();
  }
  private async created() {
    const mode = this.$route.query.mode;
    const id = this.$route.query.id;
    if (mode === 'prof') {
      this.$store.dispatch(GET_TEACHER_SCHEDULE_ACTION, { id, mode: 'prof' });
    }
  }
  get Courses() {
    return (day: any) => {
      return this.$store.getters[SCHEDULE].filter(
        (c: any) => c.courseDayNumber === day,
      );
    };
  }
}
</script>
<style lang="scss">
@import '@/assets/scss/_schedule.scss';
</style>
