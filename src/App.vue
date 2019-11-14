<template>
  <div class="wrapper">
    <div class="sidebar">
      <AppNav></AppNav>
    </div>
    <div>
      <div class="main">
        <main class="main-section">
          <AppSelection />
        </main>
      </div>
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

  // data() {},
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
.main {
  width: 100%;
  margin-left: 270px;
}
.main-section {
}
@media screen and (max-width: 768px) {
  .main {
    margin-top: 140px;
    margin-left: 0%;
    height: 100%;
    justify-items: center;
  }
  .main-section {
  }
}
footer {
  position: fixed;
  bottom: 0%;
  display: block;
  margin: auto;
}
</style>
