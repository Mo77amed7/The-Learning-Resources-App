import { createApp } from "vue";
import App from "./App.vue";
import BasedCard from "./components/UI/BasedCard.vue";
import BasedButton from "./components/UI/BasedButton.vue";
const app = createApp(App);
app.component("BasedCard", BasedCard);
app.component("BasedButton", BasedButton);
app.mount("#app");
