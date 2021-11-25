// Import from package require only package name
import { createApp } from "vue";

// Import file need to input direction
import App from "./App.vue";
import FriendContact from "./components/FriendContact.vue";

const app = createApp(App);
app.mount("#app");
app.component("friend-contact", FriendContact);
