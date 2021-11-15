const app_assignment = Vue.createApp({
    data() {
        return {
            name: "Iuri Freire",
            birthdate: new Date(1982, 08, 14),
            dateNow: new Date(Date.now()),
            imglink: "https://images.freeimages.com/images/small-previews/f37/cloudy-scotland-1392088.jpg"
        };
    },
    methods: {
        outputName() {
            return this.name;
        },

        outputAge() {
            var year = this.dateNow.getYear();
            var month = this.dateNow.getMonth();
            var day = this.dateNow.getDay();

            var yearBirth = this.birthdate.getYear();
            var monthBirth = this.birthdate.getMonth();
            var dayBirth = this.birthdate.getDay();

            var age = year - yearBirth;

            if (month < monthBirth || (month == monthBirth && day < dayBirth)) {
                age--;
            }

            return age;
        },

        outputAgePlusFive() {
            return this.outputAge() + 5;
        },

        outputFavoriteNumber() {
            return Math.random();
        }
    }
});

app_assignment.mount('#assignment');