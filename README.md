# test component

Get the AMD module located at `test-component.js` and include it in your project.

Here is a sample integration:

```js
require.config({
  paths: {
    'react': 'vendor/bower_components/react/react',
    'TestComponent': 'test-component'
  }
});

require(['react', 'TestComponent'], function(React, TestComponent) {

  React.render(React.createElement(TestComponent), document.getElementById('widget-container'));

});
```

## Development

* Development server `npm run dev`.
* Continuously run tests on file changes `npm run watch-test`;
* Run tests: `npm test`;
* Build `npm run build`;
