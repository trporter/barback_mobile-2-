Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/Torri/Documents/programming/barback_mobile/node_modules/react-navigation/src/views/TabView/TabBarIcon.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var TabBarIcon = function (_PureComponent) {
  babelHelpers.inherits(TabBarIcon, _PureComponent);

  function TabBarIcon() {
    babelHelpers.classCallCheck(this, TabBarIcon);
    return babelHelpers.possibleConstructorReturn(this, (TabBarIcon.__proto__ || Object.getPrototypeOf(TabBarIcon)).apply(this, arguments));
  }

  babelHelpers.createClass(TabBarIcon, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          position = _props.position,
          scene = _props.scene,
          navigation = _props.navigation,
          activeTintColor = _props.activeTintColor,
          inactiveTintColor = _props.inactiveTintColor,
          style = _props.style;
      var route = scene.route,
          index = scene.index;
      var routes = navigation.state.routes;

      var inputRange = [-1].concat(babelHelpers.toConsumableArray(routes.map(function (x, i) {
        return i;
      })));
      var activeOpacity = position.interpolate({
        inputRange: inputRange,
        outputRange: inputRange.map(function (i) {
          return i === index ? 1 : 0;
        })
      });
      var inactiveOpacity = position.interpolate({
        inputRange: inputRange,
        outputRange: inputRange.map(function (i) {
          return i === index ? 0 : 1;
        })
      });

      return _react2.default.createElement(
        _reactNative.View,
        { style: style, __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        },
        _react2.default.createElement(
          _reactNative.Animated.View,
          { style: [styles.icon, { opacity: activeOpacity }], __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            }
          },
          this.props.renderIcon({
            route: route,
            index: index,
            focused: true,
            tintColor: activeTintColor
          })
        ),
        _react2.default.createElement(
          _reactNative.Animated.View,
          { style: [styles.icon, { opacity: inactiveOpacity }], __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            }
          },
          this.props.renderIcon({
            route: route,
            index: index,
            focused: false,
            tintColor: inactiveTintColor
          })
        )
      );
    }
  }]);
  return TabBarIcon;
}(_react.PureComponent);

exports.default = TabBarIcon;


var styles = _reactNative.StyleSheet.create({
  icon: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});