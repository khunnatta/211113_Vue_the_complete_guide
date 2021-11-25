const app = Vue.createApp({
    data() {
        return {
            currentUserInput: "",
            message: "Vue is great!",
        };
    },
    methods: {
        saveInput(event) {
            this.currentUserInput = event.target.value;
        },
        setText() {
            // this.message = this.currentUserInput;
            this.message = this.$refs.userText.value;
            // dir is use too see all the vanilla Js command in vue
            console.dir(this.$refs.userText);
        },
    },
});

const app2 = Vue.createApp({
  // Vue can intervene with html structure by using template
    template: `
    <h2>This is from app2 template: {{ hello }}</h2>
  `,
    data() {
        return {
            hello: "HelloWorld!",
        };
    },
});

app.mount("#app");
app2.mount("#app2");
