<template>
  <div class="grid-container">
    <div class="sidebar">
      <AppNav></AppNav>
    </div>
    <div class="main">
      <main class="main-section">
        <router-view></router-view>
      </main>
    </div>
    <div class="footer">
      <footer>
        <app-footer></app-footer>
      </footer>
    </div>
  </div>
</template>

<script>
import AppNav from "./components/Navigation.vue";
import AppFooter from "./components/Footer.vue";
export default {
  name: "app",

  // data() {},
  components: {
    AppNav,
    AppFooter
  }
};
</script>

<style>
ul {
  margin: -1px !important;
}
.grid-container {
  /* transition: all 1s ease-out; */
  display: grid;
  grid-template-columns: 20% auto;
  grid-template-rows: 100vh;
}
.sidebar {
  background-color: rgb(19, 63, 138);
  height: 100%;
  width: 100%;
  max-width: 250px;
  position: relative;
}
.main {
  display: flex;
  justify-content: center;
  padding: 20px 50px;
}
.footer {
  width: 100%;
  position: absolute;
  bottom: 0%;
  display: none;
}
@media (max-width: 992px) {
  .grid-container {
    grid-template-columns: 100px auto;
    grid-template-rows: 100vh;
  }
}
@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 100%;
    grid-template-rows: 105px auto;
  }
  .sidebar {
    max-width: none;
  }
  .footer {
    display: block;
  }
}
</style>
