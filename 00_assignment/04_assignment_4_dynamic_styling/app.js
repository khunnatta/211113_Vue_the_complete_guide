const app = Vue.createApp({
  data() {
    return {
        inputText1:"",
        inputText2:"",
        toggleHide: false,
    };
  },
  methods: {
    toggleStyle() {
      console.log(this.toggleHide)
      this.toggleHide = !this.toggleHide;
    }
  },
});

app.mount("#assignment");
