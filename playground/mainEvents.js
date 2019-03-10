
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
        this.$el.attr("id",this.model.id);

        return this;
    },
    attributes:{
        "data-genre":"jazz"
    }
});

const SongsView = Backbone.View.extend({
    tagName: "ul",

    initialize: function(){
        this.model.on('add', this.onSongAdded, this);
        this.model.on('remove', this.onSongRemove, this);
    },

    onSongAdded: function(song){
        const songView = new SongView({ model: song});
        this.$el.append(songView.render().$el);
    },

    onSongRemove: function(song){
        this.$el.find("li#" + song.id).remove();
    },

    render: function() {
        const self = this;
        this.model.each(function(song){
            const songView = new SongView({ model: song})
            self.$el.append(songView.render().$el);
        });

        return self;
    }

   
    
})

const songs = new Songs([
    new Song({id: 1,title:"Michelle", artist:"Beetles"}),
    new Song({id: 2,title:"Bright Eyes", artist:"Simon & Garfuncal"})
])
const songsView = new SongsView({ el: "#songs", model: songs });

songsView.render();


