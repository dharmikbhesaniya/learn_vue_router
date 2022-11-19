import { createWebHashHistory, createRouter } from "vue-router";
import home from "./components/home.vue";
import login from "./components/login.vue";
import profile from "./components/profile.vue";
import pagenotfound from "./components/404/pagenotfound.vue";

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
        path: "/profile/:name",
        component: profile,
    },
    {
        name: "notfound",
        path: "/:pathMatch(.*)*",
        component: pagenotfound,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router;
