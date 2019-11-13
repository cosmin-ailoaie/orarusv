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
        v-for="(option) in options"
        :key="option.id"
        v-on:click="selectSpec(option.id)"
      >{{option.title}}</li>
      <li class="selected">Test selected</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      values: 0,
      toggleMenu: false,
      options: [
        {
          id: 0,
          title: "Studenti"
        },
        {
          id: 1,
          title: "Profesori"
        },
        {
          id: 2,
          title: "Sali"
        },
        {
          id: 3,
          title: "Facultati"
        },
        {
          id: 4,
          title: "Despre"
        }
      ]
    };
  },
  methods: {
    selectSpec(value) {
      this.values = value;
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
  background-color: #4e86e6;
  /* background-color: #; */
  padding: 20px 0;
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
  background-color: #032f7a;
}
.selected {
  /* background-color: #1758c7; */
  background-color: #1d5ac5;
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

