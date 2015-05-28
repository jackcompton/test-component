var React = require('react');
var TestUtils = React.addons.TestUtils;
var TestComponent = require('../lib/test-component.jsx');


describe("TestComponent", function() {
  var component;

  beforeEach(function() {
    component = TestUtils.renderIntoDocument(
      <TestComponent name="Jonh"/>
    );
  });

  it("should render", function() {
    expect(component.getDOMNode().className).toEqual('test-component');
  });
});
