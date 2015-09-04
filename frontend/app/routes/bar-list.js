import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
       return [] ;
	},
	actions:{
		sendSearch:function(){
        		console.log('sendsearch clicked');
                var barsearch = $('#bsear').val();
                console.log(barsearch);
                var yelpReq = '/yelp?location=' + barsearch;
        		var that = this;
                that.refresh();
        		$.getJSON(yelpReq,function(data){
        			console.log(data);
                            			data.forEach(function(val){
        				        			that.modelFor('bar-list').pushObject(val);

        			})
        			//this to be fixed up for accessing with adapter to the server
        			//var yelpLocation = this.get('location')
        			//this.store.query('yelp',yelpLocation);

        		});
		}
    }
});
