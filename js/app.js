(function($){
	
	//The model
	var Food = Backbone.Model.extend({
		defaults: {
			"item_name": "",
			"brand_name": "",
			"nf_calories": -1,
			"nf_total_fat": -1
		}
	});
	
	//The collection
	var TodaysFoods = Backbone.Collection.extend({
		model: Food
		//localStorage: new Backbone.LocalStorage('food-store')
	});
	
	var foods = new TodaysFoods(); //initialize everything
	
	var Banana = new Food({
		name: 'Banana',
		calories: 105,
		carbs: 27
	});
	var Apple = new Food({
		name: 'Apple',
		calories: 95,
		carbs: 25
	});
	
	//The view
	var ListView = Backbone.View.extend({
		//The DOM elem we bind this.el to - can be any valid CSS selector
		el: $('.dark-blue'),
		
		events: {
			'click img#cupcake': 'addItem'
			//'click button#remove': 'removeItem'
		},
		
		//Called when our list view is created
		initialize: function(){
			this.render();
		},
		
		render:function() {
			$('#todays-food-list').append('<li>Apple</li>');
		},
		
		addItem: function() {
			$('#todays-food-list').append('<li>Another one</li>');
		},
		removeItem: function() {
			console.log('remove');
		}
	});
		
	//creates the list view for the app
	var list = new ListView();
})(jQuery);

	//console.log(DM.get('BP1'));
	//console.log(people.get(DM).get('weight'));
	//document.write(DM.get('name'));
	
	/*events: {
			'click button#add': 'addItem',
			'click button#remove': 'removeItem'
		},
	console.log(foods.get(Apple).get('name'));
	console.log(foods);
	
	//Banana.set('Banana', 110, 28);*/