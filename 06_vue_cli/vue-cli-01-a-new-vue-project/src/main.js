// Import from package require only package name
import { createApp } from "vue";

// Import file need to input direction
import App from "./App.vue";
import FriendContact from "./components/FriendContact.vue";
import addFriend from "./components/NewFriend.vue";

const app = createApp(App);
app.mount("#app");

// this part is to mount component to app
//.component([name that will use in html], [name that will use in JavaScript])
app.component("friend-contact", FriendContact);
app.component("add-friend", addFriend);
