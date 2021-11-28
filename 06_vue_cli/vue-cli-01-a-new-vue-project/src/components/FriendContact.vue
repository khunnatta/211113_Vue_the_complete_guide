<template>
    <li>
        <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "()" }}</h2>
        <button @click="favoriteToggle">Set Favorite</button>
        <button @click="detailToggle">
            {{ detailVisible ? "Hide" : "Show" }} Details
        </button>
        <ul v-if="detailVisible">
            <li><strong>Phone: </strong> {{ phoneNumber }}</li>
            <li><strong>e-mail: </strong> {{ emailAddress }}</li>
        </ul>
        <button @click="deleteContact()">Delete Contact</button>
        <!-- Remember! we can both point to method or use javascript in v-on -->
        <button @click="this.$emit('delete', id)">Delete Contact</button>
    </li>
</template>

<script>
export default {
    //props is use to get attribute from it html element
    // Props in JavaScript part need to be camel case.
    // props: ["id", "name", "phoneNumber", "emailAddress", "isFavorite"],

    // props can be input as object
    props: {
        id: {
            type: String,
            required: true,
        },
        // data in props can specified the type and requirement
        name: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
        },
        emailAddress: {
            type: String,
            required: true,
        },
        isFavorite: {
            type: Boolean,
            required: true,
            default: false, //default can be function
            // validator: function (value) {
            //     return value === "1" || value === "0";
            // }, //Validator is the function that will return True/False
            // // Strict only 1 or 0 can be input
        },
    },

    emits: ["favorite-toggle", "delete"],
    // this part is not the emitting part, it just help define that there is emitting in this components.
    // emits: {
    //     "favorite-toggle": function (id) {
    //         if (id) {
    //             return true;
    //         } else {
    //             console.warn("ID is missing");
    //             return false;
    //         }
    //     },
    //     "delete-friend":
    // },

    data() {
        return {
            detailVisible: false,
            // it can not directly change the data in parent so set parent data into dummy data is possible
            favoriteFriend: this.isFavorite,
        };
    },
    methods: {
        detailToggle() {
            this.detailVisible = !this.detailVisible;
        },

        // to send data back from child components to parent it is need "$emit"
        favoriteToggle() {
            // this.favoriteFriend = !this.favoriteFriend;
            this.$emit("favorite-toggle", this.id);
        },
        deleteContact() {
            this.$emit("delete", this.id);
        },
    },
};
</script>
