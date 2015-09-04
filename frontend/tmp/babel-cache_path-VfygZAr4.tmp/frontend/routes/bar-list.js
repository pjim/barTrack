import Ember from 'ember';

export default Ember.Route.extend({
      model: function model() {
            return [];
      },
      actions: {
            sendSearch: function sendSearch() {
                  console.log('sendsearch clicked');
                  var that = this;
                  $.getJSON('/yelp', function (data) {
                        console.log(data);
                        data.forEach(function (val) {
                              that.modelFor('bar-list').pushObject(val);
                        });
                        //this to be fixed up for accessing with adapter to the server
                        //var yelpLocation = this.get('location')
                        //this.store.query('yelp',yelpLocation);
                  });
            }
      }
});