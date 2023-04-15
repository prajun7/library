'use strict';

define("untitled-folder/tests/test-helper", ["untitled-folder/app", "untitled-folder/config/environment", "qunit", "@ember/test-helpers", "qunit-dom", "ember-qunit"], function (_app, _environment, QUnit, _testHelpers, _qunitDom, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"untitled-folder/app",0,"untitled-folder/config/environment",0,"qunit",0,"@ember/test-helpers",0,"qunit-dom",0,"ember-qunit"eaimeta@70e063a35619d71f
  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _qunitDom.setup)(QUnit.assert);
  (0, _emberQunit.start)();
});
define("untitled-folder/tests/unit/routes/index-test", ["qunit", "untitled-folder/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"untitled-folder/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define("untitled-folder/tests/unit/routes/not-found-route-test", ["qunit", "untitled-folder/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"untitled-folder/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Route | not-found-route', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:not-found-route');
      assert.ok(route);
    });
  });
});
define("untitled-folder/tests/unit/routes/not-found-test", ["qunit", "untitled-folder/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"untitled-folder/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Route | not-found', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:not-found');
      assert.ok(route);
    });
  });
});
define('untitled-folder/config/environment', [], function() {
  var prefix = 'untitled-folder';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('untitled-folder/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
