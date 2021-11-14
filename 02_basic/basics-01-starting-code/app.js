// vue will control and element by passing object through this function
const app = vue.createApp({
    /*data: function {} */ // the full version
    data() {
        return{
            courseGoal: 'Finish the course & learn Vue!'
        };
    } // the short hand, will return only object
}); 

/*
app.mount() is used to link vue to html element link
Element that link by vue, 
the child element will be controlled by vue as well
*/ 
app.mount('#user-goal'); // link will app to section id=user-goal (css selector)