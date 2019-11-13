<template>
  <div class="wrapper">
    <div class="sidebar">
      <AppNav></AppNav>
    </div>
    <div>
      <!-- <header class="h">
        <AppHeader></AppHeader>
      </header>-->
      <main class="col-ls-10">
        <AppSelection selection="selectedID" />
      </main>
    </div>
  </div>
</template>

<script>
import AppSelection from "./components/Selection.vue";
// import AppHeader from "./components/Header.vue";
import AppNav from "./components/Navigation.vue";
// import AppFooter from './components/Footer.vue'
export default {
  name: "app",
  data() {
    // selectedID: 2;
  },
  components: {
    AppSelection,
    // AppHeader,
    AppNav
    // AppFooter
  }
};
</script>

<style>
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
}
</style>
