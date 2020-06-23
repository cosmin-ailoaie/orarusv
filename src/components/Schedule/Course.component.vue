<template>
  <td
    :rowspan="courses[0] ? courses[0].courseDuration / 60 : 1"
    :style="{
      backgroundColor: courses[0] ? courses[0].activityColor : '',
    }"
  >
    <div v-if="courses[0]">
      <div
        v-if="Courses('-')[0]"
        :id="Courses('-')[0].activityId"
        :style="{
          backgroundColor: Courses('-')[0].activityColor,
        }"
      >
        {{ Courses('-')[0].courseShortName }}
        {{ Courses('-')[0].activityType }} {{ Courses('-')[0].roomShortName }}
        {{ Courses('-')[0].courseOtherInfo }}
      </div>
      <div
        v-if="Courses('i')[0]"
        :id="Courses('i')[0].activityId"
        :style="{
          backgroundColor: Courses('i')[0].activityColor,
        }"
      >
        {{ Courses('i')[0].courseShortName }}
        {{ Courses('i')[0].activityType }} {{ Courses('i')[0].roomShortName }}
        {{ Courses('i')[0].courseOtherInfo }}
      </div>
      <div v-if="!Courses('i')[0] && Courses('p')[0]" style="padding:0px">
        -
      </div>
      <hr color="blue" width="75%" v-if="Courses('i')[0] || Courses('p')[0]" />
      <div
        v-if="Courses('p')[0]"
        :id="Courses('p')[0].activityId"
        :style="{
          backgroundColor: Courses('p')[0].activityColor,
        }"
      >
        {{ Courses('p')[0].courseShortName }}
        {{ Courses('p')[0].activityType }} {{ Courses('p')[0].roomShortName }}
        {{ Courses('p')[0].courseOtherInfo }}
      </div>
      <div v-if="!Courses('p')[0] && Courses('i')[0]" style="padding:0px">
        -
      </div>
      <div v-for="c in courses" :key="c.activityId">
        <b-tooltip :target="c.activityId" triggers="hover">
          <ul>
            <li>
              activiate cuprinsă între
              {{ courses[0].courseStartHour / 60 }}:<sup>00</sup>
              și
              {{
                (courses[0].courseStartHour + courses[0].courseDuration) / 60
              }}:<sup>00</sup>
              {{
                courses[0].courseParity === 'p'
                  ? ', în săptămânile pare'
                  : courses[0].courseParity === 'i'
                  ? ',în săptămânile impare'
                  : ''
              }}
            </li>
            <li>
              disciplina: {{ courses[0].courseName }},
              {{ courses[0].courseType }}
            </li>
            <li>
              sala: {{ courses[0].roomName }} din corpul
              {{ courses[0].buildingName }}
            </li>
            <li v-if="courses[0].courseOtherInfo">
              {{ courses[0].courseOtherInfo }}
            </li>
          </ul>
        </b-tooltip>
      </div>
    </div>
    <div v-else>-</div>
  </td>
</template>

<script lang="ts">
// vue
import { Component, Vue, Watch, Prop } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

// import { SCHEDULE } from '@/store/modules/main/getters';

// import { ROUTES } from '@/constants';
// import {
//   GET_TEACHER_SCHEDULE_ACTION,
//   RESET_SCHEDULE_ACTION,
// } from '../../store/modules/main/actions';

// component setup
@Component({ computed: mapGetters({}) })
export default class CourseComponent extends Vue {
  // private
  @Prop() private courses: any;
  //   @Prop() private rowSpan: any;
  //   private countLine = 0;
  //   private rowSpan = 1;
  constructor() {
    super();
  }
  private async created() {
    if (this.courses.length > 0) {
      console.log(this.courses);
    }
  }
  get Courses() {
    return (parity: string) => {
      return this.courses.filter((c: any) => c.courseParity === parity);
    };
  }
}
</script>
<style lang="scss">
// @import '@/assets/scss/_course.scss';
td hr {
  margin-top: 0px;
  margin-bottom: 0px;
}
// td div div {
//   padding: 5px;
// }
</style>
