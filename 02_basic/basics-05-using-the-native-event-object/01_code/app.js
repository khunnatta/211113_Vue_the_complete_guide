// Everything in Vue.createApp is called "Properties"

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      fullname: "",
    };
  },

  // In watch we can use the same name as in data
  watch: {
    // This mean name() will execute when there is a change in name variable
    // for function in watch it can use the value of variable as argument
    name(value) {
      console.log("Running in watcher");
      if (value === "") {
        this.fullname = "";
      } else {
        this.fullname = value + " " + "LastName";
      }
    },
  },

  // function inside computed properties will be used like data
  computed: {
    //computed will refresh only dependencies inside them is change in this case, it is this.name
    fullName() {
      console.log("Running in computed");
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "LastName";
    },
  },

  methods: {
    outputFullName() {
      console.log("Running in methods");
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "LastName";
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    /*
    resetInput() {
        document.querySelector('input').value = '';
    } 
    */
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
