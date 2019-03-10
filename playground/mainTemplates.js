
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.
//BACKBONE Collections
const Song = Backbone.Model.extend();
const SongView = Backbone.View.extend({
    render: function(){
        const template = _.template($("#songTemplate").html());
        const html = template(this.model.toJSON());

        this.$el.html(html);

        return this;
    }
})
const song = new Song({title: "Red riding hood", plays:200});

const songView = new SongView({ el: "#container", model: song});

songView.render();

//HTML Below
/*
     <script id="songTemplate" type="text/html">
            <!--Stadard vale passing -->
            <%=title %>
            <button>Listen</button>
            <!--Conditional formatting-->
            <% if(plays > 100){ %>
                <span class="popular">Popular Song</span>
            <%}%>
        </script>
*/