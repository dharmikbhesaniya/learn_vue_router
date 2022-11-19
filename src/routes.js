import { createWebHashHistory, createRouter } from "vue-router";
import home from "./components/home.vue";
import login from "./components/login.vue";
import profile from "./components/profile.vue";

// this file marge in main.js file

const routes = [
    {
        name: "home",
        path: "/",
        component: home,
    },
    {
        name: "login",
        path: "/login",
        component: login,
    },
    {
        name: "profile",
        path: "/profile",
        component: profile,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router;
