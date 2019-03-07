
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.
//BACKBONE Collections
const Song = Backbone.Model.extend();

const Songs = Backbone.Collection.extend({
    model: Song
})


const SongView = Backbone.View.extend({
    //You can add html attributes here
    tagName: "li",
    events:{
        "click":"onClick",
        "click .bookmark": "onClickBookMark"
    },
    onClick: function() {
        console.log("Listen button click");
    },
    onClickBookMark: function(e) {
        e.stopPropagation();
        console.log('Bookmark clicked');
    },
    render:function(){
        this.$el.html("<p>" + this.model.get("title") + "&nbsp;<button>Listen</button>&nbsp<button class='bookmark'>Listen Bookmark</button></p>");

        return this;
    },
    attributes:{
        "data-genre":"jazz"
    }
});

const SongsView = Backbone.View.extend({
    render: function() {
        const self = this;
        this.model.each(function(song){
            const songView = new SongView({ model: song})
            self.$el.append(songView.render().$el);
        })    
    }
    
})

const songs = new Songs([
    new Song({title:"Michelle", artist:"Beetles"}),
    new Song({title:"Bright Eyes", artist:"Simon & Garfuncal"})
])
const songsView = new SongsView({ el: "#songs", model: songs });

songsView.render();


