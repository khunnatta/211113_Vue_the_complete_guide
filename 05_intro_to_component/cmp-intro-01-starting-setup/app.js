const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: "manuel",
                    name: "Manuel",
                    phone: "1234 5678",
                    email: "manuel@mail.com",
                },
                {
                    id: "manuel",
                    name: "Manuel",
                    phone: "1234 5678",
                    email: "manuel@mail.com",
                },
            ],
        };
    },
});

// .component method tell Vue that we want to create component
// component need identifier and use like HTML tag
// rule for component identifier is to use multiple word because original Html will use only single word
app.component("friend-contact", {
    template: `
    <li>
        <h2>{{ friend.name }}</h2>
            <button @click="detailToggle">
                {{ detailVisible ? 'Hide':'Show' }} Details
            </button>
        <ul v-if="detailVisible">
            <li><strong>Phone:</strong> 01234 5678 991</li>
            <li><strong>Email:</strong> manuel@localhost.com</li>
        </ul>
    </li>
    `,
    data() {
        return {
            detailVisible: false,
            friend: {
                id: "manuel",
                name: "Manuel",
                phone: "1234 5678",
                email: "manuel@mail.com",
            },
        };
    },
    methods: {
        detailToggle() {
            this.detailVisible = !this.detailVisible;
        },
    },
});

app.mount("#app");
