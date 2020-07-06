<template>
  <div>
    <ul>
      <li v-for="room in ROOMS" :key="room.id">
        {{ room.name }}
      </li>
    </ul>
    <h1 style="color:white">UNDER CONSTRUCTION</h1>
  </div>
</template>

<script lang="ts">
// vue
import { Component, Vue, Watch } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import { ROOMS, SELECTED_TEACHER } from '../../store/modules/main/getters';
import {
  GET_ROOMS_ACTION,
  GET_SCHEDULE_ACTION,
} from '@/store/modules/main/actions';

// component setup
@Component({ computed: mapGetters({ ROOMS, SELECTED_TEACHER }) })
export default class RoomsComponent extends Vue {
  // private
  // private readonly APP: {} = APP;

  constructor() {
    super();
  }
  private async created() {
    if (this.$store.getters[ROOMS].length === 0) {
      this.$store.dispatch(GET_ROOMS_ACTION);
    }
  }
  private async test() {
    const id = await this.$store.getters[SELECTED_TEACHER];
    this.$store.dispatch(GET_SCHEDULE_ACTION, {
      id,
      mode: 'prof',
    });
  }
}
</script>
<style scoped lang="scss"></style>
