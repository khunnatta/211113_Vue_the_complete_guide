<template>
    <section>
        <form>
            <div>
                <label>Name</label>
                <!-- using "ref" instead of "v-model" because "ref" will
                collect the data from input only when pressed submit
                but "v-model" will collect every key stroke -->
                <input type="text" ref="enteredName" />
            </div>
            <div>
                <label>Phone Number</label>
                <input type="tel" ref="enteredPhone" />
            </div>
            <div>
                <label>e-mail</label>
                <input type="email" ref="enteredEmail" />
            </div>
            <div>
                <!-- using .prevent modifier to prevent page reload on submit button -->
                <!-- FYI, default of button in form is submit -->
                <button @click.prevent="addContact">Add Contact</button>
            </div>
        </form>
    </section>
</template>

<script>
export default {
    // emit: is use to declare what we want to emit from this component
    // "add-contact" will be use as argument in App.js as well
    emits: ["add-contact"],
    data() {
        return {
            name: "",
            phoneNumber: "",
            emailAddress: "",
        };
    },
    methods: {
        addContact() {
            this.name = this.$refs.enteredName.value;
            this.phoneNumber = this.$refs.enteredPhone.value;
            this.emailAddress = this.$refs.enteredEmail.value;

            this.$emit(
                "add-contact", // add-contact in this part mean, we declare that, this will send as "add-contact"
                this.name,
                this.phoneNumber,
                this.emailAddress,
            );
        },
    },
};
</script>
