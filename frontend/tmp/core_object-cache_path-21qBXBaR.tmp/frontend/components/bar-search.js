define('frontend/components/bar-search', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend({

    actions: {
      sendSearch: function sendSearch() {
        this.sendAction('action');
      }
    }
  });
  //

});