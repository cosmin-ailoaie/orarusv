<template>
  <div class="navigation-wrapper mt-5">
    <b-row align-v="center">
      <b-col
        lg="3"
        md="6"
        sm="12"
        xs="12"
        v-for="(button, index) in options"
        :key="index"
        class="my-2"
      >
        <div class="fakeButton">
          {{ button.name }}
        </div>
      </b-col>
    </b-row>
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
  private options = [
    { name: 'FAVORITE' },
    { name: 'FACULTATI' },
    { name: 'PROFESORI' },
    { name: 'SALI' },
  ];

  constructor() {
    super();
  }
}
</script>
<style lang="scss">
@import '@/assets/scss/_navigation.scss';
</style>
