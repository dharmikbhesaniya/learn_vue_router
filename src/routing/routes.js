import { createWebHashHistory, createRouter } from "vue-router";
import home from "./home.vue";

// this file marge in main.js file

const routes = [
    {
        name: "home",
        path: "/",
        component: home,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router;
