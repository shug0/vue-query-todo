import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/shops",
    name: "Shops",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Shops.vue"),
  },
  {
    path: "/shop/:id",
    name: "Shop Details",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ShopDetail.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
