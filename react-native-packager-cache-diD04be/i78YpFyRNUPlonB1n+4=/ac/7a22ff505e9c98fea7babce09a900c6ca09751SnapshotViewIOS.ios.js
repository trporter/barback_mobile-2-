
'use strict';

var _jsxFileName = '/Users/Torri/Documents/programming/barback_mobile/node_modules/react-native/Libraries/RCTTest/SnapshotViewIOS.ios.js';
var React = require('React');
var StyleSheet = require('StyleSheet');

var _require = require('NativeModules'),
    TestModule = _require.TestModule;

var UIManager = require('UIManager');
var View = require('View');

var ViewPropTypes = require('ViewPropTypes');

var requireNativeComponent = require('requireNativeComponent');

var SnapshotViewIOS = function (_React$Component) {
  babelHelpers.inherits(SnapshotViewIOS, _React$Component);

  function SnapshotViewIOS() {
    var _ref;

    var _temp, _this, _ret;

    babelHelpers.classCallCheck(this, SnapshotViewIOS);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = SnapshotViewIOS.__proto__ || Object.getPrototypeOf(SnapshotViewIOS)).call.apply(_ref, [this].concat(args))), _this), _this.onDefaultAction = function (event) {
      TestModule.verifySnapshot(TestModule.markTestPassed);
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  babelHelpers.createClass(SnapshotViewIOS, [{
    key: 'render',
    value: function render() {
      var testIdentifier = this.props.testIdentifier || 'test';
      var onSnapshotReady = this.props.onSnapshotReady || this.onDefaultAction;
      return React.createElement(RCTSnapshot, babelHelpers.extends({
        style: style.snapshot
      }, this.props, {
        onSnapshotReady: onSnapshotReady,
        testIdentifier: testIdentifier,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }));
    }
  }]);
  return SnapshotViewIOS;
}(React.Component);

SnapshotViewIOS.propTypes = babelHelpers.extends({}, ViewPropTypes, {
  onSnapshotReady: React.PropTypes.func,

  testIdentifier: React.PropTypes.string
});


var style = StyleSheet.create({
  snapshot: {
    flex: 1
  }
});

var RCTSnapshot = UIManager.RCTSnapshot ? requireNativeComponent('RCTSnapshot', SnapshotViewIOS) : View;

module.exports = SnapshotViewIOS;