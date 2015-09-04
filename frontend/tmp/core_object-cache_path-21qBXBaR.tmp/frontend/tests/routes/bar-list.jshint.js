define('frontend/tests/routes/bar-list.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/bar-list.js should pass jshint', function(assert) { 
    assert.ok(false, 'routes/bar-list.js should pass jshint.\nroutes/bar-list.js: line 16, col 23, Missing semicolon.\nroutes/bar-list.js: line 11, col 17, \'$\' is not defined.\n\n2 errors'); 
  });

});