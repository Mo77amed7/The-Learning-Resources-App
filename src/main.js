import { createApp } from "vue";
import App from "./App.vue";
import BasedCard from "./components/UI/BasedCard.vue";
createApp(App).component("BasedCard", BasedCard).mount("#app");
