define([
	"jquery",
	"backbone",
	"handlebars",
	"views/watchlist_item.view",
	"text!templates/watchlist.html",
	],function(
		$,
		Backbone,
		Handlebars,
		WatchlistItemView,
		html
		){

		var View = Backbone.View.extend({

			template: Handlebars.compile(html),

			initialize: function(options){
				var self = this;

					this.render().afterRender();

				app.vent.on('MOVIE_ADDED', function(movie){
					console.log(self.collection);
					self.collection.add(movie);
					console.log(movie);
				});

				this.listenTo(this.collection, 'add', function(movie){
					self.renderWatchlist(movie);
					console.log(self.collection);
				});


			},
			render: function(){
				var view = this.$el.html(this.template);
				return this;
			},
			afterRender:function(){
				this.collection.each(this.renderWatchlist, this);

				return this;
			},
			renderWatchlist: function(movie){
				var item  = new WatchlistItemView({model:movie});

				this.$el.find('#watchlist').append(item.render().el);
			}

		});

	return View;

});