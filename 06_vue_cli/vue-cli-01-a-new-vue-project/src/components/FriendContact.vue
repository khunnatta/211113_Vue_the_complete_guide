<template>
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="detailToggle">
            {{ detailVisible ? "Hide" : "Show" }} Details
        </button>
        <ul v-if="detailVisible">
            <li><strong>Phone: </strong> {{ friend.phone }}</li>
            <li><strong>e-mail: </strong> {{ friend.email }}</li>
        </ul>
    </li>
</template>

<script>
export default {
    data() {
        return {
            detailVisible: false,
            friend: {
                id: "manuel",
                name: "Manuel",
                phone: "0123 45678 90",
                email: "manuel@mail.com",
            },
        };
    },
    methods: {
        detailToggle() {
            this.detailVisible = !this.detailVisible;
        },
    },
};
</script>
