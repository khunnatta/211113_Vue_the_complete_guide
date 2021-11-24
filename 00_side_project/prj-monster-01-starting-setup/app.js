// this function will not be run in vue app, it is just vanilla Js
function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
    data() {
        return {
            monsterHealth: 100,
            playerHealth: 100,
            roundCount: 0,
            winner: null,
            logMessages: [],
        };
    },
    computed: {
        monsterBarStyles() {
            if (this.monsterHealth < 0) {
                return { width: "0%" };
            } else {
                return { width: this.monsterHealth + "%" };
            }
        },
        playerBarStyles() {
            if (this.playerHealth < 0) {
                return { width: "0%" };
            } else {
                return { width: this.playerHealth + "%" };
            }
        },
        useSpecialAttack() {
            console.log(this.roundCount);
            return this.roundCount % 3 !== 0;
        },
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = "Draw";
            } else if (value <= 0) {
                this.winner = "Monster";
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                this.winner = "Draw";
            } else if (value <= 0) {
                this.winner = "Player";
            }
        },
    },
    methods: {
        startGame() {
            (this.playerHealth = 100),
                (this.monsterHealth = 100),
                (this.winner = null),
                (this.logMessage = []);
        },
        attackMonster() {
            this.roundCount++;
            const dmg = getRandomValue(5, 12);
            this.monsterHealth -= dmg;
            this.addLogMessages("Player", "Attack", dmg);
            this.attackPlayer();
        },
        attackPlayer() {
            const dmg = getRandomValue(8, 15);
            this.playerHealth -= dmg;
            this.addLogMessages("Monster", "Attack", dmg);
        },
        specialAttackMonster() {
            this.roundCount++;
            const dmg = getRandomValue(10, 25);
            this.monsterHealth -= dmg;
            this.attackPlayer();
            this.addLogMessages("Player", "Special Attack", dmg);
        },
        healPlayer() {
            this.roundCount++;
            const healValue = getRandomValue(15, 25);
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }
            this.addLogMessages("Player", "Heal", healValue);
            this.attackPlayer();
        },
        surrender() {
            this.winner = "Monster";
        },
        addLogMessages(who, action, value) {
            // unshift is like push but will we append on the first of array
            this.logMessages.unshift({
                actionBy: who,
                actionType: action,
                actionValue: value,
            });
        },
    },
});

app.mount("#game");
