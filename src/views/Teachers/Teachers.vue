<template>
  <div class="">
    <TeachersComponent />
  </div>
</template>

<script lang="ts">
// vue
import { Component, Vue } from 'vue-property-decorator';

// components
import TeachersComponent from '@/components/Teachers/Teachers.components.vue';
// components setup
@Component({
  components: { TeachersComponent },
})
export default class Teachers extends Vue {
  constructor() {
    super();
  }
}
</script>
<style lang="scss"></style>
