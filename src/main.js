import { createApp } from "vue";
require("@/assets/css/style.css");
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).mount("#app");
