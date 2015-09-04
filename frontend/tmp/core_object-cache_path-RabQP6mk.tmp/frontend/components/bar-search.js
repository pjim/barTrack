define('frontend/components/bar-search', ['exports', 'ember'], function (exports, Ember) {

        'use strict';

        exports['default'] = Ember['default'].Component.extend({
                actions: {
                        sendSearch: function sendSearch() {
                                console.log('sendsearch clicked');
                                $.getJSON('/yelp', function (data) {
                                        console.log(data);
                                        //this to be fixed up for accessing with adapter to the server
                                        //var yelpLocation = this.get('location')
                                        //this.store.query('yelp',yelpLocation);
                                });
                        }
                }
        });

});