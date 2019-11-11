<template>
  <div id="app" class="container">
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
      <div class="alert alert-success alert-dismissible fade show" role="alert">
        With Bootstrap!
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import AppSelection from "./components/Selection.vue";
import AppHeader from "./components/Header.vue";
import AppNav from "./components/Navigation.vue";

export default {
  name: "app",
  data() {
    // selectedID: 2;
  },
  components: {
    AppSelection,
    AppHeader,
    AppNav
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0%;
}
main {
  text-align: center;
}
</style>
