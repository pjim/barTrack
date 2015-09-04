import Ember from 'ember';

export default Ember.Component.extend({
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