import Vue from "vue";
import VueRouter from "vue-router";
import Students from "../components/Students.vue";
import Faculties from "../components/Faculties.vue";
import Room from "../components/Room.vue";
import Teachers from "../components/Teachers.vue";
import About from "../components/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Studenti",
    component: Students
  },
  {
    path: "/profesori",
    name: "Profesori",
    component: Teachers
  },
  {
    path: "/sali",
    name: "Sali",
    component: Room
  },
  {
    path: "/facultati",
    name: "Facultati",
    component: Faculties
  },
  {
    path: "/despre",
    name: "Despre",
    component: About
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
