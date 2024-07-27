Ember Sinon Foodee
===========

This addon adds support for [Sinon](https://github.com/sinonjs/sinon) to assist in testing your Ember CLI app.


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-sinon
```


Usage
------------------------------------------------------------------------------

While in testing mode (i.e. either when visiting `/tests` or when running `ember test`), `sinon` will be available as an import.

```js
import sinon from 'sinon';

test(".runCallback() should run the callback passed", function(assert) {
  var spy = sinon.spy();
  this.subject().runCallback(spy);

  // Default Sinon messages:
  sinon.assert.calledOnce(spy);
  sinon.assert.calledWith(spy, 'foo');

  // Custom messages:
  assert.ok(spy.calledOnce, "the callback should be called once");
  assert.ok(spy.calledWith('foo'), "the callback should be passed 'foo' as an argument");
});
```

## Integration with testing frameworks

Check out [ember-sinon-qunit](https://github.com/elwayman02/ember-sinon-qunit) for integration with Ember-QUnit!

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
