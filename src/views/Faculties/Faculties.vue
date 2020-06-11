<template>
  <div class="">
    <FacultiesComponent />
  </div>
</template>

<script lang="ts">
// vue
import { Component, Vue } from 'vue-property-decorator';

// components
import FacultiesComponent from '@/components/Faculties/Faculties.component.vue';
// components setup
@Component({
  components: { FacultiesComponent },
})
export default class Faculties extends Vue {
  constructor() {
    super();
  }
}
</script>
<style lang="scss"></style>
