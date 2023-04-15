import { module, test } from 'qunit';
import { setupTest } from 'untitled-folder/tests/helpers';

module('Unit | Route | not-found-route', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:not-found-route');
    assert.ok(route);
  });
});
