<template>
<<<<<<< Updated upstream
  <div id="app" class="container">
    <header>
      <AppHeader></AppHeader>
    </header>
    <div class="row">
      <nav class="col-ls-2">
        <AppNav></AppNav>
      </nav>
=======
  <div class="wrapper">
    <div class="sidebar">
      <AppNav></AppNav>
    </div>
    <div>
      <!-- <header class="h">
        <AppHeader></AppHeader>
      </header>-->
>>>>>>> Stashed changes
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
// import AppHeader from "./components/Header.vue";
import AppNav from "./components/Navigation.vue";

export default {
  name: "app",
  data() {
    // selectedID: 2;
  },
  components: {
    AppSelection,
<<<<<<< Updated upstream
    AppHeader,
    AppNav
=======
    // AppHeader,
    AppNav,
    AppFooter
>>>>>>> Stashed changes
  }
};
</script>

<style>
<<<<<<< Updated upstream
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
=======
.wrapper {
  display: flex;
  position: relative;
}
.h {
  position: fixed;
  width: 100%;
  height: auto;
}
footer {
  position: fixed;
  bottom: 0%;
  display: block;
  margin: auto;
>>>>>>> Stashed changes
}
</style>
