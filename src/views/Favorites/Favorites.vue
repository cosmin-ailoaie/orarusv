<template>
  <div class="">
    <FavoritesComponent />
  </div>
</template>

<script lang="ts">
// vue
import { Component, Vue } from 'vue-property-decorator';

// components
import FavoritesComponent from '@/components/Favorites/Favorites.component.vue';
// components setup
@Component({
  components: { FavoritesComponent },
})
export default class Favorites extends Vue {
  constructor() {
    super();
  }
}
</script>
<style lang="scss"></style>
