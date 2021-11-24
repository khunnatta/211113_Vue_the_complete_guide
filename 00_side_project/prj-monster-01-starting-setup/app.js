// this function will not be run in vue app, it is just vanilla Js
function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
    date() {
        return {
            monsterHealth: 100,
            playerHealth: 100,
        };
    },
    methods: {
        attackMonster() {
            const dmg = getRandomValue(5, 12);
            this.monsterHealth -= dmg;
            this.attackPlayer();
        },
        attackPlayer() {
            const dmg = getRandomValue(8, 15);
            this.playerHealth -= dmg;
        },
        specialAttackMonster() {
            dmg = Math.floor(Math.random() * (12 - 5)) + 5;
            this.monsterHealth = this.monsterHealth - dmg;
        },
        heal(hp) {
            this.playerHealth = this.playerHealth - hp;
        },
    },
});

app.mount("#game");
