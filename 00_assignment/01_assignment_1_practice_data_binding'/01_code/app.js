const app = Vue.createApp({
    data() {
        return {
            name: 'Natta',
            age: 25,
            image: 'https://s.isanook.com/mv/0/rp/rc/w850h510/yatxacm1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL212LzAvdWQvMjIvMTEwMjI1LzExMDIyNS10aHVtYm5haWwuanBn.jpg',
        };
    },
    methods: {
        agePlus(age) {
            return age + 5;
        },
        randomNum() {
            return Math.random() * (1 - 0) + 0;
        }
    }
});

app.mount('#assignment')