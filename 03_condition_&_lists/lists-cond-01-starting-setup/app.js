const app = Vue.createApp({
    data() {
        return {
            enteredGoalValue: "",
            goals: [],
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredGoalValue);
            this.enteredGoalValue = "";
            console.log(this.goals);
        },
        removeGoal(idx) {
            // find element at the index & remove it from goals arrays
            this.goals.splice(idx, 1)
        }
    },
});

app.mount("#user-goals");
