<template>
  <div>
    <h1>nav</h1>
  </div>
</template>

<script lang="ts">
// vue
import { Component, Vue, Watch } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

// component setup
@Component({ computed: mapGetters({}) })
export default class NavigationComponent extends Vue {
  // private
  // private readonly APP: {} = APP;

  constructor() {
    super();
  }

  private async LogoutAction() {}
}
</script>
<style scoped lang="scss">
.sidebar {
  .icon {
    background-color: red;
  }
}
</style>
