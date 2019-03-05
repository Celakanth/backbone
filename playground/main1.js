// BACKBONE Models 
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

/*
Backbone functions are
get to get an attribute
set to set an attribute
clear to remove all attribute
unset to remove an attribute
haz to check if the attribute exists
*/

//Setting default values
// const Song = Backbone.Model.extend({
//     defaults:{
//         genre:"jazz"
//     }
// });

//Validating attributes
// const Song = Backbone.Model.extend({
//     validate: function (attrs) {
//         if(!attrs.title){
//             return "A title is required";
//         }
//     }
// })

// const song = new Song({
//     artist:"Me",
//     yearPublished:1975
// });

// console.log(song.validate());
// console.log(song.validationError);
//---------------------------------------------------//

const Vehicle = Backbone.Model.extend({
    urlRoot: "/api/songs",
    validate: function(attrs){
        if(!attrs.registrationNumber){
            return "A vehicle must have a registration number";
        }
    },
    start: function() {
        console.log("The vehicle has started")
    }
    
});

const vehicle = new Vehicle({registrationNumber:"EJ11GPX", make:"Ford", model:"Fiesta", year:2011})

const Car = Vehicle.extend({
    start: function() {
        console.log("The car has started");
    }
});

const car = new Car();

