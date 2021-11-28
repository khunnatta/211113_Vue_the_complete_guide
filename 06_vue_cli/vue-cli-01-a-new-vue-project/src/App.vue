<template>
    <header>
        <h1>My Friends</h1>
    </header>
    <new-friend @add-contact="addContact"></new-friend>
    <ul>
        <!-- In html (template) part use kebab case friend(friend-contact) -->
        <!-- friend-contact is Child of App -->
        <!-- <friend-contact
            id="manuel"
            name="Manuel"
            phone-number="0123 45678 90"
            email-address="manuel@mail.com"
            :is-favorite="true"
        ></friend-contact>
        <friend-contact
            id="manuel2"
            name="Manuel2"
            phone-number="0123 45678 90"
            email-address="manuel2@mail.com"
            :is-favorite="false"
        ></friend-contact> -->

        <!-- it can pass argument through custom element using "v-for" like this -->
        <!-- when using v-for ":key" is needed -->
        <friend-contact
            v-for="friend in friends"
            :key="friend.id"
            :id="friend.id"
            :name="friend.name"
            :phone-number="friend.phone"
            :email-address="friend.email"
            :is-favorite="friend.isFavorite"
            @favorite-toggle="toggleFavoriteStatus"
            @delete="deleteContact"
        ></friend-contact>
    </ul>
</template>

<script>
import FriendContact from "./components/FriendContact.vue";
import NewFriend from "./components/NewFriend.vue";
// tell javascript that this is the dafault export of this file
export default {
    // components: is object contain the component that called to use
    components: { FriendContact, NewFriend },
    data() {
        return {
            friends: [
                {
                    id: "manuel",
                    name: "Manuel",
                    phone: "0123 45678 90",
                    email: "manuel@mail.com",
                    isFavorite: true,
                },
                {
                    id: "manuel2",
                    name: "Manuel2",
                    phone: "0123 45678 90",
                    email: "manuel2@mail.com",
                    isFavorite: false,
                },
                {
                    id: "manuel3",
                    name: "Manuel3",
                    phone: "0123 45678 90",
                    email: "manuel3@mail.com",
                    isFavorite: true,
                },
            ],
        };
    },
    methods: {
        // "friendId" = "this.id" argument are link from this.$emit('favorite-toggle', this.id) in childcomponent
        toggleFavoriteStatus(friendId) {
            const identifiedFriend = this.friends.find(
                (friend) => friend.id === friendId
            );
            console.log(identifiedFriend.isFavorite);
            identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
        },
        addContact(name, phone, email) {
            const newFriendContact = {
                id: new Date().toISOString(),
                name: name,
                phone: phone,
                email: email,
                isFavorite: false,
            };
            // push into friends list in data part
            this.friends.push(newFriendContact);
        },
        deleteContact(friendId) {
            this.friends = this.friends.filter(
                (friend) => friend.id !== friendId
            ); // filter out the friendId in friends list
        },
    },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");

* {
    box-sizing: border-box;
}

html {
    font-family: "Jost", sans-serif;
}

body {
    margin: 0;
}

header {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 3rem auto;
    border-radius: 10px;
    padding: 1rem;
    background-color: #58004d;
    color: white;
    text-align: center;
    width: 90%;
    max-width: 40rem;
}

#app ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

#app li,
#app form {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 1rem auto;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    width: 90%;
    max-width: 40rem;
}

#app h2 {
    font-size: 2rem;
    border-bottom: 4px solid #ccc;
    color: #58004d;
    margin: 0 0 1rem 0;
}

#app button {
    font: inherit;
    cursor: pointer;
    border: 1px solid #ff0077;
    background-color: #ff0077;
    color: white;
    padding: 0.05rem 1rem;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
    background-color: #ec3169;
    border-color: #ec3169;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app input {
    font: inherit;
    padding: 0.15rem;
}
#app label {
    font-weight: bold;
    margin-right: 1rem;
    width: 7rem;
    display: inline-block;
}
#app form div {
    margin: 1rem 0;
}
</style>
