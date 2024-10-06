import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import store from "./store/index";

import { createRouter, createWebHistory } from "vue-router";
import Login from "./components/Login.vue";
import Todo from "./components/Todo.vue";
import Page404 from "./components/Page404.vue";
import Register from "./components/Register.vue";

const routes = [
  { path: "/", component: Login },
  { path: "/login", component: Login },
  { path: "/todo", component: Todo },
  // { path: "*", component: Page404 },
  // { path: "/register", component: Register },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
