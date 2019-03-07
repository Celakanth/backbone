
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.
//BACKBONE Collections
const Vehicle = Backbone.Model.extend({
    validate: function(attrs){
        if(!attrs.registrationNumber){
            return "A vehicle must have a registration number";
        }
    },
    start: function() {
        console.log("The vehicle has started")
    }
    
});

const Vehicles = Backbone.Collection.extend({
    model:Vehicle
});

const vehicles = new Vehicles([
    new Vehicle({ registrationNumber:"XLI887", colour:"Blue" }),
    new Vehicle({ registrationNumber:"ZNP123", colour:"Blue" }),
    new Vehicle({ registrationNumber:"XUV456", colour:"Gray" })
]);
console.log(vehicles)

const allBlue = vehicles.where({colour:"Blue"})
console.log('All blue cars ', allBlue);

const CheckReg = vehicles.findWhere({registrationNumber:'XLI887'})
console.log('The car with registration XLI887 is ', CheckReg);

vehicles.remove(CheckReg);

console.log(vehicles.toJSON());

vehicles.forEach(function(vehicle){
    console.log(vehicle);
});

 const vehicle = new Vehicle({registrationNumber:"EJ11GPX", make:"Ford", model:"Fiesta", year:2011})

const Car = Vehicle.extend({
    start: function() {
        console.log("The car has started");
    }
});

// const car = new Car();


const car = new Car();

