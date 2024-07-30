import { createRouter, createWebHistory } from "vue-router";
import Home from "../Pages/Home.vue";

const routes = [
  {
    component: Home,
    name: "Home",
    path: "/",
  },
  {
    component: () => import("../Pages/Conversions.vue"),
    name: "Conversions",
    path: "/conversions",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
