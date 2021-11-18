// Everything in Vue.createApp is called "Properties"

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastname: "",
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
        this.fullname = value + " " + this.lastname;
      }
    },
    lastname(value) {
      console.log("Running in lastname");
      if (value === "") {
        this.fullname = this.name;
      } else {
        this.fullname = this.name + " " + value;
      }
    },
    // set counter to zero if it over 50
    // watch can used with timer & http request
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
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
      this.lastname = "";
    },
  },
});

app.mount("#events");
