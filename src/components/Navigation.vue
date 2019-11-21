<template>
  <div class="sidebar" v-bind:class="{responsive:toggleMenu}">
    <img />
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
  content: url("../assets/usv_logo_full.png");
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30%;
  padding-top: 20px;
}
.icon {
  display: none;
}
@media (max-width: 992px) {
  img {
    content: url("../assets/usv_logo_mini.png");
    padding-top: 20px;
  }
}
@media (max-width: 768px) {
  img {
    content: url("../assets/usv_logo_full.png");
    padding: 20px 0 20px 0;
  }
  ul {
    /* transition: all 1s ease-out; */
    display: none;
    background-color: rgb(19, 63, 138);
  }
  .icon {
    float: right;
    display: block;
    position: fixed;
    font-size: 30px;
    top: 3%;
    right: 5%;
  }
}
@media (max-width: 768px) {
  .sidebar.responsive ul {
    /* border-top: 5px solid black; */
    /* transition: all 1s ease; */
    display: block;
    /* transition: all 1s ease-in; */
    background-color: rgb(19, 63, 138);
  }
  .responsive li:hover {
    background-color: rgb(24, 73, 161);
  }
  .responsive .selected {
    background-color: rgb(3, 47, 122);
  }
  .responsive img {
    margin-bottom: 0%;
  }
  .responsive .toggleView {
    /* max-height: 375px !important; */
    /* transform: scaleY(1); */
  }
  .responsive .toggleView ul li {
    display: block;
    text-align: center;
    opacity: 1;
    background-color: rgb(19, 63, 138);
  }
}
ul {
  position: relative;
}
ul li {
  display: block;
  height: 50px;
  line-height: 50px;
  text-align: center;
  text-justify: auto;
  color: white;
  cursor: pointer;
}
li:hover {
  background-color: rgb(24, 73, 161);
}
.selected {
  background-color: rgb(3, 47, 122);
}
</style>

