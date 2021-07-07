import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import CharitysIndex from "../views/CharitysIndex.vue";
import CartedProductsIndex from "../views/CartedProductsIndex.vue";
import NewCartedProduct from "../views/NewCartedProduct.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  { path: "/signup", name: "Signup", component: Signup },
  { path: "/login", name: "Login", component: Login },
  { path: "/logout", name: "Logout", component: Logout },
  { path: "/charitysindex", name: "CharitysIndex", component: CharitysIndex },
  { path: "/cartedproductsindex", name: "CartedProductsIndex", component: CartedProductsIndex },
  { path: "/newcartedproduct", name: "NewCartedProduct", component: NewCartedProduct },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
