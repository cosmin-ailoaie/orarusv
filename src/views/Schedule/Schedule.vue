<template>
  <div class="">
    <ScheduleComponent />
  </div>
</template>

<script lang="ts">
// vue
import { Component, Vue } from 'vue-property-decorator';

// components
import ScheduleComponent from '@/components/Schedule/Schedule.component.vue';
// components setup
@Component({
  components: { ScheduleComponent },
})
export default class Schedule extends Vue {
  constructor() {
    super();
  }
}
</script>
<style lang="scss"></style>
