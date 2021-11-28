<template>
    <section>
        <h1>Input User Data</h1>
        <form>
            <div>
                <label for="username"> Username</label>
                <input id="username" type="text" ref="username"/>
            </div>
            <div>
                <label for="age"> Age </label>
                <input id="age" type="number" ref="age" />
            </div>
            <div>
                <button @click.prevent="addUser">
                    Submit User
                </button>
            </div>
        </form>
    </section>
</template>

<script>
export default {
    emits: ['add-user'],
    methods: {
        addUser() {
            this.$emit('add-user',
            this.$refs.username.value,
            this.$refs.age.value)

            this.$refs.username.value = ""
            this.$refs.age.value = ""
        }
    }
};
</script>

<style>
label {
    font-weight: bold;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    margin-right: 1rem;
    width: 7rem;
    display: inline-block;
}
input {
    display: inline-block;
}

button {
    margin-top: 0.5rem;
}
</style>
