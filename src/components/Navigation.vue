<template>
  <!-- <div>
    <ul>
      <button
        v-for="(option) in options"
        :key="option.id"
        v-on:click="selectSpec(option.id)"
      >{{option.title}}</button>
    </ul>
  </div>-->
  <div class="sidebar" v-bind:class="{toggleView:toggleMenu}">
    <img src="../assets/usv_logo.png" />
    <a v-on:click="toggle" class="icon" scaley>
      <i class="fa fa-bars"></i>
    </a>
    <ul>
      <li
        v-for="(option) in getOptions"
        :key="option.id"
        v-on:click="selectOption(option.id)"
        v-bind:class="{selected: option.title == getSelectedOption}"
      >{{option.title}}</li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["getOptions", "getSelectedOption"]),
  data() {
    return {
      toggleMenu: false,
      showOn: false
    };
  },
  methods: {
    ...mapActions(["setSelectedOption"]),
    selectOption(id) {
      this.setSelectedOption(id);
      this.toggle();
    },
    toggle() {
      this.toggleMenu = !this.toggleMenu;
    }
  }
};
</script>

<style scoped>
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50%;
  height: 70px;
  width: 230px;
}
.wrapper .sidebar {
  /* transition: all 0.4s ease; */
  position: fixed;
  width: 270px;
  height: 100vh;
  background-color: rgb(19, 63, 138);
  /* background-color: #; */
  padding: 20px 0;
  justify-content: initial;
}
ul li {
  display: block;
  height: 50px;
  line-height: 50px;
  text-align: center;
  text-justify: auto;
  /* border: 2px solid black; */
  color: white;
  cursor: pointer;
  /* transition: all 2 ease-out; */
}
ul li:hover {
  background-color: rgb(24, 73, 161);
  /* background-color: red; */
}
.selected {
  background-color: rgb(3, 47, 122);
}
.icon {
  display: none;
}
@media (max-width: 768px) {
  .sidebar {
    max-height: 12% !important;
    width: 100% !important;
    transition: all 1s ease;
  }
  ul {
    display: none;
    margin-top: 5px;
  }
  li {
    /* transition: all 1s ease-out; */
    opacity: 0;
  }
  .icon {
    float: right;
    display: block;
    position: fixed;
    font-size: 30px;
    top: 4%;
    right: 5%;
  }
}
@media (max-width: 768px) {
  .sidebar.toggleView ul {
    /* border-top: 5px solid black; */
    transition: all 1s ease;
    display: block;
  }
  /* .sidebar.toggleView .icon {
    top: 18%;
    transition: none;
  } */
  .toggleView img {
    margin-bottom: 5%;
  }
  .sidebar.toggleView {
    max-height: 375px !important;
    /* transform: scaleY(1); */
  }
  .toggleView ul li {
    position: relative;
    display: block;
    text-align: center;
    opacity: 1;
    /* background-color: red; */
  }
}
</style>

