// vue will control and element by passing object through this function
// In createApp data is function & methods is object (dict)
const app = Vue.createApp({
    /*data: function {} */ // the full version
    data() {
        return{
            courseGoal: 'Not from function',
            courseGoalA: 'Finish the course & learn Vue!',
            courseGoalB: 'Master Vue!!!!!',
            courseGoalHTML: '<h2>This is h2 tag from vue function</h2>',
            vueLink: 'https://www.google.com/'
        };
    }, // the short hand, will return only object
    methods: { //method is use to set function to run by some command
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    },
}); 

/*app.mount() is used to link vue to html element link
Element that link by vue, 
the child element will be controlled by vue as well
*/ 
app.mount('#user-goal'); // link will app to section id=user-goal (css selector)