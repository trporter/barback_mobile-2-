
'use strict';

var _jsxFileName = '/Users/Torri/Documents/programming/barback_mobile/node_modules/react-native/Libraries/Components/TabBarIOS/TabBarIOS.ios.js';
var ColorPropType = require('ColorPropType');
var React = require('React');
var StyleSheet = require('StyleSheet');
var TabBarItemIOS = require('TabBarItemIOS');
var ViewPropTypes = require('ViewPropTypes');

var requireNativeComponent = require('requireNativeComponent');

var TabBarIOS = function (_React$Component) {
  babelHelpers.inherits(TabBarIOS, _React$Component);

  function TabBarIOS() {
    babelHelpers.classCallCheck(this, TabBarIOS);
    return babelHelpers.possibleConstructorReturn(this, (TabBarIOS.__proto__ || Object.getPrototypeOf(TabBarIOS)).apply(this, arguments));
  }

  babelHelpers.createClass(TabBarIOS, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        RCTTabBar,
        {
          style: [styles.tabGroup, this.props.style],
          unselectedTintColor: this.props.unselectedTintColor,
          unselectedItemTintColor: this.props.unselectedItemTintColor,
          tintColor: this.props.tintColor,
          barTintColor: this.props.barTintColor,
          itemPositioning: this.props.itemPositioning,
          translucent: this.props.translucent !== false, __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          }
        },
        this.props.children
      );
    }
  }]);
  return TabBarIOS;
}(React.Component);

TabBarIOS.Item = TabBarItemIOS;
TabBarIOS.propTypes = babelHelpers.extends({}, ViewPropTypes, {
  style: ViewPropTypes.style,

  unselectedTintColor: ColorPropType,

  tintColor: ColorPropType,

  unselectedItemTintColor: ColorPropType,

  barTintColor: ColorPropType,

  translucent: React.PropTypes.bool,

  itemPositioning: React.PropTypes.oneOf(['fill', 'center', 'auto'])
});


var styles = StyleSheet.create({
  tabGroup: {
    flex: 1
  }
});

var RCTTabBar = requireNativeComponent('RCTTabBar', TabBarIOS);

module.exports = TabBarIOS;