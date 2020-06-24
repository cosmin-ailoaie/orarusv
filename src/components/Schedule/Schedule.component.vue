<template>
  <div class="schedule mt-5">
    <h5 v-if="SCHEDULE.length > 0">
      {{ SCHEDULE[0].teachingDegreeName }}
      {{ SCHEDULE[0].doctoralSituationsName }}
      {{ SCHEDULE[0].activityTypesName }} {{ SCHEDULE[0].teacherLastName }}
      {{ SCHEDULE[0].teacherFirstName }}
    </h5>
    <table class="scheduleTable" :style="listLength">
      <tbody>
        <tr class="day">
          <td></td>
          <td
            v-for="day in days"
            :key="day.dID"
            class="headDay"
            :class="day.dId != dayToShow && windowWidth < 768 ? 'blur' : ''"
            :style="listPosition"
          >
            {{ day.name }}
          </td>
        </tr>
        <tr v-for="hour in hours" :key="hour.hId" class="hour">
          <td class="interval">{{ hour.name }}</td>
          <template v-for="day in days">
            <CourseComponent
              :key="day.dId"
              :courses="Courses(day.dId, hour.hId)"
              v-if="!rowSpanTest(day.dId, hour.hId)"
              class="bodyDay"
              :class="day.dId != dayToShow && windowWidth < 768 ? 'blur' : ''"
              :style="listPosition"
            ></CourseComponent>
          </template>
        </tr>
      </tbody>
    </table>
    <br />
    <table class="legendTable">
      <tbody>
        <tr>
          <td style="border: none;background-color:transparent">Legenda:</td>
          <td style="border: none;background-color:transparent"></td>
          <td style="background-color:#ccbbbb">seminar</td>
          <td style="background-color:#ccddcc">laborator</td>
          <td style="background-color:#eeeeee">consultatii</td>
          <td style="background-color:#ccddcc">proiect</td>
          <td style="background-color:#9999aa">curs</td>
          <td style="border: none;background-color:transparent"></td>
        </tr>
      </tbody>
    </table>
    <button class="inc" @click="dayToShow == 7 ? (dayToShow = 1) : dayToShow++">
      Inc Day
    </button>
  </div>
</template>

<script lang="ts">
// vue
import { Component, Vue, Watch } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

import { SCHEDULE } from '@/store/modules/main/getters';
import CourseComponent from '@/components/Schedule/Course.component.vue';
import { ROUTES } from '@/constants';
import {
  GET_TEACHER_SCHEDULE_ACTION,
  RESET_SCHEDULE_ACTION,
} from '../../store/modules/main/actions';

// component setup
@Component({
  components: {
    CourseComponent,
  },
  computed: mapGetters({ SCHEDULE }),
})
export default class ScheduleComponent extends Vue {
  // private
  private countLine = 0;
  private readonly ROUTES: {} = ROUTES;
  private days = [
    {
      dId: 1,
      name: 'Luni',
    },
    {
      dId: 2,
      name: 'Marți',
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
      name: 'Sâmbătă',
    },
    {
      dId: 7,
      name: 'Duminică',
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
      name: '17:00-18:00',
    },
    {
      hId: 1080,
      name: '18:00-19:00',
    },
    {
      hId: 1140,
      name: '19:00-20:00',
    },
    {
      hId: 1200,
      name: '20:00-21:00',
    },
    {
      hId: 1260,
      name: '21:00-22:00',
    },
  ];
  private COURSES: any = [];
  //   private rowSpan = 1;
  private dayToShow = 1;
  private windowWidth = 99999;
  private touch: any = {
    startX: 0,
    endX: 0,
  };
  constructor() {
    super();
  }
  private async created() {
    this.windowWidth = window.innerWidth;
    const mode = this.$route.query.mode;
    const id = this.$route.query.id;
    if (mode === 'prof') {
      await this.$store.dispatch(GET_TEACHER_SCHEDULE_ACTION, {
        id,
        mode: 'prof',
      });
    }
    console.log(this.$store.getters[SCHEDULE]);
    this.$el.addEventListener('touchstart', (event: any) =>
      this.touchstart(event),
    );
    this.$el.addEventListener('touchmove', (event: any) =>
      this.touchmove(event),
    );
    this.$el.addEventListener('touchend', () => this.touchend());
  }
  get Courses() {
    return (day: any, hour: any) => {
      return this.$store.getters[SCHEDULE].filter(
        (c: any) => c.courseDayNumber === day && c.courseStartHour === hour,
      );
    };
  }
  get rowSpanTest() {
    return (day: any, hour: any) => {
      return (
        this.$store.getters[SCHEDULE].filter(
          (c: any) =>
            c.courseDayNumber === day &&
            c.courseStartHour + c.courseDuration > hour &&
            c.courseStartHour < hour,
        ).length > 0
      );
    };
  }
  private mounted() {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth;
    });
  }
  get listPosition() {
    return this.windowWidth <= 768
      ? { transform: 'translateX(-' + (this.dayToShow - 1) * 100 + '%)' }
      : '';
  }
  get listLength() {
    return this.windowWidth <= 768
      ? { width: (this.days.length + 0) * 100 + '%' }
      : '';
  }
  private async beforeDestroy() {
    this.$store.dispatch(RESET_SCHEDULE_ACTION);
  }
  private touchstart(event: any) {
    this.touch.startX = event.touches[0].clientX;
    this.touch.endX = 0;
  }
  private touchmove(event: any) {
    this.touch.endX = event.touches[0].clientX;
  }
  private touchend() {
    if (
      !this.touch.endX ||
      Math.abs(this.touch.endX - this.touch.startX) < 20
    ) {
      return;
    }

    if (this.touch.endX < this.touch.startX) {
      this.dayToShow < 7 ? this.dayToShow++ : (this.dayToShow = 1);
    } else {
      this.dayToShow > 1 ? this.dayToShow-- : (this.dayToShow = 7);
    }
  }
}
</script>
<style lang="scss">
@import '@/assets/scss/_schedule.scss';
</style>
