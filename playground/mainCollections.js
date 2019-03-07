
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.
//BACKBONE Collections
const Song = Backbone.Model.extend();

const Songs = Backbone.Collection.extend({
    model: Song
});

var songs = new Songs([
    new Song({title:"Song 1"}),
    new Song({title:"Song 2"}),
    new Song({title:"Song 3"})
])
//add is owned by Underscore;
songs.add(new Song({title:"Song 4"}));

const firstSong = songs.at(0);
const songWithIdC1 = songs.get("c1")
songs.remove(firstSong);

songs.add(new Song({title:"Rader", genre:"Metal", downloads:110,}), {at:0});
songs.push({title:"At home", genre:"Classic", downloads:90});

const MetalSong = songs.where({genre:"Metal"}); //any and all objects
const Classic = songs.findWhere({genre:"Classic"}); //First instanse

console.log("The metal song is ", MetalSong);
console.log("Classic songs", Classic);

const topDownloads = songs.filter(function(song){
    return song.get("downloads") > 90;
});

console.log("The top downloads is", topDownloads);