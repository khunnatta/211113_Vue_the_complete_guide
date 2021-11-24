const app = Vue.createApp({
    data() {
        return {
            inputTask: "",
            taskLists: [],
            show: true,
        };
    },
    methods: {
        addTask() {
            this.taskLists.push(this.inputTask);
            this.inputTask = "";
            console.log(this.taskLists);
        },
        showList() {
            this.show = !this.show;
        },
    },
    computed: {
        changeHideShow() {
            if (this.show === true) {
                return "Hide List";
            } else {
                return "Show List";
            }
        },
    },
});

app.mount("#assignment");
