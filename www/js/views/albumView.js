define([
    'jquery',
    'underscore',
    'backbone',
    'models/song'
], function ($, _, Backbone, Song) {
    const AlbumView = Backbone.View.extend({
        render: function () {
            this.$el.html("Albums view");
    
            return this;
        }
    });

        return AlbumView;
    
        
})
