<template>
  <div class="">
    <NavigationComponent />
  </div>
</template>

<script lang="ts">
// vue
import { Component, Vue } from 'vue-property-decorator';

// components
import NavigationComponent from '@/components/Navigation/Navigation.component.vue';
// components setup
@Component({
  components: { NavigationComponent },
})
export default class Students extends Vue {
  constructor() {
    super();
  }
}
</script>
<style lang="scss"></style>
