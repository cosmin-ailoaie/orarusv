<template>
  <div class="">
    <StudentsComponent />
  </div>
</template>

<script lang="ts">
// vue
import { Component, Vue } from 'vue-property-decorator';

// components
import StudentsComponent from '@/components/Students/Students.component.vue';
// components setup
@Component({
  components: { StudentsComponent },
})
export default class Students extends Vue {
  constructor() {
    super();
  }
}
</script>
<style lang="scss"></style>
