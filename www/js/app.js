
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.
//BACKBONE Collections

define([
    'jquery',
    'underscore',
    'backbone',
    'models/song',
    'views/albumView',
    'views/artistView',
    'views/genreView'
], function ($, _, Backbone, Song, AlbumView, ArtistView, GenreView) {
        initialize = function(){
            var AppRouter = Backbone.Router.extend({
                routes: {
                    "albums": "viewAlbum",
                    "artists": "viewArtists",
                    "genres": "viewGenres",
                    "*other": "defaultroute"
                },
            
                viewAlbum: function () {
                    view = new AlbumView({ el: "#container" });
                    view.render();
                },
            
                viewArtists: function () {
                    view = new ArtistView({ el: "#container" });
                    view.render();
                },
            
                viewGenres: function () {
                    view = new GenreView({ el: "#container" });
                    view.render();
                },
            
                defaultroute: function () {
                    
                }
            });
            
            
            const router = new AppRouter();
            Backbone.history.start();
            
            const NavView = Backbone.View.extend({
                events: {
                    "click": "onClick"
                },
            
                onClick: function (e) {
                    $li = $(e.target);
                    console.log(e.target);
                    router.navigate($li.attr("data-url"), {trigger : true});
                }
            })
            
            navView = new NavView({ el: "#nav" })
        }

        return {
            initialize: initialize
        }

    
});




