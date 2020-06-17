<template>
  <div class="">
    <ul class="">
      <li v-for="course in SCHEDULE" :key="course.id">
        {{ course }}
      </li>
    </ul>
    <table>
      <thead>
        <tr>
          <th>ORE</th>
          <td v-for="day in days" :key="day.dID">{{ day.name }}</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="hour in hours" :key="hour.hId">
          <td>{{ hour.name }}</td>
          <td v-for="day in days" :key="day.dID">.</td>
        </tr>
      </tbody>
    </table>
    <!-- <table>
      <tr>
        <th>ORE</th>
        <th>Luni</th>
        <th>Marti</th>
        <th>Miercuri</th>
        <th>Joi</th>
        <th>Vineri</th>
        <th>Sambata</th>
        <th>Duminica</th>
         move to constants 
      </tr>
      <tr>
        <td>8:00 - 9:00</td>
        <td>9:00 - 10:00</td>
        <td>10:00 - 11:00</td>
        <td>11:00 - 12:00</td>
        <td>12:00 - 13:00</td>
        <td>13:00 - 14:00</td>
        <td>14:00 - 15:00</td>
        <td>15:00 - 16:00</td>
        <td>16:00 - 17:00</td>
        <td>17:00 - 18:00</td>
        <td>18:00 - 19:00</td>
        <td>19:00 - 20:00</td>
        <td>20:00 - 21:00</td>
        <td>21:00 - 22:00</td>
      </tr>
      <tr>
        <td>Centro comercial Moctezuma</td>
        <td>Francisco Chang</td>
        <td>Mexico</td>
      </tr>
      <tr>
        <td>Ernst Handel</td>
        <td>Roland Mendel</td>
        <td>Austria</td>
      </tr>
      <tr>
        <td>Island Trading</td>
        <td>Helen Bennett</td>
        <td>UK</td>
      </tr>
      <tr>
        <td>Laughing Bacchus Winecellars</td>
        <td>Yoshi Tannamuri</td>
        <td>Canada</td>
      </tr>
      <tr>
        <td>Magazzini Alimentari Riuniti</td>
        <td>Giovanni Rovelli</td>
        <td>Italy</td>
      </tr>
    </table> -->
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
      hId: 1040,
      name: '18:00-19:00',
    },
    {
      hId: 1100,
      name: '19:00-20:00',
    },
    {
      hId: 1160,
      name: '20:00-21:00',
    },
    {
      hId: 1240,
      name: '21:00-22:00',
    },
  ];
  constructor() {
    super();
  }
  private async created() {
    // if (this.$store.getters[SCHEDULE].length === 0) {

    //   this.$router.push(ROUTES.HOME.path);
    // }
    console.log(this.$route);

    const mode = this.$route.query.mode;
    const id = this.$route.query.id;
    if (mode === 'prof') {
      this.$store.dispatch(GET_TEACHER_SCHEDULE_ACTION, { id, mode: 'prof' });
    }
  }
}
</script>
<style scoped lang="scss"></style>
