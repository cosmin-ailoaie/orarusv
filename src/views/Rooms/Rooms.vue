<template>
  <div class="">
    <RoomsComponent />
  </div>
</template>

<script lang="ts">
// vue
import { Component, Vue } from 'vue-property-decorator';

// components
import RoomsComponent from '@/components/Rooms/Rooms.component.vue';
// components setup
@Component({
  components: { RoomsComponent },
})
export default class Rooms extends Vue {
  constructor() {
    super();
  }
}
</script>
<style lang="scss"></style>
