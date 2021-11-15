const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    setNameA(event) {
      // event.target is vanilla Js to point the target to html element.
      // using event.target.value = get value from targeted html elements.
      this.name = event.target.value;
    },
    setNameB(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    submitForm(event) {
      //using event.preventDefault() is not to submit the form, it is vanilla Js event function
      event.preventDefault();
      alert("submit");
    },
    confirmInput(event) {
      this.confirmedName = event.target.value;
    },
  },
});

app.mount("#events");
