const app = Vue.createApp({
    data() {
        return {
            result: 0,
        }
    },
    methods: {
        add5() {
            this.result += 5;
            console.log(this.result);
        },
        add1() {
            this.result += 1;
        }
    },
    computed: {
        showResult() {
            if (this.result < 37) {
                return "Not there yet";
            }
            else if (this.result > 37) {
                return "Too much!";
            }
        }
    },
    watch: {
        result(value) {
            const that = this;
            setTimeout(function () {
                that.result = 0;
            }, 5000);

        }
    }
})

app.mount('#assignment')