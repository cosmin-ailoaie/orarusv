<template>
  <div>
    <h1>stiudens</h1>
  </div>
</template>

<script lang="ts">
// vue
import { Component, Vue, Watch } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

// component setup
@Component({ computed: mapGetters({}) })
export default class StudentsComponent extends Vue {
  // private
  // private readonly APP: {} = APP;

  constructor() {
    super();
  }
}
</script>
<style scoped lang="scss"></style>
