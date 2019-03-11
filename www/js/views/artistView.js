define([
    'jquery',
    'underscore',
    'backbone',
    'models/song'
], function ($, _, Backbone, Song) {
    const ArtistView = Backbone.View.extend({
        render: function () {
            this.$el.html("<li>Artist list</li>");
            return this;
        }
    });
        
    return ArtistView;
})

