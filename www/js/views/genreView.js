define([
    'jquery',
    'underscore',
    'backbone',
    'models/song'
], function ($, _, Backbone, Song) {
    const GenreView = Backbone.View.extend({
        render: function () {
            this.$el.html("Genre View");

            return this;
        }
    });
        
        return GenreView;    
});