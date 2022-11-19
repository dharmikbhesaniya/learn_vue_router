import { createApp } from "vue";
import App from "./App.vue";
import router from "./components/routing/routes.js";

createApp(App).use(router).mount("#app");
