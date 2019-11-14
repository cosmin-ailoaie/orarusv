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
  <div class="sidebar" v-bind:class="{responsive:toggleMenu}">
    <img src="../assets/usv_logo.png" />
    <a v-on:click="toggle" class="icon">
      <i class="fa fa-bars"></i>
    </a>
    <ul>
      <li
        v-for="(option) in getOptions"
        :key="option.id"
        v-on:click="selectOption(option.id)"
      >{{option.title}}</li>
      <li class="selected">Test selected</li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["getOptions"]),
  data() {
    return {
      toggleMenu: false
    };
  },
  methods: {
    ...mapActions(["setSelectedOption"]),
    selectOption(id) {
      this.setSelectedOption(id);
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
  position: fixed;
  width: 270px;
  height: 100%;
  background-color: rgb(19, 63, 138);
  /* background-color: #; */
  padding: 20px 0;
  justify-content: initial;
}
ul li {
  display: block;
  /* margin: 10px; */
  height: 50px;
  line-height: 50px;
  text-align: center;
  text-justify: auto;
  /* border: 2px solid black; */
  color: white;
  cursor: pointer;
}
ul li:hover {
  background-color: rgb(3, 47, 122);
}
.selected {
  background-color: rgb(24, 73, 161);
}
.icon {
  display: none;
}
@media screen and (max-width: 768px) {
  .sidebar {
    height: 15% !important;
    width: 100% !important;
  }
  ul li {
    display: none;
  }
  .icon {
    float: right;
    display: block;
    position: absolute;
    font-size: 30px;
    top: 30%;
    right: 5%;
  }
}
@media screen and (max-width: 768px) {
  /* .sidebar.responsive {
    position: relative;
    height: 100%;
  } */
  .responsive ul li {
    position: relative;
    float: none;
    display: block;
    text-align: left;
    /* background-color: red; */
  }
}
</style>

