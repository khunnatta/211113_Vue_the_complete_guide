<template>
    <section>
        <h1>User list</h1>
        <div id="main">
            <user-data class="output" @add-user="addUser"></user-data>
            <active-user class="output" :user-lists="userLists"></active-user>
        </div>
    </section>
</template>

<script>
import ActiveUser from "./components/ActiveUser.vue";
import UserData from "./components/UserData.vue";
export default {
    components: { ActiveUser, UserData },
    data() {
        return {
            userLists: [],
            id: 1,
        };
    },
    methods: {
        addUser(username, age) {
            const user = {
                id: this.id,
                userName: username,
                userAge: age,
            };
            this.userLists.push(user);
            this.id ++
            console.log(this.userLists);
        },
    },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap");

* {
    font-family: "Roboto", sans-serif;
}

#main {
    display: flex;
}

.output {
    margin: 2em 2em;
}

section {
    border: solid #e5e5e5 2px;
    border-radius: 2em;
    box-shadow: 0.5em 0.5em 2em -0.5em #14213d;
    width: 50%;
    margin: 2em auto;
    text-align: center;
}
</style>
