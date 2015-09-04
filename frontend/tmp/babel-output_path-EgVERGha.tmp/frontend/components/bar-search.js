import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    sendSearch: function sendSearch() {
      this.sendAction('action');
    }
  }
});
//