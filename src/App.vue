<template>
  <div>
    <header>
      <AppHeader></AppHeader>
    </header>
    <div class="row">
      <nav class="col-ls-2">
        <AppNav></AppNav>
      </nav>
      <main class="col-ls-10">
        <AppSelection selection="selectedID" />
      </main>
    </div>
    <footer>
      <app-footer></app-footer>
    </footer>
  </div>
</template>

<script>
import AppSelection from "./components/Selection.vue";
import AppHeader from "./components/Header.vue";
import AppNav from "./components/Navigation.vue";
import AppFooter from "./components/Footer.vue";

export default {
  name: "app",
  data() {
    // selectedID: 2;
  },
  components: {
    AppSelection,
    AppHeader,
    AppNav,
    AppFooter
  }
};
</script>

<style>
footer {
  position: fixed;
  bottom: 0%;
  display: block;
  margin: auto;
}
</style>
