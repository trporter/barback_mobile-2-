var _jsxFileName = '/Users/Torri/Documents/programming/barback_mobile/src/cocktailscreen.js';

var _cocktails = require('./cocktails.js');

var _reactNative = require('react-native');

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _firebase = require('firebase');

var firebase = babelHelpers.interopRequireWildcard(_firebase);

var CocktailScreen = function (_Component) {
  babelHelpers.inherits(CocktailScreen, _Component);

  function CocktailScreen() {
    babelHelpers.classCallCheck(this, CocktailScreen);
    return babelHelpers.possibleConstructorReturn(this, (CocktailScreen.__proto__ || Object.getPrototypeOf(CocktailScreen)).apply(this, arguments));
  }

  babelHelpers.createClass(CocktailScreen, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var params = this.props.navigation.state.params;

      var back = function back() {
        _this2.props.navigation.goBack(null);
      };
      return _react2.default.createElement(
        _reactNative.View,
        { style: { paddingTop: 50 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        },
        _react2.default.createElement(
          _reactNative.Text,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            }
          },
          'Details on ',
          params.cocktailName
        ),
        _react2.default.createElement(
          _reactNative.Text,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            }
          },
          'Family'
        ),
        _react2.default.createElement(
          _reactNative.Text,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            }
          },
          params.cocktailType
        ),
        _react2.default.createElement(
          _reactNative.Text,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            }
          },
          'Ingredients'
        ),
        _react2.default.createElement(
          _reactNative.Text,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            }
          },
          params.cocktailIng
        ),
        _react2.default.createElement(
          _reactNative.Text,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            }
          },
          'Steps'
        ),
        _react2.default.createElement(
          _reactNative.Text,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            }
          },
          params.cocktailSteps
        ),
        _react2.default.createElement(_reactNative.Button, {
          onPress: back,
          title: 'back', __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        })
      );
    }
  }]);
  return CocktailScreen;
}(_react.Component);

CocktailScreen.navigationOptions = function (_ref) {
  var navigation = _ref.navigation;
  var state = navigation.state,
      setParams = navigation.setParams;

  var isInfo = state.params.mode === 'info';
  var cocktailName = state.params.cocktailName;
  var cocktailType = state.params.cocktailType;
  var cocktailIng = state.params.cocktailIng;
  var cocktailSteps = state.params.cocktailSteps;

  return {
    title: isInfo ? "Cocktail Info" : cocktailName
  };
};

module.exports = CocktailScreen;

_reactNative.AppRegistry.registerComponent('CocktailScreen', function () {
  return CocktailScreen;
});