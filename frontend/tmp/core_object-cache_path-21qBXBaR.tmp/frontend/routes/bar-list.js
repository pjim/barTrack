define('frontend/routes/bar-list', ['exports', 'ember'], function (exports, Ember) {

      'use strict';

      exports['default'] = Ember['default'].Route.extend({
            model: function model() {
                  return [];
            },
            actions: {
                  sendSearch: function sendSearch() {
                        console.log('sendsearch clicked');
                        var barsearch = $('#bsear').val();
                        console.log(barsearch);
                        var yelpReq = '/yelp?' + barsearch;
                        var that = this;
                        $.getJSON(yelpReq, function (data) {
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

});