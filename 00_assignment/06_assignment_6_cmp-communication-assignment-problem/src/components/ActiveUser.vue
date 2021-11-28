<template>
    <section>
        <h1>Active User</h1>
        <section v-for="user in userLists" :key="user.id">
            <p>
                <b>ID:</b> {{ user.id }} <b>Username:</b> {{ user.userName }}
                <b>Age:</b>
                {{ user.userAge }}
            </p>
        </section>
    </section>
</template>

<script>
export default {
    props: ["userLists"],
};
</script>

<style>
span {
    display: inline-block;
}
</style>
