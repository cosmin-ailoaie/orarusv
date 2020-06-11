<template>
  <div>
    <h1>rooms</h1>
  </div>
</template>

<script lang="ts">
// vue
import { Component, Vue, Watch } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

// component setup
@Component({ computed: mapGetters({}) })
export default class RoomComponent extends Vue {
  // private
  // private readonly APP: {} = APP;

  constructor() {
    super();
  }
}
</script>
<style scoped lang="scss"></style>
