
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.
//BACKBONE Collections
const person = {
    name: "Christian",

    walk: function(){
        this.trigger("walking",{
            speed:1,
            walkingTime:"08:00"
        });
    }
}

_.extend(person, Backbone.Events);

person.on("walking", function(e){
    console.log("The person is walking");
    console.log("Event args",e);
})

person.walk();