const app = Vue.createApp({
  data() {
    return {
      alertText: "This is alert!!!",
      outputTextA: "",
      outputTextB: "",
    };
  },
  methods: {
    clickAlert() {
      alert(this.alertText);
    },
    getInputA(event) {
      this.outputTextA = event.target.value;
    },
    getInputB(event) {
      this.outputTextB = event.target.value;
    },
  },
});

app.mount("#assignment");
