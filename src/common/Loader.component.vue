<template>
  <div class="vld-parent">
    <loading
      :active="isLoading"
      :is-full-page="LOADER.fullPage"
      :color="LOADER.color"
      :loader="LOADER.loaderType"
      :background-color="LOADER.background"
      :width="LOADER.width"
      :height="LOADER.height"
      :opacity="LOADER.opacity"
    ></loading>
  </div>
</template>

<script lang="ts">
// vue
import { Component, Vue, Prop } from 'vue-property-decorator';

// components
import Loading from 'vue-loading-overlay';

// content
import { LOADER } from '@/constants';

// component setup
@Component({
  components: {
    Loading,
  },
})
export default class Loader extends Vue {
  // props
  @Prop() private isLoading: any;

  // private
  private LOADER: object = LOADER;
}
</script>
